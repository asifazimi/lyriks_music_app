/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/ShazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { songid } = useParams();

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songid);

  if (isFetchingSongDetails) return <Loader title="Loading song details" />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div>
        <h2 className="text-white text-3xl font-bold">Lyriks: </h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1 " key={i}>
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base ">Sorry, no lyrics found!</p>
          )}
        </div>
      </div>
      <RelatedSongs />
    </div>
  );
};

export default SongDetails;
