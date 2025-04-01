"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[798],{8678:function(e,t,n){var a=n(7294);t.Z=e=>{let{children:t,isFullWidth:n=!1}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{margin:"0 auto",maxWidth:n?"100%":"var(--size-content)",padding:n?"0":"var(--size-gutter)"}},a.createElement("main",null,t),!n&&a.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",color:"#888"}},"© ",(new Date).getFullYear()," · Built for AWS AI learners")))}},9357:function(e,t,n){n.d(t,{F:function(){return r}});var a=n(7294);function r(e){let{title:t,description:n=""}=e;const r="AWS AI Study Guide",i=n||"Interactive learning for AWS AI";return a.createElement(a.Fragment,null,a.createElement("title",null,t?`${t} | ${r}`:r),a.createElement("meta",{name:"description",content:i}),a.createElement("meta",{property:"og:title",content:t||r}),a.createElement("meta",{property:"og:description",content:i}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:url",content:"https://saianeesh01.github.io/aws-ai-study-guide"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:"Aneesh Mussim"}),a.createElement("meta",{name:"twitter:title",content:t||r}),a.createElement("meta",{name:"twitter:description",content:i}))}},8566:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return v}});var a=n(7294),r=n(8678),i=n(9357),o=n(5086),s=n(4160),l=n(5785);const c=(0,o.keyframes)(["from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}"]),u=o.default.div.withConfig({displayName:"FlashcardsChapter4__Card",componentId:"sc-ocbf65-0"})(['background:#111;border:1px solid #00ff90;border-radius:10px;padding:2rem;margin-bottom:1rem;text-align:center;font-family:"Courier New",monospace;color:#00ff90;animation:'," 0.5s ease;transition:transform 0.4s ease;&:hover{transform:scale(1.02);}"],c),d=o.default.button.withConfig({displayName:"FlashcardsChapter4__Button",componentId:"sc-ocbf65-1"})(["background:#00ff90;color:black;border:none;padding:0.6rem 1.2rem;margin-top:1rem;border-radius:6px;font-weight:bold;cursor:pointer;transition:background 0.3s ease;&:hover{background:#00cc70;}"]);const m=[{question:"What is a neural network?",answer:"A machine learning model inspired by the human brain that learns from data using layers of interconnected neurons."},{question:"What are the three main types of layers in a neural network?",answer:"Input layer, hidden layers, and output layer."},{question:"What is the function of the input layer?",answer:"It receives raw features or data to feed into the network."},{question:"What happens in hidden layers?",answer:"They perform intermediate computations and transformations using weighted inputs and activation functions."},{question:"What is the output layer responsible for?",answer:"Producing the final predictions or scores."},{question:"What is a neuron (or node) in a neural network?",answer:"A computational unit that performs a weighted sum of inputs and applies an activation function."},{question:"What is an activation function?",answer:"A function that introduces non-linearity into the network, enabling it to learn complex patterns."},{question:"Name three common activation functions.",answer:"ReLU, Sigmoid, and Softmax."},{question:"What does ReLU stand for?",answer:"Rectified Linear Unit – outputs max(0, x)."},{question:"When is Softmax typically used?",answer:"In the output layer of classification tasks to convert logits to probabilities."},{question:"What is the purpose of backpropagation?",answer:"To adjust weights in the network based on the error using gradients."},{question:"What algorithm is used to optimize weights during training?",answer:"Gradient Descent (and its variants like Adam)."},{question:"What is a loss function?",answer:"A function that measures the difference between the predicted output and the actual target."},{question:"What does Binary Cross-Entropy measure?",answer:"Error for binary classification problems."},{question:"What is the purpose of Mean Squared Error (MSE)?",answer:"It's used in regression to penalize larger errors more."},{question:"What is forward propagation?",answer:"The process of passing inputs through the network to generate predictions."},{question:"What is the vanishing gradient problem?",answer:"When gradients become too small, preventing proper weight updates – often in deep networks using Sigmoid or Tanh."},{question:"How does ReLU help avoid vanishing gradients?",answer:"It allows gradients to pass through for positive values, improving training stability."},{question:"What is dropout in neural networks?",answer:"A regularization technique that randomly disables neurons during training to prevent overfitting."},{question:"What is overfitting in neural networks?",answer:"When the model learns noise from the training data and performs poorly on unseen data."},{question:"What is a fully connected (dense) layer?",answer:"A layer where each neuron is connected to all outputs from the previous layer."},{question:"How does batch normalization help?",answer:"It stabilizes learning by normalizing layer inputs during training."},{question:"What is an epoch?",answer:"One full pass through the entire training dataset."},{question:"What does the learning rate control?",answer:"How much weights are updated during training."},{question:"What is a convolutional neural network (CNN)?",answer:"A specialized NN for processing image data using filters and pooling."},{question:"What kind of problems are CNNs best suited for?",answer:"Image classification, object detection, facial recognition."},{question:"What is a real-world application of neural networks?",answer:"Self-driving cars use neural networks to interpret visual input and make decisions."},{question:"What is a deep neural network?",answer:"A network with many hidden layers capable of learning highly abstract representations."},{question:"Why are activation functions crucial?",answer:"Without them, the network could only learn linear functions regardless of layers."},{question:"What does 'training' mean in the context of neural networks?",answer:"Optimizing weights to minimize the loss between predicted and actual outputs."}];function p(){const[e]=a.useState((()=>{return e=m,(0,l.Z)(e).sort((()=>Math.random()-.5));var e})),[t,n]=a.useState(0),[r,i]=a.useState(!1);return a.createElement(u,null,a.createElement("h2",null,"🧠 Flashcard ",t+1," of ",e.length),a.createElement("p",null,e[t].question),r&&a.createElement("p",null,a.createElement("strong",null,"Answer:")," ",e[t].answer),a.createElement("div",null,a.createElement(d,{onClick:()=>i((e=>!e))},r?"Hide Answer":"Show Answer"),a.createElement(d,{onClick:()=>{i(!1),n((t=>(t+1)%e.length))},style:{marginLeft:"1rem"}},"Next")))}const f=(0,o.keyframes)(["from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}"]),h=o.default.div.withConfig({displayName:"NeuralNetworkDiagram__DiagramWrapper",componentId:"sc-1do9xxi-0"})(["display:flex;justify-content:center;align-items:center;margin:3rem 0;flex-wrap:wrap;position:relative;"]),g=o.default.div.withConfig({displayName:"NeuralNetworkDiagram__Layer",componentId:"sc-1do9xxi-1"})(["display:flex;flex-direction:column;margin:0 2rem;gap:1.2rem;position:relative;"]),w=o.default.div.withConfig({displayName:"NeuralNetworkDiagram__Neuron",componentId:"sc-1do9xxi-2"})(["width:40px;height:40px;background:",";border-radius:50%;border:2px solid #00ff90;position:relative;animation:"," 0.6s ease;transition:transform 0.3s;&:hover{transform:scale(1.1);}&::after{content:attr(data-label);position:absolute;top:50%;left:130%;transform:translateY(-50%);font-size:0.7rem;color:#00ffcc;white-space:nowrap;}"],(e=>{let{faded:t}=e;return t?"#333":"#00ff90"}),f),y=o.default.svg.withConfig({displayName:"NeuralNetworkDiagram__SvgLines",componentId:"sc-1do9xxi-3"})(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;"]),E=o.default.line.withConfig({displayName:"NeuralNetworkDiagram__FlowLine",componentId:"sc-1do9xxi-4"})(["stroke:#00ff90;stroke-width:2;stroke-dasharray:6;stroke-dashoffset:0;animation:dash 1.5s linear infinite;@keyframes dash{to{stroke-dashoffset:-12;}}"]);function b(){return a.createElement(h,null,a.createElement(g,null,["Pixels","Edges","Brightness"].map(((e,t)=>a.createElement(w,{key:t,"data-label":e})))),a.createElement(g,null,["Feature 1","Feature 2","Feature 3"].map(((e,t)=>a.createElement(w,{key:t,"data-label":e})))),a.createElement(g,null,["Cat","Dog"].map(((e,t)=>a.createElement(w,{key:t,"data-label":e})))),a.createElement(y,{viewBox:"0 0 600 300",preserveAspectRatio:"xMidYMid meet"},a.createElement(E,{x1:"100",y1:"60",x2:"220",y2:"60"}),a.createElement(E,{x1:"100",y1:"120",x2:"220",y2:"100"}),a.createElement(E,{x1:"100",y1:"180",x2:"220",y2:"140"}),a.createElement(E,{x1:"220",y1:"60",x2:"340",y2:"90"}),a.createElement(E,{x1:"220",y1:"100",x2:"340",y2:"120"}),a.createElement(E,{x1:"220",y1:"140",x2:"340",y2:"150"})))}o.default.div.withConfig({displayName:"chapter-4__DiagramWrapper",componentId:"sc-p7s5fj-0"})(["display:flex;justify-content:center;flex-wrap:wrap;margin:3rem 0;gap:3rem;"]),o.default.div.withConfig({displayName:"chapter-4__Layer",componentId:"sc-p7s5fj-1"})(["display:flex;flex-direction:column;align-items:center;"]),o.default.div.withConfig({displayName:"chapter-4__Neuron",componentId:"sc-p7s5fj-2"})(["width:40px;height:40px;margin:0.5rem;border-radius:50%;background:#00ff90;opacity:0.8;transition:transform 0.2s ease;&:hover{transform:scale(1.2);opacity:1;}"]),o.default.p.withConfig({displayName:"chapter-4__LayerLabel",componentId:"sc-p7s5fj-3"})(['color:#00ffcc;font-weight:bold;margin-top:1rem;font-family:"Courier New",monospace;']);const k=o.default.div.withConfig({displayName:"chapter-4__PageWrapper",componentId:"sc-p7s5fj-4"})(['color:#00ff90;background:black;padding:3rem 2rem;font-family:"Courier New",monospace;min-height:100vh;h1,h2,h3{color:#00ff90;margin-top:2rem;}p,li{line-height:1.7;}ul{margin-left:1.5rem;}strong{color:#00ffcc;}code{background:#111;padding:0.2rem 0.4rem;border-radius:4px;color:#00ffcc;}.button-group{margin-top:3rem;display:flex;gap:1rem;flex-wrap:wrap;a{background:#00ff90;color:black;padding:0.75rem 1.5rem;border-radius:8px;text-decoration:none;font-weight:bold;transition:background 0.3s ease;&:hover{background:#00cc70;}}}']),x=o.default.pre.withConfig({displayName:"chapter-4__CodeDemo",componentId:"sc-p7s5fj-5"})(['background:#111;color:#00ffcc;padding:1.5rem;border-radius:10px;font-family:"Courier New",monospace;white-space:pre-wrap;margin-top:2rem;border:1px solid #00ff90;']);o.default.line.withConfig({displayName:"chapter-4__FlowLine",componentId:"sc-p7s5fj-6"})(["stroke:#00ff90;stroke-width:2;stroke-dasharray:6;stroke-dashoffset:0;animation:dash 1.2s linear infinite;@keyframes dash{to{stroke-dashoffset:-12;}}"]),o.default.div.withConfig({displayName:"chapter-4__NeuronCircle",componentId:"sc-p7s5fj-7"})(["position:relative;... &::after{content:attr(data-tooltip);position:absolute;top:-30px;left:50%;transform:translateX(-50%);color:#00ffcc;font-size:0.75rem;display:none;}&:hover::after{display:block;}"]);function v(){return a.createElement(r.Z,null,a.createElement(k,null,a.createElement("h1",null,"🧠 Chapter 4: Fundamentals of Neural Networks"),a.createElement("p",null,"Neural networks are the foundation of deep learning. They mimic the structure of the human brain, enabling computers to recognize complex patterns and make intelligent decisions."),a.createElement(b,null),a.createElement("h2",null,"🧬 Structure of a Neural Network"),a.createElement("ul",null,a.createElement("li",null,a.createElement("strong",null,"Input Layer:")," Accepts raw features (like image pixels, text embeddings, etc)."),a.createElement("li",null,a.createElement("strong",null,"Hidden Layers:")," Perform intermediate computations and transformations."),a.createElement("li",null,a.createElement("strong",null,"Output Layer:")," Produces predictions or scores.")),a.createElement("p",null,"Each neuron applies a weighted sum of inputs, adds a bias, and uses an ",a.createElement("strong",null,"activation function"),"."),a.createElement("h2",null,"⚡ Activation Functions"),a.createElement("ul",null,a.createElement("li",null,a.createElement("strong",null,"ReLU (Rectified Linear Unit):")," Efficient and widely used – ",a.createElement("code",null,"max(0, x)")),a.createElement("li",null,a.createElement("strong",null,"Sigmoid:")," Compresses output between 0 and 1 – good for probabilities"),a.createElement("li",null,a.createElement("strong",null,"Softmax:")," Converts logits into probabilities – often used in classification")),a.createElement("h2",null,"🔁 Forward & Backward Propagation"),a.createElement("p",null,"During ",a.createElement("strong",null,"forward propagation"),", data flows through the network to produce predictions."),a.createElement("p",null,a.createElement("strong",null,"Backpropagation")," then adjusts weights using the error (loss) via ",a.createElement("strong",null,"gradient descent"),"."),a.createElement("h2",null,"🎯 Loss Functions"),a.createElement("ul",null,a.createElement("li",null,a.createElement("strong",null,"Binary Cross-Entropy:")," For binary classification"),a.createElement("li",null,a.createElement("strong",null,"Categorical Cross-Entropy:")," For multi-class classification"),a.createElement("li",null,a.createElement("strong",null,"MSE (Mean Squared Error):")," For regression tasks")),a.createElement("h2",null,"🚀 Real-World Applications"),a.createElement("ul",null,a.createElement("li",null,"Image classification (e.g., disease detection from medical scans)"),a.createElement("li",null,"Voice assistants (e.g., Siri, Alexa)"),a.createElement("li",null,"Text classification (e.g., spam filtering, sentiment analysis)"),a.createElement("li",null,"Fraud detection in financial systems")),a.createElement("h2",null,"🧠 Key Takeaways"),a.createElement("ul",null,a.createElement("li",null,"Neural networks learn from data by adjusting weights through training"),a.createElement("li",null,"Activation functions enable learning of complex patterns"),a.createElement("li",null,"Loss functions guide the learning by measuring prediction error")),a.createElement(x,null,"\n# Step-by-step neural network inference (pseudo-code)\n\ninputs = [0.3, 0.7, 0.2]\n\n# Hidden layer\nh1 = relu(w1 * inputs + b1)\nh2 = relu(w2 * inputs + b2)\n\n# Output layer\noutput = softmax([h1, h2])\n\nreturn prediction\n"),a.createElement(p,null),a.createElement("div",{className:"button-group"},a.createElement(s.rU,{to:"/quiz-chapter-4"},"📝 Quiz"),a.createElement(s.rU,{to:"/"},"🏠 Home"))))}}}]);
//# sourceMappingURL=component---src-pages-chapter-4-js-70347438a6b04be54570.js.map