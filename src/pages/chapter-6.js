import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

import FlashcardsChapter6 from "../components/FlashcardsChapter6"

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

  .diagram {
    margin-top: 2rem;
    background: #111;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #00ff90;
    font-family: monospace;
  }
`;

export default function Chapter6Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>🚁 Chapter 6: Model Deployment & Monitoring</h1>
        <p>
          Deploying a machine learning model means making it available for real-world use. Monitoring ensures it continues to perform well over time.
        </p>

        <h2>🚀 What is Model Deployment?</h2>
        <p>
          Model deployment is the process of integrating a trained machine learning model into a production environment, where it can start making real predictions.
        </p>

        <h3>Common Deployment Strategies:</h3>
        <ul>
          <li><strong>Batch Predictions</strong> – Process large volumes of data at scheduled intervals.</li>
          <li><strong>Real-Time Inference (API)</strong> – Respond to user input instantly (e.g., chatbots, recommendation engines).</li>
          <li><strong>Edge Deployment</strong> – Deploy models to devices like smartphones, IoT sensors, or drones.</li>
        </ul>

        <h2>🧰 AWS Tools for Deployment</h2>
        <ul>
          <li><strong>Amazon SageMaker Endpoints</strong> – Create scalable, real-time APIs.</li>
          <li><strong>AWS Lambda</strong> – Lightweight serverless functions for simple deployment.</li>
          <li><strong>Amazon ECS / EKS</strong> – Deploy using Docker containers for large-scale ML workloads.</li>
          <li><strong>Amazon API Gateway</strong> – Expose your model as a secure RESTful API.</li>
        </ul>

        <h2>🧪 Post-Deployment Monitoring</h2>
        <p>Even a high-performing model can degrade over time due to:</p>
        <ul>
          <li><strong>Data Drift</strong> – New data patterns differ from training data.</li>
          <li><strong>Model Drift</strong> – Performance decays as real-world scenarios evolve.</li>
        </ul>

        <h3>What to monitor:</h3>
        <ul>
          <li>Prediction accuracy</li>
          <li>Latency and throughput</li>
          <li>Errors and edge cases</li>
          <li>Resource usage (CPU, memory)</li>
        </ul>

        <h3>AWS Monitoring Tools:</h3>
        <ul>
          <li><strong>Amazon CloudWatch</strong> – Logs and alerts for model health.</li>
          <li><strong>Amazon SageMaker Model Monitor</strong> – Detects concept and data drift.</li>
        </ul>

        <h2>🌎 Real-World Example</h2>
        <p><strong>Fraud Detection System:</strong></p>
        <ul>
          <li>Deployed to monitor live transactions.</li>
          <li>Sends real-time alerts when suspicious patterns are found.</li>
          <li>Auto-retraining pipeline updates the model every month.</li>
        </ul>

        <h2>📊 Deployment Workflow Diagram</h2>
        <div className="diagram">
          Raw Data ➞ Preprocessing ➞ Model Training ➞ Evaluation ➞ Model Registry ➞ Deployment ➞ Monitoring
        </div>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>Model deployment makes predictions available to users.</li>
          <li>Use AWS SageMaker, Lambda, or ECS depending on scale.</li>
          <li>Monitoring is critical to detect data or model drift.</li>
          <li>Automating retraining pipelines ensures ongoing performance.</li>
        </ul>
        <FlashcardsChapter6 />
        <ButtonGroup>
          <Link to="/quiz-chapter-6">📝 Quiz</Link>
          <Link to="/">🏠 Back to Home</Link>
        </ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
