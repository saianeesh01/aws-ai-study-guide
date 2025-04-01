import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

// 🔁 Utility to shuffle questions
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// 💅 Styled Components
const Wrapper = styled.div`
  background: black;
  color: #00ff90;
  font-family: "Courier New", monospace;
  padding: 3rem 2rem;
  min-height: 100vh;

  h1 {
    margin-bottom: 2rem;
  }

  .question {
    margin-bottom: 2rem;
  }

  button {
    background: #00ff90;
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background: #00cc70;
    }
  }

  .feedback {
    margin-top: 1rem;
    font-weight: bold;
  }

  .review {
    margin-top: 2rem;
    background: #111;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #00ff90;
  }

  .correct {
    color: #00ff90;
  }

  .wrong {
    color: red;
  }

  .button-nav {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a, button {
      background: #00ff90;
      color: black;
      font-weight: bold;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #00cc70;
      }
    }
  }
`

// 📚 Question Set (abbreviated for brevity)
const allQuestions = [
    {
        question: "What AWS service provides encryption for ML data?",
        options: ["IAM", "VPC", "KMS", "Lex"],
        answer: "KMS",
        explanation: "AWS Key Management Service helps secure data using encryption keys."
      },
      {
        question: "You want to restrict access to a model endpoint. What should you use?",
        options: ["S3 policy", "IAM role", "API Gateway", "Security Group"],
        answer: "IAM role",
        explanation: "IAM roles control access to AWS resources, including SageMaker endpoints."
      },
      {
        question: "A company wants to log who accessed the model API. What should be enabled?",
        options: ["CloudWatch", "KMS", "CloudTrail", "Lex"],
        answer: "CloudTrail",
        explanation: "AWS CloudTrail logs all API activity for auditing and security reviews."
      },
      {
        question: "Which service helps detect bias and drift in production ML models?",
        options: ["Amazon Polly", "Model Monitor", "Comprehend", "Kinesis"],
        answer: "Model Monitor",
        explanation: "SageMaker Model Monitor tracks data quality and drift over time."
      },
      {
        question: "Which AWS service helps run ML workflows securely and reproducibly?",
        options: ["SageMaker Pipelines", "Rekognition", "Personalize", "Textract"],
        answer: "SageMaker Pipelines",
        explanation: "Pipelines orchestrate ML steps and enforce security boundaries."
      },
      {
        question: "How do you protect sensitive data in S3 for ML training?",
        options: ["Use public access", "Enable logging", "Encrypt data", "Use Amazon Translate"],
        answer: "Encrypt data",
        explanation: "S3 supports encryption via KMS or AES-256 to secure data at rest."
      },
      {
        question: "What’s the most secure way to store API keys used in ML apps?",
        options: ["Hardcode in code", "Send via email", "Use Secrets Manager", "Store in logs"],
        answer: "Use Secrets Manager",
        explanation: "Secrets Manager securely stores and rotates credentials and API keys."
      },
      {
        question: "A model is making biased decisions due to flawed access patterns. What caused this?",
        options: ["Data leakage", "Overfitting", "High variance", "Low recall"],
        answer: "Data leakage",
        explanation: "Leaking future information into training data leads to unfair decisions."
      },
      {
        question: "How can CloudWatch help secure ML services?",
        options: ["Host notebooks", "Delete endpoints", "Monitor logs and usage", "Add GPUs"],
        answer: "Monitor logs and usage",
        explanation: "CloudWatch tracks resource usage, errors, and custom alerts."
      },
      {
        question: "You need a real-time interface for your model that’s decoupled from the client. What should you use?",
        options: ["CloudFormation", "IAM Group", "API Gateway + Lambda", "Elastic Beanstalk"],
        answer: "API Gateway + Lambda",
        explanation: "These allow lightweight, secure ML inference APIs."
      },
    
      // Real-world scenario questions
      {
        question: "A hospital stores X-ray predictions in S3. What helps ensure they are not leaked?",
        options: ["Public access", "Data drift detection", "S3 encryption and bucket policy", "Model explainability"],
        answer: "S3 encryption and bucket policy",
        explanation: "Combining encryption and tight access policies keeps data secure."
      },
      {
        question: "An eCommerce site notices spam access to their endpoint. What should they do?",
        options: ["Disable encryption", "Use IAM role chaining", "Throttling + IAM policies", "Train more data"],
        answer: "Throttling + IAM policies",
        explanation: "Restrict and control access using rate limits and access roles."
      },
      {
        question: "Your inference results are being altered mid-transit. How do you prevent this?",
        options: ["Use UDP", "Use HTTP", "Switch to batch inference", "Use HTTPS"],
        answer: "Use HTTPS",
        explanation: "HTTPS encrypts data in transit to protect it from interception or tampering."
      },
      {
        question: "A healthcare startup needs full auditability of ML activity. Which AWS feature helps?",
        options: ["CloudTrail", "SNS", "Polly", "Glue"],
        answer: "CloudTrail",
        explanation: "CloudTrail tracks all AWS API activity, useful for compliance and audits."
      },
      {
        question: "A team wants to schedule daily retraining jobs. What AWS combo works?",
        options: ["CloudWatch + S3", "Lambda + SageMaker Pipelines", "Polly + Transcribe", "DynamoDB + IAM"],
        answer: "Lambda + SageMaker Pipelines",
        explanation: "Lambda triggers can orchestrate secure retraining pipelines on a schedule."
      },
      {
        question: "Which strategy enhances endpoint-level security in production?",
        options: ["Enable public access", "Add GPUs", "Use IAM and VPC", "Use Kinesis"],
        answer: "Use IAM and VPC",
        explanation: "IAM controls who can access, and VPC ensures private network isolation."
      },
      {
        question: "A model returns user-specific results. How can you protect user privacy?",
        options: ["Disable logging", "Use differential privacy or PII redaction", "Open access", "Use batch only"],
        answer: "Use differential privacy or PII redaction",
        explanation: "Redacting PII or adding noise helps ensure user data stays private."
      },
      {
        question: "Which tool lets you quickly view security alerts for ML resources?",
        options: ["Forecast", "Comprehend", "GuardDuty", "SageMaker Studio"],
        answer: "GuardDuty",
        explanation: "Amazon GuardDuty detects threats and unusual activity across AWS accounts."
      },
      {
        question: "What is the best way to restrict model usage to internal services only?",
        options: ["Open to public", "Whitelist IPs", "Attach IAM role + VPC endpoint", "Use S3 Transfer Acceleration"],
        answer: "Attach IAM role + VPC endpoint",
        explanation: "This ensures access is internal, authenticated, and secure."
      }
    ]
  

export default function QuizChapter7() {
  const [questions] = React.useState(() => shuffleArray(allQuestions))
  const [current, setCurrent] = React.useState(0)
  const [selected, setSelected] = React.useState(null)
  const [score, setScore] = React.useState(0)
  const [showResult, setShowResult] = React.useState(false)
  const [answers, setAnswers] = React.useState([])

  const currentQ = questions[current]

  const handleAnswer = (option) => {
    setSelected(option)
    setAnswers((prev) => [...prev, { ...currentQ, selected: option }])
    if (option === currentQ.answer) setScore((s) => s + 1)
  }

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setShowResult(true)
    }
  }

  const retryQuiz = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <Layout>
      <Wrapper>
        <h1>📝 Quiz: Chapter 8:  Computer Vision with AWS (Rekognition, Textract)</h1>

        {!showResult ? (
          <div className="question">
            <p><strong>Q{current + 1}:</strong> {currentQ.question}</p>
            {currentQ.options.map((opt) => (
              <div key={opt}>
                <button onClick={() => handleAnswer(opt)} disabled={selected !== null}>
                  {opt}
                </button>
              </div>
            ))}
            {selected && (
              <p className="feedback">
                {selected === currentQ.answer ? "✅ Correct!" : `❌ Incorrect. Correct: ${currentQ.answer}`}
              </p>
            )}
            {selected && <button onClick={nextQuestion}>Next</button>}
          </div>
        ) : (
          <div>
            <h2>✅ Your Score: {score} / {questions.length}</h2>
            <p>{score >= questions.length * 0.8 ? "🎉 Awesome job!" : "📚 Review and try again!"}</p>

            <button onClick={retryQuiz}>🔁 Retry Quiz</button>

            <div className="review">
              <h3>📝 Review:</h3>
              {answers.map((item, i) => (
                <div key={i}>
                  <p><strong>Q{i + 1}:</strong> {item.question}</p>
                  <p>
                    Your Answer:{" "}
                    <span className={item.selected === item.answer ? "correct" : "wrong"}>
                      {item.selected}
                    </span>
                  </p>
                  <p>Correct Answer: {item.answer}</p>
                  <p><em>🧠 {item.explanation}</em></p>
                  <hr />
                </div>
              ))}
            </div>

            <div className="button-nav">
              <Link to="/chapter-11">← Back to Chapter 11</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
