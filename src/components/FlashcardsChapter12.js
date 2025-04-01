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

        { question: "What is Responsible AI?", answer: "A practice of designing and deploying AI systems that are ethical, fair, and safe." },
        { question: "What is algorithmic bias?", answer: "When an ML model produces unfair outcomes due to biased training data." },
        { question: "How does AWS SageMaker Clarify help?", answer: "It detects bias in datasets and model predictions." },
        { question: "What is explainability in ML?", answer: "Making model predictions interpretable to humans." },
        { question: "What is model fairness?", answer: "Ensuring predictions don’t systematically disadvantage any group." },
        { question: "What is differential privacy?", answer: "Protecting individual data by introducing statistical noise." },
        { question: "Why is diverse training data important?", answer: "To reduce bias and ensure the model generalizes across groups." },
        { question: "What is transparency in AI?", answer: "Open communication about how models are built and used." },
        { question: "What is the impact of biased labels?", answer: "They can reinforce societal inequalities in model predictions." },
        { question: "Why is human review essential in AI?", answer: "To validate outputs and prevent automation failures." },
        { question: "What does 'black-box model' mean?", answer: "A model whose internal decision-making logic is not easily understood." },
        { question: "What is fairness through awareness?", answer: "Using group information to ensure equal treatment and outcomes." },
        { question: "What are protected attributes?", answer: "Features like race, gender, or age that require special handling to avoid bias." },
        { question: "What is disparate impact?", answer: "When a model disproportionately harms a specific group even if unintentionally." },
        { question: "What is proactive bias mitigation?", answer: "Addressing bias at the design and training stages of ML." },
        { question: "What is post-hoc analysis?", answer: "Bias or explainability evaluations after the model is trained." },
        { question: "Why track model decisions?", answer: "For accountability, compliance, and future audits." },
        { question: "What is fairness-aware training?", answer: "Training methods that enforce fairness constraints or regularization." },
        { question: "Why does under-representation cause bias?", answer: "The model may not learn accurate patterns for under-represented groups." },
        { question: "What is 'equal opportunity' in ML fairness?", answer: "Ensuring equal true positive rates across different groups." },
        { question: "What is the role of a fairness dashboard?", answer: "To visualize and monitor fairness metrics during model development." },
        { question: "What is individual fairness?", answer: "Similar individuals should receive similar predictions." },
        { question: "What’s the downside of optimizing only for accuracy?", answer: "It may sacrifice fairness and ignore minority errors." },
        { question: "What is model introspection?", answer: "Analyzing how input features influence predictions." },
        { question: "What are ethical guidelines in AI?", answer: "Principles to guide responsible design and deployment." },
        { question: "What is unintended bias?", answer: "Bias that arises from subtle or hidden issues in data or design." },
        { question: "What does SageMaker Clarify use for explainability?", answer: "SHAP (SHapley Additive exPlanations)." },
        { question: "What is the benefit of feature importance scores?", answer: "They help explain model decisions and detect potential bias." },
        { question: "What is auditability?", answer: "The ability to trace how a model was trained and used." },
        { question: "Why should AI developers test for fairness?", answer: "To ensure ethical, legal, and inclusive model outcomes." }
      ]
      

export default function FlashcardsChapter12() {
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
