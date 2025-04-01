"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[619],{8678:function(e,t,n){var a=n(7294);t.Z=e=>{let{children:t,isFullWidth:n=!1}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{margin:"0 auto",maxWidth:n?"100%":"var(--size-content)",padding:n?"0":"var(--size-gutter)"}},a.createElement("main",null,t),!n&&a.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,n){n.d(t,{F:function(){return r}});var a=n(7294);function r(e){let{title:t,description:n=""}=e;const r="AWS AI Study Guide",o=n||"Interactive learning for AWS AI";return a.createElement(a.Fragment,null,a.createElement("title",null,t?`${t} | ${r}`:r),a.createElement("meta",{name:"description",content:o}),a.createElement("meta",{property:"og:title",content:t||r}),a.createElement("meta",{property:"og:description",content:o}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),a.createElement("meta",{name:"twitter:title",content:t||r}),a.createElement("meta",{name:"twitter:description",content:o}))}},4557:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return d}});var a=n(5785),r=n(7294),o=n(8678),i=n(9357),s=n(5086),l=n(4160);const c=s.default.div.withConfig({displayName:"quiz-chapter-11__Wrapper",componentId:"sc-nu5ezh-0"})(['background:black;color:#00ff90;font-family:"Courier New",monospace;padding:3rem 2rem;min-height:100vh;h1{margin-bottom:2rem;}.question{margin-bottom:2rem;}button{background:#00ff90;color:black;border:none;padding:0.5rem 1rem;margin-top:1rem;margin-right:1rem;border-radius:6px;cursor:pointer;font-weight:bold;transition:background 0.3s ease;&:hover{background:#00cc70;}}.feedback{margin-top:1rem;font-weight:bold;}.review{margin-top:2rem;background:#111;padding:1rem;border-radius:10px;border:1px solid #00ff90;}.correct{color:#00ff90;}.wrong{color:red;}.button-nav{margin-top:2rem;display:flex;flex-wrap:wrap;gap:1rem;a,button{background:#00ff90;color:black;font-weight:bold;border:none;padding:0.6rem 1.2rem;border-radius:6px;text-decoration:none;cursor:pointer;transition:background 0.3s ease;&:hover{background:#00cc70;}}}']),u=[{question:"What AWS service provides encryption for ML data?",options:["IAM","VPC","KMS","Lex"],answer:"KMS",explanation:"AWS Key Management Service helps secure data using encryption keys."},{question:"You want to restrict access to a model endpoint. What should you use?",options:["S3 policy","IAM role","API Gateway","Security Group"],answer:"IAM role",explanation:"IAM roles control access to AWS resources, including SageMaker endpoints."},{question:"A company wants to log who accessed the model API. What should be enabled?",options:["CloudWatch","KMS","CloudTrail","Lex"],answer:"CloudTrail",explanation:"AWS CloudTrail logs all API activity for auditing and security reviews."},{question:"Which service helps detect bias and drift in production ML models?",options:["Amazon Polly","Model Monitor","Comprehend","Kinesis"],answer:"Model Monitor",explanation:"SageMaker Model Monitor tracks data quality and drift over time."},{question:"Which AWS service helps run ML workflows securely and reproducibly?",options:["SageMaker Pipelines","Rekognition","Personalize","Textract"],answer:"SageMaker Pipelines",explanation:"Pipelines orchestrate ML steps and enforce security boundaries."},{question:"How do you protect sensitive data in S3 for ML training?",options:["Use public access","Enable logging","Encrypt data","Use Amazon Translate"],answer:"Encrypt data",explanation:"S3 supports encryption via KMS or AES-256 to secure data at rest."},{question:"What’s the most secure way to store API keys used in ML apps?",options:["Hardcode in code","Send via email","Use Secrets Manager","Store in logs"],answer:"Use Secrets Manager",explanation:"Secrets Manager securely stores and rotates credentials and API keys."},{question:"A model is making biased decisions due to flawed access patterns. What caused this?",options:["Data leakage","Overfitting","High variance","Low recall"],answer:"Data leakage",explanation:"Leaking future information into training data leads to unfair decisions."},{question:"How can CloudWatch help secure ML services?",options:["Host notebooks","Delete endpoints","Monitor logs and usage","Add GPUs"],answer:"Monitor logs and usage",explanation:"CloudWatch tracks resource usage, errors, and custom alerts."},{question:"You need a real-time interface for your model that’s decoupled from the client. What should you use?",options:["CloudFormation","IAM Group","API Gateway + Lambda","Elastic Beanstalk"],answer:"API Gateway + Lambda",explanation:"These allow lightweight, secure ML inference APIs."},{question:"A hospital stores X-ray predictions in S3. What helps ensure they are not leaked?",options:["Public access","Data drift detection","S3 encryption and bucket policy","Model explainability"],answer:"S3 encryption and bucket policy",explanation:"Combining encryption and tight access policies keeps data secure."},{question:"An eCommerce site notices spam access to their endpoint. What should they do?",options:["Disable encryption","Use IAM role chaining","Throttling + IAM policies","Train more data"],answer:"Throttling + IAM policies",explanation:"Restrict and control access using rate limits and access roles."},{question:"Your inference results are being altered mid-transit. How do you prevent this?",options:["Use UDP","Use HTTP","Switch to batch inference","Use HTTPS"],answer:"Use HTTPS",explanation:"HTTPS encrypts data in transit to protect it from interception or tampering."},{question:"A healthcare startup needs full auditability of ML activity. Which AWS feature helps?",options:["CloudTrail","SNS","Polly","Glue"],answer:"CloudTrail",explanation:"CloudTrail tracks all AWS API activity, useful for compliance and audits."},{question:"A team wants to schedule daily retraining jobs. What AWS combo works?",options:["CloudWatch + S3","Lambda + SageMaker Pipelines","Polly + Transcribe","DynamoDB + IAM"],answer:"Lambda + SageMaker Pipelines",explanation:"Lambda triggers can orchestrate secure retraining pipelines on a schedule."},{question:"Which strategy enhances endpoint-level security in production?",options:["Enable public access","Add GPUs","Use IAM and VPC","Use Kinesis"],answer:"Use IAM and VPC",explanation:"IAM controls who can access, and VPC ensures private network isolation."},{question:"A model returns user-specific results. How can you protect user privacy?",options:["Disable logging","Use differential privacy or PII redaction","Open access","Use batch only"],answer:"Use differential privacy or PII redaction",explanation:"Redacting PII or adding noise helps ensure user data stays private."},{question:"Which tool lets you quickly view security alerts for ML resources?",options:["Forecast","Comprehend","GuardDuty","SageMaker Studio"],answer:"GuardDuty",explanation:"Amazon GuardDuty detects threats and unusual activity across AWS accounts."},{question:"What is the best way to restrict model usage to internal services only?",options:["Open to public","Whitelist IPs","Attach IAM role + VPC endpoint","Use S3 Transfer Acceleration"],answer:"Attach IAM role + VPC endpoint",explanation:"This ensures access is internal, authenticated, and secure."}];function d(){const[e]=r.useState((()=>{return e=u,(0,a.Z)(e).sort((()=>Math.random()-.5));var e})),[t,n]=r.useState(0),[i,s]=r.useState(null),[d,p]=r.useState(0),[m,h]=r.useState(!1),[g,y]=r.useState([]),w=e[t];return r.createElement(o.Z,null,r.createElement(c,null,r.createElement("h1",null,"📝 Quiz: Chapter 8:  Computer Vision with AWS (Rekognition, Textract)"),m?r.createElement("div",null,r.createElement("h2",null,"✅ Your Score: ",d," / ",e.length),r.createElement("p",null,d>=.8*e.length?"🎉 Awesome job!":"📚 Review and try again!"),r.createElement("button",{onClick:()=>{n(0),s(null),p(0),y([]),h(!1)}},"🔁 Retry Quiz"),r.createElement("div",{className:"review"},r.createElement("h3",null,"📝 Review:"),g.map(((e,t)=>r.createElement("div",{key:t},r.createElement("p",null,r.createElement("strong",null,"Q",t+1,":")," ",e.question),r.createElement("p",null,"Your Answer:"," ",r.createElement("span",{className:e.selected===e.answer?"correct":"wrong"},e.selected)),r.createElement("p",null,"Correct Answer: ",e.answer),r.createElement("p",null,r.createElement("em",null,"🧠 ",e.explanation)),r.createElement("hr",null))))),r.createElement("div",{className:"button-nav"},r.createElement(l.rU,{to:"/chapter-11"},"← Back to Chapter 11"),r.createElement(l.rU,{to:"/"},"🏠 Home"))):r.createElement("div",{className:"question"},r.createElement("p",null,r.createElement("strong",null,"Q",t+1,":")," ",w.question),w.options.map((e=>r.createElement("div",{key:e},r.createElement("button",{onClick:()=>{return s(t=e),y((e=>[].concat((0,a.Z)(e),[{...w,selected:t}]))),void(t===w.answer&&p((e=>e+1)));var t},disabled:null!==i},e)))),i&&r.createElement("p",{className:"feedback"},i===w.answer?"✅ Correct!":`❌ Incorrect. Correct: ${w.answer}`),i&&r.createElement("button",{onClick:()=>{t+1<e.length?(n((e=>e+1)),s(null)):h(!0)}},"Next"))))}}}]);
//# sourceMappingURL=component---src-pages-quiz-chapter-11-js-10f62a040bab03d099b2.js.map