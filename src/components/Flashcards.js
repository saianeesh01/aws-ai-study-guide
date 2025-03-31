import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="p-4 border rounded shadow cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="font-semibold">
        {showAnswer ? answer : question}
      </div>
    </div>
  );
};

export default Flashcard;
