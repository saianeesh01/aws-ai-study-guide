// src/pages/chapter-9.js

import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import FlashcardsChapter9 from "../components/FlashcardsChapter9"

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

  code, pre {
    background: #111;
    color: #00ffcc;
    padding: 0.5rem;
    border-radius: 6px;
    display: block;
    overflow-x: auto;
    margin-top: 1rem;
  }

  ul {
    margin-left: 1.5rem;
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

export default function Chapter9Page() {
  return (
    <Layout>
      <Wrapper>
        <h1>📈 Chapter 9: Forecasting with Amazon Forecast</h1>

        <p>
          Amazon Forecast is a fully managed service that uses machine learning to generate highly accurate forecasts. It’s based on the same technology used at Amazon.com and requires no ML expertise.
        </p>

        <h2>🛠️ Use Cases</h2>
        <ul>
          <li>Retail demand forecasting</li>
          <li>Inventory optimization</li>
          <li>Workforce planning</li>
          <li>Revenue forecasting</li>
          <li>Web traffic and energy demand prediction</li>
        </ul>

        <h2>🔁 Forecasting Workflow</h2>
        <ol>
          <li>Upload time-series data to S3</li>
          <li>Create Dataset Group</li>
          <li>Import Datasets (target, related time series, metadata)</li>
          <li>Train a Predictor using AutoML or a specific algorithm</li>
          <li>Generate Forecast</li>
          <li>Export or call forecasts through API</li>
        </ol>

        <h2>📊 Types of Datasets</h2>
        <ul>
          <li><strong>Target Time Series:</strong> Required. Historical values you want to predict.</li>
          <li><strong>Related Time Series:</strong> Optional. External features (e.g., promotions, holidays).</li>
          <li><strong>Item Metadata:</strong> Optional. Attributes like product category, store location, etc.</li>
        </ul>

        <h2>⚙️ Sample Code (Boto3)</h2>
        <pre>{`
import boto3

forecast = boto3.client("forecast")

# Create a dataset group
forecast.create_dataset_group(
  DatasetGroupName="RetailDemandGroup",
  Domain="RETAIL"
)

# Train a predictor using AutoML
forecast.create_predictor(
  PredictorName="RetailDemandPredictor",
  ForecastHorizon=30,
  PerformAutoML=True,
  InputDataConfig={
    "DatasetGroupArn": "your-dataset-group-arn"
  }
)

# Generate the forecast
forecast.create_forecast(
  ForecastName="RetailDemandForecast",
  PredictorArn="your-predictor-arn"
)
        `}</pre>

        <h2>📉 Quantiles</h2>
        <p>Amazon Forecast supports quantiles like <code>P10</code>, <code>P50</code>, and <code>P90</code> to help you plan for best, average, and worst-case scenarios.</p>

        <h2>📌 Real-World Applications</h2>
        <ul>
          <li><strong>Retail:</strong> Anticipate sales trends to avoid overstocking or stockouts</li>
          <li><strong>Logistics:</strong> Forecast shipment volumes for route planning</li>
          <li><strong>Healthcare:</strong> Predict patient volumes for scheduling staff</li>
          <li><strong>Finance:</strong> Estimate future revenue or demand</li>
        </ul>

        <h2>🧭 Visual: Forecasting Pipeline</h2>
        <div className="diagram">
{`[ Historical Data ]
        ↓
[ Data Prep (CSV in S3) ]
        ↓
[ Dataset Group & Import ]
        ↓
[ Train Predictor (AutoML/DeepAR+) ]
        ↓
[ Generate Forecast ]
        ↓
[ Export or Real-Time API Call ]`}
        </div>

        <h2>🧠 Key Takeaways</h2>
        <ul>
          <li>Forecast works best for structured, time-series data</li>
          <li>AutoML handles model and algorithm selection</li>
          <li>Quantiles provide prediction confidence ranges</li>
          <li>API-based access for real-time integration</li>
        </ul>
         <FlashcardsChapter9 />
        <ButtonGroup>
                  <Link to="/quiz-chapter-9">📝 Quiz</Link>
                  <Link to="/">🏠 Back to Home</Link>
                </ButtonGroup>
      </Wrapper>
    </Layout>
  )
}

export { Head }
