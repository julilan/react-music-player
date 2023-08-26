import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const PlayerControls = () => {
  const music = useMusicPlayer();

  return (
    <div style={{ padding: '1rem', backgroundColor: 'lightblue' }}>
      <div>
        <p>{music.currentTrackName}</p>
      </div>
      <button>
        <FontAwesomeIcon
          icon={faStepBackward}
          onClick={music.PlayPreviousTrack}
        />
      </button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button>
        <FontAwesomeIcon icon={faStepForward} onClick={music.PlayNextTrack} />
      </button>
    </div>
  );
};

export { PlayerControls };
