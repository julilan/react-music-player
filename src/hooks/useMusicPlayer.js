import { useContext } from 'react';
import { MusicContext } from '../contexts/MusicContext';

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  const playTrack = (index) => {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      });
    }
  };

  // Toggle play or pause depending on the state of the player
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState({ ...state, isPlaying: !state.isPlaying });
  }

  const PlayPreviousTrack = () => {
    let newIndex = null;
    state.currentTrackIndex === 0
      ? (newIndex = state.tracks.length - 1)
      : (newIndex = state.currentTrackIndex - 1);
    playTrack(newIndex);
  };

  const PlayNextTrack = () => {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex);
  };

  return {
    togglePlay,
    playTrack,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    isPlaying: state.isPlaying,
    tracksList: state.tracks,
    PlayPreviousTrack,
    PlayNextTrack,
  };
};

export { useMusicPlayer };
