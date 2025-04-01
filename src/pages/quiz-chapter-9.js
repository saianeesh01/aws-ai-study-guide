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
      question: "What is Amazon Forecast used for?",
      options: ["Analyzing images", "Text classification", "Time-series forecasting", "Speech synthesis"],
      answer: "Time-series forecasting",
      explanation: "Forecast uses ML to predict future values in time-series data."
    },
    {
      question: "Which dataset is required in Forecast?",
      options: ["Related Time Series", "Target Time Series", "Item Metadata", "Ground Truth"],
      answer: "Target Time Series",
      explanation: "This dataset contains the actual values you want to forecast."
    },
    {
      question: "What file format does Forecast expect?",
      options: ["JSON", "XML", "CSV", "XLSX"],
      answer: "CSV",
      explanation: "CSV format is required with specific columns like timestamp, item_id, target_value."
    },
    {
      question: "What is a Predictor in Forecast?",
      options: ["A visual graph", "A scheduled task", "A trained model", "An S3 bucket"],
      answer: "A trained model",
      explanation: "It’s the core model used to make predictions."
    },
    {
      question: "What is Forecast Horizon?",
      options: ["How long to retain data", "Duration of model training", "How far into the future to predict", "How many files to process"],
      answer: "How far into the future to predict",
      explanation: "It determines how many steps ahead the model forecasts."
    },
    {
      question: "What does P90 quantile indicate?",
      options: ["Low confidence", "Maximum value", "Conservative prediction", "Overfitting"],
      answer: "Conservative prediction",
      explanation: "P90 means 90% of values are expected to fall below this number."
    },
    {
      question: "Where must you upload input data for Forecast?",
      options: ["RDS", "S3", "DynamoDB", "EFS"],
      answer: "S3",
      explanation: "Amazon Forecast reads time-series input from S3."
    },
    {
      question: "What kind of forecasts does DeepAR+ support?",
      options: ["Binary classification", "Time-series predictions", "Image analysis", "Natural language translation"],
      answer: "Time-series predictions",
      explanation: "DeepAR+ is optimized for complex time-series forecasting."
    },
    {
      question: "What domain should be used for retail use cases?",
      options: ["METRICS", "INVENTORY", "RETAIL", "FINANCE"],
      answer: "RETAIL",
      explanation: "Forecast lets you select a domain to optimize for your use case."
    },
    {
      question: "Which metric is NOT used by Forecast?",
      options: ["WQL", "RMSE", "MAPE", "BLEU"],
      answer: "BLEU",
      explanation: "BLEU is used in translation tasks, not forecasting."
    },
  
    // Real-World Questions
    {
      question: "A store wants to predict weekly product sales. Which service do they use?",
      options: ["Amazon Translate", "Amazon Forecast", "Amazon Lex", "Amazon SageMaker"],
      answer: "Amazon Forecast",
      explanation: "Forecast helps retail stores manage inventory based on sales predictions."
    },
    {
      question: "A logistics team wants to forecast delivery volumes. Best solution?",
      options: ["Textract", "Forecast", "Comprehend", "Rekognition"],
      answer: "Forecast",
      explanation: "It's built for demand, volume, or resource forecasting in business scenarios."
    },
    {
      question: "How can a hospital use Amazon Forecast?",
      options: ["Detect faces in records", "Predict patient inflow", "Translate medical documents", "Build a chatbot"],
      answer: "Predict patient inflow",
      explanation: "Forecast can help staff plan shifts based on historical volume trends."
    },
    {
      question: "A travel app wants to predict hotel demand for peak seasons. Which tool fits?",
      options: ["Rekognition", "Polly", "Forecast", "Transcribe"],
      answer: "Forecast",
      explanation: "Forecast is perfect for seasonal demand prediction."
    },
    {
      question: "A telecom wants to predict internet usage by region. What should they use?",
      options: ["Forecast", "Comprehend", "Polly", "Translate"],
      answer: "Forecast",
      explanation: "Time-series forecasting supports capacity planning in high-usage periods."
    },
    {
      question: "A startup wants to retrain forecasts monthly. How should they automate it?",
      options: ["S3 triggers", "CloudWatch Events + Lambda", "Polly script", "Manual CLI commands"],
      answer: "CloudWatch Events + Lambda",
      explanation: "Scheduled automation ensures updated predictions with new data."
    },
    {
      question: "A chain of gyms wants to predict attendance. What Forecast feature helps?",
      options: ["Key-Value input", "Metadata feature", "Quantile outputs", "Named entity recognition"],
      answer: "Quantile outputs",
      explanation: "Helps plan for average and worst-case attendance to staff accordingly."
    },
    {
      question: "What AWS integration is best for storing predictions post-forecast?",
      options: ["S3", "CloudFront", "SNS", "Redshift"],
      answer: "S3",
      explanation: "Predicted values are exported to S3 for analysis or integration."
    },
    {
      question: "A sales dashboard needs daily updates from Forecast. What pattern should be used?",
      options: ["Manual CLI", "API integration", "Email polling", "CloudTrail logs"],
      answer: "API integration",
      explanation: "Real-time predictions can be pulled into dashboards using APIs."
    },
    {
      question: "Which AWS service is used to visualize forecasts?",
      options: ["Quicksight", "Textract", "Transcribe", "Lex"],
      answer: "Quicksight",
      explanation: "Forecast outputs can be imported into QuickSight for visualization."
    }
  ]
  

export default function QuizChapter7() {
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
        <h1>📝 Quiz: Chapter 8:  Computer Vision with AWS (Rekognition, Textract)</h1>

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
              <Link to="/chapter-9">← Back to Chapter 9</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
