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

(function(window, document, $, undefined) {
    "use strict";
    $(function() {

        if ($('#c3chart_area').length) {
            var chart = c3.generate({
                bindto: "#c3chart_area",
                data: {
                    columns: [
                        ['data1', 300, 350, 300, 0, 0, 0],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    types: {
                        data1: 'area',
                        data2: 'area-spline'
                    },
                    colors: {
                        data1: '#5969ff',
                        data2: '#ff407b',

                    }

                },
                axis: {

                    y: {
                        show: true




                    },
                    x: {
                        show: true
                    }
                }

            });
        }


        if ($('#c3chart_spline').length) {
            var chart = c3.generate({
                bindto: "#c3chart_spline",
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    type: 'spline',
                    colors: {
                         data1: '#5969ff',
                        data2: '#ff407b',

                    }
                },
                axis: {
                    y: {
                        show: true,


                    },
                    x: {
                        show: true,
                    }
                }
            });
        }

        if ($('#c3chart_zoom').length) {
            var chart = c3.generate({
                bindto: "#c3chart_zoom",
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
                    ],
                    colors: {
                        sample: '#5969ff'


                    }
                },
                zoom: {
                    enabled: true
                },
                axis: {
                    y: {
                        show: true,


                    },
                    x: {
                        show: true,
                    }
                }

            });
        }


        if ($('#c3chart_scatter').length) {
            var chart = c3.generate({
                bindto: "#c3chart_scatter",
                data: {
                    xs: {
                        setosa: 'setosa_x',
                        versicolor: 'versicolor_x',
                    },
                    // iris data from R
                    columns: [
                        ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                        ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ],
                    type: 'scatter',
                    colors: {
                        setosa: '#5969ff',
                        versicolor: '#ff407b',

                    }
                },
                axis: {
                    y: {
                        show: true,


                    },
                    x: {
                        show: true,
                    }
                }
            });
            setTimeout(function() {
                chart.load({
                    xs: {
                        virginica: 'virginica_x'
                    },
                    columns: [
                        ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 1000);
            setTimeout(function() {
                chart.unload({
                    ids: 'setosa'
                });
            }, 2000);
            setTimeout(function() {
                chart.load({
                    columns: [
                        ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ]
                });
            }, 3000);
        }


        if ($('#c3chart_stacked').length) {
            var chart = c3.generate({
                bindto: "#c3chart_stacked",

                data: {
                    columns: [
                        ['data1', 130, 200, 320, 400, 530, 750],
                        ['data2', -130, 10, 130, 200, 150, 250],
                        ['data3', -130, -50, -10, -200, -250, -150]
                    ],
                    type: 'bar',
                    groups: [
                        ['data1', 'data2', 'data3']
                    ],
                    order: 'desc', // stack order by sum of values descendantly. this is default.
                    //      order: 'asc'  // stack order by sum of values ascendantly.
                    //      order: null   // stack order by data definition.

                    colors: {
                        data1: '#5969ff',
                        data2: '#ff407b',
                        data3: '#64ced3'

                    }
                },
                axis: {
                    y: {
                        show: true,


                    },
                    x: {
                        show: true,
                    }
                },
                grid: {
                    y: {
                        lines: [{ value: 0 }]
                    }
                }
            });
            setTimeout(function() {
                chart.load({
                    columns: [
                        ['data4', 1200, 1300, 1450, 1600, 1520, 1820],
                    ]
                });
            }, 1000);
            setTimeout(function() {
                chart.load({
                    columns: [
                        ['data5', 200, 300, 450, 600, 520, 820],
                    ]
                });
            }, 2000);
            setTimeout(function() {
                chart.groups([
                    ['data1', 'data2', 'data3', 'data4', 'data5']
                ])
            }, 3000);
        }


        if ($('#c3chart_combine').length) {
            var chart = c3.generate({
                bindto: "#c3chart_combine",
                data: {
                    columns: [
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 300, 200, 160, 400, 250, 250],
                        ['data4', 200, 130, 90, 240, 130, 220],
                        ['data5', 130, 120, 150, 140, 160, 150],
                        ['data6', 90, 70, 20, 50, 60, 120],
                    ],
                    type: 'bar',
                    types: {
                        data3: 'spline',
                        data4: 'line',
                        data6: 'area',
                    },
                    groups: [
                        ['data1', 'data2']
                    ],

                    colors: {
                        data1: '#5969ff',
                        data2: '#ff407b',
                        data3: '#25d5f2',
                        data4: '#ffc750',
                        data5: '#2ec551',
                        data6: '#1ba3b9',


                    }

                },
                axis: {
                    y: {
                        show: true,


                    },
                    x: {
                        show: true,
                    }
                }
            });
        }

        if ($('#c3chart_pie').length) {
            var chart = c3.generate({
                bindto: "#c3chart_pie",
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 50]
                    ],
                    type: 'pie',

                    colors: {
                         data1: '#5969ff',
                        data2: '#ff407b'


                    }
                },
                pie: {
                    label: {
                        format: function(value, ratio, id) {
                            return d3.format('$')(value);
                        }
                    }
                }
            });
        }

        if ($('#c3chart_donut').length) {
            var chart = c3.generate({
                bindto: "#c3chart_donut",
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type: 'donut',
                    onclick: function(d, i) { console.log("onclick", d, i); },
                    onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function(d, i) { console.log("onmouseout", d, i); },

                    colors: {
                         data1: '#5969ff',
                        data2: '#ff407b'


                    }
                },
                donut: {
                    title: "Iris Petal Width"


                }


            });

            setTimeout(function() {
                chart.load({
                    columns: [
                        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                });
            }, 1500);

            setTimeout(function() {
                chart.unload({
                    ids: 'data1'
                });
                chart.unload({
                    ids: 'data2'
                });
            }, 2500);
        }

        if ($('#c3chart_gauge').length) {
            var chart = c3.generate({
                bindto: "#c3chart_gauge",
                data: {
                    columns: [
                        ['data1', 91.4]

                    ],
                    type: 'gauge',
                    onclick: function(d, i) { console.log("onclick", d, i); },
                    onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function(d, i) { console.log("onmouseout", d, i); },
                    colors: {
                      data1: '#5969ff',
                        data2: '#ff407b',
                        data3: '#25d5f2',
                        data4: '#ffc750',
                        data5: '#2ec551',
                        data6: '#1ba3b9',

                    }
                },
                gauge: {
                    //        label: {
                    //            format: function(value, ratio) {
                    //                return value;
                    //            },
                    //            show: false // to turn off the min/max labels.
                    //        },
                    //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                    //    max: 100, // 100 is default
                    //    units: ' %',
                    //    width: 39 // for adjusting arc thickness
                },

                size: {
                    height: 320
                }
            });



        }


    });

})(window, document, window.jQuery);
/* @license C3.js v0.6.3 | (c) C3 Team and other contributors | http://c3js.org/ */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.c3=e()}(this,function(){"use strict";var Y={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",title:"c3-title",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcLabelLine:"c3-arc-label-line",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"};function i(t){var e=this;e.d3=window.d3?window.d3:"undefined"!=typeof require?require("d3"):void 0,e.api=t,e.config=e.getDefaultConfig(),e.data={},e.cache={},e.axes={}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n={version:"0.6.3",chart:{fn:e.prototype,internal:{fn:i.prototype}}};function e(t){var e=this.internal=new i(this);e.loadConfig(t),e.beforeInit(t),e.init(),e.afterInit(t),function e(i,n,a){Object.keys(i).forEach(function(t){n[t]=i[t].bind(a),0<Object.keys(i[t]).length&&e(i[t],n[t],a)})}(n.chart.fn,this,this)}function a(t,e,i){this.owner=t,n.chart.internal[e]=i}n.generate=function(t){return new e(t)};var r,s,P=function(t){return t||0===t},h=function(t){return"function"==typeof t},u=function(t){return Array.isArray(t)},c=function(t){return"string"==typeof t},v=function(t){return void 0===t},k=function(t){return void 0!==t},d=function(t){return 10*Math.ceil(t/10)},l=function(t){return Math.ceil(t)+.5},D=function(t){return t[1]-t[0]},g=function(t){return null==t||c(t)&&0===t.length||"object"===(void 0===t?"undefined":o(t))&&0===Object.keys(t).length},C=function(t){return!n.chart.internal.fn.isEmpty(t)},N=function(t,e,i){return k(t[e])?t[e]:i},f=function(e,i){var n=!1;return Object.keys(e).forEach(function(t){e[t]===i&&(n=!0)}),n},_=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t},y=function(t){var e=t.getBoundingClientRect(),i=[t.pathSegList.getItem(0),t.pathSegList.getItem(1)];return{x:i[0].x,y:Math.min(i[0].y,i[1].y),width:e.width,height:e.height}};function p(t,e){var i=this;i.component=t,i.params=e||{},i.d3=t.d3,i.scale=i.d3.scaleLinear(),i.range,i.orient="bottom",i.innerTickSize=6,i.outerTickSize=this.params.withOuterTick?6:0,i.tickPadding=3,i.tickValues=null,i.tickFormat,i.tickArguments,i.tickOffset=0,i.tickCulling=!0,i.tickCentered,i.tickTextCharSize,i.tickTextRotate=i.params.tickTextRotate,i.tickLength,i.axis=i.generateAxis()}(s=p.prototype).axisX=function(t,e,i){t.attr("transform",function(t){return"translate("+Math.ceil(e(t)+i)+", 0)"})},s.axisY=function(t,e){t.attr("transform",function(t){return"translate(0,"+Math.ceil(e(t))+")"})},s.scaleExtent=function(t){var e=t[0],i=t[t.length-1];return e<i?[e,i]:[i,e]},s.generateTicks=function(t){var e,i,n=[];if(t.ticks)return t.ticks.apply(t,this.tickArguments);for(i=t.domain(),e=Math.ceil(i[0]);e<i[1];e++)n.push(e);return 0<n.length&&0<n[0]&&n.unshift(n[0]-(n[1]-n[0])),n},s.copyScale=function(){var t,e=this.scale.copy();return this.params.isCategory&&(t=this.scale.domain(),e.domain([t[0],t[1]-1])),e},s.textFormatted=function(t){var e=this.tickFormat?this.tickFormat(t):t;return void 0!==e?e:""},s.updateRange=function(){var t=this;return t.range=t.scale.rangeExtent?t.scale.rangeExtent():t.scaleExtent(t.scale.range()),t.range},s.updateTickTextCharSize=function(t){var r=this;if(r.tickTextCharSize)return r.tickTextCharSize;var s={h:11.5,w:5.5};return t.select("text").text(function(t){return r.textFormatted(t)}).each(function(t){var e=this.getBoundingClientRect(),i=r.textFormatted(t),n=e.height,a=i?e.width/i.length:void 0;n&&a&&(s.h=n,s.w=a)}).text(""),r.tickTextCharSize=s},s.isVertical=function(){return"left"===this.orient||"right"===this.orient},s.tspanData=function(t,e,i){var n=this,a=n.params.tickMultiline?n.splitTickText(t,i):[].concat(n.textFormatted(t));return n.params.tickMultiline&&0<n.params.tickMultilineMax&&(a=n.ellipsify(a,n.params.tickMultilineMax)),a.map(function(t){return{index:e,splitted:t,length:a.length}})},s.splitTickText=function(t,e){var a,r,s,o=this,i=o.textFormatted(t),c=o.params.tickWidth;if("[object Array]"===Object.prototype.toString.call(i))return i;return(!c||c<=0)&&(c=o.isVertical()?95:o.params.isCategory?Math.ceil(e(1)-e(0))-12:110),function t(e,i){r=void 0;for(var n=1;n<i.length;n++)if(" "===i.charAt(n)&&(r=n),a=i.substr(0,n+1),s=o.tickTextCharSize.w*a.length,c<s)return t(e.concat(i.substr(0,r||n)),i.slice(r?r+1:n));return e.concat(i)}([],i+"")},s.ellipsify=function(t,e){if(t.length<=e)return t;for(var i=t.slice(0,e),n=3,a=e-1;0<=a;a--){var r=i[a].length;if(i[a]=i[a].substr(0,r-n).padEnd(r,"."),(n-=r)<=0)break}return i},s.updateTickLength=function(){this.tickLength=Math.max(this.innerTickSize,0)+this.tickPadding},s.lineY2=function(t){var e=this,i=e.scale(t)+(e.tickCentered?0:e.tickOffset);return e.range[0]<i&&i<e.range[1]?e.innerTickSize:0},s.textY=function(){var t=this.tickTextRotate;return t?11.5-t/15*2.5*(0<t?1:-1):this.tickLength},s.textTransform=function(){var t=this.tickTextRotate;return t?"rotate("+t+")":""},s.textTextAnchor=function(){var t=this.tickTextRotate;return t?0<t?"start":"end":"middle"},s.tspanDx=function(){var t=this.tickTextRotate;return t?8*Math.sin(Math.PI*(t/180)):0},s.tspanDy=function(t,e){var i=this.tickTextCharSize.h;return 0===e&&(i=this.isVertical()?-((t.length-1)*(this.tickTextCharSize.h/2)-3):".71em"),i},s.generateAxis=function(){var w=this,v=w.d3,b=w.params;function A(t,m){var S;return t.each(function(){var t,e,i,n=A.g=v.select(this),a=this.__chart__||w.scale,r=this.__chart__=w.copyScale(),s=w.tickValues?w.tickValues:w.generateTicks(r),o=n.selectAll(".tick").data(s,r),c=o.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),d=o.exit().remove(),u=o.merge(c);b.isCategory?(w.tickOffset=Math.ceil((r(1)-r(0))/2),e=w.tickCentered?0:w.tickOffset,i=w.tickCentered?w.tickOffset:0):w.tickOffset=e=0,w.updateRange(),w.updateTickLength(),w.updateTickTextCharSize(n.select(".tick"));var l=u.select("line").merge(c.append("line")),h=u.select("text").merge(c.append("text")),g=u.selectAll("text").selectAll("tspan").data(function(t,e){return w.tspanData(t,e,r)}),f=g.enter().append("tspan").merge(g).text(function(t){return t.splitted});g.exit().remove();var p=n.selectAll(".domain").data([0]),_=p.enter().append("path").merge(p).attr("class","domain");switch(w.orient){case"bottom":t=w.axisX,l.attr("x1",e).attr("x2",e).attr("y2",function(t,e){return w.lineY2(t,e)}),h.attr("x",0).attr("y",function(t,e){return w.textY(t,e)}).attr("transform",function(t,e){return w.textTransform(t,e)}).style("text-anchor",function(t,e){return w.textTextAnchor(t,e)}),f.attr("x",0).attr("dy",function(t,e){return w.tspanDy(t,e)}).attr("dx",function(t,e){return w.tspanDx(t,e)}),_.attr("d","M"+w.range[0]+","+w.outerTickSize+"V0H"+w.range[1]+"V"+w.outerTickSize);break;case"top":t=w.axisX,l.attr("x1",e).attr("x2",e).attr("y2",function(t,e){return-1*w.lineY2(t,e)}),h.attr("x",0).attr("y",function(t,e){return-1*w.textY(t,e)-(b.isCategory?2:w.tickLength-2)}).attr("transform",function(t,e){return w.textTransform(t,e)}).style("text-anchor",function(t,e){return w.textTextAnchor(t,e)}),f.attr("x",0).attr("dy",function(t,e){return w.tspanDy(t,e)}).attr("dx",function(t,e){return w.tspanDx(t,e)}),_.attr("d","M"+w.range[0]+","+-w.outerTickSize+"V0H"+w.range[1]+"V"+-w.outerTickSize);break;case"left":t=w.axisY,l.attr("x2",-w.innerTickSize).attr("y1",i).attr("y2",i),h.attr("x",-w.tickLength).attr("y",w.tickOffset).style("text-anchor","end"),f.attr("x",-w.tickLength).attr("dy",function(t,e){return w.tspanDy(t,e)}),_.attr("d","M"+-w.outerTickSize+","+w.range[0]+"H0V"+w.range[1]+"H"+-w.outerTickSize);break;case"right":t=w.axisY,l.attr("x2",w.innerTickSize).attr("y1",i).attr("y2",i),h.attr("x",w.tickLength).attr("y",w.tickOffset).style("text-anchor","start"),f.attr("x",w.tickLength).attr("dy",function(t,e){return w.tspanDy(t,e)}),_.attr("d","M"+w.outerTickSize+","+w.range[0]+"H0V"+w.range[1]+"H"+w.outerTickSize)}if(r.rangeBand){var x=r,y=x.rangeBand()/2;a=r=function(t){return x(t)+y}}else a.rangeBand?a=r:d.call(t,r,w.tickOffset);c.call(t,a,w.tickOffset),S=(m?u.transition(m):u).style("opacity",1).call(t,r,w.tickOffset)}),S}return A.scale=function(t){return arguments.length?(w.scale=t,A):w.scale},A.orient=function(t){return arguments.length?(w.orient=t in{top:1,right:1,bottom:1,left:1}?t+"":"bottom",A):w.orient},A.tickFormat=function(t){return arguments.length?(w.tickFormat=t,A):w.tickFormat},A.tickCentered=function(t){return arguments.length?(w.tickCentered=t,A):w.tickCentered},A.tickOffset=function(){return w.tickOffset},A.tickInterval=function(){var t;return(t=b.isCategory?2*w.tickOffset:(A.g.select("path.domain").node().getTotalLength()-2*w.outerTickSize)/A.g.selectAll("line").size())===1/0?0:t},A.ticks=function(){return arguments.length?(w.tickArguments=arguments,A):w.tickArguments},A.tickCulling=function(t){return arguments.length?(w.tickCulling=t,A):w.tickCulling},A.tickValues=function(t){if("function"==typeof t)w.tickValues=function(){return t(w.scale.domain())};else{if(!arguments.length)return w.tickValues;w.tickValues=t}return A},A};var x,m,S=function(t){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e={fn:r,internal:{fn:s}},i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,"axis",e));return i.d3=t.d3,i.internal=p,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,a),n}();return(r=S.prototype).init=function(){var t=this.owner,e=t.config,i=t.main;t.axes.x=i.append("g").attr("class",Y.axis+" "+Y.axisX).attr("clip-path",e.axis_x_inner?"":t.clipPathForXAxis).attr("transform",t.getTranslate("x")).style("visibility",e.axis_x_show?"visible":"hidden"),t.axes.x.append("text").attr("class",Y.axisXLabel).attr("transform",e.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),t.axes.y=i.append("g").attr("class",Y.axis+" "+Y.axisY).attr("clip-path",e.axis_y_inner?"":t.clipPathForYAxis).attr("transform",t.getTranslate("y")).style("visibility",e.axis_y_show?"visible":"hidden"),t.axes.y.append("text").attr("class",Y.axisYLabel).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),t.axes.y2=i.append("g").attr("class",Y.axis+" "+Y.axisY2).attr("transform",t.getTranslate("y2")).style("visibility",e.axis_y2_show?"visible":"hidden"),t.axes.y2.append("text").attr("class",Y.axisY2Label).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},r.getXAxis=function(t,e,i,n,a,r,s){var o=this.owner,c=o.config,d={isCategory:o.isCategorized(),withOuterTick:a,tickMultiline:c.axis_x_tick_multiline,tickMultilineMax:c.axis_x_tick_multiline?Number(c.axis_x_tick_multilineMax):0,tickWidth:c.axis_x_tick_width,tickTextRotate:s?0:c.axis_x_tick_rotate,withoutTransition:r},u=new this.internal(this,d).axis.scale(t).orient(e);return o.isTimeSeries()&&n&&"function"!=typeof n&&(n=n.map(function(t){return o.parseDate(t)})),u.tickFormat(i).tickValues(n),o.isCategorized()&&(u.tickCentered(c.axis_x_tick_centered),g(c.axis_x_tick_culling)&&(c.axis_x_tick_culling=!1)),u},r.updateXAxisTickValues=function(t,e){var i,n=this.owner,a=n.config;return(a.axis_x_tick_fit||a.axis_x_tick_count)&&(i=this.generateTickValues(n.mapTargetsToUniqueXs(t),a.axis_x_tick_count,n.isTimeSeries())),e?e.tickValues(i):(n.xAxis.tickValues(i),n.subXAxis.tickValues(i)),i},r.getYAxis=function(t,e,i,n,a,r,s){var o=this.owner,c=o.config,d={withOuterTick:a,withoutTransition:r,tickTextRotate:s?0:c.axis_y_tick_rotate},u=new this.internal(this,d).axis.scale(t).orient(e).tickFormat(i);return o.isTimeSeriesY()?u.ticks(c.axis_y_tick_time_type,c.axis_y_tick_time_interval):u.tickValues(n),u},r.getId=function(t){var e=this.owner.config;return t in e.data_axes?e.data_axes[t]:"y"},r.getXAxisTickFormat=function(){var e=this.owner,i=e.config,n=e.isTimeSeries()?e.defaultAxisTimeFormat:e.isCategorized()?e.categoryName:function(t){return t};return i.axis_x_tick_format&&(h(i.axis_x_tick_format)?n=i.axis_x_tick_format:e.isTimeSeries()&&(n=function(t){return t?e.axisTimeFormat(i.axis_x_tick_format)(t):""})),h(n)?function(t){return n.call(e,t)}:n},r.getTickValues=function(t,e){return t||(e?e.tickValues():void 0)},r.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},r.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},r.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},r.getLabelOptionByAxisId=function(t){var e,i=this.owner.config;return"y"===t?e=i.axis_y_label:"y2"===t?e=i.axis_y2_label:"x"===t&&(e=i.axis_x_label),e},r.getLabelText=function(t){var e=this.getLabelOptionByAxisId(t);return c(e)?e:e?e.text:null},r.setLabelText=function(t,e){var i=this.owner.config,n=this.getLabelOptionByAxisId(t);c(n)?"y"===t?i.axis_y_label=e:"y2"===t?i.axis_y2_label=e:"x"===t&&(i.axis_x_label=e):n&&(n.text=e)},r.getLabelPosition=function(t,e){var i=this.getLabelOptionByAxisId(t),n=i&&"object"===(void 0===i?"undefined":o(i))&&i.position?i.position:e;return{isInner:0<=n.indexOf("inner"),isOuter:0<=n.indexOf("outer"),isLeft:0<=n.indexOf("left"),isCenter:0<=n.indexOf("center"),isRight:0<=n.indexOf("right"),isTop:0<=n.indexOf("top"),isMiddle:0<=n.indexOf("middle"),isBottom:0<=n.indexOf("bottom")}},r.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},r.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},r.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},r.getLabelPositionById=function(t){return"y2"===t?this.getY2AxisLabelPosition():"y"===t?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},r.textForXAxisLabel=function(){return this.getLabelText("x")},r.textForYAxisLabel=function(){return this.getLabelText("y")},r.textForY2AxisLabel=function(){return this.getLabelText("y2")},r.xForAxisLabel=function(t,e){var i=this.owner;return t?e.isLeft?0:e.isCenter?i.width/2:i.width:e.isBottom?-i.height:e.isMiddle?-i.height/2:0},r.dxForAxisLabel=function(t,e){return t?e.isLeft?"0.5em":e.isRight?"-0.5em":"0":e.isTop?"-0.5em":e.isBottom?"0.5em":"0"},r.textAnchorForAxisLabel=function(t,e){return t?e.isLeft?"start":e.isCenter?"middle":"end":e.isBottom?"start":e.isMiddle?"middle":"end"},r.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},r.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},r.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},r.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},r.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},r.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},r.dyForXAxisLabel=function(){var t=this.owner,e=t.config,i=this.getXAxisLabelPosition();return e.axis_rotated?i.isInner?"1.2em":-25-(t.config.axis_x_inner?0:this.getMaxTickWidth("x")):i.isInner?"-0.5em":e.axis_x_height?e.axis_x_height-10:"3em"},r.dyForYAxisLabel=function(){var t=this.owner,e=this.getYAxisLabelPosition();return t.config.axis_rotated?e.isInner?"-0.5em":"3em":e.isInner?"1.2em":-10-(t.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},r.dyForY2AxisLabel=function(){var t=this.owner,e=this.getY2AxisLabelPosition();return t.config.axis_rotated?e.isInner?"1.2em":"-2.2em":e.isInner?"-0.5em":15+(t.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},r.textAnchorForXAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(!t.config.axis_rotated,this.getXAxisLabelPosition())},r.textAnchorForYAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getYAxisLabelPosition())},r.textAnchorForY2AxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getY2AxisLabelPosition())},r.getMaxTickWidth=function(t,e){var i,n,a,r,s=this.owner,o=s.config,c=0;return e&&s.currentMaxTickWidths[t]||(s.svg&&(i=s.filterTargetsToShow(s.data.targets),"y"===t?(n=s.y.copy().domain(s.getYDomain(i,"y")),a=this.getYAxis(n,s.yOrient,o.axis_y_tick_format,s.yAxisTickValues,!1,!0,!0)):"y2"===t?(n=s.y2.copy().domain(s.getYDomain(i,"y2")),a=this.getYAxis(n,s.y2Orient,o.axis_y2_tick_format,s.y2AxisTickValues,!1,!0,!0)):(n=s.x.copy().domain(s.getXDomain(i)),a=this.getXAxis(n,s.xOrient,s.xAxisTickFormat,s.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(i,a)),(r=s.d3.select("body").append("div").classed("c3",!0)).append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0).append("g").call(a).each(function(){s.d3.select(this).selectAll("text").each(function(){var t=this.getBoundingClientRect();c<t.width&&(c=t.width)}),r.remove()})),s.currentMaxTickWidths[t]=c<=0?s.currentMaxTickWidths[t]:c),s.currentMaxTickWidths[t]},r.updateLabels=function(t){var e=this.owner,i=e.main.select("."+Y.axisX+" ."+Y.axisXLabel),n=e.main.select("."+Y.axisY+" ."+Y.axisYLabel),a=e.main.select("."+Y.axisY2+" ."+Y.axisY2Label);(t?i.transition():i).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(t?n.transition():n).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(t?a.transition():a).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},r.getPadding=function(t,e,i,n){var a="number"==typeof t?t:t[e];return P(a)?"ratio"===t.unit?t[e]*n:this.convertPixelsToAxisPadding(a,n):i},r.convertPixelsToAxisPadding=function(t,e){var i=this.owner;return e*(t/(i.config.axis_rotated?i.width:i.height))},r.generateTickValues=function(t,e,i){var n,a,r,s,o,c,d,u=t;if(e)if(1===(n=h(e)?e():e))u=[t[0]];else if(2===n)u=[t[0],t[t.length-1]];else if(2<n){for(s=n-2,a=t[0],o=((r=t[t.length-1])-a)/(s+1),u=[a],c=0;c<s;c++)d=+a+o*(c+1),u.push(i?new Date(d):d);u.push(r)}return i||(u=u.sort(function(t,e){return t-e})),u},r.generateTransitions=function(t){var e=this.owner.axes;return{axisX:t?e.x.transition().duration(t):e.x,axisY:t?e.y.transition().duration(t):e.y,axisY2:t?e.y2.transition().duration(t):e.y2,axisSubX:t?e.subx.transition().duration(t):e.subx}},r.redraw=function(t,e){var i=this.owner,n=t?i.d3.transition().duration(t):null;i.axes.x.style("opacity",e?0:1).call(i.xAxis,n),i.axes.y.style("opacity",e?0:1).call(i.yAxis,n),i.axes.y2.style("opacity",e?0:1).call(i.y2Axis,n),i.axes.subx.style("opacity",e?0:1).call(i.subXAxis,n)},x=n.chart.fn,(m=n.chart.internal.fn).beforeInit=function(){},m.afterInit=function(){},m.init=function(){var t=this,e=t.config;if(t.initParams(),e.data_url)t.convertUrlToData(e.data_url,e.data_mimeType,e.data_headers,e.data_keys,t.initWithData);else if(e.data_json)t.initWithData(t.convertJsonToData(e.data_json,e.data_keys));else if(e.data_rows)t.initWithData(t.convertRowsToData(e.data_rows));else{if(!e.data_columns)throw Error("url or json or rows or columns is required.");t.initWithData(t.convertColumnsToData(e.data_columns))}},m.initParams=function(){var t=this,e=t.d3,i=t.config;t.clipId="c3-"+ +new Date+"-clip",t.clipIdForXAxis=t.clipId+"-xaxis",t.clipIdForYAxis=t.clipId+"-yaxis",t.clipIdForGrid=t.clipId+"-grid",t.clipIdForSubchart=t.clipId+"-subchart",t.clipPath=t.getClipPath(t.clipId),t.clipPathForXAxis=t.getClipPath(t.clipIdForXAxis),t.clipPathForYAxis=t.getClipPath(t.clipIdForYAxis),t.clipPathForGrid=t.getClipPath(t.clipIdForGrid),t.clipPathForSubchart=t.getClipPath(t.clipIdForSubchart),t.dragStart=null,t.dragging=!1,t.flowing=!1,t.cancelClick=!1,t.mouseover=!1,t.transiting=!1,t.color=t.generateColor(),t.levelColor=t.generateLevelColor(),t.dataTimeParse=(i.data_xLocaltime?e.timeParse:e.utcParse)(t.config.data_xFormat),t.axisTimeFormat=i.axis_x_localtime?e.timeFormat:e.utcFormat,t.defaultAxisTimeFormat=function(t){return t.getMilliseconds()?e.timeFormat(".%L")(t):t.getSeconds()?e.timeFormat(":%S")(t):t.getMinutes()?e.timeFormat("%I:%M")(t):t.getHours()?e.timeFormat("%I %p")(t):t.getDay()&&1!==t.getDate()?e.timeFormat("%-m/%-d")(t):1!==t.getDate()?e.timeFormat("%-m/%-d")(t):t.getMonth()?e.timeFormat("%-m/%-d")(t):e.timeFormat("%Y/%-m/%-d")(t)},t.hiddenTargetIds=[],t.hiddenLegendIds=[],t.focusedTargetIds=[],t.defocusedTargetIds=[],t.xOrient=i.axis_rotated?i.axis_x_inner?"right":"left":i.axis_x_inner?"top":"bottom",t.yOrient=i.axis_rotated?i.axis_y_inner?"top":"bottom":i.axis_y_inner?"right":"left",t.y2Orient=i.axis_rotated?i.axis_y2_inner?"bottom":"top":i.axis_y2_inner?"left":"right",t.subXOrient=i.axis_rotated?"left":"bottom",t.isLegendRight="right"===i.legend_position,t.isLegendInset="inset"===i.legend_position,t.isLegendTop="top-left"===i.legend_inset_anchor||"top-right"===i.legend_inset_anchor,t.isLegendLeft="top-left"===i.legend_inset_anchor||"bottom-left"===i.legend_inset_anchor,t.legendStep=0,t.legendItemWidth=0,t.legendItemHeight=0,t.currentMaxTickWidths={x:0,y:0,y2:0},t.rotated_padding_left=30,t.rotated_padding_right=i.axis_rotated&&!i.axis_x_show?0:30,t.rotated_padding_top=5,t.withoutFadeIn={},t.intervalForObserveInserted=void 0,t.axes.subx=e.selectAll([])},m.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},m.initWithData=function(t){var e,i,n=this,a=n.d3,r=n.config,s=!0;n.axis=new S(n),r.bindto?"function"==typeof r.bindto.node?n.selectChart=r.bindto:n.selectChart=a.select(r.bindto):n.selectChart=a.selectAll([]),n.selectChart.empty()&&(n.selectChart=a.select(document.createElement("div")).style("opacity",0),n.observeInserted(n.selectChart),s=!1),n.selectChart.html("").classed("c3",!0),n.data.xs={},n.data.targets=n.convertDataToTargets(t),r.data_filter&&(n.data.targets=n.data.targets.filter(r.data_filter)),r.data_hide&&n.addHiddenTargetIds(!0===r.data_hide?n.mapToIds(n.data.targets):r.data_hide),r.legend_hide&&n.addHiddenLegendIds(!0===r.legend_hide?n.mapToIds(n.data.targets):r.legend_hide),n.updateSizes(),n.updateScales(),n.x.domain(a.extent(n.getXDomain(n.data.targets))),n.y.domain(n.getYDomain(n.data.targets,"y")),n.y2.domain(n.getYDomain(n.data.targets,"y2")),n.subX.domain(n.x.domain()),n.subY.domain(n.y.domain()),n.subY2.domain(n.y2.domain()),n.orgXDomain=n.x.domain(),n.svg=n.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return r.onmouseover.call(n)}).on("mouseleave",function(){return r.onmouseout.call(n)}),n.config.svg_classname&&n.svg.attr("class",n.config.svg_classname),e=n.svg.append("defs"),n.clipChart=n.appendClip(e,n.clipId),n.clipXAxis=n.appendClip(e,n.clipIdForXAxis),n.clipYAxis=n.appendClip(e,n.clipIdForYAxis),n.clipGrid=n.appendClip(e,n.clipIdForGrid),n.clipSubchart=n.appendClip(e,n.clipIdForSubchart),n.updateSvgSize(),i=n.main=n.svg.append("g").attr("transform",n.getTranslate("main")),n.initPie&&n.initPie(),n.initSubchart&&n.initSubchart(),n.initTooltip&&n.initTooltip(),n.initLegend&&n.initLegend(),n.initTitle&&n.initTitle(),n.initZoom&&n.initZoom(),n.initSubchartBrush&&n.initSubchartBrush(),i.append("text").attr("class",Y.text+" "+Y.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),n.initRegion(),n.initGrid(),i.append("g").attr("clip-path",n.clipPath).attr("class",Y.chart),r.grid_lines_front&&n.initGridLines(),n.initChartElements(),n.axis.init(),n.updateTargets(n.data.targets),n.initEventRect(),r.axis_x_selection&&n.brush.selectionAsValue(n.getDefaultSelection()),s&&(n.updateDimension(),n.config.oninit.call(n),n.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),n.bindResize(),n.api.element=n.selectChart.node()},m.smoothLines=function(t,e){var r=this;"grid"===e&&t.each(function(){var t=r.d3.select(this),e=t.attr("x1"),i=t.attr("x2"),n=t.attr("y1"),a=t.attr("y2");t.attr({x1:Math.ceil(e),x2:Math.ceil(i),y1:Math.ceil(n),y2:Math.ceil(a)})})},m.updateSizes=function(){var t=this,e=t.config,i=t.legend?t.getLegendHeight():0,n=t.legend?t.getLegendWidth():0,a=t.isLegendRight||t.isLegendInset?0:i,r=t.hasArcType(),s=e.axis_rotated||r?0:t.getHorizontalAxisHeight("x"),o=e.subchart_show&&!r?e.subchart_size_height+s:0;t.currentWidth=t.getCurrentWidth(),t.currentHeight=t.getCurrentHeight(),t.margin=e.axis_rotated?{top:t.getHorizontalAxisHeight("y2")+t.getCurrentPaddingTop(),right:r?0:t.getCurrentPaddingRight(),bottom:t.getHorizontalAxisHeight("y")+a+t.getCurrentPaddingBottom(),left:o+(r?0:t.getCurrentPaddingLeft())}:{top:4+t.getCurrentPaddingTop(),right:r?0:t.getCurrentPaddingRight(),bottom:s+o+a+t.getCurrentPaddingBottom(),left:r?0:t.getCurrentPaddingLeft()},t.margin2=e.axis_rotated?{top:t.margin.top,right:NaN,bottom:20+a,left:t.rotated_padding_left}:{top:t.currentHeight-o-a,right:NaN,bottom:s+a,left:t.margin.left},t.margin3={top:0,right:NaN,bottom:0,left:0},t.updateSizeForLegend&&t.updateSizeForLegend(i,n),t.width=t.currentWidth-t.margin.left-t.margin.right,t.height=t.currentHeight-t.margin.top-t.margin.bottom,t.width<0&&(t.width=0),t.height<0&&(t.height=0),t.width2=e.axis_rotated?t.margin.left-t.rotated_padding_left-t.rotated_padding_right:t.width,t.height2=e.axis_rotated?t.height:t.currentHeight-t.margin2.top-t.margin2.bottom,t.width2<0&&(t.width2=0),t.height2<0&&(t.height2=0),t.arcWidth=t.width-(t.isLegendRight?n+10:0),t.arcHeight=t.height-(t.isLegendRight?0:10),t.hasType("gauge")&&!e.gauge_fullCircle&&(t.arcHeight+=t.height-t.getGaugeLabelHeight()),t.updateRadius&&t.updateRadius(),t.isLegendRight&&r&&(t.margin3.left=t.arcWidth/2+1.1*t.radiusExpanded)},m.updateTargets=function(t){var e=this;e.updateTargetsForText(t),e.updateTargetsForBar(t),e.updateTargetsForLine(t),e.hasArcType()&&e.updateTargetsForArc&&e.updateTargetsForArc(t),e.updateTargetsForSubchart&&e.updateTargetsForSubchart(t),e.showTargets()},m.showTargets=function(){var e=this;e.svg.selectAll("."+Y.target).filter(function(t){return e.isTargetToShow(t.id)}).transition().duration(e.config.transition_duration).style("opacity",1)},m.redraw=function(t,e){var i,n,a,r,s,o,c,d,u,l,h,g,f,p,_,x,y,m,S,w,v,b,A,T,P,C,L,V,G,E,O,I=this,R=I.main,k=I.d3,D=I.config,F=I.getShapeIndices(I.isAreaType),X=I.getShapeIndices(I.isBarType),M=I.getShapeIndices(I.isLineType),z=I.hasArcType(),H=I.filterTargetsToShow(I.data.targets),B=I.xv.bind(I);if(i=N(t=t||{},"withY",!0),n=N(t,"withSubchart",!0),a=N(t,"withTransition",!0),o=N(t,"withTransform",!1),c=N(t,"withUpdateXDomain",!1),d=N(t,"withUpdateOrgXDomain",!1),u=N(t,"withTrimXDomain",!0),f=N(t,"withUpdateXAxis",c),l=N(t,"withLegend",!1),h=N(t,"withEventRect",!0),g=N(t,"withDimension",!0),r=N(t,"withTransitionForExit",a),s=N(t,"withTransitionForAxis",a),S=a?D.transition_duration:0,w=r?S:0,v=s?S:0,e=e||I.axis.generateTransitions(v),l&&D.legend_show?I.updateLegend(I.mapToIds(I.data.targets),t,e):g&&I.updateDimension(!0),I.isCategorized()&&0===H.length&&I.x.domain([0,I.axes.x.selectAll(".tick").size()]),H.length?(I.updateXDomain(H,c,d,u),D.axis_x_tick_values||(C=I.axis.updateXAxisTickValues(H))):(I.xAxis.tickValues([]),I.subXAxis.tickValues([])),D.zoom_rescale&&!t.flow&&(G=I.x.orgDomain()),I.y.domain(I.getYDomain(H,"y",G)),I.y2.domain(I.getYDomain(H,"y2",G)),!D.axis_y_tick_values&&D.axis_y_tick_count&&I.yAxis.tickValues(I.axis.generateTickValues(I.y.domain(),D.axis_y_tick_count)),!D.axis_y2_tick_values&&D.axis_y2_tick_count&&I.y2Axis.tickValues(I.axis.generateTickValues(I.y2.domain(),D.axis_y2_tick_count)),I.axis.redraw(v,z),I.axis.updateLabels(a),(c||f)&&H.length)if(D.axis_x_tick_culling&&C){for(L=1;L<C.length;L++)if(C.length/L<D.axis_x_tick_culling_max){V=L;break}I.svg.selectAll("."+Y.axisX+" .tick text").each(function(t){var e=C.indexOf(t);0<=e&&k.select(this).style("display",e%V?"none":"block")})}else I.svg.selectAll("."+Y.axisX+" .tick text").style("display","block");p=I.generateDrawArea?I.generateDrawArea(F,!1):void 0,_=I.generateDrawBar?I.generateDrawBar(X):void 0,x=I.generateDrawLine?I.generateDrawLine(M,!1):void 0,y=I.generateXYForText(F,X,M,!0),m=I.generateXYForText(F,X,M,!1),I.updateCircleY(),E=(I.config.axis_rotated?I.circleY:I.circleX).bind(I),O=(I.config.axis_rotated?I.circleX:I.circleY).bind(I),i&&(I.subY.domain(I.getYDomain(H,"y")),I.subY2.domain(I.getYDomain(H,"y2"))),I.updateXgridFocus(),R.select("text."+Y.text+"."+Y.empty).attr("x",I.width/2).attr("y",I.height/2).text(D.data_empty_label_text).transition().style("opacity",H.length?0:1),h&&I.redrawEventRect(),I.updateGrid(S),I.updateRegion(S),I.updateBar(w),I.updateLine(w),I.updateArea(w),I.updateCircle(E,O),I.hasDataLabel()&&I.updateText(y,m,w),I.redrawTitle&&I.redrawTitle(),I.redrawArc&&I.redrawArc(S,w,o),I.redrawSubchart&&I.redrawSubchart(n,e,S,w,F,X,M),R.selectAll("."+Y.selectedCircles).filter(I.isBarType.bind(I)).selectAll("circle").remove(),t.flow&&(T=I.generateFlow({targets:H,flow:t.flow,duration:t.flow.duration,drawBar:_,drawLine:x,drawArea:p,cx:E,cy:O,xv:B,xForText:y,yForText:m})),I.isTabVisible()&&(S?(P=k.transition().duration(S),b=[],[I.redrawBar(_,!0,P),I.redrawLine(x,!0,P),I.redrawArea(p,!0,P),I.redrawCircle(E,O,!0,P),I.redrawText(y,m,t.flow,!0,P),I.redrawRegion(!0,P),I.redrawGrid(!0,P)].forEach(function(t){t.forEach(function(t){b.push(t)})}),A=I.generateWait(),b.forEach(function(t){A.add(t)}),A(function(){T&&T(),D.onrendered&&D.onrendered.call(I)})):(I.redrawBar(_),I.redrawLine(x),I.redrawArea(p),I.redrawCircle(E,O),I.redrawText(y,m,t.flow),I.redrawRegion(),I.redrawGrid(),T&&T(),D.onrendered&&D.onrendered.call(I))),I.mapToIds(I.data.targets).forEach(function(t){I.withoutFadeIn[t]=!0})},m.updateAndRedraw=function(t){var e,i=this,n=i.config;(t=t||{}).withTransition=N(t,"withTransition",!0),t.withTransform=N(t,"withTransform",!1),t.withLegend=N(t,"withLegend",!1),t.withUpdateXDomain=N(t,"withUpdateXDomain",!0),t.withUpdateOrgXDomain=N(t,"withUpdateOrgXDomain",!0),t.withTransitionForExit=!1,t.withTransitionForTransform=N(t,"withTransitionForTransform",t.withTransition),i.updateSizes(),t.withLegend&&n.legend_show||(e=i.axis.generateTransitions(t.withTransitionForAxis?n.transition_duration:0),i.updateScales(),i.updateSvgSize(),i.transformAll(t.withTransitionForTransform,e)),i.redraw(t,e)},m.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},m.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},m.isCategorized=function(){return 0<=this.config.axis_x_type.indexOf("categor")},m.isCustomX=function(){var t=this.config;return!this.isTimeSeries()&&(t.data_x||C(t.data_xs))},m.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},m.getTranslate=function(t){var e,i,n=this,a=n.config;return"main"===t?(e=l(n.margin.left),i=l(n.margin.top)):"context"===t?(e=l(n.margin2.left),i=l(n.margin2.top)):"legend"===t?(e=n.margin3.left,i=n.margin3.top):"x"===t?(e=0,i=a.axis_rotated?0:n.height):"y"===t?(e=0,i=a.axis_rotated?n.height:0):"y2"===t?(e=a.axis_rotated?0:n.width,i=a.axis_rotated?1:0):"subx"===t?(e=0,i=a.axis_rotated?0:n.height2):"arc"===t&&(e=n.arcWidth/2,i=n.arcHeight/2-(n.hasType("gauge")?6:0)),"translate("+e+","+i+")"},m.initialOpacity=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?1:0},m.initialOpacityForCircle=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?this.opacityForCircle(t):0},m.opacityForCircle=function(t){var e=(h(this.config.point_show)?this.config.point_show(t):this.config.point_show)?1:0;return P(t.value)?this.isScatterType(t)?.5:e:0},m.opacityForText=function(){return this.hasDataLabel()?1:0},m.xx=function(t){return t?this.x(t.x):null},m.xv=function(t){var e=this,i=t.value;return e.isTimeSeries()?i=e.parseDate(t.value):e.isCategorized()&&"string"==typeof t.value&&(i=e.config.axis_x_categories.indexOf(t.value)),Math.ceil(e.x(i))},m.yv=function(t){var e=t.axis&&"y2"===t.axis?this.y2:this.y;return Math.ceil(e(t.value))},m.subxx=function(t){return t?this.subX(t.x):null},m.transformMain=function(t,e){var i,n,a,r=this;e&&e.axisX?i=e.axisX:(i=r.main.select("."+Y.axisX),t&&(i=i.transition())),e&&e.axisY?n=e.axisY:(n=r.main.select("."+Y.axisY),t&&(n=n.transition())),e&&e.axisY2?a=e.axisY2:(a=r.main.select("."+Y.axisY2),t&&(a=a.transition())),(t?r.main.transition():r.main).attr("transform",r.getTranslate("main")),i.attr("transform",r.getTranslate("x")),n.attr("transform",r.getTranslate("y")),a.attr("transform",r.getTranslate("y2")),r.main.select("."+Y.chartArcs).attr("transform",r.getTranslate("arc"))},m.transformAll=function(t,e){var i=this;i.transformMain(t,e),i.config.subchart_show&&i.transformContext(t,e),i.legend&&i.transformLegend(t)},m.updateSvgSize=function(){var t=this,e=t.svg.select(".c3-brush .overlay");t.svg.attr("width",t.currentWidth).attr("height",t.currentHeight),t.svg.selectAll(["#"+t.clipId,"#"+t.clipIdForGrid]).select("rect").attr("width",t.width).attr("height",t.height),t.svg.select("#"+t.clipIdForXAxis).select("rect").attr("x",t.getXAxisClipX.bind(t)).attr("y",t.getXAxisClipY.bind(t)).attr("width",t.getXAxisClipWidth.bind(t)).attr("height",t.getXAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForYAxis).select("rect").attr("x",t.getYAxisClipX.bind(t)).attr("y",t.getYAxisClipY.bind(t)).attr("width",t.getYAxisClipWidth.bind(t)).attr("height",t.getYAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForSubchart).select("rect").attr("width",t.width).attr("height",e.size()?e.attr("height"):0),t.selectChart.style("max-height",t.currentHeight+"px")},m.updateDimension=function(t){var e=this;t||(e.config.axis_rotated?(e.axes.x.call(e.xAxis),e.axes.subx.call(e.subXAxis)):(e.axes.y.call(e.yAxis),e.axes.y2.call(e.y2Axis))),e.updateSizes(),e.updateScales(),e.updateSvgSize(),e.transformAll(!1)},m.observeInserted=function(e){var i,n=this;"undefined"!=typeof MutationObserver?(i=new MutationObserver(function(t){t.forEach(function(t){"childList"===t.type&&t.previousSibling&&(i.disconnect(),n.intervalForObserveInserted=window.setInterval(function(){e.node().parentNode&&(window.clearInterval(n.intervalForObserveInserted),n.updateDimension(),n.brush&&n.brush.update(),n.config.oninit.call(n),n.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),e.transition().style("opacity",1))},10))})})).observe(e.node(),{attributes:!0,childList:!0,characterData:!0}):window.console.error("MutationObserver not defined.")},m.bindResize=function(){var t=this,e=t.config;if(t.resizeFunction=t.generateResize(),t.resizeFunction.add(function(){e.onresize.call(t)}),e.resize_auto&&t.resizeFunction.add(function(){void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),t.resizeTimeout=window.setTimeout(function(){delete t.resizeTimeout,t.updateAndRedraw({withUpdateXDomain:!1,withUpdateOrgXDomain:!1,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.brush&&t.brush.update()},100)}),t.resizeFunction.add(function(){e.onresized.call(t)}),t.resizeIfElementDisplayed=function(){null!=t.api&&t.api.element.offsetParent&&t.resizeFunction()},window.attachEvent)window.attachEvent("onresize",t.resizeIfElementDisplayed);else if(window.addEventListener)window.addEventListener("resize",t.resizeIfElementDisplayed,!1);else{var i=window.onresize;i?i.add&&i.remove||(i=t.generateResize()).add(window.onresize):i=t.generateResize(),i.add(t.resizeFunction),window.onresize=function(){t.api.element.offsetParent&&i()}}},m.generateResize=function(){var i=[];function t(){i.forEach(function(t){t()})}return t.add=function(t){i.push(t)},t.remove=function(t){for(var e=0;e<i.length;e++)if(i[e]===t){i.splice(e,1);break}},t},m.endall=function(t,e){var i=0;t.each(function(){++i}).on("end",function(){--i||e.apply(this,arguments)})},m.generateWait=function(){var n=[],t=function(t){var i=setInterval(function(){var e=0;n.forEach(function(t){if(t.empty())e+=1;else try{t.transition()}catch(t){e+=1}}),e===n.length&&(clearInterval(i),t&&t())},50)};return t.add=function(t){n.push(t)},t},m.parseDate=function(t){var e;return t instanceof Date?e=t:"string"==typeof t?e=this.dataTimeParse(t):"object"===(void 0===t?"undefined":o(t))?e=new Date(+t):"number"!=typeof t||isNaN(t)||(e=new Date(+t)),e&&!isNaN(+e)||window.console.error("Failed to parse x '"+t+"' to Date object"),e},m.isTabVisible=function(){var t;return void 0!==document.hidden?t="hidden":void 0!==document.mozHidden?t="mozHidden":void 0!==document.msHidden?t="msHidden":void 0!==document.webkitHidden&&(t="webkitHidden"),!document[t]},m.isValue=P,m.isFunction=h,m.isString=c,m.isUndefined=v,m.isDefined=k,m.ceil10=d,m.asHalfPixel=l,m.diffDomain=D,m.isEmpty=g,m.notEmpty=C,m.notEmpty=C,m.getOption=N,m.hasValue=f,m.sanitise=_,m.getPathBox=y,m.CLASS=Y,Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},a=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,a.prototype=new n,a}),"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,i){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=i},window.SVGPathSeg.prototype.classname="SVGPathSeg",window.SVGPathSeg.PATHSEG_UNKNOWN=0,window.SVGPathSeg.PATHSEG_CLOSEPATH=1,window.SVGPathSeg.PATHSEG_MOVETO_ABS=2,window.SVGPathSeg.PATHSEG_MOVETO_REL=3,window.SVGPathSeg.PATHSEG_LINETO_ABS=4,window.SVGPathSeg.PATHSEG_LINETO_REL=5,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,window.SVGPathSeg.PATHSEG_ARC_ABS=10,window.SVGPathSeg.PATHSEG_ARC_REL=11,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,window.SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=i},window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=i},window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=i},window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=i},window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,i,n,a,r,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=i,this._x1=n,this._y1=a,this._x2=r,this._y2=s},window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,i,n,a,r,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=i,this._x1=n,this._y1=a,this._x2=r,this._y2=s},window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=i,this._x1=n,this._y1=a},window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=i,this._x1=n,this._y1=a},window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,i,n,a,r,s,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=i,this._r1=n,this._r2=a,this._angle=r,this._largeArcFlag=s,this._sweepFlag=o},window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,i,n,a,r,s,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=i,this._r1=n,this._r2=a,this._angle=r,this._largeArcFlag=s,this._sweepFlag=o},window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=i,this._x2=n,this._y2=a},window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,i,n,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=i,this._x2=n,this._y2=a},window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=i},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=i},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new window.SVGPathSegMovetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new window.SVGPathSegMovetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new window.SVGPathSegLinetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new window.SVGPathSegLinetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,i,n,a,r){return new window.SVGPathSegCurvetoCubicAbs(void 0,t,e,i,n,a,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,i,n,a,r){return new window.SVGPathSegCurvetoCubicRel(void 0,t,e,i,n,a,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,i,n){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,i,n){return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,i,n,a,r,s){return new window.SVGPathSegArcAbs(void 0,t,e,i,n,a,r,s)},window.SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,i,n,a,r,s){return new window.SVGPathSegArcRel(void 0,t,e,i,n,a,r,s)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new window.SVGPathSegLinetoHorizontalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new window.SVGPathSegLinetoVerticalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new window.SVGPathSegLinetoVerticalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,i,n){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,i,n){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)},"getPathSegAtLength"in window.SVGPathElement.prototype||(window.SVGPathElement.prototype.getPathSegAtLength=function(t){if(void 0===t||!isFinite(t))throw"Invalid arguments.";var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",this.getAttribute("d"));var i=e.pathSegList.numberOfItems-1;if(i<=0)return 0;do{if(e.pathSegList.removeItem(i),t>e.getTotalLength())break;i--}while(0<i);return i})),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.classname="SVGPathSegList",Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new window.SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},window.SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(this._pathElement){var e=!1;t.forEach(function(t){"d"==t.attributeName&&(e=!0)}),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(t){t._owningPathSegList=null}),this._list=[],this._writeListToPath()},window.SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],(t._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},window.SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},window.SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),(t._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),((this._list[e]=t)._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},window.SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),(t._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList._pathSegArrayAsString=function(t){var e="",i=!0;return t.forEach(function(t){i?(i=!1,e+=t._asPathString()):e+=" "+t._asPathString()}),e},window.SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[];var n=this,e=function(){this.pathSegList=[]};e.prototype.appendSegment=function(t){this.pathSegList.push(t)};var i=function(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};i.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex];return t<=" "&&(" "==t||"\n"==t||"\t"==t||"\r"==t||"\f"==t)},i.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},i.prototype._skipOptionalSpacesOrDelimiter=function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex))&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},i.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},i.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex];return this._pathSegTypeFromChar(t)},i.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL;case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS;case"a":return window.SVGPathSeg.PATHSEG_ARC_REL;case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return window.SVGPathSeg.PATHSEG_UNKNOWN}},i.prototype._nextCommandHelper=function(t,e){return("+"==t||"-"==t||"."==t||"0"<=t&&t<="9")&&e!=window.SVGPathSeg.PATHSEG_CLOSEPATH?e==window.SVGPathSeg.PATHSEG_MOVETO_ABS?window.SVGPathSeg.PATHSEG_LINETO_ABS:e==window.SVGPathSeg.PATHSEG_MOVETO_REL?window.SVGPathSeg.PATHSEG_LINETO_REL:e:window.SVGPathSeg.PATHSEG_UNKNOWN},i.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var t=this.peekSegmentType();return t==window.SVGPathSeg.PATHSEG_MOVETO_ABS||t==window.SVGPathSeg.PATHSEG_MOVETO_REL},i.prototype._parseNumber=function(){var t=0,e=0,i=1,n=0,a=1,r=1,s=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,a=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||"9"<this._string.charAt(this._currentIndex))&&"."!=this._string.charAt(this._currentIndex))){for(var o=this._currentIndex;this._currentIndex<this._endIndex&&"0"<=this._string.charAt(this._currentIndex)&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=o)for(var c=this._currentIndex-1,d=1;o<=c;)e+=d*(this._string.charAt(c--)-"0"),d*=10;if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||"9"<this._string.charAt(this._currentIndex))return;for(;this._currentIndex<this._endIndex&&"0"<=this._string.charAt(this._currentIndex)&&this._string.charAt(this._currentIndex)<="9";)i*=10,n+=(this._string.charAt(this._currentIndex)-"0")/i,this._currentIndex+=1}if(this._currentIndex!=s&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,r=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||"9"<this._string.charAt(this._currentIndex))return;for(;this._currentIndex<this._endIndex&&"0"<=this._string.charAt(this._currentIndex)&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var u=e+n;if(u*=a,t&&(u*=Math.pow(10,r*t)),s!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),u}},i.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,e=this._string.charAt(this._currentIndex++);if("0"==e)t=!1;else{if("1"!=e)return;t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},i.prototype.parseSegment=function(){var t=this._string[this._currentIndex],e=this._pathSegTypeFromChar(t);if(e==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN)return null;if((e=this._nextCommandHelper(t,this._previousCommand))==window.SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;switch(this._previousCommand=e){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new window.SVGPathSegClosePath(n);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var i={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicRel(n,i.x,i.y,i.x1,i.y1,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:return i={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicAbs(n,i.x,i.y,i.x1,i.y1,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:return i={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothRel(n,i.x,i.y,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:return i={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothAbs(n,i.x,i.y,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:return i={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticRel(n,i.x,i.y,i.x1,i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:return i={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticAbs(n,i.x,i.y,i.x1,i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:return i={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcRel(n,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:return i={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcAbs(n,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);default:throw"Unknown path seg type."}};var a=new e,r=new i(t);if(!r.initialCommandIsMoveTo())return[];for(;r.hasMoreData();){var s=r.parseSegment();if(!s)return[];a.appendSegment(s)}return a.pathSegList}),String.prototype.padEnd||(String.prototype.padEnd=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),String(this)+e.slice(0,t))}),x.axis=function(){},x.axis.labels=function(e){var i=this.internal;arguments.length&&(Object.keys(e).forEach(function(t){i.axis.setLabelText(t,e[t])}),i.axis.updateLabels())},x.axis.max=function(t){var e=this.internal,i=e.config;if(!arguments.length)return{x:i.axis_x_max,y:i.axis_y_max,y2:i.axis_y2_max};"object"===(void 0===t?"undefined":o(t))?(P(t.x)&&(i.axis_x_max=t.x),P(t.y)&&(i.axis_y_max=t.y),P(t.y2)&&(i.axis_y2_max=t.y2)):i.axis_y_max=i.axis_y2_max=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},x.axis.min=function(t){var e=this.internal,i=e.config;if(!arguments.length)return{x:i.axis_x_min,y:i.axis_y_min,y2:i.axis_y2_min};"object"===(void 0===t?"undefined":o(t))?(P(t.x)&&(i.axis_x_min=t.x),P(t.y)&&(i.axis_y_min=t.y),P(t.y2)&&(i.axis_y2_min=t.y2)):i.axis_y_min=i.axis_y2_min=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},x.axis.range=function(t){if(!arguments.length)return{max:this.axis.max(),min:this.axis.min()};k(t.max)&&this.axis.max(t.max),k(t.min)&&this.axis.min(t.min)},x.category=function(t,e){var i=this.internal,n=i.config;return 1<arguments.length&&(n.axis_x_categories[t]=e,i.redraw()),n.axis_x_categories[t]},x.categories=function(t){var e=this.internal,i=e.config;return arguments.length&&(i.axis_x_categories=t,e.redraw()),i.axis_x_categories},x.resize=function(t){var e=this.internal.config;e.size_width=t?t.width:null,e.size_height=t?t.height:null,this.flush()},x.flush=function(){this.internal.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},x.destroy=function(){var e=this.internal;if(window.clearInterval(e.intervalForObserveInserted),void 0!==e.resizeTimeout&&window.clearTimeout(e.resizeTimeout),window.detachEvent)window.detachEvent("onresize",e.resizeIfElementDisplayed);else if(window.removeEventListener)window.removeEventListener("resize",e.resizeIfElementDisplayed);else{var t=window.onresize;t&&t.add&&t.remove&&t.remove(e.resizeFunction)}return e.resizeFunction.remove(),e.selectChart.classed("c3",!1).html(""),Object.keys(e).forEach(function(t){e[t]=null}),null},x.color=function(t){return this.internal.color(t)},x.data=function(e){var t=this.internal.data.targets;return void 0===e?t:t.filter(function(t){return 0<=[].concat(e).indexOf(t.id)})},x.data.shown=function(t){return this.internal.filterTargetsToShow(this.data(t))},x.data.values=function(t){var e,i=null;return t&&(i=(e=this.data(t))[0]?e[0].values.map(function(t){return t.value}):null),i},x.data.names=function(t){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",t)},x.data.colors=function(t){return this.internal.updateDataAttributes("colors",t)},x.data.axes=function(t){return this.internal.updateDataAttributes("axes",t)},x.flow=function(t){var a,e,i,n,r,s,o,c=this.internal,d=[],u=c.getMaxDataCount(),l=0,h=0;if(t.json)e=c.convertJsonToData(t.json,t.keys);else if(t.rows)e=c.convertRowsToData(t.rows);else{if(!t.columns)return;e=c.convertColumnsToData(t.columns)}a=c.convertDataToTargets(e,!0),c.data.targets.forEach(function(t){var e,i,n=!1;for(e=0;e<a.length;e++)if(t.id===a[e].id){for(n=!0,t.values[t.values.length-1]&&(h=t.values[t.values.length-1].index+1),l=a[e].values.length,i=0;i<l;i++)a[e].values[i].index=h+i,c.isTimeSeries()||(a[e].values[i].x=h+i);t.values=t.values.concat(a[e].values),a.splice(e,1);break}n||d.push(t.id)}),c.data.targets.forEach(function(t){var e,i;for(e=0;e<d.length;e++)if(t.id===d[e])for(h=t.values[t.values.length-1].index+1,i=0;i<l;i++)t.values.push({id:t.id,index:h+i,x:c.isTimeSeries()?c.getOtherTargetX(h+i):h+i,value:null})}),c.data.targets.length&&a.forEach(function(t){var e,i=[];for(e=c.data.targets[0].values[0].index;e<h;e++)i.push({id:t.id,index:e,x:c.isTimeSeries()?c.getOtherTargetX(e):e,value:null});t.values.forEach(function(t){t.index+=h,c.isTimeSeries()||(t.x+=h)}),t.values=i.concat(t.values)}),c.data.targets=c.data.targets.concat(a),c.getMaxDataCount(),r=(n=c.data.targets[0]).values[0],k(t.to)?(l=0,o=c.isTimeSeries()?c.parseDate(t.to):t.to,n.values.forEach(function(t){t.x<o&&l++})):k(t.length)&&(l=t.length),u?1===u&&c.isTimeSeries()&&(s=(n.values[n.values.length-1].x-r.x)/2,i=[new Date(+r.x-s),new Date(+r.x+s)],c.updateXDomain(null,!0,!0,!1,i)):(s=c.isTimeSeries()?1<n.values.length?n.values[n.values.length-1].x-r.x:r.x-c.getXDomain(c.data.targets)[0]:1,i=[r.x-s,r.x],c.updateXDomain(null,!0,!0,!1,i)),c.updateTargets(c.data.targets),c.redraw({flow:{index:r.index,length:l,duration:P(t.duration)?t.duration:c.config.transition_duration,done:t.done,orgDataCount:u},withLegend:!0,withTransition:1<u,withTrimXDomain:!1,withUpdateXAxis:!0})},m.generateFlow=function(E){var O=this,I=O.config,R=O.d3;return function(){var t,e,i,n,a,r,s,o,c,d,u,l=E.targets,h=E.flow,g=E.drawBar,f=E.drawLine,p=E.drawArea,_=E.cx,x=E.cy,y=E.xv,m=E.xForText,S=E.yForText,w=E.duration,v=h.index,b=h.length,A=O.getValueOnIndex(O.data.targets[0].values,v),T=O.getValueOnIndex(O.data.targets[0].values,v+b),P=O.x.domain(),C=h.duration||w,L=h.done||function(){},V=O.generateWait();O.flowing=!0,O.data.targets.forEach(function(t){t.values.splice(0,b)}),i=O.updateXDomain(l,!0,!0),O.updateXGrid&&O.updateXGrid(!0),n=O.xgrid||R.selectAll([]),a=O.xgridLines||R.selectAll([]),r=O.mainRegion||R.selectAll([]),s=O.mainText||R.selectAll([]),o=O.mainBar||R.selectAll([]),c=O.mainLine||R.selectAll([]),d=O.mainArea||R.selectAll([]),u=O.mainCircle||R.selectAll([]),h.orgDataCount?t=1===h.orgDataCount||(A&&A.x)===(T&&T.x)?O.x(P[0])-O.x(i[0]):O.isTimeSeries()?O.x(P[0])-O.x(i[0]):O.x(A.x)-O.x(T.x):1!==O.data.targets[0].values.length?t=O.x(P[0])-O.x(i[0]):O.isTimeSeries()?(A=O.getValueOnIndex(O.data.targets[0].values,0),T=O.getValueOnIndex(O.data.targets[0].values,O.data.targets[0].values.length-1),t=O.x(A.x)-O.x(T.x)):t=D(i)/2,e="translate("+t+",0) scale("+D(P)/D(i)+",1)",O.hideXGridFocus();var G=R.transition().ease(R.easeLinear).duration(C);V.add(O.xAxis(O.axes.x,G)),V.add(o.transition(G).attr("transform",e)),V.add(c.transition(G).attr("transform",e)),V.add(d.transition(G).attr("transform",e)),V.add(u.transition(G).attr("transform",e)),V.add(s.transition(G).attr("transform",e)),V.add(r.filter(O.isRegionOnX).transition(G).attr("transform",e)),V.add(n.transition(G).attr("transform",e)),V.add(a.transition(G).attr("transform",e)),V(function(){var t,e=[],i=[];if(b){for(t=0;t<b;t++)e.push("."+Y.shape+"-"+(v+t)),i.push("."+Y.text+"-"+(v+t));O.svg.selectAll("."+Y.shapes).selectAll(e).remove(),O.svg.selectAll("."+Y.texts).selectAll(i).remove(),O.svg.select("."+Y.xgrid).remove()}n.attr("transform",null).attr("x1",O.xgridAttr.x1).attr("x2",O.xgridAttr.x2).attr("y1",O.xgridAttr.y1).attr("y2",O.xgridAttr.y2).style("opacity",O.xgridAttr.opacity),a.attr("transform",null),a.select("line").attr("x1",I.axis_rotated?0:y).attr("x2",I.axis_rotated?O.width:y),a.select("text").attr("x",I.axis_rotated?O.width:0).attr("y",y),o.attr("transform",null).attr("d",g),c.attr("transform",null).attr("d",f),d.attr("transform",null).attr("d",p),u.attr("transform",null).attr("cx",_).attr("cy",x),s.attr("transform",null).attr("x",m).attr("y",S).style("fill-opacity",O.opacityForText.bind(O)),r.attr("transform",null),r.filter(O.isRegionOnX).attr("x",O.regionX.bind(O)).attr("width",O.regionWidth.bind(O)),L(),O.flowing=!1})}},x.focus=function(e){var t,i=this.internal;e=i.mapToTargetIds(e),t=i.svg.selectAll(i.selectorTargets(e.filter(i.isTargetToShow,i))),this.revert(),this.defocus(),t.classed(Y.focused,!0).classed(Y.defocused,!1),i.hasArcType()&&i.expandArc(e),i.toggleFocusLegend(e,!0),i.focusedTargetIds=e,i.defocusedTargetIds=i.defocusedTargetIds.filter(function(t){return e.indexOf(t)<0})},x.defocus=function(e){var t=this.internal;e=t.mapToTargetIds(e),t.svg.selectAll(t.selectorTargets(e.filter(t.isTargetToShow,t))).classed(Y.focused,!1).classed(Y.defocused,!0),t.hasArcType()&&t.unexpandArc(e),t.toggleFocusLegend(e,!1),t.focusedTargetIds=t.focusedTargetIds.filter(function(t){return e.indexOf(t)<0}),t.defocusedTargetIds=e},x.revert=function(t){var e=this.internal;t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t)).classed(Y.focused,!1).classed(Y.defocused,!1),e.hasArcType()&&e.unexpandArc(t),e.config.legend_show&&(e.showLegend(t.filter(e.isLegendToShow.bind(e))),e.legend.selectAll(e.selectorLegends(t)).filter(function(){return e.d3.select(this).classed(Y.legendItemFocused)}).classed(Y.legendItemFocused,!1)),e.focusedTargetIds=[],e.defocusedTargetIds=[]},x.xgrids=function(t){var e=this.internal,i=e.config;return t&&(i.grid_x_lines=t,e.redrawWithoutRescale()),i.grid_x_lines},x.xgrids.add=function(t){var e=this.internal;return this.xgrids(e.config.grid_x_lines.concat(t||[]))},x.xgrids.remove=function(t){this.internal.removeGridLines(t,!0)},x.ygrids=function(t){var e=this.internal,i=e.config;return t&&(i.grid_y_lines=t,e.redrawWithoutRescale()),i.grid_y_lines},x.ygrids.add=function(t){var e=this.internal;return this.ygrids(e.config.grid_y_lines.concat(t||[]))},x.ygrids.remove=function(t){this.internal.removeGridLines(t,!1)},x.groups=function(t){var e=this.internal,i=e.config;return v(t)||(i.data_groups=t,e.redraw()),i.data_groups},x.legend=function(){},x.legend.show=function(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},x.legend.hide=function(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},x.load=function(e){var t=this.internal,i=t.config;e.xs&&t.addXs(e.xs),"names"in e&&x.data.names.bind(this)(e.names),"classes"in e&&Object.keys(e.classes).forEach(function(t){i.data_classes[t]=e.classes[t]}),"categories"in e&&t.isCategorized()&&(i.axis_x_categories=e.categories),"axes"in e&&Object.keys(e.axes).forEach(function(t){i.data_axes[t]=e.axes[t]}),"colors"in e&&Object.keys(e.colors).forEach(function(t){i.data_colors[t]=e.colors[t]}),"cacheIds"in e&&t.hasCaches(e.cacheIds)?t.load(t.getCaches(e.cacheIds),e.done):"unload"in e?t.unload(t.mapToTargetIds("boolean"==typeof e.unload&&e.unload?null:e.unload),function(){t.loadFromArgs(e)}):t.loadFromArgs(e)},x.unload=function(t){var e=this.internal;(t=t||{})instanceof Array?t={ids:t}:"string"==typeof t&&(t={ids:[t]}),e.unload(e.mapToTargetIds(t.ids),function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),t.done&&t.done()})},x.regions=function(t){var e=this.internal,i=e.config;return t&&(i.regions=t,e.redrawWithoutRescale()),i.regions},x.regions.add=function(t){var e=this.internal,i=e.config;return t&&(i.regions=i.regions.concat(t),e.redrawWithoutRescale()),i.regions},x.regions.remove=function(t){var e,i,n,a=this.internal,r=a.config;return t=t||{},e=a.getOption(t,"duration",r.transition_duration),i=a.getOption(t,"classes",[Y.region]),n=a.main.select("."+Y.regions).selectAll(i.map(function(t){return"."+t})),(e?n.transition().duration(e):n).style("opacity",0).remove(),r.regions=r.regions.filter(function(t){var e=!1;return!t.class||(t.class.split(" ").forEach(function(t){0<=i.indexOf(t)&&(e=!0)}),!e)}),r.regions},x.selected=function(t){var e=this.internal,i=e.d3;return i.merge(e.main.selectAll("."+Y.shapes+e.getTargetSelectorSuffix(t)).selectAll("."+Y.shape).filter(function(){return i.select(this).classed(Y.SELECTED)}).map(function(t){return t.map(function(t){var e=t.__data__;return e.data?e.data:e})}))},x.select=function(c,d,u){var l=this.internal,h=l.d3,g=l.config;g.data_selection_enabled&&l.main.selectAll("."+Y.shapes).selectAll("."+Y.shape).each(function(t,e){var i=h.select(this),n=t.data?t.data.id:t.id,a=l.getToggle(this,t).bind(l),r=g.data_selection_grouped||!c||0<=c.indexOf(n),s=!d||0<=d.indexOf(e),o=i.classed(Y.SELECTED);i.classed(Y.line)||i.classed(Y.area)||(r&&s?g.data_selection_isselectable(t)&&!o&&a(!0,i.classed(Y.SELECTED,!0),t,e):k(u)&&u&&o&&a(!1,i.classed(Y.SELECTED,!1),t,e))})},x.unselect=function(c,d){var u=this.internal,l=u.d3,h=u.config;h.data_selection_enabled&&u.main.selectAll("."+Y.shapes).selectAll("."+Y.shape).each(function(t,e){var i=l.select(this),n=t.data?t.data.id:t.id,a=u.getToggle(this,t).bind(u),r=h.data_selection_grouped||!c||0<=c.indexOf(n),s=!d||0<=d.indexOf(e),o=i.classed(Y.SELECTED);i.classed(Y.line)||i.classed(Y.area)||r&&s&&h.data_selection_isselectable(t)&&o&&a(!1,i.classed(Y.SELECTED,!1),t,e)})},x.show=function(t,e){var i,n=this.internal;t=n.mapToTargetIds(t),e=e||{},n.removeHiddenTargetIds(t),(i=n.svg.selectAll(n.selectorTargets(t))).transition().style("display","initial","important").style("opacity",1,"important").call(n.endall,function(){i.style("opacity",null).style("opacity",1)}),e.withLegend&&n.showLegend(t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},x.hide=function(t,e){var i,n=this.internal;t=n.mapToTargetIds(t),e=e||{},n.addHiddenTargetIds(t),(i=n.svg.selectAll(n.selectorTargets(t))).transition().style("opacity",0,"important").call(n.endall,function(){i.style("opacity",null).style("opacity",0),i.style("display","none")}),e.withLegend&&n.hideLegend(t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},x.toggle=function(t,e){var i=this,n=this.internal;n.mapToTargetIds(t).forEach(function(t){n.isTargetToShow(t)?i.hide(t,e):i.show(t,e)})},x.tooltip=function(){},x.tooltip.show=function(e){var t,i,n=this.internal,a={};e.mouse?a=e.mouse:(e.data?i=e.data:void 0!==e.x&&(t=e.id?n.data.targets.filter(function(t){return t.id===e.id}):n.data.targets,i=n.filterByX(t,e.x).slice(0,1)[0]),a=i?n.getMousePosition(i):null),n.dispatchEvent("mousemove",a),n.config.tooltip_onshow.call(n,i)},x.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0),this.internal.config.tooltip_onhide.call(this)},x.transform=function(t,e){var i=this.internal,n=0<=["pie","donut"].indexOf(t)?{withTransform:!0}:null;i.transformTo(e,t,n)},m.transformTo=function(t,e,i){var n=this,a=!n.hasArcType(),r=i||{withTransitionForAxis:a};r.withTransitionForTransform=!1,n.transiting=!1,n.setTargetType(t,e),n.updateTargets(n.data.targets),n.updateAndRedraw(r)},x.x=function(t){var e=this.internal;return arguments.length&&(e.updateTargetX(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},x.xs=function(t){var e=this.internal;return arguments.length&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},x.zoom=function(t){var e=this.internal;return t?(e.isTimeSeries()&&(t=t.map(function(t){return e.parseDate(t)})),e.config.subchart_show?e.brush.selectionAsValue(t,!0):(e.updateXDomain(null,!0,!1,!1,t),e.redraw({withY:e.config.zoom_rescale,withSubchart:!1})),e.config.zoom_onzoom.call(this,e.x.orgDomain()),t):e.x.domain()},x.zoom.enable=function(t){var e=this.internal;e.config.zoom_enabled=t,e.updateAndRedraw()},x.unzoom=function(){var t=this.internal;t.config.subchart_show?t.brush.clear():(t.updateXDomain(null,!0,!1,!1,t.subX.domain()),t.redraw({withY:t.config.zoom_rescale,withSubchart:!1}))},x.zoom.max=function(t){var e=this.internal,i=e.config,n=e.d3;if(0!==t&&!t)return i.zoom_x_max;i.zoom_x_max=n.max([e.orgXDomain[1],t])},x.zoom.min=function(t){var e=this.internal,i=e.config,n=e.d3;if(0!==t&&!t)return i.zoom_x_min;i.zoom_x_min=n.min([e.orgXDomain[0],t])},x.zoom.range=function(t){if(!arguments.length)return{max:this.domain.max(),min:this.domain.min()};k(t.max)&&this.domain.max(t.max),k(t.min)&&this.domain.min(t.min)},m.initPie=function(){var t=this,e=t.d3;t.pie=e.pie().value(function(t){return t.values.reduce(function(t,e){return t+e.value},0)});var i=t.getOrderFunction();if(i&&(t.isOrderAsc()||t.isOrderDesc())){var n=i;i=function(t,e){return-1*n(t,e)}}t.pie.sort(i||null)},m.updateRadius=function(){var t=this,e=t.config,i=e.gauge_width||e.donut_width,n=t.filterTargetsToShow(t.data.targets).length*t.config.gauge_arcs_minWidth;t.radiusExpanded=Math.min(t.arcWidth,t.arcHeight)/2*(t.hasType("gauge")?.85:1),t.radius=.95*t.radiusExpanded,t.innerRadiusRatio=i?(t.radius-i)/t.radius:.6,t.innerRadius=t.hasType("donut")||t.hasType("gauge")?t.radius*t.innerRadiusRatio:0,t.gaugeArcWidth=i||(n<=t.radius-t.innerRadius?t.radius-t.innerRadius:n<=t.radius?n:t.radius)},m.updateArc=function(){var t=this;t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded(),t.svgArcExpandedSub=t.getSvgArcExpanded(.98)},m.updateAngle=function(e){var t,i,n,a,r=this,s=r.config,o=!1,c=0;return s?(r.pie(r.filterTargetsToShow(r.data.targets)).forEach(function(t){o||t.data.id!==e.data.id||(o=!0,(e=t).index=c),c++}),isNaN(e.startAngle)&&(e.startAngle=0),isNaN(e.endAngle)&&(e.endAngle=e.startAngle),r.isGaugeType(e.data)&&(t=s.gauge_min,i=s.gauge_max,n=Math.PI*(s.gauge_fullCircle?2:1)/(i-t),a=e.value<t?0:e.value<i?e.value-t:i-t,e.startAngle=s.gauge_startingAngle,e.endAngle=e.startAngle+n*a),o?e:null):null},m.getSvgArc=function(){var n=this,e=n.hasType("gauge"),i=n.gaugeArcWidth/n.filterTargetsToShow(n.data.targets).length,a=n.d3.arc().outerRadius(function(t){return e?n.radius-i*t.index:n.radius}).innerRadius(function(t){return e?n.radius-i*(t.index+1):n.innerRadius}),t=function(t,e){var i;return e?a(t):(i=n.updateAngle(t))?a(i):"M 0 0"};return t.centroid=a.centroid,t},m.getSvgArcExpanded=function(e){e=e||1;var i=this,n=i.hasType("gauge"),a=i.gaugeArcWidth/i.filterTargetsToShow(i.data.targets).length,r=Math.min(i.radiusExpanded*e-i.radius,.8*a-100*(1-e)),s=i.d3.arc().outerRadius(function(t){return n?i.radius-a*t.index+r:i.radiusExpanded*e}).innerRadius(function(t){return n?i.radius-a*(t.index+1):i.innerRadius});return function(t){var e=i.updateAngle(t);return e?s(e):"M 0 0"}},m.getArc=function(t,e,i){return i||this.isArcType(t.data)?this.svgArc(t,e):"M 0 0"},m.transformForArcLabel=function(t){var e,i,n,a,r,s=this,o=s.config,c=s.updateAngle(t),d="",u=s.hasType("gauge");if(c&&!u)e=this.svgArc.centroid(c),i=isNaN(e[0])?0:e[0],n=isNaN(e[1])?0:e[1],a=Math.sqrt(i*i+n*n),d="translate("+i*(r=s.hasType("donut")&&o.donut_label_ratio?h(o.donut_label_ratio)?o.donut_label_ratio(t,s.radius,a):o.donut_label_ratio:s.hasType("pie")&&o.pie_label_ratio?h(o.pie_label_ratio)?o.pie_label_ratio(t,s.radius,a):o.pie_label_ratio:s.radius&&a?(.375<36/s.radius?1.175-36/s.radius:.8)*s.radius/a:0)+","+n*r+")";else if(c&&u&&1<s.filterTargetsToShow(s.data.targets).length){var l=Math.sin(c.endAngle-Math.PI/2);d="translate("+(i=Math.cos(c.endAngle-Math.PI/2)*(s.radiusExpanded+25))+","+(n=l*(s.radiusExpanded+15-Math.abs(10*l))+3)+")"}return d},m.getArcRatio=function(t){var e=this.config,i=Math.PI*(this.hasType("gauge")&&!e.gauge_fullCircle?1:2);return t?(t.endAngle-t.startAngle)/i:null},m.convertToArcData=function(t){return this.addName({id:t.data.id,value:t.value,ratio:this.getArcRatio(t),index:t.index})},m.textForArcLabel=function(t){var e,i,n,a,r,s=this;return s.shouldShowArcLabel()?(i=(e=s.updateAngle(t))?e.value:null,n=s.getArcRatio(e),a=t.data.id,s.hasType("gauge")||s.meetsArcLabelThreshold(n)?(r=s.getArcLabelFormat())?r(i,n,a):s.defaultArcValueFormat(i,n):""):""},m.textForGaugeMinMax=function(t,e){var i=this.getGaugeLabelExtents();return i?i(t,e):t},m.expandArc=function(t){var e,i=this;i.transiting?e=window.setInterval(function(){i.transiting||(window.clearInterval(e),0<i.legend.selectAll(".c3-legend-item-focused").size()&&i.expandArc(t))},10):(t=i.mapToTargetIds(t),i.svg.selectAll(i.selectorTargets(t,"."+Y.chartArc)).each(function(t){i.shouldExpand(t.data.id)&&i.d3.select(this).selectAll("path").transition().duration(i.expandDuration(t.data.id)).attr("d",i.svgArcExpanded).transition().duration(2*i.expandDuration(t.data.id)).attr("d",i.svgArcExpandedSub).each(function(t){i.isDonutType(t.data)})}))},m.unexpandArc=function(t){var e=this;e.transiting||(t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t,"."+Y.chartArc)).selectAll("path").transition().duration(function(t){return e.expandDuration(t.data.id)}).attr("d",e.svgArc),e.svg.selectAll("."+Y.arc))},m.expandDuration=function(t){var e=this.config;return this.isDonutType(t)?e.donut_expand_duration:this.isGaugeType(t)?e.gauge_expand_duration:this.isPieType(t)?e.pie_expand_duration:50},m.shouldExpand=function(t){var e=this.config;return this.isDonutType(t)&&e.donut_expand||this.isGaugeType(t)&&e.gauge_expand||this.isPieType(t)&&e.pie_expand},m.shouldShowArcLabel=function(){var t=this.config,e=!0;return this.hasType("donut")?e=t.donut_label_show:this.hasType("pie")&&(e=t.pie_label_show),e},m.meetsArcLabelThreshold=function(t){var e=this.config;return(this.hasType("donut")?e.donut_label_threshold:e.pie_label_threshold)<=t},m.getArcLabelFormat=function(){var t=this.config,e=t.pie_label_format;return this.hasType("gauge")?e=t.gauge_label_format:this.hasType("donut")&&(e=t.donut_label_format),e},m.getGaugeLabelExtents=function(){return this.config.gauge_label_extents},m.getArcTitle=function(){return this.hasType("donut")?this.config.donut_title:""},m.updateTargetsForArc=function(t){var e,i=this,n=i.main,a=i.classChartArc.bind(i),r=i.classArcs.bind(i),s=i.classFocus.bind(i);(e=n.select("."+Y.chartArcs).selectAll("."+Y.chartArc).data(i.pie(t)).attr("class",function(t){return a(t)+s(t.data)}).enter().append("g").attr("class",a)).append("g").attr("class",r),e.append("text").attr("dy",i.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},m.initArc=function(){var t=this;t.arcs=t.main.select("."+Y.chart).append("g").attr("class",Y.chartArcs).attr("transform",t.getTranslate("arc")),t.arcs.append("text").attr("class",Y.chartArcsTitle).style("text-anchor","middle").text(t.getArcTitle())},m.redrawArc=function(t,e,i){var n,a,r,s,o,u=this,l=u.d3,c=u.config,d=u.main,h=u.hasType("gauge");if(a=(n=d.selectAll("."+Y.arcs).selectAll("."+Y.arc).data(u.arcData.bind(u))).enter().append("path").attr("class",u.classArc.bind(u)).style("fill",function(t){return u.color(t.data)}).style("cursor",function(t){return c.interaction_enabled&&c.data_selection_isselectable(t)?"pointer":null}).each(function(t){u.isGaugeType(t.data)&&(t.startAngle=t.endAngle=c.gauge_startingAngle),this._current=t}).merge(n),h&&(o=(s=d.selectAll("."+Y.arcs).selectAll("."+Y.arcLabelLine).data(u.arcData.bind(u))).enter().append("rect").attr("class",function(t){return Y.arcLabelLine+" "+Y.target+" "+Y.target+"-"+t.data.id}).merge(s),1===u.filterTargetsToShow(u.data.targets).length?o.style("display","none"):o.style("fill",function(t){return 0<c.color_pattern.length?u.levelColor(t.data.values[0].value):u.color(t.data)}).style("display",c.gauge_labelLine_show?"":"none").each(function(t){var e=0,i=0,n=0,a="";if(u.hiddenTargetIds.indexOf(t.data.id)<0){var r=u.updateAngle(t),s=u.gaugeArcWidth/u.filterTargetsToShow(u.data.targets).length*(r.index+1),o=r.endAngle-Math.PI/2,c=u.radius-s,d=o-(0===c?0:1/c);e=u.radiusExpanded-u.radius+s,i=Math.cos(d)*c,n=Math.sin(d)*c,a="rotate("+180*o/Math.PI+", "+i+", "+n+")"}l.select(this).attr("x",i).attr("y",n).attr("width",e).attr("height",2).attr("transform",a).style("stroke-dasharray","0, "+(e+2)+", 0")})),a.attr("transform",function(t){return!u.isGaugeType(t.data)&&i?"scale(0)":""}).on("mouseover",c.interaction_enabled?function(t){var e,i;u.transiting||(e=u.updateAngle(t))&&(i=u.convertToArcData(e),u.expandArc(e.data.id),u.api.focus(e.data.id),u.toggleFocusLegend(e.data.id,!0),u.config.data_onmouseover(i,this))}:null).on("mousemove",c.interaction_enabled?function(t){var e,i=u.updateAngle(t);i&&(e=[u.convertToArcData(i)],u.showTooltip(e,this))}:null).on("mouseout",c.interaction_enabled?function(t){var e,i;u.transiting||(e=u.updateAngle(t))&&(i=u.convertToArcData(e),u.unexpandArc(e.data.id),u.api.revert(),u.revertLegend(),u.hideTooltip(),u.config.data_onmouseout(i,this))}:null).on("click",c.interaction_enabled?function(t,e){var i,n=u.updateAngle(t);n&&(i=u.convertToArcData(n),u.toggleShape&&u.toggleShape(this,i,e),u.config.data_onclick.call(u.api,i,this))}:null).each(function(){u.transiting=!0}).transition().duration(t).attrTween("d",function(i){var n,t=u.updateAngle(i);return t?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),n=l.interpolate(this._current,t),this._current=n(0),function(t){var e=n(t);return e.data=i.data,u.getArc(e,!0)}):function(){return"M 0 0"}}).attr("transform",i?"scale(1)":"").style("fill",function(t){return u.levelColor?u.levelColor(t.data.values[0].value):u.color(t.data.id)}).call(u.endall,function(){u.transiting=!1}),n.exit().transition().duration(e).style("opacity",0).remove(),d.selectAll("."+Y.chartArc).select("text").style("opacity",0).attr("class",function(t){return u.isGaugeType(t.data)?Y.gaugeValue:""}).text(u.textForArcLabel.bind(u)).attr("transform",u.transformForArcLabel.bind(u)).style("font-size",function(t){return u.isGaugeType(t.data)&&1===u.filterTargetsToShow(u.data.targets).length?Math.round(u.radius/5)+"px":""}).transition().duration(t).style("opacity",function(t){return u.isTargetToShow(t.data.id)&&u.isArcType(t.data)?1:0}),d.select("."+Y.chartArcsTitle).style("opacity",u.hasType("donut")||h?1:0),h){var g=0;(r=u.arcs.select("g."+Y.chartArcsBackground).selectAll("path."+Y.chartArcsBackground).data(u.data.targets)).enter().append("path").attr("class",function(t,e){return Y.chartArcsBackground+" "+Y.chartArcsBackground+"-"+e}).attr("d",function(t){if(0<=u.hiddenTargetIds.indexOf(t.id))return"M 0 0";var e={data:[{value:c.gauge_max}],startAngle:c.gauge_startingAngle,endAngle:-1*c.gauge_startingAngle*(c.gauge_fullCircle?Math.PI:1),index:g++};return u.getArc(e,!0,!0)}),r.exit().remove(),u.arcs.select("."+Y.chartArcsGaugeUnit).attr("dy",".75em").text(c.gauge_label_show?c.gauge_units:""),u.arcs.select("."+Y.chartArcsGaugeMin).attr("dx",-1*(u.innerRadius+(u.radius-u.innerRadius)/(c.gauge_fullCircle?1:2))+"px").attr("dy","1.2em").text(c.gauge_label_show?u.textForGaugeMinMax(c.gauge_min,!1):""),u.arcs.select("."+Y.chartArcsGaugeMax).attr("dx",u.innerRadius+(u.radius-u.innerRadius)/(c.gauge_fullCircle?1:2)+"px").attr("dy","1.2em").text(c.gauge_label_show?u.textForGaugeMinMax(c.gauge_max,!0):"")}},m.initGauge=function(){var t=this.arcs;this.hasType("gauge")&&(t.append("g").attr("class",Y.chartArcsBackground),t.append("text").attr("class",Y.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",Y.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",Y.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},m.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},m.hasCaches=function(t){for(var e=0;e<t.length;e++)if(!(t[e]in this.cache))return!1;return!0},m.addCache=function(t,e){this.cache[t]=this.cloneTarget(e)},m.getCaches=function(t){var e,i=[];for(e=0;e<t.length;e++)t[e]in this.cache&&i.push(this.cloneTarget(this.cache[t[e]]));return i},m.categoryName=function(t){var e=this.config;return t<e.axis_x_categories.length?e.axis_x_categories[t]:t},m.generateTargetClass=function(t){return t||0===t?("-"+t).replace(/\s/g,"-"):""},m.generateClass=function(t,e){return" "+t+" "+t+this.generateTargetClass(e)},m.classText=function(t){return this.generateClass(Y.text,t.index)},m.classTexts=function(t){return this.generateClass(Y.texts,t.id)},m.classShape=function(t){return this.generateClass(Y.shape,t.index)},m.classShapes=function(t){return this.generateClass(Y.shapes,t.id)},m.classLine=function(t){return this.classShape(t)+this.generateClass(Y.line,t.id)},m.classLines=function(t){return this.classShapes(t)+this.generateClass(Y.lines,t.id)},m.classCircle=function(t){return this.classShape(t)+this.generateClass(Y.circle,t.index)},m.classCircles=function(t){return this.classShapes(t)+this.generateClass(Y.circles,t.id)},m.classBar=function(t){return this.classShape(t)+this.generateClass(Y.bar,t.index)},m.classBars=function(t){return this.classShapes(t)+this.generateClass(Y.bars,t.id)},m.classArc=function(t){return this.classShape(t.data)+this.generateClass(Y.arc,t.data.id)},m.classArcs=function(t){return this.classShapes(t.data)+this.generateClass(Y.arcs,t.data.id)},m.classArea=function(t){return this.classShape(t)+this.generateClass(Y.area,t.id)},m.classAreas=function(t){return this.classShapes(t)+this.generateClass(Y.areas,t.id)},m.classRegion=function(t,e){return this.generateClass(Y.region,e)+" "+("class"in t?t.class:"")},m.classEvent=function(t){return this.generateClass(Y.eventRect,t.index)},m.classTarget=function(t){var e=this.config.data_classes[t],i="";return e&&(i=" "+Y.target+"-"+e),this.generateClass(Y.target,t)+i},m.classFocus=function(t){return this.classFocused(t)+this.classDefocused(t)},m.classFocused=function(t){return" "+(0<=this.focusedTargetIds.indexOf(t.id)?Y.focused:"")},m.classDefocused=function(t){return" "+(0<=this.defocusedTargetIds.indexOf(t.id)?Y.defocused:"")},m.classChartText=function(t){return Y.chartText+this.classTarget(t.id)},m.classChartLine=function(t){return Y.chartLine+this.classTarget(t.id)},m.classChartBar=function(t){return Y.chartBar+this.classTarget(t.id)},m.classChartArc=function(t){return Y.chartArc+this.classTarget(t.data.id)},m.getTargetSelectorSuffix=function(t){return this.generateTargetClass(t).replace(/([?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g,"\\$1")},m.selectorTarget=function(t,e){return(e||"")+"."+Y.target+this.getTargetSelectorSuffix(t)},m.selectorTargets=function(t,e){var i=this;return(t=t||[]).length?t.map(function(t){return i.selectorTarget(t,e)}):null},m.selectorLegend=function(t){return"."+Y.legendItem+this.getTargetSelectorSuffix(t)},m.selectorLegends=function(t){var e=this;return t&&t.length?t.map(function(t){return e.selectorLegend(t)}):null},m.getClipPath=function(t){return"url("+(0<=window.navigator.appVersion.toLowerCase().indexOf("msie 9.")?"":document.URL.split("#")[0])+"#"+t+")"},m.appendClip=function(t,e){return t.append("clipPath").attr("id",e).append("rect")},m.getAxisClipX=function(t){var e=Math.max(30,this.margin.left);return t?-(1+e):-(e-1)},m.getAxisClipY=function(t){return t?-20:-this.margin.top},m.getXAxisClipX=function(){return this.getAxisClipX(!this.config.axis_rotated)},m.getXAxisClipY=function(){return this.getAxisClipY(!this.config.axis_rotated)},m.getYAxisClipX=function(){return this.config.axis_y_inner?-1:this.getAxisClipX(this.config.axis_rotated)},m.getYAxisClipY=function(){return this.getAxisClipY(this.config.axis_rotated)},m.getAxisClipWidth=function(t){var e=Math.max(30,this.margin.left),i=Math.max(30,this.margin.right);return t?this.width+2+e+i:this.margin.left+20},m.getAxisClipHeight=function(t){return(t?this.margin.bottom:this.margin.top+this.height)+20},m.getXAxisClipWidth=function(){return this.getAxisClipWidth(!this.config.axis_rotated)},m.getXAxisClipHeight=function(){return this.getAxisClipHeight(!this.config.axis_rotated)},m.getYAxisClipWidth=function(){return this.getAxisClipWidth(this.config.axis_rotated)+(this.config.axis_y_inner?20:0)},m.getYAxisClipHeight=function(){return this.getAxisClipHeight(this.config.axis_rotated)},m.generateColor=function(){var t=this.config,e=this.d3,n=t.data_colors,a=C(t.color_pattern)?t.color_pattern:e.schemeCategory10,r=t.data_color,s=[];return function(t){var e,i=t.id||t.data&&t.data.id||t;return n[i]instanceof Function?e=n[i](t):n[i]?e=n[i]:(s.indexOf(i)<0&&s.push(i),e=a[s.indexOf(i)%a.length],n[i]=e),r instanceof Function?r(e,t):e}},m.generateLevelColor=function(){var t=this.config,n=t.color_pattern,e=t.color_threshold,a="value"===e.unit,r=e.values&&e.values.length?e.values:[],s=e.max||100;return C(t.color_threshold)?function(t){var e,i=n[n.length-1];for(e=0;e<r.length;e++)if((a?t:100*t/s)<r[e]){i=n[e];break}return i}:null},m.getDefaultConfig=function(){var e={bindto:"#chart",svg_classname:void 0,size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,zoom_enabled:!1,zoom_initialRange:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},zoom_x_min:void 0,zoom_x_max:void 0,interaction_brighten:!0,interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_axis_x_show:!0,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_multilineMax:0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_selection:void 0,axis_x_label:{},axis_x_inner:void 0,axis_y_show:!0,axis_y_type:void 0,axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_time_type:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,bar_space:0,area_zerobased:!0,area_above:!1,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_label_ratio:void 0,pie_expand:{},pie_expand_duration:50,gauge_fullCircle:!1,gauge_label_show:!0,gauge_labelLine_show:!0,gauge_label_format:void 0,gauge_min:0,gauge_max:100,gauge_startingAngle:-1*Math.PI/2,gauge_label_extents:void 0,gauge_units:void 0,gauge_width:void 0,gauge_arcs_minWidth:5,gauge_expand:{},gauge_expand_duration:50,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_label_ratio:void 0,donut_width:void 0,donut_title:"",donut_expand:{},donut_expand_duration:50,spline_interpolation_type:"cardinal",regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_order:void 0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:function(t,e,i,n){return this.getTooltipContent?this.getTooltipContent(t,e,i,n):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_onshow:function(){},tooltip_onhide:function(){},title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"top-center"};return Object.keys(this.additionalConfig).forEach(function(t){e[t]=this.additionalConfig[t]},this),e},m.additionalConfig={},m.loadConfig=function(e){var i,n,a,r=this.config;Object.keys(r).forEach(function(t){i=e,n=t.split("_"),a=function t(){var e=n.shift();return e&&i&&"object"===(void 0===i?"undefined":o(i))&&e in i?(i=i[e],t()):e?void 0:i}(),k(a)&&(r[t]=a)})},m.convertUrlToData=function(t,e,i,n,a){var r,s,o=this,c=e||"csv";"json"===c?(r=o.d3.json,s=o.convertJsonToData):(r="tsv"===c?o.d3.tsv:o.d3.csv,s=o.convertXsvToData),r(t,i).then(function(t){a.call(o,s.call(o,t,n))}).catch(function(t){throw t})},m.convertXsvToData=function(t){var e=t.columns;return 0===t.length?{keys:e,rows:[e.reduce(function(t,e){return Object.assign(t,(a=null,(n=e)in(i={})?Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[n]=a,i));var i,n,a},{})]}:{keys:e,rows:[].concat(t)}},m.convertJsonToData=function(e,t){var a,i,r=this,s=[];return t?(t.x?(a=t.value.concat(t.x),r.config.data_x=t.x):a=t.value,s.push(a),e.forEach(function(i){var n=[];a.forEach(function(t){var e=r.findValueInJson(i,t);v(e)&&(e=null),n.push(e)}),s.push(n)}),i=r.convertRowsToData(s)):(Object.keys(e).forEach(function(t){s.push([t].concat(e[t]))}),i=r.convertColumnsToData(s)),i},m.findValueInJson=function(t,e){for(var i=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n=0;n<i.length;++n){var a=i[n];if(!(a in t))return;t=t[a]}return t},m.convertRowsToData=function(t){for(var e=[],i=t[0],n=1;n<t.length;n++){for(var a={},r=0;r<t[n].length;r++){if(v(t[n][r]))throw new Error("Source data is missing a component at ("+n+","+r+")!");a[i[r]]=t[n][r]}e.push(a)}return{keys:i,rows:e}},m.convertColumnsToData=function(t){for(var e=[],i=[],n=0;n<t.length;n++){for(var a=t[n][0],r=1;r<t[n].length;r++){if(v(e[r-1])&&(e[r-1]={}),v(t[n][r]))throw new Error("Source data is missing a component at ("+n+","+r+")!");e[r-1][a]=t[n][r]}i.push(a)}return{keys:i,rows:e}},m.convertDataToTargets=function(t,n){var e,i,a,r,c=this,d=c.config;return u(t)?r=Object.keys(t[0]):(r=t.keys,t=t.rows),i=r.filter(c.isNotX,c),a=r.filter(c.isX,c),i.forEach(function(i){var e=c.getXKey(i);c.isCustomX()||c.isTimeSeries()?0<=a.indexOf(e)?c.data.xs[i]=(n&&c.data.xs[i]?c.data.xs[i]:[]).concat(t.map(function(t){return t[e]}).filter(P).map(function(t,e){return c.generateTargetX(t,i,e)})):d.data_x?c.data.xs[i]=c.getOtherTargetXs():C(d.data_xs)&&(c.data.xs[i]=c.getXValuesOfXKey(e,c.data.targets)):c.data.xs[i]=t.map(function(t,e){return e})}),i.forEach(function(t){if(!c.data.xs[t])throw new Error('x is not defined for id = "'+t+'".')}),(e=i.map(function(r,s){var o=d.data_idConverter(r);return{id:o,id_org:r,values:t.map(function(t,e){var i,n=t[c.getXKey(r)],a=null===t[r]||isNaN(t[r])?null:+t[r];return c.isCustomX()&&c.isCategorized()&&!v(n)?(0===s&&0===e&&(d.axis_x_categories=[]),-1===(i=d.axis_x_categories.indexOf(n))&&(i=d.axis_x_categories.length,d.axis_x_categories.push(n))):i=c.generateTargetX(n,r,e),(v(t[r])||c.data.xs[r].length<=e)&&(i=void 0),{x:i,value:a,id:o}}).filter(function(t){return k(t.x)})}})).forEach(function(t){var e;d.data_xSort&&(t.values=t.values.sort(function(t,e){return(t.x||0===t.x?t.x:1/0)-(e.x||0===e.x?e.x:1/0)})),e=0,t.values.forEach(function(t){t.index=e++}),c.data.xs[t.id].sort(function(t,e){return t-e})}),c.hasNegativeValue=c.hasNegativeValueInTargets(e),c.hasPositiveValue=c.hasPositiveValueInTargets(e),d.data_type&&c.setTargetType(c.mapToIds(e).filter(function(t){return!(t in d.data_types)}),d.data_type),e.forEach(function(t){c.addCache(t.id_org,t)}),e},m.isX=function(t){var e=this.config;return e.data_x&&t===e.data_x||C(e.data_xs)&&f(e.data_xs,t)},m.isNotX=function(t){return!this.isX(t)},m.getXKey=function(t){var e=this.config;return e.data_x?e.data_x:C(e.data_xs)?e.data_xs[t]:null},m.getXValuesOfXKey=function(e,t){var i,n=this;return(t&&C(t)?n.mapToIds(t):[]).forEach(function(t){n.getXKey(t)===e&&(i=n.data.xs[t])}),i},m.getXValue=function(t,e){return t in this.data.xs&&this.data.xs[t]&&P(this.data.xs[t][e])?this.data.xs[t][e]:e},m.getOtherTargetXs=function(){var t=Object.keys(this.data.xs);return t.length?this.data.xs[t[0]]:null},m.getOtherTargetX=function(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},m.addXs=function(e){var i=this;Object.keys(e).forEach(function(t){i.config.data_xs[t]=e[t]})},m.addName=function(t){var e;return t&&(e=this.config.data_names[t.id],t.name=void 0!==e?e:t.id),t},m.getValueOnIndex=function(t,e){var i=t.filter(function(t){return t.index===e});return i.length?i[0]:null},m.updateTargetX=function(t,n){var a=this;t.forEach(function(i){i.values.forEach(function(t,e){t.x=a.generateTargetX(n[e],i.id,e)}),a.data.xs[i.id]=n})},m.updateTargetXs=function(t,e){var i=this;t.forEach(function(t){e[t.id]&&i.updateTargetX([t],e[t.id])})},m.generateTargetX=function(t,e,i){var n=this;return n.isTimeSeries()?t?n.parseDate(t):n.parseDate(n.getXValue(e,i)):n.isCustomX()&&!n.isCategorized()?P(t)?+t:n.getXValue(e,i):i},m.cloneTarget=function(t){return{id:t.id,id_org:t.id_org,values:t.values.map(function(t){return{x:t.x,value:t.value,id:t.id}})}},m.getMaxDataCount=function(){return this.d3.max(this.data.targets,function(t){return t.values.length})},m.mapToIds=function(t){return t.map(function(t){return t.id})},m.mapToTargetIds=function(t){return t?[].concat(t):this.mapToIds(this.data.targets)},m.hasTarget=function(t,e){var i,n=this.mapToIds(t);for(i=0;i<n.length;i++)if(n[i]===e)return!0;return!1},m.isTargetToShow=function(t){return this.hiddenTargetIds.indexOf(t)<0},m.isLegendToShow=function(t){return this.hiddenLegendIds.indexOf(t)<0},m.filterTargetsToShow=function(t){var e=this;return t.filter(function(t){return e.isTargetToShow(t.id)})},m.mapTargetsToUniqueXs=function(t){var e=this.d3.set(this.d3.merge(t.map(function(t){return t.values.map(function(t){return+t.x})}))).values();return(e=this.isTimeSeries()?e.map(function(t){return new Date(+t)}):e.map(function(t){return+t})).sort(function(t,e){return t<e?-1:e<t?1:e<=t?0:NaN})},m.addHiddenTargetIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenTargetIds.indexOf(t[e])<0&&(this.hiddenTargetIds=this.hiddenTargetIds.concat(t[e]))},m.removeHiddenTargetIds=function(e){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(t){return e.indexOf(t)<0})},m.addHiddenLegendIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenLegendIds.indexOf(t[e])<0&&(this.hiddenLegendIds=this.hiddenLegendIds.concat(t[e]))},m.removeHiddenLegendIds=function(e){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(t){return e.indexOf(t)<0})},m.getValuesAsIdKeyed=function(t){var i={};return t.forEach(function(e){i[e.id]=[],e.values.forEach(function(t){i[e.id].push(t.value)})}),i},m.checkValueInTargets=function(t,e){var i,n,a,r=Object.keys(t);for(i=0;i<r.length;i++)for(a=t[r[i]].values,n=0;n<a.length;n++)if(e(a[n].value))return!0;return!1},m.hasNegativeValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return t<0})},m.hasPositiveValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return 0<t})},m.isOrderDesc=function(){var t=this.config;return"string"==typeof t.data_order&&"desc"===t.data_order.toLowerCase()},m.isOrderAsc=function(){var t=this.config;return"string"==typeof t.data_order&&"asc"===t.data_order.toLowerCase()},m.getOrderFunction=function(){var t=this.config,a=this.isOrderAsc(),e=this.isOrderDesc();if(a||e){var r=function(t,e){return t+Math.abs(e.value)};return function(t,e){var i=t.values.reduce(r,0),n=e.values.reduce(r,0);return a?n-i:i-n}}if(h(t.data_order))return t.data_order;if(u(t.data_order)){var i=t.data_order;return function(t,e){return i.indexOf(t.id)-i.indexOf(e.id)}}},m.orderTargets=function(t){var e=this.getOrderFunction();return e&&t.sort(e),t},m.filterByX=function(t,e){return this.d3.merge(t.map(function(t){return t.values})).filter(function(t){return t.x-e==0})},m.filterRemoveNull=function(t){return t.filter(function(t){return P(t.value)})},m.filterByXDomain=function(t,e){return t.map(function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter(function(t){return e[0]<=t.x&&t.x<=e[1]})}})},m.hasDataLabel=function(){var t=this.config;return!("boolean"!=typeof t.data_labels||!t.data_labels)||!("object"!==o(t.data_labels)||!C(t.data_labels))},m.getDataLabelLength=function(t,e,i){var n=this,a=[0,0];return n.selectChart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text(function(t){return n.dataLabelFormat(t.id)(t)}).each(function(t,e){a[e]=1.3*this.getBoundingClientRect()[i]}).remove(),a},m.isNoneArc=function(t){return this.hasTarget(this.data.targets,t.id)},m.isArc=function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},m.findClosestFromTargets=function(t,e){var i,n=this;return i=t.map(function(t){return n.findClosest(t.values,e)}),n.findClosest(i,e)},m.findClosest=function(t,i){var n,a=this,r=a.config.point_sensitivity;return t.filter(function(t){return t&&a.isBarType(t.id)}).forEach(function(t){var e=a.main.select("."+Y.bars+a.getTargetSelectorSuffix(t.id)+" ."+Y.bar+"-"+t.index).node();!n&&a.isWithinBar(a.d3.mouse(e),e)&&(n=t)}),t.filter(function(t){return t&&!a.isBarType(t.id)}).forEach(function(t){var e=a.dist(t,i);e<r&&(r=e,n=t)}),n},m.dist=function(t,e){var i=this.config,n=i.axis_rotated?1:0,a=i.axis_rotated?0:1,r=this.circleY(t,t.index),s=this.x(t.x);return Math.sqrt(Math.pow(s-e[n],2)+Math.pow(r-e[a],2))},m.convertValuesToStep=function(t){var e,i=[].concat(t);if(!this.isCategorized())return t;for(e=t.length+1;0<e;e--)i[e]=i[e-1];return i[0]={x:i[0].x-1,value:i[0].value,id:i[0].id},i[t.length+1]={x:i[t.length].x+1,value:i[t.length].value,id:i[t.length].id},i},m.updateDataAttributes=function(t,e){var i=this.config["data_"+t];return void 0===e||(Object.keys(e).forEach(function(t){i[t]=e[t]}),this.redraw({withLegend:!0})),i},m.load=function(i,n){var a=this;i&&(n.filter&&(i=i.filter(n.filter)),(n.type||n.types)&&i.forEach(function(t){var e=n.types&&n.types[t.id]?n.types[t.id]:n.type;a.setTargetType(t.id,e)}),a.data.targets.forEach(function(t){for(var e=0;e<i.length;e++)if(t.id===i[e].id){t.values=i[e].values,i.splice(e,1);break}}),a.data.targets=a.data.targets.concat(i)),a.updateTargets(a.data.targets),a.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),n.done&&n.done()},m.loadFromArgs=function(e){var i=this;e.data?i.load(i.convertDataToTargets(e.data),e):e.url?i.convertUrlToData(e.url,e.mimeType,e.headers,e.keys,function(t){i.load(i.convertDataToTargets(t),e)}):e.json?i.load(i.convertDataToTargets(i.convertJsonToData(e.json,e.keys)),e):e.rows?i.load(i.convertDataToTargets(i.convertRowsToData(e.rows)),e):e.columns?i.load(i.convertDataToTargets(i.convertColumnsToData(e.columns)),e):i.load(null,e)},m.unload=function(t,e){var i=this;e||(e=function(){}),(t=t.filter(function(t){return i.hasTarget(i.data.targets,t)}))&&0!==t.length?(i.svg.selectAll(t.map(function(t){return i.selectorTarget(t)})).transition().style("opacity",0).remove().call(i.endall,e),t.forEach(function(e){i.withoutFadeIn[e]=!1,i.legend&&i.legend.selectAll("."+Y.legendItem+i.getTargetSelectorSuffix(e)).remove(),i.data.targets=i.data.targets.filter(function(t){return t.id!==e})})):e()},m.getYDomainMin=function(t){var e,i,n,a,r,s,o=this,c=o.config,d=o.mapToIds(t),u=o.getValuesAsIdKeyed(t);if(0<c.data_groups.length)for(s=o.hasNegativeValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(a=c.data_groups[e].filter(function(t){return 0<=d.indexOf(t)})).length)for(n=a[0],s&&u[n]&&u[n].forEach(function(t,e){u[n][e]=t<0?t:0}),i=1;i<a.length;i++)r=a[i],u[r]&&u[r].forEach(function(t,e){o.axis.getId(r)!==o.axis.getId(n)||!u[n]||s&&0<+t||(u[n][e]+=+t)});return o.d3.min(Object.keys(u).map(function(t){return o.d3.min(u[t])}))},m.getYDomainMax=function(t){var e,i,n,a,r,s,o=this,c=o.config,d=o.mapToIds(t),u=o.getValuesAsIdKeyed(t);if(0<c.data_groups.length)for(s=o.hasPositiveValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(a=c.data_groups[e].filter(function(t){return 0<=d.indexOf(t)})).length)for(n=a[0],s&&u[n]&&u[n].forEach(function(t,e){u[n][e]=0<t?t:0}),i=1;i<a.length;i++)r=a[i],u[r]&&u[r].forEach(function(t,e){o.axis.getId(r)!==o.axis.getId(n)||!u[n]||s&&+t<0||(u[n][e]+=+t)});return o.d3.max(Object.keys(u).map(function(t){return o.d3.max(u[t])}))},m.getYDomain=function(t,e,i){var n,a,r,s,o,c,d,u,l,h,g=this,f=g.config,p=t.filter(function(t){return g.axis.getId(t.id)===e}),_=i?g.filterByXDomain(p,i):p,x="y2"===e?f.axis_y2_min:f.axis_y_min,y="y2"===e?f.axis_y2_max:f.axis_y_max,m=g.getYDomainMin(_),S=g.getYDomainMax(_),w="y2"===e?f.axis_y2_center:f.axis_y_center,v=g.hasType("bar",_)&&f.bar_zerobased||g.hasType("area",_)&&f.area_zerobased,b="y2"===e?f.axis_y2_inverted:f.axis_y_inverted,A=g.hasDataLabel()&&f.axis_rotated,T=g.hasDataLabel()&&!f.axis_rotated;return m=P(x)?x:P(y)?m<y?m:y-10:m,S=P(y)?y:P(x)?x<S?S:x+10:S,0===_.length?"y2"===e?g.y2.domain():g.y.domain():(isNaN(m)&&(m=0),isNaN(S)&&(S=m),m===S&&(m<0?S=0:m=0),l=0<=m&&0<=S,h=m<=0&&S<=0,(P(x)&&l||P(y)&&h)&&(v=!1),v&&(l&&(m=0),h&&(S=0)),r=s=.1*(a=Math.abs(S-m)),void 0!==w&&(S=w+(o=Math.max(Math.abs(m),Math.abs(S))),m=w-o),A?(c=g.getDataLabelLength(m,S,"width"),d=D(g.y.range()),r+=a*((u=[c[0]/d,c[1]/d])[1]/(1-u[0]-u[1])),s+=a*(u[0]/(1-u[0]-u[1]))):T&&(c=g.getDataLabelLength(m,S,"height"),r+=g.axis.convertPixelsToAxisPadding(c[1],a),s+=g.axis.convertPixelsToAxisPadding(c[0],a)),"y"===e&&C(f.axis_y_padding)&&(r=g.axis.getPadding(f.axis_y_padding,"top",r,a),s=g.axis.getPadding(f.axis_y_padding,"bottom",s,a)),"y2"===e&&C(f.axis_y2_padding)&&(r=g.axis.getPadding(f.axis_y2_padding,"top",r,a),s=g.axis.getPadding(f.axis_y2_padding,"bottom",s,a)),v&&(l&&(s=m),h&&(r=-S)),n=[m-s,S+r],b?n.reverse():n)},m.getXDomainMin=function(t){var e=this,i=e.config;return k(i.axis_x_min)?e.isTimeSeries()?this.parseDate(i.axis_x_min):i.axis_x_min:e.d3.min(t,function(t){return e.d3.min(t.values,function(t){return t.x})})},m.getXDomainMax=function(t){var e=this,i=e.config;return k(i.axis_x_max)?e.isTimeSeries()?this.parseDate(i.axis_x_max):i.axis_x_max:e.d3.max(t,function(t){return e.d3.max(t.values,function(t){return t.x})})},m.getXDomainPadding=function(t){var e,i,n,a,r=this.config,s=t[1]-t[0];return i=this.isCategorized()?0:this.hasType("bar")?1<(e=this.getMaxDataCount())?s/(e-1)/2:.5:.01*s,"object"===o(r.axis_x_padding)&&C(r.axis_x_padding)?(n=P(r.axis_x_padding.left)?r.axis_x_padding.left:i,a=P(r.axis_x_padding.right)?r.axis_x_padding.right:i):n=a="number"==typeof r.axis_x_padding?r.axis_x_padding:i,{left:n,right:a}},m.getXDomain=function(t){var e=this,i=[e.getXDomainMin(t),e.getXDomainMax(t)],n=i[0],a=i[1],r=e.getXDomainPadding(i),s=0,o=0;return n-a!=0||e.isCategorized()||(e.isTimeSeries()?(n=new Date(.5*n.getTime()),a=new Date(1.5*a.getTime())):(n=0===n?1:.5*n,a=0===a?-1:1.5*a)),(n||0===n)&&(s=e.isTimeSeries()?new Date(n.getTime()-r.left):n-r.left),(a||0===a)&&(o=e.isTimeSeries()?new Date(a.getTime()+r.right):a+r.right),[s,o]},m.updateXDomain=function(t,e,i,n,a){var r=this,s=r.config;return i&&(r.x.domain(a||r.d3.extent(r.getXDomain(t))),r.orgXDomain=r.x.domain(),s.zoom_enabled&&r.zoom.update(),r.subX.domain(r.x.domain()),r.brush&&r.brush.updateScale(r.subX)),e&&r.x.domain(a||(!r.brush||r.brush.empty()?r.orgXDomain:r.brush.selectionAsValue())),n&&r.x.domain(r.trimXDomain(r.x.orgDomain())),r.x.domain()},m.trimXDomain=function(t){var e=this.getZoomDomain(),i=e[0],n=e[1];return t[0]<=i&&(t[1]=+t[1]+(i-t[0]),t[0]=i),n<=t[1]&&(t[0]=+t[0]-(t[1]-n),t[1]=n),t},m.drag=function(t){var e,i,n,a,h,g,f,p,_=this,r=_.config,s=_.main,x=_.d3;_.hasArcType()||r.data_selection_enabled&&r.data_selection_multiple&&(e=_.dragStart[0],i=_.dragStart[1],n=t[0],a=t[1],h=Math.min(e,n),g=Math.max(e,n),f=r.data_selection_grouped?_.margin.top:Math.min(i,a),p=r.data_selection_grouped?_.height:Math.max(i,a),s.select("."+Y.dragarea).attr("x",h).attr("y",f).attr("width",g-h).attr("height",p-f),s.selectAll("."+Y.shapes).selectAll("."+Y.shape).filter(function(t){return r.data_selection_isselectable(t)}).each(function(t,e){var i,n,a,r,s,o,c=x.select(this),d=c.classed(Y.SELECTED),u=c.classed(Y.INCLUDED),l=!1;if(c.classed(Y.circle))i=1*c.attr("cx"),n=1*c.attr("cy"),s=_.togglePoint,l=h<i&&i<g&&f<n&&n<p;else{if(!c.classed(Y.bar))return;i=(o=y(this)).x,n=o.y,a=o.width,r=o.height,s=_.togglePath,l=!(g<i||i+a<h||p<n||n+r<f)}l^u&&(c.classed(Y.INCLUDED,!u),c.classed(Y.SELECTED,!d),s.call(_,!d,c,t,e))}))},m.dragstart=function(t){var e=this,i=e.config;e.hasArcType()||i.data_selection_enabled&&(e.dragStart=t,e.main.select("."+Y.chart).append("rect").attr("class",Y.dragarea).style("opacity",.1),e.dragging=!0)},m.dragend=function(){var t=this,e=t.config;t.hasArcType()||e.data_selection_enabled&&(t.main.select("."+Y.dragarea).transition().duration(100).style("opacity",0).remove(),t.main.selectAll("."+Y.shape).classed(Y.INCLUDED,!1),t.dragging=!1)},m.getYFormat=function(t){var n=this,a=t&&!n.hasType("gauge")?n.defaultArcValueFormat:n.yFormat,r=t&&!n.hasType("gauge")?n.defaultArcValueFormat:n.y2Format;return function(t,e,i){return("y2"===n.axis.getId(i)?r:a).call(n,t,e)}},m.yFormat=function(t){var e=this.config;return(e.axis_y_tick_format?e.axis_y_tick_format:this.defaultValueFormat)(t)},m.y2Format=function(t){var e=this.config;return(e.axis_y2_tick_format?e.axis_y2_tick_format:this.defaultValueFormat)(t)},m.defaultValueFormat=function(t){return P(t)?+t:""},m.defaultArcValueFormat=function(t,e){return(100*e).toFixed(1)+"%"},m.dataLabelFormat=function(t){var e=this.config.data_labels,i=function(t){return P(t)?+t:""};return"function"==typeof e.format?e.format:"object"===o(e.format)?e.format[t]?!0===e.format[t]?i:e.format[t]:function(){return""}:i},m.initGrid=function(){var t=this,e=t.config,i=t.d3;t.grid=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",Y.grid),e.grid_x_show&&t.grid.append("g").attr("class",Y.xgrids),e.grid_y_show&&t.grid.append("g").attr("class",Y.ygrids),e.grid_focus_show&&t.grid.append("g").attr("class",Y.xgridFocus).append("line").attr("class",Y.xgridFocus),t.xgrid=i.selectAll([]),e.grid_lines_front||t.initGridLines()},m.initGridLines=function(){var t=this,e=t.d3;t.gridLines=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",Y.grid+" "+Y.gridLines),t.gridLines.append("g").attr("class",Y.xgridLines),t.gridLines.append("g").attr("class",Y.ygridLines),t.xgridLines=e.selectAll([])},m.updateXGrid=function(t){var e=this,i=e.config,n=e.d3,a=e.generateGridData(i.grid_x_type,e.x),r=e.isCategorized()?e.xAxis.tickOffset():0;e.xgridAttr=i.axis_rotated?{x1:0,x2:e.width,y1:function(t){return e.x(t)-r},y2:function(t){return e.x(t)-r}}:{x1:function(t){return e.x(t)+r},x2:function(t){return e.x(t)+r},y1:0,y2:e.height},e.xgridAttr.opacity=function(){return+n.select(this).attr(i.axis_rotated?"y1":"x1")===(i.axis_rotated?e.height:0)?0:1};var s=e.main.select("."+Y.xgrids).selectAll("."+Y.xgrid).data(a),o=s.enter().append("line").attr("class",Y.xgrid).attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",0);e.xgrid=o.merge(s),t||e.xgrid.attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",e.xgridAttr.opacity),s.exit().remove()},m.updateYGrid=function(){var t=this,e=t.config,i=t.yAxis.tickValues()||t.y.ticks(e.grid_y_ticks),n=t.main.select("."+Y.ygrids).selectAll("."+Y.ygrid).data(i),a=n.enter().append("line").attr("class",Y.ygrid);t.ygrid=a.merge(n),t.ygrid.attr("x1",e.axis_rotated?t.y:0).attr("x2",e.axis_rotated?t.y:t.width).attr("y1",e.axis_rotated?0:t.y).attr("y2",e.axis_rotated?t.height:t.y),n.exit().remove(),t.smoothLines(t.ygrid,"grid")},m.gridTextAnchor=function(t){return t.position?t.position:"end"},m.gridTextDx=function(t){return"start"===t.position?4:"middle"===t.position?0:-4},m.xGridTextX=function(t){return"start"===t.position?-this.height:"middle"===t.position?-this.height/2:0},m.yGridTextX=function(t){return"start"===t.position?0:"middle"===t.position?this.width/2:this.width},m.updateGrid=function(t){var e,i,n,a,r=this,s=r.main,o=r.config,c=r.xv.bind(r),d=r.yv.bind(r),u=r.xGridTextX.bind(r),l=r.yGridTextX.bind(r);r.grid.style("visibility",r.hasArcType()?"hidden":"visible"),s.select("line."+Y.xgridFocus).style("visibility","hidden"),o.grid_x_show&&r.updateXGrid(),(i=(e=s.select("."+Y.xgridLines).selectAll("."+Y.xgridLine).data(o.grid_x_lines)).enter().append("g").attr("class",function(t){return Y.xgridLine+(t.class?" "+t.class:"")})).append("line").attr("x1",o.axis_rotated?0:c).attr("x2",o.axis_rotated?r.width:c).attr("y1",o.axis_rotated?c:0).attr("y2",o.axis_rotated?c:r.height).style("opacity",0),i.append("text").attr("text-anchor",r.gridTextAnchor).attr("transform",o.axis_rotated?"":"rotate(-90)").attr("x",o.axis_rotated?l:u).attr("y",c).attr("dx",r.gridTextDx).attr("dy",-5).style("opacity",0),r.xgridLines=i.merge(e),e.exit().transition().duration(t).style("opacity",0).remove(),o.grid_y_show&&r.updateYGrid(),(a=(n=s.select("."+Y.ygridLines).selectAll("."+Y.ygridLine).data(o.grid_y_lines)).enter().append("g").attr("class",function(t){return Y.ygridLine+(t.class?" "+t.class:"")})).append("line").attr("x1",o.axis_rotated?d:0).attr("x2",o.axis_rotated?d:r.width).attr("y1",o.axis_rotated?0:d).attr("y2",o.axis_rotated?r.height:d).style("opacity",0),a.append("text").attr("text-anchor",r.gridTextAnchor).attr("transform",o.axis_rotated?"rotate(-90)":"").attr("x",o.axis_rotated?u:l).attr("y",d).attr("dx",r.gridTextDx).attr("dy",-5).style("opacity",0),r.ygridLines=a.merge(n),r.ygridLines.select("line").transition().duration(t).attr("x1",o.axis_rotated?d:0).attr("x2",o.axis_rotated?d:r.width).attr("y1",o.axis_rotated?0:d).attr("y2",o.axis_rotated?r.height:d).style("opacity",1),r.ygridLines.select("text").transition().duration(t).attr("x",o.axis_rotated?r.xGridTextX.bind(r):r.yGridTextX.bind(r)).attr("y",d).text(function(t){return t.text}).style("opacity",1),n.exit().transition().duration(t).style("opacity",0).remove()},m.redrawGrid=function(t,e){var i=this,n=i.config,a=i.xv.bind(i),r=i.xgridLines.select("line"),s=i.xgridLines.select("text");return[(t?r.transition(e):r).attr("x1",n.axis_rotated?0:a).attr("x2",n.axis_rotated?i.width:a).attr("y1",n.axis_rotated?a:0).attr("y2",n.axis_rotated?a:i.height).style("opacity",1),(t?s.transition(e):s).attr("x",n.axis_rotated?i.yGridTextX.bind(i):i.xGridTextX.bind(i)).attr("y",a).text(function(t){return t.text}).style("opacity",1)]},m.showXGridFocus=function(t){var e=this,i=e.config,n=t.filter(function(t){return t&&P(t.value)}),a=e.main.selectAll("line."+Y.xgridFocus),r=e.xx.bind(e);i.tooltip_show&&(e.hasType("scatter")||e.hasArcType()||(a.style("visibility","visible").data([n[0]]).attr(i.axis_rotated?"y1":"x1",r).attr(i.axis_rotated?"y2":"x2",r),e.smoothLines(a,"grid")))},m.hideXGridFocus=function(){this.main.select("line."+Y.xgridFocus).style("visibility","hidden")},m.updateXgridFocus=function(){var t=this.config;this.main.select("line."+Y.xgridFocus).attr("x1",t.axis_rotated?0:-10).attr("x2",t.axis_rotated?this.width:-10).attr("y1",t.axis_rotated?-10:0).attr("y2",t.axis_rotated?-10:this.height)},m.generateGridData=function(t,e){var i,n,a,r,s=[],o=this.main.select("."+Y.axisX).selectAll(".tick").size();if("year"===t)for(n=(i=this.getXDomain())[0].getFullYear(),a=i[1].getFullYear(),r=n;r<=a;r++)s.push(new Date(r+"-01-01 00:00:00"));else(s=e.ticks(10)).length>o&&(s=s.filter(function(t){return(""+t).indexOf(".")<0}));return s},m.getGridFilterToRemove=function(t){return t?function(e){var i=!1;return[].concat(t).forEach(function(t){("value"in t&&e.value===t.value||"class"in t&&e.class===t.class)&&(i=!0)}),i}:function(){return!0}},m.removeGridLines=function(t,e){var i=this.config,n=this.getGridFilterToRemove(t),a=function(t){return!n(t)},r=e?Y.xgridLines:Y.ygridLines,s=e?Y.xgridLine:Y.ygridLine;this.main.select("."+r).selectAll("."+s).filter(n).transition().duration(i.transition_duration).style("opacity",0).remove(),e?i.grid_x_lines=i.grid_x_lines.filter(a):i.grid_y_lines=i.grid_y_lines.filter(a)},m.initEventRect=function(){var t=this,e=t.config;t.main.select("."+Y.chart).append("g").attr("class",Y.eventRects).style("fill-opacity",0),t.eventRect=t.main.select("."+Y.eventRects).append("rect").attr("class",Y.eventRect),e.zoom_enabled&&t.zoom&&(t.eventRect.call(t.zoom).on("dblclick.zoom",null),e.zoom_initialRange&&t.eventRect.transition().duration(0).call(t.zoom.transform,t.zoomTransform(e.zoom_initialRange)))},m.redrawEventRect=function(){var t,e,a=this,r=a.d3,s=a.config;function o(){a.svg.select("."+Y.eventRect).style("cursor",null),a.hideXGridFocus(),a.hideTooltip(),a.unexpandCircles(),a.unexpandBars()}t=a.width,e=a.height,a.main.select("."+Y.eventRects).style("cursor",s.zoom_enabled?s.axis_rotated?"ns-resize":"ew-resize":null),a.eventRect.attr("x",0).attr("y",0).attr("width",t).attr("height",e).on("mouseout",s.interaction_enabled?function(){s&&(a.hasArcType()||o())}:null).on("mousemove",s.interaction_enabled?function(){var t,e,i,n;a.dragging||a.hasArcType(t)||(t=a.filterTargetsToShow(a.data.targets),e=r.mouse(this),i=a.findClosestFromTargets(t,e),!a.mouseover||i&&i.id===a.mouseover.id||(s.data_onmouseout.call(a.api,a.mouseover),a.mouseover=void 0),i?(n=(a.isScatterType(i)||!s.tooltip_grouped?[i]:a.filterByX(t,i.x)).map(function(t){return a.addName(t)}),a.showTooltip(n,this),s.point_focus_expand_enabled&&(a.unexpandCircles(),n.forEach(function(t){a.expandCircles(t.index,t.id,!1)})),a.expandBars(i.index,i.id,!0),a.showXGridFocus(n),(a.isBarType(i.id)||a.dist(i,e)<s.point_sensitivity)&&(a.svg.select("."+Y.eventRect).style("cursor","pointer"),a.mouseover||(s.data_onmouseover.call(a.api,i),a.mouseover=i))):o())}:null).on("click",s.interaction_enabled?function(){var t,e,i;a.hasArcType(t)||(t=a.filterTargetsToShow(a.data.targets),e=r.mouse(this),(i=a.findClosestFromTargets(t,e))&&(a.isBarType(i.id)||a.dist(i,e)<s.point_sensitivity)&&(a.isScatterType(i)||!s.data_selection_grouped?[i]:a.filterByX(t,i.x)).forEach(function(t){a.main.selectAll("."+Y.shapes+a.getTargetSelectorSuffix(t.id)).selectAll("."+Y.shape+"-"+t.index).each(function(){(s.data_selection_grouped||a.isWithinShape(this,t))&&(a.toggleShape(this,t,t.index),s.data_onclick.call(a.api,t,this))})}))}:null).call(s.interaction_enabled&&s.data_selection_draggable&&a.drag?r.drag().on("drag",function(){a.drag(r.mouse(this))}).on("start",function(){a.dragstart(r.mouse(this))}).on("end",function(){a.dragend()}):function(){})},m.getMousePosition=function(t){return[this.x(t.x),this.getYScale(t.id)(t.value)]},m.dispatchEvent=function(t,e){var i="."+Y.eventRect,n=this.main.select(i).node(),a=n.getBoundingClientRect(),r=a.left+(e?e[0]:0),s=a.top+(e?e[1]:0),o=document.createEvent("MouseEvents");o.initMouseEvent(t,!0,!0,window,0,r,s,r,s,!1,!1,!1,!1,0,null),n.dispatchEvent(o)},m.initLegend=function(){var t=this;if(t.legendItemTextBox={},t.legendHasRendered=!1,t.legend=t.svg.append("g").attr("transform",t.getTranslate("legend")),!t.config.legend_show)return t.legend.style("visibility","hidden"),void(t.hiddenLegendIds=t.mapToIds(t.data.targets));t.updateLegendWithDefaults()},m.updateLegendWithDefaults=function(){this.updateLegend(this.mapToIds(this.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},m.updateSizeForLegend=function(t,e){var i=this,n=i.config,a={top:i.isLegendTop?i.getCurrentPaddingTop()+n.legend_inset_y+5.5:i.currentHeight-t-i.getCurrentPaddingBottom()-n.legend_inset_y,left:i.isLegendLeft?i.getCurrentPaddingLeft()+n.legend_inset_x+.5:i.currentWidth-e-i.getCurrentPaddingRight()-n.legend_inset_x+.5};i.margin3={top:i.isLegendRight?0:i.isLegendInset?a.top:i.currentHeight-t,right:NaN,bottom:0,left:i.isLegendRight?i.currentWidth-e:i.isLegendInset?a.left:0}},m.transformLegend=function(t){(t?this.legend.transition():this.legend).attr("transform",this.getTranslate("legend"))},m.updateLegendStep=function(t){this.legendStep=t},m.updateLegendItemWidth=function(t){this.legendItemWidth=t},m.updateLegendItemHeight=function(t){this.legendItemHeight=t},m.getLegendWidth=function(){var t=this;return t.config.legend_show?t.isLegendRight||t.isLegendInset?t.legendItemWidth*(t.legendStep+1):t.currentWidth:0},m.getLegendHeight=function(){var t=this,e=0;return t.config.legend_show&&(e=t.isLegendRight?t.currentHeight:Math.max(20,t.legendItemHeight)*(t.legendStep+1)),e},m.opacityForLegend=function(t){return t.classed(Y.legendItemHidden)?null:1},m.opacityForUnfocusedLegend=function(t){return t.classed(Y.legendItemHidden)?null:.3},m.toggleFocusLegend=function(e,t){var i=this;e=i.mapToTargetIds(e),i.legend.selectAll("."+Y.legendItem).filter(function(t){return 0<=e.indexOf(t)}).classed(Y.legendItemFocused,t).transition().duration(100).style("opacity",function(){return(t?i.opacityForLegend:i.opacityForUnfocusedLegend).call(i,i.d3.select(this))})},m.revertLegend=function(){var t=this,e=t.d3;t.legend.selectAll("."+Y.legendItem).classed(Y.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return t.opacityForLegend(e.select(this))})},m.showLegend=function(t){var e=this,i=e.config;i.legend_show||(i.legend_show=!0,e.legend.style("visibility","visible"),e.legendHasRendered||e.updateLegendWithDefaults()),e.removeHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("visibility","visible").transition().style("opacity",function(){return e.opacityForLegend(e.d3.select(this))})},m.hideLegend=function(t){var e=this,i=e.config;i.legend_show&&g(t)&&(i.legend_show=!1,e.legend.style("visibility","hidden")),e.addHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("opacity",0).style("visibility","hidden")},m.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},m.updateLegend=function(p,t,e){var i,n,a,r,s,o,c,d,u,l,h,g,f,_,x,y,m=this,S=m.config,w=4,v=10,b=0,A=0,T=10,P=S.legend_item_tile_width+5,C=0,L={},V={},G={},E=[0],O={},I=0;function R(t,e,i){var n,a,r,s,o=0===i,c=i===p.length-1,d=(r=t,s=e,m.legendItemTextBox[s]||(m.legendItemTextBox[s]=m.getTextRect(r.textContent,Y.legendItem,r)),m.legendItemTextBox[s]),u=d.width+P+(!c||m.isLegendRight||m.isLegendInset?v:0)+S.legend_padding,l=d.height+w,h=m.isLegendRight||m.isLegendInset?l:u,g=m.isLegendRight||m.isLegendInset?m.getLegendHeight():m.getLegendWidth();function f(t,e){e||(n=(g-C-h)/2)<T&&(n=(g-h)/2,C=0,I++),O[t]=I,E[I]=m.isLegendInset?10:n,L[t]=C,C+=h}o&&(A=b=I=C=0),!S.legend_show||m.isLegendToShow(e)?(V[e]=u,G[e]=l,(!b||b<=u)&&(b=u),(!A||A<=l)&&(A=l),a=m.isLegendRight||m.isLegendInset?A:b,S.legend_equally?(Object.keys(V).forEach(function(t){V[t]=b}),Object.keys(G).forEach(function(t){G[t]=A}),(n=(g-a*p.length)/2)<T?(I=C=0,p.forEach(function(t){f(t)})):f(e,!0)):f(e)):V[e]=G[e]=O[e]=L[e]=0}p=p.filter(function(t){return!k(S.data_names[t])||null!==S.data_names[t]}),h=N(t=t||{},"withTransition",!0),g=N(t,"withTransitionForTransform",!0),m.isLegendInset&&(I=S.legend_inset_step?S.legend_inset_step:p.length,m.updateLegendStep(I)),m.isLegendRight?(i=function(t){return b*O[t]},r=function(t){return E[O[t]]+L[t]}):m.isLegendInset?(i=function(t){return b*O[t]+10},r=function(t){return E[O[t]]+L[t]}):(i=function(t){return E[O[t]]+L[t]},r=function(t){return A*O[t]}),n=function(t,e){return i(t,e)+4+S.legend_item_tile_width},s=function(t,e){return r(t,e)+9},a=function(t,e){return i(t,e)},o=function(t,e){return r(t,e)-5},c=function(t,e){return i(t,e)-2},d=function(t,e){return i(t,e)-2+S.legend_item_tile_width},u=function(t,e){return r(t,e)+4},(l=m.legend.selectAll("."+Y.legendItem).data(p).enter().append("g").attr("class",function(t){return m.generateClass(Y.legendItem,t)}).style("visibility",function(t){return m.isLegendToShow(t)?"visible":"hidden"}).style("cursor","pointer").on("click",function(t){S.legend_item_onclick?S.legend_item_onclick.call(m,t):m.d3.event.altKey?(m.api.hide(),m.api.show(t)):(m.api.toggle(t),m.isTargetToShow(t)?m.api.focus(t):m.api.revert())}).on("mouseover",function(t){S.legend_item_onmouseover?S.legend_item_onmouseover.call(m,t):(m.d3.select(this).classed(Y.legendItemFocused,!0),!m.transiting&&m.isTargetToShow(t)&&m.api.focus(t))}).on("mouseout",function(t){S.legend_item_onmouseout?S.legend_item_onmouseout.call(m,t):(m.d3.select(this).classed(Y.legendItemFocused,!1),m.api.revert())})).append("text").text(function(t){return k(S.data_names[t])?S.data_names[t]:t}).each(function(t,e){R(this,t,e)}).style("pointer-events","none").attr("x",m.isLegendRight||m.isLegendInset?n:-200).attr("y",m.isLegendRight||m.isLegendInset?-200:s),l.append("rect").attr("class",Y.legendItemEvent).style("fill-opacity",0).attr("x",m.isLegendRight||m.isLegendInset?a:-200).attr("y",m.isLegendRight||m.isLegendInset?-200:o),l.append("line").attr("class",Y.legendItemTile).style("stroke",m.color).style("pointer-events","none").attr("x1",m.isLegendRight||m.isLegendInset?c:-200).attr("y1",m.isLegendRight||m.isLegendInset?-200:u).attr("x2",m.isLegendRight||m.isLegendInset?d:-200).attr("y2",m.isLegendRight||m.isLegendInset?-200:u).attr("stroke-width",S.legend_item_tile_height),y=m.legend.select("."+Y.legendBackground+" rect"),m.isLegendInset&&0<b&&0===y.size()&&(y=m.legend.insert("g","."+Y.legendItem).attr("class",Y.legendBackground).append("rect")),f=m.legend.selectAll("text").data(p).text(function(t){return k(S.data_names[t])?S.data_names[t]:t}).each(function(t,e){R(this,t,e)}),(h?f.transition():f).attr("x",n).attr("y",s),_=m.legend.selectAll("rect."+Y.legendItemEvent).data(p),(h?_.transition():_).attr("width",function(t){return V[t]}).attr("height",function(t){return G[t]}).attr("x",a).attr("y",o),x=m.legend.selectAll("line."+Y.legendItemTile).data(p),(h?x.transition():x).style("stroke",m.levelColor?function(t){return m.levelColor(m.cache[t].values[0].value)}:m.color).attr("x1",c).attr("y1",u).attr("x2",d).attr("y2",u),y&&(h?y.transition():y).attr("height",m.getLegendHeight()-12).attr("width",b*(I+1)+10),m.legend.selectAll("."+Y.legendItem).classed(Y.legendItemHidden,function(t){return!m.isTargetToShow(t)}),m.updateLegendItemWidth(b),m.updateLegendItemHeight(A),m.updateLegendStep(I),m.updateSizes(),m.updateScales(),m.updateSvgSize(),m.transformAll(g,e),m.legendHasRendered=!0},m.initRegion=function(){this.region=this.main.append("g").attr("clip-path",this.clipPath).attr("class",Y.regions)},m.updateRegion=function(t){var e=this,i=e.config;e.region.style("visibility",e.hasArcType()?"hidden":"visible");var n=e.main.select("."+Y.regions).selectAll("."+Y.region).data(i.regions),a=n.enter().append("rect").attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)).style("fill-opacity",0);e.mainRegion=a.merge(n).attr("class",e.classRegion.bind(e)),n.exit().transition().duration(t).style("opacity",0).remove()},m.redrawRegion=function(t,e){var i=this,n=i.mainRegion;return[(t?n.transition(e):n).attr("x",i.regionX.bind(i)).attr("y",i.regionY.bind(i)).attr("width",i.regionWidth.bind(i)).attr("height",i.regionHeight.bind(i)).style("fill-opacity",function(t){return P(t.opacity)?t.opacity:.1})]},m.regionX=function(t){var e=this,i=e.config,n="y"===t.axis?e.y:e.y2;return"y"===t.axis||"y2"===t.axis?i.axis_rotated&&"start"in t?n(t.start):0:i.axis_rotated?0:"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0},m.regionY=function(t){var e=this,i=e.config,n="y"===t.axis?e.y:e.y2;return"y"===t.axis||"y2"===t.axis?i.axis_rotated?0:"end"in t?n(t.end):0:i.axis_rotated&&"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0},m.regionWidth=function(t){var e,i=this,n=i.config,a=i.regionX(t),r="y"===t.axis?i.y:i.y2;return(e="y"===t.axis||"y2"===t.axis?n.axis_rotated&&"end"in t?r(t.end):i.width:n.axis_rotated?i.width:"end"in t?i.x(i.isTimeSeries()?i.parseDate(t.end):t.end):i.width)<a?0:e-a},m.regionHeight=function(t){var e,i=this,n=i.config,a=this.regionY(t),r="y"===t.axis?i.y:i.y2;return(e="y"===t.axis||"y2"===t.axis?n.axis_rotated?i.height:"start"in t?r(t.start):i.height:n.axis_rotated&&"end"in t?i.x(i.isTimeSeries()?i.parseDate(t.end):t.end):i.height)<a?0:e-a},m.isRegionOnX=function(t){return!t.axis||"x"===t.axis},m.getScale=function(t,e,i){return(i?this.d3.scaleTime():this.d3.scaleLinear()).range([t,e])},m.getX=function(t,e,i,n){var a,r=this.getScale(t,e,this.isTimeSeries()),s=i?r.domain(i):r;for(a in this.isCategorized()?(n=n||function(){return 0},r=function(t,e){var i=s(t)+n(t);return e?i:Math.ceil(i)}):r=function(t,e){var i=s(t);return e?i:Math.ceil(i)},s)r[a]=s[a];return r.orgDomain=function(){return s.domain()},this.isCategorized()&&(r.domain=function(t){return arguments.length?(s.domain(t),r):[(t=this.orgDomain())[0],t[1]+1]}),r},m.getY=function(t,e,i){var n=this.getScale(t,e,this.isTimeSeriesY());return i&&n.domain(i),n},m.getYScale=function(t){return"y2"===this.axis.getId(t)?this.y2:this.y},m.getSubYScale=function(t){return"y2"===this.axis.getId(t)?this.subY2:this.subY},m.updateScales=function(){var e=this,t=e.config,i=!e.x;e.xMin=t.axis_rotated?1:0,e.xMax=t.axis_rotated?e.height:e.width,e.yMin=t.axis_rotated?0:e.height,e.yMax=t.axis_rotated?e.width:1,e.subXMin=e.xMin,e.subXMax=e.xMax,e.subYMin=t.axis_rotated?0:e.height2,e.subYMax=t.axis_rotated?e.width2:1,e.x=e.getX(e.xMin,e.xMax,i?void 0:e.x.orgDomain(),function(){return e.xAxis.tickOffset()}),e.y=e.getY(e.yMin,e.yMax,i?t.axis_y_default:e.y.domain()),e.y2=e.getY(e.yMin,e.yMax,i?t.axis_y2_default:e.y2.domain()),e.subX=e.getX(e.xMin,e.xMax,e.orgXDomain,function(t){return t%1?0:e.subXAxis.tickOffset()}),e.subY=e.getY(e.subYMin,e.subYMax,i?t.axis_y_default:e.subY.domain()),e.subY2=e.getY(e.subYMin,e.subYMax,i?t.axis_y2_default:e.subY2.domain()),e.xAxisTickFormat=e.axis.getXAxisTickFormat(),e.xAxisTickValues=e.axis.getXAxisTickValues(),e.yAxisTickValues=e.axis.getYAxisTickValues(),e.y2AxisTickValues=e.axis.getY2AxisTickValues(),e.xAxis=e.axis.getXAxis(e.x,e.xOrient,e.xAxisTickFormat,e.xAxisTickValues,t.axis_x_tick_outer),e.subXAxis=e.axis.getXAxis(e.subX,e.subXOrient,e.xAxisTickFormat,e.xAxisTickValues,t.axis_x_tick_outer),e.yAxis=e.axis.getYAxis(e.y,e.yOrient,t.axis_y_tick_format,e.yAxisTickValues,t.axis_y_tick_outer),e.y2Axis=e.axis.getYAxis(e.y2,e.y2Orient,t.axis_y2_tick_format,e.y2AxisTickValues,t.axis_y2_tick_outer),i||e.brush&&e.brush.updateScale(e.subX),e.updateArc&&e.updateArc()},m.selectPoint=function(t,e,i){var n=this,a=n.config,r=(a.axis_rotated?n.circleY:n.circleX).bind(n),s=(a.axis_rotated?n.circleX:n.circleY).bind(n),o=n.pointSelectR.bind(n);a.data_onselected.call(n.api,e,t.node()),n.main.select("."+Y.selectedCircles+n.getTargetSelectorSuffix(e.id)).selectAll("."+Y.selectedCircle+"-"+i).data([e]).enter().append("circle").attr("class",function(){return n.generateClass(Y.selectedCircle,i)}).attr("cx",r).attr("cy",s).attr("stroke",function(){return n.color(e)}).attr("r",function(t){return 1.4*n.pointSelectR(t)}).transition().duration(100).attr("r",o)},m.unselectPoint=function(t,e,i){this.config.data_onunselected.call(this.api,e,t.node()),this.main.select("."+Y.selectedCircles+this.getTargetSelectorSuffix(e.id)).selectAll("."+Y.selectedCircle+"-"+i).transition().duration(100).attr("r",0).remove()},m.togglePoint=function(t,e,i,n){t?this.selectPoint(e,i,n):this.unselectPoint(e,i,n)},m.selectPath=function(t,e){var i=this;i.config.data_onselected.call(i,e,t.node()),i.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return i.d3.rgb(i.color(e)).brighter(.75)})},m.unselectPath=function(t,e){var i=this;i.config.data_onunselected.call(i,e,t.node()),i.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return i.color(e)})},m.togglePath=function(t,e,i,n){t?this.selectPath(e,i,n):this.unselectPath(e,i,n)},m.getToggle=function(t,e){var i;return"circle"===t.nodeName?i=this.isStepType(e)?function(){}:this.togglePoint:"path"===t.nodeName&&(i=this.togglePath),i},m.toggleShape=function(t,e,i){var n=this,a=n.d3,r=n.config,s=a.select(t),o=s.classed(Y.SELECTED),c=n.getToggle(t,e).bind(n);r.data_selection_enabled&&r.data_selection_isselectable(e)&&(r.data_selection_multiple||n.main.selectAll("."+Y.shapes+(r.data_selection_grouped?n.getTargetSelectorSuffix(e.id):"")).selectAll("."+Y.shape).each(function(t,e){var i=a.select(this);i.classed(Y.SELECTED)&&c(!1,i.classed(Y.SELECTED,!1),t,e)}),s.classed(Y.SELECTED,!o),c(!o,s,e,i))},m.initBar=function(){this.main.select("."+Y.chart).append("g").attr("class",Y.chartBars)},m.updateTargetsForBar=function(t){var e=this,i=e.config,n=e.classChartBar.bind(e),a=e.classBars.bind(e),r=e.classFocus.bind(e);e.main.select("."+Y.chartBars).selectAll("."+Y.chartBar).data(t).attr("class",function(t){return n(t)+r(t)}).enter().append("g").attr("class",n).style("pointer-events","none").append("g").attr("class",a).style("cursor",function(t){return i.data_selection_isselectable(t)?"pointer":null})},m.updateBar=function(t){var e=this,i=e.barData.bind(e),n=e.classBar.bind(e),a=e.initialOpacity.bind(e),r=function(t){return e.color(t.id)},s=e.main.selectAll("."+Y.bars).selectAll("."+Y.bar).data(i),o=s.enter().append("path").attr("class",n).style("stroke",r).style("fill",r);e.mainBar=o.merge(s).style("opacity",a),s.exit().transition().duration(t).style("opacity",0)},m.redrawBar=function(t,e,i){return[(e?this.mainBar.transition(i):this.mainBar).attr("d",t).style("stroke",this.color).style("fill",this.color).style("opacity",1)]},m.getBarW=function(t,e){var i=this.config,n="number"==typeof i.bar_width?i.bar_width:e?t.tickInterval()*i.bar_width_ratio/e:0;return i.bar_width_max&&n>i.bar_width_max?i.bar_width_max:n},m.getBars=function(t,e){return(e?this.main.selectAll("."+Y.bars+this.getTargetSelectorSuffix(e)):this.main).selectAll("."+Y.bar+(P(t)?"-"+t:""))},m.expandBars=function(t,e,i){i&&this.unexpandBars(),this.getBars(t,e).classed(Y.EXPANDED,!0)},m.unexpandBars=function(t){this.getBars(t).classed(Y.EXPANDED,!1)},m.generateDrawBar=function(t,e){var r=this.config,s=this.generateGetBarPoints(t,e);return function(t,e){var i=s(t,e),n=r.axis_rotated?1:0,a=r.axis_rotated?0:1;return"M "+i[0][n]+","+i[0][a]+" L"+i[1][n]+","+i[1][a]+" L"+i[2][n]+","+i[2][a]+" L"+i[3][n]+","+i[3][a]+" z"}},m.generateGetBarPoints=function(t,e){var s=this,i=e?s.subXAxis:s.xAxis,n=t.__max__+1,o=s.getBarW(i,n),c=s.getShapeX(o,n,t,!!e),d=s.getShapeY(!!e),u=s.getShapeOffset(s.isBarType,t,!!e),l=o*(s.config.bar_space/2),h=e?s.getSubYScale:s.getYScale;return function(t,e){var i=h.call(s,t.id)(0),n=u(t,e)||i,a=c(t),r=d(t);return s.config.axis_rotated&&(0<t.value&&r<i||t.value<0&&i<r)&&(r=i),[[a+l,n],[a+l,r-(i-n)],[a+o-l,r-(i-n)],[a+o-l,n]]}},m.isWithinBar=function(t,e){var i=e.getBoundingClientRect(),n=e.pathSegList.getItem(0),a=e.pathSegList.getItem(1),r=Math.min(n.x,a.x),s=Math.min(n.y,a.y),o=r+i.width+2,c=s+i.height+2,d=s-2;return r-2<t[0]&&t[0]<o&&d<t[1]&&t[1]<c},m.getShapeIndices=function(t){var e,i,n=this.config,a={},r=0;return this.filterTargetsToShow(this.data.targets.filter(t,this)).forEach(function(t){for(e=0;e<n.data_groups.length;e++)if(!(n.data_groups[e].indexOf(t.id)<0))for(i=0;i<n.data_groups[e].length;i++)if(n.data_groups[e][i]in a){a[t.id]=a[n.data_groups[e][i]];break}v(a[t.id])&&(a[t.id]=r++)}),a.__max__=r-1,a},m.getShapeX=function(i,n,a,t){var r=t?this.subX:this.x;return function(t){var e=t.id in a?a[t.id]:0;return t.x||0===t.x?r(t.x)-i*(n/2-e):0}},m.getShapeY=function(e){var i=this;return function(t){return(e?i.getSubYScale(t.id):i.getYScale(t.id))(t.value)}},m.getShapeOffset=function(t,o,e){var c=this,d=c.orderTargets(c.filterTargetsToShow(c.data.targets.filter(t,c))),u=d.map(function(t){return t.id});return function(i,n){var a=e?c.getSubYScale(i.id):c.getYScale(i.id),r=a(0),s=r;return d.forEach(function(t){var e=c.isStepType(i)?c.convertValuesToStep(t.values):t.values;t.id!==i.id&&o[t.id]===o[i.id]&&u.indexOf(t.id)<u.indexOf(i.id)&&(void 0!==e[n]&&+e[n].x==+i.x||(n=-1,e.forEach(function(t,e){t.x===i.x&&(n=e)})),n in e&&0<=e[n].value*i.value&&(s+=a(e[n].value)-r))}),s}},m.isWithinShape=function(t,e){var i,n=this,a=n.d3.select(t);return n.isTargetToShow(e.id)?"circle"===t.nodeName?i=n.isStepType(e)?n.isWithinStep(t,n.getYScale(e.id)(e.value)):n.isWithinCircle(t,1.5*n.pointSelectR(e)):"path"===t.nodeName&&(i=!a.classed(Y.bar)||n.isWithinBar(n.d3.mouse(t),t)):i=!1,i},m.getInterpolate=function(t){var e=this,i=e.d3,n={linear:i.curveLinear,"linear-closed":i.curveLinearClosed,basis:i.curveBasis,"basis-open":i.curveBasisOpen,"basis-closed":i.curveBasisClosed,bundle:i.curveBundle,cardinal:i.curveCardinal,"cardinal-open":i.curveCardinalOpen,"cardinal-closed":i.curveCardinalClosed,monotone:i.curveMonotoneX,step:i.curveStep,"step-before":i.curveStepBefore,"step-after":i.curveStepAfter};return e.isSplineType(t)?n[e.config.spline_interpolation_type]||n.cardinal:e.isStepType(t)?n[e.config.line_step_type]:n.linear},m.initLine=function(){this.main.select("."+Y.chart).append("g").attr("class",Y.chartLines)},m.updateTargetsForLine=function(t){var e,i=this,n=i.config,a=i.classChartLine.bind(i),r=i.classLines.bind(i),s=i.classAreas.bind(i),o=i.classCircles.bind(i),c=i.classFocus.bind(i);(e=i.main.select("."+Y.chartLines).selectAll("."+Y.chartLine).data(t).attr("class",function(t){return a(t)+c(t)}).enter().append("g").attr("class",a).style("opacity",0).style("pointer-events","none")).append("g").attr("class",r),e.append("g").attr("class",s),e.append("g").attr("class",function(t){return i.generateClass(Y.selectedCircles,t.id)}),e.append("g").attr("class",o).style("cursor",function(t){return n.data_selection_isselectable(t)?"pointer":null}),t.forEach(function(e){i.main.selectAll("."+Y.selectedCircles+i.getTargetSelectorSuffix(e.id)).selectAll("."+Y.selectedCircle).each(function(t){t.value=e.values[t.index].value})})},m.updateLine=function(t){var e=this,i=e.main.selectAll("."+Y.lines).selectAll("."+Y.line).data(e.lineData.bind(e)),n=i.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color);e.mainLine=n.merge(i).style("opacity",e.initialOpacity.bind(e)).style("shape-rendering",function(t){return e.isStepType(t)?"crispEdges":""}).attr("transform",null),i.exit().transition().duration(t).style("opacity",0)},m.redrawLine=function(t,e,i){return[(e?this.mainLine.transition(i):this.mainLine).attr("d",t).style("stroke",this.color).style("opacity",1)]},m.generateDrawLine=function(t,o){var c=this,d=c.config,u=c.d3.line(),i=c.generateGetLinePoints(t,o),l=o?c.getSubYScale:c.getYScale,e=function(t){return(o?c.subxx:c.xx).call(c,t)},n=function(t,e){return 0<d.data_groups.length?i(t,e)[0][1]:l.call(c,t.id)(t.value)};return u=d.axis_rotated?u.x(n).y(e):u.x(e).y(n),d.line_connectNull||(u=u.defined(function(t){return null!=t.value})),function(t){var e,i=d.line_connectNull?c.filterRemoveNull(t.values):t.values,n=o?c.subX:c.x,a=l.call(c,t.id),r=0,s=0;return c.isLineType(t)?d.data_regions[t.id]?e=c.lineWithRegions(i,n,a,d.data_regions[t.id]):(c.isStepType(t)&&(i=c.convertValuesToStep(i)),e=u.curve(c.getInterpolate(t))(i)):(i[0]&&(r=n(i[0].x),s=a(i[0].value)),e=d.axis_rotated?"M "+s+" "+r:"M "+r+" "+s),e||"M 0 0"}},m.generateGetLinePoints=function(t,e){var s=this,o=s.config,i=t.__max__+1,c=s.getShapeX(0,i,t,!!e),d=s.getShapeY(!!e),u=s.getShapeOffset(s.isLineType,t,!!e),l=e?s.getSubYScale:s.getYScale;return function(t,e){var i=l.call(s,t.id)(0),n=u(t,e)||i,a=c(t),r=d(t);return o.axis_rotated&&(0<t.value&&r<i||t.value<0&&i<r)&&(r=i),[[a,r-(i-n)],[a,r-(i-n)],[a,r-(i-n)],[a,r-(i-n)]]}},m.lineWithRegions=function(t,c,d,e){var i,n,a,r,u,s,o,l,h,g,f,p=this,_=p.config,x="M",y=p.isCategorized()?.5:0,m=[];function S(t,e){var i;for(i=0;i<e.length;i++)if(e[i].start<t&&t<=e[i].end)return!0;return!1}if(k(e))for(i=0;i<e.length;i++)m[i]={},v(e[i].start)?m[i].start=t[0].x:m[i].start=p.isTimeSeries()?p.parseDate(e[i].start):e[i].start,v(e[i].end)?m[i].end=t[t.length-1].x:m[i].end=p.isTimeSeries()?p.parseDate(e[i].end):e[i].end;function w(t){return"M"+t[0][0]+" "+t[0][1]+" "+t[1][0]+" "+t[1][1]}for(g=_.axis_rotated?function(t){return d(t.value)}:function(t){return c(t.x)},f=_.axis_rotated?function(t){return c(t.x)}:function(t){return d(t.value)},a=p.isTimeSeries()?function(t,e,i,n){var a=t.x.getTime(),r=e.x-t.x,s=new Date(a+r*i),o=new Date(a+r*(i+n));return w(_.axis_rotated?[[d(u(i)),c(s)],[d(u(i+n)),c(o)]]:[[c(s),d(u(i))],[c(o),d(u(i+n))]])}:function(t,e,i,n){return w(_.axis_rotated?[[d(u(i),!0),c(r(i))],[d(u(i+n),!0),c(r(i+n))]]:[[c(r(i),!0),d(u(i))],[c(r(i+n),!0),d(u(i+n))]])},i=0;i<t.length;i++){if(v(m)||!S(t[i].x,m))x+=" "+g(t[i])+" "+f(t[i]);else for(r=p.getScale(t[i-1].x+y,t[i].x+y,p.isTimeSeries()),u=p.getScale(t[i-1].value,t[i].value),s=c(t[i].x)-c(t[i-1].x),o=d(t[i].value)-d(t[i-1].value),h=2*(l=2/Math.sqrt(Math.pow(s,2)+Math.pow(o,2))),n=l;n<=1;n+=h)x+=a(t[i-1],t[i],n,l);t[i].x}return x},m.updateArea=function(t){var e=this,i=e.d3,n=e.main.selectAll("."+Y.areas).selectAll("."+Y.area).data(e.lineData.bind(e)),a=n.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+i.select(this).style("opacity"),0});e.mainArea=a.merge(n).style("opacity",e.orgAreaOpacity),n.exit().transition().duration(t).style("opacity",0)},m.redrawArea=function(t,e,i){return[(e?this.mainArea.transition(i):this.mainArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},m.generateDrawArea=function(t,e){var r=this,s=r.config,o=r.d3.area(),i=r.generateGetAreaPoints(t,e),n=e?r.getSubYScale:r.getYScale,a=function(t){return(e?r.subxx:r.xx).call(r,t)},c=function(t,e){return 0<s.data_groups.length?i(t,e)[0][1]:n.call(r,t.id)(r.getAreaBaseValue(t.id))},d=function(t,e){return 0<s.data_groups.length?i(t,e)[1][1]:n.call(r,t.id)(t.value)};return o=s.axis_rotated?o.x0(c).x1(d).y(a):o.x(a).y0(s.area_above?0:c).y1(d),s.line_connectNull||(o=o.defined(function(t){return null!==t.value})),function(t){var e,i=s.line_connectNull?r.filterRemoveNull(t.values):t.values,n=0,a=0;return r.isAreaType(t)?(r.isStepType(t)&&(i=r.convertValuesToStep(i)),e=o.curve(r.getInterpolate(t))(i)):(i[0]&&(n=r.x(i[0].x),a=r.getYScale(t.id)(i[0].value)),e=s.axis_rotated?"M "+a+" "+n:"M "+n+" "+a),e||"M 0 0"}},m.getAreaBaseValue=function(){return 0},m.generateGetAreaPoints=function(t,e){var s=this,o=s.config,i=t.__max__+1,c=s.getShapeX(0,i,t,!!e),d=s.getShapeY(!!e),u=s.getShapeOffset(s.isAreaType,t,!!e),l=e?s.getSubYScale:s.getYScale;return function(t,e){var i=l.call(s,t.id)(0),n=u(t,e)||i,a=c(t),r=d(t);return o.axis_rotated&&(0<t.value&&r<i||t.value<0&&i<r)&&(r=i),[[a,n],[a,r-(i-n)],[a,r-(i-n)],[a,n]]}},m.updateCircle=function(t,e){var i=this,n=i.main.selectAll("."+Y.circles).selectAll("."+Y.circle).data(i.lineOrScatterData.bind(i)),a=n.enter().append("circle").attr("class",i.classCircle.bind(i)).attr("cx",t).attr("cy",e).attr("r",i.pointR.bind(i)).style("fill",i.color);i.mainCircle=a.merge(n).style("opacity",i.initialOpacityForCircle.bind(i)),n.exit().style("opacity",0)},m.redrawCircle=function(t,e,i,n){var a=this,r=a.main.selectAll("."+Y.selectedCircle);return[(i?a.mainCircle.transition(n):a.mainCircle).style("opacity",this.opacityForCircle.bind(a)).style("fill",a.color).attr("cx",t).attr("cy",e),(i?r.transition(n):r).attr("cx",t).attr("cy",e)]},m.circleX=function(t){return t.x||0===t.x?this.x(t.x):null},m.updateCircleY=function(){var t,i,e=this;0<e.config.data_groups.length?(t=e.getShapeIndices(e.isLineType),i=e.generateGetLinePoints(t),e.circleY=function(t,e){return i(t,e)[0][1]}):e.circleY=function(t){return e.getYScale(t.id)(t.value)}},m.getCircles=function(t,e){return(e?this.main.selectAll("."+Y.circles+this.getTargetSelectorSuffix(e)):this.main).selectAll("."+Y.circle+(P(t)?"-"+t:""))},m.expandCircles=function(t,e,i){var n=this.pointExpandedR.bind(this);i&&this.unexpandCircles(),this.getCircles(t,e).classed(Y.EXPANDED,!0).attr("r",n)},m.unexpandCircles=function(t){var e=this,i=e.pointR.bind(e);e.getCircles(t).filter(function(){return e.d3.select(this).classed(Y.EXPANDED)}).classed(Y.EXPANDED,!1).attr("r",i)},m.pointR=function(t){var e=this.config;return this.isStepType(t)?0:h(e.point_r)?e.point_r(t):e.point_r},m.pointExpandedR=function(t){var e=this.config;return e.point_focus_expand_enabled?h(e.point_focus_expand_r)?e.point_focus_expand_r(t):e.point_focus_expand_r?e.point_focus_expand_r:1.75*this.pointR(t):this.pointR(t)},m.pointSelectR=function(t){var e=this.config;return h(e.point_select_r)?e.point_select_r(t):e.point_select_r?e.point_select_r:4*this.pointR(t)},m.isWithinCircle=function(t,e){var i=this.d3,n=i.mouse(t),a=i.select(t),r=+a.attr("cx"),s=+a.attr("cy");return Math.sqrt(Math.pow(r-n[0],2)+Math.pow(s-n[1],2))<e},m.isWithinStep=function(t,e){return Math.abs(e-this.d3.mouse(t)[1])<30},m.getCurrentWidth=function(){var t=this.config;return t.size_width?t.size_width:this.getParentWidth()},m.getCurrentHeight=function(){var t=this.config,e=t.size_height?t.size_height:this.getParentHeight();return 0<e?e:320/(this.hasType("gauge")&&!t.gauge_fullCircle?2:1)},m.getCurrentPaddingTop=function(){var t=this.config,e=P(t.padding_top)?t.padding_top:0;return this.title&&this.title.node()&&(e+=this.getTitlePadding()),e},m.getCurrentPaddingBottom=function(){var t=this.config;return P(t.padding_bottom)?t.padding_bottom:0},m.getCurrentPaddingLeft=function(t){var e=this.config;return P(e.padding_left)?e.padding_left:e.axis_rotated?!e.axis_x_show||e.axis_x_inner?1:Math.max(d(this.getAxisWidthByAxisId("x",t)),40):!e.axis_y_show||e.axis_y_inner?this.axis.getYAxisLabelPosition().isOuter?30:1:d(this.getAxisWidthByAxisId("y",t))},m.getCurrentPaddingRight=function(){var t=this,e=t.config,i=t.isLegendRight?t.getLegendWidth()+20:0;return P(e.padding_right)?e.padding_right+1:e.axis_rotated?10+i:!e.axis_y2_show||e.axis_y2_inner?2+i+(t.axis.getY2AxisLabelPosition().isOuter?20:0):d(t.getAxisWidthByAxisId("y2"))+i},m.getParentRectValue=function(e){for(var i,n=this.selectChart.node();n&&"BODY"!==n.tagName;){try{i=n.getBoundingClientRect()[e]}catch(t){"width"===e&&(i=n.offsetWidth)}if(i)break;n=n.parentNode}return i},m.getParentWidth=function(){return this.getParentRectValue("width")},m.getParentHeight=function(){var t=this.selectChart.style("height");return 0<t.indexOf("px")?+t.replace("px",""):0},m.getSvgLeft=function(t){var e=this,i=e.config,n=i.axis_rotated||!i.axis_rotated&&!i.axis_y_inner,a=i.axis_rotated?Y.axisX:Y.axisY,r=e.main.select("."+a).node(),s=r&&n?r.getBoundingClientRect():{right:0},o=e.selectChart.node().getBoundingClientRect(),c=e.hasArcType(),d=s.right-o.left-(c?0:e.getCurrentPaddingLeft(t));return 0<d?d:0},m.getAxisWidthByAxisId=function(t,e){var i=this.axis.getLabelPositionById(t);return this.axis.getMaxTickWidth(t,e)+(i.isInner?20:40)},m.getHorizontalAxisHeight=function(t){var e=this,i=e.config,n=30;return"x"!==t||i.axis_x_show?"x"===t&&i.axis_x_height?i.axis_x_height:"y"!==t||i.axis_y_show?"y2"!==t||i.axis_y2_show?("x"===t&&!i.axis_rotated&&i.axis_x_tick_rotate&&(n=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(i.axis_x_tick_rotate))/180)),"y"===t&&i.axis_rotated&&i.axis_y_tick_rotate&&(n=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(i.axis_y_tick_rotate))/180)),n+(e.axis.getLabelPositionById(t).isInner?0:10)+("y2"===t?-10:0)):e.rotated_padding_top:!i.legend_show||e.isLegendRight||e.isLegendInset?1:10:8},m.initBrush=function(t){var a=this,e=a.d3;return a.brush=(a.config.axis_rotated?e.brushY():e.brushX()).on("brush",function(){var t=e.event.sourceEvent;t&&"zoom"===t.type||a.redrawForBrush()}).on("end",function(){var t=e.event.sourceEvent;t&&"zoom"===t.type||a.brush.empty()&&t&&"end"!==t.type&&a.brush.clear()}),a.brush.updateExtent=function(){var t,e=this.scale.range();return t=a.config.axis_rotated?[[0,e[0]],[a.width2,e[1]]]:[[e[0],0],[e[1],a.height2]],this.extent(t),this},a.brush.updateScale=function(t){return this.scale=t,this},a.brush.update=function(t){this.updateScale(t||a.subX).updateExtent(),a.context.select("."+Y.brush).call(this)},a.brush.clear=function(){a.context.select("."+Y.brush).call(a.brush.move,null)},a.brush.selection=function(){return e.brushSelection(a.context.select("."+Y.brush).node())},a.brush.selectionAsValue=function(t,e){var i,n;return t?(a.context&&(i=[this.scale(t[0]),this.scale(t[1])],n=a.context.select("."+Y.brush),e&&(n=n.transition()),a.brush.move(n,i)),[]):(i=a.brush.selection()||[0,0],[this.scale.invert(i[0]),this.scale.invert(i[1])])},a.brush.empty=function(){var t=a.brush.selection();return!t||t[0]===t[1]},a.brush.updateScale(t)},m.initSubchart=function(){var t=this,e=t.config,i=t.context=t.svg.append("g").attr("transform",t.getTranslate("context")),n=e.subchart_show?"visible":"hidden";i.style("visibility",n),i.append("g").attr("clip-path",t.clipPathForSubchart).attr("class",Y.chart),i.select("."+Y.chart).append("g").attr("class",Y.chartBars),i.select("."+Y.chart).append("g").attr("class",Y.chartLines),i.append("g").attr("clip-path",t.clipPath).attr("class",Y.brush),t.axes.subx=i.append("g").attr("class",Y.axisX).attr("transform",t.getTranslate("subx")).attr("clip-path",e.axis_rotated?"":t.clipPathForXAxis)},m.initSubchartBrush=function(){this.initBrush(this.subX).updateExtent(),this.context.select("."+Y.brush).call(this.brush)},m.updateTargetsForSubchart=function(t){var e,i,n,a,r=this,s=r.context,o=r.config,c=r.classChartBar.bind(r),d=r.classBars.bind(r),u=r.classChartLine.bind(r),l=r.classLines.bind(r),h=r.classAreas.bind(r);o.subchart_show&&((n=(a=s.select("."+Y.chartBars).selectAll("."+Y.chartBar).data(t)).enter().append("g").style("opacity",0)).merge(a).attr("class",c),n.append("g").attr("class",d),(e=(i=s.select("."+Y.chartLines).selectAll("."+Y.chartLine).data(t)).enter().append("g").style("opacity",0)).merge(i).attr("class",u),e.append("g").attr("class",l),e.append("g").attr("class",h),s.selectAll("."+Y.brush+" rect").attr(o.axis_rotated?"width":"height",o.axis_rotated?r.width2:r.height2))},m.updateBarForSubchart=function(t){var e=this,i=e.context.selectAll("."+Y.bars).selectAll("."+Y.bar).data(e.barData.bind(e)),n=i.enter().append("path").attr("class",e.classBar.bind(e)).style("stroke","none").style("fill",e.color);i.exit().transition().duration(t).style("opacity",0).remove(),e.contextBar=n.merge(i).style("opacity",e.initialOpacity.bind(e))},m.redrawBarForSubchart=function(t,e,i){(e?this.contextBar.transition(Math.random().toString()).duration(i):this.contextBar).attr("d",t).style("opacity",1)},m.updateLineForSubchart=function(t){var e=this,i=e.context.selectAll("."+Y.lines).selectAll("."+Y.line).data(e.lineData.bind(e)),n=i.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color);i.exit().transition().duration(t).style("opacity",0).remove(),e.contextLine=n.merge(i).style("opacity",e.initialOpacity.bind(e))},m.redrawLineForSubchart=function(t,e,i){(e?this.contextLine.transition(Math.random().toString()).duration(i):this.contextLine).attr("d",t).style("opacity",1)},m.updateAreaForSubchart=function(t){var e=this,i=e.d3,n=e.context.selectAll("."+Y.areas).selectAll("."+Y.area).data(e.lineData.bind(e)),a=n.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+i.select(this).style("opacity"),0});n.exit().transition().duration(t).style("opacity",0).remove(),e.contextArea=a.merge(n).style("opacity",0)},m.redrawAreaForSubchart=function(t,e,i){(e?this.contextArea.transition(Math.random().toString()).duration(i):this.contextArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)},m.redrawSubchart=function(t,e,i,n,a,r,s){var o,c,d,u=this,l=u.d3,h=u.config;u.context.style("visibility",h.subchart_show?"visible":"hidden"),h.subchart_show&&(l.event&&"zoom"===l.event.type&&u.brush.selectionAsValue(u.x.orgDomain()),t&&(u.brush.empty()||u.brush.selectionAsValue(u.x.orgDomain()),o=u.generateDrawArea(a,!0),c=u.generateDrawBar(r,!0),d=u.generateDrawLine(s,!0),u.updateBarForSubchart(i),u.updateLineForSubchart(i),u.updateAreaForSubchart(i),u.redrawBarForSubchart(c,i,i),u.redrawLineForSubchart(d,i,i),u.redrawAreaForSubchart(o,i,i)))},m.redrawForBrush=function(){var t,e=this,i=e.x,n=e.d3;e.redraw({withTransition:!1,withY:e.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withEventRect:!1,withDimension:!1}),t=n.event.selection||e.brush.scale.range(),e.main.select("."+Y.eventRect).call(e.zoom.transform,n.zoomIdentity.scale(e.width/(t[1]-t[0])).translate(-t[0],0)),e.config.subchart_onbrush.call(e.api,i.orgDomain())},m.transformContext=function(t,e){var i;e&&e.axisSubX?i=e.axisSubX:(i=this.context.select("."+Y.axisX),t&&(i=i.transition())),this.context.attr("transform",this.getTranslate("context")),i.attr("transform",this.getTranslate("subx"))},m.getDefaultSelection=function(){var t=this,e=t.config,i=h(e.axis_x_selection)?e.axis_x_selection(t.getXDomain(t.data.targets)):e.axis_x_selection;return t.isTimeSeries()&&(i=[t.parseDate(i[0]),t.parseDate(i[1])]),i},m.initText=function(){this.main.select("."+Y.chart).append("g").attr("class",Y.chartTexts),this.mainText=this.d3.selectAll([])},m.updateTargetsForText=function(t){var e=this,i=e.classChartText.bind(e),n=e.classTexts.bind(e),a=e.classFocus.bind(e),r=e.main.select("."+Y.chartTexts).selectAll("."+Y.chartText).data(t),s=r.enter().append("g").attr("class",i).style("opacity",0).style("pointer-events","none");s.append("g").attr("class",n),s.merge(r).attr("class",function(t){return i(t)+a(t)})},m.updateText=function(t,e,i){var n=this,a=n.config,r=n.barOrLineData.bind(n),s=n.classText.bind(n),o=n.main.selectAll("."+Y.texts).selectAll("."+Y.text).data(r),c=o.enter().append("text").attr("class",s).attr("text-anchor",function(t){return a.axis_rotated?t.value<0?"end":"start":"middle"}).style("stroke","none").attr("x",t).attr("y",e).style("fill",function(t){return n.color(t)}).style("fill-opacity",0);n.mainText=c.merge(o).text(function(t,e,i){return n.dataLabelFormat(t.id)(t.value,t.id,e,i)}),o.exit().transition().duration(i).style("fill-opacity",0).remove()},m.redrawText=function(t,e,i,n,a){return[(n?this.mainText.transition(a):this.mainText).attr("x",t).attr("y",e).style("fill",this.color).style("fill-opacity",i?0:this.opacityForText.bind(this))]},m.getTextRect=function(t,e,i){var n,a=this.d3.select("body").append("div").classed("c3",!0),r=a.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),s=this.d3.select(i).style("font");return r.selectAll(".dummy").data([t]).enter().append("text").classed(e||"",!0).style("font",s).text(t).each(function(){n=this.getBoundingClientRect()}),a.remove(),n},m.generateXYForText=function(t,e,i,n){var a=this,r=a.generateGetAreaPoints(t,!1),s=a.generateGetBarPoints(e,!1),o=a.generateGetLinePoints(i,!1),c=n?a.getXForText:a.getYForText;return function(t,e){var i=a.isAreaType(t)?r:a.isBarType(t)?s:o;return c.call(a,i(t,e),t,this)}},m.getXForText=function(t,e,i){var n,a,r=this,s=i.getBoundingClientRect();return r.config.axis_rotated?(a=r.isBarType(e)?4:6,n=t[2][1]+a*(e.value<0?-1:1)):n=r.hasType("bar")?(t[2][0]+t[0][0])/2:t[0][0],null===e.value&&(n>r.width?n=r.width-s.width:n<0&&(n=4)),n},m.getYForText=function(t,e,i){var n,a=this,r=i.getBoundingClientRect();return a.config.axis_rotated?n=(t[0][0]+t[2][0]+.6*r.height)/2:(n=t[2][1],e.value<0||0===e.value&&!a.hasPositiveValue?(n+=r.height,a.isBarType(e)&&a.isSafari()?n-=3:!a.isBarType(e)&&a.isChrome()&&(n+=3)):n+=a.isBarType(e)?-3:-6),null!==e.value||a.config.axis_rotated||(n<r.height?n=r.height:n>this.height&&(n=this.height-4)),n},m.initTitle=function(){this.title=this.svg.append("text").text(this.config.title_text).attr("class",this.CLASS.title)},m.redrawTitle=function(){var t=this;t.title.attr("x",t.xForTitle.bind(t)).attr("y",t.yForTitle.bind(t))},m.xForTitle=function(){var t=this,e=t.config,i=e.title_position||"left";return 0<=i.indexOf("right")?t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width-e.title_padding.right:0<=i.indexOf("center")?(t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width)/2:e.title_padding.left},m.yForTitle=function(){var t=this;return t.config.title_padding.top+t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).height},m.getTitlePadding=function(){return this.yForTitle()+this.config.title_padding.bottom},m.initTooltip=function(){var t,e=this,i=e.config;if(e.tooltip=e.selectChart.style("position","relative").append("div").attr("class",Y.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),i.tooltip_init_show){if(e.isTimeSeries()&&c(i.tooltip_init_x)){for(i.tooltip_init_x=e.parseDate(i.tooltip_init_x),t=0;t<e.data.targets[0].values.length&&e.data.targets[0].values[t].x-i.tooltip_init_x!=0;t++);i.tooltip_init_x=t}e.tooltip.html(i.tooltip_contents.call(e,e.data.targets.map(function(t){return e.addName(t.values[i.tooltip_init_x])}),e.axis.getXAxisTickFormat(),e.getYFormat(e.hasArcType()),e.color)),e.tooltip.style("top",i.tooltip_init_position.top).style("left",i.tooltip_init_position.left).style("display","block")}},m.getTooltipSortFunction=function(){var t=this,e=t.config;if(0!==e.data_groups.length&&void 0===e.tooltip_order){var i=t.orderTargets(t.data.targets).map(function(t){return t.id});return(t.isOrderAsc()||t.isOrderDesc())&&(i=i.reverse()),function(t,e){return i.indexOf(t.id)-i.indexOf(e.id)}}var n=e.tooltip_order;void 0===n&&(n=e.data_order);var a=function(t){return t?t.value:null};if(c(n)&&"asc"===n.toLowerCase())return function(t,e){return a(t)-a(e)};if(c(n)&&"desc"===n.toLowerCase())return function(t,e){return a(e)-a(t)};if(h(n)){var r=n;return void 0===e.tooltip_order&&(r=function(t,e){return n(t?{id:t.id,values:[t]}:null,e?{id:e.id,values:[e]}:null)}),r}return u(n)?function(t,e){return n.indexOf(t.id)-n.indexOf(e.id)}:void 0},m.getTooltipContent=function(t,e,i,n){var a,r,s,o,c,d,u=this,l=u.config,h=l.tooltip_format_title||e,g=l.tooltip_format_name||function(t){return t},f=l.tooltip_format_value||i,p=this.getTooltipSortFunction();for(p&&t.sort(p),r=0;r<t.length;r++)if(t[r]&&(t[r].value||0===t[r].value)&&(a||(s=_(h?h(t[r].x):t[r].x),a="<table class='"+u.CLASS.tooltip+"'>"+(s||0===s?"<tr><th colspan='2'>"+s+"</th></tr>":"")),void 0!==(o=_(f(t[r].value,t[r].ratio,t[r].id,t[r].index,t))))){if(null===t[r].name)continue;c=_(g(t[r].name,t[r].ratio,t[r].id,t[r].index)),d=u.levelColor?u.levelColor(t[r].value):n(t[r].id),a+="<tr class='"+u.CLASS.tooltipName+"-"+u.getTargetSelectorSuffix(t[r].id)+"'>",a+="<td class='name'><span style='background-color:"+d+"'></span>"+c+"</td>",a+="<td class='value'>"+o+"</td>",a+="</tr>"}return a+"</table>"},m.tooltipPosition=function(t,e,i,n){var a,r,s,o,c,d=this,u=d.config,l=d.d3,h=d.hasArcType(),g=l.mouse(n);return h?(r=(d.width-(d.isLegendRight?d.getLegendWidth():0))/2+g[0],o=(d.hasType("gauge")?d.height:d.height/2)+g[1]+20):(a=d.getSvgLeft(!0),u.axis_rotated?(s=(r=a+g[0]+100)+e,c=d.currentWidth-d.getCurrentPaddingRight(),o=d.x(t[0].x)+20):(s=(r=a+d.getCurrentPaddingLeft(!0)+d.x(t[0].x)+20)+e,c=a+d.currentWidth-d.getCurrentPaddingRight(),o=g[1]+15),c<s&&(r-=s-c+20),o+i>d.currentHeight&&(o-=i+30)),o<0&&(o=0),{top:o,left:r}},m.showTooltip=function(t,e){var i,n,a,r=this,s=r.config,o=r.hasArcType(),c=t.filter(function(t){return t&&P(t.value)}),d=s.tooltip_position||m.tooltipPosition;0!==c.length&&s.tooltip_show&&(r.tooltip.html(s.tooltip_contents.call(r,t,r.axis.getXAxisTickFormat(),r.getYFormat(o),r.color)).style("display","block"),i=r.tooltip.property("offsetWidth"),n=r.tooltip.property("offsetHeight"),a=d.call(this,c,i,n,e),r.tooltip.style("top",a.top+"px").style("left",a.left+"px"))},m.hideTooltip=function(){this.tooltip.style("display","none")},m.setTargetType=function(t,e){var i=this,n=i.config;i.mapToTargetIds(t).forEach(function(t){i.withoutFadeIn[t]=e===n.data_types[t],n.data_types[t]=e}),t||(n.data_type=e)},m.hasType=function(i,t){var n=this.config.data_types,a=!1;return(t=t||this.data.targets)&&t.length?t.forEach(function(t){var e=n[t.id];(e&&0<=e.indexOf(i)||!e&&"line"===i)&&(a=!0)}):Object.keys(n).length?Object.keys(n).forEach(function(t){n[t]===i&&(a=!0)}):a=this.config.data_type===i,a},m.hasArcType=function(t){return this.hasType("pie",t)||this.hasType("donut",t)||this.hasType("gauge",t)},m.isLineType=function(t){var e=this.config,i=c(t)?t:t.id;return!e.data_types[i]||0<=["line","spline","area","area-spline","step","area-step"].indexOf(e.data_types[i])},m.isStepType=function(t){var e=c(t)?t:t.id;return 0<=["step","area-step"].indexOf(this.config.data_types[e])},m.isSplineType=function(t){var e=c(t)?t:t.id;return 0<=["spline","area-spline"].indexOf(this.config.data_types[e])},m.isAreaType=function(t){var e=c(t)?t:t.id;return 0<=["area","area-spline","area-step"].indexOf(this.config.data_types[e])},m.isBarType=function(t){var e=c(t)?t:t.id;return"bar"===this.config.data_types[e]},m.isScatterType=function(t){var e=c(t)?t:t.id;return"scatter"===this.config.data_types[e]},m.isPieType=function(t){var e=c(t)?t:t.id;return"pie"===this.config.data_types[e]},m.isGaugeType=function(t){var e=c(t)?t:t.id;return"gauge"===this.config.data_types[e]},m.isDonutType=function(t){var e=c(t)?t:t.id;return"donut"===this.config.data_types[e]},m.isArcType=function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)},m.lineData=function(t){return this.isLineType(t)?[t]:[]},m.arcData=function(t){return this.isArcType(t.data)?[t]:[]},m.barData=function(t){return this.isBarType(t)?t.values:[]},m.lineOrScatterData=function(t){return this.isLineType(t)||this.isScatterType(t)?t.values:[]},m.barOrLineData=function(t){return this.isBarType(t)||this.isLineType(t)?t.values:[]},m.isSafari=function(){var t=window.navigator.userAgent;return 0<=t.indexOf("Safari")&&t.indexOf("Chrome")<0},m.isChrome=function(){return 0<=window.navigator.userAgent.indexOf("Chrome")},m.initZoom=function(){var e,i=this,n=i.d3,a=i.config;return i.zoom=n.zoom().on("start",function(){var t=n.event.sourceEvent;t&&"brush"===t.type||(e=t,a.zoom_onzoomstart.call(i.api,t))}).on("zoom",function(){var t=n.event.sourceEvent;t&&"brush"===t.type||i.redrawForZoom.call(i)}).on("end",function(){var t=n.event.sourceEvent;t&&"brush"===t.type||t&&e.clientX===t.clientX&&e.clientY===t.clientY||a.zoom_onzoomend.call(i.api,i.x.orgDomain())}),i.zoom.updateDomain=function(){return n.event&&n.event.transform&&i.x.domain(n.event.transform.rescaleX(i.subX).domain()),this},i.zoom.updateExtent=function(){return this.scaleExtent([1,1/0]).translateExtent([[0,0],[i.width,i.height]]).extent([[0,0],[i.width,i.height]]),this},i.zoom.update=function(){return this.updateExtent().updateDomain()},i.zoom.updateExtent()},m.zoomTransform=function(t){var e=[this.x(t[0]),this.x(t[1])];return this.d3.zoomIdentity.scale(this.width/(e[1]-e[0])).translate(-e[0],0)},m.getZoomDomain=function(){var t=this.config,e=this.d3;return[e.min([this.orgXDomain[0],t.zoom_x_min]),e.max([this.orgXDomain[1],t.zoom_x_max])]},m.redrawForZoom=function(){var t=this,e=t.d3,i=t.config,n=t.zoom,a=t.x;i.zoom_enabled&&0!==t.filterTargetsToShow(t.data.targets).length&&(n.update(),t.isCategorized()&&a.orgDomain()[0]===t.orgXDomain[0]&&a.domain([t.orgXDomain[0]-1e-10,a.orgDomain()[1]]),t.redraw({withTransition:!1,withY:i.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),e.event.sourceEvent&&"mousemove"===e.event.sourceEvent.type&&(t.cancelClick=!0),i.zoom_onzoom.call(t.api,a.orgDomain()))},n});

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
// https://d3js.org Version 5.4.0. Copyright 2018 Mike Bostock.
(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})})(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){return 1===t.length&&(t=function(t){return function(e,r){return n(t(e),r)}}(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}function r(t,n){return[t,n]}function i(t){return null===t?NaN:+t}function o(t,n){var e,r,o=t.length,a=0,u=-1,f=0,c=0;if(null==n)for(;++u<o;)isNaN(e=i(t[u]))||(c+=(r=e-f)*(e-(f+=r/++a)));else for(;++u<o;)isNaN(e=i(n(t[u],u,t)))||(c+=(r=e-f)*(e-(f+=r/++a)));if(a>1)return c/(a-1)}function a(t,n){var e=o(t,n);return e?Math.sqrt(e):e}function u(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}function f(t){return function(){return t}}function c(t){return t}function s(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}function l(t,n,e){var r,i,o,a,u=-1;if(n=+n,t=+t,e=+e,t===n&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=h(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function h(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=rs?10:o>=is?5:o>=os?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=rs?10:o>=is?5:o>=os?2:1)}function d(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=rs?i*=10:o>=is?i*=5:o>=os&&(i*=2),n<t?-i:i}function p(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function v(t,n,e){if(null==e&&(e=i),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,o=(r-1)*n,a=Math.floor(o),u=+e(t[a],a,t);return u+(+e(t[a+1],a+1,t)-u)*(o-a)}}function g(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function y(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function _(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function b(t){if(!(i=t.length))return[];for(var n=-1,e=_(t,m),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function m(t){return t.length}function x(t){return t}function w(t){return"translate("+(t+.5)+",0)"}function M(t){return"translate(0,"+(t+.5)+")"}function A(){return!this.__axis}function T(t,n){function e(e){var h=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,d=null==o?n.tickFormat?n.tickFormat.apply(n,r):x:o,p=Math.max(a,0)+f,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=e.selection?e.selection():e,m=b.selectAll(".domain").data([null]),w=b.selectAll(".tick").data(h,n).order(),M=w.exit(),T=w.enter().append("g").attr("class","tick"),N=w.select("line"),S=w.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),w=w.merge(T),N=N.merge(T.append("line").attr("stroke","#000").attr(s+"2",c*a)),S=S.merge(T.append("text").attr("fill","#000").attr(s,c*p).attr("dy",t===us?"0em":t===cs?"0.71em":"0.32em")),e!==b&&(m=m.transition(e),w=w.transition(e),N=N.transition(e),S=S.transition(e),M=M.transition(e).attr("opacity",ls).attr("transform",function(t){return isFinite(t=_(t))?l(t):this.getAttribute("transform")}),T.attr("opacity",ls).attr("transform",function(t){var n=this.parentNode.__axis;return l(n&&isFinite(n=n(t))?n:_(t))})),M.remove(),m.attr("d",t===ss||t==fs?"M"+c*u+","+g+"H0.5V"+y+"H"+c*u:"M"+g+","+c*u+"V0.5H"+y+"V"+c*u),w.attr("opacity",1).attr("transform",function(t){return l(_(t))}),N.attr(s+"2",c*a),S.attr(s,c*p).text(d),b.filter(A).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===fs?"start":t===ss?"end":"middle"),b.each(function(){this.__axis=_})}var r=[],i=null,o=null,a=6,u=6,f=3,c=t===us||t===ss?-1:1,s=t===ss||t===fs?"x":"y",l=t===us||t===cs?w:M;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=as.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:as.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:as.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(a=u=+t,e):a},e.tickSizeInner=function(t){return arguments.length?(a=+t,e):a},e.tickSizeOuter=function(t){return arguments.length?(u=+t,e):u},e.tickPadding=function(t){return arguments.length?(f=+t,e):f},e}function N(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new S(r)}function S(t){this._=t}function E(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=hs,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function k(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),ps.hasOwnProperty(n)?{space:ps[n],local:t}:t}function C(t){var n=k(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===ds&&n.documentElement.namespaceURI===ds?n.createElement(t):n.createElementNS(e,t)}})(n)}function P(){}function z(t){return null==t?P:function(){return this.querySelector(t)}}function R(){return[]}function L(t){return null==t?R:function(){return this.querySelectorAll(t)}}function D(t){return new Array(t.length)}function U(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function q(t,n,e,r,i,o){for(var a,u=0,f=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new U(t,o[u]);for(;u<f;++u)(a=n[u])&&(i[u]=a)}function O(t,n,e,r,i,o,a){var u,f,c,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(f=n[u])&&(d[u]=c=bs+a.call(f,f.__data__,u,n),c in s?i[u]=f:s[c]=f);for(u=0;u<h;++u)(f=s[c=bs+a.call(t,o[u],u,o)])?(r[u]=f,f.__data__=o[u],s[c]=null):e[u]=new U(t,o[u]);for(u=0;u<l;++u)(f=n[u])&&s[d[u]]===f&&(i[u]=f)}function Y(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function B(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function F(t,n){return t.style.getPropertyValue(n)||B(t).getComputedStyle(t,null).getPropertyValue(n)}function I(t){return t.trim().split(/^|\s+/)}function j(t){return t.classList||new H(t)}function H(t){this._node=t,this._names=I(t.getAttribute("class")||"")}function X(t,n){for(var e=j(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function G(t,n){for(var e=j(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function V(){this.textContent=""}function $(){this.innerHTML=""}function W(){this.nextSibling&&this.parentNode.appendChild(this)}function Z(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Q(){return null}function J(){var t=this.parentNode;t&&t.removeChild(this)}function K(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function tt(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}function nt(t,n,e){return t=et(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function et(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function rt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function it(t,n,e){var r=ms.hasOwnProperty(t.type)?nt:et;return function(i,o,a){var u,f=this.__on,c=r(n,o,a);if(f)for(var s=0,l=f.length;s<l;++s)if((u=f[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=c,u.capture=e),void(u.value=n);this.addEventListener(t.type,c,e),u={type:t.type,name:t.name,value:n,listener:c,capture:e},f?f.push(u):this.__on=[u]}}function ot(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function at(t,n,e){var r=B(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ut(t,n){this._groups=t,this._parents=n}function ft(){return new ut([[document.documentElement]],xs)}function ct(t){return"string"==typeof t?new ut([[document.querySelector(t)]],[document.documentElement]):new ut([[t]],xs)}function st(){return new lt}function lt(){this._="@"+(++ws).toString(36)}function ht(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function dt(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function pt(t){var n=ht();return n.changedTouches&&(n=n.changedTouches[0]),dt(t,n)}function vt(t,n,e){arguments.length<3&&(e=n,n=ht().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return dt(t,r);return null}function gt(){t.event.stopImmediatePropagation()}function yt(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function _t(t){var n=t.document.documentElement,e=ct(t).on("dragstart.drag",yt,!0);"onselectstart"in n?e.on("selectstart.drag",yt,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function bt(t,n){var e=t.document.documentElement,r=ct(t).on("dragstart.drag",null);n&&(r.on("click.drag",yt,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function mt(t){return function(){return t}}function xt(t,n,e,r,i,o,a,u,f,c){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=f,this._=c}function wt(){return!t.event.button}function Mt(){return this.parentNode}function At(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Tt(){return"ontouchstart"in this}function Nt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function St(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Et(){}function kt(t){var n;return t=(t+"").trim().toLowerCase(),(n=Ns.exec(t))?(n=parseInt(n[1],16),new Lt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Ss.exec(t))?Ct(parseInt(n[1],16)):(n=Es.exec(t))?new Lt(n[1],n[2],n[3],1):(n=ks.exec(t))?new Lt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Cs.exec(t))?Pt(n[1],n[2],n[3],n[4]):(n=Ps.exec(t))?Pt(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=zs.exec(t))?Ut(n[1],n[2]/100,n[3]/100,1):(n=Rs.exec(t))?Ut(n[1],n[2]/100,n[3]/100,n[4]):Ls.hasOwnProperty(t)?Ct(Ls[t]):"transparent"===t?new Lt(NaN,NaN,NaN,0):null}function Ct(t){return new Lt(t>>16&255,t>>8&255,255&t,1)}function Pt(t,n,e,r){return r<=0&&(t=n=e=NaN),new Lt(t,n,e,r)}function zt(t){return t instanceof Et||(t=kt(t)),t?(t=t.rgb(),new Lt(t.r,t.g,t.b,t.opacity)):new Lt}function Rt(t,n,e,r){return 1===arguments.length?zt(t):new Lt(t,n,e,null==r?1:r)}function Lt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Dt(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Ut(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Ot(t,n,e,r)}function qt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Ot)return new Ot(t.h,t.s,t.l,t.opacity);if(t instanceof Et||(t=kt(t)),!t)return new Ot;if(t instanceof Ot)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,f=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=f<.5?o+i:2-o-i,a*=60):u=f>0&&f<1?0:a,new Ot(a,u,f,t.opacity)}(t):new Ot(t,n,e,null==r?1:r)}function Ot(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Yt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Bt(t){if(t instanceof It)return new It(t.l,t.a,t.b,t.opacity);if(t instanceof Wt){if(isNaN(t.h))return new It(t.l,0,0,t.opacity);var n=t.h*Ds;return new It(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Lt||(t=zt(t));var e,r,i=Gt(t.r),o=Gt(t.g),a=Gt(t.b),u=jt((.2225045*i+.7168786*o+.0606169*a)/Os);return i===o&&o===a?e=r=u:(e=jt((.4360747*i+.3850649*o+.1430804*a)/qs),r=jt((.0139322*i+.0971045*o+.7141733*a)/Ys)),new It(116*u-16,500*(e-u),200*(u-r),t.opacity)}function Ft(t,n,e,r){return 1===arguments.length?Bt(t):new It(t,n,e,null==r?1:r)}function It(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function jt(t){return t>js?Math.pow(t,1/3):t/Is+Bs}function Ht(t){return t>Fs?t*t*t:Is*(t-Bs)}function Xt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Gt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Vt(t){if(t instanceof Wt)return new Wt(t.h,t.c,t.l,t.opacity);if(t instanceof It||(t=Bt(t)),0===t.a&&0===t.b)return new Wt(NaN,0,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*Us;return new Wt(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function $t(t,n,e,r){return 1===arguments.length?Vt(t):new Wt(t,n,e,null==r?1:r)}function Wt(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Zt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof Qt)return new Qt(t.h,t.s,t.l,t.opacity);t instanceof Lt||(t=zt(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(Ws*r+Vs*n-$s*e)/(Ws+Vs-$s),o=r-i,a=(Gs*(e-i)-Hs*o)/Xs,u=Math.sqrt(a*a+o*o)/(Gs*i*(1-i)),f=u?Math.atan2(a,o)*Us-120:NaN;return new Qt(f<0?f+360:f,u,i,t.opacity)}(t):new Qt(t,n,e,null==r?1:r)}function Qt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Jt(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function Kt(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return Jt((e-r/n)*n,a,i,o,u)}}function tn(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return Jt((e-r/n)*n,i,o,a,u)}}function nn(t){return function(){return t}}function en(t,n){return function(e){return t+e*n}}function rn(t,n){var e=n-t;return e?en(t,e>180||e<-180?e-360*Math.round(e/360):e):nn(isNaN(t)?n:t)}function on(t){return 1==(t=+t)?an:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):nn(isNaN(n)?e:n)}}function an(t,n){var e=n-t;return e?en(t,e):nn(isNaN(t)?n:t)}function un(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=Rt(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}function fn(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=dn(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function cn(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}}function sn(t,n){return t=+t,n-=t,function(e){return t+n*e}}function ln(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=dn(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}function hn(t,n){var e,r,i,o=ol.lastIndex=al.lastIndex=0,a=-1,u=[],f=[];for(t+="",n+="";(e=ol.exec(t))&&(r=al.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,f.push({i:a,x:sn(e,r)})),o=al.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?f[0]?function(t){return function(n){return t(n)+""}}(f[0].x):function(t){return function(){return t}}(n):(n=f.length,function(t){for(var e,r=0;r<n;++r)u[(e=f[r]).i]=e.x(t);return u.join("")})}function dn(t,n){var e,r=typeof n;return null==n||"boolean"===r?nn(n):("number"===r?sn:"string"===r?(e=kt(n))?(n=e,el):hn:n instanceof kt?el:n instanceof Date?cn:Array.isArray(n)?fn:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?ln:sn)(t,n)}function pn(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}}function vn(t,n,e,r,i,o){var a,u,f;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(f=t*e+n*r)&&(e-=t*f,r-=n*f),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,f/=u),t*r<n*e&&(t=-t,n=-n,f=-f,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*ul,skewX:Math.atan(f)*ul,scaleX:a,scaleY:u}}function gn(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],f=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var f=a.push("translate(",null,n,null,e);u.push({i:f-4,x:sn(t,i)},{i:f-2,x:sn(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,f),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:sn(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,f),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:sn(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,f),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:sn(t,e)},{i:u-2,x:sn(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,f),o=a=null,function(t){for(var n,e=-1,r=f.length;++e<r;)u[(n=f[e]).i]=n.x(t);return u.join("")}}}function yn(t){return((t=Math.exp(t))+1/t)/2}function _n(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],f=n[1],c=n[2],s=u-i,l=f-o,h=s*s+l*l;if(h<pl)r=Math.log(c/a)/ll,e=function(t){return[i+t*s,o+t*l,a*Math.exp(ll*t*r)]};else{var d=Math.sqrt(h),p=(c*c-a*a+dl*h)/(2*a*hl*d),v=(c*c-a*a-dl*h)/(2*c*hl*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/ll,e=function(t){var n=t*r,e=yn(g),u=a/(hl*d)*(e*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(ll*n+g)-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+u*s,o+u*l,a*e/yn(ll*n+g)]}}return e.duration=1e3*r,e}function bn(t){return function(n,e){var r=t((n=qt(n)).h,(e=qt(e)).h),i=an(n.s,e.s),o=an(n.l,e.l),a=an(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}function mn(t){return function(n,e){var r=t((n=$t(n)).h,(e=$t(e)).h),i=an(n.c,e.c),o=an(n.l,e.l),a=an(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}function xn(t){return function n(e){function r(n,r){var i=t((n=Zt(n)).h,(r=Zt(r)).h),o=an(n.s,r.s),a=an(n.l,r.l),u=an(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}function wn(){return Nl||(kl(Mn),Nl=El.now()+Sl)}function Mn(){Nl=0}function An(){this._call=this._time=this._next=null}function Tn(t,n,e){var r=new An;return r.restart(t,n,e),r}function Nn(){wn(),++xl;for(var t,n=tl;n;)(t=Nl-n._time)>=0&&n._call.call(null,t),n=n._next;--xl}function Sn(){Nl=(Tl=El.now())+Sl,xl=wl=0;try{Nn()}finally{xl=0,function(){var t,n,e=tl,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:tl=n);nl=t,kn(r)}(),Nl=0}}function En(){var t=El.now(),n=t-Tl;n>Al&&(Sl-=n,Tl=t)}function kn(t){if(!xl){wl&&(wl=clearTimeout(wl));t-Nl>24?(t<1/0&&(wl=setTimeout(Sn,t-El.now()-Sl)),Ml&&(Ml=clearInterval(Ml))):(Ml||(Tl=El.now(),Ml=setInterval(En,Al)),xl=1,kl(Sn))}}function Cn(t,n,e){var r=new An;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}function Pn(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};(function(t,n,e){function r(f){var c,s,l,h;if(e.state!==Rl)return o();for(c in u)if((h=u[c]).name===e.name){if(h.state===Dl)return Cn(r);h.state===Ul?(h.state=Ol,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete u[c]):+c<n&&(h.state=Ol,h.timer.stop(),delete u[c])}if(Cn(function(){e.state===Dl&&(e.state=Ul,e.timer.restart(i,e.delay,e.time),i(f))}),e.state=Ll,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Ll){for(e.state=Dl,a=new Array(l=e.tween.length),c=0,s=-1;c<l;++c)(h=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(a[++s]=h);a.length=s+1}}function i(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(o),e.state=ql,1),i=-1,u=a.length;++i<u;)a[i].call(null,r);e.state===ql&&(e.on.call("end",t,t.__data__,e.index,e.group),o())}function o(){e.state=Ol,e.timer.stop(),delete u[n];for(var r in u)return;delete t.__transition}var a,u=t.__transition;u[n]=e,e.timer=Tn(function(t){e.state=Rl,e.timer.restart(r,e.delay,e.time),e.delay<=t&&r(t-e.delay)},0,e.time)})(t,e,{name:n,index:r,group:i,on:Cl,tween:Pl,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:zl})}function zn(t,n){var e=Ln(t,n);if(e.state>zl)throw new Error("too late; already scheduled");return e}function Rn(t,n){var e=Ln(t,n);if(e.state>Ll)throw new Error("too late; already started");return e}function Ln(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Dn(t,n){var e,r,i,o=t.__transition,a=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>Ll&&e.state<ql,e.state=Ol,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function Un(t,n,e){var r=t._id;return t.each(function(){var t=Rn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Ln(t,r).value[n]}}function qn(t,n){var e;return("number"==typeof n?sn:n instanceof kt?el:(e=kt(n))?(n=e,el):hn)(t,n)}function On(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Yn(t){return ft().transition(t)}function Bn(){return++Bl}function Fn(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function In(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function jn(t){return(1-Math.cos(Xl*t))/2}function Hn(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Xn(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function Gn(t){return(t=+t)<Vl?eh*t*t:t<Wl?eh*(t-=$l)*t+Zl:t<Jl?eh*(t-=Ql)*t+Kl:eh*(t-=th)*t+nh}function Vn(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return sh.time=wn(),sh;return e}function $n(t){return function(){return t}}function Wn(){t.event.stopImmediatePropagation()}function Zn(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Qn(t){return{type:t}}function Jn(){return!t.event.button}function Kn(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function te(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function ne(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function ee(n){function e(t){var e=t.property("__brush",u).selectAll(".overlay").data([Qn("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",bh.overlay).merge(e).each(function(){var t=te(this).extent;ct(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Qn("selection")]).enter().append("rect").attr("class","selection").attr("cursor",bh.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return bh[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",a)}function r(){var t=ct(this),n=te(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function a(){function e(){var t=pt(w);!L||m||x||(Math.abs(t[0]-U[0])>Math.abs(t[1]-U[1])?x=!0:m=!0),U=t,b=!0,Zn(),o()}function o(){var t;switch(y=U[0]-D[0],_=U[1]-D[1],A){case dh:case hh:T&&(y=Math.max(C-u,Math.min(z-d,y)),c=u+y,p=d+y),N&&(_=Math.max(P-l,Math.min(R-v,_)),h=l+_,g=v+_);break;case ph:T<0?(y=Math.max(C-u,Math.min(z-u,y)),c=u+y,p=d):T>0&&(y=Math.max(C-d,Math.min(z-d,y)),c=u,p=d+y),N<0?(_=Math.max(P-l,Math.min(R-l,_)),h=l+_,g=v):N>0&&(_=Math.max(P-v,Math.min(R-v,_)),h=l,g=v+_);break;case vh:T&&(c=Math.max(C,Math.min(z,u-y*T)),p=Math.max(C,Math.min(z,d+y*T))),N&&(h=Math.max(P,Math.min(R,l-_*N)),g=Math.max(P,Math.min(R,v+_*N)))}p<c&&(T*=-1,t=u,u=d,d=t,t=c,c=p,p=t,M in mh&&Y.attr("cursor",bh[M=mh[M]])),g<h&&(N*=-1,t=l,l=v,v=t,t=h,h=g,g=t,M in xh&&Y.attr("cursor",bh[M=xh[M]])),S.selection&&(k=S.selection),m&&(c=k[0][0],p=k[1][0]),x&&(h=k[0][1],g=k[1][1]),k[0][0]===c&&k[0][1]===h&&k[1][0]===p&&k[1][1]===g||(S.selection=[[c,h],[p,g]],r.call(w),q.brush())}function a(){if(Wn(),t.event.touches){if(t.event.touches.length)return;f&&clearTimeout(f),f=setTimeout(function(){f=null},500),O.on("touchmove.brush touchend.brush touchcancel.brush",null)}else bt(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),Y.attr("cursor",bh.overlay),S.selection&&(k=S.selection),ne(k)&&(S.selection=null,r.call(w)),q.end()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return Zn()}else if(f)return;if(s.apply(this,arguments)){var u,c,l,h,d,p,v,g,y,_,b,m,x,w=this,M=t.event.target.__data__.type,A="selection"===(t.event.metaKey?M="overlay":M)?hh:t.event.altKey?vh:ph,T=n===yh?null:wh[M],N=n===gh?null:Mh[M],S=te(w),E=S.extent,k=S.selection,C=E[0][0],P=E[0][1],z=E[1][0],R=E[1][1],L=T&&N&&t.event.shiftKey,D=pt(w),U=D,q=i(w,arguments).beforestart();"overlay"===M?S.selection=k=[[u=n===yh?C:D[0],l=n===gh?P:D[1]],[d=n===yh?z:u,v=n===gh?R:l]]:(u=k[0][0],l=k[0][1],d=k[1][0],v=k[1][1]),c=u,h=l,p=d,g=v;var O=ct(w).attr("pointer-events","none"),Y=O.selectAll(".overlay").attr("cursor",bh[M]);if(t.event.touches)O.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",a,!0);else{var B=ct(t.event.view).on("keydown.brush",function(){switch(t.event.keyCode){case 16:L=T&&N;break;case 18:A===ph&&(T&&(d=p-y*T,u=c+y*T),N&&(v=g-_*N,l=h+_*N),A=vh,o());break;case 32:A!==ph&&A!==vh||(T<0?d=p-y:T>0&&(u=c-y),N<0?v=g-_:N>0&&(l=h-_),A=dh,Y.attr("cursor",bh.selection),o());break;default:return}Zn()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:L&&(m=x=L=!1,o());break;case 18:A===vh&&(T<0?d=p:T>0&&(u=c),N<0?v=g:N>0&&(l=h),A=ph,o());break;case 32:A===dh&&(t.event.altKey?(T&&(d=p-y*T,u=c+y*T),N&&(v=g-_*N,l=h+_*N),A=vh):(T<0?d=p:T>0&&(u=c),N<0?v=g:N>0&&(l=h),A=ph),Y.attr("cursor",bh[M]),o());break;default:return}Zn()},!0).on("mousemove.brush",e,!0).on("mouseup.brush",a,!0);_t(t.event.view)}Wn(),Dn(w),r.call(w),q.start()}}function u(){var t=this.__brush||{selection:null};return t.extent=c.apply(this,arguments),t.dim=n,t}var f,c=Kn,s=Jn,l=N(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){a.selection=1===t&&ne(c)?null:s(t),r.call(o),u.brush()}var o=this,a=o.__brush,u=i(o,arguments),f=a.selection,c=n.input("function"==typeof e?e.apply(this,arguments):e,a.extent),s=dn(f,c);return f&&c?t:t(1)}):t.each(function(){var t=arguments,o=this.__brush,a=n.input("function"==typeof e?e.apply(this,t):e,o.extent),u=i(this,t).beforestart();Dn(this),o.selection=null==a||ne(a)?null:a,r.call(this),u.start().brush().end()})},o.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){ot(new function(t,n,e){this.target=t,this.type=n,this.selection=e}(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(c="function"==typeof t?t:$n([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):c},e.filter=function(t){return arguments.length?(s="function"==typeof t?t:$n(!!t),e):s},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function re(t){return function(){return t}}function ie(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function oe(){return new ie}function ae(t){return t.source}function ue(t){return t.target}function fe(t){return t.radius}function ce(t){return t.startAngle}function se(t){return t.endAngle}function le(){}function he(t,n){var e=new le;if(t instanceof le)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function de(){return{}}function pe(t,n,e){t[n]=e}function ve(){return he()}function ge(t,n,e){t.set(n,e)}function ye(){}function _e(t,n){var e=new ye;if(t instanceof ye)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function be(t,n){return t-n}function me(t){return function(){return t}}function xe(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=function(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var f=t[o],c=f[0],s=f[1],l=t[u],h=l[0],d=l[1];if(function(t,n,e){var r;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&function(t,n,e){return t<=n&&n<=e||e<=n&&n<=t}(t[r=+(t[0]===n[0])],e[r],n[r])}(f,l,n))return 0;s>r!=d>r&&e<(h-c)*(r-s)/(d-s)+c&&(i=-i)}return i}(t,n[r]))return e;return 0}function we(){}function Me(){function t(t){var e=a(t);if(Array.isArray(e))e=e.slice().sort(be);else{var r=u(t),i=r[0],o=r[1];e=d(i,o,e),e=s(Math.floor(i/e)*e,Math.floor(o/e)*e,e)}return e.map(function(e){return n(t,e)})}function n(t,n){var r=[],a=[];return function(t,n,r){function a(t){var n,i,o=[t[0][0]+u,t[0][1]+f],a=[t[1][0]+u,t[1][1]+f],c=e(o),s=e(a);(n=p[c])?(i=d[s])?(delete p[n.end],delete d[i.start],n===i?(n.ring.push(a),r(n.ring)):d[n.start]=p[i.end]={start:n.start,end:i.end,ring:n.ring.concat(i.ring)}):(delete p[n.end],n.ring.push(a),p[n.end=s]=n):(n=d[s])?(i=p[c])?(delete d[n.start],delete p[i.end],n===i?(n.ring.push(a),r(n.ring)):d[i.start]=p[n.end]={start:i.start,end:n.end,ring:i.ring.concat(n.ring)}):(delete d[n.start],n.ring.unshift(o),d[n.start=c]=n):d[c]=p[s]={start:c,end:s,ring:[o,a]}}var u,f,c,s,l,h,d=new Array,p=new Array;u=f=-1,s=t[0]>=n,Uh[s<<1].forEach(a);for(;++u<i-1;)c=s,s=t[u+1]>=n,Uh[c|s<<1].forEach(a);Uh[s<<0].forEach(a);for(;++f<o-1;){for(u=-1,s=t[f*i+i]>=n,l=t[f*i]>=n,Uh[s<<1|l<<2].forEach(a);++u<i-1;)c=s,s=t[f*i+i+u+1]>=n,h=l,l=t[f*i+u+1]>=n,Uh[c|s<<1|l<<2|h<<3].forEach(a);Uh[s|l<<3].forEach(a)}u=-1,l=t[f*i]>=n,Uh[l<<2].forEach(a);for(;++u<i-1;)h=l,l=t[f*i+u+1]>=n,Uh[l<<2|h<<3].forEach(a);Uh[l<<3].forEach(a)}(t,n,function(e){f(e,t,n),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(e)>0?r.push([e]):a.push(e)}),a.forEach(function(t){for(var n,e=0,i=r.length;e<i;++e)if(-1!==xe((n=r[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:n,coordinates:r}}function e(t){return 2*t[0]+t[1]*(i+1)*4}function r(t,n,e){t.forEach(function(t){var r,a=t[0],u=t[1],f=0|a,c=0|u,s=n[c*i+f];a>0&&a<i&&f===a&&(r=n[c*i+f-1],t[0]=a+(e-r)/(s-r)-.5),u>0&&u<o&&c===u&&(r=n[(c-1)*i+f],t[1]=u+(e-r)/(s-r)-.5)})}var i=1,o=1,a=p,f=r;return t.contour=n,t.size=function(n){if(!arguments.length)return[i,o];var e=Math.ceil(n[0]),r=Math.ceil(n[1]);if(!(e>0&&r>0))throw new Error("invalid size");return i=e,o=r,t},t.thresholds=function(n){return arguments.length?(a="function"==typeof n?n:Array.isArray(n)?me(Dh.call(n)):me(n),t):a},t.smooth=function(n){return arguments.length?(f=n?r:we,t):f===r},t}function Ae(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,f=0;u<r+e;++u)u<r&&(f+=t.data[u+a*r]),u>=e&&(u>=o&&(f-=t.data[u-o+a*r]),n.data[u-e+a*r]=f/Math.min(u+1,r-1+o-u,o))}function Te(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,f=0;u<i+e;++u)u<i&&(f+=t.data[a+u*r]),u>=e&&(u>=o&&(f-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=f/Math.min(u+1,i-1+o-u,o))}function Ne(t){return t[0]}function Se(t){return t[1]}function Ee(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function ke(t){function n(t,n){function e(){if(c)return Oh;if(s)return s=!1,qh;var n,e,r=u;if(t.charCodeAt(r)===Yh){for(;u++<a&&t.charCodeAt(u)!==Yh||t.charCodeAt(++u)===Yh;);return(n=u)>=a?c=!0:(e=t.charCodeAt(u++))===Bh?s=!0:e===Fh&&(s=!0,t.charCodeAt(u)===Bh&&++u),t.slice(r+1,n-1).replace(/""/g,'"')}for(;u<a;){if((e=t.charCodeAt(n=u++))===Bh)s=!0;else if(e===Fh)s=!0,t.charCodeAt(u)===Bh&&++u;else if(e!==o)continue;return t.slice(r,n)}return c=!0,t.slice(r,a)}var r,i=[],a=t.length,u=0,f=0,c=a<=0,s=!1;for(t.charCodeAt(a-1)===Bh&&--a,t.charCodeAt(a-1)===Fh&&--a;(r=e())!==Oh;){for(var l=[];r!==qh&&r!==Oh;)l.push(r),r=e();n&&null==(l=n(l,f++))||i.push(l)}return i}function e(n){return n.map(r).join(t)}function r(t){return null==t?"":i.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}var i=new RegExp('["'+t+"\n\r]"),o=t.charCodeAt(0);return{parse:function(t,e){var r,i,o=n(t,function(t,n){if(r)return r(t,n-1);i=t,r=e?function(t,n){var e=Ee(t);return function(r,i){return n(e(r),i,t)}}(t,e):Ee(t)});return o.columns=i||[],o},parseRows:n,format:function(n,e){return null==e&&(e=function(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}(n)),[e.map(r).join(t)].concat(n.map(function(n){return e.map(function(t){return r(n[t])}).join(t)})).join("\n")},formatRows:function(t){return t.map(e).join("\n")}}}function Ce(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function Pe(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function ze(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function Re(t,n){return fetch(t,n).then(ze)}function Le(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),Re(n,e).then(function(n){return t(n,r)})}}function De(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function Ue(t){return function(n,e){return Re(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}function qe(t){return function(){return t}}function Oe(){return 1e-6*(Math.random()-.5)}function Ye(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,f,c,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((c=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|c]))return i[l]=p,t;if(u=+t._x.call(null,d.data),f=+t._y.call(null,d.data),n===u&&e===f)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(c=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|c)==(h=(f>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function Be(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function Fe(t){return t[0]}function Ie(t){return t[1]}function je(t,n,e){var r=new He(null==n?Fe:n,null==e?Ie:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function He(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Xe(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function Ge(t){return t.x+t.vx}function Ve(t){return t.y+t.vy}function $e(t){return t.index}function We(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function Ze(t){return t.x}function Qe(t){return t.y}function Je(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function Ke(t){return(t=Je(Math.abs(t)))?t[1]:NaN}function tr(t){return new nr(t)}function nr(t){if(!(n=ad.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}function er(t,n){var e=Je(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}function rr(t){return t}function ir(t){function n(t){function n(t){var n,r,a,s=y,x=_;if("c"===g)x=b(t)+x,t="";else{var w=(t=+t)<0;if(t=b(Math.abs(t),p),v&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(i>0){if(!+t[r])break t;i=0}}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),w&&0==+t&&(w=!1),s=(w?"("===c?c:"-":"-"===c||"("===c?"":c)+s,x=("s"===g?sd[8+ud/3]:"")+x+(w&&"("===c?")":""),m)for(n=-1,r=t.length;++n<r;)if(48>(a=t.charCodeAt(n))||a>57){x=(46===a?i+t.slice(n+1):t.slice(n))+x,t=t.slice(0,n);break}}d&&!l&&(t=e(t,1/0));var M=s.length+t.length+x.length,A=M<h?new Array(h-M+1).join(u):"";switch(d&&l&&(t=e(A+t,A.length?h-x.length:1/0),A=""),f){case"<":t=s+t+x+A;break;case"=":t=s+A+t+x;break;case"^":t=A.slice(0,M=A.length>>1)+s+t+x+A.slice(M);break;default:t=A+s+t+x}return o(t)}var u=(t=tr(t)).fill,f=t.align,c=t.sign,s=t.symbol,l=t.zero,h=t.width,d=t.comma,p=t.precision,v=t.trim,g=t.type;"n"===g?(d=!0,g="g"):cd[g]||(null==p&&(p=12),v=!0,g="g"),(l||"0"===u&&"="===f)&&(l=!0,u="0",f="=");var y="$"===s?r[0]:"#"===s&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",_="$"===s?r[1]:/[%p]/.test(g)?a:"",b=cd[g],m=/[defgprs%]/.test(g);return p=null==p?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),n.toString=function(){return t+""},n}var e=t.grouping&&t.thousands?function(t,n){return function(e,r){for(var i=e.length,o=[],a=0,u=t[0],f=0;i>0&&u>0&&(f+u+1>r&&(u=Math.max(1,r-f)),o.push(e.substring(i-=u,i+u)),!((f+=u+1)>r));)u=t[a=(a+1)%t.length];return o.reverse().join(n)}}(t.grouping,t.thousands):rr,r=t.currency,i=t.decimal,o=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):rr,a=t.percent||"%";return{format:n,formatPrefix:function(t,e){var r=n((t=tr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Ke(e)/3))),o=Math.pow(10,-i),a=sd[8+i/3];return function(t){return r(o*t)+a}}}}function or(n){return fd=ir(n),t.format=fd.format,t.formatPrefix=fd.formatPrefix,fd}function ar(t){return Math.max(0,-Ke(Math.abs(t)))}function ur(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Ke(n)/3)))-Ke(Math.abs(t)))}function fr(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Ke(n)-Ke(t))+1}function cr(){return new sr}function sr(){this.reset()}function lr(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function hr(t){return t>1?0:t<-1?Xd:Math.acos(t)}function dr(t){return t>1?Gd:t<-1?-Gd:Math.asin(t)}function pr(t){return(t=op(t/2))*t}function vr(){}function gr(t,n){t&&sp.hasOwnProperty(t.type)&&sp[t.type](t,n)}function yr(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function _r(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)yr(t[e],n,1);n.polygonEnd()}function br(t,n){t&&cp.hasOwnProperty(t.type)?cp[t.type](t,n):gr(t,n)}function mr(){dp.point=wr}function xr(){Mr(ld,hd)}function wr(t,n){dp.point=Mr,ld=t,hd=n,dd=t*=Zd,pd=tp(n=(n*=Zd)/2+Vd),vd=op(n)}function Mr(t,n){n=(n*=Zd)/2+Vd;var e=(t*=Zd)-dd,r=e>=0?1:-1,i=r*e,o=tp(n),a=op(n),u=vd*a,f=pd*o+u*tp(i),c=u*r*op(i);lp.add(Kd(c,f)),dd=t,pd=o,vd=a}function Ar(t){return[Kd(t[1],t[0]),dr(t[2])]}function Tr(t){var n=t[0],e=t[1],r=tp(e);return[r*tp(n),r*op(n),op(e)]}function Nr(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Sr(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Er(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function kr(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Cr(t){var n=up(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function Pr(t,n){Ad.push(Td=[gd=t,_d=t]),n<yd&&(yd=n),n>bd&&(bd=n)}function zr(t,n){var e=Tr([t*Zd,n*Zd]);if(Md){var r=Sr(Md,e),i=Sr([r[1],-r[0],0],r);Cr(i),i=Ar(i);var o,a=t-md,u=a>0?1:-1,f=i[0]*Wd*u,c=Qd(a)>180;c^(u*md<f&&f<u*t)?(o=i[1]*Wd)>bd&&(bd=o):(f=(f+360)%360-180,c^(u*md<f&&f<u*t)?(o=-i[1]*Wd)<yd&&(yd=o):(n<yd&&(yd=n),n>bd&&(bd=n))),c?t<md?Or(gd,t)>Or(gd,_d)&&(_d=t):Or(t,_d)>Or(gd,_d)&&(gd=t):_d>=gd?(t<gd&&(gd=t),t>_d&&(_d=t)):t>md?Or(gd,t)>Or(gd,_d)&&(_d=t):Or(t,_d)>Or(gd,_d)&&(gd=t)}else Ad.push(Td=[gd=t,_d=t]);n<yd&&(yd=n),n>bd&&(bd=n),Md=e,md=t}function Rr(){vp.point=zr}function Lr(){Td[0]=gd,Td[1]=_d,vp.point=Pr,Md=null}function Dr(t,n){if(Md){var e=t-md;pp.add(Qd(e)>180?e+(e>0?360:-360):e)}else xd=t,wd=n;dp.point(t,n),zr(t,n)}function Ur(){dp.lineStart()}function qr(){Dr(xd,wd),dp.lineEnd(),Qd(pp)>jd&&(gd=-(_d=180)),Td[0]=gd,Td[1]=_d,Md=null}function Or(t,n){return(n-=t)<0?n+360:n}function Yr(t,n){return t[0]-n[0]}function Br(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function Fr(t,n){t*=Zd;var e=tp(n*=Zd);Ir(e*tp(t),e*op(t),op(n))}function Ir(t,n,e){Ed+=(t-Ed)/++Nd,kd+=(n-kd)/Nd,Cd+=(e-Cd)/Nd}function jr(){gp.point=Hr}function Hr(t,n){t*=Zd;var e=tp(n*=Zd);Yd=e*tp(t),Bd=e*op(t),Fd=op(n),gp.point=Xr,Ir(Yd,Bd,Fd)}function Xr(t,n){t*=Zd;var e=tp(n*=Zd),r=e*tp(t),i=e*op(t),o=op(n),a=Kd(up((a=Bd*o-Fd*i)*a+(a=Fd*r-Yd*o)*a+(a=Yd*i-Bd*r)*a),Yd*r+Bd*i+Fd*o);Sd+=a,Pd+=a*(Yd+(Yd=r)),zd+=a*(Bd+(Bd=i)),Rd+=a*(Fd+(Fd=o)),Ir(Yd,Bd,Fd)}function Gr(){gp.point=Fr}function Vr(){gp.point=Wr}function $r(){Zr(qd,Od),gp.point=Fr}function Wr(t,n){qd=t,Od=n,t*=Zd,n*=Zd,gp.point=Zr;var e=tp(n);Yd=e*tp(t),Bd=e*op(t),Fd=op(n),Ir(Yd,Bd,Fd)}function Zr(t,n){t*=Zd;var e=tp(n*=Zd),r=e*tp(t),i=e*op(t),o=op(n),a=Bd*o-Fd*i,u=Fd*r-Yd*o,f=Yd*i-Bd*r,c=up(a*a+u*u+f*f),s=dr(c),l=c&&-s/c;Ld+=l*a,Dd+=l*u,Ud+=l*f,Sd+=s,Pd+=s*(Yd+(Yd=r)),zd+=s*(Bd+(Bd=i)),Rd+=s*(Fd+(Fd=o)),Ir(Yd,Bd,Fd)}function Qr(t){return function(){return t}}function Jr(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Kr(t,n){return[t>Xd?t-$d:t<-Xd?t+$d:t,n]}function ti(t,n,e){return(t%=$d)?n||e?Jr(ei(t),ri(n,e)):ei(t):n||e?ri(n,e):Kr}function ni(t){return function(n,e){return n+=t,[n>Xd?n-$d:n<-Xd?n+$d:n,e]}}function ei(t){var n=ni(t);return n.invert=ni(-t),n}function ri(t,n){function e(t,n){var e=tp(n),u=tp(t)*e,f=op(t)*e,c=op(n),s=c*r+u*i;return[Kd(f*o-s*a,u*r-c*i),dr(s*o+f*a)]}var r=tp(t),i=op(t),o=tp(n),a=op(n);return e.invert=function(t,n){var e=tp(n),u=tp(t)*e,f=op(t)*e,c=op(n),s=c*o-f*a;return[Kd(f*o+c*a,u*r+s*i),dr(s*r-u*i)]},e}function ii(t){function n(n){return n=t(n[0]*Zd,n[1]*Zd),n[0]*=Wd,n[1]*=Wd,n}return t=ti(t[0]*Zd,t[1]*Zd,t.length>2?t[2]*Zd:0),n.invert=function(n){return n=t.invert(n[0]*Zd,n[1]*Zd),n[0]*=Wd,n[1]*=Wd,n},n}function oi(t,n,e,r,i,o){if(e){var a=tp(n),u=op(n),f=r*e;null==i?(i=n+r*$d,o=n-f/2):(i=ai(a,i),o=ai(a,o),(r>0?i<o:i>o)&&(i+=r*$d));for(var c,s=i;r>0?s>o:s<o;s-=f)c=Ar([a,-u*tp(s),-u*op(s)]),t.point(c[0],c[1])}}function ai(t,n){(n=Tr(n))[0]-=t,Cr(n);var e=hr(-n[1]);return((-n[2]<0?-e:e)+$d-jd)%$d}function ui(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:vr,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function fi(t,n){return Qd(t[0]-n[0])<jd&&Qd(t[1]-n[1])<jd}function ci(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function si(t,n,e,r,i){var o,a,u=[],f=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(fi(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new ci(r,t,null,!0)),f.push(e.o=new ci(r,null,e,!1)),u.push(e=new ci(a,t,null,!1)),f.push(e.o=new ci(a,null,e,!0))}}),u.length){for(f.sort(n),li(u),li(f),o=0,a=f.length;o<a;++o)f[o].e=e=!e;for(var c,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;c=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=c.length;o<a;++o)i.point((s=c[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((s=c[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}c=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function li(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function hi(t,n){var e=n[0],r=n[1],i=op(r),o=[op(e),-tp(e),0],a=0,u=0;Ep.reset(),1===i?r=Gd+jd:-1===i&&(r=-Gd-jd);for(var f=0,c=t.length;f<c;++f)if(l=(s=t[f]).length)for(var s,l,h=s[l-1],d=h[0],p=h[1]/2+Vd,v=op(p),g=tp(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=_[0],m=_[1]/2+Vd,x=op(m),w=tp(m),M=b-d,A=M>=0?1:-1,T=A*M,N=T>Xd,S=v*x;if(Ep.add(Kd(S*A*op(T),g*w+S*tp(T))),a+=N?M+A*$d:M,N^d>=e^b>=e){var E=Sr(Tr(h),Tr(_));Cr(E);var k=Sr(o,E);Cr(k);var C=(N^M>=0?-1:1)*dr(k[2]);(r>C||r===C&&(E[0]||E[1]))&&(u+=N^M>=0?1:-1)}}return(a<-jd||a<jd&&Ep<-jd)^1&u}function di(t,n,e,r){return function(i){function o(n,e){t(n,e)&&i.point(n,e)}function a(t,n){v.point(t,n)}function u(){m.point=a,v.lineStart()}function f(){m.point=o,v.lineEnd()}function c(t,n){p.push([t,n]),_.point(t,n)}function s(){_.lineStart(),p=[]}function l(){c(p[0][0],p[0][1]),_.lineEnd();var t,n,e,r,o=_.clean(),a=g.result(),u=a.length;if(p.pop(),h.push(p),p=null,u)if(1&o){if(e=a[0],(n=e.length-1)>0){for(b||(i.polygonStart(),b=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else u>1&&2&o&&a.push(a.pop().concat(a.shift())),d.push(a.filter(pi))}var h,d,p,v=n(i),g=ui(),_=n(g),b=!1,m={point:o,lineStart:u,lineEnd:f,polygonStart:function(){m.point=c,m.lineStart=s,m.lineEnd=l,d=[],h=[]},polygonEnd:function(){m.point=o,m.lineStart=u,m.lineEnd=f,d=y(d);var t=hi(h,r);d.length?(b||(i.polygonStart(),b=!0),si(d,vi,t,e,i)):t&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),d=h=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};return m}}function pi(t){return t.length>1}function vi(t,n){return((t=t.x)[0]<0?t[1]-Gd-jd:Gd-t[1])-((n=n.x)[0]<0?n[1]-Gd-jd:Gd-n[1])}function gi(t){function n(t,n){return tp(t)*tp(n)>i}function e(t,n,e){var r=[1,0,0],o=Sr(Tr(t),Tr(n)),a=Nr(o,o),u=o[0],f=a-u*u;if(!f)return!e&&t;var c=i*a/f,s=-i*u/f,l=Sr(r,o),h=kr(r,c);Er(h,kr(o,s));var d=l,p=Nr(h,d),v=Nr(d,d),g=p*p-v*(Nr(h,h)-1);if(!(g<0)){var y=up(g),_=kr(d,(-p-y)/v);if(Er(_,h),_=Ar(_),!e)return _;var b,m=t[0],x=n[0],w=t[1],M=n[1];x<m&&(b=m,m=x,x=b);var A=x-m,T=Qd(A-Xd)<jd;if(!T&&M<w&&(b=w,w=M,M=b),T||A<jd?T?w+M>0^_[1]<(Qd(_[0]-m)<jd?w:M):w<=_[1]&&_[1]<=M:A>Xd^(m<=_[0]&&_[0]<=x)){var N=kr(d,(-p+y)/v);return Er(N,h),[_,Ar(N)]}}}function r(n,e){var r=a?t:Xd-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var i=tp(t),o=6*Zd,a=i>0,u=Qd(i)>jd;return di(n,function(t){var i,o,f,c,s;return{lineStart:function(){c=f=!1,s=1},point:function(l,h){var d,p=[l,h],v=n(l,h),g=a?v?0:r(l,h):v?r(l+(l<0?Xd:-Xd),h):0;if(!i&&(c=f=v)&&t.lineStart(),v!==f&&(!(d=e(i,p))||fi(i,d)||fi(p,d))&&(p[0]+=jd,p[1]+=jd,v=n(p[0],p[1])),v!==f)s=0,v?(t.lineStart(),d=e(p,i),t.point(d[0],d[1])):(d=e(i,p),t.point(d[0],d[1]),t.lineEnd()),i=d;else if(u&&i&&a^v){var y;g&o||!(y=e(p,i,!0))||(s=0,a?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||i&&fi(i,p)||t.point(p[0],p[1]),i=p,f=v,o=g},lineEnd:function(){f&&t.lineEnd(),i=null},clean:function(){return s|(c&&f)<<1}}},function(n,e,r,i){oi(i,t,o,r,n,e)},a?[0,-t]:[-Xd,t-Xd])}function yi(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,c){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||f(i,o)<0^u>0)do{c.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else c.point(o[0],o[1])}function a(r,i){return Qd(r[0]-t)<jd?i>0?0:3:Qd(r[0]-e)<jd?i>0?2:1:Qd(r[1]-n)<jd?i>0?1:0:i>0?3:2}function u(t,n){return f(t.x,n.x)}function f(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){function f(t,n){i(t,n)&&w.point(t,n)}function c(o,a){var u=i(o,a);if(l&&h.push([o,a]),m)d=o,p=a,v=u,m=!1,u&&(w.lineStart(),w.point(o,a));else if(u&&b)w.point(o,a);else{var f=[g=Math.max(Pp,Math.min(Cp,g)),_=Math.max(Pp,Math.min(Cp,_))],c=[o=Math.max(Pp,Math.min(Cp,o)),a=Math.max(Pp,Math.min(Cp,a))];!function(t,n,e,r,i,o){var a,u=t[0],f=t[1],c=0,s=1,l=n[0]-u,h=n[1]-f;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<c)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>c&&(c=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>c&&(c=a)}else if(l>0){if(a<c)return;a<s&&(s=a)}if(a=r-f,h||!(a>0)){if(a/=h,h<0){if(a<c)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>c&&(c=a)}if(a=o-f,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>c&&(c=a)}else if(h>0){if(a<c)return;a<s&&(s=a)}return c>0&&(t[0]=u+c*l,t[1]=f+c*h),s<1&&(n[0]=u+s*l,n[1]=f+s*h),!0}}}}}(f,c,t,n,e,r)?u&&(w.lineStart(),w.point(o,a),x=!1):(b||(w.lineStart(),w.point(f[0],f[1])),w.point(c[0],c[1]),u||w.lineEnd(),x=!1)}g=o,_=a,b=u}var s,l,h,d,p,v,g,_,b,m,x,w=a,M=ui(),A={point:f,lineStart:function(){A.point=c,l&&l.push(h=[]),m=!0,b=!1,g=_=NaN},lineEnd:function(){s&&(c(d,p),v&&b&&M.rejoin(),s.push(M.result())),A.point=f,b&&w.lineEnd()},polygonStart:function(){w=M,s=[],l=[],x=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=l.length;e<i;++e)for(var o,a,u=l[e],f=1,c=u.length,s=u[0],h=s[0],d=s[1];f<c;++f)o=h,a=d,h=(s=u[f])[0],d=s[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=x&&n,i=(s=y(s)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&si(s,u,n,o,a),a.polygonEnd()),w=a,s=l=h=null}};return A}}function _i(){Rp.point=Rp.lineEnd=vr}function bi(t,n){yp=t*=Zd,_p=op(n*=Zd),bp=tp(n),Rp.point=mi}function mi(t,n){t*=Zd;var e=op(n*=Zd),r=tp(n),i=Qd(t-yp),o=tp(i),a=r*op(i),u=bp*e-_p*r*o,f=_p*e+bp*r*o;zp.add(Kd(up(a*a+u*u),f)),yp=t,_p=e,bp=r}function xi(t){return zp.reset(),br(t,Rp),+zp}function wi(t,n){return Lp[0]=t,Lp[1]=n,xi(Dp)}function Mi(t,n){return!(!t||!qp.hasOwnProperty(t.type))&&qp[t.type](t,n)}function Ai(t,n){return 0===wi(t,n)}function Ti(t,n){var e=wi(t[0],t[1]);return wi(t[0],n)+wi(n,t[1])<=e+jd}function Ni(t,n){return!!hi(t.map(Si),Ei(n))}function Si(t){return(t=t.map(Ei)).pop(),t}function Ei(t){return[t[0]*Zd,t[1]*Zd]}function ki(t,n,e){var r=s(t,n-jd,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Ci(t,n,e){var r=s(t,n-jd,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Pi(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return s(np(o/y)*y,i,y).map(d).concat(s(np(c/_)*_,f,_).map(p)).concat(s(np(r/v)*v,e,v).filter(function(t){return Qd(t%y)>jd}).map(l)).concat(s(np(u/g)*g,a,g).filter(function(t){return Qd(t%_)>jd}).map(h))}var e,r,i,o,a,u,f,c,l,h,d,p,v=10,g=v,y=90,_=360,b=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[d(o).concat(p(f).slice(1),d(i).reverse().slice(1),p(c).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],c=+n[0][1],f=+n[1][1],o>i&&(n=o,o=i,i=n),c>f&&(n=c,c=f,f=n),t.precision(b)):[[o,c],[i,f]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],u=+n[0][1],a=+n[1][1],r>e&&(n=r,r=e,e=n),u>a&&(n=u,u=a,a=n),t.precision(b)):[[r,u],[e,a]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(y=+n[0],_=+n[1],t):[y,_]},t.stepMinor=function(n){return arguments.length?(v=+n[0],g=+n[1],t):[v,g]},t.precision=function(n){return arguments.length?(b=+n,l=ki(u,a,90),h=Ci(r,e,b),d=ki(c,f,90),p=Ci(o,i,b),t):b},t.extentMajor([[-180,-90+jd],[180,90-jd]]).extentMinor([[-180,-80-jd],[180,80+jd]])}function zi(t){return t}function Ri(){Bp.point=Li}function Li(t,n){Bp.point=Di,mp=wp=t,xp=Mp=n}function Di(t,n){Yp.add(Mp*t-wp*n),wp=t,Mp=n}function Ui(){Di(mp,xp)}function qi(t,n){Gp+=t,Vp+=n,++$p}function Oi(){nv.point=Yi}function Yi(t,n){nv.point=Bi,qi(Np=t,Sp=n)}function Bi(t,n){var e=t-Np,r=n-Sp,i=up(e*e+r*r);Wp+=i*(Np+t)/2,Zp+=i*(Sp+n)/2,Qp+=i,qi(Np=t,Sp=n)}function Fi(){nv.point=qi}function Ii(){nv.point=Hi}function ji(){Xi(Ap,Tp)}function Hi(t,n){nv.point=Xi,qi(Ap=Np=t,Tp=Sp=n)}function Xi(t,n){var e=t-Np,r=n-Sp,i=up(e*e+r*r);Wp+=i*(Np+t)/2,Zp+=i*(Sp+n)/2,Qp+=i,Jp+=(i=Sp*t-Np*n)*(Np+t),Kp+=i*(Sp+n),tv+=3*i,qi(Np=t,Sp=n)}function Gi(t){this._context=t}function Vi(t,n){fv.point=$i,rv=ov=t,iv=av=n}function $i(t,n){ov-=t,av-=n,uv.add(up(ov*ov+av*av)),ov=t,av=n}function Wi(){this._string=[]}function Zi(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Qi(t){return function(n){var e=new Ji;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Ji(){}function Ki(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),br(e,t.stream(Xp)),n(Xp.result()),null!=r&&t.clipExtent(r),t}function to(t,n,e){return Ki(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function no(t,n,e){return to(t,[[0,0],n],e)}function eo(t,n,e){return Ki(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function ro(t,n,e){return Ki(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}function io(t,n){return+n?function(t,n){function e(r,i,o,a,u,f,c,s,l,h,d,p,v,g){var y=c-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=f+p,M=up(m*m+x*x+w*w),A=dr(w/=M),T=Qd(Qd(w)-1)<jd||Qd(o-l)<jd?(o+l)/2:Kd(x,m),N=t(T,A),S=N[0],E=N[1],k=S-r,C=E-i,P=_*k-y*C;(P*P/b>n||Qd((y*k+_*C)/b-.5)>.3||a*h+u*d+f*p<sv)&&(e(r,i,o,a,u,f,S,E,T,m/=M,x/=M,w,v,g),g.point(S,E),e(S,E,T,m,x,w,c,s,l,h,d,p,v,g))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){y=NaN,w.point=o,n.lineStart()}function o(r,i){var o=Tr([r,i]),a=t(r,i);e(y,_,g,b,m,x,y=a[0],_=a[1],g=r,b=o[0],m=o[1],x=o[2],cv,n),n.point(y,_)}function a(){w.point=r,n.lineEnd()}function u(){i(),w.point=f,w.lineEnd=c}function f(t,n){o(s=t,n),l=y,h=_,d=b,p=m,v=x,w.point=o}function c(){e(y,_,g,b,m,x,l,h,s,d,p,v,cv,n),w.lineEnd=a,a()}var s,l,h,d,p,v,g,y,_,b,m,x,w={point:r,lineStart:i,lineEnd:a,polygonStart:function(){n.polygonStart(),w.lineStart=u},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}(t,n):function(t){return Qi({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}function oo(t,n,e,r){function i(t,r){return[u*t-f*r+n,e-f*t-u*r]}var o=tp(r),a=op(r),u=o*t,f=a*t,c=o/t,s=a/t,l=(a*e-o*n)/t,h=(a*n+o*e)/t;return i.invert=function(t,n){return[c*t-s*n+l,h-s*t-c*n]},i}function ao(t){return uo(function(){return t})()}function uo(t){function n(t){return l(t[0]*Zd,t[1]*Zd)}function e(){var t=oo(p,0,0,w).apply(null,i(y,_)),n=(w?oo:function(t,n,e){function r(r,i){return[n+t*r,e-t*i]}return r.invert=function(r,i){return[(r-n)/t,(e-i)/t]},r})(p,v-t[0],g-t[1],w);return o=ti(b,m,x),s=Jr(i,n),l=Jr(o,s),c=io(s,S),r()}function r(){return h=d=null,n}var i,o,a,u,f,c,s,l,h,d,p=150,v=480,g=250,y=0,_=0,b=0,m=0,x=0,w=0,M=null,A=kp,T=null,N=zi,S=.5;return n.stream=function(t){return h&&d===t?h:h=lv(function(t){return Qi({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(o)(A(c(N(d=t)))))},n.preclip=function(t){return arguments.length?(A=t,M=void 0,r()):A},n.postclip=function(t){return arguments.length?(N=t,T=a=u=f=null,r()):N},n.clipAngle=function(t){return arguments.length?(A=+t?gi(M=t*Zd):(M=null,kp),r()):M*Wd},n.clipExtent=function(t){return arguments.length?(N=null==t?(T=a=u=f=null,zi):yi(T=+t[0][0],a=+t[0][1],u=+t[1][0],f=+t[1][1]),r()):null==T?null:[[T,a],[u,f]]},n.scale=function(t){return arguments.length?(p=+t,e()):p},n.translate=function(t){return arguments.length?(v=+t[0],g=+t[1],e()):[v,g]},n.center=function(t){return arguments.length?(y=t[0]%360*Zd,_=t[1]%360*Zd,e()):[y*Wd,_*Wd]},n.rotate=function(t){return arguments.length?(b=t[0]%360*Zd,m=t[1]%360*Zd,x=t.length>2?t[2]%360*Zd:0,e()):[b*Wd,m*Wd,x*Wd]},n.angle=function(t){return arguments.length?(w=t%360*Zd,e()):w*Wd},n.precision=function(t){return arguments.length?(c=io(s,S=t*t),r()):up(S)},n.fitExtent=function(t,e){return to(n,t,e)},n.fitSize=function(t,e){return no(n,t,e)},n.fitWidth=function(t,e){return eo(n,t,e)},n.fitHeight=function(t,e){return ro(n,t,e)},function(){return i=t.apply(this,arguments),n.invert=i.invert&&function(t){return(t=l.invert(t[0],t[1]))&&[t[0]*Wd,t[1]*Wd]},e()}}function fo(t){var n=0,e=Xd/3,r=uo(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*Zd,e=t[1]*Zd):[n*Wd,e*Wd]},i}function co(t,n){function e(t,n){var e=up(o-2*i*op(n))/i;return[e*op(t*=i),a-e*tp(t)]}var r=op(t),i=(r+op(n))/2;if(Qd(i)<jd)return function(t){function n(t,n){return[t*e,op(n)/e]}var e=tp(t);return n.invert=function(t,n){return[t/e,dr(n*e)]},n}(t);var o=1+r*(2*i-r),a=up(o)/i;return e.invert=function(t,n){var e=a-n;return[Kd(t,Qd(e))/i*ap(e),dr((o-(t*t+e*e)*i*i)/(2*i))]},e}function so(){return fo(co).scale(155.424).center([0,33.6442])}function lo(){return so().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ho(t){return function(n,e){var r=tp(n),i=tp(e),o=t(r*i);return[o*i*op(n),o*op(e)]}}function po(t){return function(n,e){var r=up(n*n+e*e),i=t(r),o=op(i),a=tp(i);return[Kd(n*o,r*a),dr(r&&e*o/r)]}}function vo(t,n){return[t,rp(fp((Gd+n)/2))]}function go(t){function n(){var n=Xd*u(),a=o(ii(o.rotate()).invert([0,0]));return c(null==s?[[a[0]-n,a[1]-n],[a[0]+n,a[1]+n]]:t===vo?[[Math.max(a[0]-n,s),e],[Math.min(a[0]+n,r),i]]:[[s,Math.max(a[1]-n,e)],[r,Math.min(a[1]+n,i)]])}var e,r,i,o=ao(t),a=o.center,u=o.scale,f=o.translate,c=o.clipExtent,s=null;return o.scale=function(t){return arguments.length?(u(t),n()):u()},o.translate=function(t){return arguments.length?(f(t),n()):f()},o.center=function(t){return arguments.length?(a(t),n()):a()},o.clipExtent=function(t){return arguments.length?(null==t?s=e=r=i=null:(s=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),n()):null==s?null:[[s,e],[r,i]]},n()}function yo(t){return fp((Gd+t)/2)}function _o(t,n){function e(t,n){o>0?n<-Gd+jd&&(n=-Gd+jd):n>Gd-jd&&(n=Gd-jd);var e=o/ip(yo(n),i);return[e*op(i*t),o-e*tp(i*t)]}var r=tp(t),i=t===n?op(t):rp(r/tp(n))/rp(yo(n)/yo(t)),o=r*ip(yo(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=ap(i)*up(t*t+e*e);return[Kd(t,Qd(e))/i*ap(e),2*Jd(ip(o/r,1/i))-Gd]},e):vo}function bo(t,n){return[t,n]}function mo(t,n){function e(t,n){var e=o-n,r=i*t;return[e*op(r),o-e*tp(r)]}var r=tp(t),i=t===n?op(t):(r-tp(n))/(n-t),o=r/i+t;return Qd(i)<jd?bo:(e.invert=function(t,n){var e=o-n;return[Kd(t,Qd(e))/i*ap(e),o-ap(i)*up(t*t+e*e)]},e)}function xo(t,n){var e=tp(n),r=tp(t)*e;return[e*op(t)/r,op(n)/r]}function wo(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?zi:Qi({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function Mo(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function Ao(t,n){return[tp(n)*op(t),op(n)]}function To(t,n){var e=tp(n),r=1+tp(t)*e;return[e*op(t)/r,op(n)/r]}function No(t,n){return[rp(fp((Gd+n)/2)),-t]}function So(t,n){return t.parent===n.parent?1:2}function Eo(t,n){return t+n.x}function ko(t,n){return Math.max(t,n.y)}function Co(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function Po(t,n){var e,r,i,o,a,u=new Do(t),f=+t.value&&(u.value=t.value),c=[u];for(null==n&&(n=zo);e=c.pop();)if(f&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)c.push(r=e.children[o]=new Do(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Lo)}function zo(t){return t.children}function Ro(t){t.data=t.data.data}function Lo(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Do(t){this.data=t,this.depth=this.height=0,this.parent=null}function Uo(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(pv.call(t))).length,o=[];r<i;)n=t[r],e&&Oo(e,n)?++r:(e=function(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return Bo(t[0],t[1]);case 3:return Fo(t[0],t[1],t[2])}}(o=function(t,n){var e,r;if(Yo(n,t))return[n];for(e=0;e<t.length;++e)if(qo(n,t[e])&&Yo(Bo(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(qo(Bo(t[e],t[r]),n)&&qo(Bo(t[e],n),t[r])&&qo(Bo(t[r],n),t[e])&&Yo(Fo(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}(o,n)),r=0);return e}function qo(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function Oo(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Yo(t,n){for(var e=0;e<n.length;++e)if(!Oo(t,n[e]))return!1;return!0}function Bo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,f=o-e,c=a-r,s=u-i,l=Math.sqrt(f*f+c*c);return{x:(e+o+f/l*s)/2,y:(r+a+c/l*s)/2,r:(l+i+u)/2}}function Fo(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,f=n.r,c=e.x,s=e.y,l=e.r,h=r-a,d=r-c,p=i-u,v=i-s,g=f-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+f*f,m=_-c*c-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,A=(d*b-h*m)/(2*x)-i,T=(h*y-d*g)/x,N=M*M+T*T-1,S=2*(o+w*M+A*T),E=w*w+A*A-o*o,k=-(N?(S+Math.sqrt(S*S-4*N*E))/(2*N):E/S);return{x:r+w+M*k,y:i+A+T*k,r:k}}function Io(t,n,e){var r,i,o,a,u=t.x-n.x,f=t.y-n.y,c=u*u+f*f;c?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(c+a-i)/(2*c),o=Math.sqrt(Math.max(0,a/c-r*r)),e.x=t.x-r*u-o*f,e.y=t.y-r*f+o*u):(r=(c+i-a)/(2*c),o=Math.sqrt(Math.max(0,i/c-r*r)),e.x=n.x+r*u-o*f,e.y=n.y+r*f+o*u)):(e.x=n.x+e.r,e.y=n.y)}function jo(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Ho(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Xo(t){this._=t,this.next=null,this.previous=null}function Go(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,f,c,s,l;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Io(e,n,r=t[2]),n=new Xo(n),e=new Xo(e),r=new Xo(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Io(n._,e._,r=t[u]),r=new Xo(r),f=e.next,c=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(jo(f._,r._)){e=f,n.next=e,e.previous=n,--u;continue t}s+=f._.r,f=f.next}else{if(jo(c._,r._)){(n=c).next=e,e.previous=n,--u;continue t}l+=c._.r,c=c.previous}}while(f!==c.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Ho(n);(r=r.next)!==e;)(a=Ho(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Uo(n),u=0;u<i;++u)n=t[u],n.x-=r.x,n.y-=r.y;return r.r}function Vo(t){if("function"!=typeof t)throw new Error;return t}function $o(){return 0}function Wo(t){return function(){return t}}function Zo(t){return Math.sqrt(t.value)}function Qo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Jo(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Go(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function Ko(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function ta(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function na(t,n,e,r,i){for(var o,a=t.children,u=-1,f=a.length,c=t.value&&(r-n)/t.value;++u<f;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*c}function ea(t){return t.id}function ra(t){return t.parentId}function ia(t,n){return t.parent===n.parent?1:2}function oa(t){var n=t.children;return n?n[0]:t.t}function aa(t){var n=t.children;return n?n[n.length-1]:t.t}function ua(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function fa(t,n,e){return t.a.parent===n.parent?t.a:e}function ca(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function sa(t,n,e,r,i){for(var o,a=t.children,u=-1,f=a.length,c=t.value&&(i-e)/t.value;++u<f;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*c}function la(t,n,e,r,i,o){for(var a,u,f,c,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){f=i-e,c=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(c/f,f/c)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:f<c,children:_.slice(b,m)}),a.dice?na(a,e,r,i,w?r+=c*s/w:o):sa(a,e,r,w?e+=f*s/w:i,o),w-=s,b=m}return y}function ha(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function da(t,n){return t[0]-n[0]||t[1]-n[1]}function pa(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&ha(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function va(){return Math.random()}function ga(t){function n(n){var o=n+"",a=e.get(o);if(!a){if(i!==Cv)return i;e.set(o,a=r.push(n))}return t[(a-1)%t.length]}var e=he(),r=[],i=Cv;return t=null==t?[]:kv.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=he();for(var i,o,a=-1,u=t.length;++a<u;)e.has(o=(i=t[a])+"")||e.set(o,r.push(i));return n},n.range=function(e){return arguments.length?(t=kv.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return ga().domain(r).range(t).unknown(i)},n}function ya(){function t(){var t=i().length,r=a[1]<a[0],h=a[r-0],d=a[1-r];n=(d-h)/Math.max(1,t-f+2*c),u&&(n=Math.floor(n)),h+=(d-h-n*(t-f))*l,e=n*(1-f),u&&(h=Math.round(h),e=Math.round(e));var p=s(t).map(function(t){return h+n*t});return o(r?p.reverse():p)}var n,e,r=ga().unknown(void 0),i=r.domain,o=r.range,a=[0,1],u=!1,f=0,c=0,l=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(a=[+n[0],+n[1]],t()):a.slice()},r.rangeRound=function(n){return a=[+n[0],+n[1]],u=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(u=!!n,t()):u},r.padding=function(n){return arguments.length?(f=c=Math.max(0,Math.min(1,n)),t()):f},r.paddingInner=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.paddingOuter=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.align=function(n){return arguments.length?(l=Math.max(0,Math.min(1,n)),t()):l},r.copy=function(){return ya().domain(i()).range(a).round(u).paddingInner(f).paddingOuter(c).align(l)},t()}function _a(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return _a(n())},t}function ba(t){return function(){return t}}function ma(t){return+t}function xa(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:ba(n)}function wa(t,n,e,r){var i=t[0],o=t[1],a=n[0],u=n[1];return o<i?(i=e(o,i),a=r(u,a)):(i=e(i,o),a=r(a,u)),function(t){return a(i(t))}}function Ma(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),a=new Array(i),u=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;)o[u]=e(t[u],t[u+1]),a[u]=r(n[u],n[u+1]);return function(n){var e=Jc(t,n,1,i)-1;return a[e](o[e](n))}}function Aa(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Ta(t,n){function e(){return i=Math.min(u.length,f.length)>2?Ma:wa,o=a=null,r}function r(n){return(o||(o=i(u,f,s?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}(t):t,c)))(+n)}var i,o,a,u=Pv,f=Pv,c=dn,s=!1;return r.invert=function(t){return(a||(a=i(f,u,xa,s?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}(n):n)))(+t)},r.domain=function(t){return arguments.length?(u=Ev.call(t,ma),e()):u.slice()},r.range=function(t){return arguments.length?(f=kv.call(t),e()):f.slice()},r.rangeRound=function(t){return f=kv.call(t),c=pn,e()},r.clamp=function(t){return arguments.length?(s=!!t,e()):s},r.interpolate=function(t){return arguments.length?(c=t,e()):c},e()}function Na(n){var e=n.domain;return n.ticks=function(t){var n=e();return l(n[0],n[n.length-1],null==t?10:t)},n.tickFormat=function(n,r){return function(n,e,r){var i,o=n[0],a=n[n.length-1],u=d(o,a,null==e?10:e);switch((r=tr(null==r?",f":r)).type){case"s":var f=Math.max(Math.abs(o),Math.abs(a));return null!=r.precision||isNaN(i=ur(u,f))||(r.precision=i),t.formatPrefix(r,f);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=fr(u,Math.max(Math.abs(o),Math.abs(a))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=ar(u))||(r.precision=i-2*("%"===r.type))}return t.format(r)}(e(),n,r)},n.nice=function(t){null==t&&(t=10);var r,i=e(),o=0,a=i.length-1,u=i[o],f=i[a];return f<u&&(r=u,u=f,f=r,r=o,o=a,a=r),(r=h(u,f,t))>0?r=h(u=Math.floor(u/r)*r,f=Math.ceil(f/r)*r,t):r<0&&(r=h(u=Math.ceil(u*r)/r,f=Math.floor(f*r)/r,t)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(f/r)*r,e(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(f*r)/r,e(i)),n},n}function Sa(){var t=Ta(xa,sn);return t.copy=function(){return Aa(t,Sa())},Na(t)}function Ea(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Ev.call(e,ma),t):n.slice()},t.copy=function(){return Ea().domain(n)},Na(t)}function ka(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Ca(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:ba(n)}function Pa(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function za(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Ra(t){return 10===t?za:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function La(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Da(t){return function(n){return-t(-n)}}function Ua(){function n(){return o=La(i),a=Ra(i),r()[0]<0&&(o=Da(o),a=Da(a)),e}var e=Ta(Ca,Pa).domain([1,10]),r=e.domain,i=10,o=La(10),a=Ra(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),u=e[0],f=e[e.length-1];(n=f<u)&&(d=u,u=f,f=d);var c,s,h,d=o(u),p=o(f),v=null==t?10:+t,g=[];if(!(i%1)&&p-d<v){if(d=Math.round(d)-1,p=Math.round(p)+1,u>0){for(;d<p;++d)for(s=1,c=a(d);s<i;++s)if(!((h=c*s)<u)){if(h>f)break;g.push(h)}}else for(;d<p;++d)for(s=i-1,c=a(d);s>=1;--s)if(!((h=c*s)<u)){if(h>f)break;g.push(h)}}else g=l(d,p,Math.min(p-d,v)).map(a);return n?g.reverse():g},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var u=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/a(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=u?r(t):""}},e.nice=function(){return r(ka(r(),{floor:function(t){return a(Math.floor(o(t)))},ceil:function(t){return a(Math.ceil(o(t)))}}))},e.copy=function(){return Aa(e,Ua().base(i))},e}function qa(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function Oa(){var t=1,n=Ta(function(n,e){return(e=qa(e,t)-(n=qa(n,t)))?function(r){return(qa(r,t)-n)/e}:ba(e)},function(n,e){return e=qa(e,t)-(n=qa(n,t)),function(r){return qa(n+e*r,1/t)}}),e=n.domain;return n.exponent=function(n){return arguments.length?(t=+n,e(e())):t},n.copy=function(){return Aa(n,Oa().exponent(t))},Na(n)}function Ya(){function t(){var t=0,n=Math.max(1,i.length);for(o=new Array(n-1);++t<n;)o[t-1]=v(r,t/n);return e}function e(t){if(!isNaN(t=+t))return i[Jc(o,t)]}var r=[],i=[],o=[];return e.invertExtent=function(t){var n=i.indexOf(t);return n<0?[NaN,NaN]:[n>0?o[n-1]:r[0],n<o.length?o[n]:r[r.length-1]]},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,o=0,a=e.length;o<a;++o)null==(i=e[o])||isNaN(i=+i)||r.push(i);return r.sort(n),t()},e.range=function(n){return arguments.length?(i=kv.call(n),t()):i.slice()},e.quantiles=function(){return o.slice()},e.copy=function(){return Ya().domain(r).range(i)},e}function Ba(){function t(t){if(t<=t)return a[Jc(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],a=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(a=kv.call(t)).length-1,n()):a.slice()},t.invertExtent=function(t){var n=a.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Ba().domain([e,r]).range(a)},Na(t)}function Fa(){function t(t){if(t<=t)return e[Jc(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=kv.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=kv.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return Fa().domain(n).range(e)},t}function Ia(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return Ia(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return zv.setTime(+n),Rv.setTime(+r),t(zv),t(Rv),Math.floor(e(zv,Rv))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}function ja(t){return Ia(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Uv)/qv})}function Ha(t){return Ia(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/qv})}function Xa(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Ga(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Va(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function $a(t){function n(t,n){return function(e){var r,i,o,a=[],u=-1,f=0,c=t.length;for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(a.push(t.slice(f,u)),null!=(i=Dg[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),f=u+1);return a.push(t.slice(f,u)),a.join("")}}function e(t,n){return function(e){var i,o,a=Va(1900);if(r(a,t,e+="",0)!=e.length)return null;if("Q"in a)return new Date(a.Q);if("p"in a&&(a.H=a.H%12+12*a.p),"V"in a){if(a.V<1||a.V>53)return null;"w"in a||(a.w=1),"Z"in a?(i=(o=(i=Ga(Va(a.y))).getUTCDay())>4||0===o?yg.ceil(i):yg(i),i=pg.offset(i,7*(a.V-1)),a.y=i.getUTCFullYear(),a.m=i.getUTCMonth(),a.d=i.getUTCDate()+(a.w+6)%7):(i=(o=(i=n(Va(a.y))).getDay())>4||0===o?Vv.ceil(i):Vv(i),i=Hv.offset(i,7*(a.V-1)),a.y=i.getFullYear(),a.m=i.getMonth(),a.d=i.getDate()+(a.w+6)%7)}else("W"in a||"U"in a)&&("w"in a||(a.w="u"in a?a.u%7:"W"in a?1:0),o="Z"in a?Ga(Va(a.y)).getUTCDay():n(Va(a.y)).getDay(),a.m=0,a.d="W"in a?(a.w+6)%7+7*a.W-(o+5)%7:a.w+7*a.U-(o+6)%7);return"Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,Ga(a)):n(a)}}function r(t,n,e,r){for(var i,o,a=0,u=n.length,f=e.length;a<u;){if(r>=f)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=A[i in Dg?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}var i=t.dateTime,o=t.date,a=t.time,u=t.periods,f=t.days,c=t.shortDays,s=t.months,l=t.shortMonths,h=Qa(u),d=Ja(u),p=Qa(f),v=Ja(f),g=Qa(c),y=Ja(c),_=Qa(s),b=Ja(s),m=Qa(l),x=Ja(l),w={a:function(t){return c[t.getDay()]},A:function(t){return f[t.getDay()]},b:function(t){return l[t.getMonth()]},B:function(t){return s[t.getMonth()]},c:null,d:_u,e:_u,f:Mu,H:bu,I:mu,j:xu,L:wu,m:Au,M:Tu,p:function(t){return u[+(t.getHours()>=12)]},Q:Ku,s:tf,S:Nu,u:Su,U:Eu,V:ku,w:Cu,W:Pu,x:null,X:null,y:zu,Y:Ru,Z:Lu,"%":Ju},M={a:function(t){return c[t.getUTCDay()]},A:function(t){return f[t.getUTCDay()]},b:function(t){return l[t.getUTCMonth()]},B:function(t){return s[t.getUTCMonth()]},c:null,d:Du,e:Du,f:Bu,H:Uu,I:qu,j:Ou,L:Yu,m:Fu,M:Iu,p:function(t){return u[+(t.getUTCHours()>=12)]},Q:Ku,s:tf,S:ju,u:Hu,U:Xu,V:Gu,w:Vu,W:$u,x:null,X:null,y:Wu,Y:Zu,Z:Qu,"%":Ju},A={a:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=y[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=p.exec(n.slice(e));return r?(t.w=v[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=m.exec(n.slice(e));return r?(t.m=x[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=_.exec(n.slice(e));return r?(t.m=b[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,n,e){return r(t,i,n,e)},d:fu,e:fu,f:pu,H:su,I:su,j:cu,L:du,m:uu,M:lu,p:function(t,n,e){var r=h.exec(n.slice(e));return r?(t.p=d[r[0].toLowerCase()],e+r[0].length):-1},Q:gu,s:yu,S:hu,u:tu,U:nu,V:eu,w:Ka,W:ru,x:function(t,n,e){return r(t,o,n,e)},X:function(t,n,e){return r(t,a,n,e)},y:ou,Y:iu,Z:au,"%":vu};return w.x=n(o,w),w.X=n(a,w),w.c=n(i,w),M.x=n(o,M),M.X=n(a,M),M.c=n(i,M),{format:function(t){var e=n(t+="",w);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",Xa);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",M);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,Ga);return n.toString=function(){return t},n}}}function Wa(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Za(t){return t.replace(Og,"\\$&")}function Qa(t){return new RegExp("^(?:"+t.map(Za).join("|")+")","i")}function Ja(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Ka(t,n,e){var r=Ug.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function tu(t,n,e){var r=Ug.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function nu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function eu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function ru(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function iu(t,n,e){var r=Ug.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function ou(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function au(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function uu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function fu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function cu(t,n,e){var r=Ug.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function su(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function lu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function hu(t,n,e){var r=Ug.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function du(t,n,e){var r=Ug.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function pu(t,n,e){var r=Ug.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function vu(t,n,e){var r=qg.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function gu(t,n,e){var r=Ug.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function yu(t,n,e){var r=Ug.exec(n.slice(e));return r?(t.Q=1e3*+r[0],e+r[0].length):-1}function _u(t,n){return Wa(t.getDate(),n,2)}function bu(t,n){return Wa(t.getHours(),n,2)}function mu(t,n){return Wa(t.getHours()%12||12,n,2)}function xu(t,n){return Wa(1+Hv.count(fg(t),t),n,3)}function wu(t,n){return Wa(t.getMilliseconds(),n,3)}function Mu(t,n){return wu(t,n)+"000"}function Au(t,n){return Wa(t.getMonth()+1,n,2)}function Tu(t,n){return Wa(t.getMinutes(),n,2)}function Nu(t,n){return Wa(t.getSeconds(),n,2)}function Su(t){var n=t.getDay();return 0===n?7:n}function Eu(t,n){return Wa(Gv.count(fg(t),t),n,2)}function ku(t,n){var e=t.getDay();return t=e>=4||0===e?Zv(t):Zv.ceil(t),Wa(Zv.count(fg(t),t)+(4===fg(t).getDay()),n,2)}function Cu(t){return t.getDay()}function Pu(t,n){return Wa(Vv.count(fg(t),t),n,2)}function zu(t,n){return Wa(t.getFullYear()%100,n,2)}function Ru(t,n){return Wa(t.getFullYear()%1e4,n,4)}function Lu(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Wa(n/60|0,"0",2)+Wa(n%60,"0",2)}function Du(t,n){return Wa(t.getUTCDate(),n,2)}function Uu(t,n){return Wa(t.getUTCHours(),n,2)}function qu(t,n){return Wa(t.getUTCHours()%12||12,n,2)}function Ou(t,n){return Wa(1+pg.count(zg(t),t),n,3)}function Yu(t,n){return Wa(t.getUTCMilliseconds(),n,3)}function Bu(t,n){return Yu(t,n)+"000"}function Fu(t,n){return Wa(t.getUTCMonth()+1,n,2)}function Iu(t,n){return Wa(t.getUTCMinutes(),n,2)}function ju(t,n){return Wa(t.getUTCSeconds(),n,2)}function Hu(t){var n=t.getUTCDay();return 0===n?7:n}function Xu(t,n){return Wa(gg.count(zg(t),t),n,2)}function Gu(t,n){var e=t.getUTCDay();return t=e>=4||0===e?mg(t):mg.ceil(t),Wa(mg.count(zg(t),t)+(4===zg(t).getUTCDay()),n,2)}function Vu(t){return t.getUTCDay()}function $u(t,n){return Wa(yg.count(zg(t),t),n,2)}function Wu(t,n){return Wa(t.getUTCFullYear()%100,n,2)}function Zu(t,n){return Wa(t.getUTCFullYear()%1e4,n,4)}function Qu(){return"+0000"}function Ju(){return"%"}function Ku(t){return+t}function tf(t){return Math.floor(+t/1e3)}function nf(n){return Rg=$a(n),t.timeFormat=Rg.format,t.timeParse=Rg.parse,t.utcFormat=Rg.utcFormat,t.utcParse=Rg.utcParse,Rg}function ef(t){return new Date(t)}function rf(t){return t instanceof Date?+t:+new Date(+t)}function of(t,n,r,i,o,a,u,f,c){function s(e){return(u(e)<e?g:a(e)<e?y:o(e)<e?_:i(e)<e?b:n(e)<e?r(e)<e?m:x:t(e)<e?w:M)(e)}function l(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(A,a);u===A.length?(o=d(r/$g,i/$g,n),n=t):u?(o=(u=A[a/A[u-1][2]<A[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(d(r,i,n),1),n=f)}return null==o?n:n.every(o)}var h=Ta(xa,sn),p=h.invert,v=h.domain,g=c(".%L"),y=c(":%S"),_=c("%I:%M"),b=c("%I %p"),m=c("%a %d"),x=c("%b %d"),w=c("%B"),M=c("%Y"),A=[[u,1,Ig],[u,5,5*Ig],[u,15,15*Ig],[u,30,30*Ig],[a,1,jg],[a,5,5*jg],[a,15,15*jg],[a,30,30*jg],[o,1,Hg],[o,3,3*Hg],[o,6,6*Hg],[o,12,12*Hg],[i,1,Xg],[i,2,2*Xg],[r,1,Gg],[n,1,Vg],[n,3,3*Vg],[t,1,$g]];return h.invert=function(t){return new Date(p(t))},h.domain=function(t){return arguments.length?v(Ev.call(t,rf)):v().map(ef)},h.ticks=function(t,n){var e,r=v(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],a?e.reverse():e},h.tickFormat=function(t,n){return null==n?s:c(n)},h.nice=function(t,n){var e=v();return(t=l(t,e[0],e[e.length-1],n))?v(ka(e,t)):h},h.copy=function(){return Aa(h,of(t,n,r,i,o,a,u,f,c))},h}function af(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return af(t).domain([e,r]).clamp(i)},Na(n)}function uf(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}function ff(t){return rl(t[t.length-1])}function cf(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function sf(t){return function(){return t}}function lf(t){return t>=1?A_:t<=-1?-A_:Math.asin(t)}function hf(t){return t.innerRadius}function df(t){return t.outerRadius}function pf(t){return t.startAngle}function vf(t){return t.endAngle}function gf(t){return t&&t.padAngle}function yf(t,n,e,r,i,o,a){var u=t-e,f=n-r,c=(a?o:-o)/x_(u*u+f*f),s=c*f,l=-c*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*x_(__(0,x*x*m-w*w)),A=(w*b-_*M)/m,T=(-w*_-b*M)/m,N=(w*b+_*M)/m,S=(-w*_+b*M)/m,E=A-g,k=T-y,C=N-g,P=S-y;return E*E+k*k>C*C+P*P&&(A=N,T=S),{cx:A,cy:T,x01:-s,y01:-l,x11:A*(i/x-1),y11:T*(i/x-1)}}function _f(t){this._context=t}function bf(t){return new _f(t)}function mf(t){return t[0]}function xf(t){return t[1]}function wf(){function t(t){var u,f,c,s=t.length,l=!1;for(null==i&&(a=o(c=oe())),u=0;u<=s;++u)!(u<s&&r(f=t[u],u,t))===l&&((l=!l)?a.lineStart():a.lineEnd()),l&&a.point(+n(f,u,t),+e(f,u,t));if(c)return a=null,c+""||null}var n=mf,e=xf,r=sf(!0),i=null,o=bf,a=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:sf(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:sf(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(a=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=a=null:a=o(i=n),t):i},t}function Mf(){function t(t){var n,s,l,h,d,p=t.length,v=!1,g=new Array(p),y=new Array(p);for(null==u&&(c=f(d=oe())),n=0;n<=p;++n){if(!(n<p&&a(h=t[n],n,t))===v)if(v=!v)s=n,c.areaStart(),c.lineStart();else{for(c.lineEnd(),c.lineStart(),l=n-1;l>=s;--l)c.point(g[l],y[l]);c.lineEnd(),c.areaEnd()}v&&(g[n]=+e(h,n,t),y[n]=+i(h,n,t),c.point(r?+r(h,n,t):g[n],o?+o(h,n,t):y[n]))}if(d)return c=null,d+""||null}function n(){return wf().defined(a).curve(f).context(u)}var e=mf,r=null,i=sf(0),o=xf,a=sf(!0),u=null,f=bf,c=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:sf(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:sf(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(a="function"==typeof n?n:sf(!!n),t):a},t.curve=function(n){return arguments.length?(f=n,null!=u&&(c=f(u)),t):f},t.context=function(n){return arguments.length?(null==n?u=c=null:c=f(u=n),t):u},t}function Af(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Tf(t){return t}function Nf(t){this._curve=t}function Sf(t){function n(n){return new Nf(t(n))}return n._curve=t,n}function Ef(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Sf(t)):n()._curve},t}function kf(){return Ef(wf().curve(N_))}function Cf(){var t=Mf().curve(N_),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Ef(e())},delete t.lineX0,t.lineEndAngle=function(){return Ef(r())},delete t.lineX1,t.lineInnerRadius=function(){return Ef(i())},delete t.lineY0,t.lineOuterRadius=function(){return Ef(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Sf(t)):n()._curve},t}function Pf(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}function zf(t){return t.source}function Rf(t){return t.target}function Lf(t){function n(){var n,u=S_.call(arguments),f=e.apply(this,u),c=r.apply(this,u);if(a||(a=n=oe()),t(a,+i.apply(this,(u[0]=f,u)),+o.apply(this,u),+i.apply(this,(u[0]=c,u)),+o.apply(this,u)),n)return a=null,n+""||null}var e=zf,r=Rf,i=mf,o=xf,a=null;return n.source=function(t){return arguments.length?(e=t,n):e},n.target=function(t){return arguments.length?(r=t,n):r},n.x=function(t){return arguments.length?(i="function"==typeof t?t:sf(+t),n):i},n.y=function(t){return arguments.length?(o="function"==typeof t?t:sf(+t),n):o},n.context=function(t){return arguments.length?(a=null==t?null:t,n):a},n}function Df(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Uf(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function qf(t,n,e,r,i){var o=Pf(n,e),a=Pf(n,e=(e+i)/2),u=Pf(r,e),f=Pf(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],f[0],f[1])}function Of(){}function Yf(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function Bf(t){this._context=t}function Ff(t){this._context=t}function If(t){this._context=t}function jf(t,n){this._basis=new Bf(t),this._beta=n}function Hf(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Xf(t,n){this._context=t,this._k=(1-n)/6}function Gf(t,n){this._context=t,this._k=(1-n)/6}function Vf(t,n){this._context=t,this._k=(1-n)/6}function $f(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>w_){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,f=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/f,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/f}if(t._l23_a>w_){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function Wf(t,n){this._context=t,this._alpha=n}function Zf(t,n){this._context=t,this._alpha=n}function Qf(t,n){this._context=t,this._alpha=n}function Jf(t){this._context=t}function Kf(t){return t<0?-1:1}function tc(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(Kf(o)+Kf(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function nc(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function ec(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function rc(t){this._context=t}function ic(t){this._context=new oc(t)}function oc(t){this._context=t}function ac(t){this._context=t}function uc(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function fc(t,n){this._context=t,this._t=n}function cc(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function sc(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function lc(t,n){return t[n]}function hc(t){var n=t.map(dc);return sc(t).sort(function(t,e){return n[t]-n[e]})}function dc(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function pc(t){return function(){return t}}function vc(t){return t[0]}function gc(t){return t[1]}function yc(){this._=null}function _c(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function bc(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function mc(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function xc(t){for(;t.L;)t=t.L;return t}function wc(t,n,e,r){var i=[null,null],o=eb.push(i)-1;return i.left=t,i.right=n,e&&Ac(i,t,n,e),r&&Ac(i,n,t,r),tb[t.index].halfedges.push(o),tb[n.index].halfedges.push(o),i}function Mc(t,n,e){var r=[n,e];return r.left=t,r}function Ac(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function Tc(t,n,e,r,i){var o,a=t[0],u=t[1],f=a[0],c=a[1],s=0,l=1,h=u[0]-f,d=u[1]-c;if(o=n-f,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-f,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-c,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-c,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[f+s*h,c+s*d]),l<1&&(t[1]=[f+l*h,c+l*d]),!0)}}}}}function Nc(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,f=t[0],c=t.left,s=t.right,l=c[0],h=c[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(f){if(f[1]>=i)return}else f=[v,e];o=[v,i]}else{if(f){if(f[1]<e)return}else f=[v,i];o=[v,e]}}else if(a=(l-d)/(p-h),u=g-a*v,a<-1||a>1)if(l>d){if(f){if(f[1]>=i)return}else f=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(f){if(f[1]<e)return}else f=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(f){if(f[0]>=r)return}else f=[n,a*n+u];o=[r,a*r+u]}else{if(f){if(f[0]<n)return}else f=[r,a*r+u];o=[n,a*n+u]}return t[0]=f,t[1]=o,!0}function Sc(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Ec(t,n){return n[+(n.left!==t.site)]}function kc(t,n){return n[+(n.left===t.site)]}function Cc(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],f=r[0]-a,c=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(f*l-c*s);if(!(h>=-ab)){var d=f*f+c*c,p=s*s+l*l,v=(l*d-c*p)/h,g=(f*p-s*d)/h,y=rb.pop()||new function(){_c(this),this.x=this.y=this.arc=this.site=this.cy=null};y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=nb._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}nb.insert(_,y),_||(J_=y)}}}}function Pc(t){var n=t.circle;n&&(n.P||(J_=n.N),nb.remove(n),rb.push(n),_c(n),t.circle=null)}function zc(t){var n=ib.pop()||new function(){_c(this),this.edge=this.site=this.circle=null};return n.site=t,n}function Rc(t){Pc(t),K_.remove(t),ib.push(t),_c(t)}function Lc(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];Rc(t);for(var f=o;f.circle&&Math.abs(e-f.circle.x)<ob&&Math.abs(r-f.circle.cy)<ob;)o=f.P,u.unshift(f),Rc(f),f=o;u.unshift(f),Pc(f);for(var c=a;c.circle&&Math.abs(e-c.circle.x)<ob&&Math.abs(r-c.circle.cy)<ob;)a=c.N,u.push(c),Rc(c),c=a;u.push(c),Pc(c);var s,l=u.length;for(s=1;s<l;++s)c=u[s],f=u[s-1],Ac(c.edge,f.site,c.site,i);f=u[0],(c=u[l-1]).edge=wc(f.site,c.site,null,i),Cc(f),Cc(c)}function Dc(t){for(var n,e,r,i,o=t[0],a=t[1],u=K_._;u;)if((r=Uc(u,a)-o)>ob)u=u.L;else{if(!((i=o-function(t,n){var e=t.N;if(e)return Uc(e,n);var r=t.site;return r[1]===n?r[0]:1/0}(u,a))>ob)){r>-ob?(n=u.P,e=u):i>-ob?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}(function(t){tb[t.index]={site:t,halfedges:[]}})(t);var f=zc(t);if(K_.insert(n,f),n||e){if(n===e)return Pc(n),e=zc(n.site),K_.insert(f,e),f.edge=e.edge=wc(n.site,f.site),Cc(n),void Cc(e);if(e){Pc(n),Pc(e);var c=n.site,s=c[0],l=c[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];Ac(e.edge,c,p,m),f.edge=wc(c,t,null,m),e.edge=wc(t,p,null,m),Cc(n),Cc(e)}else f.edge=wc(n.site,f.site)}}function Uc(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],f=e[1],c=f-n;if(!c)return u;var s=u-r,l=1/o-1/c,h=s/c;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*c)-f+c/2+i-o/2)))/l+r:(r+u)/2}function qc(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Oc(t,n){return n[1]-t[1]||n[0]-t[0]}function Yc(t,n){var e,r,i,o=t.sort(Oc).pop();for(eb=[],tb=new Array(t.length),K_=new yc,nb=new yc;;)if(i=J_,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(Dc(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Lc(i.arc)}if(function(){for(var t,n,e,r,i=0,o=tb.length;i<o;++i)if((t=tb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=Sc(t,eb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],f=+n[1][0],c=+n[1][1];(function(t,n,e,r){for(var i,o=eb.length;o--;)Nc(i=eb[o],t,n,e,r)&&Tc(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>ob||Math.abs(i[0][1]-i[1][1])>ob)||delete eb[o]})(a,u,f,c),function(t,n,e,r){var i,o,a,u,f,c,s,l,h,d,p,v,g=tb.length,y=!0;for(i=0;i<g;++i)if(o=tb[i]){for(a=o.site,u=(f=o.halfedges).length;u--;)eb[f[u]]||f.splice(u,1);for(u=0,c=f.length;u<c;)p=(d=kc(o,eb[f[u]]))[0],v=d[1],l=(s=Ec(o,eb[f[++u%c]]))[0],h=s[1],(Math.abs(p-l)>ob||Math.abs(v-h)>ob)&&(f.splice(u,0,eb.push(Mc(a,d,Math.abs(p-t)<ob&&r-v>ob?[t,Math.abs(l-t)<ob?h:r]:Math.abs(v-r)<ob&&e-p>ob?[Math.abs(h-r)<ob?l:e,r]:Math.abs(p-e)<ob&&v-n>ob?[e,Math.abs(l-e)<ob?h:n]:Math.abs(v-n)<ob&&p-t>ob?[Math.abs(h-n)<ob?l:t,n]:null))-1),++c);c&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=tb[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],A=[e,r],T=[e,n];y.halfedges.push(eb.push(Mc(a=y.site,w,M))-1,eb.push(Mc(a,M,A))-1,eb.push(Mc(a,A,T))-1,eb.push(Mc(a,T,w))-1)}}for(i=0;i<g;++i)(o=tb[i])&&(o.halfedges.length||delete tb[i])}(a,u,f,c)}this.edges=eb,this.cells=tb,K_=nb=eb=tb=null}function Bc(t){return function(){return t}}function Fc(t,n,e){this.k=t,this.x=n,this.y=e}function Ic(t){return t.__zoom||ub}function jc(){t.event.stopImmediatePropagation()}function Hc(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Xc(){return!t.event.button}function Gc(){var t,n,e=this;return e instanceof SVGElement?(t=(e=e.ownerSVGElement||e).width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function Vc(){return this.__zoom||ub}function $c(){return-t.event.deltaY*(t.event.deltaMode?120:1)/500}function Wc(){return"ontouchstart"in this}function Zc(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}var Qc=e(n),Jc=Qc.right,Kc=Qc.left,ts=Array.prototype,ns=ts.slice,es=ts.map,rs=Math.sqrt(50),is=Math.sqrt(10),os=Math.sqrt(2),as=Array.prototype.slice,us=1,fs=2,cs=3,ss=4,ls=1e-6,hs={value:function(){}};S.prototype=N.prototype={constructor:S,on:function(t,n){var e,r=this._,i=function(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}(t+"",r),o=-1,a=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=E(r[e],t.name,n);else if(null==n)for(e in r)r[e]=E(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=function(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new S(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var ds="http://www.w3.org/1999/xhtml",ps={svg:"http://www.w3.org/2000/svg",xhtml:ds,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},vs=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var gs=document.documentElement;if(!gs.matches){var ys=gs.webkitMatchesSelector||gs.msMatchesSelector||gs.mozMatchesSelector||gs.oMatchesSelector;vs=function(t){return function(){return ys.call(this,t)}}}}var _s=vs;U.prototype={constructor:U,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var bs="$";H.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ms={};if(t.event=null,"undefined"!=typeof document){"onmouseenter"in document.documentElement||(ms={mouseenter:"mouseover",mouseleave:"mouseout"})}var xs=[null];ut.prototype=ft.prototype={constructor:ut,select:function(t){"function"!=typeof t&&(t=z(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],f=u.length,c=r[i]=new Array(f),s=0;s<f;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),c[s]=a);return new ut(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=L(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],f=u.length,c=0;c<f;++c)(a=u[c])&&(r.push(t.call(a,a.__data__,c,u)),i.push(a));return new ut(r,i)},filter:function(t){"function"!=typeof t&&(t=_s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,f=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&f.push(o);return new ut(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),c=-1,this.each(function(t){d[++c]=t}),d;var e=n?O:q,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),u=new Array(o),f=new Array(o),c=0;c<o;++c){var s=r[c],l=i[c],h=l.length,d=t.call(s,s&&s.__data__,c,r),p=d.length,v=u[c]=new Array(p),g=a[c]=new Array(p);e(s,l,v,g,f[c]=new Array(h),d,n);for(var y,_,b=0,m=0;b<p;++b)if(y=v[b]){for(b>=m&&(m=b+1);!(_=g[m])&&++m<p;);y._next=_||null}}return a=new ut(a,r),a._enter=u,a._exit=f,a},enter:function(){return new ut(this._enter||this._groups.map(D),this._parents)},exit:function(){return new ut(this._exit||this._groups.map(D),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var f,c=n[u],s=e[u],l=c.length,h=a[u]=new Array(l),d=0;d<l;++d)(f=c[d]||s[d])&&(h[d]=f);for(;u<r;++u)a[u]=n[u];return new ut(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&a!==r.nextSibling&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=Y);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],f=u.length,c=i[o]=new Array(f),s=0;s<f;++s)(a=u[s])&&(c[s]=a);c.sort(n)}return new ut(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=k(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):F(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=I(t+"");if(arguments.length<2){for(var r=j(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?X:G)(this,t)}}:n?function(t){return function(){X(this,t)}}:function(t){return function(){G(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?V:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?$:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(W)},lower:function(){return this.each(Z)},append:function(t){var n="function"==typeof t?t:C(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:C(t),r=null==n?Q:"function"==typeof n?n:z(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(J)},clone:function(t){return this.select(t?tt:K)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?it:rt,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var f,c=0,s=u.length;c<s;++c)for(r=0,f=u[c];r<a;++r)if((i=o[r]).type===f.type&&i.name===f.name)return f.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return at(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return at(this,t,n)}})(t,n))}};var ws=0;lt.prototype=st.prototype={constructor:lt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var Ms="\\s*([+-]?\\d+)\\s*",As="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ts="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ns=/^#([0-9a-f]{3})$/,Ss=/^#([0-9a-f]{6})$/,Es=new RegExp("^rgb\\("+[Ms,Ms,Ms]+"\\)$"),ks=new RegExp("^rgb\\("+[Ts,Ts,Ts]+"\\)$"),Cs=new RegExp("^rgba\\("+[Ms,Ms,Ms,As]+"\\)$"),Ps=new RegExp("^rgba\\("+[Ts,Ts,Ts,As]+"\\)$"),zs=new RegExp("^hsl\\("+[As,Ts,Ts]+"\\)$"),Rs=new RegExp("^hsla\\("+[As,Ts,Ts,As]+"\\)$"),Ls={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Nt(Et,kt,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),Nt(Lt,Rt,St(Et,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Lt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Lt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+Dt(this.r)+Dt(this.g)+Dt(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Nt(Ot,qt,St(Et,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Ot(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Ot(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Lt(Yt(t>=240?t-240:t+120,i,r),Yt(t,i,r),Yt(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Ds=Math.PI/180,Us=180/Math.PI,qs=.96422,Os=1,Ys=.82521,Bs=4/29,Fs=6/29,Is=3*Fs*Fs,js=Fs*Fs*Fs;Nt(It,Ft,St(Et,{brighter:function(t){return new It(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new It(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return n=qs*Ht(n),t=Os*Ht(t),e=Ys*Ht(e),new Lt(Xt(3.1338561*n-1.6168667*t-.4906146*e),Xt(-.9787684*n+1.9161415*t+.033454*e),Xt(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Nt(Wt,$t,St(Et,{brighter:function(t){return new Wt(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Wt(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Bt(this).rgb()}}));var Hs=-.29227,Xs=-.90649,Gs=1.97294,Vs=Gs*Xs,$s=1.78277*Gs,Ws=1.78277*Hs- -.14861*Xs;Nt(Qt,Zt,St(Et,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Qt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Qt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Ds,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Lt(255*(n+e*(-.14861*r+1.78277*i)),255*(n+e*(Hs*r+Xs*i)),255*(n+e*(Gs*r)),this.opacity)}}));var Zs,Qs,Js,Ks,tl,nl,el=function t(n){function e(t,n){var e=r((t=Rt(t)).r,(n=Rt(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),a=an(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}var r=on(n);return e.gamma=t,e}(1),rl=un(Kt),il=un(tn),ol=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,al=new RegExp(ol.source,"g"),ul=180/Math.PI,fl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},cl=gn(function(t){return"none"===t?fl:(Zs||(Zs=document.createElement("DIV"),Qs=document.documentElement,Js=document.defaultView),Zs.style.transform=t,t=Js.getComputedStyle(Qs.appendChild(Zs),null).getPropertyValue("transform"),Qs.removeChild(Zs),t=t.slice(7,-1).split(","),vn(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),sl=gn(function(t){return null==t?fl:(Ks||(Ks=document.createElementNS("http://www.w3.org/2000/svg","g")),Ks.setAttribute("transform",t),(t=Ks.transform.baseVal.consolidate())?(t=t.matrix,vn(t.a,t.b,t.c,t.d,t.e,t.f)):fl)},", ",")",")"),ll=Math.SQRT2,hl=2,dl=4,pl=1e-12,vl=bn(rn),gl=bn(an),yl=mn(rn),_l=mn(an),bl=xn(rn),ml=xn(an),xl=0,wl=0,Ml=0,Al=1e3,Tl=0,Nl=0,Sl=0,El="object"==typeof performance&&performance.now?performance:Date,kl="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};An.prototype=Tn.prototype={constructor:An,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?wn():+e)+(null==n?0:+n),this._next||nl===this||(nl?nl._next=this:tl=this,nl=this),this._call=t,this._time=e,kn()},stop:function(){this._call&&(this._call=null,this._time=1/0,kn())}};var Cl=N("start","end","interrupt"),Pl=[],zl=0,Rl=1,Ll=2,Dl=3,Ul=4,ql=5,Ol=6,Yl=ft.prototype.constructor,Bl=0,Fl=ft.prototype;On.prototype=Yn.prototype={constructor:On,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=z(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,f,c=r[a],s=c.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=c[h])&&(f=t.call(u,u.__data__,h,c))&&("__data__"in u&&(f.__data__=u.__data__),l[h]=f,Pn(l[h],n,e,h,l,Ln(u,e)));return new On(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=L(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var f,c=r[u],s=c.length,l=0;l<s;++l)if(f=c[l]){for(var h,d=t.call(f,f.__data__,l,c),p=Ln(f,e),v=0,g=d.length;v<g;++v)(h=d[v])&&Pn(h,n,e,v,d,p);o.push(d),a.push(f)}return new On(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=_s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,f=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&f.push(o);return new On(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var f,c=n[u],s=e[u],l=c.length,h=a[u]=new Array(l),d=0;d<l;++d)(f=c[d]||s[d])&&(h[d]=f);for(;u<r;++u)a[u]=n[u];return new On(a,this._parents,this._name,this._id)},selection:function(){return new Yl(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Bn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],f=u.length,c=0;c<f;++c)if(a=u[c]){var s=Ln(a,n);Pn(a,t,e,c,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new On(r,this._parents,t,e)},call:Fl.call,nodes:Fl.nodes,node:Fl.node,size:Fl.size,empty:Fl.empty,each:Fl.each,on:function(t,n){var e=this._id;return arguments.length<2?Ln(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?zn:Rn;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=k(t),r="transform"===e?sl:qn;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return(a=this.getAttributeNS(t.space,t.local))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u=e(this);if(null!=u)return(a=this.getAttribute(t))===u?null:a===r&&u===i?o:o=n(r=a,i=u);this.removeAttribute(t)}})(e,r,Un(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}:function(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}})(e,r,n+""))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=k(t);return this.tween(e,(r.local?function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}:function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?cl:qn;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=F(this,t),a=(this.style.removeProperty(t),F(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof n?function(t,n,e){var r,i,o;return function(){var a=F(this,t),u=e(this);return null==u&&(this.style.removeProperty(t),u=F(this,t)),a===u?null:a===r&&u===i?o:o=n(r=a,i=u)}}(t,r,Un(this,"style."+t,n)):function(t,n,e){var r,i;return function(){var o=F(this,t);return o===e?null:o===r?i:i=n(r=o,e)}}(t,r,n+""),e)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Un(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Ln(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Rn(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Rn(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},f=0,c=i.length;f<c;++f)if(i[f].name===n){i[f]=u;break}f===c&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){zn(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){zn(this,t).delay=n}})(n,t)):Ln(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Rn(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Rn(this,t).duration=n}})(n,t)):Ln(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Rn(this,t).ease=n}}(n,t)):Ln(this.node(),n).ease}};var Il=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),jl=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Hl=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Xl=Math.PI,Gl=Xl/2,Vl=4/11,$l=6/11,Wl=8/11,Zl=.75,Ql=9/11,Jl=10/11,Kl=.9375,th=21/22,nh=63/64,eh=1/Vl/Vl,rh=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),ih=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),oh=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),ah=2*Math.PI,uh=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=ah);return r.amplitude=function(n){return t(n,e*ah)},r.period=function(e){return t(n,e)},r}(1,.3),fh=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=ah);return r.amplitude=function(n){return t(n,e*ah)},r.period=function(e){return t(n,e)},r}(1,.3),ch=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=ah);return r.amplitude=function(n){return t(n,e*ah)},r.period=function(e){return t(n,e)},r}(1,.3),sh={time:null,delay:0,duration:250,ease:In};ft.prototype.interrupt=function(t){return this.each(function(){Dn(this,t)})},ft.prototype.transition=function(t){var n,e;t instanceof On?(n=t._id,t=t._name):(n=Bn(),(e=sh).time=wn(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],f=u.length,c=0;c<f;++c)(a=u[c])&&Pn(a,t,n,c,u,e||Vn(a,n));return new On(r,this._parents,t,n)};var lh=[null],hh={name:"drag"},dh={name:"space"},ph={name:"handle"},vh={name:"center"},gh={name:"x",handles:["e","w"].map(Qn),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},yh={name:"y",handles:["n","s"].map(Qn),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},_h={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Qn),input:function(t){return t},output:function(t){return t}},bh={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},mh={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},xh={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},wh={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Mh={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},Ah=Math.cos,Th=Math.sin,Nh=Math.PI,Sh=Nh/2,Eh=2*Nh,kh=Math.max,Ch=Array.prototype.slice,Ph=Math.PI,zh=2*Ph,Rh=zh-1e-6;ie.prototype=oe.prototype={constructor:ie,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,f=r-n,c=o-t,s=a-n,l=c*c+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-f*c)>1e-6&&i){var h=e-o,d=r-a,p=u*u+f*f,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Ph-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*c)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>c*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*f)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),f=t+a,c=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+c:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-c)>1e-6)&&(this._+="L"+f+","+c),e&&(l<0&&(l=l%zh+zh),l>Rh?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=f)+","+(this._y1=c):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Ph)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};le.prototype=he.prototype={constructor:le,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var Lh=he.prototype;ye.prototype=_e.prototype={constructor:ye,has:Lh.has,add:function(t){return t+="",this["$"+t]=t,this},remove:Lh.remove,clear:Lh.clear,values:Lh.keys,size:Lh.size,empty:Lh.empty,each:Lh.each};var Dh=Array.prototype.slice,Uh=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]],qh={},Oh={},Yh=34,Bh=10,Fh=13,Ih=ke(","),jh=Ih.parse,Hh=Ih.parseRows,Xh=Ih.format,Gh=Ih.formatRows,Vh=ke("\t"),$h=Vh.parse,Wh=Vh.parseRows,Zh=Vh.format,Qh=Vh.formatRows,Jh=Le(jh),Kh=Le($h),td=Ue("application/xml"),nd=Ue("text/html"),ed=Ue("image/svg+xml"),rd=je.prototype=He.prototype;rd.copy=function(){var t,n,e=new He(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Xe(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Xe(n));return e},rd.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return Ye(this.cover(n,e),n,e,t)},rd.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),f=1/0,c=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<f&&(f=r),r>s&&(s=r),i<c&&(c=i),i>l&&(l=i));for(s<f&&(f=this._x0,s=this._x1),l<c&&(c=this._y0,l=this._y1),this.cover(f,c).cover(s,l),e=0;e<o;++e)Ye(this,a[e],u[e],t[e]);return this},rd.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var a,u,f=i-e,c=this._root;switch(u=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do{a=new Array(4),a[u]=c,c=a}while(f*=2,i=e+f,o=r+f,t>i||n>o);break;case 1:do{a=new Array(4),a[u]=c,c=a}while(f*=2,e=i-f,o=r+f,e>t||n>o);break;case 2:do{a=new Array(4),a[u]=c,c=a}while(f*=2,i=e+f,r=o-f,t>i||r>n);break;case 3:do{a=new Array(4),a[u]=c,c=a}while(f*=2,e=i-f,r=o-f,e>t||r>n)}this._root&&this._root.length&&(this._root=c)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},rd.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},rd.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},rd.find=function(t,n,e){var r,i,o,a,u,f,c,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new Be(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);f=p.pop();)if(!(!(v=f.node)||(i=f.x0)>h||(o=f.y0)>d||(a=f.x1)<s||(u=f.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new Be(v[3],g,y,a,u),new Be(v[2],i,y,g,u),new Be(v[1],g,o,a,y),new Be(v[0],i,o,g,y)),(c=(n>=y)<<1|t>=g)&&(f=p[p.length-1],p[p.length-1]=p[p.length-1-c],p[p.length-1-c]=f)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},rd.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,f,c,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((c=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(f=(v+y)/2))?v=f:y=f,n=d,!(d=d[l=s<<1|c]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},rd.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},rd.root=function(){return this._root},rd.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},rd.visit=function(t){var n,e,r,i,o,a,u=[],f=this._root;for(f&&u.push(new Be(f,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(f=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&f.length){var c=(r+o)/2,s=(i+a)/2;(e=f[3])&&u.push(new Be(e,c,s,o,a)),(e=f[2])&&u.push(new Be(e,r,s,c,a)),(e=f[1])&&u.push(new Be(e,c,i,o,s)),(e=f[0])&&u.push(new Be(e,r,i,c,s))}return this},rd.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new Be(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,f=n.x1,c=n.y1,s=(a+f)/2,l=(u+c)/2;(o=i[0])&&e.push(new Be(o,a,u,s,l)),(o=i[1])&&e.push(new Be(o,s,u,f,l)),(o=i[2])&&e.push(new Be(o,a,l,s,c)),(o=i[3])&&e.push(new Be(o,s,l,f,c))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},rd.x=function(t){return arguments.length?(this._x=t,this):this._x},rd.y=function(t){return arguments.length?(this._y=t,this):this._y};var id=10,od=Math.PI*(3-Math.sqrt(5)),ad=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;tr.prototype=nr.prototype,nr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var ud,fd,cd={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return er(100*t,n)},r:er,s:function(t,n){var e=Je(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(ud=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Je(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},sd=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];or({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),sr.prototype={constructor:sr,reset:function(){this.s=this.t=0},add:function(t){lr(Id,t,this.t),lr(this,Id.s,this.s),this.s?this.t+=Id.t:this.s=Id.t},valueOf:function(){return this.s}};var ld,hd,dd,pd,vd,gd,yd,_d,bd,md,xd,wd,Md,Ad,Td,Nd,Sd,Ed,kd,Cd,Pd,zd,Rd,Ld,Dd,Ud,qd,Od,Yd,Bd,Fd,Id=new sr,jd=1e-6,Hd=1e-12,Xd=Math.PI,Gd=Xd/2,Vd=Xd/4,$d=2*Xd,Wd=180/Xd,Zd=Xd/180,Qd=Math.abs,Jd=Math.atan,Kd=Math.atan2,tp=Math.cos,np=Math.ceil,ep=Math.exp,rp=Math.log,ip=Math.pow,op=Math.sin,ap=Math.sign||function(t){return t>0?1:t<0?-1:0},up=Math.sqrt,fp=Math.tan,cp={Feature:function(t,n){gr(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)gr(e[r].geometry,n)}},sp={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){yr(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)yr(e[r],n,0)},Polygon:function(t,n){_r(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)_r(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)gr(e[r],n)}},lp=cr(),hp=cr(),dp={point:vr,lineStart:vr,lineEnd:vr,polygonStart:function(){lp.reset(),dp.lineStart=mr,dp.lineEnd=xr},polygonEnd:function(){var t=+lp;hp.add(t<0?$d+t:t),this.lineStart=this.lineEnd=this.point=vr},sphere:function(){hp.add($d)}},pp=cr(),vp={point:Pr,lineStart:Rr,lineEnd:Lr,polygonStart:function(){vp.point=Dr,vp.lineStart=Ur,vp.lineEnd=qr,pp.reset(),dp.polygonStart()},polygonEnd:function(){dp.polygonEnd(),vp.point=Pr,vp.lineStart=Rr,vp.lineEnd=Lr,lp<0?(gd=-(_d=180),yd=-(bd=90)):pp>jd?bd=90:pp<-jd&&(yd=-90),Td[0]=gd,Td[1]=_d}},gp={sphere:vr,point:Fr,lineStart:jr,lineEnd:Gr,polygonStart:function(){gp.lineStart=Vr,gp.lineEnd=$r},polygonEnd:function(){gp.lineStart=jr,gp.lineEnd=Gr}};Kr.invert=Kr;var yp,_p,bp,mp,xp,wp,Mp,Ap,Tp,Np,Sp,Ep=cr(),kp=di(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?Xd:-Xd,f=Qd(o-e);Qd(f-Xd)<jd?(t.point(e,r=(r+a)/2>0?Gd:-Gd),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&f>=Xd&&(Qd(e-i)<jd&&(e-=i*jd),Qd(o-u)<jd&&(o-=u*jd),r=function(t,n,e,r){var i,o,a=op(t-e);return Qd(a)>jd?Jd((op(n)*(o=tp(r))*op(e)-op(r)*(i=tp(n))*op(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*Gd,r.point(-Xd,i),r.point(0,i),r.point(Xd,i),r.point(Xd,0),r.point(Xd,-i),r.point(0,-i),r.point(-Xd,-i),r.point(-Xd,0),r.point(-Xd,i);else if(Qd(t[0]-n[0])>jd){var o=t[0]<n[0]?Xd:-Xd;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-Xd,-Gd]),Cp=1e9,Pp=-Cp,zp=cr(),Rp={sphere:vr,point:vr,lineStart:function(){Rp.point=bi,Rp.lineEnd=_i},lineEnd:vr,polygonStart:vr,polygonEnd:vr},Lp=[null,null],Dp={type:"LineString",coordinates:Lp},Up={Feature:function(t,n){return Mi(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(Mi(e[r].geometry,n))return!0;return!1}},qp={Sphere:function(){return!0},Point:function(t,n){return Ai(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ai(e[r],n))return!0;return!1},LineString:function(t,n){return Ti(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ti(e[r],n))return!0;return!1},Polygon:function(t,n){return Ni(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ni(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(Mi(e[r],n))return!0;return!1}},Op=cr(),Yp=cr(),Bp={point:vr,lineStart:vr,lineEnd:vr,polygonStart:function(){Bp.lineStart=Ri,Bp.lineEnd=Ui},polygonEnd:function(){Bp.lineStart=Bp.lineEnd=Bp.point=vr,Op.add(Qd(Yp)),Yp.reset()},result:function(){var t=Op/2;return Op.reset(),t}},Fp=1/0,Ip=Fp,jp=-Fp,Hp=jp,Xp={point:function(t,n){t<Fp&&(Fp=t),t>jp&&(jp=t),n<Ip&&(Ip=n),n>Hp&&(Hp=n)},lineStart:vr,lineEnd:vr,polygonStart:vr,polygonEnd:vr,result:function(){var t=[[Fp,Ip],[jp,Hp]];return jp=Hp=-(Ip=Fp=1/0),t}},Gp=0,Vp=0,$p=0,Wp=0,Zp=0,Qp=0,Jp=0,Kp=0,tv=0,nv={point:qi,lineStart:Oi,lineEnd:Fi,polygonStart:function(){nv.lineStart=Ii,nv.lineEnd=ji},polygonEnd:function(){nv.point=qi,nv.lineStart=Oi,nv.lineEnd=Fi},result:function(){var t=tv?[Jp/tv,Kp/tv]:Qp?[Wp/Qp,Zp/Qp]:$p?[Gp/$p,Vp/$p]:[NaN,NaN];return Gp=Vp=$p=Wp=Zp=Qp=Jp=Kp=tv=0,t}};Gi.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,$d)}},result:vr};var ev,rv,iv,ov,av,uv=cr(),fv={point:vr,lineStart:function(){fv.point=Vi},lineEnd:function(){ev&&$i(rv,iv),fv.point=vr},polygonStart:function(){ev=!0},polygonEnd:function(){ev=null},result:function(){var t=+uv;return uv.reset(),t}};Wi.prototype={_radius:4.5,_circle:Zi(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=Zi(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Ji.prototype={constructor:Ji,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var cv=16,sv=tp(30*Zd),lv=Qi({point:function(t,n){this.stream.point(t*Zd,n*Zd)}}),hv=ho(function(t){return up(2/(1+t))});hv.invert=po(function(t){return 2*dr(t/2)});var dv=ho(function(t){return(t=hr(t))&&t/op(t)});dv.invert=po(function(t){return t}),vo.invert=function(t,n){return[t,2*Jd(ep(n))-Gd]},bo.invert=bo,xo.invert=po(Jd),Mo.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(Qd(e)>jd&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},Ao.invert=po(dr),To.invert=po(function(t){return 2*Jd(t)}),No.invert=function(t,n){return[-n,2*Jd(ep(t))-Gd]},Do.prototype=Po.prototype={constructor:Do,count:function(){return this.eachAfter(Co)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return Po(this).eachBefore(Ro)}};var pv=Array.prototype.slice,vv="$",gv={depth:-1},yv={};ca.prototype=Object.create(Do.prototype);var _v=(1+Math.sqrt(5))/2,bv=function t(n){function e(t,e,r,i,o){la(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(_v),mv=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,f,c,s,l=-1,h=a.length,d=t.value;++l<h;){for(f=(u=a[l]).children,c=u.value=0,s=f.length;c<s;++c)u.value+=f[c].value;u.dice?na(u,e,r,i,r+=(o-r)*u.value/d):sa(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=la(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(_v),xv=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(va),wv=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(va),Mv=function t(n){function e(){var t=wv.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(va),Av=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(va),Tv=function t(n){function e(t){var e=Av.source(n)(t);return function(){return e()/t}}return e.source=t,e}(va),Nv=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(va),Sv=Array.prototype,Ev=Sv.map,kv=Sv.slice,Cv={name:"implicit"},Pv=[0,1],zv=new Date,Rv=new Date,Lv=Ia(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});Lv.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Ia(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):Lv:null};var Dv=Lv.range,Uv=6e4,qv=6048e5,Ov=Ia(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),Yv=Ov.range,Bv=Ia(function(t){t.setTime(Math.floor(t/Uv)*Uv)},function(t,n){t.setTime(+t+n*Uv)},function(t,n){return(n-t)/Uv},function(t){return t.getMinutes()}),Fv=Bv.range,Iv=Ia(function(t){var n=t.getTimezoneOffset()*Uv%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),jv=Iv.range,Hv=Ia(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Uv)/864e5},function(t){return t.getDate()-1}),Xv=Hv.range,Gv=ja(0),Vv=ja(1),$v=ja(2),Wv=ja(3),Zv=ja(4),Qv=ja(5),Jv=ja(6),Kv=Gv.range,tg=Vv.range,ng=$v.range,eg=Wv.range,rg=Zv.range,ig=Qv.range,og=Jv.range,ag=Ia(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),ug=ag.range,fg=Ia(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});fg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ia(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var cg=fg.range,sg=Ia(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Uv)},function(t,n){return(n-t)/Uv},function(t){return t.getUTCMinutes()}),lg=sg.range,hg=Ia(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),dg=hg.range,pg=Ia(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),vg=pg.range,gg=Ha(0),yg=Ha(1),_g=Ha(2),bg=Ha(3),mg=Ha(4),xg=Ha(5),wg=Ha(6),Mg=gg.range,Ag=yg.range,Tg=_g.range,Ng=bg.range,Sg=mg.range,Eg=xg.range,kg=wg.range,Cg=Ia(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),Pg=Cg.range,zg=Ia(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});zg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ia(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var Rg,Lg=zg.range,Dg={"-":"",_:" ",0:"0"},Ug=/^\s*\d+/,qg=/^%/,Og=/[\\^$*+?|[\]().{}]/g;nf({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Yg="%Y-%m-%dT%H:%M:%S.%LZ",Bg=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat(Yg),Fg=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse(Yg),Ig=1e3,jg=60*Ig,Hg=60*jg,Xg=24*Hg,Gg=7*Xg,Vg=30*Xg,$g=365*Xg,Wg=uf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Zg=uf("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Qg=uf("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),Jg=uf("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),Kg=uf("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),ty=uf("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),ny=uf("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),ey=uf("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),ry=uf("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),iy=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(uf),oy=ff(iy),ay=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(uf),uy=ff(ay),fy=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(uf),cy=ff(fy),sy=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(uf),ly=ff(sy),hy=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(uf),dy=ff(hy),py=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(uf),vy=ff(py),gy=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(uf),yy=ff(gy),_y=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(uf),by=ff(_y),my=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(uf),xy=ff(my),wy=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(uf),My=ff(wy),Ay=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(uf),Ty=ff(Ay),Ny=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(uf),Sy=ff(Ny),Ey=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(uf),ky=ff(Ey),Cy=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(uf),Py=ff(Cy),zy=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(uf),Ry=ff(zy),Ly=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(uf),Dy=ff(Ly),Uy=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(uf),qy=ff(Uy),Oy=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(uf),Yy=ff(Oy),By=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(uf),Fy=ff(By),Iy=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(uf),jy=ff(Iy),Hy=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(uf),Xy=ff(Hy),Gy=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(uf),Vy=ff(Gy),$y=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(uf),Wy=ff($y),Zy=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(uf),Qy=ff(Zy),Jy=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(uf),Ky=ff(Jy),t_=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(uf),n_=ff(t_),e_=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(uf),r_=ff(e_),i_=ml(Zt(300,.5,0),Zt(-240,.5,1)),o_=ml(Zt(-100,.75,.35),Zt(80,1.5,.8)),a_=ml(Zt(260,.75,.35),Zt(80,1.5,.8)),u_=Zt(),f_=Rt(),c_=Math.PI/3,s_=2*Math.PI/3,l_=cf(uf("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),h_=cf(uf("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),d_=cf(uf("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),p_=cf(uf("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),v_=Math.abs,g_=Math.atan2,y_=Math.cos,__=Math.max,b_=Math.min,m_=Math.sin,x_=Math.sqrt,w_=1e-12,M_=Math.PI,A_=M_/2,T_=2*M_;_f.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var N_=Sf(bf);Nf.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var S_=Array.prototype.slice,E_={draw:function(t,n){var e=Math.sqrt(n/M_);t.moveTo(e,0),t.arc(0,0,e,0,T_)}},k_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},C_=Math.sqrt(1/3),P_=2*C_,z_={draw:function(t,n){var e=Math.sqrt(n/P_),r=e*C_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},R_=Math.sin(M_/10)/Math.sin(7*M_/10),L_=Math.sin(T_/10)*R_,D_=-Math.cos(T_/10)*R_,U_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=L_*e,i=D_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=T_*o/5,u=Math.cos(a),f=Math.sin(a);t.lineTo(f*e,-u*e),t.lineTo(u*r-f*i,f*r+u*i)}t.closePath()}},q_={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},O_=Math.sqrt(3),Y_={draw:function(t,n){var e=-Math.sqrt(n/(3*O_));t.moveTo(0,2*e),t.lineTo(-O_*e,-e),t.lineTo(O_*e,-e),t.closePath()}},B_=Math.sqrt(3)/2,F_=1/Math.sqrt(12),I_=3*(F_/2+1),j_={draw:function(t,n){var e=Math.sqrt(n/I_),r=e/2,i=e*F_,o=r,a=e*F_+e,u=-o,f=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,f),t.lineTo(-.5*r-B_*i,B_*r+-.5*i),t.lineTo(-.5*o-B_*a,B_*o+-.5*a),t.lineTo(-.5*u-B_*f,B_*u+-.5*f),t.lineTo(-.5*r+B_*i,-.5*i-B_*r),t.lineTo(-.5*o+B_*a,-.5*a-B_*o),t.lineTo(-.5*u+B_*f,-.5*f-B_*u),t.closePath()}},H_=[E_,k_,z_,q_,U_,Y_,j_];Bf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Yf(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Yf(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Ff.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Yf(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},If.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Yf(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},jf.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,f=-1;++f<=e;)r=f/e,this._basis.point(this._beta*t[f]+(1-this._beta)*(i+r*a),this._beta*n[f]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var X_=function t(n){function e(t){return 1===n?new Bf(t):new jf(t,n)}return e.beta=function(n){return t(+n)},e}(.85);Xf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Hf(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Hf(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var G_=function t(n){function e(t){return new Xf(t,n)}return e.tension=function(n){return t(+n)},e}(0);Gf.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Hf(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var V_=function t(n){function e(t){return new Gf(t,n)}return e.tension=function(n){return t(+n)},e}(0);Vf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Hf(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var $_=function t(n){function e(t){return new Vf(t,n)}return e.tension=function(n){return t(+n)},e}(0);Wf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:$f(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var W_=function t(n){function e(t){return n?new Wf(t,n):new Xf(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Zf.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:$f(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Z_=function t(n){function e(t){return n?new Zf(t,n):new Gf(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Qf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:$f(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Q_=function t(n){function e(t){return n?new Qf(t,n):new Vf(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Jf.prototype={areaStart:Of,areaEnd:Of,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},rc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ec(this,this._t0,nc(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,ec(this,nc(this,e=tc(this,t,n)),e);break;default:ec(this,this._t0,e=tc(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(ic.prototype=Object.create(rc.prototype)).point=function(t,n){rc.prototype.point.call(this,n,t)},oc.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},ac.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=uc(t),i=uc(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},fc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},yc.prototype={constructor:yc,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=xc(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(bc(this,e),e=(t=e).U),e.C=!1,r.C=!0,mc(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(mc(this,e),e=(t=e).U),e.C=!1,r.C=!0,bc(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?xc(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,bc(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,mc(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,bc(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,mc(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,bc(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,mc(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var J_,K_,tb,nb,eb,rb=[],ib=[],ob=1e-6,ab=1e-12;Yc.prototype={constructor:Yc,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Ec(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,f=-1,c=n[i[o-1]],s=c.left===u?c.right:c.left;++f<o;)a=s,s=(c=n[i[f]]).left===u?c.right:c.left,a&&s&&r<a.index&&r<s.index&&qc(u,a,s)<0&&t.push([u.data,a.data,s.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var f=t-i.site[0],c=n-i.site[1],s=f*f+c*c;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var f=t-u[0],c=n-u[1],l=f*f+c*c;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Fc.prototype={constructor:Fc,scale:function(t){return 1===t?this:new Fc(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Fc(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ub=new Fc(1,0,0);Ic.prototype=Fc.prototype,t.version="5.4.0",t.bisect=Jc,t.bisectRight=Jc,t.bisectLeft=Kc,t.ascending=n,t.bisector=e,t.cross=function(t,n,e){var i,o,a,u,f=t.length,c=n.length,s=new Array(f*c);for(null==e&&(e=r),i=a=0;i<f;++i)for(u=t[i],o=0;o<c;++o,++a)s[a]=e(u,n[o]);return s},t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=a,t.extent=u,t.histogram=function(){function t(t){var i,o,a=t.length,u=new Array(a);for(i=0;i<a;++i)u[i]=n(t[i],i,t);var f=e(u),c=f[0],l=f[1],h=r(u,c,l);Array.isArray(h)||(h=d(c,l,h),h=s(Math.ceil(c/h)*h,Math.floor(l/h)*h,h));for(var p=h.length;h[0]<=c;)h.shift(),--p;for(;h[p-1]>l;)h.pop(),--p;var v,g=new Array(p+1);for(i=0;i<=p;++i)(v=g[i]=[]).x0=i>0?h[i-1]:c,v.x1=i<p?h[i]:l;for(i=0;i<a;++i)c<=(o=u[i])&&o<=l&&g[Jc(h,o,0,p)].push(t[i]);return g}var n=c,e=u,r=p;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:f(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:f([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:Array.isArray(n)?f(ns.call(n)):f(n),t):r},t},t.thresholdFreedmanDiaconis=function(t,e,r){return t=es.call(t,i).sort(n),Math.ceil((r-e)/(2*(v(t,.75)-v(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*a(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=p,t.max=g,t.mean=function(t,n){var e,r=t.length,o=r,a=-1,u=0;if(null==n)for(;++a<r;)isNaN(e=i(t[a]))?--o:u+=e;else for(;++a<r;)isNaN(e=i(n(t[a],a,t)))?--o:u+=e;if(o)return u/o},t.median=function(t,e){var r,o=t.length,a=-1,u=[];if(null==e)for(;++a<o;)isNaN(r=i(t[a]))||u.push(r);else for(;++a<o;)isNaN(r=i(e(t[a],a,t)))||u.push(r);return v(u.sort(n),.5)},t.merge=y,t.min=_,t.pairs=function(t,n){null==n&&(n=r);for(var e=0,i=t.length-1,o=t[0],a=new Array(i<0?0:i);e<i;)a[e]=n(o,o=t[++e]);return a},t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.quantile=v,t.range=s,t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.ticks=l,t.tickIncrement=h,t.tickStep=d,t.transpose=b,t.variance=o,t.zip=function(){return b(arguments)},t.axisTop=function(t){return T(us,t)},t.axisRight=function(t){return T(fs,t)},t.axisBottom=function(t){return T(cs,t)},t.axisLeft=function(t){return T(ss,t)},t.brush=function(){return ee(_h)},t.brushX=function(){return ee(gh)},t.brushY=function(){return ee(yh)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.chord=function(){function t(t){var o,a,u,f,c,l,h=t.length,d=[],p=s(h),v=[],g=[],y=g.groups=new Array(h),_=new Array(h*h);for(o=0,c=-1;++c<h;){for(a=0,l=-1;++l<h;)a+=t[c][l];d.push(a),v.push(s(h)),o+=a}for(e&&p.sort(function(t,n){return e(d[t],d[n])}),r&&v.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),f=(o=kh(0,Eh-n*h)/o)?n:Eh/h,a=0,c=-1;++c<h;){for(u=a,l=-1;++l<h;){var b=p[c],m=v[b][l],x=t[b][m],w=a,M=a+=x*o;_[m*h+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:d[b]},a+=f}for(c=-1;++c<h;)for(l=c-1;++l<h;){var A=_[l*h+c],T=_[c*h+l];(A.value||T.value)&&g.push(A.value<T.value?{source:T,target:A}:{source:A,target:T})}return i?g.sort(i):g}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=kh(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=function(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}(n))._=n,t):i&&i._},t},t.ribbon=function(){function t(){var t,u=Ch.call(arguments),f=n.apply(this,u),c=e.apply(this,u),s=+r.apply(this,(u[0]=f,u)),l=i.apply(this,u)-Sh,h=o.apply(this,u)-Sh,d=s*Ah(l),p=s*Th(l),v=+r.apply(this,(u[0]=c,u)),g=i.apply(this,u)-Sh,y=o.apply(this,u)-Sh;if(a||(a=t=oe()),a.moveTo(d,p),a.arc(0,0,s,l,h),l===g&&h===y||(a.quadraticCurveTo(0,0,v*Ah(g),v*Th(g)),a.arc(0,0,v,g,y)),a.quadraticCurveTo(0,0,d,p),a.closePath(),t)return a=null,t+""||null}var n=ae,e=ue,r=fe,i=ce,o=se,a=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:re(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:re(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:re(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(a=null==n?null:n,t):a},t},t.nest=function(){function t(n,i,a,u){if(i>=o.length)return null!=e&&n.sort(e),null!=r?r(n):n;for(var f,c,s,l=-1,h=n.length,d=o[i++],p=he(),v=a();++l<h;)(s=p.get(f=d(c=n[l])+""))?s.push(c):p.set(f,[c]);return p.each(function(n,e){u(v,e,t(n,i,a,u))}),v}function n(t,e){if(++e>o.length)return t;var i,u=a[e-1];return null!=r&&e>=o.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=u?i.sort(function(t,n){return u(t.key,n.key)}):i}var e,r,i,o=[],a=[];return i={object:function(n){return t(n,0,de,pe)},map:function(n){return t(n,0,ve,ge)},entries:function(e){return n(t(e,0,ve,ge),0)},key:function(t){return o.push(t),i},sortKeys:function(t){return a[o.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},t.set=_e,t.map=he,t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.color=kt,t.rgb=Rt,t.hsl=qt,t.lab=Ft,t.hcl=$t,t.lch=function(t,n,e,r){return 1===arguments.length?Vt(t):new Wt(e,n,t,null==r?1:r)},t.gray=function(t,n){return new It(t,0,0,null==n?1:n)},t.cubehelix=Zt,t.contours=Me,t.contourDensity=function(){function t(t){var e=new Float32Array(v*y),r=new Float32Array(v*y);t.forEach(function(t,n,r){var i=a(t,n,r)+p>>h,o=u(t,n,r)+p>>h;i>=0&&i<v&&o>=0&&o<y&&++e[i+o*v]}),Ae({width:v,height:y,data:e},{width:v,height:y,data:r},l>>h),Te({width:v,height:y,data:r},{width:v,height:y,data:e},l>>h),Ae({width:v,height:y,data:e},{width:v,height:y,data:r},l>>h),Te({width:v,height:y,data:r},{width:v,height:y,data:e},l>>h),Ae({width:v,height:y,data:e},{width:v,height:y,data:r},l>>h),Te({width:v,height:y,data:r},{width:v,height:y,data:e},l>>h);var i=_(e);if(!Array.isArray(i)){var o=g(e);i=d(0,o,i),(i=s(0,Math.floor(o/i)*i,i)).shift()}return Me().thresholds(i).size([v,y])(e).map(n)}function n(t){return t.value*=Math.pow(2,-2*h),t.coordinates.forEach(e),t}function e(t){t.forEach(r)}function r(t){t.forEach(i)}function i(t){t[0]=t[0]*Math.pow(2,h)-p,t[1]=t[1]*Math.pow(2,h)-p}function o(){return p=3*l,v=f+2*p>>h,y=c+2*p>>h,t}var a=Ne,u=Se,f=960,c=500,l=20,h=2,p=3*l,v=f+2*p>>h,y=c+2*p>>h,_=me(20);return t.x=function(n){return arguments.length?(a="function"==typeof n?n:me(+n),t):a},t.y=function(n){return arguments.length?(u="function"==typeof n?n:me(+n),t):u},t.size=function(t){if(!arguments.length)return[f,c];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return f=n,c=e,o()},t.cellSize=function(t){if(!arguments.length)return 1<<h;if(!((t=+t)>=1))throw new Error("invalid cell size");return h=Math.floor(Math.log(t)/Math.LN2),o()},t.thresholds=function(n){return arguments.length?(_="function"==typeof n?n:Array.isArray(n)?me(Dh.call(n)):me(n),t):_},t.bandwidth=function(t){if(!arguments.length)return Math.sqrt(l*(l+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return l=Math.round((Math.sqrt(4*t*t+1)-1)/2),o()},t},t.dispatch=N,t.drag=function(){function n(t){t.on("mousedown.drag",e).filter(g).on("touchstart.drag",o).on("touchmove.drag",a).on("touchend.drag touchcancel.drag",u).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!h&&d.apply(this,arguments)){var n=f("mouse",p.apply(this,arguments),pt,this,arguments);n&&(ct(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),_t(t.event.view),gt(),l=!1,c=t.event.clientX,s=t.event.clientY,n("start"))}}function r(){if(yt(),!l){var n=t.event.clientX-c,e=t.event.clientY-s;l=n*n+e*e>m}y.mouse("drag")}function i(){ct(t.event.view).on("mousemove.drag mouseup.drag",null),bt(t.event.view,l),yt(),y.mouse("end")}function o(){if(d.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=p.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=f(r[n].identifier,i,vt,this,arguments))&&(gt(),e("start"))}}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=y[r[n].identifier])&&(yt(),e("drag"))}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(h&&clearTimeout(h),h=setTimeout(function(){h=null},500),n=0;n<i;++n)(e=y[r[n].identifier])&&(gt(),e("end"))}function f(e,r,i,o,a){var u,f,c,s=i(r,e),l=_.copy();if(ot(new xt(n,"beforestart",u,e,b,s[0],s[1],0,0,l),function(){return null!=(t.event.subject=u=v.apply(o,a))&&(f=u.x-s[0]||0,c=u.y-s[1]||0,!0)}))return function t(h){var d,p=s;switch(h){case"start":y[e]=t,d=b++;break;case"end":delete y[e],--b;case"drag":s=i(r,e),d=b}ot(new xt(n,h,u,e,d,s[0]+f,s[1]+c,s[0]-p[0],s[1]-p[1],l),l.apply,l,[h,o,a])}}var c,s,l,h,d=wt,p=Mt,v=At,g=Tt,y={},_=N("start","drag","end"),b=0,m=0;return n.filter=function(t){return arguments.length?(d="function"==typeof t?t:mt(!!t),n):d},n.container=function(t){return arguments.length?(p="function"==typeof t?t:mt(t),n):p},n.subject=function(t){return arguments.length?(v="function"==typeof t?t:mt(t),n):v},n.touchable=function(t){return arguments.length?(g="function"==typeof t?t:mt(!!t),n):g},n.on=function(){var t=_.on.apply(_,arguments);return t===_?n:t},n.clickDistance=function(t){return arguments.length?(m=(t=+t)*t,n):Math.sqrt(m)},n},t.dragDisable=_t,t.dragEnable=bt,t.dsvFormat=ke,t.csvParse=jh,t.csvParseRows=Hh,t.csvFormat=Xh,t.csvFormatRows=Gh,t.tsvParse=$h,t.tsvParseRows=Wh,t.tsvFormat=Zh,t.tsvFormatRows=Qh,t.easeLinear=function(t){return+t},t.easeQuad=Fn,t.easeQuadIn=function(t){return t*t},t.easeQuadOut=function(t){return t*(2-t)},t.easeQuadInOut=Fn,t.easeCubic=In,t.easeCubicIn=function(t){return t*t*t},t.easeCubicOut=function(t){return--t*t*t+1},t.easeCubicInOut=In,t.easePoly=Hl,t.easePolyIn=Il,t.easePolyOut=jl,t.easePolyInOut=Hl,t.easeSin=jn,t.easeSinIn=function(t){return 1-Math.cos(t*Gl)},t.easeSinOut=function(t){return Math.sin(t*Gl)},t.easeSinInOut=jn,t.easeExp=Hn,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeExpInOut=Hn,t.easeCircle=Xn,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCircleInOut=Xn,t.easeBounce=Gn,t.easeBounceIn=function(t){return 1-Gn(1-t)},t.easeBounceOut=Gn,t.easeBounceInOut=function(t){return((t*=2)<=1?1-Gn(1-t):Gn(t-1)+1)/2},t.easeBack=oh,t.easeBackIn=rh,t.easeBackOut=ih,t.easeBackInOut=oh,t.easeElastic=fh,t.easeElasticIn=uh,t.easeElasticOut=fh,t.easeElasticInOut=ch,t.blob=function(t,n){return fetch(t,n).then(Ce)},t.buffer=function(t,n){return fetch(t,n).then(Pe)},t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=ke(t);return Re(n,e).then(function(t){return i.parse(t,r)})},t.csv=Jh,t.tsv=Kh,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.json=function(t,n){return fetch(t,n).then(De)},t.text=Re,t.xml=td,t.html=nd,t.svg=ed,t.forceCenter=function(t,n){function e(){var e,i,o=r.length,a=0,u=0;for(e=0;e<o;++e)a+=(i=r[e]).x,u+=i.y;for(a=a/o-t,u=u/o-n,e=0;e<o;++e)(i=r[e]).x-=a,i.y-=u}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},t.forceCollide=function(t){function n(){for(var t,n,r,f,c,s,l,h=i.length,d=0;d<u;++d)for(n=je(i,Ge,Ve).visitAfter(e),t=0;t<h;++t)r=i[t],s=o[r.index],l=s*s,f=r.x+r.vx,c=r.y+r.vy,n.visit(function(t,n,e,i,o){var u=t.data,h=t.r,d=s+h;if(!u)return n>f+d||i<f-d||e>c+d||o<c-d;if(u.index>r.index){var p=f-u.x-u.vx,v=c-u.y-u.vy,g=p*p+v*v;g<d*d&&(0===p&&(p=Oe(),g+=p*p),0===v&&(v=Oe(),g+=v*v),g=(d-(g=Math.sqrt(g)))/g*a,r.vx+=(p*=g)*(d=(h*=h)/(l+h)),r.vy+=(v*=g)*d,u.vx-=p*(d=1-d),u.vy-=v*d)}})}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,a=1,u=1;return"function"!=typeof t&&(t=qe(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(u=+t,n):u},n.strength=function(t){return arguments.length?(a=+t,n):a},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:qe(+e),r(),n):t},n},t.forceLink=function(t){function n(n){for(var e=0,r=t.length;e<d;++e)for(var i,u,f,s,l,h,p,v=0;v<r;++v)u=(i=t[v]).source,s=(f=i.target).x+f.vx-u.x-u.vx||Oe(),l=f.y+f.vy-u.y-u.vy||Oe(),s*=h=((h=Math.sqrt(s*s+l*l))-a[v])/h*n*o[v],l*=h,f.vx-=s*(p=c[v]),f.vy-=l*p,u.vx+=s*(p=1-p),u.vy+=l*p}function e(){if(u){var n,e,l=u.length,h=t.length,d=he(u,s);for(n=0,f=new Array(l);n<h;++n)(e=t[n]).index=n,"object"!=typeof e.source&&(e.source=We(d,e.source)),"object"!=typeof e.target&&(e.target=We(d,e.target)),f[e.source.index]=(f[e.source.index]||0)+1,f[e.target.index]=(f[e.target.index]||0)+1;for(n=0,c=new Array(h);n<h;++n)e=t[n],c[n]=f[e.source.index]/(f[e.source.index]+f[e.target.index]);o=new Array(h),r(),a=new Array(h),i()}}function r(){if(u)for(var n=0,e=t.length;n<e;++n)o[n]=+l(t[n],n,t)}function i(){if(u)for(var n=0,e=t.length;n<e;++n)a[n]=+h(t[n],n,t)}var o,a,u,f,c,s=$e,l=function(t){return 1/Math.min(f[t.source.index],f[t.target.index])},h=qe(30),d=1;return null==t&&(t=[]),n.initialize=function(t){u=t,e()},n.links=function(r){return arguments.length?(t=r,e(),n):t},n.id=function(t){return arguments.length?(s=t,n):s},n.iterations=function(t){return arguments.length?(d=+t,n):d},n.strength=function(t){return arguments.length?(l="function"==typeof t?t:qe(+t),r(),n):l},n.distance=function(t){return arguments.length?(h="function"==typeof t?t:qe(+t),i(),n):h},n},t.forceManyBody=function(){function t(t){var n,u=i.length,f=je(i,Ze,Qe).visitAfter(e);for(a=t,n=0;n<u;++n)o=i[n],f.visit(r)}function n(){if(i){var t,n,e=i.length;for(u=new Array(e),t=0;t<e;++t)n=i[t],u[n.index]=+f(n,t,i)}}function e(t){var n,e,r,i,o,a=0,f=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=Math.abs(n.value))&&(a+=n.value,f+=e,r+=e*n.x,i+=e*n.y);t.x=r/f,t.y=i/f}else{(n=t).x=n.data.x,n.y=n.data.y;do{a+=u[n.data.index]}while(n=n.next)}t.value=a}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,f=t.y-o.y,h=r-n,d=i*i+f*f;if(h*h/l<d)return d<s&&(0===i&&(i=Oe(),d+=i*i),0===f&&(f=Oe(),d+=f*f),d<c&&(d=Math.sqrt(c*d)),o.vx+=i*t.value*a/d,o.vy+=f*t.value*a/d),!0;if(!(t.length||d>=s)){(t.data!==o||t.next)&&(0===i&&(i=Oe(),d+=i*i),0===f&&(f=Oe(),d+=f*f),d<c&&(d=Math.sqrt(c*d)));do{t.data!==o&&(h=u[t.data.index]*a/d,o.vx+=i*h,o.vy+=f*h)}while(t=t.next)}}var i,o,a,u,f=qe(-30),c=1,s=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(f="function"==typeof e?e:qe(+e),n(),t):f},t.distanceMin=function(n){return arguments.length?(c=n*n,t):Math.sqrt(c)},t.distanceMax=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},t.forceRadial=function(t,n,e){function r(t){for(var r=0,i=o.length;r<i;++r){var f=o[r],c=f.x-n||1e-6,s=f.y-e||1e-6,l=Math.sqrt(c*c+s*s),h=(u[r]-l)*a[r]*t/l;f.vx+=c*h,f.vy+=s*h}}function i(){if(o){var n,e=o.length;for(a=new Array(e),u=new Array(e),n=0;n<e;++n)u[n]=+t(o[n],n,o),a[n]=isNaN(u[n])?0:+f(o[n],n,o)}}var o,a,u,f=qe(.1);return"function"!=typeof t&&(t=qe(+t)),null==n&&(n=0),null==e&&(e=0),r.initialize=function(t){o=t,i()},r.strength=function(t){return arguments.length?(f="function"==typeof t?t:qe(+t),i(),r):f},r.radius=function(n){return arguments.length?(t="function"==typeof n?n:qe(+n),i(),r):t},r.x=function(t){return arguments.length?(n=+t,r):n},r.y=function(t){return arguments.length?(e=+t,r):e},r},t.forceSimulation=function(t){function n(){e(),d.call("tick",o),a<u&&(h.stop(),d.call("end",o))}function e(){var n,e,r=t.length;for(a+=(c-a)*f,l.each(function(t){t(a)}),n=0;n<r;++n)null==(e=t[n]).fx?e.x+=e.vx*=s:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=s:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=id*Math.sqrt(e),o=e*od;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var o,a=1,u=.001,f=1-Math.pow(u,1/300),c=0,s=.6,l=he(),h=Tn(n),d=N("tick","end");return null==t&&(t=[]),r(),o={tick:e,restart:function(){return h.restart(n),o},stop:function(){return h.stop(),o},nodes:function(n){return arguments.length?(t=n,r(),l.each(i),o):t},alpha:function(t){return arguments.length?(a=+t,o):a},alphaMin:function(t){return arguments.length?(u=+t,o):u},alphaDecay:function(t){return arguments.length?(f=+t,o):+f},alphaTarget:function(t){return arguments.length?(c=+t,o):c},velocityDecay:function(t){return arguments.length?(s=1-t,o):1-s},force:function(t,n){return arguments.length>1?(null==n?l.remove(t):l.set(t,i(n)),o):l.get(t)},find:function(n,e,r){var i,o,a,u,f,c=0,s=t.length;for(null==r?r=1/0:r*=r,c=0;c<s;++c)(a=(i=n-(u=t[c]).x)*i+(o=e-u.y)*o)<r&&(f=u,r=a);return f},on:function(t,n){return arguments.length>1?(d.on(t,n),o):d.on(t)}}},t.forceX=function(t){function n(t){for(var n,e=0,a=r.length;e<a;++e)(n=r[e]).vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+a(r[n],n,r)}}var r,i,o,a=qe(.1);return"function"!=typeof t&&(t=qe(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(a="function"==typeof t?t:qe(+t),e(),n):a},n.x=function(r){return arguments.length?(t="function"==typeof r?r:qe(+r),e(),n):t},n},t.forceY=function(t){function n(t){for(var n,e=0,a=r.length;e<a;++e)(n=r[e]).vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+a(r[n],n,r)}}var r,i,o,a=qe(.1);return"function"!=typeof t&&(t=qe(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(a="function"==typeof t?t:qe(+t),e(),n):a},n.y=function(r){return arguments.length?(t="function"==typeof r?r:qe(+r),e(),n):t},n},t.formatDefaultLocale=or,t.formatLocale=ir,t.formatSpecifier=tr,t.precisionFixed=ar,t.precisionPrefix=ur,t.precisionRound=fr,t.geoArea=function(t){return hp.reset(),br(t,dp),2*hp},t.geoBounds=function(t){var n,e,r,i,o,a,u;if(bd=_d=-(gd=yd=1/0),Ad=[],br(t,vp),e=Ad.length){for(Ad.sort(Yr),n=1,o=[r=Ad[0]];n<e;++n)Br(r,(i=Ad[n])[0])||Br(r,i[1])?(Or(r[0],i[1])>Or(r[0],r[1])&&(r[1]=i[1]),Or(i[0],r[1])>Or(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Or(r[1],i[0]))>a&&(a=u,gd=i[0],_d=r[1])}return Ad=Td=null,gd===1/0||yd===1/0?[[NaN,NaN],[NaN,NaN]]:[[gd,yd],[_d,bd]]},t.geoCentroid=function(t){Nd=Sd=Ed=kd=Cd=Pd=zd=Rd=Ld=Dd=Ud=0,br(t,gp);var n=Ld,e=Dd,r=Ud,i=n*n+e*e+r*r;return i<Hd&&(n=Pd,e=zd,r=Rd,Sd<jd&&(n=Ed,e=kd,r=Cd),(i=n*n+e*e+r*r)<Hd)?[NaN,NaN]:[Kd(e,n)*Wd,dr(r/up(i))*Wd]},t.geoCircle=function(){function t(){var t=r.apply(this,arguments),u=i.apply(this,arguments)*Zd,f=o.apply(this,arguments)*Zd;return n=[],e=ti(-t[0]*Zd,-t[1]*Zd,0).invert,oi(a,u,f,1),t={type:"Polygon",coordinates:[n]},n=e=null,t}var n,e,r=Qr([0,0]),i=Qr(90),o=Qr(6),a={point:function(t,r){n.push(t=e(t,r)),t[0]*=Wd,t[1]*=Wd}};return t.center=function(n){return arguments.length?(r="function"==typeof n?n:Qr([+n[0],+n[1]]),t):r},t.radius=function(n){return arguments.length?(i="function"==typeof n?n:Qr(+n),t):i},t.precision=function(n){return arguments.length?(o="function"==typeof n?n:Qr(+n),t):o},t},t.geoClipAntimeridian=kp,t.geoClipCircle=gi,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=yi(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=yi,t.geoContains=function(t,n){return(t&&Up.hasOwnProperty(t.type)?Up[t.type]:Mi)(t,n)},t.geoDistance=wi,t.geoGraticule=Pi,t.geoGraticule10=function(){return Pi()()},t.geoInterpolate=function(t,n){var e=t[0]*Zd,r=t[1]*Zd,i=n[0]*Zd,o=n[1]*Zd,a=tp(r),u=op(r),f=tp(o),c=op(o),s=a*tp(e),l=a*op(e),h=f*tp(i),d=f*op(i),p=2*dr(up(pr(o-r)+a*f*pr(i-e))),v=op(p),g=p?function(t){var n=op(t*=p)/v,e=op(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*c;return[Kd(i,r)*Wd,Kd(o,up(r*r+i*i))*Wd]}:function(){return[e*Wd,r*Wd]};return g.distance=p,g},t.geoLength=xi,t.geoPath=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),br(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return br(t,r(Bp)),Bp.result()},e.measure=function(t){return br(t,r(fv)),fv.result()},e.bounds=function(t){return br(t,r(Xp)),Xp.result()},e.centroid=function(t){return br(t,r(nv)),nv.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,zi):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Wi):new Gi(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},t.geoAlbers=lo,t.geoAlbersUsa=function(){function t(t){var n=t[0],e=t[1];return u=null,i.point(n,e),u||(o.point(n,e),u)||(a.point(n,e),u)}function n(){return e=r=null,t}var e,r,i,o,a,u,f=lo(),c=so().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=so().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){u=[t,n]}};return t.invert=function(t){var n=f.scale(),e=f.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?c:i>=.166&&i<.234&&r>=-.214&&r<-.115?s:f).invert(t)},t.stream=function(t){return e&&r===t?e:e=function(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}([f.stream(r=t),c.stream(t),s.stream(t)])},t.precision=function(t){return arguments.length?(f.precision(t),c.precision(t),s.precision(t),n()):f.precision()},t.scale=function(n){return arguments.length?(f.scale(n),c.scale(.35*n),s.scale(n),t.translate(f.translate())):f.scale()},t.translate=function(t){if(!arguments.length)return f.translate();var e=f.scale(),r=+t[0],u=+t[1];return i=f.translate(t).clipExtent([[r-.455*e,u-.238*e],[r+.455*e,u+.238*e]]).stream(l),o=c.translate([r-.307*e,u+.201*e]).clipExtent([[r-.425*e+jd,u+.12*e+jd],[r-.214*e-jd,u+.234*e-jd]]).stream(l),a=s.translate([r-.205*e,u+.212*e]).clipExtent([[r-.214*e+jd,u+.166*e+jd],[r-.115*e-jd,u+.234*e-jd]]).stream(l),n()},t.fitExtent=function(n,e){return to(t,n,e)},t.fitSize=function(n,e){return no(t,n,e)},t.fitWidth=function(n,e){return eo(t,n,e)},t.fitHeight=function(n,e){return ro(t,n,e)},t.scale(1070)},t.geoAzimuthalEqualArea=function(){return ao(hv).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=hv,t.geoAzimuthalEquidistant=function(){return ao(dv).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=dv,t.geoConicConformal=function(){return fo(_o).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=_o,t.geoConicEqualArea=so,t.geoConicEqualAreaRaw=co,t.geoConicEquidistant=function(){return fo(mo).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=mo,t.geoEquirectangular=function(){return ao(bo).scale(152.63)},t.geoEquirectangularRaw=bo,t.geoGnomonic=function(){return ao(xo).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=xo,t.geoIdentity=function(){function t(){return i=o=null,a}var n,e,r,i,o,a,u=1,f=0,c=0,s=1,l=1,h=zi,d=null,p=zi;return a={stream:function(t){return i&&o===t?i:i=h(p(o=t))},postclip:function(i){return arguments.length?(p=i,d=n=e=r=null,t()):p},clipExtent:function(i){return arguments.length?(p=null==i?(d=n=e=r=null,zi):yi(d=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==d?null:[[d,n],[e,r]]},scale:function(n){return arguments.length?(h=wo((u=+n)*s,u*l,f,c),t()):u},translate:function(n){return arguments.length?(h=wo(u*s,u*l,f=+n[0],c=+n[1]),t()):[f,c]},reflectX:function(n){return arguments.length?(h=wo(u*(s=n?-1:1),u*l,f,c),t()):s<0},reflectY:function(n){return arguments.length?(h=wo(u*s,u*(l=n?-1:1),f,c),t()):l<0},fitExtent:function(t,n){return to(a,t,n)},fitSize:function(t,n){return no(a,t,n)},fitWidth:function(t,n){return eo(a,t,n)},fitHeight:function(t,n){return ro(a,t,n)}}},t.geoProjection=ao,t.geoProjectionMutator=uo,t.geoMercator=function(){return go(vo).scale(961/$d)},t.geoMercatorRaw=vo,t.geoNaturalEarth1=function(){return ao(Mo).scale(175.295)},t.geoNaturalEarth1Raw=Mo,t.geoOrthographic=function(){return ao(Ao).scale(249.5).clipAngle(90+jd)},t.geoOrthographicRaw=Ao,t.geoStereographic=function(){return ao(To).scale(250).clipAngle(142)},t.geoStereographicRaw=To,t.geoTransverseMercator=function(){var t=go(No),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=No,t.geoRotation=ii,t.geoStream=br,t.geoTransform=function(t){return{stream:Qi(t)}},t.cluster=function(){function t(t){var o,a=0;t.eachAfter(function(t){var e=t.children;e?(t.x=function(t){return t.reduce(Eo,0)/t.length}(e),t.y=function(t){return 1+t.reduce(ko,0)}(e)):(t.x=o?a+=n(t,o):0,t.y=0,o=t)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(t),f=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(t),c=u.x-n(u,f)/2,s=f.x+n(f,u)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-c)/(s-c)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=So,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},t.hierarchy=Po,t.pack=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(Qo(n)).eachAfter(Jo(i,.5)).eachBefore(Ko(1)):t.eachBefore(Qo(Zo)).eachAfter(Jo($o,1)).eachAfter(Jo(i,t.r/Math.min(e,r))).eachBefore(Ko(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=$o;return t.radius=function(e){return arguments.length?(n=function(t){return null==t?null:Vo(t)}(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Wo(+n),t):i},t},t.packSiblings=function(t){return Go(t),t},t.packEnclose=Uo,t.partition=function(){function t(t){var o=t.height+1;return t.x0=t.y0=r,t.x1=n,t.y1=e/o,t.eachBefore(function(t,n){return function(e){e.children&&na(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var i=e.x0,o=e.y0,a=e.x1-r,u=e.y1-r;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),e.x0=i,e.y0=o,e.x1=a,e.y1=u}}(e,o)),i&&t.eachBefore(ta),t}var n=1,e=1,r=0,i=!1;return t.round=function(n){return arguments.length?(i=!!n,t):i},t.size=function(r){return arguments.length?(n=+r[0],e=+r[1],t):[n,e]},t.padding=function(n){return arguments.length?(r=+n,t):r},t},t.stratify=function(){function t(t){var r,i,o,a,u,f,c,s=t.length,l=new Array(s),h={};for(i=0;i<s;++i)r=t[i],u=l[i]=new Do(r),null!=(f=n(r,i,t))&&(f+="")&&(h[c=vv+(u.id=f)]=c in h?yv:u);for(i=0;i<s;++i)if(u=l[i],null!=(f=e(t[i],i,t))&&(f+="")){if(!(a=h[vv+f]))throw new Error("missing: "+f);if(a===yv)throw new Error("ambiguous: "+f);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=gv,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(Lo),o.parent=null,s>0)throw new Error("cycle");return o}var n=ea,e=ra;return t.id=function(e){return arguments.length?(n=Vo(e),t):n},t.parentId=function(n){return arguments.length?(e=Vo(n),t):e},t},t.tree=function(){function t(t){var f=function(t){for(var n,e,r,i,o,a=new ca(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new ca(r[i],i)),e.parent=n;return(a.parent=new ca(null,0)).children=[a],a}(t);if(f.eachAfter(n),f.parent.m=-f.z,f.eachBefore(e),u)t.eachBefore(r);else{var c=t,s=t,l=t;t.eachBefore(function(t){t.x<c.x&&(c=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=c===s?1:i(c,s)/2,d=h-c.x,p=o/(s.x+h+d),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,r=t.i?e[t.i-1]:null;if(n){(function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)})(t);var o=(n[0].z+n[n.length-1].z)/2;r?(t.z=r.z+i(t._,r._),t.m=t.z-o):t.z=o}else r&&(t.z=r.z+i(t._,r._));t.parent.A=function(t,n,e){if(n){for(var r,o=t,a=t,u=n,f=o.parent.children[0],c=o.m,s=a.m,l=u.m,h=f.m;u=aa(u),o=oa(o),u&&o;)f=oa(f),(a=aa(a)).a=t,(r=u.z+l-o.z-c+i(u._,o._))>0&&(ua(fa(u,t,e),t,r),c+=r,s+=r),l+=u.m,c+=o.m,h+=f.m,s+=a.m;u&&!aa(a)&&(a.t=u,a.m+=l-s),o&&!oa(f)&&(f.t=o,f.m+=c-h,e=t)}return e}(t,r,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t){t.x*=o,t.y=t.depth*a}var i=ia,o=1,a=1,u=null;return t.separation=function(n){return arguments.length?(i=n,t):i},t.size=function(n){return arguments.length?(u=!1,o=+n[0],a=+n[1],t):u?null:[o,a]},t.nodeSize=function(n){return arguments.length?(u=!0,o=+n[0],a=+n[1],t):u?[o,a]:null},t},t.treemap=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),a=[0],r&&t.eachBefore(ta),t}function n(t){var n=a[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=a[t.depth+1]=u(t)/2,r+=l(t)-n,i+=f(t)-n,o-=c(t)-n,h-=s(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=bv,r=!1,i=1,o=1,a=[0],u=$o,f=$o,c=$o,s=$o,l=$o;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=Vo(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(u="function"==typeof n?n:Wo(+n),t):u},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(f="function"==typeof n?n:Wo(+n),t):f},t.paddingRight=function(n){return arguments.length?(c="function"==typeof n?n:Wo(+n),t):c},t.paddingBottom=function(n){return arguments.length?(s="function"==typeof n?n:Wo(+n),t):s},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Wo(+n),t):l},t},t.treemapBinary=function(t,n,e,r,i){function o(t,n,e,r,i,a,u){if(t>=n-1){var c=f[t];return c.x0=r,c.y0=i,c.x1=a,void(c.y1=u)}for(var l=s[t],h=e/2+l,d=t+1,p=n-1;d<p;){var v=d+p>>>1;s[v]<h?d=v+1:p=v}h-s[d-1]<s[d]-h&&t+1<d&&--d;var g=s[d]-l,y=e-g;if(a-r>u-i){var _=(r*y+a*g)/e;o(t,d,g,r,i,_,u),o(d,n,y,_,i,a,u)}else{var b=(i*y+u*g)/e;o(t,d,g,r,i,a,b),o(d,n,y,r,b,a,u)}}var a,u,f=t.children,c=f.length,s=new Array(c+1);for(s[0]=u=a=0;a<c;++a)s[a+1]=u+=f[a].value;o(0,c,t.value,n,e,r,i)},t.treemapDice=na,t.treemapSlice=sa,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?sa:na)(t,n,e,r,i)},t.treemapSquarify=bv,t.treemapResquarify=mv,t.interpolate=dn,t.interpolateArray=fn,t.interpolateBasis=Kt,t.interpolateBasisClosed=tn,t.interpolateDate=cn,t.interpolateNumber=sn,t.interpolateObject=ln,t.interpolateRound=pn,t.interpolateString=hn,t.interpolateTransformCss=cl,t.interpolateTransformSvg=sl,t.interpolateZoom=_n,t.interpolateRgb=el,t.interpolateRgbBasis=rl,t.interpolateRgbBasisClosed=il,t.interpolateHsl=vl,t.interpolateHslLong=gl,t.interpolateLab=function(t,n){var e=an((t=Ft(t)).l,(n=Ft(n)).l),r=an(t.a,n.a),i=an(t.b,n.b),o=an(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateHcl=yl,t.interpolateHclLong=_l,t.interpolateCubehelix=bl,t.interpolateCubehelixLong=ml,t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.path=oe,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],f=0;++r<i;)n=u,u=t[r],f+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return f*=3,[o/f,a/f]},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(da),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=pa(r),a=pa(i),u=a[0]===o[0],f=a[a.length-1]===o[o.length-1],c=[];for(n=o.length-1;n>=0;--n)c.push(t[r[o[n]][2]]);for(n=+u;n<a.length-f;++n)c.push(t[r[a[n]][2]]);return c},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],f=o[0],c=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=c>u&&a<(f-e)*(u-r)/(c-r)+e&&(s=!s),f=e,c=r;return s},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],f=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],f+=Math.sqrt(n*n+e*e);return f},t.quadtree=je,t.randomUniform=xv,t.randomNormal=wv,t.randomLogNormal=Mv,t.randomBates=Tv,t.randomIrwinHall=Av,t.randomExponential=Nv,t.scaleBand=ya,t.scalePoint=function(){return _a(ya().paddingInner(1))},t.scaleIdentity=Ea,t.scaleLinear=Sa,t.scaleLog=Ua,t.scaleOrdinal=ga,t.scaleImplicit=Cv,t.scalePow=Oa,t.scaleSqrt=function(){return Oa().exponent(.5)},t.scaleQuantile=Ya,t.scaleQuantize=Ba,t.scaleThreshold=Fa,t.scaleTime=function(){return of(fg,ag,Gv,Hv,Iv,Bv,Ov,Lv,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},t.scaleUtc=function(){return of(zg,Cg,gg,pg,hg,sg,Ov,Lv,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},t.scaleSequential=af,t.schemeCategory10=Wg,t.schemeAccent=Zg,t.schemeDark2=Qg,t.schemePaired=Jg,t.schemePastel1=Kg,t.schemePastel2=ty,t.schemeSet1=ny,t.schemeSet2=ey,t.schemeSet3=ry,t.interpolateBrBG=oy,t.schemeBrBG=iy,t.interpolatePRGn=uy,t.schemePRGn=ay,t.interpolatePiYG=cy,t.schemePiYG=fy,t.interpolatePuOr=ly,t.schemePuOr=sy,t.interpolateRdBu=dy,t.schemeRdBu=hy,t.interpolateRdGy=vy,t.schemeRdGy=py,t.interpolateRdYlBu=yy,t.schemeRdYlBu=gy,t.interpolateRdYlGn=by,t.schemeRdYlGn=_y,t.interpolateSpectral=xy,t.schemeSpectral=my,t.interpolateBuGn=My,t.schemeBuGn=wy,t.interpolateBuPu=Ty,t.schemeBuPu=Ay,t.interpolateGnBu=Sy,t.schemeGnBu=Ny,t.interpolateOrRd=ky,t.schemeOrRd=Ey,t.interpolatePuBuGn=Py,t.schemePuBuGn=Cy,t.interpolatePuBu=Ry,t.schemePuBu=zy,t.interpolatePuRd=Dy,t.schemePuRd=Ly,t.interpolateRdPu=qy,t.schemeRdPu=Uy,t.interpolateYlGnBu=Yy,t.schemeYlGnBu=Oy,t.interpolateYlGn=Fy,t.schemeYlGn=By,t.interpolateYlOrBr=jy,t.schemeYlOrBr=Iy,t.interpolateYlOrRd=Xy,t.schemeYlOrRd=Hy,t.interpolateBlues=Vy,t.schemeBlues=Gy,t.interpolateGreens=Wy,t.schemeGreens=$y,t.interpolateGreys=Qy,t.schemeGreys=Zy,t.interpolatePurples=Ky,t.schemePurples=Jy,t.interpolateReds=n_,t.schemeReds=t_,t.interpolateOranges=r_,t.schemeOranges=e_,t.interpolateCubehelixDefault=i_,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return u_.h=360*t-100,u_.s=1.5-1.5*n,u_.l=.8-.9*n,u_+""},t.interpolateWarm=o_,t.interpolateCool=a_,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,f_.r=255*(n=Math.sin(t))*n,f_.g=255*(n=Math.sin(t+c_))*n,f_.b=255*(n=Math.sin(t+s_))*n,f_+""},t.interpolateViridis=l_,t.interpolateMagma=h_,t.interpolateInferno=d_,t.interpolatePlasma=p_,t.create=function(t){return ct(C(t).call(document.documentElement))},t.creator=C,t.local=st,t.matcher=_s,t.mouse=pt,t.namespace=k,t.namespaces=ps,t.clientPoint=dt,t.select=ct,t.selectAll=function(t){return"string"==typeof t?new ut([document.querySelectorAll(t)],[document.documentElement]):new ut([null==t?[]:t],xs)},t.selection=ft,t.selector=z,t.selectorAll=L,t.style=F,t.touch=vt,t.touches=function(t,n){null==n&&(n=ht().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=dt(t,n[e]);return i},t.window=B,t.customEvent=ot,t.arc=function(){function t(){var t,c,s=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-A_,d=a.apply(this,arguments)-A_,p=v_(d-h),v=d>h;if(f||(f=t=oe()),l<s&&(c=l,l=s,s=c),l>w_)if(p>T_-w_)f.moveTo(l*y_(h),l*m_(h)),f.arc(0,0,l,h,d,!v),s>w_&&(f.moveTo(s*y_(d),s*m_(d)),f.arc(0,0,s,d,h,v));else{var g,y,_=h,b=d,m=h,x=d,w=p,M=p,A=u.apply(this,arguments)/2,T=A>w_&&(i?+i.apply(this,arguments):x_(s*s+l*l)),N=b_(v_(l-s)/2,+r.apply(this,arguments)),S=N,E=N;if(T>w_){var k=lf(T/s*m_(A)),C=lf(T/l*m_(A));(w-=2*k)>w_?(k*=v?1:-1,m+=k,x-=k):(w=0,m=x=(h+d)/2),(M-=2*C)>w_?(C*=v?1:-1,_+=C,b-=C):(M=0,_=b=(h+d)/2)}var P=l*y_(_),z=l*m_(_),R=s*y_(x),L=s*m_(x);if(N>w_){var D=l*y_(b),U=l*m_(b),q=s*y_(m),O=s*m_(m);if(p<M_){var Y=w>w_?function(t,n,e,r,i,o,a,u){var f=e-t,c=r-n,s=a-i,l=u-o,h=(s*(n-o)-l*(t-i))/(l*f-s*c);return[t+h*f,n+h*c]}(P,z,q,O,D,U,R,L):[R,L],B=P-Y[0],F=z-Y[1],I=D-Y[0],j=U-Y[1],H=1/m_(function(t){return t>1?0:t<-1?M_:Math.acos(t)}((B*I+F*j)/(x_(B*B+F*F)*x_(I*I+j*j)))/2),X=x_(Y[0]*Y[0]+Y[1]*Y[1]);S=b_(N,(s-X)/(H-1)),E=b_(N,(l-X)/(H+1))}}M>w_?E>w_?(g=yf(q,O,P,z,l,E,v),y=yf(D,U,R,L,l,E,v),f.moveTo(g.cx+g.x01,g.cy+g.y01),E<N?f.arc(g.cx,g.cy,E,g_(g.y01,g.x01),g_(y.y01,y.x01),!v):(f.arc(g.cx,g.cy,E,g_(g.y01,g.x01),g_(g.y11,g.x11),!v),f.arc(0,0,l,g_(g.cy+g.y11,g.cx+g.x11),g_(y.cy+y.y11,y.cx+y.x11),!v),f.arc(y.cx,y.cy,E,g_(y.y11,y.x11),g_(y.y01,y.x01),!v))):(f.moveTo(P,z),f.arc(0,0,l,_,b,!v)):f.moveTo(P,z),s>w_&&w>w_?S>w_?(g=yf(R,L,D,U,s,-S,v),y=yf(P,z,q,O,s,-S,v),f.lineTo(g.cx+g.x01,g.cy+g.y01),S<N?f.arc(g.cx,g.cy,S,g_(g.y01,g.x01),g_(y.y01,y.x01),!v):(f.arc(g.cx,g.cy,S,g_(g.y01,g.x01),g_(g.y11,g.x11),!v),f.arc(0,0,s,g_(g.cy+g.y11,g.cx+g.x11),g_(y.cy+y.y11,y.cx+y.x11),v),f.arc(y.cx,y.cy,S,g_(y.y11,y.x11),g_(y.y01,y.x01),!v))):f.arc(0,0,s,x,m,v):f.lineTo(R,L)}else f.moveTo(0,0);if(f.closePath(),t)return f=null,t+""||null}var n=hf,e=df,r=sf(0),i=null,o=pf,a=vf,u=gf,f=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-M_/2;return[y_(r)*t,m_(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:sf(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:sf(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:sf(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:sf(+n),t):o},t.endAngle=function(n){return arguments.length?(a="function"==typeof n?n:sf(+n),t):a},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:sf(+n),t):u},t.context=function(n){return arguments.length?(f=null==n?null:n,t):f},t},t.area=Mf,t.line=wf,t.pie=function(){function t(t){var u,f,c,s,l,h=t.length,d=0,p=new Array(h),v=new Array(h),g=+i.apply(this,arguments),y=Math.min(T_,Math.max(-T_,o.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,a.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+n(t[u],u,t))>0&&(d+=l);for(null!=e?p.sort(function(t,n){return e(v[t],v[n])}):null!=r&&p.sort(function(n,e){return r(t[n],t[e])}),u=0,c=d?(y-h*b)/d:0;u<h;++u,g=s)f=p[u],s=g+((l=v[f])>0?l*c:0)+b,v[f]={data:t[f],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}var n=Tf,e=Af,r=null,i=sf(0),o=sf(T_),a=sf(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:sf(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:sf(+n),t):o},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:sf(+n),t):a},t},t.areaRadial=Cf,t.radialArea=Cf,t.lineRadial=kf,t.radialLine=kf,t.pointRadial=Pf,t.linkHorizontal=function(){return Lf(Df)},t.linkVertical=function(){return Lf(Uf)},t.linkRadial=function(){var t=Lf(qf);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.symbol=function(){function t(){var t;if(r||(r=t=oe()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=sf(E_),e=sf(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:sf(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:sf(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},t.symbols=H_,t.symbolCircle=E_,t.symbolCross=k_,t.symbolDiamond=z_,t.symbolSquare=q_,t.symbolStar=U_,t.symbolTriangle=Y_,t.symbolWye=j_,t.curveBasisClosed=function(t){return new Ff(t)},t.curveBasisOpen=function(t){return new If(t)},t.curveBasis=function(t){return new Bf(t)},t.curveBundle=X_,t.curveCardinalClosed=V_,t.curveCardinalOpen=$_,t.curveCardinal=G_,t.curveCatmullRomClosed=Z_,t.curveCatmullRomOpen=Q_,t.curveCatmullRom=W_,t.curveLinearClosed=function(t){return new Jf(t)},t.curveLinear=bf,t.curveMonotoneX=function(t){return new rc(t)},t.curveMonotoneY=function(t){return new ic(t)},t.curveNatural=function(t){return new ac(t)},t.curveStep=function(t){return new fc(t,.5)},t.curveStepAfter=function(t){return new fc(t,1)},t.curveStepBefore=function(t){return new fc(t,0)},t.stack=function(){function t(t){var o,a,u=n.apply(this,arguments),f=t.length,c=u.length,s=new Array(c);for(o=0;o<c;++o){for(var l,h=u[o],d=s[o]=new Array(f),p=0;p<f;++p)d[p]=l=[0,+i(t[p],h,p,t)],l.data=t[p];d.key=h}for(o=0,a=e(s);o<c;++o)s[a[o]].index=o;return r(s,a),s}var n=sf([]),e=sc,r=cc,i=lc;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:sf(S_.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:sf(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?sc:"function"==typeof n?n:sf(S_.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?cc:n,t):r},t},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}cc(t,n)}},t.stackOffsetDiverging=function(t,n){if((u=t.length)>1)for(var e,r,i,o,a,u,f=0,c=t[n[0]].length;f<c;++f)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][f])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):r[0]=o},t.stackOffsetNone=cc,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}cc(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,f=0,c=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}f+=l,c+=h*l}e[a-1][1]+=e[a-1][0]=o,f&&(o-=c/f)}e[a-1][1]+=e[a-1][0]=o,cc(t,n)}},t.stackOrderAscending=hc,t.stackOrderDescending=function(t){return hc(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(dc),o=sc(t).sort(function(t,n){return i[n]-i[t]}),a=0,u=0,f=[],c=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],f.push(e)):(u+=i[e],c.push(e));return c.reverse().concat(f)},t.stackOrderNone=sc,t.stackOrderReverse=function(t){return sc(t).reverse()},t.timeInterval=Ia,t.timeMillisecond=Lv,t.timeMilliseconds=Dv,t.utcMillisecond=Lv,t.utcMilliseconds=Dv,t.timeSecond=Ov,t.timeSeconds=Yv,t.utcSecond=Ov,t.utcSeconds=Yv,t.timeMinute=Bv,t.timeMinutes=Fv,t.timeHour=Iv,t.timeHours=jv,t.timeDay=Hv,t.timeDays=Xv,t.timeWeek=Gv,t.timeWeeks=Kv,t.timeSunday=Gv,t.timeSundays=Kv,t.timeMonday=Vv,t.timeMondays=tg,t.timeTuesday=$v,t.timeTuesdays=ng,t.timeWednesday=Wv,t.timeWednesdays=eg,t.timeThursday=Zv,t.timeThursdays=rg,t.timeFriday=Qv,t.timeFridays=ig,t.timeSaturday=Jv,t.timeSaturdays=og,t.timeMonth=ag,t.timeMonths=ug,t.timeYear=fg,t.timeYears=cg,t.utcMinute=sg,t.utcMinutes=lg,t.utcHour=hg,t.utcHours=dg,t.utcDay=pg,t.utcDays=vg,t.utcWeek=gg,t.utcWeeks=Mg,t.utcSunday=gg,t.utcSundays=Mg,t.utcMonday=yg,t.utcMondays=Ag,t.utcTuesday=_g,t.utcTuesdays=Tg,t.utcWednesday=bg,t.utcWednesdays=Ng,t.utcThursday=mg,t.utcThursdays=Sg,t.utcFriday=xg,t.utcFridays=Eg,t.utcSaturday=wg,t.utcSaturdays=kg,t.utcMonth=Cg,t.utcMonths=Pg,t.utcYear=zg,t.utcYears=Lg,t.timeFormatDefaultLocale=nf,t.timeFormatLocale=$a,t.isoFormat=Bg,t.isoParse=Fg,t.now=wn,t.timer=Tn,t.timerFlush=Nn,t.timeout=Cn,t.interval=function(t,n,e){var r=new An,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?wn():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.transition=Yn,t.active=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>Rl&&e.name===n)return new On([[t]],lh,n,+r)}return null},t.interrupt=Dn,t.voronoi=function(){function t(t){return new Yc(t.map(function(r,i){var o=[Math.round(n(r,i,t)/ob)*ob,Math.round(e(r,i,t)/ob)*ob];return o.index=i,o.data=r,o}),r)}var n=vc,e=gc,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:pc(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:pc(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},t.zoom=function(){function n(t){t.property("__zoom",Vc).on("wheel.zoom",f).on("mousedown.zoom",c).on("dblclick.zoom",s).filter(m).on("touchstart.zoom",l).on("touchmove.zoom",h).on("touchend.zoom touchcancel.zoom",d).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(t,n){return(n=Math.max(x[0],Math.min(x[1],n)))===t.k?t:new Fc(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Fc(t.k,r,i)}function i(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function o(t,n,e){t.on("start.zoom",function(){a(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end()}).tween("zoom",function(){var t=arguments,r=a(this,t),o=y.apply(this,t),u=e||i(o),f=Math.max(o[1][0]-o[0][0],o[1][1]-o[0][1]),c=this.__zoom,s="function"==typeof n?n.apply(this,t):n,l=A(c.invert(u).concat(f/c.k),s.invert(u).concat(f/s.k));return function(t){if(1===t)t=s;else{var n=l(t),e=f/n[2];t=new Fc(e,u[0]-n[0]*e,u[1]-n[1]*e)}r.zoom(null,t)}})}function a(t,n){for(var e,r=0,i=T.length;r<i;++r)if((e=T[r]).that===t)return e;return new u(t,n)}function u(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=y.apply(t,n)}function f(){if(g.apply(this,arguments)){var t=a(this,arguments),n=this.__zoom,i=Math.max(x[0],Math.min(x[1],n.k*Math.pow(2,b.apply(this,arguments)))),o=pt(this);if(t.wheel)t.mouse[0][0]===o[0]&&t.mouse[0][1]===o[1]||(t.mouse[1]=n.invert(t.mouse[0]=o)),clearTimeout(t.wheel);else{if(n.k===i)return;t.mouse=[o,n.invert(o)],Dn(this),t.start()}Hc(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},k),t.zoom("mouse",_(r(e(n,i),t.mouse[0],t.mouse[1]),t.extent,w))}}function c(){if(!v&&g.apply(this,arguments)){var n=a(this,arguments),e=ct(t.event.view).on("mousemove.zoom",function(){if(Hc(),!n.moved){var e=t.event.clientX-o,i=t.event.clientY-u;n.moved=e*e+i*i>C}n.zoom("mouse",_(r(n.that.__zoom,n.mouse[0]=pt(n.that),n.mouse[1]),n.extent,w))},!0).on("mouseup.zoom",function(){e.on("mousemove.zoom mouseup.zoom",null),bt(t.event.view,n.moved),Hc(),n.end()},!0),i=pt(this),o=t.event.clientX,u=t.event.clientY;_t(t.event.view),jc(),n.mouse=[i,this.__zoom.invert(i)],Dn(this),n.start()}}function s(){if(g.apply(this,arguments)){var i=this.__zoom,a=pt(this),u=i.invert(a),f=i.k*(t.event.shiftKey?.5:2),c=_(r(e(i,f),a,u),y.apply(this,arguments),w);Hc(),M>0?ct(this).transition().duration(M).call(o,c,a):ct(this).call(n.transform,c)}}function l(){if(g.apply(this,arguments)){var n,e,r,i,o=a(this,arguments),u=t.event.changedTouches,f=u.length;for(jc(),e=0;e<f;++e)i=[i=vt(this,u,(r=u[e]).identifier),this.__zoom.invert(i),r.identifier],o.touch0?o.touch1||(o.touch1=i):(o.touch0=i,n=!0);if(p&&(p=clearTimeout(p),!o.touch1))return o.end(),void((i=ct(this).on("dblclick.zoom"))&&i.apply(this,arguments));n&&(p=setTimeout(function(){p=null},E),Dn(this),o.start())}}function h(){var n,i,o,u,f=a(this,arguments),c=t.event.changedTouches,s=c.length;for(Hc(),p&&(p=clearTimeout(p)),n=0;n<s;++n)o=vt(this,c,(i=c[n]).identifier),f.touch0&&f.touch0[2]===i.identifier?f.touch0[0]=o:f.touch1&&f.touch1[2]===i.identifier&&(f.touch1[0]=o);if(i=f.that.__zoom,f.touch1){var l=f.touch0[0],h=f.touch0[1],d=f.touch1[0],v=f.touch1[1],g=(g=d[0]-l[0])*g+(g=d[1]-l[1])*g,y=(y=v[0]-h[0])*y+(y=v[1]-h[1])*y;i=e(i,Math.sqrt(g/y)),o=[(l[0]+d[0])/2,(l[1]+d[1])/2],u=[(h[0]+v[0])/2,(h[1]+v[1])/2]}else{if(!f.touch0)return;o=f.touch0[0],u=f.touch0[1]}f.zoom("touch",_(r(i,o,u),f.extent,w))}function d(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(jc(),v&&clearTimeout(v),v=setTimeout(function(){v=null},E),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end()}var p,v,g=Xc,y=Gc,_=Zc,b=$c,m=Wc,x=[0,1/0],w=[[-1/0,-1/0],[1/0,1/0]],M=250,A=_n,T=[],S=N("start","zoom","end"),E=500,k=150,C=0;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",Vc),t!==e?o(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},n.scaleTo=function(t,o){n.transform(t,function(){var t=y.apply(this,arguments),n=this.__zoom,a=i(t),u=n.invert(a),f="function"==typeof o?o.apply(this,arguments):o;return _(r(e(n,f),a,u),t,w)})},n.translateBy=function(t,e,r){n.transform(t,function(){return _(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),y.apply(this,arguments),w)})},n.translateTo=function(t,e,r){n.transform(t,function(){var t=y.apply(this,arguments),n=this.__zoom,o=i(t);return _(ub.translate(o[0],o[1]).scale(n.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof r?-r.apply(this,arguments):-r),t,w)})},u.prototype={start:function(){return 1==++this.active&&(this.index=T.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(T.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){ot(new function(t,n,e){this.target=t,this.type=n,this.transform=e}(n,t,this.that.__zoom),S.apply,S,[t,this.that,this.args])}},n.wheelDelta=function(t){return arguments.length?(b="function"==typeof t?t:Bc(+t),n):b},n.filter=function(t){return arguments.length?(g="function"==typeof t?t:Bc(!!t),n):g},n.touchable=function(t){return arguments.length?(m="function"==typeof t?t:Bc(!!t),n):m},n.extent=function(t){return arguments.length?(y="function"==typeof t?t:Bc([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):y},n.scaleExtent=function(t){return arguments.length?(x[0]=+t[0],x[1]=+t[1],n):[x[0],x[1]]},n.translateExtent=function(t){return arguments.length?(w[0][0]=+t[0][0],w[1][0]=+t[1][0],w[0][1]=+t[0][1],w[1][1]=+t[1][1],n):[[w[0][0],w[0][1]],[w[1][0],w[1][1]]]},n.constrain=function(t){return arguments.length?(_=t,n):_},n.duration=function(t){return arguments.length?(M=+t,n):M},n.interpolate=function(t){return arguments.length?(A=t,n):A},n.on=function(){var t=S.on.apply(S,arguments);return t===S?n:t},n.clickDistance=function(t){return arguments.length?(C=(t=+t)*t,n):Math.sqrt(C)},n},t.zoomTransform=Ic,t.zoomIdentity=ub,Object.defineProperty(t,"__esModule",{value:!0})});


/*******
 * 
 *
 *  CUSTOM JQUERY CODES COME HERE
 * 
 * 
 *******/