import{a as c}from"./chunk-HB54646I.js";import{D as a,G as s,Va as o}from"./chunk-IPMCES2K.js";var l=(()=>{let r=class r{constructor(t,i){this.http=t,this.urlService=i}getQuizs(t="EN_COURS"){return this.http.get(this.urlService.baseUrl+"/quizs/"+t)}getQuiz(t){return this.http.get(this.urlService.baseUrl+"/quiz/"+t)}askForStartPartie(t){return this.http.get(this.urlService.baseUrl+"/start-partie/quiz/"+t)}getBestPartieByQuiz(t){return this.http.get(this.urlService.baseUrl+"/best-partie/quiz/"+t)}};r.\u0275fac=function(i){return new(i||r)(s(o),s(c))},r.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{l as a};