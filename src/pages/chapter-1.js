import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter1 from "../components/FlashcardsChapter1" // ✅ Import the flashcards


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
const DiagramWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`

const DiagramBox = styled.div`
  background: #111;
  border: 2px solid #00ff90;
  border-radius: 10px;
  padding: 1rem;
  width: 280px;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: #00ffcc;
    margin-bottom: 0.5rem;
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
  animation: fadeIn 0.8s ease;
`


export default function Chapter1Page() {
  return (
    <Layout>
      <PageWrapper>
        <h1>🧠 Chapter 1: Introduction to Machine Learning</h1>
        <p>
          Machine Learning (ML) is a branch of Artificial Intelligence (AI) that enables computers to learn from data and make predictions or decisions <strong>without being explicitly programmed</strong>.
        </p>
        <p>
          Rather than following hard-coded rules, an ML system identifies patterns in data and uses them to generate insights, automate tasks, or make accurate forecasts.
        </p>

        <h2>🤖 Why Machine Learning Matters</h2>
        <ul>
          <li>Powers recommendation systems (e.g., Netflix, Amazon)</li>
          <li>Enables real-time fraud detection</li>
          <li>Drives speech/image recognition (e.g., Alexa)</li>
          <li>Automates decisions from large-scale data</li>
        </ul>

        <h2>📚 Types of Machine Learning</h2>

        <h3>1. Supervised Learning</h3>
        <p>
          Learns from <strong>labeled data</strong> — the input comes with the correct output.
        </p>
        <p>
          Examples: Predicting house prices, spam detection, credit scoring.
        </p>

        <h3>2. Unsupervised Learning</h3>
        <p>
          Learns from <strong>unlabeled data</strong>, trying to find hidden structures or groupings.
        </p>
        <p>
          Examples: Customer segmentation, anomaly detection.
        </p>

        <h3>3. Reinforcement Learning</h3>
        <p>
          Learns by <strong>trial and error</strong>, receiving rewards or penalties for actions taken.
        </p>
        <p>
          Examples: Robotics, autonomous driving, game agents.
        </p>
        <h2>📊 Visual Breakdown: Types of ML</h2>
<DiagramWrapper>
  <DiagramBox>
    <h3>Supervised</h3>
    <p>Labeled data</p>
    <p>→ Predict outcomes</p>
    <p>🎯 Example: Spam detection</p>
  </DiagramBox>
  <DiagramBox>
    <h3>Unsupervised</h3>
    <p>Unlabeled data</p>
    <p>→ Find patterns</p>
    <p>🧩 Example: Clustering users</p>
  </DiagramBox>
  <DiagramBox>
    <h3>Reinforcement</h3>
    <p>Trial & error</p>
    <p>→ Learn via rewards</p>
    <p>🚗 Example: Self-driving car</p>
  </DiagramBox>
</DiagramWrapper>

        <h2>🔧 Core Concepts in ML</h2>
        <ul>
          <li><strong>Training Data:</strong> Dataset used to teach the model.</li>
          <li><strong>Model:</strong> The algorithm that learns from data.</li>
          <li><strong>Inference:</strong> Making predictions with a trained model.</li>
          <li><strong>Overfitting:</strong> When a model memorizes training data and performs poorly on new data.</li>
          <li><strong>Underfitting:</strong> When a model is too simple and fails to capture patterns.</li>
        </ul>
        <h2>🧠 ML Workflow Example (Training & Inference)</h2>
<CodeDemo>{`
# Pseudo-code example

# Training Phase
data = load_labeled_data()
model = train_model(data)

# Inference Phase
new_input = get_user_input()
prediction = model.predict(new_input)
print(prediction)
`}</CodeDemo>
        <h2>🧪 Real-World ML Applications</h2>
        <ul>
          <li><strong>Spam Detection:</strong> Uses labeled emails (spam vs. not) → Supervised Learning</li>
          <li><strong>Customer Segmentation:</strong> Grouping users by behavior → Unsupervised Learning</li>
          <li><strong>Self-Driving Cars:</strong> Learn through feedback and rewards → Reinforcement Learning</li>
          <li><strong>Stock Price Prediction:</strong> Regression to forecast values based on past data</li>
        </ul>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>ML enables intelligent, data-driven predictions.</li>
          <li>Choosing the right type of learning is key.</li>
          <li>Balancing model complexity prevents over/underfitting.</li>
          <li>Data quality is crucial to ML success.</li>
        </ul>
        <FlashcardsChapter1 />
        <div className="button-group">
        <Link to="/">🏠 Back to Home</Link>
        <Link to="/quiz-chapter-1">📝 Quiz</Link>
      </div>
      </PageWrapper>
      
    </Layout>
  )
}

export { Head }
