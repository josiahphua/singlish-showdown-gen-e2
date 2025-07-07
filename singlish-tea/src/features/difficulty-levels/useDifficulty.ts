import { useState } from 'react';
import type { Difficulty } from './DifficultySelector';

export const useDifficulty = (initial: Difficulty = 'easy') => {
  const [difficulty, setDifficulty] = useState<Difficulty>(initial);
  return { difficulty, setDifficulty };
};
