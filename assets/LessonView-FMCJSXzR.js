const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CtHcF1N8.js","assets/index-C9cPBhFj.css"])))=>i.map(i=>d[i]);
import{j as s,r as m,a2 as B,_ as xe,a3 as we,f as je,a4 as Ce,a5 as Se,W as Ne,d as ke,l as te,a as Ee,e as Le,q as Oe,a6 as ne}from"./index-CtHcF1N8.js";import{g as Pe}from"./iconMapper-DgASZfhm.js";import{L as $e}from"./LanguageLogo-CzakptQS.js";function Me({lessonId:t,progress:n=0,completed:e=!1}){return s.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all ${e?"bg-green-500":"bg-gradient-to-r from-indigo-500 to-purple-500"}`,style:{width:`${n}%`}})})}function ae(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function Te(t){if(Array.isArray(t))return t}function Fe(t,n,e){return(n=We(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ae(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,o,h,v,b=[],y=!0,j=!1;try{if(h=(e=e.call(t)).next,n!==0)for(;!(y=(r=h.call(e)).done)&&(b.push(r.value),b.length!==n);y=!0);}catch(E){j=!0,o=E}finally{try{if(!y&&e.return!=null&&(v=e.return(),Object(v)!==v))return}finally{if(j)throw o}}return b}}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function ce(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?oe(Object(e),!0).forEach(function(r){Fe(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):oe(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Ie(t,n){if(t==null)return{};var e,r,o=Re(t,n);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(t);for(r=0;r<h.length;r++)e=h[r],n.indexOf(e)===-1&&{}.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function Re(t,n){if(t==null)return{};var e={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(n.indexOf(r)!==-1)continue;e[r]=t[r]}return e}function He(t,n){return Te(t)||Ae(t,n)||De(t,n)||Ve()}function _e(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function We(t){var n=_e(t,"string");return typeof n=="symbol"?n:n+""}function De(t,n){if(t){if(typeof t=="string")return ae(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?ae(t,n):void 0}}function Ue(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function le(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function de(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?le(Object(e),!0).forEach(function(r){Ue(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):le(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Be(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(r){return n.reduceRight(function(o,h){return h(o)},r)}}function G(t){return function n(){for(var e=this,r=arguments.length,o=new Array(r),h=0;h<r;h++)o[h]=arguments[h];return o.length>=t.length?t.apply(this,o):function(){for(var v=arguments.length,b=new Array(v),y=0;y<v;y++)b[y]=arguments[y];return n.apply(e,[].concat(o,b))}}}function Q(t){return{}.toString.call(t).includes("Object")}function Ge(t){return!Object.keys(t).length}function z(t){return typeof t=="function"}function qe(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function ze(t,n){return Q(n)||H("changeType"),Object.keys(n).some(function(e){return!qe(t,e)})&&H("changeField"),n}function Ke(t){z(t)||H("selectorType")}function Je(t){z(t)||Q(t)||H("handlerType"),Q(t)&&Object.values(t).some(function(n){return!z(n)})&&H("handlersType")}function Ye(t){t||H("initialIsRequired"),Q(t)||H("initialType"),Ge(t)&&H("initialContent")}function Qe(t,n){throw new Error(t[n]||t.default)}var Xe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},H=G(Qe)(Xe),J={changes:ze,selector:Ke,handler:Je,initial:Ye};function Ze(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};J.initial(t),J.handler(n);var e={current:t},r=G(nt)(e,n),o=G(tt)(e),h=G(J.changes)(t),v=G(et)(e);function b(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(E){return E};return J.selector(j),j(e.current)}function y(j){Be(r,o,h,v)(j)}return[b,y]}function et(t,n){return z(n)?n(t.current):n}function tt(t,n){return t.current=de(de({},t.current),n),n}function nt(t,n,e){return z(n)?n(t.current):Object.keys(e).forEach(function(r){var o;return(o=n[r])===null||o===void 0?void 0:o.call(n,t.current[r])}),e}var rt={create:Ze},st={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs"}};function it(t){return function n(){for(var e=this,r=arguments.length,o=new Array(r),h=0;h<r;h++)o[h]=arguments[h];return o.length>=t.length?t.apply(this,o):function(){for(var v=arguments.length,b=new Array(v),y=0;y<v;y++)b[y]=arguments[y];return n.apply(e,[].concat(o,b))}}}function at(t){return{}.toString.call(t).includes("Object")}function ot(t){return t||ue("configIsRequired"),at(t)||ue("configType"),t.urls?(ct(),{paths:{vs:t.urls.monacoBase}}):t}function ct(){console.warn(fe.deprecation)}function lt(t,n){throw new Error(t[n]||t.default)}var fe={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ue=it(lt)(fe),dt={config:ot},ut=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(o){return e.reduceRight(function(h,v){return v(h)},o)}};function ge(t,n){return Object.keys(n).forEach(function(e){n[e]instanceof Object&&t[e]&&Object.assign(n[e],ge(t[e],n[e]))}),ce(ce({},t),n)}var ft={type:"cancelation",msg:"operation is manually canceled"};function re(t){var n=!1,e=new Promise(function(r,o){t.then(function(h){return n?o(ft):r(h)}),t.catch(o)});return e.cancel=function(){return n=!0},e}var gt=["monaco"],pt=rt.create({config:st,isInitialized:!1,resolve:null,reject:null,monaco:null}),pe=He(pt,2),K=pe[0],X=pe[1];function mt(t){var n=dt.config(t),e=n.monaco,r=Ie(n,gt);X(function(o){return{config:ge(o.config,r),monaco:e}})}function ht(){var t=K(function(n){var e=n.monaco,r=n.isInitialized,o=n.resolve;return{monaco:e,isInitialized:r,resolve:o}});if(!t.isInitialized){if(X({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),re(se);if(window.monaco&&window.monaco.editor)return me(window.monaco),t.resolve(window.monaco),re(se);ut(vt,yt)(xt)}return re(se)}function vt(t){return document.body.appendChild(t)}function bt(t){var n=document.createElement("script");return t&&(n.src=t),n}function yt(t){var n=K(function(r){var o=r.config,h=r.reject;return{config:o,reject:h}}),e=bt("".concat(n.config.paths.vs,"/loader.js"));return e.onload=function(){return t()},e.onerror=n.reject,e}function xt(){var t=K(function(e){var r=e.config,o=e.resolve,h=e.reject;return{config:r,resolve:o,reject:h}}),n=window.require;n.config(t.config),n(["vs/editor/editor.main"],function(e){var r=e.m;me(r),t.resolve(r)},function(e){t.reject(e)})}function me(t){K().monaco||X({monaco:t})}function wt(){return K(function(t){var n=t.monaco;return n})}var se=new Promise(function(t,n){return X({resolve:t,reject:n})}),he={config:mt,init:ht,__getMonacoInstance:wt},jt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ie=jt,Ct={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},St=Ct;function Nt({children:t}){return B.createElement("div",{style:St.container},t)}var kt=Nt,Et=kt;function Lt({width:t,height:n,isEditorReady:e,loading:r,_ref:o,className:h,wrapperProps:v}){return B.createElement("section",{style:{...ie.wrapper,width:t,height:n},...v},!e&&B.createElement(Et,null,r),B.createElement("div",{ref:o,style:{...ie.fullWidth,...!e&&ie.hide},className:h}))}var Ot=Lt,ve=m.memo(Ot);function Pt(t){m.useEffect(t,[])}var be=Pt;function $t(t,n,e=!0){let r=m.useRef(!0);m.useEffect(r.current||!e?()=>{r.current=!1}:t,n)}var M=$t;function q(){}function U(t,n,e,r){return Mt(t,r)||Tt(t,n,e,r)}function Mt(t,n){return t.editor.getModel(ye(t,n))}function Tt(t,n,e,r){return t.editor.createModel(n,e,r?ye(t,r):void 0)}function ye(t,n){return t.Uri.parse(n)}function Ft({original:t,modified:n,language:e,originalLanguage:r,modifiedLanguage:o,originalModelPath:h,modifiedModelPath:v,keepCurrentOriginalModel:b=!1,keepCurrentModifiedModel:y=!1,theme:j="light",loading:E="Loading...",options:L={},height:F="100%",width:A="100%",className:k,wrapperProps:_={},beforeMount:V=q,onMount:W=q}){let[w,T]=m.useState(!1),[D,N]=m.useState(!0),C=m.useRef(null),S=m.useRef(null),f=m.useRef(null),c=m.useRef(W),p=m.useRef(V),i=m.useRef(!1);be(()=>{let d=he.init();return d.then(u=>(S.current=u)&&N(!1)).catch(u=>u?.type!=="cancelation"&&console.error("Monaco initialization: error:",u)),()=>C.current?a():d.cancel()}),M(()=>{if(C.current&&S.current){let d=C.current.getOriginalEditor(),u=U(S.current,t||"",r||e||"text",h||"");u!==d.getModel()&&d.setModel(u)}},[h],w),M(()=>{if(C.current&&S.current){let d=C.current.getModifiedEditor(),u=U(S.current,n||"",o||e||"text",v||"");u!==d.getModel()&&d.setModel(u)}},[v],w),M(()=>{let d=C.current.getModifiedEditor();d.getOption(S.current.editor.EditorOption.readOnly)?d.setValue(n||""):n!==d.getValue()&&(d.executeEdits("",[{range:d.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),d.pushUndoStop())},[n],w),M(()=>{C.current?.getModel()?.original.setValue(t||"")},[t],w),M(()=>{let{original:d,modified:u}=C.current.getModel();S.current.editor.setModelLanguage(d,r||e||"text"),S.current.editor.setModelLanguage(u,o||e||"text")},[e,r,o],w),M(()=>{S.current?.editor.setTheme(j)},[j],w),M(()=>{C.current?.updateOptions(L)},[L],w);let x=m.useCallback(()=>{if(!S.current)return;p.current(S.current);let d=U(S.current,t||"",r||e||"text",h||""),u=U(S.current,n||"",o||e||"text",v||"");C.current?.setModel({original:d,modified:u})},[e,n,o,t,r,h,v]),g=m.useCallback(()=>{!i.current&&f.current&&(C.current=S.current.editor.createDiffEditor(f.current,{automaticLayout:!0,...L}),x(),S.current?.editor.setTheme(j),T(!0),i.current=!0)},[L,j,x]);m.useEffect(()=>{w&&c.current(C.current,S.current)},[w]),m.useEffect(()=>{!D&&!w&&g()},[D,w,g]);function a(){let d=C.current?.getModel();b||d?.original?.dispose(),y||d?.modified?.dispose(),C.current?.dispose()}return B.createElement(ve,{width:A,height:F,isEditorReady:w,loading:E,_ref:f,className:k,wrapperProps:_})}var At=Ft;m.memo(At);function Vt(t){let n=m.useRef();return m.useEffect(()=>{n.current=t},[t]),n.current}var It=Vt,Y=new Map;function Rt({defaultValue:t,defaultLanguage:n,defaultPath:e,value:r,language:o,path:h,theme:v="light",line:b,loading:y="Loading...",options:j={},overrideServices:E={},saveViewState:L=!0,keepCurrentModel:F=!1,width:A="100%",height:k="100%",className:_,wrapperProps:V={},beforeMount:W=q,onMount:w=q,onChange:T,onValidate:D=q}){let[N,C]=m.useState(!1),[S,f]=m.useState(!0),c=m.useRef(null),p=m.useRef(null),i=m.useRef(null),x=m.useRef(w),g=m.useRef(W),a=m.useRef(),d=m.useRef(r),u=It(h),l=m.useRef(!1),$=m.useRef(!1);be(()=>{let P=he.init();return P.then(R=>(c.current=R)&&f(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>p.current?I():P.cancel()}),M(()=>{let P=U(c.current,t||r||"",n||o||"",h||e||"");P!==p.current?.getModel()&&(L&&Y.set(u,p.current?.saveViewState()),p.current?.setModel(P),L&&p.current?.restoreViewState(Y.get(h)))},[h],N),M(()=>{p.current?.updateOptions(j)},[j],N),M(()=>{!p.current||r===void 0||(p.current.getOption(c.current.editor.EditorOption.readOnly)?p.current.setValue(r):r!==p.current.getValue()&&($.current=!0,p.current.executeEdits("",[{range:p.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),p.current.pushUndoStop(),$.current=!1))},[r],N),M(()=>{let P=p.current?.getModel();P&&o&&c.current?.editor.setModelLanguage(P,o)},[o],N),M(()=>{b!==void 0&&p.current?.revealLine(b)},[b],N),M(()=>{c.current?.editor.setTheme(v)},[v],N);let O=m.useCallback(()=>{if(!(!i.current||!c.current)&&!l.current){g.current(c.current);let P=h||e,R=U(c.current,r||t||"",n||o||"",P||"");p.current=c.current?.editor.create(i.current,{model:R,automaticLayout:!0,...j},E),L&&p.current.restoreViewState(Y.get(P)),c.current.editor.setTheme(v),b!==void 0&&p.current.revealLine(b),C(!0),l.current=!0}},[t,n,e,r,o,h,j,E,L,v,b]);m.useEffect(()=>{N&&x.current(p.current,c.current)},[N]),m.useEffect(()=>{!S&&!N&&O()},[S,N,O]),d.current=r,m.useEffect(()=>{N&&T&&(a.current?.dispose(),a.current=p.current?.onDidChangeModelContent(P=>{$.current||T(p.current.getValue(),P)}))},[N,T]),m.useEffect(()=>{if(N){let P=c.current.editor.onDidChangeMarkers(R=>{let Z=p.current.getModel()?.uri;if(Z&&R.find(ee=>ee.path===Z.path)){let ee=c.current.editor.getModelMarkers({resource:Z});D?.(ee)}});return()=>{P?.dispose()}}return()=>{}},[N,D]);function I(){a.current?.dispose(),F?L&&Y.set(h,p.current.saveViewState()):p.current.getModel()?.dispose(),p.current.dispose()}return B.createElement(ve,{width:A,height:k,isEditorReady:N,loading:y,_ref:i,className:_,wrapperProps:V})}var Ht=Rt,_t=m.memo(Ht),Wt=_t;function Dt({challenge:t,onCodeChange:n,onValidate:e,isCompleted:r}){const[o,h]=m.useState(t.starterCode||""),[v,b]=m.useState(!1),[y,j]=m.useState(null),[E,L]=m.useState(!1),F=m.useRef(null),A=t.language==="html",k=w=>{F.current=w},_=w=>{const T=w||"";h(T),n(T),y&&j(null)},V=async()=>{b(!0),j(null);try{const w=await e(o);j(w)}catch(w){j({isValid:!1,error:w instanceof Error?w.message:"Validation failed"})}finally{b(!1)}},W=()=>{switch(t.language){case"javascript":return"javascript";case"python":return"python";case"html":return"html";case"css":return"css";case"typescript":return"typescript";case"ruby":return"ruby";case"php":return"php";case"swift":return"swift";case"kotlin":return"kotlin";case"cpp":case"c++":return"cpp";case"go":return"go";case"rust":return"rust";case"c":return"c";case"java":return"java";case"csharp":case"c#":return"csharp";default:return"javascript"}};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"bg-gray-900 rounded-lg border border-gray-700 overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-sm font-medium text-gray-300 font-code",children:"Code Editor"}),A&&s.jsxs("div",{className:"flex items-center gap-2 bg-gray-700 rounded-lg p-1",children:[s.jsxs("button",{onClick:()=>L(!1),className:`px-3 py-1 rounded text-sm font-medium transition-all flex items-center gap-2 ${E?"text-gray-400 hover:text-white":"bg-indigo-600 text-white"}`,children:[s.jsx(xe,{className:"text-xs"}),"Code"]}),s.jsxs("button",{onClick:()=>L(!0),className:`px-3 py-1 rounded text-sm font-medium transition-all flex items-center gap-2 ${E?"bg-indigo-600 text-white":"text-gray-400 hover:text-white"}`,children:[s.jsx(we,{className:"text-xs"}),"Preview"]})]})]}),s.jsx("button",{onClick:V,disabled:v||r||E,className:`px-4 py-2 rounded-lg font-medium transition-all ${r?"bg-green-600 text-white cursor-not-allowed":v||E?"bg-gray-600 text-gray-300 cursor-not-allowed":"bg-indigo-600 text-white hover:bg-indigo-700"}`,children:r?"✓ Completed":v?"Validating...":"Run & Check"})]}),E&&A?s.jsx("div",{className:"h-[400px] bg-white overflow-auto",children:s.jsx("iframe",{srcDoc:o,title:"HTML Preview",className:"w-full h-full border-0",sandbox:"allow-scripts allow-same-origin"})}):s.jsx(Wt,{height:"400px",language:W(),value:o,onChange:_,onMount:k,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:r,automaticLayout:!0}})]}),y&&s.jsx("div",{className:`p-4 rounded-lg border ${y.isValid?"bg-green-900/30 border-green-700 text-green-400":"bg-red-900/30 border-red-700 text-red-400"}`,children:s.jsx("div",{className:"flex items-center gap-2",children:y.isValid?s.jsxs(s.Fragment,{children:[s.jsx(je,{className:"text-2xl"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold font-heading",children:"Correct!"}),s.jsx("p",{className:"text-sm font-body",children:"Great job! You can now proceed to the next lesson."})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ce,{className:"text-2xl"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold font-heading",children:"Not quite right"}),s.jsx("p",{className:"text-sm font-body",children:y.error||"Please review the requirements and try again."})]})]})})}),t.expectedOutput&&s.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-gray-300 font-code mb-2",children:"Expected Output:"}),s.jsx("pre",{className:"text-sm text-green-400 font-code bg-gray-900 rounded p-3 overflow-x-auto",children:t.expectedOutput})]})]})}function Ut({achievementId:t,onClose:n}){const[e,r]=m.useState(!1),o=t?Se(t):null;if(m.useEffect(()=>{if(t){r(!0);const v=setTimeout(()=>{r(!1),setTimeout(n,300)},3e3);return()=>clearTimeout(v)}},[t,n]),!o||!e)return null;const h={common:"border-gray-500 bg-gray-800",rare:"border-blue-500 bg-blue-900/30",epic:"border-purple-500 bg-purple-900/30",legendary:"border-yellow-500 bg-yellow-900/30"};return s.jsx("div",{className:`fixed top-4 right-4 z-50 transform transition-all duration-300 ${e?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,children:s.jsx("div",{className:`rounded-lg border-2 p-4 shadow-xl ${h[o.rarity]}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[Pe(o.icon,"text-4xl"),s.jsxs("div",{children:[s.jsx("p",{className:"text-white font-bold font-heading",children:"Achievement Unlocked!"}),s.jsx("p",{className:"text-gray-300 font-body",children:o.name}),s.jsx("p",{className:"text-sm text-gray-400 font-body mt-1",children:o.description}),s.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[s.jsxs("span",{className:"text-xs text-yellow-400 font-code",children:["+",o.rewardCoins," coins"]}),s.jsx("span",{className:"text-xs text-gray-500",children:"•"}),s.jsxs("span",{className:"text-xs text-indigo-400 font-code",children:["+",o.rewardXP," XP"]})]})]})]})})})}function zt(){const{lessonId:t}=Ne(),n=ke(),e=te.find(f=>f.id===t),{updateProgress:r,getProgress:o}=Ee(),[h,v]=m.useState(0),[b,y]=m.useState(!1),[j,E]=m.useState([]),[L,F]=m.useState(0);if(m.useEffect(()=>{if(e){let f=!1;return o(e.id).then(c=>{f||(v(c?.progress||0),y(c?.completed||!1))}).catch(c=>{f||console.error("Failed to load lesson progress:",c)}),()=>{f=!0}}},[e?.id]),!e)return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:"Lesson not found"}),s.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all",children:"Back to Study Program"})]})});const A=()=>{const f={HTML:[{id:"task-1",title:"HTML Structure & Semantic Elements",description:"Learn the basic structure of HTML documents and semantic HTML5 elements.",code:`<!DOCTYPE html>
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
    .forEach(System.out::println);`}]};return f[e.subject]?f[e.subject]:[{id:"task-1",title:"Introduction",description:`Welcome to ${e.title}! Let's start with the basics.`,code:`// ${e.subject} Basics
// Start learning ${e.subject} here!`},{id:"task-2",title:"Core Concepts",description:"Learn the fundamental concepts of this language.",code:`// Core concepts in ${e.subject}
// Explore the key features`},{id:"task-3",title:"Practice Exercise",description:"Apply what you've learned in a hands-on exercise.",code:`// Your ${e.subject} code here
// Practice makes perfect!`},{id:"task-4",title:"Advanced Topics",description:"Explore more advanced features and patterns.",code:`// Advanced ${e.subject} patterns
// Take your skills to the next level`}]},k=async()=>{if(b)return;v(100),y(!0),await r(e.id,100,!0);const c=await Oe.getState().checkAndUnlockAchievements(),{celebrateLessonCompletion:p}=await ne(async()=>{const{celebrateLessonCompletion:i}=await import("./celebration-Ch3ap5UN.js");return{celebrateLessonCompletion:i}},[]);if(p(),c.length>0){E(c),F(0);const{celebrateAchievement:i}=await ne(async()=>{const{celebrateAchievement:g}=await import("./celebration-Ch3ap5UN.js");return{celebrateAchievement:g}},[]),{getAchievementById:x}=await ne(async()=>{const{getAchievementById:g}=await import("./index-CtHcF1N8.js").then(a=>a.ak);return{getAchievementById:g}},__vite__mapDeps([0,1]));c.forEach(g=>{const a=x(g);a&&i(a.rarity)})}},_=()=>{if(!e)return null;const f=te.filter(p=>p.subject===e.subject&&(p.order??0)>0).sort((p,i)=>(p.order??0)-(i.order??0)),c=f.findIndex(p=>p.id===e.id);return c>=0&&c<f.length-1?f[c+1]:null},V=()=>{if(!e)return null;const f=te.filter(p=>p.subject===e.subject&&(p.order??0)>0).sort((p,i)=>(p.order??0)-(i.order??0)),c=f.findIndex(p=>p.id===e.id);return c>0?f[c-1]:null},[W,w]=m.useState(!0);m.useEffect(()=>{(async()=>{if(!e||!e.order||e.order===1){w(!0);return}const c=V();if(c){const p=await o(c.id);w(p?.completed||!1)}else w(!0)})()},[e,o]);const T=f=>{let c=f;return c=c.replace(/import\s+React\s+from\s+['"]react['"];?/g,"const React = { createElement: () => ({}), Fragment: () => ({}) };"),c=c.replace(/import\s*{\s*([^}]+)\s*}\s+from\s+['"]react['"];?/g,(p,i)=>i.split(",").map(a=>a.trim()).map(a=>a==="useState"?'const useState = (initial) => { let state = initial; const setState = (newState) => { state = typeof newState === "function" ? newState(state) : newState }; return [state, setState]; };':a==="useEffect"?"const useEffect = () => {};":a==="useRef"?"const useRef = (initial) => ({ current: initial });":a==="useContext"?"const useContext = () => null;":a==="useReducer"?"const useReducer = () => [null, () => {}];":a==="useMemo"?"const useMemo = (fn) => fn();":a==="useCallback"?"const useCallback = (fn) => fn;":a==="useLayoutEffect"?"const useLayoutEffect = () => {};":a==="useImperativeHandle"?"const useImperativeHandle = () => {};":a==="useDebugValue"?"const useDebugValue = () => {};":`const ${a} = () => {};`).join(`
`)),c=c.replace(/import\s+React\s*,\s*{\s*([^}]+)\s*}\s+from\s+['"]react['"];?/g,(p,i)=>`const React = { createElement: () => ({}), Fragment: () => ({}) };
`+i.split(",").map(a=>a.trim()).map(a=>a==="useState"?'const useState = (initial) => { let state = initial; const setState = (newState) => { state = typeof newState === "function" ? newState(state) : newState }; return [state, setState]; };':a==="useEffect"?"const useEffect = () => {};":a==="useRef"?"const useRef = (initial) => ({ current: initial });":`const ${a} = () => {};`).join(`
`)),c=c.replace(/import\s+(\w+)\s+from\s+['"][^'"]+['"];?/g,"const $1 = {};"),c=c.replace(/import\s+\*\s+as\s+(\w+)\s+from\s+['"][^'"]+['"];?/g,"const $1 = {};"),c=c.replace(/export\s+default\s+(\w+);?/g,(p,i)=>`if (typeof ${i} !== 'undefined') { window.${i} = ${i}; }`),c=c.replace(/export\s+(const|let|var|function|class)\s+/g,"$1 "),c=c.replace(/export\s*{\s*([^}]+)\s*};?/g,""),c},D=async f=>{if(!e?.challenge)return{isValid:!1,error:"No challenge available for this lesson"};try{let c="";const p=console.log;if(console.log=(...i)=>{c+=i.map(x=>String(x)).join(" ")+`
`,p(...i)},e.challenge.language==="javascript"){c="";const i=/import\s+.*from|export\s+(default|{)/.test(f),x=i?T(f):f;try{new Function(x)()}catch(a){if(i&&a instanceof SyntaxError&&a.message.includes("import"))throw a}const g=c.trim();if(e.challenge.testCode){const a=x.replace(/console\.log\(/g,"// Suppressed: console.log("),d=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),u=a+`

`+d;new Function(u)()}if(e.challenge.testCode)return await k(),{isValid:!0};if(e.challenge.expectedOutput){const a=e.challenge.expectedOutput.trim(),d=g,u=a.split(`
`).filter(O=>O.trim()!==""),l=d.split(`
`).filter(O=>O.trim()!=="");return!u.every(O=>l.some(I=>I.trim()===O.trim()))&&d!==a?{isValid:!1,error:`Expected output should contain:
${a}

Got:
${d}`}:(await k(),{isValid:!0})}return await k(),{isValid:!0}}else if(e.challenge.language==="html"){const x=new DOMParser().parseFromString(f,"text/html");return e.challenge.testCode&&new Function("doc","code",e.challenge.testCode)(x,f),await k(),{isValid:!0}}else{if(e.challenge.language==="css")return e.challenge.testCode&&new Function("code",e.challenge.testCode)(f),await k(),{isValid:!0};if(e.challenge.language==="python")try{const i={},x=f.split(`
`);for(const g of x){const a=g.trim();if(!a||a.startsWith("#")||a.startsWith("print("))continue;const d=a.match(/^(\w+)\s*=\s*(.+)$/);if(d){const u=d[1];let l=d[2].trim();l.includes("#")&&(l=l.split("#")[0].trim()),l==="True"?i[u]=!0:l==="False"?i[u]=!1:l==="None"?i[u]=null:l.startsWith('"')||l.startsWith("'")?i[u]=l.slice(1,-1):/^-?\d+$/.test(l)?i[u]=parseInt(l,10):/^-?\d+\.\d+$/.test(l)?i[u]=parseFloat(l):i[u]=l}}if(e.challenge.testCode){const g=e.challenge.testCode;if(g.includes("isinstance(name, str)")||g.includes("name must be a string")){if(!i.name||typeof i.name!="string")return{isValid:!1,error:"name must be a string (text)"};if(i.name==="")return{isValid:!1,error:"name must have a value"}}if((g.includes("isinstance(age, int)")||g.includes("age must be an integer"))&&(!i.age||typeof i.age!="number"||!Number.isInteger(i.age)))return{isValid:!1,error:"age must be an integer (whole number)"};if((g.includes("isinstance(is_active, bool)")||g.includes("is_active must be a boolean"))&&(i.is_active===void 0||typeof i.is_active!="boolean"))return{isValid:!1,error:"is_active must be a boolean (True or False)"};const a=g.match(/isinstance\((\w+),\s*(\w+)\)/g);if(a)for(const d of a){const u=d.match(/isinstance\((\w+),\s*(\w+)\)/);if(u){const l=u[1],$=u[2];if(!i[l])return{isValid:!1,error:`${l} must be defined`};const I={str:"string",int:"number",float:"number",bool:"boolean"}[$];if(I&&typeof i[l]!==I)return{isValid:!1,error:`${l} must be a ${$}`}}}}return await k(),{isValid:!0}}catch(i){return{isValid:!1,error:i instanceof Error?i.message:"Python code validation failed"}}else if(e.challenge.language==="typescript"){c="",new Function(f)();const x=c.trim();if(e.challenge.testCode){const g=f.replace(/console\.log\(/g,"// Suppressed: console.log("),a=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),d=g+`

`+a;new Function(d)()}if(e.challenge.testCode)return await k(),{isValid:!0};if(e.challenge.expectedOutput){const g=e.challenge.expectedOutput.trim(),a=x,d=g.split(`
`).filter($=>$.trim()!==""),u=a.split(`
`).filter($=>$.trim()!=="");if(!d.every($=>u.some(O=>O.trim()===$.trim()))&&a!==g)return{isValid:!1,error:`Expected output should contain:
${g}

Got:
${a}`}}return await k(),{isValid:!0}}else if(e.challenge.language==="ruby")try{const i={},x=f.split(`
`);for(const g of x){const a=g.trim();if(!a||a.startsWith("#")||a.startsWith("puts")||a.startsWith("print"))continue;const d=a.match(/^(\w+)\s*=\s*(.+)$/);if(d){const u=d[1];let l=d[2].trim();l.includes("#")&&(l=l.split("#")[0].trim()),l==="true"?i[u]=!0:l==="false"?i[u]=!1:l==="nil"?i[u]=null:l.startsWith('"')||l.startsWith("'")?i[u]=l.slice(1,-1):/^-?\d+$/.test(l)?i[u]=parseInt(l,10):/^-?\d+\.\d+$/.test(l)?i[u]=parseFloat(l):i[u]=l}}if(e.challenge.testCode){const g=e.challenge.testCode;if(g.includes("is_a?(String)")||g.includes("name must be a string")){if(!i.name||typeof i.name!="string")return{isValid:!1,error:"name must be a string"};if(i.name==="")return{isValid:!1,error:"name must have a value"}}if((g.includes("is_a?(Integer)")||g.includes("age must be an integer"))&&(!i.age||typeof i.age!="number"||!Number.isInteger(i.age)))return{isValid:!1,error:"age must be an integer"};if((g.includes("is_a?(TrueClass)")||g.includes("is_a?(FalseClass)")||g.includes("is_active must be a boolean"))&&(i.is_active===void 0||typeof i.is_active!="boolean"))return{isValid:!1,error:"is_active must be a boolean (true or false)"}}return await k(),{isValid:!0}}catch(i){return{isValid:!1,error:i instanceof Error?i.message:"Ruby code validation failed"}}else if(e.challenge.language==="php")try{const i={},x=f.split(`
`);for(const g of x){const a=g.trim();if(!a||a.startsWith("//")||a.startsWith("<?php")||a.startsWith("?>")||a.startsWith("echo")||a.startsWith("print"))continue;const d=a.match(/^\$(\w+)\s*=\s*(.+);?$/);if(d){const u=d[1];let l=d[2].trim().replace(/;$/,"");l.includes("//")&&(l=l.split("//")[0].trim()),l==="true"?i[u]=!0:l==="false"?i[u]=!1:l==="null"?i[u]=null:l.startsWith('"')||l.startsWith("'")?i[u]=l.slice(1,-1):/^-?\d+$/.test(l)?i[u]=parseInt(l,10):/^-?\d+\.\d+$/.test(l)?i[u]=parseFloat(l):i[u]=l}}if(e.challenge.testCode){const g=e.challenge.testCode;if(g.includes("is_string")||g.includes("name must be a string")){if(!i.name||typeof i.name!="string")return{isValid:!1,error:"$name must be a string"};if(i.name==="")return{isValid:!1,error:"$name must have a value"}}if((g.includes("is_int")||g.includes("age must be an integer"))&&(!i.age||typeof i.age!="number"||!Number.isInteger(i.age)))return{isValid:!1,error:"$age must be an integer"};if((g.includes("is_bool")||g.includes("isActive must be a boolean"))&&(i.isActive===void 0||typeof i.isActive!="boolean"))return{isValid:!1,error:"$isActive must be a boolean"}}return await k(),{isValid:!0}}catch(i){return{isValid:!1,error:i instanceof Error?i.message:"PHP code validation failed"}}else try{c="";const x=/import\s+.*from|export\s+(default|{)/.test(f)?T(f):f;try{new Function(x)()}catch{}const g=c.trim();if(e.challenge.testCode){try{const a=x.replace(/console\.log\(/g,"// Suppressed: console.log("),d=e.challenge.testCode.replace(/console\.log\(/g,"// console.log("),u=a+`

`+d;new Function(u)()}catch{try{new Function("code",e.challenge.testCode)(f)}catch{new Function(e.challenge.testCode)()}}return await k(),{isValid:!0}}if(e.challenge.expectedOutput){const a=e.challenge.expectedOutput.trim(),d=g,u=a.split(`
`).filter(O=>O.trim()!==""),l=d.split(`
`).filter(O=>O.trim()!=="");if(!u.every(O=>l.some(I=>I.trim()===O.trim()))&&d!==a)return{isValid:!1,error:`Expected output should contain:
${a}

Got:
${d}`}}return await k(),{isValid:!0}}catch(i){if(e.challenge.testCode)try{return new Function("code",e.challenge.testCode)(f),await k(),{isValid:!0}}catch{return{isValid:!1,error:i instanceof Error?i.message:"Code validation failed"}}return{isValid:!1,error:i instanceof Error?i.message:"Code execution failed"}}}return console.log=p,{isValid:!1,error:"Code validation failed. Please check your solution."}}catch(c){return{isValid:!1,error:c instanceof Error?c.message:"Code execution failed"}}},N=_(),C=V();if(!W&&e&&e.order&&e.order>1)return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900",children:s.jsxs("div",{className:"text-center max-w-md",children:[s.jsx(Le,{className:"text-6xl mb-4 mx-auto"}),s.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:"Lesson Locked"}),s.jsx("p",{className:"text-gray-400 font-body mb-6",children:"You must complete the previous lesson before accessing this one."}),C&&s.jsx("button",{onClick:()=>n(`/lesson/${C.id}`),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium",children:"Go to Previous Lesson"})]})});const S=()=>{L<j.length-1?F(L+1):(E([]),F(0))};return s.jsxs("div",{className:"min-h-screen bg-gray-900",children:[j.length>0&&s.jsx(Ut,{achievementId:j[L],onClose:S}),s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[s.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx($e,{languageName:e.subject,size:32}),s.jsx("h1",{className:"text-3xl font-bold font-heading text-white",children:e.title})]}),s.jsx("p",{className:"text-gray-400 font-body",children:e.description})]}),s.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:"Back to Study Program"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-sm font-medium text-gray-300 font-code",children:"Progress"}),s.jsxs("span",{className:"text-sm text-indigo-400 font-code font-bold",children:[h,"%"]})]}),s.jsx(Me,{lessonId:e.id,progress:h,completed:b})]})]}),e.challenge?s.jsxs("div",{className:"space-y-6 mb-8",children:[s.jsxs("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6",children:[s.jsx("h2",{className:"text-2xl font-bold font-heading text-white mb-4",children:e.challenge.title}),s.jsx("p",{className:"text-gray-400 font-body mb-6",children:e.challenge.description}),e.challenge.concepts&&e.challenge.concepts.length>0&&s.jsxs("div",{className:"mb-6 bg-indigo-900/20 border border-indigo-700 rounded-lg p-4",children:[s.jsx("h3",{className:"text-lg font-bold font-heading text-indigo-300 mb-3",children:"Key Concepts:"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:e.challenge.concepts.map((f,c)=>s.jsx("span",{className:"px-3 py-1 bg-indigo-800/50 border border-indigo-600 rounded-full text-sm text-indigo-200 font-code",children:f},c))})]}),e.challenge.explanations&&e.challenge.explanations.length>0&&s.jsxs("div",{className:"mb-6 bg-gray-800 border border-gray-700 rounded-lg p-6",children:[s.jsx("h3",{className:"text-xl font-bold font-heading text-white mb-4",children:"Code Explanation"}),s.jsx("p",{className:"text-gray-400 font-body mb-4 text-sm",children:"Understanding each part of the solution:"}),s.jsx("div",{className:"space-y-4",children:e.challenge.explanations.map((f,c)=>s.jsx("div",{className:"bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-indigo-500 transition-colors",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold font-heading text-sm flex-shrink-0",children:f.line}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"bg-gray-800 rounded p-2 mb-2",children:s.jsx("code",{className:"text-sm text-green-400 font-code",children:f.code})}),s.jsx("p",{className:"text-gray-300 font-body text-sm",children:f.explanation})]})]})},c))})]}),s.jsx(Dt,{challenge:e.challenge,onCodeChange:()=>{},onValidate:D,isCompleted:b})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("div",{children:C&&s.jsx("button",{onClick:()=>n(`/lesson/${C.id}`),className:"bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:"← Previous Lesson"})}),s.jsx("div",{children:N?s.jsx("button",{onClick:()=>n(`/lesson/${N.id}`),disabled:!b,className:`px-4 py-2 rounded-lg transition-all font-medium ${b?"bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700":"bg-gray-700 text-gray-400 cursor-not-allowed"}`,children:"Next Lesson →"}):s.jsx("button",{onClick:()=>n("/study-program"),className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium",children:"Back to Study Program"})})]})]}):s.jsx("div",{className:"space-y-8 pb-12",children:A().map((f,c)=>s.jsx("div",{className:"bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:border-indigo-500 transition-all",children:s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold font-heading text-xl flex-shrink-0",children:c+1}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-2xl font-bold font-heading text-white mb-3",children:f.title}),s.jsx("p",{className:"text-gray-400 font-body mb-4",children:f.description}),f.code&&s.jsx("div",{className:"bg-gray-900 rounded-lg p-4 border border-gray-700",children:s.jsx("pre",{className:"text-sm text-green-400 font-code whitespace-pre-wrap overflow-x-auto",children:f.code})})]})]})},f.id))})]})]})}export{zt as default};
