import * as React from "react";
import Layout from "../components/layout";
import { Head } from "../components/seo";
import styled from "styled-components";
import { Link } from "gatsby";
import FlashcardsChapter8 from "../components/FlashCardsChapter8"
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
`;

export default function Chapter8Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>📸 Chapter 8: Computer Vision with AWS</h1>
        <p>Computer vision enables machines to interpret and analyze images and videos. AWS offers Rekognition and Textract to handle visual intelligence without requiring custom model training.</p>

        <h2>🔍 Amazon Rekognition</h2>
        <ul>
          <li>Detects objects, faces, scenes, and text in images or video.</li>
          <li>Supports facial analysis, face comparison, celebrity recognition, and unsafe content detection.</li>
        </ul>

        <h3>Rekognition Use Cases:</h3>
        <ul>
          <li>Smart access control systems using facial match</li>
          <li>Social media content moderation</li>
          <li>Retail surveillance and people tracking</li>
        </ul>

        <h2>📄 Amazon Textract</h2>
        <ul>
          <li>Goes beyond OCR by understanding key-value pairs, tables, and layout in documents.</li>
          <li>Supports handwritten and printed text.</li>
          <li>Can extract specific data via queries.</li>
        </ul>

        <h3>Textract Use Cases:</h3>
        <ul>
          <li>Invoice and receipt processing</li>
          <li>Automating form data entry (claims, applications)</li>
          <li>Legal document indexing</li>
        </ul>

        <h2>🧠 Summary</h2>
        <p><strong>Rekognition:</strong> Best for image and video analysis.</p>
        <p><strong>Textract:</strong> Best for extracting structured data from documents.</p>

        <h3>Integration:</h3>
        <ul>
          <li>Works with S3, Lambda, EventBridge for automation</li>
          <li>Integrates easily into backend pipelines</li>
        </ul>
        <FlashcardsChapter8 />
        <ButtonGroup>
                  <Link to="/quiz-chapter-8">📝 Quiz</Link>
                  <Link to="/">🏠 Back to Home</Link>
                </ButtonGroup>
      </Wrapper>
    </Layout>
  );
}

export { Head };
