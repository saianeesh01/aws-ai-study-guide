"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[427],{8678:function(e,t,n){var r=n(7294);t.Z=e=>{let{children:t,isFullWidth:n=!1}=e;return r.createElement(r.Fragment,null,r.createElement("div",{style:{margin:"0 auto",maxWidth:n?"100%":"var(--size-content)",padding:n?"0":"var(--size-gutter)"}},r.createElement("main",null,t),!n&&r.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,n){n.d(t,{F:function(){return a}});var r=n(7294);function a(e){let{title:t,description:n=""}=e;const a="AWS AI Study Guide",i=n||"Interactive learning for AWS AI";return r.createElement(r.Fragment,null,r.createElement("title",null,t?`${t} | ${a}`:a),r.createElement("meta",{name:"description",content:i}),r.createElement("meta",{property:"og:title",content:t||a}),r.createElement("meta",{property:"og:description",content:i}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),r.createElement("meta",{name:"twitter:title",content:t||a}),r.createElement("meta",{name:"twitter:description",content:i}))}},3488:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return m}});var r=n(7294),a=n(8678),i=n(9357),o=n(5086);const l=o.default.div.withConfig({displayName:"quiz-chapter-1__QuizWrapper",componentId:"sc-12tqp71-0"})(['background:black;color:#00ff90;font-family:"Courier New",monospace;padding:3rem 2rem;']),c=o.default.div.withConfig({displayName:"quiz-chapter-1__QuestionCard",componentId:"sc-12tqp71-1"})(["margin-bottom:2rem;"]),u=o.default.button.withConfig({displayName:"quiz-chapter-1__Button",componentId:"sc-12tqp71-2"})(["margin-top:1rem;background:#00ff90;color:black;border:none;padding:0.6rem 1.2rem;border-radius:6px;cursor:pointer;&:hover{background:#00cc70;}"]),s=[{question:"Which of the following is NOT a type of ML?",options:["Supervised Learning","Unsupervised Learning","Reinforcement Learning","Structured Learning"],answer:"Structured Learning"},{question:"What is the purpose of inference in ML?",options:["Collect data","Make predictions using a trained model","Improve training speed","Reduce overfitting"],answer:"Make predictions using a trained model"},{question:"Overfitting occurs when...",options:["The model performs well on new data","The model memorizes training data","The model misses patterns","The data is clean"],answer:"The model memorizes training data"}];function m(){const[e,t]=r.useState(0),[n,i]=r.useState(0),[o,m]=r.useState(""),[d,p]=r.useState(!1),g=s[n];return r.createElement(a.Z,null,r.createElement(l,null,r.createElement("h1",null,"📝 Chapter 1 Quiz"),d?r.createElement("h2",null,"🎉 You scored ",e," out of ",s.length):r.createElement(c,null,r.createElement("h2",null,g.question),g.options.map((e=>r.createElement("div",{key:e},r.createElement("label",null,r.createElement("input",{type:"radio",name:"option",value:e,checked:o===e,onChange:()=>m(e)})," ",e)))),r.createElement(u,{onClick:()=>{o===g.answer&&t((e=>e+1)),n+1===s.length?p(!0):(i((e=>e+1)),m(""))},disabled:!o},n+1===s.length?"Finish":"Next"))))}}}]);
//# sourceMappingURL=component---src-pages-quiz-chapter-1-js-6db253f025bf5660b1ff.js.map