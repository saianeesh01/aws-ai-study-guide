import * as React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Card = styled.div`
  background: #111;
  border: 1px solid #00ff90;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Courier New", monospace;
  color: #00ff90;
  animation: ${fadeIn} 0.5s ease;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const Button = styled.button`
  background: #00ff90;
  color: black;
  border: none;
  padding: 0.6rem 1.2rem;
  margin-top: 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #00cc70;
  }
`

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

const flashcards = [
    { question: "What is Amazon Forecast?", answer: "A managed ML service that generates accurate time series forecasts." },
    { question: "What type of data does Forecast use?", answer: "Time-series data (with timestamps and values)." },
    { question: "Does Forecast require ML expertise?", answer: "No, it supports AutoML for easy use." },
    { question: "What are quantiles in Forecast?", answer: "Percentile-based predictions like P10, P50, and P90 for uncertainty estimates." },
    { question: "What is a Predictor in Amazon Forecast?", answer: "A trained model that can generate forecasts." },
    { question: "What are the 3 types of datasets Forecast can use?", answer: "Target Time Series, Related Time Series, and Item Metadata." },
    { question: "What is the minimum required dataset type?", answer: "Target Time Series." },
    { question: "Can you use external features in Forecast?", answer: "Yes, with Related Time Series." },
    { question: "What format must input files be in?", answer: "CSV with a specific schema and timestamp format." },
    { question: "What is a Forecast Horizon?", answer: "How far into the future predictions are made (e.g., 30 days)." },
    { question: "How is accuracy measured?", answer: "With metrics like WQL, RMSE, and MAPE." },
    { question: "What does AutoML do in Forecast?", answer: "Automatically selects the best algorithm and hyperparameters." },
    { question: "Can Forecast integrate with Lambda?", answer: "Yes, to automate updates or responses." },
    { question: "Where is your data stored before Forecast consumes it?", answer: "Amazon S3." },
    { question: "What are Forecast Domains?", answer: "Predefined use cases like RETAIL, METRICS, CUSTOM, etc." },
    { question: "Is Forecast real-time?", answer: "No, it's batch-based, but you can serve predictions via API." },
    { question: "What is a Dataset Group?", answer: "A container for one or more related datasets." },
    { question: "What is DeepAR+?", answer: "An advanced neural forecasting algorithm available in Forecast." },
    { question: "How does Forecast handle seasonality?", answer: "Automatically detects trends and seasonality patterns." },
    { question: "Can you backtest models in Forecast?", answer: "Yes, it can use backtest windows during training." },
    { question: "Use of Forecast in retail?", answer: "To predict sales demand and manage inventory." },
    { question: "Use of Forecast in logistics?", answer: "To forecast shipment volumes for resource planning." },
    { question: "Use of Forecast in healthcare?", answer: "To predict patient flow and staffing needs." },
    { question: "Use of Forecast in finance?", answer: "Revenue prediction, cost planning, and cash flow forecasting." },
    { question: "Can Forecast be triggered by an event?", answer: "Yes, using EventBridge, Lambda, or Step Functions." },
    { question: "What is P90 in forecasting?", answer: "A conservative forecast — 90% of predicted values fall below this." },
    { question: "What kind of model evaluation is done?", answer: "Forecast automatically calculates metrics like WQL." },
    { question: "What is the Forecast ARN?", answer: "Amazon Resource Name that uniquely identifies the Forecast entity." },
    { question: "Can you export forecasted values?", answer: "Yes, to Amazon S3 for downstream use." },
    { question: "Is Forecast integrated with SageMaker?", answer: "Not directly — it's standalone but can work with SageMaker output." }
  ]

export default function FlashcardsChapter9() {
  const [shuffledCards] = React.useState(() => shuffleArray(flashcards))
  const [index, setIndex] = React.useState(0)
  const [showAnswer, setShowAnswer] = React.useState(false)

  const nextCard = () => {
    setShowAnswer(false)
    setIndex((prev) => (prev + 1) % shuffledCards.length)
  }

  return (
    <Card>
      <h2>🧠 Flashcard {index + 1} of {shuffledCards.length}</h2>
      <p>{shuffledCards[index].question}</p>
      {showAnswer && <p><strong>Answer:</strong> {shuffledCards[index].answer}</p>}
      <div>
        <Button onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
        <Button onClick={nextCard} style={{ marginLeft: "1rem" }}>
          Next
        </Button>
      </div>
    </Card>
  )
}
