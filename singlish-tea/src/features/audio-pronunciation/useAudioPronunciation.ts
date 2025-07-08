import { useRef, useState, useCallback } from 'react';

/**
 * useAudioPronunciation - Hook to play audio from a URL.
 */
export const useAudioPronunciation = (audioUrl: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    if (!audioUrl) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    audioRef.current.currentTime = 0;
    void audioRef.current.play();
    setIsPlaying(true);
  }, [audioUrl]);

  return { play, isPlaying };
};
