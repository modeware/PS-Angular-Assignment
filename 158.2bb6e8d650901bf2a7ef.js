"use strict";(self.webpackChunkangular_assignment=self.webpackChunkangular_assignment||[]).push([[158],{158:(R,u,c)=>{c.r(u),c.d(u,{Route5Module:()=>C});var h=c(583),t=c(639),l=c(2),g=c(841);let d=(()=>{class e{constructor(o){this.http=o}getUsers(){return this.http.get("https://jsonplaceholder.typicode.com/users").pipe((0,l.U)(o=>{let s=[];return s=o.map(i=>({Name:i.name,Class:Math.floor(10*Math.random())+1,Section:String.fromCharCode(Math.floor(25*Math.random())+65),Math:Math.floor(50*Math.random())+50,Science:Math.floor(50*Math.random())+50,Computer:Math.floor(50*Math.random())+50,English:Math.floor(50*Math.random())+50,Hindi:Math.floor(50*Math.random())+50})),console.log(s),s}))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"th",3),t.NdJ("click",function(){const i=t.CHM(o),n=i.$implicit,a=i.index;return t.oxw().sortTableData(n.headingName,a)}),t._uU(1),t.qZA()}if(2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.headingName)}}function p(e,r){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.value)}}function f(e,r){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,p,2,1,"td",2),t.ALo(2,"keyvalue"),t.qZA()),2&e){const o=r.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,o,s.originalOrder))}}let M=(()=>{class e{constructor(o){this.route5Service=o,this.userData=[],this.originalUserOrder=[],this.headings=[],this.originalOrder=(s,i)=>0}ngOnInit(){this.route5Service.getUsers().subscribe(o=>{this.userData=o.slice(),this.originalUserOrder=o.slice(),this.headings=Object.keys(this.userData[0]).map(s=>({headingName:s,count:0})),console.log(this.headings)},o=>{alert("Something Went Wrong")})}sortTableData(o,s){switch(console.log(o),o){case"Name":console.log("Hello"),0==this.headings[s].count?(this.userData=this.userData.sort((n,a)=>n.Name>a.Name?1:-1),this.headings[s].count+=1):1==this.headings[s].count?(this.userData=this.userData.sort((n,a)=>n.Name<a.Name?1:-1),this.headings[s].count+=1):(this.headings[s].count=0,console.log("or",this.originalUserOrder),this.userData=this.originalUserOrder.slice(),console.log("Heyy",this.userData));break;case"Section":0==this.headings[s].count?(this.userData=this.userData.sort((n,a)=>n.Section>a.Section?1:-1),this.headings[s].count+=1):1==this.headings[s].count?(this.userData=this.userData.sort((n,a)=>n.Section<a.Section?1:-1),this.headings[s].count+=1):(this.headings[s].count=0,console.log("or",this.originalUserOrder),this.userData=this.originalUserOrder.slice(),console.log("Heyy",this.userData));break;default:let i=this.headings[s].headingName;0==this.headings[s].count?(this.userData=this.userData.sort((n,a)=>n[i]-a[i]),this.headings[s].count+=1):1==this.headings[s].count?(this.userData=this.userData.sort((n,a)=>a[i]-n[i]),this.headings[s].count+=1):(this.headings[s].count=0,console.log("or",this.originalUserOrder),this.userData=this.originalUserOrder.slice(),console.log("Heyy",this.userData))}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-route5"]],decls:5,vars:2,consts:[[1,"container"],["class","cursor-style",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"cursor-style",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"table"),t.TgZ(2,"tr"),t.YNc(3,m,2,1,"th",1),t.qZA(),t.YNc(4,f,3,4,"tr",2),t.qZA(),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngForOf",s.headings),t.xp6(1),t.Q6J("ngForOf",s.userData))},directives:[h.sg],pipes:[h.Nd],styles:[".container[_ngcontent-%COMP%]{display:grid;align-items:center;margin-top:50px}.cursor-style[_ngcontent-%COMP%]{cursor:pointer}.cursor-style[_ngcontent-%COMP%]:hover{color:gray}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center}@media (max-width: 768px){table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:15px 50px}}"]}),e})();var y=c(855);const O=[{path:"",component:M}];let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[y.Bz.forChild(O)]]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.ez,D]]}),e})()}}]);