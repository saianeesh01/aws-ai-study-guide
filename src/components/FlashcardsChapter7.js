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
    { question: "What is Amazon Comprehend used for?", answer: "Extracting insights like sentiment, entities, and key phrases from text using NLP." },
    { question: "Which AWS service analyzes customer feedback for sentiment?", answer: "Amazon Comprehend." },
    { question: "What does Amazon Lex allow you to build?", answer: "Conversational interfaces (chatbots) using voice and text." },
    { question: "Which service converts text into natural-sounding speech?", answer: "Amazon Polly." },
    { question: "What is Amazon Translate used for?", answer: "Neural machine translation between multiple languages." },
    { question: "What is entity recognition in NLP?", answer: "Identifying specific data like names, dates, or locations in text." },
    { question: "What is sentiment analysis?", answer: "Determining if a piece of text is positive, negative, neutral, or mixed." },
    { question: "Can Amazon Comprehend work with custom entity types?", answer: "Yes, through Amazon Comprehend Custom." },
    { question: "What is a bot in Amazon Lex?", answer: "A virtual agent that handles conversations through intents and utterances." },
    { question: "What are slots in Amazon Lex?", answer: "Parameters Lex gathers from users to fulfill an intent." },
    { question: "What are utterances in Amazon Lex?", answer: "Sample phrases a user might say to trigger an intent." },
    { question: "What is an intent in Amazon Lex?", answer: "A goal the user wants to achieve (e.g., 'BookFlight')." },
    { question: "What is a voice ID in Polly used for?", answer: "To choose a specific voice model for speech synthesis." },
    { question: "What format does Polly support for advanced speech markup?", answer: "SSML (Speech Synthesis Markup Language)." },
    { question: "What is real-time translation with Amazon Translate useful for?", answer: "Chat apps, multilingual websites, or real-time support." },
    { question: "What is topic modeling in Comprehend?", answer: "Grouping documents by common themes without supervision." },
    { question: "What does Amazon Comprehend Medical do?", answer: "Analyzes healthcare text for medical entities and relationships." },
    { question: "Can you translate documents using Translate?", answer: "Yes, Translate supports large text/doc translations." },
    { question: "How does Polly improve user engagement?", answer: "Converts written content into lifelike audio for accessibility and interaction." },
    { question: "What’s a real-world use of Amazon Lex?", answer: "Voice-based virtual assistants in contact centers." },
    { question: "Can Amazon Translate auto-detect the source language?", answer: "Yes, it detects the source language automatically." },
    { question: "Can Polly be used in IoT or mobile apps?", answer: "Yes, it supports real-time speech in applications." },
    { question: "What AWS service helps analyze unstructured clinical text?", answer: "Amazon Comprehend Medical." },
    { question: "How does Comprehend scale?", answer: "Fully managed and scalable with support for real-time and batch analysis." },
    { question: "What’s a benefit of using Polly over pre-recorded audio?", answer: "Dynamically generate speech at runtime without storing audio files." },
    { question: "How does Lex integrate with Lambda?", answer: "You can use Lambda functions to fulfill intents dynamically." },
    { question: "What is a channel in Amazon Lex?", answer: "Integration path like Slack, Facebook Messenger, etc." },
    { question: "What is the max number of characters per request in Polly?", answer: "3000 characters for standard API calls." },
    { question: "How does Translate handle formatting (e.g., HTML)?", answer: "Supports tags like HTML to preserve structure during translation." },
    { question: "What makes Comprehend useful for social listening?", answer: "It can extract sentiments and topics from social media content." }
  ]

export default function FlashcardsChapter7() {
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
