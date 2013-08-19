window.Modernizr=function(a,b,c){function d(a){s.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&s[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+v.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+w.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=!0,p=b.documentElement,q="modernizr",r=b.createElement(q),s=r.style,t=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),u="Webkit Moz O ms",v=u.split(" "),w=u.toLowerCase().split(" "),x={svg:"http://www.w3.org/2000/svg"},y={},z=[],A=z.slice,B=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:q+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',q,'">',a,"</style>"].join(""),j.id=q,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=p.style.overflow,p.style.overflow="hidden",p.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),p.style.overflow=i),!!g},C={}.hasOwnProperty;l=e(C,"undefined")||e(C.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return C.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=A.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(A.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(A.call(arguments)))};return d}),y.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:B(["@media (",t.join("touch-enabled),("),q,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},y.cssanimations=function(){return i("animationName")},y.csstransforms=function(){return!!i("transform")},y.csstransforms3d=function(){var a=!!i("perspective");return a&&"webkitPerspective"in p.style&&B("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},y.csstransitions=function(){return i("transition")},y.localstorage=function(){try{return localStorage.setItem(q,q),localStorage.removeItem(q),!0}catch(a){return!1}},y.svg=function(){return!!b.createElementNS&&!!b.createElementNS(x.svg,"svg").createSVGRect};for(var D in y)l(y,D)&&(k=D.toLowerCase(),n[k]=y[D](),z.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof o&&o&&(p.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),r=j=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=r.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=q[a[o]];return b||(b={},p++,a[o]=p,q[p]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():n.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),f.canHaveChildren&&!m.test(a)?d.frag.appendChild(f):f}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function i(a){a||(a=b);var d=e(a);return r.shivCSS&&!j&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),k||h(a,d),a}var j,k,l=a.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,n=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o="_html5shiv",p=0,q={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var r={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:l.shivCSS!==!1,supportsUnknownElements:k,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=r,i(b)}(this,b),n._version=m,n._prefixes=t,n._domPrefixes=w,n._cssomPrefixes=v,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=B,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+z.join(" "):""),n}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cssfilters",function(){var a=document.createElement("div");return a.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!a.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("scriptasync","async"in document.createElement("script")),Modernizr.addTest("scriptdefer","defer"in document.createElement("script")),!function(){var a=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function b(a){function b(a){var b=a.charCodeAt(0);if(92!==b)return b;var c=a.charAt(1);return(b=l[c])?b:c>="0"&&"7">=c?parseInt(a.substring(1),8):"u"===c||"x"===c?parseInt(a.substring(2),16):a.charCodeAt(1)}function c(a){return 32>a?(16>a?"\\x0":"\\x")+a.toString(16):(a=String.fromCharCode(a),"\\"===a||"-"===a||"]"===a||"^"===a?"\\"+a:a)}function d(a){var d=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=[],e="^"===d[0],f=["["];e&&f.push("^");for(var e=e?1:0,g=d.length;g>e;++e){var h=d[e];if(/\\[bdsw]/i.test(h))f.push(h);else{var i,h=b(h);g>e+2&&"-"===d[e+1]?(i=b(d[e+2]),e+=2):i=h,a.push([h,i]),65>i||h>122||(65>i||h>90||a.push([32|Math.max(65,h),32|Math.min(i,90)]),97>i||h>122||a.push([-33&Math.max(97,h),-33&Math.min(i,122)]))}}for(a.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]}),d=[],g=[],e=0;e<a.length;++e)h=a[e],h[0]<=g[1]+1?g[1]=Math.max(g[1],h[1]):d.push(g=h);for(e=0;e<d.length;++e)h=d[e],f.push(c(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&f.push("-"),f.push(c(h[1])));return f.push("]"),f.join("")}function e(a){for(var b=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),e=b.length,h=[],i=0,j=0;e>i;++i){var k=b[i];"("===k?++j:"\\"===k.charAt(0)&&(k=+k.substring(1))&&(j>=k?h[k]=-1:b[i]=c(k))}for(i=1;i<h.length;++i)-1===h[i]&&(h[i]=++f);for(j=i=0;e>i;++i)k=b[i],"("===k?(++j,h[j]||(b[i]="(?:")):"\\"===k.charAt(0)&&(k=+k.substring(1))&&j>=k&&(b[i]="\\"+h[k]);for(i=0;e>i;++i)"^"===b[i]&&"^"!==b[i+1]&&(b[i]="");if(a.ignoreCase&&g)for(i=0;e>i;++i)k=b[i],a=k.charAt(0),k.length>=2&&"["===a?b[i]=d(k):"\\"!==a&&(b[i]=k.replace(/[A-Za-z]/g,function(a){return a=a.charCodeAt(0),"["+String.fromCharCode(-33&a,32|a)+"]"}));return b.join("")}for(var f=0,g=!1,h=!1,i=0,j=a.length;j>i;++i){var k=a[i];if(k.ignoreCase)h=!0;else if(/[a-z]/i.test(k.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){g=!0,h=!1;break}}for(var l={b:8,t:9,n:10,v:11,f:12,r:13},m=[],i=0,j=a.length;j>i;++i){if(k=a[i],k.global||k.multiline)throw Error(""+k);m.push("(?:"+e(k)+")")}return RegExp(m.join("|"),h?"gi":"g")}function c(a,b){function c(a){var i=a.nodeType;if(1==i){if(!d.test(a.className)){for(i=a.firstChild;i;i=i.nextSibling)c(i);i=a.nodeName.toLowerCase(),("br"===i||"li"===i)&&(e[h]="\n",g[h<<1]=f++,g[1|h++<<1]=a)}}else(3==i||4==i)&&(i=a.nodeValue,i.length&&(i=b?i.replace(/\r\n?/g,"\n"):i.replace(/[\t\n\r ]+/g," "),e[h]=i,g[h<<1]=f,f+=i.length,g[1|h++<<1]=a))}var d=/(?:^|\s)nocode(?:\s|$)/,e=[],f=0,g=[],h=0;return c(a),{a:e.join("").replace(/\n$/,""),d:g}}function d(a,b,c,d){b&&(a={a:b,e:a},c(a),d.push.apply(d,a.g))}function e(a){for(var b=void 0,c=a.firstChild;c;c=c.nextSibling)var d=c.nodeType,b=1===d?b?a:c:3===d?v.test(c.nodeValue)?a:b:b;return b===a?void 0:b}function f(c,e){function f(a){for(var b=a.e,c=[b,"pln"],k=0,l=a.a.match(g)||[],m={},n=0,o=l.length;o>n;++n){var p,q=l[n],r=m[q],s=void 0;if("string"==typeof r)p=!1;else{var t=h[q.charAt(0)];if(t)s=q.match(t[1]),r=t[0];else{for(p=0;i>p;++p)if(t=e[p],s=q.match(t[1])){r=t[0];break}s||(r="pln")}!(p=r.length>=5&&"lang-"===r.substring(0,5))||s&&"string"==typeof s[1]||(p=!1,r="src"),p||(m[q]=r)}if(t=k,k+=q.length,p){p=s[1];var u=q.indexOf(p),v=u+p.length;s[2]&&(v=q.length-s[2].length,u=v-p.length),r=r.substring(5),d(b+t,q.substring(0,u),f,c),d(b+t+u,p,j(r,p),c),d(b+t+v,q.substring(v),f,c)}else c.push(b+t,r)}a.g=c}var g,h={};!function(){for(var d=c.concat(e),f=[],i={},j=0,k=d.length;k>j;++j){var l=d[j],m=l[3];if(m)for(var n=m.length;--n>=0;)h[m.charAt(n)]=l;l=l[1],m=""+l,i.hasOwnProperty(m)||(f.push(l),i[m]=a)}f.push(/[\S\s]/),g=b(f)}();var i=e.length;return f}function g(b){var c=[],d=[];b.tripleQuotedStrings?c.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,a,"'\""]):b.multiLineStrings?c.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,a,"'\"`"]):c.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,a,"\"'"]),b.verbatimStrings&&d.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,a]);var e=b.hashComments;if(e&&(b.cStyleComments?(e>1?c.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,a,"#"]):c.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,a,"#"]),d.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,a])):c.push(["com",/^#[^\n\r]*/,a,"#"])),b.cStyleComments&&(d.push(["com",/^\/\/[^\n\r]*/,a]),d.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,a])),e=b.regexLiterals){var g=(e=e>1?"":"\n\r")?".":"[\\S\\s]";d.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+e+"])(?:[^/\\x5B\\x5C"+e+"]|\\x5C"+g+"|\\x5B(?:[^\\x5C\\x5D"+e+"]|\\x5C"+g+")*(?:\\x5D|$))+/")+")")])}return(e=b.types)&&d.push(["typ",e]),e=(""+b.keywords).replace(/^ | $/g,""),e.length&&d.push(["kwd",RegExp("^(?:"+e.replace(/[\s,]+/g,"|")+")\\b"),a]),c.push(["pln",/^\s+/,a," \r\n	 "]),e="^.[^\\s\\w.$@'\"`/\\\\]*",b.regexLiterals&&(e+="(?!s*/)"),d.push(["lit",/^@[$_a-z][\w$@]*/i,a],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,a],["pln",/^[$_a-z][\w$@]*/i,a],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,a,"0123456789"],["pln",/^\\[\S\s]?/,a],["pun",RegExp(e),a]),f(c,d)}function h(a,b,c){function d(a){var b=a.nodeType;if(1!=b||f.test(a.className)){if((3==b||4==b)&&c){var i=a.nodeValue,j=i.match(g);j&&(b=i.substring(0,j.index),a.nodeValue=b,(i=i.substring(j.index+j[0].length))&&a.parentNode.insertBefore(h.createTextNode(i),a.nextSibling),e(a),b||a.parentNode.removeChild(a))}}else if("br"===a.nodeName)e(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)d(a)}function e(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),f=a.nextSibling;e.appendChild(d);for(var g=f;g;g=f)f=g.nextSibling,e.appendChild(g)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var c,a=b(a.nextSibling,0);(c=a.parentNode)&&1===c.nodeType;)a=c;j.push(a)}for(var f=/(?:^|\s)nocode(?:\s|$)/,g=/\r\n?|\n/,h=a.ownerDocument,i=h.createElement("li");a.firstChild;)i.appendChild(a.firstChild);for(var j=[i],k=0;k<j.length;++k)d(j[k]);b===(0|b)&&j[0].setAttribute("value",b);var l=h.createElement("ol");l.className="linenums";for(var b=Math.max(0,0|b-1)||0,k=0,m=j.length;m>k;++k)i=j[k],i.className="L"+(k+b)%10,i.firstChild||i.appendChild(h.createTextNode(" ")),l.appendChild(i);a.appendChild(l)}function i(a,b){for(var c=b.length;--c>=0;){var d=b[c];x.hasOwnProperty(d)?l.console&&console.warn("cannot override language handler %s",d):x[d]=a}}function j(a,b){return a&&x.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code"),x[a]}function k(a){var b=a.h;try{var d=c(a.c,a.i),e=d.a;a.a=e,a.d=d.d,a.e=0,j(b,e)(a);var f=/\bMSIE\s(\d+)/.exec(navigator.userAgent),f=f&&+f[1]<=8,b=/\n/g,g=a.a,h=g.length,d=0,i=a.d,k=i.length,e=0,m=a.g,n=m.length,o=0;m[n]=h;var p,q;for(q=p=0;n>q;)m[q]!==m[q+2]?(m[p++]=m[q++],m[p++]=m[q++]):q+=2;for(n=p,q=p=0;n>q;){for(var r=m[q],s=m[q+1],t=q+2;n>=t+2&&m[t+1]===s;)t+=2;m[p++]=r,m[p++]=s,q=t}m.length=p;var u,v=a.c;v&&(u=v.style.display,v.style.display="none");try{for(;k>e;){var w,x=i[e+2]||h,y=m[o+2]||h,t=Math.min(x,y),z=i[e+1];if(1!==z.nodeType&&(w=g.substring(d,t))){f&&(w=w.replace(b,"\r")),z.nodeValue=w;var A=z.ownerDocument,B=A.createElement("span");B.className=m[o+1];var C=z.parentNode;C.replaceChild(B,z),B.appendChild(z),x>d&&(i[e+1]=z=A.createTextNode(g.substring(t,x)),C.insertBefore(z,B.nextSibling))}d=t,d>=x&&(e+=2),d>=y&&(o+=2)}}finally{v&&(v.style.display=u)}}catch(D){l.console&&console.log(D&&D.stack||D)}}var l=window,m=["break,continue,do,else,for,if,return,while"],n=[[m,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],o=[n,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],p=[n,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],q=[p,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],n=[n,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],r=[m,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],s=[m,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],t=[m,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],m=[m,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],u=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,v=/\S/,w=g({keywords:[o,q,n,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",r,s,m],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),x={};i(w,["default-code"]),i(f([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),i(f([["pln",/^\s+/,a," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,a,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),i(f([],[["atv",/^[\S\s]+/]]),["uq.val"]),i(g({keywords:o,hashComments:!0,cStyleComments:!0,types:u}),["c","cc","cpp","cxx","cyc","m"]),i(g({keywords:"null,true,false"}),["json"]),i(g({keywords:q,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:u}),["cs"]),i(g({keywords:p,cStyleComments:!0}),["java"]),i(g({keywords:m,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),i(g({keywords:r,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),i(g({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),i(g({keywords:s,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),i(g({keywords:n,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),i(g({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),i(g({keywords:t,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),i(f([],[["str",/^[\S\s]+/]]),["regex"]);var y=l.PR={createSimpleLexer:f,registerLangHandler:i,sourceDecorator:g,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:l.prettyPrintOne=function(a,b,c){var d=document.createElement("div");return d.innerHTML="<pre>"+a+"</pre>",d=d.firstChild,c&&h(d,c,!0),k({h:b,j:c,c:d,i:1}),d.innerHTML},prettyPrint:l.prettyPrint=function(b,c){function d(){for(var c=l.PR_SHOULD_USE_CONTINUATION?o.now()+250:1/0;q<i.length&&o.now()<c;q++){for(var f=i[q],j=x,m=f;m=m.previousSibling;){var n=m.nodeType,y=(7===n||8===n)&&m.nodeValue;if(y?!/^\??prettify\b/.test(y):3!==n||/\S/.test(m.nodeValue))break;if(y){j={},y.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}if(m=f.className,(j!==x||s.test(m))&&!t.test(m)){for(n=!1,y=f.parentNode;y;y=y.parentNode)if(w.test(y.tagName)&&y.className&&s.test(y.className)){n=!0;break}if(!n){if(f.className+=" prettyprinted",n=j.lang,!n){var z,n=m.match(r);!n&&(z=e(f))&&v.test(z.tagName)&&(n=z.className.match(r)),n&&(n=n[1])}if(u.test(f.tagName))y=1;else var y=f.currentStyle,A=g.defaultView,y=(y=y?y.whiteSpace:A&&A.getComputedStyle?A.getComputedStyle(f,a).getPropertyValue("white-space"):0)&&"pre"===y.substring(0,3);A=j.linenums,(A="true"===A||+A)||(A=(A=m.match(/\blinenums\b(?::(\d+))?/))?A[1]&&A[1].length?+A[1]:!0:!1),A&&h(f,A,y),p={h:n,c:f,j:A,i:y},k(p)}}}q<i.length?setTimeout(d,250):"function"==typeof b&&b()}for(var f=c||document.body,g=f.ownerDocument||document,f=[f.getElementsByTagName("pre"),f.getElementsByTagName("code"),f.getElementsByTagName("xmp")],i=[],j=0;j<f.length;++j)for(var m=0,n=f[j].length;n>m;++m)i.push(f[j][m]);var f=a,o=Date;o.now||(o={now:function(){return+new Date}});var p,q=0,r=/\blang(?:uage)?-([\w.]+)(?!\S)/,s=/\bprettyprint\b/,t=/\bprettyprinted\b/,u=/pre|xmp/i,v=/^code$/i,w=/^(?:pre|code|xmp)$/i,x={};d()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return y})}()}();for(var pre=document.getElementsByTagName("pre"),i=0;i<pre.length;i++)pre[i].className="prettyprint";if(Modernizr.touch){var header=document.getElementsByTagName("header")[0];header.addEventListener("touchend",function(){this.classList.toggle("active")},!0)}else document.getElementsByTagName("html")[0].className+=" no-touch";