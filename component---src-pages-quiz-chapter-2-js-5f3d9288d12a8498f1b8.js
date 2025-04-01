"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[394],{8678:function(e,t,a){var n=a(7294);t.Z=e=>{let{children:t,isFullWidth:a=!1}=e;return n.createElement(n.Fragment,null,n.createElement("div",{style:{margin:"0 auto",maxWidth:a?"100%":"var(--size-content)",padding:a?"0":"var(--size-gutter)"}},n.createElement("main",null,t),!a&&n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,a){a.d(t,{F:function(){return o}});var n=a(7294);function o(e){let{title:t,description:a=""}=e;const o="AWS AI Study Guide",i=a||"Interactive learning for AWS AI";return n.createElement(n.Fragment,null,n.createElement("title",null,t?`${t} | ${o}`:o),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:t||o}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),n.createElement("meta",{name:"twitter:title",content:t||o}),n.createElement("meta",{name:"twitter:description",content:i}))}},4282:function(e,t,a){a.r(t),a.d(t,{Head:function(){return r.F},default:function(){return d}});var n=a(5785),o=a(7294),i=a(8678),r=a(9357),s=a(5086),l=a(4160);const c=s.default.div.withConfig({displayName:"quiz-chapter-2__Wrapper",componentId:"sc-4gfy9s-0"})(['background:black;color:#00ff90;font-family:"Courier New",monospace;padding:3rem 2rem;min-height:100vh;h1{margin-bottom:2rem;}.question{margin-bottom:2rem;}button{background:#00ff90;color:black;border:none;padding:0.5rem 1rem;margin-top:1rem;margin-right:1rem;border-radius:6px;cursor:pointer;font-weight:bold;transition:background 0.3s ease;&:hover{background:#00cc70;}}.feedback{margin-top:1rem;font-weight:bold;}.review{margin-top:2rem;background:#111;padding:1rem;border-radius:10px;border:1px solid #00ff90;}.correct{color:#00ff90;}.wrong{color:red;}']),u=[{question:"What is the goal of data preprocessing?",options:["Train the model","Visualize results","Prepare data for modeling","Improve GPU performance"],answer:"Prepare data for modeling",explanation:"Data preprocessing prepares raw data into a clean and usable format for ML algorithms."},{question:"Which technique helps normalize numeric data?",options:["Data augmentation","Encoding","Scaling","Sampling"],answer:"Scaling",explanation:"Scaling adjusts numerical values to a common range (e.g., 0 to 1) to improve model performance."},{question:"What is data augmentation?",options:["Removing duplicates from data","Adding noise to break patterns","Generating synthetic variations of existing data","Sorting data for training"],answer:"Generating synthetic variations of existing data",explanation:"Augmentation is often used in image/text datasets to increase diversity and avoid overfitting."},{question:"Which of the following is considered structured data?",options:["CSV file","Audio clip","Image dataset","Tweet text"],answer:"CSV file",explanation:"Structured data is organized in rows and columns like CSV, SQL, Excel, etc."},{question:"Why is removing duplicates important in data cleaning?",options:["To save memory","To avoid overfitting and bias","To reduce training time","To speed up inference"],answer:"To avoid overfitting and bias",explanation:"Duplicate data can cause the model to give undue weight to repeated examples."},{question:"What are missing values in a dataset?",options:["Features with high variance","Data points that are 0","Empty/null fields with no value","Features with low importance"],answer:"Empty/null fields with no value",explanation:"Missing values represent incomplete data — often denoted as null, NaN, or empty."},{question:"What technique can reduce dimensionality of data?",options:["Scaling","Encoding","PCA","Sampling"],answer:"PCA",explanation:"Principal Component Analysis (PCA) reduces the number of input variables while retaining key patterns."},{question:"Which of these is a valid data splitting strategy?",options:["Train/Test/Validate","Shuffle/Sort","Encode/Decode","Filter/Map"],answer:"Train/Test/Validate",explanation:"Splitting helps evaluate performance and prevent overfitting using distinct datasets."},{question:"Which AWS service helps with labeling data?",options:["SageMaker Ground Truth","CloudWatch","Glue","Redshift"],answer:"SageMaker Ground Truth",explanation:"Ground Truth helps automate and manage the process of data labeling."},{question:"When do you use one-hot encoding?",options:["For numerical features","For scaling images","For categorical variables","To reduce model size"],answer:"For categorical variables",explanation:"One-hot encoding converts categories into binary columns for ML algorithms."},{question:"A company has customer purchase logs in CSV format. What type of data is this?",options:["Structured","Unstructured","Semi-structured","Non-numeric"],answer:"Structured",explanation:"CSV data is tabular and organized — classic structured data."},{question:"An e-commerce site wants to predict churn. What’s the first ML workflow step?",options:["Train a model","Choose an algorithm","Define the problem","Label the data"],answer:"Define the problem",explanation:"Before touching data, the business goal must be clearly defined."},{question:"You’re cleaning a dataset with inconsistent 'State' values (e.g., NY, N.Y., New York). What’s the fix?",options:["Drop all rows","Convert to lowercase","Standardize labels","Split the column"],answer:"Standardize labels",explanation:"Data cleaning often involves ensuring consistent formats across similar values."},{question:"You have 10,000 medical images but want more data variety. What should you do?",options:["Drop half the data","Use one-hot encoding","Data augmentation","Use text embeddings"],answer:"Data augmentation",explanation:"Augmentation techniques can expand image datasets (rotate, flip, blur, etc.)."},{question:"You notice most rows in a dataset are missing 'age'. What should you do?",options:["Delete the column","Delete the entire dataset","Impute or drop rows","Ignore it"],answer:"Impute or drop rows",explanation:"Missing values can be handled via deletion or statistical imputation."},{question:"What should be done before applying a neural network to image data?",options:["Convert it to CSV","Apply PCA","Normalize pixel values","Add one-hot encoding"],answer:"Normalize pixel values",explanation:"Pixel values are usually scaled to 0-1 or -1 to 1 to improve convergence."},{question:"You’re preparing log data for anomaly detection. What ML type is this?",options:["Supervised","Reinforcement","Unsupervised","Regression"],answer:"Unsupervised",explanation:"Anomaly detection often works without labels — ideal for unsupervised ML."},{question:"Which of these helps prevent data leakage during evaluation?",options:["Using same data for train and test","Shuffling all rows","Separating train/test sets","Overfitting the training set"],answer:"Separating train/test sets",explanation:"Leakage occurs when training data influences test data — avoid by keeping them separate."},{question:"You’re given customer feedback text. What's the first step?",options:["Split data","Label it","Tokenize & preprocess","Run the model"],answer:"Tokenize & preprocess",explanation:"Text needs to be cleaned and transformed into vectors before training."},{question:"You’re building a dashboard to monitor ML model predictions. Which stage is this?",options:["Data prep","Evaluation","Deployment","Monitoring"],answer:"Monitoring",explanation:"This is part of post-deployment monitoring to detect issues like data drift."}];function d(){const[e]=o.useState((()=>[].concat(u).sort((()=>Math.random()-.5)))),[t,a]=o.useState(0),[r,s]=o.useState(null),[d,m]=o.useState(0),[p,g]=o.useState(!1),[h,f]=o.useState([]),v=e[t];return o.createElement(i.Z,null,o.createElement(c,null,o.createElement("h1",null,"📝 Quiz: Chapter 2 – Data Collection & Preparation"),p?o.createElement("div",null,o.createElement("h2",null,"✅ Your Score: ",d," / ",e.length),o.createElement("p",null,d>=.8*e.length?"🎉 Awesome job!":"📚 Review and try again!"),o.createElement("button",{onClick:()=>{a(0),s(null),m(0),f([]),g(!1)}},"🔁 Retry Quiz"),o.createElement("div",{className:"review"},o.createElement("h3",null,"📝 Review:"),h.map(((e,t)=>o.createElement("div",{key:t},o.createElement("p",null,o.createElement("strong",null,"Q",t+1,":")," ",e.question),o.createElement("p",null,"Your Answer:"," ",o.createElement("span",{className:e.selected===e.answer?"correct":"wrong"},e.selected)),o.createElement("p",null,"Correct Answer: ",e.answer),o.createElement("p",null,o.createElement("em",null,"🧠 ",e.explanation)),o.createElement("hr",null))))),o.createElement("div",{style:{marginTop:"2rem"}},o.createElement(l.rU,{to:"/chapter-2"},"← Back to Chapter 2")," |"," ",o.createElement(l.rU,{to:"/"},"🏠 Home"))):o.createElement("div",{className:"question"},o.createElement("p",null,o.createElement("strong",null,"Q",t+1,":")," ",v.question),v.options.map((e=>o.createElement("div",{key:e},o.createElement("button",{onClick:()=>{return s(t=e),f((e=>[].concat((0,n.Z)(e),[{...v,selected:t}]))),void(t===v.answer&&m(d+1));var t},disabled:null!==r},e)))),r&&o.createElement("p",{className:"feedback"},r===v.answer?"✅ Correct!":`❌ Incorrect. Correct: ${v.answer}`),r&&o.createElement("button",{onClick:()=>{t+1<e.length?(a(t+1),s(null)):g(!0)}},"Next"))))}}}]);
//# sourceMappingURL=component---src-pages-quiz-chapter-2-js-5f3d9288d12a8498f1b8.js.map