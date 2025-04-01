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
        question: "What AWS service extracts key-value pairs from documents?",
        options: ["Amazon Comprehend", "Amazon Rekognition", "Amazon Textract", "Amazon Translate"],
        answer: "Amazon Textract",
        explanation: "Textract goes beyond OCR to extract structured fields like forms and tables."
      },
      {
        question: "Which service can detect faces in real-time video?",
        options: ["Amazon Polly", "Amazon Translate", "Amazon Rekognition", "Amazon Transcribe"],
        answer: "Amazon Rekognition",
        explanation: "Rekognition's Video API detects and tracks faces and objects in real-time streams."
      },
      {
        question: "What is required to perform text detection with Rekognition?",
        options: ["A trained model", "Document templates", "A JPEG or PNG image", "A CSV file"],
        answer: "A JPEG or PNG image",
        explanation: "Rekognition supports text detection in supported image formats."
      },
      {
        question: "What kind of output does Textract provide?",
        options: ["PDF", "Plain Text", "Key-value structured JSON", "HTML"],
        answer: "Key-value structured JSON",
        explanation: "It returns nested JSON with blocks for pages, lines, key-value sets, etc."
      },
      {
        question: "Can Rekognition detect unsafe content?",
        options: ["Yes", "No", "Only for videos", "Only with custom models"],
        answer: "Yes",
        explanation: "Rekognition moderation APIs detect nudity, violence, and offensive content."
      },
      {
        question: "What is face comparison useful for?",
        options: ["Analyzing documents", "Matching faces across photos", "Translating expressions", "Sorting files"],
        answer: "Matching faces across photos",
        explanation: "Useful for verifying identities, such as in secure access or social media."
      },
      {
        question: "How does Textract handle tables?",
        options: ["Ignores them", "Only extracts text", "Extracts structure and cells", "Uses ML to guess values"],
        answer: "Extracts structure and cells",
        explanation: "Textract can detect table rows and columns explicitly."
      },
      {
        question: "Which service helps identify celebrities in media?",
        options: ["Textract", "Polly", "Translate", "Rekognition"],
        answer: "Rekognition",
        explanation: "Rekognition includes a celebrity recognition feature for media content."
      },
      {
        question: "Rekognition moderation labels help with:",
        options: ["Enhancing contrast", "Filtering explicit content", "Identifying syntax", "Summarizing topics"],
        answer: "Filtering explicit content",
        explanation: "Helps flag unsafe content in user-generated images and videos."
      },
      {
        question: "Which use case best fits Textract?",
        options: ["Speech-to-text transcription", "Document scanning and field extraction", "Image labeling", "Recommendation engines"],
        answer: "Document scanning and field extraction",
        explanation: "Textract is built to understand and structure document content."
      },
    
      // 🔍 Real-world scenario questions
    
      {
        question: "An HR system wants to extract names and dates from resumes. Which service fits?",
        options: ["Lex", "Rekognition", "Textract", "Transcribe"],
        answer: "Textract",
        explanation: "Textract can read forms and extract fields from scanned documents."
      },
      {
        question: "A bank uses Rekognition to verify customer IDs. What feature are they using?",
        options: ["Object detection", "Celebrity detection", "Face comparison", "Emotion analysis"],
        answer: "Face comparison",
        explanation: "Rekognition compares live selfies to stored ID images."
      },
      {
        question: "A video platform wants to block violent uploads. Which API helps?",
        options: ["Textract", "Translate", "Rekognition Moderation", "Comprehend"],
        answer: "Rekognition Moderation",
        explanation: "It flags unsafe or sensitive content automatically."
      },
      {
        question: "A delivery company wants to count vehicles in camera footage. Which service applies?",
        options: ["Lex", "Forecast", "Rekognition Video", "Textract"],
        answer: "Rekognition Video",
        explanation: "It processes live or stored videos and tracks object counts."
      },
      {
        question: "A healthcare company scans prescriptions to digitize records. Best fit?",
        options: ["Translate", "Textract", "Comprehend", "Personalize"],
        answer: "Textract",
        explanation: "Textract supports digitization of handwritten or printed forms."
      },
      {
        question: "A retail store detects shoppers not wearing masks. Which Rekognition feature helps?",
        options: ["Face Detection", "PPE Detection", "Label Detection", "Celebrity Matching"],
        answer: "PPE Detection",
        explanation: "Rekognition PPE detection can monitor safety gear compliance."
      },
      {
        question: "A security team monitors video feeds for trespassing. Which AWS tool is ideal?",
        options: ["Polly", "Forecast", "Rekognition", "SageMaker"],
        answer: "Rekognition",
        explanation: "Rekognition can track people in live or recorded footage."
      },
      {
        question: "How could Textract improve insurance claims processing?",
        options: ["Translates forms", "Detects fraud", "Extracts claim details from scanned forms", "Summarizes reports"],
        answer: "Extracts claim details from scanned forms",
        explanation: "Textract automates data extraction from paper forms."
      },
      {
        question: "A startup analyzes customer selfies for age prediction. Which Rekognition feature helps?",
        options: ["Emotion detection", "Age range estimation", "Label detection", "Text detection"],
        answer: "Age range estimation",
        explanation: "Rekognition can estimate age ranges as part of facial analysis."
      },
      {
        question: "An app uploads ID cards and extracts data into forms. What combo works best?",
        options: ["Rekognition + Translate", "Textract + Lambda", "Lex + SageMaker", "Comprehend + Rekognition"],
        answer: "Textract + Lambda",
        explanation: "Textract extracts data, Lambda can trigger downstream automation."
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
              <Link to="/chapter-8">← Back to Chapter 8</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
