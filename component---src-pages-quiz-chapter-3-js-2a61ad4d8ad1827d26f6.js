"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[1],{8678:function(e,t,n){var a=n(7294);t.Z=e=>{let{children:t,isFullWidth:n=!1}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{margin:"0 auto",maxWidth:n?"100%":"var(--size-content)",padding:n?"0":"var(--size-gutter)"}},a.createElement("main",null,t),!n&&a.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,n){n.d(t,{F:function(){return i}});var a=n(7294);function i(e){let{title:t,description:n=""}=e;const i="AWS AI Study Guide",o=n||"Interactive learning for AWS AI";return a.createElement(a.Fragment,null,a.createElement("title",null,t?`${t} | ${i}`:i),a.createElement("meta",{name:"description",content:o}),a.createElement("meta",{property:"og:title",content:t||i}),a.createElement("meta",{property:"og:description",content:o}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),a.createElement("meta",{name:"twitter:title",content:t||i}),a.createElement("meta",{name:"twitter:description",content:o}))}},9235:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r.F},default:function(){return m}});var a=n(5785),i=n(7294),o=n(8678),r=n(9357),s=n(5086),l=n(4160);const c=s.default.div.withConfig({displayName:"quiz-chapter-3__Wrapper",componentId:"sc-1q32t1n-0"})(['background:black;color:#00ff90;font-family:"Courier New",monospace;padding:3rem 2rem;min-height:100vh;h1{margin-bottom:2rem;}.question{margin-bottom:2rem;}button{background:#00ff90;color:black;border:none;padding:0.5rem 1rem;margin-top:1rem;margin-right:1rem;border-radius:6px;cursor:pointer;font-weight:bold;transition:background 0.3s ease;&:hover{background:#00cc70;}}.feedback{margin-top:1rem;font-weight:bold;}.review{margin-top:2rem;background:#111;padding:1rem;border-radius:10px;border:1px solid #00ff90;}.correct{color:#00ff90;}.wrong{color:red;}']),u=[{question:"What is the goal of data preprocessing?",options:["Build the final model","Collect raw data","Transform raw data into usable format","Run predictions"],answer:"Transform raw data into usable format",explanation:"Data preprocessing ensures raw inputs are clean and usable for training ML models."},{question:"Which technique is used to bring values into a common scale?",options:["Encoding","Normalization","Binning","Sampling"],answer:"Normalization",explanation:"Normalization scales numeric data between 0 and 1 to prevent dominance by large values."},{question:"What is the purpose of one-hot encoding?",options:["To normalize numerical data","To convert text into lowercase","To convert categorical data into binary format","To impute missing values"],answer:"To convert categorical data into binary format",explanation:"One-hot encoding transforms categories into a series of binary columns for ML use."},{question:"Which data issue can cause overfitting?",options:["Duplicates","Incomplete data","Clean data","Low variance"],answer:"Duplicates",explanation:"Duplicates can cause the model to memorize patterns that aren’t truly meaningful."},{question:"What is outlier detection used for?",options:["Identify frequently occurring values","Remove random noise","Find values that deviate significantly from the norm","Impute missing values"],answer:"Find values that deviate significantly from the norm",explanation:"Outliers can skew model predictions and are often removed or treated specially."},{question:"Which technique is used to fill missing data using average?",options:["Encoding","Mean imputation","Scaling","Sampling"],answer:"Mean imputation",explanation:"Mean imputation replaces missing values with the average of that feature."},{question:"What is feature engineering?",options:["Scaling features","Removing features","Creating new input variables from raw data","Collecting more data"],answer:"Creating new input variables from raw data",explanation:"Feature engineering boosts performance by extracting insights from existing data."},{question:"Structured data is commonly found in...",options:["Images","Video","CSV files","Audio recordings"],answer:"CSV files",explanation:"CSV and tabular data are examples of structured data with defined columns/rows."},{question:"Which split is used to tune hyperparameters?",options:["Training set","Test set","Validation set","Entire dataset"],answer:"Validation set",explanation:"The validation set helps optimize model settings before testing."},{question:"What is the role of feature scaling?",options:["Improve data collection","Adjust the number of features","Ensure uniform contribution of all features","Change feature names"],answer:"Ensure uniform contribution of all features",explanation:"Scaling ensures large-valued features don’t overpower smaller ones."},{question:"An e-commerce dataset has customer ages ranging from 18 to 80. What should you apply before using it in kNN?",options:["Feature extraction","Encoding","Normalization","Binning"],answer:"Normalization",explanation:"kNN is distance-based; normalization prevents age from dominating the metric."},{question:"You're training a model on social media posts. Which preprocessing step is domain-specific?",options:["Log transformation","Removing duplicates","Tokenization and stemming","Min-max scaling"],answer:"Tokenization and stemming",explanation:"Text preprocessing requires breaking words down and reducing them to root forms."},{question:"A healthcare ML model predicts patient readmission. You find duplicate patient records. What should you do?",options:["Ignore them","Include them","Delete duplicates","Label them as outliers"],answer:"Delete duplicates",explanation:"Duplicates can mislead the model, especially in healthcare where accuracy matters."},{question:"Your model predicts loan approvals. The dataset is 95% approved, 5% denied. What should you do?",options:["Oversample the minority class","Normalize the features","Reduce data size","Remove outliers"],answer:"Oversample the minority class",explanation:"Balancing classes helps avoid biased predictions."},{question:"You’re using images for object detection. What is one preprocessing step?",options:["Tokenization","Image scaling/resizing","Label encoding","Remove duplicates"],answer:"Image scaling/resizing",explanation:"Images should be resized for consistent input into ML models like CNNs."},{question:"In fraud detection, how should outliers be handled?",options:["Always remove them","Use them as signal","Cap them at mean","Ignore them"],answer:"Use them as signal",explanation:"In anomaly detection like fraud, outliers are often the very signals you want."},{question:"You collect sales data daily but there are missing days. What technique helps?",options:["Binarization","Time series interpolation","Label encoding","Shuffling"],answer:"Time series interpolation",explanation:"Interpolation estimates missing values in a time-aware way."},{question:"You're deploying a model to predict energy usage. You receive new data weekly. What should you use?",options:["Static dataset","Real-time imputation","Data pipeline","Manual preprocessing"],answer:"Data pipeline",explanation:"Pipelines automate incoming data transformation for continual learning."},{question:"You find several mislabeled rows in your training data. What's the impact?",options:["Better generalization","Faster training","Increased model accuracy","Reduced model performance"],answer:"Reduced model performance",explanation:"Label noise makes it harder for the model to learn correct patterns."},{question:"A client gives you survey data in Excel. It has columns like 'Agree', 'Disagree', and 'Neutral'. What preprocessing do you use?",options:["Binarization","One-hot encoding","Standardization","Clustering"],answer:"One-hot encoding",explanation:"Convert categorical responses into binary columns for model input."}];function m(){const[e]=i.useState((()=>[].concat(u).sort((()=>Math.random()-.5)))),[t,n]=i.useState(0),[r,s]=i.useState(null),[m,d]=i.useState(0),[p,g]=i.useState(!1),[h,f]=i.useState([]),w=e[t];return i.createElement(o.Z,null,i.createElement(c,null,i.createElement("h1",null,"📝 Quiz: Chapter 3 – Data Collection & Preparation"),p?i.createElement("div",null,i.createElement("h2",null,"✅ Your Score: ",m," / ",e.length),i.createElement("p",null,m>=.8*e.length?"🎉 Awesome job!":"📚 Review and try again!"),i.createElement("button",{onClick:()=>{n(0),s(null),d(0),f([]),g(!1)}},"🔁 Retry Quiz"),i.createElement("div",{className:"review"},i.createElement("h3",null,"📝 Review:"),h.map(((e,t)=>i.createElement("div",{key:t},i.createElement("p",null,i.createElement("strong",null,"Q",t+1,":")," ",e.question),i.createElement("p",null,"Your Answer:"," ",i.createElement("span",{className:e.selected===e.answer?"correct":"wrong"},e.selected)),i.createElement("p",null,"Correct Answer: ",e.answer),i.createElement("p",null,i.createElement("em",null,"🧠 ",e.explanation)),i.createElement("hr",null))))),i.createElement("div",{style:{marginTop:"2rem"}},i.createElement(l.rU,{to:"/chapter-2"},"← Back to Chapter 2")," |"," ",i.createElement(l.rU,{to:"/"},"🏠 Home"))):i.createElement("div",{className:"question"},i.createElement("p",null,i.createElement("strong",null,"Q",t+1,":")," ",w.question),w.options.map((e=>i.createElement("div",{key:e},i.createElement("button",{onClick:()=>{return s(t=e),f((e=>[].concat((0,a.Z)(e),[{...w,selected:t}]))),void(t===w.answer&&d(m+1));var t},disabled:null!==r},e)))),r&&i.createElement("p",{className:"feedback"},r===w.answer?"✅ Correct!":`❌ Incorrect. Correct: ${w.answer}`),r&&i.createElement("button",{onClick:()=>{t+1<e.length?(n(t+1),s(null)):g(!0)}},"Next"))))}}}]);
//# sourceMappingURL=component---src-pages-quiz-chapter-3-js-2a61ad4d8ad1827d26f6.js.map