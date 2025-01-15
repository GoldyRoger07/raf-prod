import{a as K}from"./chunk-IABGB7DL.js";import{C as z,a as R,h as U,j as H}from"./chunk-RCIVPRKJ.js";import"./chunk-N23KSFRB.js";import{$ as a,$a as d,Cb as j,Ea as b,Gb as F,Hb as L,Ib as q,Jb as V,K as p,Kb as B,L as u,M as f,Ob as D,P as w,Pa as T,S as l,V as v,Wa as m,Xa as P,Ya as y,Z as t,Za as S,_ as r,a as h,ab as C,cb as E,da as g,db as k,ib as I,ka as c,lb as G,qb as x,rb as M,sb as N,tb as _,ub as O,vb as A}from"./chunk-44MH6WD3.js";import"./chunk-ZTRS6MQZ.js";import"./chunk-7AA6B6AB.js";import"./chunk-WAVX4AJH.js";import"./chunk-G67DLYCP.js";import"./chunk-G3CV3VGG.js";import"./chunk-IEY6ZC2G.js";import"./chunk-MNDBORQJ.js";import"./chunk-7QVI4S4L.js";import"./chunk-4U6PRYVA.js";import"./chunk-6BZ4INXC.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-LNJ3S2LQ.js";function Z(s,i){s&1&&(t(0,"ion-button",8),a(1,"ion-spinner"),r())}function $(s,i){s&1&&(t(0,"ion-button",9)(1,"ion-text"),c(2,"Chanje"),r()())}var ao=(()=>{let i=class i{constructor(n,o){this.compteService=n,this.router=o,this.formGroup=new S({ancienPassword:new d("",[m.required]),nouveauPassword:new d("",[m.required,m.minLength(8),m.pattern("^(?=\\S*[a-zA-Z])(?=\\S*[0-9])\\S*$")]),confirmPassword:new d("",[m.required])},{validators:K("nouveauPassword","confirmPassword")}),this.nouveauPasswordErrorText="Novo modpass la paka rete vid",this.confirmPasswordErrorText="Modpass konfimasyon an paka rete vid",this.isLoading=!1,this.toastColor="",this.isToastOpen=!1,this.toastMessage="",this.toastIcon="",this.subscription=new h,z({checkmarkSharp:U,closeSharp:H}),this.subscription.add(this.formGroup.valueChanges.subscribe(()=>{this.formGroup.invalid&&(this.formGroup.touched||this.formGroup.dirty)&&(this.formGroup.controls.nouveauPassword.hasError("required")&&(this.nouveauPasswordErrorText="Nouvo modpass lan paka rete vid"),this.formGroup.controls.nouveauPassword.hasError("pattern")&&(this.nouveauPasswordErrorText="Nouvo modpass sa pa valid"),this.formGroup.controls.nouveauPassword.hasError("minlength")&&(this.nouveauPasswordErrorText="Modpass lan dwe gen pou pi piti 8 karakte"),this.formGroup.controls.confirmPassword.hasError("required")&&(this.confirmPasswordErrorText="Modpass konfimasyon an paka rete vid"),this.formGroup.controls.confirmPassword.hasError("passwordmismatch")&&(this.confirmPasswordErrorText="Modpass yo pa dwe diferan"))}))}ngOnInit(){}showToast(n,o,e){o==="success"?(this.toastIcon="checkmark-sharp",this.toastColor="success"):(this.toastIcon="close-sharp",this.toastColor="danger"),this.toastMessage=n,this.isToastOpen=!0,setTimeout(()=>{this.closeToast(),e&&e()},3500)}closeToast(){this.isToastOpen=!1}onSubmit(){if(this.formGroup.markAllAsTouched(),!this.formGroup.invalid){this.isLoading=!0;let n=this.formGroup.value;this.subscription.add(this.compteService.changerPassword(n).subscribe({next:o=>{this.isLoading=!1,this.formGroup.reset(),this.showToast(o.message.contenu,o.message.type)},error:o=>{this.isLoading=!1;try{this.showToast(o.error.message.contenu,o.error.message.type,()=>{o.error.message.codeError===1&&(this.formGroup.reset(),this.router.navigate(["/login"]))})}catch{this.showToast("Verifye koneksyon entenet ou an","error")}}}))}}ngOnDestroy(){this.subscription.unsubscribe()}};i.\u0275fac=function(o){return new(o||i)(u(R),u(T))},i.\u0275cmp=f({type:i,selectors:[["app-update-password"]],decls:24,vars:9,consts:[[1,"ion-page"],["slot","start"],["defaultHref","/accueil"],[3,"submit","formGroup"],["formControlName","ancienPassword","type","password","label","Ansyen Modpass","label-placement","floating","placeholder","Antre ansyen modpass la","helperText","Sa ap pemet nou pwotoje kont ou an pi byen","errorText","Ansyen modpass la paka rete vid"],["formControlName","nouveauPassword","type","password","label","Nouvo Modpass","label-placement","floating","placeholder","Antre nouvo modpass la","helperText","Sa ap pemet nou pwotoje kont ou an pi byen",3,"errorText"],["formControlName","confirmPassword","type","password","label","Konfime Modpass la","label-placement","floating","placeholder","Antre nouvo modpass la anko","helperText","Sa ap pemet nou pwotoje kont ou an pi byen",3,"errorText"],[1,"last-ion-row"],["expand","block","type","submit","disabled","true"],["expand","block","type","submit"],["position","top",3,"color","isOpen","message","duration","icon"]],template:function(o,e){o&1&&(t(0,"div",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1),a(4,"ion-back-button",2),r(),t(5,"ion-title"),c(6,"Chanje Modpass"),r()()(),t(7,"ion-content")(8,"form",3),g("submit",function(){return e.onSubmit()}),t(9,"ion-grid")(10,"ion-row")(11,"ion-col"),a(12,"ion-input",4),r()(),t(13,"ion-row")(14,"ion-col"),a(15,"ion-input",5),r()(),t(16,"ion-row")(17,"ion-col"),a(18,"ion-input",6),r()(),t(19,"ion-row",7)(20,"ion-col"),w(21,Z,2,0,"ion-button",8)(22,$,3,0,"ion-button",9),r()()()(),a(23,"ion-toast",10),r()()),o&2&&(p(8),l("formGroup",e.formGroup),p(7),l("errorText",e.nouveauPasswordErrorText),p(3),l("errorText",e.confirmPasswordErrorText),p(3),v(e.isLoading?21:22),p(2),l("color",e.toastColor)("isOpen",e.isToastOpen)("message",e.toastMessage)("duration",3e3)("icon",e.toastIcon))},dependencies:[V,D,L,F,x,I,C,P,y,E,k,N,j,O,G,M,_,A,q,B,b],styles:["form[_ngcontent-%COMP%]{height:100%}ion-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.last-ion-row[_ngcontent-%COMP%]{margin-top:auto}"]});let s=i;return s})();export{ao as UpdatePasswordPage};
