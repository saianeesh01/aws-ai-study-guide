import * as React from "react"
import Layout from "../components/layout"
import { Head } from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5)
  }

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
`

const allQuestions = [

    {
        question: "What is the main role of a hidden layer in a neural network?",
        options: ["Receive input", "Perform non-linear transformations", "Output predictions", "Store weights"],
        answer: "Perform non-linear transformations",
        explanation: "Hidden layers transform inputs using learned weights and activation functions to extract features."
      },
      {
        question: "Which activation function outputs values between 0 and 1?",
        options: ["ReLU", "Tanh", "Sigmoid", "Softmax"],
        answer: "Sigmoid",
        explanation: "The sigmoid function maps input to a range between 0 and 1, useful for binary classification."
      },
      {
        question: "What does backpropagation update?",
        options: ["Neuron count", "Data format", "Weights and biases", "Epoch count"],
        answer: "Weights and biases",
        explanation: "Backpropagation uses gradient descent to update weights and biases to minimize the loss."
      },
      {
        question: "What is overfitting?",
        options: ["Model too simple", "Model fails to learn", "Model performs poorly on training data", "Model memorizes training data"],
        answer: "Model memorizes training data",
        explanation: "Overfitting means the model learns patterns too precisely, failing to generalize to new data."
      },
      {
        question: "Which optimizer adapts learning rate during training?",
        options: ["SGD", "Momentum", "Adam", "Batch"],
        answer: "Adam",
        explanation: "Adam optimizer adjusts the learning rate for each parameter dynamically during training."
      },
      {
        question: "What is dropout used for?",
        options: ["Improving inference speed", "Reducing dataset size", "Preventing overfitting", "Improving accuracy directly"],
        answer: "Preventing overfitting",
        explanation: "Dropout randomly disables neurons during training to prevent reliance on specific features."
      },
      {
        question: "Which layer connects every neuron to the previous layer's outputs?",
        options: ["Recurrent", "Convolutional", "Pooling", "Dense"],
        answer: "Dense",
        explanation: "Dense (fully connected) layers connect each input to every neuron in the layer."
      },
      {
        question: "What is the output of a softmax layer?",
        options: ["Logits", "Binary output", "Class probabilities", "Errors"],
        answer: "Class probabilities",
        explanation: "Softmax turns logits into a probability distribution summing to 1 across classes."
      },
      {
        question: "Which loss function is best for regression problems?",
        options: ["Cross-entropy", "Hinge loss", "Mean Squared Error", "Sparse categorical"],
        answer: "Mean Squared Error",
        explanation: "MSE penalizes large differences between predicted and true values in continuous tasks."
      },
      {
        question: "What is an epoch?",
        options: ["One batch", "Subset of data", "One pass over training set", "Evaluation loop"],
        answer: "One pass over training set",
        explanation: "An epoch is one complete iteration through the entire dataset during training."
      },
      {
        question: "A facial recognition model learns to match only specific people from the training set. What’s the issue?",
        options: ["Good generalization", "Underfitting", "Overfitting", "Hyperparameter tuning"],
        answer: "Overfitting",
        explanation: "The model learned exact features without generalizing to new faces — classic overfitting."
      },
      {
        question: "An e-commerce recommendation model outputs all items equally. Which issue is likely?",
        options: ["Overfitting", "Poor activation", "Untrained output layer", "Missing softmax"],
        answer: "Missing softmax",
        explanation: "Without softmax, raw scores can’t be interpreted as meaningful probabilities."
      },
      {
        question: "Which activation function is preferred in deep image networks?",
        options: ["Sigmoid", "Softmax", "ReLU", "Linear"],
        answer: "ReLU",
        explanation: "ReLU is simple and efficient, helping deep CNNs avoid vanishing gradients."
      },
      {
        question: "A voice assistant model predicts gibberish. The training data had lots of noise. What’s the likely fix?",
        options: ["Add dropout", "Use more layers", "Clean data better", "Lower learning rate"],
        answer: "Clean data better",
        explanation: "Poor-quality training data leads to noisy and unreliable model outputs."
      },
      {
        question: "A model for stock price prediction always predicts the average price. What’s likely wrong?",
        options: ["Low variance", "Poor activation", "Too shallow", "Underfitting"],
        answer: "Underfitting",
        explanation: "If predictions stay near the mean, the model likely hasn't learned key patterns."
      },
      {
        question: "Why use neural networks in medical image diagnosis?",
        options: ["Random sampling", "Pattern matching and feature detection", "Speed", "Fewer labels"],
        answer: "Pattern matching and feature detection",
        explanation: "Neural networks can spot subtle visual features, useful in X-ray or MRI diagnosis."
      },
      {
        question: "What architecture would you likely use for time series forecasting?",
        options: ["CNN", "RNN", "Dense only", "GAN"],
        answer: "RNN",
        explanation: "Recurrent Neural Networks are designed to learn from sequential data like time series."
      },
      {
        question: "Why might you freeze layers in a neural network during training?",
        options: ["Speed up inference", "Reuse learned features", "Apply softmax", "Reduce accuracy"],
        answer: "Reuse learned features",
        explanation: "Freezing layers allows you to use pre-trained weights (transfer learning) as feature extractors."
      },
      {
        question: "Which type of layer is best for extracting spatial features in images?",
        options: ["RNN", "Dense", "Convolutional", "Softmax"],
        answer: "Convolutional",
        explanation: "Convolutional layers detect local patterns like edges and shapes in images."
      },
      {
        question: "You want a model that learns whether customer reviews are positive/negative. Which final activation?",
        options: ["Tanh", "Softmax", "Sigmoid", "None"],
        answer: "Sigmoid",
        explanation: "Sigmoid outputs a probability between 0 and 1 for binary classification tasks."
      }
    ]
    
        
         


export default function QuizChapter3() {
  const [questions] = React.useState(() => [...allQuestions].sort(() => Math.random() - 0.5))
  const [current, setCurrent] = React.useState(0)
  const [selected, setSelected] = React.useState(null)
  const [score, setScore] = React.useState(0)
  const [showResult, setShowResult] = React.useState(false)
  const [answers, setAnswers] = React.useState([])

  const currentQ = questions[current]

  const handleAnswer = (option) => {
    setSelected(option)
    setAnswers(prev => [...prev, { ...currentQ, selected: option }])
    if (option === currentQ.answer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
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
        <h1>📝 Quiz: Chapter 4 – Fundamentals of Neural Networks</h1>
        {!showResult ? (
          <div className="question">
            <p><strong>Q{current + 1}:</strong> {currentQ.question}</p>
            {currentQ.options.map((opt) => (
              <div key={opt}>
                <button
                  onClick={() => handleAnswer(opt)}
                  disabled={selected !== null}
                >
                  {opt}
                </button>
              </div>
            ))}
            {selected && (
              <p className="feedback">
                {selected === currentQ.answer ? "✅ Correct!" : `❌ Incorrect. Correct: ${currentQ.answer}`}
              </p>
            )}
            {selected && (
              <button onClick={nextQuestion}>Next</button>
            )}
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

            <div style={{ marginTop: "2rem" }}>
              <Link to="/chapter-4">← Back to Chapter 4</Link> |{" "}
              <Link to="/">🏠 Home</Link>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

export { Head }
