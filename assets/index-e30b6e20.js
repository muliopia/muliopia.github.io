import{r as o,j as e,R as T}from"./react-e0c689eb.js";import{c as R}from"./react-dom-ce62a94a.js";import{A as O,a as B,b as z,c as q,d as _,C as Q,e as W,D as H,f as G,g as U,S as $,h as J,i as K,j as V,k as Y,l as X,m as Z,n as ee,o as te,p as se,q as re,r as ie,s as u,t as p,u as g,v as j,B as S,F as D,w as E,x as ae,y as M,z as A,E as f,G as le,H as ne}from"./react-icons-a6b0d0b8.js";import{r as n}from"./react-responsive-6bda77ab.js";import{T as oe}from"./typewriter-effect-246972c6.js";import{_ as b}from"./react-github-calendar-d8e09e37.js";import{C as l,B as P}from"./react-bootstrap-cd1706a1.js";import{P as x}from"./prop-types-2c2fa1d7.js";import{P as ce}from"./react-tsparticles-542e225a.js";import{p as N,D as me,P as de}from"./react-pdf-22f66a7e.js";import{H as xe}from"./react-router-dom-43afe8b3.js";import{a as he,b as m,N as ue}from"./react-router-29a9b759.js";import"./chroma-js-c3a1320b.js";import"./scheduler-765c72db.js";import"./react-activity-calendar-3cfb07c6.js";import"./date-fns-e6a6bc87.js";import"./@babel-e65c6041.js";import"./classnames-4b795b20.js";import"./@restart-06850e83.js";import"./tsparticles-engine-82695a48.js";import"./make-event-props-16b3b610.js";import"./make-cancellable-promise-ec52e768.js";import"./clsx-1229b3e0.js";import"./tiny-invariant-dd7d57d2.js";import"./tiny-warning-f8a39aa6.js";import"./merge-refs-3139c2a8.js";import"./pdfjs-dist-05c93a0f.js";import"./@remix-run-2963c375.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const pe="/assets/m-1cfcf311.png";function ge(){let[t,s]=o.useState(!1);return e.jsx("div",{className:"bg-gradient-to-r from-purple-700 to-green-500 shadow-lg w-full fixed top-0 left-0 z-10 md:bg-gradient-to-r md:from-purple-600 md:to-green-500 sm:bg-blue-600",children:e.jsxs("div",{className:"md:flex items-center justify-between py-4 md:px-6 px-2",children:[e.jsx("div",{className:"font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white",children:e.jsx("span",{className:"text-3xl mr-5 pt-2",children:e.jsx("a",{href:"#/",children:e.jsx("img",{src:pe,alt:"logo",className:"w-10 bg-gray-200 p-1  shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 overflow-hidden"})})})}),e.jsx("div",{onClick:()=>s(!t),className:"text-3xl text-white absolute right-8 top-8 cursor-pointer md:hidden",children:t?e.jsx(O,{}):e.jsx(B,{})}),e.jsxs("ul",{className:`md:flex md:items-center md:pb-0 mt-2 md:mt-2 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${t?"top-20 bg-gradient-to-r from-purple-500 to-green-400 shadow-lg ":"top-[-490px]"}`,children:[e.jsx("li",{className:"md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center",children:e.jsxs("a",{onClick:()=>s(!t),href:"#/",className:"text-white hover:text-lime-300 duration-500 flex items-center gap-2",children:[e.jsx(z,{})," ",e.jsx("span",{children:"Home"})]})}),e.jsx("li",{className:"md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center",children:e.jsxs("a",{onClick:()=>s(!t),href:"#/about",className:"text-white hover:text-lime-300 duration-500 flex items-center gap-2",children:[e.jsx(q,{})," ",e.jsx("span",{children:"About"})]})}),e.jsx("li",{className:"md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center",children:e.jsxs("a",{onClick:()=>s(!t),href:"#/project",className:"text-white hover:text-lime-300 duration-500 flex items-center gap-2",children:[e.jsx(_,{})," ",e.jsx("span",{children:"Projects"})]})}),e.jsx("li",{className:"md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center",children:e.jsxs("a",{onClick:()=>s(!t),href:"#/resume",className:"text-white hover:text-lime-300 duration-500 flex items-center gap-2",children:[e.jsx(Q,{})," ",e.jsx("span",{children:"Resume"})]})}),e.jsx("li",{className:"md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center",children:e.jsxs("a",{onClick:()=>s(!t),href:"#/contact",className:"text-white hover:text-lime-300 duration-500 flex items-center gap-2",children:[e.jsx(W,{})," ",e.jsx("span",{children:"Contact"})]})})]})]})})}const w="/assets/mu-1d33e613.png";function y(){return e.jsx(oe,{options:{strings:["Computer Engineer","Electrical Engineer","Developer","UI/UX Designer","Open Source Contributor","Freelancer"],autoStart:!0,loop:!0,deleteSpeed:150}})}function je(){const t=n.useMediaQuery({query:"(min-width: 1224px)"});return e.jsx("div",{className:"font-roboto bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8",children:t?e.jsxs("div",{className:"flex flex-col pb-12 pt-44",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"text-gray-100 w-[60%] pt-10",children:[e.jsxs("h1",{className:"text-4xl pb-6",children:["Hello! ",e.jsx("span",{children:"👋🏻"})]}),e.jsxs("h1",{className:"text-4xl pb-6",children:["I am",e.jsx("strong",{className:"text-lime-400",children:" Mulugeta Sahil"})]}),e.jsx("div",{className:"text-4xl text-lime-400",children:e.jsx(y,{})})]}),e.jsx("div",{className:"w-[20%] ",children:e.jsx("img",{src:w,className:"rounded-lg",alt:"mu"})})]}),e.jsx("div",{className:"w-full pb-12 pt-36 flex justify-center",children:e.jsxs("div",{className:"w-[80%] pt-10",children:[e.jsxs("h1",{className:"text-gray-100 text-2xl pb-6",children:[e.jsx("span",{children:"Somethings"})," you should Know about me"]}),e.jsxs("p",{className:"text-gray-200 text-xl mx-10 text-justify",children:["I'm in love with the process of learning and figuring things out. Tech enthusiast!!! ",e.jsx("br",{}),e.jsx("br",{}),"I started my programming journey In my second year of studying computer      engineering with C++.       Then continued to learn java eventually As my interest in web development grew mastered JavaScript. ",e.jsx("br",{}),e.jsx("br",{}),"My learning journey underwent a significant shift during my internship at NID, where I had the privilege of learning from some of the best in the field. ",e.jsx("br",{}),e.jsx("br",{}),"I'm highly interested in Machine Learning and Computer vision. Want to continue my learning journey and figure more things out."]})]})})]}):e.jsxs("div",{className:"text-gray-100 pt-56 mb-10",children:[e.jsxs("h1",{className:"text-3xl pb-6",children:["Hello! ",e.jsx("span",{children:"👋🏻"})]}),e.jsxs("h1",{className:"text-3xl pb-6",children:["I am",e.jsx("strong",{className:"text-lime-400",children:" Mulugeta Sahil"})]}),e.jsx("div",{className:"text-xl text-lime-400",children:e.jsx(y,{})}),e.jsx("div",{className:"w-[50%] flex mx-auto mb-28",children:e.jsx("img",{src:w,className:"rounded-sm",alt:"mu"})}),e.jsxs("div",{className:"pb-10",children:[e.jsxs("h1",{className:"text-gray-100 mx-10 text-lg pb-6",children:[e.jsx("span",{className:"text-lime-400",children:"Somethings"})," you should Know about me"]}),e.jsxs("p",{className:"text-gray-200 text-md mx-8 text-left",children:["I'm in love with the process of learning and figuring things out. Tech enthusiast!!! ",e.jsx("br",{}),e.jsx("br",{}),"I started my programming journey In my second year of studying computer engineering with C++. Then continued to learn java eventually As my interest in web development grew mastered JavaScript. ",e.jsx("br",{}),e.jsx("br",{}),"My learning journey underwent a significant shift during my internship at NID, where I had the privilege of learning from some of the best in the field. ",e.jsx("br",{}),e.jsx("br",{}),"I'm highly interested in Machine Learning and Computer vision. Want to continue my learning journey and figure more things out."]})]})]})})}function v(){const t=n.useMediaQuery({query:"(min-width: 1224px)"});return e.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-green-400 p-8",children:[e.jsxs("h1",{className:"text-white text-3xl text-center pb-5",children:["My ",e.jsx("span",{className:"text-lime-600",children:"Tech Stack"})]}),e.jsx("div",{className:"flex items-center pb-12 justify-center",children:e.jsx("div",{className:`grid ${t?"grid-cols-5":"grid-cols-2"} gap-4`,children:[{icon:e.jsx(H,{}),color:"#F7DF1E",bgColor:"#323330"},{icon:e.jsx(G,{}),color:"#8CC84B",bgColor:"#3C873A"},{icon:e.jsx(U,{}),color:"#61DAFB",bgColor:"#20232A"},{icon:e.jsx($,{}),color:"#41B883",bgColor:"#35495E"},{icon:e.jsx(J,{}),color:"#02569B",bgColor:"#E3F2FD"},{icon:e.jsx(K,{}),color:"#F05032",bgColor:"#F5F5F5"},{icon:e.jsx(V,{}),color:"#3776AB",bgColor:"#F0F0F0"},{icon:e.jsx(Y,{}),color:"#FF6F20",bgColor:"#F5F5F5"},{icon:e.jsx(X,{}),color:"#4DB33D",bgColor:"#E3F2FD"},{icon:e.jsx(Z,{}),color:"#00758F",bgColor:"#F5F5F5"},{icon:e.jsx(ee,{}),color:"#0E4B3A",bgColor:"#F5F5F5"},{icon:e.jsx(te,{}),color:"#646CFF",bgColor:"#E3F2FD"},{icon:e.jsx(se,{}),color:"#2496ED",bgColor:"#E3F2FD"},{icon:e.jsx(re,{}),color:"#F24E1E",bgColor:"#F5F5F5"},{icon:e.jsx(ie,{}),color:"#21759B",bgColor:"#F5F5F5"}].map((s,a)=>e.jsx("div",{className:"p-4 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:s.bgColor},children:e.jsx("div",{className:"text-7xl",style:{color:s.color},children:s.icon})},a))})})]})}function F(){const t=n.useMediaQuery({query:"(min-width: 1224px)"});return e.jsx(e.Fragment,{children:t?e.jsxs("div",{className:"flex text-white justify-center flex-wrap pb-12",children:[e.jsxs("div",{className:"p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#007ACC"},children:[e.jsx(u,{className:"text-7xl",style:{color:"#FFFFFF"}})," "]}),e.jsxs("div",{className:"p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#FF6C37"},children:[e.jsx(p,{className:"text-7xl",style:{color:"#FFFFFF"}})," "]}),e.jsxs("div",{className:"p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#00A3E0"},children:[e.jsx(g,{className:"text-7xl",style:{color:"#FFFFFF"}})," "]}),e.jsxs("div",{className:"p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#F5F5F5"},children:[e.jsx(j,{className:"text-7xl",style:{color:"#FCC624"}})," "]})]}):e.jsx("div",{className:"flex text-white justify-center flex-wrap pb-12",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#007ACC"},children:e.jsx(u,{className:"text-7xl",style:{color:"#FFFFFF"}})}),e.jsx("div",{className:"p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#FF6C37"},children:e.jsx(p,{className:"text-7xl",style:{color:"#FFFFFF"}})}),e.jsx("div",{className:"p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#00A3E0"},children:e.jsx(g,{className:"text-7xl",style:{color:"#FFFFFF"}})}),e.jsx("div",{className:"p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg",style:{backgroundColor:"#F5F5F5"},children:e.jsx(j,{className:"text-7xl",style:{color:"#FCC624"}})})]})})})}function C(){const t=n.useMediaQuery({query:"(min-width: 1224px)"});return e.jsx(e.Fragment,{children:t?e.jsxs("div",{className:"bg-gray-150 text-white flex flex-col items-center justify-center pb-12 p-5",children:[e.jsxs("h1",{className:"text-5xl pb-5 text-center",children:["Days I ",e.jsx("strong",{className:"text-lime-600",children:"Code"})]}),e.jsx(b,{username:"muliopia",blockSize:15,blockMargin:5,fontSize:16})]}):e.jsxs("div",{className:"bg-gray-150 text-white flex flex-col items-center justify-center pb-12 p-5",children:[e.jsxs("h1",{className:"text-3xl pb-5 text-center",children:["Days I ",e.jsx("strong",{className:"text-lime-600",children:"Code"})]}),e.jsx("div",{className:"max-w-xs",children:e.jsx(b,{username:"muliopia",blockSize:9,blockMargin:2,fontSize:14})})]})})}function fe(){const t=n.useMediaQuery({query:"(min-width: 1224px)"});return e.jsx("div",{className:"font-poppins bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8",children:t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full pb-12 pt-36 flex justify-center",children:e.jsxs("div",{className:"w-[80%] pt-10",children:[e.jsxs("h1",{className:"text-white text-2xl pb-6",children:["A little about ",e.jsx("span",{className:"text-lime-600",children:"ME"})]}),e.jsxs("p",{className:"text-white text-2xl mb-5 mx-10 text-justify",children:["Hello there, ",e.jsx("span",{className:"px-3 text-lime-500",children:"Mulugeta"})," here. Born in Filakit around North Wollo, Ethiopia. I'm a fresh graduate in Electrical and Computer Engineering from Axum/Dire Dawa University who is in love with programming and problem-solving, specializing in the computer stream.",e.jsx("br",{}),e.jsx("br",{}),"Apart from coding, what do I enjoy?",e.jsx("br",{})," ",e.jsx("br",{})," 👉🏾 Playing basketball",e.jsx("br",{})," 👉🏾 Gaming",e.jsx("br",{})," 👉🏾 Reading books",e.jsx("br",{})," 👉🏾 Traveling",e.jsx("br",{}),e.jsx("br",{}),"I’m eager to leverage my technical skills and enthusiasm for technology in a challenging engineering role."]})]})}),e.jsxs("h1",{className:"bg-gradient-to-r from-purple-600 to-green-500 shadow-lg  text-white text-3xl p-3 text-center rounded",children:["Professional ",e.jsx("span",{className:"text-lime-600",children:"Skillset"})]}),e.jsx(v,{}),e.jsxs("h1",{className:"bg-gradient-to-r from-purple-600 to-green-500 text-white text-3xl mb-8 p-3 text-center rounded",children:[e.jsx("span",{className:"text-lime-600",children:"Tools"})," I use"]}),e.jsx(F,{}),e.jsx(C,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-white text-2xl pt-36 pb-3 text-center",children:["A little about ",e.jsx("span",{className:"text-lime-600",children:"ME"})]}),e.jsxs("p",{className:"text-white text-lg mb-10 mx-6 text-left",children:["Hello there, ",e.jsx("span",{className:"text-lime-500",children:"Mulugeta"})," here. Born in Filakit around North Wollo, Ethiopia. I'm a fresh graduate in Electrical and Computer Engineering from Mekelle/Dire Dawa University who is in love with programming and problem-solving, specializing in the computer stream.",e.jsx("br",{}),e.jsx("br",{}),"Apart from coding, what do I enjoy?",e.jsx("br",{})," ",e.jsx("br",{})," 👉🏾 Playing basketball",e.jsx("br",{})," 👉🏾 Gaming",e.jsx("br",{})," 👉🏾 Reading books",e.jsx("br",{})," 👉🏾 Traveling",e.jsx("br",{}),e.jsx("br",{}),"I’m eager to leverage my technical skills and enthusiasm for technology in a challenging engineering role."]}),e.jsxs("h1",{className:"bg-gradient-to-r from-purple-600 to-green-500 text-white text-2xl p-3 text-center",children:["Professional ",e.jsx("span",{className:"text-lime-600",children:"Skillset"})]}),e.jsx(v,{}),e.jsxs("h1",{className:"bg-gradient-to-r from-purple-600 to-green-500 text-white text-2xl mb-5 p-3 text-center",children:[e.jsx("span",{className:"text-lime-600",children:"Tools"})," I use"]}),e.jsx(F,{}),e.jsx(C,{})]})})}const be="/assets/axum-1451493b.png",Ne="/assets/scanner-0eb3bdfe.png",we="/assets/exitprep-773db52e.png",ye="/assets/gpt api-6e21e1b0.png";function h(t){return e.jsxs(l,{className:"h-[420px] w-[300px] text-white hover:scale-105 transition-transform duration-300 rounded overflow-hidden shadow-lg border border-lime-600 bg-gradient-to-r from-purple-600 to-green-500",children:[e.jsx(l.Img,{src:t.imgPath,alt:"card-img",className:"w-64 object-cover object-center mx-5 my-4 rounded-t"}),e.jsxs(l.Body,{className:"mb-6",children:[e.jsx(l.Title,{className:"font-bold text-xl mb-2",children:t.title}),e.jsx(l.Text,{className:"mb-6 mx-2",children:t.description}),e.jsxs(P,{href:t.demoLink,target:"_blank",className:"bg-slate-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300",children:[e.jsx(S,{className:"mr-2"}),"Preview"]})]})]})}h.propTypes={imgPath:x.string.isRequired,title:x.string.isRequired,description:x.string.isRequired,demoLink:x.string};function ve(){const t=n.useMediaQuery({query:"(min-width: 1224px)"});return e.jsxs("div",{className:"font-barlow bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8",children:[e.jsxs("div",{className:"text-white pt-12 pb-10 text-center",children:[e.jsxs("h1",{className:"text-3xl pb-3",children:["My Recent ",e.jsx("strong",{className:"text-lime-600",children:"Works"})]}),e.jsx("p",{children:"Here are a few projects I have worked on recently."})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:`grid ${t?"grid-cols-3":"grid-cols-1 sm:grid-cols-2"} gap-8`,children:[e.jsx(h,{imgPath:be,title:"Axum",description:"Movie streaming web app",demoLink:"https://github.com/muliopia"}),e.jsx(h,{imgPath:ye,title:"Chat Bot",description:"Chat bot using ChatGPT API",demoLink:"https://github.com/muliopia"}),e.jsx(h,{imgPath:we,title:"Exit",description:"Ethiopian exit exam preparation web app using MERN",demoLink:"https://github.com/muliopia"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(l,{className:"w-full max-w-xs h-[450px] text-white hover:scale-105 transition-transform duration-300 rounded overflow-hidden shadow-lg border border-lime-600 bg-gradient-to-r from-purple-600 to-green-500",children:[e.jsx(l.Img,{src:Ne,alt:"QR Code Scanner",className:"h-48 w-full object-cover object-center"}),e.jsxs(l.Body,{className:"mb-3 mt-6",children:[e.jsx(l.Title,{className:"font-bold text-xl mb-2",children:"v25 QR Code Scanner"}),e.jsx(l.Text,{className:"mb-3 mx-2",children:"Flutter mobile app to scan QR codes version 25"}),e.jsxs(P,{href:"https://github.com/muliopia",target:"_blank",className:"bg-slate-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300",children:[e.jsx(S,{className:"mr-2"}),"Preview"]})]})]})})]})})]})}function Fe(){return n.useMediaQuery({query:"(min-width: 1224px)"}),e.jsx("footer",{className:"bg-gradient-to-r from-purple-600 to-green-500 text-xl text-white py-4 text-center",children:e.jsxs("div",{className:"container mx-auto flex flex-col items-center justify-center",children:[e.jsx("p",{className:"mb-4",children:"Copyright © 2024 Muliopia"}),e.jsxs("div",{className:"inline-flex space-x-4",children:[e.jsx("a",{href:"mailto:mulugetasahil31@gmail.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(D,{className:"text-2xl hover:text-lime-400 transition-colors duration-300"})}),e.jsx("a",{href:"https://wa.me/+251946277434",target:"_blank",rel:"noopener noreferrer",children:e.jsx(E,{className:"text-2xl hover:text-lime-400 transition-colors duration-300"})}),e.jsx("a",{href:"https://t.me/Muliopia1",target:"_blank",rel:"noopener noreferrer",children:e.jsx(ae,{className:"text-2xl hover:text-lime-400 transition-colors duration-300"})}),e.jsx("a",{href:"https://www.linkedin.com/in/muliopia/",children:e.jsx(M,{className:"text-2xl hover:text-lime-400 transition-colors duration-300"})}),e.jsx("a",{href:"https://github.com/muliopia",target:"_blank",rel:"noopener noreferrer",children:e.jsx(A,{className:"text-2xl hover:text-lime-400 transition-colors duration-300"})})]})]})})}function Ce(){return e.jsx(ce,{id:"tsparticles",params:{particles:{number:{value:160,density:{enable:!0,value_area:1500}},line_linked:{enable:!1,opacity:.03},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}const ke="/assets/Mulugeta Resume-a14086db.pdf";N.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${N.version}/pdf.worker.min.js`;const k="https://raw.githubusercontent.com/muliopia/muliopia.github.io/main/assets/Mulugeta%20Resume.pdf";function Se(){const[t,s]=o.useState(100),[a,c]=o.useState(!0);return o.useEffect(()=>{const r=()=>{s(window.innerWidth)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center pt-16 text-white",children:e.jsxs("div",{className:"resume-section w-full max-w-4xl mx-auto shadow-sm p-8 rounded-lg ",children:[e.jsx(Ce,{}),e.jsx("div",{className:"flex justify-center py-5",children:e.jsxs("a",{href:k,target:"_blank",rel:"noopener noreferrer",className:"btn-primary inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-700 hover:bg-lime-600",children:[e.jsx(f,{}),"Download Resume"]})}),e.jsx("div",{className:"resume flex justify-center",children:e.jsx(me,{file:k,onLoadSuccess:()=>c(!1),children:e.jsx(de,{pageNumber:1,renderTextLayer:!1,scale:t>786?1.5:.6})})}),a&&e.jsx("div",{className:"flex justify-center items-center mt-5",children:e.jsx(le,{className:"animate-spin text-6xl text-lime-500"})}),e.jsx("div",{className:"flex justify-center py-5",children:e.jsxs("a",{href:ke,target:"_blank",rel:"noopener noreferrer",className:"btn-primary inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-700 hover:bg-lime-600",children:[e.jsx(f,{}),"Download Resume"]})})]})})}const De=()=>{const[t,s]=o.useState({name:"",email:"",message:""}),a=i=>{const{name:d,value:I}=i.target;s(L=>({...L,[d]:I}))},c=n.useMediaQuery({query:"(min-width: 1224px)"}),r=i=>{i.preventDefault(),console.log("Form submitted:",t),s({name:"",email:"",message:""})};return e.jsx("div",{className:"font-barlow bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8",children:e.jsxs("div",{children:[" ",e.jsxs("h1",{className:`text-white ${c?"text-4xl":"text-3xl"} text-center pb-6`,children:["Contact ",e.jsx("span",{className:"text-lime-600",children:"Me"})]}),e.jsxs("div",{className:"mt-8 text-center",children:[e.jsx("h2",{className:"text-gray-200 text-xl",children:"Contact with me"}),e.jsxs("div",{className:"flex justify-center space-x-6 m-4 mb-8",children:[e.jsx("a",{href:"mailto:mulugetasahil31@gmail.com",className:"text-lime-300 hover:text-lime-400",children:e.jsx(D,{size:24})}),e.jsx("a",{href:"https://wa.me/+251946277434",className:"text-lime-300 hover:text-lime-400",children:e.jsx(E,{size:24})}),e.jsx("a",{href:"https://t.me/Muliopia1",className:"text-lime-300 hover:text-lime-400",children:e.jsx(ne,{size:24})}),e.jsx("a",{href:"https://www.linkedin.com/in/muliopia",className:"text-lime-300 hover:text-lime-400",children:e.jsx(M,{size:24})}),e.jsx("a",{href:"https://github.com/muliopia",className:"text-lime-300 hover:text-lime-400",children:e.jsx(A,{size:24})})]})]}),e.jsx("div",{className:"max-w-lg mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md mb-16 p-6",children:e.jsxs("form",{onSubmit:r,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-white",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:a,required:!0,placeholder:"Your Name",className:"w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-white",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:a,required:!0,placeholder:"example@mail.com",className:"w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"message",className:"block text-white",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:a,required:!0,rows:"5",placeholder:"Your message here",className:"w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"})]}),e.jsx("button",{type:"submit",className:"w-full py-2 bg-lime-600 text-white rounded hover:bg-lime-700 transition duration-200",children:"Send Message"})]})})]})})};function Ee(){const[t,s]=o.useState(!0);return o.useEffect(()=>{const a=setTimeout(()=>{s(!1)},1200);return()=>clearTimeout(a)},[]),e.jsx(xe,{children:e.jsxs("div",{className:"bg-gray-900 bg-cover min-h-screen text-center",id:t?"no-scroll":"scroll",children:[e.jsx(ge,{}),e.jsxs(he,{children:[e.jsx(m,{path:"/",element:e.jsx(je,{})}),e.jsx(m,{path:"/project",element:e.jsx(ve,{})}),e.jsx(m,{path:"/about",element:e.jsx(fe,{})}),e.jsx(m,{path:"/resume",element:e.jsx(Se,{})}),e.jsx(m,{path:"/contact",element:e.jsx(De,{})}),e.jsx(m,{path:"*",element:e.jsx(ue,{to:"/"})})]}),e.jsx(Fe,{})]})})}R.createRoot(document.getElementById("root")).render(e.jsx(T.StrictMode,{children:e.jsx(Ee,{})}));
