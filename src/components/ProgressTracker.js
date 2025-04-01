import React from "react"
import styled from "styled-components"

const TrackerWrapper = styled.section`
  background: #0a0a0a;
  padding: 3rem 1.5rem;
  color: #00ff90;
  text-align: center;
  font-family: "Courier New", monospace;
`

const Bar = styled.div`
  background: #333;
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem auto;
  height: 24px;
  width: 80%;
  max-width: 500px;
`

const Fill = styled.div`
  background: #00ff90;
  height: 100%;
  width: ${props => props.percent}%;
  transition: width 0.3s ease;
`

const ProgressTracker = () => {
  const flashcardProgress = 65 // 🔧 Replace with dynamic value later
  const quizProgress = 40

  return (
    <TrackerWrapper>
      <h2>📈 Your Progress</h2>

      <p>Flashcards Completed</p>
      <Bar>
        <Fill percent={flashcardProgress} />
      </Bar>

      <p>Quizzes Taken</p>
      <Bar>
        <Fill percent={quizProgress} />
      </Bar>
    </TrackerWrapper>
  )
}

export default ProgressTracker
