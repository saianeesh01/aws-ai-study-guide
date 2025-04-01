import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MLLifecycleDiagram from "../components/MLLifecycleDiagram"

const HeroSection = styled.section`
  background: black;
  color: #00ff90;
  padding: 4rem 2rem;
  font-family: "Courier New", monospace;
  text-align: center;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  a {
    margin: 0.5rem;
    background: #00ff90;
    color: black;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s ease;

    &:hover {
      background: #00cc70;
    }
  }

  .chapter-links {
    margin-top: 3rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0.5rem 0;
      }
    }

    a {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`

export default function Hero() {
  return (
    <HeroSection>
      <h1>AWS AI Study Guide</h1>
      <p>Master AI services on AWS with interactive flashcards & quizzes</p>
      <div className="chapter-links">
        <h2>Chapters</h2>
        <ul>
          <li><Link to="/chapter-1">Chapter 1: Introduction to Machine Learning</Link></li>
          <li><Link to="/chapter-2">Chapter 2: Machine Learning Workflow & Lifecycle</Link></li>
          <li><Link to="/chapter-3">Chapter 3:  Introduction to Deep Learning</Link></li>
          <li><Link to="/chapter-4">Chapter 4: Fundamentals of Neural Networks</Link></li>
          <li><Link to="/chapter-5">Chapter 5:  Model Training & Evaluation</Link></li>
          <li><Link to="/chapter-6">Chapter 6: Model Deployment & Monitoring</Link></li>
        <li><Link to="/chapter-7">Chapter 7: Natural Language Processing with AWS (Comprehend, Lex, Polly, Translate)</Link></li>
        <li><Link to="/chapter-8">Chapter 8: Computer Vision with AWS (Rekognition, Textract)</Link></li>
        <li><Link to="/chapter-9">Chapter 9: Forecasting with Amazon Forecast</Link></li>
        <li><Link to="/chapter-10">Chapter 10: Recommendations with Amazon Personalize</Link></li>
        <li><Link to="/chapter-11">Chapter 11: AI Services Integration & Security</Link></li>
        <li><Link to="/chapter-12">Chapter 12: Responsible AI & Fairness</Link></li>
        <li><Link to="/chapter-13">Chapter 13: Exam Tips & Review Strategy</Link></li>
        </ul>
      </div>
      <MLLifecycleDiagram />
    </HeroSection>
  )
}
