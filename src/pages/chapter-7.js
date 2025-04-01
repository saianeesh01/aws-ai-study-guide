import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter7 from "../components/FlashcardsChapter7"

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
const PageWrapper = styled.div`
  background: black;
  color: #00ff90;
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

  code {
    background: #111;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    color: #00ffcc;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
  }

  th, td {
    border: 1px solid #00ff90;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #111;
  }
`

export default function Chapter7Page() {
  return (
    <Layout>
      <PageWrapper>
        <h1>🗣️ Chapter 7: Natural Language Processing with AWS</h1>
        <p>Natural Language Processing (NLP) helps machines understand and interact with human language. AWS offers managed services that simplify building NLP-powered apps.</p>

        <h2>🧩 NLP Services Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Purpose</th>
              <th>Use Cases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazon Comprehend</td>
              <td>Text analysis & insights</td>
              <td>Sentiment, entities, key phrases</td>
            </tr>
            <tr>
              <td>Amazon Lex</td>
              <td>Conversational bots</td>
              <td>Chatbots, voice interfaces</td>
            </tr>
            <tr>
              <td>Amazon Polly</td>
              <td>Text-to-speech</td>
              <td>Accessibility, narration</td>
            </tr>
            <tr>
              <td>Amazon Translate</td>
              <td>Language translation</td>
              <td>Localization, multilingual chat</td>
            </tr>
          </tbody>
        </table>

        <h2>📘 Amazon Comprehend</h2>
        <p>Comprehend uses machine learning to analyze text and uncover insights.</p>
        <ul>
          <li>Detects sentiment: positive, negative, neutral</li>
          <li>Extracts entities and key phrases</li>
          <li>Supports language detection</li>
          <li>Supports custom classification</li>
        </ul>

        <h3>Example Use Case:</h3>
        <p>A support system uses Comprehend to tag emails by urgency and detect key complaints.</p>

        <h2>💬 Amazon Lex</h2>
        <p>Amazon Lex builds chatbots and voice assistants using natural language understanding (NLU).</p>
        <ul>
          <li>Recognizes user intent</li>
          <li>Supports multi-turn conversations</li>
          <li>Handles voice and text input</li>
        </ul>

        <h3>Example Flow:</h3>
        <p>User: "Transfer $50 to Sam" → Lex extracts intent and slots → Confirms and triggers logic</p>

        <h2>🔊 Amazon Polly</h2>
        <p>Polly turns text into realistic speech with multiple languages and voices.</p>
        <ul>
          <li>Natural-sounding voice output</li>
          <li>Useful for screen readers and voice UIs</li>
        </ul>

        <h2>🌍 Amazon Translate</h2>
        <p>Translate enables real-time language translation for 75+ languages.</p>
        <ul>
          <li>Used in chat apps, global sites, and e-commerce</li>
          <li>Neural translation models provide context-aware results</li>
        </ul>

        <h2>🧠 Summary</h2>
        <ul>
          <li>Comprehend extracts meaning from text</li>
          <li>Lex builds intelligent voice/text chatbots</li>
          <li>Polly converts text to audio</li>
          <li>Translate breaks language barriers</li>
        </ul>
        <FlashcardsChapter7 />
        <ButtonGroup>
          <Link to="/quiz-chapter-7">📝 Quiz</Link>
          <Link to="/">🏠 Back to Home</Link>
        </ButtonGroup>
      </PageWrapper>
    </Layout>
  )
}

export { Head }
