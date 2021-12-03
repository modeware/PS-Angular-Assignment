"use strict";(self.webpackChunkangular_assignment=self.webpackChunkangular_assignment||[]).push([[955],{955:(R,a,c)=>{c.r(a),c.d(a,{Route2Module:()=>O});var p=c(583),t=c(639),l=c(2),g=c(841);let d=(()=>{class e{constructor(n){this.http=n}getProducts(){return this.http.get("https://fakestoreapi.com/products").pipe((0,l.U)(n=>{let i=n.slice(),r=n.map(u=>Object.assign(Object.assign({},u),{price:u.price+100,title:u.title+"--Premium Product"}));return i.concat(r)}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();function m(e,o){if(1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(3),t.Q6J("src",n.image,t.LSH),t.xp6(2),t.Oqu("$"+n.price)}}let f=(()=>{class e{constructor(){this.products=[]}ngOnInit(){console.log(this.products)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-grid-view"]],inputs:{products:"products"},decls:2,vars:1,consts:[[1,"container"],["class","sub-container card",4,"ngFor","ngForOf"],[1,"sub-container","card"],[1,"product-item"],[1,"img-container"],["width","150px","height","150px",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,m,8,3,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.products))},directives:[p.sg],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto auto}.sub-container[_ngcontent-%COMP%]{display:flex;border:1px solid black;margin:2px;height:370px;justify-content:center;align-items:center;flex-direction:column;padding:20px}.img-container[_ngcontent-%COMP%]{display:flex;justify-content:center;height:150px;padding:25px;margin:25px}.product-item[_ngcontent-%COMP%]{width:100%;height:200px}@media (min-width: 1000px){.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto auto}}@media (max-width: 850px){.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto}}@media (max-width: 500px){.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto}}"]}),e})();function h(e,o){if(1&e&&(t.TgZ(0,"div",2),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(3),t.Q6J("src",n.image,t.LSH),t.xp6(2),t.Oqu("$"+n.price)}}let Z=(()=>{class e{constructor(){this.products=[]}ngOnInit(){console.log(this.products)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-view"]],inputs:{products:"products"},decls:2,vars:1,consts:[[1,"container"],["class","sub-container",4,"ngFor","ngForOf"],[1,"sub-container"],[1,"product-item"],[1,"img-container"],["width","150px","height","150px",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,h,8,3,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.products))},directives:[p.sg],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto}.sub-container[_ngcontent-%COMP%]{display:flex;border:1px solid black;margin:2px;height:250px;justify-content:center;align-items:center;flex-direction:column}.img-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.product-item[_ngcontent-%COMP%]{width:100%;height:200px}@media (max-width: 900px){.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto}}"]}),e})();function _(e,o){if(1&e&&t._UZ(0,"app-grid-view",10),2&e){const n=t.oxw();t.Q6J("products",n.products)}}function v(e,o){if(1&e&&t._UZ(0,"app-list-view",10),2&e){const n=t.oxw();t.Q6J("products",n.products)}}function x(e,o){1&e&&(t.TgZ(0,"div",11),t.TgZ(1,"span",12),t._uU(2,"Loading..."),t.qZA(),t.qZA())}function w(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"span"),t._uU(2,"Something Went Wrong"),t.qZA(),t.qZA())}let y=(()=>{class e{constructor(n){this.route2Service=n,this.gridView=!0,this.products=[],this.loading=!1,this.error=!1}ngOnInit(){this.loading=!0,this.route2Service.getProducts().subscribe(n=>{this.products=this.orderAscending(n),this.loading=!1},n=>{this.loading=!1,this.error=!0})}toggleView(n){this.gridView=n}order(n){this.products=1==n.target.value?this.orderAscending(this.products):this.orderDescending(this.products)}orderAscending(n){let i=n;return i=i.sort((r,s)=>r.price-s.price),i}orderDescending(n){let i=n;return i=i.sort((r,s)=>s.price-r.price),i}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-route2"]],decls:15,vars:4,consts:[[1,"settings"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary","ml-2","mr-2",3,"click"],[3,"change"],["value","1"],["value","0"],[1,"container"],[3,"products",4,"ngIf"],["class","spinner-border text-primary","role","status",4,"ngIf"],[4,"ngIf"],[3,"products"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return i.toggleView(!0)}),t._uU(2,"Grid View"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return i.toggleView(!1)}),t._uU(4,"List View"),t.qZA(),t.TgZ(5,"select",3),t.NdJ("change",function(s){return i.order(s)}),t.TgZ(6,"option",4),t._uU(7,"Price Low->High"),t.qZA(),t.TgZ(8,"option",5),t._uU(9,"Price High->Low"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.YNc(11,_,1,1,"app-grid-view",7),t.YNc(12,v,1,1,"app-list-view",7),t.YNc(13,x,3,0,"div",8),t.YNc(14,w,3,0,"div",9),t.qZA()),2&n&&(t.xp6(11),t.Q6J("ngIf",i.gridView&&i.products.length>0),t.xp6(1),t.Q6J("ngIf",!i.gridView&&i.products.length>0),t.xp6(1),t.Q6J("ngIf",i.loading),t.xp6(1),t.Q6J("ngIf",i.error))},directives:[p.O5,f,Z],styles:[".container[_ngcontent-%COMP%]{display:grid;align-items:center;justify-content:center}.settings[_ngcontent-%COMP%]{width:85.4%;display:grid;grid-template-columns:auto auto auto;justify-content:end}"]}),e})();var C=c(855);const T=[{path:"",component:y}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[C.Bz.forChild(T)]]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[d],imports:[[p.ez,A]]}),e})()}}]);