"use strict";(self["webpackChunkgreen_court"]=self["webpackChunkgreen_court"]||[]).push([[593],{5193:function(t,s,i){i.d(s,{Z:function(){return u}});var a=i(3396);const e={class:"container-fluid px-0"},n=(0,a._)("div",{class:"page-banner"},null,-1),o=[n];function r(t,s){return(0,a.wg)(),(0,a.iD)("div",e,o)}var c=i(89);const d={},l=(0,c.Z)(d,[["render",r]]);var u=l},3593:function(t,s,i){i.r(s),i.d(s,{default:function(){return P}});var a=i(3396),e=i(7139);const n={class:"gradient-bg"},o={class:"container"},r={class:"row row-cols-md-4"},c={class:"card card-opacity text-white"},d={class:"card-body"},l={class:"card-title"},u={class:"list-unstyled"},h={class:"row"},p={class:"btn-group"},g=["onClick"],v=["onClick","disabled"],_={key:0,class:"spinner-border spinner-border-sm",role:"status"},b=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),w=[b];function m(t,s,i,b,m,k){const f=(0,a.up)("Loading"),y=(0,a.up)("ProductBanner");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:m.isLoading},null,8,["active"]),(0,a.Wm)(y),(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.testProducts,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"p-16",key:t.id},[(0,a._)("div",c,[(0,a._)("div",{style:(0,e.j5)([{backgroundImage:"url("+t.imageUrl+")"},{height:"250px","background-size":"cover"}]),class:"card-img-top",alt:""},null,4),(0,a._)("div",d,[(0,a._)("h5",l,(0,e.zw)(t.title),1),(0,a._)("ul",u,[(0,a._)("li",null,"品牌： "+(0,e.zw)(t.description),1),(0,a._)("li",null,"原價："+(0,e.zw)(t.origin_price),1),(0,a._)("li",null,"特價： "+(0,e.zw)(t.price),1)]),(0,a._)("div",h,[(0,a._)("div",p,[(0,a._)("button",{class:"btn btn-outline-primary",onClick:s=>k.showDetail(t.id)}," 查看更多 ",8,g),(0,a._)("button",{class:"btn btn-outline-secondary",onClick:s=>k.addToCart(t.id),disabled:this.status.loadingItem===t.id},[this.status.loadingItem===t.id?((0,a.wg)(),(0,a.iD)("div",_,w)):(0,a.kq)("",!0),(0,a.Uk)(" 加入購物車 ")],8,v)])])])])])))),128))])])])],64)}i(7658);var k=i(5193),f=i(5820),y={components:{ProductBanner:k.Z},data(){return{products:[],testProducts:[],product:{},isLoading:!1,status:{loadingItem:""}}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/green-court/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,this.products.forEach((t=>{"羽球拍"===t.category&&this.testProducts.push(t)})),this.isLoading=!1}))},showDetail(t){this.$router.push(`/activities/${t}`)},addToCart(t,s=1){const i="https://vue3-course-api.hexschool.io/api/green-court/cart";this.status.loadingItem=t;const a={product_id:t,qty:s};this.$http.post(i,{data:a}).then((t=>{this.status.loadingItem="",f.Z.emit("get-cart"),this.$httpMessageState(t,"加入購物車")}))}},created(){this.getProducts()}},C=i(89);const D=(0,C.Z)(y,[["render",m]]);var P=D}}]);
//# sourceMappingURL=593.e5458f44.js.map