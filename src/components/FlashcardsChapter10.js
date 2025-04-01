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
    { question: "What is Amazon Personalize?", answer: "A fully managed ML service for real-time personalized recommendations." },
    { question: "What kind of data does Personalize require?", answer: "User interaction, item metadata, and user metadata." },
    { question: "What is a dataset group?", answer: "A container for related datasets used in a recommendation workflow." },
    { question: "What is a schema in Personalize?", answer: "A JSON definition of the format of your input data." },
    { question: "What are interactions?", answer: "Records of user behavior like clicks, views, or purchases." },
    { question: "What is a solution version?", answer: "A trained model using a specific recipe and dataset." },
    { question: "What are recipes in Personalize?", answer: "Prebuilt algorithms for different use cases like popularity or personalization." },
    { question: "What is HRNN?", answer: "Hierarchical Recurrent Neural Network – a recipe for user-personalized recommendations." },
    { question: "What does SIMS stand for?", answer: "Similar Items – a recipe that finds items similar to a given item." },
    { question: "How do you deploy a model?", answer: "By creating a campaign using a trained solution version." },
    { question: "How does Personalize handle cold starts?", answer: "By using popularity-based or metadata-only recipes." },
    { question: "How is real-time inference done?", answer: "Via the GetRecommendations or GetPersonalizedRanking APIs." },
    { question: "What does a campaign do?", answer: "Hosts a model and serves real-time recommendations via API." },
    { question: "What is an event tracker?", answer: "Tracks new user interactions in real time for dynamic updates." },
    { question: "What format does data need to be in?", answer: "CSV files uploaded to S3 with defined schemas." },
    { question: "Is Personalize domain-specific?", answer: "No – it is domain-agnostic and customizable for any industry." },
    { question: "What is an item metadata file?", answer: "Details about items such as genres, brands, or categories." },
    { question: "What happens if your data lacks timestamps?", answer: "Personalize won't be able to sort interactions chronologically." },
    { question: "Which metric does Personalize use to evaluate models?", answer: "Precision@K, Recall@K, and Mean Reciprocal Rank (MRR)." },
    { question: "How do you retrain a model?", answer: "Create a new solution version with updated data." },
    { question: "What are common use cases for Personalize?", answer: "Ecommerce, content streaming, advertising, and apps." },
    { question: "How long does training typically take?", answer: "Depends on data size – can range from minutes to hours." },
    { question: "Can you combine multiple datasets?", answer: "Yes – using dataset groups with interaction, item, and user data." },
    { question: "How does Personalize improve over time?", answer: "By ingesting new user events and retraining regularly." },
    { question: "What is popularity-count recipe?", answer: "Returns most frequently interacted items without personalization." },
    { question: "How can Personalize integrate into your app?", answer: "Through REST APIs or SDKs (e.g., boto3 for Python)." },
    { question: "What is metadata filtering?", answer: "Filtering recommendations based on item/user metadata values." },
    { question: "What is a real-time event tracker good for?", answer: "Updating recommendations instantly based on new user actions." },
    { question: "Is Personalize GDPR compliant?", answer: "Yes – data is private and isolated per customer account." },
    { question: "Does Personalize require ML knowledge?", answer: "No – it abstracts away training and infrastructure." }
  ]

export default function FlashcardsChapter10() {
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
