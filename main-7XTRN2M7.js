import{a as at}from"./chunk-YAH3A2UZ.js";import{A as it,B as rt,C as st,a as I,d as He,e as Ke,f as $e,g as Ze,l as Je,m as Qe,r as Ye,s as Xe,t as et,u as tt,y as nt,z as ot}from"./chunk-RCIVPRKJ.js";import{a as qe}from"./chunk-N23KSFRB.js";import{$ as _,$a as _e,A as l,C as X,Cb as Ue,D as ee,E as te,Ea as le,F as ne,Fa as G,Gb as Ve,H as oe,Hb as Ge,I as N,Ja as me,Jb as Le,K as f,Ka as de,L as T,La as ue,Lb as We,M as ie,Ma as ge,Mb as Be,Oa as he,Ob as ze,P as R,Pa as fe,Q as re,R as D,Ra as Ce,S as w,Sa as Oe,Ta as be,V as se,Wa as ve,Xa as Pe,Ya as Me,Z as p,Za as we,_ as m,ab as ye,b as q,c as H,ca as ae,cb as Se,d as E,da as F,db as Ee,e as K,ea as j,f as u,h as $,i as k,ib as Te,j as x,jb as Ie,ka as U,kb as ke,l as A,m as O,ma as pe,mb as xe,n as P,nb as Ae,ob as Ne,p as g,pa as ce,q as Z,qb as Re,r as J,sb as De,t as M,tb as Fe,ua as V,ub as je,v as Q,x as h,z as Y}from"./chunk-44MH6WD3.js";import"./chunk-ZTRS6MQZ.js";import"./chunk-7AA6B6AB.js";import"./chunk-WAVX4AJH.js";import"./chunk-G67DLYCP.js";import"./chunk-G3CV3VGG.js";import"./chunk-IEY6ZC2G.js";import"./chunk-MNDBORQJ.js";import"./chunk-7QVI4S4L.js";import"./chunk-4U6PRYVA.js";import"./chunk-6BZ4INXC.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{a as z,g as v}from"./chunk-LNJ3S2LQ.js";var W=(()=>{let t=class t{constructor(n,o){this.compteService=n,this.router=o}canActivate(n,o){return this.compteService.isAgent?!0:(this.router.navigate(["/accueil"]),!1)}};t.\u0275fac=function(o){return new(o||t)(l(I),l(fe))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var pt=[{path:"",redirectTo:"accueil",pathMatch:"full"},{path:"folder/:id",loadComponent:()=>import("./chunk-XWG7PLYU.js").then(e=>e.FolderPage)},{path:"login",loadComponent:()=>import("./chunk-RO4FMR43.js").then(e=>e.LoginPage)},{path:"inscription",loadComponent:()=>import("./chunk-24TJNZCW.js").then(e=>e.InscriptionPage)},{path:"inscription/verification-email",loadComponent:()=>import("./chunk-B7VFNEKC.js").then(e=>e.VerificationEmailPage)},{path:"inscription/create-password",loadComponent:()=>import("./chunk-GXPVQZZ4.js").then(e=>e.CreatePasswordPage)},{path:"accueil",loadComponent:()=>import("./chunk-UZJS5EQA.js").then(e=>e.AccueilPage)},{path:"accueil/quiz/:id",loadComponent:()=>import("./chunk-GNMKKW5J.js").then(e=>e.QuizPage)},{path:"partie/:id",loadComponent:()=>import("./chunk-KZEBHM6M.js").then(e=>e.PartiePage)},{path:"profile",loadComponent:()=>import("./chunk-BMQL34UO.js").then(e=>e.CompteProfilePage)},{path:"modifier/compte",loadComponent:()=>import("./chunk-VZMTHRQL.js").then(e=>e.UpdateInfosPage)},{path:"modifier/password",loadComponent:()=>import("./chunk-PLDQUNUX.js").then(e=>e.UpdatePasswordPage)},{path:"transactions/depot",loadComponent:()=>import("./chunk-Z4CBTXJV.js").then(e=>e.DepotPage)},{path:"transactions/retrait",loadComponent:()=>import("./chunk-A3QMZIL2.js").then(e=>e.RetraitPage)},{path:"transactions/agent/depot",canActivate:[W],loadComponent:()=>import("./chunk-RCE5HDJ2.js").then(e=>e.DepotAgentPage)},{path:"transactions/agent/retrait",canActivate:[W],loadComponent:()=>import("./chunk-AN2AGSLT.js").then(e=>e.RetraitAgentPage)},{path:"accueil/quiz-terminer/:id",loadComponent:()=>import("./chunk-4FK7EVUY.js").then(e=>e.QuizTerminerPage)},{path:"forget-password",loadComponent:()=>import("./chunk-CEA57XMD.js").then(e=>e.ForgetPasswordPage)},{path:"forget-password/change-password",loadComponent:()=>import("./chunk-4Y5EZXVN.js").then(e=>e.ChangerPasswordPage)}];var gt=()=>[0,.5,.85];function ht(e,t){e&1&&(p(0,"ion-button",6),_(1,"ion-spinner"),m())}function ft(e,t){e&1&&(p(0,"ion-button",7)(1,"ion-text"),U(2,"Valide"),m()())}function Ct(e,t){if(e&1){let s=ae();p(0,"ion-content")(1,"form",4),F("submit",function(){ee(s);let o=j();return te(o.onSubmit())}),p(2,"ion-grid")(3,"ion-row")(4,"ion-col"),U(5),m()(),p(6,"ion-row")(7,"ion-col"),_(8,"ion-input",5),m()(),p(9,"ion-col"),R(10,ht,2,0,"ion-button",6)(11,ft,3,0,"ion-button",7),m()()()()}if(e&2){let s=j();f(),w("formGroup",s.formGroup),f(4),pe(" ",s.messageModal," "),f(5),se(s.isLoading?10:11)}}var ct=(()=>{let t=class t{constructor(n,o,i){this.modalCtrl=n,this.webSocketService=o,this.compteService=i,this.appPages=[{title:"Inbox",url:"/folder/inbox",icon:"mail"},{title:"Outbox",url:"/folder/outbox",icon:"paper-plane"},{title:"Favorites",url:"/folder/favorites",icon:"heart"},{title:"Archived",url:"/folder/archived",icon:"archive"},{title:"Trash",url:"/folder/trash",icon:"trash"},{title:"Spam",url:"/folder/spam",icon:"warning"}],this.labels=["Family","Friends","Notes","Work","Travel","Reminders"],this.message="",this.alertButtons=[{text:"Ok",role:"cancel",handler:()=>{this.setOpen(!1)}}],this.isAlertOpen=!1,this.isToastOpen=!1,this.colorToast="",this.iconToast="",this.isModalOpen=!1,this.isLoading=!1,this.toastMessage="",this.messageModal="",this.uniqueID="",this.callbacks={onGetNotification:a=>{let r=JSON.parse(a.body).descriptionClient;this.message=r,this.setOpen(!0)},onConfirmeRetrait:a=>{let r=JSON.parse(a.body);this.uniqueID=r.uniqueID,this.messageModal=r.message,this.isModalOpen=!0},onGetAgentNotification:a=>{let r=JSON.parse(a.body).descriptionAgent;this.message=r,this.setOpen(!0)}},this.formGroup=new we({password:new _e("",[ve.required])}),st({mailOutline:Ye,mailSharp:Xe,paperPlaneOutline:et,paperPlaneSharp:tt,heartOutline:Je,heartSharp:Qe,archiveOutline:He,archiveSharp:Ke,trashOutline:nt,trashSharp:ot,warningOutline:it,warningSharp:rt,bookmarkOutline:$e,bookmarkSharp:Ze})}onSubmit(){if(this.formGroup.markAllAsTouched(),!this.formGroup.invalid){this.isLoading=!0;let n={password:this.formGroup.value.password,uniqueID:this.uniqueID};this.compteService.confirmerRetraitByClient(n).subscribe({next:o=>{this.isLoading=!1,this.message=o.descriptionClient,this.formGroup.reset(),this.isModalOpen=!1,this.setOpen(!0)},error:o=>{this.isLoading=!1;try{this.isModalOpen=!1,this.showToast(o.error.messageClient.contenu,o.error.messageClient.type),this.formGroup.reset()}catch{this.showToast("Verifye koneksyon entenet ou an","error")}}})}}ngOnInit(){this.webSocketService.connectForNotification(this.callbacks)}setOpen(n){this.isAlertOpen=n}showToast(n,o,i){o==="success"?(this.iconToast="checkmark-sharp",this.colorToast="success"):(this.iconToast="close-sharp",this.colorToast="danger"),this.toastMessage=n,this.isToastOpen=!0,setTimeout(()=>{this.closeToast(),i&&i()},5500)}closeToast(){this.isToastOpen=!1}};t.\u0275fac=function(o){return new(o||t)(T(We),T(at),T(I))},t.\u0275cmp=ie({type:t,selectors:[["app-root"]],decls:6,vars:12,consts:[["id","main-content"],["header","Notifikasyon",3,"didDismiss","isOpen","message","buttons"],["position","top",3,"color","isOpen","message","duration","icon"],["handleBehavior","cycle",3,"isOpen","initialBreakpoint","breakpoints"],[3,"submit","formGroup"],["type","password","label","Modpass","label-placement","floating","helperText","Antre on modpass ki valid","errorText","Modpass lan paka rete vid","placeholder","Antre modpass ou","formControlName","password"],["expand","block","type","submit","disabled","true"],["expand","block","type","submit"]],template:function(o,i){o&1&&(p(0,"ion-app"),_(1,"ion-router-outlet",0),p(2,"ion-alert",1),F("didDismiss",function(){return i.setOpen(!1)}),m(),_(3,"ion-toast",2),p(4,"ion-modal",3),R(5,Ct,12,3,"ng-template"),m()()),o&2&&(f(2),w("isOpen",i.isAlertOpen)("message",i.message)("buttons",i.alertButtons),f(),w("color",i.colorToast)("isOpen",i.isToastOpen)("message",i.toastMessage)("duration",5e3)("icon",i.iconToast),f(),w("isOpen",i.isModalOpen)("initialBreakpoint",.85)("breakpoints",ce(11,gt)))},dependencies:[Te,ye,Pe,Me,Se,Ee,Ge,Re,Ve,Le,ze,De,Ue,je,Fe,xe,Ae,le,Ne,ke],styles:["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: var(--ion-item-background, var(--ion-background-color, #fff))}ion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px;--padding-top: 20px;--padding-bottom: 20px}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0}ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin-bottom:30px}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{padding-left:10px}ion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-background-color-step-150, #d7d8da)}ion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:22px;font-weight:600;min-height:20px}ion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:16px;margin-bottom:18px;color:#757575;min-height:26px}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 10px;--padding-end: 10px;border-radius:4px}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]{--background: rgba(var(--ion-color-primary-rgb), .14)}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#616e7e}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:500}ion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom: 20px}ion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0 0}ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{line-height:24px;margin-bottom:20px}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--min-height: 50px}ion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:#73849a}ion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:8px}ion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin-bottom:8px}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:var(--ion-color-medium-shade)}ion-item.selected[_ngcontent-%COMP%]{--color: var(--ion-color-primary)}"]});let e=t;return e})();var lt=(()=>{let t=class t{constructor(n){this.urlService=n}intercept(n,o){let a=this.urlService.exceptionUrls.some(r=>n.url.includes(r));if(console.log(`hasExceptionUrl: ${a}`),!a){let r=localStorage.getItem("token");r&&(console.log("interceptor"),n=n.clone({setHeaders:{Authorization:`Bearer ${r}`,"ngrok-skip-browser-warning":"1"}}))}return o.handle(n)}};t.\u0275fac=function(o){return new(o||t)(l(qe))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let e=t;return e})();var S="Service workers are disabled or not supported by this browser";function Ot(e){return k(()=>K(new Error(e)))}var b=class{serviceWorker;worker;registration;events;constructor(t){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=Ot(S);else{let n=x(t,"controllerchange").pipe(u(()=>t.controller)),o=k(()=>E(t.controller)),i=$(o,n);this.worker=i.pipe(P(C=>!!C)),this.registration=this.worker.pipe(M(()=>t.getRegistration()));let c=x(t,"message").pipe(u(C=>C.data)).pipe(P(C=>C&&C.type)).pipe(J());c.connect(),this.events=c}}postMessage(t,s){return this.worker.pipe(g(1),Q(n=>{n.postMessage(z({action:t},s))})).toPromise().then(()=>{})}postMessageWithOperation(t,s,n){let o=this.waitForOperationCompleted(n),i=this.postMessage(t,s);return Promise.all([i,o]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let s;return typeof t=="string"?s=n=>n.type===t:s=n=>t.includes(n.type),this.events.pipe(P(s))}nextEventOfType(t){return this.eventsOfType(t).pipe(g(1))}waitForOperationCompleted(t){return this.eventsOfType("OPERATION_COMPLETED").pipe(P(s=>s.nonce===t),g(1),u(s=>{if(s.result!==void 0)return s.result;throw new Error(s.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},bt=(()=>{let t=class t{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new q;constructor(n){if(this.sw=n,!n.isEnabled){this.messages=O,this.notificationClicks=O,this.subscription=O;return}this.messages=this.sw.eventsOfType("PUSH").pipe(u(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(u(i=>i.data)),this.pushManager=this.sw.registration.pipe(u(i=>i.pushManager));let o=this.pushManager.pipe(M(i=>i.getSubscription()));this.subscription=A(o,this.subscriptionChanges)}requestSubscription(n){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(S));let o={userVisibleOnly:!0},i=this.decodeBase64(n.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(i.length));for(let r=0;r<i.length;r++)a[r]=i.charCodeAt(r);return o.applicationServerKey=a,this.pushManager.pipe(M(r=>r.subscribe(o)),g(1)).toPromise().then(r=>(this.subscriptionChanges.next(r),r))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(S));let n=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(g(1),M(n)).toPromise()}decodeBase64(n){return atob(n)}};v(t,"\u0275fac",function(o){return new(o||t)(l(b))}),v(t,"\u0275prov",h({token:t,factory:t.\u0275fac}));let e=t;return e})(),vt=(()=>{let t=class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(n){if(this.sw=n,!n.isEnabled){this.versionUpdates=O,this.unrecoverable=O;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(S));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:n},n)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(S));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:n},n)}};v(t,"\u0275fac",function(o){return new(o||t)(l(b))}),v(t,"\u0275prov",h({token:t,factory:t.\u0275fac}));let e=t;return e})();var mt=new Y("");function Pt(e,t,s,n){return()=>{if(!(G(n)&&"serviceWorker"in navigator&&s.enabled!==!1))return;let o=e.get(oe),i=e.get(D);o.runOutsideAngular(()=>{let r=navigator.serviceWorker,d=()=>{var c;return(c=r.controller)==null?void 0:c.postMessage({action:"INITIALIZE"})};r.addEventListener("controllerchange",d),i.onDestroy(()=>{r.removeEventListener("controllerchange",d)})});let a;if(typeof s.registrationStrategy=="function")a=s.registrationStrategy();else{let[r,...d]=(s.registrationStrategy||"registerWhenStable:30000").split(":");switch(r){case"registerImmediately":a=E(null);break;case"registerWithDelay":a=dt(+d[0]||0);break;case"registerWhenStable":let c=H(e.get(D).whenStable());a=d[0]?A(c,dt(+d[0])):c;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${s.registrationStrategy}`)}}o.runOutsideAngular(()=>a.pipe(g(1)).subscribe(()=>navigator.serviceWorker.register(t,{scope:s.scope}).catch(r=>console.error("Service worker registration failed with:",r))))}}function dt(e){return E(null).pipe(Z(e))}function Mt(e,t){return new b(G(t)&&e.enabled!==!1?navigator.serviceWorker:void 0)}var y=class{enabled;scope;registrationStrategy};function B(e,t={}){return X([bt,vt,{provide:mt,useValue:e},{provide:y,useValue:t},{provide:b,useFactory:Mt,deps:[y,N]},{provide:re,useFactory:Pt,deps:[ne,mt,y,N],multi:!0}])}ge(ct,{providers:[{provide:he,useClass:Ie},Be(),Oe(pt,be(Ce)),de(ue()),{provide:me,useClass:lt,multi:!0},B("ngsw-worker.js",{enabled:!V(),registrationStrategy:"registerWhenStable:30000"}),B("ngsw-worker.js",{enabled:!V(),registrationStrategy:"registerWhenStable:30000"})]});