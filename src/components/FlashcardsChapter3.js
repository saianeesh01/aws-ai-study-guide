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
    { question: "What is deep learning?", answer: "A subset of ML that uses multi-layered neural networks to learn from large, complex data." },
    { question: "What is a neural network?", answer: "A model made up of layers of interconnected neurons that process data in a hierarchical way." },
    { question: "What is a neuron?", answer: "A single unit in a neural network that performs a weighted sum of inputs and applies an activation function." },
    { question: "What does the activation function do?", answer: "It introduces non-linearity, allowing the network to learn complex patterns." },
    { question: "Name a common activation function.", answer: "ReLU (Rectified Linear Unit) is widely used for hidden layers." },
    { question: "What is an input layer?", answer: "The first layer in a neural network that receives the input data." },
    { question: "What is the output layer?", answer: "The final layer that produces the model’s prediction." },
    { question: "What are hidden layers?", answer: "Layers between input and output that extract features from data." },
    { question: "What is backpropagation?", answer: "An algorithm that updates weights by calculating gradients from the output layer back to the input layer." },
    { question: "What is gradient descent?", answer: "An optimization algorithm used to minimize the loss function by adjusting weights." },
    { question: "What is a loss function?", answer: "A measure of how far the predicted output is from the actual value." },
    { question: "What is a common loss function for classification?", answer: "Cross-entropy loss." },
    { question: "What is overfitting in deep learning?", answer: "When a model performs well on training data but poorly on unseen data." },
    { question: "What is underfitting?", answer: "When a model is too simple to learn meaningful patterns in the data." },
    { question: "What helps reduce overfitting?", answer: "Regularization techniques like dropout or L2, and more training data." },
    { question: "What is dropout?", answer: "A technique that randomly disables neurons during training to prevent overfitting." },
    { question: "What is an epoch?", answer: "One full pass through the training dataset." },
    { question: "What is a batch size?", answer: "The number of training samples used in one forward/backward pass." },
    { question: "What does the optimizer do?", answer: "It updates model weights to minimize the loss function." },
    { question: "Name a popular optimizer.", answer: "Adam is a widely used optimizer in deep learning." },
    { question: "What is a convolutional neural network (CNN)?", answer: "A type of network used for image data that extracts spatial features." },
    { question: "What is a recurrent neural network (RNN)?", answer: "A network for sequential data like text or time series, where outputs are fed back as inputs." },
    { question: "What are real-world uses of CNNs?", answer: "Facial recognition, medical imaging, object detection, etc." },
    { question: "What are real-world uses of RNNs?", answer: "Speech recognition, language translation, sentiment analysis." },
    { question: "What is transfer learning?", answer: "Using a pre-trained model on a new, related problem to speed up training." },
    { question: "What is model inference?", answer: "Using a trained model to make predictions on new data." },
    { question: "What is fine-tuning?", answer: "Adjusting a pre-trained model’s weights to adapt to a specific task." },
    { question: "What is the benefit of using GPUs for deep learning?", answer: "They accelerate matrix operations and reduce training time." },
    { question: "What is softmax used for?", answer: "It converts logits to probabilities in multi-class classification." },
    { question: "What is a deep neural network?", answer: "A neural network with two or more hidden layers." }
  ]

export default function FlashcardsChapter3() {
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
