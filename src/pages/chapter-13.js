// src/pages/chapter-13.js

import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

import FlashcardsChapter13 from "../components/FlashcardsChapter13"

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
    padding: 0.4rem;
    border-radius: 4px;
  }

  .highlight {
    color: #00ffcc;
  }

  .box {
    margin-top: 2rem;
    background: #111;
    border: 2px solid #00ff90;
    padding: 1.5rem;
    border-radius: 10px;
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

export default function Chapter13Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>🧪 Chapter 13: Exam Tips & Review Strategy</h1>
        <p>
          You're nearing the finish line! This chapter offers tips, exam strategies, and how to review efficiently so you walk into the AWS Certified Machine Learning – Specialty exam feeling confident.
        </p>

        <h2>✅ Before the Exam: What to Master</h2>
        <ul>
          <li>✅ AWS ML services: <strong>SageMaker, Comprehend, Rekognition, Personalize, Forecast, Lex, Polly, Textract</strong></li>
          <li>✅ End-to-end ML lifecycle (data prep → deployment & monitoring)</li>
          <li>✅ Model tuning and evaluation techniques</li>
          <li>✅ Security best practices (IAM, encryption, endpoints)</li>
          <li>✅ When to use specific ML tools or AWS services</li>
          <li>✅ Understanding business use cases and real-world deployment issues</li>
        </ul>

        <h2>🧠 Study & Review Tips</h2>
        <div className="box">
          <ul>
            <li><strong>Review key flashcards:</strong> Focus on terminology and definitions</li>
            <li><strong>Skim chapter summaries:</strong> Especially diagrams and sample code</li>
            <li><strong>Take practice quizzes:</strong> Identify weak areas quickly</li>
            <li><strong>Explain aloud:</strong> Try teaching a topic to yourself or others</li>
            <li><strong>Don’t memorize — understand:</strong> Know why a service is used, not just what it does</li>
          </ul>
        </div>

        <h2>🎯 Exam Strategy</h2>
        <ul>
          <li>⏱️ <strong>Time management:</strong> You’ll have ~3 minutes per question. Don’t dwell too long.</li>
          <li>🟡 <strong>Flag and return:</strong> Mark unsure questions and revisit later with fresh eyes.</li>
          <li>❓ <strong>Eliminate wrong choices:</strong> Use process of elimination to improve odds.</li>
          <li>🔍 <strong>Look for hints:</strong> Words like “real-time,” “low latency,” “offline batch” point to different AWS services.</li>
        </ul>

        <h2>📌 Common Exam Question Themes</h2>
        <ul>
          <li>Scenario-based ML project decisions</li>
          <li>Selecting the right AWS service</li>
          <li>Data preprocessing + transformation</li>
          <li>Monitoring model performance over time</li>
          <li>Security and compliance in ML solutions</li>
        </ul>

        <h2>🎓 Final Advice</h2>
        <div className="box">
          <p><strong>🌟 Confidence beats cramming.</strong></p>
          <p>Use what you’ve built in this guide — flashcards, chapter reviews, real-world practice questions — to reinforce what you know.</p>
          <p>Sleep well before the test, stay calm, and trust your preparation.</p>
        </div>

        <FlashcardsChapter13 />
                <ButtonGroup>
                         <Link to="/quiz-chapter-13">📝 Quiz</Link>
                         <Link to="/">🏠 Back to Home</Link>
                       </ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
