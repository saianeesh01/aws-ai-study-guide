import * as React from "react"
import styled, { keyframes } from "styled-components"


// 🔀 Shuffle utility
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5)
  }

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

const flashcards = [
  {
    question: "What is Machine Learning?",
    answer: "A type of AI where systems learn from data to make predictions without being explicitly programmed."
  },
  {
    question: "What are the three main types of ML?",
    answer: "Supervised, Unsupervised, and Reinforcement Learning."
  },
  {
    question: "What is overfitting?",
    answer: "When a model memorizes training data and performs poorly on new/unseen data."
  },
  {
    question: "What is underfitting?",
    answer: "When a model is too simple to capture meaningful patterns in the data."
  },
  {
    question: "What is inference?",
    answer: "Using a trained model to make predictions on new data."
  },
  {
    question: "What is labeled data?",
    answer: "Data that includes both input and the correct output — used in supervised learning."
  },
  {
    question: "What is unlabeled data?",
    answer: "Data that includes only input with no known output — used in unsupervised learning."
  },
  {
    question: "Which ML type is used for classification tasks?",
    answer: "Supervised Learning."
  },
  {
    question: "What kind of problems is unsupervised learning best for?",
    answer: "Finding hidden patterns or groupings like customer segmentation."
  },
  {
    question: "Which ML type learns through rewards and penalties?",
    answer: "Reinforcement Learning."
  },
  {
    question: "What is a model in machine learning?",
    answer: "An algorithm that learns patterns from data to make predictions."
  },
  {
    question: "What is training data used for?",
    answer: "To teach the model how to understand patterns in the data."
  },
  {
    question: "What is the difference between training and inference?",
    answer: "Training builds the model, inference uses the model to predict."
  },
  {
    question: "What does high variance in a model indicate?",
    answer: "The model may be overfitting and too sensitive to training data."
  },
  {
    question: "What does high bias in a model indicate?",
    answer: "The model may be underfitting and too simple."
  },
  {
    question: "What is a target variable?",
    answer: "The output the model is trying to predict in supervised learning."
  },
  {
    question: "What is a feature in machine learning?",
    answer: "An individual measurable property or input used by the model."
  },
  {
    question: "What is model evaluation?",
    answer: "The process of testing how well your model performs on unseen data."
  },
  {
    question: "What does a confusion matrix show?",
    answer: "The performance of a classification model with actual vs predicted values."
  },
  {
    question: "Name one use case for reinforcement learning.",
    answer: "Game-playing AI like AlphaGo or self-driving cars."
  },
  {
    question: "What is one risk of using too many features?",
    answer: "It can lead to overfitting and poor performance on new data."
  },
  {
    question: "What is a real-world example of supervised learning?",
    answer: "Email spam detection based on past labeled emails."
  },
  {
    question: "What is an example of unsupervised learning?",
    answer: "Grouping customers into segments without predefined labels."
  },
  {
    question: "How is reinforcement learning different from the other types?",
    answer: "It learns through actions and feedback instead of data labels."
  },
  {
    question: "What is a predictive model?",
    answer: "A model trained to make future predictions based on past data."
  },
  {
    question: "Why is data quality important in ML?",
    answer: "Poor data leads to inaccurate models and wrong predictions."
  }
  
]

export default function FlashcardsChapter1() {
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
      {showAnswer && (
        <p>
          <strong>Answer:</strong> {shuffledCards[index].answer}
        </p>
      )}
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
