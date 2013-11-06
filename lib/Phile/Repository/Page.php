<?php

namespace Phile\Repository;
use Phile\Cache\CacheInterface;
use Phile\Exception;
use Phile\Registry;
use Phile\ServiceLocator;
use Phile\Utility;


/**
 * the Repository class for pages
 * @author Frank Nägler
 * @package Phile\Repository
 */
class Page {
	const ORDER_ASC   = 'asc';
	const ORDER_DESC  = 'desc';

	/**
	 * @var CacheInterface
	 */
	protected $cache = null;

	public function __construct() {
		if (ServiceLocator::hasService('Phile_Cache')) {
			$this->cache  = ServiceLocator::getService('Phile_Cache');
		}
	}

	/**
	 * find a page by path
	 *
	 * @param $path
	 * @return null|\Phile\Model\Page
	 */
	public function findByPath($path) {
		$path   = str_replace(Utility::getInstallPath(), '', $path);
		$file = null;
		if (file_exists(CONTENT_DIR . $path . CONTENT_EXT)) {
			$file = CONTENT_DIR . $path . CONTENT_EXT;
		}
		if ($file == null) {
			if (file_exists(CONTENT_DIR . $path . '/index' . CONTENT_EXT)) {
				$file = CONTENT_DIR . $path . '/index' . CONTENT_EXT;
			}
		}

		if ($file !== null) {
			return $this->getPage($file);
		}

		return null;
	}

	/**
	 * find all pages (*.md) files and returns an array of Page models
	 * @return array of \Phile\Model\Page objects
	 */
	public function findAll(array $options = null) {
		$dir        = new \RecursiveDirectoryIterator(CONTENT_DIR);
		$ite        = new \RecursiveIteratorIterator($dir);
		$files      = new \RegexIterator($ite, '/^.*\\'.CONTENT_EXT.'/', \RegexIterator::GET_MATCH);
		$pages      = array();
		foreach ($files as $file) {
			if (str_replace(CONTENT_DIR, '', $file[0]) == '404'.CONTENT_EXT) {
				// jump to next page if file is the 404 page
				continue;
			}
			$pages[]    = $this->getPage($file[0]);
		}

		if ($options !== null && isset($options['pages_order_by'])) {
			switch (strtolower($options['pages_order_by'])) {
				case 'date':
					error_log('the key date for sorting is deprecated');
					$date_id = 0;
					$sorted_pages = array();
					foreach ($pages as $page) {
						if ($page->getMeta()->get('date') !== null) {
							$sorted_pages[$page->getMeta()->get('date').$date_id] = $page;
							$date_id++;
						} else {
							$sorted_pages[] = $page;
						}
					}
					if (!isset($options['pages_order'])) {
						$options['pages_order'] = self::ORDER_ASC;
					}
					if ($options['pages_order'] == self::ORDER_ASC) {
						ksort($sorted_pages);
					}
					if ($options['pages_order'] == self::ORDER_DESC) {
						krsort($sorted_pages);
					}
					unset($pages);
					$pages = $sorted_pages;
				break;
				case 'alpha':
				case 'title':
					if (strtolower($options['pages_order_by']) == 'alpha') {
						error_log('the key alpha for sorting is deprecated, use title instead');
					}
					if (!isset($options['pages_order'])) {
						$options['pages_order'] = self::ORDER_ASC;
					}
					if ($options['pages_order'] == self::ORDER_ASC) {
						usort($pages, array($this, "compareByTitleAsc"));
					}
					if ($options['pages_order'] == self::ORDER_DESC) {
						usort($pages, array($this, "compareByTitleDesc"));
					}
				break;
				default:
					throw new Exception("unknown key '{$options['pages_order_by']}' for pages_order_by");
				break;
			}
		}
		return $pages;
	}

	/**
	 * get page from cache or filepath
	 * @param $filePath
	 * @return \Phile\Model\Page
	 */
	protected function getPage($filePath) {
		if ($this->cache !== null) {
			$key    = 'Phile_Model_Page_' . md5($filePath);
			if ($this->cache->has($key)) {
				return $this->cache->get($key);
			} else {
				$page   = new \Phile\Model\Page($filePath);
				$this->cache->set($key, $page);
			}
		} else {
			$page   = new \Phile\Model\Page($filePath);
		}
		return $page;
	}

	// usort function for Titles Asc
	protected function compareByTitleAsc($a, $b) {
		$al = strtolower($a->getMeta()->get('title'));
		$bl = strtolower($b->getMeta()->get('title'));
		if ($al == $bl) {
			return 0;
		}
		return ($al > $bl) ? +1 : -1;
	}
	// usort function for Titles Desc
	protected function compareByTitleDesc($a, $b) {
		$al = strtolower($a->getMeta()->get('title'));
		$bl = strtolower($b->getMeta()->get('title'));
		if ($al == $bl) {
			return 0;
		}
		return ($al < $bl) ? +1 : -1;
	}
}