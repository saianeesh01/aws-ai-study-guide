import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

import FlashcardsChapter5 from "../components/FlashcardsChapter5"

const ButtonGroup = styled.div`
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
`

const Wrapper = styled.div`
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

const CodeBlock = styled.pre`
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  color: #00ffcc;
  overflow-x: auto;
`

const DiagramBox = styled.div`
  background: #111;
  border: 2px solid #00ff90;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`

export default function Chapter5Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>🧐 Chapter 5: Model Training & Evaluation</h1>
        <p>
          Training a machine learning model is the process of teaching it to recognize patterns in data. Evaluation determines how well the model performs on unseen data. This chapter walks through both stages.
        </p>

        <h2>🔧 Model Training</h2>
        <ul>
          <li><strong>Goal:</strong> Find the best parameters that minimize error on training data.</li>
          <li><strong>Process:</strong> Feed training data into the algorithm, compute predictions, calculate error, and update the model.</li>
        </ul>

        <h3>Gradient Descent (Optimization)</h3>
        <p>
          A popular optimization algorithm that updates model weights to minimize loss.
        </p>
        <CodeBlock>{`
# Pseudo-code
for epoch in range(epochs):
  predictions = model(data)
  loss = compute_loss(predictions, targets)
  gradients = compute_gradients(loss)
  update_weights(gradients)
        `}</CodeBlock>

        <h2>📊 Model Evaluation</h2>
        <ul>
          <li><strong>Purpose:</strong> Assess how well the model generalizes to unseen data.</li>
          <li><strong>Common metrics:</strong> Accuracy, Precision, Recall, F1 Score, RMSE.</li>
          <li><strong>Dataset split:</strong> Training / Validation / Test.</li>
        </ul>

        <h2>🌎 Real-World Applications</h2>
        <ul>
          <li><strong>Fraud Detection:</strong> Train on transaction patterns, evaluate on real-time purchases.</li>
          <li><strong>Image Classification:</strong> Train CNNs to recognize images, evaluate with held-out image sets.</li>
          <li><strong>Chatbots:</strong> Train models on conversations, evaluate on how natural responses are.</li>
        </ul>

        <h2>📊 Diagram: Training & Evaluation Flow</h2>
        <DiagramBox>
          <p>Raw Data ➡️ Preprocessing ➡️ Model Training ➡️ Evaluation ➡️ Metrics</p>
        </DiagramBox>
        <FlashcardsChapter5 />
        <ButtonGroup>
  <Link to="/quiz-chapter-5">📝 Quiz</Link>
  <Link to="/">🏠 Back to Home</Link>
</ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
