const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-FUybUZy6.js","assets/index-C9cPBhFj.css"])))=>i.map(i=>d[i]);
import{j as i,r as u,a2 as U,_ as xe,a3 as we,f as je,a4 as Ce,a5 as Se,W as Ne,d as ke,l as ee,a as Oe,e as Pe,q as Le,a6 as te}from"./index-FUybUZy6.js";import{g as Ee}from"./iconMapper-Dvzpafmt.js";import{L as $e}from"./LanguageLogo-S8t48duK.js";function Me({lessonId:t,progress:n=0,completed:e=!1}){return i.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:i.jsx("div",{className:`h-2 rounded-full transition-all ${e?"bg-green-500":"bg-gradient-to-r from-indigo-500 to-purple-500"}`,style:{width:`${n}%`}})})}function ie(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function Te(t){if(Array.isArray(t))return t}function Fe(t,n,e){return(n=We(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ae(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,o,f,h,y=[],x=!0,j=!1;try{if(f=(e=e.call(t)).next,n!==0)for(;!(x=(r=f.call(e)).done)&&(y.push(r.value),y.length!==n);x=!0);}catch(O){j=!0,o=O}finally{try{if(!x&&e.return!=null&&(h=e.return(),Object(h)!==h))return}finally{if(j)throw o}}return y}}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function oe(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ae(Object(e),!0).forEach(function(r){Fe(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ae(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Ie(t,n){if(t==null)return{};var e,r,o=Re(t,n);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(r=0;r<f.length;r++)e=f[r],n.indexOf(e)===-1&&{}.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function Re(t,n){if(t==null)return{};var e={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.indexOf(r)!==-1)continue;e[r]=t[r]}return e}function He(t,n){return Te(t)||Ae(t,n)||Ue(t,n)||Ve()}function _e(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function We(t){var n=_e(t,"string");return typeof n=="symbol"?n:n+""}function Ue(t,n){if(t){if(typeof t=="string")return ie(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?ie(t,n):void 0}}function De(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function le(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function ce(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?le(Object(e),!0).forEach(function(r){De(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):le(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Be(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(r){return n.reduceRight(function(o,f){return f(o)},r)}}function B(t){return function n(){for(var e=this,r=arguments.length,o=new Array(r),f=0;f<r;f++)o[f]=arguments[f];return o.length>=t.length?t.apply(this,o):function(){for(var h=arguments.length,y=new Array(h),x=0;x<h;x++)y[x]=arguments[x];return n.apply(e,[].concat(o,y))}}}function Y(t){return{}.toString.call(t).includes("Object")}function Ge(t){return!Object.keys(t).length}function q(t){return typeof t=="function"}function qe(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function ze(t,n){return Y(n)||R("changeType"),Object.keys(n).some(function(e){return!qe(t,e)})&&R("changeField"),n}function Ke(t){q(t)||R("selectorType")}function Je(t){q(t)||Y(t)||R("handlerType"),Y(t)&&Object.values(t).some(function(n){return!q(n)})&&R("handlersType")}function Ye(t){t||R("initialIsRequired"),Y(t)||R("initialType"),Ge(t)&&R("initialContent")}function Qe(t,n){throw new Error(t[n]||t.default)}var Xe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},R=B(Qe)(Xe),K={changes:ze,selector:Ke,handler:Je,initial:Ye};function Ze(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};K.initial(t),K.handler(n);var e={current:t},r=B(nt)(e,n),o=B(tt)(e),f=B(K.changes)(t),h=B(et)(e);function y(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(O){return O};return K.selector(j),j(e.current)}function x(j){Be(r,o,f,h)(j)}return[y,x]}function et(t,n){return q(n)?n(t.current):n}function tt(t,n){return t.current=ce(ce({},t.current),n),n}function nt(t,n,e){return q(n)?n(t.current):Object.keys(e).forEach(function(r){var o;return(o=n[r])===null||o===void 0?void 0:o.call(n,t.current[r])}),e}var rt={create:Ze},st={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs"}};function it(t){return function n(){for(var e=this,r=arguments.length,o=new Array(r),f=0;f<r;f++)o[f]=arguments[f];return o.length>=t.length?t.apply(this,o):function(){for(var h=arguments.length,y=new Array(h),x=0;x<h;x++)y[x]=arguments[x];return n.apply(e,[].concat(o,y))}}}function at(t){return{}.toString.call(t).includes("Object")}function ot(t){return t||de("configIsRequired"),at(t)||de("configType"),t.urls?(lt(),{paths:{vs:t.urls.monacoBase}}):t}function lt(){console.warn(ue.deprecation)}function ct(t,n){throw new Error(t[n]||t.default)}var ue={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},de=it(ct)(ue),dt={config:ot},ut=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(o){return e.reduceRight(function(f,h){return h(f)},o)}};function fe(t,n){return Object.keys(n).forEach(function(e){n[e]instanceof Object&&t[e]&&Object.assign(n[e],fe(t[e],n[e]))}),oe(oe({},t),n)}var ft={type:"cancelation",msg:"operation is manually canceled"};function ne(t){var n=!1,e=new Promise(function(r,o){t.then(function(f){return n?o(ft):r(f)}),t.catch(o)});return e.cancel=function(){return n=!0},e}var gt=["monaco"],pt=rt.create({config:st,isInitialized:!1,resolve:null,reject:null,monaco:null}),ge=He(pt,2),z=ge[0],Q=ge[1];function mt(t){var n=dt.config(t),e=n.monaco,r=Ie(n,gt);Q(function(o){return{config:fe(o.config,r),monaco:e}})}function ht(){var t=z(function(n){var e=n.monaco,r=n.isInitialized,o=n.resolve;return{monaco:e,isInitialized:r,resolve:o}});if(!t.isInitialized){if(Q({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),ne(re);if(window.monaco&&window.monaco.editor)return pe(window.monaco),t.resolve(window.monaco),ne(re);ut(vt,yt)(xt)}return ne(re)}function vt(t){return document.body.appendChild(t)}function bt(t){var n=document.createElement("script");return t&&(n.src=t),n}function yt(t){var n=z(function(r){var o=r.config,f=r.reject;return{config:o,reject:f}}),e=bt("".concat(n.config.paths.vs,"/loader.js"));return e.onload=function(){return t()},e.onerror=n.reject,e}function xt(){var t=z(function(e){var r=e.config,o=e.resolve,f=e.reject;return{config:r,resolve:o,reject:f}}),n=window.require;n.config(t.config),n(["vs/editor/editor.main"],function(e){var r=e.m;pe(r),t.resolve(r)},function(e){t.reject(e)})}function pe(t){z().monaco||Q({monaco:t})}function wt(){return z(function(t){var n=t.monaco;return n})}var re=new Promise(function(t,n){return Q({resolve:t,reject:n})}),me={config:mt,init:ht,__getMonacoInstance:wt},jt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},se=jt,Ct={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},St=Ct;function Nt({children:t}){return U.createElement("div",{style:St.container},t)}var kt=Nt,Ot=kt;function Pt({width:t,height:n,isEditorReady:e,loading:r,_ref:o,className:f,wrapperProps:h}){return U.createElement("section",{style:{...se.wrapper,width:t,height:n},...h},!e&&U.createElement(Ot,null,r),U.createElement("div",{ref:o,style:{...se.fullWidth,...!e&&se.hide},className:f}))}var Lt=Pt,he=u.memo(Lt);function Et(t){u.useEffect(t,[])}var ve=Et;function $t(t,n,e=!0){let r=u.useRef(!0);u.useEffect(r.current||!e?()=>{r.current=!1}:t,n)}var E=$t;function G(){}function W(t,n,e,r){return Mt(t,r)||Tt(t,n,e,r)}function Mt(t,n){return t.editor.getModel(be(t,n))}function Tt(t,n,e,r){return t.editor.createModel(n,e,r?be(t,r):void 0)}function be(t,n){return t.Uri.parse(n)}function Ft({original:t,modified:n,language:e,originalLanguage:r,modifiedLanguage:o,originalModelPath:f,modifiedModelPath:h,keepCurrentOriginalModel:y=!1,keepCurrentModifiedModel:x=!1,theme:j="light",loading:O="Loading...",options:P={},height:M="100%",width:T="100%",className:S,wrapperProps:H={},beforeMount:F=G,onMount:_=G}){let[w,$]=u.useState(!1),[A,C]=u.useState(!0),k=u.useRef(null),l=u.useRef(null),p=u.useRef(null),m=u.useRef(_),s=u.useRef(F),v=u.useRef(!1);ve(()=>{let d=me.init();return d.then(a=>(l.current=a)&&C(!1)).catch(a=>a?.type!=="cancelation"&&console.error("Monaco initialization: error:",a)),()=>k.current?b():d.cancel()}),E(()=>{if(k.current&&l.current){let d=k.current.getOriginalEditor(),a=W(l.current,t||"",r||e||"text",f||"");a!==d.getModel()&&d.setModel(a)}},[f],w),E(()=>{if(k.current&&l.current){let d=k.current.getModifiedEditor(),a=W(l.current,n||"",o||e||"text",h||"");a!==d.getModel()&&d.setModel(a)}},[h],w),E(()=>{let d=k.current.getModifiedEditor();d.getOption(l.current.editor.EditorOption.readOnly)?d.setValue(n||""):n!==d.getValue()&&(d.executeEdits("",[{range:d.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),d.pushUndoStop())},[n],w),E(()=>{k.current?.getModel()?.original.setValue(t||"")},[t],w),E(()=>{let{original:d,modified:a}=k.current.getModel();l.current.editor.setModelLanguage(d,r||e||"text"),l.current.editor.setModelLanguage(a,o||e||"text")},[e,r,o],w),E(()=>{l.current?.editor.setTheme(j)},[j],w),E(()=>{k.current?.updateOptions(P)},[P],w);let c=u.useCallback(()=>{if(!l.current)return;s.current(l.current);let d=W(l.current,t||"",r||e||"text",f||""),a=W(l.current,n||"",o||e||"text",h||"");k.current?.setModel({original:d,modified:a})},[e,n,o,t,r,f,h]),g=u.useCallback(()=>{!v.current&&p.current&&(k.current=l.current.editor.createDiffEditor(p.current,{automaticLayout:!0,...P}),c(),l.current?.editor.setTheme(j),$(!0),v.current=!0)},[P,j,c]);u.useEffect(()=>{w&&m.current(k.current,l.current)},[w]),u.useEffect(()=>{!A&&!w&&g()},[A,w,g]);function b(){let d=k.current?.getModel();y||d?.original?.dispose(),x||d?.modified?.dispose(),k.current?.dispose()}return U.createElement(he,{width:T,height:M,isEditorReady:w,loading:O,_ref:p,className:S,wrapperProps:H})}var At=Ft;u.memo(At);function Vt(t){let n=u.useRef();return u.useEffect(()=>{n.current=t},[t]),n.current}var It=Vt,J=new Map;function Rt({defaultValue:t,defaultLanguage:n,defaultPath:e,value:r,language:o,path:f,theme:h="light",line:y,loading:x="Loading...",options:j={},overrideServices:O={},saveViewState:P=!0,keepCurrentModel:M=!1,width:T="100%",height:S="100%",className:H,wrapperProps:F={},beforeMount:_=G,onMount:w=G,onChange:$,onValidate:A=G}){let[C,k]=u.useState(!1),[l,p]=u.useState(!0),m=u.useRef(null),s=u.useRef(null),v=u.useRef(null),c=u.useRef(w),g=u.useRef(_),b=u.useRef(),d=u.useRef(r),a=It(f),N=u.useRef(!1),V=u.useRef(!1);ve(()=>{let L=me.init();return L.then(I=>(m.current=I)&&p(!1)).catch(I=>I?.type!=="cancelation"&&console.error("Monaco initialization: error:",I)),()=>s.current?ye():L.cancel()}),E(()=>{let L=W(m.current,t||r||"",n||o||"",f||e||"");L!==s.current?.getModel()&&(P&&J.set(a,s.current?.saveViewState()),s.current?.setModel(L),P&&s.current?.restoreViewState(J.get(f)))},[f],C),E(()=>{s.current?.updateOptions(j)},[j],C),E(()=>{!s.current||r===void 0||(s.current.getOption(m.current.editor.EditorOption.readOnly)?s.current.setValue(r):r!==s.current.getValue()&&(V.current=!0,s.current.executeEdits("",[{range:s.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),s.current.pushUndoStop(),V.current=!1))},[r],C),E(()=>{let L=s.current?.getModel();L&&o&&m.current?.editor.setModelLanguage(L,o)},[o],C),E(()=>{y!==void 0&&s.current?.revealLine(y)},[y],C),E(()=>{m.current?.editor.setTheme(h)},[h],C);let D=u.useCallback(()=>{if(!(!v.current||!m.current)&&!N.current){g.current(m.current);let L=f||e,I=W(m.current,r||t||"",n||o||"",L||"");s.current=m.current?.editor.create(v.current,{model:I,automaticLayout:!0,...j},O),P&&s.current.restoreViewState(J.get(L)),m.current.editor.setTheme(h),y!==void 0&&s.current.revealLine(y),k(!0),N.current=!0}},[t,n,e,r,o,f,j,O,P,h,y]);u.useEffect(()=>{C&&c.current(s.current,m.current)},[C]),u.useEffect(()=>{!l&&!C&&D()},[l,C,D]),d.current=r,u.useEffect(()=>{C&&$&&(b.current?.dispose(),b.current=s.current?.onDidChangeModelContent(L=>{V.current||$(s.current.getValue(),L)}))},[C,$]),u.useEffect(()=>{if(C){let L=m.current.editor.onDidChangeMarkers(I=>{let X=s.current.getModel()?.uri;if(X&&I.find(Z=>Z.path===X.path)){let Z=m.current.editor.getModelMarkers({resource:X});A?.(Z)}});return()=>{L?.dispose()}}return()=>{}},[C,A]);function ye(){b.current?.dispose(),M?P&&J.set(f,s.current.saveViewState()):s.current.getModel()?.dispose(),s.current.dispose()}return U.createElement(he,{width:T,height:S,isEditorReady:C,loading:x,_ref:v,className:H,wrapperProps:F})}var Ht=Rt,_t=u.memo(Ht),Wt=_t;function Ut({challenge:t,onCodeChange:n,onValidate:e,isCompleted:r}){const[o,f]=u.useState(t.starterCode||""),[h,y]=u.useState(!1),[x,j]=u.useState(null),[O,P]=u.useState(!1),M=u.useRef(null),T=t.language==="html",S=w=>{M.current=w},H=w=>{const $=w||"";f($),n($),x&&j(null)},F=async()=>{y(!0),j(null);try{const w=await e(o);j(w)}catch(w){j({isValid:!1,error:w instanceof Error?w.message:"Validation failed"})}finally{y(!1)}},_=()=>{switch(t.language){case"javascript":return"javascript";case"python":return"python";case"html":return"html";case"css":return"css";case"typescript":return"typescript";case"ruby":return"ruby";case"php":return"php";case"swift":return"swift";case"kotlin":return"kotlin";case"cpp":case"c++":return"cpp";case"go":return"go";case"rust":return"rust";case"c":return"c";case"java":return"java";case"csharp":case"c#":return"csharp";default:return"javascript"}};return i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"bg-gray-900 rounded-lg border border-gray-700 overflow-hidden",children:[i.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"text-sm font-medium text-gray-300 font-code",children:"Code Editor"}),T&&i.jsxs("div",{className:"flex items-center gap-2 bg-gray-700 rounded-lg p-1",children:[i.jsxs("button",{onClick:()=>P(!1),className:`px-3 py-1 rounded text-sm font-medium transition-all flex items-center gap-2 ${O?"text-gray-400 hover:text-white":"bg-indigo-600 text-white"}`,children:[i.jsx(xe,{className:"text-xs"}),"Code"]}),i.jsxs("button",{onClick:()=>P(!0),className:`px-3 py-1 rounded text-sm font-medium transition-all flex items-center gap-2 ${O?"bg-indigo-600 text-white":"text-gray-400 hover:text-white"}`,children:[i.jsx(we,{className:"text-xs"}),"Preview"]})]})]}),i.jsx("button",{onClick:F,disabled:h||r||O,className:`px-4 py-2 rounded-lg font-medium transition-all ${r?"bg-green-600 text-white cursor-not-allowed":h||O?"bg-gray-600 text-gray-300 cursor-not-allowed":"bg-indigo-600 text-white hover:bg-indigo-700"}`,children:r?"✓ Completed":h?"Validating...":"Run & Check"})]}),O&&T?i.jsx("div",{className:"h-[400px] bg-white overflow-auto",children:i.jsx("iframe",{srcDoc:o,title:"HTML Preview",className:"w-full h-full border-0",sandbox:"allow-scripts allow-same-origin"})}):i.jsx(Wt,{height:"400px",language:_(),value:o,onChange:H,onMount:S,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:r,automaticLayout:!0}})]}),x&&i.jsx("div",{className:`p-4 rounded-lg border ${x.isValid?"bg-green-900/30 border-green-700 text-green-400":"bg-red-900/30 border-red-700 text-red-400"}`,children:i.jsx("div",{className:"flex items-center gap-2",children:x.isValid?i.jsxs(i.Fragment,{children:[i.jsx(je,{className:"text-2xl"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold font-heading",children:"Correct!"}),i.jsx("p",{className:"text-sm font-body",children:"Great job! You can now proceed to the next lesson."})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Ce,{className:"text-2xl"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold font-heading",children:"Not quite right"}),i.jsx("p",{className:"text-sm font-body",children:x.error||"Please review the requirements and try again."})]})]})})}),t.expectedOutput&&i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-gray-300 font-code mb-2",children:"Expected Output:"}),i.jsx("pre",{className:"text-sm text-green-400 font-code bg-gray-900 rounded p-3 overflow-x-auto",children:t.expectedOutput})]})]})}function Dt({achievementId:t,onClose:n}){const[e,r]=u.useState(!1),o=t?Se(t):null;if(u.useEffect(()=>{if(t){r(!0);const h=setTimeout(()=>{r(!1),setTimeout(n,300)},3e3);return()=>clearTimeout(h)}},[t,n]),!o||!e)return null;const f={common:"border-gray-500 bg-gray-800",rare:"border-blue-500 bg-blue-900/30",epic:"border-purple-500 bg-purple-900/30",legendary:"border-yellow-500 bg-yellow-900/30"};return i.jsx("div",{className:`fixed top-4 right-4 z-50 transform transition-all duration-300 ${e?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,children:i.jsx("div",{className:`rounded-lg border-2 p-4 shadow-xl ${f[o.rarity]}`,children:i.jsxs("div",{className:"flex items-center gap-3",children:[Ee(o.icon,"text-4xl"),i.jsxs("div",{children:[i.jsx("p",{className:"text-white font-bold font-heading",children:"Achievement Unlocked!"}),i.jsx("p",{className:"text-gray-300 font-body",children:o.name}),i.jsx("p",{className:"text-sm text-gray-400 font-body mt-1",children:o.description}),i.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[i.jsxs("span",{className:"text-xs text-yellow-400 font-code",children:["+",o.rewardCoins," coins"]}),i.jsx("span",{className:"text-xs text-gray-500",children:"•"}),i.jsxs("span",{className:"text-xs text-indigo-400 font-code",children:["+",o.rewardXP," XP"]})]})]})]})})})}function zt(){const{lessonId:t}=Ne(),n=ke(),e=ee.find(l=>l.id===t),{updateProgress:r,getProgress:o}=Oe(),[f,h]=u.useState(0),[y,x]=u.useState(!1),[j,O]=u.useState([]),[P,M]=u.useState(0);if(u.useEffect(()=>{if(e){let l=!1;return o(e.id).then(p=>{l||(h(p?.progress||0),x(p?.completed||!1))}).catch(p=>{l||console.error("Failed to load lesson progress:",p)}),()=>{l=!0}}},[e?.id]),!e)return i.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:i.jsxs("div",{className:"text-center",children:[i.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:"Lesson not found"}),i.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all",children:"Back to Study Program"})]})});const T=()=>{const l={HTML:[{id:"task-1",title:"HTML Structure & Semantic Elements",description:"Learn the basic structure of HTML documents and semantic HTML5 elements.",code:`<!DOCTYPE html>
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
    .forEach(System.out::println);`}]};return l[e.subject]?l[e.subject]:[{id:"task-1",title:"Introduction",description:`Welcome to ${e.title}! Let's start with the basics.`,code:`// ${e.subject} Basics
// Start learning ${e.subject} here!`},{id:"task-2",title:"Core Concepts",description:"Learn the fundamental concepts of this language.",code:`// Core concepts in ${e.subject}
// Explore the key features`},{id:"task-3",title:"Practice Exercise",description:"Apply what you've learned in a hands-on exercise.",code:`// Your ${e.subject} code here
// Practice makes perfect!`},{id:"task-4",title:"Advanced Topics",description:"Explore more advanced features and patterns.",code:`// Advanced ${e.subject} patterns
// Take your skills to the next level`}]},S=async()=>{if(y)return;h(100),x(!0),await r(e.id,100,!0);const p=await Le.getState().checkAndUnlockAchievements(),{celebrateLessonCompletion:m}=await te(async()=>{const{celebrateLessonCompletion:s}=await import("./celebration-Ch3ap5UN.js");return{celebrateLessonCompletion:s}},[]);if(m(),p.length>0){O(p),M(0);const{celebrateAchievement:s}=await te(async()=>{const{celebrateAchievement:c}=await import("./celebration-Ch3ap5UN.js");return{celebrateAchievement:c}},[]),{getAchievementById:v}=await te(async()=>{const{getAchievementById:c}=await import("./index-FUybUZy6.js").then(g=>g.ak);return{getAchievementById:c}},__vite__mapDeps([0,1]));p.forEach(c=>{const g=v(c);g&&s(g.rarity)})}},H=()=>{if(!e)return null;const l=ee.filter(m=>m.subject===e.subject&&(m.order??0)>0).sort((m,s)=>(m.order??0)-(s.order??0)),p=l.findIndex(m=>m.id===e.id);return p>=0&&p<l.length-1?l[p+1]:null},F=()=>{if(!e)return null;const l=ee.filter(m=>m.subject===e.subject&&(m.order??0)>0).sort((m,s)=>(m.order??0)-(s.order??0)),p=l.findIndex(m=>m.id===e.id);return p>0?l[p-1]:null},[_,w]=u.useState(!0);u.useEffect(()=>{(async()=>{if(!e||!e.order||e.order===1){w(!0);return}const p=F();if(p){const m=await o(p.id);w(m?.completed||!1)}else w(!0)})()},[e,o]);const $=async l=>{if(!e?.challenge)return{isValid:!1,error:"No challenge available for this lesson"};try{let p="";const m=console.log;if(console.log=(...s)=>{p+=s.map(v=>String(v)).join(" ")+`
`,m(...s)},e.challenge.language==="javascript"){p="",new Function(l)();const v=p.trim();if(e.challenge.testCode){const c=l.replace(/console\.log\(/g,"// Suppressed: console.log("),g=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),b=c+`

`+g;new Function(b)()}if(e.challenge.testCode)return await S(),{isValid:!0};if(e.challenge.expectedOutput){const c=e.challenge.expectedOutput.trim(),g=v,b=c.split(`
`).filter(N=>N.trim()!==""),d=g.split(`
`).filter(N=>N.trim()!=="");return!b.every(N=>d.some(V=>V.trim()===N.trim()))&&g!==c?{isValid:!1,error:`Expected output should contain:
${c}

Got:
${g}`}:(await S(),{isValid:!0})}return await S(),{isValid:!0}}else if(e.challenge.language==="html"){const v=new DOMParser().parseFromString(l,"text/html");return e.challenge.testCode&&new Function("doc","code",e.challenge.testCode)(v,l),await S(),{isValid:!0}}else{if(e.challenge.language==="css")return e.challenge.testCode&&new Function("code",e.challenge.testCode)(l),await S(),{isValid:!0};if(e.challenge.language==="python")try{const s={},v=l.split(`
`);for(const c of v){const g=c.trim();if(!g||g.startsWith("#")||g.startsWith("print("))continue;const b=g.match(/^(\w+)\s*=\s*(.+)$/);if(b){const d=b[1];let a=b[2].trim();a.includes("#")&&(a=a.split("#")[0].trim()),a==="True"?s[d]=!0:a==="False"?s[d]=!1:a==="None"?s[d]=null:a.startsWith('"')||a.startsWith("'")?s[d]=a.slice(1,-1):/^-?\d+$/.test(a)?s[d]=parseInt(a,10):/^-?\d+\.\d+$/.test(a)?s[d]=parseFloat(a):s[d]=a}}if(e.challenge.testCode){const c=e.challenge.testCode;if(c.includes("isinstance(name, str)")||c.includes("name must be a string")){if(!s.name||typeof s.name!="string")return{isValid:!1,error:"name must be a string (text)"};if(s.name==="")return{isValid:!1,error:"name must have a value"}}if((c.includes("isinstance(age, int)")||c.includes("age must be an integer"))&&(!s.age||typeof s.age!="number"||!Number.isInteger(s.age)))return{isValid:!1,error:"age must be an integer (whole number)"};if((c.includes("isinstance(is_active, bool)")||c.includes("is_active must be a boolean"))&&(s.is_active===void 0||typeof s.is_active!="boolean"))return{isValid:!1,error:"is_active must be a boolean (True or False)"};const g=c.match(/isinstance\((\w+),\s*(\w+)\)/g);if(g)for(const b of g){const d=b.match(/isinstance\((\w+),\s*(\w+)\)/);if(d){const a=d[1],N=d[2];if(!s[a])return{isValid:!1,error:`${a} must be defined`};const D={str:"string",int:"number",float:"number",bool:"boolean"}[N];if(D&&typeof s[a]!==D)return{isValid:!1,error:`${a} must be a ${N}`}}}}return await S(),{isValid:!0}}catch(s){return{isValid:!1,error:s instanceof Error?s.message:"Python code validation failed"}}else if(e.challenge.language==="typescript"){p="",new Function(l)();const v=p.trim();if(e.challenge.testCode){const c=l.replace(/console\.log\(/g,"// Suppressed: console.log("),g=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),b=c+`

`+g;new Function(b)()}if(e.challenge.testCode)return await S(),{isValid:!0};if(e.challenge.expectedOutput){const c=e.challenge.expectedOutput.trim(),g=v,b=c.split(`
`).filter(N=>N.trim()!==""),d=g.split(`
`).filter(N=>N.trim()!=="");if(!b.every(N=>d.some(V=>V.trim()===N.trim()))&&g!==c)return{isValid:!1,error:`Expected output should contain:
${c}

Got:
${g}`}}return await S(),{isValid:!0}}else if(e.challenge.language==="ruby")try{const s={},v=l.split(`
`);for(const c of v){const g=c.trim();if(!g||g.startsWith("#")||g.startsWith("puts")||g.startsWith("print"))continue;const b=g.match(/^(\w+)\s*=\s*(.+)$/);if(b){const d=b[1];let a=b[2].trim();a.includes("#")&&(a=a.split("#")[0].trim()),a==="true"?s[d]=!0:a==="false"?s[d]=!1:a==="nil"?s[d]=null:a.startsWith('"')||a.startsWith("'")?s[d]=a.slice(1,-1):/^-?\d+$/.test(a)?s[d]=parseInt(a,10):/^-?\d+\.\d+$/.test(a)?s[d]=parseFloat(a):s[d]=a}}if(e.challenge.testCode){const c=e.challenge.testCode;if(c.includes("is_a?(String)")||c.includes("name must be a string")){if(!s.name||typeof s.name!="string")return{isValid:!1,error:"name must be a string"};if(s.name==="")return{isValid:!1,error:"name must have a value"}}if((c.includes("is_a?(Integer)")||c.includes("age must be an integer"))&&(!s.age||typeof s.age!="number"||!Number.isInteger(s.age)))return{isValid:!1,error:"age must be an integer"};if((c.includes("is_a?(TrueClass)")||c.includes("is_a?(FalseClass)")||c.includes("is_active must be a boolean"))&&(s.is_active===void 0||typeof s.is_active!="boolean"))return{isValid:!1,error:"is_active must be a boolean (true or false)"}}return await S(),{isValid:!0}}catch(s){return{isValid:!1,error:s instanceof Error?s.message:"Ruby code validation failed"}}else if(e.challenge.language==="php")try{const s={},v=l.split(`
`);for(const c of v){const g=c.trim();if(!g||g.startsWith("//")||g.startsWith("<?php")||g.startsWith("?>")||g.startsWith("echo")||g.startsWith("print"))continue;const b=g.match(/^\$(\w+)\s*=\s*(.+);?$/);if(b){const d=b[1];let a=b[2].trim().replace(/;$/,"");a.includes("//")&&(a=a.split("//")[0].trim()),a==="true"?s[d]=!0:a==="false"?s[d]=!1:a==="null"?s[d]=null:a.startsWith('"')||a.startsWith("'")?s[d]=a.slice(1,-1):/^-?\d+$/.test(a)?s[d]=parseInt(a,10):/^-?\d+\.\d+$/.test(a)?s[d]=parseFloat(a):s[d]=a}}if(e.challenge.testCode){const c=e.challenge.testCode;if(c.includes("is_string")||c.includes("name must be a string")){if(!s.name||typeof s.name!="string")return{isValid:!1,error:"$name must be a string"};if(s.name==="")return{isValid:!1,error:"$name must have a value"}}if((c.includes("is_int")||c.includes("age must be an integer"))&&(!s.age||typeof s.age!="number"||!Number.isInteger(s.age)))return{isValid:!1,error:"$age must be an integer"};if((c.includes("is_bool")||c.includes("isActive must be a boolean"))&&(s.isActive===void 0||typeof s.isActive!="boolean"))return{isValid:!1,error:"$isActive must be a boolean"}}return await S(),{isValid:!0}}catch(s){return{isValid:!1,error:s instanceof Error?s.message:"PHP code validation failed"}}else try{p="";try{new Function(l)()}catch{}const s=p.trim();if(e.challenge.testCode){try{const v=l.replace(/console\.log\(/g,"// Suppressed: console.log("),c=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),g=v+`

`+c;new Function(g)()}catch{try{new Function("code",e.challenge.testCode)(l)}catch{new Function(e.challenge.testCode)()}}return await S(),{isValid:!0}}if(e.challenge.expectedOutput){const v=e.challenge.expectedOutput.trim(),c=s,g=v.split(`
`).filter(a=>a.trim()!==""),b=c.split(`
`).filter(a=>a.trim()!=="");if(!g.every(a=>b.some(N=>N.trim()===a.trim()))&&c!==v)return{isValid:!1,error:`Expected output should contain:
${v}

Got:
${c}`}}return await S(),{isValid:!0}}catch(s){if(e.challenge.testCode)try{return new Function("code",e.challenge.testCode)(l),await S(),{isValid:!0}}catch{return{isValid:!1,error:s instanceof Error?s.message:"Code validation failed"}}return{isValid:!1,error:s instanceof Error?s.message:"Code execution failed"}}}return console.log=m,{isValid:!1,error:"Code validation failed. Please check your solution."}}catch(p){return{isValid:!1,error:p instanceof Error?p.message:"Code execution failed"}}},A=H(),C=F();if(!_&&e&&e.order&&e.order>1)return i.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:i.jsxs("div",{className:"text-center max-w-md",children:[i.jsx(Pe,{className:"text-6xl mb-4 mx-auto"}),i.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:"Lesson Locked"}),i.jsx("p",{className:"text-gray-400 font-body mb-6",children:"You must complete the previous lesson before accessing this one."}),C&&i.jsx("button",{onClick:()=>n(`/lesson/${C.id}`),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium",children:"Go to Previous Lesson"})]})});const k=()=>{P<j.length-1?M(P+1):(O([]),M(0))};return i.jsxs("div",{className:"min-h-screen bg-gray-900",children:[j.length>0&&i.jsx(Dt,{achievementId:j[P],onClose:k}),i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-8",children:[i.jsxs("div",{className:"flex justify-between items-start mb-4",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[i.jsx($e,{languageName:e.subject,size:32}),i.jsx("h1",{className:"text-3xl font-bold font-heading text-white",children:e.title})]}),i.jsx("p",{className:"text-gray-400 font-body",children:e.description})]}),i.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:"Back to Study Program"})]}),i.jsxs("div",{className:"mb-4",children:[i.jsxs("div",{className:"flex justify-between items-center mb-2",children:[i.jsx("span",{className:"text-sm font-medium text-gray-300 font-code",children:"Progress"}),i.jsxs("span",{className:"text-sm text-indigo-400 font-code font-bold",children:[f,"%"]})]}),i.jsx(Me,{lessonId:e.id,progress:f,completed:y})]})]}),e.challenge?i.jsxs("div",{className:"space-y-6 mb-8",children:[i.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6",children:[i.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:e.challenge.title}),i.jsx("p",{className:"text-gray-400 font-body mb-6",children:e.challenge.description}),e.challenge.concepts&&e.challenge.concepts.length>0&&i.jsxs("div",{className:"mb-6 bg-indigo-900/20 border border-indigo-700 rounded-lg p-4",children:[i.jsx("h3",{className:"text-lg font-bold font-heading text-indigo-300 mb-3",children:"Key Concepts:"}),i.jsx("div",{className:"flex flex-wrap gap-2",children:e.challenge.concepts.map((l,p)=>i.jsx("span",{className:"px-3 py-1 bg-indigo-800/50 border border-indigo-600 rounded-full text-sm text-indigo-200 font-code",children:l},p))})]}),e.challenge.explanations&&e.challenge.explanations.length>0&&i.jsxs("div",{className:"mb-6 bg-gray-800 border border-gray-700 rounded-lg p-6",children:[i.jsx("h3",{className:"text-xl font-bold font-heading text-white mb-4",children:"Code Explanation"}),i.jsx("p",{className:"text-gray-400 font-body mb-4 text-sm",children:"Understanding each part of the solution:"}),i.jsx("div",{className:"space-y-4",children:e.challenge.explanations.map((l,p)=>i.jsx("div",{className:"bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-indigo-500 transition-colors",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold font-heading text-sm flex-shrink-0",children:l.line}),i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:i.jsx("code",{className:"text-sm text-green-400 font-code",children:l.code})}),i.jsx("p",{className:"text-gray-300 font-body text-sm",children:l.explanation})]})]})},p))})]}),i.jsx(Ut,{challenge:e.challenge,onCodeChange:()=>{},onValidate:$,isCompleted:y})]}),i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsx("div",{children:C&&i.jsx("button",{onClick:()=>n(`/lesson/${C.id}`),className:"bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:"← Previous Lesson"})}),i.jsx("div",{children:A?i.jsx("button",{onClick:()=>n(`/lesson/${A.id}`),disabled:!y,className:`px-4 py-2 rounded-lg transition-all font-medium ${y?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700":"bg-gray-700 text-gray-400 cursor-not-allowed"}`,children:"Next Lesson →"}):i.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium",children:"Back to Study Program"})})]})]}):i.jsx("div",{className:"space-y-8 pb-12",children:T().map((l,p)=>i.jsx("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:border-indigo-500 transition-all",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold font-heading text-xl flex-shrink-0",children:p+1}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-2xl font-bold font-heading text-white mb-3",children:l.title}),i.jsx("p",{className:"text-gray-400 font-body mb-4",children:l.description}),l.code&&i.jsx("div",{className:"bg-gray-900 rounded-lg p-4 border border-gray-700",children:i.jsx("pre",{className:"text-sm text-green-400 font-code whitespace-pre-wrap overflow-x-auto",children:l.code})})]})]})},l.id))})]})]})}export{zt as default};
