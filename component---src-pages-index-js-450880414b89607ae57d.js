"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[678],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{G:function(){return T},L:function(){return h},M:function(){return L},P:function(){return w},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return l}});var n=a(7294),r=(a(4811),a(5697)),i=a.n(r);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,g=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,a=s(e,g);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,f);return n.createElement("img",o({},u,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},b=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,v),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(y,o({},c,t,{sizes:u,shouldLoad:l}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var E=["fallback"],w=function(e){var t=e.fallback,a=s(e,E);return t?n.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(m=b.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var L=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;var k,C,S=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:S},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],x=new Set,_=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,g=e.onStartLoad,p=e.onLoad,h=e.onError,f=s(e,A),v=i.width,y=i.height,b=i.layout,E=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(v,y,b),w=E.style,L=E.className,S=s(E,I),N=(0,n.useRef)(),_=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var T=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,v,y);return(0,n.useEffect)((function(){k||(k=Promise.all([a.e(774),a.e(826)]).then(a.bind(a,8826)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=N.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void x.add(_)):C&&x.has(_)?void 0:(k.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=n(o({isLoading:!0,isLoaded:x.has(_),image:i},f)),x.has(_)||(e=requestAnimationFrame((function(){N.current&&(t=r(N.current,_,x,c,g,p,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){x.has(_)&&C&&(N.current.innerHTML=C(o({isLoading:x.has(_),isLoaded:x.has(_),image:i},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(r,o({},S,{style:o({},w,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));T.propTypes=N,T.displayName="GatsbyImage";var O,D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:S,width:P,height:P,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(O=T,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=s(e,D);return r&&console.warn(r),a?n.createElement(O,o({image:a},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=R},4499:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(3366),r=a(7294),i=["children","className"];function o(e){var t=e.children,a=e.className,o=(0,n.Z)(e,i);return r.createElement("section",Object.assign({className:"screen-section column-center "+(a||"")},o),t)}},8170:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4499),i=a(1111),o=a(156),s=(0,o.default)({resolved:{},chunkName:function(){return"three-organisms-ThreeSplash"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:function(){return Promise.all([a.e(737),a.e(253)]).then(a.bind(a,8631))},requireAsync:function(e){var t=this,a=this.resolve(e);return this.resolved[a]=!1,this.importAsync(e).then((function(e){return t.resolved[a]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function e(){return 8631}});function l(){var e=(0,n.useState)(!0),t=e[0],a=e[1];return(0,n.useEffect)((function(){s.load().then((function(){return a(!1)}))}),[]),n.createElement(r.Z,{id:"home",className:"column-center column-align"},n.createElement(s,{fallback:null}),n.createElement(i.Z,{centered:t}))}},1111:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.centered;return n.createElement("header",{className:"column-align splash-text-layer"},n.createElement("div",{className:"column-align splash-text-layer-content "+(t?"":"splash-text-layer-content-top")},n.createElement("h2",null,"Marvin Lee"),n.createElement("h4",null,"Full Stack Developer")))}},1875:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=[{label:"Home",href:"#home"},{label:"About Me",href:"#about"},{label:"Featured Projects",href:"#github"}];function i(){var e=(0,n.useState)(!1),t=e[0],a=e[1],i=function(){return a(!1)};return n.createElement(n.Fragment,null,n.createElement("input",{id:"menu-toggle",className:"hidden","aria-hidden":"true",type:"checkbox",checked:t,onChange:function(){return a(!t)}}),n.createElement("div",{id:"nav-underlay","aria-hidden":"true",onClick:i}),n.createElement("label",{id:"menu-icon",htmlFor:"menu-toggle"},n.createElement("div",{id:"menu-icon-container"},n.createElement("div",{className:"menu-icon-div"}),n.createElement("div",{className:"menu-icon-div"}),n.createElement("div",{className:"menu-icon-div"}))),n.createElement("nav",null,n.createElement("div",{id:"nav-padding"},r.map((function(e){var t=e.label,a=e.href;return n.createElement("a",{href:a,onClick:i,key:t},n.createElement("span",null,t))})))))}var o=a(8170),s=a(7059);function l(){return n.createElement("footer",{className:"column-align"},n.createElement("h2",{id:"lower-name"},"Marvin Lee"),n.createElement("div",{id:"socials",className:"row-center"},n.createElement("a",{href:"https://github.com/malee31",className:"logoLink"},n.createElement(s.S,{src:"../../images/github.svg",alt:"Github",__error:'No data found for image "../../images/github.svg"\n              undefinedCould not read image data file "/home/runner/work/home/home/.cache/caches/gatsby-plugin-image/2167756099.json". \nThis may mean that the images in "/home/runner/work/home/home/src/components/react/molecules/Footer.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'})),n.createElement("a",{href:"https://linkedin.com/in/marvin-lee~",className:"logoLink"},n.createElement(s.S,{src:"../../images/linkedIn.svg",alt:"LinkedIn",__error:'No data found for image "../../images/linkedIn.svg"\n              undefinedCould not read image data file "/home/runner/work/home/home/.cache/caches/gatsby-plugin-image/1980443934.json". \nThis may mean that the images in "/home/runner/work/home/home/src/components/react/molecules/Footer.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}))))}var c=a(1597);function u(e){var t=e.image,a=e.title,r=e.description,i=e.repoLink,o=e.demoLink,l=(0,n.useState)(!1),c=l[0],u=l[1],d=function(){return u(!c)};return n.createElement("div",{className:"repo-card-container "+(c?"repo-card-container-force-flip":""),role:"listitem",tabIndex:"0",onClick:d,onKeyUp:function(e){"Space"===e.code&&d()}},n.createElement("div",{className:"repo-card repo-card-front"},n.createElement(s.G,{className:"featured-card-img",alt:a+" Demo Image",image:t})),n.createElement("div",{className:"repo-card column-center repo-card-back"},n.createElement("h3",{className:"repo-card-title"},a),n.createElement("p",{className:"repo-card-description"},r),n.createElement("div",{className:"repo-card-links"},n.createElement("a",{href:i,tabIndex:c?0:-1},"Open in GitHub"),n.createElement("a",{href:o,tabIndex:c?0:-1},"Try Demo"))))}var d=[{title:"CardinalHours App",description:"An Expo App written in React Native for logging hours into the CardinalBotics CardinalHours server. (Demo password: bob)",repoLink:"https://github.com/malee31/ReactNativeCardinalBoticsApp",demoLink:"https://malee31.github.io/ReactNativeCardinalBoticsApp",imageSrc:"repositories/ReactNativeCardinalBoticsApp.png"},{title:"Asteroids Game",description:"A recreation of Asteroids from 1979! Controls are listed in the footer below so enjoy!",repoLink:"https://github.com/malee31/AsteroidsGameProcessing",demoLink:"https://malee31.github.io/AsteroidsGameProcessing",imageSrc:"repositories/AsteroidsGame.png"},{title:"Starfield",description:"A mesmerizing canvas with a calming sea of stars",repoLink:"https://github.com/malee31/StarfieldProcessing",demoLink:"https://malee31.github.io/StarfieldProcessing",imageSrc:"repositories/Starfield.png"},{title:"Data Visualization",description:"A nice animated chart for random data that can be changed and adapted for different data sets",repoLink:"https://github.com/malee31/DataVisualization",demoLink:"https://malee31.github.io/DataVisualization",imageSrc:"repositories/DataVisualization.png"}];function m(){var e=(0,c.useStaticQuery)("2657758467");return n.createElement("div",{id:"featured"},n.createElement("h1",null,"Featured Projects"),n.createElement("div",{id:"featured-container",role:"list"},d.map((function(t){var a,r=null===(a=e.allFile.edges.find((function(e){return e.node.relativePath===t.imageSrc})))||void 0===a?void 0:a.node,i=(0,s.c)(r);return n.createElement(u,Object.assign({key:t.title},t,{image:i}))}))))}function g(){return n.createElement(n.Fragment,null,n.createElement(i,null),n.createElement(o.Z,null),n.createElement("main",null,n.createElement("section",{id:"about",className:"heavy-padding column-center column-align"},n.createElement("h1",null,"About Me"),n.createElement("p",{className:"content"},"I have been an avid programmer ever since I learned that devices can turn lines of text into interactive and stunning games and websites in my first year of middle school. Currently, I write most of my projects using NodeJS on the backend and HTML, CSS, and Javascript on the front-end. Although my language of choice is JavaScript, I am also familiar with C, C++, Java, and Python.")),n.createElement("section",{id:"github"},n.createElement(m,null))),n.createElement(l,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-450880414b89607ae57d.js.map