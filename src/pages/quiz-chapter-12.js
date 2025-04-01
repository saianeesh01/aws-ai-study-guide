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
          question: "What AWS tool helps detect bias in ML models?",
          options: ["SageMaker Ground Truth", "Clarify", "Forecast", "Comprehend"],
          answer: "Clarify",
          explanation: "SageMaker Clarify provides bias detection and explainability features."
        },
        {
          question: "Why is fairness important in AI?",
          options: ["To increase inference speed", "To reduce storage costs", "To avoid discrimination", "To improve UI design"],
          answer: "To avoid discrimination",
          explanation: "Unfair models can negatively impact users and lead to legal/ethical issues."
        },
        {
          question: "You’re using biased historical data for predictions. What should you do?",
          options: ["Ignore it", "Add random noise", "Perform data audit", "Retrain the model"],
          answer: "Perform data audit",
          explanation: "Understanding bias in the dataset is the first step to mitigating it."
        },
        {
          question: "What is explainability in ML used for?",
          options: ["Improving accuracy", "Understanding model decisions", "Reducing latency", "Encrypting data"],
          answer: "Understanding model decisions",
          explanation: "It allows stakeholders to trust and verify model behavior."
        },
        {
          question: "Which AWS service supports fairness monitoring and bias reports?",
          options: ["SageMaker Pipelines", "SageMaker Clarify", "Textract", "Polly"],
          answer: "SageMaker Clarify",
          explanation: "Clarify checks for bias in both data and model output."
        },
        {
          question: "What is SHAP in AI explainability?",
          options: ["A security protocol", "A translation tool", "A visualization method", "A feature attribution method"],
          answer: "A feature attribution method",
          explanation: "SHAP explains predictions by assigning feature importance values."
        },
        {
          question: "What is individual fairness?",
          options: ["Privacy guarantees", "Treating similar people similarly", "Encrypting inputs", "Model transparency"],
          answer: "Treating similar people similarly",
          explanation: "It ensures fairness at the individual level, not just across groups."
        },
        {
          question: "What is the danger of optimizing only for accuracy?",
          options: ["Too much fairness", "Slow inference", "Ignoring fairness and minority errors", "Bias is removed"],
          answer: "Ignoring fairness and minority errors",
          explanation: "A high accuracy may still hide unfair treatment of smaller groups."
        },
        {
          question: "Which data factor is key to fairness?",
          options: ["Data size", "Cloud region", "Data diversity", "Data age"],
          answer: "Data diversity",
          explanation: "Training data must represent all groups to avoid bias."
        },
        {
          question: "How does bias affect ML models?",
          options: ["Speeds up inference", "Improves generalization", "Causes unfair predictions", "Improves validation accuracy"],
          answer: "Causes unfair predictions",
          explanation: "Bias results in models that systematically favor or disadvantage groups."
        },
      
        // Real-World Scenarios
        {
          question: "A job screening model rejects female candidates disproportionately. What is likely the cause?",
          options: ["Overfitting", "Feature scaling", "Bias in training data", "Too many hidden layers"],
          answer: "Bias in training data",
          explanation: "Historical hiring data may reflect societal bias, which the model learns."
        },
        {
          question: "A bank is questioned about how its credit model works. What feature would help?",
          options: ["Explainability", "Hyperparameter tuning", "Early stopping", "CloudWatch"],
          answer: "Explainability",
          explanation: "Explainable AI techniques justify predictions to users and regulators."
        },
        {
          question: "A social app makes recommendations that favor one group. What tool helps identify this?",
          options: ["Textract", "Personalize", "Clarify", "GuardDuty"],
          answer: "Clarify",
          explanation: "Clarify provides group-wise fairness reports to detect bias."
        },
        {
          question: "An AI-generated loan approval system is audited. What feature proves it was fair?",
          options: ["Model accuracy", "CloudFormation templates", "Bias reports from Clarify", "Notebook instance logs"],
          answer: "Bias reports from Clarify",
          explanation: "Clarify can track training and inference fairness statistics."
        },
        {
          question: "A hospital uses ML to prioritize patients but skips gender as a feature. Is this enough?",
          options: ["Yes, always fair", "No, indirect bias may remain", "Yes, if using AutoML", "Yes, if encrypted"],
          answer: "No, indirect bias may remain",
          explanation: "Other correlated variables can still cause indirect bias."
        },
        {
          question: "What AWS method ensures your model doesn’t memorize sensitive data?",
          options: ["ReLU", "Batch inference", "Differential privacy", "Lambda functions"],
          answer: "Differential privacy",
          explanation: "Adds noise to protect individual records while training."
        },
        {
          question: "Your model shows high bias during evaluation. What next?",
          options: ["Ship it", "Use more epochs", "Add dropout", "Rebalance and clean training data"],
          answer: "Rebalance and clean training data",
          explanation: "Unbiased, diverse data is critical to fairness."
        },
        {
          question: "You release an ML model and want users to understand its limits. What should you publish?",
          options: ["CloudWatch metrics", "Encryption keys", "Model cards", "IAM policies"],
          answer: "Model cards",
          explanation: "Model cards describe how a model was trained and its limitations."
        },
        {
          question: "Which principle ensures ethical accountability in AI decisions?",
          options: ["Low latency", "Differential inference", "Transparency", "CloudTrail logging"],
          answer: "Transparency",
          explanation: "Transparency helps users and auditors trust the AI system."
        },
        {
          question: "How can you prevent models from reflecting real-world inequalities?",
          options: ["Use fewer features", "Avoid validation", "Introduce fairness checks", "Retrain often"],
          answer: "Introduce fairness checks",
          explanation: "Bias and fairness must be tested at every ML pipeline stage."
        }
      ]
      
  
  

export default function QuizChapter12() {
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
        <h1>📝 Quiz: Chapter 12:  Computer Vision with AWS (Rekognition, Textract)</h1>

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
              <Link to="/chapter-12">← Back to Chapter 12</Link>
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
