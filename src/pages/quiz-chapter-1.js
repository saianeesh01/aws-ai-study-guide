import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5)
  }
const Wrapper = styled.div`
  background: black;
  color: #00ff90;
  font-family: "Courier New", monospace;
  padding: 3rem 2rem;
  min-height: 100vh;

  h1 {
    color: #00ff90;
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
    padding: 1rem;
    background: #111;
    border: 1px solid #00ff90;
    border-radius: 10px;

    p {
      margin: 0.3rem 0;
    }

    .wrong {
      color: red;
    }

    .correct {
      color: #00ff90;
    }
  }
`

const allQuestions = [
    {
      question: "Which of the following is NOT a type of ML?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Structured Learning"],
      answer: "Structured Learning",
      explanation: "Structured Learning is not a standard ML paradigm. The three main types are supervised, unsupervised, and reinforcement learning."
    },
    {
      question: "What is the purpose of inference in ML?",
      options: [
        "Collect data",
        "Make predictions using a trained model",
        "Improve training speed",
        "Reduce overfitting"
      ],
      answer: "Make predictions using a trained model",
      explanation: "Inference means applying a trained model to new data to generate predictions."
    },
    {
      question: "Overfitting occurs when...",
      options: [
        "The model performs well on new data",
        "The model memorizes training data",
        "The model misses patterns",
        "The data is clean"
      ],
      answer: "The model memorizes training data",
      explanation: "Overfitting happens when a model learns the training data too well and fails to generalize to new data."
    },
    {
      question: "What is labeled data?",
      options: ["Data with missing values", "Data containing both input and output", "Unsorted data", "Data from sensors"],
      answer: "Data containing both input and output",
      explanation: "Labeled data includes inputs paired with correct outputs — it's used in supervised learning."
    },
    {
      question: "Which ML type finds hidden patterns in data?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
      answer: "Unsupervised Learning",
      explanation: "Unsupervised learning analyzes unlabeled data to discover structure or groupings."
    },
    {
      question: "Which ML type is most used in classification tasks?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
      answer: "Supervised Learning",
      explanation: "Supervised learning uses labeled data, ideal for classification and regression tasks."
    },
    {
      question: "What does 'training a model' mean?",
      options: ["Optimizing hardware", "Testing predictions", "Feeding data into a model to adjust weights", "Setting up AWS infrastructure"],
      answer: "Feeding data into a model to adjust weights",
      explanation: "Training means adjusting model parameters based on data to minimize error."
    },
    {
      question: "Which is an example of reinforcement learning?",
      options: ["Spam filtering", "Movie recommendations", "Game-playing AI", "Speech recognition"],
      answer: "Game-playing AI",
      explanation: "Reinforcement learning is used in dynamic environments where agents learn through feedback, like games."
    },
    {
      question: "What is underfitting?",
      options: [
        "Model is too simple to learn from data",
        "Model performs well on validation data",
        "Model overlearns patterns",
        "Model is slow"
      ],
      answer: "Model is too simple to learn from data",
      explanation: "Underfitting occurs when a model fails to capture the underlying patterns of the data."
    },
    {
      question: "What is the role of features in ML?",
      options: ["Store results", "Train algorithms", "Represent inputs to the model", "Evaluate performance"],
      answer: "Represent inputs to the model",
      explanation: "Features are the measurable properties or inputs used to train a model."
    },
    {
      question: "Which data is used to evaluate the model's performance?",
      options: ["Training Data", "Validation Data", "Noise Data", "Input Data"],
      answer: "Validation Data",
      explanation: "Validation data is used to fine-tune and evaluate the model's performance before final testing."
    },
    {
      question: "What is a predictive model?",
      options: ["Model that can classify only", "Model built without data", "Model that makes future predictions", "Template for input"],
      answer: "Model that makes future predictions",
      explanation: "Predictive models are trained to forecast outcomes based on past patterns."
    },
    {
      question: "What is data quality important for in ML?",
      options: ["Hardware speed", "Model complexity", "Accurate predictions", "Reducing features"],
      answer: "Accurate predictions",
      explanation: "Poor quality data results in unreliable predictions and poor generalization."
    },
    {
      question: "Which of the following is an example of supervised learning?",
      options: ["K-means clustering", "Spam detection", "Principal component analysis", "Anomaly detection"],
      answer: "Spam detection",
      explanation: "Spam detection uses labeled data (spam vs not spam), making it a supervised learning task."
    },
    {
      question: "Which algorithm is commonly used for clustering?",
      options: ["Linear Regression", "K-Means", "Decision Trees", "Naive Bayes"],
      answer: "K-Means",
      explanation: "K-Means is a popular unsupervised algorithm for grouping data points into clusters."
    },
    {
      question: "Which ML task requires a reward system to learn?",
      options: ["Clustering", "Classification", "Regression", "Reinforcement Learning"],
      answer: "Reinforcement Learning",
      explanation: "Reinforcement learning uses a feedback loop of rewards and penalties to train agents."
    },
    {
      question: "In supervised learning, the target variable is...",
      options: ["The feature", "The predicted output", "The clustering label", "The training set"],
      answer: "The predicted output",
      explanation: "In supervised learning, models are trained to predict a target/output variable."
    },
    {
      question: "What does a confusion matrix show?",
      options: [
        "How confused the model is",
        "Training data structure",
        "True vs predicted values",
        "Feature importance"
      ],
      answer: "True vs predicted values",
      explanation: "Confusion matrices show actual vs predicted labels in classification problems."
    },
    {
      question: "Which of the following is a regression task?",
      options: [
        "Spam detection",
        "Image classification",
        "Stock price prediction",
        "Customer segmentation"
      ],
      answer: "Stock price prediction",
      explanation: "Regression predicts continuous values like stock prices or temperatures."
    },
    {
      question: "Which concept helps avoid overfitting?",
      options: [
        "High learning rate",
        "Early stopping",
        "Underfitting",
        "Poor features"
      ],
      answer: "Early stopping",
      explanation: "Early stopping halts training when performance stops improving on validation data, reducing overfitting."
    },
    {
        question: "You're building a spam detection system. Which ML type should you use?",
        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Deep Learning"],
        answer: "Supervised Learning",
        explanation: "Spam detection requires labeled data (spam vs. not spam), which fits supervised learning."
      },
      {
        question: "A retailer wants to group customers by buying habits without labels. Which approach fits?",
        options: ["Classification", "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
        answer: "Unsupervised Learning",
        explanation: "No labels = unsupervised learning. It's great for customer segmentation."
      },
      {
        question: "A self-driving car learns by trial and error. What ML type is this?",
        options: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Regression"],
        answer: "Reinforcement Learning",
        explanation: "Trial and error with rewards = classic reinforcement learning."
      },
      {
        question: "You're training a model on 100,000 samples, but it performs poorly on new data. Likely cause?",
        options: ["Underfitting", "Overfitting", "Balanced data", "Perfect model"],
        answer: "Overfitting",
        explanation: "High accuracy on training but poor generalization = overfitting."
      },
      {
        question: "What should you do if your model is underfitting?",
        options: ["Simplify the model", "Reduce features", "Use more complex model", "Decrease training time"],
        answer: "Use more complex model",
        explanation: "Underfitting means the model is too simple — use a more complex one or improve features."
      },
      {
        question: "What is 'inference' in ML?",
        options: ["Labeling data", "Training the model", "Predicting with a trained model", "Hyperparameter tuning"],
        answer: "Predicting with a trained model",
        explanation: "Inference is the process of making predictions after the model is trained."
      },
      {
        question: "You want to identify anomalies in server logs. What's the best ML approach?",
        options: ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Data labeling"],
        answer: "Unsupervised Learning",
        explanation: "Anomaly detection often works without labels — unsupervised is ideal."
      },
      {
        question: "A company wants to recommend products based on user history. What powers this?",
        options: ["Data labeling", "Feature engineering", "Recommendation engines using ML", "Overfitting"],
        answer: "Recommendation engines using ML",
        explanation: "Recommendation systems rely on ML models using historical data."
      },
      {
        question: "Which technique is useful for reducing overfitting?",
        options: ["Adding more features", "Using complex models", "Regularization", "Decreasing data"],
        answer: "Regularization",
        explanation: "Regularization penalizes overly complex models to help generalize better."
      },
      {
        question: "Why is data quality important in machine learning?",
        options: ["Better UI design", "Increases inference speed", "Leads to more accurate models", "Reduces compute cost"],
        answer: "Leads to more accurate models",
        explanation: "The model is only as good as the data it learns from — garbage in, garbage out."
      }
    ]
  
  export default function QuizChapter1() {
    const [current, setCurrent] = React.useState(0)
    const [selected, setSelected] = React.useState(null)
    const [score, setScore] = React.useState(0)
    const [showResult, setShowResult] = React.useState(false)
    const [answers, setAnswers] = React.useState([])
  
 
    const [questions] = React.useState(() => shuffleArray(allQuestions))
    const currentQ = questions[current]
    const handleAnswer = (option) => {
      setSelected(option)
      setAnswers(prev => [...prev, { question: currentQ.question, selected: option, answer: currentQ.answer, explanation: currentQ.explanation }])
      if (option === currentQ.answer) {
        setScore(score + 1)
      }
    }
  
    const nextQuestion = () => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1)
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
          <h1>📝 Quiz: Chapter 1 – Introduction to Machine Learning</h1>
          {!showResult ? (
            <div className="question">
              <p><strong>Q{current + 1}:</strong> {currentQ.question}</p>
              {currentQ.options.map((opt) => (
                <div key={opt}>
                  <button
                    onClick={() => handleAnswer(opt)}
                    disabled={selected !== null}
                  >
                    {opt}
                  </button>
                </div>
              ))}
              {selected && (
                <p className="feedback">
                  {selected === currentQ.answer ? "✅ Correct!" : `❌ Incorrect. Correct answer: ${currentQ.answer}`}
                </p>
              )}
              {selected && (
                <button onClick={nextQuestion}>Next</button>
              )}
            </div>
          ) : (
            <div>
              <h2>Your Score: {score} / {questions.length}</h2>
              <p>{score >= questions.length * 0.8 ? "🎉 Great job!" : "🧠 Keep practicing!"}</p>
  
              <button onClick={retryQuiz}>🔁 Retry Quiz</button>
  
              <div className="review">
                <h3>📝 Review</h3>
                {answers.map((item, idx) => (
                  <div key={idx}>
                    <p><strong>Q{idx + 1}:</strong> {item.question}</p>
                    <p>
                      Your Answer:{" "}
                      <span className={item.selected === item.answer ? "correct" : "wrong"}>
                        {item.selected}
                      </span>
                    </p>
                    <p>✅ Correct: {item.answer}</p>
                    <p>🧠 {item.explanation}</p>
                    <hr />
                  </div>
                ))}
              </div>
  
              <div style={{ marginTop: "2rem" }}>
                <Link to="/chapter-1">← Back to Chapter 1</Link> |{" "}
                <Link to="/">🏠 Home</Link>
              </div>
            </div>
          )}
        </Wrapper>
      </Layout>
    )
  }
  
  export { Head }

