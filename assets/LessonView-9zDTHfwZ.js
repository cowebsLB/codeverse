const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dg_1NGHY.js","assets/index-CPCDCkTk.css"])))=>i.map(i=>d[i]);
import{j as s,r as f,a2 as W,f as xe,a3 as we,a4 as je,W as Ce,d as Se,l as ee,a as Ne,e as ke,q as Oe,a5 as te}from"./index-Dg_1NGHY.js";import{g as Le}from"./iconMapper-Zzl3E-c2.js";import{L as Pe}from"./LanguageLogo-C77cfrHt.js";function Ee({lessonId:t,progress:n=0,completed:e=!1}){return s.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all ${e?"bg-green-500":"bg-gradient-to-r from-indigo-500 to-purple-500"}`,style:{width:`${n}%`}})})}function se(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function Me(t){if(Array.isArray(t))return t}function $e(t,n,e){return(n=He(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Te(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,o,u,h,y=[],x=!0,w=!1;try{if(u=(e=e.call(t)).next,n!==0)for(;!(x=(r=u.call(e)).done)&&(y.push(r.value),y.length!==n);x=!0);}catch(E){w=!0,o=E}finally{try{if(!x&&e.return!=null&&(h=e.return(),Object(h)!==h))return}finally{if(w)throw o}}return y}}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function oe(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ae(Object(e),!0).forEach(function(r){$e(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ae(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Fe(t,n){if(t==null)return{};var e,r,o=Ve(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)===-1&&{}.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function Ve(t,n){if(t==null)return{};var e={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.indexOf(r)!==-1)continue;e[r]=t[r]}return e}function Ie(t,n){return Me(t)||Te(t,n)||_e(t,n)||Ae()}function Re(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function He(t){var n=Re(t,"string");return typeof n=="symbol"?n:n+""}function _e(t,n){if(t){if(typeof t=="string")return se(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?se(t,n):void 0}}function We(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ce(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function le(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ce(Object(e),!0).forEach(function(r){We(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ce(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Ue(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(r){return n.reduceRight(function(o,u){return u(o)},r)}}function B(t){return function n(){for(var e=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return o.length>=t.length?t.apply(this,o):function(){for(var h=arguments.length,y=new Array(h),x=0;x<h;x++)y[x]=arguments[x];return n.apply(e,[].concat(o,y))}}}function Y(t){return{}.toString.call(t).includes("Object")}function De(t){return!Object.keys(t).length}function q(t){return typeof t=="function"}function Be(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function Ge(t,n){return Y(n)||I("changeType"),Object.keys(n).some(function(e){return!Be(t,e)})&&I("changeField"),n}function qe(t){q(t)||I("selectorType")}function ze(t){q(t)||Y(t)||I("handlerType"),Y(t)&&Object.values(t).some(function(n){return!q(n)})&&I("handlersType")}function Ke(t){t||I("initialIsRequired"),Y(t)||I("initialType"),De(t)&&I("initialContent")}function Je(t,n){throw new Error(t[n]||t.default)}var Ye={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},I=B(Je)(Ye),K={changes:Ge,selector:qe,handler:ze,initial:Ke};function Qe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};K.initial(t),K.handler(n);var e={current:t},r=B(et)(e,n),o=B(Ze)(e),u=B(K.changes)(t),h=B(Xe)(e);function y(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(E){return E};return K.selector(w),w(e.current)}function x(w){Ue(r,o,u,h)(w)}return[y,x]}function Xe(t,n){return q(n)?n(t.current):n}function Ze(t,n){return t.current=le(le({},t.current),n),n}function et(t,n,e){return q(n)?n(t.current):Object.keys(e).forEach(function(r){var o;return(o=n[r])===null||o===void 0?void 0:o.call(n,t.current[r])}),e}var tt={create:Qe},nt={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs"}};function rt(t){return function n(){for(var e=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return o.length>=t.length?t.apply(this,o):function(){for(var h=arguments.length,y=new Array(h),x=0;x<h;x++)y[x]=arguments[x];return n.apply(e,[].concat(o,y))}}}function it(t){return{}.toString.call(t).includes("Object")}function st(t){return t||de("configIsRequired"),it(t)||de("configType"),t.urls?(at(),{paths:{vs:t.urls.monacoBase}}):t}function at(){console.warn(ue.deprecation)}function ot(t,n){throw new Error(t[n]||t.default)}var ue={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},de=rt(ot)(ue),ct={config:st},lt=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(o){return e.reduceRight(function(u,h){return h(u)},o)}};function fe(t,n){return Object.keys(n).forEach(function(e){n[e]instanceof Object&&t[e]&&Object.assign(n[e],fe(t[e],n[e]))}),oe(oe({},t),n)}var dt={type:"cancelation",msg:"operation is manually canceled"};function ne(t){var n=!1,e=new Promise(function(r,o){t.then(function(u){return n?o(dt):r(u)}),t.catch(o)});return e.cancel=function(){return n=!0},e}var ut=["monaco"],ft=tt.create({config:nt,isInitialized:!1,resolve:null,reject:null,monaco:null}),ge=Ie(ft,2),z=ge[0],Q=ge[1];function gt(t){var n=ct.config(t),e=n.monaco,r=Fe(n,ut);Q(function(o){return{config:fe(o.config,r),monaco:e}})}function pt(){var t=z(function(n){var e=n.monaco,r=n.isInitialized,o=n.resolve;return{monaco:e,isInitialized:r,resolve:o}});if(!t.isInitialized){if(Q({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),ne(re);if(window.monaco&&window.monaco.editor)return pe(window.monaco),t.resolve(window.monaco),ne(re);lt(mt,vt)(bt)}return ne(re)}function mt(t){return document.body.appendChild(t)}function ht(t){var n=document.createElement("script");return t&&(n.src=t),n}function vt(t){var n=z(function(r){var o=r.config,u=r.reject;return{config:o,reject:u}}),e=ht("".concat(n.config.paths.vs,"/loader.js"));return e.onload=function(){return t()},e.onerror=n.reject,e}function bt(){var t=z(function(e){var r=e.config,o=e.resolve,u=e.reject;return{config:r,resolve:o,reject:u}}),n=window.require;n.config(t.config),n(["vs/editor/editor.main"],function(e){var r=e.m;pe(r),t.resolve(r)},function(e){t.reject(e)})}function pe(t){z().monaco||Q({monaco:t})}function yt(){return z(function(t){var n=t.monaco;return n})}var re=new Promise(function(t,n){return Q({resolve:t,reject:n})}),me={config:gt,init:pt,__getMonacoInstance:yt},xt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ie=xt,wt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},jt=wt;function Ct({children:t}){return W.createElement("div",{style:jt.container},t)}var St=Ct,Nt=St;function kt({width:t,height:n,isEditorReady:e,loading:r,_ref:o,className:u,wrapperProps:h}){return W.createElement("section",{style:{...ie.wrapper,width:t,height:n},...h},!e&&W.createElement(Nt,null,r),W.createElement("div",{ref:o,style:{...ie.fullWidth,...!e&&ie.hide},className:u}))}var Ot=kt,he=f.memo(Ot);function Lt(t){f.useEffect(t,[])}var ve=Lt;function Pt(t,n,e=!0){let r=f.useRef(!0);f.useEffect(r.current||!e?()=>{r.current=!1}:t,n)}var M=Pt;function G(){}function _(t,n,e,r){return Et(t,r)||Mt(t,n,e,r)}function Et(t,n){return t.editor.getModel(be(t,n))}function Mt(t,n,e,r){return t.editor.createModel(n,e,r?be(t,r):void 0)}function be(t,n){return t.Uri.parse(n)}function $t({original:t,modified:n,language:e,originalLanguage:r,modifiedLanguage:o,originalModelPath:u,modifiedModelPath:h,keepCurrentOriginalModel:y=!1,keepCurrentModifiedModel:x=!1,theme:w="light",loading:E="Loading...",options:O={},height:$="100%",width:R="100%",className:C,wrapperProps:P={},beforeMount:T=G,onMount:U=G}){let[N,H]=f.useState(!1),[A,j]=f.useState(!0),k=f.useRef(null),c=f.useRef(null),p=f.useRef(null),m=f.useRef(U),i=f.useRef(T),v=f.useRef(!1);ve(()=>{let d=me.init();return d.then(a=>(c.current=a)&&j(!1)).catch(a=>a?.type!=="cancelation"&&console.error("Monaco initialization: error:",a)),()=>k.current?b():d.cancel()}),M(()=>{if(k.current&&c.current){let d=k.current.getOriginalEditor(),a=_(c.current,t||"",r||e||"text",u||"");a!==d.getModel()&&d.setModel(a)}},[u],N),M(()=>{if(k.current&&c.current){let d=k.current.getModifiedEditor(),a=_(c.current,n||"",o||e||"text",h||"");a!==d.getModel()&&d.setModel(a)}},[h],N),M(()=>{let d=k.current.getModifiedEditor();d.getOption(c.current.editor.EditorOption.readOnly)?d.setValue(n||""):n!==d.getValue()&&(d.executeEdits("",[{range:d.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),d.pushUndoStop())},[n],N),M(()=>{k.current?.getModel()?.original.setValue(t||"")},[t],N),M(()=>{let{original:d,modified:a}=k.current.getModel();c.current.editor.setModelLanguage(d,r||e||"text"),c.current.editor.setModelLanguage(a,o||e||"text")},[e,r,o],N),M(()=>{c.current?.editor.setTheme(w)},[w],N),M(()=>{k.current?.updateOptions(O)},[O],N);let l=f.useCallback(()=>{if(!c.current)return;i.current(c.current);let d=_(c.current,t||"",r||e||"text",u||""),a=_(c.current,n||"",o||e||"text",h||"");k.current?.setModel({original:d,modified:a})},[e,n,o,t,r,u,h]),g=f.useCallback(()=>{!v.current&&p.current&&(k.current=c.current.editor.createDiffEditor(p.current,{automaticLayout:!0,...O}),l(),c.current?.editor.setTheme(w),H(!0),v.current=!0)},[O,w,l]);f.useEffect(()=>{N&&m.current(k.current,c.current)},[N]),f.useEffect(()=>{!A&&!N&&g()},[A,N,g]);function b(){let d=k.current?.getModel();y||d?.original?.dispose(),x||d?.modified?.dispose(),k.current?.dispose()}return W.createElement(he,{width:R,height:$,isEditorReady:N,loading:E,_ref:p,className:C,wrapperProps:P})}var Tt=$t;f.memo(Tt);function At(t){let n=f.useRef();return f.useEffect(()=>{n.current=t},[t]),n.current}var Ft=At,J=new Map;function Vt({defaultValue:t,defaultLanguage:n,defaultPath:e,value:r,language:o,path:u,theme:h="light",line:y,loading:x="Loading...",options:w={},overrideServices:E={},saveViewState:O=!0,keepCurrentModel:$=!1,width:R="100%",height:C="100%",className:P,wrapperProps:T={},beforeMount:U=G,onMount:N=G,onChange:H,onValidate:A=G}){let[j,k]=f.useState(!1),[c,p]=f.useState(!0),m=f.useRef(null),i=f.useRef(null),v=f.useRef(null),l=f.useRef(N),g=f.useRef(U),b=f.useRef(),d=f.useRef(r),a=Ft(u),S=f.useRef(!1),F=f.useRef(!1);ve(()=>{let L=me.init();return L.then(V=>(m.current=V)&&p(!1)).catch(V=>V?.type!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>i.current?ye():L.cancel()}),M(()=>{let L=_(m.current,t||r||"",n||o||"",u||e||"");L!==i.current?.getModel()&&(O&&J.set(a,i.current?.saveViewState()),i.current?.setModel(L),O&&i.current?.restoreViewState(J.get(u)))},[u],j),M(()=>{i.current?.updateOptions(w)},[w],j),M(()=>{!i.current||r===void 0||(i.current.getOption(m.current.editor.EditorOption.readOnly)?i.current.setValue(r):r!==i.current.getValue()&&(F.current=!0,i.current.executeEdits("",[{range:i.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),i.current.pushUndoStop(),F.current=!1))},[r],j),M(()=>{let L=i.current?.getModel();L&&o&&m.current?.editor.setModelLanguage(L,o)},[o],j),M(()=>{y!==void 0&&i.current?.revealLine(y)},[y],j),M(()=>{m.current?.editor.setTheme(h)},[h],j);let D=f.useCallback(()=>{if(!(!v.current||!m.current)&&!S.current){g.current(m.current);let L=u||e,V=_(m.current,r||t||"",n||o||"",L||"");i.current=m.current?.editor.create(v.current,{model:V,automaticLayout:!0,...w},E),O&&i.current.restoreViewState(J.get(L)),m.current.editor.setTheme(h),y!==void 0&&i.current.revealLine(y),k(!0),S.current=!0}},[t,n,e,r,o,u,w,E,O,h,y]);f.useEffect(()=>{j&&l.current(i.current,m.current)},[j]),f.useEffect(()=>{!c&&!j&&D()},[c,j,D]),d.current=r,f.useEffect(()=>{j&&H&&(b.current?.dispose(),b.current=i.current?.onDidChangeModelContent(L=>{F.current||H(i.current.getValue(),L)}))},[j,H]),f.useEffect(()=>{if(j){let L=m.current.editor.onDidChangeMarkers(V=>{let X=i.current.getModel()?.uri;if(X&&V.find(Z=>Z.path===X.path)){let Z=m.current.editor.getModelMarkers({resource:X});A?.(Z)}});return()=>{L?.dispose()}}return()=>{}},[j,A]);function ye(){b.current?.dispose(),$?O&&J.set(u,i.current.saveViewState()):i.current.getModel()?.dispose(),i.current.dispose()}return W.createElement(he,{width:R,height:C,isEditorReady:j,loading:x,_ref:v,className:P,wrapperProps:T})}var It=Vt,Rt=f.memo(It),Ht=Rt;function _t({challenge:t,onCodeChange:n,onValidate:e,isCompleted:r}){const[o,u]=f.useState(t.starterCode||""),[h,y]=f.useState(!1),[x,w]=f.useState(null),E=f.useRef(null),O=P=>{E.current=P},$=P=>{const T=P||"";u(T),n(T),x&&w(null)},R=async()=>{y(!0),w(null);try{const P=await e(o);w(P)}catch(P){w({isValid:!1,error:P instanceof Error?P.message:"Validation failed"})}finally{y(!1)}},C=()=>{switch(t.language){case"javascript":return"javascript";case"python":return"python";case"html":return"html";case"css":return"css";case"typescript":return"typescript";case"ruby":return"ruby";case"php":return"php";case"swift":return"swift";case"kotlin":return"kotlin";case"cpp":case"c++":return"cpp";case"go":return"go";case"rust":return"rust";case"c":return"c";case"java":return"java";case"csharp":case"c#":return"csharp";default:return"javascript"}};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"bg-gray-900 rounded-lg border border-gray-700 overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[s.jsx("span",{className:"text-sm font-medium text-gray-300 font-code",children:"Code Editor"}),s.jsx("button",{onClick:R,disabled:h||r,className:`px-4 py-2 rounded-lg font-medium transition-all ${r?"bg-green-600 text-white cursor-not-allowed":h?"bg-gray-600 text-gray-300 cursor-not-allowed":"bg-indigo-600 text-white hover:bg-indigo-700"}`,children:r?"✓ Completed":h?"Validating...":"Run & Check"})]}),s.jsx(Ht,{height:"400px",language:C(),value:o,onChange:$,onMount:O,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:r,automaticLayout:!0}})]}),x&&s.jsx("div",{className:`p-4 rounded-lg border ${x.isValid?"bg-green-900/30 border-green-700 text-green-400":"bg-red-900/30 border-red-700 text-red-400"}`,children:s.jsx("div",{className:"flex items-center gap-2",children:x.isValid?s.jsxs(s.Fragment,{children:[s.jsx(xe,{className:"text-2xl"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold font-heading",children:"Correct!"}),s.jsx("p",{className:"text-sm font-body",children:"Great job! You can now proceed to the next lesson."})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(we,{className:"text-2xl"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold font-heading",children:"Not quite right"}),s.jsx("p",{className:"text-sm font-body",children:x.error||"Please review the requirements and try again."})]})]})})}),t.expectedOutput&&s.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-gray-300 font-code mb-2",children:"Expected Output:"}),s.jsx("pre",{className:"text-sm text-green-400 font-code bg-gray-900 rounded p-3 overflow-x-auto",children:t.expectedOutput})]})]})}function Wt({achievementId:t,onClose:n}){const[e,r]=f.useState(!1),o=t?je(t):null;if(f.useEffect(()=>{if(t){r(!0);const h=setTimeout(()=>{r(!1),setTimeout(n,300)},3e3);return()=>clearTimeout(h)}},[t,n]),!o||!e)return null;const u={common:"border-gray-500 bg-gray-800",rare:"border-blue-500 bg-blue-900/30",epic:"border-purple-500 bg-purple-900/30",legendary:"border-yellow-500 bg-yellow-900/30"};return s.jsx("div",{className:`fixed top-4 right-4 z-50 transform transition-all duration-300 ${e?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,children:s.jsx("div",{className:`rounded-lg border-2 p-4 shadow-xl ${u[o.rarity]}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[Le(o.icon,"text-4xl"),s.jsxs("div",{children:[s.jsx("p",{className:"text-white font-bold font-heading",children:"Achievement Unlocked!"}),s.jsx("p",{className:"text-gray-300 font-body",children:o.name}),s.jsx("p",{className:"text-sm text-gray-400 font-body mt-1",children:o.description}),s.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[s.jsxs("span",{className:"text-xs text-yellow-400 font-code",children:["+",o.rewardCoins," coins"]}),s.jsx("span",{className:"text-xs text-gray-500",children:"•"}),s.jsxs("span",{className:"text-xs text-indigo-400 font-code",children:["+",o.rewardXP," XP"]})]})]})]})})})}function Gt(){const{lessonId:t}=Ce(),n=Se(),e=ee.find(c=>c.id===t),{updateProgress:r,getProgress:o}=Ne(),[u,h]=f.useState(0),[y,x]=f.useState(!1),[w,E]=f.useState([]),[O,$]=f.useState(0);if(f.useEffect(()=>{if(e){let c=!1;return o(e.id).then(p=>{c||(h(p?.progress||0),x(p?.completed||!1))}).catch(p=>{c||console.error("Failed to load lesson progress:",p)}),()=>{c=!0}}},[e?.id]),!e)return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:"Lesson not found"}),s.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all",children:"Back to Study Program"})]})});const R=()=>{const c={HTML:[{id:"task-1",title:"HTML Structure & Semantic Elements",description:"Learn the basic structure of HTML documents and semantic HTML5 elements.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <header>
    <h1>Welcome</h1>
  </header>
  <main>
    <p>Content goes here</p>
  </main>
</body>
</html>`},{id:"task-2",title:"CSS Styling & Selectors",description:"Master CSS selectors, properties, and styling techniques.",code:`/* CSS Selectors */
.header {
  background-color: #333;
  color: white;
  padding: 20px;
}

#main-content {
  max-width: 1200px;
  margin: 0 auto;
}

h1:hover {
  color: blue;
}`},{id:"task-3",title:"CSS Grid & Flexbox",description:"Create responsive layouts using CSS Grid and Flexbox.",code:`/* Flexbox */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* CSS Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`},{id:"task-4",title:"Responsive Design",description:"Build responsive websites that work on all devices using media queries.",code:`/* Mobile First */
.container {
  width: 100%;
  padding: 10px;
}

@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}`}],JavaScript:[{id:"task-1",title:"Variables & Data Types",description:"Learn how to declare variables and understand different data types in JavaScript.",code:`let name = "Codeverse";
const age = 25;
var isActive = true;

// Data types
const number = 42;
const string = "Hello";
const boolean = true;
const array = [1, 2, 3];
const object = { key: "value" };`},{id:"task-2",title:"Functions",description:"Create and use functions to organize your code.",code:`function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const arrow = (x) => x * 2;

// Callback
setTimeout(() => {
  console.log("Delayed!");
}, 1000);`},{id:"task-3",title:"Control Flow",description:"Use conditionals and loops to control program flow.",code:`if (condition) {
  // do something
} else if (otherCondition) {
  // do something else
} else {
  // default
}

// Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}`},{id:"task-4",title:"Objects & Arrays",description:"Work with objects and arrays to store and manipulate data.",code:`const obj = { name: "Codeverse", age: 25 };
const arr = [1, 2, 3];

// Array methods
arr.map(x => x * 2);
arr.filter(x => x > 1);
arr.reduce((acc, x) => acc + x, 0);`}],Python:[{id:"task-1",title:"Variables & Data Types",description:"Learn Python variables and basic data types.",code:`name = "Codeverse"
age = 25
is_active = True

# Data types
number = 42
string = "Hello"
boolean = True
my_list = [1, 2, 3]
my_dict = {"key": "value"}`},{id:"task-2",title:"Functions & Control Flow",description:"Create functions and use conditionals in Python.",code:`def greet(name):
    return f"Hello, {name}!"

# Conditionals
if condition:
    print("True")
elif other_condition:
    print("Other")
else:
    print("False")`},{id:"task-3",title:"Lists & Dictionaries",description:"Work with Python lists and dictionaries.",code:`# Lists
my_list = [1, 2, 3, 4, 5]
my_list.append(6)
my_list[0] = 10

# Dictionaries
my_dict = {"name": "Codeverse", "age": 25}
my_dict["city"] = "Tech City"`},{id:"task-4",title:"Loops & List Comprehensions",description:"Master Python loops and list comprehensions.",code:`# For loop
for i in range(10):
    print(i)

# List comprehension
squares = [x**2 for x in range(10)]

# Dictionary comprehension
squared_dict = {x: x**2 for x in range(5)}`}],TypeScript:[{id:"task-1",title:"Types & Interfaces",description:"Learn TypeScript types and interfaces for type safety.",code:`// Basic types
let name: string = "Codeverse";
let age: number = 25;
let isActive: boolean = true;

// Interface
interface User {
  name: string;
  age: number;
  email?: string;
}`},{id:"task-2",title:"Functions & Generics",description:"Create typed functions and use generics.",code:`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Generic function
function identity<T>(arg: T): T {
  return arg;
}`},{id:"task-3",title:"Classes & Inheritance",description:"Use TypeScript classes with type safety.",code:`class User {
  constructor(
    public name: string,
    private age: number
  ) {}
  
  greet(): string {
    return \`Hello, \${this.name}!\`;
  }
}`},{id:"task-4",title:"Advanced Types",description:"Explore union types, enums, and type guards.",code:`// Union types
type Status = "active" | "inactive" | "pending";

// Enum
enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green"
}

// Type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}`}],"Node.js":[{id:"task-1",title:"Modules & require()",description:"Learn Node.js module system and require().",code:`// Import module
const fs = require('fs');
const path = require('path');

// ES6 modules
export function greet(name) {
  return \`Hello, \${name}!\`;
}

import { greet } from './greet.js';`},{id:"task-2",title:"File System Operations",description:"Read and write files using Node.js fs module.",code:`const fs = require('fs').promises;

// Read file
async function readFile() {
  const data = await fs.readFile('file.txt', 'utf8');
  console.log(data);
}

// Write file
await fs.writeFile('output.txt', 'Hello World');`},{id:"task-3",title:"HTTP Server",description:"Create HTTP servers with Node.js http module.",code:`const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000);`},{id:"task-4",title:"Express.js Basics",description:"Build web applications with Express.js framework.",code:`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}],PHP:[{id:"task-1",title:"PHP Basics & Variables",description:"Learn PHP syntax and variable handling.",code:`<?php
$name = "Codeverse";
$age = 25;
$isActive = true;

// Concatenation
echo "Hello, " . $name . "!";

// String interpolation
echo "Hello, {$name}!";
?>`},{id:"task-2",title:"Functions & Arrays",description:"Create functions and work with arrays in PHP.",code:`<?php
function greet($name) {
    return "Hello, " . $name . "!";
}

// Arrays
$fruits = ["apple", "banana", "orange"];
$person = [
    "name" => "Codeverse",
    "age" => 25
];
?>`},{id:"task-3",title:"Database Operations",description:"Connect to databases and execute queries.",code:`<?php
$conn = new mysqli("localhost", "user", "pass", "db");

$result = $conn->query("SELECT * FROM users");
while ($row = $result->fetch_assoc()) {
    echo $row["name"];
}

$conn->close();
?>`},{id:"task-4",title:"Forms & Sessions",description:"Handle form submissions and manage sessions.",code:`<?php
session_start();

// Form handling
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $_SESSION["user"] = $name;
}

// Access session
echo $_SESSION["user"];
?>`}],Ruby:[{id:"task-1",title:"Ruby Basics",description:"Learn Ruby syntax and basic concepts.",code:`name = "Codeverse"
age = 25
is_active = true

# String interpolation
puts "Hello, #{name}!"

# Symbols
:status => :active`},{id:"task-2",title:"Methods & Blocks",description:"Create methods and use blocks in Ruby.",code:`def greet(name)
  "Hello, #{name}!"
end

# Blocks
[1, 2, 3].each do |num|
  puts num * 2
end

# Yield
[1, 2, 3].map { |x| x * 2 }`},{id:"task-3",title:"Classes & Modules",description:"Work with Ruby classes and modules.",code:`class User
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    "Hello, #{@name}!"
  end
end`},{id:"task-4",title:"Hashes & Arrays",description:"Master Ruby hashes and arrays.",code:`# Arrays
fruits = ["apple", "banana", "orange"]
fruits << "grape"

# Hashes
person = {
  name: "Codeverse",
  age: 25
}

person[:city] = "Tech City"`}],Swift:[{id:"task-1",title:"Swift Basics",description:"Learn Swift variables and constants.",code:`var name = "Codeverse"
let age = 25
var isActive = true

// Type annotation
var count: Int = 10
var message: String = "Hello"`},{id:"task-2",title:"Optionals & Unwrapping",description:"Master Swift optionals and safe unwrapping.",code:`var optionalName: String? = "Codeverse"

// Optional binding
if let name = optionalName {
    print(name)
}

// Guard statement
guard let name = optionalName else { return }`},{id:"task-3",title:"Functions & Closures",description:"Create functions and use closures in Swift.",code:`func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

// Closure
let multiply = { (x: Int, y: Int) -> Int in
    return x * y
}`},{id:"task-4",title:"Structs & Classes",description:"Work with Swift structs and classes.",code:`struct User {
    var name: String
    let age: Int
    
    func greet() -> String {
        return "Hello, \\(name)!"
    }
}

let user = User(name: "Codeverse", age: 25)`}],Kotlin:[{id:"task-1",title:"Kotlin Basics",description:"Learn Kotlin variables and data types.",code:`var name = "Codeverse"
val age = 25
var isActive = true

// Type annotation
val count: Int = 10
val message: String = "Hello"`},{id:"task-2",title:"Null Safety",description:"Master Kotlin null safety features.",code:`var name: String? = "Codeverse"

// Safe call
val length = name?.length

// Elvis operator
val displayName = name ?: "Unknown"

// Not-null assertion
val length2 = name!!.length`},{id:"task-3",title:"Functions & Lambdas",description:"Create functions and use lambdas.",code:`fun greet(name: String): String {
    return "Hello, $name!"
}

// Lambda
val multiply = { x: Int, y: Int -> x * y }

// Higher-order function
listOf(1, 2, 3).map { it * 2 }`},{id:"task-4",title:"Data Classes & Sealed Classes",description:"Work with Kotlin data classes.",code:`data class User(
    val name: String,
    val age: Int
)

val user = User("Codeverse", 25)
val (name, age) = user // Destructuring`}],"C#":[{id:"task-1",title:"C# Basics",description:"Learn C# variables and data types.",code:`string name = "Codeverse";
int age = 25;
bool isActive = true;

// Type inference
var count = 10;
var message = "Hello";`},{id:"task-2",title:"Classes & Objects",description:"Create classes and objects in C#.",code:`public class User
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public string Greet()
    {
        return $"Hello, {Name}!";
    }
}`},{id:"task-3",title:"LINQ & Collections",description:"Use LINQ to query collections.",code:`var numbers = new List<int> { 1, 2, 3, 4, 5 };

var evens = numbers.Where(n => n % 2 == 0);
var doubled = numbers.Select(n => n * 2);
var sum = numbers.Sum();`},{id:"task-4",title:"Async/Await",description:"Work with asynchronous programming.",code:`async Task<string> GetDataAsync()
{
    await Task.Delay(1000);
    return "Data loaded";
}

// Usage
var data = await GetDataAsync();`}],C:[{id:"task-1",title:"C Basics & Pointers",description:"Learn C syntax and pointer basics.",code:`#include <stdio.h>

int main() {
    int age = 25;
    int *ptr = &age;
    
    printf("Age: %d\\n", age);
    printf("Pointer: %p\\n", ptr);
    
    return 0;
}`},{id:"task-2",title:"Arrays & Strings",description:"Work with arrays and strings in C.",code:`int numbers[5] = {1, 2, 3, 4, 5};
char name[] = "Codeverse";

// String functions
#include <string.h>
int len = strlen(name);
strcpy(dest, name);`},{id:"task-3",title:"Functions & Memory",description:"Create functions and manage memory.",code:`int add(int a, int b) {
    return a + b;
}

// Memory allocation
int *arr = malloc(10 * sizeof(int));
free(arr);`},{id:"task-4",title:"Structures & File I/O",description:"Work with structures and file operations.",code:`struct User {
    char name[50];
    int age;
};

// File I/O
FILE *file = fopen("data.txt", "r");
fclose(file);`}],"C++":[{id:"task-1",title:"C++ Basics & Classes",description:"Learn C++ syntax and classes.",code:`#include <iostream>
using namespace std;

class User {
private:
    string name;
    int age;
public:
    User(string n, int a) : name(n), age(a) {}
    void greet() { cout << "Hello, " << name << "!"; }
};`},{id:"task-2",title:"Templates & STL",description:"Use templates and STL containers.",code:`template<typename T>
T add(T a, T b) {
    return a + b;
}

// STL
#include <vector>
vector<int> numbers = {1, 2, 3, 4, 5};`},{id:"task-3",title:"Pointers & References",description:"Master pointers and references.",code:`int value = 10;
int *ptr = &value;
int &ref = value;

*ptr = 20;  // Changes value
ref = 30;   // Also changes value`},{id:"task-4",title:"Inheritance & Polymorphism",description:"Use inheritance and polymorphism.",code:`class Animal {
public:
    virtual void speak() = 0;
};

class Dog : public Animal {
public:
    void speak() override { cout << "Woof!"; }
};`}],Go:[{id:"task-1",title:"Go Basics",description:"Learn Go syntax and basic concepts.",code:`package main

import "fmt"

func main() {
    name := "Codeverse"
    age := 25
    
    fmt.Printf("Hello, %s! Age: %d\\n", name, age)
}`},{id:"task-2",title:"Functions & Methods",description:"Create functions and methods in Go.",code:`func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

type User struct {
    Name string
    Age  int
}

func (u User) Greet() string {
    return fmt.Sprintf("Hello, %s!", u.Name)
}`},{id:"task-3",title:"Goroutines & Channels",description:"Use goroutines and channels for concurrency.",code:`go func() {
    fmt.Println("Running in goroutine")
}()

ch := make(chan string)
go func() {
    ch <- "Hello"
}()
msg := <-ch`},{id:"task-4",title:"Interfaces & Error Handling",description:"Work with interfaces and error handling.",code:`type Greeter interface {
    Greet() string
}

func greet(g Greeter) {
    fmt.Println(g.Greet())
}

// Error handling
result, err := doSomething()
if err != nil {
    log.Fatal(err)
}`}],Rust:[{id:"task-1",title:"Rust Basics & Ownership",description:"Learn Rust syntax and ownership system.",code:`let name = String::from("Codeverse");
let age = 25;

// Ownership
let s1 = String::from("hello");
let s2 = s1; // s1 moved to s2
// println!("{}", s1); // Error!`},{id:"task-2",title:"Borrowing & References",description:"Master borrowing and references in Rust.",code:`fn calculate_length(s: &String) -> usize {
    s.len()
}

let s = String::from("hello");
let len = calculate_length(&s);
println!("{}", s); // Still valid`},{id:"task-3",title:"Structs & Enums",description:"Work with structs and enums.",code:`struct User {
    name: String,
    age: u32,
}

enum Status {
    Active,
    Inactive,
    Pending,
}`},{id:"task-4",title:"Error Handling & Result",description:"Handle errors using Result type.",code:`fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}

match divide(10.0, 2.0) {
    Ok(result) => println!("{}", result),
    Err(e) => println!("Error: {}", e),
}`}],Java:[{id:"task-1",title:"Java Basics & Classes",description:"Learn Java syntax and classes.",code:`public class User {
    private String name;
    private int age;
    
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hello, " + name + "!";
    }
}`},{id:"task-2",title:"Inheritance & Polymorphism",description:"Use inheritance and polymorphism.",code:`class Animal {
    public void speak() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Woof!");
    }
}`},{id:"task-3",title:"Collections & Generics",description:"Work with Java collections.",code:`List<String> names = new ArrayList<>();
names.add("Codeverse");
names.add("Java");

Map<String, Integer> ages = new HashMap<>();
ages.put("Codeverse", 25);`},{id:"task-4",title:"Exceptions & Streams",description:"Handle exceptions and use streams.",code:`try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}

// Streams
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);`}]};return c[e.subject]?c[e.subject]:[{id:"task-1",title:"Introduction",description:`Welcome to ${e.title}! Let's start with the basics.`,code:`// ${e.subject} Basics
// Start learning ${e.subject} here!`},{id:"task-2",title:"Core Concepts",description:"Learn the fundamental concepts of this language.",code:`// Core concepts in ${e.subject}
// Explore the key features`},{id:"task-3",title:"Practice Exercise",description:"Apply what you've learned in a hands-on exercise.",code:`// Your ${e.subject} code here
// Practice makes perfect!`},{id:"task-4",title:"Advanced Topics",description:"Explore more advanced features and patterns.",code:`// Advanced ${e.subject} patterns
// Take your skills to the next level`}]},C=async()=>{if(y)return;h(100),x(!0),await r(e.id,100,!0);const p=await Oe.getState().checkAndUnlockAchievements(),{celebrateLessonCompletion:m}=await te(async()=>{const{celebrateLessonCompletion:i}=await import("./celebration-Ch3ap5UN.js");return{celebrateLessonCompletion:i}},[]);if(m(),p.length>0){E(p),$(0);const{celebrateAchievement:i}=await te(async()=>{const{celebrateAchievement:l}=await import("./celebration-Ch3ap5UN.js");return{celebrateAchievement:l}},[]),{getAchievementById:v}=await te(async()=>{const{getAchievementById:l}=await import("./index-Dg_1NGHY.js").then(g=>g.aj);return{getAchievementById:l}},__vite__mapDeps([0,1]));p.forEach(l=>{const g=v(l);g&&i(g.rarity)})}},P=()=>{if(!e)return null;const c=ee.filter(m=>m.subject===e.subject&&(m.order??0)>0).sort((m,i)=>(m.order??0)-(i.order??0)),p=c.findIndex(m=>m.id===e.id);return p>=0&&p<c.length-1?c[p+1]:null},T=()=>{if(!e)return null;const c=ee.filter(m=>m.subject===e.subject&&(m.order??0)>0).sort((m,i)=>(m.order??0)-(i.order??0)),p=c.findIndex(m=>m.id===e.id);return p>0?c[p-1]:null},[U,N]=f.useState(!0);f.useEffect(()=>{(async()=>{if(!e||!e.order||e.order===1){N(!0);return}const p=T();if(p){const m=await o(p.id);N(m?.completed||!1)}else N(!0)})()},[e,o]);const H=async c=>{if(!e?.challenge)return{isValid:!1,error:"No challenge available for this lesson"};try{let p="";const m=console.log;if(console.log=(...i)=>{p+=i.map(v=>String(v)).join(" ")+`
`,m(...i)},e.challenge.language==="javascript"){p="",new Function(c)();const v=p.trim();if(e.challenge.testCode){const l=c.replace(/console\.log\(/g,"// Suppressed: console.log("),g=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),b=l+`

`+g;new Function(b)()}if(e.challenge.testCode)return await C(),{isValid:!0};if(e.challenge.expectedOutput){const l=e.challenge.expectedOutput.trim(),g=v,b=l.split(`
`).filter(S=>S.trim()!==""),d=g.split(`
`).filter(S=>S.trim()!=="");return!b.every(S=>d.some(F=>F.trim()===S.trim()))&&g!==l?{isValid:!1,error:`Expected output should contain:
${l}

Got:
${g}`}:(await C(),{isValid:!0})}return await C(),{isValid:!0}}else if(e.challenge.language==="html"){const v=new DOMParser().parseFromString(c,"text/html");return e.challenge.testCode&&new Function("doc","code",e.challenge.testCode)(v,c),await C(),{isValid:!0}}else{if(e.challenge.language==="css")return e.challenge.testCode&&new Function("code",e.challenge.testCode)(c),await C(),{isValid:!0};if(e.challenge.language==="python")try{const i={},v=c.split(`
`);for(const l of v){const g=l.trim();if(!g||g.startsWith("#")||g.startsWith("print("))continue;const b=g.match(/^(\w+)\s*=\s*(.+)$/);if(b){const d=b[1];let a=b[2].trim();a.includes("#")&&(a=a.split("#")[0].trim()),a==="True"?i[d]=!0:a==="False"?i[d]=!1:a==="None"?i[d]=null:a.startsWith('"')||a.startsWith("'")?i[d]=a.slice(1,-1):/^-?\d+$/.test(a)?i[d]=parseInt(a,10):/^-?\d+\.\d+$/.test(a)?i[d]=parseFloat(a):i[d]=a}}if(e.challenge.testCode){const l=e.challenge.testCode;if(l.includes("isinstance(name, str)")||l.includes("name must be a string")){if(!i.name||typeof i.name!="string")return{isValid:!1,error:"name must be a string (text)"};if(i.name==="")return{isValid:!1,error:"name must have a value"}}if((l.includes("isinstance(age, int)")||l.includes("age must be an integer"))&&(!i.age||typeof i.age!="number"||!Number.isInteger(i.age)))return{isValid:!1,error:"age must be an integer (whole number)"};if((l.includes("isinstance(is_active, bool)")||l.includes("is_active must be a boolean"))&&(i.is_active===void 0||typeof i.is_active!="boolean"))return{isValid:!1,error:"is_active must be a boolean (True or False)"};const g=l.match(/isinstance\((\w+),\s*(\w+)\)/g);if(g)for(const b of g){const d=b.match(/isinstance\((\w+),\s*(\w+)\)/);if(d){const a=d[1],S=d[2];if(!i[a])return{isValid:!1,error:`${a} must be defined`};const D={str:"string",int:"number",float:"number",bool:"boolean"}[S];if(D&&typeof i[a]!==D)return{isValid:!1,error:`${a} must be a ${S}`}}}}return await C(),{isValid:!0}}catch(i){return{isValid:!1,error:i instanceof Error?i.message:"Python code validation failed"}}else if(e.challenge.language==="typescript"){p="",new Function(c)();const v=p.trim();if(e.challenge.testCode){const l=c.replace(/console\.log\(/g,"// Suppressed: console.log("),g=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),b=l+`

`+g;new Function(b)()}if(e.challenge.testCode)return await C(),{isValid:!0};if(e.challenge.expectedOutput){const l=e.challenge.expectedOutput.trim(),g=v,b=l.split(`
`).filter(S=>S.trim()!==""),d=g.split(`
`).filter(S=>S.trim()!=="");if(!b.every(S=>d.some(F=>F.trim()===S.trim()))&&g!==l)return{isValid:!1,error:`Expected output should contain:
${l}

Got:
${g}`}}return await C(),{isValid:!0}}else if(e.challenge.language==="ruby")try{const i={},v=c.split(`
`);for(const l of v){const g=l.trim();if(!g||g.startsWith("#")||g.startsWith("puts")||g.startsWith("print"))continue;const b=g.match(/^(\w+)\s*=\s*(.+)$/);if(b){const d=b[1];let a=b[2].trim();a.includes("#")&&(a=a.split("#")[0].trim()),a==="true"?i[d]=!0:a==="false"?i[d]=!1:a==="nil"?i[d]=null:a.startsWith('"')||a.startsWith("'")?i[d]=a.slice(1,-1):/^-?\d+$/.test(a)?i[d]=parseInt(a,10):/^-?\d+\.\d+$/.test(a)?i[d]=parseFloat(a):i[d]=a}}if(e.challenge.testCode){const l=e.challenge.testCode;if(l.includes("is_a?(String)")||l.includes("name must be a string")){if(!i.name||typeof i.name!="string")return{isValid:!1,error:"name must be a string"};if(i.name==="")return{isValid:!1,error:"name must have a value"}}if((l.includes("is_a?(Integer)")||l.includes("age must be an integer"))&&(!i.age||typeof i.age!="number"||!Number.isInteger(i.age)))return{isValid:!1,error:"age must be an integer"};if((l.includes("is_a?(TrueClass)")||l.includes("is_a?(FalseClass)")||l.includes("is_active must be a boolean"))&&(i.is_active===void 0||typeof i.is_active!="boolean"))return{isValid:!1,error:"is_active must be a boolean (true or false)"}}return await C(),{isValid:!0}}catch(i){return{isValid:!1,error:i instanceof Error?i.message:"Ruby code validation failed"}}else if(e.challenge.language==="php")try{const i={},v=c.split(`
`);for(const l of v){const g=l.trim();if(!g||g.startsWith("//")||g.startsWith("<?php")||g.startsWith("?>")||g.startsWith("echo")||g.startsWith("print"))continue;const b=g.match(/^\$(\w+)\s*=\s*(.+);?$/);if(b){const d=b[1];let a=b[2].trim().replace(/;$/,"");a.includes("//")&&(a=a.split("//")[0].trim()),a==="true"?i[d]=!0:a==="false"?i[d]=!1:a==="null"?i[d]=null:a.startsWith('"')||a.startsWith("'")?i[d]=a.slice(1,-1):/^-?\d+$/.test(a)?i[d]=parseInt(a,10):/^-?\d+\.\d+$/.test(a)?i[d]=parseFloat(a):i[d]=a}}if(e.challenge.testCode){const l=e.challenge.testCode;if(l.includes("is_string")||l.includes("name must be a string")){if(!i.name||typeof i.name!="string")return{isValid:!1,error:"$name must be a string"};if(i.name==="")return{isValid:!1,error:"$name must have a value"}}if((l.includes("is_int")||l.includes("age must be an integer"))&&(!i.age||typeof i.age!="number"||!Number.isInteger(i.age)))return{isValid:!1,error:"$age must be an integer"};if((l.includes("is_bool")||l.includes("isActive must be a boolean"))&&(i.isActive===void 0||typeof i.isActive!="boolean"))return{isValid:!1,error:"$isActive must be a boolean"}}return await C(),{isValid:!0}}catch(i){return{isValid:!1,error:i instanceof Error?i.message:"PHP code validation failed"}}else try{p="";try{new Function(c)()}catch{}const i=p.trim();if(e.challenge.testCode){try{const v=c.replace(/console\.log\(/g,"// Suppressed: console.log("),l=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),g=v+`

`+l;new Function(g)()}catch{try{new Function("code",e.challenge.testCode)(c)}catch{new Function(e.challenge.testCode)()}}return await C(),{isValid:!0}}if(e.challenge.expectedOutput){const v=e.challenge.expectedOutput.trim(),l=i,g=v.split(`
`).filter(a=>a.trim()!==""),b=l.split(`
`).filter(a=>a.trim()!=="");if(!g.every(a=>b.some(S=>S.trim()===a.trim()))&&l!==v)return{isValid:!1,error:`Expected output should contain:
${v}

Got:
${l}`}}return await C(),{isValid:!0}}catch(i){if(e.challenge.testCode)try{return new Function("code",e.challenge.testCode)(c),await C(),{isValid:!0}}catch{return{isValid:!1,error:i instanceof Error?i.message:"Code validation failed"}}return{isValid:!1,error:i instanceof Error?i.message:"Code execution failed"}}}return console.log=m,{isValid:!1,error:"Code validation failed. Please check your solution."}}catch(p){return{isValid:!1,error:p instanceof Error?p.message:"Code execution failed"}}},A=P(),j=T();if(!U&&e&&e.order&&e.order>1)return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:s.jsxs("div",{className:"text-center max-w-md",children:[s.jsx(ke,{className:"text-6xl mb-4 mx-auto"}),s.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:"Lesson Locked"}),s.jsx("p",{className:"text-gray-400 font-body mb-6",children:"You must complete the previous lesson before accessing this one."}),j&&s.jsx("button",{onClick:()=>n(`/lesson/${j.id}`),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium",children:"Go to Previous Lesson"})]})});const k=()=>{O<w.length-1?$(O+1):(E([]),$(0))};return s.jsxs("div",{className:"min-h-screen bg-gray-900",children:[w.length>0&&s.jsx(Wt,{achievementId:w[O],onClose:k}),s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[s.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx(Pe,{languageName:e.subject,size:32}),s.jsx("h1",{className:"text-3xl font-bold font-heading text-white",children:e.title})]}),s.jsx("p",{className:"text-gray-400 font-body",children:e.description})]}),s.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:"Back to Study Program"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-sm font-medium text-gray-300 font-code",children:"Progress"}),s.jsxs("span",{className:"text-sm text-indigo-400 font-code font-bold",children:[u,"%"]})]}),s.jsx(Ee,{lessonId:e.id,progress:u,completed:y})]})]}),e.challenge?s.jsxs("div",{className:"space-y-6 mb-8",children:[s.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6",children:[s.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:e.challenge.title}),s.jsx("p",{className:"text-gray-400 font-body mb-6",children:e.challenge.description}),e.challenge.concepts&&e.challenge.concepts.length>0&&s.jsxs("div",{className:"mb-6 bg-indigo-900/20 border border-indigo-700 rounded-lg p-4",children:[s.jsx("h3",{className:"text-lg font-bold font-heading text-indigo-300 mb-3",children:"Key Concepts:"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:e.challenge.concepts.map((c,p)=>s.jsx("span",{className:"px-3 py-1 bg-indigo-800/50 border border-indigo-600 rounded-full text-sm text-indigo-200 font-code",children:c},p))})]}),e.challenge.explanations&&e.challenge.explanations.length>0&&s.jsxs("div",{className:"mb-6 bg-gray-800 border border-gray-700 rounded-lg p-6",children:[s.jsx("h3",{className:"text-xl font-bold font-heading text-white mb-4",children:"Code Explanation"}),s.jsx("p",{className:"text-gray-400 font-body mb-4 text-sm",children:"Understanding each part of the solution:"}),s.jsx("div",{className:"space-y-4",children:e.challenge.explanations.map((c,p)=>s.jsx("div",{className:"bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-indigo-500 transition-colors",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold font-heading text-sm flex-shrink-0",children:c.line}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:s.jsx("code",{className:"text-sm text-green-400 font-code",children:c.code})}),s.jsx("p",{className:"text-gray-300 font-body text-sm",children:c.explanation})]})]})},p))})]}),s.jsx(_t,{challenge:e.challenge,onCodeChange:()=>{},onValidate:H,isCompleted:y})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("div",{children:j&&s.jsx("button",{onClick:()=>n(`/lesson/${j.id}`),className:"bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:"← Previous Lesson"})}),s.jsx("div",{children:A?s.jsx("button",{onClick:()=>n(`/lesson/${A.id}`),disabled:!y,className:`px-4 py-2 rounded-lg transition-all font-medium ${y?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700":"bg-gray-700 text-gray-400 cursor-not-allowed"}`,children:"Next Lesson →"}):s.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium",children:"Back to Study Program"})})]})]}):s.jsx("div",{className:"space-y-8 pb-12",children:R().map((c,p)=>s.jsx("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:border-indigo-500 transition-all",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold font-heading text-xl flex-shrink-0",children:p+1}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-2xl font-bold font-heading text-white mb-3",children:c.title}),s.jsx("p",{className:"text-gray-400 font-body mb-4",children:c.description}),c.code&&s.jsx("div",{className:"bg-gray-900 rounded-lg p-4 border border-gray-700",children:s.jsx("pre",{className:"text-sm text-green-400 font-code whitespace-pre-wrap overflow-x-auto",children:c.code})})]})]})},c.id))})]})]})}export{Gt as default};
