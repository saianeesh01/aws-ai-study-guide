"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[450],{8678:function(e,t,n){var a=n(7294);t.Z=e=>{let{children:t,isFullWidth:n=!1}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{margin:"0 auto",maxWidth:n?"100%":"var(--size-content)",padding:n?"0":"var(--size-gutter)"}},a.createElement("main",null,t),!n&&a.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,n){n.d(t,{F:function(){return i}});var a=n(7294);function i(e){let{title:t,description:n=""}=e;const i="AWS AI Study Guide",r=n||"Interactive learning for AWS AI";return a.createElement(a.Fragment,null,a.createElement("title",null,t?`${t} | ${i}`:i),a.createElement("meta",{name:"description",content:r}),a.createElement("meta",{property:"og:title",content:t||i}),a.createElement("meta",{property:"og:description",content:r}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),a.createElement("meta",{name:"twitter:title",content:t||i}),a.createElement("meta",{name:"twitter:description",content:r}))}},2979:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return m}});var a=n(5785),i=n(7294),r=n(8678),o=n(9357),s=n(5086),l=n(4160);const c=s.default.div.withConfig({displayName:"quiz-chapter-4__Wrapper",componentId:"sc-1igas0a-0"})(['background:black;color:#00ff90;font-family:"Courier New",monospace;padding:3rem 2rem;min-height:100vh;h1{margin-bottom:2rem;}.question{margin-bottom:2rem;}button{background:#00ff90;color:black;border:none;padding:0.5rem 1rem;margin-top:1rem;margin-right:1rem;border-radius:6px;cursor:pointer;font-weight:bold;transition:background 0.3s ease;&:hover{background:#00cc70;}}.feedback{margin-top:1rem;font-weight:bold;}.review{margin-top:2rem;background:#111;padding:1rem;border-radius:10px;border:1px solid #00ff90;}.correct{color:#00ff90;}.wrong{color:red;}']),u=[{question:"What is the main role of a hidden layer in a neural network?",options:["Receive input","Perform non-linear transformations","Output predictions","Store weights"],answer:"Perform non-linear transformations",explanation:"Hidden layers transform inputs using learned weights and activation functions to extract features."},{question:"Which activation function outputs values between 0 and 1?",options:["ReLU","Tanh","Sigmoid","Softmax"],answer:"Sigmoid",explanation:"The sigmoid function maps input to a range between 0 and 1, useful for binary classification."},{question:"What does backpropagation update?",options:["Neuron count","Data format","Weights and biases","Epoch count"],answer:"Weights and biases",explanation:"Backpropagation uses gradient descent to update weights and biases to minimize the loss."},{question:"What is overfitting?",options:["Model too simple","Model fails to learn","Model performs poorly on training data","Model memorizes training data"],answer:"Model memorizes training data",explanation:"Overfitting means the model learns patterns too precisely, failing to generalize to new data."},{question:"Which optimizer adapts learning rate during training?",options:["SGD","Momentum","Adam","Batch"],answer:"Adam",explanation:"Adam optimizer adjusts the learning rate for each parameter dynamically during training."},{question:"What is dropout used for?",options:["Improving inference speed","Reducing dataset size","Preventing overfitting","Improving accuracy directly"],answer:"Preventing overfitting",explanation:"Dropout randomly disables neurons during training to prevent reliance on specific features."},{question:"Which layer connects every neuron to the previous layer's outputs?",options:["Recurrent","Convolutional","Pooling","Dense"],answer:"Dense",explanation:"Dense (fully connected) layers connect each input to every neuron in the layer."},{question:"What is the output of a softmax layer?",options:["Logits","Binary output","Class probabilities","Errors"],answer:"Class probabilities",explanation:"Softmax turns logits into a probability distribution summing to 1 across classes."},{question:"Which loss function is best for regression problems?",options:["Cross-entropy","Hinge loss","Mean Squared Error","Sparse categorical"],answer:"Mean Squared Error",explanation:"MSE penalizes large differences between predicted and true values in continuous tasks."},{question:"What is an epoch?",options:["One batch","Subset of data","One pass over training set","Evaluation loop"],answer:"One pass over training set",explanation:"An epoch is one complete iteration through the entire dataset during training."},{question:"A facial recognition model learns to match only specific people from the training set. What’s the issue?",options:["Good generalization","Underfitting","Overfitting","Hyperparameter tuning"],answer:"Overfitting",explanation:"The model learned exact features without generalizing to new faces — classic overfitting."},{question:"An e-commerce recommendation model outputs all items equally. Which issue is likely?",options:["Overfitting","Poor activation","Untrained output layer","Missing softmax"],answer:"Missing softmax",explanation:"Without softmax, raw scores can’t be interpreted as meaningful probabilities."},{question:"Which activation function is preferred in deep image networks?",options:["Sigmoid","Softmax","ReLU","Linear"],answer:"ReLU",explanation:"ReLU is simple and efficient, helping deep CNNs avoid vanishing gradients."},{question:"A voice assistant model predicts gibberish. The training data had lots of noise. What’s the likely fix?",options:["Add dropout","Use more layers","Clean data better","Lower learning rate"],answer:"Clean data better",explanation:"Poor-quality training data leads to noisy and unreliable model outputs."},{question:"A model for stock price prediction always predicts the average price. What’s likely wrong?",options:["Low variance","Poor activation","Too shallow","Underfitting"],answer:"Underfitting",explanation:"If predictions stay near the mean, the model likely hasn't learned key patterns."},{question:"Why use neural networks in medical image diagnosis?",options:["Random sampling","Pattern matching and feature detection","Speed","Fewer labels"],answer:"Pattern matching and feature detection",explanation:"Neural networks can spot subtle visual features, useful in X-ray or MRI diagnosis."},{question:"What architecture would you likely use for time series forecasting?",options:["CNN","RNN","Dense only","GAN"],answer:"RNN",explanation:"Recurrent Neural Networks are designed to learn from sequential data like time series."},{question:"Why might you freeze layers in a neural network during training?",options:["Speed up inference","Reuse learned features","Apply softmax","Reduce accuracy"],answer:"Reuse learned features",explanation:"Freezing layers allows you to use pre-trained weights (transfer learning) as feature extractors."},{question:"Which type of layer is best for extracting spatial features in images?",options:["RNN","Dense","Convolutional","Softmax"],answer:"Convolutional",explanation:"Convolutional layers detect local patterns like edges and shapes in images."},{question:"You want a model that learns whether customer reviews are positive/negative. Which final activation?",options:["Tanh","Softmax","Sigmoid","None"],answer:"Sigmoid",explanation:"Sigmoid outputs a probability between 0 and 1 for binary classification tasks."}];function m(){const[e]=i.useState((()=>[].concat(u).sort((()=>Math.random()-.5)))),[t,n]=i.useState(0),[o,s]=i.useState(null),[m,d]=i.useState(0),[p,g]=i.useState(!1),[f,h]=i.useState([]),w=e[t];return i.createElement(r.Z,null,i.createElement(c,null,i.createElement("h1",null,"📝 Quiz: Chapter 4 – Fundamentals of Neural Networks"),p?i.createElement("div",null,i.createElement("h2",null,"✅ Your Score: ",m," / ",e.length),i.createElement("p",null,m>=.8*e.length?"🎉 Awesome job!":"📚 Review and try again!"),i.createElement("button",{onClick:()=>{n(0),s(null),d(0),h([]),g(!1)}},"🔁 Retry Quiz"),i.createElement("div",{className:"review"},i.createElement("h3",null,"📝 Review:"),f.map(((e,t)=>i.createElement("div",{key:t},i.createElement("p",null,i.createElement("strong",null,"Q",t+1,":")," ",e.question),i.createElement("p",null,"Your Answer:"," ",i.createElement("span",{className:e.selected===e.answer?"correct":"wrong"},e.selected)),i.createElement("p",null,"Correct Answer: ",e.answer),i.createElement("p",null,i.createElement("em",null,"🧠 ",e.explanation)),i.createElement("hr",null))))),i.createElement("div",{style:{marginTop:"2rem"}},i.createElement(l.rU,{to:"/chapter-4"},"← Back to Chapter 4")," |"," ",i.createElement(l.rU,{to:"/"},"🏠 Home"))):i.createElement("div",{className:"question"},i.createElement("p",null,i.createElement("strong",null,"Q",t+1,":")," ",w.question),w.options.map((e=>i.createElement("div",{key:e},i.createElement("button",{onClick:()=>{return s(t=e),h((e=>[].concat((0,a.Z)(e),[{...w,selected:t}]))),void(t===w.answer&&d(m+1));var t},disabled:null!==o},e)))),o&&i.createElement("p",{className:"feedback"},o===w.answer?"✅ Correct!":`❌ Incorrect. Correct: ${w.answer}`),o&&i.createElement("button",{onClick:()=>{t+1<e.length?(n(t+1),s(null)):g(!0)}},"Next"))))}}}]);
//# sourceMappingURL=component---src-pages-quiz-chapter-4-js-726c02d9109f2d67beca.js.map