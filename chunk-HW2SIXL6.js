import{a as gn}from"./chunk-G24XFAHU.js";import{a as pn}from"./chunk-S4RFOJO2.js";import{a as dn}from"./chunk-5DFEC7T7.js";import{A as sn,B as mn,C as un,a as N,b as G,c as $,d as V,e as W,f as H,g as J,l as U,m as X,n as Y,o as Z,r as nn,s as en,t as tn,u as on,w as rn,x as an,y as ln,z as cn}from"./chunk-UCMJOY7W.js";import"./chunk-FYVQEZVT.js";import{$ as m,$a as P,Ab as j,Db as F,Ea as x,Eb as Q,Fb as R,K as o,Kb as D,L as _,M as O,Nb as B,P as u,Pb as K,Qa as M,S as c,V as d,X as f,Y as h,Z as e,Za as S,_ as t,a as b,ea as g,ib as z,ka as r,la as C,pb as I,qb as k,rb as E,tb as y,vb as T,wb as A,xb as q,ya as v,yb as w,zb as L}from"./chunk-44MH6WD3.js";import"./chunk-ZTRS6MQZ.js";import"./chunk-7AA6B6AB.js";import"./chunk-WAVX4AJH.js";import"./chunk-G67DLYCP.js";import"./chunk-G3CV3VGG.js";import"./chunk-IEY6ZC2G.js";import"./chunk-MNDBORQJ.js";import"./chunk-7QVI4S4L.js";import"./chunk-4U6PRYVA.js";import"./chunk-6BZ4INXC.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-LNJ3S2LQ.js";var _n=(n,i)=>i.id;function fn(n,i){if(n&1&&m(0,"ion-img",21),n&2){let a=g(2);c("src",a.compte.urlPhotoProfile)}}function hn(n,i){n&1&&m(0,"ion-img",22)}function Cn(n,i){if(n&1&&(e(0,"div",5),u(1,fn,1,1,"ion-img",21)(2,hn,1,0,"ion-img",22),t()),n&2){let a=g();o(),d(a.compte.urlPhotoProfile!=="no-image"?1:2)}}function Pn(n,i){n&1&&(e(0,"div",6)(1,"ion-button",23),r(2,"Konekte'm"),t(),e(3,"ion-button",24),r(4,"Enskri'm"),t()())}function bn(n,i){n&1&&(e(0,"ion-segment-button",25)(1,"ion-label"),r(2,"Tranzaksyon Pou Ajan"),t()())}function On(n,i){if(n&1&&(e(0,"ion-item",26)(1,"ion-avatar",1),m(2,"img",27),t(),e(3,"ion-label"),r(4),t()()),n&2){let a=i.$implicit;c("routerLink","/accueil/quiz/"+a.id),o(4),C(a.titre)}}function vn(n,i){if(n&1&&(e(0,"ion-list"),f(1,On,5,2,"ion-item",26,_n),t()),n&2){let a=g();o(),h(a.quizsEncours)}}function xn(n,i){n&1&&(e(0,"div",14)(1,"span"),r(2,"Poko gen kwiz"),t()())}function Mn(n,i){if(n&1&&(e(0,"ion-item",26)(1,"ion-avatar",1),m(2,"img",27),t(),e(3,"ion-label"),r(4),t()()),n&2){let a=i.$implicit;c("routerLink","/accueil/quiz-terminer/"+a.id),o(4),C(a.titre)}}function Sn(n,i){if(n&1&&(e(0,"ion-list"),f(1,Mn,5,2,"ion-item",26,_n),t()),n&2){let a=g();o(),h(a.quizsTerminer)}}function zn(n,i){n&1&&(e(0,"p"),r(1,"Poko gen kwiz ki fini"),t())}function In(n,i){n&1&&(e(0,"ion-segment-content",28)(1,"ion-list")(2,"ion-item",29),m(3,"ion-icon",18),e(4,"ion-label"),r(5,"Depo Pou Kliyan"),t()(),e(6,"ion-item",30),m(7,"ion-icon",19),e(8,"ion-label"),r(9,"Retre Pou Kliyan"),t()()()()),n&2&&(o(2),c("button",!0),o(4),c("button",!0))}var Bn=(()=>{let i=class i{constructor(l,p,s){this.webSocketService=l,this.compteService=p,this.quizService=s,this.isConnected=!0,this.message="",this.alertButtons=[{text:"Ok",role:"cancel",handler:()=>{this.setOpen(!1)}}],this.compte=new pn,this.isAlertOpen=!1,this.isAgent=!1,this.subscription=new b,this.formGroup=new S({montant:new P,paiement:new P}),this.labels=["Family","Friends","Notes","Work","Travel","Reminders"],un({addCircleOutline:G,addCircleSharp:$,homeOutline:Y,homeSharp:Z,removeCircleOutline:rn,removeCircleSharp:an,mailOutline:nn,mailSharp:en,paperPlaneOutline:tn,paperPlaneSharp:on,heartOutline:U,heartSharp:X,archiveOutline:V,archiveSharp:W,trashOutline:ln,trashSharp:cn,warningOutline:sn,warningSharp:mn,bookmarkOutline:H,bookmarkSharp:J})}ngOnInit(){}ngAfterViewInit(){console.log("akey"),this.subscription.add(this.compteService.ping().subscribe({next:()=>{this.isConnected=!0,this.initCompte(),this.initQuizs(),this.initQuizsTerminer()},error:l=>{this.isConnected=!1,console.log(l)}}))}initQuizs(){this.subscription.add(this.quizService.getQuizs().subscribe({next:l=>{this.quizsEncours=l}}))}initQuizsTerminer(){this.subscription.add(this.quizService.getQuizs("TERMINER").subscribe({next:l=>{this.quizsTerminer=l}}))}initCompte(){this.subscription.add(this.compteService.getCompteAuthenticated().subscribe({next:l=>{this.compte=l,(this.compte.role==="AGENT"||this.compte.role==="ADMIN")&&(this.compteService.isAgent=!0,this.isAgent=!0),this.compteService.isAuth=!0},error:()=>{}}))}cancel(){this.setOpen(!1)}confirm(){this.setOpen(!1)}setOpen(l){this.isAlertOpen=l}onSubmit(){console.log(this.formGroup.value)}ngOnDestroy(){this.subscription.unsubscribe()}};i.\u0275fac=function(p){return new(p||i)(_(dn),_(N),_(gn))},i.\u0275cmp=O({type:i,selectors:[["app-accueil"]],decls:40,vars:10,consts:[["id","main-content"],["slot","start"],[1,"toolbar"],[1,"my-logo"],["src","assets/img/logo.png"],["routerLink","/profile",1,"logo-profile"],[1,"auth-buttons"],[3,"scrollable"],["value","quiz-encours","contentId","quiz-encours"],["value","quiz-terminer","contentId","quiz-terminer"],["value","transactions","contentId","transactions"],["value","transactions-agent","contentId","transactions-agent",4,"ngIf"],["id","quiz-encours"],[4,"ngIf"],[1,"default-message"],["id","quiz-terminer"],["id","transactions"],["lines","none",3,"button"],["slot","start","ios","add-circle-outline","md","add-circle-sharp"],["slot","start","ios","remove-circle-outline","md","remove-circle-sharp"],["id","transactions-agent",4,"ngIf"],[3,"src"],["src","assets/img/default-profile-user.png"],["size","small","routerLink","/login"],["color","light","size","small","routerLink","/inscription"],["value","transactions-agent","contentId","transactions-agent"],["lines","none",3,"routerLink"],["src","assets/img/mathematique_illustration.jpg","alt",""],["id","transactions-agent"],["lines","none","routerLink","/transactions/agent/depot",3,"button"],["lines","none","routerLink","/transactions/agent/retrait",3,"button"]],template:function(p,s){p&1&&(e(0,"div",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1),m(4,"ion-menu-button"),t(),e(5,"div",2)(6,"div",3),m(7,"ion-img",4),t(),u(8,Cn,3,1,"div",5)(9,Pn,5,0,"div",6),t()(),e(10,"ion-segment",7)(11,"ion-segment-button",8)(12,"ion-label"),r(13,"Kwiz ki poko fini"),t()(),e(14,"ion-segment-button",9)(15,"ion-label"),r(16,"Kwiz ki fini"),t()(),e(17,"ion-segment-button",10)(18,"ion-label"),r(19,"Tranzaksyon"),t()(),u(20,bn,3,0,"ion-segment-button",11),t()(),e(21,"ion-content")(22,"ion-segment-view")(23,"ion-segment-content",12),u(24,vn,3,0,"ion-list",13)(25,xn,3,0,"div",14),t(),e(26,"ion-segment-content",15),u(27,Sn,3,0,"ion-list",13)(28,zn,2,0,"p"),t(),e(29,"ion-segment-content",16)(30,"ion-list")(31,"ion-item",17),m(32,"ion-icon",18),e(33,"ion-label"),r(34,"Depoze lajan sou kont ou"),t()(),e(35,"ion-item",17),m(36,"ion-icon",19),e(37,"ion-label"),r(38,"Retire lajan sou kont ou"),t()()()(),u(39,In,10,2,"ion-segment-content",20),t()()()),p&2&&(o(8),d(s.isConnected?8:9),o(2),c("scrollable",!0),o(10),c("ngIf",s.isAgent),o(4),c("ngIf",s.quizsEncours&&s.quizsEncours.length>0),o(),d(s.quizsEncours&&s.quizsEncours.length===0?25:-1),o(2),c("ngIf",s.quizsTerminer),o(),d(s.quizsTerminer&&s.quizsTerminer.length===0?28:-1),o(3),c("button",!0),o(4),c("button",!0),o(4),c("ngIf",s.isAgent))},dependencies:[k,B,q,L,w,A,y,M,x,v,K,T,D,j,E,F,R,Q,I,z],styles:[".my-logo[_ngcontent-%COMP%]{width:90px}.logo-profile[_ngcontent-%COMP%]{width:40px;margin-left:auto;border-radius:50%;overflow:hidden}.toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px}.auth-buttons[_ngcontent-%COMP%]{display:flex}#inscription-btn[_ngcontent-%COMP%]{--color-activated: #fff;--box-shadow: 0 2px 6px 0 rgb(0, 0, 0, .25)}.default-message[_ngcontent-%COMP%]{height:82%;position:relative;color:#aaa9a9}.default-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}#main-content[_ngcontent-%COMP%]{height:100%}ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: var(--ion-item-background, var(--ion-background-color, #fff))}ion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px;--padding-top: 20px;--padding-bottom: 20px}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0}ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin-bottom:30px}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{padding-left:10px}ion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:22px;font-weight:600;min-height:20px}ion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:16px;margin-bottom:18px;color:#757575;min-height:26px}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 10px;--padding-end: 10px;border-radius:4px}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]{--background: rgba(var(--ion-color-primary-rgb), .14)}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#616e7e}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:500}ion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 20px}ion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0 0}ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{line-height:24px;margin-bottom:20px}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--min-height: 50px}ion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:#73849a}ion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:8px}ion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin-bottom:8px}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:var(--ion-color-medium-shade)}ion-item.selected[_ngcontent-%COMP%]{--color: var(--ion-color-primary)}"]});let n=i;return n})();export{Bn as AccueilPage};
