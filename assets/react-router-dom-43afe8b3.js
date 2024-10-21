import{r as s,a as p}from"./react-e0c689eb.js";import{R as F}from"./react-router-29a9b759.js";import{c as R}from"./@remix-run-2963c375.js";/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b="startTransition",l=p[b];function I(t){let{basename:h,children:S,future:f,window:T}=t,r=s.useRef();r.current==null&&(r.current=R({window:T,v5Compat:!0}));let e=r.current,[n,i]=s.useState({action:e.action,location:e.location}),{v7_startTransition:a}=f||{},o=s.useCallback(c=>{a&&l?l(()=>i(c)):i(c)},[i,a]);return s.useLayoutEffect(()=>e.listen(o),[e,o]),s.createElement(F,{basename:h,children:S,location:n.location,navigationType:n.action,navigator:e})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(u||(u={}));var m;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{I as H};
