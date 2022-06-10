"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[678],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9230:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return p},M:function(){return C},P:function(){return E},S:function(){return q},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return l}});var n=a(7294),r=(a(4811),a(5697)),i=a.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var m,g=["children"],h=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,a=o(e,g);return n.createElement(n.Fragment,null,n.createElement(h,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=o(e,f);return n.createElement("img",s({},d,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},b=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,v),d=c.sizes||(null==t?void 0:t.sizes),u=n.createElement(y,s({},c,t,{sizes:d,shouldLoad:l}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,a=o(e,w);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(m=b.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var C=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=b.propTypes;var L,k,S=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:S},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],I=new Set,_=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,g=e.onStartLoad,h=e.onLoad,p=e.onError,f=o(e,x),v=i.width,y=i.height,b=i.layout,w=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(v,y,b),E=w.style,C=w.className,S=o(w,A),N=(0,n.useRef)(),_=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var O=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,v,y);return(0,n.useEffect)((function(){L||(L=Promise.all([a.e(774),a.e(597)]).then(a.bind(a,3597)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=N.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(_)):k&&I.has(_)?void 0:(L.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;N.current.innerHTML=n(s({isLoading:!0,isLoaded:I.has(_),image:i},f)),I.has(_)||(e=requestAnimationFrame((function(){N.current&&(t=r(N.current,_,I,c,g,h,p))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){I.has(_)&&k&&(N.current.innerHTML=k(s({isLoading:I.has(_),isLoaded:I.has(_),image:i},f)),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}))}),[i]),(0,n.createElement)(r,s({},S,{style:s({},E,c,{backgroundColor:d}),className:C+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));O.propTypes=N,O.displayName="GatsbyImage";var T,D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:S,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(T=O,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=o(e,D);return r&&console.warn(r),a?n.createElement(T,s({image:a},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=R},6396:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3366),r=a(7294),i=["children","className"];function s(e){var t=e.children,a=e.className,s=(0,n.Z)(e,i);return r.createElement("section",Object.assign({className:"screen-section column-center "+(a||"")},s),t)}},9689:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6396),i=a(9536),s=a(156),o=(0,s.default)({resolved:{},chunkName:function(){return"organisms-ThreeSplash"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!a.m[t]},importAsync:function(){return Promise.all([a.e(737),a.e(87)]).then(a.bind(a,4014))},requireAsync:function(e){var t=this,a=this.resolve(e);return this.resolved[a]=!1,this.importAsync(e).then((function(e){return t.resolved[a]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return a(n)},resolve:function e(){return 4014}});function l(){var e=(0,n.useState)(!0),t=e[0],a=e[1];return o.load().then((function(){return a(!1)})),n.createElement(r.Z,{id:"home",className:"column-center column-align"},n.createElement(o,{fallback:null}),n.createElement(i.Z,{centered:t}))}},9536:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.centered;return n.createElement("header",{className:"column-align splash-text-layer"},n.createElement("div",{className:"column-align splash-text-layer-content "+(t?"":"splash-text-layer-content-top")},n.createElement("h2",null,"Marvin Lee"),n.createElement("h4",null,"Full Stack Developer")))}},8569:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=[{label:"Home",href:"#home"},{label:"About Me",href:"#about"},{label:"Featured Projects",href:"#github"}];function i(){var e=(0,n.useState)(!1),t=e[0],a=e[1],i=function(){return a(!1)};return n.createElement(n.Fragment,null,n.createElement("input",{id:"menu-toggle",className:"hidden","aria-hidden":"true",type:"checkbox",checked:t,onChange:function(){return a(!t)}}),n.createElement("div",{id:"nav-underlay","aria-hidden":"true",onClick:i}),n.createElement("label",{id:"menu-icon",htmlFor:"menu-toggle"},n.createElement("div",{id:"menu-icon-container"},n.createElement("div",{className:"menu-icon-div"}),n.createElement("div",{className:"menu-icon-div"}),n.createElement("div",{className:"menu-icon-div"}))),n.createElement("nav",null,n.createElement("div",{id:"nav-padding"},r.map((function(e){var t=e.label,a=e.href;return n.createElement("a",{href:a,onClick:i,key:t},n.createElement("span",null,t))})))))}var s=a(9689),o=a(9230);function l(){return n.createElement("footer",{className:"column-align"},n.createElement("h2",{id:"lower-name"},"Marvin Lee"),n.createElement("div",{id:"socials",className:"row-center"},n.createElement("a",{href:"https://github.com/malee31",className:"logoLink"},n.createElement(o.S,{src:"../../images/github.svg",alt:"Github",__imageData:a(7889)})),n.createElement("a",{href:"https://linkedin.com/in/marvin-lee~",className:"logoLink"},n.createElement(o.S,{src:"../../images/linkedIn.svg",alt:"LinkedIn",__imageData:a(4367)}))))}var c=a(1597);function d(e){var t=e.title,a=e.description,r=e.repoLink,i=e.demoLink,s=e.image;return n.createElement("div",{className:"row-between featured-card"},n.createElement("div",{className:"column-center featured-card-left"},n.createElement("a",{href:r,"aria-label":"View source on GitHub"},n.createElement("div",{className:"github-corner featured-card-image"},n.createElement(o.G,{className:"featured-card-img",alt:t+" Demo Image",image:s}),n.createElement("svg",{className:"octo-svg",width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"},n.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),n.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))),n.createElement("a",{className:"featured-card-demo-link",href:i},"Try it out! >")),n.createElement("div",{className:"column-stack featured-card-text"},n.createElement("h2",{className:"featured-card-main-title"},t),n.createElement("p",{className:"featured-card-main-text"},a)))}var u=[{title:"CardinalHours App",description:"An Expo App written in React Native for logging hours into the CardinalBotics CardinalHours server. (Demo password: bob)",repoLink:"https://github.com/malee31/ReactNativeCardinalBoticsApp",demoLink:"https://malee31.github.io/ReactNativeCardinalBoticsApp",imageSrc:"repositories/ReactNativeCardinalBoticsApp.png"},{title:"Asteroids Game",description:"A recreation of Asteroids from 1979! Controls are listed in the footer below so enjoy!",repoLink:"https://github.com/malee31/AsteroidsGameProcessing",demoLink:"https://malee31.github.io/AsteroidsGameProcessing",imageSrc:"repositories/AsteroidsGame.png"},{title:"Starfield",description:"A mesmerizing canvas with a calming sea of stars",repoLink:"https://github.com/malee31/StarfieldProcessing",demoLink:"https://malee31.github.io/StarfieldProcessing",imageSrc:"repositories/Starfield.png"},{title:"Data Visualization",description:"A nice animated chart for random data that can be changed and adapted for different data sets",repoLink:"https://github.com/malee31/DataVisualization",demoLink:"https://malee31.github.io/DataVisualization",imageSrc:"repositories/DataVisualization.png"}];function m(){var e=(0,c.useStaticQuery)("2657758467");return n.createElement("div",{id:"featured",className:"column-stack"},n.createElement("h1",null,"Featured Projects"),u.map((function(t){var a,r=null===(a=e.allFile.edges.find((function(e){return e.node.relativePath===t.imageSrc})))||void 0===a?void 0:a.node,i=(0,o.c)(r);return n.createElement(d,Object.assign({key:r.id},t,{image:i}))})))}function g(){return n.createElement(n.Fragment,null,n.createElement(i,null),n.createElement(s.Z,null),n.createElement("main",null,n.createElement("section",{id:"about",className:"heavy-padding column-center column-align"},n.createElement("h1",null,"About Me"),n.createElement("p",{className:"content"},"I have been an avid programmer ever since I learned that devices can turn lines of text into interactive and stunning games and websites in my first year of middle school. Currently, I write most of my projects using NodeJS on the backend and HTML, CSS, and Javascript on the front-end. Although my language of choice is JavaScript, I am also familiar with C, C++, Java, and Python.")),n.createElement("section",{id:"github"},n.createElement(m,null))),n.createElement(l,null))}},4367:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/home/static/3352c28e14b422df071dc069dcf79c19/e4605/linkedIn.svg","srcSet":"/home/static/3352c28e14b422df071dc069dcf79c19/99c53/linkedIn.svg 6w,\\n/home/static/3352c28e14b422df071dc069dcf79c19/3dc2d/linkedIn.svg 12w,\\n/home/static/3352c28e14b422df071dc069dcf79c19/e4605/linkedIn.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/home/static/3352c28e14b422df071dc069dcf79c19/eee53/linkedIn.webp 6w,\\n/home/static/3352c28e14b422df071dc069dcf79c19/30aa9/linkedIn.webp 12w,\\n/home/static/3352c28e14b422df071dc069dcf79c19/4e704/linkedIn.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},7889:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/home/static/d36888774555ae24722f1c65a5401343/e4605/github.svg","srcSet":"/home/static/d36888774555ae24722f1c65a5401343/99c53/github.svg 6w,\\n/home/static/d36888774555ae24722f1c65a5401343/3dc2d/github.svg 12w,\\n/home/static/d36888774555ae24722f1c65a5401343/e4605/github.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/home/static/d36888774555ae24722f1c65a5401343/eee53/github.webp 6w,\\n/home/static/d36888774555ae24722f1c65a5401343/30aa9/github.webp 12w,\\n/home/static/d36888774555ae24722f1c65a5401343/4e704/github.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')}}]);
//# sourceMappingURL=component---src-pages-index-js-371c7be3ff233f2fc6a4.js.map