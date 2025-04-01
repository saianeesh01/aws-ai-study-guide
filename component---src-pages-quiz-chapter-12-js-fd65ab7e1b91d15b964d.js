"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[208],{8678:function(e,t,a){var n=a(7294);t.Z=e=>{let{children:t,isFullWidth:a=!1}=e;return n.createElement(n.Fragment,null,n.createElement("div",{style:{margin:"0 auto",maxWidth:a?"100%":"var(--size-content)",padding:a?"0":"var(--size-gutter)"}},n.createElement("main",null,t),!a&&n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,a){a.d(t,{F:function(){return i}});var n=a(7294);function i(e){let{title:t,description:a=""}=e;const i="AWS AI Study Guide",r=a||"Interactive learning for AWS AI";return n.createElement(n.Fragment,null,n.createElement("title",null,t?`${t} | ${i}`:i),n.createElement("meta",{name:"description",content:r}),n.createElement("meta",{property:"og:title",content:t||i}),n.createElement("meta",{property:"og:description",content:r}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),n.createElement("meta",{name:"twitter:title",content:t||i}),n.createElement("meta",{name:"twitter:description",content:r}))}},5092:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o.F},default:function(){return u}});var n=a(5785),i=a(7294),r=a(8678),o=a(9357),s=a(5086),l=a(4160);const c=s.default.div.withConfig({displayName:"quiz-chapter-12__Wrapper",componentId:"sc-1hbhs2n-0"})(['background:black;color:#00ff90;font-family:"Courier New",monospace;padding:3rem 2rem;min-height:100vh;h1{margin-bottom:2rem;}.question{margin-bottom:2rem;}button{background:#00ff90;color:black;border:none;padding:0.5rem 1rem;margin-top:1rem;margin-right:1rem;border-radius:6px;cursor:pointer;font-weight:bold;transition:background 0.3s ease;&:hover{background:#00cc70;}}.feedback{margin-top:1rem;font-weight:bold;}.review{margin-top:2rem;background:#111;padding:1rem;border-radius:10px;border:1px solid #00ff90;}.correct{color:#00ff90;}.wrong{color:red;}.button-nav{margin-top:2rem;display:flex;flex-wrap:wrap;gap:1rem;a,button{background:#00ff90;color:black;font-weight:bold;border:none;padding:0.6rem 1.2rem;border-radius:6px;text-decoration:none;cursor:pointer;transition:background 0.3s ease;&:hover{background:#00cc70;}}}']),d=[{question:"What AWS tool helps detect bias in ML models?",options:["SageMaker Ground Truth","Clarify","Forecast","Comprehend"],answer:"Clarify",explanation:"SageMaker Clarify provides bias detection and explainability features."},{question:"Why is fairness important in AI?",options:["To increase inference speed","To reduce storage costs","To avoid discrimination","To improve UI design"],answer:"To avoid discrimination",explanation:"Unfair models can negatively impact users and lead to legal/ethical issues."},{question:"You’re using biased historical data for predictions. What should you do?",options:["Ignore it","Add random noise","Perform data audit","Retrain the model"],answer:"Perform data audit",explanation:"Understanding bias in the dataset is the first step to mitigating it."},{question:"What is explainability in ML used for?",options:["Improving accuracy","Understanding model decisions","Reducing latency","Encrypting data"],answer:"Understanding model decisions",explanation:"It allows stakeholders to trust and verify model behavior."},{question:"Which AWS service supports fairness monitoring and bias reports?",options:["SageMaker Pipelines","SageMaker Clarify","Textract","Polly"],answer:"SageMaker Clarify",explanation:"Clarify checks for bias in both data and model output."},{question:"What is SHAP in AI explainability?",options:["A security protocol","A translation tool","A visualization method","A feature attribution method"],answer:"A feature attribution method",explanation:"SHAP explains predictions by assigning feature importance values."},{question:"What is individual fairness?",options:["Privacy guarantees","Treating similar people similarly","Encrypting inputs","Model transparency"],answer:"Treating similar people similarly",explanation:"It ensures fairness at the individual level, not just across groups."},{question:"What is the danger of optimizing only for accuracy?",options:["Too much fairness","Slow inference","Ignoring fairness and minority errors","Bias is removed"],answer:"Ignoring fairness and minority errors",explanation:"A high accuracy may still hide unfair treatment of smaller groups."},{question:"Which data factor is key to fairness?",options:["Data size","Cloud region","Data diversity","Data age"],answer:"Data diversity",explanation:"Training data must represent all groups to avoid bias."},{question:"How does bias affect ML models?",options:["Speeds up inference","Improves generalization","Causes unfair predictions","Improves validation accuracy"],answer:"Causes unfair predictions",explanation:"Bias results in models that systematically favor or disadvantage groups."},{question:"A job screening model rejects female candidates disproportionately. What is likely the cause?",options:["Overfitting","Feature scaling","Bias in training data","Too many hidden layers"],answer:"Bias in training data",explanation:"Historical hiring data may reflect societal bias, which the model learns."},{question:"A bank is questioned about how its credit model works. What feature would help?",options:["Explainability","Hyperparameter tuning","Early stopping","CloudWatch"],answer:"Explainability",explanation:"Explainable AI techniques justify predictions to users and regulators."},{question:"A social app makes recommendations that favor one group. What tool helps identify this?",options:["Textract","Personalize","Clarify","GuardDuty"],answer:"Clarify",explanation:"Clarify provides group-wise fairness reports to detect bias."},{question:"An AI-generated loan approval system is audited. What feature proves it was fair?",options:["Model accuracy","CloudFormation templates","Bias reports from Clarify","Notebook instance logs"],answer:"Bias reports from Clarify",explanation:"Clarify can track training and inference fairness statistics."},{question:"A hospital uses ML to prioritize patients but skips gender as a feature. Is this enough?",options:["Yes, always fair","No, indirect bias may remain","Yes, if using AutoML","Yes, if encrypted"],answer:"No, indirect bias may remain",explanation:"Other correlated variables can still cause indirect bias."},{question:"What AWS method ensures your model doesn’t memorize sensitive data?",options:["ReLU","Batch inference","Differential privacy","Lambda functions"],answer:"Differential privacy",explanation:"Adds noise to protect individual records while training."},{question:"Your model shows high bias during evaluation. What next?",options:["Ship it","Use more epochs","Add dropout","Rebalance and clean training data"],answer:"Rebalance and clean training data",explanation:"Unbiased, diverse data is critical to fairness."},{question:"You release an ML model and want users to understand its limits. What should you publish?",options:["CloudWatch metrics","Encryption keys","Model cards","IAM policies"],answer:"Model cards",explanation:"Model cards describe how a model was trained and its limitations."},{question:"Which principle ensures ethical accountability in AI decisions?",options:["Low latency","Differential inference","Transparency","CloudTrail logging"],answer:"Transparency",explanation:"Transparency helps users and auditors trust the AI system."},{question:"How can you prevent models from reflecting real-world inequalities?",options:["Use fewer features","Avoid validation","Introduce fairness checks","Retrain often"],answer:"Introduce fairness checks",explanation:"Bias and fairness must be tested at every ML pipeline stage."}];function u(){const[e]=i.useState((()=>{return e=d,(0,n.Z)(e).sort((()=>Math.random()-.5));var e})),[t,a]=i.useState(0),[o,s]=i.useState(null),[u,p]=i.useState(0),[m,f]=i.useState(!1),[g,h]=i.useState([]),y=e[t];return i.createElement(r.Z,null,i.createElement(c,null,i.createElement("h1",null,"📝 Quiz: Chapter 12:  Computer Vision with AWS (Rekognition, Textract)"),m?i.createElement("div",null,i.createElement("h2",null,"✅ Your Score: ",u," / ",e.length),i.createElement("p",null,u>=.8*e.length?"🎉 Awesome job!":"📚 Review and try again!"),i.createElement("button",{onClick:()=>{a(0),s(null),p(0),h([]),f(!1)}},"🔁 Retry Quiz"),i.createElement("div",{className:"review"},i.createElement("h3",null,"📝 Review:"),g.map(((e,t)=>i.createElement("div",{key:t},i.createElement("p",null,i.createElement("strong",null,"Q",t+1,":")," ",e.question),i.createElement("p",null,"Your Answer:"," ",i.createElement("span",{className:e.selected===e.answer?"correct":"wrong"},e.selected)),i.createElement("p",null,"Correct Answer: ",e.answer),i.createElement("p",null,i.createElement("em",null,"🧠 ",e.explanation)),i.createElement("hr",null))))),i.createElement("div",{className:"button-nav"},i.createElement(l.rU,{to:"/chapter-12"},"← Back to Chapter 12"),i.createElement(l.rU,{to:"/"},"🏠 Home"))):i.createElement("div",{className:"question"},i.createElement("p",null,i.createElement("strong",null,"Q",t+1,":")," ",y.question),y.options.map((e=>i.createElement("div",{key:e},i.createElement("button",{onClick:()=>{return s(t=e),h((e=>[].concat((0,n.Z)(e),[{...y,selected:t}]))),void(t===y.answer&&p((e=>e+1)));var t},disabled:null!==o},e)))),o&&i.createElement("p",{className:"feedback"},o===y.answer?"✅ Correct!":`❌ Incorrect. Correct: ${y.answer}`),o&&i.createElement("button",{onClick:()=>{t+1<e.length?(a((e=>e+1)),s(null)):f(!0)}},"Next"))))}}}]);
//# sourceMappingURL=component---src-pages-quiz-chapter-12-js-fd65ab7e1b91d15b964d.js.map