// src/pages/chapter-4.js
import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter4 from "../components/FlashcardsChapter4"
import NeuralNetworkDiagram from "../components/NeuralNetworkDiagram"




const DiagramWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
  gap: 3rem;
`

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Neuron = styled.div`
  width: 40px;
  height: 40px;
  margin: 0.5rem;
  border-radius: 50%;
  background: #00ff90;
  opacity: 0.8;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`

const LayerLabel = styled.p`
  color: #00ffcc;
  font-weight: bold;
  margin-top: 1rem;
  font-family: "Courier New", monospace;
`






const PageWrapper = styled.div`
  color: #00ff90;
  background: black;
  padding: 3rem 2rem;
  font-family: "Courier New", monospace;
  min-height: 100vh;

  h1, h2, h3 {
    color: #00ff90;
    margin-top: 2rem;
  }

  p, li {
    line-height: 1.7;
  }

  ul {
    margin-left: 1.5rem;
  }

  strong {
    color: #00ffcc;
  }

  code {
    background: #111;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    color: #00ffcc;
  }

  .button-group {
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      background: #00ff90;
      color: black;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s ease;

      &:hover {
        background: #00cc70;
      }
    }
  }
`
const CodeDemo = styled.pre`
  background: #111;
  color: #00ffcc;
  padding: 1.5rem;
  border-radius: 10px;
  font-family: "Courier New", monospace;
  white-space: pre-wrap;
  margin-top: 2rem;
  border: 1px solid #00ff90;
`
const FlowLine = styled.line`
  stroke: #00ff90;
  stroke-width: 2;
  stroke-dasharray: 6;
  stroke-dashoffset: 0;
  animation: dash 1.2s linear infinite;

  @keyframes dash {
    to {
      stroke-dashoffset: -12;
    }
  }
`
const NeuronCircle = styled.div`
  position: relative;
  ...
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #00ffcc;
    font-size: 0.75rem;
    display: none;
  }

  &:hover::after {
    display: block;
  }
`



export default function Chapter4Page() {
  return (
    <Layout>
      <PageWrapper>
        <h1>🧠 Chapter 4: Fundamentals of Neural Networks</h1>
        <p>
          Neural networks are the foundation of deep learning. They mimic the structure of the human brain, enabling computers to recognize complex patterns and make intelligent decisions.
        </p>
        <NeuralNetworkDiagram />

        <h2>🧬 Structure of a Neural Network</h2>
        <ul>
          <li><strong>Input Layer:</strong> Accepts raw features (like image pixels, text embeddings, etc).</li>
          <li><strong>Hidden Layers:</strong> Perform intermediate computations and transformations.</li>
          <li><strong>Output Layer:</strong> Produces predictions or scores.</li>
        </ul>
        <p>Each neuron applies a weighted sum of inputs, adds a bias, and uses an <strong>activation function</strong>.</p>
        <h2>⚡ Activation Functions</h2>
        <ul>
          <li><strong>ReLU (Rectified Linear Unit):</strong> Efficient and widely used – <code>max(0, x)</code></li>
          <li><strong>Sigmoid:</strong> Compresses output between 0 and 1 – good for probabilities</li>
          <li><strong>Softmax:</strong> Converts logits into probabilities – often used in classification</li>
        </ul>

        <h2>🔁 Forward & Backward Propagation</h2>
        <p>
          During <strong>forward propagation</strong>, data flows through the network to produce predictions.
        </p>
        <p>
          <strong>Backpropagation</strong> then adjusts weights using the error (loss) via <strong>gradient descent</strong>.
        </p>

        <h2>🎯 Loss Functions</h2>
        <ul>
          <li><strong>Binary Cross-Entropy:</strong> For binary classification</li>
          <li><strong>Categorical Cross-Entropy:</strong> For multi-class classification</li>
          <li><strong>MSE (Mean Squared Error):</strong> For regression tasks</li>
        </ul>

        <h2>🚀 Real-World Applications</h2>
        <ul>
          <li>Image classification (e.g., disease detection from medical scans)</li>
          <li>Voice assistants (e.g., Siri, Alexa)</li>
          <li>Text classification (e.g., spam filtering, sentiment analysis)</li>
          <li>Fraud detection in financial systems</li>
        </ul>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>Neural networks learn from data by adjusting weights through training</li>
          <li>Activation functions enable learning of complex patterns</li>
          <li>Loss functions guide the learning by measuring prediction error</li>
        </ul>

        <CodeDemo>{`
# Step-by-step neural network inference (pseudo-code)

inputs = [0.3, 0.7, 0.2]

# Hidden layer
h1 = relu(w1 * inputs + b1)
h2 = relu(w2 * inputs + b2)

# Output layer
output = softmax([h1, h2])

return prediction
`}</CodeDemo>

        <FlashcardsChapter4 />
        <div className="button-group">
          <Link to="/quiz-chapter-4">📝 Quiz</Link>
          <Link to="/">🏠 Home</Link>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export { Head }

