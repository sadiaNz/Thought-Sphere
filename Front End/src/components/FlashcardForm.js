import React, { useState } from 'react';

const FlashcardForm = ({ addFlashcard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !answer) {
      setError('Question and answer are required.');
      return;
    }

    // Create a new flashcard object
    const newFlashcard = { question, answer, category };

    try {
      await addFlashcard(newFlashcard); // Call the function passed as prop
      setQuestion('');
      setAnswer('');
      setCategory('');
      setError('');
    } catch (err) {
      setError('Failed to add flashcard.');
    }
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category (optional)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default FlashcardForm;
