"use strict";(self["webpackChunkgreen_court"]=self["webpackChunkgreen_court"]||[]).push([[753],{5193:function(t,e,r){r.d(e,{Z:function(){return c}});var l=r(3396);const n={class:"container-fluid px-0"},d=(0,l._)("div",{class:"page-banner"},null,-1),s=[d];function u(t,e){return(0,l.wg)(),(0,l.iD)("div",n,s)}var o=r(89);const a={},i=(0,o.Z)(a,[["render",u]]);var c=i},7753:function(t,e,r){r.r(e),r.d(e,{default:function(){return $}});var l=r(3396),n=r(9242),d=r(7139);const s={class:"gradient-bg"},u={class:"py-48 row justify-content-center"},o={class:"table align-middle text-white"},a=(0,l._)("thead",null,[(0,l._)("th",null,"日期"),(0,l._)("th",null,"活動名稱"),(0,l._)("th",null,"人數"),(0,l._)("th",null,"單價")],-1),i=(0,l._)("td",null,"總計",-1),c={class:"table text-white"},_=(0,l._)("th",null,"姓名",-1),h=(0,l._)("th",null,"Email",-1),p=(0,l._)("th",null,"電話",-1),g=(0,l._)("th",null,"地址",-1),w=(0,l._)("th",null,"付款狀態",-1),b={key:0,class:"text-danger"},v={key:1,class:"text-success"},y={key:0,class:"text-end"},f=(0,l._)("button",{class:"btn btn-outline-danger"},"確認付款",-1),m=[f],k={key:1,class:"text-end"};function z(t,e,r,f,z,x){const D=(0,l.up)("ProductBanner"),I=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(D),(0,l._)("div",s,[(0,l._)("div",u,[(0,l._)("form",{action:"",class:"col-md-6",onSubmit:e[0]||(e[0]=(0,n.iM)(((...t)=>x.payOrder&&x.payOrder(...t)),["prevent"]))},[(0,l._)("table",o,[a,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.order.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,d.zw)(t.product.date)+" / "+(0,d.zw)(t.product.time),1),(0,l._)("td",null,(0,d.zw)(t.product.title),1),(0,l._)("td",null,(0,d.zw)(t.qty)+" / 人",1),(0,l._)("td",null,(0,d.zw)(t.product.price),1)])))),128))]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[i,(0,l._)("td",null,(0,d.zw)(z.order.total),1)])])]),(0,l._)("table",c,[(0,l._)("tbody",null,[(0,l._)("tr",null,[_,(0,l._)("td",null,(0,d.zw)(z.order.user.name),1)]),(0,l._)("tr",null,[h,(0,l._)("td",null,(0,d.zw)(z.order.user.email),1)]),(0,l._)("tr",null,[p,(0,l._)("td",null,(0,d.zw)(z.order.user.tel),1)]),(0,l._)("tr",null,[g,(0,l._)("td",null,(0,d.zw)(z.order.user.address),1)]),(0,l._)("tr",null,[w,(0,l._)("td",null,[z.order.is_paid?((0,l.wg)(),(0,l.iD)("span",v,"付款完成")):((0,l.wg)(),(0,l.iD)("span",b,"尚未付款"))])])])]),!1===z.order.is_paid?((0,l.wg)(),(0,l.iD)("div",y,m)):((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(I,{to:"/activities",class:"btn btn-outline-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" 查看其他球團活動 ")])),_:1})]))],32)])])],64)}var x=r(5193),D={components:{ProductBanner:x.Z},data(){return{order:{user:{}},orderId:""}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/green-court/order/${this.orderId}`;this.$http.get(t).then((t=>{this.order=t.data.order,console.log(this.order)}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/green-court/pay/${this.orderId}`;this.$http.post(t).then((t=>{t.data.success&&(this.$httpMessageState(t,"付款完成"),this.getOrder())}))}},created(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},I=r(89);const O=(0,I.Z)(D,[["render",z]]);var $=O}}]);
//# sourceMappingURL=753.0a45fde7.js.map