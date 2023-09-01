import { useState } from 'react';
import './App.css';
import cradle from './assets/cradle.mp3';
import guitar from './assets/guitar.mp3';
import Header from './components/Header';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(cradle), // Fix! pass first track
    tracks: [
      {
        name: 'Cradle music',
        file: cradle,
      },
      {
        name: 'Guitar music',
        file: guitar,
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  });

  console.log('State: ', state);

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className='App'>
        <Header />
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
