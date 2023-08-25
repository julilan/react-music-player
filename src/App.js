import './App.css';
import { PlayerControls } from './components/PlayerControls';
import { MusicContext } from './contexts/MusicContext';

function App() {
  return (
    <MusicContext.Provider value={''}>
      <div className='App'>
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
