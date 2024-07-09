(function(){"use strict";var e={5132:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"b-pane-tit"},[e._v(e._s(e.label))])},r=[],o={name:"BPaneLabel",props:{label:{type:String,default:""}}},l=o,i=n(1001),s=(0,i.Z)(l,a,r,!1,null,"3bb2c421",null),c=s.exports},1328:function(e,t,n){var a=n(7195),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],l={},i=l,s=n(1001),c=(0,s.Z)(i,r,o,!1,null,null,null),u=c.exports,d=n(1699),p=n(408);const A={cellTypeTree:e=>e.app.cellTypeTree,colorsEnum:e=>e.app.colorsEnum,dict:e=>e.app.dict,structuralUnit:e=>e.app.structuralUnit,pathway:e=>e.app.pathway,cachedViews:e=>e.app.cachedViews,CELLTYPE:e=>e.xlsxRead.CELLTYPE,METHODS:e=>e.xlsxRead.METHODS,REGION:e=>e.xlsxRead.REGION,BRAIN_STRUCTURE:e=>e.xlsxRead.BRAIN_STRUCTURE};var f=A,m=(n(560),n(8428)),h=n.n(m),g=n(5114),C=n.n(g);const v=h().create({baseURL:"/",timeout:12e4}),b=e=>e;v.interceptors.request.use(b,(e=>{Promise.reject(e)})),v.interceptors.response.use((e=>{const t=e.data;return"arraybuffer"===e.request.responseType?t:t.ret?t.result:t}),(e=>{console.log("err"+e);const t=e.response.status,n=e.response?.data?.message||e;return 404!==t&&document.getElementsByClassName("el-message").length<1&&(0,g.Message)({message:n,type:"error",duration:5e3,customClass:"zZindex",offset:100}),Promise.reject(e)}));var E=v;function y(e){return E({url:"/system/cellType/getNodeData",method:"get",params:e})}function w(e){return E.post("/api/system/common/readCSV",e)}const T={cellTypeTree:null,colorsEnum:{},cellType:null,dict:{},structuralUnit:["LV","RV","IVS","LA","RA","IAS","MV","TV","AO","PA","VC","PV","CA","LCA","RCA","CV","GCV","MCV","SCV"],pathway:["ACTIVIN","ADIPONECTIN","ANGPT","ANGPTL","BAFF","BMP","BMP10","BTLA","CADM","CALCR","CCL","CD22","CD23","CD40","CD45","CD46","CD80","CD86","CDH","CDH5","CNTN","COLLAGEN","COMPLEMENT","CSF","CSF3","CXCL","EDA","EDN","EGF","EPHA","EPHB","EPO","FGF","FLT3","FN1","FSH","GAS","GDNF","GH","GP1BA","HGF","ICAM","IFN-I","IFN-II","IGF","IL1","IL16","IL2","IL4","IL6","ITGAL-ITGB2","KIT","L1CAM","LAMININ","LEP","LIFR","LIGHT","LT","MPZ","MSTN","NCAM","NEGR","NGF","NOTCH","NRG","NRXN","NT","OCLN","PARs","PDGF","PECAM1","PTPRM","SEMA3","SEMA4","TENASCIN","TGFb","THBS","THY1","TRAIL","VEGF","VISFATIN","VTN","WNT"],cachedViews:[]},B={CELL_TYPE_TREE(e,t){e.cellTypeTree=t},SET_COLORS(e,t={}){e.colorsEnum=t},DICT_TYPE(e,{dataType:t,tree:n}){e.dict[t]=n},ADD_CACHED_VIEW:(e,t)=>{if(t.meta.keepAlive){if(t.meta.pName){const n=e.cachedViews.findIndex((e=>e===t.meta.pName));-1==n&&e.cachedViews.push(t.meta.pName)}const n=e.cachedViews.findIndex((e=>e===t.name));-1===n&&e.cachedViews.push(t.name)}}},S={addCachedView({commit:e},t){e("ADD_CACHED_VIEW",t)},fetchCellTypeTree({commit:e,state:t}){return null!=t.cellTypeTree?Promise.resolve(t.cellTypeTree):y().then((t=>(e("CELL_TYPE_TREE",t),t)))},async fetchDicts({commit:e,state:t},n){const{param:a,dataType:r}=n;return null!=t.dict[r]?t.dict[r]:new Promise((async t=>{const n=await w(a);e("DICT_TYPE",{dataType:r,tree:n.C0||n.x}),t(n.C0||n.x)}))},fetchColor({commit:e,state:t},n){return new Promise((async(t,a)=>{w(n).then((n=>{const a={},{type:r=[],color:o=[]}=n||{};r.forEach(((e,t)=>{a[e]=o[t]})),e("SET_COLORS",a),t(a)})).catch((e=>{a(e)}))}))}};var R={namespaced:!0,state:T,mutations:B,actions:S};const I=()=>({steps:[],currentStep:{},analysisResult:{},applyResult:[],staticSteps:!1,cellTree:[],organTree:{},isApply:!1,portraitCellsorting:[]}),N=I(),x={RESET_STATE:e=>{Object.assign(e,I())},CURRENT_STEP:(e,t)=>{e.currentStep=t},STEPS:(e,t)=>{e.steps=t},STATICSTEPS:(e,t)=>{e.staticSteps=t},ANALYSIS_RESULT:(e,t)=>{e.analysisResult=t},APPLY_RESULT:(e,t)=>{const n=e.applyResult.findIndex((e=>e.stepId==t.stepId));n>-1?e.applyResult.splice(n,1,t):e.applyResult.push(t)},CELL_TREE:(e,t)=>{e.cellTree=t},ORGAN_TREE:(e,t)=>{e.organTree[t.label]=t.value},PORTRAITCELLSORTING:(e,t)=>{e.portraitCellsorting=t}},L={async fetchOrgantree({commit:e,state:t},n){if(t.organTree[n])return t.organTree[n];const a=await w({fileName:"csv/HeartRegionTree.csv",filters:[{column:"Parent",filter:n}]});return e("ORGAN_TREE",{label:n,value:a.Region}),a.Region},async fetchCelltree({commit:e,state:t}){if(t.cellTree.length>0)return t.cellTree;const n=await w({fileName:"csv/HeartCellTree.csv",filters:[]}),a=n.Parent,r=n["Cell type"];let o=r.map(((e,t)=>({label:e,parent:a[t]})));const l=e=>{e.children=o.map((t=>{if(t.parent==e.label)return{label:t.label,children:[]}})).filter((e=>e)),e.children.length>0&&e.children.forEach((t=>{"Fibroblast"==t.label&&"Fibroblast"==e.label||l(t)}))};let i={label:"Cell",children:[]};return l(i),e("CELL_TREE",[i]),[i]}};var _={namespaced:!0,state:N,mutations:x,actions:L},k=(n(4224),n(1121),n(7133),n(2649));const P={CELLTYPE:null,METHODS:null,REGION:null,BRAIN_STRUCTURE:null},F={SET_CELLTYPE(e,t){e.CELLTYPE=t},SET_METHODS(e,t){e.METHODS=t},SET_REGION(e,t){e.REGION=t},SET_BRAIN_STRUCTURE(e,t){e.BRAIN_STRUCTURE=t}},O={"CellType树状结构":"CELLTYPE","Method (Annotation)":"METHODS","Region树状结构":"REGION","成人大脑结构和链接":"BRAIN_STRUCTURE"},G={fetchXlsxData({commit:e,state:t},n){if(null!=t[n])return Promise.resolve(t[n]);{let t={};return new Promise((async a=>{const r=new XMLHttpRequest;r.open("GET","/js/website_trees.xlsx",!0),r.responseType="arraybuffer",r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){const o=new Uint8Array(r.response),l=k.ij(o,{type:"array"});for(let n in l.Sheets)if(l.Sheets.hasOwnProperty(n)){let a=k.P6.sheet_to_json(l.Sheets[n]);e(`SET_${O[n]}`,a),t[O[n]]=a}a(t[n]||[])}},r.send()}))}}};var H={namespaced:!0,state:P,mutations:F,actions:G};a["default"].use(p.ZP);const M=new p.ZP.Store({modules:{app:R,cellCollection:_,xlsxRead:H},getters:f});var D=M,Q=n(1579),V=n.n(Q),U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-title"},[e._v(" "+e._s(e.label)+" ")])},Z=[],j={name:"BPagetitle",props:{label:{type:String,default:"Cell sorting"}}},Y=j,J=(0,s.Z)(Y,U,Z,!1,null,"47e18fc0",null),z=J.exports,W=function(){var e=this,t=e._self._c;return t("div",e._g(e._b({staticClass:"b-button",class:e.comBtnClass},"div",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[e._v(e._s(e.label))]})),e._t("icon",(function(){return[""!=e.icon?t("i",{class:e.icon}):e._e()]})),e.downloadCSV?t("download-csv",{staticClass:"download-csv",attrs:{data:e.downloadDEList,name:e.fileName+".csv"}}):e._e()],2)},q=[],X={name:"BButton",props:{label:{type:String,default:""},icon:{type:String,default:""},type:{type:String,default:"primary"},downloadCSV:{type:Boolean,default:!1},downloadDEList:{type:Array,default:()=>[]},fileName:{type:String,default:"fileName"},disabled:{type:Boolean,default:!1}},computed:{comBtnClass(){const e=this.disabled?"b-disabled":"";return`${this.type} ${e}`}}},K=X,$=(0,s.Z)(K,W,q,!1,null,"b6b542b0",null),ee=$.exports,te=function(){var e=this,t=e._self._c;return t("div",{staticClass:"b-pane",class:{cursor:e.cursor}},[e._t("label",(function(){return[""!=e.label?t("BPaneLabel",{attrs:{label:e.label}}):e._e()]})),e._t("desc"),e._t("default")],2)},ne=[],ae={name:"BPane",props:{label:{type:String,default:""},cursor:{type:Boolean,default:!1}},components:{BPaneLabel:()=>Promise.resolve().then(n.bind(n,5132))}},re=ae,oe=(0,s.Z)(re,te,ne,!1,null,"b31db720",null),le=oe.exports,ie=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"upload-box"},[t("input",{staticClass:"upload-input",attrs:{readonly:"",type:"text",placeholder:"No file selected"},on:{click:e.upload}}),t("b-button",{staticClass:"upload-button",staticStyle:{"margin-right":"0"},on:{click:e.upload}},[t("img",{attrs:{src:n(600),alt:"",width:"18"}}),e._v(" Browse ")])],1),t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"uploadInput",attrs:{type:"file"},on:{change:e.uploadChange}})])},se=[],ce={name:"BUpload",methods:{uploadChange(e){},upload(){this.$refs.uploadInput.click()}}},ue=ce,de=(0,s.Z)(ue,ie,se,!1,null,"51af00e8",null),pe=de.exports,Ae=function(){var e=this,t=e._self._c;return t("el-select",e._g(e._b({attrs:{"no-data-text":"No Data"},on:{change:t=>{e.$emit("input",t),e.$emit("change",t)}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},"el-select",e.$attrs,!1),e.$listeners),e._l(e.dicts,(function(e){return t("el-option",{key:e,attrs:{value:e,label:e}})})),1)},fe=[],me={name:"BSelect",props:{data:{type:Array,default:()=>[]},fileName:String,returnColumn:{type:Array,default:()=>[]},filters:{type:Object,default:()=>null},dataType:String,value:String},data(){return{dicts:this.data||[],selectValue:this.value}},watch:{value(e){this.selectValue=e}},methods:{async fetchData(){}},async created(){if(this.fileName){const{fileName:e,filters:t,returnColumn:n}=this,a={fileName:e,filters:t,returnColumn:n,isLike:!0},r=await this.$store.dispatch("app/fetchDicts",{param:a,dataType:this.dataType});this.dicts=r}}},he=me,ge=(0,s.Z)(he,Ae,fe,!1,null,null,null),Ce=ge.exports,ve=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pane-title",class:{center:e.center}},[e._v(" "+e._s(e.label)+" ")])},be=[],Ee={name:"BPaneTitle",props:{label:{type:String,default:""},center:{type:Boolean,default:!1}}},ye=Ee,we=(0,s.Z)(ye,ve,be,!1,null,"40424a70",null),Te=we.exports,Be=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"inline-block"},attrs:{align:"center"}},[t("div",e._g(e._b({staticClass:"brain-img",class:{gene:e.isGene,active:e.geneActive}},"div",e.$attrs,!1),e.$listeners),[e._t("default")],2),e._t("label",(function(){return[t("p",{staticClass:"label"},[e._v(e._s(e.label))])]}))],2)},Se=[],Re={name:"BrainImgWrap",props:{label:{type:String,default:""},isGene:{type:Boolean,default:!1},geneActive:{type:Boolean,default:!1}},data(){return{}}},Ie=Re,Ne=(0,s.Z)(Ie,Be,Se,!1,null,"0a9f3c63",null),xe=Ne.exports,Le=n(5132),_e={install:e=>{e.component(ee.name,ee),e.component(le.name,le),e.component(z.name,z),e.component(pe.name,pe),e.component(Ce.name,Ce),e.component(Te.name,Te),e.component(xe.name,xe),e.component(Le["default"].name,Le["default"])}},ke=n(765),Pe=n(1929),Fe=n.n(Pe);const Oe=a["default"].prototype.$isServer,Ge=(Oe||Number(document.documentMode),function(){return!Oe&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}());(function(){!Oe&&document.removeEventListener})();const He=[],Me="@@clickoutsideContext";let De,Qe=0;function Ve(e,t,n){return function(a={},r={}){!(n&&n.context&&a.target&&r.target)||e.contains(a.target)||e.contains(r.target)||e===a.target||n.context.popperElm&&(n.context.popperElm.contains(a.target)||n.context.popperElm.contains(r.target))||(t.expression&&e[Me].methodName&&n.context[e[Me].methodName]?n.context[e[Me].methodName]():e[Me].bindingFn&&e[Me].bindingFn())}}!a["default"].prototype.$isServer&&Ge(document,"mousedown",(e=>De=e)),!a["default"].prototype.$isServer&&Ge(document,"mouseup",(e=>{He.forEach((t=>t[Me].documentHandler(e,De)))}));var Ue={bind(e,t,n){He.push(e);const a=Qe++;e[Me]={id:a,documentHandler:Ve(e,t,n),methodName:t.expression,bindingFn:t.value}},update(e,t,n){e[Me].documentHandler=Ve(e,t,n),e[Me].methodName=t.expression,e[Me].bindingFn=t.value},unbind(e){const t=He.length;for(let n=0;n<t;n++)if(He[n][Me].id===e[Me].id){He.splice(n,1);break}delete e[Me]}};a["default"].directive("clickoutside",Ue),a["default"].use(C(),{size:"medium",zIndex:3e3}),a["default"].config.productionTip=!1,a["default"].prototype._=V(),a["default"].prototype.$echarts=ke,a["default"].use(_e),a["default"].component("downloadCsv",Fe()),new a["default"]({router:d.Z,store:D,render:e=>e(u)}).$mount("#app")},1699:function(e,t,n){n.d(t,{Z:function(){return R},_:function(){return B}});var a=n(7195),r=n(2241),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout-wrap"},[t("keep-alive",{attrs:{include:e.cachedViews}},[t("router-view",{key:e.key,staticStyle:{flex:"1"}})],1),e._l(e.iframeComponent,(function(n){return t(n.meta.componentName,{directives:[{name:"show",rawName:"v-show",value:n.path==e.$route.path&&!n.meta.hidden,expression:"item.path == $route.path && !item.meta.hidden"}],key:n.path,tag:"component"})}))],2)},l=[],i=(n(560),function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-box",attrs:{id:"headerBox"}},[t("div",{staticClass:"header-wrap wrap"},[t("div",{ref:"header_menu",staticClass:"header-wrap-menu"},[t("span",{staticClass:"header-logo",on:{click:function(t){return e.$router.push({path:"/index"})}}},[t("img",{attrs:{src:n(2285),alt:"",width:"160",height:"60"}})]),t("div",{staticClass:"el-menu-block"},[t("el-menu",{staticClass:"header-menus",attrs:{mode:"horizontal","default-active":e.activeIndex,"text-color":"#333333","active-text-color":"#1e5dbc"}},[e._l(e.menus,(function(n){return[n.children&&n.children.length>0?t("el-submenu",{key:n.path,attrs:{index:n.path}},[t("template",{slot:"title"},[e._v(e._s(n.meta.title)+" ")]),e._l(n.children,(function(n){return t("el-menu-item",{key:n.path,attrs:{index:n.path}},[t("router-link",{attrs:{to:n.path}},[e._v(e._s(n.meta.title))])],1)}))],2):t("el-menu-item",{key:n.path,attrs:{index:n.path}},[t("router-link",{attrs:{to:n.path}},[e._v(e._s(n.meta.title)+" ")])],1)]}))],2)],1),t("span"),t("div",{ref:"mobile_menu",staticClass:"mobile-menu-block"},[t("div",{staticClass:"active-menu",on:{click:e.toggleMenu}},[e._v(e._s(e.routeName)),t("i",{staticClass:"el-icon-caret-bottom",class:{up:e.mobileCollapse}})]),t("el-menu",{directives:[{name:"show",rawName:"v-show",value:e.mobileCollapse,expression:"mobileCollapse"}],staticClass:"mobile-menu",attrs:{"default-active":e.activeIndex,collapse:!0},on:{select:e.toggleMenu}},[e._l(e.menus,(function(n){return[n.children&&n.children.length>0?t("el-submenu",{key:n.path,attrs:{index:n.path}},[t("template",{slot:"title"},[e._v(e._s(n.meta.title)+" ")]),e._l(n.children,(function(n){return t("el-menu-item",{key:n.path,attrs:{index:n.path}},[t("router-link",{staticStyle:{display:"block"},attrs:{to:n.path}},[e._v(e._s(n.meta.title))])],1)}))],2):t("el-menu-item",{key:n.path,attrs:{index:n.path}},[t("router-link",{staticStyle:{display:"block"},attrs:{to:n.path}},[e._v(e._s(n.meta.title)+" ")])],1)]}))],2)],1)])])])}),s=[],c={data(){return{value:"",searchFocus:!1,activeIndex:"/index",menus:[],mobileCollapse:!1}},watch:{$route(e){console.log(e),this.activeIndex=e.path,"/index"===e.fullPath?document.getElementById("headerBox").style.backgroundColor="#f4f3f9":document.getElementById("headerBox").style.backgroundColor="#fff"}},computed:{routeName(){return this.$route.meta?.menu??"Menu"}},created(){const e=n(1699)._.find((e=>"layout"===e.name)),t=e.children??[];this.menus=t.filter((e=>!e.hidden))},mounted(){this.activeIndex=this.$route.path,document.addEventListener("click",(e=>{this.$refs.mobile_menu.contains(e.target)||(this.mobileCollapse=!1)}))},methods:{toggleMenu(e){this.$nextTick((()=>{this.mobileCollapse=!this.mobileCollapse}))}}},u=c,d=n(1001),p=(0,d.Z)(u,i,s,!1,null,"0734a2c1",null),A=p.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer-wrap"},[t("div",{staticClass:"footer-copy"},[t("el-row",{staticClass:"wrap",attrs:{gutters:24}},[t("el-col",{attrs:{span:8}},[t("p",{staticStyle:{"margin-top":"7px"}},[e._v("BrainCellAtlas © 2023")]),t("p",[e._v("Created by "),t("a",{attrs:{href:"https://www.rnacentre.org/"}},[e._v("Miao Lab")]),e._v(" @ Guangzhou Laboratory")])]),t("el-col",{attrs:{span:8}},[t("div",[t("img",{attrs:{src:n(9910),alt:"",width:"14px"}}),e._v(" Funding:")]),t("p",[t("a",{attrs:{href:"https://www.nsfc.gov.cn/"}},[e._v("NSFC")])]),t("p",[t("a",{attrs:{href:"https://www.most.gov.cn/index.html"}},[e._v("MOST IT+BT project")])]),t("p",[e._v("GZlab Starting Grant")])]),t("el-col",{attrs:{span:8}},[t("div",[t("img",{attrs:{src:n(2515),alt:"",width:"14px"}}),e._v(" Contact:")]),t("p",[e._v("Building B2, Guangzhou Laboratory "),t("a",{attrs:{href:"https://www.google.com/maps/place/%E5%B9%BF%E5%B7%9E%E7%94%9F%E7%89%A9%E5%B2%9B%E5%9B%BD%E9%99%85%E5%85%AC%E5%AF%93/@23.0618989,113.3728525,17z/data=!4m6!3m5!1s0x34025549978de655:0xbfef76e0d9d7b9!8m2!3d23.0618989!4d113.3750261!16s%2Fg%2F11hb7hwpjs?hl=en&entry=ttu"}},[e._v("(Maps)")])]),t("p",[e._v("96 Xingdao South Road, Guangzhou International Bio Island, Haizhu District, Guangzhou, Guangdong, China ")])])],1)],1)])},m=[],h={data(){return{menus:[]}},created(){const e=n(1699)._.find((e=>"layout"===e.name));this.menus=e.children??[]}},g=h,C=(0,d.Z)(g,f,m,!1,null,"973f7a06",null),v=C.exports,b=n(408),E={components:{Header:A,Footer:v,Adult:()=>n.e(497).then(n.bind(n,497)),Fetal:()=>n.e(671).then(n.bind(n,9671)),Organoid:()=>n.e(926).then(n.bind(n,7926)),Tumour:()=>n.e(335).then(n.bind(n,2335)),Mouse:()=>n.e(310).then(n.bind(n,1310))},data(){return{isIframe:!1,iframeComponent:[]}},computed:{...(0,b.Se)(["cachedViews"]),key(){return this.$route.path}},watch:{$route:{handler(e){this.$store.dispatch("app/addCachedView",e),this.filterIframeRouter(e);const t=e.path.split("/")[1];console.log(t),document.body.style.backgroundColor="contact"===t||"gene"===t?"#F7F8FA":"white","cellSorting"===t&&this.$store.commit("cellCollection/STEPS",[])},immediate:!0}},methods:{filterAliveRouter(e=[],t=[]){return e.forEach((e=>{e.meta.keepAlive&&t.push(e.name),e.children?.length&&this.filterAliveRouter(e.children,t)})),t},isOpenIframePage(e){const t=this.iframeComponent.find((t=>t.path===e.path));t&&t.meta.hidden&&(t.meta.hidden=!1)},filterIframeRouter(e){if(e.meta.isIframe){let t=this.iframeComponent.findIndex((t=>t.path==e.path));-1==t&&this.iframeComponent.push(e)}this.isOpenIframePage(e)}}},y=E,w=(0,d.Z)(y,o,l,!1,null,"16e6e732",null),T=w.exports;a["default"].use(r.ZP);const B=[{path:"/",name:"index",redirect:"/index",component:()=>n.e(521).then(n.bind(n,3521))},{path:"/layout",name:"layout",component:T,redirect:"/index",children:[{path:"/index",name:"index",component:()=>n.e(223).then(n.bind(n,4223)),meta:{title:"Home",keepAlive:!0}}]}],S=new r.ZP({routes:B,scrollBehavior:()=>({y:0})});var R=S},2285:function(e,t,n){e.exports=n.p+"img/braincellatlaslogo.9ebd17ef.svg"},2515:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAt5JREFUSEutVjF22kAQ/bNu7Cq+QfAJgk8QcoLgE1iUUorg3sBYuDcujErjEwROgHICkxtwgyhVyHtGk7e7IC8CIZF4Kh5a7Z8/8+ePCE4wRzUs5Q6EBgQj7gdX7vO3+E3rS5gf6khpCtBpdrEB9Vt5IO4M2yD6CqBmn0kCoRkRYlF4YvbnRckZQObHU6SL59cLnOOCFvf90WYlHup4oRpASfa/MlVpgvABghiCG7714zywBewORwBdFpZMpefMX2ZVSmrakgrr+wjgXujfuO+RLaXS7PaEzDgMzqsAZi26jhpCGBPwzW0LlbJb3+CU1rLA1LZAZhBKiGTUC4OnHSKMAZquQYk7wzmI3lfIfs6hf+YyML8JNRDqIvCI8BMpWm7vdAVlqWIS8fg2GBN3I6kAZo+kcqFf2nXeCG/52wPRHXJC427EAC51wsSdaGaUVSX2AGbMO5EnwICOUF+Ph05Glos5AW3NcABAz1RZ3HPot42qrRKfzViI6eH9Rhk7wxiEOYeBlyVicOS0ikonUGjnh5mvo4a+AApNM1KuqPQzhSmH/quxXA+bUHi0c2gyoo8FFG849HUPCoM7kQfCIxTOsjJ2ozHUscfcysxBJ2kBVxntvlESqJMz98WdorFaGJcl90p5Xy8FMff9T3tZ6r6a/hb7qJ2iVaxkPdszk6WlLVPdBmB5afVS2DbyKiDumYyhI18tkF7hRQWgukKU/rkE0kTUyaSo51uAhmnJ9ti1BTYNRBI95Hlv3SrpZj8XeniLHUjvvKPjC80kG4t8WcwZtFwh7WRo1aa9sQQUmgkNBNCOstr+W6iJNXTrwYWA1UErymbV+72Abw6aykUpYAaaLvR3zeeKfIqOTSoBOiNTdbMUuKRcHQRozWHYFKIREd4dxFbkO/cDa96Hxuqz8pAST9ab458AsxLrLUPCRatNBL8IwtwPdCtM/BfgBrASD4KGMX/BD72qoI4HeYv7C4KhdNRWdQq9AAAAAElFTkSuQmCC"},9910:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAbhJREFUSEvtlsFRwlAQhv8NF8aLlJAOxAqMFagVCMfoQbwTXLEA8SA5ghUAFUAHQgWmBLwol7znJCEhCSQGQ3DGMTdg2O/9/7+7L8QtcwjgDPt4pBwSt0y5D5bP+Afu3O0/aekoPAXFKpSo84PeZ6PbANGjk0+BQPnC7aua3wT+vBcDlJihVNaY63MHyC2TAdzlVigl3olwGG5l97uS0Jivpy6saWpQMN7F4I+glGuwFxMQjgLoMjcXxr0KxOcbQJV8wJBlbtEV9InbeiPIzehOQHQSdmDrDD3LUGXWraCwp6QTa5IOgJv45tgaCEUc+/kkrSFuds+h0GDT7+lAiZkE1KAx4vnYiwFK4jZ8AGZThZCv4dyyWbrMCfhQpa1MiNCP5BPco3IORZ4GXWmY00gTxWQmKIwNLZtqJLPQXHn1PCgENQC6TNv4G4BRWPzPbJg1EHrrReU8ycY0S++5rTtbwX2Yn6vAgRVsDOezoHGWwkkqVwpDDeHCVkosKOLCAceHOM26b4Brwcdsc+yCBVD1J5AES5fB26T5V0ne4hnmMFvweQ6y/abJQyv2At58sl9RuL9XfWD0BWqC/6yMUQJTAAAAAElFTkSuQmCC"},600:function(e){e.exports="data:image/png;base64,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"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,r,o){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{65:"9034b613",223:"4f177729",310:"3c504010",335:"b2bf585a",365:"cd6cae97",381:"50bba4cc",497:"92f1143f",521:"c79be878",631:"22d97b91",671:"2025c738",926:"051da9a4",959:"933e7ebf"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{65:"571c8b9f",365:"afb384dc",381:"a39de28b",521:"482d329d",631:"51bbc294",959:"6a3bac45"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="brain_web:";n.l=function(a,r,o,l){if(e[a])e[a].push(r);else{var i,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(A);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},A=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var l=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var l=n&&n.type,i=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+i+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,o.parentNode&&o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=l,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){r=l[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var l=n.miniCssF(a),i=n.p+l;if(t(l,i))return r();e(a,i,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={65:1,365:1,381:1,521:1,631:1,959:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var l=n.p+n.u(t),i=new Error,s=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,r[1](i)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,l=a[0],i=a[1],s=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(a);c<l.length;c++)o=l[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkbrain_web"]=self["webpackChunkbrain_web"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1328)}));a=n.O(a)})();