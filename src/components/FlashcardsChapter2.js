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
  {
    question: "What is data preprocessing?",
    answer: "The process of cleaning and transforming raw data before training a machine learning model."
  },
  {
    question: "Why is data quality important in ML?",
    answer: "Poor data quality leads to inaccurate or biased models."
  },
  {
    question: "What are some common data cleaning techniques?",
    answer: "Removing duplicates, handling missing values, fixing incorrect formats, filtering outliers."
  },
  {
    question: "What is missing value imputation?",
    answer: "Filling in missing data using statistical methods like mean, median, or model-based prediction."
  },
  {
    question: "What is feature engineering?",
    answer: "Creating new input features or transforming existing ones to improve model performance."
  },
  {
    question: "What is normalization?",
    answer: "Scaling features to a fixed range like 0 to 1 for consistent model behavior."
  },
  {
    question: "What is standardization?",
    answer: "Rescaling features so they have a mean of 0 and standard deviation of 1."
  },
  {
    question: "When should you normalize or standardize data?",
    answer: "When features have different scales or when using algorithms like kNN, SVM, or neural networks."
  },
  {
    question: "What is categorical encoding?",
    answer: "Transforming text or category variables into numeric format, like one-hot encoding or label encoding."
  },
  {
    question: "What is outlier detection?",
    answer: "Identifying data points that are significantly different from others, which may affect model training."
  },
  {
    question: "How can you handle outliers?",
    answer: "Remove them, cap them, or apply transformations (like log or sqrt) to reduce skew."
  },
  {
    question: "What is data labeling?",
    answer: "Assigning correct outputs (labels) to input data, required for supervised learning."
  },
  {
    question: "What’s the difference between training and test datasets?",
    answer: "Training is used to build the model, test is used to evaluate how well it generalizes."
  },
  {
    question: "What is a validation set used for?",
    answer: "Fine-tuning the model and hyperparameters before final testing."
  },
  {
    question: "What is data augmentation?",
    answer: "Creating modified copies of data to expand the training set, often used in images/text."
  },
  {
    question: "What is data collection in the ML pipeline?",
    answer: "The process of gathering raw data from various sources like databases, sensors, user input, or APIs."
  },
  {
    question: "What is the importance of diverse training data?",
    answer: "It helps the model generalize better and reduces bias or overfitting to specific patterns."
  },
  {
    question: "What is the role of data annotation?",
    answer: "It involves labeling data with correct outputs so it can be used in supervised learning tasks."
  },
  {
    question: "Name three common sources of data.",
    answer: "APIs, logs, user interactions, databases, surveys, web scraping, or cloud storage."
  },
  {
    question: "What is structured data?",
    answer: "Data organized into rows and columns like in spreadsheets or relational databases."
  },
  {
    question: "What is unstructured data?",
    answer: "Data without a predefined format, such as text, images, video, or audio."
  },
  {
    question: "Why is data balancing important?",
    answer: "To prevent bias toward the majority class in classification problems with imbalanced labels."
  },
  {
    question: "What is synthetic data?",
    answer: "Artificially generated data that mimics real data, used to augment datasets or protect privacy."
  },
  {
    question: "What is a data pipeline?",
    answer: "An automated sequence of steps that collects, processes, and feeds data into the ML model."
  },
  {
    question: "Why is data versioning useful?",
    answer: "It helps track changes to datasets over time and ensures reproducibility in ML experiments."
  },
  {
    question: "What is feature selection?",
    answer: "The process of choosing only the most relevant input features for training to reduce complexity."
  },
  {
    question: "What is a feature vector?",
    answer: "A numerical representation of input features used to feed into ML algorithms."
  },
  {
    question: "What is noise in data?",
    answer: "Irrelevant or random data that can obscure patterns and reduce model performance."
  },
  {
    question: "How does feature scaling help machine learning models?",
    answer: "It ensures all features contribute equally by putting them on a similar scale."
  },
  {
    question: "What is domain-specific preprocessing?",
    answer: "Custom transformations based on the data type, such as stemming for text or resizing for images."
  }
]

export default function FlashcardsChapter2() {
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
