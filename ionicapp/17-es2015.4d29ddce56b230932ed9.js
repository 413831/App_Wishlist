(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uMfO:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",(function(){return p}));var r=n("TEn/"),a=n("ofXK"),o=n("3Pt+"),i=n("HGan"),l=n("tyNb"),s=n("mrSG"),c=n("fXoL"),b=n("/flf"),u=n("VnTo");const d=[{path:"",component:(()=>{class t{constructor(t,e,n){this.wishlist=t,this.router=e,this.alertControl=n}agregarLista(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertControl.create({header:"Crear lista",inputs:[{name:"titulo",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Cancelar")}},{text:"Crear",handler:t=>{if(console.log(t),0==t.titulo.length)return;const e=this.wishlist.crearLista(t.titulo);console.log(e),this.router.navigateByUrl("/tabs/tab1/agregar/"+e)}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(b.a),c.Jb(l.g),c.Jb(r.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-tab1"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],[3,"fullscreen"],[3,"terminada"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.hc(3," Pendientes "),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",1),c.Kb(5,"app-listas",2),c.Lb(),c.Mb(6,"ion-fab",3),c.Mb(7,"ion-fab-button",4),c.Ub("click",(function(){return e.agregarLista()})),c.Kb(8,"ion-icon",5),c.Lb(),c.Lb()),2&t&&(c.bc("translucent",!0),c.zb(4),c.bc("fullscreen",!0),c.zb(1),c.bc("terminada",!1))},directives:[r.k,r.A,r.z,r.h,u.a,r.i,r.j,r.l],styles:[""]}),t})()},{path:"agregar/:listaId",loadChildren:()=>n.e(3).then(n.bind(null,"PNSq")).then(t=>t.AgregarPageModule)}];let h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[l.i.forChild(d)],l.i]}),t})();var f=n("j1ZV");let p=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.B,a.b,o.a,i.a,h,f.a]]}),t})()}}]);