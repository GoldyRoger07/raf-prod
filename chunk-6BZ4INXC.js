var f=(e,n)=>{e.componentOnReady?e.componentOnReady().then(t=>n(t)):c(()=>n(e))},h=e=>e.componentOnReady!==void 0,u=(e,n=[])=>{let t={};return n.forEach(i=>{e.hasAttribute(i)&&(e.getAttribute(i)!==null&&(t[i]=e.getAttribute(i)),e.removeAttribute(i))}),t},d=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],m=(e,n)=>{let t=d;return n&&n.length>0&&(t=t.filter(i=>!n.includes(i))),u(e,t)},w=(e,n,t,i)=>{var a;if(typeof window<"u"){let o=window,r=(a=o==null?void 0:o.Ionic)===null||a===void 0?void 0:a.config;if(r){let s=r.get("_ael");if(s)return s(e,n,t,i);if(r._ael)return r._ael(e,n,t,i)}}return e.addEventListener(n,t,i)},b=(e,n,t,i)=>{var a;if(typeof window<"u"){let o=window,r=(a=o==null?void 0:o.Ionic)===null||a===void 0?void 0:a.config;if(r){let s=r.get("_rel");if(s)return s(e,n,t,i);if(r._rel)return r._rel(e,n,t,i)}}return e.removeEventListener(n,t,i)},v=(e,n=e)=>e.shadowRoot||n,c=e=>typeof __zone_symbol__requestAnimationFrame=="function"?__zone_symbol__requestAnimationFrame(e):typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e),g=e=>!!e.shadowRoot&&!!e.attachShadow,p=e=>{if(e.focus(),e.classList.contains("ion-focusable")){let n=e.closest("ion-app");n&&n.setFocus([e])}};var y=(e,n,t)=>Math.max(e,Math.min(n,t));var E=e=>{if(e){let n=e.changedTouches;if(n&&n.length>0){let t=n[0];return{x:t.clientX,y:t.clientY}}if(e.pageX!==void 0)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}};var _=(e,n)=>{let t=e._original||e;return{_original:e,emit:l(t.emit.bind(t),n)}},l=(e,n=0)=>{let t;return(...i)=>{clearTimeout(t),t=setTimeout(e,n,...i)}},A=(e,n)=>{if(e!=null||(e={}),n!=null||(n={}),e===n)return!0;let t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(let i of t)if(!(i in n)||e[i]!==n[i])return!1;return!0};export{f as a,h as b,u as c,m as d,w as e,b as f,v as g,c as h,g as i,p as j,y as k,E as l,_ as m,A as n};
