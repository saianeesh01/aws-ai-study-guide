// src/pages/chapter-3.js
import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter3 from "../components/FlashcardsChapter3"
import NeuralNetworkDemo from "../components/NeuralNetworkDemo"

const PageWrapper = styled.div`

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
    font-family: "Courier New", monospace;
    transition: background 0.3s ease;

    &:hover {
      background: #00cc70;
    }
  }
}


  background: black;
  color: #00ff90;
  font-family: "Courier New", monospace;
  padding: 3rem 2rem;
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
`

const DiagramWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`

const DiagramBox = styled.div`
  background: #111;
  border: 2px solid #00ff90;
  border-radius: 10px;
  padding: 1.5rem;
  width: 280px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: #00ffcc;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.4rem 0;
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

const NNWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 3rem 0;
  flex-wrap: wrap;
  gap: 2rem;
`

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #00ffcc;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`

const Neuron = styled.div`
  width: 30px;
  height: 30px;
  background-color: #00ff90;
  border-radius: 50%;
  margin: 0.4rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
    background-color: #00cc70;
  }
`


export default function Chapter3Page() {
  return (
    <Layout>
      <PageWrapper>
        <h1>🤖 Chapter 3: Introduction to Deep Learning</h1>
        <p>
          Deep learning is a specialized branch of machine learning inspired by how the human brain processes information. It uses <strong>neural networks</strong> to learn from data, especially when the data is large and complex.
        </p>

        <h2>🧠 Why Deep Learning?</h2>
        <ul>
          <li>Excels at tasks like image recognition, speech-to-text, and language translation</li>
          <li>Reduces need for manual feature engineering</li>
          <li>Can learn complex representations from raw data</li>
        </ul>

        <h2>📚 How It's Different from Traditional ML</h2>
        <ul>
          <li><strong>Traditional ML:</strong> Often needs manual feature selection</li>
          <li><strong>Deep Learning:</strong> Learns features automatically using layers</li>
          <li><strong>ML:</strong> Works well with structured/tabular data</li>
          <li><strong>DL:</strong> Shines with images, audio, and natural language</li>
        </ul>

        <h2>🧱 Building Blocks of Neural Networks</h2>
        <DiagramWrapper>
          <DiagramBox>
            <h3>Neuron</h3>
            <p>Basic unit that takes input → applies weight → passes through an activation</p>
          </DiagramBox>
          <DiagramBox>
            <h3>Layer</h3>
            <p>Collection of neurons. Multiple layers make a deep network.</p>
          </DiagramBox>
          <DiagramBox>
            <h3>Activation</h3>
            <p>Function like ReLU or Sigmoid adds non-linearity to learning</p>
          </DiagramBox>
        </DiagramWrapper>

        <h2>🧪 Simple Deep Learning Pseudo-code</h2>

        <h2>🧠 Visual: Neural Network Architecture</h2>
<NNWrapper>
  <Layer>
    <h3>Input Layer</h3>
    <Neuron />
    <Neuron />
    <Neuron />
  </Layer>
  <Layer>
    <h3>Hidden Layer 1</h3>
    <Neuron />
    <Neuron />
    <Neuron />
    <Neuron />
  </Layer>
  <Layer>
    <h3>Hidden Layer 2</h3>
    <Neuron />
    <Neuron />
  </Layer>
  <Layer>
    <h3>Output Layer</h3>
    <Neuron />
  </Layer>
</NNWrapper>

<NeuralNetworkDemo />


        <CodeDemo>{`
# Pseudo-code for image classification

# Load dataset
images, labels = load_image_data()

# Build model
model = Sequential()
model.add(Dense(128, activation='relu'))
model.add(Dense(64, activation='relu'))
model.add(Dense(10, activation='softmax'))

# Train
model.compile(optimizer='adam', loss='categorical_crossentropy')
model.fit(images, labels, epochs=10)

# Predict
result = model.predict(new_image)
        `}</CodeDemo>

        <h2>🌍 Real-World Examples</h2>
        <ul>
          <li><strong>Healthcare:</strong> Cancer detection from medical scans</li>
          <li><strong>Finance:</strong> Fraud detection using transaction patterns</li>
          <li><strong>Retail:</strong> Personalized product recommendations</li>
          <li><strong>Speech:</strong> Voice assistants like Alexa, Siri</li>
        </ul>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>Deep learning uses multi-layered neural networks</li>
          <li>Best for large, complex, unstructured data</li>
          <li>Enables cutting-edge AI like computer vision and NLP</li>
          <li>Needs significant data and compute power (GPU/TPU)</li>
        </ul>
        <FlashcardsChapter3 />
        <div className="button-group">
          <Link to="/quiz-chapter-3">📝 Quiz</Link>{" "}
          <Link to="/">🏠 Home</Link>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export { Head }
