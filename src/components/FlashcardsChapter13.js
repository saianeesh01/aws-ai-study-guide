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
    { question: "What is a neural network?", answer: "A machine learning model inspired by the human brain that learns from data using layers of interconnected neurons." },
    { question: "What are the three main types of layers in a neural network?", answer: "Input layer, hidden layers, and output layer." },
    { question: "What is the function of the input layer?", answer: "It receives raw features or data to feed into the network." },
    { question: "What happens in hidden layers?", answer: "They perform intermediate computations and transformations using weighted inputs and activation functions." },
    { question: "What is the output layer responsible for?", answer: "Producing the final predictions or scores." },
    { question: "What is a neuron (or node) in a neural network?", answer: "A computational unit that performs a weighted sum of inputs and applies an activation function." },
    { question: "What is an activation function?", answer: "A function that introduces non-linearity into the network, enabling it to learn complex patterns." },
    { question: "Name three common activation functions.", answer: "ReLU, Sigmoid, and Softmax." },
    { question: "What does ReLU stand for?", answer: "Rectified Linear Unit – outputs max(0, x)." },
    { question: "When is Softmax typically used?", answer: "In the output layer of classification tasks to convert logits to probabilities." },
    { question: "What is the purpose of backpropagation?", answer: "To adjust weights in the network based on the error using gradients." },
    { question: "What algorithm is used to optimize weights during training?", answer: "Gradient Descent (and its variants like Adam)." },
    { question: "What is a loss function?", answer: "A function that measures the difference between the predicted output and the actual target." },
    { question: "What does Binary Cross-Entropy measure?", answer: "Error for binary classification problems." },
    { question: "What is the purpose of Mean Squared Error (MSE)?", answer: "It's used in regression to penalize larger errors more." },
    { question: "What is forward propagation?", answer: "The process of passing inputs through the network to generate predictions." },
    { question: "What is the vanishing gradient problem?", answer: "When gradients become too small, preventing proper weight updates – often in deep networks using Sigmoid or Tanh." },
    { question: "How does ReLU help avoid vanishing gradients?", answer: "It allows gradients to pass through for positive values, improving training stability." },
    { question: "What is dropout in neural networks?", answer: "A regularization technique that randomly disables neurons during training to prevent overfitting." },
    { question: "What is overfitting in neural networks?", answer: "When the model learns noise from the training data and performs poorly on unseen data." },
    { question: "What is a fully connected (dense) layer?", answer: "A layer where each neuron is connected to all outputs from the previous layer." },
    { question: "How does batch normalization help?", answer: "It stabilizes learning by normalizing layer inputs during training." },
    { question: "What is an epoch?", answer: "One full pass through the entire training dataset." },
    { question: "What does the learning rate control?", answer: "How much weights are updated during training." },
    { question: "What is a convolutional neural network (CNN)?", answer: "A specialized NN for processing image data using filters and pooling." },
    { question: "What kind of problems are CNNs best suited for?", answer: "Image classification, object detection, facial recognition." },
    { question: "What is a real-world application of neural networks?", answer: "Self-driving cars use neural networks to interpret visual input and make decisions." },
    { question: "What is a deep neural network?", answer: "A network with many hidden layers capable of learning highly abstract representations." },
    { question: "Why are activation functions crucial?", answer: "Without them, the network could only learn linear functions regardless of layers." },
    { question: "What does 'training' mean in the context of neural networks?", answer: "Optimizing weights to minimize the loss between predicted and actual outputs." }
  ]

export default function FlashcardsChapter13() {
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
