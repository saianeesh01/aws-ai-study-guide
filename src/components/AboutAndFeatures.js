import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background-color: #0a0a0a;
  color: #00ff90;
  font-family: "Courier New", monospace;
  padding: 4rem 2rem;
  text-align: center;
`

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 600px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const FeatureCard = styled.div`
  background-color: #111;
  border: 1px solid #00ff90;
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1;
`

const ProgressBarContainer = styled.div`
  background-color: #222;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 1rem;
`

const ProgressLabel = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const ProgressTrack = styled.div`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  height: 20px;
`

const ProgressFill = styled.div`
  height: 100%;
  width: 40%; /* Change this value dynamically later */
  background-color: #00ff90;
  transition: width 0.3s ease;
`

const AboutAndFeatures = () => (
  <Section>
    <Heading>About the Study Guide</Heading>
    <Text>
      This interactive study guide helps you master AWS AI services through flashcards, quizzes, and smart tools.
    </Text>

    <Heading>Features</Heading>
    <FeatureList>
      <FeatureCard>
        <h3>Flashcards</h3>
        <p>Review key AWS AI concepts quickly and efficiently.</p>
      </FeatureCard>
      <FeatureCard>
        <h3>Quizzes</h3>
        <p>Test your knowledge and track your improvement.</p>
      </FeatureCard>
      <FeatureCard>
        <h3>AI Tools</h3>
        <p>Use built-in AI tools to deepen your learning.</p>
      </FeatureCard>
    </FeatureList>

    <Heading>Your Progress</Heading>
    <ProgressBarContainer>
      <ProgressLabel>Study Progress</ProgressLabel>
      <ProgressTrack>
        <ProgressFill />
      </ProgressTrack>
    </ProgressBarContainer>
  </Section>
)

export default AboutAndFeatures
