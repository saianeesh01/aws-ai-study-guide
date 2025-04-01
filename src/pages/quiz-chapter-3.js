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
`

const allQuestions = [

        {
          question: "What is the goal of data preprocessing?",
          options: [
            "Build the final model",
            "Collect raw data",
            "Transform raw data into usable format",
            "Run predictions"
          ],
          answer: "Transform raw data into usable format",
          explanation: "Data preprocessing ensures raw inputs are clean and usable for training ML models."
        },
        {
          question: "Which technique is used to bring values into a common scale?",
          options: ["Encoding", "Normalization", "Binning", "Sampling"],
          answer: "Normalization",
          explanation: "Normalization scales numeric data between 0 and 1 to prevent dominance by large values."
        },
        {
          question: "What is the purpose of one-hot encoding?",
          options: [
            "To normalize numerical data",
            "To convert text into lowercase",
            "To convert categorical data into binary format",
            "To impute missing values"
          ],
          answer: "To convert categorical data into binary format",
          explanation: "One-hot encoding transforms categories into a series of binary columns for ML use."
        },
        {
          question: "Which data issue can cause overfitting?",
          options: [
            "Duplicates",
            "Incomplete data",
            "Clean data",
            "Low variance"
          ],
          answer: "Duplicates",
          explanation: "Duplicates can cause the model to memorize patterns that aren’t truly meaningful."
        },
        {
          question: "What is outlier detection used for?",
          options: [
            "Identify frequently occurring values",
            "Remove random noise",
            "Find values that deviate significantly from the norm",
            "Impute missing values"
          ],
          answer: "Find values that deviate significantly from the norm",
          explanation: "Outliers can skew model predictions and are often removed or treated specially."
        },
        {
          question: "Which technique is used to fill missing data using average?",
          options: [
            "Encoding",
            "Mean imputation",
            "Scaling",
            "Sampling"
          ],
          answer: "Mean imputation",
          explanation: "Mean imputation replaces missing values with the average of that feature."
        },
        {
          question: "What is feature engineering?",
          options: [
            "Scaling features",
            "Removing features",
            "Creating new input variables from raw data",
            "Collecting more data"
          ],
          answer: "Creating new input variables from raw data",
          explanation: "Feature engineering boosts performance by extracting insights from existing data."
        },
        {
          question: "Structured data is commonly found in...",
          options: ["Images", "Video", "CSV files", "Audio recordings"],
          answer: "CSV files",
          explanation: "CSV and tabular data are examples of structured data with defined columns/rows."
        },
        {
          question: "Which split is used to tune hyperparameters?",
          options: ["Training set", "Test set", "Validation set", "Entire dataset"],
          answer: "Validation set",
          explanation: "The validation set helps optimize model settings before testing."
        },
        {
          question: "What is the role of feature scaling?",
          options: [
            "Improve data collection",
            "Adjust the number of features",
            "Ensure uniform contribution of all features",
            "Change feature names"
          ],
          answer: "Ensure uniform contribution of all features",
          explanation: "Scaling ensures large-valued features don’t overpower smaller ones."
        },
        {
            question: "An e-commerce dataset has customer ages ranging from 18 to 80. What should you apply before using it in kNN?",
            options: ["Feature extraction", "Encoding", "Normalization", "Binning"],
            answer: "Normalization",
            explanation: "kNN is distance-based; normalization prevents age from dominating the metric."
          },
          {
            question: "You're training a model on social media posts. Which preprocessing step is domain-specific?",
            options: ["Log transformation", "Removing duplicates", "Tokenization and stemming", "Min-max scaling"],
            answer: "Tokenization and stemming",
            explanation: "Text preprocessing requires breaking words down and reducing them to root forms."
          },
          {
            question: "A healthcare ML model predicts patient readmission. You find duplicate patient records. What should you do?",
            options: ["Ignore them", "Include them", "Delete duplicates", "Label them as outliers"],
            answer: "Delete duplicates",
            explanation: "Duplicates can mislead the model, especially in healthcare where accuracy matters."
          },
          {
            question: "Your model predicts loan approvals. The dataset is 95% approved, 5% denied. What should you do?",
            options: ["Oversample the minority class", "Normalize the features", "Reduce data size", "Remove outliers"],
            answer: "Oversample the minority class",
            explanation: "Balancing classes helps avoid biased predictions."
          },
          {
            question: "You’re using images for object detection. What is one preprocessing step?",
            options: ["Tokenization", "Image scaling/resizing", "Label encoding", "Remove duplicates"],
            answer: "Image scaling/resizing",
            explanation: "Images should be resized for consistent input into ML models like CNNs."
          },
          {
            question: "In fraud detection, how should outliers be handled?",
            options: ["Always remove them", "Use them as signal", "Cap them at mean", "Ignore them"],
            answer: "Use them as signal",
            explanation: "In anomaly detection like fraud, outliers are often the very signals you want."
          },
          {
            question: "You collect sales data daily but there are missing days. What technique helps?",
            options: ["Binarization", "Time series interpolation", "Label encoding", "Shuffling"],
            answer: "Time series interpolation",
            explanation: "Interpolation estimates missing values in a time-aware way."
          },
          {
            question: "You're deploying a model to predict energy usage. You receive new data weekly. What should you use?",
            options: ["Static dataset", "Real-time imputation", "Data pipeline", "Manual preprocessing"],
            answer: "Data pipeline",
            explanation: "Pipelines automate incoming data transformation for continual learning."
          },
          {
            question: "You find several mislabeled rows in your training data. What's the impact?",
            options: [
              "Better generalization",
              "Faster training",
              "Increased model accuracy",
              "Reduced model performance"
            ],
            answer: "Reduced model performance",
            explanation: "Label noise makes it harder for the model to learn correct patterns."
          },
          {
            question: "A client gives you survey data in Excel. It has columns like 'Agree', 'Disagree', and 'Neutral'. What preprocessing do you use?",
            options: ["Binarization", "One-hot encoding", "Standardization", "Clustering"],
            answer: "One-hot encoding",
            explanation: "Convert categorical responses into binary columns for model input."
          }
        ]
         


export default function QuizChapter3() {
  const [questions] = React.useState(() => [...allQuestions].sort(() => Math.random() - 0.5))
  const [current, setCurrent] = React.useState(0)
  const [selected, setSelected] = React.useState(null)
  const [score, setScore] = React.useState(0)
  const [showResult, setShowResult] = React.useState(false)
  const [answers, setAnswers] = React.useState([])

  const currentQ = questions[current]

  const handleAnswer = (option) => {
    setSelected(option)
    setAnswers(prev => [...prev, { ...currentQ, selected: option }])
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
        <h1>📝 Quiz: Chapter 3 – Data Collection & Preparation</h1>
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
                {selected === currentQ.answer ? "✅ Correct!" : `❌ Incorrect. Correct: ${currentQ.answer}`}
              </p>
            )}
            {selected && (
              <button onClick={nextQuestion}>Next</button>
            )}
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

            <div style={{ marginTop: "2rem" }}>
              <Link to="/chapter-2">← Back to Chapter 2</Link> |{" "}
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
