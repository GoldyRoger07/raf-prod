import{a as yt}from"./chunk-DIA63YHE.js";import{C as Ct,a as ht,j as _t}from"./chunk-RCIVPRKJ.js";import"./chunk-N23KSFRB.js";import{$ as v,$a as O,Bb as mt,Cb as ft,D as m,E as f,Ea as Y,Hb as gt,Jb as dt,K as p,L as x,M as b,N as K,P as C,Pa as $,S as u,U as E,Ua as tt,V as k,Va as et,Xa as F,Ya as it,Z as l,Za as nt,_ as a,_a as ot,aa as j,ab as rt,b as T,ba as z,bb as S,ca as y,da as w,ea as c,fa as Q,ga as M,gb as st,ha as P,hb as lt,ia as D,ib as N,ka as g,ma as G,oa as U,qa as q,sb as at,tb as ct,u as L,ub as pt,va as H,w as R,wa as Z,wb as ut,xa as J,y as A,ya as W,za as X}from"./chunk-44MH6WD3.js";import"./chunk-ZTRS6MQZ.js";import"./chunk-7AA6B6AB.js";import"./chunk-WAVX4AJH.js";import"./chunk-G67DLYCP.js";import"./chunk-G3CV3VGG.js";import"./chunk-IEY6ZC2G.js";import"./chunk-MNDBORQJ.js";import"./chunk-7QVI4S4L.js";import"./chunk-4U6PRYVA.js";import"./chunk-6BZ4INXC.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-LNJ3S2LQ.js";var It=r=>({"error-input":r});function Vt(r,n){if(r&1&&(l(0,"span"),g(1),a()),r&2){let s=c(3);p(),G(" ",s.config.separator," ")}}function Tt(r,n){if(r&1){let s=y();j(0),l(1,"input",5,0),w("paste",function(e){m(s);let i=c(2);return f(i.handlePaste(e))})("keyup",function(e){let i=m(s).index,o=c(2);return f(o.onKeyUp(e,i))})("input",function(e){let i=m(s).index,o=c(2);return f(o.onInput(e,i))})("keydown",function(e){let i=m(s).index,o=c(2);return f(o.onKeyDown(e,i))}),a(),C(3,Vt,2,1,"span",6),z()}if(r&2){let s=n.$implicit,t=n.index,e=n.last,i=c(2);p(),E("otp-input ",i.config.inputClass,""),u("pattern",i.config.allowNumbersOnly?"\\d*":"")("type",i.inputType)("placeholder",(i.config==null?null:i.config.placeholder)||"")("ngStyle",i.config.inputStyles)("formControl",i.otpForm.controls[s])("id",i.getBoxId(t))("ngClass",q(11,It,(i.config==null?null:i.config.showError)&&(i.formCtrl==null?null:i.formCtrl.invalid)&&((i.formCtrl==null?null:i.formCtrl.dirty)||(i.formCtrl==null?null:i.formCtrl.touched)))),p(2),u("ngIf",i.config.separator&&!e)}}function bt(r,n){if(r&1){let s=y();l(0,"div",2),w("focusin",function(){m(s);let e=c();return f(e.onFocusIn())})("focusout",function(){m(s);let e=c();return f(e.onFocusOut())}),l(1,"div",3),C(2,Tt,4,13,"ng-container",4),a()()}if(r&2){let s=c();E("ng-otp-input-wrapper wrapper ",s.config.containerClass,""),Q("id","c_",s.componentKey,""),u("ngStyle",s.config.containerStyles),p(2),u("ngForOf",s.controlKeys)}}var h=class{static ifTab(n){return this.ifKey(n,"Tab")}static ifDelete(n){return this.ifKey(n,"Delete;Del")}static ifBackspace(n){return this.ifKey(n,"Backspace")}static ifRightArrow(n){return this.ifKey(n,"ArrowRight;Right")}static ifLeftArrow(n){return this.ifKey(n,"ArrowLeft;Left")}static ifSpacebar(n){return this.ifKey(n,"Spacebar; ")}static ifKey(n,s){return s.split(";").some(e=>e===n.key)}},I=class{static keys(n){return n?Object.keys(n):[]}},B=(()=>{let n=class n{set disabled(t){this.setDisabledState(t)}get inputType(){var t,e;return(t=this.config)!=null&&t.isPasswordInput?"password":(e=this.config)!=null&&e.allowNumbersOnly?"tel":"text"}get controlKeys(){var t;return I.keys((t=this.otpForm)==null?void 0:t.controls)}constructor(t){this.document=t,this.config={length:4},this.onBlur=new T,this.onInputChange=new T,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+new Date().getTime().toString(36),this.destroy$=new T,this.activeFocusCount=0,this.onChange=()=>{},this.onTouched=()=>{},this._isDisabled=!1}ngOnInit(){this.otpForm=new nt({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new O);this.otpForm.valueChanges.pipe(L(this.destroy$)).subscribe(t=>{I.keys(this.otpForm.controls).forEach(e=>{var i=this.otpForm.controls[e].value;i&&i.length>1&&(i.length>=this.config.length?this.setValue(i):this.rebuildValue())})})}setDisabledState(t){this._isDisabled=t,this.otpForm&&(t?this.otpForm.disable({emitEvent:!1}):this.otpForm.enable({emitEvent:!1}))}writeValue(t){this.currentVal=t||null,this.otpForm&&this.currentVal&&this.setValue(this.currentVal)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}onFocusIn(){this.onTouched(),this.activeFocusCount++}onFocusOut(){setTimeout(()=>{this.activeFocusCount--,this.activeFocusCount===0&&(this.onTouched(),this.onBlur.next())},0)}ngAfterViewInit(){if(!this.config.disableAutoFocus){let t=this.document.getElementById(`c_${this.componentKey}`);if(t){let e=t.getElementsByClassName("otp-input")[0];e&&e.focus&&e.focus()}}}getControlName(t){return`ctrl_${t}`}onKeyDown(t,e){var _;let i=this.getBoxId(e-1),o=this.getBoxId(e),d=this.getBoxId(e+1);if(h.ifSpacebar(t))return t.preventDefault(),!1;if(h.ifBackspace(t)){t.target.value?this.clearInput(o,e):(this.clearInput(i,e-1),this.setSelected(i)),this.rebuildValue();return}if(h.ifDelete(t)){t.target.value?this.clearInput(o,e):(this.clearInput(i,e-1),this.setSelected(i)),this.rebuildValue();return}if(this.ifValidKeyCode(t)){t.target.value=t.key;let V=this.getControlName(e);(_=this.otpForm.controls[V])==null||_.setValue(t.key),t.preventDefault(),this.setSelected(d),this.rebuildValue()}}onInput(t,e){let i=this.currentVal?`${this.currentVal}${t.target.value}`:t.target.value;if(this.config.allowNumbersOnly&&!this.validateNumber(i)){t.target.value=null,t.stopPropagation(),t.preventDefault(),this.clearInput(null,e);return}}onKeyUp(t,e){h.ifTab(t)&&(e-=1);let i=this.getBoxId(e+1),o=this.getBoxId(e-1);if(h.ifRightArrow(t)){t.preventDefault(),this.setSelected(i);return}if(h.ifLeftArrow(t)){t.preventDefault(),this.setSelected(o);return}t.target.value}validateNumber(t){return t&&/^[0-9]+$/.test(t)}getBoxId(t){return`otp_${t}_${this.componentKey}`}clearInput(t,e){var o;let i=this.getControlName(e);if((o=this.otpForm.controls[i])==null||o.setValue(null),t){let d=this.document.getElementById(t);d&&d instanceof HTMLInputElement&&(d.value=null)}}setSelected(t){this.focusTo(t);let e=this.document.getElementById(t);e&&e.setSelectionRange&&setTimeout(()=>{e.setSelectionRange(0,1)},0)}ifValidKeyCode(t){var o;let e=t.key;return(o=this.config)!=null&&o.allowNumbersOnly?this.validateNumber(e):/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/^[a-zA-Z0-9%*_\-@#$!]$/.test(e)&&e.length==1}focusTo(t){let e=this.document.getElementById(t);e&&e.focus()}setValue(t){if(!(this.config.allowNumbersOnly&&isNaN(t))){if(this.otpForm.reset(),!t){this.rebuildValue();return}t=t.toString().replace(/\s/g,""),Array.from(t).forEach((e,i)=>{this.otpForm.get(this.getControlName(i))&&this.otpForm.get(this.getControlName(i)).setValue(e)}),this.config.disableAutoFocus||setTimeout(()=>{let e=this.document.getElementById(`c_${this.componentKey}`);var i=t.length<this.config.length?t.length:this.config.length-1;let o=e.getElementsByClassName("otp-input")[i];o&&o.focus&&setTimeout(()=>{o.focus()},1)},0),this.rebuildValue()}}rebuildValue(){var e;let t=null;I.keys(this.otpForm.controls).forEach(i=>{let o=this.otpForm.controls[i].value;if(o){let d=o.length>1,_=!this.config.allowNumbersOnly&&this.config.letterCase&&(this.config.letterCase.toLocaleLowerCase()=="upper"||this.config.letterCase.toLocaleLowerCase()=="lower");o=o[0];let V=_?this.config.letterCase.toLocaleLowerCase()=="upper"?o.toUpperCase():o.toLowerCase():o;_&&V==o?_=!1:o=V,t==null?t=o:t+=o,(d||_)&&this.otpForm.controls[i].setValue(o)}}),this.currentVal!=t&&(this.currentVal=t,this.onChange(t),(e=this.formCtrl)!=null&&e.setValue&&this.formCtrl.setValue(t),this.onInputChange.next(t))}handlePaste(t){let e=t.clipboardData||window.clipboardData;if(e)var i=e.getData("Text");t.stopPropagation(),t.preventDefault(),!(!i||this.config.allowNumbersOnly&&!this.validateNumber(i))&&this.setValue(i)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};n.\u0275fac=function(e){return new(e||n)(x(H))},n.\u0275cmp=b({type:n,selectors:[["ng-otp-input"],["ngx-otp-input"]],inputs:{config:"config",formCtrl:"formCtrl",disabled:"disabled"},outputs:{onBlur:"onBlur",onInputChange:"onInputChange"},features:[U([{provide:tt,useExisting:R(()=>n),multi:!0}])],decls:1,vars:1,consts:[["inp",""],["tabindex","0",3,"class","id","ngStyle","focusin","focusout",4,"ngIf"],["tabindex","0",3,"focusin","focusout","id","ngStyle"],[1,"n-o-c"],[4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"paste","keyup","input","keydown","pattern","type","placeholder","ngStyle","formControl","id","ngClass"],[4,"ngIf"]],template:function(e,i){e&1&&C(0,bt,3,7,"div",1),e&2&&u("ngIf",i.otpForm==null?null:i.otpForm.controls)},dependencies:[N,et,F,st,S,W,J,X,Z],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{margin:0 .51rem}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:first-child{margin-left:0}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:last-child{margin-right:0}.n-o-c[_ngcontent-%COMP%]{display:flex;align-items:center}.error-input[_ngcontent-%COMP%]{border-color:red}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]});let r=n;return r})(),wt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=K({type:n}),n.\u0275inj=A({imports:[B]});let r=n;return r})();var Ot=["otpInput"],St=["timer"];function Nt(r,n){r&1&&v(0,"ion-progress-bar",4)}function Et(r,n){if(r&1){let s=y();l(0,"p"),g(1,"Apre "),l(2,"app-timer",15,1),w("timerComplete",function(){m(s);let e=c();return f(e.onTimerFinished())}),a(),g(4," wap ka mande revoye on lot kod"),a()}}function kt(r,n){if(r&1){let s=y();l(0,"p"),g(1,"ou pa resevwa kod lan? "),l(2,"ion-text",16),w("click",function(){m(s);let e=c();return f(e.onClickResendCode())}),g(3,"Revoye kod lan"),a()()}}var Yt=(()=>{let n=class n{constructor(t,e){this.compteService=t,this.router=e,this.otpInputConfig={length:6,allowNumbersOnly:!0,inputClass:"my-otp-input"},this.isToastOpen=!1,this.toastMessage="",this.codeVerification=new O,this.isTimerRunning=!0,this.isLoading=!1,Ct({closeSharp:_t}),this.codeVerification.valueChanges.subscribe(i=>{i!==null&&i.length===6&&(this.isLoading=!0,this.compteService.verifierCode(i).subscribe({next:()=>{this.isLoading=!1,this.otpInput.setValue(null),localStorage.getItem("context")==="changerPassword"?this.router.navigate(["/forget-password/change-password"]):this.router.navigate(["/inscription/create-password"])},error:o=>{this.isLoading=!1,this.otpInput.setValue(null);try{this.toastMessage=o.error.message.contenu,this.isToastOpen=!0,setTimeout(()=>{this.isToastOpen=!1,o.error.message.codeError===1&&this.router.navigate(["/inscription"])},5500)}catch{this.toastMessage="Verifye koneksyon entenet ou an",this.isToastOpen=!0}}}))})}ngAfterViewInit(){this.timer.timerLeft=30,this.timer.startTimer()}onTimerFinished(){this.isTimerRunning=!1}onClickResendCode(){this.compteService.resendCodeVerification(),this.isTimerRunning=!0,setTimeout(()=>{this.timer.timerLeft=30,this.timer.startTimer()},100)}};n.\u0275fac=function(e){return new(e||n)(x(ht),x($))},n.\u0275cmp=b({type:n,selectors:[["app-verification-email"]],viewQuery:function(e,i){if(e&1&&(M(Ot,5),M(St,5)),e&2){let o;P(o=D())&&(i.otpInput=o.first),P(o=D())&&(i.timer=o.first)}},decls:30,vars:10,consts:[["otpInput",""],["timer",""],[3,"forceOverscroll","fullscreen"],[1,"center"],["type","indeterminate"],[1,"max-content-w"],[3,"fixed"],[1,"ion-justify-content-center"],["size","6"],["src","assets/img/logo.png"],["size","11"],[1,"title"],[1,"sub-title"],[3,"formControl","config"],["color","danger","position","top","icon","close-sharp",3,"isOpen","message","duration"],[3,"timerComplete"],["color","primary",3,"click"]],template:function(e,i){e&1&&(l(0,"ion-content",2)(1,"div",3),C(2,Nt,1,0,"ion-progress-bar",4),l(3,"div",5)(4,"ion-grid",6)(5,"ion-row",7)(6,"ion-col",8),v(7,"ion-img",9),a()(),l(8,"ion-row",7)(9,"ion-col",10)(10,"div",11),g(11," Verifye imel Ou "),a()()(),l(12,"ion-row",7)(13,"ion-col",10)(14,"div",12)(15,"ion-text"),g(16,"Nou voye on kod Verifikasyon pou ou sou imel lan"),a()()()(),l(17,"ion-row")(18,"ion-col")(19,"form")(20,"ion-grid")(21,"ion-row")(22,"ion-col"),v(23,"ng-otp-input",13,0),a()(),l(25,"ion-row")(26,"ion-col"),C(27,Et,5,0,"p")(28,kt,4,0,"p"),a()()()()()()()()(),v(29,"ion-toast",14),a()),e&2&&(u("forceOverscroll",!1)("fullscreen",!0),p(2),k(i.isLoading?2:-1),p(2),u("fixed",!0),p(19),u("formControl",i.codeVerification)("config",i.otpInputConfig),p(4),k(i.isTimerRunning?27:28),p(2),u("isOpen",i.isToastOpen)("message",i.toastMessage)("duration",5e3))},dependencies:[mt,dt,N,rt,F,it,S,gt,ut,at,ft,pt,ct,Y,lt,ot,wt,B,yt],styles:["ion-progress-bar[_ngcontent-%COMP%]{position:fixed;top:0;left:0}"]});let r=n;return r})();export{Yt as VerificationEmailPage};
