import React, { useState } from 'react';
import { useContentManager } from './useContentManager';

/**
 * ContentManager - UI for managing quiz content (CRUD).
 */
export const ContentManager: React.FC = () => {
  const { questions, isLoading, create, remove } = useContentManager();
  const [newQuestion, setNewQuestion] = useState({ text: '', answer: '' });

  if (isLoading) return <div className="p-4">Loading content...</div>;

  return (
    <div className="p-4 max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Content Management</h2>
      <form
        className="mb-6 flex gap-2"
        onSubmit={e => {
          e.preventDefault();
          void create(newQuestion);
          setNewQuestion({ text: '', answer: '' });
        }}
      >
        <input
          className="input input-bordered"
          type="text"
          placeholder="Question text"
          value={newQuestion.text}
          onChange={e => setNewQuestion(q => ({ ...q, text: e.target.value }))}
          required
        />
        <input
          className="input input-bordered"
          type="text"
          placeholder="Answer"
          value={newQuestion.answer}
          onChange={e => setNewQuestion(q => ({ ...q, answer: e.target.value }))}
          required
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
      <ul>
        {questions.map(q => (
          <li key={q.id} className="mb-2 flex gap-2 items-center">
            <span className="flex-1">{q.text} <span className="text-gray-400">({q.answer})</span></span>
            <button className="btn btn-xs btn-error" onClick={() => void remove(q.id)}>Delete</button>
            {/* Edit functionality can be added here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentManager;
