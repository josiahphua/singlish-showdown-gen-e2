import { renderHook, act } from '@testing-library/react';
import { useAudioPronunciation } from './useAudioPronunciation';

describe('useAudioPronunciation', () => {
  it('should not play if no audioUrl', () => {
    const { result } = renderHook(() => useAudioPronunciation(''));
    act(() => {
      result.current.play();
    });
    expect(result.current.isPlaying).toBe(false);
  });

  it('should set isPlaying to true when play is called', () => {
    const { result } = renderHook(() => useAudioPronunciation('test.mp3'));
    // Mock Audio
    const playMock = jest.fn();
    // @ts-ignore
    window.Audio = jest.fn(() => ({ play: playMock, addEventListener: jest.fn() }));
    act(() => {
      result.current.play();
    });
    expect(result.current.isPlaying).toBe(true);
  });
});
