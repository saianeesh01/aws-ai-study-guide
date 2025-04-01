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
        question: "Which AWS service is used for sentiment analysis and entity recognition?",
        options: ["Amazon Translate", "Amazon Polly", "Amazon Lex", "Amazon Comprehend"],
        answer: "Amazon Comprehend",
        explanation: "Amazon Comprehend uses NLP to extract insights such as sentiment, entities, and key phrases from text."
      },
      {
        question: "What does Amazon Polly do?",
        options: ["Translate text", "Summarize documents", "Convert text to speech", "Detect sentiment"],
        answer: "Convert text to speech",
        explanation: "Polly generates lifelike speech from text using neural TTS models."
      },
      {
        question: "Which service is best for building voice or text chatbots?",
        options: ["Amazon Lex", "Amazon Translate", "Amazon Rekognition", "Amazon Comprehend"],
        answer: "Amazon Lex",
        explanation: "Lex allows you to build conversational interfaces for chatbots using ASR and NLU."
      },
      {
        question: "Which AWS service provides real-time language translation?",
        options: ["Amazon Polly", "Amazon Comprehend", "Amazon Translate", "Amazon Lex"],
        answer: "Amazon Translate",
        explanation: "Amazon Translate provides neural machine translation in real time."
      },
      {
        question: "Which component in Lex defines the user's goal?",
        options: ["Slot", "Intent", "Utterance", "Session"],
        answer: "Intent",
        explanation: "Intents represent what the user wants to achieve during the conversation."
      },
      {
        question: "What are 'slots' in Amazon Lex?",
        options: ["Voice commands", "Data inputs to fulfill an intent", "Keywords for NLP", "Chat triggers"],
        answer: "Data inputs to fulfill an intent",
        explanation: "Slots are parameters Lex collects to fulfill an intent."
      },
      {
        question: "Which language features can Comprehend extract?",
        options: ["Entities, syntax, sentiment", "Voices and tones", "Speech patterns", "Translation rules"],
        answer: "Entities, syntax, sentiment",
        explanation: "Comprehend performs named entity recognition, syntax analysis, and sentiment detection."
      },
      {
        question: "What does Lex use for understanding user inputs?",
        options: ["Speech synthesis", "Sentiment graphs", "Natural Language Understanding (NLU)", "Translation memory"],
        answer: "Natural Language Understanding (NLU)",
        explanation: "NLU helps Lex understand intent and extract data from speech or text inputs."
      },
      {
        question: "What format does Amazon Polly output?",
        options: ["Text", "MP3/OGG audio", "JSON", "Transcripts"],
        answer: "MP3/OGG audio",
        explanation: "Polly converts text to audio files in various formats like MP3 and OGG."
      },
      {
        question: "Which service offers custom entity recognition in NLP pipelines?",
        options: ["Amazon Translate", "Amazon Lex", "Amazon Comprehend", "Amazon Textract"],
        answer: "Amazon Comprehend",
        explanation: "Comprehend allows custom entity training to extract domain-specific terms from text."
      },
    
      // 🌍 Real-World Scenario Questions
    
      {
        question: "You want your news app to read articles aloud to users. Which AWS service do you use?",
        options: ["Amazon Translate", "Amazon Polly", "Amazon Lex", "Amazon Comprehend"],
        answer: "Amazon Polly",
        explanation: "Polly provides natural-sounding voice generation from text content."
      },
      {
        question: "A company wants to automatically translate customer feedback. Which service helps?",
        options: ["Amazon Comprehend", "Amazon Translate", "Amazon Lex", "Amazon SageMaker"],
        answer: "Amazon Translate",
        explanation: "Translate supports multilingual translation at scale with low latency."
      },
      {
        question: "You’re building a multilingual chatbot for an airline. What combination of services might you use?",
        options: ["Lex + Translate", "Comprehend + Polly", "Textract + Lex", "Rekognition + Polly"],
        answer: "Lex + Translate",
        explanation: "Lex powers the conversation, while Translate makes it multilingual."
      },
      {
        question: "A support team wants to analyze chat sentiment in real-time. Which AWS service fits?",
        options: ["Amazon Polly", "Amazon Translate", "Amazon Lex", "Amazon Comprehend"],
        answer: "Amazon Comprehend",
        explanation: "Comprehend detects real-time sentiment from incoming messages."
      },
      {
        question: "An education platform needs to convert quiz instructions to audio. What do they use?",
        options: ["Amazon Comprehend", "Amazon Lex", "Amazon Polly", "Amazon Rekognition"],
        answer: "Amazon Polly",
        explanation: "Polly enables accessibility by converting instructions to spoken voice."
      },
      {
        question: "You're building a chatbot that schedules appointments. Which Lex feature is essential?",
        options: ["Slots", "Sentiment tracking", "Speech-to-text", "Topic modeling"],
        answer: "Slots",
        explanation: "Slots collect key data like date, time, and location from user inputs."
      },
      {
        question: "A healthcare startup wants to extract medical terms from patient notes. What should they use?",
        options: ["Amazon Polly", "Amazon Translate", "Amazon Comprehend Medical", "Amazon Forecast"],
        answer: "Amazon Comprehend Medical",
        explanation: "Comprehend Medical extracts disease names, medications, and other clinical entities."
      },
      {
        question: "You need to localize product listings for international customers. What AWS service do you use?",
        options: ["Amazon Polly", "Amazon Comprehend", "Amazon Translate", "Amazon Lex"],
        answer: "Amazon Translate",
        explanation: "Translate supports localization by converting product text into multiple languages."
      },
      {
        question: "Your virtual assistant should speak in multiple voices. Which feature of Polly supports this?",
        options: ["Custom slots", "Neural voices", "Entity mapping", "Utterances"],
        answer: "Neural voices",
        explanation: "Polly’s neural voices deliver high-quality, expressive speech for different personas."
      },
      {
        question: "Your team needs to route customer chats based on detected emotions. What service helps?",
        options: ["Amazon Lex", "Amazon Translate", "Amazon Polly", "Amazon Comprehend"],
        answer: "Amazon Comprehend",
        explanation: "Comprehend's sentiment analysis helps triage or escalate messages based on tone."
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
              <Link to="/chapter-7">← Back to Chapter 7</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
