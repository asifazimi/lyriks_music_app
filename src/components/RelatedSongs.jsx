/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import SongBar from "./SongBar";

const RelatedSongs = ({
  topRelatedSongs,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white mt-3 ">Related Songs: </h1>
      <div className="mt-6 w-full flex flex-col">
        {topRelatedSongs?.map((song, i) => (
          <SongBar
            key={`${song.key} - ${artistId}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
