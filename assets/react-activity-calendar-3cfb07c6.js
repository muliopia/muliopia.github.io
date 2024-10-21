import{c as oe}from"./chroma-js-c3a1320b.js";import{r as se}from"./date-fns-e6a6bc87.js";import{r as de}from"./react-e0c689eb.js";var I={};Object.defineProperty(I,"__esModule",{value:!0});var ce=oe,d=se,w=de;function W(e){return e&&e.__esModule?e:{default:e}}var A=W(ce),a=W(w);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}const m="react-activity-calendar",_=5,J=2,V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ie={months:V,weekdays:Y,totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}};function ue(){const[e,t]=w.useState("light"),r=n=>t(n.matches?"dark":"light");return w.useEffect(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)");return t(n.matches?"dark":"light"),n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[]),e}const fe="(prefers-reduced-motion: reduce)";function me(){const[e,t]=w.useState(!0);return w.useEffect(()=>{const r=window.matchMedia(fe);t(r.matches);const n=l=>{t(l.matches)};return r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),e}function he(e,t=0){if(e.length===0)return[];const r=ye(e),n=d.parseISO(r[0].date),l=d.getDay(n)===t?n:d.subWeeks(d.nextDay(n,t),1),u=[...Array(d.differenceInCalendarDays(n,l)).fill(void 0),...r];return Array(Math.ceil(u.length/7)).fill(void 0).map((g,p)=>u.slice(p*7,p*7+7))}function ye(e){const t={};for(const r of e)t[r.date]=r;return d.eachDayOfInterval({start:d.parseISO(e[0].date),end:d.parseISO(e[e.length-1].date)}).map(r=>{const n=d.formatISO(r,{representation:"date"});return t[n]?t[n]:{date:n,count:0,level:0}})}function _e(e,t=V){return e.reduce((r,n,l)=>{const u=n.find(C=>C!==void 0);if(!u)throw new Error(`Unexpected error: Week is empty: [${n}].`);const g=t[d.getMonth(d.parseISO(u.date))],p=r[r.length-1];return l===0||p.text!==g?[...r,{x:l,y:0,text:g}]:r},[]).filter((r,n,l)=>n===0?l[1]&&l[1].x-r.x>J:!0)}function v(e,t){return t?`${m}__${e} ${t}`:`${m}__${e}`}function ge(){const e=new Date().getFullYear();return d.eachDayOfInterval({start:new Date(e,0,1),end:new Date(e,11,31)}).map(r=>({date:d.formatISO(r,{representation:"date"}),count:0,level:0}))}const D=Q({light:["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],dark:["hsl(0, 0%, 20%)","hsl(0, 0%, 92%)"]});function Q(e){return e?(pe(e),e.light=e.light??D.light,e.dark=e.dark??D.dark,{light:R(e.light)?e.light:U(e.light),dark:R(e.dark)?e.dark:U(e.dark)}):D}function pe(e){if(typeof e!="object"||e.light===void 0&&e.dark===void 0)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${_} colors respectively.`);if(e.light){const{length:t}=e.light;if(t!==2&&t!==_)throw new Error(`theme.light must contain exactly 2 or ${_} colors, ${t} passed.`)}if(e.dark){const{length:t}=e.dark;if(t!==2&&t!==_)throw new Error(`theme.dark must contain exactly 2 or ${_} colors, ${t} passed.`)}}function R(e){const t=e.find(r=>!A.default.valid(r));if(t)throw new Error(`Invalid color "${t}" passed. All CSS color formats are accepted.`);return e.length===_}function U(e){return A.default.scale(e).mode("lch").colors(_)}function ve(e,t){t===void 0&&(t={});var r=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",r==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var Ee=`.styles-module_container__Zq3Ln {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.styles-module_container__Zq3Ln rect {
  stroke: rgba(0, 0, 0, 0.08);
  stroke-width: 1px;
  shape-rendering: geometricPrecision;
}

@media (prefers-color-scheme: dark) {
  .styles-module_container__Zq3Ln rect {
    stroke: rgba(255, 255, 255, 0.04);
  }
}

.styles-module_scrollContainer__RthI0 {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.styles-module_calendar__-Ozc6 {
  display: block;
  width: max-content;
}

.styles-module_calendar__-Ozc6 text {
  fill: currentColor;
}

.styles-module_calendar__-Ozc6 [data-level='0'] {
  fill: var(--react-activity-calendar-level-0);
}

.styles-module_calendar__-Ozc6 [data-level='1'] {
  fill: var(--react-activity-calendar-level-1);
}

.styles-module_calendar__-Ozc6 [data-level='2'] {
  fill: var(--react-activity-calendar-level-2);
}

.styles-module_calendar__-Ozc6 [data-level='3'] {
  fill: var(--react-activity-calendar-level-3);
}

.styles-module_calendar__-Ozc6 [data-level='4'] {
  fill: var(--react-activity-calendar-level-4);
}

.styles-module_footer__IMos1 {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  white-space: nowrap;
}

.styles-module_legendColors__oZihX {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 3px;
}

@keyframes styles-module_loadingAnimation__Vul35 {
  0% {
    fill: var(--react-activity-calendar-loading);
  }
  50% {
    fill: var(--react-activity-calendar-loading-active);
  }
  100% {
    fill: var(--react-activity-calendar-loading);
  }
}
`,x={container:"styles-module_container__Zq3Ln",scrollContainer:"styles-module_scrollContainer__RthI0",calendar:"styles-module_calendar__-Ozc6",footer:"styles-module_footer__IMos1",legendColors:"styles-module_legendColors__oZihX",loadingAnimation:"styles-module_loadingAnimation__Vul35"};ve(Ee);const X=({data:e,blockMargin:t=4,blockRadius:r=2,blockSize:n=12,colorScheme:l=void 0,eventHandlers:u={},fontSize:g=14,hideColorLegend:p=!1,hideMonthLabels:C=!1,hideTotalCount:N=!1,labels:K=void 0,loading:E=!1,renderBlock:S=void 0,showWeekdayLabels:T=!1,style:G={},theme:H=void 0,totalCount:F=void 0,weekStart:M=0})=>{var Z;const z=Q(H),b=ue(),h=z[l??b],j=!me();if(E&&(e=ge()),e.length===0)return null;const k=d.getYear(d.parseISO((Z=e[0])==null?void 0:Z.date)),$=he(e,M),c=Object.assign({},ie,K),L=C?0:g+2*t;function ee(){return{width:$.length*(n+t)-t,height:L+(n+t)*7-t}}function te(i){return Object.keys(u).reduce((o,s)=>({...o,[s]:f=>{var y;return(y=u[s])==null?void 0:y.call(u,f)(i)}}),{})}function ne(){return $.map((i,o)=>i.map((s,f)=>{if(!s)return null;const y=E&&j?{animation:`${x.loadingAnimation} 1.75s ease-in-out infinite`,animationDelay:`${o*20+f*20}ms`}:void 0,P=a.default.createElement("rect",O({},te(s),{x:0,y:L+(n+t)*f,width:n,height:n,rx:r,ry:r,"data-date":s.date,"data-level":s.level,style:y}));return a.default.createElement(w.Fragment,{key:s.date},S?S(P,s):P)})).map((i,o)=>a.default.createElement("g",{key:o,transform:`translate(${(n+t)*o}, 0)`},i))}function re(){var o,s;if(N&&p)return null;const i=typeof F=="number"?F:e.reduce((f,y)=>f+y.count,0);return a.default.createElement("footer",{className:v("footer",x.footer)},E&&a.default.createElement("div",null," "),!E&&!N&&a.default.createElement("div",{className:v("count")},c.totalCount?c.totalCount.replace("{{count}}",String(i)).replace("{{year}}",String(k)):`${i} activities in ${k}`),!E&&!p&&a.default.createElement("div",{className:v("legend-colors",x.legendColors)},a.default.createElement("span",{style:{marginRight:"0.4em"}},((o=c==null?void 0:c.legend)==null?void 0:o.less)??"Less"),Array(_).fill(void 0).map((f,y)=>a.default.createElement("svg",{width:n,height:n,key:y},a.default.createElement("rect",{width:n,height:n,fill:h[y],rx:r,ry:r}))),a.default.createElement("span",{style:{marginLeft:"0.4em"}},((s=c==null?void 0:c.legend)==null?void 0:s.more)??"More")))}function ae(){return!T&&C?null:a.default.createElement(a.default.Fragment,null,T&&a.default.createElement("g",{className:v("legend-weekday")},$[0].map((i,o)=>{if(o%2===0)return null;const s=(o+M)%7;return a.default.createElement("text",{x:-2*t,y:L+(g/2+t)+(n+t)*o,textAnchor:"end",key:o},c.weekdays?c.weekdays[s]:Y[s])})),!C&&a.default.createElement("g",{className:v("legend-month")},_e($,c.months).map(({text:i,x:o},s,f)=>s===0&&f[1]&&f[1].x-o<=J?null:a.default.createElement("text",{x:(n+t)*o,dominantBaseline:"hanging",key:o},i))))}const{width:B,height:q}=ee(),le={fontSize:g,[`--${m}-level-0`]:h[0],[`--${m}-level-1`]:h[1],[`--${m}-level-2`]:h[2],[`--${m}-level-3`]:h[3],[`--${m}-level-4`]:h[4],...j&&{[`--${m}-loading`]:h[0],[`--${m}-loading-active`]:l==="light"?A.default(h[0]).darken(.3).hex():A.default(h[0]).brighten(.25).hex()}};return a.default.createElement("article",{className:`${m} ${x.container}`,style:{...G,...le}},a.default.createElement("div",{className:v("scroll-container",x.scrollContainer)},a.default.createElement("svg",{width:B,height:q,viewBox:`0 0 ${B} ${q}`,className:v("calendar",x.calendar)},!E&&ae(),ne())),re())},xe=e=>a.default.createElement(X,O({data:[]},e));I.Skeleton=xe;I.default=X;export{I as b};
