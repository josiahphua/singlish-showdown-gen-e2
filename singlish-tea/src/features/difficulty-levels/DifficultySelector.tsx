import React from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type DifficultySelectorProps = {
  value: Difficulty;
  onChange: (d: Difficulty) => void;
};

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({ value, onChange }) => (
  <div className="mb-4 flex gap-2 items-center">
    <label className="font-semibold">Difficulty:</label>
    <select
      className="select select-bordered"
      value={value}
      onChange={e => onChange(e.target.value as Difficulty)}
      aria-label="Select difficulty"
    >
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
);

export default DifficultySelector;
