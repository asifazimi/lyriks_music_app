/* eslint-disable quotes */
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByGenreQuery } from "../redux/services/ShazamCore";
import { genres } from "../assets/constants";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    // eslint-disable-next-line comma-dangle
    (state) => state.player
  );
  const { data, error, isFetching } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );

  if (isFetching) return <Loader title="Loading songs" />; // isFetching is used for loading
  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      {/* To select the song */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0  mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
          ``
        </select>
      </div>
      {/* All the songs */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            activeSong={activeSong}
            isPlaying={isPlaying}
            key={song.key}
            song={song}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
