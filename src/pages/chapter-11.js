// src/pages/chapter-11.js

import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter11 from "../components/FlashcardsChapter11"


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
`

export default function Chapter11Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>🔐 Chapter 11: AI Services Integration & Security</h1>

        <p>
          As you build AI-powered applications with AWS, understanding how to securely integrate services and manage access is critical. This chapter focuses on securing ML workflows, protecting data, and applying best practices across Amazon’s AI stack.
        </p>

        <h2>🔌 Common AI Service Integrations</h2>
        <ul>
          <li>Lex → Lambda → DynamoDB for conversational chatbots</li>
          <li>Polly → Translate → S3 for multilingual speech synthesis</li>
          <li>Rekognition → SNS for real-time alerts from image analysis</li>
          <li>SageMaker + API Gateway for real-time model endpoints</li>
        </ul>

        <h2>🔐 Security Fundamentals</h2>
        <ul>
          <li><strong>IAM (Identity and Access Management):</strong> Control who can access what in your AWS environment.</li>
          <li><strong>IAM Roles for ML:</strong> SageMaker notebooks, Lambda, and Forecast must assume roles with least-privilege policies.</li>
          <li><strong>Data Encryption:</strong> Enable at-rest (S3, EBS) and in-transit (HTTPS) encryption.</li>
          <li><strong>KMS (Key Management Service):</strong> Manages encryption keys used by Forecast, Textract, etc.</li>
        </ul>

        <h2>✅ Best Practices</h2>
        <ul>
          <li>Apply <strong>least privilege</strong> when granting access via IAM roles and policies.</li>
          <li>Enable <strong>logging and monitoring</strong> via AWS CloudTrail and CloudWatch.</li>
          <li>Use <strong>VPC endpoints</strong> for SageMaker and Forecast to isolate ML traffic.</li>
          <li>Rotate API keys and credentials regularly.</li>
        </ul>

        <h2>🔄 Real-World Scenarios</h2>
        <ul>
          <li>A healthcare app uses Comprehend Medical but stores results securely in encrypted S3 buckets.</li>
          <li>An e-commerce chatbot uses Lex with Lambda, where Lambda has access to only one product table in DynamoDB.</li>
          <li>A banking forecast system ensures that only the SageMaker role can write to the prediction output bucket.</li>
        </ul>

        <h2>📊 Diagram: Secure AI Integration Flow</h2>
        <div className="diagram">
{`User Input
   ↓
Amazon Lex
   ↓
AWS Lambda (with IAM role)
   ↓
DynamoDB or SageMaker Endpoint
   ↓
CloudWatch Logs + SNS Alerts`}
        </div>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>Security is shared between AWS and the user (Shared Responsibility Model)</li>
          <li>Use IAM roles and encryption for all data storage and processing</li>
          <li>Keep services within VPC boundaries where possible</li>
          <li>Monitor with CloudTrail and audit permissions regularly</li>
        </ul>

        <FlashcardsChapter11 />
                <ButtonGroup>
                         <Link to="/quiz-chapter-11">📝 Quiz</Link>
                         <Link to="/">🏠 Back to Home</Link>
                       </ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
