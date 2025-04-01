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
    { question: "What is Amazon Rekognition?", answer: "A computer vision service to detect objects, scenes, and faces in images and videos." },
    { question: "What is Amazon Textract used for?", answer: "Extracts text, forms, and tables from scanned documents." },
    { question: "Does Rekognition support facial analysis?", answer: "Yes, it can detect emotions, age range, gender, and facial landmarks." },
    { question: "Can Textract understand document structure?", answer: "Yes, it extracts data as key-value pairs and tables." },
    { question: "What file formats does Rekognition support?", answer: "JPEG and PNG for images, MP4 for videos." },
    { question: "Can Rekognition detect unsafe content?", answer: "Yes, using moderation labels like nudity or violence." },
    { question: "Does Textract require templates?", answer: "No, Textract is template-free and can process various layouts." },
    { question: "What is a bounding box in Rekognition?", answer: "Coordinates that define where an object or face is in the image." },
    { question: "What is OCR?", answer: "Optical Character Recognition — Textract uses this to detect text in images." },
    { question: "Can Rekognition perform celebrity recognition?", answer: "Yes, for known public figures." },
    { question: "What is a use case of Textract in finance?", answer: "Automating form input from scanned invoices or receipts." },
    { question: "Can Textract extract handwriting?", answer: "Yes, but it's less accurate than printed text." },
    { question: "Which AWS service detects PPE like helmets or gloves?", answer: "Amazon Rekognition." },
    { question: "Can Rekognition track people in real-time video?", answer: "Yes, using the Video API with Kinesis." },
    { question: "How is Textract different from simple OCR?", answer: "Textract understands context, structure, and relationships." },
    { question: "What’s a 'feature type' in Textract?", answer: "Data element type to extract — KEY_VALUE_SET or TABLE." },
    { question: "Does Rekognition require training models?", answer: "No, it's pre-trained and managed." },
    { question: "How does Textract output structured data?", answer: "As JSON with blocks for text, key-value pairs, tables, etc." },
    { question: "Can Rekognition do face comparison?", answer: "Yes, it matches faces against a collection or image." },
    { question: "What regions is Rekognition available in?", answer: "Many global AWS regions — check docs for updates." },
    { question: "What is a confidence score?", answer: "The certainty level that Rekognition has in its predictions." },
    { question: "Use case for Textract in healthcare?", answer: "Digitizing handwritten medical notes and forms." },
    { question: "Does Rekognition detect text?", answer: "Yes, but Textract is better for structured documents." },
    { question: "Textract’s accuracy for printed forms?", answer: "Very high for clean, high-resolution forms." },
    { question: "What is video label detection?", answer: "Detecting objects/scenes in video frames over time." },
    { question: "Can Rekognition be used for surveillance?", answer: "Yes, for people/vehicle detection and face matching." },
    { question: "Textract vs Comprehend?", answer: "Textract extracts raw text; Comprehend analyzes meaning." },
    { question: "Can Rekognition count people in an image?", answer: "Yes, using object or face detection APIs." },
    { question: "Does Textract require human review?", answer: "Optional — Amazon A2I (Augmented AI) can be added." },
    { question: "What is a Face Collection?", answer: "A database of known faces stored for comparison in Rekognition." }
  ]

export default function FlashCardsChapter8() {
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
