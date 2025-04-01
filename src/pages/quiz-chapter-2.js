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
      "Train the model",
      "Visualize results",
      "Prepare data for modeling",
      "Improve GPU performance",
    ],
    answer: "Prepare data for modeling",
    explanation: "Data preprocessing prepares raw data into a clean and usable format for ML algorithms."
  },
  {
    question: "Which technique helps normalize numeric data?",
    options: ["Data augmentation", "Encoding", "Scaling", "Sampling"],
    answer: "Scaling",
    explanation: "Scaling adjusts numerical values to a common range (e.g., 0 to 1) to improve model performance."
  },
  {
    question: "What is data augmentation?",
    options: [
      "Removing duplicates from data",
      "Adding noise to break patterns",
      "Generating synthetic variations of existing data",
      "Sorting data for training",
    ],
    answer: "Generating synthetic variations of existing data",
    explanation: "Augmentation is often used in image/text datasets to increase diversity and avoid overfitting."
  },
  {
    question: "Which of the following is considered structured data?",
    options: ["CSV file", "Audio clip", "Image dataset", "Tweet text"],
    answer: "CSV file",
    explanation: "Structured data is organized in rows and columns like CSV, SQL, Excel, etc."
  },
  {
    question: "Why is removing duplicates important in data cleaning?",
    options: [
      "To save memory",
      "To avoid overfitting and bias",
      "To reduce training time",
      "To speed up inference",
    ],
    answer: "To avoid overfitting and bias",
    explanation: "Duplicate data can cause the model to give undue weight to repeated examples."
  },
  {
    question: "What are missing values in a dataset?",
    options: [
      "Features with high variance",
      "Data points that are 0",
      "Empty/null fields with no value",
      "Features with low importance"
    ],
    answer: "Empty/null fields with no value",
    explanation: "Missing values represent incomplete data — often denoted as null, NaN, or empty."
  },
  {
    question: "What technique can reduce dimensionality of data?",
    options: ["Scaling", "Encoding", "PCA", "Sampling"],
    answer: "PCA",
    explanation: "Principal Component Analysis (PCA) reduces the number of input variables while retaining key patterns."
  },
  {
    question: "Which of these is a valid data splitting strategy?",
    options: ["Train/Test/Validate", "Shuffle/Sort", "Encode/Decode", "Filter/Map"],
    answer: "Train/Test/Validate",
    explanation: "Splitting helps evaluate performance and prevent overfitting using distinct datasets."
  },
  {
    question: "Which AWS service helps with labeling data?",
    options: ["SageMaker Ground Truth", "CloudWatch", "Glue", "Redshift"],
    answer: "SageMaker Ground Truth",
    explanation: "Ground Truth helps automate and manage the process of data labeling."
  },
  {
    question: "When do you use one-hot encoding?",
    options: [
      "For numerical features",
      "For scaling images",
      "For categorical variables",
      "To reduce model size"
    ],
    answer: "For categorical variables",
    explanation: "One-hot encoding converts categories into binary columns for ML algorithms."
  },

  // Real-world scenario based questions 👇
  {
    question: "A company has customer purchase logs in CSV format. What type of data is this?",
    options: ["Structured", "Unstructured", "Semi-structured", "Non-numeric"],
    answer: "Structured",
    explanation: "CSV data is tabular and organized — classic structured data."
  },
  {
    question: "An e-commerce site wants to predict churn. What’s the first ML workflow step?",
    options: ["Train a model", "Choose an algorithm", "Define the problem", "Label the data"],
    answer: "Define the problem",
    explanation: "Before touching data, the business goal must be clearly defined."
  },
  {
    question: "You’re cleaning a dataset with inconsistent 'State' values (e.g., NY, N.Y., New York). What’s the fix?",
    options: ["Drop all rows", "Convert to lowercase", "Standardize labels", "Split the column"],
    answer: "Standardize labels",
    explanation: "Data cleaning often involves ensuring consistent formats across similar values."
  },
  {
    question: "You have 10,000 medical images but want more data variety. What should you do?",
    options: ["Drop half the data", "Use one-hot encoding", "Data augmentation", "Use text embeddings"],
    answer: "Data augmentation",
    explanation: "Augmentation techniques can expand image datasets (rotate, flip, blur, etc.)."
  },
  {
    question: "You notice most rows in a dataset are missing 'age'. What should you do?",
    options: [
      "Delete the column",
      "Delete the entire dataset",
      "Impute or drop rows",
      "Ignore it"
    ],
    answer: "Impute or drop rows",
    explanation: "Missing values can be handled via deletion or statistical imputation."
  },
  {
    question: "What should be done before applying a neural network to image data?",
    options: [
      "Convert it to CSV",
      "Apply PCA",
      "Normalize pixel values",
      "Add one-hot encoding"
    ],
    answer: "Normalize pixel values",
    explanation: "Pixel values are usually scaled to 0-1 or -1 to 1 to improve convergence."
  },
  {
    question: "You’re preparing log data for anomaly detection. What ML type is this?",
    options: ["Supervised", "Reinforcement", "Unsupervised", "Regression"],
    answer: "Unsupervised",
    explanation: "Anomaly detection often works without labels — ideal for unsupervised ML."
  },
  {
    question: "Which of these helps prevent data leakage during evaluation?",
    options: [
      "Using same data for train and test",
      "Shuffling all rows",
      "Separating train/test sets",
      "Overfitting the training set"
    ],
    answer: "Separating train/test sets",
    explanation: "Leakage occurs when training data influences test data — avoid by keeping them separate."
  },
  {
    question: "You’re given customer feedback text. What's the first step?",
    options: ["Split data", "Label it", "Tokenize & preprocess", "Run the model"],
    answer: "Tokenize & preprocess",
    explanation: "Text needs to be cleaned and transformed into vectors before training."
  },
  {
    question: "You’re building a dashboard to monitor ML model predictions. Which stage is this?",
    options: ["Data prep", "Evaluation", "Deployment", "Monitoring"],
    answer: "Monitoring",
    explanation: "This is part of post-deployment monitoring to detect issues like data drift."
  }
]

export default function QuizChapter2() {
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
        <h1>📝 Quiz: Chapter 2 – Data Collection & Preparation</h1>
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
