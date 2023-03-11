"use strict";(self["webpackChunkgreen_court"]=self["webpackChunkgreen_court"]||[]).push([[481],{5481:function(e,t,l){l.r(t),l.d(t,{default:function(){return st}});var o=l(3396),a=l(7139);const s={class:"gradient-bg"},r={class:"text-end"},i={class:"table mt-4 text-white"},n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"200"},"編輯")])],-1),c={class:"text-right"},d={class:"text-right"},p={key:0,class:"text-success"},u={key:1,class:"text-danger"},m={class:"btn-group"},_=["onClick"],b=["onClick"],h={class:"row align-item-center"};function g(e,t,l,g,f,v){const P=(0,o.up)("Loading"),y=(0,o.up)("PaginationComponent"),w=(0,o.up)("ProductModal"),x=(0,o.up)("DeleteModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P,{active:f.isLoading},null,8,["active"]),(0,o._)("div",s,[(0,o._)("div",r,[(0,o._)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=e=>v.openModal(!0))},"增加一個產品")]),(0,o._)("table",i,[n,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,a.zw)(t.category),1),(0,o._)("td",null,(0,a.zw)(t.title),1),(0,o._)("td",c,(0,a.zw)(e.$filters.currency(t.origin_price)),1),(0,o._)("td",d,(0,a.zw)(e.$filters.currency(t.price)),1),(0,o._)("td",null,[t.is_enabled?((0,o.wg)(),(0,o.iD)("span",p,"啟用")):((0,o.wg)(),(0,o.iD)("span",u,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",m,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>v.openModal(!1,t)},"編輯",8,_),(0,o._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>v.openDeleteModal(t)},"刪除",8,b)])])])))),128))])]),(0,o._)("div",h,[(0,o.Wm)(y,{pages:f.pagination,onEmitPage:v.getProducts},null,8,["pages","onEmitPage"])])]),(0,o.Wm)(w,{ref:"productModal",product:f.tempProduct,onUpdateProduct:v.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(x,{ref:"deleteModal",product:f.tempProduct,onDeleteItem:v.deleteProduct},null,8,["product","onDeleteItem"])],64)}l(7658);var f=l(9242);const v={class:"modal modal-xl fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog"},y={class:"modal-content"},w=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),x={class:"modal-body"},k={class:"row"},M={class:"col-sm-4"},U={class:"mb-3"},C=(0,o._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D=["src"],V={class:"mb-3"},$=(0,o._)("label",{for:"customFile",class:"form-label",htmlFor:""},[(0,o.Uk)("或 上傳圖片 "),(0,o._)("i",{class:"fas fa-spinner fa-spin"})],-1),F={key:0,class:"mt-8"},L=["onUpdate:modelValue"],z=["onClick"],Z={key:0},H={class:"col-sm-8"},I={class:"row gx-2"},N={class:"mb-16 col-md-6"},W=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),Y={class:"mb-16 col-md-6"},j=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),E=(0,o._)("option",{value:"臨打團"},"臨打團",-1),K=(0,o._)("option",{value:"教練課"},"教練課",-1),q=(0,o._)("option",{value:"羽球拍"},"羽球拍",-1),S=[E,K,q],O=(0,o._)("hr",null,null,-1),A={class:"row gx-2"},B={class:"mb-16 col-md-6"},G=(0,o._)("label",{for:"date",class:"form-label"},"日期",-1),J={class:"mb-16 col-md-6"},Q=(0,o._)("label",{class:"form-label",for:"time"},"時間",-1),R=(0,o._)("hr",null,null,-1),T={class:"row gx-2"},X={class:"mb-16 col-md-6"},ee=(0,o._)("label",{class:"form-label",for:"location"},"地點",-1),te={class:"mb-16 col-md-6"},le=(0,o._)("label",{class:"form-label",for:"map"},"地圖",-1),oe=(0,o._)("hr",null,null,-1),ae={class:"row gx-2"},se={class:"mb-16 col-md-6"},re=(0,o._)("label",{class:"form-label",for:"unit"},"單位",-1),ie={class:"mb-16 col-md-6"},ne=(0,o._)("label",{class:"form-label",for:"hours"},"時數",-1),ce=(0,o._)("hr",null,null,-1),de={class:"row gx-2"},pe={class:"mb-16 col-md-6"},ue=(0,o._)("label",{class:"form-label",for:"court"},"場地數",-1),me={class:"mb-16 col-md-6"},_e=(0,o._)("label",{class:"form-label",for:"members"},"名額",-1),be=(0,o._)("hr",null,null,-1),he={class:"row gx-2"},ge={class:"mb-16 col-md-6"},fe=(0,o._)("label",{class:"form-label",for:"experience"},"年資",-1),ve={class:"mb-16 col-md-6"},Pe=(0,o._)("label",{for:"level",class:"form-label"},"等級",-1),ye=(0,o.uE)('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option>',15),we=[ye],xe=(0,o._)("hr",null,null,-1),ke={class:"row gx-2"},Me={class:"mb-16 col-md-6"},Ue=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),Ce={class:"mb-16 col-md-6"},De=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),Ve=(0,o._)("hr",null,null,-1),$e={class:"mb-16"},Fe=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),Le={class:"mb-16"},ze=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),Ze={class:"mb-16"},He={class:"form-check"},Ie=(0,o._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Ne={class:"modal-footer"},We=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close",-1);function Ye(e,t,l,a,s,r){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",P,[(0,o._)("div",y,[w,(0,o._)("div",x,[(0,o._)("div",k,[(0,o._)("div",M,[(0,o._)("div",U,[C,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[0]||(t[0]=e=>s.tempProduct.imageUrl=e)},null,512),[[f.nr,s.tempProduct.imageUrl]]),(0,o._)("img",{src:s.tempProduct.imageUrl,class:"img-fluid mt-8",alt:""},null,8,D)]),(0,o._)("div",V,[$,(0,o._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=(...e)=>r.uploadFile&&r.uploadFile(...e))},null,544)]),s.tempProduct.images?((0,o.wg)(),(0,o.iD)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.images,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-3 input-group",key:t},[(0,o.wy)((0,o._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":e=>s.tempProduct.images[t]=e,placeholder:"請輸入連結"},null,8,L),[[f.nr,s.tempProduct.images[t]]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>s.tempProduct.images.splice(t,1)},"移除",8,z)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[2]||(t[2]=e=>s.tempProduct.images.push(""))},"新增圖片")])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("div",H,[(0,o._)("div",I,[(0,o._)("div",N,[W,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[3]||(t[3]=e=>s.tempProduct.title=e)},null,512),[[f.nr,s.tempProduct.title]])]),(0,o._)("div",Y,[j,(0,o.wy)((0,o._)("select",{class:"form-select",id:"category","aria-label":"Default select example","onUpdate:modelValue":t[4]||(t[4]=e=>s.tempProduct.category=e)},S,512),[[f.bM,s.tempProduct.category]])])]),O,(0,o._)("div",A,[(0,o._)("div",B,[G,(0,o.wy)((0,o._)("input",{type:"date",class:"form-control",id:"date",placeholder:"請輸入日期","onUpdate:modelValue":t[5]||(t[5]=e=>s.tempProduct.date=e)},null,512),[[f.nr,s.tempProduct.date]])]),(0,o._)("div",J,[Q,(0,o.wy)((0,o._)("input",{type:"time",class:"form-control",id:"time",placeholder:"請輸入時間","onUpdate:modelValue":t[6]||(t[6]=e=>s.tempProduct.time=e)},null,512),[[f.nr,s.tempProduct.time]])])]),R,(0,o._)("div",T,[(0,o._)("div",X,[ee,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"location",placeholder:"請輸入地點","onUpdate:modelValue":t[7]||(t[7]=e=>s.tempProduct.location=e)},null,512),[[f.nr,s.tempProduct.location]])]),(0,o._)("div",te,[le,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"map",placeholder:"請輸入 src","onUpdate:modelValue":t[8]||(t[8]=e=>s.tempProduct.iframe=e)},null,512),[[f.nr,s.tempProduct.iframe]])])]),oe,(0,o._)("div",ae,[(0,o._)("div",se,[re,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":t[9]||(t[9]=e=>s.tempProduct.unit=e)},null,512),[[f.nr,s.tempProduct.unit]])]),(0,o._)("div",ie,[ne,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"hours",min:"1",placeholder:"請輸入時數","onUpdate:modelValue":t[10]||(t[10]=e=>s.tempProduct.hours=e)},null,512),[[f.nr,s.tempProduct.hours]])])]),ce,(0,o._)("div",de,[(0,o._)("div",pe,[ue,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"court",min:"1",placeholder:"請輸入場地數","onUpdate:modelValue":t[11]||(t[11]=e=>s.tempProduct.court=e)},null,512),[[f.nr,s.tempProduct.court]])]),(0,o._)("div",me,[_e,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"members",min:"1",placeholder:"請輸入名額","onUpdate:modelValue":t[12]||(t[12]=e=>s.tempProduct.members=e)},null,512),[[f.nr,s.tempProduct.members]])])]),be,(0,o._)("div",he,[(0,o._)("div",ge,[fe,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"experience",placeholder:"請輸入年資","onUpdate:modelValue":t[13]||(t[13]=e=>s.tempProduct.experience=e)},null,512),[[f.nr,s.tempProduct.experience]])]),(0,o._)("div",ve,[Pe,(0,o.wy)((0,o._)("select",{class:"form-select",id:"level","aria-label":"Default select example","onUpdate:modelValue":t[14]||(t[14]=e=>s.tempProduct.level=e)},we,512),[[f.bM,s.tempProduct.level,void 0,{number:!0}]])])]),xe,(0,o._)("div",ke,[(0,o._)("div",Me,[Ue,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":t[15]||(t[15]=e=>s.tempProduct.origin_price=e)},null,512),[[f.nr,s.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",Ce,[De,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":t[16]||(t[16]=e=>s.tempProduct.price=e)},null,512),[[f.nr,s.tempProduct.price,void 0,{number:!0}]])])]),Ve,(0,o._)("div",$e,[Fe,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":t[17]||(t[17]=e=>s.tempProduct.description=e)},null,512),[[f.nr,s.tempProduct.description]])]),(0,o._)("div",Le,[ze,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":t[18]||(t[18]=e=>s.tempProduct.content=e)},null,512),[[f.nr,s.tempProduct.content]])]),(0,o._)("div",Ze,[(0,o._)("div",He,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[19]||(t[19]=e=>s.tempProduct.is_enabled=e)},null,512),[[f.e8,s.tempProduct.is_enabled]]),Ie])])])])]),(0,o._)("div",Ne,[We,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:t[20]||(t[20]=t=>e.$emit("update-product",s.tempProduct))},"確定新增")])])])],512)}var je=l(1339),Ee={data(){return{modal:{},tempProduct:{imagesUrl:[]}}},props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},methods:{uploadFile(){const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);const l="https://vue3-course-api.hexschool.io/api/green-court/admin/upload";this.$http.post(l,t).then((e=>{e.data.success&&(this.tempProduct.imageUrl=e.data.imageUrl)}))}},mixins:[je.Z]},Ke=l(89);const qe=(0,Ke.Z)(Ee,[["render",Ye]]);var Se=qe,Oe=l(6915);const Ae={"aria-label":"Page navigation example"},Be={class:"pagination justify-content-center"},Ge=(0,o._)("span",{"aria-hidden":"true"},"«",-1),Je=[Ge],Qe=["onClick"],Re=(0,o._)("span",{"aria-hidden":"true"},"»",-1),Te=[Re];function Xe(e,t,l,s,r,i){return(0,o.wg)(),(0,o.iD)("nav",Ae,[(0,o._)("ul",Be,[(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,o._)("a",{class:"page-link bg-dark text-white",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,f.iM)((e=>i.updatePage(l.pages.current_page-1)),["prevent"]))},Je)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.pages.total_pages,(e=>((0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["page-item",{active:e===l.pages.current_page}]),key:e},[(0,o._)("a",{class:"page-link bg-dark text-white",href:"#",onClick:(0,f.iM)((t=>i.updatePage(e)),["prevent"])},(0,a.zw)(e),9,Qe)],2)))),128)),(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,o._)("a",{class:"page-link bg-dark text-white",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,f.iM)((e=>i.updatePage(l.pages.current_page+1)),["prevent"]))},Te)],2)])])}var et={props:["pages"],methods:{updatePage(e){this.$emit("emit-page",e)}}};const tt=(0,Ke.Z)(et,[["render",Xe]]);var lt=tt,ot={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:Se,DeleteModal:Oe.Z,PaginationComponent:lt},inject:["emitter"],methods:{getProducts(e=1){const t=`https://vue3-course-api.hexschool.io/api/green-court/admin/products?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{this.products=e.data.products,this.pagination=e.data.pagination,this.isLoading=!1}))},openModal(e,t){e&&(this.tempProduct={}),e||(this.tempProduct={...t}),this.isNew=e;const l=this.$refs.productModal;l.showModal()},openDeleteModal(e){console.log(e),this.tempProduct={...e};const t=this.$refs.deleteModal;t.showModal()},updateProduct(e){this.tempProduct=e;const t=this.$refs.productModal;let l="https://vue3-course-api.hexschool.io/api/green-court/admin/product",o="post";this.isNew||(l=`https://vue3-course-api.hexschool.io/api/green-court/admin/product/${e.id}`,o="put"),this.$http[o](l,{data:this.tempProduct}).then((e=>{console.log(e),t.hideModal(),e.data.success&&(this.getProducts(),this.$httpMessageState(e,"新增商品"))}))},deleteProduct(){const e=this.$refs.deleteModal,t=`https://vue3-course-api.hexschool.io/api/green-court/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t),e.hideModal(),t.data.success&&(this.getProducts(),this.$httpMessageState(t,"刪除商品"))}))}},mounted(){this.getProducts()}};const at=(0,Ke.Z)(ot,[["render",g]]);var st=at}}]);
//# sourceMappingURL=481.30b7cea9.js.map