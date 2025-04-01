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
    { question: "What is IAM in AWS?", answer: "Identity and Access Management — controls access to AWS services and resources." },
    { question: "What are IAM roles used for in AI applications?", answer: "Grant temporary permissions to services like SageMaker, Lambda, etc." },
    { question: "How does AWS KMS help secure ML models?", answer: "Encrypts data and models using customer-managed keys." },
    { question: "What is VPC used for in ML pipelines?", answer: "Isolates services and adds network-level security for SageMaker endpoints." },
    { question: "What does SageMaker Model Monitor do?", answer: "Monitors data drift and model performance in production." },
    { question: "How do API Gateway and Lambda support ML models?", answer: "Enable serverless endpoints to integrate ML with web apps." },
    { question: "What is the role of CloudTrail in AI?", answer: "Logs all API activity for audit and compliance." },
    { question: "What is data leakage in ML?", answer: "When future data unintentionally influences the training process." },
    { question: "What is an endpoint in SageMaker?", answer: "A real-time API for serving ML model predictions." },
    { question: "What is the benefit of decoupling ML services?", answer: "Improves scalability, modularity, and debugging." },
    { question: "How can IAM policies enforce least privilege?", answer: "By granting only the exact permissions needed per user or service." },
    { question: "What AWS service provides security event insights?", answer: "Amazon GuardDuty." },
    { question: "What is multi-factor authentication (MFA)?", answer: "A security mechanism requiring a second authentication factor beyond username/password." },
    { question: "How can you protect model endpoints?", answer: "Use VPC, encryption, IAM roles, and private endpoints." },
    { question: "What is SageMaker Pipelines?", answer: "An orchestration service to automate and secure ML workflows." },
    { question: "What is the risk of public S3 buckets?", answer: "They can expose sensitive training or prediction data." },
    { question: "How can you audit ML deployments?", answer: "Use CloudTrail logs and resource tagging." },
    { question: "What’s a secure way to pass secrets to ML services?", answer: "Use AWS Secrets Manager or Parameter Store with IAM policies." },
    { question: "Why is encryption important in ML pipelines?", answer: "To protect sensitive input/output data, especially in production." },
    { question: "What is a security group?", answer: "A virtual firewall that controls inbound/outbound traffic for AWS resources." },
    { question: "What does shared responsibility mean in AWS?", answer: "AWS secures infrastructure; customers secure configurations and data." },
    { question: "What are audit logs?", answer: "Records of all API and data access activity in your AWS account." },
    { question: "Why isolate training from production?", answer: "To avoid unintentional data leaks and model corruption." },
    { question: "What is drift detection?", answer: "Monitoring for changes in data distribution or model behavior over time." },
    { question: "What is endpoint throttling?", answer: "Limiting API requests to prevent abuse or overload." },
    { question: "How can tagging help in security?", answer: "Helps organize and track resources for compliance." },
    { question: "What is the purpose of logging inference requests?", answer: "To monitor for misuse, debugging, and improvement opportunities." },
    { question: "Why use HTTPS for model endpoints?", answer: "Encrypts communication between client and server." },
    { question: "What is the principle of least privilege?", answer: "Giving entities the minimum access required to perform their tasks." },
    { question: "How can you detect anomalies in model usage?", answer: "Enable CloudWatch alarms or integrate with anomaly detection services." }
  ]

export default function FlashcardsChapter11() {
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
