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
      question: "What is Amazon Personalize?",
      options: ["Chatbot builder", "Time-series forecaster", "Recommendation system", "Object detection tool"],
      answer: "Recommendation system",
      explanation: "Personalize builds and serves personalized user recommendations."
    },
    {
      question: "What is a recipe in Personalize?",
      options: ["Dataset upload format", "S3 storage setting", "Algorithm configuration", "Model type"],
      answer: "Algorithm configuration",
      explanation: "Recipes define the algorithms used for training solutions."
    },
    {
      question: "What dataset types are supported?",
      options: ["Metrics, Summary, Features", "Users, Items, Interactions", "Audio, Text, Images", "Only CSVs"],
      answer: "Users, Items, Interactions",
      explanation: "These form the core datasets for personalization."
    },
    {
      question: "How are recommendations delivered?",
      options: ["Email", "SNS", "API endpoint", "S3 sync"],
      answer: "API endpoint",
      explanation: "You use GetRecommendations or GetPersonalizedRanking via API."
    },
    {
      question: "What does an event tracker do?",
      options: ["Logs IAM roles", "Updates UI", "Tracks live user activity", "Optimizes latency"],
      answer: "Tracks live user activity",
      explanation: "Event trackers update interactions in real-time for live recommendations."
    },
    {
      question: "What metric is used to evaluate performance?",
      options: ["BLEU", "RMSE", "Precision@K", "WQL"],
      answer: "Precision@K",
      explanation: "Precision@K measures how often the top-K results were relevant."
    },
    {
      question: "Which recipe provides similar item results?",
      options: ["HRNN", "SIMS", "Popularity Count", "ARIMA"],
      answer: "SIMS",
      explanation: "SIMS finds items that are similar to a given input."
    },
    {
      question: "How do you retrain a model?",
      options: ["Use Lambda", "Create new campaign", "Create a new solution version", "Modify IAM role"],
      answer: "Create a new solution version",
      explanation: "A new version uses updated data for better performance."
    },
    {
      question: "What’s a cold-start solution?",
      options: ["Static config file", "Popular items model", "Hard-coded results", "Delete metadata"],
      answer: "Popular items model",
      explanation: "Cold-start scenarios fall back to popularity-based results."
    },
    {
      question: "Is metadata mandatory for training?",
      options: ["Yes", "No", "Only for HRNN", "Only for cold-start"],
      answer: "No",
      explanation: "Only the interaction dataset is required; metadata is optional."
    },
  
    // Real-world questions
    {
      question: "An e-commerce app wants to recommend products to users. Which AWS service fits?",
      options: ["Lex", "Forecast", "Personalize", "Rekognition"],
      answer: "Personalize",
      explanation: "Personalize builds scalable product recommendation engines."
    },
    {
      question: "A streaming platform wants to show 'Because you watched...' sections. Which recipe helps?",
      options: ["Popularity Count", "SIMS", "HRNN-Metadata", "AutoGluon"],
      answer: "HRNN-Metadata",
      explanation: "This recipe blends user history with metadata for better personalization."
    },
    {
      question: "A blog site wants to show trending posts. What should they use?",
      options: ["Comprehend", "Personalize with popularity count", "Translate", "Textract"],
      answer: "Personalize with popularity count",
      explanation: "Popularity-based ranking handles anonymous visitors effectively."
    },
    {
      question: "A travel app wants to suggest destinations based on user history. What dataset is most useful?",
      options: ["Interactions", "Item metadata", "IAM policies", "Images"],
      answer: "Interactions",
      explanation: "Interaction history helps drive personalized location suggestions."
    },
    {
      question: "An online store wants to personalize search results. What service supports this?",
      options: ["Lex", "Rekognition", "Personalize", "Glue"],
      answer: "Personalize",
      explanation: "Personalize enables re-ranking and relevance for search results."
    },
    {
      question: "A mobile app wants recommendations to adapt as users scroll. What is required?",
      options: ["SNS", "Event tracker", "Static files", "Translate"],
      answer: "Event tracker",
      explanation: "Event trackers update recommendations based on recent activity."
    },
    {
      question: "How should you handle a user with no history?",
      options: ["Return 404", "Use cold-start recipes", "Wait for data", "Skip user"],
      answer: "Use cold-start recipes",
      explanation: "These recipes return popular or category-based results."
    },
    {
      question: "A retailer wants to combine click, view, and buy signals. What dataset should they build?",
      options: ["User JSON", "Interaction dataset", "Lambda config", "SageMaker script"],
      answer: "Interaction dataset",
      explanation: "The interaction file logs these events and timestamps."
    },
    {
      question: "What service should a dev use to call Personalize recommendations in React?",
      options: ["S3 fetch", "CloudFront", "REST API", "Static import"],
      answer: "REST API",
      explanation: "Personalize provides live recommendation endpoints."
    },
    {
      question: "A dev team wants to filter recommendations by product category. What should they use?",
      options: ["Schema constraints", "Metadata filter", "Query param injection", "New training set"],
      answer: "Metadata filter",
      explanation: "Filters apply rules during recommendation retrieval (e.g., only 'shoes')."
    }
  ]
  
  

export default function QuizChapter11() {
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
        <h1>📝 Quiz: Chapter 10:  Computer Vision with AWS (Rekognition, Textract)</h1>

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
              <Link to="/chapter-10">← Back to Chapter 10</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
