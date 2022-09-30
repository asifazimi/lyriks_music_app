/* eslint-disable quotes */
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, handlePause, handlePlay, activeSong, isPlaying }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      className="text-gray-300 text-[1.8rem]"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      className="text-gray-300 text-[1.8rem]"
      onClick={handlePlay}
    />
  );

export default PlayPause;
