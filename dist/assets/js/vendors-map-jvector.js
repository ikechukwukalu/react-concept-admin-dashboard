/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '100%',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);


jQuery(document).ready(function($) {
    'use strict';

    // ============================================================== 
    // Notification list
    // ============================================================== 
    if ($(".notification-list").length) {

        $('.notification-list').slimScroll({
            height: '250px'
        });

    }

    // ============================================================== 
    // Menu Slim Scroll List
    // ============================================================== 


    if ($(".menu-list").length) {
        $('.menu-list').slimScroll({

        });
    }

    // ============================================================== 
    // Sidebar scrollnavigation 
    // ============================================================== 

    if ($(".sidebar-nav-fixed a").length) {
        $('.sidebar-nav-fixed a')
            // Remove links that don't actually link to anything

            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 90
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.sidebar-nav-fixed a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
            });

    }

    // ============================================================== 
    // tooltip
    // ============================================================== 
    if ($('[data-toggle="tooltip"]').length) {
            
            $('[data-toggle="tooltip"]').tooltip()

        }

     // ============================================================== 
    // popover
    // ============================================================== 
       if ($('[data-toggle="popover"]').length) {
            $('[data-toggle="popover"]').popover()

    }
     // ============================================================== 
    // Chat List Slim Scroll
    // ============================================================== 
        

        if ($('.chat-list').length) {
            $('.chat-list').slimScroll({
            color: 'false',
            width: '100%'


        });
    }
    // ============================================================== 
    // dropzone script
    // ============================================================== 

 //     if ($('.dz-clickable').length) {
 //            $(".dz-clickable").dropzone({ url: "/file/post" });
 // }

}); // AND OF JQUERY


// $(function() {
//     "use strict";


    

   // var monkeyList = new List('test-list', {
    //    valueNames: ['name']

     // });
  // var monkeyList = new List('test-list-2', {
    //    valueNames: ['name']

   // });



   
   

// });
/*!
  * Bootstrap v4.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (factory((global.bootstrap = {}),global.jQuery));
}(this, (function (exports,$) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          var $selector = $$$1(document).find(selector);
          return $selector.length > 0 ? selector : null;
        } catch (err) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $$$1(element).css('transition-duration');
        var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(TRANSITION_END);
      },
      // TODO: Remove in v5
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'alert';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: "close" + EVENT_KEY,
      CLOSED: "closed" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Alert =
    /*#__PURE__*/
    function () {
      function Alert(element) {
        this._element = element;
      } // Getters


      var _proto = Alert.prototype;

      // Public
      _proto.close = function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Private


      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $$$1(selector)[0];
        }

        if (!parent) {
          parent = $$$1(element).closest("." + ClassName.ALERT)[0];
        }

        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $$$1.Event(Event.CLOSE);
        $$$1(element).trigger(closeEvent);
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        $$$1(element).removeClass(ClassName.SHOW);

        if (!$$$1(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);

          return;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(element);
        $$$1(element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      };

      _proto._destroyElement = function _destroyElement(element) {
        $$$1(element).detach().trigger(Event.CLOSED).remove();
      }; // Static


      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $$$1(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      };

      _createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Alert._jQueryInterface;
    $$$1.fn[NAME].Constructor = Alert;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    return Alert;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Button = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'button';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Button =
    /*#__PURE__*/
    function () {
      function Button(element) {
        this._element = element;
      } // Getters


      var _proto = Button.prototype;

      // Public
      _proto.toggle = function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $$$1(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $$$1(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                return;
              }

              input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
              $$$1(input).trigger('change');
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $$$1(this._element).toggleClass(ClassName.ACTIVE);
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Static


      Button._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $$$1(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      _createClass(Button, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;

      if (!$$$1(button).hasClass(ClassName.BUTTON)) {
        button = $$$1(button).closest(Selector.BUTTON);
      }

      Button._jQueryInterface.call($$$1(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = $$$1(event.target).closest(Selector.BUTTON)[0];
      $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Button._jQueryInterface;
    $$$1.fn[NAME].Constructor = Button;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };

    return Button;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Carousel = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'carousel';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: "slide" + EVENT_KEY,
      SLID: "slid" + EVENT_KEY,
      KEYDOWN: "keydown" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY,
      TOUCHEND: "touchend" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Carousel =
    /*#__PURE__*/
    function () {
      function Carousel(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this._config = this._getConfig(config);
        this._element = $$$1(element)[0];
        this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

        this._addEventListeners();
      } // Getters


      var _proto = Carousel.prototype;

      // Public
      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(Direction.NEXT);
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
          this.next();
        }
      };

      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(Direction.PREV);
        }
      };

      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if ($$$1(this._element).find(Selector.NEXT_PREV)[0]) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $$$1(this._element).one(Event.SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        $$$1(this._element).off(EVENT_KEY);
        $$$1.removeData(this._element, DATA_KEY);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        if (this._config.keyboard) {
          $$$1(this._element).on(Event.KEYDOWN, function (event) {
            return _this2._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          $$$1(this._element).on(Event.MOUSEENTER, function (event) {
            return _this2.pause(event);
          }).on(Event.MOUSELEAVE, function (event) {
            return _this2.cycle(event);
          });

          if ('ontouchstart' in document.documentElement) {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            $$$1(this._element).on(Event.TOUCHEND, function () {
              _this2.pause();

              if (_this2.touchTimeout) {
                clearTimeout(_this2.touchTimeout);
              }

              _this2.touchTimeout = setTimeout(function (event) {
                return _this2.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
            });
          }
        }
      };

      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;

          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;

          default:
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === Direction.PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

        var slideEvent = $$$1.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $$$1(this._element).trigger(slideEvent);
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $$$1(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this3 = this;

        var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;

        if (direction === Direction.NEXT) {
          directionalClassName = ClassName.LEFT;
          orderClassName = ClassName.NEXT;
          eventDirectionName = Direction.LEFT;
        } else {
          directionalClassName = ClassName.RIGHT;
          orderClassName = ClassName.PREV;
          eventDirectionName = Direction.RIGHT;
        }

        if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $$$1.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });

        if ($$$1(this._element).hasClass(ClassName.SLIDE)) {
          $$$1(nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $$$1(activeElement).addClass(directionalClassName);
          $$$1(nextElement).addClass(directionalClassName);
          var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
          $$$1(activeElement).one(Util.TRANSITION_END, function () {
            $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
            $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
            _this3._isSliding = false;
            setTimeout(function () {
              return $$$1(_this3._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          $$$1(activeElement).removeClass(ClassName.ACTIVE);
          $$$1(nextElement).addClass(ClassName.ACTIVE);
          this._isSliding = false;
          $$$1(this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      }; // Static


      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = _objectSpread({}, Default, $$$1(this).data());

          if (typeof config === 'object') {
            _config = _objectSpread({}, _config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new TypeError("No method named \"" + action + "\"");
            }

            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $$$1(selector)[0];

        if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = _objectSpread({}, $$$1(target).data(), $$$1(this).data());

        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($$$1(target), config);

        if (slideIndex) {
          $$$1(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      };

      _createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    $$$1(window).on(Event.LOAD_DATA_API, function () {
      $$$1(Selector.DATA_RIDE).each(function () {
        var $carousel = $$$1(this);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Carousel._jQueryInterface;
    $$$1.fn[NAME].Constructor = Carousel;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };

    return Carousel;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'collapse';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var Event = {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Collapse =
    /*#__PURE__*/
    function () {
      function Collapse(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var tabToggles = $$$1(Selector.DATA_TOGGLE);

        for (var i = 0; i < tabToggles.length; i++) {
          var elem = tabToggles[i];
          var selector = Util.getSelectorFromElement(elem);

          if (selector !== null && $$$1(selector).filter(element).length > 0) {
            this._selector = selector;

            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // Getters


      var _proto = Collapse.prototype;

      // Public
      _proto.toggle = function toggle() {
        if ($$$1(this._element).hasClass(ClassName.SHOW)) {
          this.hide();
        } else {
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

          if (actives.length === 0) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $$$1.Event(Event.SHOW);
        $$$1(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

          if (!activesData) {
            $$$1(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length > 0) {
          $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $$$1(_this._element).trigger(Event.SHOWN);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var startEvent = $$$1.Event(Event.HIDE);
        $$$1(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

        if (this._triggerArray.length > 0) {
          for (var i = 0; i < this._triggerArray.length; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $$$1(selector);

              if (!$elem.hasClass(ClassName.SHOW)) {
                $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = '';
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getDimension = function _getDimension() {
        var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        var parent = null;

        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent; // It's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = $$$1(this._config.parent)[0];
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
        $$$1(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $$$1(element).hasClass(ClassName.SHOW);

          if (triggerArray.length > 0) {
            $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }; // Static


      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? $$$1(selector)[0] : null;
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          var _config = _objectSpread({}, Default, $this.data(), typeof config === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $$$1(this);
      var selector = Util.getSelectorFromElement(this);
      $$$1(selector).each(function () {
        var $target = $$$1(this);
        var data = $target.data(DATA_KEY);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Collapse._jQueryInterface;
    $$$1.fn[NAME].Constructor = Collapse;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };

    return Collapse;
  }($);

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var css = getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Tells if you are running Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @argument {number} version to check
   * @returns {Boolean} isIE
   */
  var cache = {};

  var isIE = function () {
    var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

    version = version.toString();
    if (cache.hasOwnProperty(version)) {
      return cache[version];
    }
    switch (version) {
      case '11':
        cache[version] = navigator.userAgent.indexOf('Trident') !== -1;
        break;
      case '10':
        cache[version] = navigator.appVersion.indexOf('MSIE 10') !== -1;
        break;
      case 'all':
        cache[version] = navigator.userAgent.indexOf('Trident') !== -1 || navigator.userAgent.indexOf('MSIE') !== -1;
        break;
    }

    //Set IE
    cache.all = cache.all || Object.keys(cache).some(function (key) {
      return cache[key];
    });
    return cache[version];
  };

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
  }

  function getWindowSizes() {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && parent.nodeName === 'HTML') {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    return isFixed(getParentNode(element));
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var styles = getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroy the popper
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    // floor sides to avoid blurry text
    var offsets = {
      left: Math.floor(popper.left),
      top: Math.floor(popper.top),
      bottom: Math.floor(popper.bottom),
      right: Math.floor(popper.right)
    };

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      top = -offsetParentRect.height + offsets.bottom;
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      left = -offsetParentRect.width + offsets.right;
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the informations used by Popper.js
   * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overriden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass as 3rd argument an object with the same
   * structure of this object, example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'dropdown';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    };
    var AttachmentMap = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end',
      RIGHT: 'right-start',
      RIGHTEND: 'right-end',
      LEFT: 'left-start',
      LEFTEND: 'left-end'
    };
    var Default = {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    };
    var DefaultType = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Dropdown =
    /*#__PURE__*/
    function () {
      function Dropdown(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // Getters


      var _proto = Dropdown.prototype;

      // Public
      _proto.toggle = function toggle() {
        if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this._element);

        var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

        Dropdown._clearMenus();

        if (isActive) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
        $$$1(parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        } // Disable totally Popper.js for Dropdown in Navbar


        if (!this._inNavbar) {
          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
          }

          var referenceElement = this._element;

          if (this._config.reference === 'parent') {
            referenceElement = parent;
          } else if (Util.isElement(this._config.reference)) {
            referenceElement = this._config.reference; // Check if it's jQuery element

            if (typeof this._config.reference.jquery !== 'undefined') {
              referenceElement = this._config.reference[0];
            }
          } // If boundary is not `scrollParent`, then set position to `static`
          // to allow the menu to "escape" the scroll parent's boundaries
          // https://github.com/twbs/bootstrap/issues/24251


          if (this._config.boundary !== 'scrollParent') {
            $$$1(parent).addClass(ClassName.POSITION_STATIC);
          }

          this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
          $$$1(document.body).children().on('mouseover', null, $$$1.noop);
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        $$$1(this._menu).toggleClass(ClassName.SHOW);
        $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(this._element).off(EVENT_KEY);
        this._element = null;
        this._menu = null;

        if (this._popper !== null) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      _proto.update = function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // Private


      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $$$1(this._element).on(Event.CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, this.constructor.Default, $$$1(this._element).data(), config);
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown._getParentFromElement(this._element);

          this._menu = $$$1(parent).find(Selector.MENU)[0];
        }

        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $$$1(this._element).parent();
        var placement = AttachmentMap.BOTTOM; // Handle dropup

        if ($parentDropdown.hasClass(ClassName.DROPUP)) {
          placement = AttachmentMap.TOP;

          if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.TOPEND;
          }
        } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
          placement = AttachmentMap.RIGHT;
        } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
          placement = AttachmentMap.LEFT;
        } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.BOTTOMEND;
        }

        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        return $$$1(this._element).closest('.navbar').length > 0;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var _this2 = this;

        var offsetConf = {};

        if (typeof this._config.offset === 'function') {
          offsetConf.fn = function (data) {
            data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets) || {});
            return data;
          };
        } else {
          offsetConf.offset = this._config.offset;
        }

        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: offsetConf,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          } // Disable Popper.js if we have a static display

        };

        if (this._config.display === 'static') {
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        }

        return popperConfig;
      }; // Static


      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' ? config : null;

          if (!data) {
            data = new Dropdown(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
          return;
        }

        var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);

          var context = $$$1(toggles[i]).data(DATA_KEY);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!$$$1(parent).hasClass(ClassName.SHOW)) {
            continue;
          }

          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
          $$$1(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            continue;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $$$1(document.body).children().off('mouseover', null, $$$1.noop);
          }

          toggles[i].setAttribute('aria-expanded', 'false');
          $$$1(dropdownMenu).removeClass(ClassName.SHOW);
          $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);

        if (selector) {
          parent = $$$1(selector)[0];
        }

        return parent || element.parentNode;
      }; // eslint-disable-next-line complexity


      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);

        var isActive = $$$1(parent).hasClass(ClassName.SHOW);

        if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
          if (event.which === ESCAPE_KEYCODE) {
            var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
            $$$1(toggle).trigger('focus');
          }

          $$$1(this).trigger('click');
          return;
        }

        var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

        if (items.length === 0) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // Up
          index--;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // Down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      _createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($$$1(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Dropdown._jQueryInterface;
    $$$1.fn[NAME].Constructor = Dropdown;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'modal';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      RESIZE: "resize" + EVENT_KEY,
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Modal =
    /*#__PURE__*/
    function () {
      function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = $$$1(element).find(Selector.DIALOG)[0];
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._scrollbarWidth = 0;
      } // Getters


      var _proto = Modal.prototype;

      // Public
      _proto.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        if (this._isTransitioning || this._isShown) {
          return;
        }

        if ($$$1(this._element).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
        }

        var showEvent = $$$1.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });
        $$$1(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        $$$1(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();

        this._setResizeEvent();

        $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
          return _this.hide(event);
        });
        $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($$$1(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        if (this._isTransitioning || !this._isShown) {
          return;
        }

        var hideEvent = $$$1.Event(Event.HIDE);
        $$$1(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        var transition = $$$1(this._element).hasClass(ClassName.FADE);

        if (transition) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        $$$1(document).off(Event.FOCUSIN);
        $$$1(this._element).removeClass(ClassName.SHOW);
        $$$1(this._element).off(Event.CLICK_DISMISS);
        $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $$$1(this._element).one(Util.TRANSITION_END, function (event) {
            return _this2._hideModal(event);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this3 = this;

        var transition = $$$1(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.scrollTop = 0;

        if (transition) {
          Util.reflow(this._element);
        }

        $$$1(this._element).addClass(ClassName.SHOW);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $$$1.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this3._config.focus) {
            _this3._element.focus();
          }

          _this3._isTransitioning = false;
          $$$1(_this3._element).trigger(shownEvent);
        };

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
        } else {
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this4 = this;

        $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
            _this4._element.focus();
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this5 = this;

        if (this._isShown && this._config.keyboard) {
          $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === ESCAPE_KEYCODE) {
              event.preventDefault();

              _this5.hide();
            }
          });
        } else if (!this._isShown) {
          $$$1(this._element).off(Event.KEYDOWN_DISMISS);
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this6 = this;

        if (this._isShown) {
          $$$1(window).on(Event.RESIZE, function (event) {
            return _this6.handleUpdate(event);
          });
        } else {
          $$$1(window).off(Event.RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this7 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._isTransitioning = false;

        this._showBackdrop(function () {
          $$$1(document.body).removeClass(ClassName.OPEN);

          _this7._resetAdjustments();

          _this7._resetScrollbar();

          $$$1(_this7._element).trigger(Event.HIDDEN);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $$$1(this._backdrop).remove();
          this._backdrop = null;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this8 = this;

        var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            $$$1(this._backdrop).addClass(animate);
          }

          $$$1(this._backdrop).appendTo(document.body);
          $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this8._ignoreBackdropClick) {
              _this8._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            if (_this8._config.backdrop === 'static') {
              _this8._element.focus();
            } else {
              _this8.hide();
            }
          });

          if (animate) {
            Util.reflow(this._backdrop);
          }

          $$$1(this._backdrop).addClass(ClassName.SHOW);

          if (!callback) {
            return;
          }

          if (!animate) {
            callback();
            return;
          }

          var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
          $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
        } else if (!this._isShown && this._backdrop) {
          $$$1(this._backdrop).removeClass(ClassName.SHOW);

          var callbackRemove = function callbackRemove() {
            _this8._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if ($$$1(this._element).hasClass(ClassName.FADE)) {
            var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

            $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }; // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------


      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this9 = this;

        if (this._isBodyOverflowing) {
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          // Adjust fixed content padding
          $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
            var actualPadding = $$$1(element)[0].style.paddingRight;
            var calculatedPadding = $$$1(element).css('padding-right');
            $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
            var actualMargin = $$$1(element)[0].style.marginRight;
            var calculatedMargin = $$$1(element).css('margin-right');
            $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
          }); // Adjust navbar-toggler margin

          $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
            var actualMargin = $$$1(element)[0].style.marginRight;
            var calculatedMargin = $$$1(element).css('margin-right');
            $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $$$1(document.body).css('padding-right');
          $$$1(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        // Restore fixed content padding
        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
          var padding = $$$1(element).data('padding-right');

          if (typeof padding !== 'undefined') {
            $$$1(element).css('padding-right', padding).removeData('padding-right');
          }
        }); // Restore sticky content and navbar-toggler margin

        $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var margin = $$$1(element).data('margin-right');

          if (typeof margin !== 'undefined') {
            $$$1(element).css('margin-right', margin).removeData('margin-right');
          }
        }); // Restore body padding

        var padding = $$$1(document.body).data('padding-right');

        if (typeof padding !== 'undefined') {
          $$$1(document.body).css('padding-right', padding).removeData('padding-right');
        }
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }; // Static


      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = _objectSpread({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

          if (!data) {
            data = new Modal(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };

      _createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $$$1(selector)[0];
      }

      var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $$$1(target).data(), $$$1(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // Only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if ($$$1(_this10).is(':visible')) {
            _this10.focus();
          }
        });
      });

      Modal._jQueryInterface.call($$$1(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Modal._jQueryInterface;
    $$$1.fn[NAME].Constructor = Modal;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };

    return Modal;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tooltip';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent'
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tooltip =
    /*#__PURE__*/
    function () {
      function Tooltip(element, config) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        } // private


        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // Getters


      var _proto = Tooltip.prototype;

      // Public
      _proto.enable = function enable() {
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $$$1(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $$$1(event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $$$1.removeData(this.element, this.constructor.DATA_KEY);
        $$$1(this.element).off(this.constructor.EVENT_KEY);
        $$$1(this.element).closest('.modal').off('hide.bs.modal');

        if (this.tip) {
          $$$1(this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper !== null) {
          this._popper.destroy();
        }

        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        if ($$$1(this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }

        var showEvent = $$$1.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $$$1(this.element).trigger(showEvent);
          var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();

          if (this.config.animation) {
            $$$1(tip).addClass(ClassName.FADE);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          this.addAttachmentClass(attachment);
          var container = this.config.container === false ? document.body : $$$1(this.config.container);
          $$$1(tip).data(this.constructor.DATA_KEY, this);

          if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
            $$$1(tip).appendTo(container);
          }

          $$$1(this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper(this.element, tip, {
            placement: attachment,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector.ARROW
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              _this._handlePopperPlacementChange(data);
            }
          });
          $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          if ('ontouchstart' in document.documentElement) {
            $$$1(document.body).children().on('mouseover', null, $$$1.noop);
          }

          var complete = function complete() {
            if (_this.config.animation) {
              _this._fixTransition();
            }

            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HoverState.OUT) {
              _this._leave(null, _this);
            }
          };

          if ($$$1(this.tip).hasClass(ClassName.FADE)) {
            var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
            $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

        var complete = function complete() {
          if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2._cleanTipClass();

          _this2.element.removeAttribute('aria-describedby');

          $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }

          if (callback) {
            callback();
          }
        };

        $$$1(this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $$$1(document.body).children().off('mouseover', null, $$$1.noop);
        }

        this._activeTrigger[Trigger.CLICK] = false;
        this._activeTrigger[Trigger.FOCUS] = false;
        this._activeTrigger[Trigger.HOVER] = false;

        if ($$$1(this.tip).hasClass(ClassName.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(tip);
          $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }

        this._hoverState = '';
      };

      _proto.update = function update() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // Protected


      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $$$1(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $$$1(this.getTipElement());
        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        var html = this.config.html;

        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
          // Content is a DOM node or a jQuery
          if (html) {
            if (!$$$1(content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($$$1(content).text());
          }
        } else {
          $element[html ? 'html' : 'text'](content);
        }
      };

      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      }; // Private


      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this3 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
              return _this3.toggle(event);
            });
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
            $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
              return _this3._enter(event);
            }).on(eventOut, _this3.config.selector, function (event) {
              return _this3._leave(event);
            });
          }

          $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
            return _this3.hide();
          });
        });

        if (this.config.selector) {
          this.config = _objectSpread({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        var titleType = typeof this.element.getAttribute('data-original-title');

        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };

      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }

        if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
          context._hoverState = HoverState.SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, this.constructor.Default, $$$1(this.element).data(), config);

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $$$1(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
        this._cleanTipClass();

        this.addAttachmentClass(this._getAttachment(data.placement));
      };

      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;

        if (tip.getAttribute('x-placement') !== null) {
          return;
        }

        $$$1(tip).removeClass(ClassName.FADE);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      }; // Static


      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);

      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Tooltip._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tooltip;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };

    return Tooltip;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Popover = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'popover';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var CLASS_PREFIX = 'bs-popover';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');

    var Default = _objectSpread({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });

    var DefaultType = _objectSpread({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });

    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Popover =
    /*#__PURE__*/
    function (_Tooltip) {
      _inheritsLoose(Popover, _Tooltip);

      function Popover() {
        return _Tooltip.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype;

      // Overrides
      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $$$1(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

        var content = this._getContent();

        if (typeof content === 'function') {
          content = content.call(this.element);
        }

        this.setElementContent($tip.find(Selector.CONTENT), content);
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      }; // Private


      _proto._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || this.config.content;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $$$1(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      }; // Static


      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Popover, null, [{
        key: "VERSION",
        // Getters
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);

      return Popover;
    }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Popover._jQueryInterface;
    $$$1.fn[NAME].Constructor = Popover;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };

    return Popover;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollSpy = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'scrollspy';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: "activate" + EVENT_KEY,
      SCROLL: "scroll" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var ScrollSpy =
    /*#__PURE__*/
    function () {
      function ScrollSpy(element, config) {
        var _this = this;

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // Getters


      var _proto = ScrollSpy.prototype;

      // Public
      _proto.refresh = function refresh() {
        var _this2 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = $$$1.makeArray($$$1(this._selector));
        targets.map(function (element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);

          if (targetSelector) {
            target = $$$1(targetSelector)[0];
          }

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              // TODO (fat): remove sketch reliance on jQuery position/offset
              return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this2._offsets.push(item[0]);

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(this._scrollElement).off(EVENT_KEY);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);

        if (typeof config.target !== 'string') {
          var id = $$$1(config.target).attr('id');

          if (!id) {
            id = Util.getUID(NAME);
            $$$1(config.target).attr('id', id);
          }

          config.target = "#" + id;
        }

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };

      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };

      _proto._activate = function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


        queries = queries.map(function (selector) {
          return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
        });
        var $link = $$$1(queries.join(','));

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // Set triggered link as active
          $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }; // Static


      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

      for (var i = scrollSpys.length; i--;) {
        var $spy = $$$1(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
    $$$1.fn[NAME].Constructor = ScrollSpy;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };

    return ScrollSpy;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        this._element = element;
      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $$$1.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $$$1.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $$$1(previous).trigger(hideEvent);
        }

        $$$1(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = $$$1(selector)[0];
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $$$1.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $$$1.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $$$1(previous).trigger(hiddenEvent);
          $$$1(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $$$1(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $$$1(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && active && $$$1(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
          var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $$$1(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        Util.reflow(element);
        $$$1(element).addClass(ClassName.SHOW);

        if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }; // Static


      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($$$1(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Tab._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tab;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function ($$$1) {
    if (typeof $$$1 === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $$$1.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.bundle.js.map

"use strict";!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(["jquery","googlemaps!"],b):a.GMaps=b()}(this,function(){var a=function(a,b){var c;if(a===b)return a;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a},b=function(a,b){var c,d=Array.prototype.slice.call(arguments,2),e=[],f=a.length;if(Array.prototype.map&&a.map===Array.prototype.map)e=Array.prototype.map.call(a,function(a){var c=d.slice(0);return c.splice(0,0,a),b.apply(this,c)});else for(c=0;f>c;c++)callback_params=d,callback_params.splice(0,0,a[c]),e.push(b.apply(this,callback_params));return e},c=function(a){var b,c=[];for(b=0;b<a.length;b++)c=c.concat(a[b]);return c},d=function(a,b){var c=a[0],d=a[1];return b&&(c=a[1],d=a[0]),new google.maps.LatLng(c,d)},f=function(a,b){var c;for(c=0;c<a.length;c++)a[c]instanceof google.maps.LatLng||(a[c].length>0&&"object"==typeof a[c][0]?a[c]=f(a[c],b):a[c]=d(a[c],b));return a},g=function(a,b){var c,d=a.replace(".","");return c="jQuery"in this&&b?$("."+d,b)[0]:document.getElementsByClassName(d)[0]},h=function(a,b){var c,a=a.replace("#","");return c="jQuery"in window&&b?$("#"+a,b)[0]:document.getElementById(a)},i=function(a){var b=0,c=0;if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},j=function(b){var c=document,d=function(b){if("object"!=typeof window.google||!window.google.maps)return"object"==typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};if(!this)return new d(b);b.zoom=b.zoom||15,b.mapType=b.mapType||"roadmap";var e,f=function(a,b){return void 0===a?b:a},j=this,k=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],l=["mousemove","mouseout","mouseover"],m=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],n=b.el||b.div,o=b.markerClusterer,p=google.maps.MapTypeId[b.mapType.toUpperCase()],q=new google.maps.LatLng(b.lat,b.lng),r=f(b.zoomControl,!0),s=b.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},t=s.style||"DEFAULT",u=s.position||"TOP_LEFT",v=f(b.panControl,!0),w=f(b.mapTypeControl,!0),x=f(b.scaleControl,!0),y=f(b.streetViewControl,!0),z=f(z,!0),A={},B={zoom:this.zoom,center:q,mapTypeId:p},C={panControl:v,zoomControl:r,zoomControlOptions:{style:google.maps.ZoomControlStyle[t],position:google.maps.ControlPosition[u]},mapTypeControl:w,scaleControl:x,streetViewControl:y,overviewMapControl:z};if("string"==typeof b.el||"string"==typeof b.div?n.indexOf("#")>-1?this.el=h(n,b.context):this.el=g.apply(this,[n,b.context]):this.el=n,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[j.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=b.zoom,this.registered_events={},this.el.style.width=b.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=b.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=b.enableNewStyle,e=0;e<m.length;e++)delete b[m[e]];for(1!=b.disableDefaultUI&&(B=a(B,C)),A=a(B,b),e=0;e<k.length;e++)delete A[k[e]];for(e=0;e<l.length;e++)delete A[l[e]];this.map=new google.maps.Map(this.el,A),o&&(this.markerClusterer=o.apply(this,[this.map]));var D=function(a,b){var c="",d=window.context_menu[j.el.id][a];for(var e in d)if(d.hasOwnProperty(e)){var f=d[e];c+='<li><a id="'+a+"_"+e+'" href="#">'+f.title+"</a></li>"}if(h("gmaps_context_menu")){var g=h("gmaps_context_menu");g.innerHTML=c;var e,k=g.getElementsByTagName("a"),l=k.length;for(e=0;l>e;e++){var m=k[e],n=function(c){c.preventDefault(),d[this.id.replace(a+"_","")].action.apply(j,[b]),j.hideContextMenu()};google.maps.event.clearListeners(m,"click"),google.maps.event.addDomListenerOnce(m,"click",n,!1)}var o=i.apply(this,[j.el]),p=o[0]+b.pixel.x-15,q=o[1]+b.pixel.y-15;g.style.left=p+"px",g.style.top=q+"px"}};this.buildContextMenu=function(a,b){if("marker"===a){b.pixel={};var c=new google.maps.OverlayView;c.setMap(j.map),c.draw=function(){var d=c.getProjection(),e=b.marker.getPosition();b.pixel=d.fromLatLngToContainerPixel(e),D(a,b)}}else D(a,b);var d=h("gmaps_context_menu");setTimeout(function(){d.style.display="block"},0)},this.setContextMenu=function(a){window.context_menu[j.el.id][a.control]={};var b,d=c.createElement("ul");for(b in a.options)if(a.options.hasOwnProperty(b)){var e=a.options[b];window.context_menu[j.el.id][a.control][e.name]={title:e.title,action:e.action}}d.id="gmaps_context_menu",d.style.display="none",d.style.position="absolute",d.style.minWidth="100px",d.style.background="white",d.style.listStyle="none",d.style.padding="8px",d.style.boxShadow="2px 2px 6px #ccc",h("gmaps_context_menu")||c.body.appendChild(d);var f=h("gmaps_context_menu");google.maps.event.addDomListener(f,"mouseout",function(a){a.relatedTarget&&this.contains(a.relatedTarget)||window.setTimeout(function(){f.style.display="none"},400)},!1)},this.hideContextMenu=function(){var a=h("gmaps_context_menu");a&&(a.style.display="none")};var E=function(a,c){google.maps.event.addListener(a,c,function(a){void 0==a&&(a=this),b[c].apply(this,[a]),j.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var F=0;F<k.length;F++){var G=k[F];G in b&&E(this.map,G)}for(var F=0;F<l.length;F++){var G=l[F];G in b&&E(this.map,G)}google.maps.event.addListener(this.map,"rightclick",function(a){b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[j.el.id].map&&j.buildContextMenu("map",a)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var a,b=[],c=this.markers.length;for(a=0;c>a;a++)"boolean"==typeof this.markers[a].visible&&this.markers[a].visible&&b.push(this.markers[a].getPosition());this.fitLatLngBounds(b)},this.fitLatLngBounds=function(a){var b,c=a.length,d=new google.maps.LatLngBounds;for(b=0;c>b;b++)d.extend(a[b]);this.map.fitBounds(d)},this.setCenter=function(a,b,c){this.map.panTo(new google.maps.LatLng(a,b)),c&&c()},this.getElement=function(){return this.el},this.zoomIn=function(a){a=a||1,this.zoom=this.map.getZoom()+a,this.map.setZoom(this.zoom)},this.zoomOut=function(a){a=a||1,this.zoom=this.map.getZoom()-a,this.map.setZoom(this.zoom)};var H,I=[];for(H in this.map)"function"!=typeof this.map[H]||this[H]||I.push(H);for(e=0;e<I.length;e++)!function(a,b,c){a[c]=function(){return b[c].apply(b,arguments)}}(this,this.map,I[e])};return d}(this);j.prototype.createControl=function(a){var b=document.createElement("div");b.style.cursor="pointer",a.disableDefaultStyles!==!0&&(b.style.fontFamily="Roboto, Arial, sans-serif",b.style.fontSize="11px",b.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var c in a.style)b.style[c]=a.style[c];a.id&&(b.id=a.id),a.title&&(b.title=a.title),a.classes&&(b.className=a.classes),a.content&&("string"==typeof a.content?b.innerHTML=a.content:a.content instanceof HTMLElement&&b.appendChild(a.content)),a.position&&(b.position=google.maps.ControlPosition[a.position.toUpperCase()]);for(var d in a.events)!function(b,c){google.maps.event.addDomListener(b,c,function(){a.events[c].apply(this,[this])})}(b,d);return b.index=1,b},j.prototype.addControl=function(a){var b=this.createControl(a);return this.controls.push(b),this.map.controls[b.position].push(b),b},j.prototype.removeControl=function(a){var b,c=null;for(b=0;b<this.controls.length;b++)this.controls[b]==a&&(c=this.controls[b].position,this.controls.splice(b,1));if(c)for(b=0;b<this.map.controls.length;b++){var d=this.map.controls[a.position];if(d.getAt(b)==a){d.removeAt(b);break}}return a},j.prototype.createMarker=function(b){if(void 0==b.lat&&void 0==b.lng&&void 0==b.position)throw"No latitude or longitude defined.";var c=this,d=b.details,e=b.fences,f=b.outside,g={position:new google.maps.LatLng(b.lat,b.lng),map:null},h=a(g,b);delete h.lat,delete h.lng,delete h.fences,delete h.outside;var i=new google.maps.Marker(h);if(i.fences=e,b.infoWindow){i.infoWindow=new google.maps.InfoWindow(b.infoWindow);for(var j=["closeclick","content_changed","domready","position_changed","zindex_changed"],k=0;k<j.length;k++)!function(a,c){b.infoWindow[c]&&google.maps.event.addListener(a,c,function(a){b.infoWindow[c].apply(this,[a])})}(i.infoWindow,j[k])}for(var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],m=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],k=0;k<l.length;k++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this,[this])})}(i,l[k]);for(var k=0;k<m.length;k++)!function(a,c,d){b[d]&&google.maps.event.addListener(c,d,function(c){c.pixel||(c.pixel=a.getProjection().fromLatLngToPoint(c.latLng)),b[d].apply(this,[c])})}(this.map,i,m[k]);return google.maps.event.addListener(i,"click",function(){this.details=d,b.click&&b.click.apply(this,[this]),i.infoWindow&&(c.hideInfoWindows(),i.infoWindow.open(c.map,i))}),google.maps.event.addListener(i,"rightclick",function(a){a.marker=this,b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[c.el.id].marker&&c.buildContextMenu("marker",a)}),i.fences&&google.maps.event.addListener(i,"dragend",function(){c.checkMarkerGeofence(i,function(a,b){f(a,b)})}),i},j.prototype.addMarker=function(a){var b;if(a.hasOwnProperty("gm_accessors_"))b=a;else{if(!(a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||a.position))throw"No latitude or longitude defined.";b=this.createMarker(a)}return b.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(b),this.markers.push(b),j.fire("marker_added",b,this),b},j.prototype.addMarkers=function(a){for(var b,c=0;b=a[c];c++)this.addMarker(b);return this.markers},j.prototype.hideInfoWindows=function(){for(var a,b=0;a=this.markers[b];b++)a.infoWindow&&a.infoWindow.close()},j.prototype.removeMarker=function(a){for(var b=0;b<this.markers.length;b++)if(this.markers[b]===a){this.markers[b].setMap(null),this.markers.splice(b,1),this.markerClusterer&&this.markerClusterer.removeMarker(a),j.fire("marker_removed",a,this);break}return a},j.prototype.removeMarkers=function(a){var b=[];if("undefined"==typeof a){for(var c=0;c<this.markers.length;c++){var d=this.markers[c];d.setMap(null),j.fire("marker_removed",d,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=b}else{for(var c=0;c<a.length;c++){var e=this.markers.indexOf(a[c]);if(e>-1){var d=this.markers[e];d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),j.fire("marker_removed",d,this)}}for(var c=0;c<this.markers.length;c++){var d=this.markers[c];null!=d.getMap()&&b.push(d)}this.markers=b}},j.prototype.drawOverlay=function(a){var b=new google.maps.OverlayView,c=!0;return b.setMap(this.map),null!=a.auto_show&&(c=a.auto_show),b.onAdd=function(){var c=document.createElement("div");c.style.borderStyle="none",c.style.borderWidth="0px",c.style.position="absolute",c.style.zIndex=100,c.innerHTML=a.content,b.el=c,a.layer||(a.layer="overlayLayer");var d=this.getPanes(),e=d[a.layer],f=["contextmenu","DOMMouseScroll","dblclick","mousedown"];e.appendChild(c);for(var g=0;g<f.length;g++)!function(a,b){google.maps.event.addDomListener(a,b,function(a){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(a.cancelBubble=!0,a.returnValue=!1):a.stopPropagation()})}(c,f[g]);a.click&&(d.overlayMouseTarget.appendChild(b.el),google.maps.event.addDomListener(b.el,"click",function(){a.click.apply(b,[b])})),google.maps.event.trigger(this,"ready")},b.draw=function(){var d=this.getProjection(),e=d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat,a.lng));a.horizontalOffset=a.horizontalOffset||0,a.verticalOffset=a.verticalOffset||0;var f=b.el,g=f.children[0],h=g.clientHeight,i=g.clientWidth;switch(a.verticalAlign){case"top":f.style.top=e.y-h+a.verticalOffset+"px";break;default:case"middle":f.style.top=e.y-h/2+a.verticalOffset+"px";break;case"bottom":f.style.top=e.y+a.verticalOffset+"px"}switch(a.horizontalAlign){case"left":f.style.left=e.x-i+a.horizontalOffset+"px";break;default:case"center":f.style.left=e.x-i/2+a.horizontalOffset+"px";break;case"right":f.style.left=e.x+a.horizontalOffset+"px"}f.style.display=c?"block":"none",c||a.show.apply(this,[f])},b.onRemove=function(){var c=b.el;a.remove?a.remove.apply(this,[c]):(b.el.parentNode.removeChild(b.el),b.el=null)},this.overlays.push(b),b},j.prototype.removeOverlay=function(a){for(var b=0;b<this.overlays.length;b++)if(this.overlays[b]===a){this.overlays[b].setMap(null),this.overlays.splice(b,1);break}},j.prototype.removeOverlays=function(){for(var a,b=0;a=this.overlays[b];b++)a.setMap(null);this.overlays=[]},j.prototype.drawPolyline=function(a){var b=[],c=a.path;if(c.length)if(void 0===c[0][0])b=c;else for(var d,e=0;d=c[e];e++)b.push(new google.maps.LatLng(d[0],d[1]));var f={map:this.map,path:b,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight,geodesic:a.geodesic,clickable:!0,editable:!1,visible:!0};a.hasOwnProperty("clickable")&&(f.clickable=a.clickable),a.hasOwnProperty("editable")&&(f.editable=a.editable),a.hasOwnProperty("icons")&&(f.icons=a.icons),a.hasOwnProperty("zIndex")&&(f.zIndex=a.zIndex);for(var g=new google.maps.Polyline(f),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(b,c){a[c]&&google.maps.event.addListener(b,c,function(b){a[c].apply(this,[b])})}(g,h[i]);return this.polylines.push(g),j.fire("polyline_added",g,this),g},j.prototype.removePolyline=function(a){for(var b=0;b<this.polylines.length;b++)if(this.polylines[b]===a){this.polylines[b].setMap(null),this.polylines.splice(b,1),j.fire("polyline_removed",a,this);break}},j.prototype.removePolylines=function(){for(var a,b=0;a=this.polylines[b];b++)a.setMap(null);this.polylines=[]},j.prototype.drawCircle=function(b){b=a({map:this.map,center:new google.maps.LatLng(b.lat,b.lng)},b),delete b.lat,delete b.lng;for(var c=new google.maps.Circle(b),d=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],e=0;e<d.length;e++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(c,d[e]);return this.polygons.push(c),c},j.prototype.drawRectangle=function(b){b=a({map:this.map},b);var c=new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0],b.bounds[0][1]),new google.maps.LatLng(b.bounds[1][0],b.bounds[1][1]));b.bounds=c;for(var d=new google.maps.Rectangle(b),e=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],f=0;f<e.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e[f]);return this.polygons.push(d),d},j.prototype.drawPolygon=function(d){var e=!1;d.hasOwnProperty("useGeoJSON")&&(e=d.useGeoJSON),delete d.useGeoJSON,d=a({map:this.map},d),0==e&&(d.paths=[d.paths.slice(0)]),d.paths.length>0&&d.paths[0].length>0&&(d.paths=c(b(d.paths,f,e)));for(var g=new google.maps.Polygon(d),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(a,b){d[b]&&google.maps.event.addListener(a,b,function(a){d[b].apply(this,[a])})}(g,h[i]);return this.polygons.push(g),j.fire("polygon_added",g,this),g},j.prototype.removePolygon=function(a){for(var b=0;b<this.polygons.length;b++)if(this.polygons[b]===a){this.polygons[b].setMap(null),this.polygons.splice(b,1),j.fire("polygon_removed",a,this);break}},j.prototype.removePolygons=function(){for(var a,b=0;a=this.polygons[b];b++)a.setMap(null);this.polygons=[]},j.prototype.getFromFusionTables=function(a){var b=a.events;delete a.events;var c=a,d=new google.maps.FusionTablesLayer(c);for(var e in b)!function(a,c){google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e);return this.layers.push(d),d},j.prototype.loadFromFusionTables=function(a){var b=this.getFromFusionTables(a);return b.setMap(this.map),b},j.prototype.getFromKML=function(a){var b=a.url,c=a.events;delete a.url,delete a.events;var d=a,e=new google.maps.KmlLayer(b,d);for(var f in c)!function(a,b){google.maps.event.addListener(a,b,function(a){c[b].apply(this,[a])})}(e,f);return this.layers.push(e),e},j.prototype.loadFromKML=function(a){var b=this.getFromKML(a);return b.setMap(this.map),b},j.prototype.addLayer=function(a,b){b=b||{};var c;switch(a){case"weather":this.singleLayers.weather=c=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=c=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=c=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=c=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=c=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=c=new google.maps.panoramio.PanoramioLayer,c.setTag(b.filter),delete b.filter,b.click&&google.maps.event.addListener(c,"click",function(a){b.click(a),delete b.click});break;case"places":if(this.singleLayers.places=c=new google.maps.places.PlacesService(this.map),b.search||b.nearbySearch||b.radarSearch){var d={bounds:b.bounds||null,keyword:b.keyword||null,location:b.location||null,name:b.name||null,radius:b.radius||null,rankBy:b.rankBy||null,types:b.types||null};b.radarSearch&&c.radarSearch(d,b.radarSearch),b.search&&c.search(d,b.search),b.nearbySearch&&c.nearbySearch(d,b.nearbySearch)}if(b.textSearch){var e={bounds:b.bounds||null,location:b.location||null,query:b.query||null,radius:b.radius||null};c.textSearch(e,b.textSearch)}}return void 0!==c?("function"==typeof c.setOptions&&c.setOptions(b),"function"==typeof c.setMap&&c.setMap(this.map),c):void 0},j.prototype.removeLayer=function(a){if("string"==typeof a&&void 0!==this.singleLayers[a])this.singleLayers[a].setMap(null),delete this.singleLayers[a];else for(var b=0;b<this.layers.length;b++)if(this.layers[b]===a){this.layers[b].setMap(null),this.layers.splice(b,1);break}};var k,l;return j.prototype.getRoutes=function(b){switch(b.travelMode){case"bicycling":k=google.maps.TravelMode.BICYCLING;break;case"transit":k=google.maps.TravelMode.TRANSIT;break;case"driving":k=google.maps.TravelMode.DRIVING;break;default:k=google.maps.TravelMode.WALKING}l="imperial"===b.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var c={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},d=a(c,b);d.origin=/string/.test(typeof b.origin)?b.origin:new google.maps.LatLng(b.origin[0],b.origin[1]),d.destination=/string/.test(typeof b.destination)?b.destination:new google.maps.LatLng(b.destination[0],b.destination[1]),d.travelMode=k,d.unitSystem=l,delete d.callback,delete d.error;var e=[],f=new google.maps.DirectionsService;f.route(d,function(a,c){if(c===google.maps.DirectionsStatus.OK){for(var d in a.routes)a.routes.hasOwnProperty(d)&&e.push(a.routes[d]);b.callback&&b.callback(e,a,c)}else b.error&&b.error(a,c)})},j.prototype.removeRoutes=function(){this.routes.length=0},j.prototype.getElevations=function(d){d=a({locations:[],path:!1,samples:256},d),d.locations.length>0&&d.locations[0].length>0&&(d.locations=c(b([d.locations],f,!1)));var e=d.callback;delete d.callback;var g=new google.maps.ElevationService;if(d.path){var h={path:d.locations,samples:d.samples};g.getElevationAlongPath(h,function(a,b){e&&"function"==typeof e&&e(a,b)})}else delete d.path,delete d.samples,g.getElevationForLocations(d,function(a,b){e&&"function"==typeof e&&e(a,b)})},j.prototype.cleanRoute=j.prototype.removePolylines,j.prototype.renderRoute=function(b,c){var d,e="string"==typeof c.panel?document.getElementById(c.panel.replace("#","")):c.panel;c.panel=e,c=a({map:this.map},c),d=new google.maps.DirectionsRenderer(c),this.getRoutes({origin:b.origin,destination:b.destination,travelMode:b.travelMode,waypoints:b.waypoints,unitSystem:b.unitSystem,error:b.error,avoidHighways:b.avoidHighways,avoidTolls:b.avoidTolls,optimizeWaypoints:b.optimizeWaypoints,callback:function(a,b,c){c===google.maps.DirectionsStatus.OK&&d.setDirections(b)}})},j.prototype.drawRoute=function(a){var b=this;this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,avoidHighways:a.avoidHighways,avoidTolls:a.avoidTolls,optimizeWaypoints:a.optimizeWaypoints,callback:function(c){if(c.length>0){var d={path:c[c.length-1].overview_path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(d.icons=a.icons),b.drawPolyline(d),a.callback&&a.callback(c[c.length-1])}}})},j.prototype.travelRoute=function(a){if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(b){if(b.length>0&&a.start&&a.start(b[b.length-1]),b.length>0&&a.step){var c=b[b.length-1];if(c.legs.length>0)for(var d,e=c.legs[0].steps,f=0;d=e[f];f++)d.step_number=f,a.step(d,c.legs[0].steps.length-1)}b.length>0&&a.end&&a.end(b[b.length-1])}});else if(a.route&&a.route.legs.length>0)for(var b,c=a.route.legs[0].steps,d=0;b=c[d];d++)b.step_number=d,a.step(b)},j.prototype.drawSteppedRoute=function(a){var b=this;if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,error:a.error,callback:function(c){if(c.length>0&&a.start&&a.start(c[c.length-1]),c.length>0&&a.step){var d=c[c.length-1];if(d.legs.length>0)for(var e,f=d.legs[0].steps,g=0;e=f[g];g++){e.step_number=g;var h={path:e.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(h.icons=a.icons),b.drawPolyline(h),a.step(e,d.legs[0].steps.length-1)}}c.length>0&&a.end&&a.end(c[c.length-1])}});else if(a.route&&a.route.legs.length>0)for(var c,d=a.route.legs[0].steps,e=0;c=d[e];e++){c.step_number=e;var f={path:c.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(f.icons=a.icons),b.drawPolyline(f),a.step(c)}},j.Route=function(a){this.origin=a.origin,this.destination=a.destination,this.waypoints=a.waypoints,this.map=a.map,this.route=a.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var b={path:new google.maps.MVCArray,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(b.icons=a.icons),this.polyline=this.map.drawPolyline(b).getPath()},j.Route.prototype.getRoute=function(a){var b=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:a.travelMode,waypoints:this.waypoints||[],error:a.error,callback:function(){b.route=e[0],a.callback&&a.callback.call(b)}})},j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.pop()}},j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.push(a[b]);this.step_count++}},j.prototype.checkGeofence=function(a,b,c){return c.containsLatLng(new google.maps.LatLng(a,b))},j.prototype.checkMarkerGeofence=function(a,b){if(a.fences)for(var c,d=0;c=a.fences[d];d++){var e=a.getPosition();this.checkGeofence(e.lat(),e.lng(),c)||b(a,c)}},j.prototype.toImage=function(a){var a=a||{},b={};if(b.size=a.size||[this.el.clientWidth,this.el.clientHeight],b.lat=this.getCenter().lat(),b.lng=this.getCenter().lng(),this.markers.length>0){b.markers=[];for(var c=0;c<this.markers.length;c++)b.markers.push({lat:this.markers[c].getPosition().lat(),lng:this.markers[c].getPosition().lng()})}if(this.polylines.length>0){var d=this.polylines[0];b.polyline={},b.polyline.path=google.maps.geometry.encoding.encodePath(d.getPath()),b.polyline.strokeColor=d.strokeColor,b.polyline.strokeOpacity=d.strokeOpacity,b.polyline.strokeWeight=d.strokeWeight}return j.staticMapURL(b)},j.staticMapURL=function(a){function b(a,b){if("#"===a[0]&&(a=a.replace("#","0x"),b)){if(b=parseFloat(b),b=Math.min(1,Math.max(b,0)),0===b)return"0x00000000";b=(255*b).toString(16),1===b.length&&(b+=b),a=a.slice(0,8)+b}return a}var c,d=[],e=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";a.url&&(e=a.url,delete a.url),e+="?";var f=a.markers;delete a.markers,!f&&a.marker&&(f=[a.marker],delete a.marker);var g=a.styles;delete a.styles;var h=a.polyline;if(delete a.polyline,a.center)d.push("center="+a.center),delete a.center;else if(a.address)d.push("center="+a.address),delete a.address;else if(a.lat)d.push(["center=",a.lat,",",a.lng].join("")),delete a.lat,delete a.lng;else if(a.visible){var i=encodeURI(a.visible.join("|"));d.push("visible="+i)}var j=a.size;j?(j.join&&(j=j.join("x")),delete a.size):j="630x300",d.push("size="+j),a.zoom||a.zoom===!1||(a.zoom=15);var k=a.hasOwnProperty("sensor")?!!a.sensor:!0;delete a.sensor,d.push("sensor="+k);for(var l in a)a.hasOwnProperty(l)&&d.push(l+"="+a[l]);if(f)for(var m,n,o=0;c=f[o];o++){m=[],c.size&&"normal"!==c.size?(m.push("size:"+c.size),delete c.size):c.icon&&(m.push("icon:"+encodeURI(c.icon)),delete c.icon),c.color&&(m.push("color:"+c.color.replace("#","0x")),delete c.color),c.label&&(m.push("label:"+c.label[0].toUpperCase()),delete c.label),n=c.address?c.address:c.lat+","+c.lng,delete c.address,delete c.lat,delete c.lng;for(var l in c)c.hasOwnProperty(l)&&m.push(l+":"+c[l]);m.length||0===o?(m.push(n),m=m.join("|"),d.push("markers="+encodeURI(m))):(m=d.pop()+encodeURI("|"+n),d.push(m))}if(g)for(var o=0;o<g.length;o++){var p=[];g[o].featureType&&p.push("feature:"+g[o].featureType.toLowerCase()),g[o].elementType&&p.push("element:"+g[o].elementType.toLowerCase());for(var q=0;q<g[o].stylers.length;q++)for(var r in g[o].stylers[q]){var s=g[o].stylers[q][r];("hue"==r||"color"==r)&&(s="0x"+s.substring(1)),p.push(r+":"+s)}var t=p.join("|");""!=t&&d.push("style="+t)}if(h){if(c=h,h=[],c.strokeWeight&&h.push("weight:"+parseInt(c.strokeWeight,10)),c.strokeColor){var u=b(c.strokeColor,c.strokeOpacity);h.push("color:"+u)}if(c.fillColor){var v=b(c.fillColor,c.fillOpacity);h.push("fillcolor:"+v)}var w=c.path;if(w.join)for(var x,q=0;x=w[q];q++)h.push(x.join(","));else h.push("enc:"+w);h=h.join("|"),d.push("path="+encodeURI(h))}var y=window.devicePixelRatio||1;return d.push("scale="+y),d=d.join("&"),e+d},j.prototype.addMapType=function(a,b){if(!b.hasOwnProperty("getTileUrl")||"function"!=typeof b.getTileUrl)throw"'getTileUrl' function required.";b.tileSize=b.tileSize||new google.maps.Size(256,256);var c=new google.maps.ImageMapType(b);this.map.mapTypes.set(a,c)},j.prototype.addOverlayMapType=function(a){if(!a.hasOwnProperty("getTile")||"function"!=typeof a.getTile)throw"'getTile' function required.";var b=a.index;delete a.index,this.map.overlayMapTypes.insertAt(b,a)},j.prototype.removeOverlayMapType=function(a){this.map.overlayMapTypes.removeAt(a)},j.prototype.addStyle=function(a){var b=new google.maps.StyledMapType(a.styles,{name:a.styledMapName});this.map.mapTypes.set(a.mapTypeId,b)},j.prototype.setStyle=function(a){this.map.setMapTypeId(a)},j.prototype.createPanorama=function(a){return a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||(a.lat=this.getCenter().lat(),a.lng=this.getCenter().lng()),this.panorama=j.createPanorama(a),this.map.setStreetView(this.panorama),this.panorama},j.createPanorama=function(b){var c=h(b.el,b.context);b.position=new google.maps.LatLng(b.lat,b.lng),delete b.el,delete b.context,delete b.lat,delete b.lng;for(var d=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],e=a({visible:!0},b),f=0;f<d.length;f++)delete e[d[f]];for(var g=new google.maps.StreetViewPanorama(c,e),f=0;f<d.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this)})}(g,d[f]);return g},j.prototype.on=function(a,b){return j.on(a,this,b)},j.prototype.off=function(a){j.off(a,this)},j.prototype.once=function(a,b){return j.once(a,this,b)},j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],j.on=function(a,b,c){if(-1==j.custom_events.indexOf(a))return b instanceof j&&(b=b.map),google.maps.event.addListener(b,a,c);var d={handler:c,eventName:a};return b.registered_events[a]=b.registered_events[a]||[],b.registered_events[a].push(d),d},j.off=function(a,b){-1==j.custom_events.indexOf(a)?(b instanceof j&&(b=b.map),google.maps.event.clearListeners(b,a)):b.registered_events[a]=[]},j.once=function(a,b,c){return-1==j.custom_events.indexOf(a)?(b instanceof j&&(b=b.map),google.maps.event.addListenerOnce(b,a,c)):void 0},j.fire=function(a,b,c){if(-1==j.custom_events.indexOf(a))google.maps.event.trigger(b,a,Array.prototype.slice.apply(arguments).slice(2));else if(a in c.registered_events)for(var d=c.registered_events[a],e=0;e<d.length;e++)!function(a,b,c){a.apply(b,[c])}(d[e].handler,c,b)},j.geolocate=function(a){var b=a.always||a.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.success(c),b&&b()},function(c){a.error(c),b&&b()},a.options):(a.not_supported(),b&&b())},j.geocode=function(a){this.geocoder=new google.maps.Geocoder;var b=a.callback;a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")&&(a.latLng=new google.maps.LatLng(a.lat,a.lng)),delete a.lat,delete a.lng,delete a.callback,this.geocoder.geocode(a,function(a,c){b(a,c)})},"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(a){for(var b,c=new google.maps.LatLngBounds,d=this.getPaths(),e=0;e<d.getLength();e++){b=d.getAt(e);for(var f=0;f<b.getLength();f++)c.extend(b.getAt(f))}return c}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(a){var b=this.getBounds();if(null!==b&&!b.contains(a))return!1;for(var c=!1,d=this.getPaths().getLength(),e=0;d>e;e++)for(var f=this.getPaths().getAt(e),g=f.getLength(),h=g-1,i=0;g>i;i++){var j=f.getAt(i),k=f.getAt(h);(j.lng()<a.lng()&&k.lng()>=a.lng()||k.lng()<a.lng()&&j.lng()>=a.lng())&&j.lat()+(a.lng()-j.lng())/(k.lng()-j.lng())*(k.lat()-j.lat())<a.lat()&&(c=!c),h=i}return c}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(a){return google.maps.geometry?google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),a)<=this.getRadius():!0}),google.maps.Rectangle.prototype.containsLatLng=function(a){return this.getBounds().contains(a)},google.maps.LatLngBounds.prototype.containsLatLng=function(a){return this.contains(a)},google.maps.Marker.prototype.setFences=function(a){this.fences=a},google.maps.Marker.prototype.addFence=function(a){this.fences.push(a)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),j});
//# sourceMappingURL=gmaps.min.js.map
/**
 * jVectorMap version 2.0.2
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 */

(function( $ ){
  var apiParams = {
        set: {
          colors: 1,
          values: 1,
          backgroundColor: 1,
          scaleColors: 1,
          normalizeFunction: 1,
          focus: 1
        },
        get: {
          selectedRegions: 1,
          selectedMarkers: 1,
          mapObject: 1,
          regionName: 1
        }
      };

  $.fn.vectorMap = function(options) {
    var map,
        methodName,
        map = this.children('.jvectormap-container').data('mapObject');

    if (options === 'addMap') {
      jvm.Map.maps[arguments[1]] = arguments[2];
    } else if ((options === 'set' || options === 'get') && apiParams[options][arguments[1]]) {
      methodName = arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1);
      return map[options+methodName].apply(map, Array.prototype.slice.call(arguments, 2));
    } else {
      options = options || {};
      options.container = this;
      map = new jvm.Map(options);
    }

    return this;
  };
})( jQuery );
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {

  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function(child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function(target, source){
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function(values){
    var min = Number.MAX_VALUE,
        i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function(values){
    var max = Number.MIN_VALUE,
        i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function(object){
    var keys = [],
        key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function(object){
    var values = [],
        key,
        i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function(url){
    var deferred = new jvm.$.Deferred(),
        img = jvm.$('<img/>');

    img.error(function(){
      deferred.reject();
    }).load(function(){
      deferred.resolve(img);
    });
    img.attr('src', url);

    return deferred;
  },

  isImageUrl: function(s){
    return /\.\w{3,4}$/.test(s);
  }
};

jvm.$ = jQuery;

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  this.node.setAttribute(property, value);
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function(container, width, height){
  this.classPrefix = 'SVG';
  jvm.SVGCanvasElement.parentClass.call(this, 'svg');

  this.defsElement = new jvm.SVGElement('defs');
  this.node.appendChild( this.defsElement.node );

  jvm.AbstractCanvasElement.apply(this, arguments);
}

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function(width, height){
  this.width = width;
  this.height = height;
  this.node.setAttribute('width', width);
  this.node.setAttribute('height', height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.setAttribute('transform', 'scale('+scale+') translate('+transX+', '+transY+')');
};jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this;

  if (attr == 'image') {
    jvm.whenImageLoaded(value).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2);
      that.applyAttr('y', that.cy - that.height / 2);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\d+)e(-?\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\d)-/g, '$1,-')
            .replace(/^\s+/g, '')
            .replace(/\s+$/g, '')
            .replace(/\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+ticks[i].value+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numberic or color attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.min Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function(params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || 'fill';

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor = (params.attribute === 'fill' || params.attribute === 'stroke') ? jvm.ColorScale : jvm.NumericScale;
    this.scale = new scaleConstructor(params.scale, params.normalizeFunction, params.min, params.max);
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend($.extend({
      map: this.map,
      series: this
    }, this.params.legend))
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function(key, attr){
    var attrs = key,
        code;

    if (typeof key == 'string') {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(this.params.attribute, attrs[code]);
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function(values) {
    var max = -Number.MAX_VALUE,
        min = Number.MAX_VALUE,
        val,
        cc,
        attrs = {};

    if (!(this.scale instanceof jvm.OrdinalScale) && !(this.scale instanceof jvm.SimpleScale)) {
      // we have a color scale as an array
      if (typeof this.params.min === 'undefined' || typeof this.params.max === 'undefined') {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === 'undefined') {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === 'undefined') {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != 'indexOf') {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] = this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] = this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function(){
    var key,
        attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] = this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function(scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} normilizeFunction.
   */
  setNormalizeFunction: function(f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  }
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Boolean} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function(params) {
  var map = this,
      e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error('Attempt to use map which was not loaded: '+this.params.map);
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$('<div>').addClass('jvectormap-container');
  if (this.params.container) {
    this.params.container.append( this.container );
  }
  this.container.data('mapObject', this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function(){
    map.updateSize();
  }
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e]+'.jvectormap', this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height);

  if ( ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch) ) {
    if (this.params.bindTouchEvents) {
      this.bindContainerTouchEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === 'string') {
      this.params.focusOn = {region: this.params.focusOn};
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = {regions: this.params.focusOn};
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm.$('<div/>').addClass('jvectormap-legend-cnt jvectormap-legend-cnt-h');
  this.legendCntVertical = jvm.$('<div/>').addClass('jvectormap-legend-cnt jvectormap-legend-cnt-v');
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function(backgroundColor) {
    this.container.css('background-color', backgroundColor);
  },

  resize: function() {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function(){
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function() {
    var key,
        i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function() {
    var maxTransX,
        maxTransY,
        minTransX,
        minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger('viewportChange', [this.scale/this.baseScale, this.transX, this.transY]);
  },

  bindContainerEvents: function(){
    var mouseDown = false,
        oldPageX,
        oldPageY,
        map = this;

    if (this.params.panOnDrag) {
      this.container.mousemove(function(e){
        if (mouseDown) {
          map.transX -= (oldPageX - e.pageX) / map.scale;
          map.transY -= (oldPageY - e.pageY) / map.scale;

          map.applyTransform();

          oldPageX = e.pageX;
          oldPageY = e.pageY;
        }
        return false;
      }).mousedown(function(e){
        mouseDown = true;
        oldPageX = e.pageX;
        oldPageY = e.pageY;
        return false;
      });

      this.onContainerMouseUp = function(){
        mouseDown = false;
      };
      jvm.$('body').mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function(event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
            centerX = event.pageX - offset.left,
            centerY = event.pageY - offset.top,
            zoomStep = Math.pow(1 + map.params.zoomOnScrollSpeed / 1000, event.deltaFactor * event.deltaY);

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function(){
    var touchStartScale,
        touchStartDistance,
        map = this,
        touchX,
        touchY,
        centerTouchX,
        centerTouchY,
        lastTouchesLength,
        handleTouchEvent = function(e){
          var touches = e.originalEvent.touches,
              offset,
              scale,
              transXOld,
              transYOld;

          if (e.type == 'touchstart') {
            lastTouchesLength = 0;
          }

          if (touches.length == 1) {
            if (lastTouchesLength == 1) {
              transXOld = map.transX;
              transYOld = map.transY;
              map.transX -= (touchX - touches[0].pageX) / map.scale;
              map.transY -= (touchY - touches[0].pageY) / map.scale;
              map.applyTransform();
              map.tip.hide();
              if (transXOld != map.transX || transYOld != map.transY) {
                e.preventDefault();
              }
            }
            touchX = touches[0].pageX;
            touchY = touches[0].pageY;
          } else if (touches.length == 2) {
            if (lastTouchesLength == 2) {
              scale = Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2)
              ) / touchStartDistance;
              map.setScale(
                touchStartScale * scale,
                centerTouchX,
                centerTouchY
              )
              map.tip.hide();
              e.preventDefault();
            } else {
              offset = jvm.$(map.container).offset();
              if (touches[0].pageX > touches[1].pageX) {
                centerTouchX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
              } else {
                centerTouchX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
              }
              if (touches[0].pageY > touches[1].pageY) {
                centerTouchY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
              } else {
                centerTouchY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
              }
              centerTouchX -= offset.left;
              centerTouchY -= offset.top;
              touchStartScale = map.scale;
              touchStartDistance = Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2)
              );
            }
          }

          lastTouchesLength = touches.length;
        };

    jvm.$(this.container).bind('touchstart', handleTouchEvent);
    jvm.$(this.container).bind('touchmove', handleTouchEvent);
  },

  bindElementEvents: function(){
    var map = this,
        mouseMoved;

    this.container.mousemove(function(){
      mouseMoved = true;
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mouseover mouseout', function(e){
      var baseVal = jvm.$(this).attr('class').baseVal || jvm.$(this).attr('class'),
          type = baseVal.indexOf('jvectormap-region') === -1 ? 'marker' : 'region',
          code = type == 'region' ? jvm.$(this).attr('data-code') : jvm.$(this).attr('data-index'),
          element = type == 'region' ? map.regions[code].element : map.markers[code].element,
          tipText = type == 'region' ? map.mapData.paths[code].name : (map.markers[code].config.name || ''),
          tipShowEvent = jvm.$.Event(type+'TipShow.jvectormap'),
          overEvent = jvm.$.Event(type+'Over.jvectormap');

      if (e.type == 'mouseover') {
        map.container.trigger(overEvent, [code]);
        if (!overEvent.isDefaultPrevented()) {
          element.setHovered(true);
        }

        map.tip.text(tipText);
        map.container.trigger(tipShowEvent, [map.tip, code]);
        if (!tipShowEvent.isDefaultPrevented()) {
          map.tip.show();
          map.tipWidth = map.tip.width();
          map.tipHeight = map.tip.height();
        }
      } else {
        element.setHovered(false);
        map.tip.hide();
        map.container.trigger(type+'Out.jvectormap', [code]);
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mousedown', function(){
      mouseMoved = false;
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mouseup', function(){
      var baseVal = jvm.$(this).attr('class').baseVal ? jvm.$(this).attr('class').baseVal : jvm.$(this).attr('class'),
          type = baseVal.indexOf('jvectormap-region') === -1 ? 'marker' : 'region',
          code = type == 'region' ? jvm.$(this).attr('data-code') : jvm.$(this).attr('data-index'),
          clickEvent = jvm.$.Event(type+'Click.jvectormap'),
          element = type == 'region' ? map.regions[code].element : map.markers[code].element;

      if (!mouseMoved) {
        map.container.trigger(clickEvent, [code]);
        if ((type === 'region' && map.params.regionsSelectable) || (type === 'marker' && map.params.markersSelectable)) {
          if (!clickEvent.isDefaultPrevented()) {
            if (map.params[type+'sSelectableOne']) {
              map.clearSelected(type+'s');
            }
            element.setSelected(!element.isSelected);
          }
        }
      }
    });
  },

  bindZoomButtons: function() {
    var map = this;

    jvm.$('<div/>').addClass('jvectormap-zoomin').text('+').appendTo(this.container);
    jvm.$('<div/>').addClass('jvectormap-zoomout').html('&#x2212;').appendTo(this.container);

    this.container.find('.jvectormap-zoomin').click(function(){
      map.setScale(map.scale * map.params.zoomStep, map.width / 2, map.height / 2, false, map.params.zoomAnimate);
    });
    this.container.find('.jvectormap-zoomout').click(function(){
      map.setScale(map.scale / map.params.zoomStep, map.width / 2, map.height / 2, false, map.params.zoomAnimate);
    });
  },

  createTip: function(){
    var map = this;

    this.tip = jvm.$('<div/>').addClass('jvectormap-tip').appendTo(jvm.$('body'));

    this.container.mousemove(function(e){
      var left = e.pageX-15-map.tipWidth,
          top = e.pageY-15-map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top
      });
    });
  },

  setScale: function(scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event('zoom.jvectormap'),
        interval,
        that = this,
        i = 0,
        count = Math.abs(Math.round((scale - this.scale) * 60 / Math.max(scale, this.scale))),
        scaleStart,
        scaleDiff,
        transXStart,
        transXDiff,
        transYStart,
        transYDiff,
        transX,
        transY,
        deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != 'undefined' && typeof anchorY != 'undefined') {
      zoomStep = scale / this.scale;
      if (isCentered) {
        transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2;
        transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2;
      } else {
        transX = this.transX - (zoomStep - 1) / scale * anchorX;
        transY = this.transY - (zoomStep - 1) / scale * anchorY;
      }
    }

    if (animate && count > 0)  {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function(){
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale/that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale/this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function(config){
    var bbox,
        itemBbox,
        newBbox,
        codes,
        i,
        point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == 'undefined') {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width: Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) - Math.min(bbox.x, itemBbox.x),
                height: Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) - Math.min(bbox.y, itemBbox.y)
              }
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        - (bbox.x + bbox.width / 2),
        - (bbox.y + bbox.height / 2),
        true,
        config.animate
      );
    } else {
      if (config.lat && config.lng) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(config.scale * this.baseScale, config.x, config.y, true, config.animate);
    }
  },

  getSelected: function(type){
    var key,
        selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function(){
    return this.getSelected('regions');
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function(){
    return this.getSelected('markers');
  },

  setSelected: function(type, keys){
    var i;

    if (typeof keys != 'object') {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function(keys){
    this.setSelected('regions', keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function(keys){
    this.setSelected('markers', keys);
  },

  clearSelected: function(type){
    var select = {},
        selected = this.getSelected(type),
        i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    };

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function(){
    this.clearSelected('regions');
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function(){
    this.clearSelected('markers');
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function(){
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function(code){
    return this.mapData.paths[code].name;
  },

  createRegions: function(){
    var key,
        region,
        map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, this.params.regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label: this.canvas.mode != 'vml' ? (this.params.labels && this.params.labels.regions) : null
      });

      jvm.$(region.shape).bind('selected', function(e, isSelected){
        map.container.trigger('regionSelected.jvectormap', [jvm.$(this.node).attr('data-code'), isSelected, map.getSelectedRegions()]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key]
      };
    }
  },

  createMarkers: function(markers) {
    var i,
        marker,
        point,
        markerConfig,
        markersArray,
        map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig = markers[i] instanceof Array ? {latLng: markers[i]} : markers[i];
      point = this.getMarkerPosition( markerConfig );

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {initial: markerConfig.style || {}}),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label: this.canvas.mode != 'vml' ? (this.params.labels && this.params.labels.markers) : null
        });

        jvm.$(marker.shape).bind('selected', function(e, isSelected){
          map.container.trigger('markerSelected.jvectormap', [jvm.$(this.node).attr('data-index'), isSelected, map.getSelectedMarkers()]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = {element: marker, config: markerConfig};
      }
    }
  },

  repositionMarkers: function() {
    var i,
        point;

    for (i in this.markers) {
      point = this.getMarkerPosition( this.markers[i].config );
      if (point !== false) {
        this.markers[i].element.setStyle({cx: point.x, cy: point.y});
      }
    }
  },

  repositionLabels: function() {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function(markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0]*this.scale + this.transX*this.scale,
        y: markerConfig.coords[1]*this.scale + this.transY*this.scale
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function(key, marker, seriesData){
    var markers = {},
        data = [],
        values,
        i,
        seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== 'undefined') {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function(markers, seriesData){
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    };
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function(markers){
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[ markers[i] ].element.remove();
      delete this.markers[ markers[i] ];
    };
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function(){
    var i,
        markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers)
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function(lat, lng) {
    var point,
        proj = jvm.Map.maps[this.params.map].projection,
        centralMeridian = proj.centralMeridian,
        inset,
        bbox;

    if (lng < (-180 + centralMeridian)) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x = (point.x - bbox[0].x) / (bbox[1].x - bbox[0].x) * inset.width * this.scale;
      point.y = (point.y - bbox[0].y) / (bbox[1].y - bbox[0].y) * inset.height * this.scale;

      return {
        x: point.x + this.transX*this.scale + inset.left*this.scale,
        y: point.y + this.transY*this.scale + inset.top*this.scale
      };
     } else {
       return false;
     }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function(x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
        centralMeridian = proj.centralMeridian,
        insets = jvm.Map.maps[this.params.map].insets,
        i,
        inset,
        bbox,
        nx,
        ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX*this.scale + inset.left*this.scale);
      ny = y - (this.transY*this.scale + inset.top*this.scale);

      nx = (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny = (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) + bbox[0].y;

      if (nx > bbox[0].x && nx < bbox[1].x && ny > bbox[0].y && ny < bbox[1].y) {
        return jvm.Proj[proj.type + '_inv'](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function(x, y){
    var insets = jvm.Map.maps[this.params.map].insets,
        i,
        bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function(){
    var i,
        key;

    this.series = {
      markers: [],
      regions: []
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function(){
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind('resize', this.onResize);
    jvm.$('body').unbind('mouseup', this.onContainerMouseUp);
  }
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: 'world_mill_en',
  backgroundColor: '#505050',
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: 'white',
      "fill-opacity": 1,
      stroke: 'none',
      "stroke-width": 0,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: 'pointer'
    },
    selected: {
      fill: 'yellow'
    },
    selectedHover: {
    }
  },
  regionLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  },
  markerStyle: {
    initial: {
      fill: 'grey',
      stroke: '#505050',
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5
    },
    hover: {
      stroke: 'black',
      "stroke-width": 2,
      cursor: 'pointer'
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {
    }
  },
  markerLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  }
};
jvm.Map.apiEvents = {
  onRegionTipShow: 'regionTipShow',
  onRegionOver: 'regionOver',
  onRegionOut: 'regionOut',
  onRegionClick: 'regionClick',
  onRegionSelected: 'regionSelected',
  onMarkerTipShow: 'markerTipShow',
  onMarkerOver: 'markerOver',
  onMarkerOut: 'markerOut',
  onMarkerClick: 'markerClick',
  onMarkerSelected: 'markerSelected',
  onViewportChange: 'viewportChange'
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function go generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function(params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [ this.addMap(this.params.main.map, this.params.main) ];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};

  this.params.container.css({position: 'relative'});
  this.backButton = jvm.$('<div/>').addClass('jvectormap-goback').text('Back').appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function(){
    that.goBack();
  });

  this.spinner = jvm.$('<div/>').addClass('jvectormap-spinner').appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function(name, config){
    var cnt = jvm.$('<div/>').css({
      width: '100%',
      height: '100%'
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, {container: cnt}));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on('regionClick.jvectormap', {scope: this}, function(e, code){
        var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

        if (!multimap.drillDownPromise || multimap.drillDownPromise.state() !== 'pending') {
          multimap.drillDown(mapName, code);
        }
      });
    }


    return this.maps[name];
  },

  downloadMap: function(code){
    var that = this,
        deferred = jvm.$.Deferred();

    if (!this.mapsLoaded[code]) {
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(function(){
        that.mapsLoaded[code] = true;
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function(name, code){
    var currentMap = this.history[this.history.length - 1],
        that = this,
        focusPromise = currentMap.setFocus({region: code, animate: true}),
        downloadPromise = this.downloadMap(code);

    focusPromise.then(function(){
      if (downloadPromise.state() === 'pending') {
        that.spinner.show();
      }
    });
    downloadPromise.always(function(){
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function(){
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        that.addMap(name, {map: name, multiMapLevel: currentMap.params.multiMapLevel + 1});
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push( that.maps[name] );
      that.backButton.show();
    });
  },

  goBack: function(){
    var currentMap = this.history.pop(),
        prevMap = this.history[this.history.length - 1],
        that = this;

    currentMap.setFocus({scale: 1, x: 0.5, y: 0.5, animate: true}).then(function(){
      currentMap.params.container.hide();
      prevMap.params.container.show();
      prevMap.updateSize();
      if (that.history.length === 1) {
        that.backButton.hide();
      }
      prevMap.setFocus({scale: 1, x: 0.5, y: 0.5, animate: true});
    });
  }
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function(code, multiMap){
    return code.toLowerCase()+'_'+multiMap.defaultProjection+'_en';
  },
  mapUrlByCode: function(code, multiMap){
    return 'jquery-jvectormap-data-'+code.toLowerCase()+'-'+multiMap.defaultProjection+'-en.js';
  }
}

jQuery.fn.vectorMap('addMap', 'world_mill_en',{"insets": [{"width": 900, "top": 0, "height": 440.70631074413296, "bbox": [{"y": -12671671.123330014, "x": -20004297.151525836}, {"y": 6930392.02513512, "x": 20026572.39474939}], "left": 0}], "paths": {"BD": {"path": "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z", "name": "Bangladesh"}, "BE": {"path": "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z", "name": "Belgium"}, "BF": {"path": "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z", "name": "Burkina Faso"}, "BG": {"path": "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z", "name": "Bulgaria"}, "BA": {"path": "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z", "name": "Bosnia and Herz."}, "BN": {"path": "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z", "name": "Brunei"}, "BO": {"path": "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z", "name": "Bolivia"}, "JP": {"path": "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z", "name": "Japan"}, "BI": {"path": "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z", "name": "Burundi"}, "BJ": {"path": "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z", "name": "Benin"}, "BT": {"path": "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z", "name": "Bhutan"}, "JM": {"path": "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z", "name": "Jamaica"}, "BW": {"path": "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z", "name": "Botswana"}, "BR": {"path": "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z", "name": "Brazil"}, "BS": {"path": "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z", "name": "Bahamas"}, "BY": {"path": "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z", "name": "Belarus"}, "BZ": {"path": "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z", "name": "Belize"}, "RU": {"path": "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z", "name": "Russia"}, "RW": {"path": "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z", "name": "Rwanda"}, "RS": {"path": "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z", "name": "Serbia"}, "LT": {"path": "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z", "name": "Lithuania"}, "LU": {"path": "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z", "name": "Luxembourg"}, "LR": {"path": "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z", "name": "Liberia"}, "RO": {"path": "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z", "name": "Romania"}, "GW": {"path": "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z", "name": "Guinea-Bissau"}, "GT": {"path": "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z", "name": "Guatemala"}, "GR": {"path": "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z", "name": "Greece"}, "GQ": {"path": "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z", "name": "Eq. Guinea"}, "GY": {"path": "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z", "name": "Guyana"}, "GE": {"path": "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z", "name": "Georgia"}, "GB": {"path": "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z", "name": "United Kingdom"}, "GA": {"path": "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z", "name": "Gabon"}, "GN": {"path": "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z", "name": "Guinea"}, "GM": {"path": "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z", "name": "Gambia"}, "GL": {"path": "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z", "name": "Greenland"}, "KW": {"path": "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z", "name": "Kuwait"}, "GH": {"path": "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z", "name": "Ghana"}, "OM": {"path": "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z", "name": "Oman"}, "_1": {"path": "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z", "name": "Somaliland"}, "_0": {"path": "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z", "name": "Kosovo"}, "JO": {"path": "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z", "name": "Jordan"}, "HR": {"path": "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z", "name": "Croatia"}, "HT": {"path": "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z", "name": "Haiti"}, "HU": {"path": "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z", "name": "Hungary"}, "HN": {"path": "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z", "name": "Honduras"}, "PR": {"path": "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z", "name": "Puerto Rico"}, "PS": {"path": "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z", "name": "Palestine"}, "PT": {"path": "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z", "name": "Portugal"}, "PY": {"path": "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z", "name": "Paraguay"}, "PA": {"path": "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z", "name": "Panama"}, "PG": {"path": "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z", "name": "Peru"}, "PK": {"path": "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z", "name": "Pakistan"}, "PH": {"path": "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z", "name": "Philippines"}, "PL": {"path": "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z", "name": "Poland"}, "-99": {"path": "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z", "name": "N. Cyprus"}, "ZM": {"path": "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z", "name": "Zambia"}, "EH": {"path": "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z", "name": "W. Sahara"}, "EE": {"path": "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z", "name": "Estonia"}, "EG": {"path": "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z", "name": "Egypt"}, "ZA": {"path": "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z", "name": "South Africa"}, "EC": {"path": "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z", "name": "Ecuador"}, "AL": {"path": "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z", "name": "Albania"}, "AO": {"path": "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z", "name": "Angola"}, "KZ": {"path": "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z", "name": "Kazakhstan"}, "ET": {"path": "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z", "name": "Ethiopia"}, "ZW": {"path": "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z", "name": "Zimbabwe"}, "ES": {"path": "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z", "name": "Spain"}, "ER": {"path": "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z", "name": "Eritrea"}, "ME": {"path": "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z", "name": "Montenegro"}, "MD": {"path": "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z", "name": "Moldova"}, "MG": {"path": "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z", "name": "Madagascar"}, "MA": {"path": "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z", "name": "Morocco"}, "UZ": {"path": "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z", "name": "Uzbekistan"}, "MM": {"path": "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z", "name": "Myanmar"}, "ML": {"path": "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z", "name": "Mali"}, "MN": {"path": "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z", "name": "Mongolia"}, "MK": {"path": "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z", "name": "Macedonia"}, "MW": {"path": "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z", "name": "Malawi"}, "MR": {"path": "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z", "name": "Mauritania"}, "UG": {"path": "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z", "name": "Uganda"}, "MY": {"path": "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z", "name": "Malaysia"}, "MX": {"path": "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z", "name": "Mexico"}, "VU": {"path": "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z", "name": "Vanuatu"}, "FR": {"path": "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z", "name": "France"}, "FI": {"path": "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z", "name": "Finland"}, "FJ": {"path": "M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z", "name": "Fiji"}, "FK": {"path": "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z", "name": "Falkland Is."}, "NI": {"path": "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z", "name": "Nicaragua"}, "NL": {"path": "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z", "name": "Netherlands"}, "NO": {"path": "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z", "name": "Norway"}, "NA": {"path": "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z", "name": "Namibia"}, "NC": {"path": "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z", "name": "New Caledonia"}, "NE": {"path": "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z", "name": "Niger"}, "NG": {"path": "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z", "name": "Nigeria"}, "NZ": {"path": "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z", "name": "New Zealand"}, "NP": {"path": "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z", "name": "Nepal"}, "CI": {"path": "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z", "name": "C\u00f4te d'Ivoire"}, "CH": {"path": "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z", "name": "Switzerland"}, "CO": {"path": "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z", "name": "Colombia"}, "CN": {"path": "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z", "name": "China"}, "CM": {"path": "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z", "name": "Cameroon"}, "CL": {"path": "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z", "name": "Chile"}, "CA": {"path": "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z", "name": "Canada"}, "CG": {"path": "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z", "name": "Congo"}, "CF": {"path": "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z", "name": "Central African Rep."}, "CD": {"path": "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z", "name": "Dem. Rep. Congo"}, "CZ": {"path": "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z", "name": "Czech Rep."}, "CY": {"path": "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z", "name": "Cyprus"}, "CR": {"path": "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z", "name": "Costa Rica"}, "CU": {"path": "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z", "name": "Cuba"}, "SZ": {"path": "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z", "name": "Swaziland"}, "SY": {"path": "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z", "name": "Syria"}, "KG": {"path": "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z", "name": "Kyrgyzstan"}, "KE": {"path": "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z", "name": "Kenya"}, "SS": {"path": "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z", "name": "S. Sudan"}, "SR": {"path": "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z", "name": "Suriname"}, "KH": {"path": "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z", "name": "Cambodia"}, "SV": {"path": "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z", "name": "El Salvador"}, "SK": {"path": "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z", "name": "Slovakia"}, "KR": {"path": "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z", "name": "Korea"}, "SI": {"path": "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z", "name": "Slovenia"}, "KP": {"path": "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z", "name": "Dem. Rep. Korea"}, "SO": {"path": "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z", "name": "Somalia"}, "SN": {"path": "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z", "name": "Senegal"}, "SL": {"path": "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z", "name": "Sierra Leone"}, "SB": {"path": "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z", "name": "Solomon Is."}, "SA": {"path": "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z", "name": "Saudi Arabia"}, "SE": {"path": "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z", "name": "Sweden"}, "SD": {"path": "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z", "name": "Sudan"}, "DO": {"path": "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z", "name": "Dominican Rep."}, "DJ": {"path": "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z", "name": "Djibouti"}, "DK": {"path": "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z", "name": "Denmark"}, "DE": {"path": "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z", "name": "Germany"}, "YE": {"path": "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z", "name": "Yemen"}, "AT": {"path": "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z", "name": "Austria"}, "DZ": {"path": "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z", "name": "Algeria"}, "US": {"path": "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z", "name": "United States"}, "LV": {"path": "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z", "name": "Latvia"}, "UY": {"path": "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z", "name": "Uruguay"}, "LB": {"path": "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z", "name": "Lebanon"}, "LA": {"path": "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z", "name": "Lao PDR"}, "TW": {"path": "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z", "name": "Taiwan"}, "TT": {"path": "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z", "name": "Turkey"}, "LK": {"path": "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z", "name": "Sri Lanka"}, "TN": {"path": "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z", "name": "Tunisia"}, "TL": {"path": "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z", "name": "Timor-Leste"}, "TM": {"path": "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z", "name": "Tajikistan"}, "LS": {"path": "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z", "name": "Lesotho"}, "TH": {"path": "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z", "name": "Thailand"}, "TF": {"path": "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z", "name": "Fr. S. Antarctic Lands"}, "TG": {"path": "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z", "name": "Togo"}, "TD": {"path": "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z", "name": "Chad"}, "LY": {"path": "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z", "name": "Libya"}, "AE": {"path": "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z", "name": "Venezuela"}, "AF": {"path": "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z", "name": "Afghanistan"}, "IQ": {"path": "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z", "name": "Iraq"}, "IS": {"path": "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z", "name": "Iceland"}, "IR": {"path": "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z", "name": "Iran"}, "AM": {"path": "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z", "name": "Armenia"}, "IT": {"path": "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z", "name": "Italy"}, "VN": {"path": "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z", "name": "Vietnam"}, "AR": {"path": "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z", "name": "Argentina"}, "AU": {"path": "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z", "name": "Australia"}, "IL": {"path": "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z", "name": "Israel"}, "IN": {"path": "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z", "name": "India"}, "TZ": {"path": "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z", "name": "Tanzania"}, "AZ": {"path": "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z", "name": "Azerbaijan"}, "IE": {"path": "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z", "name": "Ireland"}, "ID": {"path": "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z", "name": "Indonesia"}, "UA": {"path": "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z", "name": "Ukraine"}, "QA": {"path": "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z", "name": "Qatar"}, "MZ": {"path": "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z", "name": "Mozambique"}}, "height": 440.70631074413296, "projection": {"type": "mill", "centralMeridian": 11.5}, "width": 900.0});
jQuery.fn.vectorMap('addMap', 'in_mill',{"insets": [{"width": 900, "top": 0, "height": 932.9661457393942, "bbox": [{"y": -4125883.782575976, "x": 7589536.343670783}, {"y": -752405.3962423205, "x": 10843813.641475728}], "left": 0}], "paths": {"IN-BR": {"path": "M484.32,277.67l0.73,-0.96l-0.3,-0.93l-0.88,-0.99l2.18,-0.33l2.83,0.22l2.64,-2.44l0.65,0.88l1.12,0.53l0.73,1.16l1.44,0.13l0.88,1.39l0.78,0.52l8.92,1.6l1.49,1.54l0.75,2.31l-0.09,2.43l-1.0,2.2l0.17,0.95l0.56,0.5l3.94,1.04l1.49,-0.43l1.1,0.93l2.15,0.84l0.79,1.78l1.96,0.85l0.04,0.75l0.36,0.35l0.96,0.04l2.23,-0.69l0.89,0.36l0.08,1.86l1.02,1.19l3.03,0.83l1.86,-0.39l1.41,-1.3l1.63,-0.0l2.51,-1.3l2.45,-0.81l2.64,1.62l0.21,0.97l-0.22,2.39l0.42,1.46l2.16,1.84l1.01,-0.0l0.22,0.89l0.54,0.28l1.3,-0.5l2.57,-2.01l1.7,-0.38l3.07,1.67l1.2,0.08l1.34,0.59l2.79,-0.96l0.36,0.09l0.11,0.57l0.46,0.36l1.14,-0.05l4.28,1.79l1.88,1.41l4.91,2.34l0.65,-0.32l0.42,-0.67l1.5,0.42l1.07,-0.27l0.84,-0.55l0.93,-1.39l2.89,-1.18l1.56,-1.41l0.73,3.4l1.29,2.14l1.24,0.5l2.44,-0.41l0.71,1.14l2.25,0.92l0.7,-0.4l0.94,-1.66l1.64,-0.68l1.77,0.1l2.15,1.18l1.43,0.3l2.71,-1.46l0.9,0.58l0.74,0.03l0.64,-0.42l0.39,-1.06l1.69,0.41l1.28,-0.84l0.78,0.58l1.04,1.56l1.36,0.93l1.28,-0.0l1.4,-1.3l0.98,-1.67l0.32,-2.54l1.11,0.19l1.81,-0.54l-0.25,1.26l2.57,2.21l-0.61,0.46l-0.14,0.71l1.31,0.93l0.18,0.65l-0.99,0.12l-1.4,1.13l-1.21,0.45l-3.14,3.08l-1.92,1.35l-1.46,0.45l-1.05,1.31l-3.05,2.6l-0.73,2.89l-0.66,0.33l-0.26,0.54l0.49,1.44l1.99,1.18l1.38,2.54l1.16,1.11l1.88,0.79l1.0,0.91l0.39,1.89l-0.42,2.19l0.68,1.39l-1.31,-0.23l-0.83,-0.82l-1.07,-0.2l-2.31,1.07l-0.91,0.98l-2.54,1.15l-0.86,1.17l-0.03,0.52l1.06,1.26l0.71,0.03l1.1,2.34l-1.16,1.61l-1.13,-0.8l-2.11,0.07l-2.4,-0.65l-0.85,-1.16l-1.55,-0.73l-2.09,1.48l-1.42,3.04l-1.75,-0.38l-1.94,0.54l-0.7,1.28l-0.53,2.54l-1.11,-0.28l-1.23,0.43l-1.15,1.08l-0.95,1.56l-0.02,4.14l-1.58,2.6l0.22,1.29l-0.25,2.5l-0.67,2.32l-3.65,-0.85l-1.11,1.73l-0.08,0.78l-1.8,-0.56l-1.86,-1.14l-0.7,0.13l-0.57,0.88l-0.58,0.3l-1.44,0.17l-1.24,-0.58l-1.1,0.08l-2.84,2.71l-0.35,2.31l-0.66,0.61l-0.34,1.45l-4.74,-2.95l0.93,-1.5l-0.46,-2.24l-2.49,-0.71l-1.39,0.5l-1.2,-0.75l-0.53,-2.93l-0.94,-1.11l-1.16,-0.27l0.25,-0.54l-0.25,-0.67l-1.15,0.06l-1.82,1.29l-1.16,0.12l-1.33,-1.63l-1.34,-0.72l-2.71,0.04l-1.03,0.64l-0.64,1.13l-0.35,1.75l-1.32,0.86l0.46,1.43l-0.08,1.26l-2.09,-0.13l-1.88,1.89l-1.05,-0.3l-2.8,-0.01l-3.56,0.74l-0.45,0.74l-3.09,1.2l-0.45,0.51l-0.04,0.72l-1.53,1.38l0.11,-1.07l-0.45,-0.39l-3.33,1.32l-1.97,-0.04l-0.37,-0.38l-0.39,-2.05l-0.44,-0.37l-0.85,0.15l-0.38,-1.56l-1.06,-0.48l-3.69,2.24l-0.86,1.72l-2.29,-0.51l-1.24,1.5l-0.27,0.79l-0.51,0.49l-0.76,0.1l-1.39,-1.35l-2.08,-1.34l-1.51,-1.71l0.38,-0.69l-0.02,-1.06l-0.71,-1.19l-0.78,-0.19l-0.66,0.49l-0.73,-0.27l-1.47,0.23l-0.36,0.39l-0.0,1.03l-0.3,-0.98l-0.78,-0.09l-0.53,1.26l-0.76,-0.87l-1.6,-3.93l-0.85,-0.67l-0.69,0.16l-0.72,1.49l-2.03,1.42l-2.05,0.28l-1.37,-0.23l-0.86,0.31l-0.55,0.68l-1.94,0.19l-4.92,-0.81l0.03,-2.88l-0.43,-1.19l0.61,-1.14l-0.28,-1.64l-0.55,-0.62l-2.0,-0.71l-2.6,-2.78l0.35,-1.72l-0.05,-2.24l-1.27,-2.58l0.34,-3.02l0.62,-1.14l1.7,-1.27l11.06,-6.27l0.86,-0.66l0.44,-0.81l2.19,-0.92l3.62,-3.02l1.7,-2.16l2.53,-1.98l0.88,-0.25l0.74,0.43l-0.04,1.29l0.37,0.92l0.82,0.61l1.2,0.16l1.16,-0.32l0.69,-0.62l0.03,-1.0l-0.41,-1.1l0.17,-0.52l1.25,-0.49l1.93,1.49l1.54,0.6l1.32,0.01l2.29,-1.37l0.73,-1.81l-0.34,-0.78l-2.28,-2.05l-2.42,-0.33l-1.18,-0.71l-0.5,-0.92l-0.82,-0.67l-3.49,0.28l-0.93,-0.9l-0.59,-1.69l-0.97,-0.39l-0.91,-1.45l-2.52,-1.19l-1.28,-2.57l-1.04,-0.81l0.41,-0.8l2.49,-0.34l0.91,-0.6l1.31,0.19l0.82,-0.39l0.25,-0.57l-0.78,-1.52l0.71,-1.33l0.02,-0.66l-0.45,-0.55l-2.83,-0.73l-2.18,-1.58l-1.33,0.6l-1.31,-0.25l0.0,-2.11l0.43,0.93l0.6,0.15l0.88,-1.02l1.95,-0.62l1.34,-2.77l8.58,0.29l0.57,-0.33l0.16,-0.55l-0.47,-0.95l-2.41,-2.3l-0.79,-0.41l-1.03,-0.04l0.16,-2.85l-0.51,-1.31l-1.39,-0.46l-1.37,0.64l-2.26,-1.46l-1.22,-2.32l-0.19,-2.14l-0.79,-0.77l-0.57,-1.24l-1.11,-1.03l0.06,-2.11l-0.66,-1.12l-1.11,-0.96l0.19,-1.5l-0.52,-0.38l-0.62,0.03Z", "name": "Bihar"}, "IN-PY": {"path": "M432.94,621.28l0.12,-0.11l0.06,0.17l-0.03,-0.0l-0.16,-0.05ZM434.43,621.71l0.34,-0.0l0.03,0.12l-0.21,-0.03l-0.16,-0.08ZM355.48,770.41l0.24,-0.33l0.83,0.78l1.19,-0.08l-0.49,1.07l1.07,0.9l0.61,-0.12l1.09,-0.94l-0.97,2.81l-1.98,-0.18l-0.66,-0.53l0.23,-1.51l-1.16,-1.87ZM356.86,803.07l0.79,-0.26l-0.03,-0.93l0.92,0.32l0.8,-0.45l0.68,0.07l0.07,4.51l-0.78,-0.6l0.25,-0.69l-0.28,-0.5l-2.69,-0.99l0.29,-0.48ZM218.44,768.85l0.02,-2.05l1.16,0.12l1.63,-1.29l0.73,0.2l-0.37,0.3l-0.72,-0.09l-0.44,0.41l-0.27,1.66l-1.25,1.09l-0.5,-0.37Z", "name": "Puducherry"}, "IN-DD": {"path": "M144.48,504.35l0.06,-0.81l0.49,-1.24l0.48,0.6l0.06,1.15l-1.09,0.3Z", "name": "Daman and Diu"}, "IN-DN": {"path": "M146.62,508.98l1.49,0.02l0.64,-1.32l0.96,0.1l1.81,-1.3l0.0,1.2l1.42,0.47l-2.51,1.64l-0.2,0.71l0.26,1.36l0.63,0.79l1.15,0.12l0.71,-0.32l0.3,-1.06l1.1,0.26l-0.01,2.67l-0.38,1.21l-1.24,-0.9l-1.12,0.47l-0.96,-0.54l-0.98,0.61l-1.35,-2.56l-0.26,-1.86l-1.39,-1.3l-0.07,-0.48Z", "name": "Dadra and Nagar Haveli"}, "IN-DL": {"path": "M269.18,237.92l-1.09,-1.45l1.02,-1.35l1.39,-0.53l0.24,-1.0l0.78,-0.87l-0.35,-3.41l0.21,-0.9l1.59,-0.79l1.2,-0.05l0.91,-0.88l2.3,0.67l1.4,-0.39l0.27,0.61l-0.2,0.97l0.58,1.16l2.51,2.23l0.25,0.66l0.62,2.22l-0.95,1.04l-0.26,0.81l0.7,1.44l-2.32,0.75l-0.66,0.79l0.48,1.01l-0.98,0.25l-2.63,-1.33l-0.89,-1.75l-2.19,-1.1l-0.66,0.01l-0.48,0.79l-2.76,0.39Z", "name": "Delhi"}, "IN-NL": {"path": "M779.92,344.86l0.24,-2.48l-0.5,-1.53l-1.51,-1.38l-1.72,-2.41l5.61,-4.5l1.79,-2.48l3.84,-3.32l0.18,-0.6l-0.86,-1.43l1.99,-1.01l0.92,0.2l0.22,1.55l-1.05,1.7l0.18,0.61l0.39,0.2l3.95,-0.86l1.52,-1.07l1.37,-2.13l-0.58,-1.75l0.0,-0.99l1.01,-1.64l0.11,-3.4l2.88,-3.87l2.12,-1.95l0.79,-3.49l2.04,-2.58l0.89,2.11l0.8,0.16l0.76,-0.33l1.67,-1.57l0.74,-1.09l0.25,-1.63l1.49,-1.74l1.12,-0.19l0.86,-0.7l1.24,0.02l2.52,-1.07l3.03,-1.88l1.13,-0.97l1.92,-2.9l1.52,-1.46l1.31,0.78l1.78,-0.04l4.5,-2.81l1.45,1.13l0.13,1.9l-0.88,1.28l-0.18,0.95l0.32,0.93l0.81,0.73l-0.26,2.06l0.63,1.74l-1.12,0.02l-0.96,1.1l-1.61,0.79l-0.48,2.09l-2.17,2.74l0.78,2.22l-0.69,2.6l0.11,2.79l0.48,1.15l0.9,0.47l-0.42,0.83l0.3,2.22l0.56,0.6l1.14,0.39l0.23,0.64l-2.48,2.95l-2.14,1.25l-0.24,1.45l0.63,3.47l-0.08,1.03l-1.42,0.62l-3.3,4.31l-0.08,0.67l-0.92,0.26l-1.66,2.11l-2.18,0.49l-1.29,0.92l-0.79,-0.14l-2.19,-1.69l1.06,-3.49l0.1,-2.14l-0.72,-0.37l-2.49,2.12l-1.72,0.98l-1.48,1.73l-1.75,0.89l-3.83,0.5l-1.34,-0.81l-1.99,0.08l-1.96,-1.16l-6.95,0.35l-1.1,0.4l-0.54,1.41l0.25,0.38l1.19,0.4l0.13,0.77l-3.93,3.81l-0.97,2.24l-1.16,1.64l-1.08,-1.27l-1.34,-0.42l-1.8,-1.16Z", "name": "Nagaland"}, "IN-WB": {"path": "M545.45,405.85l-0.5,-0.98l0.56,-0.42l5.08,-0.89l0.31,-0.72l-0.47,-1.55l0.74,-0.53l1.67,0.87l0.84,0.07l-0.32,2.17l0.35,0.57l1.81,0.66l1.35,0.95l1.69,-0.33l1.95,-1.65l0.58,-2.23l1.76,-1.44l7.16,-2.58l3.6,-0.58l1.37,-0.52l0.56,-0.8l0.21,-1.04l-0.38,-1.28l0.13,-0.59l1.64,-2.23l2.89,1.56l1.05,0.13l2.02,1.46l1.68,0.42l1.24,-0.23l0.42,-0.94l-0.98,-1.3l1.48,0.29l0.47,0.6l0.77,0.13l0.6,-0.83l0.08,-1.2l0.67,-0.26l0.38,-0.66l-0.04,-1.15l-1.61,-2.24l1.91,-0.48l0.42,1.44l0.56,0.34l1.97,-0.7l1.91,0.1l1.22,-1.17l-0.03,-2.65l0.4,-0.06l1.12,0.83l0.64,-0.01l0.71,-0.96l0.29,-1.21l1.52,0.03l0.69,-0.57l0.01,-0.7l-0.45,-0.74l-0.74,-0.19l-0.01,-0.67l2.93,-1.81l1.74,-3.39l0.04,-1.52l0.75,-1.33l-0.41,-1.07l0.04,-1.25l-0.42,-0.42l1.37,0.59l1.07,-0.12l0.94,-0.6l0.46,-0.93l-0.2,-0.47l-0.58,-0.24l0.58,-0.51l0.08,-0.51l-0.69,-2.04l-0.63,-1.08l-1.12,-0.31l-0.14,-0.29l0.68,0.28l0.62,-0.34l0.26,-2.07l0.61,-1.34l-0.14,-1.71l-1.05,-3.44l-2.07,-1.79l-0.21,-1.92l0.46,-1.62l0.97,-1.02l0.74,-1.55l-0.87,-2.23l-0.57,-0.72l-0.74,-0.08l-0.57,-0.84l0.56,-0.79l2.33,-1.03l0.96,-1.0l2.16,-0.97l1.4,1.03l1.9,0.33l0.47,-0.45l-0.11,-1.05l-0.63,-0.84l0.41,-2.35l-0.5,-2.1l-1.25,-1.16l-1.89,-0.81l-1.11,-1.14l-1.2,-2.32l-1.92,-1.09l-0.39,-1.0l0.85,-0.61l0.64,-2.73l2.92,-2.46l1.08,-1.34l1.42,-0.41l1.96,-1.39l2.66,-2.74l1.56,-0.7l1.28,-1.06l1.18,-0.21l0.32,-0.73l-0.46,-1.15l-1.07,-0.55l0.79,-0.66l-0.12,-0.71l-1.34,-1.38l-1.14,-0.68l0.23,-1.51l-0.57,-0.35l-2.11,0.6l-0.78,-0.16l2.21,-5.06l0.16,-2.07l-0.51,-3.36l-1.72,-3.31l-1.28,-1.98l-1.44,-0.95l-1.12,-1.75l0.87,-4.21l1.51,1.11l0.39,1.54l0.74,0.73l4.09,0.21l3.92,1.74l2.29,-0.56l2.85,-2.48l2.71,0.28l1.59,-0.16l0.79,0.57l1.28,0.26l2.69,1.54l0.46,1.37l0.19,3.46l0.29,0.34l1.63,-1.15l0.76,1.97l0.84,0.27l1.26,-0.33l0.64,0.28l1.07,0.92l0.7,1.54l0.63,0.6l3.73,0.29l1.04,-0.28l0.94,-0.75l1.87,-0.3l3.01,1.82l2.09,-0.18l2.3,0.6l0.6,0.46l-0.29,1.59l0.63,0.37l2.22,-0.41l1.68,0.7l2.49,0.24l0.75,-0.98l0.75,2.6l0.28,3.28l-0.9,2.05l-0.46,2.89l-0.88,0.81l0.31,0.9l-1.25,0.59l-0.72,1.5l-0.86,0.56l0.04,1.22l-1.55,0.49l-0.18,-0.8l-0.86,-0.37l-1.27,0.64l-0.02,1.22l-0.94,0.39l-0.42,1.08l0.57,0.68l-0.48,0.58l0.23,0.75l1.09,0.15l-1.54,1.52l-0.38,1.81l-1.38,-1.31l-2.29,0.18l-0.73,-0.75l-1.31,0.6l-0.84,-0.27l-1.33,-1.22l-1.01,-0.45l-0.8,-1.36l-2.47,-1.14l-0.46,-0.78l-0.28,-2.06l-1.01,-1.97l-0.01,-0.39l0.84,-0.04l0.09,-1.08l-1.36,-0.64l-0.24,-0.96l-1.33,-0.55l-1.96,-1.58l-0.57,-0.06l-0.99,0.67l-0.74,1.31l-0.01,0.73l0.75,0.92l1.61,0.68l0.49,1.17l0.62,0.23l0.34,0.57l0.65,0.14l-0.29,0.34l-1.18,0.29l-0.68,-0.22l-1.29,-1.25l-1.04,-0.25l-0.91,0.46l-0.72,1.18l-0.91,-1.51l-1.33,-0.61l-1.97,0.6l0.81,-0.62l0.24,-1.27l-1.29,-0.96l-0.66,-1.82l-1.2,-0.43l-0.74,-1.07l-1.95,-0.46l-2.01,-1.77l-1.53,-0.53l-0.33,-2.09l-0.46,-0.49l-0.9,0.45l-0.68,1.2l-1.21,3.24l0.06,0.87l0.87,0.76l0.58,-0.35l0.14,-0.78l2.98,0.87l0.96,2.56l-1.84,-0.15l-3.0,2.73l-0.3,2.13l-3.15,1.09l-1.89,1.47l-0.78,1.93l0.51,1.07l-0.12,0.57l-0.79,0.64l-1.63,3.72l0.4,2.48l1.35,2.12l1.02,0.06l2.3,-0.88l0.79,0.4l1.81,2.04l2.96,2.25l0.25,2.15l1.56,0.98l1.71,2.04l2.13,0.28l2.25,1.05l0.73,-0.2l0.76,-0.76l1.66,-0.37l1.12,1.2l-0.48,1.96l1.4,2.3l1.33,0.44l0.8,0.66l2.14,0.08l-0.15,0.49l-1.45,1.22l-0.04,1.1l-0.32,0.07l-0.24,0.62l-2.61,-0.88l-0.47,0.18l-0.58,0.98l-1.64,-0.16l-2.86,-0.85l-1.23,-0.01l-1.12,0.71l-2.46,-0.78l-1.5,0.37l-0.35,0.76l-0.17,3.89l-0.99,1.68l-0.5,1.66l-1.59,2.27l-1.78,-0.3l-0.37,-1.1l-1.21,-1.04l-1.33,0.16l-1.59,0.83l-0.21,0.5l0.78,2.11l-0.83,1.08l-0.67,0.34l-0.28,1.04l-0.9,0.53l-0.14,1.33l-0.83,2.23l0.28,0.45l0.9,0.3l0.73,1.05l0.07,1.91l1.05,1.48l0.84,0.18l8.01,4.07l2.42,1.81l5.01,0.7l1.0,-1.38l1.17,0.59l0.6,0.78l0.3,2.04l-0.42,0.68l-1.42,0.76l-0.3,0.7l-0.09,2.48l0.81,1.21l0.65,0.38l-0.58,0.9l0.35,2.32l-1.67,1.6l-1.68,0.07l-0.85,0.66l-0.02,1.23l-0.76,1.49l0.25,1.1l-0.6,3.39l0.72,0.51l-0.1,0.68l0.41,0.56l1.25,0.21l1.1,1.66l1.75,1.33l0.39,0.76l0.88,0.04l0.61,-0.71l-1.51,4.2l-1.03,1.81l-0.01,0.88l0.44,0.92l2.58,1.08l1.56,-0.51l3.8,1.0l-2.85,2.89l-0.46,0.98l-0.39,3.23l1.78,3.39l1.51,0.97l-0.23,1.76l-0.92,1.57l1.48,4.98l-0.13,0.51l-0.56,0.36l0.08,0.71l1.11,0.51l0.92,3.0l-0.39,1.34l0.91,2.85l-0.27,0.58l1.66,2.45l0.42,1.62l-1.03,0.69l-0.22,1.48l0.63,1.91l0.14,2.67l-1.18,0.15l-0.44,0.52l-1.34,-0.77l-0.36,-1.32l-0.38,-0.28l-0.81,0.22l-0.3,0.82l0.64,1.51l2.25,1.42l0.54,0.87l0.86,3.85l1.27,1.9l-0.01,1.43l-0.48,0.14l-0.33,-0.52l-0.69,-0.07l-0.64,0.78l-1.89,-1.22l-1.24,-0.27l-0.7,-3.49l-0.61,-0.28l-0.4,0.34l-0.62,2.07l0.63,2.03l-0.94,0.29l0.5,-1.05l-0.26,-0.97l-0.39,-0.27l-1.42,1.86l0.48,2.23l-0.61,0.28l-1.15,-0.41l0.33,-1.07l-1.1,-2.67l0.57,-3.6l-0.26,-0.99l0.59,-1.77l0.2,-2.12l1.06,-1.02l0.23,-0.74l-0.27,-0.9l-1.35,-1.0l1.61,-2.01l-1.14,-0.17l-1.44,1.2l-0.31,1.39l1.07,0.87l-0.15,0.5l-0.98,2.08l-1.2,-0.05l0.8,-2.06l-0.43,-2.86l1.34,-2.58l-0.1,-0.63l-0.99,-0.36l-1.64,3.33l0.18,2.1l-0.71,1.31l-0.13,2.49l-0.97,2.58l-0.07,2.69l0.46,0.46l1.46,-0.37l0.16,0.55l-0.31,1.14l-0.55,-0.13l-0.4,0.44l0.23,2.14l-0.66,0.46l-0.07,1.76l-0.47,-0.41l-0.69,0.01l-0.11,1.32l-0.51,-0.09l0.07,-1.06l0.6,-0.74l0.46,-2.03l-0.73,-2.54l0.85,-1.8l-0.11,-1.1l-0.98,-1.56l0.53,-1.9l-0.75,-0.79l-0.46,-0.03l-0.08,0.85l-0.75,1.52l0.64,2.32l-0.63,0.42l-0.66,1.98l0.48,3.04l-0.28,0.49l-1.35,0.68l-0.22,-1.85l0.28,-0.81l-0.46,-0.52l-1.07,0.39l-0.38,-0.84l-0.84,0.2l-0.44,-2.18l-0.57,-0.66l-0.63,-0.16l-0.42,0.44l0.08,0.75l1.01,3.85l-0.42,1.45l0.66,1.05l-0.95,0.35l-0.35,-1.27l-0.51,-0.52l-0.6,0.03l-0.58,-1.49l0.87,-2.47l-0.23,-0.94l0.2,-0.63l-1.67,-3.15l-0.24,-2.24l0.24,-0.83l2.02,-2.79l-0.71,-3.23l-3.61,-1.75l-0.09,-0.54l-0.61,-0.27l-0.84,0.43l-0.77,-0.39l-1.03,-1.26l-0.97,-4.14l-0.49,-0.54l-0.92,-0.13l-0.41,0.6l0.54,0.86l0.74,3.83l0.6,1.16l1.56,1.46l3.72,0.8l0.73,0.61l0.32,1.05l-0.22,0.69l-1.51,1.64l-2.08,0.56l0.04,1.33l-2.0,4.07l-2.48,1.79l-1.01,1.44l-4.96,3.02l-2.47,0.14l-4.13,1.11l-1.25,-2.09l0.04,-2.21l-0.26,-0.62l-0.76,-0.57l-4.7,-1.12l-0.64,-1.11l-0.35,-2.0l-0.83,-1.17l-2.44,-0.78l-2.21,2.36l-0.3,-0.07l-0.94,-1.35l0.28,-2.14l-0.68,-1.6l-1.45,-1.03l-1.64,-0.67l-1.74,-0.15l-2.08,-1.48l-1.77,-0.61l-0.33,-0.57l0.32,-0.22l0.61,-0.36l1.19,0.03l0.28,-1.32l2.26,-0.3l0.3,-0.79l-1.52,-1.54l-0.47,-2.23l-2.14,-1.64l-0.14,-0.58l0.98,0.03l0.45,-0.53l-0.69,-1.9l-1.33,-1.0l-2.63,-0.5l-0.79,-2.5l-1.98,-1.62l-0.94,-0.49l-1.31,-0.05l-1.46,-1.14l0.13,-2.51l0.41,-1.21l-0.13,-0.83l0.77,-0.68l1.92,-0.56l0.18,-0.83l-1.95,-0.64l-4.23,-0.15l-1.7,-0.37l-1.31,-0.0l-1.19,0.45l-5.28,-5.12l-1.99,-0.54l-1.51,0.49l-0.33,-1.19l-1.25,-1.57l0.38,-1.25l1.12,-1.59l0.49,-2.12l-0.57,-0.72l-1.16,-0.03ZM621.37,462.65l0.62,0.85l-0.48,1.24l-0.1,-0.46l-0.03,-1.63ZM639.28,467.29l-1.47,0.01l-0.03,-1.73l1.33,0.75l0.17,0.97ZM630.2,458.45l-0.18,-0.62l0.39,-0.95l1.22,-1.6l0.22,0.26l-0.7,3.21l-0.96,-0.3ZM615.62,464.13l-1.95,-0.31l-0.34,-0.61l1.43,-4.38l1.08,-1.59l0.53,2.85l-0.1,1.69l-0.79,0.55l-0.14,0.48l0.28,1.31ZM614.23,456.85l0.15,-1.15l0.64,-1.08l0.26,0.49l-0.18,0.81l-0.87,0.92Z", "name": "West Bengal"}, "IN-HR": {"path": "M197.67,196.54l-1.92,0.66l-0.68,-0.19l-0.12,-0.33l0.58,-1.74l1.54,-0.71l0.56,-0.71l0.04,-0.87l-1.03,-1.19l0.03,-0.46l3.74,1.02l2.05,-1.87l3.05,-0.56l0.68,0.68l2.25,0.52l0.65,1.26l1.95,1.36l2.44,-0.58l0.57,-1.17l-0.41,1.39l0.24,1.61l1.61,1.38l0.49,-0.02l0.38,-1.05l0.49,-0.25l0.24,0.89l0.89,1.26l-0.77,0.21l-0.05,1.32l-0.89,0.47l-0.18,0.49l2.26,4.51l0.68,0.02l1.72,-0.75l-0.08,-1.9l0.4,-0.66l1.05,-0.42l0.07,-0.72l1.15,-1.12l1.84,-2.76l4.54,1.48l1.87,-0.35l1.18,0.2l0.81,-0.43l0.25,-1.03l1.84,-0.6l1.45,0.72l0.68,1.43l0.66,0.57l2.19,0.36l1.5,-0.6l1.29,-0.08l1.38,-1.54l2.31,-0.92l2.19,-1.64l-0.08,-0.61l-0.99,-0.75l-0.42,-1.25l0.77,-2.4l0.6,-0.91l-0.16,-0.9l0.93,-0.28l0.17,-0.47l-1.41,-0.86l0.04,-0.31l1.21,0.8l1.17,0.28l1.1,-0.22l0.28,-0.67l0.98,0.56l0.49,-0.29l0.43,-0.88l0.03,-1.16l0.63,1.85l0.67,0.93l1.52,0.62l1.31,-0.04l3.08,-2.2l0.45,-2.11l-1.11,-0.83l-0.74,-1.06l1.96,-0.97l2.75,-2.1l0.15,-0.69l-0.67,-0.42l0.18,-0.95l0.62,-0.28l0.94,0.26l1.29,-0.13l1.11,2.15l0.94,0.05l0.48,-0.5l0.29,-1.07l-0.34,-3.0l0.44,-1.02l-0.52,-1.05l0.23,-1.9l-0.5,-1.28l-0.77,-0.38l-0.31,-1.22l-0.78,-0.13l0.06,-1.77l-0.44,-1.16l0.68,-1.4l0.01,-0.71l-0.29,-0.49l-0.85,-0.37l-0.78,-1.44l0.75,-0.5l0.96,1.15l1.8,0.0l0.72,0.82l0.49,1.43l1.37,0.91l0.34,0.94l3.46,1.85l0.71,0.88l0.16,2.59l-0.5,1.22l0.09,0.78l2.08,1.94l0.25,0.78l0.44,0.23l0.93,-0.4l1.76,0.9l1.62,0.31l0.93,0.77l1.26,-0.33l0.59,0.71l2.07,-0.23l2.03,1.34l-0.49,3.0l-4.77,4.22l-0.4,1.32l-2.42,1.67l-0.2,0.66l-0.96,0.19l-0.26,0.72l-1.47,1.42l-0.66,1.71l-0.89,4.15l-0.47,0.9l-0.85,0.28l0.03,1.48l-0.81,0.56l-0.03,0.91l-0.63,0.62l-0.17,1.53l0.38,1.01l-0.82,0.38l-0.38,0.67l0.4,1.11l-0.1,1.06l0.71,0.51l0.71,-0.06l-1.49,1.77l0.33,0.56l2.21,0.16l-0.49,1.16l0.06,1.19l0.44,0.83l-0.56,1.13l0.32,4.99l-0.22,0.57l1.83,3.91l-0.49,0.52l-0.07,0.59l1.38,1.81l-0.48,0.8l-1.19,0.43l-2.62,-0.68l-1.12,0.96l-1.76,0.23l-1.23,0.79l-0.42,1.42l0.38,3.16l-0.71,0.77l-0.21,0.93l-1.26,0.39l-1.28,1.97l1.21,2.02l0.49,0.29l3.29,-0.53l0.51,-0.79l1.96,0.95l0.92,1.77l2.96,1.49l1.17,-0.15l0.67,-0.44l0.11,-0.6l-0.47,-0.68l0.36,-0.34l2.21,-0.63l1.36,1.03l-0.01,0.77l0.51,0.3l0.72,-0.35l0.65,1.19l0.96,-0.1l-0.04,0.82l0.65,0.59l-0.7,2.07l0.67,0.83l0.27,1.32l1.0,0.34l-0.17,0.55l-0.64,0.25l-0.17,0.47l0.74,0.72l-0.77,0.85l0.01,1.32l-0.24,-0.15l-0.61,0.36l0.19,1.33l-0.23,0.73l0.1,0.41l1.03,0.81l0.7,1.8l-0.54,0.3l-1.08,1.73l-1.24,-0.14l-1.14,1.02l-2.4,0.84l-0.96,0.82l-1.05,0.03l-0.37,0.47l-0.86,-0.73l-0.59,0.56l-0.3,-0.44l-0.52,-0.11l-0.85,0.76l-1.92,-0.54l-0.95,0.12l-0.53,1.25l0.42,0.62l0.78,0.36l-1.77,0.36l-1.03,1.64l-1.71,0.27l-0.23,-0.17l0.72,-0.3l0.15,-0.38l-0.57,-0.95l0.43,-2.47l0.88,-1.72l-0.19,-3.96l-0.52,-2.28l0.64,-2.88l-0.31,-0.93l-2.2,-2.22l-0.95,-0.48l-1.46,0.62l-1.38,1.94l-3.45,2.5l-0.25,0.95l0.49,1.35l-1.85,0.43l-0.89,0.93l-0.83,-2.12l-1.96,-0.59l0.71,-0.57l-0.55,-0.72l0.54,-0.08l0.22,-0.4l-0.98,-1.7l-0.96,-0.35l-1.98,0.38l-0.71,-1.02l-1.24,-0.44l-0.56,0.44l-0.0,0.81l1.23,1.18l-0.83,0.3l-0.23,0.52l0.19,0.51l1.05,0.65l-0.19,0.59l-0.5,0.06l-1.74,-1.05l-0.94,0.38l-1.54,-0.12l-0.66,0.79l-0.18,1.38l0.66,2.16l0.02,1.52l0.69,0.96l0.29,1.5l-0.62,0.44l-1.77,-1.38l-3.88,0.2l-0.48,-1.45l-1.14,-0.82l-0.09,-0.38l1.1,-0.25l0.59,-0.56l0.14,-0.71l-0.49,-0.68l0.63,-1.33l1.08,-1.16l0.14,-0.82l-0.76,-0.63l-0.7,0.22l-0.51,0.59l-0.74,-0.62l1.69,-0.98l0.71,-0.94l0.81,0.77l0.71,0.05l0.34,-1.01l-1.72,-2.96l-2.17,-2.79l-2.33,-2.11l-2.17,-0.91l-1.14,0.06l-0.05,-1.25l-2.28,-1.69l-3.18,-4.01l-3.25,-9.33l1.03,-1.13l-0.06,-1.08l-0.44,-0.58l-1.68,-0.7l-1.73,-2.58l0.02,-0.98l-0.52,-1.06l0.81,-0.33l0.22,-0.76l-0.73,-2.06l-0.71,-0.18l-1.11,0.73l0.1,-1.56l-0.26,-0.42l-0.65,-0.14l-1.3,0.6l-0.77,0.84l-0.86,0.08l-1.19,-0.66l-1.07,0.71l-1.9,0.54l-1.12,-1.64l-0.56,-0.19l-1.59,0.27l-1.1,-2.41l-0.82,-0.74l-2.52,-0.92l-0.97,0.26l-1.36,1.06l-1.48,-0.23l-1.78,0.2l-0.51,0.37l-0.23,0.76l-0.28,-0.03l-2.1,-3.33l0.28,-0.41l1.47,-0.13l0.47,-0.84l0.07,-1.62l-1.13,-1.94l0.92,-5.58l-0.73,-0.83l-1.02,0.44ZM259.41,180.33l-0.42,0.53l-0.13,0.09l0.07,-0.25l0.48,-0.37Z", "name": "Haryana"}, "IN-HP": {"path": "M229.45,117.96l1.78,-1.92l0.71,-1.52l-0.42,-0.79l-1.07,0.13l-0.02,-1.36l3.39,-1.15l1.65,-1.71l4.23,-3.05l-0.07,-0.68l-1.73,-2.9l0.38,-1.22l1.73,-1.98l0.07,-1.31l-0.71,-1.74l0.32,-2.08l-1.4,-2.4l-1.75,-1.91l-0.13,-0.95l1.18,-0.43l1.48,0.51l0.94,0.92l0.79,-0.09l4.49,-3.83l4.22,-1.75l0.9,-0.95l0.55,-1.64l2.1,-1.4l1.27,-0.58l3.51,-0.66l0.95,-0.52l2.35,1.47l3.95,-0.18l5.58,5.42l4.66,2.96l1.53,0.84l6.68,2.06l0.97,-0.1l0.54,-0.69l2.55,-0.39l2.39,-0.78l1.97,-1.57l2.83,-1.51l4.08,4.65l1.07,2.36l1.06,1.32l0.31,2.34l2.3,3.1l1.48,0.01l1.99,-1.8l2.17,-0.84l2.03,-0.16l0.85,-0.83l1.36,-0.66l0.22,-1.01l0.92,0.01l0.38,1.9l-0.26,1.58l-2.3,2.04l-0.82,2.5l0.0,1.13l0.76,0.84l0.89,0.12l1.87,-1.75l1.92,3.19l-0.51,1.13l0.86,3.58l-0.14,1.8l1.83,1.02l4.14,5.78l2.59,1.76l0.19,0.99l-0.67,1.45l-0.59,2.7l-0.94,1.85l0.75,1.03l-0.01,1.01l0.96,1.57l1.22,0.41l1.58,1.69l-3.62,3.17l0.06,1.16l1.86,1.29l-0.72,3.51l0.1,0.8l0.49,0.69l1.22,0.56l2.79,-0.26l1.58,1.74l1.69,2.52l0.03,0.64l-1.52,0.33l-1.82,-0.11l-0.93,-0.71l-1.48,-2.18l-4.35,-0.29l-1.49,-0.5l-3.2,0.35l-2.0,-1.63l-0.97,-0.01l-1.04,-0.74l-1.82,-0.16l-1.0,0.16l-1.58,1.0l-1.51,0.46l-4.45,2.55l-3.03,-0.02l-4.59,4.61l0.1,1.68l-1.55,0.35l-0.07,0.87l1.2,1.32l0.08,0.92l-0.09,0.37l-0.57,-0.32l-0.55,0.2l-1.49,3.28l0.05,1.22l0.89,0.92l0.27,1.62l0.79,1.6l-0.76,0.85l-0.03,0.51l0.97,1.5l1.17,0.3l-0.02,0.5l-4.31,2.33l-2.78,0.6l-0.54,1.0l-1.24,-0.9l-1.78,0.25l0.35,-0.76l-0.47,-0.5l-2.06,0.86l-0.62,-0.66l-1.76,-0.37l-1.86,-0.95l-0.96,0.35l-0.19,-0.67l-1.61,-1.27l-0.4,-0.67l0.53,-1.47l0.06,-1.86l-0.36,-1.18l-0.9,-1.08l-3.39,-1.8l-0.27,-0.87l-1.32,-0.83l-0.45,-1.35l-0.95,-1.09l-1.97,-0.09l-1.17,-1.21l-1.44,0.74l-4.03,-3.4l-0.52,-1.32l0.49,-1.87l-0.67,-0.63l0.08,-1.55l0.76,-1.11l-0.03,-0.41l-0.37,-0.37l-0.92,-0.05l-0.01,-0.8l-0.54,-0.83l-0.54,-0.15l-0.51,0.57l-0.55,-0.83l-1.05,0.02l-0.81,-0.71l-0.55,0.31l-2.49,-4.37l-1.8,0.74l-0.04,1.86l-0.67,0.19l-0.54,1.21l-0.85,-0.29l-1.23,0.33l-0.44,-0.26l-0.89,-1.09l-2.37,-7.15l-4.5,-8.19l0.07,-0.38l1.15,-0.14l0.15,-0.7l-2.74,-4.52l-5.6,-2.94l-3.59,-0.7Z", "name": "Himachal Pradesh"}, "IN-AS": {"path": "M663.07,316.48l0.01,-0.33l2.23,-0.81l0.27,-0.58l-0.2,-0.73l0.78,-0.56l0.58,-1.33l1.61,-0.9l-0.43,-0.98l0.82,-0.66l0.51,-3.03l0.94,-2.19l-0.3,-3.5l-0.71,-2.22l1.37,0.07l6.69,-1.16l1.04,-0.91l0.73,-1.87l0.84,-0.52l2.26,-0.19l1.89,-1.28l0.86,0.13l2.83,1.94l3.6,1.77l4.05,0.43l8.94,-0.5l1.75,-0.74l0.81,-0.01l3.25,0.08l2.45,0.93l1.24,-0.17l1.11,-0.58l1.4,-2.16l0.7,-0.32l1.42,0.14l0.88,1.73l0.8,0.57l2.17,-0.43l1.87,0.42l1.57,-0.18l3.68,-1.8l0.91,1.59l0.76,0.22l0.63,-0.55l-0.09,-1.07l0.42,-0.45l-0.02,-0.62l1.9,1.21l2.1,-0.24l1.36,-1.2l0.28,-0.99l3.65,0.29l3.76,-0.78l8.62,-2.47l2.73,-1.83l3.43,0.48l3.48,1.5l0.3,0.71l0.71,0.55l1.88,0.49l10.99,-1.18l1.14,0.32l1.27,0.98l0.87,0.01l1.48,-0.64l3.25,-0.5l1.99,-0.77l4.25,-3.13l0.32,-0.77l-0.24,-1.72l0.51,-0.89l4.15,-4.24l8.09,-6.65l0.47,-1.11l-1.32,-1.97l0.7,-0.82l1.01,1.03l2.02,0.77l3.03,-0.68l1.08,0.66l1.54,-0.32l4.22,-2.16l4.21,-1.1l4.59,-2.26l9.18,-3.21l1.71,-0.97l1.72,0.75l1.48,0.08l4.22,-1.06l4.0,-2.54l1.27,-0.38l7.37,-0.1l-2.08,3.62l-3.49,4.12l-0.39,1.22l0.72,3.03l2.67,2.25l0.25,1.82l-0.48,1.35l0.33,0.7l-0.05,1.3l0.79,0.26l1.3,-1.47l0.92,-0.12l0.74,0.97l-0.03,1.23l-1.02,0.66l-0.4,0.89l-1.02,0.43l-0.42,0.76l-0.96,-0.32l-2.26,0.04l-4.83,1.83l-2.47,-1.34l-1.74,0.34l-0.89,0.84l-0.76,2.13l-1.08,1.05l-2.06,0.87l-2.93,2.18l-2.33,0.23l-1.17,1.42l-3.92,2.33l-1.33,0.03l-1.25,-0.77l-0.62,0.03l-1.42,1.26l-2.28,3.32l-0.98,0.83l-2.89,1.8l-2.43,1.03l-1.31,-0.0l-0.86,0.71l-1.1,0.15l-1.9,2.12l-0.28,1.68l-0.66,0.97l-1.47,1.38l-0.68,0.17l-0.59,-1.92l-0.66,-0.39l-0.54,0.12l-2.29,2.96l-0.75,3.42l-2.08,1.89l-2.98,4.02l-0.17,3.6l-1.03,1.73l0.01,1.2l0.57,1.47l-1.16,1.72l-1.19,0.85l-3.43,0.81l1.09,-1.91l-0.08,-1.11l-0.43,-0.8l-1.57,-0.43l-2.36,1.15l-0.41,1.0l0.9,1.2l-3.78,3.26l-1.75,2.44l-5.74,4.65l0.02,1.06l1.74,2.27l1.43,1.25l0.42,1.24l-0.09,1.81l-1.83,2.72l-2.5,5.47l-0.88,0.27l-0.67,0.79l-0.14,1.08l0.51,1.11l-1.1,0.82l0.37,1.06l-1.35,2.11l-0.19,0.93l-1.4,-0.34l-0.76,0.41l-0.42,0.68l-0.98,3.15l0.15,0.92l0.37,0.32l-0.7,1.62l0.54,1.23l-1.03,0.63l-0.78,4.46l-0.49,0.04l-0.71,1.05l-1.92,-0.33l-2.5,0.78l-1.72,-3.21l-0.61,-0.53l-0.52,-0.02l-0.53,0.59l-1.18,3.26l-2.61,2.91l0.05,1.31l-0.98,0.5l-3.21,2.95l-0.74,-0.22l-0.53,-0.84l-0.23,-0.86l0.42,-1.1l-0.34,-0.48l-4.04,-0.06l-1.99,-0.48l0.99,-2.26l0.18,-1.77l-0.74,-1.72l-0.3,-1.98l-2.13,-1.46l0.78,-3.19l1.58,-4.31l0.04,-1.65l-0.52,-1.57l0.67,-0.52l0.99,0.32l2.9,1.82l3.14,-0.9l0.81,-1.3l-0.35,-1.35l-0.87,-0.64l-0.1,-0.43l-1.9,-1.24l3.56,-3.27l1.3,-0.42l0.35,-0.75l2.67,-0.27l0.89,-0.99l3.76,-1.27l0.46,-0.64l-0.78,-1.58l0.37,-1.38l-0.38,-1.05l-2.72,-2.53l-2.06,-0.78l-0.47,-0.7l-0.81,-0.43l1.34,-1.1l1.33,-1.73l0.23,-0.63l-0.27,-0.67l-1.06,-0.16l-1.61,0.87l-3.56,-3.68l-2.01,-1.75l-1.09,-0.46l-2.26,1.22l-2.7,0.45l-1.34,0.75l0.18,-1.73l-0.23,-1.9l1.48,-3.54l-0.29,-0.86l-0.88,-0.3l-0.05,-0.67l2.62,-2.44l0.29,-0.89l-0.27,-0.45l-3.49,-0.3l-3.33,1.02l-1.08,-0.05l-2.93,0.66l-0.79,-0.14l-2.03,-1.5l-0.88,0.03l-1.87,1.45l-1.06,2.67l-1.17,1.02l-0.79,-0.11l0.48,-1.79l-0.31,-1.05l-0.62,-0.43l-1.23,-0.02l-3.89,4.8l0.26,0.86l-1.79,0.13l-1.8,0.55l-1.04,0.78l-1.85,2.29l-1.11,0.57l-0.36,-0.65l-0.11,-3.58l-0.9,-0.34l-2.65,0.99l-0.98,-0.4l-0.72,0.37l0.17,-1.18l-0.25,-0.83l-1.14,-0.53l-0.7,-0.86l-3.36,-0.26l-1.72,0.28l-0.87,0.55l-0.12,-0.83l-0.79,-0.34l-3.3,0.94l-0.24,-0.8l-0.65,-0.4l-0.61,0.19l-1.3,1.31l0.29,-0.71l-0.11,-0.76l-1.17,-0.96l-1.09,-0.45l-2.78,-0.18l-0.9,0.14l-1.44,0.94l-5.77,0.82l-3.11,2.52l-1.92,2.43l-0.44,1.79l-0.72,1.25l0.16,2.24l1.61,1.92l-0.05,0.49l-0.77,0.48l-2.0,0.28l-0.42,0.72l-0.22,2.1l-1.52,0.65l0.59,-5.87l-1.02,-2.98l-0.55,-2.85l0.1,-0.67l1.34,-2.33l0.13,-0.78l-0.68,-0.66l0.5,-0.89l-0.56,-0.92l-0.84,0.15l-0.91,-1.29l-0.12,-1.51l-1.12,-2.31l-0.58,-0.37l-1.15,-0.04Z", "name": "Assam"}, "IN-UT": {"path": "M290.95,175.24l-0.31,-0.45l0.16,-0.23l3.37,-0.85l3.64,-1.92l0.42,-0.6l-0.06,-1.2l-1.32,-0.46l-0.68,-1.08l0.48,-0.37l0.27,-0.91l-0.22,-0.97l-0.63,-0.85l-0.26,-1.61l-0.89,-0.91l-0.01,-0.76l1.22,-2.78l0.89,0.28l0.59,-1.05l-0.14,-1.41l-1.18,-1.28l0.81,0.08l0.67,-0.49l0.3,-0.73l-0.32,-1.05l3.9,-4.07l0.54,-0.28l2.79,0.1l4.5,-2.57l3.73,-1.55l1.69,0.15l0.85,0.68l1.03,0.03l1.2,1.2l0.94,0.46l2.61,-0.37l2.11,0.53l4.18,0.25l1.13,1.91l1.22,0.95l3.16,0.05l1.25,-0.6l0.0,-1.27l-1.82,-2.75l-1.58,-1.74l0.87,-1.39l0.96,0.85l1.0,-0.03l1.1,-3.41l1.16,-0.22l2.08,1.39l0.62,1.44l1.05,0.36l-0.03,1.25l0.74,0.86l0.04,1.22l1.46,0.85l0.54,2.52l0.53,0.57l2.26,0.97l1.08,2.47l2.17,0.27l1.63,2.04l1.6,0.58l1.91,-0.81l3.23,-0.54l3.15,0.76l1.58,2.12l3.25,1.54l1.81,2.14l1.15,0.36l1.78,-0.62l0.99,1.35l0.94,0.56l-0.58,1.06l-0.99,0.19l-0.34,0.48l0.09,0.66l0.95,1.13l0.08,0.47l-0.68,1.46l0.45,0.55l2.1,-0.18l2.17,0.6l5.67,2.86l2.65,0.07l3.78,2.21l1.84,2.43l5.1,1.78l0.86,0.44l0.68,1.13l-2.12,0.8l-0.8,-0.96l-0.55,-0.09l-0.49,0.35l-1.01,1.05l0.22,1.15l-0.44,0.64l-2.27,1.77l-1.2,1.7l-2.2,1.62l-2.18,0.57l-0.85,1.97l-2.18,2.84l-0.56,0.44l-1.9,0.52l-0.92,0.77l-0.45,0.93l-0.04,1.03l0.96,3.25l-1.75,1.83l-0.16,1.01l-1.64,1.45l-0.25,0.68l-1.2,0.53l-0.28,0.84l1.3,3.62l0.76,0.26l-0.56,2.85l-0.47,-0.21l-0.86,0.34l-0.15,0.75l0.5,1.37l-0.14,0.51l-1.7,0.08l-1.15,0.63l-0.63,1.38l-0.35,2.99l-1.44,0.97l-0.65,1.28l0.08,2.75l1.04,0.9l-1.16,1.58l-1.43,0.55l-0.87,-0.37l-0.04,-1.04l-0.44,-0.24l-0.79,0.2l0.08,-0.94l-0.38,-0.4l-1.62,0.37l0.3,-1.52l-1.13,-0.87l-2.18,-0.29l-0.6,0.22l-0.26,0.74l-0.54,0.19l-1.94,-0.41l-1.16,0.47l-0.67,-0.89l-1.55,-0.1l-2.32,0.86l-0.71,-2.13l-1.46,-1.68l-2.4,-0.13l-3.8,-2.61l-0.66,-0.74l-0.55,-1.37l-2.39,-1.3l-0.84,-0.11l-3.42,1.35l-0.4,-1.87l-1.03,-1.41l-4.38,-2.28l0.11,-0.62l0.69,-0.26l1.19,0.27l0.76,-1.03l0.69,0.21l0.69,-0.27l1.77,-1.76l0.03,-1.29l-3.55,-1.07l-4.97,-2.81l-1.61,-1.38l-2.29,-3.67l-1.11,-1.1l-3.59,-1.79l-2.29,-3.9l-2.23,-2.17l-1.68,0.04l-0.85,1.12l0.16,1.82l1.13,4.27l-0.23,1.21l-0.92,0.93l-1.27,0.59l-0.53,-0.16l-3.81,-2.16l-3.95,2.04l-1.26,-2.37l-1.0,-3.95l-0.15,-3.69l1.35,-2.08l1.34,-3.04l3.16,-2.75l0.2,-1.02l-0.65,-0.63l-5.42,-2.71l-2.87,-2.4l-1.41,-0.26l-0.93,0.49Z", "name": "Uttaranchal"}, "IN-JH": {"path": "M485.62,401.35l-2.2,-0.83l-1.66,0.13l-0.64,-0.47l-0.92,-2.18l0.46,-1.96l-0.75,-2.15l-5.31,-5.13l-0.45,-1.24l-0.28,-2.67l-2.23,-1.57l-3.11,-0.55l0.74,-1.85l1.39,-1.87l0.17,-1.31l1.15,-1.83l-0.17,-0.87l-1.63,-2.76l0.11,-0.69l0.93,-0.61l2.97,-0.32l4.77,0.81l1.87,-0.08l1.71,-1.09l1.28,0.23l2.91,-0.51l1.72,-1.44l0.63,-1.37l1.28,2.2l0.99,2.58l0.91,0.66l0.71,-0.13l0.37,-0.54l0.48,0.46l0.71,-0.09l0.31,-0.39l0.0,-0.99l1.13,-0.14l0.85,0.26l0.77,-0.44l0.4,0.65l0.01,0.81l-0.37,0.6l0.15,0.73l1.64,1.83l3.74,2.84l1.49,-0.24l1.96,-2.6l1.54,0.48l0.78,-0.11l0.96,-1.83l3.19,-2.01l0.37,0.18l0.47,1.68l1.14,0.05l0.36,1.93l0.73,0.76l1.93,0.23l3.38,-1.36l-0.14,0.95l0.71,0.62l2.29,-1.85l0.34,-1.09l2.75,-1.0l0.7,-0.85l3.22,-0.65l2.72,-0.0l1.15,0.31l2.07,-1.87l1.74,0.23l0.61,-0.3l0.36,-0.71l0.0,-1.21l-0.39,-1.16l1.12,-0.67l0.91,-2.77l0.59,-0.38l2.49,-0.03l0.87,0.51l1.73,1.86l1.65,-0.22l1.97,-1.34l-0.19,1.0l1.95,0.69l0.56,2.96l0.66,1.0l1.38,0.68l1.57,-0.48l1.85,0.5l0.24,1.48l-0.96,1.25l0.15,0.88l5.46,3.3l0.78,-0.54l0.24,-1.39l0.74,-0.75l0.22,-2.08l2.61,-2.45l1.79,0.61l1.64,-0.17l0.97,-0.45l0.63,-0.86l1.69,1.09l2.36,0.74l0.49,-0.24l0.04,-1.06l0.79,-1.32l2.54,0.86l1.25,-0.22l0.91,-2.73l0.27,-2.7l-0.24,-0.98l1.59,-2.79l-0.02,-3.96l1.79,-2.25l0.83,-0.3l1.16,0.31l0.51,-0.24l1.12,-3.76l1.51,-0.38l1.41,0.51l0.77,-0.28l1.6,-3.24l1.37,-1.12l1.1,0.52l1.08,1.31l2.68,0.7l1.93,-0.1l0.67,0.49l0.1,0.59l-0.46,1.42l0.24,2.13l2.17,2.01l1.05,3.9l-0.72,3.72l-1.0,-0.18l-0.39,1.06l0.51,0.67l1.0,0.23l0.43,0.82l0.61,1.83l-0.66,0.58l-0.05,0.67l0.77,0.42l-1.14,0.75l-2.41,-0.72l-0.85,0.38l0.07,0.8l1.03,0.5l-0.1,1.01l0.4,0.96l-0.7,1.06l-0.04,1.52l-1.26,2.69l-3.44,2.56l0.02,1.36l0.28,0.36l0.67,-0.02l0.2,0.56l-1.83,0.11l-0.91,2.13l-1.27,-0.85l-1.16,0.28l-0.22,0.53l0.12,2.26l-0.83,0.87l-1.67,-0.16l-1.77,0.66l-0.38,-1.37l-0.75,-0.37l-2.33,0.63l-0.38,0.95l1.58,2.04l0.13,0.85l-0.99,0.74l-0.22,1.61l-0.67,-0.67l-1.24,-0.31l-1.18,0.26l-0.11,0.83l0.9,1.18l-0.74,0.16l-1.48,-0.36l-1.99,-1.45l-1.11,-0.15l-2.74,-1.55l-0.75,0.01l-2.05,2.64l-0.2,0.99l0.37,1.17l-0.54,1.3l-4.61,0.89l-7.31,2.64l-2.04,1.68l-0.42,2.01l-1.8,1.61l-1.1,0.29l-1.25,-0.91l-1.7,-0.6l0.37,-1.76l-0.17,-0.83l-3.17,-1.24l-0.91,0.23l-0.6,0.76l0.27,2.08l-4.66,0.65l-1.05,0.72l-0.09,0.97l0.72,1.07l1.45,0.25l-0.37,1.69l-1.12,1.59l-0.47,1.62l0.4,0.99l0.91,0.9l0.58,1.59l0.42,0.13l1.6,-0.54l1.56,0.43l4.28,4.41l1.21,0.8l2.64,-0.43l6.48,0.73l-1.12,0.37l-1.06,1.04l-0.38,5.19l1.78,1.49l1.55,0.14l2.47,1.85l0.25,1.52l0.66,1.08l0.97,0.46l1.88,0.17l1.02,0.78l0.5,1.15l-1.24,0.06l-0.21,0.5l0.21,1.04l2.24,1.83l0.38,2.09l1.43,1.35l-2.14,0.24l-0.34,0.37l-0.06,1.01l-0.83,-0.19l-1.36,0.84l-5.58,-3.66l-3.08,0.44l-0.93,-0.27l-2.33,-2.54l-5.72,-2.93l-1.38,-1.66l-0.96,-0.22l-0.63,0.3l-0.7,0.93l-1.56,0.42l-0.49,0.53l0.14,1.26l1.25,1.79l0.31,2.33l-0.08,0.94l-0.78,1.36l0.01,0.75l0.7,1.68l-0.43,2.63l-1.68,2.46l-1.06,0.74l-1.12,0.27l-1.32,-0.84l-0.04,-1.41l0.7,-1.51l-0.5,-0.78l-3.63,1.66l-3.84,-0.98l-3.16,-1.78l-1.39,-0.0l-2.85,1.24l-2.91,3.01l-0.82,-0.88l-2.85,-1.79l-1.6,-0.26l-1.46,0.46l1.5,-2.94l1.65,-2.4l0.39,-1.42l-0.54,-3.97l-0.68,-1.83l-0.62,-0.17l-2.32,1.61l-1.27,0.2l-0.95,0.73l-3.4,-0.9l-1.07,0.16l-1.02,0.58l-6.68,0.19l-0.58,0.37l-0.42,1.49l-2.34,1.14l-2.91,0.15l-2.41,-1.06l-1.51,-0.19l-0.86,-0.65l-2.56,-3.71l-2.65,-1.24l0.21,-0.7l2.1,-1.9l1.68,-0.16l2.55,-1.92l1.17,-2.68l0.95,-0.49l2.7,-2.47l0.21,-1.44l-0.78,-2.37l-1.27,-0.8l-2.38,0.04l-2.05,-0.95l-0.44,0.2l-0.1,0.88l-0.34,-0.13l-0.73,-2.68l-1.84,-1.99l-0.24,-1.17l0.56,-3.95l-0.52,-2.22l-1.03,-0.81l-1.27,0.92l-0.09,-0.36l0.24,-2.83l1.54,-1.82l0.43,-1.07l-0.96,-2.79l-0.87,-0.33l-1.62,0.72l-0.34,0.71l0.12,1.14Z", "name": "Jharkhand"}, "IN-JK": {"path": "M176.08,35.04l2.37,-2.36l-0.15,-2.71l0.72,-0.56l5.27,-0.96l3.12,-1.98l1.87,-0.7l1.84,-0.15l1.87,0.3l7.81,2.66l10.87,2.04l5.97,-0.52l1.57,1.55l2.54,1.46l8.19,2.07l5.87,-0.33l2.57,-2.29l3.11,-1.82l1.42,-1.8l0.86,-0.17l1.84,0.74l1.27,-0.01l3.39,-0.84l5.27,-2.66l0.99,0.15l1.97,1.12l3.39,-0.56l3.4,-2.92l0.32,-0.85l0.08,-2.41l0.59,-0.43l1.96,-0.39l1.61,0.69l0.77,0.01l2.91,-2.36l0.56,-0.77l0.2,-1.26l-0.34,-1.59l0.44,-0.53l22.94,-13.34l0.94,1.29l1.66,0.81l1.15,-0.36l2.19,-1.83l1.4,0.07l0.25,0.97l-1.39,3.65l-0.24,2.94l1.11,2.66l2.85,4.79l0.56,3.9l0.5,1.32l1.45,1.99l1.9,6.57l0.74,1.28l1.29,1.15l1.47,0.62l7.06,1.14l1.68,0.66l2.57,1.86l1.66,2.01l3.68,1.47l0.79,0.71l0.72,1.3l0.34,1.43l-0.32,1.36l-2.12,1.93l-2.99,1.23l-2.52,1.81l-0.26,3.11l1.51,4.2l0.72,4.34l-0.37,6.71l0.6,2.02l0.76,1.24l2.91,2.63l1.83,2.73l2.61,1.09l0.44,1.63l0.42,0.49l2.17,-0.32l3.4,1.53l2.5,0.11l0.76,0.38l0.07,0.93l-1.15,2.16l-0.31,3.79l0.76,1.2l1.74,1.47l1.04,2.98l1.58,1.74l-0.13,2.04l-1.78,2.45l-2.99,2.26l-1.28,1.37l-2.29,-0.49l-2.63,0.8l-0.83,0.67l-1.0,3.25l-1.34,-0.22l-2.55,1.01l-0.76,-0.22l-4.17,-3.55l-0.99,-2.71l0.36,-2.45l-0.62,-0.72l-0.73,-0.26l-0.88,0.28l-1.95,1.75l-6.89,0.7l-0.72,0.37l-0.3,0.78l-1.91,1.79l-0.48,-0.21l-0.24,-0.53l0.84,-2.71l2.04,-1.64l0.41,-0.81l0.1,-2.61l-0.35,-1.18l-0.52,-0.44l-1.59,0.09l-0.31,0.35l-0.01,0.78l-1.28,0.59l-0.52,0.64l-1.76,0.13l-2.36,0.83l-1.87,1.76l-1.16,0.19l-1.94,-2.71l-0.28,-2.27l-1.13,-1.48l-1.11,-2.41l-4.43,-4.94l-0.7,-0.03l-1.02,0.5l-3.7,2.62l-4.93,1.16l-0.67,0.74l-0.48,-0.0l-6.46,-2.01l-1.4,-0.78l-4.53,-2.86l-5.76,-5.55l-4.11,0.12l-1.88,-1.36l-0.71,-0.13l-1.11,0.56l-3.58,0.69l-3.2,1.74l-0.74,0.87l-0.39,1.36l-0.68,0.71l-4.17,1.72l-4.44,3.8l-1.01,-0.85l-1.7,-0.58l-1.74,0.49l-0.44,0.98l0.29,1.07l3.0,3.83l-0.27,2.22l0.73,1.87l-0.04,0.89l-1.7,1.9l-0.05,0.61l-0.99,1.43l-2.76,1.28l-0.43,1.18l-0.85,0.7l-2.45,0.3l-1.37,0.77l-2.13,2.4l-1.29,-0.76l0.03,-0.69l-0.42,-0.49l-1.71,0.82l-2.67,0.07l-3.04,-2.13l-2.21,-0.52l-3.16,-1.86l-3.66,0.69l-2.22,-1.01l-3.41,0.48l-0.92,-0.3l-0.7,-0.79l-0.95,-2.82l0.8,-1.82l-0.19,-2.8l1.2,-2.89l-0.26,-1.2l-0.74,-0.4l-0.76,0.21l-0.63,0.65l-0.62,1.67l-1.02,0.49l-2.05,0.22l-2.05,-1.37l-2.17,0.76l-0.5,-0.09l-0.91,-1.05l0.73,-1.21l0.13,-0.85l-0.81,-4.48l-1.14,-0.74l-2.8,-0.45l-1.0,-0.55l-1.7,-2.2l-2.9,-2.45l-0.36,-0.9l0.31,-1.78l2.08,-1.05l0.87,-1.05l1.26,-3.13l0.67,-2.87l-0.65,-2.12l-5.01,-3.36l-0.4,-1.27l0.28,-1.74l1.77,-2.59l3.3,-0.55l2.28,-1.26l1.59,-1.84l0.35,-1.48l-0.54,-1.32l-1.2,-0.71l-3.32,0.36l-2.29,-0.58l-2.14,0.5l-0.78,-0.15l-1.4,-1.35l-0.24,-0.86l0.22,-0.85l3.05,-2.05l0.2,-1.12l-1.36,-3.16l-0.58,-0.7l-2.81,-0.24l-1.92,-1.19l-0.07,-1.35l1.86,-1.69l0.23,-1.76Z", "name": "Jammu and Kashmir"}, "IN-UP": {"path": "M275.34,205.39l0.08,-0.87l-0.4,-0.81l0.98,-0.64l0.26,-0.62l-0.39,-1.02l0.09,-1.08l0.63,-0.63l-0.03,-0.78l0.85,-0.74l-0.12,-1.31l0.85,-0.26l0.57,-1.11l1.48,-5.73l1.43,-1.37l0.17,-0.58l0.94,-0.1l0.3,-0.86l2.37,-1.61l0.44,-1.41l4.79,-4.24l0.56,-1.76l0.08,-1.88l0.69,-0.43l1.01,0.2l2.73,2.32l5.75,3.03l-3.25,2.91l-1.42,3.18l-1.4,2.22l0.14,4.1l1.02,4.01l1.5,2.84l0.53,0.17l3.93,-2.12l4.27,2.33l1.87,-0.79l1.16,-1.27l0.27,-1.53l-1.31,-5.86l0.44,-0.6l0.93,-0.03l1.97,1.95l2.37,3.99l3.63,1.83l1.01,1.0l2.3,3.68l1.72,1.49l5.15,2.91l3.22,0.87l-0.29,0.67l-1.36,1.2l-1.25,-0.03l-0.74,1.01l-0.97,-0.35l-0.89,0.33l-0.75,1.13l0.36,0.82l4.44,2.28l0.82,1.11l0.45,2.3l0.61,0.28l1.07,-0.68l2.94,-0.83l2.2,1.17l0.37,1.16l0.83,0.95l3.93,2.71l1.56,0.36l0.81,-0.24l1.2,1.39l0.83,2.42l0.51,0.21l2.48,-0.94l0.99,-0.02l0.51,0.84l0.69,0.17l1.07,-0.46l2.12,0.39l0.81,-0.28l0.49,-0.86l1.92,0.26l0.58,0.43l-0.37,1.25l0.26,0.54l0.61,0.21l1.18,-0.4l0.11,1.23l0.97,0.05l0.34,0.98l1.38,0.56l1.93,-0.72l0.97,-1.03l0.5,-1.07l2.2,2.05l1.78,0.44l1.1,1.2l1.02,0.42l1.36,2.19l0.82,0.27l1.64,-0.21l2.4,2.1l0.56,-0.22l0.15,-0.44l-0.17,-2.69l0.63,-0.53l0.74,0.02l0.4,1.04l2.24,0.66l1.17,1.65l1.64,0.62l1.64,1.48l0.65,0.35l2.05,0.21l0.35,1.28l0.73,0.61l1.33,0.34l1.04,-0.11l0.72,1.29l5.03,1.12l0.53,0.65l1.04,2.88l2.01,2.4l-0.35,0.91l0.75,0.97l1.19,0.06l0.59,-0.34l0.52,-0.97l0.76,0.17l1.08,0.92l0.65,1.65l0.59,0.53l2.77,1.38l1.6,1.47l2.32,0.63l1.89,1.78l3.25,1.95l1.27,0.05l1.97,-1.88l0.73,-0.31l1.44,0.14l0.64,0.2l1.19,1.09l1.86,0.8l3.63,2.88l2.4,1.17l1.78,1.68l1.35,0.37l2.68,-0.3l3.76,-0.93l0.61,0.23l0.78,1.86l0.64,3.77l1.05,1.07l3.78,0.24l2.16,1.0l1.95,0.46l3.79,-0.02l1.0,0.38l1.46,1.18l1.22,1.83l0.87,0.34l1.01,-0.06l1.26,-0.95l0.95,-1.56l-0.43,-1.73l0.64,-0.32l6.11,0.45l7.74,3.44l-0.08,0.57l0.44,0.31l0.89,-0.1l-0.14,1.46l1.68,1.8l-0.02,2.27l2.55,3.19l0.12,2.0l1.36,2.56l2.76,1.74l1.3,-0.6l0.85,0.05l0.44,0.97l-0.19,2.57l0.25,0.77l1.93,0.52l2.54,2.63l-8.75,-0.21l-0.69,0.64l-0.89,2.26l-1.87,0.57l-0.58,0.71l-0.53,-0.86l-1.04,0.3l-0.27,2.29l0.45,0.95l1.56,0.43l1.39,-0.63l2.0,1.49l2.85,0.74l-0.75,1.75l0.72,1.59l-1.71,-0.01l-0.98,0.62l-2.56,0.37l-0.78,0.73l-0.02,1.17l1.57,1.59l0.8,1.89l2.75,1.4l0.66,1.24l1.01,0.41l0.56,1.63l1.2,1.16l0.84,0.22l2.77,-0.43l1.0,1.36l1.44,0.91l2.29,0.25l2.18,1.96l0.09,0.43l-0.43,1.02l-1.48,1.05l-1.13,0.16l-1.72,-0.61l-1.57,-1.34l-1.31,-0.02l-1.48,0.93l0.37,2.52l-1.19,0.43l-1.3,-0.47l-0.42,-2.32l-1.02,-0.59l-1.43,0.28l-2.76,2.12l-1.74,2.2l-3.5,2.93l-2.15,0.89l-1.31,1.48l-12.02,6.86l-1.28,1.31l-0.44,1.05l-0.35,3.14l0.15,0.85l1.12,1.85l-0.29,4.03l2.54,2.96l2.69,1.36l0.21,1.11l-0.62,1.25l0.43,1.32l-0.04,2.89l-2.45,0.3l-1.39,1.1l-0.01,1.49l1.65,3.07l-0.95,1.29l-0.26,1.5l-1.39,1.86l-1.72,4.05l-1.53,1.2l-0.32,1.67l-0.84,1.34l-3.39,1.26l-4.96,-0.24l-1.19,-0.65l-1.66,-1.53l-1.22,-0.35l-0.94,-1.34l-0.99,-0.75l0.07,-1.48l-1.86,-1.99l0.85,-0.12l0.85,-0.74l0.33,-2.2l0.73,-1.76l-0.05,-2.43l-0.94,-0.86l0.33,-2.55l-0.28,-1.36l0.21,-0.26l0.93,0.28l0.92,-0.26l0.51,-1.09l-1.52,-2.87l-1.63,-0.31l-0.22,-1.37l-0.98,-0.12l-2.9,1.04l-1.34,-0.13l-2.9,-0.97l-1.02,0.1l-0.38,0.54l0.07,1.74l-0.34,0.46l-2.48,0.03l0.46,-0.94l-0.09,-0.81l-0.63,-0.61l-1.13,-0.04l0.05,-2.17l-0.46,-0.58l-0.5,0.11l-0.69,1.01l-0.23,-0.11l0.34,-1.13l-0.43,-1.53l-0.75,-0.06l-2.07,1.15l-2.62,-1.65l-2.34,-0.36l-2.44,-1.83l0.1,-1.46l-1.19,-1.84l-1.25,-0.33l-1.65,0.49l-0.55,-0.18l-0.66,-1.21l-3.93,-0.58l0.12,-0.94l-1.36,-2.79l-0.44,-0.15l-3.52,1.18l-0.04,0.71l1.17,0.85l-1.17,0.38l-1.22,-0.17l0.17,-0.95l-0.6,-0.6l-1.6,-0.5l-2.36,0.14l-0.44,0.65l0.07,2.14l-1.89,2.61l0.26,1.6l-1.41,0.32l-0.94,1.06l-2.61,-1.77l-1.96,0.4l-1.39,-1.0l-2.12,0.47l-1.76,-0.18l0.84,-1.31l0.15,-0.88l0.88,-0.9l0.2,-1.29l0.88,-2.03l-0.08,-0.99l-0.92,-0.55l-1.39,0.37l-0.83,1.53l-3.3,0.4l-0.04,0.77l1.71,1.4l-2.08,0.3l-0.9,-0.82l-0.8,-1.5l-0.89,-0.3l-0.66,0.44l0.01,1.06l-2.31,-0.37l-0.6,0.3l0.4,1.75l1.24,0.71l-0.82,0.53l-0.4,0.04l-1.56,-1.55l-0.56,0.43l0.22,1.27l-1.38,-0.38l-1.63,0.37l-0.51,-0.7l-0.17,-0.93l1.06,-0.2l1.53,-1.78l2.0,-1.08l0.21,-0.73l-0.78,-2.05l-0.88,-0.18l-0.5,-0.7l-0.94,-0.49l-0.28,-2.59l-0.93,-1.59l-0.79,-0.28l-1.27,0.27l-0.88,-0.25l-2.49,2.19l-1.13,-0.36l-2.27,1.05l-3.01,2.29l-2.37,0.66l-0.35,0.48l0.02,0.73l1.03,1.63l-1.68,0.65l-0.98,-0.78l-3.65,0.23l-3.08,-0.97l-0.92,0.48l-1.43,1.94l-0.32,-0.02l-0.21,-0.76l-0.47,-0.4l-1.47,0.02l-0.45,0.65l0.08,1.56l-0.7,0.07l-0.49,-0.55l0.21,-1.36l0.89,-0.87l1.71,-2.67l0.6,-1.48l-0.19,-0.47l-0.47,-0.14l-1.16,0.86l-0.87,-0.19l-0.77,0.28l-0.81,0.96l-0.37,-0.96l1.04,-2.22l-0.64,-0.78l-0.75,0.11l-1.26,2.01l-0.04,1.23l0.78,3.19l-3.22,-0.57l-1.29,1.21l-0.23,-1.37l-0.3,-0.28l-0.87,-0.01l-1.75,0.66l-0.09,-0.73l1.1,-1.71l-0.97,-0.87l-0.86,-0.22l-0.71,0.35l-0.16,1.32l-1.22,0.43l-1.02,1.15l-0.59,0.21l-0.12,-0.99l0.32,-0.89l1.91,-1.82l-0.03,-1.44l0.63,-1.25l0.16,-1.42l-0.55,-0.91l-1.06,0.13l0.35,-1.08l-0.08,-1.1l-0.23,-0.57l-0.88,-0.52l-0.72,0.25l-0.62,0.73l-0.32,0.9l0.03,1.77l-0.3,0.25l-0.55,-0.02l-0.1,-2.28l-0.54,-0.97l-0.57,-0.09l-1.75,1.02l-0.19,1.54l0.75,0.94l-0.52,0.98l0.19,1.26l-2.07,-2.02l-1.41,-0.23l-1.13,0.35l-0.36,0.65l0.12,0.74l-1.48,1.74l-0.57,1.6l0.32,0.71l1.59,1.5l1.08,2.41l1.2,6.41l2.31,3.04l0.36,3.85l-0.65,1.88l0.4,1.02l1.03,0.66l2.06,-0.54l1.03,0.19l1.85,3.2l-0.17,1.52l0.39,0.4l1.51,0.37l-0.16,1.09l-0.47,0.87l-1.67,1.57l-1.07,2.4l-1.57,1.53l-0.99,-0.36l-0.45,-1.43l-2.96,-0.6l-3.64,-3.03l-1.66,-0.82l-1.14,0.44l-0.61,1.98l-0.56,0.69l-0.97,0.47l-0.88,-0.44l-0.41,-0.83l0.63,-1.22l-0.08,-0.85l-2.21,-1.45l-0.19,-0.65l-0.85,-0.52l-0.49,-0.89l1.35,-2.51l0.03,-0.97l-0.38,-0.52l0.07,-1.6l-0.96,-1.46l-0.21,-2.0l-0.83,-1.48l-0.83,-0.73l0.24,-0.53l2.34,-1.55l2.17,-2.14l0.53,-1.55l-0.31,-1.12l1.1,-3.45l-0.18,-1.0l-1.96,-3.91l-1.39,-2.03l2.35,-2.06l0.58,-0.87l0.55,-1.89l3.26,-0.78l2.42,0.06l1.81,-1.06l2.97,-0.59l1.28,-0.74l0.27,-0.98l-0.81,-2.2l0.14,-1.22l0.38,-0.7l1.92,-1.49l0.81,-2.07l1.37,-1.68l1.06,-2.84l1.2,-1.91l-0.03,-0.77l-0.96,-0.97l0.0,-0.62l1.1,-0.89l-0.56,-1.88l0.59,-0.57l1.79,-0.57l1.29,-1.72l0.13,-0.63l-0.6,-0.73l0.33,-1.15l-0.1,-1.04l-0.67,-1.92l-2.1,-3.28l-0.72,-3.17l-0.59,-0.68l-1.97,0.16l-2.0,-1.93l-0.9,-0.14l-0.36,-0.7l-0.99,0.05l-0.56,-0.52l-1.79,0.76l-1.18,-0.01l-0.74,0.63l-0.64,-0.02l-1.43,-0.82l-1.72,-0.3l-1.05,-1.0l-1.16,-0.1l-0.54,-0.83l-0.76,-0.27l-2.23,0.18l-0.93,1.15l-1.2,-0.18l-0.62,-0.89l0.78,-0.3l1.09,-1.02l0.27,-0.71l-0.74,-0.73l-1.94,-0.48l-2.22,0.1l-1.26,1.15l-1.17,0.12l-0.39,0.59l-0.88,-0.48l-2.81,-0.37l-1.09,0.33l-0.92,-0.47l-3.28,-0.47l-2.51,1.71l-3.97,1.63l-1.26,-0.07l-0.91,1.46l-0.86,0.49l0.13,-2.17l0.57,-0.69l6.23,-2.89l2.25,-0.54l0.72,-0.58l0.09,-0.67l-0.84,-0.74l-0.84,0.58l-0.62,-1.04l-0.47,-0.22l-0.8,0.55l-1.65,-0.21l-0.65,-1.0l-0.85,-0.27l0.11,-0.38l2.42,-0.72l0.53,-1.05l1.15,-0.65l0.56,-1.2l-1.43,-2.52l-0.3,-1.75l-1.54,-0.43l-3.64,-2.12l-0.61,-1.8l-2.26,-2.94l0.03,-1.53l-0.68,-0.68l0.5,-0.81l-0.04,-0.86l-0.47,-1.19l-0.72,-0.53l-0.37,-2.72l0.75,-0.66l2.6,-0.95l0.83,-0.85l0.99,0.2l0.51,-0.21l1.14,-1.79l0.79,-0.67l-0.81,-2.35l-1.02,-0.86l0.1,-1.29l0.34,0.21l0.6,-0.43l-0.26,-1.77l1.08,-0.7l0.18,-0.62l-0.76,-0.58l0.74,-1.51l-1.42,-0.68l-0.05,-0.97l-0.62,-0.65l0.87,-2.29l-0.41,-0.56l-0.44,0.04l-0.11,-1.16l-0.36,-0.26l-0.88,0.17l-0.49,-1.15l-0.94,0.01l-0.29,-0.67l-1.11,-0.66l-1.05,-1.92l1.12,-1.48l-0.06,-1.04l-0.85,-2.6l-2.48,-2.18l-0.53,-1.11l0.23,-0.83l-0.41,-0.93l0.54,-1.42l-1.35,-1.66l0.54,-1.2l-1.8,-3.7l-0.14,-5.52l0.56,-1.3l-0.47,-0.92l-0.03,-0.89l0.47,-1.5l-0.93,-0.73l-1.3,0.03l1.29,-1.31l-0.05,-0.56l-0.46,-0.39l-0.95,-0.01Z", "name": "Uttar Pradesh"}, "IN-SK": {"path": "M624.09,256.17l1.74,-1.11l1.5,0.04l2.71,-2.5l1.43,1.15l2.65,0.52l2.31,1.81l-0.23,2.08l1.28,1.8l0.06,0.92l-1.46,6.18l-1.76,3.15l-0.24,1.13l0.49,0.78l-0.09,1.51l0.63,1.96l3.56,3.09l-0.14,0.55l-0.53,0.4l-1.78,0.44l-1.01,0.67l-1.42,2.94l-1.56,-0.85l-4.67,-0.11l-3.06,2.58l-1.78,0.44l-3.84,-1.72l-3.55,-0.05l-0.65,-0.3l-0.58,-1.87l-1.79,-1.32l0.79,-2.13l-0.61,-1.91l0.81,-1.92l-0.56,-1.88l2.65,-4.71l1.54,-4.54l-0.12,-1.42l0.29,-1.16l-0.51,-0.51l-1.07,-0.3l-0.48,-1.12l0.06,-0.62l0.47,-0.48l1.19,0.1l6.6,-1.18l0.74,-0.55Z", "name": "Sikkim"}, "IN-MZ": {"path": "M743.96,392.77l0.71,0.19l0.37,-0.45l-0.14,-2.85l0.55,-1.85l-0.42,-1.43l0.33,-2.14l-0.11,-2.89l-0.65,-1.18l2.99,-0.03l-0.38,1.02l0.75,1.88l1.11,0.72l1.07,-0.2l3.08,-2.92l1.24,-0.79l-0.05,-1.35l2.53,-2.77l1.3,-3.49l2.32,3.71l1.02,0.04l1.89,-0.78l1.44,0.32l0.94,-0.24l0.11,0.82l0.68,0.79l-0.94,1.59l0.08,1.22l-0.6,3.47l-0.55,0.59l0.12,0.67l2.91,1.14l1.2,0.91l1.31,-0.55l0.72,0.69l0.62,0.01l1.32,-0.83l0.11,1.34l0.61,0.24l0.97,-0.45l0.25,1.53l1.46,2.27l0.56,5.39l1.62,1.71l0.15,1.2l-0.99,6.3l0.22,3.39l-0.91,1.69l-0.09,5.36l-1.22,2.4l-1.63,1.33l-0.58,0.03l-1.4,-1.49l-0.78,-0.25l-0.99,0.29l-0.58,0.74l0.04,2.05l0.88,1.94l0.12,0.97l-1.74,2.48l-1.23,1.16l-0.27,2.69l1.21,3.12l-0.33,2.8l0.6,1.65l1.1,1.18l0.34,1.19l0.24,3.97l-1.47,0.77l-0.09,0.62l0.38,0.78l-2.29,-0.79l-1.1,0.42l-0.08,2.78l-1.0,0.47l-0.71,1.34l0.31,2.1l-0.63,-0.79l-0.82,-0.32l-0.71,0.4l-0.47,1.47l-0.37,-1.67l-0.66,-0.91l-2.03,-1.9l-1.96,-1.42l-0.88,-0.27l-0.8,0.54l0.01,1.48l-0.37,0.18l-0.18,0.63l-0.08,1.63l-0.92,0.25l-0.78,0.79l-1.04,-4.15l0.88,-0.24l0.27,-1.25l-1.83,-11.1l-0.51,-1.55l-0.17,-4.45l-0.52,-1.11l-1.15,-1.14l-0.55,-3.59l-0.61,-0.67l-0.91,-0.36l-0.68,-1.66l0.02,-2.29l-0.78,-4.56l0.13,-1.61l0.79,-1.88l-0.27,-2.46l-0.7,-0.81l-0.08,-0.97l-0.71,-0.88l-1.55,-6.66l0.55,-2.59l-0.21,-1.75l0.23,-1.48l0.46,-0.67Z", "name": "Mizoram"}, "IN-CT": {"path": "M376.2,561.12l-0.76,-1.04l-0.54,-2.04l-1.09,-0.57l-0.15,-0.57l0.27,-0.65l2.07,-1.28l0.36,-0.85l-0.24,-0.79l-1.82,-2.18l-0.32,-1.59l0.51,-1.14l2.36,-3.16l1.16,-4.17l1.21,-0.64l1.08,-1.84l1.03,-0.48l0.89,-1.14l0.61,-0.26l1.07,2.14l2.07,0.07l0.93,1.63l0.73,0.22l1.24,-1.17l2.22,-1.2l0.11,-0.81l-0.84,-1.42l2.23,-0.73l0.65,-1.58l-0.64,-1.49l-1.37,-1.28l-4.18,-1.73l-0.94,-2.81l-2.92,-1.34l-1.24,-2.7l-0.75,-0.22l-0.84,0.27l-0.46,0.55l-0.09,0.78l-1.61,-0.42l1.75,-0.9l0.59,-1.0l-0.24,-0.9l-1.6,-0.51l0.5,-0.9l1.91,0.56l0.81,-0.33l0.83,-4.19l-1.06,-3.19l-3.34,-0.41l0.3,-2.29l0.6,-0.47l2.53,-0.4l2.93,-1.99l0.18,-0.75l-0.42,-1.42l0.05,-2.41l0.61,-1.47l-0.41,-1.1l-0.13,-2.2l-1.6,-0.59l-2.16,0.82l0.34,-0.93l1.82,-1.1l0.25,-1.05l-0.49,-2.64l-0.19,-4.61l-0.89,-0.79l-1.73,0.09l-0.93,-1.74l0.73,-4.2l0.63,-0.84l4.35,-2.42l1.73,-2.04l0.06,-1.69l1.3,-3.97l-0.11,-3.65l0.64,-4.84l1.91,-0.95l0.61,-1.04l0.55,-1.62l-0.09,-3.28l2.01,-4.15l0.85,-0.2l1.2,1.46l0.55,-0.07l0.46,-0.5l0.09,-0.85l-0.42,-0.87l0.8,-0.52l0.42,-2.56l1.99,-1.5l0.72,-1.23l0.16,-3.55l1.21,-1.92l0.5,-0.43l0.46,0.94l1.05,0.27l3.57,-1.69l1.2,1.52l0.79,0.43l1.06,-0.45l2.76,-2.24l3.2,-1.03l0.92,-1.95l2.97,-1.77l-0.02,-1.86l0.73,-1.05l-0.19,-2.83l0.19,-0.37l2.32,-0.91l2.35,-2.12l0.23,-0.95l-0.31,-1.56l0.29,-0.66l3.67,-1.75l1.99,-0.03l0.88,-1.76l1.03,-4.6l-0.16,-1.02l-2.37,-2.04l-2.34,0.08l-0.36,-0.7l-0.98,-0.37l-2.06,-3.14l-0.79,-0.36l-1.44,-0.08l-3.16,-1.17l-0.65,0.1l-2.65,1.78l-0.44,0.01l-0.97,-2.0l0.65,-0.89l0.15,-1.17l1.07,-0.61l1.02,-1.6l-0.17,-1.22l-1.75,-3.33l0.06,-1.2l1.2,-0.2l1.84,1.89l1.03,0.75l1.08,0.3l1.09,-0.04l3.01,-1.44l1.96,0.13l2.28,1.14l3.87,0.03l1.87,0.48l8.34,0.33l1.27,-0.98l2.41,-1.15l0.77,-1.85l3.07,-1.14l0.59,-0.82l0.3,-1.29l0.83,0.21l1.66,1.52l1.43,0.77l5.35,0.26l3.78,-1.46l1.03,-1.62l0.25,-1.54l1.45,-1.09l0.74,-1.65l3.19,0.58l1.86,1.28l0.24,2.82l0.99,1.75l4.75,4.36l0.66,1.82l-0.44,2.11l1.35,2.8l1.06,0.48l1.68,-0.12l2.34,0.83l0.55,-0.55l-0.05,-1.51l1.36,-0.48l0.76,2.35l-1.89,2.51l-0.29,3.17l0.54,1.11l0.6,0.01l0.99,-0.91l0.48,0.7l0.3,1.5l-0.56,4.03l0.33,1.47l1.84,1.98l0.9,2.89l1.12,0.31l0.52,-0.4l0.04,-0.52l1.65,0.8l2.21,-0.09l0.9,0.49l0.71,2.65l-0.72,0.97l-2.99,2.18l-1.13,2.64l-2.36,1.79l-1.78,0.21l-2.14,1.78l-0.72,2.26l0.72,1.48l0.15,1.18l-1.13,1.76l-3.47,0.93l-3.65,3.0l-3.05,1.37l-2.17,2.82l-0.35,1.32l0.73,1.02l-1.48,0.97l-0.33,1.95l0.41,0.86l1.39,0.93l-0.35,1.31l0.13,0.75l-0.12,0.3l-0.98,0.13l-0.29,0.89l-1.06,-0.2l-0.46,0.37l-0.32,1.8l-3.28,5.47l-0.78,2.64l0.11,1.7l1.58,1.75l0.07,1.4l-2.14,-0.68l-0.99,0.11l-0.68,0.98l-0.1,1.33l-0.9,1.29l-0.91,2.51l-1.44,1.46l-2.01,0.14l-3.31,-2.01l-4.53,0.66l-0.98,0.41l-1.12,-0.49l-3.11,0.28l-0.56,0.45l-0.04,1.31l-2.46,4.73l-1.43,0.95l-1.59,2.2l-1.09,0.56l0.01,-0.76l-0.55,-0.52l-1.36,-0.25l-0.68,0.54l-0.09,4.18l0.72,2.52l-0.83,4.18l0.61,1.45l0.67,0.17l0.4,1.27l0.79,0.22l-0.29,3.71l0.48,1.12l0.27,3.76l-0.69,2.58l0.08,0.98l2.58,1.62l2.3,0.07l1.42,1.1l1.33,-0.5l1.05,0.06l-0.41,3.09l0.82,1.35l-3.43,2.25l0.01,-2.29l-1.81,-0.32l-1.56,-0.7l-3.66,-0.37l-0.86,0.54l-0.78,1.34l-2.46,-4.66l-0.59,-0.31l-1.08,0.07l-0.43,-0.79l-2.26,-1.77l-0.81,0.21l-0.92,1.26l-0.28,-0.91l-2.18,-2.08l-0.5,0.09l-1.32,1.38l-0.97,0.56l-1.53,2.64l-0.2,1.29l0.69,1.16l3.02,1.8l0.98,1.71l2.17,0.75l-0.29,2.12l0.41,1.88l-0.25,4.24l0.5,0.47l0.99,0.22l0.95,1.7l1.38,0.51l0.36,0.45l-0.98,1.25l0.11,0.61l0.97,0.86l-0.71,1.75l-0.07,1.21l0.69,1.82l-0.2,1.59l1.06,0.93l0.17,1.09l0.72,1.28l0.08,2.46l-1.85,1.77l-0.79,3.73l-0.61,-0.56l-0.52,-0.03l-0.99,1.69l-2.34,0.54l-1.59,1.62l-1.01,0.36l-0.27,0.97l1.23,1.04l0.02,0.59l-1.55,1.0l-3.02,2.84l-1.83,2.83l-1.7,0.58l-0.96,1.18l-3.23,1.04l-0.99,2.18l0.33,1.34l-0.54,2.23l-0.74,1.15l-0.25,2.85l-0.67,1.16l-0.18,1.23l-0.74,-0.38l-0.78,0.41l-0.23,2.18l-4.04,0.11l-2.81,-1.08l-3.48,1.96l-0.54,-0.18l-0.8,-1.55l-0.22,-3.95l-1.15,-2.66l-0.11,-1.07l0.7,-1.59l-0.22,-0.76l-1.09,-0.27l-1.63,0.55l-0.57,-2.01l-0.9,-0.47l-0.7,0.29l-0.43,1.22l-1.37,0.06l-0.16,-0.75l1.24,-0.83l0.07,-0.8l-2.14,-4.79l-2.4,-3.04l-2.13,-2.27l-1.92,-1.33l-1.32,-0.24l-1.74,0.54l-1.0,-0.81l-0.58,0.42Z", "name": "Chhattisgarh"}, "IN-CH": {"path": "M266.15,165.51l-2.24,-2.23l-0.12,-0.55l1.16,-0.55l1.66,0.15l0.44,1.34l-0.16,1.56l-0.74,0.28Z", "name": "Chandigarh"}, "IN-GA": {"path": "M171.13,653.34l0.82,-0.49l2.2,-0.25l0.84,-1.12l0.38,0.84l1.86,0.75l0.72,2.4l1.25,1.01l1.01,0.17l2.17,-0.81l2.03,0.13l1.31,-0.56l1.58,0.8l0.64,3.06l-0.59,1.24l0.03,0.83l0.59,0.86l0.06,1.41l1.19,1.5l0.15,1.34l-0.25,0.39l-1.24,0.3l-0.42,0.49l0.16,0.93l1.4,1.13l-1.01,2.75l0.15,2.34l-1.02,2.28l-0.76,0.39l-1.33,0.04l-1.82,1.18l-1.4,-0.88l0.06,-1.67l-0.32,-0.72l-0.99,-0.43l-1.0,-1.7l-1.34,-0.43l0.32,-0.82l0.93,-0.77l0.11,-0.61l-0.54,-0.55l-1.62,-5.41l-0.52,-0.65l-1.65,-0.3l-0.6,-0.51l2.08,0.23l0.62,-0.25l0.78,0.3l0.93,0.96l0.63,-0.35l-0.02,-0.58l-1.35,-1.45l-3.77,-1.12l0.45,-0.68l1.85,-0.72l-0.19,-0.91l-0.59,-0.35l-2.36,1.34l-0.55,-0.34l0.05,-0.87l-0.54,-1.54l0.59,-0.89l2.24,-0.65l0.3,-0.6l-0.39,-0.4l-1.74,0.07l-1.67,1.11l-0.87,-2.2Z", "name": "Goa"}, "IN-GJ": {"path": "M0.5,399.96l0.7,-0.07l0.65,-0.85l1.21,0.35l1.42,-0.85l0.14,-0.66l-0.59,-0.43l-0.93,0.34l-0.77,-0.57l-0.51,-2.68l-0.67,0.36l0.47,-2.07l0.64,-0.96l1.64,-0.62l-0.08,-1.16l0.42,0.58l0.75,0.19l1.26,-1.22l0.45,0.24l0.9,-0.64l10.29,-0.14l0.4,-0.4l0.04,-10.49l0.51,-1.05l1.13,0.05l0.45,2.22l0.74,0.73l0.91,-0.37l1.29,-2.29l1.82,2.06l0.74,0.04l2.52,-1.05l3.13,1.14l3.52,-0.99l8.54,0.22l0.76,0.33l2.36,2.42l1.6,0.78l7.98,0.11l1.43,-0.3l1.28,-1.0l1.64,-3.28l4.06,-0.84l1.74,-1.07l2.27,-0.31l1.43,-0.97l4.1,-0.7l0.18,0.38l-0.74,0.64l-0.12,0.58l0.81,3.24l1.9,1.14l4.26,0.3l3.16,-1.22l0.2,-0.72l-0.41,-0.77l2.11,-1.57l2.5,0.12l0.86,-0.95l1.84,-0.89l-0.41,-1.47l-2.81,-0.83l0.18,-2.07l-0.72,-0.83l-0.07,-0.71l0.57,-1.53l2.65,-1.55l1.66,0.93l2.93,0.8l0.95,0.0l2.15,-0.83l2.27,0.43l1.81,-1.1l2.8,-0.18l1.22,0.17l1.61,0.83l3.68,-0.64l0.6,1.02l1.38,0.34l0.62,-0.37l0.1,-0.96l0.5,-0.3l0.41,0.01l0.74,0.75l1.17,0.13l1.71,-1.24l1.73,-0.39l1.37,1.61l2.36,0.79l1.19,0.15l3.43,-0.47l-2.31,0.59l-0.18,0.93l1.37,1.15l1.47,0.26l0.66,0.97l1.68,0.05l0.11,1.14l1.25,1.86l1.07,-0.16l0.95,-2.34l0.8,-0.05l1.64,0.97l1.95,0.54l0.81,1.65l0.86,0.74l5.67,1.0l1.08,-0.16l1.04,-0.81l0.65,-2.67l0.5,-0.68l2.52,-0.5l-0.24,2.59l0.32,0.65l2.29,0.98l1.23,-0.39l0.06,0.28l-0.47,0.73l-1.64,-0.01l-1.21,1.67l-0.94,2.61l0.78,2.06l0.54,0.75l2.28,1.54l0.5,1.22l1.44,1.4l0.56,-0.04l1.5,-1.02l1.08,-1.87l1.13,1.79l0.1,1.35l0.71,1.7l-1.66,1.34l-0.33,3.86l0.52,0.44l1.25,0.07l1.17,1.92l1.59,0.55l0.03,3.2l1.07,0.14l1.29,-1.03l1.02,0.87l0.0,2.34l0.46,1.2l-0.33,1.36l0.26,0.43l1.46,0.1l1.41,0.86l2.79,-0.78l2.48,3.21l1.08,0.17l1.17,-0.81l2.08,1.91l1.71,0.9l0.52,0.58l0.09,1.77l0.56,0.94l1.07,0.46l1.24,-0.62l0.32,0.13l0.75,0.47l1.19,2.04l1.06,0.7l1.04,2.54l0.7,3.74l0.67,0.28l0.99,-0.26l1.0,1.07l0.15,0.89l-2.47,4.86l-0.69,0.73l-2.4,0.5l-3.97,3.3l-2.47,-0.52l-1.06,0.61l-0.17,1.4l2.3,2.09l0.7,0.27l2.5,-0.14l1.17,0.57l-0.52,0.85l-1.21,0.63l-1.38,0.14l-0.87,-0.73l-0.66,-0.14l-0.64,0.34l-0.43,0.83l0.19,3.95l0.98,1.17l0.6,2.21l0.72,1.01l-0.37,1.38l-0.01,2.02l-1.86,0.34l-2.66,1.26l-0.98,0.85l-1.36,0.17l-2.94,1.25l-0.44,1.12l0.24,2.28l1.08,1.72l-0.69,1.24l-1.5,0.35l-0.49,0.63l0.39,1.13l1.62,2.41l0.55,0.29l5.43,-1.52l3.48,0.09l1.05,-0.57l1.48,0.8l2.63,-0.9l0.24,0.98l-1.57,1.06l-3.99,1.1l-1.51,-0.44l-0.73,0.2l-2.61,2.26l-1.23,3.23l-2.07,0.72l-0.67,-0.54l-0.58,-0.03l-0.41,0.34l-0.93,2.34l-2.01,1.14l-0.89,-0.22l-0.84,0.23l-2.12,-1.04l-0.82,0.35l0.24,1.02l1.22,1.18l1.38,0.77l2.01,-0.03l1.03,1.36l1.56,0.58l2.32,2.59l0.99,2.76l0.19,3.31l-0.49,0.92l-2.42,2.07l-0.13,1.4l-0.42,0.84l-2.66,1.32l-1.84,0.02l-1.33,-1.63l-3.25,-1.89l-1.11,-1.53l-0.78,0.14l-0.93,1.49l-1.29,0.62l-0.04,0.76l1.28,0.48l0.25,1.12l0.99,0.4l0.28,1.19l-2.99,5.31l0.78,1.33l0.23,1.97l-0.49,1.57l0.17,0.94l-3.44,-0.35l-0.69,0.66l-0.27,1.36l-1.1,0.52l-0.38,-0.06l-0.01,-1.51l-0.72,-0.56l-1.37,-0.12l-0.43,0.32l-0.21,0.95l-0.95,0.04l-0.36,-1.68l2.24,-1.3l0.45,-0.95l-0.35,-0.68l-1.23,-0.09l0.08,-1.11l-0.81,-0.47l-2.07,1.39l-1.14,-0.0l-0.65,1.29l-1.14,-0.15l-0.55,0.41l-0.11,0.95l1.46,1.36l0.23,1.61l-1.88,0.66l-1.35,-0.06l-0.65,0.32l-1.02,-0.24l-1.45,0.83l0.73,-2.93l0.57,-1.06l-0.41,-0.59l0.18,-1.49l0.99,-2.09l0.98,-0.77l1.51,-0.17l0.65,-0.65l-0.08,-1.64l-0.77,-1.03l0.99,-1.77l-0.03,-2.84l0.62,-1.11l-0.07,-2.45l1.33,-1.05l-0.21,-0.59l-0.63,-0.42l-0.03,-1.1l-0.67,-0.08l-0.38,0.46l-0.11,-0.45l0.53,-1.02l-0.21,-0.61l-1.26,0.33l0.35,-1.15l-0.63,-0.76l1.16,-0.71l0.28,-0.98l-0.44,-0.43l-1.52,0.3l-0.45,-0.77l-1.18,-0.59l1.25,0.19l0.67,-0.14l0.43,-0.53l-1.08,-2.77l-0.57,-0.44l-1.51,0.57l-0.74,-0.19l0.11,-0.83l-0.45,-0.52l-0.52,-0.03l1.22,-0.68l-0.09,-0.44l-1.49,-0.75l-1.09,-0.93l-0.03,-0.45l-0.63,-0.3l-0.58,0.41l-0.15,-0.32l-0.44,-1.87l1.42,-0.28l0.28,-0.74l-0.56,-0.42l-1.68,0.12l1.8,-0.54l2.67,-1.74l0.35,0.25l0.59,-0.15l0.08,-1.13l-0.83,-0.39l-2.31,0.85l-1.68,1.13l0.77,-1.49l2.09,-1.65l2.56,-1.29l1.44,-1.98l1.44,0.24l2.03,-0.72l0.96,-0.67l4.65,-1.88l0.51,-0.51l0.13,-0.73l-0.86,-0.4l-3.05,1.6l-2.75,0.95l-2.09,-0.31l-1.84,0.69l-1.99,-0.44l-1.81,0.3l-1.83,-0.23l-2.19,0.51l-0.03,-0.91l0.75,-1.97l0.26,-2.24l0.6,-0.39l1.0,-2.09l0.74,-0.36l1.38,-0.01l0.52,-0.51l0.26,-0.88l0.74,-0.47l-0.31,-0.63l-1.03,0.01l-0.6,0.71l-2.18,0.28l-2.07,1.63l-0.98,-1.7l1.19,-5.61l0.93,-1.11l0.97,-0.45l1.83,0.91l0.97,-0.07l1.05,0.62l0.56,-0.08l1.83,-2.13l0.87,-0.16l1.4,0.83l0.95,-0.34l0.39,-1.48l-0.64,-1.05l-0.97,0.51l-1.22,-0.43l-0.84,0.08l-1.89,0.94l-2.79,-0.93l-1.08,0.05l-1.68,-0.54l-0.77,0.2l-1.65,1.38l-0.67,0.2l0.15,-0.47l-0.39,-0.52l-1.99,0.41l-0.25,-1.46l0.75,-0.74l0.1,-0.66l-0.41,-0.73l-0.48,-0.12l-1.3,0.92l-0.97,2.53l-1.14,-0.05l-0.41,-1.1l-0.83,-0.23l-1.09,0.05l-0.53,0.76l-1.33,-0.02l-0.2,0.66l0.68,0.67l1.07,0.28l0.85,-0.5l0.31,0.91l0.9,0.39l1.02,-0.03l0.24,1.05l-0.28,3.28l-1.38,1.94l-1.79,0.18l-0.67,0.89l-0.99,-0.87l-1.35,-0.09l-0.31,0.32l0.18,0.41l0.66,0.43l-0.97,-0.27l-0.45,0.17l0.18,0.63l-1.59,0.61l0.15,0.67l1.89,0.64l1.44,-0.1l0.69,0.88l-0.18,0.92l-1.97,-1.61l-0.75,-0.2l-0.45,0.23l-0.2,1.02l1.11,0.46l0.3,0.48l-2.34,-0.84l-0.76,0.39l0.16,2.39l0.61,0.07l0.52,0.59l1.44,-0.43l1.41,0.38l1.26,-0.46l0.97,1.2l0.7,1.57l0.66,0.39l0.82,0.02l0.65,0.95l0.03,0.91l-0.66,0.75l-1.0,3.65l-2.24,2.74l-0.51,1.07l-1.35,1.36l-0.58,2.43l0.41,1.27l-3.25,1.99l-2.05,0.24l-4.99,3.12l-1.45,0.04l-2.41,1.15l-1.67,1.19l0.07,-0.5l-1.13,0.05l-1.81,1.46l-0.9,1.36l-4.4,1.16l-5.39,2.64l-1.52,0.13l-0.92,0.73l-2.44,0.05l-0.65,0.93l-3.65,0.22l-0.99,-0.18l-0.85,-0.59l-1.16,0.23l-1.21,-0.86l-4.8,-1.96l-2.71,-1.5l-1.64,-1.54l-1.94,-0.78l-8.52,-7.09l-3.03,-3.95l-3.49,-3.74l-0.87,-1.33l-0.17,-0.96l-1.73,-1.02l-3.88,-4.04l-1.94,-1.14l-2.67,-3.2l-1.63,-1.0l-0.84,-1.01l-0.18,-1.89l-0.66,-0.19l-0.63,0.59l-0.54,-0.17l-4.18,-3.73l-1.45,-1.96l-1.46,-1.14l-1.7,-2.63l-1.65,-1.48l-1.47,-2.81l0.88,-3.29l0.5,-0.76l1.32,-0.83l-0.26,0.75l1.01,1.24l0.67,0.08l1.02,-0.44l0.83,0.17l0.94,-0.69l0.25,0.21l-1.03,2.68l0.24,0.84l1.52,1.23l2.4,-0.38l1.52,-0.7l0.65,-0.71l2.26,-0.04l1.51,-0.42l1.45,-1.37l0.19,-0.7l-0.34,-1.28l0.36,-0.06l0.3,2.26l1.88,0.7l0.59,-0.29l0.11,-0.39l0.69,-0.13l0.66,-0.9l0.59,0.21l0.46,-0.2l0.83,-2.0l1.53,1.64l0.7,-0.0l0.95,-1.43l1.58,-0.33l2.54,-2.09l2.6,-0.59l2.59,0.34l1.25,-0.49l4.5,-7.15l0.16,-1.52l1.55,-2.48l2.22,-1.93l1.09,0.04l0.73,-0.69l0.69,-1.43l0.07,-0.9l-0.87,-2.13l-1.25,-0.94l-2.24,1.56l-0.43,0.78l0.33,1.53l-0.31,2.26l-1.2,0.23l-0.53,-0.37l-0.68,0.08l-0.97,-0.5l-1.1,-1.31l-0.65,0.29l-0.22,1.03l-1.45,0.21l-0.85,-0.55l-0.06,-0.82l-0.53,0.16l-0.65,1.13l0.61,0.91l-1.78,0.22l-2.05,0.8l-5.13,1.18l-2.35,1.7l-1.17,1.86l-1.81,-0.42l-2.04,-0.02l-0.85,-0.55l-1.78,-0.11l-5.03,-1.67l-4.08,-0.59l-4.99,-3.19l-5.31,-2.24l-6.42,-4.41l-0.28,-0.83l-0.74,-0.31l-0.42,-0.6l0.49,-0.71l0.1,-0.83l-0.57,-0.36l-1.75,0.26l-0.15,-0.25l0.45,-0.89l1.3,-0.27l0.19,-0.55l-1.43,-1.28l-1.29,-0.24l-0.08,-0.55l0.78,-0.72l-0.27,-0.47l-1.15,-0.11l-0.95,0.55l-0.06,-1.22l-1.08,0.26l1.83,-2.32l-0.14,-0.36l-0.86,-0.1l-0.56,-0.78l-0.49,-0.1l-0.21,0.45l0.29,1.18l-0.41,0.11l-0.0,-3.49l2.18,0.23l0.39,-0.38l0.04,-0.61l-0.48,-0.5l1.61,-0.59l1.53,-1.82l1.55,-0.78l1.08,-1.78l1.61,-0.09l3.07,-2.0l-0.09,-0.69l-0.8,-0.19l-1.32,0.28l-1.37,1.12l-2.52,0.25l-0.62,0.52l-0.65,1.24l-5.16,2.14l-2.79,3.05l0.2,0.67l-0.49,0.4l-4.27,-0.24l-0.75,-0.44ZM141.04,481.24l-0.02,0.35l-0.14,0.07l0.03,-0.2l0.13,-0.22ZM139.1,480.22l0.01,0.97l-0.7,0.34l-0.26,-0.5l0.95,-0.81ZM28.19,437.73l0.34,-0.24l-0.1,0.14l-0.23,0.1Z", "name": "Gujarat"}, "IN-RJ": {"path": "M113.16,366.39l-0.79,-0.19l-0.82,-1.14l-3.88,0.61l-1.37,-0.78l-1.49,-0.21l-3.05,0.21l-1.75,1.08l-2.15,-0.45l-2.94,0.83l-2.75,-0.76l-1.27,-0.83l-0.91,-0.2l-1.55,-3.64l-2.68,-4.47l-2.06,-7.11l-3.54,-3.49l-0.79,-2.29l-1.64,-1.88l-0.21,-1.01l0.33,-6.6l-0.19,-1.6l-0.91,-1.04l-1.23,-0.24l-3.67,1.06l-3.52,0.09l-2.79,-0.74l-0.75,-0.92l-0.69,-1.91l-3.03,-3.12l-0.94,-1.52l-0.54,-1.56l0.29,-3.26l1.77,-3.12l0.63,-2.52l-0.28,-1.98l0.55,-1.87l-0.16,-5.57l-1.0,-1.17l-2.36,-0.91l-7.44,0.28l-1.19,-0.44l-3.46,-2.72l-4.77,-1.9l-0.82,-0.89l-0.21,-1.18l1.29,-7.93l0.8,-2.43l1.22,-2.0l8.35,-7.32l1.89,-2.92l2.65,-2.47l0.77,-1.08l2.56,-6.91l7.24,-6.53l3.37,-0.9l2.19,0.73l2.89,2.68l0.22,2.51l0.96,2.12l1.23,1.73l1.86,1.21l2.15,0.28l2.76,-0.58l7.27,-3.47l2.28,-0.75l5.18,-0.75l5.05,-0.01l9.45,-2.8l0.73,-1.01l0.37,-4.13l0.46,-1.13l2.41,-3.02l5.04,-4.28l1.5,-3.1l1.81,-6.71l0.69,-1.31l2.22,-2.6l16.76,-8.5l1.03,-0.96l1.04,-2.37l2.71,-3.73l5.61,-10.36l4.24,-13.14l5.55,-2.7l5.67,-1.24l1.25,-0.68l5.27,-4.38l0.01,1.53l-2.58,4.47l0.0,0.93l0.33,0.34l15.39,0.72l3.64,0.48l0.02,0.94l0.94,0.93l0.04,0.52l-2.13,1.4l-0.59,2.13l0.48,0.91l1.08,0.31l2.26,-0.71l0.48,-0.41l0.19,0.23l-0.67,2.55l-0.26,2.85l0.37,1.18l0.79,0.98l-0.07,1.22l-0.19,0.37l-1.73,0.3l-0.34,0.95l2.48,3.97l1.17,-0.0l0.51,-1.04l3.42,-0.01l1.87,-1.25l2.62,1.15l1.36,2.74l1.0,0.28l1.28,-0.27l0.65,1.25l0.71,0.48l2.28,-0.55l0.86,-0.67l1.03,0.64l1.26,-0.12l1.93,-1.4l-0.21,1.19l0.37,0.73l0.69,0.23l1.08,-0.74l0.54,1.48l-0.83,0.46l-0.2,0.49l0.54,1.33l0.0,1.06l1.94,2.91l1.92,0.98l-0.02,0.67l-0.77,0.56l-0.22,0.85l3.34,9.56l3.35,4.22l2.17,1.57l-0.14,0.74l0.33,0.67l1.41,0.08l2.09,0.88l2.08,1.93l2.08,2.67l1.58,2.67l-0.7,-0.71l-0.52,-0.07l-1.05,1.15l-1.53,0.73l-0.43,0.67l0.27,0.88l0.98,0.7l0.61,-0.02l0.86,-0.7l-1.13,1.37l-0.82,1.64l0.59,0.99l-0.48,0.39l-0.91,-0.04l-0.45,0.81l0.15,0.87l1.22,0.93l0.58,1.57l0.74,0.31l3.48,-0.31l1.76,1.41l1.39,-0.66l0.29,-1.0l-0.42,-1.48l-0.6,-0.68l-0.03,-1.56l-0.65,-2.07l0.15,-1.09l0.22,-0.27l1.06,0.2l1.09,-0.39l1.6,1.04l1.18,-0.25l0.39,-0.55l0.02,-0.94l-1.13,-0.83l0.85,-0.33l0.02,-0.98l0.68,0.29l2.29,-0.31l0.49,0.72l-0.59,-0.08l-0.38,0.31l0.06,0.73l0.66,0.56l-0.57,0.47l0.03,0.51l1.42,0.83l0.92,0.06l0.52,1.73l0.97,0.65l1.15,-1.04l2.04,-0.52l0.28,-0.58l-0.44,-1.85l3.39,-2.44l1.36,-1.92l1.01,-0.38l2.42,2.36l0.15,0.52l-0.65,2.79l0.52,2.35l0.19,3.84l-0.86,1.6l-0.46,2.44l0.4,1.04l-0.58,0.37l-0.03,0.84l0.72,0.56l2.1,-0.25l1.27,-1.76l2.05,-0.4l0.26,-0.81l-1.3,-0.89l0.24,-0.53l1.97,0.6l0.71,-0.1l0.6,-0.56l0.81,0.49l0.58,-0.41l0.82,0.59l0.81,-0.67l0.38,0.07l0.36,2.7l0.84,0.78l0.33,0.85l0.04,0.6l-0.52,1.02l0.73,0.91l0.01,1.61l2.3,3.01l0.95,2.22l1.87,0.74l1.89,1.31l1.14,0.19l0.15,1.49l0.75,1.73l0.61,0.61l-0.36,0.58l-1.2,0.7l-0.31,0.83l-2.57,0.82l-0.37,0.89l0.3,0.66l0.88,0.32l0.64,1.0l2.23,0.36l0.7,-0.5l0.87,1.25l-1.42,0.37l-6.42,3.0l-0.85,1.15l-0.02,2.84l0.73,0.32l0.77,-0.2l1.26,-1.79l1.15,0.07l4.09,-1.67l2.33,-1.65l2.98,0.47l0.85,0.51l1.05,-0.35l2.89,0.35l1.09,1.2l0.67,-0.29l0.09,-1.11l1.09,-0.08l1.28,-1.16l1.69,-0.04l2.02,0.57l-0.98,0.92l-1.12,0.42l-0.05,0.72l0.66,0.88l-0.85,0.24l-0.1,0.82l-1.0,-0.26l-0.95,0.2l-0.54,3.52l-0.93,0.02l-0.98,-0.46l-1.99,0.86l-1.51,0.22l-0.57,0.55l-0.21,0.79l-1.71,0.58l-0.26,0.53l0.27,0.69l-2.38,1.08l-0.92,1.0l-2.98,0.75l-3.21,2.22l-2.11,0.06l-0.56,0.59l-0.11,0.9l-2.76,0.32l-1.52,2.06l-2.32,1.81l-2.65,0.18l-0.91,0.72l-0.32,0.96l-1.97,0.47l-0.92,1.2l-1.56,1.0l-1.05,0.28l-0.68,1.19l-2.24,1.52l-0.52,1.68l-0.79,0.35l-0.93,1.01l-2.88,0.01l-0.79,1.22l-0.84,0.14l-1.36,1.03l-1.09,1.85l-0.12,1.68l-1.03,0.59l1.24,6.15l1.02,3.16l1.64,0.79l1.23,1.75l2.04,0.43l1.85,1.25l0.57,0.11l1.26,-0.41l1.39,0.2l1.84,1.04l0.77,-0.39l1.71,0.0l2.77,-1.21l2.19,0.5l1.34,-0.62l0.88,-1.95l0.69,-0.54l1.52,-0.36l0.69,0.22l0.38,0.55l-0.47,1.46l0.69,1.45l-0.15,1.82l1.16,1.77l-0.39,1.97l-1.43,1.01l-1.76,-0.7l-1.13,0.24l-1.06,-0.21l-3.5,1.17l-2.7,0.19l-4.12,1.59l-0.88,1.16l-0.03,0.67l0.99,2.1l0.11,1.21l-0.8,0.67l-1.8,0.4l-0.46,0.59l0.01,0.63l2.21,2.47l1.07,0.57l2.33,0.03l1.64,1.33l0.87,1.46l0.43,2.21l-0.59,0.95l-3.32,1.33l-0.31,-0.01l-0.09,-0.98l-0.76,-1.19l-1.72,-0.45l-0.99,0.55l0.19,7.02l0.56,1.52l1.87,2.64l-0.75,1.42l-2.66,0.44l-2.87,-1.98l-0.29,-0.38l0.59,-1.58l-0.65,-0.89l-1.49,0.26l-1.32,0.66l-0.62,0.81l-0.38,1.25l-0.93,0.27l-0.8,-1.35l-0.81,-0.46l-2.36,0.15l-2.37,-0.75l-2.62,0.03l-0.56,-0.65l-0.06,-1.39l-0.91,-0.21l-1.44,0.8l-0.41,0.77l-0.22,5.75l-0.91,1.03l-3.07,2.04l-0.18,0.86l0.58,0.69l-0.36,0.8l-2.54,1.42l-3.18,1.16l-1.39,-1.09l-0.78,0.05l-0.42,0.67l0.21,1.39l-0.75,1.99l-1.04,-0.67l-1.53,-0.23l-0.54,-1.73l-2.26,-1.43l-0.39,-0.57l-0.11,-1.38l0.73,-1.34l0.34,-0.08l2.56,1.5l0.99,-0.14l1.03,-0.78l1.53,0.76l2.78,-3.75l-0.19,-0.69l-1.38,-0.85l-0.38,-0.73l0.33,-1.04l1.14,-1.39l0.31,-1.44l-0.35,-1.02l-1.31,-0.83l-0.49,-2.5l0.29,-1.27l0.46,-0.6l2.12,0.79l0.87,-0.42l0.54,-0.87l-0.12,-3.35l-1.72,-2.18l-0.08,-1.9l-1.45,-1.82l-0.93,-0.39l-1.02,0.2l-2.12,1.19l-6.1,1.13l-1.71,-0.05l-2.46,-0.66l-2.71,0.12l-0.69,-0.28l-0.43,-0.95l1.0,-1.04l0.14,-0.7l-0.82,-1.9l1.39,1.33l1.73,0.45l2.43,-0.55l1.29,-1.43l-0.03,-0.57l-0.61,-0.38l-3.06,0.55l-1.27,-0.53l0.04,-0.32l1.57,0.36l0.71,-0.62l-0.09,-0.83l-0.78,-1.15l0.96,-1.84l-0.38,-0.68l-2.77,0.61l-2.39,-0.18l-0.87,0.22l-1.43,2.29l0.29,1.74l-0.19,0.81l-1.27,-0.2l-1.56,1.09l-2.66,-1.04l-1.24,-1.01l-1.28,-0.2l-0.46,0.24l-0.21,0.62l0.68,2.0l-0.19,1.6l0.21,0.59l3.12,0.55l1.1,-0.15l0.1,0.39l-0.55,2.44l-0.6,0.36l-1.68,0.1l-1.61,-1.83l-0.62,-1.83l-0.6,-0.15l-0.56,0.47l-0.19,2.47l0.42,1.11l-2.09,4.22l-0.12,0.98l0.53,0.75l3.35,1.05l0.25,0.61l-2.43,2.42l-0.39,1.79l-0.73,1.25l0.16,0.52l0.56,0.3l2.45,-0.12l1.2,0.69l0.89,3.8l2.05,2.4l-0.64,1.04l-1.18,3.43l-0.18,1.43l0.11,2.2l0.8,1.33l0.19,1.94l-2.53,4.99l-0.87,0.81l-5.89,2.59l-2.01,1.8l-1.52,2.59l0.02,1.08l0.6,0.72l2.45,0.79l1.39,0.05l1.5,1.36l-2.98,1.57l-1.93,0.47l-2.21,1.15l-2.7,-0.33l-1.68,0.98l-0.59,-0.97l-0.83,-0.47l-1.34,-2.19l-1.43,-0.75l-1.43,0.61l-0.48,-0.26l-0.72,-2.86l-2.18,-1.34l-2.15,-1.97l-0.91,-0.2l-0.73,0.85l-0.66,-0.04l-2.15,-2.97l-0.57,-0.34l-2.93,0.76l-1.14,-0.82l-1.17,0.04l0.32,-1.25l-0.46,-1.22l0.13,-1.76l-0.24,-0.9l-1.4,-1.24l-0.65,0.06l-1.41,1.07l0.32,-2.39l-0.31,-0.73l-1.75,-0.71l-1.19,-1.94l-1.47,-0.23l0.28,-3.15l1.47,-1.08l0.28,-0.53l-0.77,-1.97l-0.12,-1.42l-1.32,-2.1l-0.38,-0.24l-0.65,0.19l-1.13,1.93l-1.34,0.87l-0.98,-1.08l-0.62,-1.36l-2.63,-2.03l-0.7,-1.62l0.87,-2.35l0.88,-1.21l1.13,0.05l0.78,-0.31l0.62,-1.27l-0.18,-0.76l-0.43,-0.3l-1.27,0.38l-1.91,-0.74l0.23,-2.35l-0.43,-1.01l-1.21,-0.11l-2.26,0.63l-0.78,1.08l-0.46,2.35l-0.86,0.68l-0.6,0.06l-1.89,-0.53l-3.52,-0.4l-1.51,-2.29l-2.14,-0.65l-1.84,-1.02l-1.46,0.26l-0.78,2.15l-0.36,0.2l-0.92,-1.62l-0.24,-1.27l-1.85,-0.15l-0.62,-0.94l-1.53,-0.29l-0.97,-0.75l2.33,-0.44l0.22,-0.89l-0.68,-0.67l-4.54,0.35l-2.17,-0.71l-1.13,-1.44l-0.59,-0.29l-2.11,0.47l-1.51,1.18l-0.76,-0.09l-0.9,-0.81l-0.82,0.05l-0.91,0.64l-0.15,0.93ZM294.16,288.97l0.26,-0.35l0.11,-0.1l-0.05,0.3l-0.31,0.15ZM252.61,250.52l-0.88,-0.6l-0.15,-0.41l0.59,0.24l0.44,0.77Z", "name": "Rajasthan"}, "IN-MP": {"path": "M191.91,423.84l-0.52,-3.36l-0.53,-1.39l0.74,-0.61l0.77,-0.34l2.88,0.29l2.23,-1.16l1.99,-0.5l3.36,-1.88l-0.0,-0.75l-1.53,-1.53l-4.03,-0.93l-0.42,-0.88l1.39,-2.39l1.85,-1.66l5.83,-2.55l1.04,-0.94l1.49,-3.12l1.15,-1.64l0.11,-1.95l-0.24,-1.12l-0.77,-1.25l-0.08,-1.88l0.16,-1.29l1.86,-4.79l-2.14,-2.67l-0.45,-2.8l-0.59,-1.21l-1.63,-0.91l-2.47,0.1l0.66,-1.0l0.32,-1.64l1.74,-1.48l0.81,-1.32l-0.17,-0.87l-0.45,-0.45l-3.45,-1.11l-0.08,-0.37l2.2,-4.61l-0.4,-1.42l0.1,-1.99l0.36,1.48l0.95,0.81l0.7,1.18l0.53,0.26l1.56,-0.03l1.01,-0.34l0.72,-0.72l0.5,-2.94l-0.75,-0.84l-1.19,0.14l-2.6,-0.34l0.17,-1.7l-0.66,-1.97l0.84,0.14l1.09,0.93l2.15,1.06l1.16,0.09l1.62,-1.1l1.02,0.31l0.63,-0.38l0.36,-1.3l-0.29,-1.62l1.1,-1.75l2.84,0.09l2.19,-0.57l-0.84,1.67l0.9,1.76l-1.84,-0.24l-0.48,0.64l0.06,0.81l0.84,0.71l1.12,0.24l2.91,-0.55l-1.3,1.1l-1.61,0.23l-1.34,-0.35l-1.47,-1.38l-0.77,0.01l-0.33,0.88l0.81,1.84l-0.85,0.94l-0.32,0.92l0.8,1.39l1.08,0.43l2.69,-0.13l2.41,0.65l1.95,0.06l6.25,-1.16l2.89,-1.35l0.81,0.55l0.9,1.26l0.02,1.76l1.69,2.09l0.14,2.99l-0.72,0.67l-1.35,-0.77l-1.15,0.13l-0.74,0.98l-0.34,1.56l0.56,2.82l1.31,0.91l0.28,0.62l-0.23,1.1l-1.45,2.03l-0.07,0.88l0.25,0.76l1.62,1.36l-2.15,2.93l-1.36,-0.75l-1.75,0.95l-3.0,-1.53l-0.78,0.44l-0.86,1.74l0.13,1.58l0.39,0.76l2.43,1.6l0.49,1.72l0.33,0.26l1.63,0.23l0.86,0.6l0.71,0.05l0.53,-0.62l0.69,-1.91l-0.18,-1.56l1.04,0.97l0.88,0.15l3.38,-1.22l2.74,-1.55l0.62,-1.43l-0.58,-1.02l2.89,-1.87l1.22,-1.46l0.23,-5.8l1.25,-0.97l0.03,1.13l0.96,1.07l0.65,0.22l2.18,-0.18l2.45,0.76l2.27,-0.16l0.37,0.22l0.5,1.22l0.8,0.37l1.54,-0.47l0.94,-2.01l2.1,-0.79l-0.46,2.16l2.85,2.18l0.96,0.53l3.22,-0.59l1.09,-2.16l-2.28,-3.57l-0.43,-4.0l0.27,-1.37l-0.24,-1.82l1.59,0.28l0.46,1.83l1.11,0.44l3.72,-1.46l0.82,-0.85l0.14,-0.79l-0.48,-2.47l-1.05,-1.74l-1.9,-1.51l-2.48,-0.08l-0.78,-0.44l-1.9,-2.1l0.23,-0.33l1.92,-0.41l0.89,-0.95l-0.08,-1.74l-0.97,-2.28l0.51,-0.72l3.91,-1.51l2.67,-0.19l3.37,-1.16l1.06,0.21l0.95,-0.26l1.95,0.71l1.88,-1.18l0.37,-0.58l0.33,-2.13l-1.25,-2.17l0.23,-1.44l-0.69,-1.42l0.48,-1.43l-0.97,-1.29l-1.87,-0.11l-1.6,0.8l-0.94,1.95l-0.61,0.55l-2.56,-0.43l-2.91,1.24l-1.6,-0.03l-0.73,0.39l-1.59,-1.02l-1.63,-0.22l-1.33,0.41l-1.98,-1.3l-1.68,-0.23l-1.39,-1.83l-1.51,-0.67l-0.88,-2.84l-1.3,-5.49l1.02,-0.67l0.31,-2.18l0.62,-1.04l1.1,-0.9l1.23,-0.38l0.55,-1.06l2.42,0.18l0.59,-0.28l0.95,-1.02l0.89,-0.44l0.58,-1.75l2.19,-1.47l0.56,-1.08l0.9,-0.2l1.61,-1.02l0.91,-1.21l2.0,-0.48l0.62,-1.26l0.58,-0.41l2.55,-0.13l2.61,-2.01l1.39,-1.95l2.46,-0.14l0.69,-0.61l0.16,-0.98l2.14,-0.08l3.22,-2.23l3.09,-0.81l0.88,-0.97l2.69,-1.32l-0.1,-1.03l1.58,-0.6l0.61,-1.23l1.4,-0.18l1.79,-0.82l1.11,0.48l1.32,-0.23l0.74,-2.26l-0.13,-1.3l1.54,0.32l0.58,-0.57l0.06,-0.52l1.15,-0.19l1.1,0.21l1.15,-1.25l2.21,0.06l0.6,0.87l1.21,0.11l1.07,1.0l1.77,0.32l1.5,0.84l1.12,-0.0l0.65,-0.6l1.15,0.01l1.42,-0.73l0.31,0.53l0.62,0.09l0.33,-0.27l0.47,0.74l0.85,0.09l2.08,1.98l1.97,-0.15l0.92,3.46l2.47,4.19l0.31,1.69l-0.36,1.13l0.63,0.93l-1.09,1.53l-1.67,0.49l-0.96,0.95l-0.03,1.06l0.54,0.96l-0.96,0.59l-0.16,1.24l1.03,1.32l-1.17,1.84l-1.04,2.8l-1.41,1.74l-0.79,2.01l-2.15,1.79l-0.42,1.83l0.82,2.19l-0.08,0.67l-0.87,0.47l-3.09,0.63l-2.0,1.1l-2.01,-0.16l-3.47,0.83l-0.72,0.75l-0.3,1.66l-0.43,0.6l-2.48,2.28l0.14,1.03l1.3,1.67l2.05,4.43l-1.1,3.43l0.3,1.25l-0.41,1.16l-1.97,1.91l-2.39,1.59l-0.5,1.2l1.73,2.46l0.18,1.91l0.95,1.42l-0.09,1.58l0.4,0.6l-0.05,0.55l-1.41,2.68l0.63,1.3l0.81,0.48l0.33,0.83l2.13,1.35l-0.66,2.0l1.03,1.4l1.2,0.28l1.31,-0.64l0.68,-0.76l0.44,-1.78l0.54,-0.38l1.29,0.66l3.7,3.07l1.13,0.44l1.71,0.11l0.29,1.21l0.51,0.5l1.39,0.24l2.0,-1.84l1.09,-2.43l1.6,-1.48l0.61,-1.1l0.21,-1.63l-0.77,-0.66l-1.18,-0.2l0.18,-1.5l-0.89,-1.24l-0.76,-1.86l-1.56,-0.8l-2.6,0.54l-0.4,-0.6l-0.1,-0.69l0.64,-1.42l-0.4,-4.14l-2.32,-3.07l-0.93,-5.45l-1.38,-3.44l-1.82,-1.91l0.46,-1.11l1.51,-1.78l-0.04,-0.98l0.34,-0.29l1.63,0.2l1.78,1.89l1.0,-0.11l0.24,-0.64l-0.22,-1.03l0.54,-1.16l-0.8,-1.21l0.38,-1.0l1.02,-0.28l0.21,2.56l0.28,0.42l0.67,0.24l1.06,-0.34l0.39,-0.55l0.01,-2.04l0.8,-1.02l0.43,0.73l-0.35,2.05l0.5,0.45l1.11,-0.0l-0.13,1.21l-0.65,1.35l0.06,1.31l-1.51,1.2l-0.74,1.59l0.05,1.24l0.86,0.77l1.08,-0.45l0.92,-1.08l1.46,-0.63l0.23,-1.37l0.95,0.5l-1.07,1.61l0.14,0.88l0.53,0.5l2.51,-0.66l0.27,1.38l0.64,0.34l0.66,-0.28l0.8,-0.96l3.2,0.58l0.73,-0.83l-0.57,-2.42l0.54,0.56l0.59,0.1l1.28,-1.19l1.03,0.15l0.67,-0.35l-1.84,2.96l-0.99,1.04l-0.22,2.1l0.69,0.76l1.57,0.06l0.34,-0.27l0.21,-2.05l0.73,0.13l0.64,1.13l0.95,-0.04l2.13,-2.35l2.82,0.98l3.59,-0.24l0.55,0.59l0.71,0.2l2.3,-1.07l-0.01,-0.76l-0.98,-1.46l0.31,-0.53l1.98,-0.41l3.08,-2.33l2.01,-0.92l1.31,0.28l1.46,-1.05l0.73,-1.06l0.9,0.24l1.34,-0.26l0.81,1.27l0.36,2.78l1.13,0.71l0.62,0.83l0.69,-0.02l0.56,1.65l-1.97,1.05l-1.44,1.71l-0.96,-0.01l-0.34,0.31l0.1,1.75l0.99,1.21l1.85,-0.32l1.64,0.37l0.55,-0.44l0.02,-0.69l0.89,0.96l1.03,-0.11l1.14,-0.73l0.14,-0.7l-1.44,-0.98l-0.23,-0.67l1.41,0.35l0.98,-0.14l0.49,-0.56l-0.02,-0.89l0.91,1.49l1.19,1.06l2.66,-0.26l0.57,-0.45l-0.02,-0.8l-1.53,-1.17l2.9,-0.26l0.82,-1.55l0.76,-0.22l0.37,0.5l-0.88,2.05l-0.17,1.21l-0.87,0.88l-0.27,1.12l-0.71,0.9l-0.01,0.88l0.65,0.49l1.01,0.13l2.85,-0.5l1.42,1.01l1.82,-0.42l2.77,1.85l0.48,-0.11l0.95,-1.14l1.13,-0.17l0.55,-0.44l-0.19,-1.79l1.86,-2.5l0.21,-1.01l-0.21,-1.35l1.88,-0.09l1.44,0.45l0.14,1.38l1.85,0.38l1.28,-0.26l0.5,-0.44l-0.0,-0.94l-0.92,-0.68l2.58,-0.76l1.08,2.35l-0.2,0.73l0.3,0.56l2.82,0.72l1.28,-0.01l0.48,1.09l0.94,0.37l1.83,-0.48l0.75,0.19l0.86,1.37l-0.24,1.06l0.26,0.65l2.72,2.08l2.45,0.41l2.82,1.69l0.96,-0.18l1.48,-1.0l-0.13,2.39l0.86,0.49l0.92,-0.62l0.09,1.92l0.52,0.37l0.8,-0.12l0.35,0.24l-0.59,1.47l0.13,0.65l3.0,0.17l0.76,-0.21l0.66,-0.93l-0.07,-1.74l4.89,1.07l3.33,-1.1l0.09,1.22l0.4,0.33l1.39,0.15l0.54,1.49l0.68,0.8l-0.36,0.47l-1.52,-0.19l-0.64,0.68l0.2,2.3l-0.31,2.05l0.32,0.63l0.66,0.4l0.01,2.03l-0.73,1.7l-0.24,1.96l-0.48,0.42l-0.99,0.18l-0.36,0.6l0.51,1.13l1.45,1.26l-0.08,1.5l1.94,2.08l-0.51,1.73l-3.3,1.36l-0.49,0.55l-0.31,1.33l-2.3,1.07l-1.01,0.87l-0.88,0.08l-7.25,-0.43l-1.86,-0.49l-3.75,-0.02l-2.21,-1.13l-2.21,-0.16l-3.22,1.48l-0.71,0.02l-1.74,-0.88l-1.97,-1.98l-1.49,-0.09l-0.93,0.68l0.04,1.82l1.74,3.3l0.13,0.87l-0.82,1.16l-1.16,0.74l-0.2,1.29l-0.68,0.92l1.15,2.78l0.98,0.35l3.34,-1.97l2.94,1.13l2.03,0.35l1.91,3.02l1.05,0.45l0.42,0.74l2.45,-0.02l2.02,1.71l-0.93,5.0l-0.6,1.3l-1.71,-0.05l-4.13,2.09l-0.4,0.98l0.22,2.14l-2.16,1.95l-2.51,1.09l-0.4,1.44l0.25,2.13l-0.72,1.02l0.15,1.54l-2.9,1.71l-0.81,1.84l-3.11,0.97l-3.42,2.57l-1.2,-1.63l-0.76,-0.29l-2.59,0.93l-1.23,0.78l-0.33,-0.11l-0.37,-0.87l-0.55,-0.26l-1.18,0.75l-1.36,2.21l-0.12,3.42l-0.63,1.08l-2.01,1.52l-0.47,2.63l-0.86,0.45l-0.09,0.55l0.46,1.25l-1.05,-1.17l-0.71,-0.26l-0.67,0.17l-1.14,1.39l-1.27,2.61l-0.33,1.02l0.08,3.35l-0.46,1.29l-0.84,1.13l-1.17,0.26l-0.81,1.51l-0.42,4.31l0.2,2.79l-0.79,3.1l-0.5,1.32l-1.2,0.7l-4.35,-2.38l-2.47,0.26l0.66,-1.14l-0.53,-1.51l-2.06,-1.52l-0.86,-1.78l-1.97,-0.57l-1.82,-1.32l-2.9,1.1l-0.95,1.06l-2.08,0.67l-1.29,-0.44l-1.59,0.81l-1.72,0.26l-1.05,-1.58l-1.84,-0.51l-3.21,0.31l-2.72,1.46l-0.66,-2.26l-1.15,-0.86l-0.48,-0.84l-1.97,-0.81l-2.96,-0.11l-2.32,-0.77l-0.87,0.22l-0.62,1.76l-4.01,1.3l-2.67,0.31l-2.03,0.7l-0.54,0.74l0.27,1.26l-0.51,0.33l-6.33,1.11l-4.0,-0.66l-1.57,-1.01l-0.97,-0.01l-1.3,0.64l-0.55,-3.04l-0.83,-0.67l-1.23,-0.09l-0.76,0.24l-0.93,1.06l-3.57,1.12l-1.56,1.75l-1.72,1.11l-5.31,1.96l-1.03,0.07l-2.53,-0.84l-2.73,1.48l-0.66,-0.51l-1.65,-0.17l-1.51,0.48l-1.41,-1.01l-0.7,0.0l-0.39,0.34l-1.68,-3.06l0.14,-0.72l3.36,0.16l0.93,-0.48l-0.89,-5.48l-1.4,-0.87l-0.32,-0.69l-0.8,-0.52l-4.42,-0.24l-0.78,0.24l-0.86,0.87l-1.11,0.34l-0.85,0.92l-1.1,-0.81l-2.12,0.08l-2.74,1.01l-3.44,2.43l-2.09,0.11l-1.09,0.46l-0.85,1.04l-0.3,2.63l-1.62,2.5l-2.88,2.12l-0.14,0.51l0.61,1.53l0.02,1.19l-0.72,1.14l-3.85,0.87l-1.98,2.37l-1.61,0.61l-2.78,0.38l-2.94,-0.34l-1.16,-0.59l-1.08,-1.5l0.86,-0.25l0.29,-0.6l-0.36,-2.94l-1.17,-2.7l-0.64,-0.52l-1.32,0.08l-2.71,-0.81l-2.23,-0.27l-2.14,0.52l-3.25,0.17l-2.54,-0.23l-3.15,0.44l-6.44,-0.32l-3.07,-0.67l-2.27,-1.01l-1.93,-3.14l-1.84,-1.33l-1.81,-0.18l-1.57,-0.99l-1.27,-0.25l-4.77,0.17l-1.46,-1.1l-2.02,-0.68l-2.12,-1.56l-0.9,-2.61l0.18,-3.47l-0.27,-1.11l-2.52,-2.68l-1.03,0.05l-1.18,1.1l-1.83,0.63l-0.3,0.75l-0.91,0.4l-1.79,0.03l-1.41,-0.68l0.36,-3.59l-0.75,-1.1l-0.65,-2.31l-0.92,-1.03l-0.2,-3.47l0.42,-0.63l1.49,0.91l2.06,-0.4l1.35,-0.99l0.42,-1.19l-0.17,-0.49l-0.87,-0.58l-3.69,-0.2l-2.05,-1.99l0.61,-0.64l1.89,0.55l1.15,-0.22l3.77,-3.23l1.72,-0.16l1.38,-0.98l2.78,-5.33l0.07,-0.76l-1.19,-1.96l-0.93,-0.37l-0.9,0.29ZM342.94,345.9l-0.07,-0.47l0.06,-0.58l0.99,-1.54l-0.98,2.59Z", "name": "Madhya Pradesh"}, "IN-OR": {"path": "M408.6,584.62l0.87,0.38l0.7,-0.57l0.17,-1.23l0.78,-1.54l0.14,-2.48l0.72,-1.11l0.53,-2.11l-0.29,-1.58l0.84,-1.84l0.76,0.02l2.17,-0.82l1.07,-1.24l1.83,-0.69l1.82,-2.82l4.8,-4.17l-0.13,-1.22l-1.17,-0.95l0.98,-0.36l1.48,-1.56l2.18,-0.42l1.07,-1.66l0.73,0.55l0.81,-0.24l0.83,-3.98l0.54,-0.67l1.08,-0.58l0.29,-0.71l-0.1,-2.84l-0.74,-1.34l-0.25,-1.24l-0.98,-0.82l0.26,-1.36l-0.7,-1.85l0.8,-2.84l-0.22,-0.61l-0.86,-0.66l0.89,-0.73l0.05,-0.95l-0.72,-0.89l-1.26,-0.42l-0.99,-1.74l-1.27,-0.51l0.35,-3.73l-0.41,-1.94l0.27,-2.32l-0.75,-0.79l-1.7,-0.38l-0.94,-1.68l-2.97,-1.76l-0.47,-0.78l0.14,-0.74l1.38,-2.44l0.97,-0.56l1.15,-1.25l1.66,1.78l0.44,1.11l1.07,-0.03l0.97,-1.34l1.85,1.55l0.52,0.87l1.61,0.18l2.16,4.28l0.64,0.59l0.76,-0.22l1.26,-1.7l3.32,0.37l1.51,0.69l1.33,0.07l-0.14,2.05l0.48,0.54l0.74,-0.1l3.64,-2.46l0.2,-0.83l-0.84,-1.09l0.5,-2.36l-0.44,-1.37l-1.49,-0.16l-1.2,0.53l-1.26,-1.05l-2.25,-0.06l-2.22,-1.3l0.69,-3.13l-0.27,-3.86l-0.48,-1.12l0.27,-3.95l-0.1,-0.42l-0.55,-0.27l-0.35,0.21l-0.3,-1.32l-0.82,-0.26l-0.35,-0.87l0.85,-4.04l-0.72,-2.56l-0.04,-3.65l0.23,-0.22l0.93,0.25l0.06,0.91l0.5,0.38l1.85,-0.78l1.59,-2.19l1.54,-1.08l2.51,-4.8l0.2,-1.41l2.78,-0.21l1.21,0.48l1.08,-0.43l4.28,-0.65l3.13,1.97l2.46,-0.12l1.12,-0.71l0.83,-1.15l0.91,-2.52l0.94,-1.38l-0.0,-1.07l0.48,-0.85l2.25,0.71l0.98,-0.23l0.33,-0.74l-0.12,-1.25l-1.59,-1.85l-0.16,-1.47l0.71,-2.42l3.3,-5.53l0.24,-1.66l1.26,0.23l0.4,-1.1l0.9,-0.08l0.47,-0.83l0.2,-2.45l-1.77,-1.6l0.22,-1.51l1.57,-1.15l-0.05,-0.68l-0.65,-1.0l2.18,-3.06l2.99,-1.33l3.65,-3.0l2.69,-0.52l0.96,-0.56l1.06,-1.28l0.29,-0.96l-0.2,-1.52l-0.66,-1.22l2.36,1.1l2.44,3.59l1.03,0.81l1.71,0.29l2.63,1.1l3.55,-0.27l2.45,-1.4l0.45,-1.5l6.57,-0.18l2.05,-0.74l3.38,0.91l1.21,-0.78l1.34,-0.23l2.05,-1.36l0.86,2.95l0.13,1.93l-0.32,1.19l-1.6,2.32l-1.72,3.41l0.2,0.71l0.42,0.13l1.79,-0.54l1.28,0.22l4.01,2.74l3.34,-3.21l2.5,-1.08l0.99,-0.02l3.14,1.77l3.92,1.01l2.38,-0.82l1.13,-0.8l-0.69,1.35l0.07,1.78l0.31,0.54l1.81,0.87l1.44,-0.37l1.24,-0.87l1.91,-2.83l0.46,-2.86l-0.71,-2.31l0.76,-1.24l0.11,-1.23l-0.34,-2.49l-1.3,-1.91l-0.08,-0.67l1.7,-0.51l0.76,-0.96l0.5,-0.16l1.56,1.77l5.7,2.91l2.44,2.6l1.27,0.35l2.8,-0.49l5.68,3.71l0.66,0.99l1.88,0.67l2.06,1.47l1.92,0.22l2.3,1.14l0.67,0.67l0.2,0.8l-0.24,2.33l1.32,1.8l1.16,0.01l1.78,-2.16l0.87,0.07l1.39,0.85l0.72,2.92l0.74,1.0l5.27,1.5l0.12,2.57l1.25,2.13l-3.71,1.5l-4.33,0.33l-2.84,1.48l-1.58,1.12l-4.5,4.76l-1.65,2.44l-0.94,2.78l0.21,2.98l3.72,8.83l-0.15,0.33l-2.19,0.13l-0.26,0.6l0.52,0.68l0.66,0.26l2.2,0.07l0.33,0.76l-0.94,-0.18l-0.86,0.63l0.29,0.63l1.57,0.73l-2.3,1.0l-5.38,4.36l-0.87,1.94l-0.14,2.13l0.59,0.38l1.32,-0.93l0.32,0.19l-0.66,0.93l-2.07,1.29l-0.17,0.9l-1.96,1.18l-3.56,1.2l-0.62,0.5l-0.99,3.01l-2.18,2.22l0.07,0.88l-3.15,-2.37l-2.09,-0.05l-0.98,-0.98l-0.43,-1.27l-0.55,-0.22l-0.38,0.27l-0.24,0.91l0.53,1.5l1.8,1.31l2.24,0.53l0.58,1.03l1.33,0.59l-2.46,1.35l-5.48,2.09l-1.05,-0.38l-0.74,0.47l-5.64,1.45l-1.8,0.97l-1.66,0.07l-2.84,1.15l-0.84,-0.01l-2.11,1.23l-2.56,0.82l-0.12,-0.91l1.47,-0.48l0.08,0.59l0.46,0.02l1.85,-1.08l0.04,-4.51l-0.63,-0.57l-2.59,-0.65l-1.42,0.22l-3.64,3.22l-1.69,0.52l-2.08,2.43l0.02,0.78l-1.97,2.76l0.13,1.11l-0.98,0.61l-0.34,0.66l0.22,0.87l0.6,0.2l-0.13,0.36l0.47,0.55l0.96,-0.7l0.74,-0.13l-3.75,3.53l-6.09,4.87l-2.33,2.95l-0.87,-1.1l-2.14,-0.04l-0.56,0.34l0.14,1.16l-0.34,0.71l-0.9,-0.27l-2.35,1.12l-1.26,1.04l-1.69,0.08l-0.26,0.34l0.17,0.89l-0.33,0.72l0.05,0.87l-1.0,1.23l-1.18,0.2l-0.74,1.7l-1.32,1.09l-4.68,0.75l-2.81,-1.03l-5.13,0.38l-1.2,-1.49l-1.61,-4.45l-1.01,-0.54l-1.01,0.18l-0.5,0.86l0.2,1.32l-0.8,-2.26l-2.99,-3.94l-0.88,0.3l-0.51,1.45l-1.24,0.87l-0.57,1.24l-0.56,-1.57l-1.12,-0.44l-0.41,0.64l0.3,1.21l-0.52,0.7l0.12,0.82l-3.07,-1.25l-1.04,0.21l-0.61,0.54l-0.01,0.6l0.92,1.68l0.72,0.88l0.72,0.22l0.53,0.86l-1.83,0.9l-2.19,1.79l-1.56,0.69l-1.43,-0.77l-1.03,0.31l-3.19,3.91l-0.17,2.09l0.81,1.42l1.02,0.22l-1.53,2.04l0.32,1.52l-0.23,0.78l-0.89,0.07l-1.43,0.66l-1.31,0.07l-0.23,-0.16l0.01,-1.09l-0.37,-0.38l-2.06,-0.8l-0.93,0.12l-0.62,0.52l0.12,1.64l-0.33,0.6l-3.15,1.78l-0.71,1.76l-1.31,-0.43l0.47,-2.32l-0.48,-0.89l-2.17,-2.19l-0.29,-2.87l-2.46,-0.5l-2.38,3.46l-0.09,1.68l-0.5,1.42l0.29,1.04l-1.51,2.72l0.14,0.92l1.34,1.18l-0.86,0.75l0.1,2.0l-1.65,0.16l-0.93,1.4l-1.59,-0.19l-1.48,-1.2l-1.32,-0.39l-1.7,0.2l-1.56,1.08l-2.27,0.35l-3.0,1.96l-2.65,1.29l-1.11,1.17l-1.46,0.31l-2.23,1.63l-1.94,-0.89l-0.68,0.23l-0.52,1.0l-2.17,-0.55l0.13,-1.87ZM525.81,532.38l-0.05,-0.65l0.8,-0.25l0.04,-0.71l-0.49,-0.28l1.13,-1.12l-0.4,-0.64l0.3,-0.48l1.49,0.43l1.55,-1.12l1.08,-0.07l0.05,0.45l-1.37,1.35l-0.86,-0.66l-0.66,0.66l-0.63,0.11l0.75,1.39l-2.7,1.6Z", "name": "Orissa"}, "IN-TN": {"path": "M249.84,785.28l-0.33,-0.95l0.1,-1.86l1.6,0.49l1.48,-0.2l1.11,-1.27l1.32,-0.6l0.3,-1.05l1.07,-0.88l1.68,0.16l0.34,0.48l0.05,1.28l0.84,0.64l5.71,-0.26l2.06,0.51l0.81,-0.69l0.4,-2.03l2.08,-2.99l2.57,-0.44l2.02,1.94l0.79,0.31l0.61,-0.27l0.51,-1.19l2.74,-0.17l1.14,-0.44l2.26,1.02l2.41,-0.26l1.0,-0.81l1.68,-3.48l0.65,-0.34l3.83,-0.43l1.03,-0.61l3.07,-4.27l0.07,-0.85l-1.01,-1.75l-1.33,-0.89l-1.06,-0.22l-5.49,-0.07l-0.44,-1.25l2.84,-2.25l1.44,-2.2l0.47,-2.63l-0.45,-0.65l-0.84,0.03l0.12,-0.69l-0.38,-1.02l1.14,-3.22l2.33,-0.11l2.46,-1.36l-0.16,-1.26l1.0,-1.73l0.33,-1.31l1.11,-0.38l1.66,-0.0l1.7,1.66l1.0,0.45l0.79,-0.3l0.66,-1.11l0.44,0.08l2.35,1.72l2.91,0.96l1.35,1.89l2.47,1.79l2.53,0.3l0.89,-0.42l1.33,-1.4l0.29,-1.48l0.98,0.03l1.45,-1.18l1.06,-2.6l1.03,-4.37l0.4,-0.53l1.29,-0.38l0.6,-0.96l3.87,-0.67l0.65,1.17l0.79,0.15l0.91,-0.67l0.3,-1.05l0.55,-0.02l0.97,0.23l0.51,0.92l2.1,0.65l2.72,-0.3l0.76,-0.54l2.09,-2.71l1.31,0.59l0.57,-0.08l2.15,-2.17l1.18,-0.62l0.42,-0.71l-0.07,-0.91l0.47,-1.75l0.53,-0.28l1.75,0.15l1.06,1.37l0.63,0.35l2.87,-0.38l0.18,1.3l1.04,0.76l2.31,-0.02l0.42,-0.96l-1.05,-0.98l-0.01,-0.36l1.61,0.07l4.38,-2.25l0.44,-0.72l0.05,-1.3l2.65,-1.83l-0.01,-0.75l-0.67,-0.64l1.64,0.69l-0.38,1.1l0.47,0.56l3.19,0.35l1.48,-0.39l1.4,1.36l0.73,-0.21l0.37,2.77l-0.32,2.03l-0.47,0.24l-0.18,1.0l0.58,0.53l-0.78,1.59l0.16,1.33l-0.83,1.23l-1.04,9.49l-2.92,8.93l-1.83,3.47l-1.09,0.85l-1.06,1.81l-2.53,1.85l0.16,0.59l0.84,0.04l-3.55,5.53l-0.05,1.49l-0.3,0.47l-1.72,1.18l-0.44,-0.37l0.52,-1.02l-0.5,-0.57l-1.34,0.11l-1.1,-0.87l-0.45,0.2l-0.56,0.93l0.7,1.08l0.11,0.84l0.4,0.31l-0.32,1.19l0.17,0.58l1.13,0.75l2.01,0.21l-0.67,1.5l-1.05,6.13l1.05,4.71l0.4,0.35l0.61,-0.29l0.1,0.95l-2.0,0.22l-2.44,2.58l0.36,0.58l0.4,-0.05l2.7,-2.02l1.33,0.48l0.06,2.28l0.62,3.2l-0.18,5.1l-0.92,-0.09l-0.81,0.43l-1.49,-0.42l-0.49,0.56l0.19,0.5l-0.54,-0.02l-0.42,0.61l0.15,1.36l1.28,0.83l1.44,0.41l0.03,0.97l1.52,1.03l0.49,13.03l-0.26,2.66l-1.42,0.34l-0.31,-0.79l-0.71,-0.39l-3.95,-0.65l-0.57,0.16l-0.15,-0.37l-0.92,-0.24l-1.62,0.14l-0.37,0.6l-1.79,0.33l-2.01,-0.48l-3.57,2.3l-0.57,0.81l-0.07,0.98l-0.83,0.53l-0.21,0.7l0.26,2.63l0.76,1.39l-2.05,1.82l-1.8,2.46l-1.51,2.81l-1.66,1.67l-1.79,2.49l-0.15,0.98l-1.21,1.73l-0.77,3.4l0.09,0.95l0.61,1.22l3.32,3.21l1.25,0.55l2.2,0.29l-1.72,0.32l-1.86,-0.59l-2.21,-0.03l-1.0,0.68l-2.02,0.14l-2.57,0.91l-1.52,0.99l-1.66,0.14l-1.25,1.21l-5.65,0.86l-2.39,1.3l-4.3,3.53l-1.8,2.81l-0.65,3.87l0.32,0.48l-1.12,2.25l-0.31,0.0l-0.34,0.62l0.79,1.81l-0.42,3.13l-1.41,1.59l-0.66,2.01l-1.71,0.61l-5.96,3.6l-1.22,1.49l-5.3,1.31l-1.05,0.76l-0.09,0.97l-1.21,0.15l-1.8,-0.34l-4.2,-1.29l-0.71,-0.71l-1.86,-0.93l-2.94,-2.68l1.1,-0.45l0.27,-1.46l1.29,-1.9l-0.16,-1.64l1.05,-0.34l1.18,-1.84l-0.4,-1.16l-2.42,-2.44l-0.23,-1.72l1.65,-2.45l0.62,-2.26l-0.4,-0.73l-1.24,-0.88l-1.07,-2.96l1.19,-0.85l0.75,-1.07l2.53,-7.34l0.84,-1.38l0.92,-2.56l1.1,-1.19l-0.19,-1.38l-1.73,-2.54l-1.26,-0.19l-1.8,0.71l-1.71,-0.93l1.56,-5.5l-0.33,-2.9l1.03,-2.56l-1.11,-3.46l1.54,-3.34l0.06,-1.34l-0.72,-0.72l-0.37,-1.59l-0.96,-1.63l-0.72,-0.66l-1.08,0.13l-2.94,1.32l-3.15,2.41l-1.14,-0.38l-2.36,-2.12l-0.06,-1.8l-0.9,-1.93l0.55,-3.53l-0.17,-2.56l1.09,-0.6l0.57,-0.74l0.43,-3.33l-0.23,-0.65l-0.94,-0.6l-0.87,-1.77l-3.86,-1.64l-0.66,-0.88l-0.13,-0.87l0.37,-1.13l1.9,0.19l0.65,-0.91l-0.74,-0.92l-0.83,-2.15l-0.87,-0.98l0.45,-1.93l-0.71,-0.36l-1.63,0.94l-2.99,0.25l-1.41,-0.46l-1.27,0.3l0.6,-1.1l2.2,-1.72l0.28,-0.77l-0.18,-0.49l-0.71,-0.39l-1.01,-1.28l-1.19,-0.47l-1.21,-0.95l-4.71,-1.32l-0.24,-0.32ZM341.41,854.52l0.89,-0.01l1.99,-1.02l0.32,0.12l-0.32,0.93l0.54,1.1l-1.22,-0.66l-2.2,-0.45ZM352.97,822.23l0.25,0.38l-0.78,-0.16l0.52,-0.21ZM353.99,822.77l0.71,0.09l0.49,0.17l-1.19,-0.25Z", "name": "Tamil Nadu"}, "IN-AN": {"path": "M786.03,923.93l0.01,-2.47l0.71,-1.66l1.1,-0.13l0.59,-0.57l1.24,-0.26l1.04,-0.8l0.96,0.7l0.57,1.41l0.32,2.29l1.27,2.41l0.03,1.46l-1.11,2.56l-0.1,1.29l0.41,0.66l-1.31,0.13l-0.67,1.5l0.01,-1.41l-0.81,-0.89l0.05,-0.68l-0.44,-0.46l-0.29,-1.55l-0.7,-0.41l-0.89,-2.01l-1.06,-0.91l-0.92,-0.2ZM785.02,916.8l-0.54,-1.41l0.47,-1.37l1.32,-0.39l0.58,-0.69l0.93,0.88l-0.04,0.59l-2.72,2.39ZM782.63,894.17l0.29,0.95l-0.0,0.53l-1.15,-1.01l0.86,-0.47ZM780.5,891.72l-0.4,-0.52l-0.31,-1.96l1.06,-1.6l0.69,-0.13l0.06,0.48l-0.79,1.64l0.65,1.74l-0.29,-0.16l-0.66,0.5ZM781.79,892.53l-0.6,0.48l-0.41,0.67l-0.01,-0.52l1.02,-0.63ZM777.4,894.02l0.09,1.05l1.22,0.8l0.7,1.14l-0.03,0.45l-0.93,-0.4l-1.7,0.32l-0.12,-1.23l-1.17,-0.29l0.37,-1.49l1.57,-0.36ZM770.19,887.29l-1.18,-0.38l-0.98,-1.26l-0.11,-1.42l0.4,-0.73l0.16,2.27l0.42,0.72l1.29,0.81ZM768.4,766.2l-0.53,-0.93l0.37,-1.58l0.2,0.17l-0.27,1.01l0.23,1.33ZM751.49,774.12l0.88,-1.81l1.07,1.76l0.79,-0.06l0.11,-0.27l0.28,-2.36l-0.24,-1.3l0.63,-1.54l-0.05,-3.07l0.91,-2.0l0.45,0.12l0.42,-0.38l-0.13,0.98l0.73,0.48l1.83,-0.55l0.47,-0.81l-0.31,-1.49l-0.55,-0.41l0.77,-0.26l0.05,-0.92l-0.62,-0.6l-1.27,-0.21l-0.37,-1.1l0.12,-7.3l0.85,-1.29l0.61,-0.06l0.41,-0.65l-0.14,-0.45l-0.94,-0.64l-0.3,-3.47l0.61,-0.75l0.78,-0.04l0.52,-0.68l0.41,-1.58l0.01,-1.58l0.64,-1.33l-0.17,-0.58l-0.62,-0.37l0.62,-2.2l0.77,-1.37l-0.52,-0.97l0.18,-1.42l0.66,-0.54l-0.55,-3.24l1.34,-1.74l0.16,-1.78l1.42,-1.61l0.17,-1.04l1.5,0.01l0.36,-0.57l0.61,-0.13l0.39,0.69l-0.32,1.01l0.14,3.07l0.36,0.22l-0.97,1.23l-0.37,0.19l-0.32,-0.4l-0.65,-0.09l-0.59,0.8l0.51,1.08l1.25,0.22l1.33,1.3l-0.64,1.07l-0.13,2.9l-0.46,2.09l-0.32,0.53l-0.73,-0.2l-0.43,0.42l0.01,-1.38l-0.39,-0.32l-1.19,0.78l-0.29,1.52l0.64,1.07l-0.98,-0.16l-0.37,0.28l-0.91,2.21l0.36,0.65l0.53,0.22l0.74,-0.35l1.04,1.19l0.14,1.72l-0.24,0.98l0.95,1.63l-0.54,2.9l0.5,1.29l0.04,2.05l-1.01,1.21l0.24,0.65l-0.74,0.57l-0.86,-0.65l-0.46,0.06l-0.03,0.59l-1.15,-0.04l-0.43,0.4l0.65,1.8l1.06,0.71l0.12,0.47l-0.83,0.84l0.68,1.2l-0.59,0.69l0.3,1.14l-1.88,2.04l0.04,0.7l-0.77,0.79l-1.34,0.41l-0.13,0.54l0.54,0.76l-1.11,1.91l-0.1,3.33l0.4,0.4l0.63,-0.35l0.24,-1.5l0.24,-0.04l0.31,0.28l0.02,1.58l-1.11,4.78l-1.06,0.35l-1.07,1.13l-0.28,0.88l0.14,1.02l1.12,0.1l0.35,-0.4l0.06,-0.84l0.63,-0.36l0.09,-0.39l0.16,1.37l-0.54,0.66l-0.51,2.56l-1.5,-1.08l-0.07,-0.68l-0.92,-0.79l-0.1,-0.4l0.72,-0.38l0.02,-0.66l-0.9,-0.46l-0.4,-1.88l-0.33,-0.31l-0.95,-0.05l0.1,-3.11l-1.16,-0.79ZM766.4,766.0l0.11,0.62l0.39,0.73l-0.4,-0.42l-0.1,-0.93ZM766.14,717.57l0.26,-0.08l0.11,0.23l-0.14,-0.04l-0.24,-0.1ZM764.5,769.92l0.71,-0.98l0.67,-0.02l1.15,3.22l-0.42,-0.93l-2.11,-1.29ZM758.46,855.43l1.65,1.52l-0.05,1.49l-0.73,0.79l-1.73,-0.53l-0.46,-1.12l-0.04,-0.78l0.91,-0.49l0.44,-0.89ZM756.86,735.74l-0.0,-0.0l0.0,0.0l-0.0,0.0ZM756.0,743.21l0.29,-3.46l0.53,-0.59l0.3,0.45l-0.2,2.01l-0.92,1.58ZM754.65,789.3l-1.08,-0.41l0.1,-0.42l0.79,-0.21l0.37,-0.63l-0.25,-1.63l0.26,-0.56l1.0,1.26l-0.55,1.24l0.54,0.89l-1.17,0.46ZM746.83,808.06l1.1,-0.64l0.47,-1.64l1.46,-0.96l1.09,-0.24l0.89,1.13l0.95,5.03l-1.65,1.72l-0.03,1.18l0.75,0.47l-1.33,1.68l-0.74,-0.18l-1.27,-0.94l-0.69,-0.03l-0.86,0.53l0.62,-0.89l0.47,-1.76l-0.28,-0.78l-0.88,-0.81l-0.09,-2.85ZM751.89,783.09l0.03,-0.27l0.15,0.08l-0.18,0.2ZM742.26,782.71l0.82,0.26l-0.03,0.97l-0.62,-0.14l-0.17,-1.09Z", "name": "Andaman and Nicobar"}, "IN-AP": {"path": "M264.69,675.87l0.59,-0.76l0.07,-1.39l0.36,-0.6l2.8,1.59l2.62,0.61l1.43,-0.37l0.97,0.82l0.73,-0.01l1.54,-1.37l1.31,-2.8l0.15,-1.56l-0.84,-4.18l-0.77,-0.9l-1.69,-0.61l-0.35,-2.03l-1.24,-2.4l0.68,0.17l0.39,-0.54l-0.25,-3.31l0.26,-0.71l0.58,-0.39l1.35,0.21l0.43,-0.69l-1.06,-2.44l-0.71,-0.66l0.22,-3.36l1.07,-1.31l2.59,-1.37l1.85,-0.28l2.42,0.6l4.32,0.13l1.56,-1.78l-0.11,-5.3l0.29,-2.68l1.74,-1.65l0.23,-0.94l-0.19,-0.53l-0.65,-0.77l-1.33,-0.57l-3.05,-0.09l-2.95,-0.77l-0.81,-0.99l3.28,-2.1l0.59,-1.33l1.2,-0.69l0.63,-1.85l-0.17,-0.57l-0.53,-0.26l0.62,-0.61l0.01,-0.5l-1.05,-1.21l0.15,-1.25l0.6,-1.07l0.04,-4.5l0.99,-2.39l-1.06,-2.3l-0.29,-1.52l-1.7,-0.89l0.14,-1.28l3.71,-4.76l0.84,-1.7l1.36,-0.46l0.8,-1.28l1.71,-0.45l1.19,-2.36l-0.1,-0.48l-0.75,-0.34l-2.14,0.93l-0.19,-0.69l-0.45,-0.3l-2.59,0.04l-2.16,-1.31l1.48,-2.39l1.78,-0.93l0.36,-0.49l-0.05,-1.04l-0.88,-1.04l0.17,-0.39l3.37,-2.8l0.33,-0.72l-0.5,-2.65l-1.6,-2.0l1.29,-0.9l-0.29,-2.04l-0.67,-1.77l0.45,-1.86l-0.92,-0.71l0.14,-0.69l-0.41,-0.76l-1.22,-0.85l1.13,-1.1l0.45,-2.51l1.0,-1.27l2.52,-0.58l0.7,-0.58l0.49,-1.38l0.0,-1.97l0.53,-0.34l1.61,-0.16l1.72,-3.28l2.15,-0.78l0.23,-0.36l-0.34,-1.09l-1.84,-1.47l-0.22,-1.32l-0.91,-0.24l-0.46,-1.07l-0.79,-0.01l-0.36,-1.59l2.55,-2.32l-0.08,-1.17l0.67,-2.12l1.1,-1.47l-0.09,-0.62l-0.52,-0.3l1.17,-0.67l1.93,0.21l0.99,1.37l0.94,0.51l3.82,0.06l0.7,-0.84l-0.2,-2.94l1.1,-2.01l0.66,-0.49l1.6,-0.35l0.53,-0.52l0.29,-3.48l0.9,-2.06l1.51,-1.08l0.48,-1.2l-0.25,-0.8l-1.04,-0.7l-1.01,-2.43l-0.11,-1.01l1.12,0.56l0.9,1.36l2.14,0.86l1.88,-0.79l1.03,0.35l1.4,-0.06l2.99,1.32l2.05,-0.07l1.73,1.25l1.07,2.89l1.36,0.62l0.25,0.68l1.79,1.04l1.99,-0.29l0.95,-1.2l1.14,-0.51l2.17,-0.33l0.97,0.36l0.92,1.25l3.18,0.53l1.67,1.34l4.21,0.15l0.63,0.59l0.8,0.23l0.8,-0.43l0.38,-1.24l0.6,-0.33l2.94,-1.04l1.61,0.26l2.07,2.63l1.96,0.76l0.99,1.71l-0.24,3.47l-0.86,1.68l0.37,2.75l-1.36,0.99l-1.06,2.07l0.34,1.38l2.14,0.09l0.69,3.21l-0.02,1.49l-0.09,0.45l-1.23,1.17l-0.02,0.58l2.7,1.38l1.76,1.5l0.97,1.3l2.69,0.3l2.3,-0.25l1.3,-0.53l0.65,2.12l1.01,1.62l0.57,0.07l0.54,-0.54l0.85,0.72l2.42,-0.54l2.78,1.95l3.43,4.07l2.24,4.82l0.1,0.39l-1.3,0.98l0.21,1.46l0.85,0.41l1.52,-0.16l0.8,-1.46l0.32,0.3l0.19,1.39l0.64,0.71l2.5,-0.43l-0.56,1.11l-0.13,1.27l1.26,3.31l0.2,3.88l0.99,1.96l0.73,0.43l0.68,-0.01l3.28,-1.92l2.72,1.08l4.53,-0.1l2.71,0.61l0.54,-0.36l0.41,-0.86l2.25,0.87l2.32,-1.68l1.53,-0.34l1.16,-1.21l2.62,-1.27l2.95,-1.92l2.16,-0.31l1.52,-1.07l1.35,-0.19l1.09,0.31l1.49,1.22l2.48,0.09l0.83,-1.36l1.55,-0.1l0.49,-0.61l-0.17,-1.85l0.74,-0.51l0.17,-0.52l-1.52,-1.91l1.52,-2.75l-0.28,-1.1l0.48,-1.33l0.06,-1.57l1.95,-3.0l1.51,0.29l0.18,2.62l2.61,2.97l-0.52,1.6l0.12,0.91l0.46,0.47l1.33,0.37l0.44,0.03l0.56,-0.48l0.51,-1.52l3.2,-1.82l0.51,-1.01l0.02,-1.54l0.74,0.0l1.56,0.66l0.07,1.24l0.76,0.46l1.63,-0.08l1.47,-0.67l0.98,-0.1l0.56,-0.58l0.14,-0.85l-0.35,-1.36l1.58,-2.2l-0.21,-0.73l-1.06,-0.17l-0.66,-1.2l0.16,-1.29l2.94,-3.66l0.7,-0.12l0.81,0.62l0.73,0.08l1.77,-0.8l2.21,-1.8l1.98,-1.03l0.06,-1.12l-0.63,-0.87l-0.79,-0.25l-1.37,-2.23l0.86,-0.26l3.12,1.32l0.82,-0.81l-0.07,-0.7l0.43,-0.9l-0.25,-0.94l0.63,1.68l0.95,0.15l0.99,-1.63l1.13,-0.74l0.49,-1.38l2.55,3.51l0.75,2.17l0.48,0.59l0.48,0.05l0.47,-0.47l-0.04,-1.94l0.98,0.08l1.57,4.35l1.49,1.81l3.28,0.09l2.2,-0.35l2.93,1.04l5.54,-1.07l1.09,-1.13l0.62,-1.56l0.98,-0.06l1.31,-1.51l0.42,-1.9l-0.15,-0.67l1.43,-0.02l1.38,-1.1l2.15,-1.02l0.56,0.31l0.53,-0.11l0.65,-0.92l-0.09,-1.22l0.85,-0.03l-0.54,1.48l0.68,1.11l0.49,0.03l-0.47,1.04l-2.23,3.0l-1.15,0.57l-2.77,4.48l-2.82,2.96l-0.73,1.38l-1.6,1.1l-1.15,1.5l-1.5,0.86l-1.27,0.17l-0.2,0.99l0.68,0.39l-3.6,3.35l-1.01,2.48l-0.96,0.74l-9.31,4.2l-5.02,3.04l-1.05,0.92l-0.79,1.44l-2.3,1.96l-0.27,-0.36l-0.72,0.17l0.02,1.59l-0.64,0.52l-0.41,1.5l-2.25,2.68l-1.09,0.75l-0.71,-0.8l-1.21,0.21l0.09,1.05l1.36,0.64l-1.18,0.69l-0.95,-0.02l-0.33,0.64l0.63,0.87l-4.38,1.88l-5.68,3.7l-0.6,-0.27l-1.36,0.9l-3.72,1.43l-7.5,4.53l-1.63,2.1l-1.66,1.0l-2.23,2.57l-1.51,3.41l0.08,1.5l0.46,0.72l1.58,0.79l1.39,-0.02l-0.85,4.85l-0.72,1.56l-0.34,-0.21l-0.64,0.36l0.4,1.35l-1.04,0.36l-1.68,1.64l-3.44,1.81l-1.69,0.26l-1.26,1.15l-1.04,0.04l-0.51,0.6l-2.47,0.43l-3.09,1.68l-1.37,0.3l-1.56,-0.75l-2.35,-0.2l-0.15,-0.58l-0.72,-0.39l-0.52,-0.02l-0.33,0.68l-1.09,-0.27l-1.67,0.39l-0.14,-0.58l-0.74,-0.5l-1.17,0.41l-1.79,0.07l-1.92,1.15l-0.53,0.79l0.21,1.29l-0.76,0.97l-2.28,6.46l-0.11,1.95l-3.74,2.84l-0.92,1.13l-0.06,0.8l0.57,1.13l-2.57,-2.06l0.0,-4.01l-0.39,-1.55l-0.36,-0.29l-0.5,0.52l-0.41,-0.01l-0.14,0.47l0.47,1.18l-0.03,2.41l-1.75,4.39l-0.16,-2.66l-0.88,-1.48l-0.76,-0.46l-2.81,-0.47l-0.67,0.59l-1.07,0.05l-1.2,0.52l-0.67,-0.32l-3.79,2.32l-1.37,0.39l-3.56,3.09l-2.52,5.95l0.09,0.92l-2.32,3.04l-1.15,2.69l-0.28,3.27l-0.91,3.59l0.05,2.53l1.66,9.47l0.36,0.68l1.24,1.01l0.53,1.67l-0.88,0.68l-0.09,0.67l0.52,0.29l0.92,-0.16l-0.53,2.8l-0.02,3.74l-1.28,2.53l-1.34,0.32l-1.03,0.97l-0.28,0.8l0.6,0.58l0.7,-0.18l1.35,-1.13l-0.31,1.02l0.08,1.41l0.74,3.85l3.06,7.11l-0.1,1.25l-0.75,1.85l0.88,2.52l-2.65,-3.71l-0.68,0.29l-0.0,1.53l-1.2,-0.83l-0.32,1.26l-1.21,1.55l0.16,0.9l1.44,1.97l-1.28,-0.67l-0.81,0.14l-0.23,0.82l0.76,0.9l-1.54,0.67l-0.98,0.96l-0.37,0.8l-0.0,1.1l-4.14,2.13l-1.51,-0.11l-0.43,0.24l-0.2,1.13l0.99,1.03l-1.6,-0.04l-0.56,-0.31l-0.13,-1.26l-0.58,-0.5l-2.98,0.35l-1.45,-1.63l-2.26,-0.23l-1.14,0.77l-0.55,3.0l-1.21,0.66l-1.92,2.04l-0.89,-0.53l-1.16,0.1l-2.64,3.15l-2.32,0.28l-1.86,-0.57l-0.43,-0.86l-1.41,-0.39l-1.2,0.29l-0.34,1.11l-0.43,0.35l-0.49,-0.96l-0.74,-0.38l-4.19,0.72l-0.84,1.11l-1.18,0.3l-0.67,0.81l-1.1,4.55l-0.94,2.36l-1.21,0.96l-0.58,-0.31l-0.63,0.22l-0.3,1.75l-1.22,1.28l-1.26,0.29l-1.25,-0.27l-2.28,-1.65l-1.18,-1.67l0.49,-1.04l-0.22,-1.64l1.12,0.41l1.29,-0.57l0.58,-0.55l0.25,-1.16l2.34,1.53l1.22,-0.06l0.18,-0.61l-0.23,-0.64l-0.55,-0.73l-0.93,-0.53l1.23,-1.78l0.45,-1.4l1.33,-1.04l0.36,-1.9l1.04,-1.54l0.39,-2.6l-0.23,-1.04l-0.44,-0.45l-1.33,0.66l-1.64,-1.13l-1.52,-0.39l-0.68,0.28l-0.85,-1.4l0.29,-1.11l0.25,-5.76l-2.41,-0.54l-1.07,0.43l-1.06,-0.1l-1.4,-0.36l-1.79,-1.79l-1.64,0.09l-0.25,-0.55l1.04,0.02l0.45,-0.71l-0.69,-1.44l0.46,-1.37l-0.59,-2.04l-2.02,-1.06l-0.89,0.52l-1.23,-0.07l-0.99,0.93l-0.07,-0.92l0.96,-1.22l-0.02,-1.23l-0.48,-0.53l-1.02,0.4l-0.82,1.05l-0.97,-0.53l-1.68,-0.25l-0.5,0.21l-0.53,0.99l0.57,1.25l-1.57,1.32l-1.31,0.57l-0.59,1.23l-0.75,-0.55l-1.23,0.19l-0.52,0.4l-0.14,0.76l-1.03,0.09l-1.67,1.05l-1.15,0.02l-0.52,-2.73l-1.41,-1.75l-2.98,-0.12l-1.04,-0.57l-1.02,-0.01l-0.97,-0.78l-0.94,0.37l-0.52,-0.92l-0.7,0.21l-0.38,1.14l-0.84,0.61l0.15,0.54l0.66,0.48l0.16,1.57l-1.79,-0.15l-0.65,0.76l-1.27,-1.08l-0.39,0.07l-0.3,0.59l-0.17,-1.78l1.47,-2.02l0.17,-0.7l-2.33,-3.22l0.13,-1.79l-2.1,-2.47l1.13,-0.73l1.21,0.58l0.81,3.14l2.72,1.07l0.99,0.93l2.32,-0.02l1.96,-0.48l1.11,0.29l1.12,2.0l0.1,1.09l2.11,0.75l0.59,-0.3l0.14,-0.59l-0.49,-1.0l0.03,-1.08l-0.98,-0.86l-0.78,-1.6l0.98,-1.6l-0.1,-0.47l-0.56,-0.36l0.9,-0.86l2.24,-0.25l0.65,-0.42l0.16,-0.69l-0.4,-1.48l0.3,-1.18l-0.34,-0.55l-1.16,-0.23l-0.64,-0.92l-1.06,-0.27l-0.62,0.36l-0.25,0.64l0.8,2.01l-1.15,-1.29l-1.73,-0.59l-0.11,-0.7l-0.49,-0.42l-2.21,0.23l-1.61,-0.55l-0.95,0.55l-0.84,1.16l-0.27,1.81l-4.51,-0.75l0.44,-1.18l-1.73,-1.24l-0.23,-1.08l0.27,-0.48l1.22,-0.27l0.76,-1.39l-0.09,-0.76l-0.92,-0.84l-1.56,-0.07l-0.81,0.33l-1.0,-1.83l-1.09,-0.58l-0.47,-1.96l0.82,-2.71l-0.07,-1.53l0.79,-0.32l0.34,-0.53l0.68,-4.44l-0.77,-0.97l-2.24,-0.88ZM433.84,620.88l0.17,-0.38l-0.47,-0.55l-1.43,0.9l-0.23,0.47l0.64,0.66l2.25,0.65l0.99,-0.27l0.73,-1.0l-0.06,-0.69l-0.49,-0.46l-0.91,0.66l-1.19,0.01ZM368.9,723.15l3.01,0.37l0.36,0.27l-3.63,-0.13l0.26,-0.51ZM392.61,649.39l1.24,0.72l1.36,1.23l-0.92,0.46l-0.54,-0.32l-1.33,-1.56l0.2,-0.53Z", "name": "Andhra Pradesh"}, "IN-TR": {"path": "M717.67,412.64l-0.65,-0.93l-0.85,-0.54l-0.68,0.03l-0.65,0.63l-0.23,2.44l0.57,2.74l-0.06,0.54l-0.45,-0.12l-0.61,-0.81l-0.37,-1.24l-1.03,-5.9l0.59,-1.13l-0.93,-0.66l-0.88,-2.95l-1.06,-0.99l-1.73,-4.15l0.05,-0.4l0.82,-0.19l0.29,-0.86l-0.43,-0.72l-0.77,-0.33l-0.07,-0.39l0.16,-0.36l1.69,-0.62l0.97,-2.38l-0.28,-2.65l1.62,-2.42l1.36,0.06l0.65,-0.3l0.79,-3.37l4.46,0.5l2.13,-0.37l1.01,-1.0l0.52,-2.43l0.74,1.43l1.5,0.46l1.08,-0.84l-0.14,-2.07l1.8,0.37l0.24,1.14l1.12,1.01l0.62,0.15l0.7,-0.29l1.07,-3.6l-0.23,-2.31l1.73,0.78l0.54,-0.4l-0.61,-1.47l3.03,0.1l1.08,-0.51l0.67,-0.99l0.07,-3.38l0.92,-0.64l2.0,1.31l0.19,1.75l0.72,1.63l-0.16,1.4l-1.03,2.69l0.62,0.74l1.84,0.3l0.73,1.3l0.1,2.73l-0.33,2.19l0.42,1.35l-0.55,1.87l0.21,2.41l-0.73,0.03l-0.79,1.0l-0.32,1.9l0.2,1.67l-0.69,-0.15l-0.51,0.3l-0.6,1.69l-0.45,-1.43l-0.61,-0.91l-0.46,-0.16l-1.47,0.55l-1.5,1.91l-0.91,0.48l-2.28,-2.56l-1.1,0.12l-0.24,2.55l0.81,3.79l-0.04,1.12l-0.97,1.4l-2.69,1.48l-1.81,2.75l-0.6,1.79l1.57,5.86l-1.05,0.63l-0.6,1.26l-0.91,0.89l-1.59,0.51l-1.08,-0.01l-0.53,0.84l-0.37,-0.53l-1.18,-0.4l-0.36,-0.51l-0.1,-1.09l-0.43,-0.32l-1.19,-4.38l-0.54,-0.55l-0.07,-0.63l-0.43,-0.22Z", "name": "Tripura"}, "IN-AR": {"path": "M727.36,274.74l-0.62,-1.27l-2.25,-0.75l-1.77,-2.04l-0.63,-2.3l0.17,-1.09l1.38,-1.87l0.22,-1.28l3.95,-0.13l2.71,1.1l3.56,0.14l1.39,-0.61l1.72,-1.71l1.01,-0.5l3.83,-0.02l0.37,-0.53l-0.09,-1.07l1.06,2.04l0.62,0.37l0.5,-0.13l0.54,-0.87l0.59,0.49l0.55,-0.04l0.85,-1.64l0.39,0.72l0.65,0.34l3.1,-1.35l1.28,-1.18l1.97,-0.69l1.9,-1.8l0.51,-2.58l-0.5,-0.64l-1.47,-0.43l1.15,-1.82l2.62,-1.84l1.03,0.45l1.55,-0.52l1.69,-1.95l1.76,-0.71l1.24,-1.28l2.81,-1.91l1.46,-2.07l0.6,-2.32l1.84,-1.44l6.87,-4.3l3.12,-0.23l2.29,0.22l1.58,-0.99l0.71,0.3l0.81,-0.14l2.24,-1.87l3.52,-1.53l0.33,-1.17l1.78,-0.1l1.59,-0.97l3.25,-1.09l1.23,-1.08l2.5,-0.23l2.96,-3.02l0.01,-0.58l-2.19,-2.29l0.36,-1.16l1.48,-0.19l1.11,-1.53l0.6,-0.3l2.38,-0.12l1.39,-0.42l2.54,-3.14l0.72,-0.07l2.06,1.06l1.8,2.16l-0.17,1.17l0.66,0.67l2.54,-0.06l4.07,1.52l0.43,-0.15l-0.23,-0.8l1.58,0.39l2.15,1.1l2.51,0.45l0.72,1.13l1.93,0.3l0.45,-0.44l-0.2,-1.79l0.72,-0.57l1.81,-0.09l1.12,0.28l0.48,-0.28l0.36,-1.24l0.67,1.6l2.25,-0.39l0.22,-1.1l-0.31,-1.27l1.15,-0.39l0.21,-0.82l0.66,-0.09l1.65,0.69l2.17,0.34l0.42,-0.22l0.93,-1.86l-0.03,-2.09l1.15,-0.32l2.24,0.9l2.73,-1.16l5.47,-0.31l0.94,2.55l1.97,1.67l1.4,-0.02l2.08,-1.11l0.36,0.57l-1.13,2.01l-3.49,1.07l-0.63,0.41l-0.65,1.26l0.64,2.74l0.61,0.25l2.59,-1.66l1.71,-0.53l0.58,1.89l2.46,1.23l0.08,0.91l1.18,0.7l0.56,2.05l2.02,2.58l0.6,2.92l-2.74,2.04l-2.04,1.1l-0.15,0.56l0.83,1.34l-1.06,1.29l0.04,0.55l1.03,0.95l0.99,2.16l0.53,0.2l0.76,-0.58l0.45,-3.4l0.84,-1.52l1.46,-0.72l2.38,0.61l2.09,2.27l2.2,1.38l1.28,1.55l0.59,2.63l2.37,0.85l3.42,-1.46l0.92,0.23l2.0,1.66l0.8,0.21l0.66,1.15l2.77,1.85l0.1,0.6l-0.87,1.91l-0.18,1.48l0.49,0.95l1.42,1.47l0.17,0.72l-0.79,1.9l0.03,1.18l-0.7,0.34l-0.46,-0.84l-0.74,-0.19l-1.48,0.51l-2.77,2.73l-2.06,1.44l-0.27,0.83l-2.08,0.81l-1.02,1.26l-2.24,1.7l-0.77,1.39l-0.0,0.98l0.8,2.32l-0.35,1.45l0.18,0.76l6.72,8.57l0.2,1.05l0.81,0.73l-0.34,0.96l-1.06,-0.38l-1.09,0.3l-0.98,-0.87l-4.19,-1.87l-0.52,-0.42l0.5,-1.38l-0.22,-0.64l-1.04,-0.87l-1.45,-1.95l-2.32,-1.06l-1.15,0.12l-0.8,0.69l-2.05,-0.49l-1.22,1.56l-0.94,0.38l-3.16,-0.19l-8.17,1.35l-2.27,0.98l-1.97,1.39l-2.32,3.7l-1.42,1.63l-3.49,1.13l-2.36,3.2l-2.21,0.47l-1.16,1.96l-1.65,0.03l-1.5,0.46l-2.38,3.54l-4.38,1.68l-0.65,-2.41l0.28,-2.02l-1.15,-1.62l0.08,-0.57l0.86,-1.12l0.18,-1.79l-0.4,-1.17l-1.3,-0.89l0.03,-0.74l2.24,-0.17l3.03,-2.24l2.08,-0.89l1.32,-1.31l0.89,-2.35l1.07,-0.6l3.2,1.39l4.93,-1.84l2.11,-0.03l1.11,0.35l0.89,-1.03l1.04,-0.45l0.4,-0.9l1.19,-0.94l0.02,-1.73l-1.11,-1.43l-1.54,0.04l-1.04,1.08l-0.29,-1.15l0.49,-1.32l-0.31,-2.08l-0.56,-0.76l-2.03,-1.4l-0.74,-3.0l4.9,-6.49l1.13,-2.28l-0.47,-0.76l-7.92,0.07l-1.46,0.45l-3.93,2.51l-4.03,1.0l-1.16,-0.06l-2.12,-0.75l-1.82,1.0l-9.17,3.2l-4.61,2.27l-4.21,1.1l-4.11,2.12l-1.45,0.25l-0.95,-0.65l-2.82,0.73l-1.84,-0.68l-0.97,-1.0l-0.65,-0.12l-0.98,0.82l-0.31,0.87l1.19,1.68l-0.16,0.82l-7.98,6.54l-4.22,4.3l-0.72,1.32l0.11,2.07l-3.97,2.93l-1.86,0.72l-3.28,0.5l-1.4,0.62l-0.37,0.04l-1.8,-1.22l-0.99,-0.14l-10.87,1.18l-1.55,-0.38l-0.87,-1.17l-3.78,-1.66l-3.69,-0.53l-0.9,0.25l-2.12,1.63l-8.52,2.44l-1.58,0.13l-1.99,0.63l-3.48,-0.28l-1.08,-3.29l-1.55,-1.52l-0.32,-0.92l0.42,-2.0l0.73,-0.89l0.31,-1.23l1.41,-1.35l0.22,-0.83l-2.85,-5.27l-1.16,-0.97l-1.6,0.88l-1.97,0.08l-3.01,0.86Z", "name": "Arunachal Pradesh"}, "IN-KA": {"path": "M183.76,654.66l1.17,-1.76l1.58,-1.17l0.11,0.99l0.66,0.4l1.93,-0.14l1.67,-1.1l1.39,-2.47l-0.57,-1.14l2.3,-3.92l0.01,-1.78l-1.37,-0.64l0.65,-0.48l1.42,-0.09l0.56,-0.68l0.21,-3.0l-0.24,-1.26l-0.69,-0.68l-2.69,-1.26l-1.19,0.3l-0.47,-2.4l1.24,-0.28l0.35,-0.84l-1.1,-0.79l-0.36,-1.12l-1.04,-0.15l-0.39,-1.08l-0.95,0.09l0.31,-0.89l0.87,0.52l0.75,-0.34l0.34,-0.8l0.72,0.63l0.63,-0.14l1.85,-1.63l0.52,-1.51l2.28,0.61l0.64,1.97l0.55,0.41l0.87,-0.23l1.48,-1.21l1.3,-0.31l0.44,-0.89l-0.63,-0.9l0.68,-0.64l0.32,-1.0l0.9,-0.17l0.61,-0.68l1.67,-0.79l2.05,0.17l0.41,-0.88l-0.66,-2.45l2.16,-0.78l0.95,-0.97l0.35,-1.04l0.96,0.29l1.32,-0.24l0.43,0.85l1.57,1.28l1.74,0.56l2.56,-1.13l0.32,-1.76l2.11,-0.15l1.37,-0.65l1.59,-0.01l0.78,0.64l0.73,0.05l1.58,-0.66l0.84,-0.95l1.47,1.12l1.13,-0.06l0.56,-1.31l-0.58,-1.4l0.66,-0.66l0.08,-0.53l-1.28,-2.2l0.49,-2.65l-0.42,-1.11l-0.82,-0.58l-0.88,-2.78l0.83,-0.73l1.1,-1.81l0.67,0.2l0.76,1.43l1.88,0.29l1.02,1.25l0.74,0.0l1.18,-1.12l0.68,0.28l0.52,-0.31l0.52,1.7l1.37,1.03l2.4,-0.79l1.12,0.08l2.15,-1.02l1.3,0.35l1.64,-0.57l1.62,0.97l2.17,0.25l0.88,-0.29l0.98,-1.09l-0.17,-0.54l-0.94,-0.76l-0.84,-1.71l0.71,-1.31l-0.11,-1.65l-0.73,-1.08l2.27,-0.76l0.96,-1.31l1.3,-0.71l0.19,-1.02l0.84,-0.4l0.57,-0.91l0.9,0.33l1.1,-0.13l2.11,1.92l0.94,-0.21l0.83,-2.54l1.63,-1.28l-0.43,-2.03l2.59,0.52l1.11,-0.85l0.65,-1.76l0.44,-6.2l1.3,-0.6l1.67,0.06l2.75,-0.68l0.94,-1.82l3.43,-2.24l0.12,-2.6l0.97,-1.48l0.81,-0.16l0.82,0.6l0.26,2.57l2.49,1.24l0.14,0.8l0.46,0.46l1.07,-0.06l1.25,-0.96l1.87,0.57l-0.46,1.64l0.98,3.56l-0.97,0.35l-0.34,0.81l0.3,0.72l1.16,1.08l0.66,2.67l-1.93,2.03l-1.65,1.2l-0.31,0.97l0.86,1.02l0.13,0.63l-2.0,1.18l-1.66,3.11l0.54,0.74l2.14,1.1l2.63,0.05l0.62,0.92l2.4,-0.87l-0.85,1.7l-1.86,0.54l-0.68,1.22l-1.41,0.5l-0.93,1.81l-3.8,4.92l-0.3,1.05l0.18,0.89l1.75,0.99l0.21,1.34l1.01,2.06l-0.98,2.22l-0.04,4.51l-0.57,0.94l-0.19,1.47l0.2,0.87l0.84,0.59l-0.7,0.62l-0.29,0.74l0.33,0.43l0.72,-0.12l-0.46,1.4l-1.11,0.6l-0.57,1.31l-3.6,2.5l0.04,0.43l1.33,1.5l3.15,0.82l2.99,0.08l1.46,0.98l-0.05,0.65l-1.49,1.1l-0.35,0.85l-0.3,2.77l0.14,5.08l-0.92,1.2l-4.11,-0.1l-2.41,-0.6l-2.16,0.31l-2.83,1.49l-1.33,1.59l-0.27,3.92l0.26,0.61l0.54,0.3l0.92,1.92l-1.1,-0.21l-1.05,0.68l-0.44,1.23l0.31,2.89l-0.61,-0.36l-0.47,0.14l-0.26,0.54l1.49,3.11l0.45,2.23l2.35,1.26l0.79,5.01l-1.29,2.89l-1.27,1.08l-0.98,-0.83l-1.9,0.28l-2.26,-0.55l-2.7,-1.55l-0.83,0.05l-0.64,1.13l-0.05,1.31l-0.76,1.17l0.34,0.49l2.58,1.0l0.24,0.53l-0.67,3.87l-0.92,0.48l-0.24,0.51l0.09,1.46l-0.65,1.58l-0.11,1.87l0.53,1.82l1.15,0.65l1.13,1.95l2.75,-0.11l0.28,0.38l-0.58,1.33l-0.75,-0.03l-0.6,0.43l-0.33,1.18l0.67,1.5l1.34,0.7l-0.5,1.06l0.38,0.63l5.22,0.79l0.57,-0.66l0.04,-1.35l1.22,-1.48l1.49,0.54l2.05,-0.25l0.35,0.98l1.75,0.6l0.81,1.07l0.71,0.37l0.61,-0.09l0.42,-0.71l-0.87,-2.14l0.63,0.06l0.57,0.9l1.2,0.25l-0.29,1.29l0.4,1.46l-2.57,0.43l-1.69,1.64l0.17,0.52l0.77,0.22l-0.9,1.3l-0.01,0.61l0.89,1.82l0.88,0.68l-0.09,0.84l0.46,1.04l-1.36,-0.46l-0.12,-1.15l-1.33,-2.11l-1.58,-0.4l-2.02,0.49l-1.93,0.06l-0.86,-0.87l-2.53,-0.91l-0.68,-2.95l-0.45,-0.49l-1.65,-0.55l-1.55,0.95l-0.26,0.99l2.22,2.42l-0.16,1.73l2.27,3.02l-1.7,2.74l0.13,1.43l0.5,1.1l0.7,0.06l0.45,-0.65l1.18,0.94l0.5,-0.15l0.37,-0.63l1.31,0.24l0.78,-0.26l0.35,-1.0l-0.25,-1.5l-0.54,-0.55l0.64,-0.79l0.65,0.55l0.97,-0.55l0.77,0.74l1.09,0.02l1.04,0.57l2.88,0.1l1.0,1.31l0.76,3.18l1.76,0.02l1.87,-1.1l1.4,-0.17l0.29,-1.09l0.84,-0.13l0.54,0.58l0.75,-0.06l0.7,-1.41l1.23,-0.5l1.78,-1.55l0.13,-0.72l-0.57,-0.89l0.16,-0.39l1.51,0.14l1.31,0.55l0.69,-0.36l0.76,-1.03l-0.06,0.91l-0.96,1.22l0.45,1.84l0.61,0.04l1.08,-1.14l1.08,0.1l0.98,-0.51l1.13,0.68l0.47,1.62l-0.46,1.45l0.68,1.33l-0.98,-0.09l-0.43,0.33l-0.05,0.66l0.46,0.93l0.44,0.26l1.43,-0.19l1.73,1.76l1.63,0.44l1.35,0.11l0.84,-0.42l0.8,0.37l1.06,-0.13l-0.34,1.19l-0.06,3.99l-0.34,1.2l1.1,1.98l0.69,0.23l0.59,-0.29l1.3,0.36l1.75,1.15l1.21,-0.5l-0.05,2.1l-0.32,1.1l-0.91,1.18l-0.34,1.83l-1.24,0.9l-0.54,1.55l-1.32,2.03l0.1,0.59l1.12,0.65l0.48,0.78l-2.19,-1.45l-1.12,-0.16l-0.49,0.39l-0.35,1.35l-1.07,0.42l-1.03,-0.36l-0.62,0.37l0.11,2.05l-0.34,0.59l-2.6,-0.85l-2.48,-1.78l-0.99,-0.1l-1.2,1.37l-2.15,-1.97l-2.37,-0.1l-1.63,0.75l-0.34,1.39l-1.03,1.8l0.24,1.06l-2.02,1.05l-1.7,-0.11l-1.04,0.49l-1.29,3.66l0.38,1.14l-0.1,1.1l1.28,0.34l-0.45,2.16l-2.18,2.84l-1.81,1.11l-0.33,1.06l0.88,1.69l6.59,0.29l1.01,0.65l0.87,1.65l-3.17,4.34l-4.19,0.64l-1.02,0.5l-1.01,1.52l-0.85,2.18l-0.54,0.46l-2.0,0.25l-2.48,-1.04l-1.24,0.45l-2.9,0.22l-0.46,0.31l-0.39,1.08l-1.99,-1.91l-1.21,-0.41l-2.06,0.44l-0.92,0.51l-1.97,3.01l-0.52,2.22l-2.05,-0.47l-5.1,0.34l-0.7,-0.25l-0.01,-1.16l-0.76,-0.99l-1.01,-0.34l-1.28,0.14l-1.47,1.17l-0.23,-1.51l-0.53,-0.66l-2.29,-0.05l-1.56,-1.76l-1.37,-0.01l-1.51,-1.78l-0.98,-0.16l-1.05,0.26l-0.38,-0.58l0.08,-2.01l-0.53,-0.63l-0.84,-0.04l-2.77,1.07l-2.93,-0.54l-1.33,-0.58l-1.09,-1.2l-0.6,-1.99l-1.88,-0.3l-1.33,-0.81l-0.81,0.09l-0.76,-1.06l-2.07,-1.0l-3.42,-3.85l-1.12,-0.12l-0.54,-1.89l-0.87,-1.28l0.04,-0.64l0.75,-0.81l0.05,-0.7l-0.69,-0.48l-1.29,0.25l-1.68,-1.95l0.67,-1.64l-0.28,-0.5l-1.53,-0.38l-1.26,0.46l-0.83,-1.04l-1.18,0.1l-0.21,-1.49l-1.02,-0.68l-0.95,-0.16l-0.98,0.44l-0.22,-0.85l-1.23,-0.36l-0.55,-1.43l-0.97,-0.23l-1.59,0.31l-0.32,-0.91l0.99,-0.81l1.53,-0.55l0.39,-0.51l-0.4,-0.61l-3.41,0.56l-1.36,-5.58l0.26,-1.33l-0.35,-0.37l-0.6,-2.16l-1.04,-5.01l-0.74,-1.48l0.06,-0.6l0.43,-0.2l-0.18,-1.85l-0.72,-1.98l-0.17,-2.91l1.43,-0.43l0.51,-0.72l-0.79,-0.24l-0.74,-1.69l-0.59,-0.04l-0.59,0.82l-1.04,-4.59l-0.98,-2.21l-2.65,-3.83l0.0,-1.22l-0.63,-1.13l-0.24,-2.4l-1.15,-1.8l2.13,0.13l0.18,-0.69l-2.5,-1.07l-0.26,-0.37l-0.08,-1.26l-1.06,-3.28l0.48,0.02l0.27,-0.5l0.73,-0.16l-0.05,-0.45l-1.48,-1.63l-0.14,-0.62l-0.98,-0.84l-0.71,0.54l-0.06,1.03l-0.4,0.04l-0.22,-1.61l1.0,-0.33l0.35,-0.61l-0.72,-0.56l-1.25,0.35l-0.23,-0.18l0.24,-0.61l-0.84,-2.65l-1.14,-0.68l-0.83,0.38l-0.42,-0.63l-0.7,-0.13l-1.41,-0.99l0.54,-0.99l1.17,0.17l0.75,-0.99l1.08,0.02l0.47,-0.37l-0.08,-0.75l-1.37,-0.74l-2.36,1.62l-0.46,-0.72l1.61,-1.08l1.69,-0.19l1.18,-0.91l0.82,-2.53l-0.14,-2.48l0.94,-2.43l-0.25,-0.71l-1.34,-1.11l1.61,-0.57l0.34,-0.87l-0.21,-1.62l-1.2,-1.53l-0.04,-1.34l-0.58,-0.86l0.59,-1.77l-0.66,-3.34l-0.5,-0.59l-1.53,-0.72l-1.74,0.51l-0.43,-0.07l-0.12,-0.46Z", "name": "Karnataka"}, "IN-PB": {"path": "M176.07,176.63l0.49,-0.66l0.91,-0.18l0.37,-0.76l0.93,-0.37l1.98,-2.76l1.11,-0.3l0.6,-0.54l0.35,-2.73l1.22,-1.08l1.65,-0.66l0.97,-1.89l2.26,-2.34l-0.1,-1.02l1.19,-0.74l0.5,-1.77l2.56,-0.03l1.17,-1.73l2.45,-0.6l1.36,-1.41l0.49,-1.31l2.35,-1.33l0.12,-0.61l-1.4,-1.16l-2.43,0.02l-0.78,-1.72l0.77,-4.21l2.63,-5.48l-0.15,-0.82l-0.89,-1.3l-0.91,-3.26l-1.88,-3.18l1.28,-1.9l0.42,-1.8l3.6,-2.55l0.85,-1.45l1.71,0.33l1.05,-0.31l1.2,-2.56l1.09,0.37l0.83,-0.6l2.02,-0.13l1.02,-1.1l1.11,-0.02l0.36,-0.49l-0.14,-0.56l1.94,0.66l1.17,-0.5l1.03,0.2l0.93,-1.49l3.2,-0.92l0.63,-2.0l1.01,-1.12l0.35,-0.94l-0.27,-0.94l-1.12,-1.22l1.94,0.13l1.25,-0.69l0.47,1.04l1.62,0.83l0.46,-0.14l2.1,-2.45l1.07,-0.64l2.7,-0.39l1.07,-0.89l0.4,-1.14l1.66,-0.59l1.42,-1.04l1.5,2.65l-3.97,2.7l-1.59,1.66l-3.57,1.31l-0.33,1.08l0.28,1.2l0.7,0.45l0.63,-0.16l-0.52,1.03l-1.81,1.94l-0.05,0.85l0.87,0.49l3.03,0.5l5.38,2.71l2.54,4.11l-1.07,0.21l-0.18,1.25l4.53,8.24l2.34,7.11l1.09,1.36l0.75,0.46l1.42,-0.32l1.34,0.16l0.65,-1.28l0.84,-0.38l-0.02,-1.78l0.92,-0.36l2.27,4.24l0.98,-0.15l0.78,0.72l0.73,-0.2l0.39,0.92l0.53,0.22l0.69,-0.62l0.06,1.28l0.34,0.31l0.96,-0.04l-0.73,1.33l-0.03,1.58l0.68,0.74l-0.51,1.25l0.31,1.59l1.02,1.2l3.79,3.11l1.0,1.7l0.95,0.53l-0.41,1.04l-2.24,-0.16l-1.46,0.74l-0.24,0.82l0.32,0.8l2.49,2.48l2.18,-0.11l0.28,1.06l0.84,0.47l0.29,0.86l-0.26,1.77l0.52,0.95l-0.43,1.01l0.34,3.05l-0.33,0.84l-1.25,-2.16l-2.78,-0.23l-1.08,0.49l-0.44,1.63l0.52,0.73l-2.37,1.72l-3.57,1.91l-0.22,0.62l0.44,0.79l0.82,-0.04l0.76,-0.82l0.42,0.84l0.87,0.45l-0.38,1.5l-2.73,1.89l-1.97,-0.49l-1.02,-2.47l-0.61,-0.47l-0.6,0.06l-0.49,0.47l0.18,1.05l-0.33,0.74l-0.93,-0.81l-0.57,0.13l-0.15,0.98l-0.26,0.08l-1.13,-0.23l-1.27,-0.87l-0.79,0.13l-0.49,1.0l0.9,0.83l-0.46,0.56l0.17,0.85l-0.56,0.83l-0.83,2.76l0.55,1.64l0.95,0.71l-2.16,1.34l-1.95,0.72l-1.28,1.49l-1.16,0.03l-1.39,0.58l-1.91,-0.35l-1.01,-1.8l-1.91,-0.93l-2.34,0.7l-0.72,1.35l-1.13,-0.2l-1.76,0.35l-4.86,-1.45l-3.42,4.21l-0.13,0.69l-0.95,0.4l-0.7,1.35l0.37,1.21l-1.34,0.48l-0.53,-1.63l-0.78,-0.89l0.03,-0.68l-0.47,-0.53l0.89,-0.62l-0.01,-1.11l0.84,-0.15l0.16,-0.58l-1.61,-2.94l-1.18,0.18l-0.57,0.76l-0.91,-0.57l-0.12,-1.21l0.35,-1.46l-0.53,-0.88l-0.81,0.2l-0.42,1.1l-1.94,0.49l-1.47,-1.09l-0.81,-1.4l-2.41,-0.6l-0.88,-0.73l-3.48,0.62l-1.31,0.92l-0.55,0.88l-3.88,-1.1l-4.07,-0.54l-15.05,-0.66l0.36,-1.18l2.21,-3.51l0.25,-1.48l-0.23,-0.77l-0.66,-0.4l-1.19,-3.33l-0.77,-1.0l-1.17,-0.6Z", "name": "Punjab"}, "IN-ML": {"path": "M692.14,323.41l0.36,0.99l0.49,0.26l3.48,-1.0l0.19,0.86l0.64,0.35l1.2,-0.63l1.49,-0.23l3.08,0.24l0.52,0.77l0.96,0.42l-0.17,1.66l0.43,0.66l1.1,-0.39l0.55,0.36l0.64,-0.07l2.66,-0.96l0.05,3.31l0.27,0.81l0.85,0.45l1.66,-0.78l2.72,-2.95l3.5,-0.63l1.66,-0.86l0.37,-0.68l-0.38,-0.52l-1.21,0.62l3.21,-4.23l0.7,0.03l0.35,0.35l-0.47,2.0l0.21,0.69l1.52,0.36l1.37,-0.91l0.76,-1.27l0.44,-1.6l1.65,-1.4l0.96,0.24l1.41,1.21l1.05,0.19l3.13,-0.68l1.07,0.06l3.34,-1.03l2.77,0.13l-2.86,2.99l0.12,1.26l1.06,0.72l-1.5,3.63l0.24,1.32l-0.13,2.9l0.69,0.35l1.64,-0.98l2.82,-0.49l1.83,-1.14l2.64,2.02l3.7,3.79l0.62,0.07l1.88,-0.9l-1.34,1.9l-1.55,1.24l-0.1,0.59l1.68,1.57l2.05,0.77l2.62,2.44l0.18,0.48l-0.36,1.54l0.66,1.41l-3.66,1.24l-1.0,1.03l-2.75,0.23l-0.26,0.76l-1.33,0.48l-3.41,3.12l-1.72,-0.99l-0.78,-0.86l-2.26,-0.4l-1.74,-1.46l-1.79,-0.29l-0.79,-0.85l-1.94,-0.58l-2.44,0.38l-1.73,-0.24l-5.25,0.33l-0.64,0.7l-0.94,-0.21l-0.65,0.86l-0.55,0.08l-1.11,-0.13l-1.08,-1.05l-0.72,-0.01l-2.03,0.82l-1.34,-0.09l-4.49,-1.33l-1.65,-0.78l-12.73,1.95l-2.04,-0.82l-0.72,-0.02l-0.73,0.49l-2.6,-0.6l-1.28,0.3l-2.57,-0.21l-4.05,0.61l-2.4,-0.98l-4.8,-1.03l-6.8,-2.79l-2.64,0.4l-0.59,-2.56l0.35,-1.85l2.3,-0.94l0.38,-0.8l0.21,-2.01l1.81,-0.2l1.28,-1.0l0.04,-0.93l-1.52,-1.7l-0.34,-1.72l0.88,-1.75l0.26,-1.36l2.26,-2.72l2.31,-1.91l5.74,-0.81l1.82,-1.05l3.24,0.21l1.4,0.87l-0.56,1.9l0.39,0.49l1.72,-0.91l0.85,-1.0Z", "name": "Meghalaya"}, "IN-MN": {"path": "M765.49,384.0l0.47,-0.68l0.61,-3.47l-0.09,-1.17l0.96,-1.67l-0.13,-0.68l-0.62,-0.57l-0.09,-1.32l0.56,-0.31l0.28,-0.98l0.55,-3.63l1.0,-0.49l0.14,-0.43l-0.57,-1.42l0.73,-1.43l-0.56,-1.21l0.91,-2.88l0.63,-0.62l0.88,0.47l0.98,-0.44l0.27,-1.08l1.36,-2.09l-0.23,-1.11l1.0,-0.91l-0.44,-2.02l1.51,-0.98l3.35,-6.82l0.5,-0.52l1.87,1.18l1.29,0.39l1.16,1.32l0.79,-0.03l1.42,-1.94l0.99,-2.22l3.94,-3.86l-0.04,-1.41l-1.34,-0.76l0.16,-0.53l4.57,-0.6l2.93,0.03l1.7,1.1l2.18,-0.03l1.33,0.81l4.11,-0.51l2.05,-1.03l1.5,-1.74l1.68,-0.96l1.91,-1.65l-0.05,1.34l-1.04,3.76l0.67,0.94l2.42,1.37l-0.87,1.31l-1.78,4.9l0.08,1.52l0.99,1.35l3.31,1.08l0.64,2.0l-0.15,1.25l-1.08,1.72l-0.56,2.75l-1.73,2.55l-0.49,2.59l-0.58,0.52l-1.44,0.34l-1.22,3.42l-1.79,1.31l-0.65,2.06l-1.03,1.02l-0.12,1.37l-1.01,1.13l0.08,0.9l-1.09,1.03l-0.39,2.16l-1.51,3.48l-1.33,5.32l-1.69,2.49l-0.11,2.01l-0.25,0.27l-1.49,-1.41l-1.93,-1.02l-3.52,-0.92l-2.47,0.28l-1.62,-1.76l-1.26,-0.49l-3.11,-0.12l-0.94,0.51l-0.51,0.86l-0.79,-0.43l-1.46,0.7l-0.87,-0.01l-0.47,-1.06l-2.13,-2.65l-0.75,-0.47l-1.33,0.4l-0.63,1.3l-0.8,0.38l-0.15,-0.87l-0.68,-0.58l-1.63,0.9l-1.15,-0.71l-1.16,0.57l-1.01,-0.83l-2.54,-0.88Z", "name": "Manipur"}, "IN-MH": {"path": "M140.02,524.29l0.06,-1.24l-0.89,-1.35l0.45,-1.03l-0.02,-2.02l0.58,-0.43l0.77,-1.67l0.01,-1.67l1.8,-0.88l1.02,0.27l0.61,-0.35l2.1,-0.11l1.26,-0.53l1.63,2.69l1.38,-0.59l0.87,0.56l1.01,-0.49l0.85,0.82l0.58,0.11l0.82,-0.93l0.21,-1.81l0.82,-0.04l1.23,-0.66l0.57,-1.77l3.01,0.37l0.95,-0.4l-0.07,-1.27l0.49,-1.74l-0.34,-2.56l-0.66,-0.58l2.42,-3.82l0.56,-1.66l-0.48,-1.67l-0.94,-0.32l-0.37,-1.27l-0.99,-0.24l0.99,-0.38l0.9,-1.46l0.9,1.35l3.28,1.92l1.77,1.83l2.49,-0.21l2.88,-1.69l0.39,-0.98l-0.0,-1.07l2.33,-1.97l0.71,-1.34l-0.19,-3.58l-0.9,-2.69l-2.67,-3.15l-1.52,-0.55l-1.15,-1.45l-0.83,-0.24l-1.49,0.14l-2.13,-1.69l1.87,0.97l2.29,-0.02l2.26,-1.34l1.02,-2.45l1.02,0.6l2.51,-0.87l1.4,-3.41l2.42,-2.08l1.87,0.38l4.14,-1.13l1.72,-0.97l0.43,-1.02l-0.34,-1.17l-0.46,-0.42l-2.95,0.88l-1.44,-0.8l-1.14,0.58l-3.52,-0.08l-5.22,1.49l-1.82,-2.89l1.68,-0.47l0.65,-0.69l0.32,-1.01l-0.15,-0.9l-0.83,-0.77l-0.29,-2.57l0.27,-0.56l2.56,-0.97l1.38,-0.19l1.13,-0.92l2.52,-1.2l1.96,-0.35l2.37,0.85l2.05,-0.37l0.72,-0.45l0.19,-0.59l1.73,-0.61l1.41,-1.13l2.18,2.28l0.21,0.76l-0.17,3.62l0.77,2.62l3.13,2.41l1.63,0.45l1.6,1.13l4.83,-0.16l1.07,0.2l1.64,1.01l1.69,0.14l1.58,1.14l2.36,3.5l2.18,0.87l3.21,0.71l6.95,0.32l2.77,-0.44l2.5,0.23l3.35,-0.17l1.94,-0.51l2.2,0.26l2.69,0.81l1.26,-0.08l1.24,2.54l0.36,2.7l-1.11,0.57l0.15,0.97l1.09,1.49l0.87,0.53l3.81,0.66l4.02,-0.74l0.95,-0.46l1.82,-2.26l4.01,-0.99l0.96,-1.64l-0.02,-1.37l-0.56,-1.56l2.52,-1.7l1.81,-2.57l0.52,-3.12l0.5,-0.59l0.75,-0.35l2.31,-0.17l3.51,-2.47l2.54,-0.93l1.74,-0.08l0.77,0.73l0.74,0.08l1.15,-1.07l0.99,-0.26l1.28,-1.01l4.16,0.21l0.84,1.07l1.22,0.67l0.36,3.83l0.44,0.85l-3.7,-0.1l-0.72,0.76l0.04,1.29l1.97,3.68l0.53,0.02l0.58,-0.76l1.39,0.99l0.88,0.02l1.05,-0.43l1.38,0.13l0.82,0.55l2.93,-1.48l2.94,0.87l4.44,-1.33l3.05,-1.56l2.07,-2.14l3.51,-1.08l1.4,-1.22l1.25,0.34l0.42,2.93l0.32,0.47l0.78,0.04l1.24,-0.64l0.62,0.01l1.47,0.98l2.09,0.55l2.14,0.15l6.99,-1.28l0.7,-0.93l-0.15,-1.32l1.82,-0.62l2.66,-0.31l4.17,-1.36l0.59,-0.54l0.29,-1.34l1.77,0.62l3.23,0.14l1.66,0.54l0.8,1.02l0.92,0.57l0.58,2.17l0.81,0.57l1.25,-0.33l1.75,-1.17l2.95,-0.27l1.39,0.37l0.77,1.38l0.58,0.33l1.6,-0.12l2.05,-0.95l0.35,0.4l0.86,0.06l2.42,-0.77l0.92,-1.07l2.29,-0.91l1.67,1.15l1.92,0.55l0.2,1.01l0.5,0.63l2.02,1.48l0.35,0.91l-0.73,1.25l0.43,0.65l0.81,0.15l1.85,-0.32l4.3,2.41l1.39,-0.57l-0.01,0.89l-1.13,1.42l-2.68,1.41l-2.67,1.98l-0.97,4.16l0.16,1.64l0.77,1.33l1.09,0.52l1.28,-0.23l0.35,0.63l0.06,4.02l0.45,3.05l-1.84,1.2l-0.47,0.89l-0.02,0.79l0.38,0.48l0.66,0.16l1.78,-0.88l1.02,0.27l0.01,1.81l0.39,0.89l-0.58,1.41l-0.1,2.11l0.45,2.13l-1.09,0.47l-1.52,1.28l-2.81,0.5l-0.75,0.81l-0.36,2.4l0.18,0.72l3.49,0.54l0.73,2.48l-0.7,3.76l-2.02,-0.7l-1.12,1.16l-0.04,1.18l1.69,0.75l-0.51,0.69l-1.68,0.86l-0.09,0.89l0.85,0.59l1.62,0.25l0.63,-0.44l0.13,-0.95l0.77,-0.12l1.15,2.63l2.81,1.23l0.47,2.03l0.58,0.9l4.26,1.79l1.18,1.1l0.48,0.98l-0.64,1.2l-1.62,0.32l-0.53,0.42l-0.01,0.81l0.78,1.35l-1.97,0.98l-0.97,0.87l-1.04,-1.54l-2.0,-0.01l-0.88,-1.94l-0.71,-0.42l-0.85,0.24l-1.13,1.33l-1.18,0.61l-1.0,1.75l-1.36,0.8l-1.22,4.29l-2.27,3.01l-0.64,1.37l-0.01,1.37l2.24,3.09l-0.09,0.72l-2.24,1.45l-0.28,0.71l0.24,1.15l-0.3,0.22l-2.34,0.29l-2.31,-0.22l-0.58,-0.96l-2.01,-1.76l-2.23,-1.06l0.99,-0.99l0.21,-0.84l0.02,-1.59l-0.72,-3.35l-0.74,-0.8l-1.66,0.26l-0.06,-0.71l0.87,-1.58l1.42,-0.93l0.21,-0.5l-0.44,-2.8l0.57,-0.64l0.28,-0.94l0.23,-3.74l-1.23,-2.15l-1.96,-0.77l-2.06,-2.64l-2.29,-0.45l-3.08,1.08l-0.91,0.51l-0.3,1.12l-0.39,0.32l-1.26,-0.82l-4.24,-0.18l-1.47,-1.27l-3.01,-0.45l-0.87,-1.21l-1.35,-0.51l-2.56,0.37l-1.33,0.62l-0.81,1.12l-1.3,0.27l-1.56,-0.84l-0.34,-0.77l-1.28,-0.55l-0.99,-2.79l-2.09,-1.54l-2.16,0.04l-2.92,-1.29l-1.56,0.02l-1.1,-0.35l-1.07,0.25l-0.61,0.57l-1.9,-0.74l-1.36,-1.66l-1.24,-0.52l-0.54,0.27l-0.23,0.9l0.26,1.04l1.09,2.59l1.15,1.04l-0.25,0.64l-1.24,0.79l-0.61,0.83l-0.91,2.35l-0.06,2.8l-2.01,0.66l-0.77,0.68l-1.2,2.21l0.22,2.5l-0.2,0.74l-3.33,-0.06l-0.9,-0.6l-0.87,-1.24l-2.11,-0.28l-1.27,0.34l-0.99,0.93l0.11,0.69l0.53,0.26l-1.01,1.36l-0.7,2.23l0.12,1.03l-2.39,2.03l-0.22,0.63l0.57,2.11l1.03,0.18l0.28,0.94l0.86,0.22l0.16,1.21l2.03,1.81l-2.16,0.84l-1.71,3.25l-1.27,-0.02l-0.95,0.63l-0.33,0.77l0.19,1.51l-0.52,1.27l-2.57,0.53l-1.5,1.72l-0.5,2.61l-1.3,1.55l1.51,1.29l0.1,0.66l-1.31,-0.1l-1.69,1.02l-0.3,-1.06l-2.38,-1.06l-0.11,-2.21l-0.63,-0.91l-1.3,-0.5l-1.15,0.41l-1.16,1.82l-0.03,2.41l-1.43,0.66l-1.86,1.41l-0.68,0.82l-0.31,1.03l-1.26,0.02l-1.02,0.42l-1.68,-0.05l-1.83,0.93l-0.27,0.64l0.14,1.57l-0.48,2.32l0.04,2.02l-0.55,1.47l-0.5,0.44l-3.0,-0.44l-0.32,0.42l0.47,2.13l-1.5,1.02l-0.86,2.44l-2.06,-1.89l-2.52,-0.23l-0.88,1.08l-0.94,0.5l-0.2,1.02l-1.14,0.56l-0.95,1.3l-2.46,0.92l-0.17,0.5l0.77,1.23l0.09,1.48l-0.71,1.34l1.01,2.17l0.92,0.74l-0.6,0.51l-2.45,-0.08l-1.78,-0.99l-1.68,0.57l-1.38,-0.34l-2.26,1.05l-0.94,-0.14l-2.15,0.79l-0.87,-0.67l-0.28,-1.22l-0.68,-0.84l-0.88,0.28l-0.74,-0.28l-1.46,1.22l-0.85,-1.16l-1.9,-0.32l-0.65,-1.35l-0.88,-0.45l-0.63,0.12l-2.43,3.16l0.98,3.28l0.92,0.73l0.24,0.71l-0.5,2.6l1.28,2.16l-0.74,1.05l0.55,1.29l-0.2,0.88l-2.2,-1.25l-1.22,1.13l-1.28,0.53l-1.19,-0.68l-1.83,-0.01l-1.52,0.68l-2.02,0.12l-0.77,0.53l-0.02,1.43l-2.01,0.92l-1.23,-0.4l-1.49,-1.22l-0.67,-1.03l-1.68,0.2l-1.2,-0.27l-1.49,2.14l-2.45,1.04l0.56,3.05l-1.89,-0.24l-1.82,0.86l-0.57,0.65l-1.08,0.31l-0.5,1.26l-0.78,0.59l-0.04,0.6l0.64,0.85l-1.22,0.28l-1.77,1.34l-0.89,-2.23l-2.91,-0.76l-0.53,0.3l-0.53,1.56l-1.66,1.42l-0.93,-0.68l-0.61,0.31l-0.37,0.87l-0.8,-0.53l-0.65,0.1l-0.76,2.26l0.62,0.38l0.81,-0.38l0.26,0.87l1.12,0.26l0.23,0.93l0.78,0.55l-0.95,0.16l-0.48,0.69l0.62,2.98l0.63,0.32l0.91,-0.41l2.9,1.47l0.22,0.97l-0.19,2.82l-1.77,0.32l-0.86,0.93l0.13,0.7l1.32,0.54l0.03,0.51l-0.3,1.18l-2.16,3.44l0.6,1.18l-1.19,2.09l-1.32,0.88l-1.54,0.11l-0.16,-1.09l-1.05,-0.25l-2.28,1.88l-0.4,0.99l-0.63,0.47l0.15,0.72l-0.91,0.04l-2.08,0.78l-1.43,-0.79l-1.0,-2.75l-1.76,-0.62l-0.53,-1.11l-0.79,0.21l-0.89,1.14l-1.83,0.13l-0.71,0.34l-1.25,-0.26l0.03,-1.62l-1.31,-2.88l-3.48,-3.53l0.79,-0.83l-0.41,-0.4l-0.8,-0.07l-0.82,-0.82l0.33,-0.64l0.06,-2.16l0.71,-0.87l-0.01,-0.47l-0.44,-0.14l-0.95,0.42l-0.17,-1.06l-0.71,-0.29l-1.12,-4.25l-0.51,-0.32l0.58,-0.47l-0.03,-0.73l-1.12,-0.76l-0.68,-2.42l-0.45,-0.54l1.06,0.74l0.82,0.06l0.41,-0.32l-0.74,-0.71l0.5,-0.8l-1.26,-0.43l-0.4,-0.57l0.51,-0.22l0.18,0.36l0.66,0.09l0.32,-0.64l-0.15,-0.76l-0.57,-0.46l-0.98,0.18l0.18,-1.71l-0.97,-1.49l0.42,-2.29l-0.5,-0.3l-0.41,-0.93l-0.12,-0.62l0.28,-0.53l-0.31,-1.31l0.56,-1.5l-0.17,-0.55l-0.76,-0.39l0.59,-1.37l-0.03,-0.91l-0.58,-1.34l0.09,-1.05l-1.37,-3.59l0.76,-0.16l0.19,-0.63l-1.62,-2.66l-0.76,-0.65l-0.09,-0.38l0.56,-0.85l-0.28,-0.75l0.12,-0.77l-1.59,-2.24l2.03,-0.65l-0.02,-0.73l-1.83,-0.43l-0.38,-0.57l0.05,-1.09l-0.52,-0.83l0.53,-1.46l-0.55,-1.76l-0.81,-1.2l-0.45,-1.72l-1.42,-2.31l0.42,-0.88l-0.28,-0.67l-0.53,-0.26l0.98,-0.85l0.18,-0.85l-0.51,-0.41l-0.94,0.54l-0.34,-0.37l-0.61,-4.09l-0.38,-0.69l-0.67,-0.29l0.19,-0.69l0.62,0.73l1.75,0.17l0.54,0.38l-0.31,0.81l0.58,0.48l0.45,-0.14l0.51,-0.78l-0.02,-2.09l-0.62,-0.75l-1.94,-0.11l-0.55,-0.53l0.14,-0.36l-0.36,-0.54l-1.6,-0.94l-0.01,-1.02l-0.62,-1.29l0.45,-2.33l0.71,-0.18l1.81,2.51l0.68,-0.15l0.19,-0.62l-0.86,-1.02l-0.88,-2.03l-0.71,-0.34l-0.82,0.14l-1.64,-3.67l-0.09,-2.7l0.29,-0.7l1.18,0.09l0.55,-0.62l0.88,0.95l0.04,1.25l0.91,0.59l0.53,-0.48l-0.1,-1.31l0.64,-0.91l-0.12,-0.67l-0.88,-0.45l-0.18,-1.43l-0.6,-0.05l-0.65,0.44l-1.04,-0.76l0.14,-0.26l0.68,-0.01l0.31,-1.08l1.2,-0.1l0.34,-0.51l-0.2,-0.37l2.02,-0.66l0.31,-0.64l-0.31,-0.57l-0.52,-0.07l-1.35,0.42l0.13,-1.87l-0.65,-0.58l0.22,-2.19l-0.4,-0.44l-0.59,0.23l-1.02,1.69l-0.22,1.38l0.37,0.69l-0.13,0.31l-0.7,0.72l-0.08,-0.33l-0.66,-0.2l-0.49,0.46l-1.25,2.43l-0.6,-0.82l0.51,-1.73l0.36,-0.09l0.25,-0.76l-0.32,-0.73l0.29,-1.17l-0.39,-1.12l0.4,-0.71l-0.24,-0.49l-0.7,-0.1l1.07,-1.85l-0.27,-0.66l-0.46,-0.04l-0.91,0.92l0.19,-2.07l2.08,-0.09l0.63,0.65l1.46,0.32l1.18,-0.24l1.53,2.69l0.5,0.1l0.71,-0.39l-0.01,-0.7l-0.42,-0.22l-0.17,-1.08l-1.36,-1.37l-2.73,-0.21l-1.89,-1.29l-1.07,0.49l-1.01,-1.35l-0.33,-2.78l3.69,-1.53l0.25,-0.37l-0.25,-0.37l-0.94,-0.31l-1.71,0.45l-0.95,-1.4l-1.01,-0.32l-0.28,0.39l0.16,-0.89l-0.58,-2.49l0.85,-0.61l-0.33,-1.12l0.55,-0.55l-0.18,-1.26l-0.69,-0.14l-0.89,1.09Z", "name": "Maharashtra"}, "IN-KL": {"path": "M207.32,745.98l1.92,-0.19l0.39,1.27l1.23,0.49l0.41,0.89l0.63,0.19l0.89,-0.52l0.47,0.08l0.64,0.37l-0.1,0.79l0.5,0.89l0.57,0.23l0.78,-0.21l0.85,1.04l0.65,0.11l0.96,-0.48l0.95,0.25l-0.62,1.55l0.94,1.35l1.25,1.27l1.53,-0.21l-0.72,0.78l-0.15,1.13l0.93,1.53l0.64,2.08l1.3,0.28l3.32,3.77l2.15,1.07l0.78,1.07l1.13,0.04l1.41,0.84l1.39,0.08l0.46,1.8l1.32,1.45l1.59,0.7l3.14,0.56l3.3,-1.08l0.01,2.3l0.65,0.82l2.2,-0.0l1.26,1.62l1.5,0.11l1.64,1.8l1.14,0.25l1.17,-0.18l0.27,1.6l0.54,0.81l-1.2,0.5l-1.02,1.21l-0.98,0.1l-1.84,-0.51l-0.38,0.17l-0.33,0.69l-0.03,2.0l0.9,1.74l4.83,1.38l1.12,0.9l1.17,0.45l1.49,1.54l-2.87,2.82l-0.17,0.89l0.34,0.48l0.86,0.17l0.99,-0.3l1.57,0.46l3.34,-0.37l0.94,-0.61l-0.36,1.61l0.94,1.09l0.8,2.1l0.59,0.57l-1.64,-0.24l-0.64,0.35l-0.59,1.61l0.2,1.28l0.98,1.23l3.74,1.55l0.74,1.63l1.03,0.92l-0.41,2.95l-1.35,0.7l-0.35,0.83l0.17,2.6l-0.55,3.61l0.93,2.08l0.11,1.93l2.58,2.4l1.39,0.59l1.1,-0.31l2.7,-2.22l3.3,-1.4l1.27,1.82l0.4,1.65l0.73,0.77l-1.69,4.21l1.1,3.48l-1.02,2.47l0.32,2.94l-1.56,5.71l0.29,0.53l1.83,1.05l2.88,-0.69l1.58,2.31l0.11,0.81l-1.01,1.01l-0.96,2.65l-0.84,1.39l-2.5,7.28l-1.99,1.95l1.13,3.67l1.53,1.25l-0.52,1.84l-1.71,2.58l0.21,2.15l0.35,0.76l1.72,1.46l0.73,1.15l-0.92,1.3l-0.26,0.16l-0.49,-0.36l-0.56,0.34l0.28,1.93l-1.34,2.06l-0.32,1.41l-1.22,0.16l-3.21,-2.34l-3.51,-4.66l-1.64,-1.53l-0.43,-1.0l-3.63,-4.29l-1.58,-2.45l-2.39,-2.02l1.57,-0.71l0.15,-0.44l-0.37,-0.28l-1.08,0.1l0.47,-0.7l1.68,0.13l0.44,-0.23l-0.2,-0.71l0.54,-0.49l-0.28,-0.62l-0.95,-0.03l-0.85,0.6l-1.25,-0.25l-1.31,0.82l-1.58,-3.84l0.32,-0.33l0.19,-1.64l-0.19,-0.41l-0.65,0.2l-0.86,-2.3l-0.74,-0.28l-0.21,0.22l-1.05,-2.39l-1.56,-5.16l-1.24,-10.4l0.63,-0.17l0.66,4.3l0.62,0.34l0.41,-0.52l0.65,0.91l-0.63,1.46l-0.6,2.77l0.13,0.65l0.86,0.47l2.79,0.53l0.73,-0.32l0.81,-0.97l-0.14,-0.62l-1.15,-0.68l-1.47,-0.14l0.28,-0.66l-0.17,-2.85l-0.66,-1.06l-0.37,-2.02l0.45,-1.0l-0.04,-0.85l-1.08,-2.32l-1.52,-1.72l-0.77,0.08l-0.45,-1.39l0.12,-0.52l-0.61,-0.7l-0.27,-1.52l-1.31,-1.45l-0.38,0.26l-0.25,0.92l0.66,1.82l-0.66,-1.68l-0.14,-1.7l1.71,-1.2l0.21,-1.28l-0.71,-0.22l-0.54,-0.77l-0.8,-0.12l0.31,1.86l-0.42,0.47l-0.54,-0.68l-1.44,-5.09l-1.12,-1.55l-0.55,-2.53l-1.35,-1.65l-0.27,-1.2l-2.36,-4.94l0.51,-0.56l-0.14,-0.64l-0.79,-0.34l-0.43,-1.07l-1.9,-7.73l-3.14,-7.29l0.34,-0.6l-0.24,-0.72l-0.61,-0.15l-1.63,-2.78l-1.62,-0.56l-2.42,-6.52l-0.81,-1.13l-3.92,-4.33l-0.84,-0.02l-1.08,-1.51l2.17,0.47l0.48,-0.39l-0.52,-0.81l0.19,-1.18l-0.45,-0.08l-1.02,0.74l-0.61,0.02l-1.17,-1.08l1.13,-0.11l0.25,-0.56l-0.73,-0.93l0.1,-1.21l0.73,-0.02l1.61,-0.9l0.41,-0.84l-0.76,-0.53l-0.97,0.34l-0.9,-0.22l-1.68,1.27l-0.82,-0.2l-0.83,0.31l-0.37,2.56l-1.86,-5.57l0.26,-1.27l-0.48,-0.39l-0.64,0.24l-0.68,-1.84l-3.92,-7.22l-2.86,-6.72ZM250.45,836.37l-0.0,-0.01l0.01,-0.0l-0.0,0.02ZM249.88,834.43l-0.08,-0.57l-0.05,-0.2l0.67,0.8l-0.54,-0.03Z", "name": "Kerala"}}, "height": 932.9661457393942, "projection": {"type": "mill", "centralMeridian": 0.0}, "width": 900.0});
$.fn.vectorMap('addMap', 'us_aea_en',{"insets": [{"width": 220, "top": 440, "height": 146.9158157558812, "bbox": [{"y": -8441281.712315228, "x": -5263934.893342895}, {"y": -6227992.545028123, "x": -1949631.2950683108}], "left": 0}, {"width": 80, "top": 460, "height": 129.05725678001465, "bbox": [{"y": -4207380.690946597, "x": -5958501.652314129}, {"y": -3658201.4570359783, "x": -5618076.48127754}], "left": 245}, {"width": 900.0, "top": 0, "height": 550.2150229714246, "bbox": [{"y": -5490839.2352678, "x": -2029243.6460439637}, {"y": -2690044.485299302, "x": 2552083.9617675776}], "left": 0}], "paths": {"US-VA": {"path": "M682.42,290.04l1.61,-0.93l1.65,-0.48l1.12,-0.95l3.57,-1.69l0.74,-2.33l0.82,-0.19l2.32,-1.54l0.05,-1.81l2.04,-1.86l-0.13,-1.58l0.26,-0.42l5.0,-4.09l4.76,-6.0l0.09,0.63l0.96,0.54l0.33,1.37l1.32,0.74l0.71,0.81l1.46,0.09l0.79,0.65l1.3,0.48l1.41,-0.09l0.79,-0.41l0.76,-1.22l1.17,-0.57l0.53,-1.38l2.72,1.49l1.42,-1.1l2.25,-0.99l0.76,0.06l1.08,-0.97l0.33,-0.82l-0.48,-0.96l0.23,-0.42l1.9,0.58l3.26,-2.62l0.3,-0.1l0.51,0.73l0.66,-0.07l2.38,-2.34l0.17,-0.85l-0.49,-0.51l0.99,-1.12l0.1,-0.6l-0.28,-0.51l-1.0,-0.46l0.71,-3.03l2.6,-4.8l0.55,-2.15l-0.01,-1.91l1.61,-2.55l-0.22,-0.94l0.24,-0.84l0.5,-0.48l0.39,-1.7l-0.0,-3.18l1.23,0.19l1.18,1.73l3.8,0.43l0.59,-0.28l1.05,-2.52l0.2,-2.36l0.71,-1.05l-0.04,-1.61l0.76,-2.31l1.78,0.75l0.65,-0.17l1.3,-3.3l0.57,0.05l0.59,-0.39l0.52,-1.2l0.81,-0.68l0.44,-1.8l1.38,-2.43l-0.35,-2.57l0.54,-1.76l-0.3,-2.01l9.18,4.58l0.59,-0.29l0.63,-4.0l2.6,-0.07l0.63,0.57l1.05,0.23l-0.5,1.74l0.6,0.88l1.61,0.85l2.52,-0.04l1.03,1.18l1.64,0.12l1.94,1.52l0.57,2.53l-0.94,0.78l-0.45,0.02l-0.3,0.43l0.13,0.71l-0.61,-0.05l-0.49,0.59l-0.37,2.5l0.07,2.29l-0.43,0.25l0.01,0.6l1.05,0.77l-0.36,0.14l-0.17,0.6l0.44,0.3l1.64,-0.08l1.38,-0.61l1.77,-1.61l0.39,0.58l-0.58,0.35l0.02,0.58l1.9,1.07l0.64,1.08l1.69,0.35l1.37,-0.11l0.95,0.49l0.82,-0.65l1.05,-0.08l0.33,0.56l1.26,0.63l-0.1,0.55l0.36,0.55l0.94,-0.23l0.41,0.56l3.96,0.88l0.25,1.12l-0.85,-0.41l-0.57,0.44l0.89,1.74l-0.35,0.57l0.62,0.78l-0.44,0.89l0.24,0.59l-1.36,-0.36l-0.59,-0.72l-0.67,0.18l-0.1,0.43l-2.44,-2.3l-0.56,0.05l-0.38,-0.56l-0.52,0.32l-1.36,-1.51l-1.23,-0.43l-2.86,-2.72l-1.34,-0.12l-1.11,-0.81l-1.17,0.05l-0.39,0.52l0.47,0.71l1.1,-0.01l0.63,0.68l1.33,0.07l0.6,0.43l0.62,1.4l1.46,1.11l1.13,0.34l1.53,1.8l2.55,0.94l1.4,1.89l2.14,-0.02l0.56,0.41l0.72,0.06l-0.61,0.7l0.3,0.49l2.03,0.34l0.26,0.72l0.55,0.1l0.13,1.67l-1.0,-0.75l-0.39,0.21l-1.13,-1.0l-0.58,0.29l0.1,0.82l-0.31,0.68l0.7,0.7l-0.18,0.6l1.12,0.32l-0.86,0.44l-2.12,-0.73l-1.39,-1.38l-0.83,-0.32l-2.23,-1.87l-0.58,0.11l-0.22,0.53l0.26,0.81l0.64,0.21l3.81,3.15l2.69,1.12l1.28,-0.33l0.45,1.07l1.27,0.26l-0.44,0.67l0.3,0.56l0.93,-0.19l0.0,1.24l-0.92,0.41l-0.57,0.73l-0.71,-0.93l-3.2,-1.58l-0.29,-1.16l-0.59,-0.59l-0.87,-0.11l-1.2,0.67l-1.71,-0.44l-0.36,-1.15l-0.71,-0.05l-0.05,1.32l-0.33,0.41l-1.43,-1.32l-0.51,0.09l-0.48,0.57l-0.65,-0.4l-0.99,0.45l-2.23,-0.1l-0.37,0.94l0.34,0.46l1.9,0.22l1.4,-0.31l0.85,0.24l0.56,-0.69l0.63,0.88l1.34,0.43l1.95,-0.31l1.5,0.71l0.67,-0.63l0.94,2.47l3.16,1.23l0.37,0.91l-0.57,1.03l0.56,0.44l1.72,-1.32l0.88,-0.02l0.83,0.65l0.8,-0.26l-0.61,-0.9l-0.2,-1.17l3.78,0.08l1.13,-0.44l1.89,3.23l-0.46,0.71l0.65,3.09l-1.19,-0.58l-0.02,0.88l-30.95,7.83l-37.19,8.41l-19.52,3.35l-7.08,0.85l-0.46,-0.26l-4.24,0.64l-0.82,0.62l-28.2,5.01ZM781.15,223.32l0.14,0.09l-0.06,0.07l-0.01,-0.03l-0.07,-0.12ZM808.05,244.59l0.53,-1.14l-0.26,-0.54l-0.36,-0.08l0.58,-0.98l-0.39,-0.71l-0.03,-0.49l0.44,-0.35l-0.17,-0.73l0.62,-0.3l0.23,-0.6l0.14,-2.33l1.01,-0.39l-0.12,-0.9l0.48,-0.14l-0.26,-1.53l-0.79,-0.4l0.87,-0.57l0.1,-1.03l2.69,-1.11l0.36,2.48l-1.08,4.2l-0.22,2.38l0.33,1.09l-0.34,0.97l-0.6,-0.79l-0.81,0.15l-0.39,0.95l0.27,0.37l-0.65,0.46l-0.3,0.85l0.17,1.05l-0.31,1.46l0.38,2.47l-0.6,0.6l0.07,1.33l-1.37,-1.9l0.23,-0.94l-0.33,-1.57l0.28,-0.97l-0.38,-0.3Z", "name": "Virginia"}, "US-PA": {"path": "M716.46,159.99l0.63,-0.19l4.3,-3.73l1.13,5.2l0.48,0.31l34.84,-7.93l34.28,-8.64l1.42,0.58l0.71,1.39l0.64,0.13l0.77,-0.33l1.24,0.59l0.14,0.85l0.81,0.41l-0.16,0.58l0.89,2.69l1.9,2.07l2.12,0.75l2.21,-0.2l0.72,0.79l-0.89,0.87l-0.73,1.49l-0.17,2.25l-1.41,3.35l-1.37,1.58l0.04,0.79l1.79,1.72l-0.31,1.65l-0.84,0.43l-0.22,0.66l0.14,1.48l1.04,2.87l0.52,0.25l1.2,-0.18l1.18,2.39l0.95,0.58l0.66,-0.26l0.6,0.9l4.23,2.75l0.12,0.41l-1.29,0.93l-3.71,4.22l-0.23,0.76l0.17,0.9l-1.36,1.13l-0.84,0.15l-1.33,1.08l-0.33,0.66l-1.72,-0.12l-2.03,0.84l-1.15,1.37l-0.41,1.39l-37.23,9.21l-39.1,8.66l-10.03,-48.21l1.92,-1.22l3.08,-3.04Z", "name": "Pennsylvania"}, "US-TN": {"path": "M571.72,341.09l0.86,-0.84l0.29,-1.37l1.0,0.04l0.65,-0.79l-0.99,-4.89l1.41,-1.93l0.06,-1.32l1.18,-0.46l0.36,-0.48l-0.63,-1.31l0.53,-0.65l0.05,-0.56l-0.89,-1.33l2.55,-1.57l1.09,-1.13l-0.14,-0.84l-0.85,-0.53l0.14,-0.19l0.34,-0.16l0.85,0.37l0.46,-0.33l-0.27,-1.31l-0.85,-0.9l0.06,-0.71l0.51,-1.43l1.0,-1.11l-1.35,-2.06l1.37,-0.21l0.61,-0.55l-0.13,-0.64l-1.17,-0.82l0.82,-0.15l0.58,-0.54l0.13,-0.69l-0.59,-1.38l0.02,-0.36l0.37,0.53l0.47,0.08l0.58,-0.29l0.6,-0.86l23.67,-2.81l0.35,-0.41l-0.1,-1.35l-0.84,-2.39l2.98,-0.08l0.82,0.58l22.79,-3.55l7.64,-0.46l7.5,-0.86l8.82,-1.42l24.01,-3.1l1.11,-0.6l29.3,-5.2l0.73,-0.6l3.56,-0.54l-0.4,1.44l0.43,0.85l-0.4,2.0l0.36,0.82l-1.15,-0.03l-1.71,1.79l-1.21,3.89l-0.55,0.7l-0.56,0.08l-0.63,-0.74l-1.44,-0.02l-2.66,1.73l-1.42,2.73l-0.96,0.89l-0.34,-0.34l-0.13,-1.05l-0.73,-0.54l-0.53,0.15l-2.3,1.81l-0.29,1.32l-0.93,-0.24l-0.9,0.48l-0.16,0.77l0.32,0.73l-0.85,2.18l-1.29,0.06l-1.75,1.14l-1.28,1.24l-0.61,1.06l-0.78,0.27l-2.28,2.46l-4.04,0.78l-2.58,1.7l-0.49,1.09l-0.88,0.55l-0.55,0.81l-0.18,2.88l-0.35,0.6l-1.65,0.52l-0.89,-0.16l-1.06,1.14l0.21,5.24l-20.21,3.32l-21.62,3.04l-25.56,2.95l-0.34,0.31l-7.39,0.9l-28.73,3.17Z", "name": "Tennessee"}, "US-ID": {"path": "M132.38,121.39l-0.34,-0.44l0.08,-1.99l0.53,-1.74l1.42,-1.22l2.11,-3.59l1.68,-0.92l1.39,-1.53l1.08,-2.15l0.05,-1.22l2.21,-2.41l1.43,-2.7l0.37,-1.37l2.04,-2.26l1.89,-2.81l0.03,-1.01l-0.79,-2.95l-2.13,-1.94l-0.87,-0.36l-0.85,-1.61l-0.41,-3.02l-0.59,-1.19l0.94,-1.19l-0.12,-2.35l-1.04,-2.69l0.46,-0.98l9.67,-54.45l13.39,2.35l-3.54,20.72l1.29,2.89l1.0,1.27l0.27,1.55l1.17,1.76l-0.12,0.83l0.39,1.14l-0.99,0.95l0.83,1.76l-0.83,0.11l-0.28,0.71l1.93,1.68l1.03,2.04l2.24,1.22l0.54,1.58l1.09,1.33l1.49,2.79l0.08,0.68l1.64,1.81l0.01,1.88l1.79,1.71l-0.07,1.35l0.74,0.19l0.9,-0.58l0.36,0.46l-0.36,0.55l0.07,0.54l1.11,0.96l1.61,0.15l1.81,-0.36l-0.63,2.61l-0.99,0.54l0.25,1.14l-1.83,3.73l0.06,1.72l-0.81,0.07l-0.37,0.54l0.6,1.33l-0.62,0.9l-0.03,1.16l0.97,0.93l-0.37,0.81l0.28,1.01l-1.57,0.43l-1.21,1.41l0.1,1.11l0.46,0.77l-0.13,0.74l-0.83,0.77l-0.2,1.52l1.48,0.63l1.38,1.79l0.78,0.27l1.08,-0.35l0.56,-0.8l1.85,-0.41l1.21,-1.28l0.81,-0.29l0.15,-0.76l0.78,0.81l0.23,0.71l1.06,0.64l-0.42,1.23l0.73,0.95l-0.34,1.38l0.57,1.34l-0.21,1.61l1.54,2.64l0.31,1.73l0.82,0.37l0.67,2.08l-0.18,0.98l-0.76,0.64l0.51,1.9l1.24,1.16l0.3,0.79l0.81,0.08l0.86,-0.37l1.04,0.93l1.06,2.79l-0.5,0.81l0.89,1.83l-0.28,0.6l0.11,0.98l2.29,2.41l0.97,-0.14l-0.01,-1.14l1.07,-0.89l0.93,-0.22l4.53,1.62l0.69,-0.32l0.67,-1.35l1.19,-0.39l2.25,0.93l3.3,-0.1l0.96,0.88l2.29,-0.58l3.23,0.78l0.45,-0.49l-0.67,-0.76l0.26,-1.06l0.74,-0.48l-0.07,-0.96l1.23,-0.51l0.48,0.37l1.07,2.11l0.12,1.11l1.36,1.95l0.73,0.45l-6.27,53.86l-47.48,-6.32l-46.97,-7.73l6.88,-39.17l1.12,-1.18l1.07,-2.67l-0.21,-1.75l0.74,-0.15l0.77,-1.62l-0.9,-1.27l-0.18,-1.2l-1.24,-0.08l-0.64,-0.81l-0.88,0.29Z", "name": "Idaho"}, "US-NV": {"path": "M139.36,329.2l-12.7,-16.93l-36.59,-51.1l-25.35,-34.52l13.7,-64.19l46.89,9.24l46.99,7.74l-18.72,125.83l-0.9,1.16l-0.99,2.19l-0.44,0.17l-1.34,-0.22l-0.98,-2.24l-0.7,-0.63l-1.41,0.22l-1.95,-1.02l-1.6,0.23l-1.78,0.96l-0.76,2.48l0.88,2.59l-0.6,0.97l-0.24,1.31l0.38,3.12l-0.76,2.54l0.77,3.71l-0.13,3.07l-0.3,1.07l-1.04,0.31l-0.12,0.51l0.32,0.8l-0.52,0.62Z", "name": "Nevada"}, "US-TX": {"path": "M276.16,412.59l33.07,1.99l32.79,1.35l0.41,-0.39l3.6,-98.71l25.86,0.61l26.29,0.22l0.05,42.09l0.44,0.4l1.02,-0.13l0.78,0.28l3.74,3.82l1.66,0.21l0.88,-0.58l2.49,0.64l0.6,-0.68l0.11,-1.05l0.6,0.76l0.92,0.22l0.38,0.93l0.77,0.78l-0.01,1.64l0.52,0.83l2.85,0.42l1.25,-0.2l1.38,0.89l2.78,0.69l1.82,-0.56l0.63,0.1l1.89,1.8l1.4,-0.11l1.25,-1.43l2.43,0.26l1.67,-0.46l0.1,2.28l0.91,0.67l1.62,0.4l-0.04,2.09l1.56,0.79l1.82,-0.66l1.57,-1.68l1.02,-0.65l0.41,0.19l0.45,1.64l2.01,0.2l0.24,1.05l0.72,0.48l1.47,-0.21l0.88,-0.93l0.39,0.33l0.59,-0.08l0.61,-0.99l0.26,0.41l-0.45,1.23l0.14,0.76l0.67,1.14l0.78,0.42l0.57,-0.04l0.6,-0.5l0.68,-2.36l0.91,-0.65l0.35,-1.54l0.57,-0.14l0.4,0.14l0.29,0.99l0.57,0.64l1.21,0.02l0.83,0.5l1.26,-0.2l0.68,-1.34l0.48,0.15l-0.13,0.7l0.49,0.69l1.21,0.45l0.49,0.72l1.52,-0.05l1.49,1.74l0.52,0.02l0.63,-0.62l0.08,-0.71l1.49,-0.1l0.93,-1.43l1.88,-0.41l1.66,-1.13l1.52,0.83l1.51,-0.22l0.29,-0.83l2.29,-0.73l0.53,-0.55l0.5,0.32l0.38,0.88l1.82,0.42l1.69,-0.06l1.86,-1.14l0.41,-1.05l1.06,0.31l2.24,1.56l1.16,0.17l1.79,2.08l2.14,0.41l1.04,0.92l0.76,-0.11l2.48,0.85l1.04,0.04l0.37,0.79l1.38,0.97l1.45,-0.12l0.39,-0.72l0.8,0.36l0.88,-0.4l0.92,0.35l0.76,-0.15l0.64,0.36l2.23,34.03l1.51,1.67l1.3,0.82l1.25,1.87l0.57,1.63l-0.1,2.64l1.0,1.21l0.85,0.4l-0.12,0.85l0.75,0.54l0.28,0.87l0.65,0.7l-0.19,1.17l1.0,1.02l0.59,1.63l0.5,0.34l0.55,-0.1l-0.16,1.71l0.81,1.22l-0.64,0.25l-0.35,0.68l0.77,1.27l-0.55,0.89l0.19,1.39l-0.75,2.69l-0.74,0.85l-0.36,1.54l-0.79,1.13l0.64,2.0l-0.83,2.28l0.17,1.07l0.83,1.2l-0.19,1.01l0.49,1.6l-0.24,1.41l-1.13,1.67l-1.02,0.2l-1.76,3.37l-0.04,1.06l1.79,2.37l-3.43,0.08l-7.37,3.78l-0.02,-0.43l-2.19,-0.46l-3.24,1.07l1.09,-3.51l-0.3,-1.21l-0.8,-0.76l-0.62,-0.07l-1.52,0.85l-0.99,2.0l-1.56,-0.96l-1.64,0.12l-0.07,0.63l0.89,0.62l0.0,1.06l0.56,0.39l-0.47,0.69l0.07,1.02l1.63,0.64l-0.62,0.71l0.49,0.97l0.91,0.23l0.28,0.37l-0.4,1.25l-0.45,-0.12l-0.97,0.81l-1.72,2.25l-1.18,-0.4l-0.49,0.12l0.32,1.0l0.08,2.55l-1.85,1.49l-1.91,2.11l-0.96,0.37l-4.1,2.9l-3.3,0.45l-2.54,1.06l-0.2,1.12l-0.75,-0.34l-2.04,0.89l-0.33,-0.34l-1.11,0.18l0.43,-0.87l-0.52,-0.6l-1.43,0.22l-1.22,1.08l-0.6,-0.62l-0.11,-1.2l-1.38,-0.81l-0.5,0.44l0.65,1.44l0.01,1.12l-0.71,0.09l-0.54,-0.44l-0.75,-0.0l-0.55,-1.34l-1.46,-0.37l-0.58,0.39l0.04,0.54l0.94,1.7l0.03,1.24l0.58,0.37l0.36,-0.16l1.13,0.78l-0.75,0.37l-0.27,0.54l0.15,0.36l0.7,0.23l1.08,-0.54l0.96,0.6l-4.27,2.42l-0.57,-0.13l-0.37,-1.44l-0.5,-0.18l-1.13,-1.46l-0.49,-0.03l-0.48,0.51l0.1,0.63l-0.62,0.34l-0.05,0.51l1.18,1.61l-0.31,1.04l0.33,0.85l-1.66,1.79l-0.37,0.2l0.37,-0.64l-0.18,-0.72l0.25,-0.73l-0.46,-0.67l-0.52,0.17l-0.71,1.1l0.26,0.72l-0.39,0.95l-0.07,-1.13l-0.52,-0.55l-1.95,1.29l-0.78,-0.33l-0.7,0.52l0.07,0.75l-0.81,0.99l0.02,0.49l1.25,0.64l0.03,0.56l0.78,0.28l0.7,-1.41l0.86,-0.41l0.01,0.62l-2.82,4.36l-1.23,-1.0l-1.36,0.38l-0.32,-0.34l-2.4,0.39l-0.46,-0.31l-0.65,0.16l-0.18,0.58l0.41,0.61l0.55,0.38l1.53,0.03l-0.01,0.91l0.55,0.64l2.07,1.03l-2.7,7.63l-0.2,0.1l-0.38,-0.54l-0.34,0.1l0.18,-0.76l-0.57,-0.43l-2.35,1.95l-1.72,-2.36l-1.19,-0.91l-0.61,0.4l0.09,0.52l1.44,2.0l-0.11,0.82l-0.93,-0.09l-0.33,0.63l0.51,0.56l1.88,0.07l2.14,0.72l2.08,-0.72l-0.43,1.75l0.24,0.77l-0.98,0.7l0.37,1.59l-1.12,0.14l-0.43,0.41l0.4,2.11l-0.33,1.6l0.45,0.64l0.84,0.24l0.87,2.86l0.71,2.81l-0.91,0.82l0.62,0.49l-0.08,1.28l0.72,0.3l0.18,0.61l0.58,0.29l0.4,1.79l0.68,0.31l0.45,3.22l1.46,0.62l-0.52,1.1l0.31,1.07l-0.63,0.77l-0.84,-0.05l-0.53,0.44l0.08,1.31l-0.49,-0.33l-0.49,0.25l-0.39,-0.67l-1.49,-0.45l-2.92,-2.53l-2.2,-0.18l-0.81,-0.51l-4.2,0.09l-0.9,0.42l-0.78,-0.63l-1.06,0.25l-1.25,-0.2l-1.45,-0.7l-0.72,-0.97l-0.6,-0.14l-0.21,-0.72l-1.17,-0.49l-0.99,-0.02l-1.98,-0.87l-1.45,0.39l-0.83,-1.09l-0.6,-0.21l-1.43,-1.38l-1.96,0.01l-1.47,-0.64l-0.86,0.12l-1.62,-0.41l0.28,-1.26l-0.54,-1.01l-0.96,-0.35l-1.65,-6.03l-2.77,-3.02l-0.29,-1.12l-1.08,-0.75l0.35,-0.77l-0.24,-0.76l0.34,-2.18l-0.45,-0.96l-1.04,-1.01l0.65,-1.99l0.05,-1.19l-0.18,-0.7l-0.54,-0.33l-0.15,-1.81l-1.85,-1.44l-0.85,0.21l-0.29,-0.41l-0.81,-0.11l-0.74,-1.31l-2.22,-1.71l0.01,-0.69l-0.51,-0.58l0.12,-0.86l-0.97,-0.92l-0.08,-0.75l-1.12,-0.61l-1.3,-2.88l-2.66,-1.48l-0.38,-0.91l-1.13,-0.59l-0.06,-1.16l-0.82,-1.19l-0.59,-1.95l0.41,-0.22l-0.04,-0.73l-1.03,-0.49l-0.26,-1.29l-0.81,-0.57l-0.94,-1.74l-0.61,-2.38l-1.85,-2.36l-0.87,-4.24l-1.81,-1.34l0.05,-0.7l-0.75,-1.21l-3.96,-2.67l-0.71,-1.86l-1.82,-0.62l-1.44,-0.99l-0.01,-1.63l-0.6,-0.39l-0.88,0.24l-0.12,-0.77l-0.98,-0.33l-0.8,-2.08l-0.57,-0.47l-0.46,0.12l-0.46,-0.44l-0.86,0.27l-0.14,-0.6l-0.44,-0.31l-0.47,0.15l-0.25,0.61l-1.05,0.16l-2.89,-0.47l-0.39,-0.38l-1.48,-0.03l-0.79,0.29l-0.77,-0.44l-2.67,0.27l-3.92,-2.08l-1.35,0.86l-0.64,1.61l-1.98,-0.17l-0.52,0.44l-0.49,-0.17l-1.05,0.49l-1.33,0.14l-3.22,6.4l-0.18,1.77l-0.76,0.67l-0.38,1.8l0.35,0.59l-1.99,1.01l-0.72,1.3l-1.11,0.65l-1.12,2.0l-2.67,-0.46l-1.04,-0.87l-0.55,0.3l-1.69,-1.21l-1.31,-1.63l-2.9,-0.85l-1.15,-0.95l-0.02,-0.67l-0.42,-0.41l-2.75,-0.51l-2.28,-1.03l-1.89,-1.75l-0.91,-1.53l-0.96,-0.91l-1.53,-0.29l-1.77,-1.26l-0.22,-0.56l-1.31,-1.18l-0.65,-2.68l-0.86,-1.01l-0.24,-1.1l-0.76,-1.28l-0.26,-2.34l0.52,-3.05l-3.01,-5.07l-0.06,-1.94l-1.26,-2.51l-0.99,-0.44l-0.43,-1.24l-1.43,-0.81l-2.15,-2.18l-1.02,-0.1l-2.01,-1.25l-3.18,-3.35l-0.59,-1.55l-3.13,-2.55l-1.59,-2.45l-1.19,-0.95l-0.61,-1.05l-4.42,-2.6l-1.19,-2.19l-1.21,-3.23l-1.37,-1.08l-1.12,-0.08l-1.75,-1.67l-0.79,-3.05ZM502.09,468.18l-0.33,0.17l0.18,-0.16l0.15,-0.02ZM498.69,470.85l-0.09,0.12l-0.04,0.02l0.13,-0.14ZM497.79,472.33l0.15,0.05l-0.2,0.18l0.04,-0.11l0.01,-0.12ZM497.02,473.23l-0.13,0.12l0.03,-0.09l0.09,-0.03ZM467.54,489.19l0.03,0.02l-0.02,0.01l-0.0,-0.03ZM453.94,547.19l0.75,-0.5l0.25,-0.68l0.11,1.08l-1.1,0.1ZM460.89,499.8l-0.14,-0.59l1.22,-0.36l-0.28,0.33l-0.79,0.63ZM463.51,497.84l0.1,-0.23l1.27,-0.88l-0.92,0.85l-0.45,0.26ZM465.8,496.12l0.28,-0.24l0.47,-0.04l-0.25,0.13l-0.5,0.15ZM457.96,502.92l0.71,-1.64l0.64,-0.71l-0.02,0.75l-1.33,1.6ZM451.06,515.13l0.06,-0.22l0.07,-0.15l-0.13,0.37ZM451.5,513.91l0.16,-0.35l0.02,-0.02l-0.18,0.37ZM452.44,511.95l-0.01,-0.04l0.05,-0.04l-0.04,0.08Z", "name": "Texas"}, "US-NH": {"path": "M829.94,105.42l0.2,-1.33l-1.43,-5.38l0.53,-1.45l-0.28,-2.22l1.0,-1.86l-0.13,-2.3l0.64,-2.28l-0.44,-0.62l0.29,-2.31l-0.93,-3.8l0.08,-0.7l0.3,-0.45l1.83,-0.8l0.7,-1.39l1.43,-1.62l0.74,-1.8l-0.25,-1.13l0.52,-0.62l-2.34,-3.49l0.87,-3.26l-0.11,-0.78l-0.81,-1.29l0.27,-0.59l-0.23,-0.7l0.48,-3.2l-0.36,-0.82l0.91,-1.49l2.44,0.33l0.65,-0.88l13.0,34.89l0.84,3.65l2.6,2.21l0.88,0.34l0.36,1.6l1.72,1.31l0.0,0.35l0.77,0.23l-0.06,0.58l-0.46,3.09l-1.57,0.24l-1.32,1.19l-0.51,0.94l-0.96,0.37l-0.5,1.68l-1.1,1.44l-17.61,4.74l-1.7,-1.43l-0.41,-0.89l-0.1,-2.0l0.54,-0.59l0.03,-0.52l-1.02,-5.18Z", "name": "New Hampshire"}, "US-NY": {"path": "M821.38,166.44l0.69,-2.05l0.62,-0.02l0.55,-0.75l0.76,0.15l0.54,-0.41l-0.04,-0.31l0.57,-0.03l0.28,-0.66l0.66,-0.02l0.2,-0.55l-0.42,-0.83l0.22,-0.53l0.61,-0.37l1.34,0.22l0.54,-0.59l1.45,-0.18l0.21,-0.8l1.85,0.02l1.08,-0.91l0.11,-0.78l0.62,0.24l0.43,-0.61l4.83,-1.29l2.26,-1.3l1.99,-2.91l-0.2,1.16l-0.98,0.86l-1.22,2.31l0.55,0.46l1.6,-0.35l0.28,0.63l-0.43,0.49l-1.37,0.87l-0.51,-0.07l-2.26,0.92l-0.08,0.93l-0.87,-0.0l-2.73,1.72l-1.01,0.15l-0.17,0.8l-1.24,0.09l-2.24,1.91l-4.44,2.17l-0.2,0.71l-0.29,0.08l-0.45,-0.83l-1.41,-0.06l-0.73,0.42l-0.42,0.8l0.23,0.32l-0.92,0.69l-0.76,-0.84l0.32,-1.05ZM828.05,159.06l-0.02,-0.01l0.02,-0.06l-0.01,0.08ZM845.16,149.05l0.06,-0.06l0.18,-0.06l-0.11,0.19l-0.13,-0.07ZM844.3,154.94l0.1,-0.89l0.74,-1.16l1.65,-1.52l1.01,0.31l0.05,-0.82l0.79,0.67l-3.36,3.21l-0.67,0.45l-0.31,-0.25ZM850.39,150.14l0.02,-0.03l0.07,-0.07l-0.09,0.1ZM722.09,155.56l3.76,-3.85l1.27,-2.19l1.76,-1.86l1.16,-0.78l1.28,-3.35l1.56,-1.3l0.53,-0.83l-0.21,-1.83l-1.61,-2.42l0.43,-1.13l-0.17,-0.78l-0.83,-0.53l-2.11,-0.0l0.04,-0.99l-0.57,-2.22l4.99,-2.94l4.49,-1.8l2.38,-0.19l1.84,-0.74l5.64,-0.24l3.13,1.25l3.16,-1.68l5.49,-1.06l0.58,0.45l0.68,-0.2l0.12,-0.98l1.45,-0.72l1.03,-0.93l0.75,-0.2l0.69,-2.05l1.87,-1.76l0.79,-1.26l1.12,0.03l1.13,-0.52l1.07,-1.63l-0.46,-0.7l0.36,-1.2l-0.25,-0.51l-0.64,0.02l-0.17,-1.17l-0.94,-1.59l-1.01,-0.62l0.12,-0.18l0.59,0.39l0.53,-0.27l0.75,-1.44l-0.01,-0.91l0.81,-0.65l-0.01,-0.97l-0.93,-0.19l-0.6,0.7l-0.28,0.12l0.56,-1.3l-0.81,-0.62l-1.26,0.05l-0.87,0.77l-0.92,-0.41l-0.06,-0.29l2.05,-2.5l1.78,-1.47l1.67,-2.64l0.7,-0.56l0.11,-0.59l0.78,-0.95l0.07,-0.56l-0.5,-0.95l0.78,-1.89l4.82,-7.61l4.77,-4.5l2.84,-0.51l19.67,-5.66l0.41,0.88l-0.08,2.01l1.02,1.22l0.43,3.8l2.29,3.25l-0.09,1.89l0.85,2.42l-0.59,1.07l-0.0,3.41l0.71,0.9l1.32,2.76l0.19,1.09l0.62,0.84l0.12,3.92l0.55,0.85l0.54,0.07l0.53,-0.61l0.06,-0.87l0.33,-0.07l1.05,1.12l3.97,15.58l0.74,1.2l0.22,15.32l0.6,0.62l3.57,16.23l1.26,1.34l-2.82,3.18l0.03,0.54l1.52,1.31l0.19,0.6l-0.78,0.88l-0.64,1.8l-0.41,0.39l0.15,0.69l-1.25,0.64l0.04,-4.02l-0.57,-2.28l-0.74,-1.62l-1.46,-1.1l-0.17,-1.13l-0.7,-0.1l-0.42,1.33l0.68,1.27l1.05,0.83l0.97,2.85l-13.75,-4.06l-1.28,-1.47l-2.39,0.24l-0.63,-0.43l-1.06,-0.15l-1.74,-1.91l-0.75,-2.33l0.12,-0.72l-0.36,-0.63l-0.56,-0.21l0.09,-0.46l-0.35,-0.42l-1.64,-0.68l-1.08,0.32l-0.53,-1.22l-1.92,-0.93l-34.6,8.73l-34.44,7.84l-1.11,-5.15ZM818.84,168.69l1.08,-0.48l0.14,0.63l-1.17,1.53l-0.05,-1.68ZM730.07,136.63l0.03,-0.69l0.78,-0.07l-0.38,1.09l-0.43,-0.33Z", "name": "New York"}, "US-HI": {"path": "M295.5,583.17l0.06,-1.75l4.12,-4.97l1.03,-3.4l-0.33,-0.64l0.94,-2.43l-0.05,-3.52l0.39,-0.78l2.47,-0.7l1.55,0.23l4.45,-1.4l0.51,-0.7l-0.17,-2.69l0.4,-1.66l1.78,-1.16l1.74,2.15l-0.15,0.94l1.88,3.6l0.94,0.35l5.13,7.65l0.86,3.93l-1.52,3.14l0.22,0.58l1.47,0.95l-0.68,2.07l0.35,1.51l1.6,3.0l-1.39,0.86l-2.28,-0.2l-3.27,0.51l-4.56,-1.32l-2.15,-1.34l-6.66,-0.15l-1.59,0.26l-1.56,1.19l-1.63,0.58l-1.14,0.02l-0.7,-2.54l-2.09,-2.18ZM306.33,530.7l1.6,0.08l0.51,2.07l-0.3,2.25l0.37,0.59l2.33,0.88l1.38,0.1l1.55,1.39l0.27,1.55l0.93,0.97l-0.13,1.05l1.83,2.52l-0.13,0.66l-0.61,0.48l-1.82,0.38l-1.84,-0.18l-1.47,-1.19l-2.21,-0.24l-2.69,-1.48l0.01,-1.23l1.15,-1.86l0.41,-2.07l-1.76,-1.28l-1.08,-1.75l-0.1,-2.61l1.79,-1.08ZM297.2,518.01l0.71,0.31l0.38,1.05l2.64,2.0l0.9,1.11l0.92,0.08l0.8,1.67l1.56,1.05l0.72,0.06l1.07,1.11l-1.31,0.41l-2.75,-0.66l-3.23,-3.93l-3.16,-2.01l-1.39,-0.44l-0.05,-0.7l1.58,-0.43l0.62,-0.67ZM301.59,541.55l-2.09,-0.98l-0.28,-0.51l2.92,0.34l-0.56,1.15ZM298.23,532.36l-0.92,-0.29l-0.72,-0.89l0.92,-2.06l-0.49,-1.73l2.6,1.38l0.61,2.08l0.14,1.06l-2.15,0.45ZM281.13,503.64l0.57,-1.85l-0.38,-0.9l-0.16,-2.84l0.75,-0.92l-0.12,-1.22l2.74,1.9l2.9,-0.62l1.56,0.15l0.38,1.01l-0.33,2.17l0.29,1.5l-0.69,0.6l-0.19,1.55l0.38,1.54l0.86,0.51l0.29,1.07l-0.52,1.14l0.53,1.28l-1.18,-0.0l-0.2,-0.48l-2.04,-0.86l-0.77,-2.83l-1.27,-0.38l0.8,-0.11l0.32,-0.46l-0.08,-0.66l-0.63,-0.68l-1.75,-0.32l0.23,1.82l-2.28,-1.1ZM259.66,469.47l-0.24,-2.03l-0.91,-0.69l-0.68,-1.23l0.08,-1.2l0.08,-0.34l2.39,-0.81l4.6,0.53l0.67,1.04l2.51,1.09l0.69,1.25l-0.15,1.9l-2.3,1.32l-0.74,1.3l-0.79,0.34l-2.78,0.09l-0.92,-1.53l-1.52,-1.0ZM245.78,462.61l-0.23,-0.74l1.03,-0.75l4.32,-0.72l0.43,0.3l-0.92,0.4l-0.68,0.94l-1.66,-0.5l-1.36,0.34l-0.94,0.72Z", "name": "Hawaii"}, "US-VT": {"path": "M805.56,72.69l26.03,-7.97l0.89,1.85l-0.74,2.37l-0.03,1.54l2.22,2.75l-0.51,0.58l0.26,1.13l-0.67,1.6l-1.35,1.49l-0.64,1.32l-1.72,0.7l-0.62,0.92l-0.1,0.98l0.93,3.74l-0.29,2.44l0.4,0.54l-0.6,2.11l0.15,2.19l-1.0,1.87l0.27,2.36l-0.53,1.54l1.43,5.44l-0.22,1.22l1.05,5.3l-0.58,0.85l0.11,2.31l0.6,1.26l1.51,1.1l-11.44,2.89l-0.57,-0.85l-4.02,-15.75l-1.72,-1.59l-0.91,0.25l-0.3,1.19l-0.12,-0.26l-0.11,-3.91l-0.68,-1.0l-0.14,-0.98l-1.37,-2.85l-0.63,-0.68l0.01,-3.15l0.6,-1.15l-0.86,-2.57l0.08,-1.93l-0.39,-0.91l-1.55,-1.63l-0.38,-0.81l-0.41,-3.71l-1.03,-1.27l0.11,-1.87l-0.43,-1.01Z", "name": "Vermont"}, "US-NM": {"path": "M230.86,422.88l11.82,-123.66l25.67,2.24l26.1,1.86l26.12,1.45l25.74,1.02l-0.31,10.24l-0.74,0.39l-3.59,98.69l-32.38,-1.34l-33.53,-2.02l-0.44,0.76l0.54,2.31l0.44,1.26l0.99,0.76l-30.55,-2.46l-0.43,0.36l-0.82,9.46l-14.63,-1.33Z", "name": "New Mexico"}, "US-NC": {"path": "M826.87,289.49l0.07,-0.05l-0.02,0.03l-0.04,0.02ZM819.58,272.4l0.2,0.23l-0.05,0.01l-0.16,-0.24ZM821.84,276.68l0.19,0.15l-0.02,0.18l-0.05,-0.08l-0.12,-0.25ZM676.72,321.77l0.92,0.17l1.52,-0.39l0.42,-0.39l0.52,-0.97l0.13,-2.7l1.34,-1.19l0.47,-1.05l2.24,-1.47l2.12,-0.52l0.76,0.18l1.32,-0.52l2.36,-2.52l0.78,-0.25l1.84,-2.29l1.48,-1.0l1.55,-0.19l1.15,-2.65l-0.28,-1.22l1.66,0.06l0.51,-1.65l0.93,-0.77l1.08,-0.77l0.51,1.52l1.07,0.33l1.34,-1.17l1.35,-2.64l2.49,-1.59l0.79,0.08l0.82,0.8l1.06,-0.21l0.84,-1.07l1.47,-4.18l1.08,-1.1l1.47,0.09l0.44,-0.31l-0.69,-1.26l0.4,-2.0l-0.42,-0.9l0.38,-1.25l7.42,-0.86l19.54,-3.36l37.22,-8.42l31.12,-7.87l0.4,1.21l3.54,3.24l1.0,1.53l-1.21,-1.0l-0.16,-0.63l-0.92,-0.4l-0.52,0.05l-0.24,0.65l0.66,0.54l0.59,1.56l-0.53,0.01l-0.91,-0.75l-2.31,-0.8l-0.4,-0.48l-0.55,0.13l-0.31,0.69l0.14,0.64l1.37,0.44l1.69,1.38l-1.11,0.66l-2.48,-1.2l-0.36,0.51l0.14,0.42l1.6,1.18l-1.84,-0.33l-2.23,-0.87l-0.46,0.14l0.01,0.48l0.6,0.7l1.71,0.83l-0.97,0.58l0.0,0.6l-0.43,0.53l-1.48,0.74l-0.89,-0.77l-0.61,0.22l-0.1,0.35l-0.2,-0.13l-1.32,-2.32l0.21,-2.63l-0.42,-0.48l-0.89,-0.22l-0.37,0.64l0.62,0.71l-0.43,0.99l-0.02,1.04l0.49,1.73l1.6,2.2l-0.31,1.28l0.48,0.29l2.97,-0.59l2.1,-1.49l0.27,0.01l0.37,0.79l0.76,-0.34l1.56,0.05l0.16,-0.71l-0.57,-0.32l1.29,-0.76l2.04,-0.46l-0.1,1.19l0.64,0.29l-0.6,0.88l0.89,1.19l-0.84,0.1l-0.19,0.66l1.38,0.46l0.26,0.94l-1.21,0.05l-0.19,0.66l0.66,0.59l1.25,-0.16l0.52,0.26l0.4,-0.38l0.18,-1.95l-0.75,-3.33l0.41,-0.48l0.56,0.43l0.94,0.06l0.28,-0.57l-0.29,-0.44l0.48,-0.57l1.71,1.84l-0.0,1.41l0.62,0.9l-0.53,0.18l-0.25,0.47l0.9,1.14l-0.08,0.37l-0.42,0.55l-0.78,0.09l-0.91,-0.86l-0.32,0.33l0.13,1.26l-1.08,1.61l0.2,0.57l-0.32,0.22l-0.15,0.98l-0.74,0.55l0.1,0.91l-0.9,0.96l-1.06,0.21l-0.59,-0.37l-0.52,0.52l-0.93,-0.81l-0.86,0.1l-0.4,-0.82l-0.59,-0.21l-0.52,0.38l0.08,0.94l-0.52,0.22l-1.42,-1.25l1.31,-0.4l0.23,-0.88l-0.57,-0.42l-2.02,0.31l-1.14,1.01l0.29,0.67l0.44,0.16l0.09,0.82l0.35,0.25l-0.03,0.12l-0.57,-0.34l-1.69,0.83l-1.12,-0.43l-1.45,0.06l-3.32,-0.7l0.42,1.08l0.97,0.45l0.36,0.64l0.63,0.11l0.87,-0.32l1.68,0.63l2.35,0.39l3.51,0.11l0.47,0.42l-0.06,0.52l-0.99,0.05l-0.38,0.5l0.13,0.23l-1.62,1.44l0.32,0.58l1.85,0.01l-2.55,3.5l-1.67,0.04l-1.59,-0.98l-0.9,-0.19l-1.21,-1.02l-1.12,0.07l0.07,0.47l1.04,1.14l2.32,2.09l2.68,0.26l1.31,0.49l1.71,-2.16l0.51,0.47l1.17,0.33l0.4,-0.57l-0.55,-0.9l0.87,0.16l0.19,0.57l0.66,0.24l1.63,-1.2l-0.18,0.61l0.29,0.57l-0.29,0.38l-0.43,-0.2l-0.41,0.37l0.03,0.9l-0.97,1.72l0.01,0.78l-0.71,-0.07l-0.06,-0.74l-1.12,-0.61l-0.42,0.47l0.27,1.45l-0.52,-1.1l-0.65,-0.16l-1.22,1.08l-0.21,0.52l0.25,0.27l-2.03,0.32l-2.75,1.84l-0.67,-1.04l-0.75,-0.29l-0.37,0.49l0.43,1.26l-0.57,-0.01l-0.09,0.82l-0.94,1.73l-0.91,0.85l-0.59,-0.26l0.49,-0.69l-0.02,-0.77l-1.06,-0.93l-0.08,-0.52l-1.69,-0.41l-0.16,0.47l0.43,1.16l0.2,0.33l0.58,0.07l0.3,0.61l-0.88,0.37l-0.08,0.71l0.65,0.64l0.77,0.18l-0.01,0.37l-2.12,1.67l-1.92,2.65l-2.0,4.31l-0.34,2.13l0.12,1.34l-0.15,-1.03l-1.01,-1.59l-0.55,-0.17l-0.3,0.48l1.17,3.95l-0.63,2.27l-3.9,0.19l-1.43,0.65l-0.35,-0.52l-0.58,-0.18l-0.54,1.07l-1.9,1.14l-0.61,-0.02l-23.25,-15.36l-1.05,-0.02l-18.68,3.49l-0.65,-2.77l-3.25,-2.84l-0.47,0.08l-1.23,1.31l-0.01,-1.29l-0.82,-0.54l-22.82,3.35l-0.64,-0.27l-0.62,0.46l-0.25,0.65l-3.98,1.93l-0.89,1.23l-1.01,0.08l-4.78,2.66l-20.95,3.93l-0.34,-4.55l0.7,-0.95ZM817.0,271.48l0.19,0.35l0.24,0.39l-0.45,-0.41l0.02,-0.32ZM807.53,290.29l0.2,0.32l-0.16,-0.09l-0.03,-0.23ZM815.31,299.15l0.16,-0.36l0.16,0.07l-0.13,0.29l-0.19,0.01ZM812.76,299.11l-0.06,-0.28l-0.03,-0.11l0.3,0.26l-0.21,0.13ZM812.97,264.02l0.37,-0.24l0.15,0.42l-0.42,0.07l-0.1,-0.25ZM791.92,329.4l0.04,-0.08l0.22,0.03l-0.0,0.09l-0.26,-0.05Z", "name": "North Carolina"}, "US-ND": {"path": "M438.54,42.78l2.06,6.9l-0.73,2.53l0.57,2.36l-0.27,1.17l0.47,1.99l0.01,3.26l1.42,3.95l0.45,0.54l-0.08,0.97l0.39,1.52l0.62,0.74l1.48,3.74l-0.06,3.9l0.42,0.7l0.5,8.35l0.51,1.54l0.51,0.25l-0.47,2.64l0.36,1.63l-0.14,1.75l0.69,1.1l0.2,2.16l0.49,1.13l1.8,2.56l0.15,2.2l0.51,1.08l0.17,1.39l-0.24,1.36l0.28,1.74l-27.89,0.73l-28.38,0.19l-28.38,-0.37l-28.49,-0.93l2.75,-65.47l23.08,0.78l25.57,0.42l25.57,-0.06l24.11,-0.49Z", "name": "North Dakota"}, "US-NE": {"path": "M422.58,174.02l3.92,2.71l3.93,1.9l1.34,-0.22l0.51,-0.47l0.36,-1.08l0.48,-0.2l2.49,0.34l1.32,-0.47l1.58,0.25l3.45,-0.65l2.37,1.98l1.4,0.14l1.55,0.77l1.45,0.08l0.88,1.1l1.49,0.17l-0.06,0.98l1.68,2.08l3.32,0.6l0.19,0.68l-0.22,1.87l1.13,1.94l0.01,2.29l1.15,1.08l0.34,1.72l1.73,1.46l0.07,1.88l1.5,2.11l-0.49,2.33l0.44,3.09l0.52,0.54l0.94,-0.2l-0.04,1.25l1.21,0.5l-0.41,2.36l0.21,0.44l1.12,0.4l-0.6,0.77l-0.09,1.01l0.13,0.59l0.82,0.5l0.16,1.45l-0.26,0.92l0.26,1.27l0.55,0.61l0.3,1.93l-0.22,1.33l0.23,0.72l-0.57,0.92l0.02,0.79l0.45,0.88l1.23,0.63l0.25,2.5l1.1,0.51l0.03,0.79l1.18,2.75l-0.23,0.96l1.16,0.21l0.8,0.99l1.1,0.24l-0.15,0.96l1.31,1.68l-0.21,1.12l0.51,0.91l-26.15,1.05l-27.83,0.63l-27.84,0.14l-27.89,-0.35l0.46,-21.66l-0.39,-0.41l-32.36,-1.04l1.85,-43.24l43.36,1.22l44.67,-0.04Z", "name": "Nebraska"}, "US-LA": {"path": "M508.97,412.97l-1.33,-21.76l51.44,-4.07l0.34,0.83l1.48,0.66l-0.92,1.35l-0.25,2.13l0.49,0.72l1.18,0.31l-1.21,0.47l-0.45,0.78l0.45,1.36l1.05,0.84l0.08,2.15l0.46,0.54l1.51,0.74l0.45,1.05l1.42,0.44l-0.87,1.22l-0.85,2.34l-0.75,0.04l-0.52,0.51l-0.02,0.73l0.63,0.72l-0.22,1.16l-1.35,0.96l-1.08,1.89l-1.37,0.67l-0.68,0.83l-0.79,2.42l-0.25,3.52l-1.55,1.74l0.13,1.21l0.62,0.96l-0.35,2.38l-1.61,0.29l-0.6,0.57l0.28,0.97l0.64,0.59l-0.26,1.41l0.98,1.51l-1.18,1.18l-0.08,0.45l0.4,0.23l6.18,-0.55l29.23,-2.92l-0.68,3.47l-0.52,1.02l-0.2,2.24l0.69,0.98l-0.09,0.66l0.6,1.0l1.31,0.7l1.22,1.42l0.14,0.88l0.89,1.39l0.14,1.05l1.11,1.84l-1.85,0.39l-0.38,-0.08l-0.01,-0.56l-0.53,-0.57l-1.28,0.28l-1.18,-0.59l-1.51,0.17l-0.61,-0.98l-1.24,-0.86l-2.84,-0.47l-1.24,0.63l-1.39,2.3l-1.3,1.42l-0.42,0.91l0.07,1.2l0.55,0.89l0.82,0.57l4.25,0.82l3.35,-1.0l1.32,-1.19l0.68,-1.19l0.34,0.59l1.08,0.43l0.59,-0.4l0.81,0.03l0.51,-0.46l-0.76,1.21l-1.12,-0.12l-0.57,0.32l-0.38,0.62l0.0,0.83l0.77,1.22l1.48,-0.02l0.65,0.89l1.1,0.48l0.94,-0.21l0.51,-0.45l0.46,-1.11l-0.02,-1.37l0.93,-0.58l0.42,-0.99l0.23,0.05l0.1,1.16l-0.24,0.25l0.18,0.57l0.43,0.15l-0.07,0.75l1.34,1.08l0.34,-0.16l-0.48,0.59l0.18,0.63l-0.35,0.13l-0.52,-0.57l-0.92,-0.19l-1.0,1.89l-0.85,0.14l-0.46,0.53l0.16,1.19l-1.6,-0.61l-0.43,0.19l0.04,0.46l1.14,1.06l-1.17,-0.14l-0.92,0.61l0.68,0.43l1.26,2.04l2.74,0.97l-0.08,1.2l0.34,0.41l2.07,-0.32l0.77,0.17l0.17,0.53l0.73,0.32l1.35,-0.34l0.53,0.78l1.08,-0.46l1.13,0.74l0.14,0.3l-0.4,0.62l1.54,0.86l-0.39,0.65l0.39,0.58l-0.18,0.62l-0.95,1.49l-1.3,-1.56l-0.68,0.34l0.1,0.66l-0.38,0.12l0.41,-1.88l-1.33,-0.76l-0.5,0.5l0.2,1.18l-0.54,0.45l-0.27,-1.02l-0.57,-0.25l-0.89,-1.27l0.03,-0.77l-0.96,-0.14l-0.47,0.5l-1.41,-0.17l-0.41,-0.61l0.14,-0.63l-0.39,-0.46l-0.45,-0.02l-0.81,0.73l-1.18,0.02l0.12,-1.23l-0.46,-0.88l-0.91,0.04l0.09,-0.96l-0.37,-0.36l-0.91,-0.03l-0.22,0.58l-0.85,-0.38l-0.48,0.27l-2.61,-1.26l-1.24,-0.03l-0.67,-0.64l-0.61,0.19l-0.3,0.56l-0.05,1.25l1.72,0.94l1.67,0.35l-0.16,0.92l0.28,0.39l-0.34,0.35l0.23,0.68l-0.76,0.95l-0.02,0.66l0.81,0.97l-0.95,1.43l-1.33,0.94l-0.76,-1.15l0.22,-1.5l-0.35,-0.92l-0.49,-0.18l-0.4,0.36l-1.15,-1.08l-0.59,0.42l-0.76,-1.05l-0.62,-0.2l-0.64,1.33l-0.85,0.26l-0.88,-0.53l-0.86,0.53l-0.1,0.62l0.48,0.41l-0.68,0.56l-0.13,1.44l-0.46,0.13l-0.39,0.83l-0.92,0.08l-0.11,-0.68l-1.6,-0.4l-0.77,0.97l-1.92,-0.93l-0.3,-0.54l-0.99,0.01l-0.35,0.6l-1.16,-0.51l0.42,-0.4l0.01,-1.46l-0.38,-0.57l-1.9,-1.19l-0.08,-0.54l-0.83,-0.72l-0.09,-0.91l0.73,-1.15l-0.34,-1.14l-0.87,-0.19l-0.34,0.57l0.16,0.43l-0.59,0.81l0.04,0.91l-1.8,-0.4l0.07,-0.39l-0.47,-0.54l-1.97,0.76l-0.7,-2.22l-1.32,0.23l-0.18,-2.12l-1.31,-0.35l-1.89,0.3l-1.09,0.65l-0.21,-0.71l0.84,-0.26l-0.05,-0.8l-0.6,-0.58l-1.03,-0.1l-0.85,0.42l-0.95,-0.15l-0.4,0.8l-2.0,1.11l-0.63,-0.31l-1.29,0.71l0.54,1.37l0.8,0.31l0.97,1.51l-1.39,0.19l-1.83,1.03l-3.69,-0.4l-1.24,0.21l-3.09,-0.45l-1.99,-0.68l-1.81,-1.07l-3.7,-1.1l-3.19,-0.48l-2.53,0.58l-5.62,0.45l-1.0,0.26l-1.82,1.25l-0.59,-0.63l-0.26,-1.08l1.59,-0.47l0.7,-1.76l-0.02,-1.55l-0.39,-0.56l1.11,-1.54l0.23,-1.59l-0.5,-1.83l0.07,-1.46l-0.66,-0.7l-0.21,-1.04l0.83,-2.22l-0.64,-1.95l0.76,-0.84l0.3,-1.49l0.78,-0.94l0.79,-2.83l-0.18,-1.42l0.58,-0.97l-0.75,-1.33l0.84,-0.39l0.2,-0.44l-0.89,-1.36l0.03,-2.13l-1.07,-0.23l-0.57,-1.57l-0.92,-0.84l0.28,-1.27l-0.81,-0.76l-0.33,-0.95l-0.64,-0.34l0.22,-0.98l-1.16,-0.58l-0.81,-0.93l0.16,-2.46l-0.68,-1.93l-1.33,-1.98l-2.63,-2.21ZM607.49,467.45l-0.03,-0.03l-0.07,-0.04l0.13,-0.01l-0.03,0.08ZM607.51,465.85l-0.02,-0.01l0.03,-0.01l-0.02,0.02ZM567.04,468.98l-2.0,-0.42l-0.66,-0.5l0.73,-0.43l0.35,-0.76l0.39,0.49l0.83,0.21l-0.15,0.61l0.5,0.81ZM550.39,463.0l1.73,-1.05l3.34,1.07l-0.69,0.56l-0.17,0.81l-0.68,0.17l-3.53,-1.57Z", "name": "Louisiana"}, "US-SD": {"path": "M336.37,128.84l0.3,-0.53l0.75,-19.93l28.5,0.93l28.4,0.37l28.4,-0.19l27.78,-0.73l-0.18,1.71l-0.73,1.71l-2.9,2.46l-0.42,1.27l1.59,2.13l1.06,2.06l0.55,0.36l1.74,0.24l1.01,0.84l0.57,1.02l1.45,38.83l-1.84,0.09l-0.42,0.56l0.24,1.44l0.88,1.14l0.01,1.45l-0.65,0.36l0.17,1.48l0.48,0.43l1.09,0.04l0.34,1.68l-0.16,0.91l-0.62,0.83l0.02,1.73l-0.68,2.45l-0.49,0.44l-0.67,1.88l0.5,1.1l1.33,1.08l-0.16,0.62l0.64,0.66l0.35,1.15l-1.65,-0.28l-0.34,-0.94l-0.85,-0.73l0.19,-0.61l-0.28,-0.59l-1.58,-0.23l-1.03,-1.18l-1.57,-0.11l-1.51,-0.75l-1.34,-0.12l-2.38,-1.99l-3.78,0.6l-1.65,-0.25l-1.19,0.46l-2.62,-0.33l-0.98,0.48l-0.76,1.45l-0.72,0.05l-3.67,-1.82l-4.13,-2.8l-44.83,0.05l-43.33,-1.22l1.79,-43.2Z", "name": "South Dakota"}, "US-DC": {"path": "M781.25,216.97l0.45,-0.77l2.04,1.26l-0.66,1.14l-0.55,-1.05l-1.28,-0.58Z", "name": "District of Columbia"}, "US-DE": {"path": "M798.52,195.11l0.42,-1.51l0.92,-1.11l1.72,-0.71l1.12,0.06l-0.33,0.56l-0.08,1.38l-1.13,1.92l0.1,1.09l1.11,1.1l-0.07,1.52l2.29,2.48l1.25,0.6l0.93,1.52l0.99,3.35l1.72,1.57l0.57,1.32l3.06,1.99l1.44,-0.09l0.45,1.25l-1.06,0.56l0.16,1.32l0.36,0.19l-0.83,0.57l-0.08,1.21l0.66,0.21l0.85,-0.73l0.71,0.34l0.3,-0.21l0.75,1.55l-10.19,2.82l-8.12,-26.12Z", "name": "Delaware"}, "US-FL": {"path": "M630.28,423.69l47.19,-6.86l1.53,1.91l0.87,2.72l1.47,1.0l48.79,-5.11l1.03,1.38l0.03,1.09l0.55,1.05l1.04,0.48l1.64,-0.28l0.85,-0.75l-0.14,-4.57l-0.98,-1.49l-0.22,-1.77l0.28,-0.74l0.62,-0.3l0.12,-0.7l5.6,0.96l4.03,-0.16l0.14,1.24l-0.75,-0.12l-0.33,0.43l0.25,1.54l2.11,1.81l0.22,1.01l0.42,0.38l0.29,1.92l1.87,3.29l1.7,4.87l0.73,0.84l0.51,1.5l1.64,2.46l0.64,1.57l2.79,3.71l1.93,3.18l2.29,2.77l0.16,0.6l0.63,0.36l6.82,7.53l-0.48,-0.03l-0.27,0.61l-1.35,-0.02l-0.34,-0.65l0.38,-1.38l-0.16,-0.56l-2.3,-0.92l-0.46,0.53l1.0,2.8l0.78,0.97l2.14,4.77l9.92,13.71l1.37,3.11l3.66,5.34l-1.38,-0.35l-0.43,0.74l0.8,0.65l0.85,0.24l0.56,-0.22l1.46,0.94l2.05,3.05l-0.5,0.34l-0.12,0.53l1.16,0.53l0.89,1.83l-0.08,1.06l0.59,0.95l0.61,2.64l-0.27,0.75l0.93,8.98l-0.31,1.07l0.46,0.67l0.5,3.1l-0.81,1.46l0.07,2.23l-0.84,0.74l-0.22,1.8l-0.48,0.85l0.21,1.47l-0.3,1.75l0.54,1.74l0.45,0.23l-1.15,1.8l-0.39,1.28l-0.94,0.24l-0.53,-0.22l-1.37,0.45l-0.35,1.06l-0.89,0.3l-0.18,0.58l-0.85,0.67l-1.44,0.14l-0.27,-0.32l-1.23,-0.1l-0.9,1.05l-3.17,1.13l-1.06,-0.59l-0.7,-1.04l0.06,-1.79l1.0,0.84l1.64,0.47l0.26,0.63l0.52,0.07l1.35,-0.72l0.2,-0.69l-0.26,-0.64l-1.58,-1.11l-2.4,-0.26l-0.91,-0.46l-0.85,-1.67l-0.89,-0.72l0.22,-0.98l-0.48,-0.28l-0.53,0.15l-1.38,-2.51l-0.44,-0.3l-0.64,0.07l-0.44,-0.61l0.22,-0.89l-0.7,-0.65l-1.21,-0.6l-1.06,-0.08l-0.75,-0.54l-0.57,0.18l-2.8,-0.59l-0.5,0.64l0.25,-0.91l-0.46,-0.42l-0.87,0.12l-0.26,-0.72l-0.88,-0.65l-0.61,-1.41l-0.55,-0.11l-0.72,-2.94l-0.77,-1.0l-0.16,-1.52l-0.44,-0.83l-0.71,-0.89l-0.49,-0.15l-0.12,0.93l-1.29,-0.26l1.06,-1.3l0.3,-0.75l-0.12,-0.63l0.86,-1.46l0.65,-0.34l0.28,-0.83l-0.61,-0.38l-1.42,0.93l-0.89,1.29l-0.42,2.17l-1.37,0.35l-0.21,-1.33l-0.79,-1.33l-0.27,-4.04l-0.86,-0.6l1.63,-1.33l0.22,-0.97l-0.58,-0.42l-3.06,1.92l-0.75,-0.66l-0.4,0.26l-1.27,-0.89l-0.37,0.74l1.13,1.09l0.52,0.1l1.26,2.0l-1.04,0.23l-1.42,-0.38l-0.84,-1.6l-1.13,-0.6l-1.94,-2.55l-1.04,-2.28l-1.28,-0.87l0.1,-0.87l-0.97,-1.8l-1.77,-0.98l0.09,-0.67l0.99,-0.41l-0.35,-0.49l0.44,-0.73l-0.39,-0.35l0.4,-1.21l2.47,-4.47l-1.05,-2.41l-0.68,-0.46l-0.92,0.42l-0.28,0.93l0.29,1.2l-0.24,0.03l-0.73,-2.44l-0.99,-0.28l-1.19,-0.87l-1.52,-0.31l0.29,1.95l-0.48,0.61l0.27,0.59l2.21,0.56l0.25,0.97l-0.37,2.46l-0.31,-0.58l-0.8,-0.22l-2.13,-1.53l-0.41,0.2l-0.29,-0.63l0.59,-2.11l0.07,-2.97l-0.66,-1.97l0.42,-0.51l0.48,-1.91l-0.24,-0.54l0.66,-3.04l-0.35,-5.26l-0.71,-1.7l0.35,-0.47l-0.47,-2.18l-2.1,-1.33l-0.05,-0.52l-0.55,-0.43l-0.1,-1.01l-0.92,-0.73l-0.55,-1.51l-0.64,-0.25l-1.44,0.32l-1.03,-0.2l-1.57,0.54l-1.14,-1.74l-1.51,-0.48l-0.19,-0.6l-1.35,-1.51l-0.87,-0.59l-0.62,0.07l-1.52,-1.16l-0.8,-0.21l-0.51,-2.75l-3.06,-1.13l-0.65,-0.59l-0.52,-1.23l-2.15,-1.93l-2.19,-1.09l-1.45,-0.12l-3.44,-1.68l-2.85,0.98l-1.0,-0.4l-1.05,0.42l-0.35,0.68l-1.33,0.68l-0.5,0.7l0.03,0.64l-0.73,-0.22l-0.59,0.6l0.67,0.94l1.51,0.08l0.41,0.21l-3.03,0.23l-1.58,1.51l-0.91,0.45l-1.3,1.56l-1.56,1.03l-0.32,0.13l0.2,-0.48l-0.26,-0.54l-0.66,-0.04l-0.96,0.75l-1.12,1.5l-2.2,0.23l-2.11,1.06l-0.78,0.03l-0.27,-2.03l-1.71,-2.23l-2.21,-1.0l-0.18,-0.41l-2.51,-1.5l2.79,1.33l1.21,-0.74l0.0,-0.74l-1.32,-0.34l-0.36,0.55l-0.21,-1.01l-0.34,-0.1l0.13,-0.52l-0.49,-0.33l-1.39,0.61l-2.3,-0.76l0.65,-1.08l0.83,-0.1l1.03,-1.45l-0.91,-0.95l-0.46,0.12l-0.49,1.02l-0.44,-0.04l-0.81,0.56l-0.72,-0.9l-0.7,0.09l-0.17,0.38l-1.34,0.73l-0.14,0.68l0.29,0.46l-3.95,-1.35l-5.05,-0.71l0.12,-0.24l1.27,0.29l0.61,-0.53l2.1,0.39l0.23,-0.78l-0.94,-1.02l0.09,-0.7l-0.63,-0.28l-0.5,0.32l-0.28,-0.47l-1.9,0.19l-2.25,1.1l0.3,-0.63l-0.41,-0.58l-0.96,0.35l-0.58,-0.25l-0.23,0.44l0.2,0.71l-1.45,0.8l-0.4,0.63l-5.18,0.97l0.32,-0.52l-0.4,-0.52l-1.35,-0.28l-0.72,-0.53l0.69,-0.53l0.01,-0.78l-0.68,-0.13l-0.81,-0.66l-0.46,0.11l0.14,0.76l-0.42,1.77l-1.05,-1.39l-0.69,-0.45l-0.55,0.07l-0.3,0.71l0.82,1.77l-0.25,0.79l-1.39,0.99l-0.05,1.04l-0.6,0.22l-0.17,0.57l-1.48,0.56l0.28,-0.65l-0.21,-0.46l1.14,-1.03l0.07,-0.74l-0.4,-0.58l-1.19,-0.24l-0.41,-0.84l0.3,-1.7l-0.18,-1.61l-2.17,-1.12l-2.39,-2.46l0.32,-1.44l-0.15,-1.04ZM767.29,490.44l0.48,1.07l0.9,0.39l0.78,-0.15l1.41,1.67l0.91,0.58l1.86,0.69l1.61,0.07l0.55,-0.44l-0.08,-0.87l0.55,-0.65l-0.16,-1.21l0.76,-1.36l0.09,-1.81l-0.64,-1.62l-1.46,-2.01l-1.74,-1.32l-1.19,-0.13l-1.12,0.83l-1.83,3.16l-2.12,1.94l-0.13,0.77l0.57,0.41ZM644.36,434.13l-0.94,0.26l0.41,-0.44l0.53,0.18ZM665.13,435.7l0.98,-0.28l0.35,0.32l0.09,0.72l-1.42,-0.75ZM770.56,455.01l0.42,0.56l-0.43,0.75l0.0,-1.31ZM788.88,525.23l0.01,-0.07l0.01,0.03l-0.03,0.04ZM789.47,522.87l-0.22,-0.23l0.49,-0.32l-0.27,0.55ZM768.83,453.61l0.21,0.76l-0.31,2.33l0.28,1.79l-1.38,-3.23l1.19,-1.65ZM679.81,445.61l0.22,-0.2l0.36,0.02l-0.11,0.42l-0.47,-0.25Z", "name": "Florida"}, "US-WA": {"path": "M38.52,55.26l0.46,-1.32l0.18,0.45l0.65,0.3l1.04,-0.74l0.43,0.59l0.7,-0.03l0.17,-0.77l-0.92,-1.56l0.79,-0.74l-0.09,-1.36l0.49,-0.39l-0.1,-1.03l0.81,-0.27l0.05,0.5l0.48,0.41l0.95,-0.31l-0.09,-0.68l-1.35,-1.65l-0.9,0.15l-1.88,-0.56l0.17,-1.98l0.66,0.53l0.52,-0.07l0.29,-0.56l-0.16,-0.67l3.3,-0.52l0.26,-0.69l-1.7,-0.96l-0.86,-0.14l-0.37,-1.51l-0.7,-0.42l-0.81,-0.02l0.32,-4.73l-0.49,-1.28l0.1,-0.69l-0.4,-0.34l0.76,-5.74l-0.13,-2.46l-0.45,-0.62l-0.16,-1.36l-0.65,-1.33l-0.73,-0.57l-0.32,-2.45l0.35,-2.27l-0.15,-1.11l1.74,-3.3l-0.52,-1.23l4.59,3.9l1.19,0.38l0.92,0.75l0.81,1.3l1.86,1.08l3.24,0.91l0.84,0.77l1.42,0.11l1.73,1.02l2.33,0.73l1.46,-0.47l0.52,0.29l0.55,0.69l-0.03,1.09l0.55,0.74l0.31,0.11l0.49,-0.35l0.07,-0.75l0.45,0.03l0.63,1.39l-0.4,0.58l0.34,0.49l0.56,-0.04l0.72,-0.84l-0.38,-1.7l1.03,-0.24l-0.44,0.23l-0.21,0.69l1.27,4.41l-0.46,0.1l-1.67,1.73l0.22,-1.29l-0.22,-0.41l-1.31,0.31l-0.38,0.81l0.09,0.95l-1.37,1.7l-1.98,1.38l-1.06,1.41l-0.96,0.69l-1.1,1.67l-0.06,0.71l0.62,0.6l0.96,0.12l2.77,-0.48l1.22,-0.58l-0.03,-0.7l-0.64,-0.23l-2.94,0.79l-0.35,-0.3l3.23,-3.42l3.06,-0.88l0.89,-1.51l1.73,-1.54l0.53,0.57l0.54,-0.19l0.22,-1.81l-0.06,2.25l0.26,0.91l-0.99,-0.21l-0.64,0.77l-0.41,-0.73l-0.52,-0.19l-0.39,0.64l0.3,0.71l0.02,1.63l-0.21,-1.07l-0.67,-0.21l-0.47,0.69l-0.07,0.75l0.46,0.66l-0.63,0.58l-0.0,0.45l0.42,0.17l1.68,-0.57l0.25,1.09l-1.08,1.79l-0.08,1.05l-0.83,0.7l0.13,1.0l-0.85,-0.68l1.12,-1.44l-0.23,-0.96l-1.96,1.08l-0.38,0.64l-0.05,-2.11l-0.52,0.02l-1.03,1.59l-1.26,0.53l-1.14,1.87l-1.51,0.3l-0.46,0.43l-0.21,1.18l1.11,-0.03l-0.25,0.36l0.27,0.37l0.93,0.02l0.06,0.68l0.53,0.47l0.52,-0.27l0.35,-1.76l0.14,0.42l0.83,-0.15l1.11,1.48l1.31,-0.61l1.65,-1.48l0.98,-1.56l0.63,0.78l0.73,0.14l0.44,-0.23l-0.06,-0.86l1.56,-0.55l0.35,-0.94l-0.33,-1.27l0.22,-1.19l-0.18,-1.36l0.83,0.2l0.3,-0.92l-0.19,-0.75l-0.72,-0.63l0.89,-1.13l0.07,-1.75l1.24,-1.24l0.61,-1.37l1.61,-0.49l0.78,-1.16l-0.45,-0.66l-0.51,-0.02l-0.86,-1.3l0.16,-2.09l-0.26,-0.87l0.49,-0.79l0.06,-0.84l-1.15,-1.73l-0.63,-0.4l-0.17,-0.64l0.18,-0.5l0.59,0.23l0.53,-0.33l0.24,-1.8l0.79,-0.24l0.3,-1.0l-0.61,-2.32l0.44,-0.53l-0.03,-0.86l-0.96,-0.88l-0.95,0.3l-1.09,-2.66l0.93,-1.83l41.31,9.4l38.96,7.65l-9.66,54.39l-0.47,1.02l1.04,3.0l0.13,2.0l-1.0,1.3l0.73,1.88l-31.18,-5.92l-1.67,0.79l-7.24,-1.02l-1.68,0.92l-4.19,-0.12l-3.18,0.45l-1.64,0.75l-0.88,-0.26l-1.2,0.3l-1.51,-0.23l-2.43,-0.94l-0.91,0.46l-3.45,0.51l-2.11,-0.71l-1.65,0.3l-0.31,-1.36l-1.09,-0.88l-4.34,-1.46l-2.32,-0.11l-1.15,-0.51l-1.27,0.21l-1.89,0.86l-4.5,0.58l-1.11,-0.71l-1.15,-0.3l-1.61,-1.15l-1.84,-0.51l-0.63,-0.81l0.64,-6.82l-0.47,-0.95l-0.22,-1.9l-0.98,-1.35l-1.96,-1.67l-2.82,-0.11l-1.03,-1.31l-0.15,-1.05l-0.56,-0.63l-2.36,-0.31l-0.56,-0.3l-0.24,-0.79l-0.5,-0.18l-0.97,0.35l-0.84,-0.26l-1.1,0.4l-0.97,-1.47l-0.89,-0.22ZM61.85,39.78l0.16,0.74l-0.42,0.49l0.0,-0.91l0.26,-0.31ZM71.27,20.38l-0.61,0.87l-0.15,0.52l0.11,-1.01l0.65,-0.38ZM71.14,15.62l-0.09,-0.05l0.05,-0.04l0.04,0.1ZM70.37,15.48l-0.77,0.39l0.37,-0.68l-0.07,-0.6l0.22,-0.07l0.25,0.97ZM57.56,42.45l0.05,-0.02l-0.01,0.01l-0.04,0.02ZM67.75,19.23l1.73,-2.1l0.47,-0.02l0.53,1.71l-0.35,-0.55l-0.51,-0.12l-0.55,0.44l-0.35,-0.09l-0.35,0.73l-0.63,-0.01ZM67.87,20.4l0.44,0.0l0.61,0.5l0.08,0.35l-0.79,-0.2l-0.33,-0.65ZM68.84,23.16l-0.1,0.51l-0.0,0.0l-0.02,-0.24l0.12,-0.28ZM69.15,25.42l0.08,0.04l0.12,-0.04l-0.16,0.11l-0.05,-0.1ZM69.52,25.33l0.48,-0.93l1.02,1.21l0.11,1.12l-0.34,0.36l-0.34,-0.09l-0.27,-1.55l-0.67,-0.12ZM66.34,9.97l0.48,-0.34l0.18,1.51l-0.22,-0.05l-0.44,-1.12ZM68.04,9.66l0.83,0.8l-0.65,0.31l-0.18,-1.11ZM66.69,38.03l0.34,-1.07l0.21,-0.25l-0.03,1.07l-0.52,0.26ZM66.99,33.31l0.1,-1.04l0.35,-0.34l-0.23,1.56l-0.22,-0.18ZM66.51,14.27l-0.41,-0.4l0.6,-0.75l-0.18,0.61l-0.01,0.55ZM66.68,14.62l0.4,0.2l-0.08,0.12l-0.29,-0.12l-0.03,-0.2ZM66.74,12.96l-0.01,-0.1l0.05,-0.12l-0.04,0.23ZM64.36,13.12l-1.06,-0.82l0.19,-1.81l1.33,1.92l-0.35,0.18l-0.11,0.54ZM62.18,42.55l0.23,-0.25l0.02,0.01l-0.13,0.31l-0.12,-0.07ZM60.04,40.3l-0.09,-0.19l0.04,-0.07l0.0,0.13l0.05,0.14Z", "name": "Washington"}, "US-KS": {"path": "M477.9,239.67l0.44,0.63l0.76,0.18l1.04,0.8l2.19,-1.08l-0.0,0.75l1.08,0.79l0.23,1.44l-0.95,-0.15l-0.6,0.31l-0.17,0.97l-1.14,1.37l-0.06,1.14l-0.79,0.5l0.04,0.64l1.56,2.1l2.0,1.49l0.2,1.13l0.42,0.86l0.74,0.56l0.32,1.11l1.89,0.91l1.54,0.26l2.67,46.82l-31.55,1.48l-31.97,0.88l-31.98,0.26l-32.05,-0.37l1.21,-65.47l27.9,0.35l27.86,-0.14l27.85,-0.64l27.68,-1.12l1.65,1.23Z", "name": "Kansas"}, "US-WI": {"path": "M598.7,107.43l0.83,-0.15l-0.13,0.81l-0.56,0.01l-0.14,-0.68ZM594.22,116.05l0.47,-0.41l0.26,-2.36l0.95,-0.25l0.64,-0.69l0.22,-1.4l0.41,-0.63l0.63,-0.03l0.06,0.38l-0.76,0.06l-0.18,0.51l0.17,1.27l-0.38,0.17l-0.11,0.58l0.56,0.57l-0.24,0.65l-0.5,0.33l-0.69,1.91l0.07,1.23l-1.05,2.28l-0.41,0.15l-0.86,-0.97l-0.19,-0.72l0.31,-1.57l0.62,-1.05ZM510.06,124.08l0.41,-0.27l0.28,-0.9l-0.45,-1.48l0.04,-1.91l0.7,-1.16l0.53,-2.25l-1.61,-2.91l-0.83,-0.36l-1.28,-0.01l-0.21,-2.31l1.67,-2.26l-0.05,-0.77l0.77,-1.55l1.95,-1.09l0.48,-0.75l0.97,-0.25l0.45,-0.75l1.16,-0.14l1.04,-1.56l-0.97,-12.11l1.03,-0.35l0.22,-1.1l0.73,-0.97l0.78,0.69l1.68,0.64l2.61,-0.56l3.28,-1.57l2.65,-0.82l2.21,-2.12l0.31,0.29l1.39,-0.11l1.25,-1.48l0.79,-0.58l1.04,-0.1l0.4,-0.52l1.07,0.99l-0.48,1.68l-0.67,1.01l0.23,1.61l-1.21,2.21l0.64,0.66l2.5,-1.09l0.72,-0.86l2.16,1.22l2.34,0.47l0.44,0.54l0.86,-0.13l1.6,0.7l2.23,3.54l15.48,2.52l4.65,1.96l1.68,-0.17l1.63,0.42l1.33,-0.59l3.17,0.71l2.18,0.09l0.85,0.41l0.56,0.89l-0.42,1.09l0.41,0.77l3.4,0.63l1.41,1.13l-0.16,0.71l0.59,1.11l-0.36,0.81l0.43,1.25l-0.78,1.25l-0.03,1.76l0.91,0.63l1.38,-0.26l1.02,-0.72l0.2,0.26l-0.79,2.44l0.04,1.31l1.32,1.46l0.84,0.35l-0.24,2.02l-2.42,1.2l-0.51,0.79l0.04,1.26l-1.61,3.49l-0.4,3.5l1.11,0.82l0.92,-0.04l0.5,-0.36l0.49,-1.37l1.82,-1.47l0.66,-2.53l1.06,-1.7l0.14,0.25l0.45,-0.07l0.57,-0.7l0.88,-0.4l1.12,1.12l0.59,0.19l-0.29,2.21l-1.18,2.82l-0.56,5.58l0.23,1.11l0.8,0.93l0.07,0.52l-0.51,0.98l-1.3,1.34l-0.86,3.89l0.15,2.57l0.72,1.2l0.06,1.24l-1.07,3.22l0.12,2.12l-0.73,2.11l-0.28,2.47l0.59,2.02l-0.04,1.32l0.49,0.54l-0.21,1.7l0.92,0.78l0.54,2.43l1.2,1.54l0.08,1.69l-0.33,1.45l0.47,2.95l-44.2,4.6l-0.19,-0.79l-1.56,-2.19l-4.94,-0.84l-1.06,-1.35l-0.36,-1.69l-0.9,-1.21l-0.86,-4.9l1.04,-2.62l-0.09,-0.99l-0.71,-0.79l-1.44,-0.48l-0.71,-1.76l-0.47,-6.02l-0.7,-1.4l-0.52,-2.56l-1.15,-0.6l-1.1,-1.56l-0.93,-0.11l-1.17,-0.75l-1.71,0.09l-2.67,-1.79l-2.3,-3.5l-2.64,-2.1l-2.94,-0.53l-0.73,-1.24l-1.12,-1.0l-3.12,-0.45l-3.53,-2.74l0.45,-1.24l-0.12,-1.61l0.25,-0.81l-0.88,-3.11ZM541.58,78.25l0.05,-0.28l0.03,0.16l-0.08,0.12ZM537.91,83.72l0.28,-0.21l0.05,0.08l-0.33,0.12Z", "name": "Wisconsin"}, "US-OR": {"path": "M10.69,140.12l0.01,-1.77l0.5,-0.84l0.32,-1.95l1.12,-1.91l0.24,-1.9l-0.72,-2.57l-0.33,-0.15l-0.12,-1.81l3.04,-3.82l2.5,-5.98l0.01,0.77l0.52,0.52l0.49,-0.28l0.6,-1.6l0.47,-0.48l0.31,0.98l1.12,0.41l0.33,-0.54l-0.45,-1.76l0.27,-0.87l-0.45,-0.14l-0.79,0.32l1.74,-3.16l1.13,-0.96l0.89,0.3l0.49,-0.29l-0.47,-1.08l-0.81,-0.4l1.77,-4.63l0.47,-0.57l0.02,-0.99l1.08,-2.67l0.62,-2.6l1.04,-1.92l0.33,0.28l0.66,-0.33l-0.04,-0.6l-0.76,-0.62l1.06,-2.6l0.32,0.22l0.59,-0.19l0.13,-0.35l-0.04,-0.51l-0.57,-0.32l0.85,-3.84l1.23,-1.8l0.83,-3.04l1.14,-1.76l0.83,-2.45l0.26,-1.21l-0.18,-0.5l1.19,-1.08l-0.32,-1.64l0.96,0.57l0.78,-0.63l-0.39,-0.75l0.2,-0.65l-0.77,-0.77l0.51,-1.07l1.3,-0.86l0.06,-0.46l-0.93,-0.34l-0.33,-1.25l0.97,-2.14l-0.04,-1.48l0.86,-0.53l0.58,-1.33l0.18,-1.96l-0.21,-1.45l0.83,1.17l0.6,0.18l-0.11,0.89l0.55,0.53l0.83,-0.96l-0.27,-0.99l0.21,-0.07l0.24,0.56l0.69,0.32l1.51,0.04l0.37,-0.36l1.37,-0.19l0.99,2.08l2.43,0.92l1.25,-0.64l0.78,0.04l1.72,1.51l0.77,1.04l0.21,1.9l0.43,0.78l-0.03,2.05l-0.39,1.24l0.19,0.93l-0.43,1.74l0.26,1.45l0.79,0.85l1.94,0.56l1.44,1.05l1.36,0.41l1.04,0.69l4.98,-0.53l2.9,-1.06l1.14,0.51l2.23,0.09l4.24,1.43l0.69,0.54l0.19,1.15l0.57,0.58l1.86,-0.27l2.11,0.71l3.79,-0.55l0.69,-0.42l2.19,0.93l1.64,0.24l1.2,-0.3l0.88,0.26l1.89,-0.78l3.07,-0.43l4.16,0.13l1.61,-0.91l7.17,1.02l0.96,-0.19l0.79,-0.58l31.27,5.93l0.23,1.81l0.93,1.82l1.16,0.63l1.96,1.86l0.57,2.45l-0.16,1.0l-3.69,4.55l-0.4,1.41l-1.39,2.63l-2.21,2.42l-0.65,2.68l-1.49,1.84l-2.23,1.5l-1.92,3.35l-1.49,1.27l-0.62,2.02l-0.12,1.87l0.28,0.92l0.56,0.61l0.54,0.04l0.39,-0.35l0.63,0.76l0.89,-0.05l0.07,0.88l0.81,0.95l-0.46,1.0l-0.65,0.06l-0.33,0.4l0.21,1.8l-1.03,2.56l-1.22,1.41l-6.86,39.16l-26.21,-4.99l-28.9,-6.05l-28.8,-6.61l-28.95,-7.24l-1.48,-2.59l0.2,-2.36l-0.23,-0.89Z", "name": "Oregon"}, "US-KY": {"path": "M583.02,306.59l0.35,-2.18l1.13,0.96l0.72,0.2l0.75,-0.36l0.46,-0.88l0.87,-3.55l-0.54,-1.75l0.38,-0.86l-0.1,-1.88l-1.27,-2.04l1.79,-3.21l1.24,-0.51l0.73,0.06l7.03,2.56l0.81,-0.2l0.65,-0.72l0.24,-1.93l-1.49,-2.14l-0.24,-1.44l0.2,-0.87l0.4,-0.52l1.1,-0.18l1.24,-0.83l3.0,-0.95l0.64,-0.51l0.15,-1.13l-1.53,-2.05l-0.08,-0.68l1.33,-1.97l0.14,-1.16l1.25,0.42l1.12,-1.33l-0.68,-2.0l1.92,0.9l1.72,-0.84l0.03,1.18l1.0,0.46l0.99,-0.94l0.02,-1.36l0.51,0.16l1.9,-0.96l4.41,1.52l0.64,0.94l0.86,0.18l0.59,-0.59l0.73,-2.53l1.38,-0.55l1.39,-1.34l0.86,1.29l0.77,0.42l1.16,-0.13l0.11,0.75l0.95,0.19l0.67,-0.62l0.03,-1.01l0.84,-0.38l0.26,-0.48l-0.25,-2.09l0.84,-0.4l0.34,-0.56l-0.06,-0.69l1.25,-0.56l0.34,-0.72l0.38,1.47l0.61,0.6l1.46,0.64l1.25,-0.0l1.11,0.81l0.53,-0.11l0.26,-0.55l1.1,-0.46l0.53,-0.69l0.04,-3.48l0.85,-2.18l1.02,0.18l1.55,-1.19l0.75,-3.46l1.04,-0.37l1.65,-2.23l0.0,-0.81l-1.18,-2.88l2.78,-0.59l1.54,0.81l3.85,-2.82l2.23,-0.46l-0.18,-1.07l0.36,-1.47l-0.32,-0.36l-1.22,-0.04l0.58,-1.39l-1.09,-1.54l1.65,-1.83l1.81,1.18l0.92,-0.11l1.93,-1.01l0.78,0.88l1.76,0.54l0.57,1.28l0.94,0.92l0.79,1.84l2.6,0.67l1.87,-0.57l1.63,0.27l2.18,1.85l0.96,0.43l1.28,-0.18l0.61,-1.31l0.99,-0.54l1.35,0.5l1.34,0.04l1.33,1.09l1.26,-0.69l1.41,-0.15l1.81,-2.55l1.72,-1.03l0.92,2.35l0.7,0.83l2.45,0.81l1.35,0.97l0.75,1.05l0.93,3.35l-0.37,0.45l0.09,0.72l-0.44,0.61l0.02,0.53l2.24,2.62l1.35,0.92l-0.08,0.89l1.34,0.97l0.58,1.36l1.55,1.2l0.98,1.62l2.14,0.84l1.09,1.12l2.14,0.25l-4.86,6.13l-5.06,4.16l-0.42,0.86l0.22,1.25l-2.07,1.93l0.04,1.64l-3.06,1.63l-0.8,2.38l-1.71,0.6l-2.7,1.83l-1.66,0.48l-3.39,2.42l-23.95,3.09l-8.8,1.42l-7.47,0.86l-7.68,0.46l-22.71,3.52l-0.64,-0.56l-3.63,0.09l-0.41,0.6l1.03,3.57l-23.0,2.73ZM580.9,306.78l-0.59,0.08l-0.06,-0.55l0.47,-0.01l0.18,0.49Z", "name": "Kentucky"}, "US-CO": {"path": "M364.18,239.57l-1.22,65.87l-29.29,-0.9l-29.38,-1.43l-29.35,-1.95l-32.17,-2.75l8.33,-87.15l27.79,2.4l28.23,1.92l29.58,1.46l27.95,0.87l-0.46,21.66Z", "name": "Colorado"}, "US-OH": {"path": "M664.99,178.81l1.67,0.47l1.04,-0.3l1.74,1.07l2.07,0.26l1.47,1.18l1.71,0.23l-2.19,1.18l-0.12,0.47l0.42,0.24l2.46,0.19l1.39,-1.1l1.77,-0.25l3.39,0.96l0.92,-0.08l1.48,-1.29l1.74,-0.6l1.15,-0.96l1.91,-0.97l2.62,-0.03l1.09,-0.62l1.24,-0.06l1.07,-0.8l4.24,-5.46l4.53,-3.47l6.92,-4.36l5.83,28.05l-0.51,0.54l-1.28,0.43l-0.41,0.95l1.65,2.24l0.02,2.11l0.41,0.26l0.31,0.94l-0.04,0.76l-0.54,0.83l-0.5,4.08l0.18,3.21l-0.58,0.41l0.34,1.11l-0.35,1.74l-0.39,0.54l0.76,1.23l-0.25,1.87l-2.41,2.65l-0.82,1.86l-1.37,1.5l-1.24,0.67l-0.6,0.7l-0.87,-0.92l-1.18,0.14l-1.32,1.74l-0.09,1.32l-1.78,0.85l-0.78,2.25l0.28,1.58l-0.94,0.85l0.3,0.67l0.63,0.41l0.27,1.3l-0.8,0.17l-0.5,1.6l0.06,-0.93l-0.91,-1.26l-1.53,-0.55l-1.07,0.71l-0.82,1.98l-0.34,2.69l-0.53,0.82l1.22,3.58l-1.27,0.39l-0.28,0.42l-0.25,3.12l-2.66,1.2l-1.0,0.05l-0.76,-1.06l-1.51,-1.1l-2.34,-0.73l-1.17,-1.92l-0.31,-1.14l-0.42,-0.33l-0.73,0.13l-1.84,1.17l-1.1,1.29l-0.4,1.05l-1.43,0.15l-0.87,0.61l-1.11,-1.0l-3.14,-0.59l-1.37,0.72l-0.53,1.25l-0.71,0.05l-3.04,-2.26l-1.93,-0.29l-1.77,0.56l-2.14,-0.52l-0.55,-1.54l-0.96,-0.97l-0.63,-1.38l-2.03,-0.76l-1.14,-1.01l-0.97,0.26l-1.31,0.89l-0.46,0.03l-1.79,-1.23l-0.61,0.2l-0.6,0.71l-8.53,-55.69l20.43,-4.26ZM675.61,181.34l0.53,-0.79l0.67,0.41l-0.48,0.35l-0.72,0.03ZM677.31,180.77l0.01,-0.0l0.01,-0.0l-0.02,0.0Z", "name": "Ohio"}, "US-OK": {"path": "M399.06,359.31l-0.05,-42.03l-0.39,-0.4l-26.69,-0.22l-25.13,-0.6l0.31,-10.23l36.7,0.74l36.0,-0.07l35.99,-0.86l35.56,-1.62l0.6,10.68l4.55,24.34l1.41,37.88l-1.2,-0.22l-0.29,-0.36l-2.13,-0.21l-0.82,-0.79l-2.11,-0.39l-1.77,-2.05l-1.23,-0.22l-2.25,-1.57l-1.5,-0.4l-0.8,0.46l-0.23,0.88l-0.82,0.24l-0.46,0.62l-2.47,-0.14l-0.47,-0.19l-0.27,-0.68l-1.05,-0.61l-2.3,1.29l-1.17,0.2l-0.19,0.56l-0.63,0.28l-2.12,-0.77l-1.7,1.18l-1.17,0.08l-0.89,0.42l-0.83,1.37l-1.48,0.06l-0.57,1.25l-1.26,-1.55l-1.7,-0.1l-0.32,-0.58l-1.21,-0.46l-0.02,-0.96l-0.44,-0.5l-1.24,-0.18l-0.73,1.38l-0.66,0.11l-0.84,-0.5l-0.97,0.07l-0.71,-1.51l-1.09,-0.35l-1.17,0.57l-0.45,1.7l-0.7,-0.08l-0.49,0.43l0.29,0.73l-0.51,1.68l-0.43,0.19l-0.55,-0.55l-0.3,-0.91l0.39,-1.65l-0.75,-0.86l-0.8,0.18l-0.49,0.76l-0.84,-0.18l-0.92,0.98l-1.07,0.13l-0.53,-1.36l-1.99,-0.19l-0.3,-1.48l-1.19,-0.53l-0.82,0.33l-2.12,2.15l-1.21,0.51l-0.97,-0.38l0.19,-1.25l-0.28,-1.13l-2.33,-0.68l-0.07,-2.18l-0.43,-0.55l-2.11,0.39l-2.52,-0.25l-0.64,0.26l-0.81,1.21l-0.95,0.06l-1.77,-1.77l-0.97,-0.12l-1.5,0.56l-2.68,-0.63l-1.86,-1.0l-1.05,0.25l-2.46,-0.3l-0.17,-2.12l-0.85,-0.87l-0.44,-1.02l-1.16,-0.41l-0.7,-0.83l-0.83,0.08l-0.44,1.64l-2.22,-0.68l-1.07,0.6l-0.96,-0.09l-3.79,-3.78l-1.12,-0.43l-0.8,0.08Z", "name": "Oklahoma"}, "US-WV": {"path": "M693.03,248.42l3.95,-1.54l0.35,-0.71l0.12,-2.77l1.15,-0.22l0.4,-0.61l-0.57,-2.49l-0.61,-1.24l0.49,-0.64l0.36,-2.77l0.68,-1.66l0.45,-0.39l1.24,0.55l0.41,0.71l-0.14,1.13l0.71,0.46l0.78,-0.44l0.48,-1.42l0.49,0.21l0.57,-0.2l0.2,-0.44l-0.63,-2.09l-0.75,-0.55l0.81,-0.79l-0.26,-1.71l0.74,-2.0l1.65,-0.51l0.17,-1.6l1.02,-1.42l0.43,-0.08l0.65,0.79l0.67,0.19l2.28,-1.59l1.5,-1.64l0.79,-1.83l2.45,-2.67l0.37,-2.41l-0.73,-1.0l0.71,-2.33l-0.25,-0.76l0.59,-0.58l-0.27,-3.43l0.47,-3.93l0.53,-0.8l0.08,-1.11l-0.38,-1.21l-0.39,-0.33l-0.04,-2.01l-1.57,-1.91l0.44,-0.54l0.85,-0.1l0.3,-0.33l4.03,19.34l0.47,0.31l16.6,-3.55l2.17,10.68l0.5,0.37l2.06,-2.5l0.97,-0.56l0.34,-1.03l1.63,-1.99l0.25,-1.05l0.52,-0.4l1.19,0.45l0.74,-0.32l1.32,-2.6l0.6,-0.46l-0.04,-0.85l0.42,0.59l1.81,0.52l3.2,-0.57l0.78,-0.86l0.07,-1.46l2.0,-0.74l1.02,-1.69l0.67,-0.1l3.16,1.5l1.81,-0.71l-0.45,1.02l0.56,0.92l1.27,0.42l0.09,0.96l1.13,0.43l0.09,1.2l0.33,0.42l-0.58,3.64l-9.0,-4.48l-0.64,0.24l-0.31,1.14l0.38,1.61l-0.52,1.62l0.41,2.28l-1.36,2.4l-0.42,1.76l-0.72,0.53l-0.42,1.11l-0.27,0.21l-0.61,-0.23l-0.37,0.33l-1.25,3.28l-1.84,-0.78l-0.64,0.25l-0.94,2.77l0.08,1.47l-0.73,1.14l-0.19,2.33l-0.89,2.2l-3.25,-0.36l-1.44,-1.76l-1.71,-0.24l-0.5,0.41l-0.26,2.17l0.19,1.3l-0.32,1.45l-0.49,0.45l-0.31,1.04l0.23,0.92l-1.58,2.44l-0.04,2.1l-0.52,2.0l-2.58,4.73l-0.75,3.16l0.14,0.76l1.14,0.55l-1.08,1.38l0.06,0.6l0.45,0.4l-2.16,2.13l-0.55,-0.7l-0.84,0.15l-3.12,2.53l-1.03,-0.56l-1.32,0.26l-0.44,0.91l0.45,1.17l-0.91,0.91l-0.73,-0.05l-2.27,1.0l-1.21,0.96l-2.18,-1.36l-0.73,-0.01l-0.82,1.58l-1.1,0.49l-1.22,1.46l-1.08,0.08l-1.98,-1.09l-1.31,-0.01l-0.61,-0.74l-1.19,-0.6l-0.31,-1.33l-0.89,-0.55l0.36,-0.67l-0.3,-0.81l-0.85,-0.37l-0.84,0.25l-1.33,-0.17l-1.26,-1.19l-2.06,-0.79l-0.76,-1.43l-1.58,-1.24l-0.7,-1.49l-1.0,-0.6l-0.12,-1.09l-1.38,-0.95l-2.0,-2.27l0.71,-2.03l-0.25,-1.62l-0.66,-1.46Z", "name": "West Virginia"}, "US-WY": {"path": "M218.53,207.02l10.1,-86.6l25.46,2.74l26.8,2.4l26.83,1.91l27.85,1.46l-3.67,87.11l-27.32,-1.41l-28.21,-1.97l-29.69,-2.63l-28.14,-3.02Z", "name": "Wyoming"}, "US-UT": {"path": "M178.67,180.38l41.53,5.44l-2.51,21.5l0.35,0.45l32.24,3.43l-8.33,87.15l-42.54,-4.67l-42.41,-5.77l16.08,-108.34l5.58,0.82ZM187.74,191.46l-0.3,0.04l-0.25,0.62l0.74,3.68l-0.81,0.19l-0.5,1.31l1.15,0.59l0.35,-0.84l0.37,-0.18l0.92,1.14l0.83,1.68l-0.25,1.0l0.16,1.45l-0.4,0.77l0.4,0.52l-0.05,0.56l1.58,1.84l0.02,0.59l1.13,1.92l0.71,-0.1l0.83,-1.74l0.08,2.28l0.53,0.94l0.06,1.8l0.99,0.47l1.65,-0.67l2.48,-1.77l0.37,-1.25l3.32,-1.44l0.17,-0.54l-0.52,-1.02l-0.68,-0.84l-1.36,-0.7l-1.87,-4.59l-0.87,-0.46l0.87,-0.92l1.3,0.6l1.33,-0.15l0.92,-0.83l-0.06,-1.12l-1.55,-0.5l-0.81,0.42l-1.17,-0.12l0.27,-0.76l-0.58,-0.79l-1.86,-0.22l-0.56,1.13l0.28,0.78l-0.35,0.69l0.55,2.44l-0.91,0.32l-0.34,-0.42l0.22,-1.8l-0.42,-0.69l-0.06,-1.74l-0.68,-0.6l-1.32,-0.11l-1.07,-1.55l-0.19,-0.69l0.64,-0.55l0.36,-1.29l-0.83,-1.38l-1.23,-0.28l-0.99,0.81l-2.73,0.2l-0.35,0.63l0.62,0.83l-0.28,0.43ZM199.13,204.0l0.03,0.02l0.04,0.11l-0.07,-0.13ZM199.17,204.81l0.31,0.91l-0.18,0.9l-0.39,-0.93l0.25,-0.88Z", "name": "Utah"}, "US-IN": {"path": "M600.86,189.63l1.43,0.87l2.1,0.14l1.52,-0.38l2.63,-1.39l2.73,-2.1l32.3,-4.83l8.81,57.45l-0.66,1.15l0.3,0.92l0.81,0.79l-0.66,1.14l0.49,0.8l1.12,0.04l-0.36,1.14l0.18,0.51l-1.81,0.29l-3.18,2.55l-0.43,0.17l-1.4,-0.81l-3.46,0.91l-0.09,0.78l1.19,3.1l-1.4,1.88l-1.18,0.49l-0.45,0.89l-0.31,2.6l-1.11,0.88l-1.06,-0.24l-0.47,0.47l-0.85,1.95l0.05,3.14l-0.39,1.0l-1.38,0.85l-0.93,-0.68l-1.24,0.01l-1.48,-0.69l-0.62,-1.84l-1.89,-0.73l-0.44,0.3l-0.04,0.5l0.83,0.68l-0.62,0.31l-0.89,-0.35l-0.36,0.29l-0.04,0.48l0.54,0.93l-1.08,0.68l0.14,2.37l-1.06,0.65l-0.0,0.83l-0.16,0.37l0.08,-0.5l-0.33,-0.51l-1.6,0.18l-1.4,-1.69l-0.5,-0.08l-1.67,1.5l-1.57,0.69l-1.07,2.89l-0.81,-1.07l-2.79,-0.77l-1.11,-0.61l-1.08,-0.18l-1.76,0.92l-0.64,-1.02l-0.58,-0.18l-0.53,0.56l0.64,1.86l-0.34,0.84l-0.28,0.09l-0.02,-1.18l-0.42,-0.4l-0.58,0.01l-1.46,0.79l-1.41,-0.84l-0.85,0.0l-0.48,0.95l0.71,1.55l-0.49,0.74l-1.15,-0.39l-0.07,-0.54l-0.53,-0.44l0.55,-0.63l-0.35,-3.09l0.96,-0.78l-0.07,-0.58l-0.44,-0.23l0.69,-0.46l0.25,-0.61l-1.17,-1.47l0.46,-1.16l0.32,0.19l1.39,-0.55l0.33,-1.8l0.55,-0.4l0.44,-0.92l-0.06,-0.83l1.52,-1.07l0.06,-0.69l-0.41,-0.93l0.57,-0.86l0.14,-1.29l0.87,-0.51l0.4,-1.91l-1.08,-2.54l0.22,-0.8l-0.16,-1.11l-0.93,-0.91l-0.61,-1.5l-1.05,-0.78l-0.04,-0.59l0.92,-1.39l-0.63,-2.25l1.27,-1.31l-6.5,-50.68Z", "name": "Indiana"}, "US-IL": {"path": "M540.07,225.55l0.86,-0.35l0.37,-0.67l-0.23,-2.33l-0.73,-0.93l0.15,-0.41l0.72,-0.69l2.42,-0.98l0.71,-0.65l0.63,-1.68l0.17,-2.11l1.65,-2.47l0.27,-0.94l-0.03,-1.22l-0.59,-1.95l-2.23,-1.88l-0.11,-1.77l0.67,-2.38l0.45,-0.37l4.6,-0.85l0.81,-0.41l0.82,-1.12l2.55,-1.0l1.43,-1.56l-0.01,-1.57l0.4,-1.71l1.42,-1.46l0.29,-0.74l0.33,-4.37l-0.76,-2.14l-4.02,-2.47l-0.28,-1.5l-0.48,-0.82l-3.64,-2.48l44.58,-4.64l-0.01,2.66l0.57,2.59l1.37,2.49l1.31,0.95l0.76,2.6l1.26,2.71l1.42,1.84l6.6,51.49l-1.22,1.13l-0.1,0.69l0.67,1.76l-0.84,1.09l-0.03,1.11l1.19,1.09l0.56,1.41l0.89,0.82l-0.1,1.8l1.06,2.31l-0.28,1.49l-0.87,0.56l-0.21,1.47l-0.59,0.93l0.34,1.2l-1.48,1.13l-0.23,0.41l0.28,0.7l-0.93,1.17l-0.31,1.19l-1.64,0.67l-0.63,1.67l0.15,0.8l0.97,0.83l-1.27,1.15l0.42,0.76l-0.49,0.23l-0.13,0.54l0.43,2.94l-1.15,0.19l0.08,0.45l0.92,0.78l-0.48,0.17l-0.03,0.64l0.83,0.29l0.04,0.42l-1.31,1.97l-0.25,1.19l0.59,1.22l0.7,0.64l0.37,1.08l-3.31,1.22l-1.19,0.82l-1.24,0.24l-0.77,1.01l-0.18,2.04l0.3,0.88l1.4,1.93l0.07,0.54l-0.53,1.19l-0.96,0.03l-6.3,-2.43l-1.08,-0.08l-1.57,0.64l-0.68,0.72l-1.44,2.95l0.06,0.66l-1.18,-1.2l-0.79,0.14l-0.35,0.47l0.59,1.13l-1.24,-0.79l-0.01,-0.68l-1.6,-2.21l-0.4,-1.12l-0.76,-0.37l-0.05,-0.49l0.94,-1.35l0.2,-1.03l-0.32,-1.01l-1.44,-2.02l-0.47,-3.18l-2.26,-0.99l-1.55,-2.14l-1.95,-0.82l-1.72,-1.34l-1.56,-0.14l-1.82,-0.96l-2.32,-1.78l-2.34,-2.44l-0.36,-1.95l2.37,-6.85l-0.25,-2.32l0.98,-2.06l-0.38,-0.84l-2.66,-1.45l-2.59,-0.67l-1.29,0.45l-0.86,1.45l-0.46,0.28l-0.44,-0.13l-1.3,-1.9l-0.43,-1.52l0.16,-0.87l-0.54,-0.91l-0.29,-1.65l-0.83,-1.36l-0.94,-0.9l-4.11,-2.52l-1.01,-1.64l-4.53,-3.53l-0.73,-1.9l-1.04,-1.21l-0.04,-1.6l-0.96,-1.48l-0.75,-3.54l0.1,-2.94l0.6,-1.28ZM585.52,295.52l0.05,0.05l0.04,0.04l-0.05,-0.0l-0.04,-0.09Z", "name": "Illinois"}, "US-AK": {"path": "M89.36,517.03l0.84,0.08l0.09,0.36l-0.3,0.32l-0.64,0.3l-0.15,-0.15l0.25,-0.4l-0.12,-0.31l0.04,-0.2ZM91.79,517.2l0.42,-0.02l0.19,-0.11l0.26,-0.56l1.74,-0.37l2.26,0.07l1.57,0.63l0.84,0.69l0.02,1.85l0.32,0.18l0.0,0.34l0.25,0.27l-0.35,0.09l-0.25,-0.16l-0.23,0.08l-0.41,-0.33l-0.29,-0.04l-0.69,0.23l-0.91,-0.21l-0.07,-0.26l-0.24,-0.17l0.27,-0.21l0.74,0.72l0.46,-0.02l0.2,-0.48l-0.28,-0.44l-0.03,-0.3l-0.31,-0.67l-0.96,-0.52l-1.05,0.27l-0.57,0.69l-1.04,0.3l-0.44,-0.3l-0.48,0.12l-0.06,0.12l-0.63,-0.14l-0.26,0.06l-0.22,0.24l0.2,-0.3l-0.1,-0.55l0.12,-0.79ZM99.83,520.19l0.3,-0.07l0.29,-0.28l-0.03,-0.55l0.31,0.2l-0.06,0.45l0.83,0.92l-0.93,-0.51l-0.44,0.41l-0.13,-0.54l-0.13,-0.04ZM100.07,520.81l0.0,0.04l-0.03,0.0l0.02,-0.04ZM102.01,520.78l0.05,-0.34l0.33,-0.2l0.01,-0.12l-0.58,-1.24l0.1,-0.2l0.59,-0.24l0.29,-0.3l0.65,-0.34l0.62,-0.01l0.41,-0.13l0.81,0.1l1.42,-0.06l0.64,0.15l0.49,0.27l0.88,0.11l0.27,0.15l0.23,-0.22l0.27,-0.05l0.39,0.09l0.2,0.21l0.26,-0.05l0.2,0.38l0.44,0.31l0.1,0.23l0.7,-0.06l0.3,-0.77l0.44,-0.61l0.47,-0.21l1.78,-0.45l0.5,0.04l0.37,0.23l1.13,-0.38l0.66,0.04l-0.11,0.41l0.43,0.51l0.42,0.26l0.62,0.06l0.42,-0.43l0.14,-0.42l-0.34,-0.29l-0.31,-0.03l0.15,-0.44l-0.15,-0.38l1.04,-1.0l0.83,-0.99l0.12,-0.08l0.34,0.17l0.38,-0.02l0.32,0.3l0.19,0.37l0.66,-0.29l-0.1,-0.57l-0.43,-0.58l-0.46,-0.24l0.15,-0.44l0.77,-0.47l0.36,0.04l0.68,-0.2l0.8,-0.08l0.58,0.18l0.45,-0.16l-0.12,-0.52l0.66,-0.6l0.4,0.06l0.26,-0.11l0.43,-0.52l0.34,-0.12l0.23,-0.46l-0.42,-0.3l-0.38,0.03l-0.33,0.15l-0.36,0.39l-0.51,-0.09l-0.5,0.27l-2.19,-0.52l-1.69,-0.24l-0.71,-0.26l-0.12,-0.2l0.17,-0.32l0.04,-0.44l-0.28,-0.56l0.45,-0.35l0.43,-0.13l0.36,0.38l0.04,0.25l-0.15,0.44l0.07,0.39l0.56,0.12l0.32,-0.15l-0.03,-0.3l0.16,-0.35l-0.05,-0.75l-0.84,-1.05l0.01,-0.7l-0.67,-0.19l-0.19,0.24l-0.06,0.48l-0.41,0.22l-0.09,0.03l-0.26,-0.56l-0.34,-0.09l-0.51,0.41l-0.02,0.26l-0.15,0.15l-0.38,-0.02l-0.48,0.27l-0.24,0.54l-0.22,1.13l-0.13,0.32l-0.19,0.05l-0.31,-0.31l0.1,-2.67l-0.23,-0.99l0.19,-0.33l0.02,-0.27l-0.16,-0.29l-0.53,-0.27l-0.46,0.26l-0.1,-0.07l-0.35,0.13l-0.01,-0.54l-0.54,-0.61l0.19,-0.22l0.08,-0.65l-0.16,-0.37l-0.55,-0.26l-1.89,-0.01l-0.58,-0.34l-1.01,-0.12l-0.16,-0.12l-0.07,-0.22l-0.23,-0.07l-1.06,0.53l-0.75,-0.16l-0.12,-0.44l0.3,0.09l0.48,-0.08l0.31,-0.44l-0.21,-0.49l0.37,-0.49l0.83,0.04l0.43,-0.16l0.12,-0.35l-0.14,-0.42l-1.11,-0.64l0.09,-0.27l0.34,-0.17l0.38,-0.44l1.12,-0.0l0.23,-0.09l0.19,-0.32l0.03,-0.95l0.22,-0.54l0.07,-1.42l0.25,-0.45l-0.08,-0.58l0.07,-0.2l0.88,-0.74l0.02,-0.1l-0.09,-0.02l0.19,-0.16l-0.31,-0.35l-0.27,0.05l-0.04,-0.25l-0.09,-0.04l0.57,-0.22l0.33,-0.25l0.51,-0.1l0.24,-0.25l0.42,-0.0l0.19,0.18l0.41,0.08l0.29,-0.08l0.44,-0.55l-0.3,-0.34l-0.39,-0.07l-0.05,-0.33l-0.27,-0.31l-0.6,0.4l-0.43,-0.07l-1.12,0.62l-1.04,0.06l-0.34,0.18l-0.48,-0.03l-0.12,0.5l0.4,0.64l-0.26,0.19l-0.29,0.45l-0.19,-0.09l-0.17,-0.27l-0.76,-0.04l-1.16,-0.25l-0.81,-0.4l-1.05,-0.59l-0.78,-0.61l-0.52,-0.69l0.01,-0.21l0.6,-0.1l-0.06,-0.4l0.1,-0.24l-0.51,-1.06l0.1,-0.78l-0.18,-0.52l0.33,-0.54l-0.4,-0.34l-0.23,0.0l-0.44,-0.69l-0.01,-0.2l0.59,-0.14l0.3,-0.37l-0.05,-0.44l-0.36,-0.26l0.72,0.04l0.29,-0.13l0.18,-0.25l0.63,0.01l0.08,0.51l0.56,0.51l0.32,0.49l-0.03,0.09l-0.79,0.11l-0.53,0.51l0.31,0.45l0.94,-0.08l0.4,0.24l0.26,-0.01l0.39,-0.22l0.29,0.03l0.08,0.07l-0.51,0.6l-0.05,0.38l0.22,0.43l0.46,0.24l1.42,0.07l0.28,-0.17l0.16,-0.35l0.19,-0.08l-0.2,-0.74l0.35,-0.35l-0.02,-0.33l-0.18,-0.25l0.15,-0.43l-0.08,-0.13l-0.52,-0.26l-0.77,-0.01l-0.34,0.1l-1.51,-1.2l-0.01,-0.53l-0.35,-0.39l-0.26,-0.12l-0.15,-0.38l0.55,0.15l0.53,-0.4l-0.17,-0.41l-0.7,-0.51l0.4,-0.45l-0.14,-0.5l0.31,-0.15l0.27,0.08l0.44,-0.1l0.45,0.27l0.75,-0.04l0.67,-0.44l-0.08,-0.48l-0.18,-0.19l-0.48,-0.03l-0.51,0.16l-0.43,-0.19l-1.02,-0.02l-0.26,0.14l-0.44,0.04l-0.36,0.29l-0.62,0.09l-0.15,0.12l-0.15,0.42l-0.13,-0.19l0.27,-0.52l0.36,-0.24l-0.1,-0.44l-0.48,-0.6l0.03,-0.1l0.37,0.1l0.4,-0.18l0.16,-0.22l0.07,-0.36l-0.22,-0.6l0.55,0.23l0.42,-0.5l-0.44,-0.59l0.38,0.32l0.94,0.37l0.2,-0.44l0.14,0.01l-0.04,-0.54l0.12,-0.36l0.48,-0.28l0.49,0.01l1.96,-0.47l0.8,-0.03l0.3,0.25l-0.01,0.44l0.19,0.27l-0.27,0.16l0.13,0.47l0.35,0.15l0.74,0.01l0.29,-0.39l-0.13,-0.45l0.08,-0.34l1.21,-0.11l0.29,-0.63l-0.31,-0.24l-0.93,-0.04l0.03,-0.08l0.41,-0.03l0.15,-0.63l0.72,-0.27l0.86,0.88l0.32,0.11l0.38,-0.28l0.08,-0.27l-0.04,-0.41l-0.18,-0.26l0.34,0.0l0.69,0.32l0.35,0.31l0.54,0.81l-0.06,0.29l-0.38,-0.09l-0.52,0.21l-0.13,0.47l0.43,0.24l1.07,0.06l0.05,0.52l0.31,0.3l0.91,0.49l1.02,0.09l0.53,-0.18l0.41,0.17l0.49,-0.0l1.61,-0.32l0.1,0.49l1.67,0.97l0.28,0.31l0.53,0.32l1.06,0.37l1.81,-0.2l0.56,-0.21l0.47,-0.49l0.2,-0.57l0.15,-0.95l0.61,-1.1l0.01,-0.29l-0.24,-0.88l0.14,-0.05l-0.03,-0.19l0.58,0.25l0.2,-0.1l0.86,0.0l0.36,-0.17l0.41,-0.47l0.07,-0.93l-0.19,-0.43l0.22,-0.03l0.11,-0.44l-0.23,-0.32l-0.73,-0.39l-0.29,0.12l-0.43,-0.04l-0.52,0.2l-0.21,-0.12l-0.29,-0.6l-0.31,-0.29l-0.51,0.0l-0.02,0.1l-0.52,-0.04l-0.43,-0.31l-0.56,-0.02l-0.32,0.1l-1.04,-0.24l-0.48,0.03l-0.33,0.16l0.04,-0.42l-0.29,-0.71l-0.21,-0.97l-0.49,-0.23l-0.55,-0.08l-0.29,0.09l-0.47,-0.64l-0.48,-0.4l-0.5,-0.25l-1.14,-1.02l-0.95,-0.24l-0.2,-0.27l-0.49,-0.27l-0.11,-0.23l-0.63,-0.01l-0.04,0.13l-0.9,-1.22l-1.86,-2.14l-0.25,-0.55l-0.0,-0.32l0.07,-0.19l0.27,0.06l0.27,-0.13l0.35,-0.76l-0.41,-1.02l0.05,-0.11l0.4,0.19l0.51,-0.05l0.41,-0.17l0.51,0.66l0.43,0.23l0.48,-0.4l-0.02,-0.33l-0.32,-0.66l-0.48,-0.41l-0.46,-0.78l-0.84,-0.88l-0.12,-0.02l-0.98,-1.16l-0.33,-0.52l-0.04,-0.3l-0.46,-0.96l0.41,0.03l0.54,0.45l0.34,0.15l0.44,-0.1l0.12,-0.17l0.2,0.03l0.06,-0.15l0.18,0.03l0.17,0.41l0.2,0.18l1.09,0.35l1.08,-0.18l1.53,0.45l0.14,0.13l-0.06,0.06l0.19,0.45l0.88,0.89l1.03,0.47l0.56,-0.36l-0.06,-0.35l-0.37,-0.64l1.48,0.48l0.36,0.26l0.11,0.4l0.61,0.16l1.2,0.07l0.48,0.24l1.49,0.99l0.18,0.45l-0.34,0.04l-0.1,0.06l-0.4,0.34l-0.16,0.3l-0.6,-0.28l-0.52,-0.06l-0.12,0.69l0.62,0.52l0.02,0.52l0.16,0.37l0.28,0.32l0.91,0.59l0.18,0.29l0.46,0.4l0.69,0.3l0.39,0.29l-0.14,0.25l0.02,0.32l0.38,0.24l0.2,-0.05l0.26,0.12l0.44,0.49l0.56,0.16l0.39,0.46l-0.08,0.39l0.24,0.31l0.41,0.19l0.41,-0.15l0.03,-0.15l1.39,-0.46l0.24,0.52l0.24,0.25l-0.25,0.06l0.01,0.5l0.38,0.29l0.43,0.02l0.5,-0.24l0.36,-0.41l-0.05,-0.98l-0.45,-0.65l0.19,0.01l0.65,1.54l0.23,0.25l1.6,0.95l0.53,-0.01l0.29,-0.27l0.34,-0.59l-0.02,-0.44l0.3,-0.38l-0.16,-0.23l-0.72,-0.38l-0.44,-0.04l-0.49,-0.92l-0.89,-0.53l-0.42,-0.12l-0.61,0.21l-0.32,-0.28l-0.0,-0.43l-0.16,-0.19l-0.23,-0.71l0.64,-0.39l0.29,-0.02l0.35,0.29l0.32,0.05l0.37,-0.41l-0.0,-0.15l-0.75,-1.21l-1.13,-0.68l-0.06,-0.29l0.18,-0.28l-0.15,-0.48l-0.43,-0.23l-0.43,0.29l-0.42,0.07l-0.25,-0.44l-0.53,-0.4l-0.31,-0.1l-0.25,-0.41l-1.35,-1.4l0.59,-1.11l0.15,-1.07l-0.1,-1.05l-0.51,-1.13l-0.29,-1.11l-0.36,-0.48l-0.85,-2.25l-1.06,-1.45l-0.08,-0.73l-0.38,-0.89l0.17,-0.17l0.91,-0.32l1.04,-1.04l1.08,1.08l1.75,1.29l0.84,0.44l1.33,0.95l1.37,0.54l1.36,0.24l1.49,-0.09l0.3,0.11l0.42,-0.05l0.4,-0.16l0.23,-0.26l0.3,-0.14l0.42,-0.5l0.56,-0.03l0.17,-0.31l1.66,0.14l0.96,-0.29l0.5,0.12l0.03,0.15l0.87,0.52l0.35,0.13l0.52,-0.01l0.77,0.56l0.91,0.33l0.1,0.2l0.28,-0.04l0.42,0.16l1.99,0.27l-0.05,0.31l0.11,0.18l-0.18,0.06l-0.15,0.66l0.44,0.21l0.04,0.83l0.28,0.36l0.44,-0.14l0.1,-0.13l0.05,-0.46l0.22,-0.51l1.1,0.62l0.73,0.1l0.29,-0.35l-0.22,-0.39l-0.74,-0.5l-0.43,-0.14l-0.07,-0.18l0.03,-0.25l0.76,-0.07l0.26,0.1l0.01,0.3l0.27,0.62l0.54,0.33l0.14,-0.17l0.45,0.24l0.16,-0.08l0.63,0.55l1.13,0.63l0.13,-0.03l0.81,0.55l0.59,0.22l1.21,0.25l1.27,0.12l1.06,-0.17l1.19,0.0l0.01,0.22l0.26,0.49l0.68,0.48l0.08,0.62l0.56,0.17l0.57,0.45l-0.61,-0.02l-0.77,-0.42l-0.42,0.03l-0.44,0.21l0.1,0.48l0.23,0.26l-0.19,0.32l0.18,0.59l0.33,0.11l0.33,-0.12l0.64,0.36l0.3,0.06l0.31,-0.08l0.23,-0.23l0.33,-0.02l0.39,0.36l0.26,0.01l0.25,0.18l0.33,0.02l0.27,-0.16l0.13,0.09l0.16,0.38l-0.54,-0.04l-0.29,0.34l0.21,0.4l0.2,0.11l0.07,0.35l0.89,0.58l-0.04,0.13l0.18,0.3l0.49,0.21l0.94,-0.04l0.96,0.68l0.58,0.26l0.32,0.03l0.37,0.42l0.23,0.1l0.1,0.31l0.34,0.26l0.21,0.38l0.34,0.08l0.26,-0.12l0.25,0.23l-0.55,0.05l-0.29,0.34l-0.41,0.04l-0.18,0.63l0.35,0.33l1.4,0.72l-0.08,0.69l1.48,0.96l0.49,0.67l0.27,0.15l0.49,-0.16l1.05,0.48l0.24,-0.05l0.38,0.32l0.16,0.58l1.1,0.42l0.72,0.06l0.21,0.19l0.85,0.38l0.32,0.34l0.31,0.09l0.59,0.53l0.2,0.37l0.73,0.47l0.25,0.29l0.1,0.53l0.48,0.29l0.55,0.03l0.31,0.44l0.56,0.33l-0.11,0.34l0.39,0.41l1.66,1.19l0.76,0.36l0.16,-0.03l1.78,1.0l0.42,0.4l0.69,0.34l0.47,0.65l0.08,-0.08l-0.02,0.25l0.22,0.06l0.5,0.55l0.02,0.21l0.5,0.23l0.54,0.42l1.19,0.58l0.8,0.03l0.63,0.31l0.03,0.31l0.43,0.12l0.33,-0.2l0.19,-0.0l0.43,0.12l1.02,0.51l0.05,0.25l0.41,0.27l0.22,-0.19l0.58,0.53l0.31,0.09l0.53,0.55l-0.01,0.24l0.49,0.42l0.02,0.24l0.27,0.43l0.55,0.34l0.18,0.4l0.42,0.15l0.58,0.51l0.56,0.96l0.35,0.26l0.53,0.01l0.15,0.11l-23.69,51.51l0.09,0.46l1.53,1.4l0.52,0.02l0.19,-0.15l1.17,1.29l0.41,0.12l1.37,-0.4l1.79,0.68l-0.86,0.96l-0.08,0.38l0.35,1.01l0.91,0.92l-0.08,0.65l0.1,0.44l2.43,4.76l-0.2,1.48l-0.29,0.38l0.19,0.62l0.58,0.12l0.83,-0.25l0.54,-0.07l0.07,0.08l0.03,0.1l-0.66,0.3l-0.33,0.34l0.29,0.54l0.35,-0.0l0.37,-0.18l0.25,0.12l0.02,0.21l0.44,0.11l0.09,0.11l0.26,1.19l-0.17,0.03l-0.1,0.51l0.24,0.32l0.94,0.22l0.04,0.16l-0.27,0.18l0.01,0.12l0.21,0.32l0.21,0.09l-0.05,0.37l-0.24,-0.02l-0.1,-0.46l-0.35,-0.31l-0.11,0.06l-0.28,-0.47l-0.47,-0.03l-0.26,0.35l-0.45,0.01l-0.08,0.13l-0.26,-0.63l-0.14,0.01l-0.35,-0.41l-0.47,-0.12l-0.89,-1.43l0.11,-0.01l0.32,-0.49l-0.08,-0.26l-0.34,-0.28l-0.51,0.01l-0.47,-0.93l-0.05,-0.15l0.12,-0.53l-0.08,-0.41l-0.52,-1.06l-0.46,-0.7l-0.19,-0.07l0.1,-0.61l-0.29,-0.28l-0.72,-0.14l-1.24,-1.44l-0.27,-0.47l-0.01,-0.21l-0.32,-0.23l-0.24,-0.34l-0.28,-0.11l-0.49,-0.63l0.39,-0.11l0.12,-0.23l0.05,0.05l0.59,-0.3l-0.02,0.13l-0.16,0.06l-0.16,0.55l0.3,0.41l0.38,0.07l0.43,-0.3l0.25,-1.03l0.15,-0.22l0.42,0.2l0.36,0.46l0.36,0.04l0.35,-0.35l-0.47,-0.83l-0.69,-0.39l-0.27,-0.91l-0.35,-0.63l-0.4,-0.17l-0.67,0.44l-0.39,0.06l-0.79,0.37l-1.9,-0.05l-1.0,-0.5l-0.45,-0.34l-1.46,-1.5l0.23,-0.14l0.21,-0.32l0.16,-0.74l-0.43,-0.94l-0.52,-0.09l-0.33,0.19l-0.12,0.52l-0.6,-0.04l-0.85,-0.89l-2.81,-1.97l-1.68,-0.48l-1.62,-0.65l-1.13,-0.19l-0.1,-0.53l-0.27,-0.5l0.13,-0.25l-0.02,-0.26l-0.22,-0.25l-0.8,-0.28l-0.36,-0.35l-0.17,-0.01l-0.13,-0.55l-0.2,-0.34l-0.2,-0.12l0.7,-0.5l0.09,-0.27l-0.09,-0.08l0.21,-0.27l0.23,-0.09l0.38,0.08l0.38,-0.17l0.18,-0.32l-0.03,-0.34l-0.35,-0.22l-0.55,-0.07l-0.81,0.27l-0.24,0.2l-0.57,0.02l-0.56,0.35l-0.61,0.15l-0.2,-0.13l-0.19,-0.59l-0.58,-0.63l0.77,-0.37l0.19,-0.38l-0.32,-0.45l-0.53,-0.01l-0.15,-0.48l-0.19,-0.17l0.09,-0.49l-0.16,-0.25l0.04,-0.22l-0.31,-0.55l-0.43,-0.22l-0.53,0.17l-0.07,-0.2l-0.27,-0.03l-0.09,-0.14l0.22,-0.56l0.26,0.03l0.08,-0.09l0.65,0.37l0.38,0.07l0.42,-0.49l-0.14,-0.42l-0.27,-0.26l-1.05,-0.52l-1.54,0.27l-0.1,-0.21l-0.41,-0.3l-0.42,-0.01l-0.08,-0.23l-0.47,0.02l-0.21,-0.16l0.21,-0.26l-0.05,-0.39l0.14,-0.4l-0.28,-0.27l-0.25,-0.05l0.21,-0.77l-0.33,-0.28l-0.29,0.02l-1.36,0.57l0.02,-0.11l-0.34,-0.35l-1.19,-0.19l-0.14,0.25l-0.55,0.26l0.08,0.49l0.21,0.14l-0.01,0.1l-0.83,-0.27l-0.63,-0.03l-0.23,0.49l-0.51,0.38l0.12,0.52l0.31,0.16l0.46,-0.02l-0.05,0.11l-0.98,0.16l-0.3,0.14l-0.16,0.16l-0.05,0.46l0.37,0.28l0.83,-0.12l0.12,0.14l-0.04,0.25l0.31,0.21l-0.27,0.12l-0.15,0.24l-0.51,-0.02l-0.23,0.34l-0.3,0.12l0.05,0.54l-0.3,0.32l-0.12,-0.14l-0.66,0.24l-0.32,-0.27l-0.44,-0.13l-0.32,-0.39l0.11,-0.5l-0.38,-0.29l-0.64,0.04l0.13,-0.4l-0.05,-0.34l-0.23,-0.26l-0.26,-0.07l-0.4,0.16l-0.47,0.73l-0.25,-0.01l-0.23,-0.49l-0.46,-0.07l-0.37,0.4l-0.4,-0.06l-0.16,0.33l-0.29,-0.31l-0.42,-0.03l-0.26,0.25l-0.01,0.21l-0.31,-0.08l-0.11,-0.32l-0.12,-0.03l-0.37,0.06l-0.72,0.4l-0.01,-0.27l-0.13,-0.08l-0.8,-0.04l-0.38,0.2l-0.0,0.45l-0.09,0.05l-1.16,0.08l-0.3,0.13l-0.87,-0.77l-0.22,-0.05l-0.29,0.29l-0.4,-0.28l-1.02,-0.03l0.03,-0.13l-0.35,-0.39l-0.01,-0.13l0.45,0.02l0.16,-0.37l0.53,0.01l0.43,0.3l0.3,0.45l0.49,-0.04l0.2,-0.43l0.23,0.09l0.44,-0.04l0.48,-0.17l0.06,-0.15l0.45,-0.23l0.46,-0.08l0.32,-0.52l-0.21,-0.37l-0.49,-0.19l-1.84,0.04l-0.57,-0.71l-0.07,-0.28l1.28,-0.98l1.62,-0.44l0.37,-0.26l0.33,-0.45l0.46,-0.1l0.65,-0.89l0.14,-1.04l0.36,-0.03l0.74,0.3l1.54,-0.17l1.4,0.03l0.01,0.5l0.23,0.42l0.56,0.48l1.06,0.16l0.14,0.1l0.28,0.41l0.4,0.26l1.19,1.07l0.2,0.34l0.25,0.13l0.5,-0.37l0.0,-0.44l-0.13,-0.39l-0.42,-0.46l-0.43,-0.13l-0.32,-0.52l-0.43,-0.35l-0.69,-1.19l0.45,-0.11l0.44,-0.3l0.35,0.02l0.33,-0.17l1.56,0.33l0.37,-0.06l0.15,-0.62l-0.09,-0.11l-0.67,-0.46l-0.84,-0.3l-0.61,-0.04l-0.74,0.14l-0.37,0.19l-0.29,0.35l-0.76,-0.52l-0.11,-0.24l-0.42,-0.02l-0.16,-0.12l0.14,-0.2l-0.17,-0.67l-0.09,-0.02l-1.07,0.27l-0.85,-0.19l-0.49,0.0l-0.85,0.41l-0.65,-0.15l-0.6,-0.29l-1.18,0.04l-0.71,0.35l-0.19,0.5l-0.35,-0.15l-0.65,0.04l-0.5,0.24l-0.62,0.03l-0.54,0.15l-0.41,0.33l-0.12,0.36l-0.49,0.22l-0.59,-0.02l-0.4,-0.27l-0.26,-0.68l-0.43,-0.32l-0.3,-0.11l-0.42,0.02l-0.3,0.28l0.16,0.51l0.31,0.08l0.01,0.37l0.37,0.61l0.21,0.72l-0.38,0.08l-0.35,0.26l-0.33,-0.06l-0.56,-0.39l-0.98,-0.37l-0.58,0.21l0.02,0.44l-0.07,-0.38l-0.32,-0.34l-0.42,0.19l-0.23,0.4l-0.2,-0.38l-0.81,0.14l-0.08,0.05l-0.02,0.41l-0.37,-0.32l-0.33,-0.04l-0.36,0.28l0.13,0.39l-1.49,-0.27l-0.16,0.49l-0.25,0.14l-0.28,0.36l-0.51,0.04l-0.02,0.17l-0.2,0.09l0.03,0.42l-0.16,0.27l-0.01,0.39l0.33,0.34l0.59,-0.05l0.39,0.38l0.56,0.31l0.08,0.49l0.23,0.34l0.3,0.19l0.03,0.3l-0.64,0.54l-0.5,-0.05l-0.44,0.18l-0.88,-0.46l-0.37,0.02l-0.48,0.41l-0.2,-0.12l-0.45,-0.01l-0.34,0.59l-0.75,-0.12l-0.4,0.05l-0.27,0.3l-0.1,-0.02l0.07,0.06l-0.11,0.01l0.0,0.1l-0.42,-0.28l-0.36,0.33l-0.19,-0.1l-0.32,0.19l-0.3,-0.11l-0.37,0.07l-0.53,-0.44l-0.45,-0.15l-0.9,0.53l-0.18,-0.15l-0.71,-0.02l-0.45,0.28l-0.15,-0.37l-0.41,-0.28l-0.42,0.1l-0.43,0.49l-0.37,-0.15l-0.28,0.31l-0.47,-0.08l-0.4,-0.43l-0.4,0.07l-0.3,0.24l-0.14,-0.11l-0.43,-0.05l-0.14,0.08l-1.45,-0.04l-0.31,0.12l-0.22,0.28l0.24,0.95l-0.31,-0.03l-0.15,0.18l-0.69,-0.24l-0.41,-0.28l-0.26,0.05l-0.26,0.26l-0.2,-0.24l-0.49,0.22l-0.65,0.09l-0.32,-0.22l-0.27,0.2l-0.19,-0.65l-0.39,-0.22l-0.43,0.08l-0.28,0.31l-0.44,0.09l-0.26,-0.07l-0.14,0.34l-0.06,-0.31l-0.26,-0.25l-0.54,-0.14l-1.29,-0.05l-0.62,0.31l-0.42,-0.34l-0.51,-0.04l-0.84,0.27l-0.73,0.11l-0.16,0.12l-0.11,0.56l-0.26,-0.07l-0.44,0.3l-0.03,0.21l-0.23,0.15l-0.26,-0.25l-0.37,-0.03l-0.36,0.17l-0.6,-0.33l-0.87,-0.22l-0.41,-0.18l-0.09,-0.37l-0.55,-0.15l-0.25,0.15l-0.71,-0.67l-0.41,0.02l-0.78,-0.24l-0.4,0.21ZM111.25,502.71l-0.44,0.21l-0.03,-0.02l0.24,-0.26l0.23,0.07ZM128.45,468.26l-0.1,0.14l-0.06,0.02l0.02,-0.15l0.14,-0.02ZM191.55,470.09l-0.0,0.04l-0.02,-0.04l0.03,-0.01ZM191.85,541.2l-0.08,-0.21l0.06,-0.51l0.25,-0.06l0.08,0.39l-0.31,0.39ZM165.84,518.29l-0.19,0.37l-0.34,0.04l-0.07,0.31l-0.27,-0.07l-0.45,0.06l-0.04,-0.09l0.46,-0.29l0.06,-0.15l0.84,-0.19ZM162.12,521.34l0.09,0.0l-0.06,0.02l-0.02,-0.03ZM162.26,521.34l0.08,-0.02l0.01,0.04l-0.04,0.04l-0.05,-0.05ZM141.64,514.73l0.19,0.06l0.26,0.22l-0.46,0.03l-0.07,-0.12l0.08,-0.19ZM132.07,521.13l-0.0,0.0l0.0,-0.0l0.0,0.0ZM132.06,520.84l-0.02,-0.07l0.06,-0.01l-0.03,0.08ZM109.91,522.38l0.07,-0.02l0.05,0.12l-0.03,0.01l-0.09,-0.11ZM107.83,523.67l0.01,0.02l-0.02,0.0l0.0,-0.02l0.01,-0.01ZM136.02,515.64l-0.01,-0.04l0.07,0.01l-0.06,0.03ZM199.71,549.76l0.43,-0.06l0.87,0.3l0.36,-0.05l0.76,-0.54l0.39,-0.87l0.67,-0.03l0.47,-0.34l0.17,-0.49l0.96,0.19l1.89,-0.14l0.49,0.7l0.06,0.43l0.38,0.59l-0.1,0.26l-0.29,0.17l-0.1,0.55l0.11,0.16l-0.11,0.33l0.13,0.53l0.17,0.24l0.69,0.46l0.02,0.37l0.3,0.56l0.35,0.24l0.08,0.34l-0.15,0.26l0.26,1.28l1.33,1.5l0.24,0.78l-0.64,-0.19l-0.38,0.04l-0.33,0.37l-0.51,0.26l-0.01,0.29l-0.38,0.15l-0.21,0.29l-0.52,-0.98l-0.84,-0.64l0.11,-0.44l-0.27,-1.06l0.14,-0.11l0.26,-1.09l-0.26,-0.26l0.04,-0.09l-0.12,-0.01l0.04,-0.06l-0.09,0.05l-0.1,-0.1l-0.04,0.1l-0.12,-0.01l-0.03,-0.07l0.24,-0.92l0.1,-1.07l-0.15,-1.05l0.51,-0.94l0.02,-0.37l-0.66,-0.25l-0.5,0.69l-0.24,-0.13l-0.45,0.11l0.01,0.55l-0.32,0.35l0.3,1.04l-0.34,0.85l0.13,1.32l-0.11,0.36l0.04,0.39l-0.27,0.34l0.03,1.86l-0.28,0.29l-0.27,-0.31l0.02,-1.36l-0.28,-0.43l-0.53,0.1l-0.08,0.1l-0.88,-0.14l0.22,-0.05l0.2,-0.25l0.2,-0.91l-0.12,-0.1l-0.13,-1.06l0.88,0.13l0.45,-0.45l-0.11,-0.33l-0.74,-0.45l-0.23,0.1l0.0,-0.84l-0.33,-0.34l-0.31,-0.01l-0.29,0.56l-0.24,0.06l-0.27,0.41l0.12,0.13l-0.5,-0.23l0.24,-0.5l-0.28,-0.54l-0.29,-0.02l-0.18,-0.5l-0.47,-0.15l-0.19,0.31l-0.22,-0.47ZM201.64,551.89l0.21,0.2l-0.19,0.19l-0.03,-0.38ZM210.83,558.1l0.42,0.83l-0.23,0.38l0.09,0.66l0.47,1.27l0.06,1.07l0.15,0.48l-0.33,-0.38l-1.31,-0.73l-0.26,-0.05l0.19,-0.2l-0.17,-0.39l0.14,-0.1l0.31,-0.63l-0.47,-0.31l-0.27,0.01l-0.75,0.68l-0.11,-0.36l0.09,-0.18l-0.03,-0.41l0.26,-0.33l0.36,-0.19l0.16,-0.56l0.43,-0.42l0.36,0.09l0.44,-0.23ZM211.88,563.05l1.25,5.46l-0.54,0.45l0.03,0.64l0.81,0.55l-0.47,0.67l0.05,0.52l0.58,0.54l-0.08,0.3l0.06,0.48l-0.14,0.55l0.15,0.3l0.2,0.13l0.9,0.26l1.46,1.84l1.18,0.8l0.34,0.76l0.55,0.42l-0.01,0.53l0.1,0.24l0.78,0.58l0.49,0.11l0.03,0.16l-0.16,0.69l-0.68,0.46l-0.31,0.4l-0.04,0.78l-0.31,0.67l0.11,0.99l-0.15,0.54l0.03,0.33l-0.4,0.17l-1.34,1.4l-0.41,0.31l-0.48,0.16l-0.2,-0.13l-0.28,0.01l0.12,-0.5l-0.16,-0.42l-0.64,0.07l-0.08,0.17l-0.1,-0.51l0.24,-0.03l0.12,0.14l0.5,0.14l1.27,-0.81l0.75,-0.65l-0.23,-0.63l-0.48,0.07l0.01,-0.13l-0.37,-0.36l-0.54,0.12l0.59,-1.72l0.0,-0.38l0.15,-0.3l-0.06,-0.43l0.09,-0.51l-0.36,-0.24l-0.06,-0.35l-0.27,-0.49l0.49,-0.15l0.35,-0.35l0.18,-0.48l-0.43,-0.27l-0.43,0.08l-0.61,0.31l-0.45,0.04l-0.55,-0.29l-1.43,0.28l-0.59,-0.05l0.17,-0.09l0.2,-0.36l0.21,-0.85l0.32,0.02l0.81,0.41l0.31,0.03l0.71,-0.34l-0.07,-0.49l-0.33,-0.19l-0.4,0.02l-0.88,-0.43l0.03,-0.84l-0.23,-0.29l-0.46,-0.26l0.02,-0.43l-0.43,-0.61l0.27,-0.3l-0.16,-0.68l-0.35,-0.03l0.1,-0.07l0.01,-0.21l0.42,-0.17l0.22,-0.62l-0.38,-0.26l-0.67,0.18l-0.27,-0.29l-0.2,-0.32l-0.06,-0.35l0.33,-0.21l0.18,-1.04l-0.39,-0.3l-0.47,0.16l-0.17,-0.08l-0.29,-0.36l0.13,-0.2l-0.14,-0.35l-0.45,-0.27l1.08,-0.08l0.35,-0.42l-0.28,-0.52l-0.49,0.08l-0.44,-0.14l0.18,-0.32l-0.03,-0.32l-0.51,-0.26l0.04,-0.13l0.64,0.01l0.41,0.72l0.28,0.23l0.31,0.02l0.28,-0.15l0.04,-0.52l-0.24,-0.23l-0.1,-0.4l-0.37,-0.63l-0.78,-0.91l0.12,-0.39l1.23,0.83l0.52,-0.45ZM214.19,585.45l-0.17,0.68l-0.05,-0.01l0.09,-0.42l0.13,-0.25ZM215.44,583.76l-0.46,0.24l-0.25,-0.22l-0.63,0.14l0.05,-0.14l0.52,-0.28l0.76,0.25ZM211.63,577.78l-0.08,0.43l0.26,0.27l-0.46,0.4l-0.51,-0.23l-0.26,0.45l0.06,0.32l-0.15,-0.2l0.08,-0.67l0.25,-0.15l0.49,-0.04l0.32,-0.57ZM209.08,567.17l-0.25,-0.24l0.08,-0.14l0.49,0.2l-0.32,0.18ZM138.39,458.34l-0.47,-0.44l0.06,-0.45l0.41,0.27l0.0,0.62ZM108.63,500.59l-0.13,0.01l0.09,-0.03l0.04,0.02ZM211.75,580.86l0.58,-0.24l-0.2,0.44l0.02,0.52l-0.22,-0.23l-0.18,-0.5ZM212.61,580.43l0.18,-0.49l-0.1,-0.18l0.52,-0.05l0.31,-0.26l0.18,-0.36l0.14,-0.03l0.14,-0.52l0.57,-0.03l0.29,1.05l0.12,1.09l-0.15,0.19l0.03,0.12l-0.16,0.04l-0.27,0.73l-0.28,0.21l-0.2,-0.36l0.13,-1.47l-0.39,-0.42l-0.41,0.19l-0.18,0.46l-0.46,0.07ZM211.52,574.36l0.23,0.31l0.37,0.12l0.01,0.48l-0.14,0.07l-0.12,-0.08l-0.4,-0.44l-0.11,-0.22l0.15,-0.24ZM209.53,575.0l0.17,-0.21l0.28,-0.04l-0.06,0.38l0.09,0.09l0.27,0.14l0.34,0.0l0.41,0.28l0.04,0.12l-0.35,0.14l0.09,0.38l-0.06,0.17l-0.28,0.08l0.14,-0.47l-0.34,-0.41l-0.06,-0.25l-0.69,-0.39ZM210.36,574.41l0.1,-0.07l0.07,0.06l-0.0,0.01l-0.16,-0.0ZM209.54,571.91l0.03,-0.1l0.32,-0.15l0.14,-0.29l-0.04,-0.37l0.05,-0.1l0.34,1.01l-0.09,-0.09l-0.52,-0.06l-0.15,0.21l-0.08,-0.04ZM206.97,580.16l0.1,-0.52l-0.42,-0.36l0.1,-0.03l-0.05,-0.5l-0.28,-0.2l0.14,-0.17l0.28,-0.1l0.36,0.03l0.21,-0.67l-0.39,-0.23l-1.18,-0.03l-0.2,-0.17l0.19,-0.17l0.46,-0.05l0.67,-0.52l0.19,-0.54l-0.08,-0.32l-0.26,-0.01l0.23,-0.63l0.14,0.22l0.53,0.22l0.24,0.31l0.4,0.27l0.42,1.0l0.12,0.56l-0.14,0.62l-0.17,-0.03l-0.11,0.19l-0.32,0.19l0.02,0.34l-0.75,0.25l-0.08,0.43l0.07,0.45l0.56,-0.01l-0.02,0.13l0.38,0.45l0.22,-0.01l0.23,0.23l0.25,-0.06l0.21,0.38l-0.39,-0.07l-0.32,0.43l-0.06,0.32l0.22,0.37l0.41,0.04l0.21,0.09l-0.2,-0.03l-0.41,0.47l-0.47,0.15l0.11,0.7l0.38,0.27l-0.13,0.2l0.18,0.53l-0.2,0.06l-0.06,0.23l-0.22,-0.08l0.18,-0.35l-0.4,-1.09l0.11,-0.08l0.05,-0.73l-0.28,-0.13l-0.15,-0.32l0.01,-0.81l-0.21,-0.78l-0.46,-0.01l-0.11,0.08l-0.05,-0.39ZM207.26,574.01l-0.02,-0.27l-0.21,-0.27l0.29,-0.14l0.03,0.3l0.15,0.15l-0.04,0.21l-0.2,0.0ZM206.9,573.41l-0.43,-0.14l-0.38,-0.35l0.21,-0.11l0.28,0.14l0.04,0.28l0.27,0.18ZM208.72,573.09l0.26,-0.17l0.43,0.23l0.25,-0.0l-0.15,0.15l-0.09,0.37l-0.14,0.04l-0.23,-0.02l-0.33,-0.6ZM206.49,567.38l1.0,0.59l0.81,0.7l0.06,0.4l-0.46,0.04l-0.19,0.76l0.03,0.31l0.19,0.26l-0.17,0.31l0.43,0.76l-0.15,0.1l-0.85,-0.57l-0.44,0.12l-0.01,0.16l-0.22,-0.06l0.24,-0.51l-0.06,-0.27l0.08,0.03l0.08,-0.27l-0.06,-0.29l0.42,-0.7l0.08,-0.44l-0.28,-0.43l0.06,-0.22l-0.32,-0.31l-0.25,-0.5ZM208.6,569.24l0.34,0.07l0.2,-0.33l0.2,0.07l0.2,0.44l-0.0,0.19l-0.3,0.2l-0.13,0.86l-0.14,-0.44l-0.01,-0.6l-0.07,-0.17l-0.2,-0.03l-0.09,-0.25ZM209.57,569.66l0.0,-0.0l0.03,-0.02l-0.04,0.02ZM204.29,565.52l0.44,-0.15l-0.03,-0.36l0.29,-0.2l0.29,0.26l0.51,-0.3l-0.08,0.47l-0.15,0.23l-0.33,-0.04l-0.36,0.3l-0.27,-0.06l-0.16,0.09l0.02,0.12l-0.36,0.07l0.19,-0.44ZM206.36,564.27l-0.49,0.31l-0.02,-0.59l-0.46,-0.14l-0.02,-0.1l0.53,-0.05l0.24,-0.65l-0.35,-0.23l-0.51,-0.03l-0.1,-0.28l0.09,-0.84l0.2,-0.34l0.16,-0.72l0.07,-1.03l0.34,-0.33l0.69,0.17l0.26,0.31l-0.04,0.27l-0.16,0.12l0.03,0.24l-0.13,0.05l-0.05,0.65l-0.22,0.57l0.02,0.09l0.33,0.11l0.23,1.01l-0.15,0.27l0.43,0.45l-0.08,0.23l-0.57,-0.12l-0.09,0.19l-0.15,0.04l-0.01,0.39ZM206.15,574.28l-0.13,-0.03l0.0,-0.02l0.15,-0.04l-0.02,0.09ZM205.18,574.32l-0.02,0.0l0.01,-0.01l0.01,0.0ZM204.96,570.25l-0.05,-0.24l0.09,0.22l-0.04,0.01ZM205.25,569.02l-0.25,0.19l-0.3,-0.19l-0.18,-0.37l-0.42,-0.07l0.04,-0.08l0.41,0.09l0.15,-0.2l0.31,0.17l0.28,-0.13l0.03,0.52l-0.07,0.07ZM198.99,558.2l0.09,-0.07l0.23,0.49l-0.21,-0.07l-0.11,-0.35ZM199.36,558.71l0.38,0.44l0.56,-0.45l-0.44,-1.09l0.59,0.02l0.03,-0.77l0.24,0.32l0.51,0.01l0.2,-0.29l0.29,-0.06l0.19,0.34l0.24,0.12l0.18,0.27l-0.28,0.14l-0.69,-0.17l-0.13,0.26l-0.17,-0.1l-0.57,0.26l0.08,0.42l0.27,0.54l0.56,0.48l0.25,0.5l0.39,0.36l-0.12,0.15l0.09,0.44l-0.94,-1.32l-0.28,-0.2l-0.61,0.35l0.06,0.34l-0.2,0.14l0.2,0.7l0.21,0.07l-0.14,0.51l0.2,0.13l0.05,0.18l-0.28,0.06l-0.12,-0.56l-0.37,-0.57l0.25,-0.15l-0.16,-0.49l-0.21,-0.17l-0.02,-0.33l-0.28,-0.49l-0.01,-0.31ZM202.27,558.92l0.38,-0.28l0.43,-0.1l0.76,0.39l0.05,0.17l0.43,0.38l-0.11,0.18l-0.41,-0.45l-0.58,-0.11l-0.2,0.41l0.19,0.59l-0.97,-1.19ZM202.11,560.96l0.33,0.1l0.14,0.21l0.26,0.09l0.85,-0.01l-0.23,1.25l-0.31,-0.14l-1.03,-1.5ZM201.29,562.69l0.18,0.07l0.33,-0.09l0.0,0.25l0.48,0.21l0.22,0.28l-0.11,0.08l0.12,0.52l-0.05,0.29l0.23,0.34l-0.06,0.8l0.13,0.32l-0.1,0.03l-0.14,0.56l-0.14,0.99l0.02,0.73l-0.25,0.74l-0.22,-0.02l-0.19,0.34l-0.01,0.5l-0.44,1.06l-0.2,-0.86l-0.08,-0.92l0.3,-0.02l0.63,-0.49l-0.06,-0.73l-0.22,-0.05l0.02,-0.45l-0.19,-0.26l-0.25,-0.01l-0.16,-0.59l-0.47,-0.03l0.24,-0.17l0.01,-0.27l0.65,-0.05l0.22,-0.32l-0.13,-0.51l-0.53,-0.24l0.57,-0.27l-0.34,-1.16l-0.33,-0.12l0.28,-0.19l0.04,-0.3ZM199.27,560.14l0.0,0.0l-0.01,0.0l0.0,-0.0ZM199.1,564.31l0.25,-0.07l0.1,-0.06l-0.12,0.15l-0.23,-0.02ZM199.63,563.32l0.06,-0.2l-0.05,-0.13l0.09,0.13l-0.1,0.2ZM162.15,525.49l0.25,-0.21l0.11,-0.0l-0.2,0.31l-0.16,-0.1ZM136.7,524.68l0.22,0.25l0.59,-0.1l0.04,-0.44l0.61,0.38l0.29,-0.23l0.18,-0.67l0.1,-0.05l0.25,0.13l0.16,-0.06l-0.14,0.5l0.39,0.72l-0.5,0.38l-0.19,-0.72l-0.36,-0.02l-0.69,0.57l-0.12,-0.24l-0.46,0.06l-0.15,0.16l-0.22,-0.52l-0.13,-0.04l0.04,-0.14l0.07,0.07ZM139.88,525.13l-0.03,-0.01l0.02,-0.02l0.01,0.03ZM127.78,528.13l0.49,-0.13l0.09,0.05l-0.34,0.29l-0.18,0.01l-0.06,-0.22ZM128.01,526.82l0.09,-0.93l-0.34,-0.41l0.27,-0.06l0.19,-0.29l0.22,-0.02l0.24,-0.25l0.44,0.22l0.16,-0.11l0.5,0.1l0.1,-0.23l0.15,-0.03l0.38,0.09l0.25,0.25l-0.43,0.12l0.02,0.5l0.44,0.31l-0.25,0.64l0.13,1.11l0.36,0.59l0.43,0.15l-0.37,0.07l-0.19,0.39l-0.11,-0.05l0.03,-0.41l-0.23,-0.36l-0.69,-0.05l-0.43,-0.59l-0.47,-0.4l-0.65,-0.34l-0.26,-0.01ZM131.4,528.57l0.28,-0.39l-0.19,-0.6l0.07,-0.55l0.15,-0.28l0.3,0.13l0.31,-0.27l0.44,0.14l0.52,-0.02l0.3,-0.22l0.26,0.17l0.23,-0.03l0.19,0.33l0.66,-0.29l0.18,-0.29l0.28,0.22l-0.13,0.25l-0.0,0.39l0.26,0.35l0.46,-0.02l0.28,-0.39l0.28,0.18l0.44,-0.16l0.31,0.17l0.08,-0.05l-0.05,0.23l-0.73,0.21l-0.21,0.41l0.22,0.27l-0.07,0.65l0.3,0.23l0.29,0.05l-0.5,0.18l-0.19,-0.24l-0.3,-0.08l-0.09,-0.22l-0.26,-0.17l-0.13,-0.32l-0.96,-0.67l-0.23,0.18l-0.65,0.18l-0.19,0.27l0.12,0.28l-0.38,-0.39l-0.44,0.12l-0.19,0.46l-0.91,-0.26l-0.07,0.08l-0.35,-0.23ZM134.19,529.01l0.07,-0.02l0.09,0.03l-0.15,-0.01l-0.01,0.0ZM134.4,529.04l0.27,0.1l0.23,0.58l-0.25,-0.11l0.04,-0.1l-0.29,-0.47ZM135.83,526.14l0.09,-0.06l0.01,0.01l-0.11,0.04ZM132.89,525.47l-0.57,-0.58l0.11,-0.17l0.27,-0.08l0.34,0.07l0.08,0.37l-0.22,0.39ZM98.14,450.76l0.34,-0.44l0.56,-0.16l0.06,0.49l-0.13,0.02l0.1,0.29l0.7,0.54l0.29,0.6l0.36,0.4l-0.66,-0.36l-1.21,-0.26l-0.45,-0.8l0.04,-0.32ZM100.81,452.78l1.01,0.2l0.26,0.2l0.38,0.11l0.3,0.33l0.23,0.8l-0.26,0.19l-0.26,0.4l0.43,0.51l0.28,0.71l0.39,0.33l-0.09,0.31l0.05,0.32l0.21,0.31l0.5,0.32l0.0,0.35l-0.82,-0.26l-0.09,0.09l-0.51,-0.1l-0.33,0.07l-0.08,-0.93l-0.57,-1.1l0.12,-0.48l-0.3,-0.98l-0.39,-0.84l-0.28,-0.35l-0.01,-0.23l-0.17,-0.28ZM104.84,458.76l0.28,0.01l0.41,0.53l-0.25,0.05l-0.44,-0.59ZM96.98,478.79l0.06,-0.22l1.37,1.26l0.38,-0.0l0.32,-0.21l0.21,0.06l0.2,0.25l0.72,-0.01l-0.01,0.32l0.69,0.19l0.2,0.27l-0.05,0.32l0.09,0.16l0.27,0.29l0.49,0.19l0.07,0.2l-0.23,0.33l-0.32,0.22l-0.42,1.13l-0.7,-0.22l-0.36,-0.42l-0.19,0.11l-0.26,-0.08l-0.29,-0.35l-0.42,-0.13l-0.26,-0.41l-0.51,-0.41l-0.61,-1.56l0.07,-0.19l-0.47,-0.5l0.04,-0.31l-0.09,-0.3ZM97.68,522.17l0.05,-0.07l0.04,-0.11l0.07,0.18l-0.15,-0.01ZM98.03,522.39l0.04,0.02l-0.0,0.03l-0.03,-0.05ZM80.23,514.88l0.08,-0.15l0.69,0.24l0.38,-0.02l1.55,-0.69l0.18,0.0l0.16,0.37l0.44,0.39l0.27,0.08l0.4,-0.16l0.54,0.24l0.6,-0.01l0.53,0.26l0.44,0.41l0.03,0.72l-0.26,0.4l-0.13,0.44l-0.31,0.06l-0.22,0.21l-0.27,0.01l-0.3,-0.08l-0.46,-0.58l-1.38,-0.93l-0.45,-0.11l-0.76,0.03l-0.42,0.3l-0.21,0.03l-0.91,-0.42l-0.33,-0.34l0.14,-0.67ZM74.26,514.0l0.03,-0.25l0.32,0.05l0.02,0.35l-0.37,-0.15ZM64.81,513.23l0.09,-0.01l0.13,0.09l-0.17,0.0l-0.05,-0.08ZM70.29,514.35l-0.12,-0.05l-0.16,0.39l-0.25,-0.27l-0.36,0.08l0.24,-0.12l0.32,0.02l0.41,-0.61l-0.31,-0.35l-0.31,-0.63l-0.3,-0.24l0.05,-0.29l0.13,-0.06l0.67,0.13l0.43,0.28l0.16,0.24l-0.29,0.4l0.11,0.51l-0.06,0.17l-0.33,0.11l-0.04,0.31ZM68.8,514.2l-0.28,0.32l-0.09,-0.1l0.24,-0.29l-0.1,-0.27l0.19,-0.02l0.04,0.36ZM59.97,511.71l0.2,-0.13l0.18,-0.38l0.48,-0.06l0.27,0.03l0.13,0.21l0.36,0.14l0.1,0.15l-0.09,0.12l-0.23,-0.03l-0.61,0.18l-0.41,-0.22l-0.36,0.0ZM62.67,511.56l0.07,-0.35l0.28,-0.32l0.75,-0.02l0.67,0.35l0.17,0.49l-0.28,0.29l-1.25,-0.24l-0.41,-0.2ZM37.79,498.38l0.07,-0.23l-0.1,-0.23l0.32,0.03l0.09,0.49l-0.29,0.05l-0.1,-0.11ZM36.41,498.87l-0.02,0.01l0.01,-0.02l0.01,0.01ZM36.85,498.71l-0.0,-0.07l-0.0,-0.01l0.02,0.01l-0.01,0.07ZM30.2,493.17l-0.02,-0.03l0.04,-0.04l0.0,0.08l-0.02,-0.0ZM26.76,492.74l0.41,-0.33l0.12,0.35l-0.02,0.08l-0.25,0.01l-0.26,-0.12ZM25.01,490.83l0.02,0.0l-0.01,0.01l-0.02,-0.01ZM23.18,488.38l-0.09,0.01l0.05,-0.17l0.04,0.08l0.01,0.08ZM23.19,487.9l-0.06,0.1l-0.14,-0.54l0.19,0.18l0.0,0.26ZM15.95,478.85l0.25,0.07l-0.02,0.19l-0.14,-0.01l-0.09,-0.25ZM1.23,449.67l0.23,0.17l0.21,0.66l0.47,0.45l-0.25,0.16l0.12,0.39l-0.24,-0.38l-0.54,-0.19l-0.11,-0.3l0.19,-0.08l0.2,-0.42l-0.28,-0.47Z", "name": "Alaska"}, "US-NJ": {"path": "M801.67,165.24l1.31,-1.55l0.48,-1.57l0.5,-0.62l0.54,-1.45l0.11,-2.05l0.68,-1.35l0.92,-0.71l14.12,4.17l-0.3,5.66l-0.51,0.83l-0.13,-0.3l-0.65,-0.07l-0.34,0.44l-0.56,1.46l-0.46,2.72l0.26,1.55l0.63,0.61l1.06,0.15l1.23,-0.43l2.46,0.29l0.66,1.87l-0.2,4.55l0.29,0.47l-0.54,0.44l0.27,0.81l-0.72,0.74l0.03,0.35l0.43,0.22l-0.21,0.6l0.48,0.6l-0.17,3.8l0.59,0.52l-0.36,1.36l-1.14,1.82l-0.11,0.94l-1.36,0.07l0.09,1.21l0.64,0.83l-0.82,0.56l-0.18,1.15l1.05,0.77l-0.31,0.29l-0.17,-0.44l-0.53,-0.18l-0.5,0.22l-0.44,1.51l-1.28,0.61l-0.2,0.45l0.46,0.55l0.8,0.06l-0.66,1.26l-0.26,1.5l-0.68,0.65l0.19,0.48l0.4,0.04l-0.89,1.57l0.07,0.95l-1.56,1.66l-0.17,-1.65l0.33,-2.07l-0.11,-0.87l-0.58,-0.82l-0.89,-0.28l-1.11,0.34l-0.81,-0.35l-1.51,0.88l-0.31,-0.71l-1.62,-0.96l-1.0,0.04l-0.65,-0.71l-0.7,0.07l-3.24,-2.03l-0.06,-1.72l-1.02,-0.94l0.48,-0.68l0.0,-0.88l0.43,-0.83l-0.12,-0.73l0.51,-1.19l1.2,-1.16l2.6,-1.49l0.54,-0.86l-0.38,-0.85l0.5,-0.37l0.47,-1.44l1.24,-1.7l2.52,-2.22l0.18,-0.67l-0.47,-0.82l-4.26,-2.78l-0.75,-1.05l-0.9,0.24l-0.48,-0.33l-1.24,-2.46l-1.62,-0.02l-1.0,-3.45l1.02,-1.03l0.36,-2.23l-1.87,-1.91Z", "name": "New Jersey"}, "US-ME": {"path": "M837.04,56.27l0.86,-1.15l1.42,1.7l0.84,0.04l0.39,-2.12l-0.46,-2.19l1.7,0.36l0.73,-0.42l0.21,-0.52l-0.32,-0.7l-1.18,-0.47l-0.44,-0.62l0.19,-1.43l0.86,-2.02l2.08,-2.25l0.01,-0.98l-0.52,-0.93l1.02,-1.64l0.39,-1.51l-0.22,-0.91l-1.02,-0.35l-0.07,-1.42l-0.4,-0.43l0.55,-0.96l-0.04,-0.63l-1.0,-1.26l0.13,-1.73l0.37,-0.63l-0.15,-0.97l1.22,-1.93l-0.96,-6.17l5.58,-18.88l2.25,-0.23l1.15,3.18l0.55,0.43l2.54,0.56l1.83,-1.73l1.68,-0.83l1.24,-1.72l1.25,-0.12l0.64,-0.47l0.25,-1.43l0.42,-0.3l1.36,0.04l3.68,1.41l1.14,0.96l2.36,1.05l8.38,22.7l0.64,0.65l-0.25,0.95l0.72,1.02l-0.1,1.41l0.54,1.3l0.67,0.47l1.05,-0.12l1.12,0.58l0.97,0.1l2.47,-0.53l0.4,0.95l-0.59,1.42l1.69,1.86l0.28,2.69l2.72,1.68l0.98,-0.1l0.47,-0.74l-0.06,-0.5l1.21,0.25l2.95,2.8l0.04,0.47l-0.52,-0.14l-0.38,0.41l0.18,0.77l-0.76,-0.15l-0.35,0.4l0.15,0.63l1.84,1.62l0.16,-0.88l0.39,-0.17l0.8,0.32l0.27,-0.83l0.33,0.41l-0.31,0.85l-0.53,0.19l-1.21,3.24l-0.62,-0.04l-0.31,0.44l-0.55,-1.05l-0.72,0.03l-0.3,0.5l-0.56,0.06l-0.02,0.49l0.58,0.85l-0.91,-0.45l-0.32,0.63l0.26,0.52l-1.2,-0.28l-0.37,0.3l-0.37,0.78l0.08,0.45l0.44,0.08l0.07,1.21l-0.37,-0.57l-0.54,-0.06l-0.39,0.45l-0.2,1.09l-0.48,-1.53l-1.14,0.01l-0.68,0.75l-0.36,1.48l0.59,0.63l-0.83,0.63l-0.7,-0.46l-0.73,1.04l0.1,0.64l0.99,0.63l-0.35,0.21l-0.1,0.82l-0.45,-0.2l-0.85,-1.82l-1.03,-0.46l-0.39,0.22l-0.45,-0.41l-0.57,0.63l-1.25,-0.19l-0.26,0.86l0.78,0.4l0.01,0.37l-0.51,-0.06l-0.56,0.4l-0.09,0.69l-0.49,-1.02l-1.17,-0.02l-0.16,0.64l0.52,0.87l-1.44,0.96l0.84,1.11l0.08,1.06l0.53,0.65l-0.96,-0.41l-0.96,0.22l-1.2,-0.42l-0.17,-0.91l0.74,-0.28l-0.08,-0.55l-0.43,-0.5l-0.67,-0.12l-0.3,0.33l-0.23,-2.37l-0.37,-0.22l-1.1,0.26l0.04,1.96l-1.85,1.92l0.02,0.49l1.25,1.47l-0.64,0.96l-0.19,3.87l0.77,1.41l-0.57,0.53l0.0,0.63l-0.51,0.55l-0.8,-0.19l-0.45,0.93l-0.62,-0.06l-0.41,-1.15l-0.73,-0.21l-0.52,1.03l0.11,0.69l-0.45,0.59l0.12,2.41l-0.95,-1.01l0.14,-1.28l-0.24,-0.59l-0.81,0.29l-0.08,2.01l-0.44,-0.25l0.15,-1.55l-0.48,-0.4l-0.68,0.49l-0.76,3.04l-0.75,-1.84l0.07,-1.51l-0.77,0.05l-1.06,2.76l0.51,0.55l0.73,-0.25l0.91,2.04l-0.28,-0.59l-0.52,-0.23l-0.66,0.3l-0.07,0.64l-1.38,-0.1l-2.16,3.18l-0.53,1.86l0.29,0.6l-0.68,0.65l0.51,0.43l0.91,-0.21l0.37,0.92l-0.77,0.3l-0.2,0.39l-0.4,-0.04l-0.51,0.57l-0.14,1.03l0.67,1.37l-0.08,0.68l-0.79,1.29l-0.94,0.61l-0.41,1.07l-0.1,1.28l0.44,0.9l-0.4,2.81l-0.8,-0.33l-0.41,0.6l-1.02,-0.76l-0.57,-1.86l-0.93,-0.37l-2.36,-1.99l-0.76,-3.45l-13.25,-35.55ZM863.92,80.85l0.09,0.26l-0.08,0.23l0.03,-0.29l-0.04,-0.2ZM865.33,81.07l0.47,0.7l-0.04,0.47l-0.32,-0.25l-0.1,-0.93ZM867.67,77.93l0.43,0.83l-0.16,0.14l-0.42,-0.19l0.16,-0.77ZM877.04,64.5l-0.14,0.2l-0.03,-0.24l0.17,0.04ZM873.08,74.84l0.01,0.02l-0.03,0.03l0.01,-0.06ZM882.73,63.41l0.04,-1.17l0.41,-0.66l-0.18,-0.44l0.4,-0.5l0.62,-0.11l1.54,1.36l-0.49,0.65l-1.08,0.04l-0.27,0.43l0.57,1.3l-0.99,-0.18l-0.14,-0.57l-0.44,-0.16ZM879.31,65.98l0.61,0.41l-0.35,0.29l0.15,0.96l-0.39,-0.63l0.19,-0.53l-0.21,-0.5ZM878.07,70.51l0.09,-0.01l0.48,-0.08l-0.25,0.46l-0.32,-0.37Z", "name": "Maine"}, "US-MD": {"path": "M740.69,219.66l-2.04,-10.06l19.85,-4.49l-0.66,1.29l-0.94,0.08l-1.55,0.81l0.16,0.7l-0.42,0.49l0.23,0.78l-1.04,0.09l-0.72,0.41l-1.48,0.03l-1.14,-0.39l0.21,-0.36l-0.3,-0.49l-1.11,-0.31l-0.47,1.8l-1.63,2.85l-1.37,-0.39l-1.03,0.62l-0.41,1.26l-1.6,1.93l-0.36,1.04l-0.88,0.45l-1.3,1.87ZM760.76,204.58l37.02,-9.15l8.22,26.4l0.48,0.26l8.48,-2.22l0.24,0.71l0.6,0.03l0.38,0.95l0.52,-0.05l-0.38,1.96l-0.12,-0.26l-0.47,0.06l-0.73,0.86l-0.17,2.7l-0.6,0.19l-0.36,0.71l-0.02,1.47l-3.64,1.51l-0.37,0.76l-2.25,0.43l-0.56,0.65l-0.3,-1.09l0.5,-0.31l0.87,-1.85l-0.4,-0.51l-0.45,0.12l0.08,-0.5l-0.44,-0.42l-2.29,0.63l0.3,-0.6l1.15,-0.83l-0.17,-0.69l-1.36,-0.18l0.38,-2.24l-0.18,-1.02l-0.91,0.16l-0.53,1.76l-0.34,-0.69l-0.62,-0.07l-0.44,0.47l-0.5,1.39l0.53,1.02l-2.87,-2.14l-0.43,-0.19l-0.61,0.36l-0.73,-0.76l0.37,-0.84l-0.04,-0.84l0.76,-0.6l-0.08,-1.35l2.08,0.1l0.89,-0.45l0.36,-0.9l-0.32,-1.42l-0.43,-0.05l-0.54,1.31l-0.39,0.09l-1.05,-0.72l0.06,-0.4l-0.52,-0.28l-0.55,0.23l-0.22,-0.68l-0.73,0.1l-0.12,0.28l0.07,-0.74l0.65,-0.01l0.49,-0.37l0.22,-1.04l-0.54,-0.55l-0.57,0.71l-0.2,-0.53l0.88,-0.87l-0.25,-0.65l-0.54,-0.08l-0.09,-0.48l-0.42,-0.27l-0.35,0.15l-0.66,-0.53l0.89,-0.8l-0.24,-1.03l0.94,-2.38l-0.17,-0.43l-0.46,0.02l-0.66,0.66l-0.56,-0.16l-0.61,0.95l-0.74,-0.6l0.49,-3.59l0.6,-0.52l0.06,-0.61l4.22,-1.21l0.12,-0.7l-0.51,-0.3l-2.38,0.43l0.76,-1.27l1.42,-0.05l0.35,-0.5l-0.99,-0.67l0.44,-1.9l-0.63,-0.32l-1.2,1.82l0.05,-1.5l-0.59,-0.34l-0.68,1.1l-1.62,0.67l-0.31,1.65l0.39,0.54l0.65,0.12l-1.45,1.92l-0.2,-1.64l-0.64,-0.42l-0.61,0.73l0.07,1.45l-0.85,-0.29l-1.16,0.64l0.02,0.71l1.01,0.27l-0.37,0.54l-0.83,0.22l-0.05,0.34l-0.44,-0.04l-0.35,0.64l1.15,1.2l-1.88,-0.67l-1.21,0.59l0.16,0.69l1.56,0.58l0.91,0.93l0.72,-0.12l0.56,0.75l-0.98,-0.07l-1.15,1.36l0.32,0.77l1.57,0.92l-0.67,0.12l-0.21,0.41l0.8,1.08l-0.32,0.56l0.32,0.97l0.58,0.45l-0.52,1.09l0.99,1.25l0.96,3.54l0.61,0.84l2.07,1.63l0.42,0.81l-0.58,0.17l-0.64,-0.75l-1.45,-0.31l-1.64,-1.26l-1.33,-3.16l-0.73,-0.68l-0.3,0.37l0.11,0.7l1.28,3.54l1.14,1.31l2.05,0.74l1.03,1.11l0.64,0.14l0.91,-0.36l-0.03,1.11l1.66,1.54l0.1,1.1l-0.89,-0.35l-0.51,-1.29l-0.63,-0.45l-0.45,0.04l-0.13,0.44l0.27,0.79l-0.67,0.09l-0.65,-0.82l-1.41,-0.67l-2.39,0.63l-0.7,-0.67l-0.71,-1.49l-1.26,-0.71l-0.46,0.14l0.01,0.48l1.13,1.84l-0.22,-0.08l-1.62,-1.2l-1.66,-2.28l-0.45,-0.02l-0.37,1.44l-0.32,-0.79l-0.74,0.2l-0.21,0.27l0.33,0.72l-0.11,0.56l-0.76,0.53l-0.94,-1.5l0.07,-1.68l0.76,-0.6l-0.19,-0.74l0.78,-0.47l0.21,-1.61l1.07,-1.03l-0.0,-1.03l-0.46,-0.86l1.27,-2.19l-0.14,-0.54l-2.72,-1.68l-0.56,0.14l-0.63,1.08l-1.87,-0.26l-0.52,-0.83l-1.11,-0.51l-2.41,0.07l-1.25,-0.91l0.61,-1.35l-0.4,-0.97l-1.19,-0.3l-0.89,-0.66l-2.69,0.07l-0.36,-0.23l-0.11,-1.26l-1.04,-0.6l0.09,-1.2l-0.51,-0.29l-0.49,0.19l-0.23,-0.64l-0.52,-0.13l0.26,-0.83l-0.45,-0.58l-0.69,-0.12l-1.81,0.67l-2.24,-1.27ZM790.04,212.1l1.14,0.18l0.3,0.17l-0.52,0.29l-0.93,-0.63ZM803.05,225.67l-0.02,0.33l-0.21,-0.15l0.23,-0.19ZM807.02,229.13l-0.16,0.3l-0.13,0.07l0.02,-0.24l0.26,-0.12ZM797.57,220.61l-0.06,0.01l-0.09,0.03l0.12,-0.07l0.03,0.02ZM797.24,220.74l-0.26,0.56l-0.18,0.12l0.15,-0.61l0.29,-0.07ZM795.94,216.76l-0.29,0.29l-0.72,-0.27l0.02,-0.33l0.26,-0.36l0.72,0.67ZM794.58,212.85l-0.34,0.78l-0.59,0.23l0.02,-1.48l0.92,0.47ZM802.18,228.89l0.1,-0.11l0.12,0.08l-0.22,0.03Z", "name": "Maryland"}, "US-AR": {"path": "M498.73,376.99l-1.42,-38.01l-4.48,-23.98l37.68,-2.58l39.02,-3.58l0.8,1.6l1.01,0.7l0.11,1.77l-0.77,0.57l-0.22,0.94l-1.42,0.93l-0.29,1.04l-0.83,0.54l-1.19,2.59l0.02,0.7l0.53,0.26l10.94,-1.46l0.86,0.93l-1.18,0.37l-0.52,0.96l0.25,0.49l0.84,0.41l-3.6,2.7l0.02,0.84l0.83,1.04l-0.6,1.15l0.62,0.97l-1.42,0.74l-0.11,1.44l-1.45,2.09l0.12,1.64l0.91,3.1l-0.15,0.27l-1.08,-0.01l-0.33,0.26l-0.51,1.73l-1.52,0.95l-0.04,0.51l0.79,0.91l0.05,0.65l-1.11,1.21l-2.02,1.13l-0.21,0.62l0.43,1.0l-0.19,0.27l-1.23,0.03l-0.42,0.67l-0.32,1.89l0.47,1.57l0.02,3.08l-1.27,1.09l-1.54,0.13l0.23,1.49l-0.21,0.48l-0.93,0.25l-0.59,1.77l-1.49,1.19l-0.02,0.93l1.39,0.76l-0.03,0.7l-1.23,0.3l-2.24,1.23l0.03,0.67l0.99,0.82l-0.45,1.14l0.53,1.38l-1.09,0.62l-1.9,2.57l0.52,0.7l1.0,0.49l0.01,0.58l-0.98,0.29l-0.42,0.64l0.51,0.84l1.63,1.01l0.06,1.77l-0.59,0.98l-0.09,0.84l0.29,0.4l1.05,0.39l0.5,2.17l-1.09,1.01l0.06,2.11l-51.46,4.07l-0.83,-11.53l-1.18,-0.85l-0.9,0.16l-0.83,-0.35l-0.93,0.39l-1.22,-0.33l-0.57,0.72l-0.47,0.01l-0.49,-0.48l-0.82,-0.15l-0.63,-1.0Z", "name": "Arkansas"}, "US-MA": {"path": "M877.65,135.84l1.07,-0.19l0.85,-1.13l0.45,0.58l-1.06,0.64l-1.31,0.1ZM831.87,132.65l-0.46,-0.28l-10.4,2.53l-0.25,-0.18l-0.27,-14.8l29.99,-7.86l1.53,-1.8l0.34,-1.48l0.95,-0.35l0.61,-1.04l1.3,-1.08l1.23,-0.08l-0.44,1.05l1.36,0.55l-0.16,0.61l0.44,0.83l1.0,0.36l-0.06,0.32l0.39,0.28l1.31,0.19l-0.16,0.56l-2.52,1.87l-0.05,1.07l0.45,0.16l-1.11,1.41l0.23,1.08l-1.01,0.96l0.58,1.41l1.4,0.45l0.5,0.63l1.36,-0.57l0.33,-0.59l1.2,0.09l0.79,0.47l0.23,0.68l1.78,1.37l-0.07,1.25l-0.36,0.29l0.11,0.61l1.58,0.82l1.19,-0.14l0.68,1.2l0.22,1.14l0.89,0.68l1.33,0.41l1.48,-0.12l0.43,0.38l1.05,-0.23l3.35,-2.76l0.39,-0.69l0.54,0.02l0.56,1.86l-3.32,1.52l-0.94,0.82l-2.75,0.98l-0.49,1.65l-1.94,1.27l-0.81,-2.53l0.11,-1.35l-0.55,-0.31l-0.5,0.39l-0.93,-0.11l-0.3,0.51l0.25,0.92l-0.26,0.79l-0.4,0.06l-0.63,1.1l-0.6,-0.2l-0.5,0.48l0.22,1.86l-0.9,0.87l-0.63,-0.8l-0.47,0.01l-0.11,0.55l-0.26,0.03l-0.7,-2.02l-1.02,-0.35l0.44,-2.5l-0.21,-0.4l-0.77,0.4l-0.29,1.47l-0.69,0.2l-1.4,-0.64l-0.78,-2.12l-0.8,-0.22l-0.78,-2.15l-0.49,-0.24l-6.13,2.0l-0.3,-0.15l-14.84,4.19l-0.28,0.5ZM860.89,110.08l-0.02,-0.37l-0.14,-0.48l0.51,0.23l-0.35,0.62ZM876.37,122.8l-0.42,-0.66l0.06,-0.05l0.44,0.67l-0.09,0.05ZM875.46,121.25l-0.86,-0.11l-0.94,-1.42l1.44,1.0l0.36,0.54ZM871.54,119.46l-0.06,0.25l-0.35,-0.2l0.13,0.02l0.29,-0.07ZM871.87,135.18l0.01,-0.02l0.01,0.04l-0.02,-0.02ZM867.18,137.63l0.78,-0.56l0.28,-1.17l0.84,-1.19l0.17,0.26l0.46,-0.11l0.34,0.52l0.71,-0.01l0.19,0.38l-2.11,0.73l-1.34,1.31l-0.33,-0.17Z", "name": "Massachusetts"}, "US-AL": {"path": "M608.66,337.47l25.17,-2.91l19.4,-2.75l14.04,43.3l0.79,1.4l0.22,1.05l1.17,1.59l0.59,1.87l2.24,2.5l0.92,1.8l-0.11,2.13l1.8,1.13l-0.17,0.74l-0.63,0.1l-0.16,0.7l-0.98,0.84l-0.22,2.29l0.25,1.48l-0.77,2.3l-0.14,1.84l1.1,2.94l1.21,1.52l0.53,1.6l-0.08,5.02l-0.25,0.81l0.48,2.03l1.35,1.16l1.14,2.07l-47.65,6.92l-0.42,0.61l-0.08,2.99l2.64,2.75l2.0,0.97l-0.34,2.7l0.56,1.6l0.43,0.39l-0.94,1.69l-1.24,1.0l-1.13,-0.75l-0.34,0.49l0.66,1.46l-2.82,1.05l0.29,-0.64l-0.45,-0.86l-0.99,-0.77l-0.1,-1.11l-0.57,-0.22l-0.53,0.61l-0.32,-0.1l-0.89,-1.53l0.41,-1.67l-0.97,-2.21l-0.46,-0.45l-0.86,-0.2l-0.3,-0.89l-0.56,-0.17l-0.37,0.61l0.14,0.35l-0.77,3.1l-0.01,5.08l-0.59,0.0l-0.24,-0.71l-2.22,-0.44l-1.65,0.31l-5.46,-31.99l-0.99,-66.49l-0.02,-0.37l-1.07,-0.63l-0.69,-1.02Z", "name": "Alabama"}, "US-MO": {"path": "M468.68,225.54l24.71,-0.73l18.94,-1.43l22.11,-2.58l0.42,0.35l0.39,0.91l2.43,1.65l0.29,0.74l1.21,0.87l-0.51,1.37l-0.1,3.21l0.78,3.65l0.95,1.44l0.03,1.59l1.11,1.37l0.46,1.55l4.96,4.1l1.06,1.69l4.93,3.31l0.7,1.15l0.27,1.62l0.5,0.82l-0.18,0.69l0.47,1.8l0.97,1.63l0.77,0.73l1.04,0.16l0.83,-0.56l0.84,-1.4l0.57,-0.19l2.41,0.61l1.68,0.76l0.84,0.77l-0.97,1.95l0.26,2.28l-2.37,6.86l0.01,1.02l0.7,1.92l4.67,4.05l1.99,1.05l1.46,0.09l1.66,1.31l1.91,0.8l1.51,2.11l2.04,0.83l0.42,2.96l1.72,2.9l-1.1,1.94l0.18,1.38l0.75,0.33l2.31,4.25l1.94,0.92l0.55,-0.32l0.0,-0.65l0.87,1.1l1.07,-0.08l0.14,1.85l-0.37,1.07l0.53,1.6l-1.07,3.86l-0.51,0.07l-1.37,-1.13l-0.65,0.13l-0.78,3.34l-0.52,0.74l0.13,-1.06l-0.56,-1.09l-0.97,-0.2l-0.74,0.63l0.02,1.05l0.53,0.66l-0.04,0.7l0.58,1.34l-0.2,0.4l-1.2,0.39l-0.17,0.41l0.15,0.55l0.86,0.84l-1.71,0.37l-0.14,0.62l1.53,1.97l-0.89,0.75l-0.63,2.13l-10.61,1.42l1.06,-2.28l0.87,-0.61l0.18,-0.87l1.44,-0.96l0.25,-0.96l0.63,-0.37l0.29,-0.59l-0.22,-2.28l-1.05,-0.75l-0.2,-0.77l-1.09,-1.18l-39.24,3.61l-37.72,2.58l-3.21,-58.2l-1.03,-0.63l-1.2,-0.02l-1.52,-0.73l-0.19,-0.93l-0.76,-0.59l-0.34,-0.71l-0.36,-1.55l-0.55,-0.09l-0.3,-0.56l-1.13,-0.66l-1.4,-1.84l0.73,-0.51l0.09,-1.24l1.12,-1.27l0.09,-0.79l1.01,0.16l0.56,-0.43l-0.2,-2.24l-1.02,-0.74l-0.32,-1.1l-1.17,-0.01l-1.31,0.96l-0.81,-0.7l-0.73,-0.17l-2.67,-2.35l-1.05,-0.28l0.13,-1.6l-1.32,-1.72l0.1,-1.02l-0.37,-0.36l-1.01,-0.18l-0.59,-0.85l-0.84,-0.26l0.07,-0.53l-1.24,-2.88l-0.0,-0.74l-0.4,-0.49l-0.85,-0.29l-0.05,-0.54ZM583.77,294.59l-0.1,-0.1l-0.08,-0.15l0.11,-0.01l0.07,0.26Z", "name": "Missouri"}, "US-MN": {"path": "M439.34,42.76l26.81,-1.05l0.34,1.46l1.28,0.84l1.79,-0.5l1.05,-1.43l0.78,-0.31l2.13,2.19l1.71,0.28l0.31,1.2l1.83,1.4l1.79,0.48l2.64,-0.41l0.39,0.85l0.67,0.4l5.12,0.01l0.37,0.23l0.54,1.59l0.71,0.61l4.27,-0.78l0.77,-0.65l0.07,-0.69l2.43,-0.79l3.97,-0.02l1.42,0.7l3.39,0.66l-1.01,0.79l0.0,0.82l1.18,0.54l2.23,-0.16l0.52,2.08l1.58,2.29l0.71,0.05l1.03,-0.78l-0.04,-1.73l2.67,-0.46l1.43,2.17l2.01,0.79l1.54,0.18l0.54,0.57l-0.03,0.83l0.58,0.35l1.32,0.06l0.38,0.83l1.43,-0.19l1.12,0.22l2.22,-0.85l2.78,-2.55l2.49,-1.54l1.24,2.52l0.96,0.51l2.23,-0.66l0.87,0.36l5.98,-1.3l0.56,0.18l1.32,1.64l1.24,0.59l0.62,-0.01l1.61,-0.83l1.35,0.08l-0.93,1.03l-4.69,3.07l-6.35,2.82l-3.68,2.48l-2.15,2.49l-0.95,0.58l-6.63,8.66l-0.95,0.61l-1.08,1.56l-1.96,1.96l-4.17,3.55l-0.86,1.79l-0.55,0.44l-0.14,0.96l-0.78,-0.01l-0.46,0.51l0.98,12.22l-0.79,1.2l-1.05,0.08l-0.52,0.82l-0.83,0.15l-0.61,0.83l-2.06,1.19l-0.94,1.86l0.06,0.72l-1.69,2.39l-0.01,2.06l0.38,0.91l2.15,0.39l1.42,2.49l-0.52,1.92l-0.71,1.25l-0.05,2.12l0.45,1.32l-0.71,1.23l0.91,3.14l-0.51,4.08l3.95,3.03l3.02,0.4l1.89,2.25l2.87,0.5l2.45,1.93l2.39,3.59l2.64,1.8l2.09,0.09l1.07,0.71l0.88,0.1l0.82,1.36l1.03,0.45l0.23,0.39l0.28,2.03l0.68,1.3l0.39,4.82l-40.63,3.2l-40.63,2.09l-1.46,-38.98l-0.7,-1.27l-0.83,-0.78l-2.57,-0.79l-0.94,-1.91l-1.46,-1.79l0.21,-0.68l2.83,-2.34l0.97,-2.12l0.4,-2.44l-0.35,-1.58l0.23,-1.58l-0.18,-1.79l-0.5,-1.03l-0.18,-2.33l-1.81,-2.59l-0.47,-1.13l-0.21,-2.16l-0.66,-0.98l0.15,-1.66l-0.35,-1.52l0.53,-2.69l-1.08,-1.85l-0.49,-8.33l-0.42,-0.79l0.06,-3.92l-1.58,-3.96l-0.53,-0.65l-0.4,-1.37l0.05,-1.19l-0.48,-0.53l-1.36,-3.77l0.0,-3.22l-0.47,-1.97l0.27,-1.12l-0.57,-2.32l0.73,-2.56l-2.06,-6.9ZM468.97,33.61l1.22,0.46l0.99,-0.2l0.33,0.45l-0.05,1.72l-1.78,1.12l-0.15,-0.47l-0.4,-0.14l-0.16,-2.95Z", "name": "Minnesota"}, "US-CA": {"path": "M2.95,175.4l0.78,-1.24l0.46,0.46l0.59,-0.08l0.52,-1.18l0.8,-0.86l1.3,-0.26l0.56,-0.53l-0.15,-0.71l-0.93,-0.32l1.53,-2.79l-0.3,-1.58l0.14,-0.87l2.04,-3.3l1.31,-3.03l0.36,-2.12l-0.28,-1.0l0.16,-3.11l-1.36,-2.16l1.18,-1.38l0.67,-2.53l32.73,8.13l32.58,7.34l-13.67,64.68l25.45,34.66l36.6,51.1l13.3,17.72l-0.19,2.73l0.73,0.94l0.21,1.71l0.85,0.63l0.81,2.56l-0.07,0.91l0.63,1.46l-0.16,1.36l3.8,3.82l0.01,0.5l-1.95,1.53l-3.11,1.26l-1.2,1.99l-1.72,1.14l-0.33,0.81l0.38,1.03l-0.51,0.51l-0.1,0.9l0.08,2.29l-0.6,0.72l-0.64,2.44l-2.02,2.47l-1.6,0.14l-0.42,0.51l0.33,0.89l-0.59,1.34l0.54,1.12l-0.01,1.19l-0.78,2.68l0.57,1.02l2.74,1.13l0.34,0.83l-0.19,2.4l-1.18,0.78l-0.42,1.37l-2.27,-0.62l-1.25,0.6l-43.38,-3.34l0.17,-1.15l0.67,-0.51l-0.17,-1.06l-1.17,-1.38l-1.04,-0.15l0.23,-1.2l-0.28,-1.07l0.78,-1.33l-0.3,-4.25l-0.6,-2.3l-1.92,-4.07l-3.56,-4.07l-1.29,-1.98l-2.42,-2.11l-2.04,-3.01l-2.22,-0.89l-0.94,0.3l-0.39,0.96l-0.62,-0.73l-0.88,-0.22l-0.15,-0.31l0.61,-0.76l0.17,-1.57l-0.44,-2.06l-1.01,-1.95l-1.0,-0.74l-4.44,-0.19l-3.33,-1.81l-1.36,-1.26l-0.7,-0.12l-1.02,-1.19l-0.44,-2.6l-0.97,-0.47l-1.68,-2.31l-2.19,-1.73l-1.24,-0.41l-1.66,0.37l-1.15,-1.01l-1.25,0.03l-2.48,-1.83l-1.06,0.01l-1.49,-0.69l-4.91,-0.52l-1.12,-2.35l-1.43,-0.76l1.34,-2.45l-0.25,-1.36l0.74,-1.99l-0.63,-1.35l1.27,-2.45l0.33,-2.44l-0.99,-1.24l-1.26,-0.23l-1.4,-1.28l0.41,-1.62l0.79,-0.09l0.25,-0.45l-0.47,-2.2l-0.65,-0.77l-1.47,-0.84l-1.78,-3.97l-1.82,-1.25l-0.36,-2.75l-1.61,-2.58l0.07,-1.39l-0.33,-1.26l-1.16,-0.94l-0.74,-2.95l-2.41,-2.69l-0.55,-1.25l-0.02,-4.63l0.59,-0.57l-0.59,-1.14l0.51,-0.59l0.53,0.61l0.78,-0.02l0.84,-0.81l0.56,-1.33l0.8,0.04l0.21,-0.88l-0.43,-0.27l0.47,-1.19l-1.22,-3.68l-0.62,-0.48l-1.05,0.08l-1.93,-0.51l-1.04,-1.06l-1.89,-3.21l-0.8,-2.28l0.86,-2.39l0.09,-1.11l-0.27,-2.38l-0.32,-0.64l-0.54,-0.24l0.25,-1.19l0.69,-1.07l0.24,-2.71l0.47,-0.64l0.88,0.13l0.18,0.94l-0.7,2.13l0.05,1.15l1.18,1.32l0.55,0.1l0.58,1.28l1.16,0.78l0.4,1.01l0.89,0.41l0.83,-0.21l-0.21,-1.45l-0.65,-0.43l-0.18,-0.58l-0.24,-3.57l-0.56,-0.71l0.26,-0.69l-1.48,-1.06l0.5,-1.07l0.09,-1.06l-1.2,-1.58l0.78,-0.74l0.79,0.06l1.24,-0.73l1.25,1.02l1.87,-0.32l5.55,2.41l0.61,-0.09l0.64,-1.38l0.69,-0.04l1.92,2.53l0.25,0.18l0.63,-0.24l0.02,-0.38l-0.39,-0.93l-1.57,-1.89l-1.66,-0.32l0.27,-0.62l-0.28,-0.54l-0.48,0.09l-1.05,1.01l-1.84,-0.22l-0.43,0.28l-0.15,-0.51l-1.05,-0.4l0.24,-1.05l-0.85,-0.47l-1.0,0.28l-0.6,0.84l-1.09,0.4l-1.35,-0.9l-0.39,-0.88l-1.51,-1.44l-0.58,0.03l-0.64,0.61l-0.92,-0.12l-0.48,0.36l-0.33,1.88l0.21,0.78l-0.76,1.36l0.36,0.65l-0.47,0.59l-0.04,0.69l-2.16,-2.89l-0.44,-0.15l-0.25,0.32l-0.73,-1.0l-0.21,-1.03l-1.2,-1.17l-0.4,-1.05l-0.61,-0.18l0.65,-1.48l0.11,0.95l0.76,1.49l0.44,0.25l0.33,-0.38l-1.45,-5.21l-1.08,-1.42l-0.31,-2.68l-2.5,-2.87l-1.8,-4.48l-3.05,-5.54l1.09,-1.7l0.25,-1.97l-0.46,-2.11l-0.14,-3.61l1.34,-2.92l0.7,-0.74l-0.07,-1.54l0.42,-1.53l-0.41,-1.63l0.11,-1.96l-1.41,-4.06l-0.97,-1.15l0.06,-0.8l-0.42,-1.19l-2.91,-4.03l0.51,-1.35l-0.21,-2.69l2.23,-3.44ZM31.5,240.45l-0.06,0.1l-0.34,0.04l0.21,-0.05l0.19,-0.09ZM64.32,351.64l0.27,0.13l0.19,0.18l-0.31,-0.18l-0.15,-0.13ZM65.92,352.88l1.32,0.84l0.76,1.73l-0.89,-0.66l-1.14,0.03l-0.05,-1.94ZM62.72,363.08l1.36,2.08l0.57,0.53l-0.46,0.06l-0.83,-0.79l-0.65,-1.88ZM43.54,333.81l0.88,0.73l1.37,0.36l1.36,1.0l-2.82,-0.18l-0.71,-0.58l0.24,-0.66l-0.32,-0.67ZM47.89,335.89l0.94,-0.5l0.32,0.36l-0.37,0.14l-0.88,-0.0ZM46.05,352.4l0.29,-0.06l0.95,0.92l-0.61,-0.17l-0.64,-0.69ZM37.57,334.04l2.57,0.16l0.2,0.74l0.6,0.45l-1.21,0.64l-1.17,-0.1l-0.49,-0.44l-0.5,-1.44ZM34.94,332.37l0.06,-0.02l0.05,0.06l-0.01,-0.0l-0.1,-0.04Z", "name": "California"}, "US-IA": {"path": "M452.9,162.25l42.83,-2.19l40.56,-3.19l0.96,2.52l2.0,1.0l0.08,0.59l-0.9,1.8l-0.16,1.04l0.9,5.09l0.92,1.26l0.39,1.75l1.46,1.72l4.95,0.85l1.27,2.03l-0.3,1.03l0.29,0.66l3.61,2.37l0.85,2.41l3.84,2.31l0.62,1.68l-0.31,4.21l-1.64,1.98l-0.5,1.94l0.13,1.28l-1.26,1.36l-2.51,0.97l-0.89,1.18l-0.55,0.25l-4.56,0.83l-0.89,0.73l-0.61,1.71l-0.15,2.56l0.4,1.08l2.01,1.47l0.54,2.65l-1.87,3.25l-0.22,2.24l-0.53,1.42l-2.88,1.39l-1.02,1.02l-0.2,0.99l0.72,0.87l0.2,2.15l-0.58,0.23l-1.34,-0.82l-0.31,-0.76l-1.29,-0.82l-0.29,-0.51l-0.88,-0.36l-0.3,-0.82l-0.95,-0.68l-22.3,2.61l-15.13,1.17l-7.59,0.51l-20.78,0.47l-0.22,-1.06l-1.3,-0.73l-0.33,-0.67l0.58,-1.16l-0.21,-0.95l0.22,-1.39l-0.36,-2.19l-0.6,-0.73l0.07,-3.65l-1.05,-0.5l0.05,-0.91l0.71,-1.02l-0.05,-0.44l-1.31,-0.56l0.33,-2.54l-0.41,-0.45l-0.89,-0.16l0.23,-0.8l-0.3,-0.58l-0.51,-0.25l-0.74,0.23l-0.42,-2.81l0.5,-2.36l-0.2,-0.67l-1.36,-1.71l-0.08,-1.92l-1.78,-1.54l-0.36,-1.74l-1.09,-0.94l0.03,-2.18l-1.1,-1.87l0.21,-1.7l-0.27,-1.08l-1.38,-0.67l-0.42,-1.58l-0.45,-0.59l0.05,-0.63l-1.81,-1.82l0.56,-1.61l0.54,-0.47l0.73,-2.68l0.0,-1.68l0.55,-0.69l0.21,-1.19l-0.51,-2.24l-1.33,-0.29l-0.05,-0.73l0.45,-0.56l-0.0,-1.71l-0.95,-1.42l-0.05,-0.87Z", "name": "Iowa"}, "US-MI": {"path": "M612.24,185.84l1.83,-2.17l0.7,-1.59l1.18,-4.4l1.43,-3.04l1.01,-5.05l0.09,-5.37l-0.86,-5.54l-2.4,-5.18l0.61,-0.51l0.3,-0.79l-0.57,-0.42l-1.08,0.55l-3.82,-7.04l-0.21,-1.11l1.13,-2.69l-0.01,-0.97l-0.74,-3.13l-1.28,-1.65l-0.05,-0.62l1.73,-2.73l1.22,-4.14l-0.21,-5.34l-0.77,-1.6l1.09,-1.15l0.81,-0.02l0.56,-0.47l-0.27,-3.49l1.08,-0.11l0.67,-1.43l1.19,0.48l0.65,-0.33l0.76,-2.59l0.82,-1.2l0.56,-1.68l0.55,-0.18l-0.58,0.87l0.6,1.65l-0.71,1.8l0.71,0.42l-0.48,2.61l0.88,1.42l0.73,-0.06l0.52,0.56l0.65,-0.24l0.89,-2.26l0.66,-3.52l-0.08,-2.07l-0.76,-3.42l0.58,-1.02l2.13,-1.64l2.74,-0.54l0.98,-0.63l0.28,-0.64l-0.25,-0.54l-1.76,-0.1l-0.96,-0.86l-0.52,-1.99l1.85,-2.98l-0.11,-0.73l1.72,-0.23l0.74,-0.94l4.16,2.0l0.83,0.13l1.98,-0.4l1.37,0.39l1.19,1.04l0.53,1.14l0.77,0.49l2.41,-0.29l1.7,1.02l1.92,0.09l0.8,0.64l3.27,0.45l1.1,0.78l-0.01,1.12l1.04,1.31l0.64,0.21l0.38,0.92l-0.16,0.54l-0.66,-0.25l-0.94,0.57l-0.23,1.83l0.81,1.29l1.6,0.99l0.69,1.37l0.65,2.26l-0.12,1.73l0.77,5.57l-0.14,0.6l-0.57,0.2l-0.48,0.96l-0.75,0.08l-0.79,0.81l-0.17,4.47l-1.12,0.49l-0.18,0.82l-1.86,0.43l-0.73,0.6l-0.58,2.61l0.26,0.45l-0.21,0.52l0.25,2.58l1.38,1.31l2.9,0.84l0.91,-0.07l1.08,-1.23l0.6,-1.44l0.62,0.19l0.38,-0.24l1.01,-3.59l0.6,-1.06l-0.08,-0.52l0.97,-1.45l1.39,-0.39l1.07,-0.69l0.83,-1.1l0.87,-0.44l2.06,0.59l1.13,0.7l1.0,1.09l1.21,2.16l2.0,5.91l0.82,1.6l1.03,3.71l1.49,3.63l1.27,1.73l-0.33,3.93l0.45,2.49l-0.48,2.79l-0.34,0.44l-0.24,-0.33l-0.31,-1.71l-1.46,-0.52l-0.47,0.08l-1.48,1.36l-0.06,0.83l0.55,0.67l-0.83,0.57l-0.29,0.79l0.28,2.94l-0.49,0.75l-1.62,0.92l-1.06,1.85l-0.43,3.73l0.27,1.55l-0.33,0.93l-0.42,0.19l0.02,0.91l-0.64,0.3l-0.37,1.08l-0.52,0.52l-0.5,1.28l-0.02,1.05l-0.52,0.78l-20.37,4.25l-0.14,-0.86l-0.46,-0.33l-31.6,4.74ZM621.47,115.87l0.0,-0.07l0.12,-0.12l-0.01,0.03l-0.11,0.16ZM621.73,114.95l-0.07,-0.16l0.07,-0.14l-0.0,0.3ZM543.48,88.04l4.87,-2.38l3.55,-3.62l5.77,-1.36l1.39,-0.84l2.36,-2.71l0.97,0.04l1.52,-0.73l1.0,-2.25l2.82,-2.84l0.23,1.72l1.85,0.59l0.05,1.45l0.66,0.14l0.51,0.6l-0.17,3.14l0.44,0.95l-0.34,0.47l0.2,0.47l0.74,-0.02l1.08,-2.21l1.08,-0.9l-0.42,1.15l0.59,0.45l0.82,-0.67l0.52,-1.22l1.0,-0.43l3.09,-0.25l1.51,0.21l1.18,0.93l1.54,0.44l0.47,1.05l2.31,2.58l1.17,0.55l0.53,1.55l0.73,0.34l1.87,0.07l0.73,-0.4l1.07,-0.06l0.52,-0.65l0.88,-0.43l1.0,1.11l1.1,0.64l1.02,-0.25l0.68,-0.82l1.87,1.06l0.64,-0.34l1.65,-2.59l2.81,-1.89l1.7,-1.65l0.91,0.11l3.27,-1.21l5.17,-0.25l4.49,-2.72l2.56,-0.37l-0.01,3.24l0.29,0.71l-0.36,1.1l0.67,0.85l0.66,0.11l0.71,-0.39l2.2,0.7l1.14,-0.43l1.03,-0.87l0.66,0.48l0.21,0.71l0.85,0.22l1.27,-0.8l0.95,-1.55l0.66,-0.02l0.84,0.75l1.98,3.78l-0.86,1.04l0.48,0.89l0.47,0.36l1.37,-0.42l0.58,0.46l0.64,0.04l0.18,1.2l0.98,0.87l1.53,0.52l-1.17,0.68l-4.96,-0.14l-0.53,0.29l-1.35,-0.17l-0.88,0.41l-0.66,-0.76l-1.63,-0.07l-0.59,0.47l-0.07,1.22l-0.49,0.75l0.38,2.05l-0.92,-0.22l-0.89,-0.92l-0.77,-0.13l-1.96,-1.65l-2.41,-0.6l-1.6,0.04l-1.04,-0.5l-2.89,0.47l-0.61,0.45l-1.18,2.52l-3.48,0.73l-0.58,0.77l-2.06,-0.34l-2.82,0.93l-0.68,0.83l-0.56,2.51l-0.78,0.28l-0.81,0.87l-0.65,0.28l0.16,-1.96l-0.75,-0.91l-1.02,0.34l-0.76,0.92l-0.97,-0.39l-0.68,0.17l-0.37,0.4l0.1,0.83l-0.73,2.01l-1.2,0.59l-0.11,-1.38l-0.46,-1.06l0.34,-1.69l-0.17,-0.37l-0.66,-0.17l-0.45,0.58l-0.6,2.12l-0.22,2.57l-1.12,0.91l-1.26,3.02l-0.62,2.66l-2.56,5.33l-0.69,0.74l0.12,0.91l-1.4,-1.28l0.18,-1.75l0.63,-1.69l-0.41,-0.81l-0.62,-0.31l-1.36,0.85l-1.16,0.09l0.04,-1.29l0.81,-1.45l-0.41,-1.34l0.3,-1.09l-0.58,-0.98l0.15,-0.83l-1.9,-1.55l-1.1,-0.06l-0.59,-0.44l-0.86,0.2l-0.62,-0.2l0.3,-1.36l-0.94,-1.45l-1.13,-0.51l-2.23,-0.1l-3.2,-0.71l-1.55,0.59l-1.43,-0.42l-1.62,0.17l-4.56,-1.94l-15.37,-2.5l-2.0,-3.4l-1.88,-0.96l-0.76,0.26l-0.1,-0.3ZM603.38,98.65l-0.01,0.52l-0.46,0.32l-0.7,1.39l0.08,0.57l-0.65,-0.58l0.91,-2.16l0.83,-0.06ZM643.87,87.47l1.99,-1.52l0.17,-0.57l-0.27,-0.64l1.05,0.16l0.8,1.24l0.81,0.19l-0.27,1.08l-0.36,0.19l-1.5,-0.34l-0.77,0.45l-1.63,-0.24ZM635.6,77.64l0.56,-0.83l0.52,0.05l-0.37,1.32l0.11,0.71l-0.35,-0.9l-0.46,-0.35ZM636.53,79.17l0.09,0.14l0.01,0.01l-0.02,-0.01l-0.08,-0.14ZM637.39,81.25l0.4,0.45l0.22,0.61l-0.63,-0.71l0.01,-0.34ZM633.73,93.13l1.41,0.25l0.36,-0.18l0.4,0.21l-0.17,0.52l-0.75,0.11l-1.24,-0.9ZM618.85,96.77l0.62,2.25l-0.8,0.78l-0.39,-0.27l0.56,-2.76ZM613.26,110.83l0.47,0.3l-0.09,0.57l-0.45,-0.69l0.06,-0.17ZM612.23,113.57l0.0,-0.03l0.02,-0.04l-0.03,0.07ZM599.41,82.64l-0.23,-0.37l0.03,-0.4l0.37,0.32l-0.17,0.45ZM570.51,72.75l-0.51,-0.27l-1.16,0.06l-0.04,-1.56l1.0,-1.03l1.17,-2.09l1.84,-1.49l0.63,-0.0l0.53,-0.58l2.08,-0.89l3.34,-0.42l1.1,0.66l-0.54,0.38l-1.31,-0.12l-2.27,0.78l-0.15,0.29l0.3,0.59l0.71,0.13l-1.19,0.98l-1.4,1.89l-0.7,0.29l-0.36,1.45l-1.15,1.37l-0.66,2.04l-0.67,-0.87l0.75,-0.97l0.14,-1.95l-0.63,-0.37l-0.21,0.15l-0.6,0.92l-0.05,0.67ZM558.28,58.21l0.75,-0.98l-0.39,-0.33l0.56,-0.53l4.62,-2.98l1.97,-1.72l0.62,-0.18l-0.45,0.65l0.1,0.79l-0.43,0.49l-4.25,2.56l-0.86,0.99l0.24,0.36l-1.87,1.17l-0.61,-0.28Z", "name": "Michigan"}, "US-GA": {"path": "M654.05,331.71l22.02,-3.57l20.65,-3.86l-1.48,1.42l-0.51,1.68l-0.66,0.82l-0.41,1.73l0.11,1.23l0.82,0.78l1.84,0.8l1.03,0.12l2.7,2.03l0.84,0.24l1.9,-0.37l0.6,0.25l0.8,1.64l1.51,1.6l1.04,2.5l1.33,0.82l0.84,1.16l0.56,0.26l1.0,1.77l1.07,0.3l1.17,0.99l3.81,1.85l2.41,3.16l2.25,0.58l2.53,1.67l0.5,2.34l1.25,1.02l0.47,-0.16l0.31,0.49l-0.1,0.62l0.79,0.73l0.79,0.09l0.56,1.21l4.99,1.89l0.4,1.78l1.54,1.73l1.02,2.01l-0.07,0.81l0.49,0.69l0.11,1.24l1.04,0.79l1.17,0.17l1.25,0.62l0.28,0.53l0.57,0.23l1.12,2.56l0.76,0.57l0.08,2.68l0.77,1.48l1.38,0.9l1.52,-0.27l1.44,0.76l1.45,0.11l-0.59,0.78l-0.56,-0.35l-0.47,0.28l-0.4,0.99l0.62,0.91l-0.38,0.48l-1.38,-0.16l-0.77,-0.55l-0.65,0.44l0.26,0.71l-0.49,0.52l0.36,0.61l0.94,-0.04l0.5,0.29l-0.58,1.35l-1.43,0.27l-1.33,-0.44l-0.44,0.39l0.34,0.85l1.23,0.35l-0.5,0.87l0.23,0.35l-0.2,0.64l0.83,0.64l-0.33,0.44l-0.72,-0.13l-0.96,0.51l-0.1,0.62l1.09,0.45l0.05,0.95l0.48,-0.07l1.2,-1.17l-0.92,2.31l-0.31,-0.58l-0.59,-0.08l-0.44,0.72l0.29,0.7l0.98,0.83l-2.32,0.04l-0.92,-0.28l-0.63,0.3l0.06,0.63l0.55,0.34l2.76,0.24l1.07,0.66l-0.02,0.34l-0.56,0.22l-0.88,1.95l-0.5,-1.41l-0.45,-0.13l-0.6,0.33l-0.15,0.84l0.34,0.96l-0.6,0.11l-0.03,0.84l-0.3,0.16l0.07,0.46l1.33,1.15l-1.09,1.03l0.32,0.47l0.77,0.07l-0.39,0.92l0.06,0.88l-0.46,0.51l1.1,1.66l0.03,0.76l-0.79,0.33l-2.64,-0.17l-4.06,-0.96l-1.31,0.35l-0.18,0.74l-0.68,0.26l-0.35,1.25l0.28,2.08l0.95,1.36l0.13,4.25l-1.97,0.4l-0.54,-0.92l-0.12,-1.3l-1.33,-1.82l-49.22,5.14l-0.72,-0.56l-0.86,-2.7l-0.94,-1.51l-0.56,-0.38l0.16,-0.68l-0.73,-1.51l-1.82,-1.81l-0.43,-1.75l0.25,-0.8l0.06,-5.18l-0.6,-1.81l-1.19,-1.47l-1.03,-2.65l0.12,-1.65l0.78,-2.36l-0.25,-1.53l0.19,-2.11l1.62,-1.33l0.46,-1.47l-0.55,-0.61l-1.42,-0.69l0.09,-2.15l-0.97,-1.87l-2.18,-2.42l-1.03,-2.81l-0.75,-0.68l-0.17,-0.96l-0.77,-1.37l-13.99,-43.12ZM745.21,389.83l0.7,-0.26l-0.07,0.82l-0.29,-0.33l-0.34,-0.24ZM743.75,406.73l0.05,0.87l-0.01,0.46l-0.34,-0.56l0.3,-0.76Z", "name": "Georgia"}, "US-AZ": {"path": "M128.39,384.21l0.44,-1.81l1.29,-1.29l0.54,-1.11l0.48,-0.25l1.66,0.62l0.96,-0.03l0.52,-0.46l0.28,-1.17l1.31,-1.0l0.24,-2.73l-0.46,-1.24l-0.84,-0.66l-2.07,-0.67l-0.3,-0.61l0.8,-2.4l0.0,-1.39l-0.52,-1.2l0.57,-0.86l-0.2,-0.87l1.57,-0.27l2.29,-2.81l0.65,-2.43l0.65,-0.81l0.02,-3.17l0.55,-0.62l-0.29,-1.43l1.71,-1.14l1.03,-1.85l3.16,-1.29l2.03,-1.58l0.26,-0.53l-0.13,-1.04l-3.25,-3.49l-0.51,-0.22l0.22,-1.26l-0.66,-1.46l0.07,-0.91l-0.88,-2.76l-0.84,-0.56l-0.19,-1.65l-0.69,-0.8l0.19,-3.54l0.58,-0.87l-0.3,-0.86l1.04,-0.4l0.4,-1.42l0.14,-3.2l-0.76,-3.66l0.47,-0.88l0.29,-1.67l-0.4,-3.0l0.85,-2.56l-0.8,-1.87l-0.03,-0.92l0.43,-0.52l0.34,-1.35l2.54,-0.63l1.75,0.99l1.43,-0.19l0.96,2.24l0.79,0.71l1.54,0.14l1.01,-0.5l1.02,-2.27l0.94,-1.19l2.57,-16.95l42.43,5.78l42.56,4.67l-11.82,123.66l-36.89,-4.05l-36.34,-18.98l-28.44,-15.56Z", "name": "Arizona"}, "US-MT": {"path": "M166.3,57.31l0.69,-0.1l0.33,-0.38l-0.9,-1.99l0.83,-0.96l-0.39,-1.3l0.09,-0.96l-1.24,-1.93l-0.24,-1.49l-1.03,-1.33l-1.19,-2.44l3.53,-20.65l43.66,6.71l43.06,5.23l42.75,3.84l43.15,2.53l-3.53,86.06l-28.11,-1.47l-26.82,-1.91l-26.78,-2.4l-25.84,-2.79l-0.44,0.35l-1.22,10.41l-1.51,-2.01l-0.03,-0.91l-1.19,-2.35l-1.25,-0.74l-1.8,0.92l0.03,1.05l-0.72,0.42l-0.34,1.56l-2.42,-0.41l-1.91,0.57l-0.92,-0.85l-3.36,0.09l-2.38,-0.96l-1.68,0.58l-0.84,1.49l-4.66,-1.6l-1.3,0.37l-1.12,0.9l-0.31,0.67l-1.65,-1.4l0.22,-1.43l-0.9,-1.71l0.4,-0.36l0.07,-0.62l-1.17,-3.08l-1.45,-1.25l-1.44,0.36l-0.21,-0.64l-1.08,-0.9l-0.41,-1.37l0.68,-0.61l0.2,-1.41l-0.77,-2.38l-0.77,-0.35l-0.31,-1.58l-1.51,-2.54l0.23,-1.51l-0.56,-1.26l0.34,-1.4l-0.73,-0.86l0.48,-0.98l-0.21,-0.74l-1.14,-0.75l-0.13,-0.59l-0.85,-0.91l-0.8,-0.4l-0.51,0.37l-0.07,0.74l-0.7,0.27l-1.13,1.22l-1.75,0.37l-1.21,1.07l-1.08,-0.85l-0.64,-1.01l-1.06,-0.44l0.02,-0.86l0.74,-0.63l0.24,-1.06l-0.61,-1.6l0.9,-1.09l1.07,-0.08l0.83,-0.8l-0.26,-1.14l0.38,-1.07l-0.95,-0.81l-0.04,-0.81l0.66,-1.28l-0.59,-1.07l0.74,-0.07l0.38,-0.42l-0.04,-1.77l1.83,-3.73l-0.14,-1.05l0.89,-0.62l0.6,-3.17l-0.78,-0.5l-1.8,0.37l-1.33,-0.11l-0.64,-0.55l0.37,-0.83l-0.62,-0.97l-0.66,-0.23l-0.72,0.35l-0.07,-0.95l-1.74,-1.63l0.04,-1.84l-1.68,-1.82l-0.08,-0.69l-1.55,-2.88l-1.07,-1.29l-0.57,-1.63l-2.35,-1.34l-0.95,-1.95l-1.44,-1.19Z", "name": "Montana"}, "US-MS": {"path": "M555.49,431.1l0.67,-0.97l-1.05,-1.76l0.18,-1.63l-0.81,-0.87l1.69,-0.25l0.47,-0.54l0.4,-2.74l-0.77,-1.82l1.56,-1.79l0.25,-3.58l0.74,-2.26l1.89,-1.25l1.15,-1.97l1.4,-1.04l0.34,-0.78l-0.04,-0.99l-0.63,-0.96l1.14,-0.28l0.96,-2.59l0.91,-1.31l-0.16,-0.86l-1.54,-0.43l-0.35,-0.96l-1.83,-1.04l-0.07,-2.14l-0.93,-0.74l-0.45,-0.84l-0.02,-0.37l1.14,-0.29l0.47,-0.69l-0.26,-0.89l-1.41,-0.49l0.23,-1.77l0.98,-1.54l-0.77,-1.06l-1.08,-0.31l-0.15,-2.82l0.9,-0.54l0.23,-0.8l-0.62,-2.52l-1.25,-0.66l0.7,-1.33l-0.07,-2.22l-2.02,-1.52l1.14,-0.47l0.12,-1.41l-1.34,-0.89l1.58,-2.04l0.93,-0.31l0.36,-0.69l-0.52,-1.56l0.42,-1.35l-0.9,-0.89l1.6,-0.83l1.24,-0.27l0.59,-0.77l-0.09,-1.07l-1.41,-0.95l1.39,-1.08l0.62,-1.77l0.5,0.11l0.45,-0.28l0.34,-0.98l-0.2,-0.77l1.48,-0.43l1.22,-1.21l0.07,-3.53l-0.46,-1.53l0.36,-1.78l0.73,0.09l0.68,-0.33l0.42,-0.87l-0.41,-1.06l2.72,-1.71l0.58,-1.06l-0.29,-1.28l36.45,-4.1l0.86,1.26l0.85,0.45l0.99,66.5l5.52,32.95l-0.73,0.69l-1.53,-0.3l-0.91,-0.94l-1.32,1.06l-1.23,0.17l-2.17,-1.26l-1.85,-0.19l-0.83,0.36l-0.34,0.44l0.32,0.41l-0.56,0.36l-3.96,1.66l-0.05,-0.5l-0.96,-0.52l-1.0,0.04l-0.59,1.0l0.76,0.61l-1.59,1.21l-0.32,1.28l-0.69,0.3l-1.34,-0.06l-1.16,-1.86l-0.08,-0.89l-0.92,-1.47l-0.21,-1.01l-1.4,-1.63l-1.16,-0.54l-0.47,-0.78l0.1,-0.62l-0.69,-0.92l0.21,-1.99l0.5,-0.93l0.66,-2.98l-0.06,-1.23l-0.43,-0.29l-34.66,3.41Z", "name": "Mississippi"}, "US-SC": {"path": "M697.56,324.11l4.86,-2.69l1.02,-0.05l1.11,-1.38l3.93,-1.9l0.45,-0.88l0.63,0.22l22.71,-3.36l0.07,1.22l0.42,0.57l0.71,0.01l1.21,-1.3l2.82,2.54l0.46,2.48l0.55,0.52l19.74,-3.49l22.74,15.07l0.02,0.55l-2.48,2.18l-2.44,3.67l-2.41,5.72l-0.09,2.74l-1.08,-0.21l0.85,-2.73l-0.64,-0.23l-0.76,0.87l-0.56,1.38l-0.11,1.55l0.84,0.95l1.05,0.23l0.44,0.91l-0.75,0.08l-0.41,0.56l-0.87,0.02l-0.24,0.68l0.94,0.45l-1.1,1.13l-0.07,1.02l-1.34,0.63l-0.5,-0.61l-0.5,-0.08l-1.07,0.87l-0.56,1.76l0.43,0.87l-1.2,1.23l-0.61,1.44l-1.2,1.01l-0.9,-0.4l0.27,-0.6l-0.53,-0.74l-1.38,0.31l-0.11,0.43l0.36,0.77l-0.52,0.03l0.05,0.76l0.72,0.58l1.3,0.43l-0.12,0.39l-0.88,0.94l-1.22,0.23l-0.25,0.51l0.33,0.45l-2.3,1.34l-1.42,-0.85l-0.56,0.11l-0.11,0.67l1.19,0.78l-1.54,1.57l-0.72,-0.75l-0.5,0.52l-0.0,0.74l-0.69,-0.37l-0.85,-0.0l-1.34,-0.84l-0.45,0.5l0.16,0.53l-1.73,0.17l-0.44,0.37l-0.06,0.77l0.65,0.23l1.43,-0.17l-0.26,0.55l0.42,0.25l1.91,-0.15l0.11,0.22l-0.97,0.86l-0.32,0.78l0.57,0.49l0.94,-0.53l0.03,0.21l-1.12,1.09l-0.99,0.43l-0.21,-2.04l-0.69,-0.27l-0.22,-1.55l-0.88,-0.15l-0.31,0.58l0.86,2.7l-1.12,-0.66l-0.63,-1.0l-0.4,-1.76l-0.65,-0.2l-0.52,-0.63l-0.69,0.0l-0.27,0.6l0.84,1.02l0.01,0.68l1.11,1.83l-0.02,0.86l1.22,1.17l-0.62,0.35l0.03,0.98l-1.2,3.56l-1.52,-0.78l-1.52,0.26l-0.97,-0.68l-0.54,-1.03l-0.17,-2.93l-0.86,-0.75l-1.06,-2.47l-1.04,-0.95l-3.23,-1.33l-0.49,-2.65l-1.12,-2.17l-1.43,-1.58l-0.06,-1.07l-0.76,-1.21l-4.82,-1.69l-0.58,-1.27l-1.21,-0.37l0.02,-0.7l-0.53,-0.87l-0.87,0.0l-0.73,-0.61l0.03,-1.21l-0.66,-1.26l-2.7,-1.78l-2.16,-0.52l-2.36,-3.12l-3.93,-1.93l-1.22,-1.03l-0.83,-0.12l-1.05,-1.81l-0.51,-0.22l-0.91,-1.21l-1.18,-0.68l-0.99,-2.42l-1.54,-1.65l-1.02,-1.87l-1.06,-0.37l-1.93,0.37l-0.46,-0.16l-2.75,-2.19l-1.06,0.02l-1.7,-0.74l-0.52,-0.53l0.36,-2.22l0.64,-0.78l0.34,-1.39l1.36,-1.23l0.4,-0.98ZM750.38,375.27l0.73,-0.08l0.51,0.45l-1.23,1.9l0.28,-1.22l-0.3,-1.06Z", "name": "South Carolina"}, "US-RI": {"path": "M859.15,133.1l0.33,0.01l1.02,2.65l-0.31,0.56l-1.04,-3.22ZM858.41,136.77l-0.28,-0.34l0.24,-1.5l0.41,1.53l-0.37,0.31ZM851.13,141.49l0.22,-0.46l-0.53,-2.22l-3.14,-10.0l5.61,-1.84l0.76,2.06l0.8,0.25l0.19,0.73l0.08,0.41l-0.77,0.25l0.03,0.29l0.51,1.45l0.59,0.5l-0.6,0.15l-0.46,0.73l0.87,0.97l-0.14,1.22l0.94,2.18l-0.32,2.08l-1.33,0.23l-3.15,2.19l-0.16,-1.21ZM855.93,131.57l0.26,0.1l0.01,0.09l-0.17,-0.08l-0.1,-0.11ZM857.32,132.24l0.23,0.48l-0.2,0.31l-0.04,-0.39l0.01,-0.4ZM855.92,145.03l0.11,0.11l-0.18,0.1l-0.03,-0.14l0.11,-0.07Z", "name": "Rhode Island"}, "US-CT": {"path": "M823.44,156.54l2.83,-3.23l-0.07,-0.54l-1.31,-1.25l-3.5,-15.89l9.81,-2.41l0.6,0.46l0.65,-0.26l0.23,-0.58l14.16,-4.0l3.2,10.18l0.47,1.96l-0.04,1.69l-1.65,0.32l-0.91,0.81l-0.69,-0.36l-0.5,0.11l-0.18,0.91l-1.15,0.07l-1.27,1.27l-0.62,-0.14l-0.56,-1.02l-0.89,-0.09l-0.21,0.67l0.75,0.64l0.08,0.54l-0.89,-0.02l-1.02,0.87l-1.65,0.07l-1.15,0.94l-0.86,-0.09l-2.05,0.82l-0.4,-0.68l-0.61,0.11l-0.89,2.12l-0.59,0.29l-0.83,1.29l-0.79,-0.05l-0.94,0.74l-0.2,0.63l-0.53,0.05l-0.88,0.75l-2.77,3.07l-0.96,0.27l-1.24,-1.04Z", "name": "Connecticut"}}, "height": 589.0572567800147, "projection": {"type": "aea", "centralMeridian": -100.0}, "width": 900.0});
$.fn.vectorMap('addMap', 'uk_mill_en',{"insets": [{"width": 900.0, "top": 0, "height": 1327.4309048516907, "bbox": [{"y": -7779500.901678679, "x": -960179.9157639837}, {"y": -6072371.201528781, "x": 197256.3956247182}], "left": 0}], "paths": {"UKN": {"path": "M39.46,798.85l8.25,-2.8l5.96,-6.64l9.96,1.3l3.45,-1.11l8.56,-6.56l3.51,-0.94l-0.25,-3.18l-1.21,-0.15l-2.61,1.29l-5.14,-2.93l-2.73,0.92l-1.52,-2.07l-3.56,-1.42l-0.56,-0.97l0.6,-1.63l-1.48,-1.25l3.59,-1.44l2.96,-2.36l6.42,2.99l3.07,-0.2l7.41,-4.43l2.83,0.63l2.66,-0.62l1.64,0.71l2.19,-0.38l0.28,-0.62l-0.75,-1.38l0.67,-4.34l6.21,-6.21l1.42,-2.19l0.96,-2.8l-0.08,-5.54l3.12,-2.24l-0.29,-4.27l0.9,-0.93l-0.18,-1.28l3.12,-3.61l0.92,-0.59l5.44,-0.67l3.21,-2.62l-0.61,1.63l0.36,0.54l5.36,-0.89l5.25,1.71l6.06,0.0l4.49,-3.7l0.6,-3.58l3.06,-4.12l0.97,-6.8l0.99,-0.06l5.55,2.56l11.2,-0.44l9.94,-3.68l6.12,-0.41l4.44,-3.54l3.53,-0.91l5.18,2.01l3.42,-1.7l2.01,0.4l9.83,4.15l7.0,-1.63l3.29,0.48l1.58,0.6l4.59,4.03l0.77,1.12l-0.29,6.56l-1.8,4.86l0.97,1.25l4.35,0.24l2.19,1.1l0.54,0.93l-0.15,2.0l-1.54,4.42l0.16,1.04l5.03,1.57l3.67,3.49l1.47,3.63l4.17,4.24l1.94,6.69l4.71,1.94l1.98,2.41l0.85,0.15l0.34,-0.61l-1.57,-2.58l-5.34,-4.59l1.03,-1.54l2.26,0.5l4.1,3.68l1.01,3.65l-0.23,3.21l-1.17,2.52l-1.82,1.64l-10.0,3.25l-4.06,3.56l-3.2,4.77l1.06,1.06l0.62,2.57l1.73,0.25l4.79,-5.33l7.68,-3.6l2.67,1.24l1.9,0.14l10.3,-1.35l1.51,2.02l1.61,0.61l1.88,7.01l1.02,1.73l2.01,1.6l0.89,6.33l3.14,3.78l-0.45,1.04l0.32,1.57l-2.62,4.26l0.57,2.14l-0.29,1.78l-2.41,2.7l0.93,1.35l-1.92,2.02l-0.84,0.13l-0.82,-0.68l-1.63,-3.92l-1.16,-0.62l-1.39,-2.18l0.38,-2.39l1.94,-2.0l0.53,-1.99l-0.31,-3.85l-1.0,-2.93l-1.58,-2.12l-6.02,-4.64l-2.41,-1.13l-2.76,-0.15l-0.42,1.22l0.42,2.18l-1.58,2.04l3.96,1.83l3.32,0.35l-3.25,1.12l0.12,0.65l2.31,1.05l-0.33,2.61l0.58,1.2l1.01,0.41l-0.54,1.15l0.54,1.02l-2.94,6.99l-3.08,2.01l-1.05,1.82l11.4,-3.6l2.27,1.95l0.81,4.31l-1.01,3.26l-4.99,4.95l-1.71,-0.02l-0.82,2.56l-1.06,0.48l-1.93,-1.94l-5.03,-0.35l-3.83,0.31l-7.16,1.91l-0.8,1.84l-0.04,6.73l-2.12,6.57l-1.47,1.49l-3.56,1.47l-6.38,4.58l-4.34,0.63l-2.5,-0.94l2.09,-0.93l0.05,-0.78l-7.59,-2.07l-1.15,-2.18l-6.73,-1.43l-0.77,0.63l-1.26,-0.74l-3.56,0.85l-2.42,-1.49l-1.6,1.93l0.1,2.63l-0.68,1.09l-4.62,0.92l-1.59,-1.55l-2.39,0.09l-7.43,2.22l-2.72,-0.4l-1.79,1.75l-0.99,-0.43l-3.35,-2.97l1.22,-2.62l0.11,-1.36l-0.81,-1.35l1.73,-1.8l0.9,-2.32l-0.6,-2.55l-4.81,-3.64l-1.38,-0.11l-2.24,1.77l-4.37,-2.22l-3.03,-3.38l-1.28,-3.45l-3.1,-1.71l1.58,-1.89l-0.18,-1.86l-1.94,-4.22l-2.22,-0.88l-1.49,-2.86l-5.37,-3.63l-3.18,-1.28l-2.94,0.29l-2.53,2.0l-4.23,5.38l-2.69,1.64l-2.06,-0.21l-1.04,0.57l0.57,2.31l-0.88,1.06l-1.03,-0.03l-0.1,1.74l2.8,1.33l-0.25,1.75l2.71,1.86l-0.99,1.4l0.47,1.64l-6.21,1.8l-1.87,1.3l-1.15,2.12l1.25,1.56l-1.4,0.57l-0.07,2.62l-1.27,1.56l-0.87,0.27l0.42,-4.15l-0.85,-0.77l-3.48,2.23l1.71,3.79l-4.86,-1.07l-1.46,0.21l-0.78,-1.43l-1.41,-0.31l0.17,-1.14l-2.4,-0.09l-3.49,2.24l-1.71,0.28l-9.1,-1.73l-0.82,-0.49l-1.16,-2.88l-6.24,-3.79l-6.89,-0.02l-4.65,-0.51l-1.52,-0.76l-1.03,-1.65l-0.34,-5.17l-0.76,-2.23l-1.44,-0.84l-4.67,-0.82l-2.48,-2.92l-1.82,-3.72l-2.8,-0.23l-2.05,-0.88l-7.71,-7.68l-1.89,-3.34ZM210.69,701.07l0.25,-1.43l-2.0,-1.36l-5.47,-0.16l3.05,-1.05l5.02,0.79l0.16,0.97l-1.01,2.25Z", "name": "Northern Ireland"}, "UKM": {"path": "M671.7,36.17l-1.39,-0.25l-1.78,-2.0l-2.82,-4.84l9.63,0.0l0.64,0.26l0.55,2.41l2.22,-0.87l1.84,0.8l-0.18,2.09l-1.88,1.33l-4.69,-1.5l-2.62,0.03l-0.39,1.37l0.88,1.16ZM663.73,17.05l1.1,0.14l0.5,-1.26l-0.68,-3.15l1.29,-0.56l0.87,-1.95l-0.01,-1.98l-1.09,-1.74l2.92,-1.85l1.18,-1.52l0.7,-2.4l1.24,0.77l0.31,1.59l-0.31,1.26l-2.61,2.62l0.69,0.99l3.18,-1.87l2.43,-5.51l4.06,1.58l0.78,2.01l-2.06,0.81l-0.0,0.73l1.65,0.76l-3.52,2.28l0.45,2.48l-1.7,0.41l1.7,1.07l0.0,0.57l-4.1,3.43l0.54,1.99l1.71,2.5l-1.55,0.88l-2.15,-1.05l-6.79,-0.02l-1.04,-0.58l0.31,-3.42ZM661.91,65.94l-3.17,0.75l-1.1,-0.53l2.04,-3.24l1.95,-0.44l1.38,-1.09l4.25,-0.69l-5.36,5.23ZM652.83,15.13l0.83,2.02l0.7,0.07l0.92,-1.39l4.91,-0.17l-0.65,3.2l1.04,0.94l-0.73,1.24l0.02,1.48l1.46,2.55l-0.87,2.07l-3.92,-3.09l-2.29,-0.0l4.02,6.26l-1.83,0.68l-2.21,-0.87l-0.59,0.45l0.56,1.65l1.19,0.91l2.17,0.44l-0.25,0.75l1.35,1.2l0.02,1.28l-0.84,1.05l-1.53,0.31l-0.27,0.59l1.27,2.21l0.5,2.48l-0.57,1.51l-4.11,-0.56l-1.91,-1.27l-0.94,1.65l0.92,1.25l-2.32,-0.4l-1.87,-1.48l-1.13,-2.73l-1.05,-12.17l0.66,-2.47l2.17,-0.32l-0.2,2.11l0.95,1.55l1.48,1.03l1.32,-0.3l-1.5,-6.19l1.02,-2.66l-0.74,-2.2l1.35,-3.56l1.49,-1.1ZM615.13,86.2l-0.37,-0.81l0.44,-1.12l4.56,-1.59l0.06,-0.72l-3.11,-3.29l-0.69,0.11l-1.7,3.79l-0.54,0.1l-1.35,-2.38l-3.9,1.62l-2.43,0.03l-0.77,-1.71l-2.97,-1.04l-1.47,-6.22l2.36,-1.87l3.13,-1.01l1.26,0.1l3.15,2.64l1.73,0.04l-0.01,-1.57l2.25,0.66l0.51,-1.27l-0.65,-0.52l3.55,-0.34l0.93,0.81l0.1,3.7l0.52,0.37l1.92,-1.05l-0.8,-2.57l1.14,0.0l0.36,-0.57l-0.47,-1.43l1.54,-0.52l2.07,0.51l1.76,1.61l0.86,2.79l0.69,0.13l2.38,-2.63l-0.03,-0.61l-2.15,-1.65l1.39,-2.71l2.27,0.56l0.35,-0.64l-0.74,-0.99l5.59,-0.45l-2.28,-1.56l-4.44,-1.34l-0.48,-2.61l-0.66,-0.23l-2.39,1.82l-1.44,-0.93l-0.27,-1.07l1.22,-3.09l-4.7,-1.13l0.06,-3.74l-1.03,-4.51l-3.07,4.49l-0.95,-0.32l-0.21,-0.73l1.48,-1.84l-0.26,-0.71l-4.34,0.3l-1.31,-1.1l-2.38,1.92l-2.64,-0.14l0.3,-1.69l1.31,-1.96l2.85,-0.24l0.66,-3.58l1.67,-2.06l0.77,-0.09l2.15,4.07l2.87,2.21l3.4,0.94l3.12,-1.31l0.05,-0.7l-0.97,-0.6l-3.56,-0.35l-2.28,-2.31l-0.95,-0.24l1.83,-3.01l3.6,-1.73l-0.84,-1.41l0.77,-1.36l-0.24,-0.99l1.63,-0.6l2.21,0.25l4.91,2.16l0.49,-1.45l-1.34,-1.13l1.59,-3.12l0.59,1.79l-0.16,3.65l-1.34,0.97l0.61,2.87l-2.93,3.98l0.34,0.61l0.99,0.0l-1.38,0.5l1.61,1.28l-1.59,3.91l1.26,0.41l2.18,-1.14l-1.36,2.66l0.26,1.57l-1.63,0.68l-2.01,4.45l-1.67,1.39l0.36,1.36l2.35,-0.04l2.0,-0.99l0.08,-2.46l2.08,-1.18l5.41,-0.74l0.14,-0.74l-4.97,-3.23l1.93,-1.07l0.12,1.93l0.68,0.26l3.42,-4.16l2.26,1.69l-0.47,1.22l2.63,2.37l0.32,1.25l-0.52,0.8l0.78,0.97l-2.47,-0.42l-3.28,2.6l-0.1,0.63l2.02,0.1l0.56,1.19l2.77,-1.21l0.65,0.34l0.55,2.67l2.78,-2.01l1.36,-3.19l0.54,1.56l2.4,-3.72l2.4,-0.71l-0.88,1.59l-6.65,6.53l0.07,1.29l1.22,0.46l1.94,-2.24l1.77,-0.56l0.39,1.07l-0.64,3.08l-8.59,1.42l-0.12,0.7l1.78,1.34l4.46,0.87l1.68,0.99l-5.11,3.85l0.54,2.36l1.37,-0.41l1.94,0.49l-4.32,2.61l-1.18,-0.26l-1.53,-2.56l-1.13,-0.23l-0.99,1.17l1.2,2.37l-2.96,1.3l0.4,1.21l2.76,0.0l-1.26,3.57l2.99,-2.38l-2.1,3.64l-0.27,2.38l3.38,-2.02l0.51,0.34l-0.9,2.48l2.77,1.92l-2.02,0.0l-0.4,1.25l-0.63,-0.08l-1.72,1.47l-1.77,0.29l1.14,1.23l-0.28,0.75l-2.06,0.97l0.32,1.2l1.79,0.62l-1.13,1.5l0.82,1.72l2.28,1.47l-0.31,1.22l-1.11,0.85l-2.68,-0.19l-0.51,0.47l2.25,5.38l-0.52,1.03l-3.58,-1.39l-0.58,0.41l0.18,5.27l-1.53,3.55l-0.84,-0.47l-0.14,0.5l0.93,2.77l-0.93,3.08l1.13,2.16l-0.62,1.01l-1.59,-2.28l-1.35,1.08l0.89,-1.81l-0.17,-1.21l-1.61,-0.98l-2.61,0.5l-1.17,-0.48l-0.8,-1.22l1.34,-1.44l-0.38,-2.23l0.58,-0.84l2.94,-1.0l-0.13,-1.02l-2.18,-2.04l1.91,0.0l0.39,-0.48l-0.47,-2.17l2.22,-4.17l1.3,-6.12l2.17,-5.11l-0.43,-3.69l-0.55,-0.73l-0.98,-0.05l-0.29,-0.98l1.64,-3.63l-1.26,-0.54l-1.77,1.13l-0.63,-0.2l1.48,-4.29l2.21,-2.83l0.16,-1.21l-2.35,-0.41l-3.3,4.82l-2.29,-4.62l-1.97,-1.43l-2.83,-0.53l-0.47,1.36l3.15,2.04l2.14,3.25l-0.36,1.13l-2.09,-1.47l-1.28,-0.11l-0.9,4.19l-1.13,-1.46l-1.05,0.74l-1.28,3.68l-3.71,-1.74l-2.36,-1.93ZM653.14,86.91l0.42,2.38l1.68,0.08l-0.18,1.78l-2.28,5.27l-2.93,-2.03l0.24,-4.04l-1.41,-1.77l0.05,-0.89l3.02,0.39l1.14,-1.46l0.28,0.31ZM629.03,103.58l0.15,-0.16l-0.1,0.12l-0.05,0.04ZM629.47,103.08l1.66,-4.82l-0.71,-1.57l1.87,-0.73l-0.66,3.0l0.68,0.36l0.74,-0.63l-0.23,1.72l-1.69,3.68l0.28,-3.65l-0.77,0.1l-1.17,2.54ZM607.04,168.59l-0.29,1.2l1.18,0.78l-3.55,2.05l-0.37,-1.39l0.6,-1.92l1.44,-1.18l3.1,-0.5l-2.1,0.97ZM242.7,441.55l1.02,-1.11l-1.16,-1.99l-0.03,-1.53l0.98,-2.08l-3.94,-1.21l-1.14,-4.81l1.73,-3.66l0.35,-4.1l1.44,-0.52l-0.52,-2.17l2.45,-0.13l1.4,0.72l4.68,3.75l1.47,0.85l0.87,-0.31l1.37,1.61l4.45,2.15l0.41,-0.62l-0.94,-2.0l5.66,-0.77l5.61,0.43l0.72,-1.06l-2.78,-2.23l-4.07,-0.76l-3.95,0.42l-2.32,1.52l-2.39,-2.19l0.92,-1.44l-0.29,-0.6l-2.73,-0.4l-4.11,-6.28l-3.71,-1.12l-0.37,-1.25l0.43,-1.3l1.68,-1.46l-0.36,-2.11l4.33,-1.35l2.43,2.12l1.39,-0.02l1.91,-2.55l-4.21,-3.51l-7.05,-1.28l0.27,-6.85l-0.84,-3.96l1.74,-3.34l3.12,-1.33l2.17,-0.02l3.99,1.46l-0.01,4.01l1.26,4.46l2.11,2.43l1.59,0.6l1.78,-0.3l-1.49,-2.49l2.77,0.92l0.57,-0.45l-0.54,-2.37l0.44,-3.58l-1.29,-2.05l-4.19,-3.56l0.73,-1.02l-1.04,-1.06l3.14,-3.7l1.95,1.45l2.91,0.04l-0.32,3.31l2.59,2.62l3.54,1.47l2.89,0.3l1.95,-5.75l0.67,-1.09l0.81,0.01l3.83,1.3l3.64,3.03l2.92,1.41l6.76,1.78l-2.33,-3.07l-2.58,-0.94l-3.86,-3.08l-6.02,-2.32l-0.09,-1.6l1.49,0.61l0.79,-1.34l3.53,3.26l2.03,0.91l3.69,-0.82l4.79,2.11l3.13,2.39l3.66,1.33l2.43,3.36l2.39,0.92l-2.37,-5.32l-8.67,-5.88l-1.93,-0.43l1.62,-0.35l0.76,-1.2l-1.08,-3.32l-7.66,-2.61l-3.49,-3.43l-1.8,-0.36l0.26,-0.75l-1.49,-1.55l-4.69,-0.33l0.91,-2.22l-2.75,-4.0l1.26,-1.31l2.9,0.64l2.53,3.28l1.75,-1.11l3.98,0.53l2.17,-2.48l-0.81,-3.74l0.84,-0.4l0.0,-0.86l-1.35,-0.95l4.36,-1.62l-0.41,-1.34l-2.82,0.1l-2.0,-0.66l0.32,-0.97l-2.73,-1.71l0.52,-2.26l-2.1,-0.91l-3.84,-4.6l0.05,-1.65l1.0,-0.26l7.2,2.92l6.68,-2.58l4.01,1.15l3.47,-2.4l5.21,2.55l5.63,-0.0l6.4,3.42l-0.89,-1.93l-2.83,-1.88l3.04,-0.71l1.17,-0.65l-0.13,-0.75l-7.27,-0.86l-1.9,1.52l-1.4,-0.03l-3.93,-2.08l-3.34,-3.54l-2.1,-2.68l-0.97,-2.8l1.23,0.0l0.34,-0.62l-0.77,-2.28l1.42,-2.62l0.02,-2.13l7.06,3.39l4.2,-0.35l-3.17,-2.57l0.17,-1.12l-0.59,-0.94l-3.49,0.8l1.13,-0.59l0.0,-0.86l-1.4,-0.85l4.05,-1.84l5.04,1.96l-9.46,-6.85l-0.01,-2.05l0.67,-1.37l4.54,-2.08l1.47,-1.27l1.02,-1.94l-0.43,-0.59l1.4,-6.77l1.22,-1.13l10.89,1.87l1.93,0.98l1.38,1.38l1.22,4.41l-1.1,4.35l2.08,-0.94l0.82,-1.29l0.55,-4.5l1.2,-1.69l-0.2,-1.45l3.47,3.27l5.65,2.62l-0.58,2.52l-4.11,3.4l-4.03,7.29l0.41,0.57l1.82,-0.29l5.86,-4.72l0.76,-2.08l4.65,-2.69l2.39,-6.26l1.87,-0.64l7.16,1.76l4.01,2.3l-0.03,2.37l-1.95,1.78l-1.28,2.3l-2.66,5.37l0.48,0.57l3.13,-1.75l2.37,-2.68l0.08,-1.64l4.33,-3.49l3.25,-1.76l3.0,-0.91l1.57,0.4l2.68,1.92l1.96,0.42l0.33,-0.71l-0.76,-0.58l1.87,-2.17l3.59,0.72l1.0,-0.42l0.79,-1.72l0.74,-0.29l5.99,0.44l1.1,-0.59l2.46,-3.33l0.59,-0.11l2.17,2.88l2.17,-0.23l7.46,0.94l7.5,-0.96l3.8,-1.39l5.91,-3.45l3.26,-1.2l5.32,-0.78l3.93,0.52l-0.61,1.06l2.36,1.58l7.32,-1.49l4.7,1.65l2.51,0.0l1.51,-2.77l-0.24,-0.54l-2.93,-1.32l-2.08,-2.63l2.87,-2.37l1.11,0.15l0.78,2.72l1.02,0.78l11.73,-1.64l4.6,2.51l8.54,-0.86l2.49,0.84l-2.5,6.34l-2.98,4.31l-2.93,2.56l-1.02,2.56l-0.04,2.19l0.98,1.73l2.21,1.07l2.7,-0.66l0.69,1.71l-0.32,0.93l-1.72,1.08l-0.79,4.39l-3.7,5.59l-7.76,7.95l-14.27,5.19l-4.6,3.6l-3.11,5.4l-3.57,3.11l-18.97,12.07l-6.49,2.59l-1.69,1.35l-2.06,4.74l-2.74,1.44l-2.81,0.53l-6.36,3.39l-1.15,2.86l-0.89,-0.41l0.18,-1.07l-6.37,-1.75l-0.48,0.84l1.18,2.4l1.48,0.82l3.82,0.55l2.13,2.65l-1.67,2.22l-0.18,2.43l-4.75,-0.77l-3.12,2.57l-2.22,-0.05l-7.38,-2.5l-7.0,1.4l-6.19,-5.13l-2.31,-0.36l4.6,5.81l3.0,1.93l3.52,0.55l5.05,-1.5l4.98,3.61l1.61,0.01l0.09,-1.73l4.77,2.55l3.15,0.67l5.04,-3.01l2.5,0.45l1.22,1.25l-0.98,1.35l0.24,0.63l3.03,0.61l3.32,-1.19l3.1,-2.28l3.66,-3.86l0.67,0.09l0.43,0.91l-0.82,2.82l-17.02,16.72l-2.58,-0.16l-0.31,-0.89l0.88,-2.31l-2.67,-1.81l-3.16,0.94l-7.69,5.04l-7.79,1.33l-3.08,-0.18l-1.53,3.31l-2.46,1.17l-6.45,5.3l-1.5,3.31l1.01,0.57l3.82,-1.59l4.43,-4.6l3.88,-1.85l3.37,-2.72l3.59,-1.45l1.39,0.24l1.29,1.17l6.33,0.72l2.7,-1.84l4.57,-1.92l0.28,1.06l-1.67,2.41l-5.04,3.99l-3.05,3.79l0.56,1.63l-3.12,0.24l-1.8,0.8l-1.58,1.57l0.43,1.19l-1.92,-0.45l-5.13,0.4l0.41,1.33l4.18,0.52l-3.29,4.67l0.2,0.68l4.92,0.71l1.95,-0.81l2.18,-2.46l2.68,-0.5l2.94,-2.85l4.09,-1.52l0.18,-0.61l-0.99,-1.37l-2.2,-1.58l9.0,-0.92l8.28,0.63l2.79,-0.65l13.27,-7.68l4.34,-0.78l-1.3,2.37l1.38,0.78l3.64,-0.73l0.28,-0.58l-1.34,-2.52l4.07,0.8l1.9,-0.31l2.78,-2.25l0.82,-1.59l-0.4,-1.56l0.64,-0.97l2.58,0.44l4.38,-1.69l10.64,0.36l6.46,3.3l11.38,3.07l3.88,0.12l3.7,-0.92l6.66,-3.36l13.53,0.0l2.3,1.77l2.39,-0.73l1.18,0.72l2.82,-1.07l7.28,1.97l2.64,-0.09l1.67,1.7l2.41,-1.7l5.41,1.74l0.95,-0.86l2.13,0.88l3.3,-1.75l3.08,0.85l1.3,-1.91l1.31,-0.66l7.44,2.54l2.38,-0.42l5.12,-3.01l10.48,0.01l2.4,3.42l3.44,-0.85l1.47,2.11l7.26,6.34l1.52,6.47l1.32,2.02l-0.28,2.43l2.74,3.02l-1.2,1.15l0.03,1.32l1.64,1.03l-5.76,5.42l-1.55,2.29l-0.26,1.72l-8.92,6.52l-2.35,2.87l-5.58,11.53l-2.1,6.54l-0.25,4.95l1.88,1.97l-9.14,11.98l-2.74,4.61l-1.14,4.64l1.18,4.02l-1.97,2.24l-0.89,2.87l-4.19,3.18l-4.41,5.52l-1.34,1.26l-4.83,2.43l-3.11,2.57l-1.28,2.17l-0.94,5.33l-3.08,4.55l0.54,3.45l-1.99,2.12l-0.87,2.06l-9.32,5.8l-1.58,2.65l-5.1,2.33l-2.4,4.13l-2.99,-0.84l-25.7,2.97l-6.42,3.08l-9.02,7.25l-3.45,1.14l-4.08,-0.77l1.09,1.63l1.7,0.57l5.69,-0.39l24.34,-9.33l1.82,-2.04l3.61,-1.13l3.07,1.95l2.87,0.18l0.87,1.28l-0.46,4.23l-2.54,3.4l2.32,0.26l0.93,2.49l2.25,0.68l0.82,0.94l7.85,0.48l1.78,0.73l6.6,4.89l-4.46,3.46l-1.6,2.42l-6.15,1.5l-5.45,2.96l-3.82,0.14l-5.42,-2.23l-6.34,0.41l-1.77,2.12l-4.58,2.59l-4.76,4.32l-3.26,1.25l-3.09,7.15l-1.1,0.6l-6.1,0.28l-8.12,3.51l-6.62,0.27l-13.97,-3.27l-7.74,0.11l-3.24,-0.87l-3.0,-1.69l-6.23,-4.91l-2.36,0.31l0.21,1.11l6.56,4.13l3.33,4.95l3.18,0.21l1.66,2.19l1.22,0.32l6.71,-0.83l14.85,3.32l6.35,-0.52l2.55,2.02l15.63,1.01l2.55,2.48l1.28,0.25l5.62,-0.46l6.65,-2.34l2.11,-1.47l2.79,-3.26l2.01,-0.19l0.34,-0.52l-0.92,-2.3l3.78,-3.27l1.61,-0.57l14.38,0.83l1.51,0.54l3.77,3.35l-0.84,2.84l3.46,0.04l1.18,0.68l2.04,-1.48l4.58,2.86l3.34,0.86l5.44,3.64l3.79,1.64l14.57,2.42l0.9,3.07l2.53,0.98l1.56,1.41l4.62,7.25l-4.5,1.79l-1.19,4.06l-6.5,4.51l-1.24,2.29l-5.23,6.15l-6.48,0.82l-1.16,1.52l0.42,1.59l2.04,1.23l1.91,2.74l1.91,4.81l3.44,4.92l0.37,2.25l2.44,2.97l-0.32,1.63l-3.61,2.74l-3.53,0.81l-2.02,1.58l-2.59,0.96l-2.94,4.29l-2.21,0.83l-2.13,-1.14l-3.59,0.16l-8.71,5.98l-6.32,5.93l-0.27,1.52l0.61,1.49l-0.51,1.66l-3.11,1.76l-4.89,5.39l-8.96,3.86l-5.29,6.24l-3.88,1.85l-2.15,3.22l-1.75,0.11l-3.8,-1.5l-0.89,0.4l-0.64,4.34l-1.47,3.93l-7.0,1.52l-27.49,-1.64l-4.04,-1.28l-1.46,0.41l0.17,1.04l-0.99,0.37l-3.6,-2.1l-0.61,0.2l-1.13,3.28l1.26,6.39l-1.02,3.6l-1.22,0.57l-10.31,-0.34l-2.0,2.5l-5.8,-0.74l-0.05,-1.77l-1.01,-0.47l-2.29,2.31l0.28,1.75l-1.43,0.84l-0.04,0.65l2.53,2.04l-4.89,1.89l-6.72,4.09l-3.99,0.44l-2.29,-0.13l-0.26,-0.89l-0.78,-0.3l0.61,-3.73l-0.19,-1.22l-1.22,-0.96l-0.63,-0.3l-1.27,0.89l-1.11,1.85l-0.34,2.19l0.65,1.63l-2.73,0.38l-4.23,-2.21l-2.89,-3.87l0.72,-4.65l-0.57,-0.42l-3.44,2.82l-2.37,0.38l-7.3,-3.06l-2.52,-4.64l-1.99,-0.35l-1.3,1.88l-0.86,2.89l0.82,3.04l1.29,2.64l3.82,1.05l1.14,2.28l-1.15,2.77l1.14,1.88l-1.01,1.78l0.7,4.67l-2.58,2.29l-3.61,-0.85l-3.05,-1.65l-3.1,0.04l-5.6,-6.54l-2.99,-2.36l-10.2,-5.12l-5.65,-1.76l-1.78,-3.47l-1.99,-0.67l-3.42,0.07l-2.15,0.78l-3.75,2.76l-2.14,2.67l-0.52,1.56l0.65,3.48l1.58,1.85l2.91,6.87l2.46,1.77l-0.46,4.13l0.77,1.93l-6.37,-2.17l-1.16,-2.4l0.07,-1.76l0.92,-1.0l-0.91,-1.9l0.0,-2.05l-2.6,-0.66l-1.39,-4.38l-2.62,-1.37l-8.14,-7.9l-2.45,-3.56l-1.56,-4.17l-0.44,-4.71l0.8,-6.29l1.0,-0.77l2.92,-0.14l0.77,-1.4l3.36,4.97l0.82,6.7l2.83,2.52l1.86,0.11l1.59,-1.38l0.64,-2.13l-3.1,-5.0l-2.22,-5.92l0.22,-3.34l2.48,-5.58l0.93,-4.6l5.2,-3.19l5.59,-6.07l1.42,-0.62l0.23,-2.32l2.31,-5.15l-0.13,-3.93l0.53,-1.63l5.12,-4.61l2.08,-5.37l2.68,-1.95l5.87,-2.27l2.18,-2.58l0.74,-3.3l-0.89,-3.29l-2.08,-2.1l-2.73,-0.8l1.5,-2.04l-0.5,-2.87l-1.87,-2.53l-2.72,-1.83l-4.73,-1.66l-3.18,-0.31l0.28,-2.23l-4.99,-2.62l-4.15,-3.62l3.52,-2.98l1.46,-2.95l-0.39,-4.22l-1.48,-3.7l-0.85,-8.62l0.51,-3.14l1.16,-2.0l1.85,-1.26l4.17,-1.13l6.61,2.17l2.47,-0.12l1.83,0.88l14.43,1.8l2.55,-1.59l-13.11,-2.51l-3.65,-1.84l-4.37,-4.41l-3.61,-1.14l-1.5,-1.21l-2.27,-3.08l-1.15,-4.11l-1.6,-0.61l-0.92,1.34l0.61,2.85l4.13,5.01l0.87,1.98l-0.36,0.64l-1.36,0.21l-3.84,-0.66l-1.07,-3.63l-0.01,-5.54l3.33,-6.93l6.11,-7.81l0.47,-1.92l-1.0,-0.9l-2.25,1.98l-6.06,9.46l-1.46,0.06l-0.45,-0.67l0.13,-3.72l-1.33,-3.06l-1.39,-0.49l-1.55,1.22l2.85,11.0l-0.22,1.59l-1.13,0.57l-0.22,0.92l0.91,7.74l-0.72,0.3l-4.07,-1.29l-0.49,0.39l0.26,1.21l2.13,0.99l1.15,2.06l-0.28,1.57l-2.54,3.18l-1.86,4.96l-1.93,1.09l-2.55,-0.44l-1.24,-1.2l-2.5,-9.06l-5.08,-6.31l-1.51,1.44l4.63,8.56l0.6,2.36l-0.48,0.78l-6.87,-3.99l-0.69,-1.39l0.0,-2.45l-0.69,-0.28l-1.72,2.64l-1.11,3.78l-2.5,2.9l3.32,7.35l-7.54,-2.54l-0.74,-0.78l-0.66,-3.17l-2.02,-2.0l0.0,-3.25l1.23,-3.43l-1.17,-4.44l2.0,-1.82l9.37,-12.98l4.9,-1.63l3.76,-2.32l5.29,-7.92l8.89,-4.27l1.78,-3.86l-1.99,0.76l-3.23,2.83l-6.47,1.36l-1.4,1.06l-3.75,6.58l-10.27,5.54l-7.23,8.73l-2.94,0.8l-1.01,3.76l-1.05,1.34l-1.65,0.4l-3.37,-0.47l-0.26,-2.2l-1.38,0.23l-0.95,8.92l2.19,1.29l1.5,5.7l1.04,0.89l-0.59,1.39l0.92,0.74l-0.79,1.22l4.76,4.09l2.09,2.8l0.73,2.91l-0.5,1.44l-5.32,2.21l-4.08,3.65l-2.47,4.11l-0.63,4.05l-1.89,1.51l0.66,1.39l-0.01,2.98l1.85,1.03l0.5,0.92l-0.41,1.23l-2.46,1.59l0.52,2.11l-2.3,3.97l-0.11,3.69l-1.07,0.44l-3.2,5.56l-2.16,1.31l0.45,1.15l1.71,0.12l1.45,1.44l2.33,3.91l-0.71,1.48l-4.18,4.32l-3.5,1.8l-1.93,0.31l-3.53,-0.89l-3.94,1.73l-3.74,-0.44l-0.8,-1.29l-1.18,-7.75l0.42,-2.16l2.34,-1.57l4.27,-4.63l-0.54,-7.94l1.19,-3.79l-1.17,-2.43l4.19,-9.17l0.34,-2.43l-0.85,-1.6l4.39,-2.97l1.31,-3.22l2.67,-3.74l3.61,-1.59l3.05,-2.32l2.7,-3.2l1.67,-3.76l-0.63,-0.46l-8.36,7.54l-3.96,2.29l-0.48,0.02l0.12,-1.54l-3.43,-1.24l-1.08,-1.09l-1.06,-5.61l3.52,-4.25l1.1,-2.59l4.17,-4.27l-2.43,0.65l-3.03,2.79l-3.76,2.19l-0.9,-0.59l-0.66,-2.44l9.38,-11.58l1.19,-3.75l-1.41,-0.37l-3.62,1.99l-0.71,2.42l-3.65,3.36l-0.06,2.88l-1.5,2.23l-0.58,-0.56l0.93,-4.65l3.11,-4.92l6.49,-7.49l0.62,-1.46l2.95,1.33l1.12,-0.25l0.09,-0.98l-1.78,-1.8l-0.64,-2.68l3.07,-4.14l1.15,-2.83l-0.47,-0.51l-2.82,0.7l-4.82,4.74l1.43,-3.98l3.06,-4.23l-0.61,-1.82l0.84,-1.03l4.45,-1.54l0.4,-1.19l-0.81,-1.33l-1.39,-0.42l-3.68,0.94l-2.83,1.67l-0.18,-2.0l1.98,-7.09l2.18,-2.7l1.57,0.68l2.34,-0.21l4.7,-1.79l-0.42,-1.16l-5.82,1.1l-1.33,-0.24l2.13,-4.42l2.72,-1.5l-0.17,-1.22l1.97,-2.17l2.75,-1.07l8.61,-0.6l6.94,1.55l3.2,-0.62l2.39,-1.64l5.49,-5.91l2.87,-5.07l1.8,-1.98l-0.45,-0.64l-2.09,0.98l-3.36,5.82l-3.49,2.48l-2.89,3.37l-3.52,0.33l-9.16,-1.68l-2.51,1.64l-1.04,-0.59l-1.37,-4.55l-0.53,-0.26l-1.33,0.55l-2.5,3.46l-0.53,-0.34l3.25,-6.81l1.72,1.32l4.33,0.61l8.01,-3.92l2.1,-1.8l-0.48,-0.62l-2.86,1.39l-3.02,0.18l-5.2,2.65l-3.11,-1.69l4.41,-6.98l4.24,-3.3l1.17,-1.67l-1.6,-1.81l2.39,-1.52l3.46,0.03l2.44,-1.73l5.46,0.91l1.98,-0.41l3.44,-1.79l7.04,-1.3l1.67,-1.3l-14.61,2.2l-6.38,-2.42l1.29,-2.51l7.46,-7.1l1.46,-2.46l-0.57,-0.53l-5.13,3.6l-1.99,2.46l-2.68,1.03l-0.93,3.19l-2.13,2.69l-3.49,0.78l-0.93,1.15l-1.86,0.61l-4.1,4.61l-3.97,1.5l-1.34,2.32l-2.9,1.37l-10.11,10.35l-6.15,3.84l-1.69,-2.03l-3.97,-1.14l-2.2,-1.49l1.52,-2.77l-0.21,-1.76l-0.94,0.13l-3.08,3.36l-4.95,-0.83l-12.76,-8.3l-0.32,-2.45l1.82,-1.07l4.23,-0.23l2.9,0.47l5.62,2.83l0.53,-1.48l-2.75,-1.98l-0.02,-0.81l8.88,-4.7l1.95,-0.18l7.72,2.59l7.21,-0.8l1.93,-1.0l-0.23,-0.75l-7.99,0.84l-1.79,-0.25l-4.39,-2.19l-3.56,-0.75l-9.65,4.12l-4.01,0.74l-4.15,-1.67l-6.06,0.35l-6.44,-1.38l-2.4,0.24l-3.11,2.05l-1.96,-0.33l-2.96,-1.67l-0.99,-1.9l0.04,-1.55l1.48,-0.12l2.98,-3.06l13.2,-1.12l5.34,-2.59l1.27,0.25l2.96,2.28l5.31,2.07l0.61,-0.37l-0.53,-2.74l-2.43,-1.54l1.65,0.0l1.82,0.88l3.44,-1.7l4.31,0.57l-6.67,-2.99l-1.48,-1.39l-0.02,-0.99l0.94,-0.75l8.85,-1.01l3.65,-1.26l2.92,-2.3l-0.11,-0.69l-3.04,-0.29l-1.61,0.74l-1.25,1.89l-1.49,-0.04l-2.83,-0.59l3.82,-3.64l-0.2,-0.7l-4.03,-0.57l-8.09,1.42l-2.1,-0.45l4.46,-0.77l-0.22,-1.28l-2.0,-1.44l1.29,-1.28l2.64,-7.77l3.76,-2.75l2.54,-0.71l2.04,0.31l3.44,4.12l2.82,1.38l2.97,0.35l4.7,-0.89l4.49,-2.04l-0.49,-1.23l-4.05,1.29l-1.38,-0.41l-1.81,1.0l-1.68,-0.38l-4.59,-2.02l0.42,-3.05l-2.1,-1.46l-3.65,0.79l-3.12,-1.65l-0.64,-0.63l1.11,-1.74l5.07,-5.34l3.45,0.13l2.47,-1.27l7.56,3.57l8.52,0.08l1.29,-1.29l3.27,0.48l0.99,-0.4l-0.22,-1.28l-1.94,-0.88l-10.28,1.75l-3.69,-3.29l-7.27,-1.77l-0.85,-1.01l0.53,-1.82l4.15,-5.1l-1.42,-2.31l1.81,-2.04l3.5,-1.76l2.79,-0.48l8.31,5.87l3.69,-0.81l-0.02,-1.63l-3.52,-0.65l-4.25,-4.1l2.91,-3.18l2.01,-0.62l0.01,-1.69l-2.47,-0.66l-3.51,3.29l-6.12,2.51l-6.7,-1.68l-5.31,0.86l-0.56,-1.25l2.22,-4.05l3.78,-2.45l1.28,1.55l2.37,-0.16l9.87,-3.68l4.02,-3.05l0.42,-3.98l-1.79,-0.19l-6.28,6.22l-2.08,1.24l-5.18,-1.16l1.89,-1.73l-1.53,-3.76l-2.0,1.2l-5.77,5.95l-2.05,0.81l-4.37,0.5l-1.74,-0.68l-1.27,-4.2ZM416.76,749.91l-0.38,1.31l-1.09,-0.91l0.66,-0.99l0.81,0.59ZM568.84,93.59l-1.01,1.14l-1.76,-0.59l-1.51,-1.07l-0.33,-1.23l1.69,-1.12l2.58,-0.06l0.34,2.93ZM513.82,213.94l0.37,-2.67l0.46,-0.51l1.99,-0.99l2.9,-3.51l2.67,-1.09l0.39,-1.78l-1.27,-1.52l6.45,-1.72l-4.61,3.82l0.18,0.68l1.51,0.73l3.86,-1.19l2.2,-1.86l3.91,-0.47l3.17,-3.11l0.93,3.31l-3.63,0.14l-1.78,0.68l-4.04,5.9l-0.81,-2.47l-1.7,0.23l-2.62,2.39l0.15,-1.26l-0.57,-0.36l-1.57,0.72l-1.56,-0.63l-4.8,4.65l-1.81,0.02l-0.37,1.88ZM517.81,224.99l-1.26,1.05l0.19,1.66l-1.34,0.37l-0.86,-0.62l1.47,-1.99l1.79,-0.47ZM519.02,224.7l0.87,-0.54l0.34,-1.82l-3.41,-3.11l3.22,-0.57l-0.49,1.12l0.36,0.59l2.62,-0.0l-1.07,1.95l1.1,1.48l1.44,0.34l2.06,-0.68l-0.48,1.76l2.52,1.81l-0.98,0.83l-5.08,1.08l-0.25,-2.53l-1.29,-1.45l-1.48,-0.26ZM473.1,221.12l2.94,2.29l3.35,-0.42l0.73,0.44l1.65,1.7l-1.12,0.47l-0.2,0.7l1.74,1.48l4.05,1.76l-0.5,0.69l0.64,0.93l-5.4,1.32l-0.7,1.96l-1.62,1.78l-3.37,1.66l-0.12,0.72l3.08,1.46l3.34,0.35l4.15,-3.23l3.36,2.24l3.48,-1.51l3.05,2.47l1.07,-0.37l-0.03,2.22l1.78,0.29l3.14,-1.66l3.34,-0.55l0.88,0.68l-0.43,0.97l-4.75,2.96l0.97,2.28l2.88,1.52l1.85,-0.32l0.29,-0.56l-1.43,-3.05l5.16,-1.76l1.4,1.22l0.08,3.13l-2.07,1.31l-4.53,1.24l-2.08,2.94l-1.18,0.71l-8.55,-2.85l-5.04,-7.13l-1.32,0.27l-2.42,2.19l-5.1,-0.28l-0.38,0.62l0.77,1.14l-3.08,0.35l-0.53,1.26l-1.91,-0.59l-5.05,0.65l-1.95,-1.46l-0.85,-2.63l0.26,-2.61l2.42,-4.24l-0.09,-1.04l-2.25,-3.59l-1.78,1.33l0.42,1.87l-1.25,-0.32l-1.57,0.63l1.41,4.47l-0.6,0.96l-2.18,2.13l-2.3,-0.67l-2.47,-3.1l-1.11,-4.05l1.94,-4.74l-0.52,-5.62l2.16,-3.56l3.7,-1.97l4.07,-0.61l6.28,0.76ZM506.85,207.27l-0.4,1.27l2.4,0.34l1.1,1.4l-2.86,3.98l0.26,3.92l0.68,1.04l1.38,0.46l-3.55,0.78l-1.53,-3.22l-2.4,-1.09l0.0,-1.62l1.62,0.3l2.19,-0.96l-0.5,-5.19l0.3,-1.11l1.32,-0.3ZM489.01,203.03l-1.38,1.35l-1.84,-0.86l-2.14,-4.74l-3.01,-2.17l3.98,0.47l1.6,-0.48l3.6,-3.36l1.21,0.73l-1.39,1.18l0.05,1.65l-2.23,0.38l0.31,1.26l7.79,2.07l2.08,3.97l2.89,0.93l0.59,0.91l-1.54,0.05l-2.32,1.98l0.95,-2.74l-4.27,-3.18l-2.42,-1.08l-2.49,-0.27l-0.44,0.4l0.41,1.56ZM486.82,263.79l3.02,-0.69l0.2,-1.29l-5.91,-0.51l6.77,-1.62l5.55,0.86l-0.09,1.01l-2.97,1.94l0.42,2.61l-0.99,1.07l1.26,3.67l-0.46,1.06l-1.56,0.79l-3.79,-3.1l1.12,-1.85l-2.57,-3.95ZM482.27,214.17l1.38,1.75l4.84,-0.53l2.0,0.41l-2.01,1.99l0.07,3.74l-2.22,0.64l-5.08,-0.69l-4.02,-2.98l-0.43,-2.02l1.36,-1.52l2.28,-0.87l1.82,0.07ZM465.25,252.46l4.23,5.0l-0.85,0.54l-0.19,1.28l1.91,0.77l1.1,1.4l-3.51,0.76l-1.84,1.08l-1.16,1.86l0.37,0.6l2.59,-0.14l5.08,-1.86l1.59,0.13l-1.54,1.81l-4.12,0.94l-7.84,-0.01l-2.41,-4.89l-2.61,-1.85l-1.69,-2.47l0.44,-1.54l-0.48,-1.12l-0.84,-0.35l-1.2,0.68l-2.42,-0.58l-0.19,-0.88l1.39,-2.77l1.86,-1.42l3.67,-1.02l0.91,-0.02l4.14,2.82l3.59,1.25ZM312.36,645.88l-1.06,0.44l-1.81,-3.12l-5.58,-4.18l-2.01,-6.8l-3.1,-1.88l-2.18,-4.67l0.09,-1.54l2.39,-1.01l5.1,4.01l2.03,0.81l0.58,2.81l2.14,1.35l2.37,4.72l0.87,3.69l-1.53,2.82l1.69,2.55ZM288.44,647.14l2.26,0.02l5.53,2.21l3.18,3.28l2.85,8.32l-0.82,2.0l3.61,2.99l0.17,2.28l-1.86,0.33l-0.99,0.89l0.64,1.84l3.5,1.47l-1.37,1.04l1.26,5.27l-0.99,0.92l-6.0,1.31l-4.58,-0.37l-3.89,-1.09l-6.9,-4.13l-1.18,-5.66l1.08,-2.6l-3.68,-4.74l-0.73,-2.78l0.42,-3.79l3.15,-5.04l2.55,-1.79l2.84,-0.42l-0.06,-1.76ZM268.84,562.64l-1.89,2.02l-3.42,0.6l1.91,-2.56l3.41,-0.06ZM262.3,573.88l-1.5,2.64l0.43,1.56l-1.47,0.72l-1.28,-0.65l-0.47,-1.65l1.06,-2.2l0.85,-0.53l2.37,0.11ZM260.24,581.78l0.07,0.69l-2.18,6.67l-1.8,-3.28l1.72,-3.9l0.7,-0.62l1.48,0.45ZM206.26,572.45l4.73,0.41l2.84,-1.65l5.87,-0.97l5.74,-3.67l-0.87,-1.31l-6.84,2.6l-4.11,0.83l-1.99,-0.11l-1.49,-1.05l-0.33,-1.06l1.02,-1.8l2.81,-1.23l2.6,-4.99l3.83,0.02l5.17,-1.92l1.27,-0.9l0.53,-1.37l-0.32,-2.36l-1.32,-0.98l-9.36,3.53l-3.97,-5.13l-1.9,-0.85l-8.06,-1.09l-3.7,-2.0l3.78,-2.71l-2.8,-3.63l2.77,-0.22l2.58,-1.35l1.38,1.24l1.2,-0.03l0.79,-0.81l0.2,-2.18l2.33,-1.42l5.96,-1.07l4.86,1.56l-0.43,2.04l0.36,0.51l2.52,0.18l2.0,2.31l4.24,9.09l9.54,0.25l1.85,1.56l3.14,-0.66l3.18,3.22l3.12,0.07l0.87,0.55l2.02,2.41l0.62,1.7l2.52,0.35l-0.29,1.58l-3.07,-0.39l2.53,4.29l-0.75,0.53l-3.52,-0.29l-0.51,-1.87l-2.11,-0.36l-0.1,1.91l-3.69,3.19l-0.17,1.24l0.61,0.34l2.82,-1.33l3.13,-0.36l0.94,0.39l-0.39,0.88l-1.4,1.35l-7.58,4.1l-3.22,0.61l-2.04,-1.08l1.84,-1.95l0.19,-1.32l-0.83,-1.01l-1.37,-0.03l-2.35,0.7l-1.52,2.11l-10.51,3.66l-2.4,1.91l-3.18,-1.07l-3.84,1.73l-7.96,0.0l-2.41,2.5l-4.96,-1.61l-2.68,-3.06l-0.47,-2.07l0.68,-1.49l1.69,-0.91l3.59,-0.11l2.44,3.0l1.67,1.11l1.79,-1.22l-0.32,-1.23l-0.99,-0.34ZM186.8,444.56l0.45,-0.68l-1.49,-2.17l0.39,-1.3l-0.46,-0.51l-1.29,0.27l-2.0,1.81l-0.17,-2.62l-0.89,-1.1l-4.16,3.48l-0.2,1.84l0.92,2.17l-0.14,1.12l-1.12,0.76l-7.75,-2.08l-3.46,-2.42l-1.43,-4.9l-3.65,-2.3l-0.7,-2.12l5.14,-0.26l-1.96,-2.7l-0.14,-1.31l0.57,-1.41l1.7,-1.48l6.48,7.45l1.78,1.08l1.15,0.19l0.45,-0.52l-0.48,-1.99l1.01,-1.35l-2.66,-3.42l1.49,-1.21l3.83,1.03l0.51,-0.52l-0.96,-2.41l-2.2,-1.98l-4.29,-1.76l1.68,-2.8l0.19,-1.79l-1.0,-1.65l1.25,0.01l3.93,2.95l0.65,2.8l0.93,0.96l4.7,2.18l3.08,2.82l3.4,-0.53l-1.64,3.09l0.26,0.58l1.24,0.09l1.86,-1.86l0.96,-2.21l7.67,7.13l0.25,-1.22l-1.23,-1.84l-0.04,-1.82l-4.18,-4.33l-1.33,-2.42l2.51,-4.84l-0.42,-0.55l-3.0,-0.6l0.3,-1.72l-1.59,-2.5l-0.09,-1.3l4.68,-2.55l1.79,-3.71l1.08,0.3l1.08,-0.48l4.09,3.79l2.49,3.48l5.44,4.15l1.21,2.08l1.77,14.03l-1.17,6.27l-2.7,2.57l-0.74,1.66l2.92,-1.53l2.41,-0.11l0.57,0.96l-1.88,3.02l0.43,2.05l3.05,3.04l-4.64,3.46l7.77,-0.51l1.7,0.38l0.21,0.58l-0.79,0.88l-2.36,1.15l0.43,1.25l5.87,-1.11l2.67,1.97l4.58,0.41l2.18,3.05l1.52,0.02l1.69,-1.79l3.68,0.03l2.4,-1.89l2.29,-0.66l2.31,0.02l1.62,1.57l5.83,0.0l-1.2,2.7l0.4,2.14l-2.6,3.78l-3.08,2.03l-4.88,0.93l-1.57,5.24l-4.42,2.53l-5.8,6.58l-2.85,1.89l-4.45,0.68l-0.97,-0.34l-0.7,-1.37l0.24,-1.89l2.26,-2.61l-0.14,-1.96l3.49,-5.27l1.64,-1.47l8.28,-3.29l0.25,-1.22l-0.56,-0.37l-4.7,1.56l-7.22,0.1l-0.61,-2.46l-2.09,-2.76l-2.27,-1.61l-0.54,0.48l1.71,4.14l-2.17,3.07l0.33,1.17l-2.33,3.37l-0.94,0.39l-0.82,-0.71l-1.07,-6.66l-1.32,-0.95l-1.27,0.67l-2.12,-1.45l-1.29,0.32l0.93,1.71l-0.91,0.48l-11.69,2.4l3.49,-3.54l0.11,-1.05l-2.09,-0.45l-4.19,1.62l-2.46,-3.58l2.13,-1.38l0.6,-1.12l-0.38,-0.58l-5.18,-0.01l-3.98,-4.14l-2.16,-3.81l5.26,-2.6l1.75,0.25l4.96,3.84l2.32,0.42l0.4,-0.62l-1.24,-1.75l-7.12,-5.0l-3.62,0.4l0.12,-1.14l-1.73,-0.84ZM250.72,592.71l-1.34,0.14l0.6,-1.29l3.89,-2.71l0.91,2.13l-1.48,1.05l-2.58,0.68ZM245.68,610.27l-7.29,11.45l-1.79,4.61l-0.96,-0.07l-4.25,3.76l-1.44,6.5l-1.96,1.1l-3.18,-0.17l-2.9,-1.52l-1.28,-2.91l-0.75,-5.76l0.93,-3.74l6.56,-4.25l6.7,-1.04l3.16,-2.43l-2.43,-0.34l-5.92,0.8l-1.05,-1.61l0.97,-2.54l2.38,-3.1l4.29,-3.57l2.72,-0.7l10.99,-8.73l2.45,-1.29l1.5,0.56l0.4,3.85l-4.38,4.34l-3.46,6.79ZM233.0,453.64l-2.42,0.75l-2.08,-0.67l-1.83,-1.51l-0.4,-1.28l1.65,-0.79l2.74,0.45l2.08,1.63l0.25,1.43ZM229.08,420.1l1.07,-1.33l-0.81,6.39l-1.08,-1.34l1.16,-2.96l-0.36,-0.76ZM227.18,427.36l0.9,1.02l-0.33,1.71l-2.69,8.1l0.08,3.82l2.3,4.82l-5.16,2.35l-1.05,-0.52l0.53,-1.37l-0.91,-1.41l-0.14,-1.91l0.69,-7.94l0.59,-1.9l3.95,-1.48l-0.12,-1.14l-1.54,-2.16l1.26,-0.55l1.66,0.81l0.58,-0.36l-0.59,-1.88ZM217.73,633.63l0.84,4.94l3.68,3.03l-0.63,2.98l2.31,1.7l-0.12,2.59l0.76,2.62l-2.68,2.02l-0.78,-0.27l-3.44,3.23l-4.55,1.59l-3.81,-0.43l-1.34,0.74l-0.92,2.85l-2.9,2.08l-2.03,0.6l-1.78,-0.5l-1.08,-2.42l0.46,-2.49l1.75,-1.6l4.84,-2.65l-1.96,-4.42l-1.19,-1.12l-3.84,-1.39l0.27,-1.63l6.01,-5.15l-0.1,-0.69l-1.98,-0.78l-5.21,0.05l-1.9,1.34l-3.18,6.1l-2.79,1.58l-3.71,4.15l-2.1,0.28l-0.83,-0.89l0.09,-1.72l1.07,-2.08l-1.06,-1.29l4.56,-6.11l-0.11,-0.61l-2.35,-1.34l1.48,-1.4l0.7,-4.55l3.57,-2.55l7.01,-2.99l-1.42,4.92l1.35,3.19l1.3,0.4l0.49,-1.22l-0.62,-2.32l1.71,-2.51l2.71,-2.15l3.18,-1.52l2.1,-2.29l3.57,-1.43l1.84,-1.48l1.22,1.1l1.55,11.92ZM215.01,599.17l-2.73,3.74l-1.0,2.44l0.19,2.11l-3.71,1.38l-3.28,-0.49l0.86,-0.62l1.84,-4.45l2.29,-2.53l2.66,-0.41l-0.35,-1.58l2.97,-0.59l0.27,1.0ZM135.93,362.62l5.04,-1.07l5.46,-2.81l-10.52,1.44l0.7,-0.99l2.1,-0.33l-0.4,-1.19l-1.02,0.0l1.29,-2.55l-4.52,2.06l-2.98,-4.46l0.3,-1.64l-1.52,-1.32l1.18,-3.57l1.65,-1.73l-1.66,-1.54l6.13,-0.31l2.15,-1.0l-3.23,-1.73l-0.32,-1.3l0.17,-1.39l1.84,-2.04l4.44,2.06l1.53,-0.27l4.28,1.52l-2.15,0.05l-0.4,0.52l0.58,1.78l2.85,3.16l-0.08,1.9l0.92,2.69l1.37,2.46l1.61,1.35l0.23,-3.83l-2.31,-4.09l0.74,-0.53l0.54,-1.94l5.9,-1.57l2.07,0.8l3.61,3.33l2.36,-2.65l-0.13,-0.63l-2.74,-1.59l-1.22,-3.4l-2.39,-0.15l-2.17,-3.79l1.61,-1.2l-1.5,-1.9l6.07,-4.18l1.72,-1.87l1.14,0.36l1.82,-1.31l5.25,-0.54l5.62,-2.31l2.97,-2.82l15.34,-9.13l6.69,-6.11l1.81,0.11l1.6,1.37l4.71,9.55l-2.13,1.43l-1.91,5.65l1.79,1.5l2.25,0.62l-5.6,2.96l-1.41,1.25l0.21,2.04l-2.57,0.95l-0.97,1.82l-2.39,0.74l-0.3,3.14l-1.43,0.71l-2.34,0.04l-0.31,0.65l1.82,2.18l3.31,0.78l3.46,-0.19l2.63,-0.92l4.15,-3.48l2.79,-0.95l-1.0,3.36l0.5,1.31l-2.73,1.18l-1.79,2.16l-1.4,0.58l-5.04,-1.88l-3.93,0.37l-3.88,-1.64l-1.52,-0.07l-0.38,0.56l2.79,5.77l-0.89,1.2l0.34,1.38l-1.19,0.73l-4.3,0.75l-4.21,3.42l-2.83,-0.85l-2.58,1.74l-6.15,1.23l0.39,1.26l3.38,0.07l11.26,-2.11l3.67,-1.39l1.72,1.66l0.32,3.05l1.01,0.99l-2.78,1.53l1.21,0.99l2.18,0.43l-3.22,3.07l-1.88,0.39l-10.39,-1.71l-0.88,1.14l0.85,1.06l3.36,1.73l2.96,0.68l1.03,1.09l-2.81,3.73l-1.39,0.8l-3.6,-0.88l-0.48,1.33l1.18,1.52l-1.58,0.62l-2.62,-1.09l-2.26,-3.66l-1.02,-0.42l-0.95,1.14l1.83,3.68l-3.4,-1.22l-3.3,-5.85l-0.78,-3.24l1.2,-3.09l2.34,-1.72l6.24,-0.92l0.38,-1.19l-8.74,-0.4l-0.74,2.4l-6.12,5.12l2.99,5.2l2.23,1.25l2.24,2.61l-1.56,1.28l2.39,1.64l0.47,2.76l-6.5,-1.25l-2.97,-1.34l-1.16,0.42l-1.74,2.41l0.12,0.61l3.52,1.51l2.19,3.27l-0.32,0.69l-3.93,0.62l-0.44,0.4l0.28,1.13l-5.54,-2.29l-0.46,1.5l1.42,1.35l-3.85,3.09l0.76,1.23l-8.08,5.09l-11.67,-10.15l-0.96,-2.05l2.41,0.38l0.74,2.43l0.63,0.24l7.1,-5.13l1.08,-1.38l5.88,-0.34l0.22,-0.74l-4.0,-2.75l4.14,-1.88l2.47,-0.44l4.61,1.35l-2.67,-2.47l1.81,-0.7l0.34,-1.25l-5.36,-0.4l-4.7,-2.63l-5.07,0.17l-2.03,-0.6l-0.65,-1.81l-2.11,0.44l-3.42,-2.03l2.91,-2.3l1.59,0.06l0.42,-0.4l-0.36,-1.38ZM212.42,555.14l-5.84,-0.08l-1.85,-1.32l1.52,-1.58l1.96,-0.44l4.21,3.42ZM203.39,487.59l0.22,1.65l1.79,0.0l-1.02,3.94l-1.58,2.41l-2.22,1.05l-3.14,0.24l-1.32,-0.57l-1.52,-3.0l-6.33,-3.83l7.3,-5.89l3.17,-0.34l4.37,2.2l1.48,1.32l-1.21,0.82ZM177.88,539.32l-4.43,2.83l-1.27,0.35l-3.13,-0.7l-0.99,2.08l-1.29,-2.32l2.05,-0.36l2.28,-1.77l4.92,-6.03l7.33,-4.08l3.9,-0.54l-2.99,5.48l-1.21,1.15l-2.02,0.51l-3.16,3.4ZM182.21,483.43l-2.71,0.37l-3.97,-0.32l4.83,-1.97l3.36,1.28l-1.52,0.65ZM150.14,558.23l-6.46,-1.86l-1.9,-4.86l7.33,-1.42l5.17,-2.22l6.32,-1.69l1.89,0.08l0.87,1.71l-0.96,1.21l-5.07,0.5l-0.5,2.23l-1.49,1.02l-3.97,1.09l-1.57,2.16l0.33,2.04ZM152.21,333.9l2.73,2.41l1.1,-0.27l0.55,0.45l1.31,2.12l-6.13,0.0l0.84,-0.06l0.35,-1.18l-1.24,-0.81l-1.05,-2.27l0.34,-0.81l1.21,0.41ZM134.01,378.91l3.3,-2.63l1.7,-0.62l1.21,0.66l0.02,2.21l-0.64,0.3l-2.89,-1.48l-1.36,2.28l-1.34,0.36l0.0,-1.09ZM111.36,422.72l1.61,-0.84l0.4,0.95l6.24,0.0l5.11,-1.16l3.02,0.63l0.64,0.91l-1.82,2.99l-3.46,-0.19l-3.17,1.06l-1.42,-0.76l-4.41,-0.08l-2.73,-3.51ZM113.08,421.29l-3.0,-0.39l-5.16,-2.64l-2.77,-0.56l-1.48,1.42l-0.94,0.1l-6.13,-3.44l1.9,-1.1l3.76,-6.4l1.75,0.7l5.45,-0.75l-2.13,0.89l-0.12,0.64l2.09,1.65l5.83,-5.5l-0.66,2.25l6.65,1.73l0.44,-1.25l-1.24,-0.75l5.11,-2.74l2.08,-0.28l1.14,1.87l-1.82,1.54l0.01,0.71l1.74,0.69l2.44,-0.99l5.67,1.33l0.57,1.13l-2.58,3.02l-0.89,-0.13l-1.47,-1.78l-3.51,-2.24l-4.11,-0.08l-0.4,1.33l1.66,0.62l-0.47,1.01l0.42,1.33l2.88,0.26l1.24,3.0l3.32,-0.45l-1.11,1.78l-1.94,1.08l-4.97,0.35l-2.26,0.84l-1.99,-2.53l-4.99,2.74ZM125.46,400.77l-2.35,0.84l-1.03,-0.11l2.88,-2.45l1.27,-0.22l0.48,0.81l-1.25,1.13ZM109.72,439.85l7.05,3.87l-2.1,-0.41l-0.51,0.38l0.34,1.25l1.81,0.27l2.64,1.97l1.76,0.49l-2.0,0.82l-1.65,-0.62l-5.14,-2.89l-3.82,-3.36l-1.98,0.85l-0.08,0.69l1.46,1.44l0.67,1.8l4.15,1.04l1.32,1.65l1.48,0.63l3.99,0.35l2.71,2.51l1.15,0.02l-0.28,1.16l-2.85,2.13l-1.95,4.51l-1.44,0.53l-6.54,-1.36l-0.48,0.39l0.31,1.16l5.48,1.32l1.38,1.08l1.09,4.29l-0.18,2.33l-0.72,1.09l-2.97,-0.86l-3.41,0.12l-0.38,1.25l1.88,0.62l4.35,-0.23l3.44,3.22l1.62,0.22l-1.73,1.62l-6.97,-1.13l-2.7,1.2l-2.27,-2.1l-2.93,-7.69l0.1,-4.47l-3.01,-2.49l1.3,-1.49l1.75,-4.78l1.54,-1.01l0.64,-1.72l-3.2,-9.37l5.91,-2.32ZM114.76,430.09l1.97,0.5l0.69,1.21l2.46,-0.44l2.43,1.4l-1.39,-0.23l-3.74,1.95l0.63,1.43l3.98,0.86l0.45,1.03l-7.15,1.64l-2.14,-0.39l-6.6,-3.16l-0.84,-1.22l1.47,-3.9l1.53,-1.07l1.8,-0.07l2.09,0.86l2.36,-0.42ZM101.81,483.27l2.19,1.32l-1.55,2.26l0.12,0.67l3.39,1.59l0.99,2.68l-2.36,0.47l-2.67,2.05l0.18,1.44l-0.49,0.55l-1.2,0.44l-7.81,-1.1l0.86,-1.78l2.6,-1.32l0.44,-1.47l-0.85,-2.15l5.39,-2.4l0.78,-3.25ZM4.32,389.19l-1.63,0.29l-1.46,-0.85l-0.48,-1.35l4.5,0.99l-0.93,0.91Z", "name": "Scotland"}, "UKL": {"path": "M288.06,1103.72l-0.21,-2.02l1.0,-0.8l-0.59,-2.09l5.18,-1.12l3.72,-2.72l6.33,-1.5l2.89,-2.27l0.23,-2.62l1.27,-0.4l-0.17,-1.04l-0.84,-0.6l0.8,-0.82l4.49,0.12l4.74,2.08l4.29,-0.87l-0.11,-1.47l6.45,1.43l0.98,-0.87l-0.5,-3.21l5.04,-1.71l4.92,-5.57l0.92,-0.01l2.76,1.8l0.62,-0.36l-0.17,-3.15l2.96,-1.2l11.76,-0.01l1.66,-2.11l4.25,-1.64l4.32,-3.86l6.03,-1.49l10.35,-7.38l5.03,-5.92l2.59,-4.13l1.21,-2.78l1.48,-7.51l1.91,-3.98l-0.6,-2.7l0.52,-1.99l3.35,0.89l6.06,-3.22l-0.21,-1.61l-2.46,0.04l-6.61,1.61l-5.05,-5.2l-0.9,-1.63l0.26,-2.7l1.36,-2.79l3.62,-3.39l0.63,-2.04l4.7,-2.68l1.26,-1.7l-2.69,0.01l-2.78,1.22l-6.42,-6.45l-1.97,-3.72l2.72,-2.21l-1.29,-4.44l0.17,-2.14l5.54,-3.38l-1.04,-1.42l-2.39,1.25l-1.71,-1.38l-2.15,1.33l-7.26,-0.51l-6.25,1.59l-3.17,1.58l-6.07,-0.02l-3.5,1.99l-3.12,2.96l0.3,0.9l-1.2,0.67l-0.89,1.54l-0.03,1.51l0.89,1.22l-1.85,1.23l-6.8,-3.18l-2.82,1.61l-6.59,-0.02l-2.74,1.88l-1.73,-0.01l0.67,-0.9l-0.17,-1.23l1.61,-2.29l11.94,-11.39l6.23,-1.85l6.98,-4.45l1.77,-2.42l5.59,-2.99l1.29,-3.92l0.39,-6.11l0.46,-0.15l0.56,1.42l0.68,0.08l1.54,-2.84l3.35,-3.31l2.56,-1.17l4.84,-6.25l4.66,-1.79l2.62,-0.19l2.29,0.66l5.06,-1.82l2.92,-2.01l9.36,-3.18l2.88,0.0l0.37,-0.55l-0.88,-2.15l-2.91,-2.93l2.48,0.47l2.49,1.76l2.01,-0.61l1.67,0.45l4.55,3.79l10.07,-0.18l3.6,-0.69l16.41,-6.62l3.46,-0.1l4.9,2.39l1.87,2.18l11.09,5.9l2.96,3.22l0.88,-0.55l0.06,-1.99l4.98,1.15l5.5,3.62l3.17,2.98l0.42,1.88l-3.35,1.89l-0.42,1.59l5.13,4.88l2.25,4.16l1.39,5.14l3.29,4.03l4.42,0.99l3.34,1.66l0.85,2.27l-0.03,2.53l-4.99,2.23l-6.28,-4.49l-2.24,-0.28l-4.15,0.92l-3.05,-2.13l-2.76,-0.15l-7.77,4.2l-1.78,2.46l-2.35,1.51l0.37,3.56l-2.65,3.09l1.17,4.26l2.48,1.42l3.0,0.3l1.76,1.83l4.53,0.86l1.85,2.01l1.83,0.91l-0.97,1.34l-3.56,1.07l-1.32,2.63l-0.61,4.22l-2.38,1.45l-1.45,4.15l-3.72,2.41l-0.16,1.98l1.36,2.54l-0.59,1.79l0.77,0.62l2.25,-0.27l1.45,-1.73l4.67,-2.81l2.94,2.7l-4.49,4.82l-6.67,0.36l-7.23,2.96l-2.1,2.3l-0.23,1.66l1.48,3.23l8.32,5.22l2.88,2.5l9.73,0.68l-0.04,0.94l-2.85,2.05l-0.86,1.88l1.04,2.59l2.68,0.97l-4.52,0.85l-3.5,2.62l-1.47,2.84l-3.6,4.39l0.02,1.19l0.8,0.93l1.91,0.3l-0.73,1.0l-3.42,1.53l0.12,0.93l1.71,1.28l-0.87,1.04l-0.88,3.5l3.15,2.67l0.6,3.9l2.6,4.07l4.64,4.35l1.31,2.62l1.91,1.4l2.64,0.27l5.04,-2.28l8.33,6.16l3.17,3.83l3.33,0.47l4.19,2.32l-2.14,3.16l-0.47,1.8l0.91,3.18l-1.2,2.69l1.96,5.51l-1.93,1.37l1.58,5.06l-2.23,2.2l-1.58,1.04l-4.15,0.82l-4.8,2.76l-3.57,1.06l-7.21,0.41l-2.98,-2.29l-3.61,3.64l-7.72,3.93l-2.39,2.06l-1.12,2.26l-2.3,0.75l0.88,2.84l-0.55,2.21l-1.28,1.24l-2.97,-0.53l-6.02,2.1l-21.48,-1.63l-1.44,-0.69l-4.11,-4.67l-5.07,-3.51l-3.02,0.44l-3.36,-2.08l-0.82,-1.06l0.55,-0.79l-2.5,-6.44l-6.43,-6.88l-11.97,1.15l-2.01,1.4l-0.22,1.34l1.87,2.84l-2.88,0.0l-0.67,0.9l-0.48,-0.85l-1.99,-0.76l-1.6,1.54l-4.38,-1.17l-3.95,2.67l-2.54,-0.76l-0.66,1.21l-7.22,-1.91l-0.41,-1.0l1.59,-1.29l-1.0,-4.1l2.66,-0.71l1.32,-1.7l0.19,0.8l1.5,0.9l11.21,-1.85l2.07,-2.75l0.04,-1.84l-1.1,-0.46l-1.58,1.35l-4.17,-0.22l-4.63,-2.15l-1.55,0.69l-6.65,0.84l-1.74,-0.56l-2.26,-1.49l-2.75,-3.36l4.47,0.15l1.1,-1.17l-0.33,-0.65l-3.01,-0.22l-1.19,-0.72l-0.59,-1.02l1.07,-3.23l-0.67,-1.04l-1.09,0.26l-2.23,2.73l-2.37,-1.56l-1.67,0.23l-0.59,1.41l1.57,1.87l-2.32,1.04l-9.77,-0.62l-6.33,1.09l-2.84,1.7l-0.36,2.85l-0.89,0.4l-1.71,4.39l-1.95,-0.92l-2.04,1.59l-8.97,0.1l-6.66,5.46l-6.81,-2.2l-1.69,-1.01l0.58,-1.28l-1.26,-2.24l-4.43,-1.07l-1.12,-1.58l6.42,0.76l0.41,-0.57l-0.36,-1.09l4.26,0.79l4.13,-1.65l4.13,-0.71l2.18,-1.22l1.72,0.32l0.57,-1.08l-2.51,-2.26l-0.44,-2.5l1.27,-2.07l3.14,-0.65l0.32,-1.25l-0.6,-0.35l-3.4,1.39l-6.04,0.96l0.18,0.76l2.14,0.37l0.3,0.77l-0.46,1.57l1.16,1.19l-1.34,1.91l-8.4,1.33l-12.2,-1.33l-1.54,0.49l0.5,2.17l-1.3,0.65l-0.06,-1.92l-3.93,-2.5l2.0,-0.79l2.21,-2.13l4.37,-1.02l1.48,-1.23l0.41,-1.47l-0.94,-6.55l-2.03,-2.49l-0.92,0.56l-1.41,-0.95l-3.33,-0.39l-1.47,-0.82l-6.55,1.52ZM357.65,950.37l-0.34,-3.45l-1.83,-1.51l-4.34,-6.08l1.07,-10.14l-0.95,-3.36l1.16,-0.7l11.0,-3.05l8.56,0.85l3.9,2.02l0.98,3.88l2.65,1.32l0.03,2.03l1.69,1.84l1.27,3.17l5.38,-0.51l1.79,-1.65l1.88,0.83l4.26,0.48l-4.39,5.83l-6.28,2.15l-2.11,1.33l-2.13,2.07l-0.32,2.41l-10.33,5.85l-3.91,-0.73l-1.56,0.8l0.24,-2.64l2.17,-2.81l-1.1,-1.01l-1.65,0.52l-2.76,2.54l-2.99,-2.23l-1.06,-0.03ZM343.24,934.63l2.62,-0.08l2.89,2.57l2.66,5.07l-0.33,0.93l-1.08,-0.06l-1.67,-1.22l-2.62,-3.52l-3.84,-0.29l-1.36,-2.36l1.95,-1.42l0.79,0.38Z", "name": "Wales"}, "UKK": {"path": "M253.14,1305.23l-0.55,-2.93l2.56,-3.4l14.3,-6.14l1.65,-0.04l2.57,2.07l2.17,0.77l1.92,-1.04l2.42,-4.13l3.1,-0.04l3.21,-1.5l9.99,-8.79l4.24,-2.14l0.65,-2.26l-0.63,-3.53l2.64,-0.43l6.24,-2.97l1.01,-2.22l1.16,-8.62l0.76,-1.42l1.54,-1.03l1.86,-0.06l2.05,-1.52l0.94,4.38l0.58,0.33l1.04,-0.7l1.46,0.72l5.31,0.6l-1.08,-2.13l-4.33,-1.65l-1.15,-1.25l0.52,-1.71l-0.43,-1.59l8.22,-0.07l2.78,-0.83l3.75,-5.62l-0.21,-2.9l1.95,-0.19l6.14,-4.42l1.8,-3.53l5.23,-3.84l2.41,-4.2l-0.41,-10.03l0.94,-4.62l1.82,-3.83l-0.46,-4.58l7.43,0.0l3.54,1.62l5.24,0.46l3.24,-1.34l8.07,-7.82l-1.88,-6.28l-1.7,-2.24l2.94,-0.07l0.8,-1.45l-0.16,-1.6l-1.55,-1.74l6.28,-2.09l15.79,-1.24l4.87,-1.26l6.3,-0.01l6.12,-1.63l11.15,2.43l7.02,-0.19l10.7,2.07l4.44,2.73l9.9,-0.37l9.35,-1.98l9.14,-0.16l2.31,-1.29l-0.66,2.24l1.74,0.66l1.52,-2.45l0.47,-2.39l-1.36,-9.67l1.98,-0.43l0.41,-2.85l2.4,-3.11l-1.06,-1.33l1.39,-1.21l2.89,0.35l10.55,-10.11l7.18,-1.99l1.82,-1.58l7.6,-10.85l2.31,-1.26l2.16,-4.74l7.86,-7.64l5.08,-1.71l1.66,-1.27l0.67,-1.33l-0.18,-1.56l-1.42,-1.27l-0.64,0.24l-0.35,1.99l-1.37,1.07l-5.45,1.27l-3.44,4.17l-5.17,2.87l-6.8,6.99l-0.55,-2.96l-0.88,-1.4l1.92,-1.29l-1.96,-5.74l1.19,-2.51l-0.87,-2.53l0.38,-2.23l1.89,-2.49l1.44,-5.0l1.37,1.78l1.77,-0.96l0.95,0.2l0.95,-1.19l2.19,-0.76l2.58,0.31l1.51,-2.46l3.0,-0.34l3.29,-1.82l0.07,-2.4l-1.84,-1.81l-0.63,-2.19l-1.62,-1.05l1.58,-6.41l1.16,0.51l1.18,2.25l1.42,0.58l2.14,-0.69l2.02,-1.94l2.0,-0.27l3.01,4.75l5.0,1.27l1.8,-0.32l2.12,-2.9l2.65,0.32l1.55,-0.89l-1.21,-1.91l0.8,-3.32l3.37,-0.15l-2.08,3.52l1.2,1.75l2.51,-1.32l6.57,0.85l5.13,-2.99l2.34,-0.45l5.32,0.23l2.97,2.29l1.27,0.05l0.93,-1.56l-0.18,-1.95l-1.89,-2.39l-1.21,-0.61l1.47,-1.0l2.74,0.32l3.02,-3.41l1.44,-0.65l1.61,1.69l1.81,0.57l0.78,2.18l2.99,4.11l1.67,0.5l3.28,-0.23l-3.28,4.17l-0.43,3.45l3.44,2.01l0.39,1.03l-2.76,2.39l0.52,2.02l-1.63,1.22l-1.6,3.37l-0.28,6.56l-2.49,2.46l1.37,1.94l1.38,6.5l2.72,2.79l-2.87,-0.21l-0.75,1.39l0.37,2.55l2.37,1.99l-0.39,2.03l-1.6,1.56l0.22,3.11l1.01,0.91l1.66,-0.05l3.68,5.38l1.58,0.44l0.71,3.18l2.24,3.16l1.92,1.19l0.51,2.35l-2.63,0.68l-0.91,1.42l2.6,3.99l3.01,1.36l0.97,3.22l-3.46,0.76l0.55,2.99l-1.59,2.97l0.87,2.73l-0.53,0.5l-3.63,-1.38l-1.76,0.6l-2.36,2.07l-4.43,-0.66l-1.82,0.88l1.02,3.72l2.58,3.83l0.59,2.3l-0.42,2.62l2.63,2.18l-0.77,2.6l0.95,3.6l-0.14,2.22l2.09,1.83l-2.01,2.55l1.77,2.26l-0.74,1.56l-3.55,1.0l-3.71,-2.81l-3.62,-0.34l-6.01,-1.66l-2.59,-1.89l-1.08,0.39l-0.77,1.21l-0.83,-1.23l-4.98,0.72l-2.2,1.34l-0.11,0.57l3.71,5.08l2.43,2.24l1.96,0.28l2.09,-1.17l2.22,0.38l-0.44,2.17l-2.44,1.94l0.55,2.92l2.42,0.14l0.73,3.61l-0.89,1.46l-0.21,2.12l2.04,3.92l4.68,-0.86l0.18,2.66l4.65,0.0l0.17,0.84l-3.26,0.49l-4.82,1.77l-7.51,-0.76l-3.49,1.27l-3.38,2.67l-0.89,-2.38l-6.15,-0.75l-1.03,-1.9l-0.92,-0.32l-3.87,4.75l0.36,0.63l1.14,-0.12l2.79,-1.34l2.71,3.39l4.33,0.59l0.39,0.59l-0.56,1.75l1.44,1.14l-2.58,2.66l0.04,1.71l-1.26,0.49l-6.94,0.12l-7.98,-2.84l-15.97,-1.51l-2.91,-1.52l-2.08,0.18l-3.5,1.04l-2.16,3.64l-0.44,2.83l1.02,1.25l1.93,0.53l0.16,1.06l-1.86,2.99l-0.06,-3.84l-2.19,-3.16l-18.13,-11.66l-14.99,-4.71l-8.68,1.18l-3.12,1.71l-1.9,0.19l-3.4,-0.76l-5.66,3.17l-3.55,-0.84l-8.11,2.08l-3.26,4.27l-6.11,2.27l-3.15,-0.44l-1.05,-0.84l-2.19,-4.39l-1.8,-1.31l-0.77,0.56l-0.01,1.21l1.12,1.18l1.75,5.1l-4.02,4.64l-2.15,5.53l0.08,2.47l1.37,4.26l-3.55,0.56l-1.49,0.93l-0.76,1.84l0.83,2.39l5.11,0.77l-0.89,2.12l-1.87,1.12l-0.62,2.84l-0.74,0.44l-2.46,-1.26l-0.62,0.23l-0.58,2.36l-3.54,1.26l-1.12,1.22l-1.93,7.13l0.59,2.68l-0.96,0.42l-4.81,0.95l-4.85,-1.2l-1.35,1.07l-7.97,-7.52l-6.75,-4.79l-4.2,1.5l-2.21,1.56l-1.61,-0.54l-1.08,-0.79l0.12,-1.74l-3.62,-1.52l-0.75,-1.44l1.08,-1.94l-0.37,-0.59l-3.97,0.02l-0.97,-0.56l-1.5,-2.68l-0.6,-1.7l2.63,-5.03l-2.09,0.58l-1.53,-0.64l-1.5,2.04l-2.08,0.69l1.6,2.58l-0.88,1.73l-5.07,-0.04l-0.34,0.66l1.83,1.89l4.78,-0.64l1.02,0.64l-2.08,0.49l-0.31,1.16l2.07,0.33l0.11,0.92l2.02,0.0l-1.55,1.16l0.37,1.89l-1.22,-0.07l-1.6,-2.79l-1.68,-0.95l-7.61,-1.67l-4.14,0.41l-6.25,3.3l-3.31,1.08l-14.19,0.7l-0.89,0.78l-1.09,-2.85l-0.94,-0.34l-5.16,1.5l-1.14,1.03l0.56,2.39l-2.08,2.03l-0.33,0.96l0.59,1.77l-1.78,3.22l-4.29,-0.52l-4.77,2.96l-3.8,1.1l-4.54,5.87l-0.64,-0.87l-0.65,-4.18l-1.44,-0.91l-1.72,0.4l-0.23,2.55l-1.08,1.37l0.18,1.04l1.07,0.89l-2.43,1.35l-0.52,2.65l-3.62,1.89l4.88,1.03l1.09,2.91l-3.38,4.89l-3.43,-0.03l-0.83,0.54l-2.57,2.56l-1.23,3.05l-4.13,-3.56l-0.64,-3.9l-4.54,-6.03l-7.05,-3.23l-3.54,-0.55l-4.48,-2.02l-4.16,0.77l-1.94,1.55l0.51,3.46l-0.81,1.3l-2.68,1.51l-7.52,1.32l-2.99,-0.98l-0.73,-2.77l1.72,-1.11l-0.71,-1.87ZM341.93,1181.83l0.36,1.42l-0.13,1.34l-0.34,-0.39l0.11,-2.37ZM201.75,1326.67l-1.1,0.06l0.55,-1.68l0.75,0.97l-0.19,0.65ZM198.3,1322.87l-0.56,0.28l-0.52,-1.44l1.0,0.64l0.09,0.53Z", "name": "South West"}, "UKJ": {"path": "M584.61,1203.25l0.11,1.08l1.34,-0.02l1.32,-1.43l2.34,1.83l6.12,1.69l3.54,0.34l2.26,2.22l1.51,0.6l4.1,-1.07l1.19,-2.18l-1.77,-2.29l2.03,-2.71l-0.69,-1.19l-1.44,-0.77l0.12,-2.16l-0.93,-3.55l0.75,-2.76l-0.76,-1.18l-1.81,-0.92l0.38,-2.58l-0.63,-2.45l-2.64,-3.96l-0.84,-3.15l5.59,0.38l2.51,-2.13l1.51,-0.52l3.87,1.33l1.01,-1.29l-0.92,-2.48l1.57,-2.93l-0.46,-2.96l3.0,-0.28l0.46,-1.68l-1.3,-2.95l-2.94,-1.26l-2.36,-3.63l3.48,-1.58l-0.57,-3.09l-2.03,-1.33l-2.14,-3.03l-0.69,-3.2l-1.73,-0.6l-3.71,-5.43l-2.42,-0.45l-0.19,-2.74l1.54,-1.41l0.46,-2.4l-2.56,-2.42l-0.21,-1.91l0.18,-0.66l2.58,0.49l0.89,-1.21l-2.76,-2.96l-1.42,-6.58l-1.26,-1.32l2.43,-2.55l0.29,-6.63l1.48,-3.04l1.67,-1.2l-0.5,-2.07l2.81,-2.61l-0.63,-1.81l-3.16,-1.61l0.25,-1.89l3.95,3.0l1.24,-0.33l0.52,-1.1l2.92,-0.21l0.67,-1.86l2.11,-0.37l0.99,-1.34l1.31,-7.29l2.08,-3.02l2.5,-0.3l0.45,-1.92l0.58,-0.09l1.45,0.11l2.34,1.77l2.2,-0.31l0.75,-1.76l-1.54,-1.27l2.34,-1.57l1.52,-2.91l6.74,7.04l-5.63,1.78l-0.06,0.7l0.91,0.58l-0.22,3.53l2.76,7.01l1.24,0.65l6.16,-0.21l2.0,-1.13l1.98,-0.19l2.98,-2.66l-2.57,-1.15l1.49,-1.5l1.82,-0.97l5.15,-1.12l1.24,-1.27l2.78,0.16l3.42,-1.22l3.84,6.17l1.4,0.03l3.1,-2.45l0.19,-2.07l2.46,-1.02l-0.18,-1.21l-2.01,-1.53l-2.2,-2.94l4.43,-1.34l1.52,-2.7l2.4,0.56l1.52,-1.79l2.85,0.04l6.22,-3.46l2.45,1.74l-0.7,3.43l3.71,3.25l1.06,2.1l-3.63,2.45l-0.02,1.41l-1.89,0.76l-1.59,1.96l0.26,0.65l1.58,0.2l0.51,0.72l-0.35,2.49l-1.7,2.21l1.0,2.81l-2.39,2.92l-1.54,3.86l5.54,3.52l2.09,-0.31l3.41,2.75l2.27,3.35l-1.44,-0.07l-2.21,2.17l-2.85,-0.91l-3.31,-0.19l-1.65,-1.74l0.07,-1.65l-2.77,-1.04l-1.29,0.34l-1.44,2.84l1.76,2.15l1.27,0.26l1.42,1.27l0.44,3.06l1.16,1.37l2.8,1.15l3.53,-0.03l1.97,1.85l2.3,-0.67l0.96,0.36l-1.78,1.5l-0.35,1.43l0.95,1.66l0.18,2.06l3.46,0.13l-2.23,3.5l-0.21,2.21l0.72,2.17l2.11,1.87l1.83,4.53l-1.1,6.22l-1.01,2.32l2.04,2.18l2.7,0.63l0.08,1.52l0.83,1.13l2.83,0.71l4.62,3.08l2.96,0.61l1.02,2.18l-1.42,2.73l0.24,2.65l0.53,0.34l1.86,-0.73l2.12,-3.68l1.82,-1.14l1.83,2.0l-0.11,2.67l0.58,0.38l3.14,-1.22l2.25,3.96l2.09,1.71l2.59,-0.33l1.67,-2.16l3.32,-0.56l1.6,-1.63l1.99,0.13l1.2,1.07l0.51,3.18l2.5,-0.22l2.03,1.37l2.16,-0.67l0.51,-2.78l5.08,-5.11l1.2,-3.89l-0.67,-3.32l5.13,-5.91l4.18,1.29l4.0,-0.79l1.25,1.95l2.05,0.41l8.05,-1.59l1.84,-2.34l5.48,-1.26l13.71,1.67l2.09,2.13l-0.52,1.21l-6.11,-0.35l-2.9,2.22l-4.76,1.51l-0.09,0.64l1.88,2.12l8.51,0.42l3.5,0.77l0.44,-0.57l-1.02,-2.73l0.28,-0.73l1.2,0.04l1.13,3.4l2.47,2.89l18.43,1.74l10.82,-2.77l27.82,-2.15l1.75,0.88l-0.72,3.42l-1.09,1.79l-3.38,0.27l-0.87,0.85l3.06,11.95l-0.7,4.26l-1.71,3.55l-2.24,2.25l-5.68,1.63l-2.4,1.51l-3.86,0.27l-2.35,2.13l-1.58,0.55l-5.69,0.13l-3.6,1.44l-3.48,2.67l-5.32,6.78l1.03,7.34l-2.55,0.84l-12.26,-3.38l-3.66,0.95l-8.58,6.96l-3.4,1.3l-18.73,3.34l-3.89,1.31l-2.0,2.7l-2.94,1.65l-3.11,3.68l-3.01,0.04l-5.63,-1.46l-3.97,-0.11l-2.29,-1.61l-5.32,-0.68l-17.94,-5.47l-2.94,-0.25l-2.39,1.01l-3.27,-1.02l-11.02,3.32l-14.78,0.0l-14.19,3.95l-2.34,-1.09l-1.52,1.47l0.22,3.21l-1.37,0.64l-9.6,-4.67l-0.42,-0.45l0.34,-0.81l3.46,-1.48l0.27,-1.09l-3.78,-2.77l-1.63,0.8l0.4,-1.57l-1.75,-0.81l-2.9,-0.46l-4.43,0.4l-3.23,6.93l-1.91,0.2l-1.42,-1.34l2.3,-3.72l0.33,-2.05l-1.78,-0.74l-6.77,0.72l-0.12,0.71l3.39,2.65l-0.07,3.06l-1.84,0.67l-2.81,-1.17l-1.27,-1.82l-4.77,-2.7l-4.0,-1.35l-3.32,-3.35l-11.04,-5.19l-0.57,0.36l0.25,1.08l3.5,1.36l8.74,8.35l0.48,2.36l-8.54,1.29l-0.1,0.72l1.0,0.87l-3.66,0.57l-3.23,1.33l-3.02,-0.4l-3.32,4.76l-3.38,-1.41l-5.86,-0.94l-0.66,-1.66l-4.53,0.0l0.22,-1.97l-0.48,-0.63l-4.55,0.92l-1.75,-3.42l1.14,-3.39l-0.83,-4.12l-2.41,-0.14l-0.44,-2.3l2.36,-1.73l0.55,-2.73l-3.09,-0.95l-2.35,1.21l-1.24,-0.19l-2.26,-2.08l-3.43,-4.7l1.61,-1.01l4.69,-0.68ZM827.4,1160.64l-1.9,0.67l-11.56,-1.21l-3.32,-3.92l1.03,-2.91l1.38,-0.74l10.58,3.06l3.43,2.55l0.72,1.47l-0.37,1.04ZM664.91,1227.89l0.0,0.18l-6.3,-0.89l1.85,-0.72l2.13,-3.1l0.76,0.03l0.76,0.88l-1.02,1.84l1.83,1.78ZM623.05,1234.61l0.16,1.25l2.31,-0.29l5.0,-4.47l2.03,-1.19l1.79,-0.1l13.05,4.47l3.03,0.11l0.83,0.53l-0.03,1.37l1.39,0.28l1.62,2.45l-0.93,0.81l-4.57,1.36l-2.54,1.89l-0.81,1.25l-0.22,4.07l-9.32,2.31l-2.99,-0.72l-14.78,-9.13l-1.16,-0.36l-5.03,0.97l1.22,-1.87l3.31,-2.39l6.66,-2.62Z", "name": "South East"}, "UKI": {"path": "M716.63,1157.39l-4.59,-3.04l-2.59,-0.57l-0.98,-2.75l-2.67,-0.55l-1.75,-1.87l1.0,-1.78l1.13,-6.4l-1.84,-4.72l0.92,-2.61l1.69,0.65l7.27,-0.4l4.73,-2.32l5.72,-1.12l1.36,-3.15l1.96,1.94l3.87,-1.44l2.15,-2.5l11.33,1.31l0.02,3.15l2.81,1.42l0.95,1.9l4.85,2.34l1.22,-0.31l1.34,-1.36l11.26,-1.41l1.94,3.76l1.43,1.29l1.87,0.52l2.08,3.92l-4.35,1.35l-0.72,1.12l-2.34,-0.02l-0.45,2.28l-2.05,1.65l0.25,1.71l-0.82,1.43l-4.39,4.59l0.63,3.51l-1.13,3.67l-4.97,4.94l-0.38,2.63l-1.72,0.53l-1.95,-1.38l-1.81,0.49l-0.59,-3.11l-1.65,-1.36l-2.31,-0.15l-1.92,1.75l-3.27,0.54l-1.59,2.11l-1.93,0.35l-1.79,-1.43l-2.64,-4.28l-3.16,0.99l-0.01,-2.45l-2.17,-2.36l-2.69,1.3l-2.22,3.77l-1.01,0.34l-0.18,-2.02l1.42,-2.94l-1.41,-2.73l-3.12,-0.71Z", "name": "London"}, "UKH": {"path": "M700.34,1109.67l0.41,-1.29l-2.37,-3.36l-3.74,-3.06l-2.11,0.3l-2.94,-2.2l-2.04,-0.67l1.35,-3.4l2.43,-2.94l-0.93,-3.19l1.65,-1.93l0.38,-2.77l-0.77,-1.28l-1.32,-0.3l1.07,-1.32l2.06,-0.76l-0.23,-1.33l4.04,-3.15l-1.34,-2.6l-3.58,-3.14l0.68,-3.49l-2.57,-1.83l1.59,-2.66l-0.8,-4.17l0.12,-0.46l4.06,-0.75l2.72,2.08l1.51,0.26l1.06,-0.5l0.78,-1.6l0.0,-2.5l1.74,-2.07l4.02,-1.09l-0.3,-1.9l-2.01,-2.79l0.08,-1.57l4.83,-1.88l0.98,-1.65l2.9,-1.92l3.73,-4.11l0.45,-1.31l-1.29,-4.27l-4.83,-2.4l0.68,-2.67l-1.43,-1.75l0.11,-1.67l-0.45,-0.42l-3.93,0.46l-0.79,-0.5l0.61,-4.74l-1.77,-2.89l1.37,-0.52l2.68,0.75l2.91,-0.03l7.53,-3.08l4.67,1.84l5.18,-0.98l1.63,1.63l1.88,-0.28l1.88,0.65l3.33,-1.52l1.68,0.19l2.6,-0.93l4.33,1.23l3.13,-0.12l1.49,-1.15l0.79,-1.62l-0.32,-3.52l0.4,-0.36l3.21,-0.31l4.41,-1.97l4.49,0.35l6.64,-4.06l0.3,-1.33l-1.25,-1.37l1.22,-2.96l3.67,0.24l1.26,0.6l2.52,2.9l1.27,0.54l0.56,-0.37l-0.42,-2.53l5.02,-5.7l1.62,-6.08l2.45,-4.76l2.89,-2.46l4.17,-1.61l4.58,-0.73l4.16,0.14l0.03,-1.05l1.12,-0.34l5.6,1.38l7.42,0.01l11.46,3.15l4.16,-1.5l-0.09,-0.81l22.41,4.44l10.44,4.4l21.43,13.49l4.45,5.09l4.3,12.21l-0.54,2.37l0.53,1.95l0.05,6.42l2.02,5.48l-1.4,2.02l-2.18,6.03l-0.13,2.26l-3.81,8.27l-4.64,6.46l0.02,8.2l-3.74,12.98l-7.0,2.78l-1.37,1.26l-1.59,-0.5l-0.73,2.43l-3.29,3.77l-7.6,6.96l-5.71,-6.1l-2.68,-0.78l-4.41,-2.89l-2.36,-0.4l-0.47,0.39l0.15,1.1l4.94,3.53l4.83,1.14l0.08,2.12l-1.61,-0.32l-3.83,0.71l-3.55,-1.57l-8.71,1.93l2.66,1.34l14.43,0.76l1.24,-0.56l-0.18,1.26l-6.71,5.71l0.04,0.64l1.18,0.74l4.6,0.9l1.63,-1.53l0.08,1.44l-0.93,1.66l-4.85,3.74l-4.4,2.46l-2.74,0.96l-7.44,0.55l-6.02,-7.7l-0.54,2.4l-1.15,1.1l-3.12,1.26l-3.32,2.37l-1.22,4.02l-3.13,1.54l-3.66,-0.85l-2.33,0.21l-5.99,2.26l0.02,0.73l4.25,1.27l1.53,1.82l2.38,-1.94l5.5,-1.01l5.16,-2.61l1.26,-0.2l1.09,0.93l-0.66,3.02l1.07,3.02l-1.06,1.61l-0.24,3.17l-2.07,1.76l3.39,0.65l-2.18,3.04l-4.35,3.27l-4.87,2.53l-3.78,0.99l-10.49,-0.85l-2.47,1.61l-3.46,0.6l-1.08,0.82l-1.41,-0.99l-8.45,1.43l-1.5,3.45l-1.03,1.04l-6.03,2.3l-1.4,-0.23l-1.53,-2.13l-4.12,0.79l-4.6,-1.74l2.18,-2.25l0.4,-2.05l1.78,0.32l0.97,-1.24l4.7,-1.46l0.21,-0.61l-2.36,-4.38l-3.34,-1.82l-2.2,-4.05l-11.85,1.37l-2.37,1.65l-4.35,-2.18l-0.93,-1.89l-2.68,-1.38l0.41,-1.74l-0.71,-1.57l-11.85,-1.37l-2.41,2.65l-3.51,1.22l-0.94,-1.47l-1.27,-0.36l-1.42,3.19l-5.53,1.08l-4.61,2.3l-7.17,0.38l-0.81,-0.65l-1.3,0.08l-1.03,2.71l-1.78,-1.58l-0.55,-1.81l0.13,-1.67l2.17,-2.98l0.17,-1.09l-1.31,-0.85l-2.22,0.4l-1.11,-3.47l2.15,-1.88l-0.1,-1.24l-1.51,-0.73l-2.08,0.71l-2.18,-1.89l-3.6,0.03l-2.48,-1.05l-0.86,-1.06l-0.55,-3.2l-1.59,-1.41l-1.19,-0.21l-1.47,-1.8l1.22,-1.98l0.73,-0.11l2.05,0.68l-0.14,1.56l1.95,2.05l6.61,1.26l2.64,-2.29l1.39,0.22Z", "name": "East"}, "UKG": {"path": "M474.94,995.46l-0.97,-3.61l2.62,-2.95l-0.45,-3.38l2.25,-1.38l1.66,-2.35l6.55,-3.73l3.25,-0.23l3.27,2.18l4.24,-0.92l1.98,0.25l4.91,4.04l1.52,0.48l5.75,-2.6l0.21,-2.68l-0.88,-2.51l8.61,-2.13l2.6,0.94l1.4,2.81l1.59,-0.3l2.57,1.03l1.55,-1.6l2.67,0.8l2.72,-0.31l1.76,-1.0l0.73,-1.62l3.7,-1.23l1.25,-1.37l-0.54,-4.55l0.57,-1.45l2.62,-0.53l2.47,-2.57l2.85,0.16l2.39,-0.85l7.58,-7.38l2.18,-0.56l0.31,-1.22l-0.68,-1.33l2.86,0.98l2.89,0.0l3.41,-2.23l2.31,-0.27l2.42,-2.43l1.75,-0.64l1.76,2.12l6.51,2.18l2.74,1.52l1.69,1.62l0.37,3.51l2.31,3.19l-0.36,2.25l0.6,3.42l1.88,2.41l0.15,2.32l-0.95,1.84l-4.6,2.42l-0.58,3.82l-2.06,0.85l-0.05,2.31l1.22,1.83l0.25,1.66l3.52,1.38l2.67,0.06l2.96,2.4l7.86,0.52l1.76,1.13l1.26,1.92l-1.92,1.45l-1.17,2.86l-3.78,1.71l-2.33,4.28l1.78,1.41l2.85,0.87l0.81,2.61l1.56,0.16l1.21,-0.99l0.74,0.77l1.15,0.05l4.14,4.81l-0.17,0.96l-1.91,1.45l1.37,2.31l-0.01,2.63l2.32,0.72l2.06,2.13l6.66,2.44l1.91,2.67l8.78,3.81l4.46,6.12l2.58,1.27l3.88,7.41l-1.14,0.93l-5.95,2.19l0.82,1.73l2.94,0.73l-1.66,1.94l1.23,1.61l0.06,2.19l-4.78,2.47l-0.17,1.18l1.69,1.85l-0.19,0.79l-4.65,1.66l-2.66,3.36l-0.72,2.09l-2.68,1.79l-0.03,0.64l1.7,1.4l-0.33,0.61l-1.52,0.31l-2.29,-1.73l-1.92,-0.2l-1.32,0.57l-0.01,1.53l-2.47,0.25l-2.53,3.61l-0.05,2.3l-1.77,5.74l-2.2,0.39l-0.63,1.82l-2.85,0.2l-0.86,1.34l-4.44,-3.06l3.41,-4.54l-0.13,-0.56l-1.03,-0.5l-3.04,0.4l-1.28,-0.41l-2.68,-3.81l-0.78,-2.23l-1.99,-0.74l-2.18,-1.91l-1.91,0.9l-2.93,3.31l-2.6,-0.38l-1.93,1.47l0.17,0.94l1.25,0.54l1.67,2.02l-0.24,2.5l-3.73,-2.32l-5.63,-0.26l-2.6,0.53l-5.05,2.95l-3.38,-0.86l-3.06,-0.01l-2.03,1.32l-0.72,-0.8l2.31,-3.9l-0.36,-0.6l-4.32,0.19l-0.88,1.11l-0.5,3.07l1.18,1.43l-0.75,0.49l-3.11,-0.17l-2.16,2.94l-1.27,0.14l-4.6,-1.19l-3.27,-4.85l-2.36,0.32l-2.27,2.08l-1.49,0.53l-1.13,-0.46l-1.17,-2.24l-1.69,-0.74l-1.52,2.83l0.34,1.3l-0.94,1.37l-0.22,1.97l1.87,1.48l0.56,2.11l1.71,1.58l0.0,1.69l-2.91,1.5l-3.0,0.31l-1.4,2.41l-2.57,-0.26l-2.43,0.84l-0.68,1.05l-1.07,-0.13l-1.52,0.82l-0.64,-1.43l-0.94,-0.24l-0.9,1.07l-0.45,2.68l-0.66,0.32l-3.64,-2.33l-3.09,-0.34l-3.16,-3.83l-8.48,-6.27l-2.18,0.34l-3.98,1.97l-1.44,-0.25l-1.77,-1.3l-1.26,-2.56l-2.72,-2.12l-4.38,-6.06l-0.69,-4.09l-3.04,-2.41l0.84,-2.98l1.08,-1.56l-2.02,-1.72l3.1,-1.14l1.1,-1.57l-0.43,-0.87l-1.78,-0.17l-0.57,-1.23l3.49,-4.19l1.31,-2.67l3.28,-2.49l3.76,-0.35l1.17,-0.81l-0.33,-1.33l-2.83,-1.0l-0.45,-1.63l0.64,-1.36l2.91,-2.11l0.15,-1.84l-10.11,-0.99l-2.81,-2.45l-8.25,-5.16l-0.92,-1.39l-0.26,-2.12l1.58,-2.17l6.56,-2.81l7.58,-0.66l4.83,-4.9l-0.39,-1.91l-2.15,-2.04l-1.16,-0.21l-5.06,2.97l-1.3,1.64l-1.77,0.2l0.46,-1.82l-1.4,-3.52l3.73,-2.65l1.55,-4.26l2.39,-1.46l0.69,-4.41l1.2,-2.39l3.29,-0.84l1.4,-1.97l-3.67,-3.5l-5.04,-1.11l-1.73,-1.81l-3.12,-0.34l-2.11,-1.19Z", "name": "West Midlands"}, "UKF": {"path": "M649.51,1087.36l-1.67,1.84l-2.08,0.24l-1.75,1.06l-6.13,0.21l-3.15,-6.94l0.23,-3.62l-0.65,-0.66l4.65,-1.19l0.8,-1.32l-7.11,-7.43l0.22,-0.75l1.11,-1.06l4.63,-1.62l0.44,-1.88l-1.65,-2.03l4.99,-2.83l-0.07,-2.61l-1.16,-1.19l1.62,-2.41l-3.81,-1.76l5.47,-1.89l1.66,-1.57l-0.23,-1.42l-3.83,-6.6l-2.64,-1.33l-4.63,-6.26l-8.74,-3.79l-2.01,-2.72l-6.65,-2.43l-1.91,-2.03l-2.28,-0.76l0.21,-2.25l-1.23,-2.06l1.76,-1.07l0.14,-1.71l-4.53,-5.18l-1.25,-0.05l-1.19,-0.87l-1.09,1.07l-1.08,-0.11l-0.72,-2.54l-3.0,-0.92l-1.3,-1.07l2.15,-3.35l3.64,-1.58l1.4,-3.13l2.0,-1.43l-1.42,-2.85l-2.23,-1.42l-7.74,-0.48l-3.06,-2.44l-2.71,-0.06l-1.16,-0.81l-1.76,-0.2l-0.29,-1.63l-1.12,-1.55l0.04,-1.8l1.31,-0.16l0.71,-0.77l0.44,-3.55l4.66,-2.53l1.1,-2.26l-0.17,-2.61l-1.89,-2.37l-0.58,-3.31l0.3,-2.52l-2.33,-3.22l-0.49,-3.68l-4.67,-3.33l-6.5,-2.18l-1.68,-2.12l-1.9,0.4l0.39,-2.0l-1.73,-1.64l-0.63,-10.94l-0.35,-1.52l-1.4,-1.76l3.1,-4.27l-2.64,-2.25l2.64,-2.81l1.51,-5.67l3.78,-0.75l1.89,-3.76l2.01,0.09l4.57,1.84l1.64,2.09l0.75,3.36l4.77,3.26l-0.45,2.19l0.52,1.58l2.65,0.8l1.23,1.97l3.45,1.14l-0.62,1.93l0.54,1.1l5.61,2.31l-2.36,1.48l-0.27,1.33l2.49,0.74l1.49,-0.29l3.57,1.76l6.28,-2.03l2.37,-1.95l3.09,-0.18l0.64,0.29l0.39,1.83l2.0,0.81l2.5,0.13l1.9,-1.77l1.84,-0.31l0.45,2.05l1.69,0.09l1.55,0.87l5.97,-0.2l3.79,-3.96l-0.53,-1.53l1.64,-0.73l0.81,-1.43l-0.29,-2.69l2.48,-2.68l1.7,-1.12l3.01,-0.09l1.31,0.62l1.11,-0.48l2.44,-2.69l0.73,-3.4l3.99,-2.63l2.08,1.6l-1.42,0.72l0.36,1.01l9.56,0.72l4.62,-4.15l0.7,-3.08l10.21,0.97l0.35,1.57l-0.97,3.01l1.74,1.59l3.24,0.22l5.33,-1.29l3.78,-1.5l-0.32,-1.76l0.89,-1.7l4.97,-0.69l1.38,-1.22l-0.25,-1.23l-1.28,-0.87l-6.03,-0.33l4.69,-2.95l5.4,1.18l2.52,-0.36l3.18,-2.95l0.23,-2.73l3.87,1.97l2.45,2.73l3.19,0.28l-2.34,3.18l1.15,3.94l-0.53,2.72l6.8,6.35l1.52,-0.05l2.5,-1.77l-1.52,-2.56l2.86,-5.47l0.97,-0.53l1.77,0.3l3.87,-1.29l6.21,4.15l4.85,1.49l1.26,1.21l0.77,3.24l3.44,1.97l-0.25,1.03l1.45,0.89l2.2,3.34l7.45,17.51l1.2,4.37l0.03,4.91l-2.18,6.68l-4.03,1.35l-7.76,6.42l-2.81,1.33l-6.88,8.3l-1.73,1.52l-3.5,1.57l-1.18,1.63l0.07,1.7l3.01,0.52l4.49,-0.86l6.55,3.46l6.55,7.75l2.42,-0.89l-1.15,2.78l1.23,2.16l-6.39,3.9l-4.24,-0.4l-4.62,2.02l-3.39,0.39l-0.78,0.93l0.37,3.39l-1.89,2.3l-2.6,0.06l-4.64,-1.24l-2.63,0.94l-1.75,-0.18l-2.98,1.48l-1.81,-0.63l-1.94,0.24l-1.66,-1.64l-5.3,1.0l-4.79,-1.84l-7.46,3.08l-2.77,0.03l-2.64,-0.76l-2.33,0.8l-0.14,0.66l1.99,2.96l-0.47,5.08l1.39,0.77l3.6,-0.42l0.03,1.67l1.3,1.33l-0.5,3.22l4.95,2.46l1.0,3.71l-3.93,4.76l-2.87,1.88l-0.88,1.57l-5.19,2.27l-0.02,2.22l2.04,2.82l0.16,1.24l-3.69,0.74l-1.92,2.29l-0.09,2.82l-1.05,1.38l-1.24,-0.21l-1.54,-1.7l-1.33,-0.41l-4.57,0.8l-0.54,1.13l0.8,4.16l-1.61,2.54l-6.26,3.48l-2.75,-0.09l-1.42,1.75l-2.78,-0.41l-1.56,2.77l-4.44,1.29l-0.24,1.56l4.35,4.57l-2.12,0.53l-0.37,2.29l-2.69,2.19l-0.59,0.1l-3.26,-5.93l-1.3,-0.41l-3.46,1.23l-2.73,-0.19l-1.39,1.32l-5.07,1.1l-2.03,1.06l-2.07,2.07l0.16,0.66l1.9,0.65Z", "name": "East Midlands"}, "UKE": {"path": "M668.83,917.65l1.01,-0.71l-0.13,-0.85l-2.93,-1.92l-4.37,2.88l-0.82,3.52l-2.25,2.49l-5.09,-0.19l-2.04,1.28l-2.72,2.91l0.24,2.85l-0.5,1.01l-1.92,0.86l0.49,1.69l-2.44,2.07l-0.84,1.49l-5.42,0.24l-3.01,-0.98l0.09,-1.62l-1.07,-0.47l-2.14,0.36l-1.83,1.76l-2.14,-0.15l-1.6,-0.67l-0.14,-1.5l-1.36,-0.79l-3.32,0.19l-2.51,2.01l-6.04,1.95l-3.24,-1.72l-3.49,-0.15l2.45,-1.67l0.15,-1.09l-1.07,-0.97l-4.81,-1.61l0.19,-2.95l-3.75,-1.31l-1.1,-1.89l-2.58,-0.78l0.14,-3.58l-4.77,-3.19l-0.73,-3.32l-1.78,-2.26l-4.9,-2.03l-2.24,-0.12l-6.76,-7.03l-0.93,-2.37l-2.55,-0.66l-0.54,-2.21l-0.92,-0.95l0.19,-2.05l-1.21,-2.28l-2.02,-0.25l-2.79,1.35l-1.54,-1.19l-1.22,-0.0l-1.45,-1.54l-0.72,-3.08l3.15,-3.34l0.18,-4.39l2.0,-2.09l4.26,-1.73l1.35,-2.92l-3.04,-2.19l-2.61,-2.94l-0.86,-3.28l-5.79,-2.45l-0.35,-1.99l-1.12,-1.5l-2.87,-0.4l-0.79,-1.74l-3.95,1.48l-0.82,-0.1l-1.33,-2.17l-2.87,-0.22l-0.81,-0.99l0.65,-2.17l-1.68,-2.96l-2.39,-0.36l-3.95,0.88l-1.67,-0.2l-0.63,-0.65l-0.09,-2.75l-0.81,-1.19l-4.55,-2.18l-2.11,-1.84l-0.49,-1.56l0.3,-2.4l2.48,-1.2l5.61,-6.68l0.5,-1.41l3.76,0.22l1.79,-1.65l2.36,-0.95l2.1,1.11l1.71,-0.3l0.75,-0.77l0.39,-2.18l-0.92,-2.01l0.38,-4.83l-0.73,-1.28l-2.66,-1.96l5.24,-3.67l0.14,-1.9l-0.98,-2.54l1.44,-1.88l2.6,-1.4l4.51,0.09l2.05,-1.44l2.72,1.08l3.34,-2.16l4.53,-1.35l3.2,0.83l4.36,2.14l2.55,-0.02l6.9,-3.09l0.33,-1.73l0.96,-1.06l3.82,2.6l0.63,-0.2l1.68,-3.73l0.09,-1.64l1.13,-0.17l2.0,0.64l1.23,-0.78l4.21,0.09l1.51,0.78l0.79,1.72l3.1,-0.29l1.78,2.63l3.92,2.92l1.36,-0.09l0.02,-1.64l1.93,0.17l1.78,3.45l1.54,1.0l0.96,-0.33l0.51,-1.05l-1.76,-4.01l0.35,-1.38l1.55,0.77l0.59,1.28l1.32,0.41l1.08,-1.67l1.42,0.35l0.7,-0.45l0.64,0.34l1.01,2.68l2.3,0.0l0.92,0.6l6.78,-3.02l1.23,-1.48l2.68,-0.68l7.5,0.92l3.46,-0.81l4.03,1.47l4.52,-0.88l3.87,1.58l4.37,-1.07l3.58,1.0l0.51,-0.38l0.05,-3.34l0.66,-1.55l1.16,-1.14l2.2,-0.77l0.83,-1.08l18.34,9.39l2.36,1.89l0.95,1.52l0.29,3.37l5.0,3.72l1.25,1.82l2.49,5.72l0.36,3.26l1.94,1.78l-0.35,1.73l2.33,2.55l0.85,0.71l3.47,0.76l3.75,2.12l1.36,4.69l2.41,2.13l10.67,3.5l2.52,1.86l-7.15,3.22l-2.75,2.63l-2.13,5.06l1.88,3.29l4.06,11.43l24.61,30.35l1.31,3.71l-1.01,3.61l-0.95,0.72l1.22,-2.37l0.22,-2.42l-7.01,-3.66l-1.88,-0.57l-1.89,0.32l-5.14,2.08l-5.64,-1.36l-9.66,-9.67l-3.28,-1.96l-4.04,-0.5l-10.85,3.0l-6.82,0.0l-2.91,0.56l-3.0,-2.18l-5.15,-0.46l-1.93,0.51l-6.12,3.63l3.09,1.87l1.82,-1.84l4.72,-1.0l1.9,0.42l6.01,3.61l3.8,-1.99l15.33,-2.31l2.19,0.77l7.8,10.16l3.95,1.72l4.19,3.49l4.25,0.8l5.39,5.02l-3.2,0.99l-1.94,-0.27l-1.36,0.82l-2.98,5.7l0.25,1.33l1.18,1.11l-2.77,1.47l-2.45,-2.78l-3.9,-2.96l0.49,-2.75l-1.12,-3.82l2.23,-2.43l0.06,-1.14l-3.49,-0.54l-2.51,-2.75l-4.26,-2.17l-1.0,0.9l0.05,2.25l-2.94,2.74l-1.97,0.24l-5.79,-1.15l-5.22,3.28l0.24,1.2l6.44,0.35l0.88,1.17l-0.77,0.59l-5.07,0.71l-1.38,2.27l0.42,1.51l-3.33,1.17l-5.21,1.26l-2.85,-0.19l-1.21,-1.1l0.99,-2.67l-0.66,-2.3l-10.99,-1.15l-1.06,3.41l-4.1,3.84l-8.61,-0.59Z", "name": "Yorkshire and the Humber"}, "UKD": {"path": "M482.88,736.0l1.41,-3.57l0.48,-4.03l3.91,1.37l2.29,-0.18l2.35,-3.37l3.82,-1.8l5.24,-6.2l6.51,-2.49l2.45,-1.36l2.74,-2.59l2.29,5.33l1.23,1.46l3.72,1.1l1.0,2.5l2.72,1.59l0.62,1.05l3.92,-0.62l1.12,0.58l-0.52,0.52l0.02,2.13l0.93,1.91l-6.54,3.21l-0.69,0.98l-0.07,2.23l-1.99,2.23l0.13,0.63l2.16,0.99l0.62,2.26l1.13,1.51l-1.32,0.86l-0.89,2.6l-2.05,1.66l2.35,2.98l-0.34,2.57l0.58,1.54l2.74,2.06l3.1,0.4l8.54,-5.0l3.24,4.27l4.69,3.14l-1.83,6.37l-2.26,4.79l0.95,1.16l5.34,2.74l-0.43,1.67l-1.75,1.85l1.8,4.85l6.62,4.38l1.49,2.42l2.45,0.54l0.41,4.77l0.65,1.51l-0.3,1.47l-1.08,-0.25l-2.12,1.49l-4.45,-0.11l-2.77,1.49l-1.82,2.62l1.03,3.83l-5.36,3.76l0.4,1.48l2.5,1.55l0.48,0.94l-0.43,4.43l0.92,2.13l-0.27,1.75l-1.76,0.68l-2.22,-1.11l-2.62,1.06l-1.55,1.55l-3.88,-0.22l-6.51,8.43l-2.58,1.35l-0.32,2.88l0.67,1.93l2.24,1.95l4.45,2.1l0.59,0.78l0.09,2.78l0.95,1.13l2.11,0.35l4.08,-0.88l2.01,0.32l1.24,2.69l-0.7,1.98l1.08,1.32l3.09,0.36l1.31,2.16l1.32,0.11l3.47,-1.3l0.6,1.43l2.82,0.37l1.47,3.51l5.8,2.46l0.7,3.08l2.72,3.06l2.75,1.72l-1.06,2.23l-4.09,1.61l-2.31,2.37l-0.18,4.39l-3.21,3.41l0.62,3.63l1.76,1.99l1.4,0.1l1.89,1.29l4.11,-1.42l1.2,2.17l-0.28,1.76l1.0,1.17l0.57,2.34l2.6,0.72l0.99,2.41l6.66,6.9l-1.7,3.51l-3.92,0.85l-1.64,5.94l-2.65,2.88l0.35,1.4l2.27,1.32l-3.11,4.03l1.53,2.15l0.46,9.67l0.43,2.64l1.66,1.44l-0.45,2.33l-2.29,2.31l-2.21,0.22l-3.17,2.15l-2.66,0.0l-1.94,-1.03l-1.36,0.09l-0.5,0.71l0.54,2.1l-1.98,0.4l-7.61,7.41l-2.07,0.7l-2.81,-0.19l-2.82,2.74l-2.8,0.68l-0.72,1.96l0.62,4.15l-0.88,1.03l-3.77,1.25l-0.82,1.7l-1.42,0.83l-2.39,0.31l-2.85,-0.86l-1.5,1.59l-2.39,-0.96l-1.6,0.24l-1.13,-2.65l-2.88,-1.04l-9.18,2.21l-3.46,-1.72l-4.17,-0.84l-3.13,-3.81l-1.37,-5.08l-2.31,-4.27l-5.11,-4.84l3.77,-2.73l-0.49,-2.72l-3.35,-3.16l-5.56,-3.67l-5.38,-1.32l-0.08,-1.94l-4.39,-6.83l-4.27,-5.05l-0.08,-1.57l0.78,-0.98l6.91,-1.67l3.11,-2.02l1.69,0.1l1.86,1.85l5.17,10.97l3.73,3.3l2.76,1.01l2.68,-0.09l1.2,-1.6l2.66,0.72l2.8,-0.43l2.37,-1.14l-0.24,-1.89l0.79,-1.6l0.55,-0.5l1.57,0.09l1.62,-1.13l-0.24,-0.7l-1.25,-0.06l-4.46,0.86l-1.25,0.75l-0.55,1.55l-1.25,0.52l-3.67,-0.33l-3.62,-1.12l-3.25,-1.89l-4.74,-4.94l-10.41,-19.31l1.17,-3.25l5.67,-7.66l6.05,-6.5l4.58,-3.27l-0.3,-0.66l-7.37,-0.08l-3.01,-1.09l-2.25,-2.64l-0.6,-3.81l0.99,-8.89l-0.97,-3.25l1.22,-1.82l1.88,-0.94l7.88,-2.44l1.25,-0.12l1.76,0.9l2.92,-2.56l-0.58,-1.64l2.71,-2.26l0.52,-2.15l-0.6,-0.42l-2.9,1.34l-2.45,0.22l-1.65,-3.28l4.91,-5.31l2.89,-1.02l2.71,-4.4l-4.92,-8.12l3.66,-2.18l1.31,-2.09l0.0,-2.51l-0.99,-0.39l-1.83,3.31l-7.22,4.03l-1.46,3.1l-1.42,0.72l-3.69,0.22l-0.98,-0.65l-1.56,-3.28l0.73,-1.45l-0.66,-1.45l-1.91,-1.79l-1.5,0.45l-0.13,3.57l-1.1,3.73l-4.84,6.22l-2.51,1.32l0.05,3.38l-3.26,-3.39l-2.68,-0.4l-1.57,-1.12l0.65,-5.46l-1.32,-1.4l2.87,-0.96l0.73,-3.57l-0.06,-6.4l-0.57,-0.38l-1.36,0.64l-0.89,1.41l-0.87,3.09l0.65,2.2l-5.89,1.04l-1.66,-1.35l-6.77,-8.6l-0.43,-1.75l0.75,-2.89l-0.93,-3.27l-2.32,-1.08l-2.88,-4.86l-2.1,-1.57l-8.12,-9.2l-1.83,-1.0l-1.6,-2.36l1.79,-1.81l1.83,-4.16l2.31,-9.37l4.12,-8.38l1.15,-1.38l2.93,-1.21l2.56,-3.29l0.74,-2.28l-0.75,-2.16l4.42,-10.09l1.9,-1.85l1.42,-0.27l3.46,1.94l4.61,-1.67l0.05,-0.71l-1.1,-0.69l-3.79,-1.56l2.94,-2.28l5.29,-1.29l2.8,1.62l5.05,0.98l7.43,-1.79l1.72,-1.33l-5.95,-0.3l3.92,-1.36l1.53,0.49l0.52,-0.38l-0.26,-1.27l-2.17,-0.79Z", "name": "North West"}, "UKC": {"path": "M620.17,725.93l3.72,8.4l3.75,3.08l0.58,1.16l-0.02,4.58l0.8,1.66l-0.17,1.05l5.12,14.95l1.87,3.83l3.18,3.38l5.72,2.39l-1.37,0.21l-0.38,0.95l2.28,4.42l-1.21,1.21l-2.01,0.73l0.06,1.49l2.15,0.92l0.71,-0.79l0.88,1.68l1.04,-0.16l0.84,-0.95l0.59,-2.63l2.64,2.19l5.33,0.91l4.23,2.26l18.1,4.64l-4.17,2.97l-0.75,1.85l-0.04,2.9l-3.18,-0.89l-4.51,1.05l-1.83,-1.2l-1.96,-0.36l-4.62,0.88l-3.82,-1.45l-3.61,0.8l-7.65,-0.91l-2.88,0.73l-1.31,1.52l-6.43,2.87l-0.68,-0.55l-2.17,0.0l-0.59,-2.26l-1.27,-0.81l-2.83,0.33l-0.58,1.42l-0.77,-0.24l-1.35,-1.96l-1.32,-0.2l-1.09,0.94l0.06,1.52l1.71,3.64l-0.73,0.66l-2.79,-4.29l-2.9,-0.35l-0.42,0.5l0.34,1.26l-0.45,0.07l-3.71,-2.76l-1.09,-2.18l-0.98,-0.63l-2.73,0.43l-0.91,-1.74l-1.73,-0.9l-4.62,-0.14l-1.06,0.75l-1.88,-0.6l-1.74,0.22l-1.92,5.33l-3.91,-2.43l-1.58,1.45l-0.19,1.53l-6.61,2.96l-2.03,0.03l-4.31,-2.11l-3.42,-0.89l-4.91,1.4l-3.3,2.12l-0.93,-0.47l0.36,-1.78l-0.67,-1.68l-0.43,-5.01l-2.63,-0.73l-1.57,-2.46l-6.48,-4.23l-1.61,-4.35l2.19,-2.65l-0.18,-1.35l-6.17,-3.73l2.22,-4.25l1.76,-7.14l-4.88,-3.27l-3.64,-4.47l-8.67,5.02l-2.68,-0.3l-2.41,-1.74l-0.48,-1.26l0.56,-1.36l-0.26,-1.37l-2.24,-2.71l1.72,-1.05l1.06,-2.81l1.53,-1.39l-1.3,-1.67l-0.65,-2.37l-2.06,-1.1l1.73,-1.93l0.63,-3.06l6.68,-3.24l-0.85,-2.66l0.57,-2.9l-2.01,-0.94l-3.35,0.77l-0.67,-1.03l-2.69,-1.57l-1.11,-2.59l-3.61,-1.0l-3.55,-6.81l1.77,-2.27l3.48,-2.34l0.35,-1.7l-0.62,-2.21l0.44,-0.65l5.85,-5.4l7.61,-5.53l2.93,-0.62l4.29,1.22l2.51,-1.51l2.19,-3.64l2.5,-0.9l2.04,-1.59l3.51,-0.8l3.87,-2.95l0.41,-2.5l-2.45,-2.98l-0.37,-2.24l-3.44,-4.91l-1.91,-4.82l-2.05,-2.94l-1.96,-1.12l-0.22,-1.49l7.28,-1.34l5.37,-6.3l1.18,-2.22l6.57,-4.59l1.19,-4.04l4.31,-1.59l12.42,13.25l2.14,4.3l1.91,1.13l1.32,2.17l1.19,-0.1l1.29,-1.43l0.74,0.08l1.92,1.3l0.49,1.12l-1.56,0.4l0.23,1.11l1.31,0.52l4.7,-0.5l5.64,3.23l-0.32,2.34l1.25,1.59l-0.74,0.47l-0.19,1.16l2.42,1.86l-0.65,1.92l1.88,1.49l0.33,1.28l0.31,8.05l-0.68,4.95l0.59,2.78l2.08,3.05l0.23,1.97l-1.2,2.9l0.14,1.03l1.1,3.15l2.9,2.95l-0.56,1.68l1.76,2.46l-1.18,3.09l0.36,1.51l1.89,2.71l1.4,5.98l1.82,0.93l0.28,0.91Z", "name": "North East"}}, "height": 1327.4309048516907, "projection": {"type": "mill", "centralMeridian": 0.0}, "width": 900.0});
jQuery.fn.vectorMap('addMap', 'au_mill',{"insets": [{"width": 900, "top": 0, "height": 825.8587272481366, "bbox": [{"y": 1031999.3824222308, "x": 12576510.61983689}, {"y": 5192718.429891739, "x": 17110757.239958208}], "left": 0}], "paths": {"AU-ACT": {"path": "M794.2,620.06l-0.74,-0.7l-0.09,-0.95l-0.36,-0.43l0.22,-1.71l-0.27,-2.16l0.77,-2.93l-0.05,-0.84l6.7,-4.73l1.06,0.71l0.19,1.03l1.04,0.47l0.25,0.8l3.09,1.34l-0.61,0.33l-1.7,-0.25l-0.96,0.77l-0.84,-0.15l-1.45,1.71l-0.17,1.19l0.29,1.03l-0.43,1.37l-0.65,0.31l-0.33,0.73l0.4,2.65l-0.21,1.28l0.21,1.77l-1.05,1.68l-2.23,-1.11l-0.91,-3.56l-0.69,-0.11l-0.47,0.47Z", "name": "Australian Capital Territory"}, "AU-WA": {"path": "M6.6,387.61l0.55,0.12l0.14,0.51l-0.53,-0.45l-0.17,-0.19ZM7.72,388.83l0.24,0.12l0.33,-0.36l0.25,-1.88l0.27,3.72l0.73,1.63l0.65,0.38l0.49,-0.49l-0.61,-1.76l0.15,-1.63l0.33,-1.03l0.82,-0.4l1.14,4.7l-0.39,2.66l0.63,0.22l0.46,-0.25l0.41,-2.32l0.3,1.37l-0.02,2.86l0.4,0.42l0.65,-0.13l0.68,-1.56l-0.23,1.81l0.19,0.65l0.56,0.11l0.06,0.77l0.36,0.43l0.8,-0.35l0.09,-0.63l1.3,-0.42l1.02,0.13l0.38,-0.38l0.02,-0.62l0.79,-0.46l0.79,-1.28l-0.06,-3.96l-2.55,-2.57l0.59,-0.23l1.75,-3.47l0.09,1.5l0.71,0.53l-0.18,0.96l0.76,3.32l2.34,2.72l0.6,0.35l0.68,-0.11l1.16,-1.26l1.23,-0.64l0.55,-1.29l-0.87,-3.09l0.79,-2.79l-0.6,-1.51l1.07,-0.16l0.39,-0.55l-0.72,-1.27l0.61,-1.46l-0.09,-0.7l-2.36,-1.46l-0.59,-1.71l-0.86,-1.09l-0.91,-0.56l-0.72,-1.77l-1.89,-2.76l-2.79,-6.56l-2.47,-1.63l-0.96,-2.54l0.46,-1.39l-0.29,-0.67l-0.94,-0.51l-0.1,-1.02l0.34,-0.94l-0.39,-1.7l-3.69,-4.68l-0.99,-2.6l-0.13,-3.78l1.02,-1.7l-0.38,-2.91l0.9,-1.39l0.08,-1.79l0.92,-1.34l0.55,-2.07l0.74,-0.57l0.93,-2.6l1.74,-1.11l0.34,-0.63l0.87,-0.58l0.77,-1.85l0.3,-3.12l-0.75,-3.77l0.15,-0.79l0.68,-0.52l0.55,-1.19l-0.08,-2.98l-1.15,-3.51l-1.11,-1.18l-0.87,-0.35l0.15,-0.99l-0.54,-2.12l0.86,-0.68l0.97,-1.48l0.35,-1.79l1.25,-1.66l2.07,-6.51l1.07,-2.22l1.85,-2.53l2.4,-0.92l-1.0,2.44l-1.13,5.93l1.02,2.36l-0.31,1.28l0.57,0.54l0.46,-0.14l-0.86,1.23l0.16,0.89l-0.28,1.09l0.26,0.61l0.71,0.57l0.92,0.08l1.18,-1.3l1.16,-0.48l0.43,0.82l0.88,0.29l0.88,-0.62l0.55,-2.78l1.61,-3.41l0.04,-0.73l0.69,-0.42l0.53,-1.79l-0.15,-0.93l0.75,0.01l1.66,-2.9l0.37,-1.55l6.15,-3.44l0.76,-0.23l0.99,0.21l1.63,-0.84l0.55,0.16l2.6,-1.52l5.65,-2.27l3.32,-4.19l4.26,-2.22l1.39,-2.65l1.19,-1.18l4.84,-2.14l0.57,-0.74l0.37,-1.99l1.79,0.42l1.38,-0.8l2.39,-0.36l1.33,-0.87l0.35,-0.65l1.38,-0.34l2.48,-1.75l1.91,-2.38l-0.64,2.17l1.93,1.5l1.15,-0.13l3.54,-1.96l0.71,0.36l1.03,-0.58l0.03,0.65l0.9,0.94l3.62,1.08l3.66,-0.5l1.93,-1.1l0.72,0.35l0.69,-0.25l0.25,0.21l3.82,-1.38l0.8,-1.12l0.99,-0.34l0.45,-1.39l4.47,-3.05l1.79,0.35l1.89,-0.8l0.46,0.55l0.59,0.05l5.29,-1.21l1.72,0.31l1.29,-0.73l1.57,-0.32l3.44,-4.12l0.42,-1.3l1.61,-0.78l0.77,-0.93l1.12,0.81l0.66,-0.31l0.01,-0.69l0.27,-0.02l5.32,1.25l0.65,-0.24l1.19,1.12l1.69,0.33l1.26,-0.64l0.55,-0.64l1.19,-0.22l0.27,-0.88l1.45,0.07l9.6,-1.35l2.98,-0.94l12.97,-5.37l3.91,-2.63l4.15,-3.91l4.61,-6.55l2.78,-6.06l0.16,-0.96l-0.59,-0.89l1.85,-0.34l1.36,-1.24l0.25,-1.19l-0.7,-0.78l1.33,-2.4l0.89,0.33l1.23,-0.22l2.53,-1.88l0.84,-1.42l1.75,-0.93l0.78,-0.98l0.56,-0.1l0.41,-0.79l2.22,-1.04l0.69,-0.86l0.53,-1.49l-0.29,-1.71l-0.51,-0.49l-1.39,-0.44l-1.67,0.13l0.3,-0.95l-0.32,-2.43l0.26,-2.08l-1.37,-3.46l0.13,-4.93l0.49,-1.81l2.26,-2.58l0.08,-0.48l-0.34,-0.4l0.2,-0.27l3.14,-2.71l0.37,0.37l0.63,-0.05l0.44,-0.52l-0.01,-0.87l0.86,0.93l1.26,0.27l0.42,-0.19l-1.46,-2.73l0.52,-0.37l0.51,-1.1l0.37,0.39l0.78,0.12l1.55,-0.36l0.76,-0.55l1.48,0.41l0.49,-0.16l-0.08,-0.51l-1.52,-1.56l0.28,-2.05l0.4,-0.61l1.18,-0.11l1.21,-1.29l0.56,-1.93l1.32,-0.62l0.06,0.74l1.01,0.47l-1.13,-0.08l-0.41,0.46l0.05,1.19l-0.57,0.97l0.44,1.38l0.38,0.29l0.6,-0.16l0.44,1.47l0.72,0.04l0.51,0.48l-0.1,1.21l1.3,1.11l-0.29,1.94l1.09,0.71l1.57,1.83l0.23,1.56l2.13,3.26l0.03,1.14l0.4,0.82l1.11,0.8l1.39,1.81l0.3,1.05l0.87,0.99l0.35,1.71l0.6,0.16l0.56,-0.89l-0.04,-1.49l-0.57,-1.36l0.14,-1.79l0.59,-1.07l0.38,-2.16l0.72,-0.46l0.02,-0.43l-1.44,-2.22l-0.05,-1.29l0.21,-0.41l0.91,-0.06l0.38,1.21l1.32,0.36l0.79,1.32l1.15,0.72l0.82,1.17l0.72,0.33l0.86,-0.07l0.34,-0.38l-0.07,-0.53l-1.38,-0.9l-1.13,-3.09l0.76,0.51l0.63,-0.19l0.07,-0.85l-0.6,-0.82l0.92,-1.1l1.21,-0.72l0.4,-1.02l-0.11,-0.61l-0.58,-0.46l-0.58,0.27l-0.46,1.06l-2.16,0.65l-1.01,-1.49l-0.65,-1.78l-2.2,-1.59l-1.36,-0.36l0.41,-0.29l0.04,-0.63l0.92,-0.55l0.15,-0.71l0.42,-0.07l0.36,-1.69l-2.18,-1.12l1.74,0.57l1.52,0.07l0.38,-0.25l-0.53,-0.86l0.53,-0.24l0.14,-0.63l-0.4,-0.99l-1.17,-0.14l-0.8,-0.75l-0.77,0.21l-0.4,-0.25l0.44,-0.85l-0.27,-1.05l0.66,-0.01l0.16,-0.44l1.56,-0.12l1.68,0.32l-0.36,0.61l0.41,0.63l-0.85,0.15l-0.15,0.72l1.62,1.15l1.19,0.38l-0.69,0.76l0.66,1.48l1.31,-0.13l0.16,-1.68l1.35,0.91l0.65,-0.19l0.08,-0.51l-0.78,-1.4l0.69,-0.47l-0.28,-0.55l1.02,0.44l1.45,0.03l1.14,0.64l0.67,1.69l0.8,0.63l2.76,0.27l0.99,-1.26l1.81,0.94l2.67,0.18l3.74,-0.37l0.83,0.75l0.93,0.18l1.61,-0.6l-0.17,-0.71l-1.41,0.05l-3.15,-1.36l-2.8,-0.43l-2.09,0.45l-1.36,-0.2l-0.35,-0.9l0.24,-1.11l-0.29,-0.4l0.22,-0.73l0.81,-0.76l0.06,-1.74l0.29,1.37l0.92,1.21l0.73,-0.03l0.52,-0.98l0.71,-0.17l0.46,-0.5l-0.23,-2.61l0.66,-0.55l-0.12,-1.5l0.5,-0.5l0.62,0.37l0.51,-0.25l0.47,-1.23l0.44,-0.27l-0.07,-0.72l-0.79,-0.28l-1.94,0.09l-1.63,1.96l-0.73,1.65l-1.22,-2.82l-0.47,-0.15l-0.27,0.69l-0.39,-1.68l-0.07,-1.69l0.79,-0.36l0.21,-0.61l-0.02,-0.79l-0.57,-0.58l0.05,-0.8l0.96,-0.39l0.39,-1.11l2.59,0.94l0.84,-0.14l0.25,-0.74l0.9,0.04l0.43,-0.57l-0.37,-0.71l0.19,-0.74l2.14,-1.98l0.43,0.33l-0.2,0.37l0.37,0.6l1.67,-0.08l1.03,1.17l0.66,0.23l-0.35,1.04l0.43,0.44l0.64,-0.13l0.81,0.58l0.5,-0.26l0.1,-0.77l2.34,1.45l0.49,-0.11l-0.29,-0.85l-2.1,-1.81l0.32,-1.24l1.25,-0.84l-0.42,-0.54l-1.09,-0.63l-0.38,0.43l-0.95,-0.51l-2.49,1.29l-0.37,-0.86l0.73,-0.53l0.15,-0.48l1.65,-0.1l1.14,-1.4l-0.16,-0.59l-0.94,-0.32l-0.62,0.57l-0.57,-0.18l-1.7,1.46l-0.33,-0.2l0.27,-0.82l-0.42,-0.52l0.19,-0.45l0.64,-0.19l1.16,0.64l0.64,-0.04l0.55,-0.82l0.56,-0.03l0.25,-1.09l-0.43,-1.22l0.44,-0.06l-0.14,0.65l0.32,0.74l0.64,0.24l0.28,-0.23l1.15,2.49l0.72,-0.13l0.21,-1.1l-0.33,-1.19l1.25,0.5l0.57,0.56l0.01,0.62l0.91,0.57l1.18,-0.28l1.31,0.28l0.63,-0.36l-0.06,-0.99l-1.14,-0.17l0.35,-0.31l-0.16,-0.64l1.1,-0.9l-0.23,-0.54l-0.6,-0.19l-0.61,0.22l-1.21,-0.62l-0.74,0.15l-0.21,-0.81l0.48,-0.27l0.35,-1.16l-0.43,-0.53l-2.05,-0.52l-0.22,-1.39l-0.85,-0.45l1.1,-0.65l0.19,-0.8l0.94,0.13l1.09,-0.92l-0.16,-0.69l-1.16,-0.06l0.49,-0.53l0.87,-0.0l0.49,-0.49l-0.24,0.72l0.2,0.5l1.34,-1.02l0.92,1.77l0.44,-0.25l0.63,-1.93l0.4,0.02l0.08,-1.27l0.55,0.25l-0.43,0.48l0.38,0.71l1.47,-0.14l0.57,-1.32l0.29,-2.21l-0.59,-1.27l-0.1,-1.27l0.39,-1.07l1.75,1.65l-1.12,-0.02l-0.21,1.02l0.57,3.16l-1.0,1.96l-0.03,1.02l0.66,0.29l0.44,-0.45l1.29,-3.41l0.19,0.24l1.23,-0.37l0.29,0.17l0.27,2.61l2.1,1.41l0.51,-0.36l0.14,-1.12l-0.36,-0.51l0.21,-0.71l1.18,0.58l1.5,-1.0l-0.16,-1.36l-0.98,-1.42l1.61,-0.85l0.35,-1.31l-0.29,-1.24l0.8,-0.16l0.81,-0.62l0.28,-1.62l0.33,0.84l0.77,0.46l0.03,0.75l0.53,0.26l0.65,-0.19l0.56,0.38l0.54,-0.89l0.95,-0.52l-0.07,-0.49l-0.84,-0.85l0.69,-1.42l0.91,-0.33l0.25,-0.73l0.57,-0.42l1.1,0.19l-0.95,1.4l0.08,0.52l0.88,0.2l0.01,0.61l0.63,0.78l0.95,-0.09l0.14,1.36l1.12,0.66l0.33,-1.33l0.86,-0.53l0.12,-1.12l0.21,0.4l0.66,0.07l0.83,-1.13l0.41,-1.62l-0.22,-0.25l0.25,-0.26l1.39,0.21l0.58,-0.4l-0.08,-0.36l0.46,-0.58l-0.48,-0.55l-0.7,-0.17l-0.98,-2.29l0.73,-0.22l0.18,0.71l0.49,0.16l1.25,-0.85l-0.61,-0.82l1.15,0.43l0.41,-0.14l0.18,-0.68l1.25,0.98l0.0,0.86l1.03,0.64l-0.24,0.59l0.41,0.56l0.38,-0.05l0.36,1.28l0.63,0.51l0.49,-0.03l0.62,-0.85l0.3,0.47l0.51,0.01l0.78,-1.13l0.78,0.87l1.08,0.57l0.55,-0.4l-0.03,-0.36l1.09,0.83l0.47,-0.23l0.32,0.79l-0.01,1.32l0.76,0.62l0.65,-0.16l3.37,2.34l0.76,1.31l1.26,1.11l0.69,1.74l0.77,0.4l0.04,1.14l0.66,0.43l0.01,0.58l0.83,0.1l1.09,0.92l-0.09,0.63l0.35,0.66l0.65,0.17l0.81,-0.33l1.18,1.52l0.94,0.26l1.86,1.3l-0.5,0.86l0.32,1.32l-1.52,0.56l0.18,1.17l-1.43,4.84l0.35,1.61l-0.19,2.18l-0.71,0.57l0.63,2.33l-1.21,1.75l0.27,0.69l0.44,0.08l1.06,-0.62l0.87,-1.27l0.39,-2.13l-0.34,-2.22l0.16,-0.65l1.99,1.7l1.02,2.74l0.53,0.34l0.4,-0.37l0.05,-2.62l-1.59,-1.99l0.14,-0.96l-0.65,-2.18l1.77,-1.88l0.36,-0.97l0.66,2.67l0.33,0.2l0.6,-0.41l-0.06,-0.32l0.74,0.63l1.15,-0.11l0.27,-1.18l-1.18,-2.63l0.7,-0.6l-0.03,-0.36l-0.81,-0.66l2.56,-0.91l1.22,0.54l2.57,0.41l0.71,0.59l3.98,0.4l1.43,0.58l0.0,392.84l-4.85,2.15l-2.57,1.66l-9.6,4.19l-4.41,1.62l-5.58,0.97l-4.45,1.52l-0.78,0.66l-5.27,1.49l-5.2,0.74l-5.02,0.17l-0.9,-0.21l-2.3,0.36l-6.68,-0.82l-4.07,-1.22l-1.3,0.3l-1.25,0.84l-1.68,-0.14l-3.12,1.51l-7.31,5.26l-4.35,1.29l-5.37,2.74l-2.1,0.61l-2.3,2.44l-1.41,0.79l-2.7,0.87l-8.75,1.55l-3.46,2.6l-1.63,2.26l-0.58,2.46l-1.34,2.47l-1.19,5.16l-1.3,0.51l-0.74,1.13l-2.26,2.02l-0.58,1.27l-0.02,0.96l-1.69,0.89l-0.58,0.8l-1.25,0.24l-0.9,1.3l-1.2,-0.97l-1.88,-0.21l-1.03,0.41l-1.67,2.02l-2.03,0.47l-0.81,-2.47l-0.75,-0.73l-1.62,-0.47l-4.0,1.06l-1.45,-0.67l-0.92,0.34l-2.8,0.1l-0.86,0.44l-0.1,1.0l-0.71,-0.51l-0.71,0.3l-2.24,-0.69l-1.12,-0.02l-1.76,0.89l-0.41,0.77l0.03,0.84l-0.83,-0.54l-0.67,0.64l-1.7,-0.03l0.46,-0.91l-0.72,-2.02l-1.7,-1.96l-1.87,0.19l-1.35,1.06l-1.59,0.59l-1.02,-0.69l-1.12,-0.29l-1.4,0.48l-0.59,-0.63l-1.68,-0.78l-4.4,-0.11l-2.49,0.58l-1.26,0.68l-1.56,-0.58l-2.76,0.64l-2.24,-0.3l-2.76,0.86l-4.06,0.06l-0.63,0.47l-0.26,0.65l-2.63,0.86l-2.66,-0.85l-2.32,-0.18l-1.61,0.51l-1.25,-0.64l-1.03,0.0l-1.7,0.93l-2.81,0.61l-1.68,1.58l-1.98,0.91l-0.61,0.45l-0.02,0.51l-0.92,0.48l-0.81,1.76l-0.93,0.76l-0.53,1.29l-0.07,1.51l0.52,0.74l0.62,0.23l-0.46,0.11l-0.88,-0.71l-1.04,-0.04l-0.67,0.59l-0.19,0.67l0.31,1.19l-0.35,0.28l-0.33,-0.71l-0.54,-0.22l-0.9,0.23l-0.5,0.49l-0.2,1.33l-0.27,0.1l-0.49,-0.74l-1.27,-0.17l-0.75,-0.54l-4.09,-0.66l-0.86,0.31l-1.24,-0.14l-0.29,0.68l0.69,0.71l-1.63,0.29l-1.52,1.06l-0.19,0.97l0.4,0.67l-0.27,0.31l-2.33,1.17l-2.95,0.78l-1.01,0.71l-1.27,2.23l0.23,1.8l-2.62,0.09l-2.43,0.89l-0.27,0.58l0.92,1.25l-1.16,-0.76l-0.72,-0.02l-1.65,0.63l-2.26,-0.17l-0.51,0.36l-1.24,0.13l-0.52,0.43l0.05,0.76l-1.57,-0.57l-1.88,-0.05l-0.83,0.48l-0.53,1.53l-1.3,-0.92l-1.68,-0.38l-2.83,-1.5l-0.58,0.34l-2.82,-0.58l-0.63,0.28l-0.54,0.88l-1.7,-0.77l-1.12,0.12l-1.2,-0.37l-1.63,1.03l-2.96,-1.15l-0.7,0.48l-1.18,0.0l-0.6,0.46l-0.97,-0.63l-2.59,-0.53l-0.99,-0.9l1.58,0.35l0.47,-0.33l-0.0,-0.6l-1.47,-0.84l-1.24,-1.2l-0.73,0.18l-0.12,0.53l0.33,0.73l-5.98,-1.94l-2.35,-0.16l0.07,-0.55l-1.11,-2.05l-4.18,-4.58l-3.04,-2.43l-1.83,-0.74l-0.52,-0.75l-3.81,-1.8l-1.71,-0.43l-1.98,0.12l-1.12,1.25l-2.13,-2.39l-0.01,-1.99l-0.85,-2.0l-0.22,-5.5l0.57,-1.79l-0.66,-2.54l1.04,-1.72l-0.3,-1.87l0.58,0.25l1.59,1.93l1.82,0.78l2.08,0.17l2.04,-0.52l1.55,-0.93l1.93,-2.17l1.31,-2.16l1.07,-2.85l0.74,0.15l0.79,-0.31l0.39,-0.9l-0.11,-2.11l-0.44,-0.33l-0.33,0.13l0.1,-3.93l-1.62,-8.86l0.05,-0.2l1.18,3.03l0.69,0.42l0.53,-0.19l0.22,-0.68l-1.0,-2.68l1.42,-0.02l0.6,-1.09l-0.14,-0.76l-0.9,-0.58l-0.16,-0.43l0.67,-1.84l0.02,-1.0l-0.65,-1.26l0.41,-1.0l-0.66,-0.94l0.67,-0.5l0.48,-2.05l-0.61,-2.81l0.32,-3.54l-0.5,-3.84l-0.93,-3.11l-5.0,-8.45l-3.12,-7.6l-1.67,-2.77l-1.25,-1.25l-0.4,-1.98l-1.36,-2.69l-0.88,-2.66l-0.13,-1.79l-0.97,-3.04l0.27,-1.39l-1.05,-1.19l0.28,-1.7l-1.0,-2.68l0.54,-3.15l-0.44,-1.78l-0.03,-4.05l0.72,-4.4l-3.04,-9.05l-4.22,-4.79l-1.05,-1.7l-0.47,-1.24l0.31,-0.76l-0.13,-2.3l-1.36,-3.36l-2.41,-2.93l-2.49,-4.08l-1.48,-0.95l-1.68,-1.98l-1.46,-5.67l0.08,-1.38l0.93,-2.82l-1.54,-5.78l-1.41,-3.24l-5.49,-9.45l-3.84,-5.76l-6.42,-6.53l-0.03,-1.48l-1.01,-1.96ZM18.62,388.27l-1.37,-0.34l-0.1,-0.79l-0.71,-1.09l-0.84,-1.02l-0.71,-0.25l-0.39,-3.13l-0.81,-0.76l-0.21,-1.48l-2.02,-3.0l0.06,-1.45l1.39,-2.42l0.33,1.67l1.16,0.5l1.01,2.29l0.68,0.39l0.46,0.8l0.87,0.32l-0.05,1.44l0.82,0.76l-0.54,0.85l0.08,1.03l-0.4,1.0l-0.34,2.79l0.5,1.28l1.15,0.61ZM234.66,163.67l-0.3,0.64l-0.77,-0.62l0.41,-0.38l0.66,0.36ZM261.01,136.67l-0.34,-0.12l-0.02,-0.78l0.64,0.2l-0.29,0.7ZM273.13,127.84l-0.42,0.17l-0.69,-0.31l0.41,-0.28l0.71,0.42ZM305.17,106.76l-0.04,0.05l-0.04,-0.08l0.08,0.03ZM109.27,603.92l0.79,0.2l0.39,-0.35l0.55,0.47l-1.04,-0.02l-0.7,-0.3ZM292.84,109.4l-0.33,-0.77l-0.77,-0.53l-2.33,-0.08l-0.2,-0.42l0.81,0.08l0.31,-0.45l0.5,0.41l0.49,-0.02l0.21,-0.39l0.21,0.2l0.91,-0.47l0.42,0.37l-0.52,0.25l-0.1,0.92l0.49,0.46l0.39,-0.09l-0.48,0.53ZM291.55,106.2l-0.7,-0.84l0.13,-0.19l0.8,0.3l0.11,0.39l-0.33,0.36ZM26.98,297.37l0.2,-0.34l0.08,-0.28l-0.06,0.51l-0.23,0.12ZM21.38,383.22l-0.18,-0.67l-0.18,-0.36l0.44,0.37l-0.08,0.65ZM13.72,391.1l-0.26,-0.73l0.04,-0.18l0.04,0.12l0.18,0.8ZM341.51,126.92l1.04,1.78l0.15,0.53l-1.03,-1.19l-0.16,-1.12ZM336.53,131.41l0.66,0.52l0.17,0.83l-0.81,-0.64l-0.03,-0.71ZM269.49,120.11l0.09,-0.78l0.7,0.28l0.22,-0.4l0.03,-1.03l-0.43,-0.42l0.6,-0.44l0.52,0.32l-0.59,1.06l0.41,1.1l-1.03,0.54l-0.52,-0.22ZM262.85,135.22l0.12,-0.23l0.38,0.09l-0.18,0.26l-0.32,-0.13ZM255.73,137.28l0.07,-0.48l0.59,0.11l0.06,-0.65l0.36,-0.71l-0.06,0.67l1.33,1.26l-1.55,-0.44l-0.81,0.24ZM258.19,137.67l0.27,0.47l-1.17,0.44l0.67,-0.53l0.23,-0.38ZM53.11,262.46l0.49,-1.25l2.09,-2.25l0.28,1.38l-0.66,1.42l-1.06,1.08l-0.68,-0.48l-0.46,0.09ZM0.84,371.32l0.69,0.09l0.02,1.16l0.81,1.8l0.22,2.15l1.81,3.79l-0.45,1.63l-0.79,-0.61l-0.71,-2.12l-1.2,-1.51l-0.06,-1.91l-0.77,-1.59l0.01,-2.34l0.42,-0.54ZM4.36,382.54l0.68,0.06l0.9,1.27l0.4,1.24l-0.08,0.73l-0.66,-1.7l-1.23,-1.6Z", "name": "Western Australia"}, "AU-TAS": {"path": "M775.91,740.14l0.18,-0.61l1.22,-0.64l1.25,-0.12l1.53,0.42l0.39,-0.62l1.32,-0.18l1.0,-0.68l2.65,2.6l-1.26,1.25l-0.74,0.14l-0.31,-1.09l-0.36,-0.27l-0.9,0.01l-1.1,0.55l-0.88,-0.41l-0.59,0.32l-1.94,0.01l-1.47,-0.67ZM701.14,755.61l0.52,-1.09l-0.33,-0.65l0.57,-0.67l0.83,-0.3l0.33,-0.7l-0.19,-5.32l1.08,1.86l0.75,-0.25l2.11,0.73l1.93,0.0l2.0,1.61l0.93,0.36l0.66,-0.06l0.44,-0.64l2.09,-0.07l1.83,1.37l2.36,0.65l1.45,-0.42l0.27,0.79l0.97,0.7l3.26,0.66l0.35,0.94l1.55,1.44l2.31,0.39l0.34,0.5l1.11,0.15l2.21,1.29l3.03,1.09l4.8,0.32l2.54,-0.79l0.44,0.94l0.73,0.19l0.32,-0.12l-0.04,-0.84l1.35,-1.38l1.75,-0.64l0.77,0.49l0.27,0.68l-0.23,0.57l0.45,0.63l1.1,0.29l0.87,-0.33l1.15,0.25l0.28,-0.12l0.09,-0.69l-0.92,-0.79l-1.21,-0.24l-0.51,-0.42l0.22,-1.11l1.99,-0.53l1.7,-0.99l0.39,0.28l3.17,0.4l2.23,-1.47l0.49,0.19l0.75,-0.28l0.29,0.65l0.71,0.2l0.53,0.68l1.09,0.07l1.75,-1.55l1.63,-2.69l1.25,-0.47l0.9,0.96l1.04,-0.13l1.33,0.89l0.91,-0.09l1.76,-1.17l0.89,-2.58l0.96,-0.06l0.58,0.69l0.85,0.08l1.11,1.53l1.47,0.19l1.65,2.06l0.86,1.75l-1.21,1.02l0.23,0.6l0.43,0.18l-0.66,1.47l-0.06,2.17l1.06,1.68l-1.37,1.26l-0.01,0.86l0.66,0.24l0.87,-0.75l-1.05,3.2l0.04,2.27l0.74,1.84l-0.63,2.15l0.4,1.59l-0.95,1.52l0.62,1.91l0.75,1.17l-0.54,3.44l1.31,1.62l-0.18,0.19l-0.27,-0.37l-0.76,-0.1l-1.07,-1.0l-0.79,-0.26l1.03,-0.6l0.27,-1.03l-0.77,-0.66l-0.34,-0.9l-0.81,0.02l-0.24,0.42l0.25,0.75l-0.49,0.01l-0.51,0.56l0.14,0.98l-0.51,0.58l0.23,0.5l-1.0,0.44l-0.4,2.54l-0.83,0.82l-1.59,2.96l-0.0,0.49l0.47,0.12l0.78,-0.66l0.15,0.18l-0.57,0.81l0.04,3.77l-0.76,0.73l-0.64,-0.78l-0.92,0.67l-0.21,0.65l1.01,1.15l0.41,1.57l-0.11,1.59l-1.37,1.06l-0.12,1.59l-0.71,0.78l-0.13,0.95l-3.03,-0.02l-0.51,-0.6l-0.73,-0.21l-0.31,-0.85l-0.56,-0.3l-1.58,0.46l-0.74,0.53l-0.14,1.02l1.18,2.55l-0.47,0.72l-0.66,0.3l0.32,-0.9l-0.38,-0.7l0.23,-1.15l-0.5,-0.48l-0.85,0.37l-0.27,-0.85l-1.2,-0.7l-1.6,-2.32l-0.99,0.38l-0.1,0.55l1.29,1.49l0.85,1.82l-0.62,1.39l-0.01,1.29l-0.65,-0.58l-0.56,0.03l-0.38,0.43l0.12,0.87l0.76,0.85l-1.12,1.22l0.21,3.32l-0.68,0.54l-0.77,-0.36l-0.23,-0.83l-1.02,-0.08l0.44,-0.88l-0.64,-1.36l-0.9,1.09l-0.56,-0.14l-0.15,-1.76l-0.31,-0.31l-0.63,-0.0l-0.73,0.62l-0.34,1.4l0.2,0.98l2.15,1.5l0.65,0.83l-0.42,0.39l-0.5,-0.35l-1.03,0.11l-0.98,0.78l0.34,0.64l1.49,-0.02l-1.02,1.53l-1.77,0.35l0.11,0.45l0.84,0.52l-0.64,0.82l0.34,0.86l-1.11,0.16l-0.17,0.7l0.39,0.63l0.67,0.28l-0.18,0.3l-1.5,0.71l-0.95,-0.81l-2.01,0.44l-0.68,-1.02l-1.51,-0.82l-0.37,-1.5l-0.76,-0.85l-0.58,0.18l-0.13,1.16l-0.58,0.36l-2.72,-0.16l-0.69,-0.53l-0.57,0.01l-0.68,0.59l-0.51,-1.02l-0.79,-0.24l-0.82,0.25l-0.31,0.65l-0.92,-0.32l-1.0,0.36l-0.25,0.56l-0.96,0.17l-0.06,-2.24l-1.17,-1.47l0.7,-0.49l-0.18,-0.38l1.98,0.39l1.05,1.35l0.66,-0.17l0.28,-0.99l0.67,0.67l0.55,-0.15l0.22,-0.49l-0.2,-1.84l-1.28,-1.21l-0.64,-0.18l-1.07,1.44l-0.33,-0.95l-0.5,-0.38l-0.68,0.25l-0.29,0.86l-0.87,-0.89l-0.31,-1.59l-1.06,-0.88l-0.69,0.22l0.01,1.14l-0.71,0.21l-0.33,0.71l0.52,0.55l-0.5,-0.09l-0.66,-1.28l-0.09,-1.02l-1.0,-0.88l-0.55,-0.98l-0.02,-0.8l-0.58,-0.43l-0.72,0.08l0.36,-0.97l-0.22,-0.46l-1.06,-0.56l-0.89,-1.49l-1.88,-0.34l-0.77,-1.06l-1.6,-3.63l-0.62,-0.54l0.38,-0.91l-0.76,-1.87l-0.75,-0.35l-0.3,-0.76l-0.71,-0.36l0.48,-0.63l-0.05,-0.54l-1.02,-1.32l-0.25,-0.92l0.17,-1.07l-0.76,-2.4l-0.12,-2.02l0.23,0.5l1.4,0.51l0.46,0.92l2.3,1.52l0.31,2.21l0.53,1.36l0.51,0.12l0.37,-0.39l0.07,-1.86l0.82,-0.31l0.84,-2.24l-0.45,-0.51l-0.51,0.16l-0.62,-0.76l-0.64,0.3l-2.04,-2.31l-0.63,-2.52l-0.92,-0.08l-1.11,1.12l-0.06,0.68l-0.19,-0.18l0.74,-1.88l-0.37,-2.3l-1.05,-2.07l-3.16,-3.02l-0.17,-0.78l-2.1,-2.85l-0.86,-0.29l-0.11,-1.3l-1.06,-2.82l-1.6,-2.62l-0.86,-0.71l0.62,-0.58l-0.05,-0.83l-2.13,-3.69l0.17,-1.34l-0.51,-1.38l0.11,-1.12l-1.25,-1.88ZM728.8,816.42l0.31,-0.04l-0.13,0.05l-0.17,-0.01ZM763.12,809.37l-0.0,0.0l-0.0,-0.0l0.0,0.0ZM772.39,806.05l1.04,0.09l0.62,-0.56l0.72,-0.08l0.4,0.7l-0.24,0.67l0.42,0.77l-0.78,0.52l-0.48,2.66l0.54,0.76l-0.24,0.63l0.31,0.61l0.49,0.06l-0.55,1.1l-1.07,-1.0l-0.3,-1.05l-0.59,-0.09l-0.67,0.76l-0.06,1.04l-0.94,0.9l-1.74,-1.75l-0.04,-0.31l1.01,-0.75l-0.16,-0.65l-2.06,-0.8l-0.47,-1.06l1.17,-0.68l0.13,-1.22l0.29,0.02l-0.14,1.72l1.08,0.91l1.32,0.46l1.6,-0.38l0.9,-1.06l-0.92,-0.28l-0.52,-0.57l0.38,-0.85l-0.62,-0.47l0.17,-0.77ZM773.75,805.05l-0.3,-0.1l0.19,-0.13l0.11,0.23ZM782.69,786.98l0.48,0.4l-0.65,1.33l-0.64,-0.37l0.81,-1.36ZM715.42,748.93l-0.01,-0.04l0.02,0.03l-0.02,0.01ZM770.83,726.2l0.73,-0.69l1.05,-0.4l0.54,-1.75l1.33,-0.92l4.41,5.45l1.15,0.56l1.6,0.24l-0.18,2.53l-1.31,1.2l0.19,0.61l0.47,0.17l1.26,-0.51l0.3,0.87l-0.78,0.1l0.09,1.04l-1.61,-0.36l-0.44,0.32l-0.23,0.9l-1.13,0.45l-1.34,-0.62l0.15,-1.04l-0.85,-0.83l-0.31,-1.65l-1.1,-0.56l-0.4,-1.1l-0.91,-0.37l0.39,-1.15l-0.64,-2.15l-0.82,-0.26l-0.84,0.45l-0.79,-0.49ZM781.82,734.78l0.24,0.18l0.21,0.1l-0.15,-0.02l-0.3,-0.26ZM778.3,743.36l0.29,-0.21l1.68,-0.45l-0.58,1.72l-1.39,-1.06ZM776.58,800.95l0.06,-0.14l0.21,-0.74l0.35,0.76l-0.62,0.12ZM776.83,799.75l-0.62,-0.54l0.18,-0.67l1.04,-0.69l0.77,0.14l0.52,1.28l-1.61,0.04l-0.28,0.44ZM760.43,812.89l0.88,-0.13l0.26,-0.64l-0.5,-0.41l0.15,-0.41l0.63,0.7l0.81,2.88l-1.09,0.08l0.75,-0.82l-0.05,-0.55l-1.82,-0.69ZM760.67,715.79l0.04,-0.13l0.16,-0.03l-0.03,0.13l-0.17,0.03ZM756.56,820.97l0.74,0.3l-0.31,0.42l-0.25,-0.25l-0.17,-0.47ZM757.82,819.58l-0.12,-0.84l0.42,0.52l0.64,-0.12l0.38,-0.87l-0.24,-0.7l1.13,-1.29l1.05,2.76l-1.03,2.78l-1.1,-0.5l0.22,-0.21l-0.27,-1.27l-0.49,-0.39l-0.61,0.12ZM706.76,746.86l0.78,-0.8l1.66,1.11l-2.38,0.79l-0.05,-1.1ZM706.24,740.79l0.67,-0.6l0.05,-0.52l0.96,0.27l-0.23,0.91l-0.83,0.35l-0.61,-0.41ZM703.28,742.17l0.9,-0.24l-0.57,1.61l-0.03,-0.9l-0.3,-0.46ZM684.28,723.01l0.13,-1.18l1.05,-0.44l0.81,-0.82l-0.21,-1.8l0.62,-0.16l1.94,1.27l0.55,1.1l-0.15,1.17l0.45,2.18l-0.45,2.24l0.82,0.76l-0.08,1.46l-0.52,1.11l-1.26,1.06l-2.69,1.29l-0.56,-1.28l0.39,-0.73l-0.15,-1.84l-1.05,-0.93l0.11,-1.58l0.53,-1.27l-0.27,-1.63Z", "name": "Tasmania"}, "AU-VIC": {"path": "M620.45,577.42l1.14,1.21l2.11,0.1l1.28,0.63l1.04,-0.33l1.31,0.86l0.48,0.73l1.59,-0.13l1.38,0.83l1.13,0.1l0.3,0.79l0.52,0.35l0.9,-0.21l1.36,-1.59l1.53,-0.9l0.81,-0.15l2.05,0.67l4.47,-0.38l1.21,1.38l1.09,-0.3l0.97,0.8l0.72,-0.01l0.4,1.77l1.11,1.26l0.98,0.72l1.06,-0.11l-0.66,1.79l0.3,2.79l1.84,1.86l-0.01,0.73l1.19,2.11l0.03,0.84l0.72,0.68l1.65,0.56l0.83,-0.12l0.24,-0.55l-0.29,-0.75l1.09,-0.03l0.31,-0.33l0.0,-1.14l0.6,-1.85l1.08,-0.42l1.15,0.8l0.5,1.34l0.55,0.23l0.87,-0.49l0.98,0.75l0.75,-0.41l0.95,0.51l2.0,0.17l2.56,1.29l0.22,0.75l0.43,0.3l0.81,-0.22l0.43,0.31l-0.01,1.33l-0.46,0.63l0.14,0.86l-0.29,1.01l0.76,3.74l1.34,2.19l3.48,1.42l0.17,1.13l-0.33,0.72l0.34,0.84l1.51,0.96l2.75,0.72l2.73,1.85l1.7,0.73l0.54,0.89l2.13,0.73l1.75,2.29l2.17,1.78l1.11,0.21l0.52,0.48l1.51,3.4l0.72,0.91l0.94,0.38l2.46,2.69l1.74,0.45l1.49,1.34l1.81,-0.16l1.55,-1.29l1.47,0.55l0.73,-0.25l0.26,-0.74l-1.1,-1.82l0.6,-1.22l0.18,-1.4l0.56,-0.43l4.47,-0.4l2.54,0.62l1.02,-0.07l2.63,-1.11l1.48,0.31l3.76,3.03l1.04,0.44l1.21,0.1l2.18,-0.42l1.01,1.2l1.69,0.07l3.41,0.96l0.78,-0.49l2.89,0.41l0.54,-0.29l0.98,-1.52l0.71,0.19l0.62,-0.31l0.89,0.48l1.64,0.0l1.32,1.16l1.46,0.14l0.51,0.55l0.87,0.07l0.57,0.57l0.98,-0.08l1.15,0.68l0.89,-0.08l0.73,-0.57l0.49,0.25l0.22,2.17l1.02,1.1l0.68,0.29l1.98,-0.53l0.24,-0.6l-0.41,-0.45l-1.39,-0.25l-0.42,-0.55l-0.29,-1.39l0.9,-1.28l0.91,0.58l2.34,-0.36l0.93,0.56l0.64,-0.1l0.87,-2.36l0.44,-0.39l1.53,-0.31l1.45,1.23l3.55,-1.41l4.11,1.58l0.72,0.95l1.16,0.39l-0.17,1.25l1.14,1.35l-0.28,1.57l1.02,2.77l-0.39,0.99l0.17,0.76l1.43,1.31l0.43,2.62l0.47,0.55l0.64,0.17l0.28,0.6l-0.18,1.14l-1.8,2.76l0.17,0.69l2.14,0.37l38.27,17.79l-1.13,0.44l-1.87,0.14l0.15,-0.62l-0.54,-0.48l-0.57,0.34l-1.36,-0.04l0.97,1.9l-0.85,0.83l-0.97,1.7l-1.18,0.37l-0.58,0.67l-1.79,0.52l-0.6,0.74l-3.0,0.02l-1.42,0.64l-0.53,-0.57l-1.73,0.02l-1.01,-0.34l-0.88,0.33l-6.71,0.22l-1.4,0.64l-2.64,-0.31l-6.65,0.32l-3.93,0.87l-4.73,1.57l-3.56,1.73l-3.8,2.5l-4.29,3.58l-11.72,11.33l-0.6,-0.24l-3.07,0.64l-1.59,-0.02l-1.04,0.63l-2.53,0.18l-0.98,0.62l-1.35,-1.02l-2.17,0.19l-0.9,0.45l-0.92,1.07l0.02,0.55l1.16,1.54l0.51,0.19l0.39,1.91l0.46,0.44l0.92,-0.1l0.93,-1.06l1.12,-0.28l0.84,-1.48l-0.12,1.49l0.31,1.25l-0.62,0.69l-0.43,1.89l0.26,0.57l0.64,0.12l0.1,0.34l-0.88,0.51l-0.09,1.09l-0.47,0.24l-1.19,-0.75l0.43,-1.13l-1.3,-0.97l-0.5,-0.74l-0.35,-1.56l-1.63,-1.92l-2.27,-1.31l-1.65,0.31l-0.49,0.61l-0.14,1.18l-1.15,0.18l-0.47,-1.82l-1.59,-2.78l0.63,-0.55l-1.05,-1.4l-2.06,-0.39l-2.73,1.05l-1.72,-2.48l-2.3,-0.94l0.53,-0.49l-0.04,-2.03l1.39,0.16l1.46,-1.45l-0.13,-0.61l-0.76,-0.68l-0.0,-0.98l-1.39,-1.91l-0.89,-0.23l-2.3,0.4l-1.26,-0.23l-0.53,0.27l-0.08,0.66l-1.3,1.82l0.5,1.79l-2.19,-0.08l-0.59,0.81l-0.77,0.32l-0.56,1.11l-2.03,0.27l-2.71,-2.43l1.96,-0.16l2.41,-1.1l0.13,-0.91l2.7,-3.61l0.3,-1.01l-0.49,-2.25l-0.66,-0.81l-1.1,-0.51l-1.1,-2.62l-1.38,-0.92l-0.52,0.05l-0.41,0.71l-1.6,0.05l-0.64,1.2l-1.45,0.61l-1.35,1.24l-2.57,0.83l-0.7,0.73l-0.2,0.78l-0.67,-0.31l-1.8,0.21l-0.86,0.58l-0.23,0.72l0.58,0.74l3.26,0.58l1.03,-0.15l1.96,-1.15l0.87,0.42l0.25,0.27l-0.16,0.86l-0.94,0.68l-0.45,1.12l-2.31,0.05l-0.88,0.33l-1.09,-0.33l-1.12,0.35l-3.29,2.52l-0.88,0.21l-0.56,0.67l-1.15,0.37l-0.39,0.49l-1.44,0.48l-1.25,1.29l-0.16,0.88l-1.16,0.49l-0.78,1.47l-1.23,1.14l-3.04,0.93l-0.96,1.56l-1.16,0.49l-1.4,1.26l-1.7,-1.48l-2.17,-1.05l-2.9,-0.03l-2.26,-2.27l-1.38,-0.84l-2.55,-0.47l-2.95,-1.02l-3.41,-2.67l-3.03,-1.75l-0.51,-0.86l-0.75,0.09l-0.36,0.55l-1.1,-0.8l-2.03,-0.03l-1.98,0.99l-0.94,-0.16l-1.79,-0.82l-3.21,-2.13l-4.33,-0.58l-2.06,0.6l-0.98,0.67l-0.46,1.21l0.66,1.07l-0.84,-0.15l-0.94,0.99l-0.63,-1.04l-0.79,-0.4l-1.21,-0.03l-0.63,0.72l-0.2,-0.13l0.47,-0.83l0.03,-0.8l-0.65,-1.02l-3.6,-3.06l-5.25,-2.81l-0.02,-101.54ZM742.48,697.34l0.55,0.15l0.64,-0.09l-0.38,0.36l-0.82,-0.42ZM716.12,685.94l1.1,0.42l1.64,-0.19l0.63,0.66l-1.27,0.18l-1.26,1.21l-1.1,-0.5l-0.23,-0.8l0.5,-0.98ZM712.85,690.71l0.94,-0.82l1.89,-0.13l0.14,1.03l-0.84,-0.19l-1.24,0.42l-0.89,-0.32ZM716.43,691.14l0.01,0.0l0.0,0.01l-0.01,-0.01Z", "name": "Victoria"}, "AU-NT": {"path": "M355.89,126.72l1.43,0.54l0.66,1.11l1.18,0.57l-0.2,1.55l0.52,1.31l-1.0,2.33l0.41,0.54l0.8,-0.37l0.55,0.68l0.36,-0.31l0.6,-2.58l0.49,-0.44l-0.78,-4.9l0.52,0.33l0.64,-0.59l1.03,0.3l0.51,0.66l2.19,0.62l0.78,1.64l1.18,0.87l0.52,1.27l-0.27,1.14l0.63,0.38l1.17,-0.69l0.13,1.03l0.59,0.39l1.08,-0.12l0.42,-0.62l-0.27,-0.77l-1.39,-1.58l-0.59,-1.47l-0.31,-1.57l0.64,-2.04l0.84,0.36l2.26,0.15l1.69,-0.58l1.08,-1.02l1.02,0.33l0.59,-0.38l0.23,-1.7l-0.3,-0.67l-0.72,0.13l-0.4,0.77l-3.15,1.24l0.23,-0.64l-0.39,-0.44l-1.53,0.59l-0.95,-0.69l-0.06,-0.78l-1.33,-1.03l-0.31,-0.85l2.52,-0.26l1.78,-1.56l0.08,-0.44l-0.95,-0.2l-2.08,0.94l-2.74,-0.62l-3.7,-2.86l0.28,-1.52l0.77,-0.95l0.26,-1.19l1.44,-1.63l0.21,-2.05l0.6,0.53l1.35,0.04l0.46,-1.19l2.27,-0.41l0.59,-0.67l0.37,-1.68l-0.73,-1.26l2.12,-2.22l-0.63,-1.84l0.96,-2.36l0.18,-1.48l0.8,-0.81l0.24,0.82l1.41,0.58l1.88,-0.59l1.47,-1.14l0.69,0.07l2.55,-3.01l1.48,0.53l0.46,-0.5l-0.51,-1.03l-1.59,-0.69l-1.78,-2.36l-0.83,-0.24l0.25,-4.55l0.71,-0.34l0.44,0.51l0.63,0.11l2.3,-0.95l0.81,-1.58l0.19,-2.26l-0.27,-1.21l0.75,0.16l1.04,-1.19l1.41,0.56l0.41,-0.13l0.45,0.72l0.98,0.63l0.59,0.15l1.83,-0.39l0.2,-0.41l-0.27,-0.49l-1.82,-0.53l-0.17,0.19l-0.29,-0.43l0.83,-0.72l-0.25,-0.76l-0.54,-0.16l0.51,-1.4l-0.28,-1.0l0.59,-0.71l-0.49,-0.57l3.22,0.87l0.28,3.32l0.36,0.29l0.4,-0.24l0.18,-0.68l1.09,1.52l0.95,0.59l0.17,-0.86l0.96,0.54l0.47,-0.03l0.12,-0.45l-0.37,-0.8l-1.57,-1.29l1.43,0.6l0.52,-0.51l-0.45,-0.84l-1.66,-1.32l-1.04,0.07l0.11,-0.54l1.38,-1.41l2.94,0.86l0.58,-0.35l-0.55,-1.6l-0.05,-1.64l-0.6,-0.88l0.37,-0.57l0.86,0.42l0.75,-0.33l0.46,0.58l0.73,-0.0l1.37,1.27l0.88,0.07l0.28,-0.64l-0.37,-0.52l0.4,-0.52l0.38,-2.28l0.44,2.5l0.46,0.88l2.48,1.77l1.15,0.19l1.81,-0.3l0.89,0.27l3.76,-0.58l2.28,-1.2l0.73,0.99l2.99,1.03l1.51,-0.79l1.15,-1.14l1.17,-0.47l0.35,-0.92l0.29,1.26l0.42,0.3l1.53,-0.59l0.35,0.15l0.82,1.76l-0.72,0.87l0.27,1.2l0.44,-0.13l1.4,-1.85l-0.53,-1.81l0.28,-1.37l2.47,-1.29l2.47,1.0l1.84,-0.08l0.33,-0.34l-0.23,-0.41l-0.97,-0.17l-1.35,-0.9l-0.34,-0.63l0.55,-4.39l-0.29,-0.79l-0.93,-0.66l1.2,-1.36l0.3,-0.8l0.69,-0.52l-0.25,-0.52l-2.48,-0.89l-0.42,-0.42l0.04,-0.79l-1.36,-1.68l-2.0,-0.99l-1.7,-0.07l-0.85,0.51l-1.48,-0.13l-2.67,1.45l-0.56,-0.01l-0.89,-0.88l0.45,-0.33l-0.06,-0.59l-0.72,-0.45l-0.75,0.12l-0.39,-0.49l0.26,-0.48l-0.26,-0.6l-0.93,-0.07l-0.29,-0.65l-1.67,-0.4l0.19,-0.67l-0.29,-0.59l0.65,0.12l0.31,-0.44l1.12,1.2l1.11,-0.64l0.22,-1.89l1.18,1.08l0.09,0.61l0.63,0.31l-0.02,1.95l0.97,0.59l0.15,0.87l0.72,0.6l0.65,0.09l0.45,-0.41l-0.1,-0.68l0.54,-0.1l0.28,-0.54l-0.24,-0.71l-0.69,-0.59l-0.1,-1.82l-0.92,-1.49l1.29,1.37l0.52,1.33l0.61,0.42l0.59,-0.26l-0.27,-2.08l0.23,-0.17l0.88,-0.06l0.54,1.12l-0.12,1.35l0.48,0.6l0.85,-0.35l0.36,-1.13l0.55,0.15l0.8,1.44l0.09,0.82l0.74,0.13l0.51,0.82l0.92,0.65l1.56,2.4l0.92,0.18l0.77,-0.25l2.29,-2.34l0.84,0.39l0.51,-0.27l0.02,-1.42l0.27,0.12l0.45,0.85l1.12,0.89l0.7,1.32l0.71,0.41l-0.02,1.13l2.08,3.26l0.6,0.4l1.73,0.29l0.68,-0.22l0.54,-0.63l-0.36,0.83l0.49,0.69l1.49,-0.16l1.87,0.84l1.16,-0.57l-0.37,1.57l0.25,0.59l0.63,-0.08l0.51,-1.11l0.36,-0.16l0.6,0.69l1.22,-0.31l0.56,-0.94l1.39,-0.13l1.2,-1.22l2.01,0.54l-0.37,0.46l-0.54,-0.01l-0.67,0.49l-0.28,0.88l0.36,0.71l2.24,1.34l1.74,-0.71l0.61,-0.85l0.61,0.7l0.04,0.97l0.65,0.15l0.77,-0.71l0.56,0.98l-0.21,0.48l0.48,1.02l-0.13,1.22l0.48,0.48l0.44,-0.08l1.39,-1.4l0.25,-0.92l2.1,1.59l3.19,0.51l1.95,-0.17l2.34,-2.22l0.91,-0.21l0.08,0.87l0.76,1.16l0.66,0.04l0.26,1.33l0.42,0.57l2.25,0.41l0.74,1.27l1.63,1.31l1.69,-0.34l1.21,1.09l0.66,0.15l0.64,-0.73l-0.84,-0.85l0.78,-0.1l0.95,0.75l1.48,-0.58l0.14,-0.51l-0.55,-0.37l-0.71,0.11l-0.79,-0.46l1.35,-0.85l-0.07,-0.65l0.9,-0.46l0.5,0.03l0.55,0.53l0.9,-0.0l1.12,-0.38l0.33,-0.43l1.32,0.46l3.01,-2.03l1.74,-0.44l-3.61,3.27l-0.08,1.18l0.41,0.91l1.39,1.68l0.72,-0.01l0.41,-0.85l0.82,-0.29l0.36,-0.87l1.49,-1.33l0.23,0.5l0.51,0.03l-0.02,0.65l0.67,1.14l0.62,0.18l1.11,-0.48l-1.36,2.32l0.96,2.34l0.69,0.3l0.64,-0.59l0.57,0.2l1.04,-0.26l0.7,0.59l1.87,-0.49l0.8,-0.63l1.99,-4.17l-0.64,-1.1l-0.92,-0.24l-1.54,0.19l-0.5,-0.45l1.88,-2.33l0.91,-0.13l2.26,-1.98l0.44,1.01l1.05,-0.28l0.53,1.73l0.51,0.32l0.17,1.83l2.36,2.63l1.07,-0.01l1.13,-0.95l-0.14,-0.74l-0.99,-0.54l0.7,-0.31l1.14,0.95l1.2,0.29l0.59,0.76l0.39,0.54l0.21,1.46l-2.14,2.06l-0.64,-0.57l-1.36,0.71l-0.27,1.06l0.23,1.17l-1.02,1.14l-0.49,1.24l0.13,0.5l-1.11,0.01l-0.58,0.49l-0.14,0.7l0.42,0.7l0.02,0.88l-0.82,-1.83l-0.94,0.06l-0.39,0.77l-0.38,-0.31l-0.7,0.18l0.33,2.22l1.2,0.82l0.42,0.78l1.56,0.74l-0.78,0.36l-0.25,-0.55l-0.63,-0.24l-1.42,0.59l0.09,1.04l1.24,1.19l-0.47,1.3l-0.65,0.1l-0.48,0.57l-0.13,1.09l-0.36,-0.15l-0.87,0.49l-0.41,-0.69l0.03,-3.0l-0.34,-0.4l-0.87,-0.21l-1.0,1.24l0.14,1.41l-0.73,-0.8l-0.5,0.09l-0.49,0.62l0.23,0.98l-0.51,0.16l-0.24,0.52l-0.65,0.18l0.24,-1.9l-0.2,-0.55l-0.73,-0.19l-0.98,0.98l-0.43,1.25l-0.63,0.29l-0.78,-0.49l-0.55,0.18l-0.51,0.85l-1.04,0.28l-0.86,1.28l-0.12,1.22l0.92,0.53l-0.04,0.67l-0.69,-0.17l-0.67,0.42l0.16,2.52l-0.53,1.2l0.61,1.41l0.53,0.45l-0.17,0.94l0.55,0.75l1.0,0.26l0.88,-0.25l0.96,-0.9l-0.77,1.64l0.12,0.68l-0.45,1.68l-1.53,1.44l-0.36,4.83l-0.97,0.3l-2.22,1.56l-2.03,3.61l-0.95,0.14l-0.36,0.51l-1.73,2.95l-0.27,1.53l-1.29,0.63l-0.46,0.76l-0.98,-0.21l-0.54,0.36l0.71,2.49l1.55,3.17l1.87,1.66l1.5,0.65l0.72,-0.09l1.3,1.43l1.12,0.22l2.19,1.33l1.95,1.96l2.1,0.89l1.25,1.01l2.72,1.38l0.57,1.19l0.45,2.19l1.76,1.3l1.49,0.19l2.44,2.16l0.71,0.19l0.72,-0.29l0.3,0.79l2.35,2.35l-0.34,0.98l0.27,0.76l0.97,0.22l0.93,-0.81l1.73,0.17l0.76,0.59l0.64,0.01l0.37,-0.38l0.03,-0.66l0.85,-0.47l1.18,1.18l3.37,1.42l3.66,3.14l1.02,0.16l0.39,0.47l0.56,0.0l0.88,0.62l1.38,-0.11l4.14,1.73l2.62,4.12l2.88,2.37l0.0,218.24l-198.16,0.0l0.0,-255.87ZM418.04,45.87l-0.23,0.1l-0.15,0.02l0.09,-0.18l0.29,0.07ZM509.0,65.5l0.07,-0.13l0.12,0.01l-0.17,0.1l-0.02,0.01ZM518.27,90.23l-0.04,0.06l-0.02,-0.06l0.06,-0.0ZM508.38,93.8l0.1,0.07l0.23,0.03l-0.17,0.11l-0.16,-0.21ZM511.01,67.43l0.01,-0.01l0.26,-0.13l0.02,0.05l-0.29,0.08ZM503.74,61.54l-1.64,0.29l-0.96,0.68l-0.1,-0.28l0.55,-1.12l0.88,0.27l1.23,-0.79l0.91,0.15l-0.88,0.81ZM504.85,60.62l0.64,-0.4l1.03,-0.82l-0.72,0.91l-0.94,0.3ZM507.15,58.75l0.0,-0.01l0.01,-0.0l-0.01,0.01ZM508.1,57.51l-0.08,-0.33l-0.22,-0.51l0.56,0.19l-0.26,0.65ZM360.85,126.32l-0.01,-0.05l0.0,0.0l0.01,0.05ZM531.38,144.9l0.16,-0.53l0.78,0.13l0.28,-0.96l1.18,0.72l-0.1,2.04l0.58,0.62l-0.44,0.97l-0.38,-0.82l-0.77,-0.33l-0.36,-1.55l-0.93,-0.28ZM519.62,110.65l0.67,-1.43l-0.59,-2.65l0.45,-2.65l-0.49,-1.1l0.57,0.5l0.52,0.03l0.81,-0.04l0.61,-0.56l1.0,0.01l1.31,-0.97l-0.58,-1.12l1.09,-0.48l-0.09,1.06l0.61,0.43l0.35,1.43l0.7,0.41l1.89,0.08l0.69,-0.78l-0.08,-1.25l0.9,-0.01l0.28,0.61l-1.0,1.11l-0.35,0.98l-1.33,0.18l-0.66,0.72l-0.21,1.5l0.63,0.59l-1.78,0.75l-0.15,1.47l0.7,1.77l1.56,0.02l0.23,-0.67l1.76,1.19l0.89,-0.75l0.31,0.76l-0.25,0.83l-0.63,0.22l-3.49,-0.79l-1.31,0.64l-0.73,-0.09l-4.86,-1.92ZM530.8,110.51l0.0,-0.0l0.0,0.0l-0.0,0.0ZM525.21,99.98l0.36,-0.67l0.3,-0.02l-0.13,0.45l-0.53,0.24ZM526.86,145.61l0.13,-1.36l0.19,0.01l0.16,1.06l-0.48,0.29ZM521.53,48.5l1.34,-0.94l0.27,-0.41l-0.18,0.37l-1.05,1.19l-0.37,-0.21ZM523.47,46.55l0.74,-1.75l0.73,-0.99l0.79,-0.33l-0.83,0.67l-1.43,2.39ZM524.86,146.25l-0.6,-0.87l0.65,-0.55l0.64,0.38l-0.68,1.04ZM521.92,143.29l-0.09,-0.72l0.45,-0.92l1.05,-0.36l-0.3,1.81l-1.11,0.18ZM521.59,100.37l0.08,0.24l-0.17,0.69l-0.53,-0.6l0.62,-0.34ZM515.68,53.56l0.24,-0.31l0.44,-0.74l0.23,0.26l-0.91,0.8ZM513.57,62.92l0.86,-0.42l0.25,0.2l-0.47,0.35l-0.65,-0.13ZM513.21,101.75l-0.01,-0.69l0.26,0.12l-0.25,0.57ZM513.21,102.21l0.03,0.18l-0.03,-0.01l-0.0,-0.16ZM514.23,100.99l0.75,-1.56l1.22,0.82l-0.83,0.48l-0.1,0.34l0.57,0.61l-0.6,1.18l-0.51,-1.48l-0.5,-0.4ZM513.43,94.67l0.2,-0.63l0.02,-0.22l0.27,0.43l-0.48,0.42ZM510.12,54.83l-0.51,-0.07l1.07,-0.63l-0.28,0.32l-0.27,0.38ZM504.39,126.47l0.07,-0.33l-0.1,-0.23l0.32,0.37l-0.29,0.19ZM486.98,62.49l0.03,-0.0l0.0,0.0l-0.02,0.01l-0.02,-0.01ZM485.63,63.39l0.54,0.1l-0.02,0.34l-0.25,0.04l-0.27,-0.47ZM454.09,50.17l0.13,-0.09l0.08,0.14l-0.16,-0.03l-0.06,-0.01ZM452.27,53.38l0.03,-0.01l0.17,0.41l-0.06,0.02l-0.14,-0.42ZM434.46,54.14l1.26,0.02l0.01,0.07l-0.28,0.6l-1.14,0.18l-0.82,-0.99l0.32,-0.17l0.65,0.3ZM433.13,40.66l1.23,-0.46l0.58,1.41l-0.66,1.05l0.78,0.6l0.2,1.54l-0.51,1.34l-0.44,-1.53l-1.17,-1.68l0.52,-0.78l-0.53,-1.5ZM429.88,63.81l0.68,0.02l-0.03,0.45l-0.01,0.0l-0.63,-0.47ZM388.46,45.73l0.19,0.38l0.6,0.14l0.66,-0.5l0.49,0.43l-0.85,1.52l0.48,0.81l0.76,-0.08l0.9,-0.83l0.91,1.53l0.73,0.07l0.54,-0.96l2.48,-0.49l1.11,-1.08l0.48,-0.06l1.6,0.78l0.31,1.27l0.36,0.27l0.52,-0.53l0.42,-1.83l1.74,-1.16l0.4,1.46l0.88,1.42l0.64,0.26l0.41,-0.56l-0.33,-2.1l-0.35,-0.37l0.11,-0.61l0.43,-0.68l0.66,-0.29l0.31,0.62l-0.3,0.71l0.45,0.57l0.63,-0.08l0.43,-0.65l0.71,0.3l0.93,-0.24l0.87,2.86l0.3,0.4l1.03,-0.21l0.11,1.3l-0.91,-0.0l-0.5,0.59l-0.34,1.72l0.24,0.65l-1.67,-0.59l-2.12,3.28l-1.32,0.44l-5.74,4.16l-1.26,-1.19l-4.49,-1.99l-0.23,-0.57l-2.11,-1.43l-0.51,-0.67l-1.33,-0.4l-0.24,-2.15l-1.15,-1.39l-0.81,-3.26l0.19,-1.08l-0.71,-0.87l0.22,-1.47l2.09,2.41ZM378.38,56.74l0.59,0.01l0.56,-0.49l-0.1,-1.47l1.5,0.55l0.63,-0.24l0.82,-0.95l-0.3,-2.5l0.3,-1.02l-0.8,-0.9l1.34,-1.21l0.85,-1.31l1.2,-0.18l1.05,2.05l-0.33,0.97l0.13,1.09l1.61,1.53l-0.32,2.31l0.53,0.38l0.69,-0.27l1.36,0.32l1.54,1.16l-0.09,0.49l-0.94,0.42l-1.6,0.14l-3.8,-1.49l-4.6,1.28l-1.27,-0.09l-0.56,-0.61ZM378.62,87.87l0.0,-0.0l0.01,0.0l-0.01,-0.0ZM367.78,126.07l0.13,0.18l0.18,0.5l-0.31,-0.69Z", "name": "Northern Territory"}, "AU-QLD": {"path": "M895.23,423.61l0.32,-1.8l-0.29,-0.7l0.29,-1.4l-0.28,-1.26l0.7,-1.19l0.05,-0.87l0.74,0.6l0.78,0.04l-1.73,6.51l-0.57,0.07ZM554.86,165.23l3.44,2.77l2.03,0.68l0.53,0.48l1.77,0.01l2.58,1.08l3.56,-0.34l0.63,0.65l3.52,1.44l3.63,0.53l0.49,0.35l0.63,1.47l1.83,1.13l-0.24,0.58l0.28,2.45l1.29,2.74l0.79,0.98l1.78,0.88l2.7,0.36l4.52,3.58l3.59,0.83l2.55,1.15l0.62,1.04l1.23,0.96l2.68,0.21l2.72,-0.31l3.72,-0.8l0.9,-0.6l1.39,-0.12l2.27,-1.21l1.74,-1.36l1.12,-0.24l0.69,-1.05l1.85,-0.78l0.86,-2.2l0.47,-2.74l1.0,-2.05l0.24,-1.48l-0.27,-1.25l2.19,-2.8l0.73,-1.92l0.72,-0.18l1.9,-2.19l0.78,-2.97l0.58,-0.25l0.71,-1.51l0.27,-1.3l-0.32,-0.86l0.63,-0.93l0.74,-3.24l1.75,-3.53l-1.15,-3.05l0.58,-0.8l0.77,-5.54l1.03,-3.8l1.85,-4.36l0.22,-1.52l1.22,-1.66l-0.02,-0.91l0.52,-0.51l0.07,-2.3l-1.28,-2.59l-1.81,-8.81l0.24,-1.73l1.5,-4.45l-0.05,-2.16l-0.39,-1.04l-2.14,-2.82l-0.35,-1.73l0.13,-1.92l1.15,-4.54l2.21,-4.67l0.84,-0.18l-0.02,-0.89l0.67,-1.62l-0.26,-1.01l-1.28,-1.73l-0.44,-2.83l-0.42,-0.4l0.88,-1.4l2.39,-1.5l1.32,-3.23l0.29,0.19l0.47,-0.42l0.46,0.54l0.34,2.91l0.94,1.4l0.46,0.19l0.29,-0.4l-0.02,-1.38l-0.54,-1.78l1.52,-0.52l0.55,-0.8l-2.09,-0.35l-1.54,-1.02l1.81,-1.02l0.67,0.02l0.42,-0.32l-0.25,-0.46l-1.1,-0.46l-0.79,0.35l-1.99,0.0l-1.55,-1.5l0.63,-0.5l-0.12,-0.73l-2.18,-0.29l1.55,-4.06l1.35,0.27l0.84,-0.5l-0.85,-1.22l-0.3,0.09l0.93,-2.82l1.39,-1.79l0.46,2.78l0.3,0.39l0.45,-0.2l0.7,-1.28l0.99,0.66l0.6,-0.2l0.24,-0.69l-0.05,-0.51l-0.91,-1.09l-0.87,-0.35l-0.04,-1.38l0.41,-1.79l0.97,-1.31l0.0,-1.15l2.67,-8.19l0.05,-2.32l0.58,-1.99l-0.21,-4.27l4.04,-1.23l1.49,-1.76l0.87,-2.14l1.02,0.04l0.68,-0.39l1.37,0.86l-0.91,0.75l-0.39,0.82l-0.87,0.54l-0.26,2.04l0.47,0.57l0.46,-0.14l0.62,-0.55l0.46,-1.07l0.61,-0.03l0.27,1.1l0.71,0.42l0.0,1.25l0.73,0.07l0.54,-0.55l0.48,0.02l0.75,1.63l0.61,2.49l-0.3,1.02l0.18,1.43l0.91,0.79l0.63,1.46l-1.09,2.0l0.4,0.8l-0.02,1.44l0.42,0.82l0.11,5.23l3.08,2.43l2.6,-0.66l1.8,1.36l-2.54,3.71l-0.2,4.07l0.86,0.7l1.74,-0.02l1.41,0.98l0.91,3.25l2.89,1.58l-1.13,2.55l-0.44,3.25l0.21,0.47l0.72,-0.43l0.58,0.19l0.76,-0.36l1.25,0.1l-0.48,1.25l0.32,0.66l-0.18,2.7l0.54,2.73l-0.01,3.02l1.49,2.25l-0.28,1.49l0.27,0.74l-0.64,1.4l-0.76,3.6l1.49,3.02l0.34,1.5l1.65,1.49l0.45,4.35l0.9,2.94l0.81,1.53l1.52,1.57l2.6,0.91l2.63,-1.21l2.22,-1.88l0.52,-0.99l0.07,-1.39l0.58,0.08l0.48,0.72l1.37,0.3l3.11,-1.46l0.92,-1.77l0.24,0.07l1.31,1.75l-0.23,1.73l0.22,0.63l1.08,0.19l-0.4,0.79l0.16,1.66l1.36,1.78l0.64,0.28l1.26,-0.19l0.94,1.06l2.19,0.28l0.62,1.11l0.28,1.52l1.87,1.59l0.89,-0.1l2.1,0.96l0.96,-0.02l0.25,0.86l1.26,1.49l1.18,0.07l-1.93,2.95l-0.18,2.12l0.56,1.48l0.9,0.53l-0.52,0.9l0.11,1.09l-0.63,0.42l-0.31,1.12l0.58,0.57l0.19,0.72l-0.29,0.83l1.1,1.17l0.15,0.53l-0.31,0.79l1.27,2.62l-0.15,1.42l0.3,0.56l-0.38,0.7l0.01,0.86l1.7,2.15l0.65,1.41l-0.61,3.05l0.63,0.65l0.12,0.68l-1.15,1.58l-0.34,2.77l0.58,0.93l0.88,0.08l0.37,1.08l2.2,3.25l2.04,1.44l0.35,0.96l0.77,0.51l1.1,1.68l-0.53,0.22l-0.24,0.53l1.0,1.98l0.98,-0.24l-0.16,-1.28l0.85,-0.75l0.78,0.41l1.3,-0.85l-1.39,2.61l-0.21,1.48l1.56,2.34l0.34,1.8l1.41,2.7l0.92,0.86l-0.1,2.71l1.7,2.45l-0.89,1.14l-0.02,1.82l-0.44,0.59l0.53,1.74l-0.28,1.49l-2.0,4.73l0.11,2.47l2.14,2.73l1.68,0.54l0.55,2.79l0.51,0.46l2.34,0.23l-0.16,1.57l-0.87,2.29l-0.47,3.29l0.21,0.74l1.34,2.03l1.67,1.14l1.22,1.54l1.26,0.48l1.04,1.03l2.03,0.99l1.1,0.23l0.98,-0.38l1.1,1.35l2.27,1.57l1.56,-0.19l1.55,-1.64l0.11,1.9l1.72,2.27l0.99,-0.1l2.07,0.56l0.71,-0.3l2.89,0.04l0.76,-0.38l0.48,1.13l1.28,1.55l0.87,2.51l0.12,1.08l-0.71,0.35l2.73,3.17l2.51,0.3l0.38,-0.55l-0.64,-1.51l-0.05,-1.08l0.97,0.31l0.32,0.31l0.64,2.73l1.38,1.17l2.09,0.36l0.48,-0.54l0.78,-0.16l1.03,1.18l3.01,0.73l0.44,1.0l-0.38,0.17l0.01,1.55l2.86,2.03l0.22,0.64l0.98,0.03l0.89,-0.66l-0.19,-0.6l0.45,-0.79l-0.83,-1.17l0.85,0.54l1.2,-0.37l0.18,1.53l0.69,0.91l0.17,0.77l0.75,0.12l0.45,-0.3l0.32,1.38l0.56,0.33l1.79,-0.78l0.12,0.93l1.19,1.26l-0.19,0.86l0.29,0.93l-1.03,-0.29l-0.66,0.88l-1.18,-0.75l-0.5,0.45l0.37,1.64l-0.96,0.57l-0.41,0.51l0.11,0.39l0.82,1.41l0.63,0.29l-0.29,0.43l0.62,1.3l0.67,0.4l0.53,0.89l1.1,0.08l0.18,1.03l-0.53,1.6l0.82,0.13l0.71,-0.78l0.92,0.53l0.87,-0.14l1.12,0.83l0.18,0.56l-0.24,0.51l0.3,0.53l1.33,-0.14l0.55,0.53l0.75,0.07l1.56,1.91l0.0,0.59l-0.78,1.38l0.06,1.09l0.9,1.51l0.81,-0.2l0.52,0.36l-0.12,0.57l0.51,1.15l-0.37,0.14l-0.22,0.64l0.74,0.46l-0.68,0.66l-0.01,1.33l0.44,0.32l1.07,-0.53l0.74,0.3l0.09,0.84l0.59,0.81l0.89,0.15l-0.5,1.04l0.79,1.89l-0.81,0.52l-0.13,1.09l0.91,1.52l-0.02,1.8l1.04,1.93l0.16,1.45l0.87,1.7l-0.35,0.7l1.16,1.46l-0.4,0.7l0.14,0.41l1.27,0.56l0.5,0.84l0.64,0.27l-0.07,1.67l-0.78,1.08l0.42,0.58l0.8,-0.16l1.62,-1.04l0.88,-1.37l1.17,1.87l1.79,1.5l1.37,2.34l0.58,0.34l0.58,-0.45l-0.56,-2.19l-2.01,-4.4l0.42,-0.47l-0.53,-0.9l1.08,-2.64l1.23,-0.52l0.38,0.2l0.88,1.95l0.73,0.51l1.0,2.68l4.64,2.23l0.88,0.91l1.62,0.56l2.03,1.68l0.56,-0.04l0.13,-0.7l-0.63,-0.91l-0.17,-1.35l-0.68,-0.53l-0.2,-1.05l0.47,-1.8l0.99,0.13l-0.03,1.25l2.74,1.43l-0.55,0.73l-0.76,-0.4l-0.6,0.73l0.31,0.58l-0.16,0.35l0.46,0.56l0.4,-0.1l0.33,1.49l0.56,0.1l0.48,-0.36l0.11,0.65l0.6,0.32l0.32,0.76l-0.88,4.8l-0.86,0.16l-0.21,0.59l0.77,0.77l0.14,1.49l-0.34,2.86l0.72,0.62l0.2,1.19l0.7,0.35l-1.1,1.41l0.59,2.38l1.41,1.63l-1.01,0.01l-0.42,0.56l1.12,0.59l0.52,1.05l0.46,0.2l1.18,-0.64l1.31,0.52l0.47,0.85l1.91,1.55l0.64,1.95l0.74,1.09l2.02,0.6l0.35,0.65l0.71,0.14l2.65,3.41l0.99,-0.35l1.07,0.69l-0.2,0.9l0.49,0.73l0.48,0.21l0.55,-0.31l0.17,-0.69l0.55,-0.05l1.42,1.03l0.58,-0.44l-0.18,-0.78l0.74,0.43l0.62,-0.51l0.81,2.27l0.97,0.74l0.91,-0.05l0.78,0.89l1.5,4.58l1.21,2.43l1.49,1.92l4.11,3.16l2.23,0.61l1.28,1.19l0.6,1.87l0.15,2.58l1.97,2.99l0.86,0.53l-1.12,-0.01l-0.36,0.48l0.19,0.46l1.17,0.31l1.71,1.42l2.6,0.75l0.6,-0.32l1.48,0.38l0.28,2.58l-0.89,0.56l-0.42,0.84l0.52,0.51l1.1,-0.56l-0.07,0.4l0.39,0.43l-1.18,1.26l0.07,2.35l-0.48,0.66l0.86,0.82l0.16,0.81l1.26,0.62l0.72,1.25l0.27,1.61l-0.3,1.64l0.4,0.39l0.51,-0.22l0.78,-2.09l0.6,1.29l1.41,0.43l-1.0,2.23l-1.52,6.21l0.4,1.37l0.95,0.43l-0.48,1.51l-0.08,4.49l0.29,0.9l0.57,0.28l-0.06,4.71l1.39,4.22l-1.72,0.02l-0.91,0.55l-0.89,1.13l-0.27,1.18l0.67,0.58l1.04,0.01l-0.03,0.43l-1.12,1.21l0.13,0.82l0.68,0.62l1.59,0.65l0.55,2.06l1.48,0.78l0.98,2.09l0.24,1.98l1.01,1.82l0.99,1.07l0.0,0.89l0.67,0.18l-0.2,1.63l-0.46,0.33l-0.22,1.1l0.46,0.76l0.54,-0.07l0.15,2.27l1.08,1.52l-2.88,2.07l-0.64,-0.16l-2.92,0.43l-1.96,2.26l-5.27,-0.75l-2.4,0.85l-3.04,-1.56l-0.44,0.11l-0.65,0.85l-0.65,-1.23l-0.72,-0.45l-0.61,0.05l-1.34,1.09l-0.88,1.36l-2.08,0.48l-1.31,1.17l-1.54,0.06l-4.59,2.63l-0.06,0.97l0.55,0.56l0.4,1.15l1.32,1.47l-0.38,0.65l-0.67,3.73l-1.65,0.52l-1.61,-0.2l-0.76,1.19l-0.91,-0.27l-0.73,-1.38l-0.59,-0.26l-1.59,0.95l-2.03,0.64l-1.01,1.61l-0.14,1.21l-2.09,2.1l-0.72,0.3l-0.28,-0.06l-0.14,-0.93l-0.53,-0.45l-0.61,-4.24l-3.0,-2.06l-2.04,-0.35l-0.13,-1.66l-0.43,-0.7l-1.44,-0.27l-0.92,-0.81l-3.22,-1.32l-3.95,0.55l-3.62,-0.27l-3.37,-2.67l-1.53,0.48l-1.77,-0.03l-3.11,1.1l-5.66,0.15l-1.12,0.39l-1.62,-0.28l-0.6,-1.0l-2.77,0.35l-0.64,0.48l-1.09,1.93l-3.13,1.35l-2.08,1.92l-1.85,0.71l-0.82,2.25l-1.85,1.35l-175.66,0.0l0.0,-71.14l-0.4,-0.4l-65.92,0.0l0.0,-217.36ZM634.98,72.13l0.07,1.52l-0.75,0.25l-0.0,-0.27l0.68,-1.5ZM794.18,253.26l0.98,0.76l0.04,0.74l-0.87,-0.5l-0.16,-1.0ZM857.22,337.03l-0.47,-0.71l-0.74,-0.46l0.64,0.02l0.73,0.67l-0.16,0.48ZM808.2,279.27l0.01,-0.03l0.0,0.01l-0.01,0.01ZM894.45,408.27l1.55,-0.69l-1.09,4.97l-0.28,-0.55l-0.17,-3.73ZM886.84,364.36l3.44,-2.59l1.5,-2.35l0.17,-1.15l-0.25,-1.08l-1.78,-2.48l2.02,-1.81l0.03,3.73l0.45,1.38l1.48,1.63l-4.67,10.55l-1.71,4.78l0.38,1.54l-0.03,0.65l-0.47,0.56l-0.97,-1.28l-0.27,-2.41l-0.88,-0.96l0.03,-0.5l0.83,-0.7l0.33,-2.12l0.73,-0.78l0.75,-1.69l-0.23,-1.4l0.21,-0.83l-1.09,-0.71ZM842.74,323.55l0.45,-0.06l0.34,0.55l1.96,0.73l0.16,0.55l0.92,-0.1l-0.13,1.06l0.28,1.24l1.28,1.66l0.04,0.62l-0.42,0.5l-0.86,0.08l-0.82,-0.93l-0.54,-1.35l-3.32,-3.96l0.65,-0.58ZM830.57,296.15l0.43,-0.69l0.69,0.74l-0.8,0.78l-0.32,-0.83ZM817.53,293.83l-0.31,-0.73l0.24,-1.22l0.32,0.61l-0.26,1.34ZM813.87,298.45l-0.07,-0.18l0.14,-0.5l0.02,0.02l-0.09,0.67ZM796.93,249.38l0.39,-0.61l-0.26,-0.51l0.15,-0.74l0.2,1.17l0.86,0.91l-0.31,0.45l-0.56,-0.05l0.0,-0.38l-0.46,-0.25ZM795.44,246.36l0.61,-1.24l0.25,-0.0l-0.29,0.78l0.26,0.48l-0.83,-0.02ZM749.09,223.31l0.73,-0.21l0.41,0.11l-0.82,0.53l-0.33,-0.44ZM744.59,213.75l0.15,0.18l0.24,0.43l-0.63,0.03l0.24,-0.64ZM736.61,202.99l0.82,0.06l-0.34,1.45l1.2,1.37l-0.24,0.47l0.52,0.45l-0.84,1.33l-1.16,-0.41l-0.49,-1.93l-0.63,-1.0l-1.67,-1.4l2.22,0.7l0.49,-0.26l0.11,-0.83ZM659.42,3.33l-0.8,0.47l-1.97,-0.24l0.39,-0.17l2.38,-0.05ZM647.59,21.5l0.41,-0.9l0.53,-0.17l1.05,0.16l0.38,0.57l-0.85,1.1l-1.23,-0.35l-0.29,-0.41ZM649.38,30.72l-0.54,-0.03l0.07,-0.46l0.67,0.13l-0.2,0.37ZM645.89,31.65l1.45,-1.0l1.33,1.91l-1.38,0.41l-0.5,0.65l-0.85,-1.0l-0.05,-0.97ZM646.88,0.56l0.57,-0.14l1.03,0.3l-0.66,0.02l-0.94,-0.18ZM646.3,20.63l-0.86,-0.94l0.77,-1.18l0.64,0.62l-0.55,1.5ZM580.08,168.21l-0.09,-0.42l0.25,-0.33l0.0,0.68l-0.16,0.08ZM580.47,166.56l0.24,-0.86l0.98,-1.02l0.14,-0.7l1.68,-1.28l3.93,-0.62l2.03,-0.85l1.14,0.89l0.93,0.16l0.41,0.52l-0.13,0.45l-0.86,0.0l-0.88,0.44l-1.12,-1.25l-0.92,0.65l-0.86,0.13l-0.15,0.84l-0.47,0.41l0.06,1.06l-0.45,1.02l-0.41,-0.43l-0.64,-0.04l-0.67,1.13l-1.29,0.67l-1.31,-0.01l-0.83,-1.11l-0.54,-0.22ZM585.94,176.86l0.11,-0.05l-0.09,0.11l-0.03,-0.05ZM586.42,176.57l1.36,-1.68l0.73,0.61l-0.07,0.48l0.39,0.53l-1.23,0.38l-0.42,-0.42l-0.77,0.11Z", "name": "Queensland"}, "AU-SA": {"path": "M431.55,527.42l-1.49,-0.08l-2.09,0.56l-1.63,-0.43l-2.53,-2.65l-3.47,-2.09l-3.13,-2.37l-5.49,-3.01l-8.05,-3.16l-1.12,-0.04l-3.16,1.95l-4.34,1.28l-5.33,-0.55l-8.64,-0.29l-1.79,0.5l-2.99,-0.12l-4.19,0.64l-4.76,0.16l-1.91,0.52l-5.56,0.32l-1.42,0.52l-2.56,0.22l-0.0,-135.9l264.47,0.0l0.01,192.75l-0.73,0.25l0.02,102.26l-5.65,0.36l-1.96,-0.81l-3.05,-2.44l-1.21,-0.45l-0.81,-0.88l-0.5,-1.66l-2.15,-3.86l-2.64,-2.2l0.33,-0.45l-0.52,-1.2l-1.96,-1.04l-0.89,0.19l-4.18,-5.46l-1.04,-2.0l0.78,-0.66l0.12,-0.95l-1.03,-1.69l-0.25,-1.37l-1.16,-0.94l2.27,-1.2l1.38,-1.6l0.49,-2.08l-0.15,-3.5l-4.41,-9.9l0.32,-0.37l-0.14,-1.11l-1.68,-4.28l-2.66,-3.23l-1.32,-0.67l-4.12,-3.71l1.64,0.15l0.9,-0.69l0.38,-2.51l-1.7,-1.57l-0.92,-0.37l0.68,-0.38l1.58,0.28l0.67,-0.53l0.08,-0.8l-0.48,-0.67l0.29,-1.03l-0.21,-0.6l-0.68,-0.18l-0.4,0.27l-1.12,-1.29l-2.07,-0.42l-0.21,0.84l-1.63,1.03l-1.66,-0.11l-1.7,0.98l-0.21,0.73l0.2,0.92l1.5,0.75l-1.9,-0.46l-0.89,-0.77l-1.83,0.11l-0.47,0.31l-0.04,0.53l0.5,0.56l2.45,0.44l-0.82,0.3l-1.79,-0.65l-1.18,0.1l-2.42,0.73l-0.53,0.86l-1.04,0.77l-2.75,0.62l-3.66,-0.27l-1.52,0.61l-0.73,-0.23l-0.99,-0.86l0.59,-1.49l2.61,-1.25l2.2,-2.66l1.93,-1.26l0.16,-2.0l0.61,-1.01l-0.29,-1.1l0.15,-1.71l1.06,-1.96l-0.6,-4.09l0.16,-1.97l0.88,0.56l0.38,-0.94l-0.36,-1.15l-2.05,-1.46l-0.22,-1.14l-1.51,-1.26l-0.8,-1.66l-0.85,-0.5l-1.43,-4.48l-0.62,-0.95l-0.92,-0.56l0.01,-1.24l-1.85,-2.15l-0.8,0.39l-1.35,2.67l0.04,0.8l0.53,0.83l-2.33,2.68l-0.86,2.79l-0.13,1.87l0.46,0.65l-0.6,1.54l-0.2,2.07l-1.21,2.11l-0.92,2.98l-0.08,1.38l-0.51,0.62l0.06,1.72l-1.33,1.08l-2.41,-1.23l-3.09,-0.32l-2.07,1.34l-2.13,0.03l-1.57,1.74l-2.73,-0.37l-2.84,1.74l-0.6,-0.03l-0.65,-0.82l0.32,-0.75l1.68,-1.41l0.7,-1.41l0.07,-0.64l-0.45,-1.12l0.73,-0.78l-0.01,-0.85l0.9,-1.25l1.21,0.53l1.14,0.06l2.77,-0.52l2.66,1.19l0.87,-0.21l0.79,-0.81l0.35,-3.05l1.2,-4.58l-0.7,-2.47l-0.05,-1.51l-0.52,-0.66l-0.54,-0.07l0.77,-0.69l0.59,-3.05l-0.21,-1.82l-0.66,-1.33l0.73,0.22l0.7,-0.52l0.81,-1.83l-0.43,-1.42l2.03,-2.2l-0.31,-1.14l2.22,-2.12l1.17,-2.04l0.68,-0.1l1.53,-2.08l0.67,0.43l0.77,-0.57l0.11,-2.42l-1.61,-3.19l0.11,-1.0l-1.24,-2.17l0.79,-1.47l1.98,-1.06l0.9,-0.19l0.54,0.25l0.63,-0.3l0.29,-0.62l-0.08,-1.17l-0.74,-1.61l-1.1,-0.4l-1.2,-5.24l0.59,-0.47l0.06,-0.66l-1.86,-1.38l-0.02,-1.02l-0.94,-1.23l0.27,-0.88l-0.75,-0.37l-0.28,-0.79l-0.7,0.0l-0.46,1.47l0.01,3.08l0.85,0.66l0.32,1.47l0.04,1.79l-0.42,0.94l-0.6,0.14l-0.21,0.45l0.5,1.46l-0.58,-0.02l-1.56,-0.96l-0.8,0.28l-0.95,0.87l-0.12,1.06l-1.64,1.75l-1.33,0.77l-0.52,2.18l-1.04,1.84l-0.39,2.91l-1.39,2.08l-1.75,3.75l-1.45,1.21l-2.78,0.55l-0.94,-1.04l-0.93,-0.06l-0.66,1.13l-0.88,0.73l0.41,0.91l-1.89,0.34l-1.79,0.93l-0.41,0.53l-2.27,0.91l-0.56,0.54l-0.15,0.69l-1.72,1.36l-1.39,0.45l-1.45,1.2l-0.45,1.42l-2.63,4.47l-2.1,1.18l-0.51,0.72l0.12,0.62l-0.28,0.48l0.31,0.88l-0.16,1.29l-0.3,-0.76l-0.44,-0.23l-2.68,0.99l-0.47,0.45l-0.5,1.43l0.36,0.96l-0.85,-0.0l-0.62,1.15l-0.15,1.26l0.54,0.94l-0.98,0.07l-0.92,1.39l0.34,0.51l1.14,0.15l1.02,-0.27l1.17,-1.01l0.71,0.34l0.42,-0.29l-1.02,1.78l0.75,2.95l-0.58,0.25l-0.52,-1.14l-1.36,-0.68l-0.91,-1.3l-0.99,-0.51l-1.35,0.15l-0.95,0.94l-0.35,1.26l-0.67,0.0l-0.44,-1.6l-3.3,-3.8l-2.66,-1.26l0.18,-0.76l1.14,0.5l2.0,-0.5l0.43,-0.54l-0.25,-0.54l-1.15,-0.26l-0.03,-1.13l-0.51,-0.26l-0.68,0.52l-0.16,-0.75l0.41,-1.23l-0.76,-1.68l-0.73,-4.68l-0.64,-1.12l-1.29,-0.58l0.66,-0.59l-0.25,-3.24l-1.67,-2.82l-1.12,-0.59l-2.95,-3.05l-3.3,-2.65l0.4,-2.08l-0.17,-1.71l-1.11,-3.27l-2.61,-2.42l0.55,-0.08l0.31,-0.45l-0.59,-1.44l-2.56,-0.92l-0.87,0.23l-0.22,1.05l-1.53,-0.88l-0.86,-0.14l-1.29,0.51l-0.45,-0.43l-0.57,0.1l-0.22,0.97l-0.89,-0.77l-1.0,-2.83l-0.9,-0.34l0.48,-1.02l-0.55,-1.15l-0.68,-0.36l-0.68,0.26l-1.34,-0.37l1.17,-1.14l0.32,-0.99l-1.35,-2.51l2.15,0.19l-0.14,1.6l0.88,0.47l1.49,-2.04l0.57,-1.3l-0.51,-2.53l-1.08,-1.77l-1.8,-1.64l-0.96,-0.22l-0.76,0.4l-0.56,-0.22l-0.71,0.19l-0.78,0.93l-1.26,-0.1l-0.94,1.09l-0.4,0.06l0.28,-2.26l0.15,-0.27l0.47,0.25l0.98,-0.43l0.16,-1.0l-2.67,-3.51l-0.76,-0.16l-0.55,0.42l-0.19,-1.0l-1.4,-0.59l-0.06,-0.61l-0.49,-0.36l0.19,-0.78l-0.89,-0.63l-1.14,-0.19l-0.59,0.23l-0.5,1.64l-1.04,-0.57l-0.35,-0.8l-0.58,-0.01l-1.43,0.75l-0.01,0.79l0.6,0.39l-0.39,0.42l-2.14,-0.45l-0.95,0.59l-1.62,-0.77l-0.85,0.26l-2.55,-2.36l-1.17,0.15l-0.35,-0.75l-4.27,-3.03l-2.64,-0.05l-1.63,-0.36l-1.65,0.17l-1.37,0.67l-0.32,0.6l0.09,0.62ZM576.07,616.55l-0.02,-0.01l-0.01,-0.01l0.03,0.02ZM479.63,556.89l0.06,-0.0l0.03,0.09l-0.07,-0.07l-0.02,-0.01ZM495.39,591.75l-0.33,-0.3l0.35,0.13l-0.01,0.17ZM494.74,591.17l-1.57,-0.76l-1.37,0.31l-0.82,0.54l1.46,-2.42l0.54,0.82l1.6,0.4l0.17,1.1ZM581.2,618.92l-3.37,-2.32l0.8,-0.43l0.16,-0.82l0.83,-0.73l1.77,1.06l-0.23,1.61l0.49,0.67l-0.44,0.45l-0.02,0.52ZM522.49,624.47l1.16,-3.41l2.05,-0.29l2.47,-0.93l5.97,-0.92l1.54,-0.69l2.96,-0.68l1.15,-0.84l2.39,0.69l3.08,-0.68l-0.44,1.1l0.24,0.41l0.96,0.19l-1.11,1.21l0.02,0.57l0.46,0.43l2.16,0.45l1.88,-0.39l0.11,1.3l0.83,0.44l1.48,-0.53l0.82,-1.56l0.95,0.04l1.95,0.72l0.31,1.07l0.92,0.39l0.08,0.44l-0.73,0.37l-0.79,0.98l-2.27,-1.07l-2.59,-0.31l-1.5,0.2l-2.84,0.98l-0.78,1.13l0.32,1.29l-0.27,0.52l-1.05,0.26l-1.78,1.06l-1.92,-1.72l-3.31,-0.8l-1.08,0.4l-0.45,1.03l-0.43,0.14l-2.78,-0.48l-2.02,0.66l-1.39,-0.52l-2.98,0.82l-1.16,-2.05l-1.54,-0.53l-1.05,-0.92ZM513.98,602.42l0.31,0.26l0.09,0.32l-0.28,-0.05l-0.11,-0.53ZM477.12,570.12l0.01,-0.29l0.58,-0.16l0.04,0.23l-0.63,0.22ZM457.09,534.55l-0.67,0.27l-0.1,-0.04l0.96,-0.87l-0.19,0.64Z", "name": "South Australia"}, "AU-NSW": {"path": "M632.87,581.75l-0.6,-1.08l-1.24,-0.13l-1.42,-0.85l-1.36,0.22l-0.45,-0.7l-1.48,-0.95l-1.22,0.28l-1.26,-0.62l-1.94,-0.05l-0.72,-0.81l0.0,-122.14l175.84,-0.01l2.32,-1.66l0.68,-2.09l1.81,-0.7l1.96,-1.82l3.25,-1.45l1.47,-2.29l2.21,-0.36l0.51,0.92l2.18,0.44l1.05,-0.44l5.79,-0.17l3.11,-1.1l2.15,-0.03l0.82,-0.4l3.27,2.64l3.86,0.31l3.76,-0.57l2.98,1.22l0.96,0.83l1.4,0.26l0.45,2.26l2.24,0.47l2.6,1.67l0.62,4.22l0.57,0.54l0.22,1.06l1.01,0.32l1.03,-0.39l2.33,-2.34l0.23,-1.41l0.63,-1.18l1.97,-0.61l1.27,-0.83l0.83,1.41l1.64,0.59l0.79,-1.38l1.48,0.24l2.03,-0.7l0.38,-0.66l0.93,-4.49l-1.45,-1.76l-0.88,-1.8l4.24,-2.33l1.5,-0.05l1.39,-1.2l2.11,-0.5l0.69,-0.56l0.37,-0.93l1.13,-0.95l0.5,0.39l0.24,0.9l0.74,0.42l0.69,-0.11l0.54,-0.76l0.67,0.57l2.23,0.89l1.23,-0.13l1.34,-0.71l1.67,0.44l3.68,0.3l0.79,-0.45l1.31,-1.81l2.67,-0.41l0.86,0.15l3.14,-2.21l0.31,0.38l0.72,0.11l0.49,2.97l-0.62,4.55l0.32,2.13l1.15,1.62l-0.62,2.34l0.11,2.42l-1.8,1.74l-1.52,2.26l-0.44,1.36l0.2,1.4l-0.47,0.26l-1.61,2.99l-0.23,1.18l0.62,1.63l-0.27,0.75l0.13,1.05l-0.83,2.49l-0.07,2.91l-0.74,1.85l0.13,1.34l-0.43,0.64l-0.29,2.04l-1.31,2.06l0.02,2.57l-0.29,1.01l-1.13,1.97l0.13,0.87l-0.26,0.75l-1.98,4.17l-1.23,5.87l0.41,2.75l0.78,1.28l1.03,0.25l-0.02,0.44l-0.91,1.6l-0.13,1.1l0.43,0.82l-1.7,2.16l-0.48,1.86l0.33,1.97l-1.29,1.95l0.41,1.94l-1.93,2.09l-0.13,1.97l-1.11,1.32l0.21,0.76l-1.21,1.43l-0.17,1.31l-2.75,2.36l-1.48,2.5l0.1,0.78l-0.52,0.59l-0.42,1.66l0.17,0.6l1.06,0.81l-0.88,1.57l0.03,0.83l0.41,0.36l-0.55,1.92l0.11,0.7l-3.66,1.64l-1.3,1.1l-0.26,0.7l-1.07,0.5l-1.16,1.67l-0.61,-0.37l-1.94,0.84l-0.13,0.7l0.57,0.44l2.14,0.18l-0.01,0.4l-0.65,-0.03l-0.76,0.64l-1.16,-0.2l-1.71,0.35l-2.45,1.08l-1.78,1.34l-0.06,0.77l-1.36,1.23l-0.12,0.99l-1.33,1.17l-1.06,3.32l-0.74,0.6l-0.66,1.27l-0.85,-0.34l-1.45,1.12l-0.34,1.36l0.37,0.56l0.62,0.22l-0.9,1.2l-0.41,2.19l-0.97,0.03l-1.98,0.72l-0.33,-0.74l-0.66,-0.15l-0.45,0.55l0.24,1.33l-0.36,0.57l0.45,0.4l0.53,-0.07l0.71,-0.67l-0.14,1.43l0.61,0.18l-0.41,1.57l0.28,0.67l-0.26,1.55l-0.78,0.13l-0.53,0.97l0.28,0.71l0.7,0.15l-0.26,1.52l-0.31,0.67l-0.77,-0.83l-0.77,0.04l-0.52,0.95l-1.07,-0.03l-0.56,0.5l0.24,0.63l1.23,0.46l-0.64,0.85l0.74,0.48l-2.97,2.13l-1.38,1.61l-1.03,1.77l-0.52,3.14l0.27,0.81l-0.44,0.62l-0.55,-0.28l-0.58,0.12l-0.86,0.95l0.18,0.81l0.91,0.19l0.67,0.58l-1.05,4.26l-1.25,0.72l-0.52,1.16l-0.65,0.56l0.73,0.92l-0.26,0.54l0.78,0.56l-0.1,1.05l-1.81,0.65l-0.44,1.36l0.51,0.87l-1.24,0.6l-0.6,1.1l-1.35,0.76l-1.22,1.93l-0.37,0.98l0.12,1.27l-1.72,2.18l-0.09,2.02l-1.63,2.33l-0.84,1.99l-1.22,-0.29l-0.85,0.32l-0.16,0.66l0.52,0.53l0.42,1.75l-1.0,0.51l-0.92,1.05l0.25,1.68l-0.24,2.19l-0.87,-0.18l-0.6,0.93l-0.05,0.46l0.85,0.11l0.43,0.46l-0.45,1.48l0.53,2.11l-0.27,0.67l0.2,0.91l-1.0,0.99l-0.55,1.09l0.05,1.52l-0.44,0.92l0.25,1.7l-1.51,2.92l-0.37,2.16l-1.0,1.39l0.02,1.14l-0.57,0.96l-0.07,0.89l0.62,0.52l-0.3,1.28l0.49,1.04l-0.71,0.28l-0.74,1.08l0.68,0.81l1.16,0.03l0.93,0.68l0.67,2.12l-1.32,0.25l-0.51,0.76l0.43,1.38l-0.29,2.05l0.53,1.8l-38.44,-17.87l-1.68,-0.2l1.63,-2.53l0.23,-1.66l-0.41,-0.9l-1.04,-0.56l-0.04,-1.48l-0.44,-1.24l-1.37,-1.22l0.3,-1.22l-1.03,-3.06l0.26,-1.65l-1.15,-1.38l0.09,-1.46l-1.58,-0.75l-0.58,-0.85l-4.35,-1.66l-3.6,1.39l-0.61,-0.89l-1.14,-0.34l-2.08,0.62l-0.86,1.13l-0.26,1.2l-1.34,-0.37l-1.91,0.38l-1.08,-0.62l-1.18,0.99l-0.5,1.13l-1.23,-0.85l-0.83,0.14l-0.45,0.54l-1.34,-0.7l-0.76,0.14l-0.67,-0.58l-0.88,-0.09l-0.5,-0.55l-1.41,-0.1l-1.39,-1.19l-1.85,-0.05l-0.86,-0.48l-1.92,0.28l-1.23,1.68l-2.23,-0.44l-1.35,0.41l-3.11,-0.85l-1.57,-0.04l-0.55,-0.93l-1.05,-0.38l-2.87,0.4l-0.83,-0.34l-3.84,-3.07l-1.91,-0.4l-2.72,1.11l-3.38,-0.55l-2.21,0.01l-2.59,0.45l-0.99,0.84l-0.24,1.55l-0.63,1.35l1.06,2.04l-1.8,-0.52l-1.74,1.37l-1.26,0.08l-1.31,-1.28l-1.62,-0.38l-2.39,-2.64l-0.96,-0.39l-2.14,-4.22l-0.8,-0.68l-0.98,-0.14l-2.07,-1.69l-1.82,-2.34l-2.15,-0.75l-0.49,-0.84l-1.83,-0.81l-2.72,-1.85l-2.8,-0.75l-1.27,-0.79l0.21,-1.41l-0.33,-1.2l-0.87,-0.68l-2.77,-0.91l-1.07,-1.85l-0.69,-3.46l0.29,-0.88l-0.15,-0.77l0.46,-0.66l0.04,-1.56l-0.88,-0.94l-0.94,0.05l-0.46,-0.86l-2.81,-1.38l-2.04,-0.18l-1.22,-0.58l-0.55,0.38l-0.92,-0.66l-1.02,0.41l-0.47,-1.24l-1.77,-1.05l-1.7,0.74l-0.74,2.23l0.08,0.81l-1.18,0.06l-0.3,0.31l0.06,0.85l-1.32,-0.26l-1.52,-3.04l-0.1,-1.01l-1.76,-1.66l-0.28,-2.52l0.72,-1.6l-0.23,-0.79l-0.6,-0.28l-0.83,0.16l-0.68,-0.51l-0.96,-1.06l-0.53,-1.99l-1.03,-0.17l-1.06,-0.82l-1.13,0.19l-1.11,-1.26l-4.67,0.36l-2.0,-0.67l-1.09,0.17l-1.82,1.04l-1.62,1.64ZM792.63,618.74l0.12,1.0l0.94,0.94l0.7,0.22l0.45,-0.33l0.36,2.31l0.59,1.09l2.49,1.19l0.65,-0.1l1.39,-2.2l-0.2,-1.96l0.2,-1.32l-0.4,-2.53l0.85,-0.6l0.55,-1.65l-0.13,-2.1l0.95,-1.27l0.93,0.17l0.59,-0.73l2.29,0.12l0.9,-0.74l0.06,-0.55l-3.48,-1.67l-0.23,-0.81l-0.93,-0.31l-0.26,-1.11l-1.37,-0.94l-0.99,0.17l-6.11,4.19l-0.62,0.81l-0.81,4.35l0.29,1.95l-0.21,1.8l0.41,0.63ZM837.5,602.24l0.66,0.16l-0.16,1.07l-0.36,0.37l-0.26,-0.26l0.11,-1.35ZM754.78,629.71l0.49,1.8l1.03,0.83l-0.46,0.12l-0.95,-0.95l-0.11,-1.8Z", "name": "New South Wales"}}, "height": 825.8587272481366, "projection": {"type": "mill", "centralMeridian": 0.0}, "width": 900.0});
$(function() {
    "use strict";

    jQuery('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        zoomOnScroll: false,
        color: '#8b94d6',
        regionStyle: {
            initial: {
                fill: '#8b94d6'
            }
        },
        markerStyle: {
            initial: {
                r: 9,
                'fill': '#fff',
                'fill-opacity': 1,
                'stroke': '#000',
                'stroke-width': 5,
                'stroke-opacity': 0.4
            },
        },
        enableZoom: true,
        hoverColor: '#8b94d6',
        markers: [{
            latLng: [21.00, 78.00],
            name: 'India'

        }],
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            var message = 'You clicked "' +
                region +
                '" which has the code: ' +
                code.toUpperCase();

            alert(message);
        }
    });


    $('#india').vectorMap({
        map: 'in_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#64ced3'
            }
        }
    });


    $('#usa').vectorMap({
        map: 'us_aea_en',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#f87ca1'
            }
        }
    });



    $('#australia').vectorMap({
        map: 'au_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#ffe174'
            }
        }
    });

    $('#uk').vectorMap({
        map: 'uk_mill_en',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#ffa47f'
            }
        }
    });

});
