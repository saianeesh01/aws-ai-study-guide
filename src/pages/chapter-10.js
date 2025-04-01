// src/pages/chapter-10.js

import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter10 from "../components/FlashcardsChapter10"

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

  ul, ol {
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

export default function Chapter10Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>📆 Chapter 10: Recommendations with Amazon Personalize</h1>
        <p>
          Amazon Personalize is a fully managed machine learning service that lets you deliver real-time personalized recommendations using the same technology as Amazon.com.
        </p>

        <h2>🌟 Use Cases</h2>
        <ul>
          <li>Product recommendations in e-commerce</li>
          <li>Video or article recommendations</li>
          <li>Targeted email personalization</li>
          <li>Custom landing pages</li>
        </ul>

        <h2>🔄 Personalize Workflow</h2>
        <ol>
          <li>Import data (interactions, items, users)</li>
          <li>Create dataset group</li>
          <li>Choose recipe and train solution</li>
          <li>Deploy campaign</li>
          <li>Call real-time recommendations API</li>
        </ol>

        <h2>📄 Dataset Types</h2>
        <ul>
          <li><strong>Interactions:</strong> Required - user_id, item_id, timestamp</li>
          <li><strong>Items:</strong> Metadata like genre, price, brand</li>
          <li><strong>Users:</strong> Metadata like age, location</li>
        </ul>

        <h2>🔧 Sample Code (Boto3)</h2>
        <pre>{`
import boto3
personalize = boto3.client("personalize")

personalize.create_solution(
  name="MySolution",
  recipeArn="arn:aws:personalize:::recipe/aws-user-personalization",
  datasetGroupArn="your-dataset-group-arn"
)

personalize.create_campaign(
  name="MyCampaign",
  solutionVersionArn="your-solution-version-arn",
  minProvisionedTPS=1
)
        `}</pre>

        <h2>📊 Visual Diagram</h2>
        <div className="diagram">
{`[ User & Item Data ]
        ↓
[ Dataset Group ]
        ↓
[ Train Solution (e.g. HRNN) ]
        ↓
[ Deploy Campaign ]
        ↓
[ Get Recommendations via API ]`}
        </div>

        <h2>🔍 Key Concepts</h2>
        <ul>
          <li><strong>Solution:</strong> Trained model using a recipe and dataset</li>
          <li><strong>Campaign:</strong> Live deployment to get real-time recommendations</li>
          <li><strong>Cold Start:</strong> Use metadata for new users/items with no history</li>
          <li><strong>Recipes:</strong> Algorithms like HRNN, SIMS, PopularityCount</li>
        </ul>

        <h2>🧢 Best Practices</h2>
        <ul>
          <li>Continuously feed new data</li>
          <li>Choose recipe based on use case</li>
          <li>Use batch workflows for offline recommendations</li>
          <li>Monitor performance via CloudWatch</li>
        </ul>
        <FlashcardsChapter10 />
        <ButtonGroup>
                 <Link to="/quiz-chapter-10">📝 Quiz</Link>
                 <Link to="/">🏠 Back to Home</Link>
               </ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
