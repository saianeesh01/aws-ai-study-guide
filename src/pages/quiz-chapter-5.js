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
    question: "What is the main purpose of model training?",
    options: ["Deploy the model", "Minimize error using data", "Store predictions", "Split the dataset"],
    answer: "Minimize error using data",
    explanation: "Model training teaches the model to recognize patterns by minimizing prediction errors."
  },
  {
    question: "Which dataset is used to tune hyperparameters?",
    options: ["Training set", "Test set", "Validation set", "Raw set"],
    answer: "Validation set",
    explanation: "Validation sets help optimize model settings without using test data."
  },
  {
    question: "What does a low bias and high variance model indicate?",
    options: ["Underfitting", "Perfect model", "Overfitting", "Balanced model"],
    answer: "Overfitting",
    explanation: "It means the model is too sensitive to training data but not generalizing well."
  },
  {
    question: "What metric is ideal for imbalanced classification?",
    options: ["Accuracy", "Precision", "F1 Score", "RMSE"],
    answer: "F1 Score",
    explanation: "F1 Score balances precision and recall — useful when class distribution is uneven."
  },
  {
    question: "What is the role of a loss function?",
    options: ["Select features", "Reduce dataset size", "Guide optimization", "Monitor inference"],
    answer: "Guide optimization",
    explanation: "Loss functions quantify prediction error and help the model learn."
  },
  {
    question: "Which technique helps reduce overfitting?",
    options: ["Add more layers", "Use larger batch sizes", "Early stopping", "Reduce training data"],
    answer: "Early stopping",
    explanation: "Early stopping halts training before the model memorizes the training set."
  },
  {
    question: "What does RMSE measure?",
    options: ["Classification accuracy", "Prediction error", "Model speed", "Data skew"],
    answer: "Prediction error",
    explanation: "RMSE evaluates how far off continuous predictions are from actual values."
  },
  {
    question: "Which algorithm updates weights to reduce error?",
    options: ["Backpropagation", "Gradient Descent", "Activation", "Dropout"],
    answer: "Gradient Descent",
    explanation: "Gradient descent is the core optimization technique for minimizing loss."
  },
  {
    question: "What is the purpose of splitting datasets?",
    options: ["Better accuracy", "Faster models", "Reliable evaluation", "Avoid duplicate data"],
    answer: "Reliable evaluation",
    explanation: "Dataset splits help test model performance realistically."
  },
  {
    question: "What happens if a model has high bias?",
    options: ["It memorizes noise", "It fails to learn", "It performs perfectly", "It overfits"],
    answer: "It fails to learn",
    explanation: "High bias means the model is too simple and underfits the data."
  },
  {
    question: "A bank trains a model to predict loan default. What’s a good metric to reduce false approvals?",
    options: ["Precision", "Recall", "RMSE", "Accuracy"],
    answer: "Precision",
    explanation: "Precision helps ensure predicted 'defaults' are truly defaults — reducing false positives."
  },
  {
    question: "A fraud detection model performs well on training data but fails on real data. What is this?",
    options: ["Underfitting", "Overfitting", "Balanced learning", "Generalization"],
    answer: "Overfitting",
    explanation: "Overfitting occurs when models fail to generalize to new inputs."
  },
  {
    question: "You’re evaluating an image classifier on unseen images. What data split is used?",
    options: ["Training", "Validation", "Test", "Unlabeled"],
    answer: "Test",
    explanation: "The test set checks final performance after all tuning."
  },
  {
    question: "A recommendation engine performs poorly after deployment. What should be done?",
    options: ["Increase epochs", "Retrain with new data", "Switch to SVM", "Use fewer features"],
    answer: "Retrain with new data",
    explanation: "The model may face data drift — retraining with updated data helps."
  },
  {
    question: "A chatbot is too generic and doesn’t personalize replies. What could help?",
    options: ["Add noise to training", "Use more validation data", "Improve training data diversity", "Reduce model depth"],
    answer: "Improve training data diversity",
    explanation: "Better data coverage helps capture more conversational nuance."
  },
  {
    question: "Which metric is useful when predicting rare diseases?",
    options: ["Recall", "Accuracy", "F1 Score", "Precision"],
    answer: "Recall",
    explanation: "Recall ensures the model finds as many true positive cases as possible."
  },
  {
    question: "Your model takes too long to train. Which strategy could help?",
    options: ["Decrease learning rate", "Use gradient clipping", "Mini-batch training", "Add noise"],
    answer: "Mini-batch training",
    explanation: "Mini-batches reduce memory usage and improve training speed."
  },
  {
    question: "Which part of ML workflow comes immediately after training?",
    options: ["Preprocessing", "Deployment", "Evaluation", "Feature selection"],
    answer: "Evaluation",
    explanation: "After training, models are evaluated using metrics on validation/test sets."
  },
  {
    question: "You are tuning a model but test performance isn’t improving. Likely issue?",
    options: ["Data imbalance", "Overfitting to validation", "High bias", "Bad metric"],
    answer: "Overfitting to validation",
    explanation: "Too much tuning on validation can lead to indirect overfitting."
  },
  {
    question: "An app updates its language model daily. What concept does this reflect?",
    options: ["Transfer learning", "Retraining loop", "Static inference", "Preprocessing"],
    answer: "Retraining loop",
    explanation: "The model is regularly retrained to reflect changing language patterns."
  }
]

export default function QuizChapter5() {
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
        <h1>📝 Quiz: Chapter 5 – Model Training & Evaluation</h1>

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
              <Link to="/chapter-5">← Back to Chapter 5</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
