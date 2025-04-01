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
        question: "Which service would you use to extract key-value pairs from scanned forms?",
        options: ["Amazon Textract", "Amazon Rekognition", "Amazon Polly", "SageMaker Ground Truth"],
        answer: "Amazon Textract",
        explanation: "Textract extracts structured text from scanned documents like forms and tables."
      },
      {
        question: "What is Amazon Personalize mainly used for?",
        options: ["Speech recognition", "Building recommendation systems", "Image detection", "Model training"],
        answer: "Building recommendation systems",
        explanation: "Amazon Personalize creates personalized user experiences like recommendations."
      },
      {
        question: "Which AWS service is ideal for translating text between languages?",
        options: ["Amazon Transcribe", "Amazon Translate", "Amazon Comprehend", "Amazon Lex"],
        answer: "Amazon Translate",
        explanation: "Translate converts text between languages using neural machine translation."
      },
      {
        question: "What does SageMaker Autopilot automate?",
        options: ["Data storage", "Model selection and tuning", "Speech recognition", "Labeling"],
        answer: "Model selection and tuning",
        explanation: "Autopilot automatically chooses algorithms and tunes them."
      },
      {
        question: "What is the output of Amazon Transcribe?",
        options: ["Audio", "Text", "Language codes", "Images"],
        answer: "Text",
        explanation: "Amazon Transcribe converts audio to written text."
      },
      {
        question: "Which AWS service would you use to detect objects in images?",
        options: ["Comprehend", "Polly", "Rekognition", "Lex"],
        answer: "Rekognition",
        explanation: "Amazon Rekognition detects objects, faces, and activities in images and videos."
      },
      {
        question: "What is the role of SageMaker Model Monitor?",
        options: ["Converts images to text", "Tracks model performance in production", "Speech synthesis", "Encrypts training data"],
        answer: "Tracks model performance in production",
        explanation: "Model Monitor checks for data drift or accuracy decline in deployed models."
      },
      {
        question: "You want to build a customer support chatbot. Which service do you use?",
        options: ["Amazon Comprehend", "Amazon Polly", "Amazon Lex", "Amazon Forecast"],
        answer: "Amazon Lex",
        explanation: "Lex enables voice and text conversational interfaces."
      },
      {
        question: "Which service would you use to get product demand forecasts?",
        options: ["Forecast", "Textract", "Transcribe", "Polly"],
        answer: "Forecast",
        explanation: "Amazon Forecast is used for time series forecasting tasks like demand prediction."
      },
      {
        question: "What is Amazon Comprehend primarily used for?",
        options: ["Translating text", "Text-to-speech", "Extracting insights from text", "Speech recognition"],
        answer: "Extracting insights from text",
        explanation: "Comprehend uses NLP to find sentiment, key phrases, and entities in text."
      },
      {
        question: "A hospital needs real-time transcription of doctor-patient conversations. Which service fits?",
        options: ["Amazon Polly", "Amazon Transcribe", "Amazon Lex", "SageMaker Studio"],
        answer: "Amazon Transcribe",
        explanation: "Transcribe is designed for real-time speech-to-text conversion."
      },
      {
        question: "A retailer wants to recommend products based on customer history. Which AWS service should they use?",
        options: ["Amazon Comprehend", "Amazon Personalize", "Amazon Rekognition", "Amazon Textract"],
        answer: "Amazon Personalize",
        explanation: "Personalize builds and deploys personalized recommendation models."
      },
      {
        question: "Your app needs to read IDs from scanned images. What service should be used?",
        options: ["Amazon Lex", "Amazon Forecast", "Amazon Textract", "Amazon Polly"],
        answer: "Amazon Textract",
        explanation: "Textract reads text and form data from scanned images/documents."
      },
      {
        question: "You need to forecast future traffic on a website. Which tool works best?",
        options: ["Amazon Forecast", "Amazon Translate", "Amazon Polly", "Amazon Lex"],
        answer: "Amazon Forecast",
        explanation: "Forecast is used for time series data forecasting like traffic or sales."
      },
      {
        question: "An ecommerce platform wants to show similar products using image similarity. Which service helps?",
        options: ["Amazon Polly", "Amazon Rekognition", "Amazon Transcribe", "Amazon Forecast"],
        answer: "Amazon Rekognition",
        explanation: "Rekognition supports face and object comparison across images."
      },
      {
        question: "Which SageMaker component lets you run notebooks in the cloud?",
        options: ["SageMaker Studio", "SageMaker Pipelines", "Notebook Instance", "SageMaker Model Monitor"],
        answer: "Notebook Instance",
        explanation: "Notebook instances are managed compute environments for ML development."
      },
      {
        question: "A support center wants to analyze sentiment from chat logs. What service can help?",
        options: ["Amazon Translate", "Amazon Forecast", "Amazon Comprehend", "Amazon Lex"],
        answer: "Amazon Comprehend",
        explanation: "Comprehend can extract sentiment and key phrases from text data."
      },
      {
        question: "You want to convert user input into speech. What AWS service is suitable?",
        options: ["Amazon Comprehend", "Amazon Textract", "Amazon Polly", "Amazon Lex"],
        answer: "Amazon Polly",
        explanation: "Polly converts written text into lifelike spoken audio."
      },
      {
        question: "What AWS service allows real-time inference on incoming data?",
        options: ["S3", "SageMaker Endpoint", "Comprehend", "Glue"],
        answer: "SageMaker Endpoint",
        explanation: "Endpoints serve trained models and return predictions in real time."
      },
      {
        question: "Which AWS ML service supports building no-code workflows with templates?",
        options: ["SageMaker Studio", "SageMaker JumpStart", "Forecast", "Textract"],
        answer: "SageMaker JumpStart",
        explanation: "JumpStart offers built-in solutions and models to simplify getting started."
      }
    ]


export default function QuizChapter6() {
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
        <h1>📝 Quiz: Chapter 6: Model Deployment & Monitoring</h1>

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
              <Link to="/chapter-6">← Back to Chapter 6</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
