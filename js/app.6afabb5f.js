(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],i=0,f=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},l=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0e7bc827":"739899c0"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0e7bc827":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e7bc827":"bafeb03d"}[e]+".css",a=s.p+r,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var u=l[c],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===r||i===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],i=u.getAttribute("data-href");if(i===r||i===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete o[e],p.parentNode.removeChild(p),n(l)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=l);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var f=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"2e9d":function(e,t,n){"use strict";n("c50d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l={name:"App"},c=l,s=(n("7c55"),n("2877")),u=Object(s["a"])(c,o,a,!1,null,null,null),i=u.exports,f=n("2909"),p=n("8c4f"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("c25a")),m=[{path:"/",name:"myBlog",meta:{title:"总有人间一两风"},component:function(){return n.e("chunk-0e7bc827").then(n.bind(null,"138b"))},children:[d["a"]]}],h=m;r["default"].use(p["a"]);var v=Object(f["a"])(h),b=new p["a"]({mode:"history",routes:v});b.beforeEach((function(e,t,n){var r;window.document.title=(null===e||void 0===e||null===(r=e.meta)||void 0===r?void 0:r.title)||"",n()}));var _=b,w=(n("0fae"),n("46a1"),n("450d"),n("e5f2")),y=n.n(w),g=(n("9e1f"),n("6ed5")),k=n.n(g),E=(n("0fb7"),n("f529")),O=n.n(E),j=(n("0c67"),n("299c")),T=n.n(j),x=(n("e612"),n("dd87")),$=n.n(x),S=(n("075a"),n("72aa")),B=n.n(S),F=(n("10cb"),n("f3ad")),P=n.n(F),C=(n("1f1a"),n("4e4b")),I=n.n(C),V=(n("1951"),n("eedf")),A=n.n(V),M={install:function(e){e.use(A.a),e.use(I.a),e.use(P.a),e.use(B.a),e.use($.a),e.use(T.a),e.prototype.$message=O.a,e.prototype.$confirm=k.a.confirm,e.prototype.$alert=k.a.alert,e.prototype.$notify=y.a}},N=M,D=n("6ee8");r["default"].use(N),r["default"].component("MarkDown",D["a"]);var L=n("7141");r["default"].config.productionTip=!1,r["default"].component(L["a"]),new r["default"]({render:function(e){return e(i)},router:_}).$mount("#app")},"6ee8":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},o=[],a=(n("e4cb"),n("2c43"),{}),l=a,c=(n("2e9d"),n("2877")),s=Object(c["a"])(l,r,o,!1,null,"7ebc6ff2",null);t["a"]=s.exports},7141:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"book-body"},[n("el-tabs",{attrs:{"tab-position":e.tabPosition}},e._l(e.menus,(function(t,r){return n("el-tab-pane",{key:r},[n("div",{staticClass:"body-width overflow-tip",attrs:{slot:"label"},slot:"label"},[n("span",{attrs:{title:t.title}},[e._v(e._s(t.title))])]),n("MarkDown",[n(t.components,{tag:"component"})],1)],1)})),1)],1)},o=[],a=n("6ee8"),l={props:{menus:Array},components:{MarkDown:a["a"]},data:function(){return{tabPosition:"left"}}},c=l,s=(n("c9f0"),n("2877")),u=Object(s["a"])(c,r,o,!1,null,"04bffdd8",null);t["a"]=u.exports},"7c55":function(e,t,n){"use strict";n("2395")},"99b2":function(e,t,n){},c25a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BookTranslate",{attrs:{menus:e.menus}})},o=[],a=n("7141"),l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("html",[n("head"),n("body")])])}],s=n("2877"),u={},i=Object(s["a"])(u,l,c,!1,null,null,null),f=i.exports,p={components:{BookTranslate:a["a"]},data:function(){return{menus:[{title:"markdown-plugin",components:f}]}}},d=p,m=Object(s["a"])(d,r,o,!1,null,"1bfd89a7",null),h=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BookTranslate",[e._v(" typeScript ")])},b=[],_={components:{BookTranslate:a["a"]}},w=_,y=Object(s["a"])(w,v,b,!1,null,"20e50418",null),g=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BookTranslate",[e._v(" react ")])},E=[],O={components:{BookTranslate:a["a"]}},j=O,T=Object(s["a"])(j,k,E,!1,null,"09786044",null),x=T.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},S=[],B={},F=B,P=Object(s["a"])(F,$,S,!1,null,"4e5d238b",null),C=P.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},V=[],A={},M=A,N=Object(s["a"])(M,I,V,!1,null,"9fc93cd0",null),D=N.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},J=[],q={},H=q,K=Object(s["a"])(H,L,J,!1,null,"0074b8b8",null),U=K.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},Y=[],z={},G=z,Q=Object(s["a"])(G,X,Y,!1,null,"22d6119d",null),R=Q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},Z=[],ee={},te=ee,ne=Object(s["a"])(te,W,Z,!1,null,"46e33cda",null),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BookTranslate",{attrs:{menus:e.menus}})},ae=[],le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("html",[n("head"),n("body",[n("h2",[e._v("一、Element.scroll()：scroll()方法是用于在给定的元素中滚动到某个特定坐标的Element接口")]),n("h3",[e._v("1.scroll(x-coord, y-coord)")]),n("h4",[e._v("x-coord: 想要显示在左上角的元素沿水平轴的像素。")]),n("h4",[e._v("y-coord：想要显示在左上角的元素沿垂直轴的像素。")]),n("h3",[e._v("2.scroll(options)")]),n("h4",[e._v("options：包含以下参数的对象")]),n("h5",[e._v("top：指定沿Y轴滚动窗口或元素的像素数。")]),n("h5",[e._v("left：指定沿X轴滚动窗口或元素的像素数。")]),n("h5",[e._v("behavior：smooth表示平滑滚动并产生过渡效果，auto或缺省值会直接跳转到目标为止，没有过渡效果。")]),n("br"),n("h2",[e._v("二、Element.scrollIntoView()：Element接口的scrollIntoView()方法会滚动元素的父容器，使被调用scrollIntoView()的元素对用户可见。")]),n("h3",[e._v("1.scrollIntoView(alignToTop)")]),n("h4",[e._v("alignToTop：一个布尔值，如果为true,元素的顶端将和其所在滚动区的可视区域的顶端对齐。如果为false,元素的底端将和其所在滚动区的可视区域的底端对齐。")]),n("h3",[e._v("2.scrollIntoView(scrollIntoViewOptions)")]),n("h4",[e._v("scrollIntoViewOptions：一个包含下列属性的对象：")]),n("h5",[e._v("behavior：定义动画过渡效果，auto或smooth之一。默认为auto。")]),n("h5",[e._v("block：定义垂直方向的对齐，start、center、end或nearest之一。默认为start")]),n("h5",[e._v("inline：定义水平方向的对齐，start、center、end或nearest之一。默认为nearest")]),n("br"),n("h2",[e._v("三、scroll相关知识点")]),n("h3",[e._v("1.scrollTo和scrollIntoView的区别")]),n("h4",[e._v("scrollTo适用于将元素滑动到任意具体的位置，可以精确到像素，而scrollIntoView只能将元素滚动到视口的顶部和底部。")]),n("h4",[e._v("scrollIntoView在某些场景下会有一些问题，而scrollTo可以精准控制滑动。")]),n("h4",[e._v("scrollTo和scroll类似，滚动的时候都是绝对位置，scrollBy是相对位置，每次滚动都是相对于上一个元素的位置进行滚动的")])])])])}],se={},ue=Object(s["a"])(se,le,ce,!1,null,null,null),ie=ue.exports,fe={components:{BookTranslate:a["a"]},data:function(){return{menus:[{title:"元素滚动",components:ie}]}}},pe=fe,de=Object(s["a"])(pe,oe,ae,!1,null,"728e6427",null),me=de.exports;t["a"]={path:"/webFront",name:"webFront",meta:{title:"前端"},children:[{path:"/webFront/webCss",name:"webCss",meta:{title:"前端小知识"},component:me},{path:"/webFront/vue2",name:"vue2",meta:{title:"vue2"},component:h},{path:"/webFront/ts",name:"typeScript",meta:{title:"typeScript"},component:g},{path:"/webFront/react",name:"react",meta:{title:"react"},component:x},{path:"/webFront/rn",name:"reactNative",meta:{title:"reactNative"},component:C},{path:"/webFront/esSkill",name:"esSkill",meta:{title:"ES小技巧"},component:D},{path:"/webFront/brower",name:"brower",meta:{title:"浏览器知识"},component:U},{path:"/webFront/jsSkill",name:"jsSkill",meta:{title:"JS小技巧"},component:R},{path:"/webFront/nature",name:"nature",meta:{title:"前端性能"},component:re}]}},c50d:function(e,t,n){},c9f0:function(e,t,n){"use strict";n("99b2")}});
//# sourceMappingURL=app.6afabb5f.js.map