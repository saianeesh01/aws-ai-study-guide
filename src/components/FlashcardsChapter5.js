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
    {
      question: "What is model training in machine learning?",
      answer: "The process of teaching a model to recognize patterns in data by adjusting its parameters using training data."
    },
    {
      question: "What is model evaluation?",
      answer: "Measuring a model’s performance on unseen data using metrics like accuracy, precision, and recall."
    },
    {
      question: "What is the purpose of training data?",
      answer: "To allow the model to learn patterns and relationships between input features and labels."
    },
    {
      question: "What is the purpose of a validation set?",
      answer: "To fine-tune the model and select the best hyperparameters before final testing."
    },
    {
      question: "What is the test set used for?",
      answer: "To evaluate how well the model generalizes to unseen data."
    },
    {
      question: "What is overfitting?",
      answer: "When a model performs well on training data but poorly on unseen data because it memorized instead of generalized."
    },
    {
      question: "What is underfitting?",
      answer: "When a model is too simple to learn the patterns in the training data."
    },
    {
      question: "What is accuracy?",
      answer: "The proportion of correct predictions out of all predictions made."
    },
    {
      question: "What is precision?",
      answer: "The proportion of true positives among all predicted positives."
    },
    {
      question: "What is recall?",
      answer: "The proportion of true positives identified among all actual positives."
    },
    {
      question: "What is the F1 score?",
      answer: "The harmonic mean of precision and recall. Useful for imbalanced datasets."
    },
    {
      question: "What is RMSE?",
      answer: "Root Mean Square Error — a regression metric that measures prediction error magnitude."
    },
    {
      question: "What is gradient descent?",
      answer: "An optimization algorithm that updates model weights to minimize the loss function."
    },
    {
      question: "What is a loss function?",
      answer: "A function that measures how far predictions are from actual labels."
    },
    {
      question: "What is early stopping?",
      answer: "Stopping training when validation performance stops improving to prevent overfitting."
    },
    {
      question: "What is cross-validation?",
      answer: "A technique to evaluate models by splitting data into multiple train/test sets."
    },
    {
      question: "What is a confusion matrix?",
      answer: "A table showing true/false positives and negatives to assess classification performance."
    },
    {
      question: "Why use multiple metrics for evaluation?",
      answer: "One metric may not reflect all aspects of performance, especially in imbalanced data."
    },
    {
      question: "What is batch training?",
      answer: "Training the model using all data in batches instead of one data point at a time."
    },
    {
      question: "What is an epoch?",
      answer: "One complete pass through the training dataset during training."
    },
    {
      question: "What is learning rate?",
      answer: "A hyperparameter that determines the step size in gradient descent."
    },
    {
      question: "What happens if learning rate is too high?",
      answer: "The model may oscillate or diverge instead of converging to a solution."
    },
    {
      question: "What is model bias?",
      answer: "Error due to overly simplistic assumptions in the learning algorithm."
    },
    {
      question: "What is model variance?",
      answer: "Error due to sensitivity to small fluctuations in the training data."
    },
    {
      question: "What does regularization do?",
      answer: "Penalizes large weights to reduce overfitting and improve generalization."
    },
    {
      question: "What is L1 regularization?",
      answer: "Adds the absolute value of weights to the loss function (Lasso)."
    },
    {
      question: "What is L2 regularization?",
      answer: "Adds the squared value of weights to the loss function (Ridge)."
    },
    {
      question: "Why split data into train/val/test?",
      answer: "To ensure the model learns, tunes, and generalizes properly."
    },
    {
      question: "What is model generalization?",
      answer: "The ability of a model to perform well on new, unseen data."
    },
    {
      question: "What is hyperparameter tuning?",
      answer: "Searching for the best values for settings like learning rate, batch size, etc."
    }
  ]
  

export default function FlashcardsChapter5() {
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
