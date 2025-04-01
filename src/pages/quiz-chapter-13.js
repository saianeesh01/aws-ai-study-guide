import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

// 🔁 Utility to shuffle questions
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// 💅 Styled Components
const Wrapper = styled.div`
  background: black;
  color: #00ff90;
  font-family: "Courier New", monospace;
  padding: 3rem 2rem;
  min-height: 100vh;

  h1 {
    margin-bottom: 2rem;
  }

  .question {
    margin-bottom: 2rem;
  }

  button {
    background: #00ff90;
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background: #00cc70;
    }
  }

  .feedback {
    margin-top: 1rem;
    font-weight: bold;
  }

  .review {
    margin-top: 2rem;
    background: #111;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #00ff90;
  }

  .correct {
    color: #00ff90;
  }

  .wrong {
    color: red;
  }

  .button-nav {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a, button {
      background: #00ff90;
      color: black;
      font-weight: bold;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #00cc70;
      }
    }
  }
`

// 📚 Question Set (abbreviated for brevity)
const allQuestions = [
        {
          question: "Which of the following are common types of machine learning? (Select two)",
          options: [
            "Supervised Learning",
            "Unstructured Learning",
            "Unsupervised Learning",
            "Relational Learning"
          ],
          answer: ["Supervised Learning", "Unsupervised Learning"],
          explanation: "Supervised and Unsupervised Learning are two of the most common ML paradigms."
        },
        {
          question: "True or False: Reinforcement learning requires labeled data.",
          options: ["True", "False"],
          answer: "False",
          explanation: "Reinforcement learning learns from trial-and-error interactions, not labeled datasets."
        },
        {
          question: "What does overfitting mean in ML?",
          options: [
            "The model performs poorly on training data",
            "The model cannot learn at all",
            "The model performs well on training data but poorly on unseen data",
            "The model has high bias"
          ],
          answer: "The model performs well on training data but poorly on unseen data",
          explanation: "Overfitting occurs when a model memorizes training data instead of generalizing."
        },
        {
          question: "Which ML metric is most appropriate for imbalanced classification?",
          options: ["Accuracy", "Precision", "Recall", "F1 Score"],
          answer: "F1 Score",
          explanation: "F1 balances precision and recall — helpful in imbalanced datasets."
        },
        {
          question: "Which of the following are true about supervised learning? (Select two)",
          options: [
            "Data must be labeled",
            "Works best with unsorted data",
            "Can be used for regression and classification",
            "Cannot generalize"
          ],
          answer: ["Data must be labeled", "Can be used for regression and classification"],
          explanation: "Supervised learning uses labeled data and applies to regression/classification."
        },
        {
          question: "You’re building a model to classify emails as spam or not. Which ML type is best?",
          options: ["Unsupervised", "Reinforcement", "Supervised", "Generative"],
          answer: "Supervised",
          explanation: "You have labeled examples (spam/not spam), so supervised learning is ideal."
        },
        {
          question: "Which term describes when a model is too simple to capture data patterns?",
          options: ["Overfitting", "Data Drift", "Underfitting", "Data Leakage"],
          answer: "Underfitting",
          explanation: "Underfitting means the model fails to learn meaningful trends."
        },
        {
          question: "Which components are part of an ML lifecycle? (Select three)",
          options: ["Data Collection", "Model Deployment", "Frontend Design", "Model Evaluation"],
          answer: ["Data Collection", "Model Deployment", "Model Evaluation"],
          explanation: "Frontend design is unrelated. The others are core parts of ML pipelines."
        },
        {
          question: "What is the purpose of a loss function?",
          options: [
            "Helps visualize model architecture",
            "Calculates difference between predictions and actual values",
            "Increases accuracy",
            "Compresses data"
          ],
          answer: "Calculates difference between predictions and actual values",
          explanation: "Loss functions guide training by showing prediction error."
        },
        {
          question: "Which of the following best represents a regression problem?",
          options: [
            "Predicting if a transaction is fraudulent",
            "Predicting tomorrow’s temperature",
            "Grouping customers by behavior",
            "Matching images to text"
          ],
          answer: "Predicting tomorrow’s temperature",
          explanation: "Regression predicts continuous numeric values."
        },
        {
          question: "Which evaluation metric is most appropriate for regression?",
          options: ["F1 Score", "Accuracy", "Recall", "RMSE"],
          answer: "RMSE",
          explanation: "Root Mean Square Error (RMSE) measures error in regression tasks."
        },
        {
          question: "True or False: Validation data is used during training to tune hyperparameters.",
          options: ["True", "False"],
          answer: "True",
          explanation: "Validation sets guide model tuning before testing on unseen data."
        },
        {
          question: "Which of the following best reduces overfitting?",
          options: [
            "Using fewer epochs",
            "Adding more layers",
            "Removing dropout",
            "Using more validation data"
          ],
          answer: "Using fewer epochs",
          explanation: "Overfitting can be mitigated by limiting training time (early stopping)."
        },
        {
          question: "Which ML task is clustering associated with?",
          options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Regression"],
          answer: "Unsupervised Learning",
          explanation: "Clustering groups data based on similarity without labels."
        },
        {
          question: "Which of the following algorithms are commonly used in classification tasks?",
          options: ["K-Means", "Linear Regression", "Logistic Regression", "SVM"],
          answer: ["Logistic Regression", "SVM"],
          explanation: "Logistic Regression and Support Vector Machines are used for classification."
        },
        {
          question: "Which data preprocessing steps are common in ML? (Select two)",
          options: ["Feature Scaling", "Model Deployment", "Missing Value Imputation", "Monitoring"],
          answer: ["Feature Scaling", "Missing Value Imputation"],
          explanation: "These improve model performance and data consistency."
        },
        {
          question: "You want your model to adapt in real time. What learning type fits?",
          options: ["Batch Learning", "Online Learning", "Unsupervised", "Generative"],
          answer: "Online Learning",
          explanation: "Online learning adapts as new data comes in."
        },
        {
          question: "What is a feature in ML?",
          options: [
            "The model’s final output",
            "A column in the dataset used for prediction",
            "A training algorithm",
            "The evaluation method"
          ],
          answer: "A column in the dataset used for prediction",
          explanation: "Features are input variables for models."
        },
        {
          question: "Which of these are examples of real-world supervised learning problems? (Select two)",
          options: [
            "Predicting house prices",
            "Grouping documents by topic",
            "Fraud detection",
            "Visualizing high-dimensional data"
          ],
          answer: ["Predicting house prices", "Fraud detection"],
          explanation: "Both are label-based prediction problems."
        },
        {
            question: "What is Generative AI?",
            options: [
              "AI that classifies inputs",
              "AI that performs supervised learning",
              "AI that creates new content based on training data",
              "AI that compresses large datasets"
            ],
            answer: "AI that creates new content based on training data",
            explanation: "Generative AI can produce text, images, music, and more from patterns in training data."
          },
          {
            question: "Which of the following are common types of generative models? (Select two)",
            options: ["GANs", "Decision Trees", "VAEs", "K-Means"],
            answer: ["GANs", "VAEs"],
            explanation: "Generative Adversarial Networks and Variational Autoencoders are widely used generative models."
          },
          {
            question: "What are the two parts of a GAN?",
            options: ["Input and Output", "Generator and Discriminator", "Encoder and Decoder", "Prompt and Context"],
            answer: "Generator and Discriminator",
            explanation: "GANs consist of a Generator (creates data) and a Discriminator (evaluates it)."
          },
          {
            question: "True or False: Generative AI models only work with text data.",
            options: ["True", "False"],
            answer: "False",
            explanation: "Generative models can generate text, images, music, code, and more."
          },
          {
            question: "What is 'prompt engineering'?",
            options: [
              "A way to train models from scratch",
              "Writing effective inputs to guide generative AI",
              "Improving compute efficiency",
              "Building model pipelines"
            ],
            answer: "Writing effective inputs to guide generative AI",
            explanation: "Prompt engineering improves the quality of outputs from foundation models."
          },
          {
            question: "Which AWS service provides foundation model access via API?",
            options: ["Amazon SageMaker", "Amazon Comprehend", "Amazon Bedrock", "Amazon Rekognition"],
            answer: "Amazon Bedrock",
            explanation: "Bedrock provides access to FMs from providers like Anthropic, AI21, Meta, and Amazon Titan."
          },
          {
            question: "What are tokens in large language models (LLMs)?",
            options: [
              "Training epochs",
              "Data clusters",
              "Chunks of text (words, subwords)",
              "Model parameters"
            ],
            answer: "Chunks of text (words, subwords)",
            explanation: "LLMs break input into tokens — the units it processes and generates."
          },
          {
            question: "Which of the following are limitations of generative AI? (Select two)",
            options: ["Hallucinations", "Perfect factual accuracy", "Bias", "Low latency"],
            answer: ["Hallucinations", "Bias"],
            explanation: "Generative models may produce inaccurate or biased content."
          },
          {
            question: "What does 'hallucination' mean in generative AI?",
            options: [
              "The model stops generating",
              "The model produces incorrect or made-up facts",
              "The model repeats outputs",
              "The model uses too many tokens"
            ],
            answer: "The model produces incorrect or made-up facts",
            explanation: "Hallucination is when a model gives outputs that sound right but are wrong."
          },
          {
            question: "What is few-shot learning?",
            options: [
              "Training from scratch with large datasets",
              "Learning from many examples",
              "Learning from a small number of examples in a prompt",
              "Zero model tuning"
            ],
            answer: "Learning from a small number of examples in a prompt",
            explanation: "Few-shot learning enables generative models to generalize from minimal examples."
          },
          {
            question: "What is the role of the decoder in a transformer model?",
            options: [
              "Encrypts model weights",
              "Filters training data",
              "Generates output sequence from hidden representations",
              "Prepares input tokens"
            ],
            answer: "Generates output sequence from hidden representations",
            explanation: "In text generation tasks, the decoder predicts the next token using context."
          },
          {
            question: "Which of the following AWS services integrate with Amazon Bedrock? (Select two)",
            options: ["SageMaker JumpStart", "Amazon Lex", "Amazon Polly", "LangChain on SageMaker"],
            answer: ["Amazon Lex", "LangChain on SageMaker"],
            explanation: "Lex + Bedrock enable conversational AI, LangChain builds multi-step agents."
          },
          {
            question: "Which is a key advantage of using foundation models?",
            options: [
              "They require no GPU resources",
              "They are small and lightweight",
              "They generalize across many tasks without retraining",
              "They are rule-based"
            ],
            answer: "They generalize across many tasks without retraining",
            explanation: "Foundation models are pre-trained on vast data and fine-tuned or prompted for specific tasks."
          },
          {
            question: "A business wants to summarize customer support logs. Which AWS tool helps?",
            options: ["Amazon Rekognition", "Amazon Translate", "Amazon Bedrock", "AWS WAF"],
            answer: "Amazon Bedrock",
            explanation: "Bedrock can run FMs that summarize, translate, classify, and generate text."
          },
          {
            question: "Which of the following are responsible AI concerns in generative models? (Select two)",
            options: ["Latency", "Bias", "Toxic content", "Low memory usage"],
            answer: ["Bias", "Toxic content"],
            explanation: "Generative models may amplify harmful stereotypes or produce offensive language."
          },
          {
            question: "True or False: Amazon Titan models support text embedding and text generation.",
            options: ["True", "False"],
            answer: "True",
            explanation: "Titan includes Titan Text G1 for generation and Titan Embeddings for search and retrieval."
          },
          {
            question: "A developer wants to chain a summarizer + translator together. What should they use?",
            options: ["S3 Trigger", "LangChain", "Amazon VPC", "SNS"],
            answer: "LangChain",
            explanation: "LangChain enables chaining foundation model calls for multi-step workflows."
          },
          {
            question: "Which of the following describes zero-shot learning?",
            options: [
              "Using GPU accelerators",
              "Using a prompt without any examples",
              "Training on a small dataset",
              "Generating images instead of text"
            ],
            answer: "Using a prompt without any examples",
            explanation: "Zero-shot learning allows models to perform tasks with no training examples provided."
          },
          {
            question: "Which Titan model is used for generating embeddings?",
            options: ["Titan G1", "Titan Embeddings G1", "Titan Text V1", "Titan Translate"],
            answer: "Titan Embeddings G1",
            explanation: "Embeddings G1 provides vector representations for search and personalization."
          },
          {
            question: "What technique helps reduce hallucinations in generative AI?",
            options: [
              "Model pruning",
              "Prompt engineering",
              "Data compression",
              "Faster tokenization"
            ],
            answer: "Prompt engineering",
            explanation: "Well-structured prompts guide the model toward grounded responses."
          },
          {
            question: "Which tasks are generative AI suitable for? (Select two)",
            options: ["Forecasting numeric trends", "Text summarization", "Generating customer reviews", "Optimizing SQL queries"],
            answer: ["Text summarization", "Generating customer reviews"],
            explanation: "Generative AI is great for content creation, summarization, and more."
          },
          {
            question: "What is temperature in generative text models?",
            options: [
              "Model efficiency score",
              "How sensitive the model is to security risks",
              "Controls creativity vs. determinism in outputs",
              "Training step indicator"
            ],
            answer: "Controls creativity vs. determinism in outputs",
            explanation: "Higher temperature = more diverse responses. Lower = more focused and repetitive."
          },
          {
            question: "A financial company needs factual answers grounded in documents. What should they use?",
            options: ["Image captioning", "RAG with embeddings", "GANs", "Polly"],
            answer: "RAG with embeddings",
            explanation: "Retrieval-Augmented Generation (RAG) grounds outputs using indexed context."
          },

            {
              question: "What is the core benefit of using foundation models (FMs)?",
              options: [
                "They are small and easy to train from scratch",
                "They support only structured data",
                "They are general-purpose models pre-trained on large datasets",
                "They are rule-based decision systems"
              ],
              answer: "They are general-purpose models pre-trained on large datasets",
              explanation: "FMs can be adapted to a wide variety of tasks using prompts or fine-tuning."
            },
            {
              question: "Which AWS service provides fully managed access to foundation models via API?",
              options: ["Amazon Comprehend", "Amazon Bedrock", "Amazon Translate", "Amazon SageMaker Canvas"],
              answer: "Amazon Bedrock",
              explanation: "Bedrock enables building and scaling GenAI apps without managing infrastructure."
            },
            {
              question: "What task is best suited for text embeddings from FMs?",
              options: ["Speech synthesis", "Classification", "Similarity search", "Text-to-image"],
              answer: "Similarity search",
              explanation: "Embeddings represent text as vectors, ideal for semantic search and retrieval."
            },
            {
              question: "Which Titan model is used for generating embeddings?",
              options: ["Titan Text G1", "Titan Translate", "Titan Embeddings G1", "Titan Audio G1"],
              answer: "Titan Embeddings G1",
              explanation: "Embeddings G1 creates numerical vector representations of text."
            },
            {
              question: "A developer wants to summarize long articles. What should they use?",
              options: ["Rekognition", "Polly", "FM summarization task", "Ground Truth"],
              answer: "FM summarization task",
              explanation: "Foundation models can summarize documents with minimal configuration."
            },
            {
              question: "Which of the following tasks can foundation models perform? (Select two)",
              options: ["Speech synthesis", "Text generation", "Image captioning", "User authorization"],
              answer: ["Text generation", "Image captioning"],
              explanation: "FMs can perform generation, Q&A, summarization, translation, captioning, etc."
            },
            {
              question: "What is the purpose of grounding in RAG (Retrieval-Augmented Generation)?",
              options: [
                "To summarize outputs",
                "To compress responses",
                "To provide external knowledge to improve factual accuracy",
                "To remove sensitive data"
              ],
              answer: "To provide external knowledge to improve factual accuracy",
              explanation: "RAG enriches prompts with context retrieved from knowledge bases or databases."
            },
            {
              question: "Which AWS tool lets you build multi-step FM agents and workflows?",
              options: ["Amazon SageMaker", "LangChain with Bedrock", "Polly", "Athena"],
              answer: "LangChain with Bedrock",
              explanation: "LangChain enables complex GenAI applications by chaining model calls and logic."
            },
            {
              question: "You want to extract customer sentiment from reviews. Which FM task is ideal?",
              options: ["Classification", "Translation", "Embedding", "Transcription"],
              answer: "Classification",
              explanation: "FMs can classify text by sentiment or intent using natural prompts."
            },
            {
              question: "True or False: You must fine-tune a foundation model to use it in production.",
              options: ["True", "False"],
              answer: "False",
              explanation: "Most tasks can be completed with zero-shot or few-shot prompting without fine-tuning."
            },
            {
              question: "A legal firm wants to search through thousands of documents using meaning-based queries. What should they use?",
              options: ["Traditional keyword search", "FM classification", "Embeddings + RAG", "Comprehend"],
              answer: "Embeddings + RAG",
              explanation: "Embeddings power semantic search; RAG enables context-aware answering."
            },
            {
              question: "What is the advantage of multi-modal foundation models?",
              options: [
                "They work only with audio",
                "They have higher memory requirements",
                "They process and generate multiple input types (e.g., text and image)",
                "They support legacy systems"
              ],
              answer: "They process and generate multiple input types (e.g., text and image)",
              explanation: "Multi-modal FMs can handle text, images, audio, and more in a unified model."
            },
            {
              question: "Which is a common use case for FM-powered chatbots?",
              options: [
                "Automated invoice generation",
                "Predicting customer churn",
                "Dynamic customer support responses",
                "Analyzing structured sensor data"
              ],
              answer: "Dynamic customer support responses",
              explanation: "FMs can power natural, multi-turn conversations with customers."
            },
            {
              question: "A company wants an AI assistant that integrates calendar, email, and documents. What is this called?",
              options: ["RAG bot", "Multimodal model", "FM agent", "Summarizer"],
              answer: "FM agent",
              explanation: "Agents use FMs and plugins/tools to complete multi-step tasks."
            },
            {
              question: "Which AWS service allows visual interface for FM tasks without code?",
              options: ["Amazon SageMaker JumpStart", "Amazon Bedrock Console", "SageMaker Studio Lab", "SageMaker Canvas"],
              answer: "SageMaker Canvas",
              explanation: "Canvas offers a no-code interface for exploring and building ML and GenAI apps."
            },
            {
              question: "A finance app uses FM to auto-generate budget insights. What is this?",
              options: ["Data leakage", "Summarization", "Content moderation", "Translation"],
              answer: "Summarization",
              explanation: "FMs can turn structured or unstructured data into actionable summaries."
            },
            {
              question: "Which technique uses FM outputs to generate multiple diverse answers?",
              options: ["Prompt tuning", "Sampling with temperature", "Bias detection", "Encryption"],
              answer: "Sampling with temperature",
              explanation: "Temperature affects randomness and diversity of generated text."
            },
            {
              question: "A user wants an FM to write in a specific tone and format. What should they do?",
              options: ["Adjust batch size", "Use prompt engineering", "Set temperature to 0", "Enable dynamic routing"],
              answer: "Use prompt engineering",
              explanation: "Detailed instructions in the prompt can guide tone, format, and style."
            },
            {
              question: "Which tool helps chain FM calls with memory, tools, and agents?",
              options: ["Amazon Athena", "Bedrock CLI", "LangChain", "GuardDuty"],
              answer: "LangChain",
              explanation: "LangChain adds state, control, and tool integration to foundation models."
            },
            {
              question: "True or False: Prompt templates can help reuse prompts at scale.",
              options: ["True", "False"],
              answer: "True",
              explanation: "Templates let developers standardize prompt patterns across applications."
            },
            {
              question: "What is a typical use of embedding-based similarity search?",
              options: ["Detecting malware", "Finding duplicate files", "Question-answering over documents", "Managing access keys"],
              answer: "Question-answering over documents",
              explanation: "Embeddings help match semantically related queries and document passages."
            },
            {
              question: "What is the primary output of a classification task using FMs?",
              options: ["Summarized content", "Numerical vector", "Label or category", "Document image"],
              answer: "Label or category",
              explanation: "Classification outputs are predefined labels like 'positive' or 'urgent'."
            },
            {
              question: "An internal tool lets users search using natural language. What powers this?",
              options: ["Rule-based engine", "Embeddings + vector database", "Lambda function", "CloudFront"],
              answer: "Embeddings + vector database",
              explanation: "Vector DBs store embeddings for fast semantic similarity search."
            },
            {
              question: "What is one way to prevent model misuse in public-facing FM apps?",
              options: [
                "Use stronger GPUs",
                "Restrict prompts to internal users",
                "Apply content moderation filters",
                "Enable high temperature"
              ],
              answer: "Apply content moderation filters",
              explanation: "Filtering toxic/abusive outputs helps maintain safe user experiences."
            },
            {
              question: "A team wants a model that describes uploaded images in text. What task is this?",
              options: ["Text-to-image", "Image captioning", "Q&A", "Text classification"],
              answer: "Image captioning",
              explanation: "Multi-modal models can analyze images and describe them with text."
            },
            {
              question: "Which of these best supports search over knowledge bases using FMs?",
              options: ["S3 lifecycle rules", "Polly", "RAG pipeline", "AutoML"],
              answer: "RAG pipeline",
              explanation: "RAG pipelines improve accuracy and factuality by grounding generation in relevant content."
            },
            {
              question: "You want to summarize FAQs in different languages. What combination should you use?",
              options: ["Bedrock + Translate", "Canvas + Textract", "Rekognition + Lex", "Glue + S3"],
              answer: "Bedrock + Translate",
              explanation: "Bedrock generates summaries; Translate makes them multilingual."
            },
          
                {
                  question: "What is the goal of Responsible AI?",
                  options: [
                    "Maximize GPU efficiency",
                    "Ensure ethical and fair AI practices",
                    "Automate all human decisions",
                    "Reduce cloud costs"
                  ],
                  answer: "Ensure ethical and fair AI practices",
                  explanation: "Responsible AI focuses on fairness, transparency, accountability, and safety."
                },
                {
                  question: "Which AWS tool helps detect bias in ML models?",
                  options: ["Amazon Rekognition", "SageMaker Clarify", "Textract", "Kinesis"],
                  answer: "SageMaker Clarify",
                  explanation: "Clarify analyzes data and model outputs to detect potential bias."
                },
                {
                  question: "What is algorithmic bias?",
                  options: [
                    "Data encrypted with keys",
                    "The model consumes too much RAM",
                    "Systematic unfairness in model predictions",
                    "Bias caused by slow GPUs"
                  ],
                  answer: "Systematic unfairness in model predictions",
                  explanation: "Algorithmic bias can occur when training data reflects societal or historical bias."
                },
                {
                  question: "Why is model explainability important?",
                  options: [
                    "It improves model training speed",
                    "It helps interpret and trust predictions",
                    "It eliminates the need for validation sets",
                    "It boosts accuracy in all cases"
                  ],
                  answer: "It helps interpret and trust predictions",
                  explanation: "Explainable models are easier to validate and debug."
                },
                {
                  question: "Which of the following promotes fairness in datasets?",
                  options: [
                    "Removing all labels",
                    "Ensuring diverse and representative data",
                    "Using only synthetic data",
                    "Encrypting all data before training"
                  ],
                  answer: "Ensuring diverse and representative data",
                  explanation: "Diversity reduces bias by covering more scenarios and groups."
                },
                {
                  question: "What is differential privacy?",
                  options: [
                    "Limiting GPU usage",
                    "An encryption technique for IAM",
                    "A technique to protect individual data by adding noise",
                    "A method for data compression"
                  ],
                  answer: "A technique to protect individual data by adding noise",
                  explanation: "Differential privacy prevents individual data from being easily reverse-engineered."
                },
                {
                  question: "Which practice enhances transparency in AI models?",
                  options: [
                    "Hiding model logs",
                    "Using closed-source models",
                    "Providing audit trails and model documentation",
                    "Disabling monitoring"
                  ],
                  answer: "Providing audit trails and model documentation",
                  explanation: "Transparency means clearly communicating how models are built, trained, and used."
                },
                {
                  question: "Which AWS service logs API calls and user actions for compliance?",
                  options: ["SageMaker", "CloudTrail", "CloudWatch", "Translate"],
                  answer: "CloudTrail",
                  explanation: "CloudTrail enables auditing by recording AWS API usage and access history."
                },
                {
                  question: "True or False: Using biased historical data can result in biased model outcomes.",
                  options: ["True", "False"],
                  answer: "True",
                  explanation: "Bias in data leads to bias in predictions unless mitigated during preprocessing."
                },
                {
                  question: "A bank uses AI to approve loans. How can it ensure fairness?",
                  options: [
                    "Train only on recent applicants",
                    "Use black-box models",
                    "Conduct fairness audits and bias testing",
                    "Exclude all demographic features"
                  ],
                  answer: "Conduct fairness audits and bias testing",
                  explanation: "Fairness audits and tools like Clarify help validate equal treatment."
                },
                {
                  question: "Which is a sign of potential bias in a classification model?",
                  options: [
                    "Low accuracy on training set",
                    "Same performance across all groups",
                    "Unequal precision or recall between subgroups",
                    "Fast inference time"
                  ],
                  answer: "Unequal precision or recall between subgroups",
                  explanation: "Performance differences can reveal discriminatory behavior."
                },
                {
                  question: "What role does human oversight play in responsible AI?",
                  options: [
                    "None — models are fully autonomous",
                    "Prevent automation",
                    "Validate outputs and reduce automation failures",
                    "Only used in offline systems"
                  ],
                  answer: "Validate outputs and reduce automation failures",
                  explanation: "Human-in-the-loop systems help ensure quality and catch edge cases."
                },
                {
                  question: "Which one is NOT a principle of responsible AI?",
                  options: ["Fairness", "Transparency", "Accountability", "Overfitting"],
                  answer: "Overfitting",
                  explanation: "Overfitting is a model issue, not a guiding principle for responsible AI."
                },
                {
                  question: "What is the risk of deploying an unexplainable model in healthcare?",
                  options: [
                    "Faster inference",
                    "More GPU usage",
                    "Lack of trust and unclear decision rationale",
                    "Better memory efficiency"
                  ],
                  answer: "Lack of trust and unclear decision rationale",
                  explanation: "Transparency and explainability are critical in high-stakes domains like healthcare."
                },

                    {
                      question: "What AWS service manages encryption keys for ML data security?",
                      options: ["CloudWatch", "IAM", "KMS", "S3"],
                      answer: "KMS",
                      explanation: "AWS Key Management Service (KMS) manages encryption keys to protect data and models."
                    },
                    {
                      question: "What does IAM stand for?",
                      options: [
                        "Instance Access Manager",
                        "Identity and Access Management",
                        "Internal Audit Monitor",
                        "Inference Authentication Module"
                      ],
                      answer: "Identity and Access Management",
                      explanation: "IAM is AWS’s system for managing user access and permissions."
                    },
                    {
                      question: "What is the purpose of SageMaker Model Monitor?",
                      options: [
                        "Launch training jobs",
                        "Generate predictions",
                        "Detect data drift in production models",
                        "Encrypt datasets"
                      ],
                      answer: "Detect data drift in production models",
                      explanation: "Model Monitor tracks input/output drift and alerts you to changes over time."
                    },
                    {
                      question: "Which AWS service logs API calls for auditing and compliance?",
                      options: ["Amazon Polly", "CloudTrail", "Forecast", "Lex"],
                      answer: "CloudTrail",
                      explanation: "CloudTrail provides a history of AWS API calls for security audits."
                    },
                    {
                      question: "What is the best way to restrict access to sensitive ML endpoints?",
                      options: [
                        "Use public IPs with rate limits",
                        "Encrypt output data only",
                        "Apply IAM policies and VPC restrictions",
                        "Use Lambda to mask predictions"
                      ],
                      answer: "Apply IAM policies and VPC restrictions",
                      explanation: "IAM and VPC settings control and isolate endpoint access effectively."
                    },
                    {
                      question: "True or False: SageMaker endpoints can run inside a VPC for private access.",
                      options: ["True", "False"],
                      answer: "True",
                      explanation: "VPC-enabled endpoints prevent public access and increase network security."
                    },
                    {
                      question: "What helps enforce security best practices in CI/CD pipelines?",
                      options: ["Lambda triggers", "Secrets Manager", "CodePipeline with manual approvals", "Forecast scheduling"],
                      answer: "CodePipeline with manual approvals",
                      explanation: "Manual approvals help ensure compliance and review before deployment."
                    },
                    {
                      question: "You need to encrypt training data at rest and in transit. What should you use?",
                      options: ["IAM and Secrets Manager", "KMS and SSL", "CloudTrail and SNS", "Lex and Polly"],
                      answer: "KMS and SSL",
                      explanation: "KMS encrypts at rest, and SSL/TLS secures data in transit."
                    },
                    {
                      question: "What is the role of AWS Secrets Manager in ML workflows?",
                      options: [
                        "Monitor endpoints",
                        "Encrypt SageMaker logs",
                        "Manage and rotate sensitive credentials",
                        "Trigger model deployments"
                      ],
                      answer: "Manage and rotate sensitive credentials",
                      explanation: "Secrets Manager handles access tokens, database passwords, and API keys securely."
                    },
                    {
                      question: "Which control helps prevent unintended public access to ML data in S3?",
                      options: [
                        "Enable versioning",
                        "Set up lifecycle rules",
                        "Use bucket policies and block public access",
                        "Assign a custom domain"
                      ],
                      answer: "Use bucket policies and block public access",
                      explanation: "Bucket policies and access blocks ensure ML data remains private."
                    },
                    {
                      question: "How can an organization track changes to access policies and user actions?",
                      options: [
                        "By monitoring Lambda functions",
                        "Using IAM Role chaining",
                        "With AWS Config and CloudTrail",
                        "With Lex logs"
                      ],
                      answer: "With AWS Config and CloudTrail",
                      explanation: "Config tracks resource configurations, while CloudTrail logs user activity."
                    },
                    {
                      question: "Your team wants to restrict model access to internal users only. What approach should you use?",
                      options: [
                        "Use global endpoints",
                        "Add API keys to the code",
                        "Deploy inside a VPC with IAM access control",
                        "Enable CloudFront"
                      ],
                      answer: "Deploy inside a VPC with IAM access control",
                      explanation: "This ensures secure, private access to models within the organization."
                    },
                    {
                      question: "What AWS service allows policy evaluation to simulate IAM changes?",
                      options: ["IAM Simulator", "KMS Inspector", "Config Explorer", "Access Tracker"],
                      answer: "IAM Simulator",
                      explanation: "IAM Policy Simulator helps test policies before applying them."
                    },
                    {
                      question: "Which of the following is essential to comply with data governance regulations?",
                      options: [
                        "Use lightweight models",
                        "Enable autoscaling",
                        "Encrypt data, log access, and control permissions",
                        "Limit S3 storage classes"
                      ],
                      answer: "Encrypt data, log access, and control permissions",
                      explanation: "Governance requires full auditability, security, and controlled access."
                    }
                  
                   
              
              
          
          
        
      ]
      
      
  
  

export default function QuizChapter13() {
  const [questions] = React.useState(() => shuffleArray(allQuestions))
  const [current, setCurrent] = React.useState(0)
  const [selected, setSelected] = React.useState(null)
  const [score, setScore] = React.useState(0)
  const [showResult, setShowResult] = React.useState(false)
  const [answers, setAnswers] = React.useState([])

  const currentQ = questions[current]

  const handleAnswer = (option) => {
    setSelected(option)
    setAnswers((prev) => [...prev, { ...currentQ, selected: option }])
    if (option === currentQ.answer) setScore((s) => s + 1)
  }

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setShowResult(true)
    }
  }

  const retryQuiz = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <Layout>
      <Wrapper>
        <h1>📝 Final Exam </h1>

        {!showResult ? (
          <div className="question">
            <p><strong>Q{current + 1}:</strong> {currentQ.question}</p>
            {currentQ.options.map((opt) => (
              <div key={opt}>
                <button onClick={() => handleAnswer(opt)} disabled={selected !== null}>
                  {opt}
                </button>
              </div>
            ))}
            {selected && (
              <p className="feedback">
                {selected === currentQ.answer ? "✅ Correct!" : `❌ Incorrect. Correct: ${currentQ.answer}`}
              </p>
            )}
            {selected && <button onClick={nextQuestion}>Next</button>}
          </div>
        ) : (
          <div>
            <h2>✅ Your Score: {score} / {questions.length}</h2>
            <p>{score >= questions.length * 0.8 ? "🎉 Awesome job!" : "📚 Review and try again!"}</p>

            <button onClick={retryQuiz}>🔁 Retry Quiz</button>

            <div className="review">
              <h3>📝 Review:</h3>
              {answers.map((item, i) => (
                <div key={i}>
                  <p><strong>Q{i + 1}:</strong> {item.question}</p>
                  <p>
                    Your Answer:{" "}
                    <span className={item.selected === item.answer ? "correct" : "wrong"}>
                      {item.selected}
                    </span>
                  </p>
                  <p>Correct Answer: {item.answer}</p>
                  <p><em>🧠 {item.explanation}</em></p>
                  <hr />
                </div>
              ))}
            </div>

            <div className="button-nav">
              <Link to="/chapter-13">← Back to Chapter 13</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
