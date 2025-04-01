// src/pages/chapter-12.js

import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter12 from "../components/FlashcardsChapter12"

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

  code, pre {
    background: #111;
    color: #00ffcc;
    padding: 0.5rem;
    border-radius: 6px;
    display: block;
    overflow-x: auto;
    margin-top: 1rem;
  }

  .diagram {
    margin-top: 2rem;
    padding: 1rem;
    border: 2px dashed #00ff90;
    background: #111;
    border-radius: 10px;
    white-space: pre-wrap;
    font-family: "Courier New", monospace;
  }
`;

export default function Chapter12Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>⚖️ Chapter 12: Responsible AI & Fairness</h1>

        <p>Responsible AI focuses on building trustworthy, transparent, and fair machine learning systems. This chapter outlines ethical principles and implementation best practices using AWS and general ML approaches.</p>

        <h2>📌 Core Principles of Responsible AI</h2>
        <ul>
          <li><strong>Fairness:</strong> Preventing discrimination against individuals or groups.</li>
          <li><strong>Transparency:</strong> Ensuring models are explainable and decisions are understandable.</li>
          <li><strong>Accountability:</strong> Defining roles for monitoring and responding to AI performance.</li>
          <li><strong>Privacy:</strong> Respecting user data and minimizing exposure.</li>
          <li><strong>Security:</strong> Protecting models and data from misuse.</li>
        </ul>

        <h2>🚫 Bias in Machine Learning</h2>
        <ul>
          <li>Bias can enter through skewed data, label imbalance, or model assumptions.</li>
          <li>Bias types: historical bias, representation bias, measurement bias.</li>
          <li>Detect with audits and disparity metrics.</li>
          <li>Mitigate with diverse datasets, rebalancing, or fairness-aware algorithms.</li>
        </ul>

        <h2>🔍 Explainability & Interpretability</h2>
        <p>Tools and techniques to understand how models make decisions:</p>
        <ul>
          <li><strong>SHAP:</strong> Shows feature contribution to each prediction.</li>
          <li><strong>LIME:</strong> Locally interpretable explanations for predictions.</li>
          <li><strong>AWS Clarify:</strong> Explain model behavior, monitor bias, and feature attribution.</li>
        </ul>

        <h2>🔐 Privacy & Data Protection</h2>
        <ul>
          <li>Use anonymization, encryption, and data minimization.</li>
          <li>Follow compliance (e.g., GDPR, HIPAA).</li>
          <li>Use <code>S3</code> encryption, <code>KMS</code> for key management, and IAM roles.</li>
        </ul>

        <h2>🧠 Monitoring & Governance</h2>
        <ul>
          <li>Track model behavior in production using <strong>Amazon SageMaker Model Monitor</strong>.</li>
          <li>Alert on drift, bias, or violations.</li>
          <li>Maintain audit logs of decisions, data, and deployments.</li>
        </ul>

        <h2>📉 Real-World Scenarios</h2>
        <ul>
          <li>Hiring tools that unfairly prefer one group over another.</li>
          <li>Loan approvals with data skewed toward specific demographics.</li>
          <li>Voice assistants that don't recognize diverse accents well.</li>
        </ul>

        <h2>🧭 Diagram: Responsible AI Lifecycle</h2>
        <div className="diagram">{`
[ Data Collection ]
       ↓
[ Bias Detection & Audits ]
       ↓
[ Training with Fairness Constraints ]
       ↓
[ Explainability & Transparency Checks ]
       ↓
[ Secure Deployment + Monitoring ]
       ↓
[ Feedback Loops & Retraining ]
        `}</div>

        <h2>✅ Key Takeaways</h2>
        <ul>
          <li>Bias can enter at multiple stages – be proactive in monitoring and mitigation.</li>
          <li>Responsible AI aligns model performance with ethical principles.</li>
          <li>AWS tools like SageMaker Clarify and Model Monitor support fairness and explainability.</li>
        </ul>

        <FlashcardsChapter12 />
                <ButtonGroup>
                         <Link to="/quiz-chapter-12">📝 Quiz</Link>
                         <Link to="/">🏠 Back to Home</Link>
                       </ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
