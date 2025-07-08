import React from 'react';
import { useAudioPronunciation } from './useAudioPronunciation';

export type AudioPronunciationProps = {
  audioUrl: string;
  label?: string;
};

/**
 * AudioPronunciation - Plays audio for pronunciation.
 */
export const AudioPronunciation: React.FC<AudioPronunciationProps> = ({ audioUrl, label }) => {
  const { play, isPlaying } = useAudioPronunciation(audioUrl);

  return (
    <button
      type="button"
      className="btn btn-secondary flex items-center gap-2"
      onClick={play}
      disabled={isPlaying}
      aria-label={label ?? 'Play pronunciation'}
    >
      <span role="img" aria-label="speaker">🔊</span>
      {label ?? 'Play'}
    </button>
  );
};

export default AudioPronunciation;
