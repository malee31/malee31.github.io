"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[678],{3723:function(e,t,a){a.d(t,{G:function(){return b},L:function(){return L},M:function(){return C},P:function(){return D},_:function(){return s},a:function(){return n},b:function(){return l},c:function(){return M},g:function(){return g},h:function(){return c}});var i=a(7294),r=(a(2369),a(5697)),o=a.n(r);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(a=o[i])>=0||(r[a]=e[a]);return r}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const M=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function l(e,t,a,i,r){return void 0===r&&(r={}),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:t?1:0})})}function g(e,t,a,i,r,o,s,c){const M={};o&&(M.backgroundColor=o,"fixed"===a?(M.width=i,M.height=r,M.backgroundColor=o,M.position="relative"):("constrained"===a||"fullWidth"===a)&&(M.position="absolute",M.top=0,M.left=0,M.bottom=0,M.right=0)),s&&(M.objectFit=s),c&&(M.objectPosition=c);const l=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},M)});return l}const u=["children"],I=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:a,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},L=function(e){let{children:t}=e,a=s(e,u);return i.createElement(i.Fragment,null,i.createElement(I,n({},a)),t,null)},d=["src","srcSet","loading","alt","shouldLoad"],N=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:o="",shouldLoad:c}=e,M=s(e,d);return i.createElement("img",n({},M,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},m=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,o=s(e,N);const c=o.sizes||(null==t?void 0:t.sizes),M=i.createElement(y,n({},o,t,{sizes:c,shouldLoad:r}));return a.length?i.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return i.createElement("source",{key:t+"-"+o+"-"+a,type:o,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:c})})),M):M};var A;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},m.displayName="Picture",m.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const j=["fallback"],D=function(e){let{fallback:t}=e,a=s(e,j);return t?i.createElement(m,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",n({},a))};D.displayName="Placeholder",D.propTypes={fallback:r.string,sources:null==(A=m.propTypes)?void 0:A.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const C=function(e){return i.createElement(i.Fragment,null,i.createElement(m,n({},e)),i.createElement("noscript",null,i.createElement(m,n({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=m.propTypes;const p=function(e,t,a){for(var i=arguments.length,r=new Array(i>3?i-3:0),n=3;n<i;n++)r[n-3]=arguments[n];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:o().object.isRequired,alt:p},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],h=new Set;let z,x;const w=function(e){let{as:t="div",image:r,style:o,backgroundColor:M,className:l,class:g,onStartLoad:u,onLoad:I,onError:L}=e,d=s(e,E);const{width:N,height:y,layout:m}=r,A=function(e,t,a){const i={};let r="gatsby-image-wrapper";return"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i}}(N,y,m),{style:j,className:D}=A,C=s(A,S),p=(0,i.useRef)(),T=(0,i.useMemo)((()=>JSON.stringify(r.images)),[r.images]);g&&(l=g);const w=function(e,t,a){let i="";return"fullWidth"===e&&(i='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(i='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(m,N,y);return(0,i.useEffect)((()=>{z||(z=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=p.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==u||u({wasCached:!0}),null==I||I({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==I||I({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void h.add(T);if(x&&h.has(T))return;let t,i;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;p.current&&(p.current.innerHTML=a(n({isLoading:!0,isLoaded:h.has(T),image:r},d)),h.has(T)||(t=requestAnimationFrame((()=>{p.current&&(i=s(p.current,T,h,o,u,I,L))}))))})),()=>{t&&cancelAnimationFrame(t),i&&i()}}),[r]),(0,i.useLayoutEffect)((()=>{h.has(T)&&x&&(p.current.innerHTML=x(n({isLoading:h.has(T),isLoaded:h.has(T),image:r},d)),null==u||u({wasCached:!0}),null==I||I({wasCached:!0}))}),[r]),(0,i.createElement)(t,n({},C,{style:n({},j,o,{backgroundColor:M}),className:D+(l?" "+l:""),ref:p,dangerouslySetInnerHTML:{__html:w},suppressHydrationWarning:!0}))},b=(0,i.memo)((function(e){return e.image?(0,i.createElement)(w,e):null}));b.propTypes=T,b.displayName="GatsbyImage";const k=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],f=function(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),r=2;r<a;r++)i[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(i)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),v={src:o().string.isRequired,alt:p,width:f,height:f,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Q=(U=b,function(e){let{src:t,__imageData:a,__error:r}=e,o=s(e,k);return r&&console.warn(r),a?i.createElement(U,n({image:a},o)):(console.warn("Image not loaded",t),null)});var U;Q.displayName="StaticImage",Q.propTypes=v},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,i=!1;for(let r=0;r<e.length;r++){const o=e[r];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,i=a,a=!0,r++):a&&i&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,r-1)+"-"+e.slice(r-1),i=a,a=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,i=a,a=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},5642:function(e,t,a){a.d(t,{Z:function(){return o}});var i=a(7294);const r=[{label:"Home",href:"#home"},{label:"About Me",href:"#about"},{label:"Featured Projects",href:"#featured-projects"}];function o(){const{0:e,1:t}=(0,i.useState)(!1),a=()=>t(!1);return i.createElement(i.Fragment,null,i.createElement("input",{id:"menu-toggle",className:"hidden","aria-hidden":"true",type:"checkbox",checked:e,onChange:()=>t(!e)}),i.createElement("div",{id:"nav-underlay","aria-hidden":"true",onClick:a}),i.createElement("label",{id:"menu-icon",htmlFor:"menu-toggle"},i.createElement("div",{id:"menu-icon-container"},i.createElement("div",{className:"menu-icon-div"}),i.createElement("div",{className:"menu-icon-div"}),i.createElement("div",{className:"menu-icon-div"}))),i.createElement("nav",null,i.createElement("div",{id:"nav-padding"},r.map((e=>{let{label:t,href:r}=e;return i.createElement("a",{href:r,onClick:a,key:t},i.createElement("span",null,t))})))))}},2903:function(e,t,a){a.r(t),a.d(t,{Head:function(){return C},default:function(){return p}});var i=a(7294),r=a(2943),o=a(5642);function n(e){const{className:t="",children:a,natural:r,...o}=e;return i.createElement("section",Object.assign({className:"screen-section column-center "+(r?"screen-section-natural":"")+" "+t},o),a)}function s(e){const{to:t,className:a="",children:r,...o}=e;return i.createElement("a",Object.assign({className:"scroll-banner "+a,href:t},o),i.createElement("div",{className:"scroll-banner-content"},r))}var c=a.p+"static/cube-trace-4c75560b7ba0eb15cf9ec9b579b6b441.svg";const M=i.lazy((()=>Promise.all([a.e(774),a.e(737),a.e(812)]).then(a.bind(a,1812))));function l(){return i.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",pointerEvents:"none"}},i.createElement("img",{className:"splash-overlay-substitute",src:c,alt:"Cube",role:"presentation"}))}function g(){const{0:e,1:t}=(0,i.useState)(!1);return i.createElement(n,{id:"home",natural:!0,className:"column-center column-align"},i.createElement(u,null,!e&&i.createElement(l,null),i.createElement(i.Suspense,{fallback:null},i.createElement(M,{fallback:null,hideSubstitute:()=>{e||t(!0)}}))),i.createElement(s,{to:"#about"},"▼"))}function u(e){let{children:t}=e;return i.createElement("div",{className:"splash-overlay"},i.createElement("div",{className:"splash-overlay-content"},i.createElement("p",{className:"splash-mini-intro"},"Developed and "),i.createElement("h1",{className:"splash-mini-title"},"Designed by Marvin"),i.createElement("p",{className:"splash-mini-subtitle"},"A Full Stack Developer who enjoys building high-quality products and intuitive user experiences"),i.createElement("a",{href:"#featured-projects",className:"splash-cta-button"},i.createElement("span",{className:"splash-cta-text"},i.createElement("span",{className:"splash-cta-text-words"},"See my projects"),i.createElement("span",{className:"splash-cta-text-arrow"}," ↴")))),i.createElement("div",{className:"splash-overlay-visual"},t))}function I(){return i.createElement(n,{id:"about",className:"column-center about-container"},i.createElement("h1",{className:"about-heading"},"About Me"),i.createElement("div",{className:"about-content"},i.createElement("img",{className:"about-profile-picture",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjY4NiIgaGVpZ2h0PSI2ODYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY4NiA2ODYiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxmaWx0ZXIgaWQ9ImZpbHRlcjY3NDM5IiB4PSItLjA0OSIgeT0iLS4wNzkiIHdpZHRoPSIxLjEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CgkJCTxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuMDA5NjQyNSIvPgoJCTwvZmlsdGVyPgoJCTxmaWx0ZXIgaWQ9ImZpbHRlcjcwMDA3IiB4PSItLjA1NCIgeT0iLS4wNzkiIHdpZHRoPSIxLjEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CgkJCTxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuOTEzMzgxMDgiLz4KCQk8L2ZpbHRlcj4KCTwvZGVmcz4KCTxnPgoJCTxwYXRoIGQ9Im0yMzggNDI2czQ0LTMuOSA4NS0xLjJjNTUgMy42IDgwIDE1IDgzIDE4IDYuMiA1LjUgMzAgODAgMjYgODktMy44IDkuNC0xMyAzMy00MSAzNi0yOSAyLjgtMTUyLTkyLTE1OS0xMDUtNi4zLTEzIDYtMzYgNi0zNnoiCgkJCSAgZmlsbD0iI2NjZDZlNSIvPgoJCTxwYXRoIGQ9Im0wIDY2OHYtMThsNS00LjljMTItMTIgMjUtMjEgNDAtMzEgOC4xLTQuOSAyNC0xMyAzMy0xN2w2LjEtMi42IDMuOC00LjJjNy41LTguMiA5LjQtMTEgOS45LTE3IDAuNDUtNC45IDIuMi04LjYgNS42LTEyIDQuOS00LjggOS45LTYuNSAyMS03LjFsNi41LTAuMzggMTItNS45YzEyLTUuOCAxMi01LjkgMTMtNy45IDEuOC0zLjQgNy4zLTEyIDExLTE2IDkuNi0xMiAyMy0yMiAzNS0yN2wyLjQtMC45OCAyLjgtNi41YzguMi0xOSAyNC01MiAyOS02MWwyLTMuNSAwLjU1IDEuM2MwLjM1IDAuODQgMC42MiA0LjcgMC43NCAxMWwwLjIgOS40IDMuNCA0LjZjNS42IDcuNCAxNSAxNyAyNCAyNSA2LjMgNS4zIDE0IDExIDMxIDIzIDguMiA1LjcgMTkgMTMgMjMgMTYgMTEgNy40IDEzIDguOCA0MiAyM2wyMyAxMSAxLjMtMS40YzEuOS0yLjEgMTctMjMgMjEtMjkgOS4xLTEzIDkuOC0xNSA5LTIyLTAuODktNy43LTUuMi0yMy0xMC0zNi0xLjgtNC42LTIuNi05LjItMi42LTE1IDAtNy4xIDAuNy02LjUgNy44IDYuMiA4LjIgMTUgMTUgMzAgMTggMzhsMC45NCAzLjIgOS4zIDIuM2M1MiAxMyA5NCAzMiAxMTQgNTIgNiA1LjkgNy41IDguMSAxMSAxNiAyLjIgNSAzLjggOC4xIDUuMyAxMCA3LjQgOS4zIDE5IDI1IDIzIDMzIDQuMyA2LjkgNS41IDkuNiAxMiAyNyA3LjggMjIgMTMgMzggMTYgNDUgMS4xIDMgMiA1LjYgMiA1LjYgMCAwLjA4LTE0MSAwLjE0LTMxMiAwLjE0aC0zMTJ6IgoJCQkgIGZpbGw9IiNmMmY3ZmEiIHN0cm9rZS13aWR0aD0iLjQ0Ii8+CgkJPHBhdGggZD0ibTIwNCA0OTRzOTQgOTEgMTA0IDk2IDQ5IDU0IDUyIDgwYzAgMC0yNS03MS04My04NHoiIGZpbGw9IiNkNmRiZWUiLz4KCQk8cGF0aCBkPSJtMzY0IDY2OSA2LjEgMTcgNzktMC4xNi0xLjMtNjlzLTkuOC0xNy0xNi0zNGMwIDAtMC43Ny0yOS0zNi0yOSAwIDAgMC4wNDkgNjUtMzIgMTE1eiIgZmlsbD0iI2Q2ZGJlZSIvPgoJCTxwYXRoIGQ9Im00NTkgNjI3cy0xNi01Ny0yMy02NWMwIDAgNi45LTMxIDQuOS00MSAwIDAgMy4zIDMxIDAgNDMgMCAwIDE5IDQ1IDE4IDY0eiIgZmlsbD0iI2UzZTlmMiIvPgoJPC9nPgoJPHBhdGggZD0ibTM5NiA1NTNzMS4yIDI1LTIuOSAzOGMtNiAyMC01LjcgMjQtMTEgMzkgMCAwLTMgNC4zIDEwIDE2IDAgMC0wLjU1IDYuOS0wLjc3IDE1LTAuMjIgNy43LTMuMiAxOS0yLjMgMjVsNjgtMC4zM3MtMi44LTI1LTEzLTQwYzAgMC01LjItNS42LTcuNS05LjMgMCAwLTAuNjYtNi4xLTEuNy03LjQgMCAwIDAuNzgtMC4wNTUgMC45NC01LjIgMC4xMS0zLjggMy40LTQ3LTkuNC02MS02LjQtNi42LTE3LTEyLTMwLTExeiIKCQkgIGZpbGw9IiM1ZTYzNzgiLz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJtMzg4IDU1MHM3LjQtMTUgMTQtMjNjMCAwIDQtNzkgMy4zLTg0bC0xNjYtNDlzMC4zOCA1MSAxIDU0YzAuNjMgMi41IDU0IDYyIDE0OCAxMDJ6IgoJCQkJICBmaWxsPSIjYjI4ZTgxIi8+CgkJCTxwYXRoIGQ9Im0yMjEgMzUwcy0yNi05LjktMzItMTctMTItMjEtMTYtMjUtMTUtMTYtMTUtMjUgMC42Ni0yMSAxMS0yNGMwIDAgMi40LTEuMiAxMSA0LjYgMCAwIDcgMy45IDEzIDUuMiAwIDAgNSAyLjcgOSAxNSA0LjEgMTIgMTEgNDMgMTIgNDUgMC42MyAxLjcgNy40IDIxIDcuNCAyMXoiCgkJCQkgIGZpbGw9IiNiMzhjODAiLz4KCQkJPHBhdGggZD0ibTQ1NyAyODFzMTEtMTQgMTMtMjJjMS45LTguMiAwLjMxLTE3LTAuNTUtMTlzLTYuMS03LjQtMTEtMC41NWMtMi41IDMuMy0zLjIgNC45LTMuMiA0LjlzMC43IDM2IDEuNyAzN3oiCgkJCQkgIGZpbGw9IiM5MTY2NWYiLz4KCQkJPHBhdGggZD0ibTI0MSA0MDlzMTkgMjIgMzAgMjhjMTEgNS42IDQ4IDI5IDY2IDMyIDE5IDMuNiAzMyAxLjQgNTMtMTEgMjAtMTIgNTItNTcgNjAtODQgMCAwIDQuMi0xNiA1LTIzIDAuNzctNyA1LjQtNjcgNS4zLTcxdi0xLjhzLTEuMyAxLjQtMy4yIDEuN2MwIDAtMS42LTQyLTEuNy01MC0wLjE2LTcuNCA1LjYtMTM2LTEzNC0xMzEtMTQwIDQuNy0xMzMgMTQ0LTEzMyAxNDRzNDMgMTUzIDUzIDE2NXoiCgkJCQkgIGZpbGw9IiNiODkzODkiLz4KCQk8L2c+Cgk8L2c+Cgk8ZyBmaWxsPSIjMTYxMjEzIiBzdHJva2Utd2lkdGg9IjYiPgoJCTxwYXRoIGQ9Im0xNTkgMjc1cy0yOC05NSAxNy0xMzljNDUtNDUgOTAtODIgMTU5LTcxIDY5IDExIDEzMiA3MCAxMzkgMTY1IDAgMC0wLjQgMS41LTMuMiA0LjYgMCAwIDAuOTQtNS41LTAuNjMtNy4yLTEuNi0xLjctMTI3LTEwNi0yNTQgMjggMCAwLTkuMSA3LjMtMTAgMTItMC41MiAyLjYtNy40IDMuNS05LjUgNy40LTMuNC0xLTUuOS0xLjEtOC40LTMuMi02LTQuOS0zMC0xNC0yOSA0LjR6Ii8+CgkJPHBhdGggZD0ibTIzNiAyMzJzNS44IDEuMyA3LjMgMy4zYzAgMC0wLjYxLTMuMS0xLjItMy42LTAuNTUtMC41IDIuMiAyLjcgMi4yIDMuOSAwIDAtMC4xMS00LjMtMC41LTUuMyAwIDAgMy4yIDQgMi45IDUuMSAwIDAgMS45LTYuNyAxLjUtOS4zbDAuMjEgMi45czAuMTUgMS42IDAuMzUgMS45IDMgMi45IDMuNyAzLjJjMCAwLTIuMS02LjgtMi04IDAgMCAwLjk0IDAuMTEgMS42IDAuNXM0LjUgMS43IDUgMy45YzAgMC0wLjIxLTIuOS0xLTMuOSAwIDAgMi45IDIuMSAzLjEgMyAwIDAgMi43LTQuOCAxLjUtNi43IDAgMCAyLjYgMy41IDUgNC4zIDAgMCA2LjEgMC4xNCA3LjUtMC43NiAwIDAtMy43LTIuNi0zLjktNC4yIDAgMCA2IDQgNy4zIDQuMSAwIDAgMTEgMy4xIDE0IDIuNCAwIDAtNC4xLTMuNi00LjQtNi45IDAgMCA4LjIgMy42IDE2IDIuOCA3LjQtMC43OCA3LjYtMS42IDcuNi0xLjZzLTQuOC0zLjEtNC44LTQuNGMwIDAgMyAzIDEzIDUuMyAxMCAyLjIgMTEgMS44IDExIDEuOHMtNC40LTMuOS03LjctOC4yYy0zZS0zIC00ZS0zIDIgMC4xNSAyIDAuMTVzOS40IDcuMyA5LjUgOC44YzAgMCAwLjE3LTEuMS0wLjUtMS45IDAgMCAxLjUgMS45IDEuNSAyLjUgMCAwIDMuNiAwLjExIDQuOC0wLjQ0bDAuMDU1LTAuOTRzMC43MiAwLjM5IDAuNjYgMC44OWMwIDAtMC4xNy04LjktMy4zLTEzIDAgMCA0LjcgNi45IDUgNy43czcuNiA2IDcuNiA2LTIuNy04LTIuNy0xMGMwIDAgNS4zIDUuOCA2LjQgNi4zIDAgMCAyLjctNC41IDIuNC02LjggMCAwIDkuNyA2LjYgMTAgOC4xIDAgMC0wLjcyLTExLTIuNC0xMyAwIDAgMTMgNi45IDE4IDcuNyAwIDAtNS43LTguNS01LjctMTAgMCAwIDkuMiA2LjggMTEgNy41IDAgMCAxLjYtNS41IDEuNS03LjcgMCAwIDExIDkuNSAxNiAxMSAwIDAtNS45LTcuMi01LjItOC44IDAgMCA1LjUgNC4xIDkuNyA2LjQtMC40MS0xLjYtMC4wMTctMS44LTAuMDE3LTEuOCAzLjYgMi4zIDEzIDUuNyAxMyA1LjdzLTIuMS03LjktMi43LTguNmMwIDAgMTEgNy42IDEyIDkuNyAwIDAgMC44LTggMC4zOS04LjcgMCAwIDExIDEwIDEyIDEybDAuOTItMS4zcy0xLjQtNy44LTEuOS04LjljMCAwIDExIDcuOSAxMiA5LjNsLTIuMiAwLjExczcuNCA5LjYgNy4xIDEyYzAgMCAxLjktMTEgMS41LTEybDEuOCAwLjIyczAuNzItMy4zIDAuNzItNC4yYzAgMCAxMCA3LjYgMTAgOS4yIDAgMC0wLjctMzAtNS41LTM3LTQuOS03LjQtNTEtNzQtMTQwLTczLTg5IDAuNjMtMTI4IDU1LTE0MCA3NyAwIDAgMC45NCAzMiAzLjEgNDNsMzgtMi41cy0wLjktMi4yIDguOC01LjZ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiNiZTk3OTAiIHN0cm9rZS13aWR0aD0iNiI+CgkJCTxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC45OCAwIDAgLjk4IDMuNyA0LjEpIgoJCQkJICBkPSJtMzM0IDI0NXM1LjMgNC0xLjMgMzBjMCAwLTUuMSAxMS05LjIgMTYtNC4xIDUuMy0xMyA4LjUtMTcgOS41cy0zOCAzLjktNDIgMy44Yy0zLjctMC4xMS0xOC0xLjctMjEtMi40LTIuNy0wLjc3LTguOS01LjMtMTAtNy40LTEuMy0yLjEtNy43LTI3LTguMS0zMC0wLjMzLTMgMC42Ni0xNCAyLjktMTcgMi4yLTMuMiAyLjItMy4yIDIuMi0zLjJzMTgtNi43IDIyLTcuMWM0LjQtMC4zMyA0OS01LjIgNjUgMC4xMSAxNiA1LjMgMTIgNCAxNiA2LjZ6IgoJCQkJICBmaWx0ZXI9InVybCgjZmlsdGVyNjc0MzkpIi8+CgkJCTxwYXRoIGQ9Im0zNzAgMjQ2Yy0xLjQgNy4xIDUuNCAzMCA4LjEgMzMgMi43IDMuNCA4LjQgOC45IDEyIDExIDMuNSAyIDM0IDEuNSA0MyAwIDkuMS0xLjUgMjItNi43IDI1LTguN3M3LjYtMTQgNy43LTMxYzAuMTEtMTctMi44LTE4LTcuMi0yMS00LjQtMi41LTI2LTQtMzAtMy41cy0zMyAzLjktNDUgOC42Yy0xMiA0LjgtMTEgNy0xMiA4LjQtMSAxLjQtMS43IDMuMy0xLjcgMy4zeiIKCQkJCSAgZmlsdGVyPSJ1cmwoI2ZpbHRlcjcwMDA3KSIvPgoJCTwvZz4KCQk8ZyBmaWxsPSIjMDkwOTA3Ij4KCQkJPHBhdGggZD0ibTE5MSAyNjktNS41LTIgNS44LTUgMjQtMTEgMC4yOCA4LjJzLTE2IDEuOS0yNCAxMHoiLz4KCQkJPHBhdGggZD0ibTIxNCAyNDUgMC42MSAxNHM0LjktMS44IDggNi42YzAgMCAwLjgzIDAuNTUgMi44IDAuNzIgMCAwLTEuNy0xOCA4LTIzIDAgMCAyMy03LjYgNDEtNi45IDE4IDAuNjYgNDAtMi44IDU3IDcuMyAwIDAgMi43IDAuOTQgMi40IDguOHMtMi43IDIxLTIuOCAyMmMtMC4wNzggMS4xIDEuOCAxLjUgMi4zLTAuMzlzNS43LTIxIDYuNC0yNSAzLjEtNSA2LjctNC45YzMuNiAwLjA3OCAxMC0wLjQ3IDEzLTAuMzkgMi43IDAuMDc4IDQuOSAxLjcgNS4zIDRzNi43IDIyIDcuMiAyNCAxLjkgMC4zOSAxLjctMS4xYy0wLjE2LTEuNS01LjEtMjEtNC44LTI0czIuOC05IDEwLTExIDQ3LTE3IDgyLTYuNWMwIDAgNSAzLjQgNS40IDYuOXMxIDEyIDEgMTJsMy0wLjA3OCAwLjk4LTE2IDAuODYtNS44cy05LjgtMy41LTI0LTMuNGMtMTQgMC4wNzgtMTEtMC4zMS0yMC0wLjA3OC04LjQgMC4yMy0zNCAzLTQxIDYuNi03LjEgMy42LTE2IDYuOS0xOCA4LjUtMS42IDEuNi0zLjQgMS4xLTUuNiAxLjEtMi4xIDAtMjMgMS4xLTI0IDEuNi0xLjkgMC41NS0zLjQtMC4xNi00LjgtMC43LTEuNC0wLjU1LTExLTQuNS0xOC01LjMtNi42LTAuNzgtMjktMi4zLTQ3LTAuNzgtMTcgMS42LTMyIDQuNy00MSA2LjQtOSAxLjctMTUgNS0xNSA1eiIvPgoJCQk8cGF0aCBkPSJtNDcyIDIyNi0xLjMgOC4zIDMuNi0wLjk3YzZlLTMgLTMuNyAwLjA2Mi02LjgtMi4zLTcuM3oiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=",alt:"Profile"}),i.createElement("p",{className:"about-desc"},"I enjoy building interactive responsive websites and tools using various frameworks like React. I currently write most of my web projects with NodeJS alongside React frameworks like Gatsby, React Native, or NextJS but I also have some projects in Python and normal HTML/CSS/JS.",i.createElement("br",null),i.createElement("span",{className:"about-desc-spacer"}),"Although my language of choice is JavaScript, I am also very familiar with C, C++, Java, and Python and constantly look out for new tools, libraries, and frameworks to learn.",i.createElement("br",null),i.createElement("span",{className:"about-desc-spacer"}),"I value turning ideas into websites that are comfortable to interact with, using the right tools for each job, and creating clean, well-documented code.",i.createElement("br",null))),i.createElement(s,{to:"#featured-projects",className:"about-desc-scroll-banner"},"▼"))}var L=a(1883),d=a(3723),N=a(7896);function y(e){const{image:t,title:a,description:r,repoLink:o,demoLink:n,backgroundColor:s="#AAAAAA",textColor:c="#191816",shortNames:M=[],className:l="",...g}=e,u=(0,N.useLocation)(),{0:I,1:L}=(0,i.useState)(!1),y=()=>L(!I),m=(0,i.useRef)(),{0:A,1:j}=(0,i.useState)(!0);return(0,i.useEffect)((()=>{j(!1)}),[]),(0,i.useEffect)((()=>{const e=new URLSearchParams(u.search).get("project");e&&M.includes(e)&&L(!0)}),[u.search,M]),i.createElement("div",Object.assign({className:"repo-card-container "+(A?"repo-card-container-focus-flip-enabled":"")+" "+l+" "+(I?"repo-card-container-force-flip":""),role:"menuitem","aria-label":a,"aria-haspopup":"menu",tabIndex:"0",ref:m,onClick:y,onKeyDown:e=>{"Space"!==e.code&&"Enter"!==e.code||e.target!==m.current&&"Enter"===e.code||(e.preventDefault(),y())}},g),i.createElement("div",{className:"repo-card repo-card-front","aria-hidden":I||A,title:a},i.createElement(d.G,{className:"featured-card-img",alt:a+" Demo Image",image:t})),i.createElement("div",{className:"repo-card column-center repo-card-back","aria-hidden":!I&&!A},i.createElement("h3",{className:"repo-card-title",style:{backgroundColor:s,color:c}},a),i.createElement("p",{className:"repo-card-description"},r),i.createElement("div",{className:"repo-card-links",style:{backgroundColor:s,color:c}},o&&i.createElement("a",{role:"menuitem",href:o,tabIndex:I||A?0:-1,style:{color:c}},"Open in GitHub"),n&&i.createElement("a",{role:"menuitem",href:n,tabIndex:I||A?0:-1,style:{color:c}},"Try Demo"))))}const m=[{title:"OrderUp",description:"Present customers a menu of items for customers to order from anywhere and chefs to cook and deliver!",repoLink:"https://github.com/malee31/OrderUp",demoLink:"https://orderup-demo.onrender.com/",imageSrc:"repositories/OrderUp.png",backgroundColor:"#FDBA74",textColor:"#121212",shortNames:["oa","order-up"]},{title:"Pantry Cabinet",description:"[WIP] A site for displaying what is available in your pantry and how many of each item you have",repoLink:"https://github.com/malee31/the-pantry-cabinet",demoLink:"https://pantry-cabinet.vercel.app/",imageSrc:"repositories/PantryCabinet.png",backgroundColor:"#BA8C63",textColor:"#342918",shortNames:["pc","pantry-cabinet"]},{title:"CardinalHours App",description:"An Expo App written in React Native for logging hours into the CardinalBotics CardinalHours server. (Try it with the password: test)",repoLink:"https://github.com/malee31/ReactNativeCardinalBoticsApp",demoLink:"https://malee31.github.io/ReactNativeCardinalBoticsApp",imageSrc:"repositories/ReactNativeCardinalBoticsApp.png",backgroundColor:"#973337",textColor:"#F5F5F5",shortNames:["cha","cardinalhours","cardinalhours-app"]},{title:"Asteroids Game",description:"A recreation of Asteroids from 1979! Controls are listed in the footer below so enjoy!",repoLink:"https://github.com/malee31/Processing-Java-Projects/tree/AsteroidsGame",demoLink:"https://malee31.github.io/Processing-Java-Projects/AsteroidsGame",imageSrc:"repositories/AsteroidsGame.png",backgroundColor:"#262626",textColor:"#D6D6D6",shortNames:["ag","asteroids","asteroids-game"]},{title:"Starfield",description:"A mesmerizing canvas with a calming sea of stars",repoLink:"https://github.com/malee31/Processing-Java-Projects/tree/Starfield",demoLink:"https://malee31.github.io/Processing-Java-Projects/Starfield",imageSrc:"repositories/Starfield.png",backgroundColor:"#470B33",textColor:"#EBEBEB",shortNames:["sf","starfield"]},{title:"Slack to Discord Bridge",description:"Creates a Discord archive by forwarding Slack messages and files to a Discord Server of your choosing",repoLink:"https://github.com/malee31/Slack-to-Discord-Bridge",imageSrc:"repositories/SlackToDiscordBridge.png",backgroundColor:"#431F4F",textColor:"#E8E8FD",shortNames:["std","stdb","slack-bridge","slack-to-discord-bridge"]},{title:"Canvas Helpers",description:"Python CLI tool for automatically creating study groups on Canvas based on student preferences (See other contributors on GitHub)",repoLink:"https://github.com/malee31/CanvasHelpers/tree/better-study-groups",imageSrc:"repositories/CanvasHelpers.png",backgroundColor:"#C55B43",textColor:"#FFFFFF",shortNames:["ch","canvas-helper","canvas-helpers"]},{title:"EduConnect",description:"A chatroom created using WebSockets and Google Authentication that allows teachers to answer questions from students in real time!",repoLink:"https://github.com/malee31/EduConnect",demoLink:"https://educonnect.onrender.com/chatroom/chatroom.html",imageSrc:"repositories/EduConnect.png",backgroundColor:"#5175E8",textColor:"#FFFFFF",shortNames:["ec","educonnect"]},{title:"Custom Form Maker",description:"Build custom forms that forward data to a spreadsheet using the Google Sheets NodeJS API",repoLink:"https://github.com/malee31/Custom-Form-Maker",demoLink:"https://custom-form-maker.onrender.com/",imageSrc:"repositories/CustomFormMaker.png",backgroundColor:"#1786F1",textColor:"#FFFFFF",shortNames:["cfm","custom-form","custom-form-maker"]},{title:"Cube Color Picker",description:"A color picker that uses WebGL to allow you to better choose from hues of the same color by presenting it as a lit cube",demoLink:"https://malee31.github.io/CubeColorPicker",imageSrc:"repositories/CubeColorPicker.png",backgroundColor:"#3D93E7",textColor:"#E9EDFA",shortNames:["ccp","cube-color-picker"]},{title:"Halloween Discord Bot",description:"A Discord Bot I made for a one-off Halloween Event on a specific Discord Server!",repoLink:"https://github.com/malee31/HalloweenDiscordBot",imageSrc:"repositories/HalloweenBot.png",backgroundColor:"#303135",textColor:"#E2E3E5",shortNames:["hdb","halloween-discord-bot"]},{title:"Data Visualization",description:"A nice animated chart for random data that can be changed and adapted for different data sets",repoLink:"https://github.com/malee31/Processing-Java-Projects/tree/DataVisualization",demoLink:"https://malee31.github.io/Processing-Java-Projects/DataVisualization",imageSrc:"repositories/DataVisualization.png",backgroundColor:"#646464",textColor:"#FFFFFF",shortNames:["dv","data-visualization"]}];function A(){const e=(0,L.useStaticQuery)("1873105783");return i.createElement("div",{id:"featured"},i.createElement("h1",null,"Featured Projects"),i.createElement("div",{id:"featured-container",role:"menu"},m.map((t=>{var a;const{imageSrc:r,...o}=t,n=null===(a=e.allFile.edges.find((e=>e.node.relativePath===r)))||void 0===a?void 0:a.node,s=(0,d.c)(n);return i.createElement(y,Object.assign({key:o.title},o,{image:s}))}))))}function j(){return i.createElement("footer",{className:"column-align"},i.createElement("h2",{id:"lower-name"},"Marvin Lee"),i.createElement("div",{id:"socials",className:"row-center"},i.createElement("a",{href:"https://github.com/malee31",className:"logoLink"},i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiPgoJPHRpdGxlPgoJCUdpdEh1YiBpY29uCgk8L3RpdGxlPgoJPHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPgo8L3N2Zz4K",alt:"Github"})),i.createElement("a",{href:"https://linkedin.com/in/-marvin",className:"logoLink"},i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiPgoJPHRpdGxlPgoJCUxpbmtlZEluIGljb24KCTwvdGl0bGU+Cgk8cGF0aCBkPSJNMjAuNDQ3IDIwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgtLjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDkuMzUxVjloMy40MTR2MS41NjFoLjA0NmMuNDc3LS45IDEuNjM3LTEuODUgMy4zNy0xLjg1IDMuNjAxIDAgNC4yNjcgMi4zNyA0LjI2NyA1LjQ1NXY2LjI4NnpNNS4zMzcgNy40MzNjLTEuMTQ0IDAtMi4wNjMtLjkyNi0yLjA2My0yLjA2NSAwLTEuMTM4LjkyLTIuMDYzIDIuMDYzLTIuMDYzIDEuMTQgMCAyLjA2NC45MjUgMi4wNjQgMi4wNjMgMCAxLjEzOS0uOTI1IDIuMDY1LTIuMDY0IDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiLz4KPC9zdmc+Cg==",alt:"LinkedIn"}))))}const D=["onrender.com"];const C=r.Z;function p(){return(0,i.useEffect)((()=>{console.log("Waking"),m.map((e=>e.demoLink)).filter((e=>"string"==typeof e&&D.some((t=>e.includes(t))))).map((e=>fetch(e,{method:"HEAD",mode:"no-cors",cache:"no-store"}).then((()=>{})).catch((()=>{}))))}),[]),i.createElement(i.Fragment,null,i.createElement(o.Z,null),i.createElement(g,null),i.createElement("main",null,i.createElement(I,null),i.createElement("section",{id:"featured-projects"},i.createElement(A,null))),i.createElement(j,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-54ad4ee9ed9ffc93c83c.js.map