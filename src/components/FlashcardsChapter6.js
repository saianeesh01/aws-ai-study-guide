import * as React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Card = styled.div`
  background: #111;
  border: 1px solid #00ff90;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Courier New", monospace;
  color: #00ff90;
  animation: ${fadeIn} 0.5s ease;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const Button = styled.button`
  background: #00ff90;
  color: black;
  border: none;
  padding: 0.6rem 1.2rem;
  margin-top: 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #00cc70;
  }
`

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

const flashcards = [
    { question: "What is Amazon SageMaker?", answer: "A fully managed service to build, train, and deploy ML models." },
    { question: "What is the purpose of SageMaker Studio?", answer: "A web-based IDE for building and managing ML workflows." },
    { question: "Which AWS service automates model building?", answer: "SageMaker Autopilot." },
    { question: "What is SageMaker Ground Truth?", answer: "A tool to label data using human annotators or automation." },
    { question: "What is Amazon Rekognition used for?", answer: "Image and video analysis using deep learning." },
    { question: "What is Amazon Comprehend?", answer: "A service for natural language processing (NLP)." },
    { question: "What does Amazon Textract do?", answer: "Extracts text and data from scanned documents." },
    { question: "Which service provides personalized recommendations?", answer: "Amazon Personalize." },
    { question: "What is Amazon Forecast used for?", answer: "Time series forecasting using ML." },
    { question: "What is Amazon Polly?", answer: "A service that turns text into realistic speech." },
    { question: "Which service helps build conversational interfaces?", answer: "Amazon Lex." },
    { question: "What is Amazon Translate?", answer: "Language translation using deep learning." },
    { question: "What does Amazon Transcribe do?", answer: "Converts speech to text." },
    { question: "What is a model endpoint in SageMaker?", answer: "A deployed model that can serve real-time predictions." },
    { question: "How does SageMaker Autopilot simplify ML?", answer: "It automatically selects algorithms and tunes models." },
    { question: "What is a notebook instance in SageMaker?", answer: "A compute environment to run Jupyter notebooks." },
    { question: "What role does AWS Lambda play in ML?", answer: "It can trigger ML inference and preprocess data." },
    { question: "What is data drift?", answer: "Changes in input data that reduce model accuracy over time." },
    { question: "What service helps monitor deployed models?", answer: "Amazon SageMaker Model Monitor." },
    { question: "What is batch inference?", answer: "Generating predictions on large batches of data." },
    { question: "How can you deploy multiple models in SageMaker?", answer: "Using multi-model endpoints." },
    { question: "What is AWS Marketplace for ML?", answer: "A catalog of pre-trained models and ML algorithms." },
    { question: "What is a container in SageMaker?", answer: "An isolated environment that packages code and dependencies." },
    { question: "Can SageMaker be used with custom ML frameworks?", answer: "Yes, via custom Docker containers." },
    { question: "What is transfer learning?", answer: "Using a pre-trained model and adapting it to a new task." },
    { question: "Why use SageMaker Pipelines?", answer: "To automate and manage end-to-end ML workflows." },
    { question: "How does SageMaker JumpStart help beginners?", answer: "Provides templates and pre-trained models to get started quickly." },
    { question: "What does 'Bring Your Own Model' mean?", answer: "Deploying a custom-trained model on SageMaker." },
    { question: "Which service supports real-time language translation?", answer: "Amazon Translate." },
    { question: "What type of learning does Lex use for conversation flows?", answer: "Supervised learning and natural language understanding." }
  ]
  

export default function FlashcardsChapter6() {
  const [shuffledCards] = React.useState(() => shuffleArray(flashcards))
  const [index, setIndex] = React.useState(0)
  const [showAnswer, setShowAnswer] = React.useState(false)

  const nextCard = () => {
    setShowAnswer(false)
    setIndex((prev) => (prev + 1) % shuffledCards.length)
  }

  return (
    <Card>
      <h2>🧠 Flashcard {index + 1} of {shuffledCards.length}</h2>
      <p>{shuffledCards[index].question}</p>
      {showAnswer && <p><strong>Answer:</strong> {shuffledCards[index].answer}</p>}
      <div>
        <Button onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
        <Button onClick={nextCard} style={{ marginLeft: "1rem" }}>
          Next
        </Button>
      </div>
    </Card>
  )
}
