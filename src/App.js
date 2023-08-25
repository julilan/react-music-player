import { useState } from 'react';
import './App.css';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Track 1',
        file: './music/cradle.mp3',
      },
      {
        name: 'Track 2',
        file: './music/guitar.mp3',
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  });

  console.log('State: ', state);

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className='App'>
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
