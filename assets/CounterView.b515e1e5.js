import{d as u,_ as c,a as i,o as l,c as p,b as m,w as d,P as _,e as n,t as a,u as t,F as x,f as C}from"./index.2c1b6240.js";const f=u("counter",{state:()=>({counter:0}),getters:{doubleCount:s=>s.counter*2},actions:{increment(){this.counter++},decrement(){this.counter--}}});const b=C("Counter"),g={class:"mb-4"},y=i({setup(s){const e=f();return(v,o)=>(l(),p(x,null,[m(_,null,{default:d(()=>[b]),_:1}),n("div",null,[n("p",null,"Count: "+a(t(e).counter),1),n("p",g,"Double Count: "+a(t(e).doubleCount),1),n("button",{class:"w-max bg-primary px-4 py-2 text-gray-100 uppercase font-medium",onClick:o[0]||(o[0]=(...r)=>t(e).increment&&t(e).increment(...r))}," Increment "),n("button",{class:"w-max bg-primary px-4 py-2 text-gray-100 uppercase font-medium",onClick:o[1]||(o[1]=(...r)=>t(e).decrement&&t(e).decrement(...r))}," Decrement ")])],64))}});var V=c(y,[["__scopeId","data-v-8e60ea52"]]);export{V as default};