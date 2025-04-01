// src/pages/chapter-2.js
import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter2 from "../components/FlashcardsChapter2"

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
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  position: relative;
  max-width: 1100px;
`


const DiagramStep = styled.div`
  background: #111;
  border: 2px solid #00ff90;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  width: 260px;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  h4 {
    margin: 0.5rem 0;
    color: #00ffcc;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0;
  }
`
const ArrowConnector = styled.div`
  position: absolute;
  height: 2px;
  background: #00ff90;
  top: 50%;
  left: calc(50% + 130px);
  width: 40px;
  animation: pulse 1.2s infinite ease-in-out;

  @keyframes pulse {
    0% { opacity: 0.2; transform: scaleX(0.9); }
    50% { opacity: 1; transform: scaleX(1); }
    100% { opacity: 0.2; transform: scaleX(0.9); }
  }

  @media (max-width: 768px) {
    display: none; /* hide arrows on smaller screens */
  }
`


export default function Chapter2Page() {
  return (
    <Layout>
      <PageWrapper>
        <h1>🧪 Chapter 2: Machine Learning Workflow & Lifecycle</h1>
        <p>
          Understanding how machine learning projects are structured is crucial — not just knowing <strong>what</strong> ML is, but <strong>how</strong> it’s actually applied from start to finish.
        </p>

        <h2>🎯 The Machine Learning Workflow</h2>
        <p>The ML workflow is a sequence of steps followed when building and deploying models:</p>

        <h3>1. Business Problem Definition</h3>
        <p>
          Define what you’re solving and why. Examples: churn prediction, product recommendation, image classification.
        </p>

        <h3>2. Data Collection & Labeling</h3>
        <p>
          Gather raw data from databases, logs, APIs, or sensors. Label it if needed. 
          <br />
          <strong>AWS Tools:</strong> Amazon S3, SageMaker Ground Truth
        </p>

        <h3>3. Data Preparation</h3>
        <ul>
          <li>Clean and format the data</li>
          <li>Feature engineering</li>
          <li>Split into training, validation, and test sets</li>
        </ul>
        <p><strong>AWS Tool:</strong> SageMaker Data Wrangler</p>

        <h3>4. Model Training & Tuning</h3>
        <p>
          Use algorithms and adjust parameters for best performance.
          <br />
          <strong>AWS Tools:</strong> SageMaker, built-in algorithms like XGBoost
        </p>

        <h3>5. Model Evaluation</h3>
        <ul>
          <li>Test on unseen data</li>
          <li>Metrics: accuracy, precision, recall, F1, RMSE</li>
        </ul>

        <h3>6. Deployment & Monitoring</h3>
        <p>
          Serve the model using endpoints. Monitor for performance drop and data drift.
          <br />
          <strong>AWS Tools:</strong> SageMaker Endpoints, CloudWatch
        </p>
        <h2>📊 Visual: ML Workflow Overview</h2>
<DiagramWrapper>
  <DiagramStep>
    <h4>1. Define Problem</h4>
    <p>Business use case & success metrics</p>
  </DiagramStep>
  <DiagramStep>
    <h4>2. Collect & Label</h4>
    <p>Get raw/labeled data from sources</p>
  </DiagramStep>
  <DiagramStep>
    <h4>3. Prepare Data</h4>
    <p>Clean, split, engineer features</p>
  </DiagramStep>
  <DiagramStep>
    <h4>4. Train & Tune</h4>
    <p>Choose algorithm, optimize model</p>
  </DiagramStep>
  <DiagramStep>
    <h4>5. Evaluate</h4>
    <p>Validate with metrics like accuracy</p>
  </DiagramStep>
  <DiagramStep>
    <h4>6. Deploy & Monitor</h4>
    <p>Host model & watch for drift</p>
  </DiagramStep>
</DiagramWrapper>

        <h2>👥 Common Roles in ML Projects</h2>
        <ul>
          <li><strong>Business Analyst:</strong> Defines goals</li>
          <li><strong>Data Engineer:</strong> Collects and processes data</li>
          <li><strong>Data Scientist:</strong> Trains models</li>
          <li><strong>ML Engineer:</strong> Deploys models</li>
          <li><strong>DevOps:</strong> Monitors infrastructure</li>
        </ul>

        <h2>🏗️ Dev vs. Prod Environments</h2>
        <ul>
          <li><strong>Development:</strong> Focused on experimentation and accuracy</li>
          <li><strong>Production:</strong> Focused on stability, speed, and scalability</li>
        </ul>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>6-stage workflow: define, collect, prepare, train, evaluate, deploy</li>
          <li>Clean, labeled data is the foundation of good ML</li>
          <li>AWS SageMaker simplifies many steps of the workflow</li>
          <li>Ongoing monitoring is crucial post-deployment</li>
        </ul>
        <FlashcardsChapter2 />
        <div className="button-group">
          <Link to="/quiz-chapter-2">📝 Quiz</Link>
          <Link to="/">🏠 Back to Home</Link>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export { Head }
