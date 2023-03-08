"use strict";(self["webpackChunkgreen_court"]=self["webpackChunkgreen_court"]||[]).push([[498],{6498:function(t,e,l){l.r(e),l.d(e,{default:function(){return B}});var a=l(3396),s=l(7139),o=l(9242);const i={class:"gradient-bg"},n={class:"container"},r={class:"row row-cols-md-2"},d={class:"col col-12"},c={class:"table align-middle text-white my-48"},u=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"品名"),(0,a._)("th",{style:{width:"120px"}},"數量"),(0,a._)("th",null,"單價"),(0,a._)("th",null,"總計"),(0,a._)("th",null,"刪除產品")])],-1),m={key:0,class:"text-success"},p=(0,a._)("label",{for:"item-qty",class:"d-none"},"數量",-1),h={class:"input-group input-group-sm"},_=["onUpdate:modelValue","disabled","onChange"],g={class:"input-group-text"},f={key:0,class:"text-success"},b=(0,a._)("br",null,null,-1),v=["onClick"],y=(0,a._)("i",{class:"bi bi-trash3"},null,-1),w=[y],x=(0,a._)("td",{colspan:"4",class:"text-end"},"總計",-1),C={class:"text-end"},k=(0,a._)("td",{colspan:"4",class:"text-end"},"折扣價",-1),$={class:"text-end"},V={class:"pb-48"},q=(0,a._)("label",{for:"coupon-input",class:"d-none"},"請輸入優惠碼",-1),U={class:"input-group input-group-sm text-white"},W={class:"input-group-append"},L={class:"col col-12"},I={class:"mb-16"},z=(0,a._)("label",{for:"name",class:"form-label"},"訂購人姓名",-1),S={class:"mb-16"},D=(0,a._)("label",{for:"email",class:"form-label"},"電子信箱",-1),M={class:"mb-16"},F=(0,a._)("label",{for:"tel",class:"form-label"},"聯絡電話",-1),H={class:"mb-16"},O=(0,a._)("label",{for:"address",class:"form-label"},"聯絡地址",-1),Q={class:"mb-24"},Y=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),E=(0,a._)("div",{class:"text-end"},[(0,a._)("button",{class:"btn btn-outline-light"},"送出訂單")],-1);function K(t,e,l,y,K,Z){const j=(0,a.up)("Loading"),A=(0,a.up)("Field"),B=(0,a.up)("ErrorMessage"),G=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(j,{active:K.isLoading},null,8,["active"]),(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",r,[(0,a._)("div",d,[(0,a._)("table",c,[u,(0,a._)("tbody",null,[K.carts?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(K.carts.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a.Uk)((0,s.zw)(e.product.title)+" ",1),e.coupon?((0,a.wg)(),(0,a.iD)("h6",m,"已套用優惠券")):(0,a.kq)("",!0)]),(0,a._)("td",null,[p,(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"number",id:"item-qty",class:"form-control",min:"1","onUpdate:modelValue":t=>e.qty=t,disabled:K.status.loadingItem===e.id,onChange:t=>Z.changeQty(e)},null,40,_),[[o.nr,e.qty,void 0,{number:!0}]]),(0,a._)("div",g,"/ "+(0,s.zw)(e.product.unit),1)])]),(0,a._)("td",null,(0,s.zw)(t.$filters.currency(e.product.price)),1),(0,a._)("td",null,[K.final_total!==K.total?((0,a.wg)(),(0,a.iD)("small",f,"折扣價")):(0,a.kq)("",!0),b,(0,a.Uk)(" "+(0,s.zw)(t.$filters.currency(e.final_total)),1)]),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-outline-white p-8",onClick:t=>Z.removeCartItem(e.id)},w,8,v)])])))),128)):(0,a.kq)("",!0)]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[x,(0,a._)("td",C,(0,s.zw)(t.$filters.currency(K.carts.total)),1)]),(0,a._)("tr",null,[k,(0,a._)("td",$,(0,s.zw)(t.$filters.currency(K.carts.final_total)),1)])])]),(0,a._)("div",V,[q,(0,a._)("div",U,[(0,a.wy)((0,a._)("input",{type:"text",id:"coupon-input",class:"form-control rounded","onUpdate:modelValue":e[0]||(e[0]=t=>K.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[o.nr,K.coupon_code]]),(0,a._)("div",W,[(0,a._)("button",{class:"btn btn-outline-light ms-8",type:"button",onClick:e[1]||(e[1]=t=>Z.addCoupon())}," 套用優惠碼 ")])])])]),(0,a._)("div",L,[(0,a.Wm)(G,{onSubmit:Z.createOrder,class:"my-48 text-white"},{default:(0,a.w5)((({errors:t})=>[(0,a._)("div",I,[z,(0,a.Wm)(A,{type:"text",id:"name",name:"姓名",class:(0,s.C_)(["form-control",{"is-invalid":t["姓名"]}]),placeholder:"請輸入您的姓名",modelValue:K.form.user.name,"onUpdate:modelValue":e[2]||(e[2]=t=>K.form.user.name=t),rules:"required"},null,8,["modelValue","class"]),(0,a.Wm)(B,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",S,[D,(0,a.Wm)(A,{type:"email",id:"email",name:"email",class:(0,s.C_)(["form-control",{"is-invalid":t["email"]}]),placeholder:"請輸入您的 e-mail",modelValue:K.form.user.email,"onUpdate:modelValue":e[3]||(e[3]=t=>K.form.user.email=t),rules:"email|required"},null,8,["modelValue","class"]),(0,a.Wm)(B,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",M,[F,(0,a.Wm)(A,{type:"tel",id:"tel",name:"電話",class:(0,s.C_)(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入您的聯絡電話",modelValue:K.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>K.form.user.tel=t),rules:"required"},null,8,["modelValue","class"]),(0,a.Wm)(B,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",H,[O,(0,a.Wm)(A,{type:"text",id:"address",name:"地址",class:(0,s.C_)(["form-control",{"is-invalid":t["地址"]}]),placeholder:"請輸入您的聯絡地址",modelValue:K.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=t=>K.form.user.address=t),rules:"required"},null,8,["modelValue","class"]),(0,a.Wm)(B,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",Q,[Y,(0,a.wy)((0,a._)("textarea",{class:"form-control",id:"message",cols:"30",rows:"7","onUpdate:modelValue":e[6]||(e[6]=t=>K.form.message=t)},"\n                ",512),[[o.nr,K.form.message]])]),E])),_:1},8,["onSubmit"])])])])])],64)}l(7658);var Z={data(){return{carts:{},final_total:"",total:"",coupon_code:"",isLoading:!1,status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/green-court/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.carts=t.data.data,console.log(this.carts),this.final_total=t.data.data.final_total,this.total=t.data.data.total}))},removeCartItem(t){const e=`https://vue3-course-api.hexschool.io/api/green-court/cart/${t}`;this.$http.delete(e).then((t=>{this.$httpMessageState(t,"刪除品項"),this.getCart()}))},changeQty(t){this.status.loadingItem=t.id;const e=`https://vue3-course-api.hexschool.io/api/green-court/cart/${t.id}`,l={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:l}).then((t=>{this.status.loadingItem="",this.$httpMessageState(t,"更新數量"),this.getCart()}))},addCoupon(){const t="https://vue3-course-api.hexschool.io/api/green-court/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:e}).then((t=>{this.getCart(),this.isLoading=!1,this.$httpMessageState(t,"使用優惠券")}))},createOrder(){const t="https://vue3-course-api.hexschool.io/api/green-court/order",e=this.form;this.isLoading=!0,this.$http.post(t,{data:e}).then((t=>{console.log(t),this.getCart(),this.isLoading=!1,this.$httpMessageState(t,"建立訂單"),this.$router.push(`/order/${t.data.orderId}`)}))}},created(){this.getCart()}},j=l(89);const A=(0,j.Z)(Z,[["render",K]]);var B=A}}]);
//# sourceMappingURL=498.540caeac.js.map