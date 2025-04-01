import * as React from "react"
import styled, { keyframes } from "styled-components"

const flow = keyframes`
  0% { transform: translateX(0); opacity: 0.2; }
  50% { transform: translateX(10px); opacity: 1; }
  100% { transform: translateX(0); opacity: 0.2; }
`

const Wrapper = styled.div`
  background: #000;
  color: #00ff90;
  font-family: "Courier New", monospace;
  padding: 3rem 2rem;
  text-align: center;
`

const Diagram = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`

const Step = styled.div`
  background: #111;
  border: 2px solid #00ff90;
  padding: 1rem;
  border-radius: 10px;
  min-width: 220px;
  text-align: center;
  font-size: 1rem;
  position: relative;

  &::after {
    content: "➔";
    position: absolute;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    animation: ${flow} 1.5s infinite;
    color: #00ffcc;
  }

  &:last-child::after {
    content: "";
  }
`

export default function MLLifecycleDiagram() {
  const steps = [
    "1️⃣ Problem Definition",
    "2️⃣ Data Collection",
    "3️⃣ Data Preparation",
    "4️⃣ Model Training",
    "5️⃣ Model Evaluation",
    "6️⃣ Deployment",
    "7️⃣ Monitoring & Feedback"
  ]

  return (
    <Wrapper>
      <h2>⚙️ Machine Learning Lifecycle</h2>
      <Diagram>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Diagram>
    </Wrapper>
  )
}
