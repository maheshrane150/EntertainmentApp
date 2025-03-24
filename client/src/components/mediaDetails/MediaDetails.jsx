import {
  useGetMediaCastQuery,
  useGetMediaDetailsQuery,
} from "../../features/mediaApi";
import { IMAGE_BASE_URL, IMDB_BASE_URL } from "../../config/config";
import Ratings from "./Ratings";
import Loader from "../general/Loader";
import Error from "../general/Error";
import { FaLink } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";

function MediaDetails({ id, type }) {
  // Fetch the media details
  const {
    data: mediaDetails,
    error: mediaDetailsError,
    isLoading: mediaDetailsLoading,
  } = useGetMediaDetailsQuery({ id, type });

  // Fetch the media casts
  const {
    data: casts,
    error: castsError,
    isLoading: castsIsLoading,
  } = useGetMediaCastQuery({ id, type });

  // If the data is loading, show the loader
  if (mediaDetailsLoading || castsIsLoading)
    return (
      <div className="my-56 w-screen flex justify-center">
        <Loader />
      </div>
    );

  // If there is an error, show the error message
  if (mediaDetailsError) return <Error error={mediaDetailsError} />;

  // If there is no data, show the error message
  if (!mediaDetails) return <Error error={{ message: "No data found" }} />;

  // Destructure the media details
  const {
    title,
    tagline,
    genres,
    homepage,
    imdbId,
    languages,
    overview,
    posterPath,
    releaseDate,
    status,
    voteAverage,
    voteCount,
  } = mediaDetails;

  // Destructure the media details based on the type
  let runTime, lastAirDate, impData;

  if (type === "movie") {
    runTime = mediaDetails.runtime;
    impData = [
      {
        title: "Language",
        content: languages[0].english_name || languages[0].name || "N/A",
      },
      { title: "Release Date", content: releaseDate || "N/A" },
      { title: "Length", content: runTime || "N/A" },
      { title: "Status", content: status || "N/A" },
    ];
  }

  if (type === "tvshow") {
    lastAirDate = mediaDetails.lastAirDate;
    impData = [
      {
        title: "language",
        content: languages[0].english_name || languages[0].name || "N/A",
      },
      { title: "First Air", content: releaseDate || "N/A" },
      { title: "Last Air", content: lastAirDate || "N/A" },
      { title: "Status", content: status || "N/A" },
    ];
  }

  return (
    <div className="mediaSectionContainer my-8 grid sm:grid-cols-4 grid-rows gap-8 lg:gap-16 justify-center">
      {/* Image section */}
      <section className="col-span-2 px-5 xs:px-12 sm:px-5">
        <img
          src={IMAGE_BASE_URL + posterPath}
          alt="poster"
          className="rounded-lg"
        />
      </section>

      {/* Details section */}
      <section className="flex flex-col gap-8 col-span-2 text-sm">
        {/* Title and tagline */}
        <div>
          <div className="mb-3">
            <h1 className="text-4xl font-normal mb-2">{title}</h1>
            <p className="opacity-70">{tagline}</p>
          </div>
          {/* Ratings */}
          <div className="flex gap-3 items-center">
            <p className="text-3xl font-normal">
              {Math.ceil((voteAverage * 10) / 2) / 10}
            </p>
            <Ratings rating={voteAverage / 2} />
            <p>( {voteCount} )</p>
          </div>
        </div>

        {/* Imp DATA */}
        <div className="flex gap-4 justify-between">
          {impData.map((data) => (
            <div key={data.title} className="flex flex-col gap-[2px]">
              <p className="opacity-50">{data.title}</p>
              <p className="font-normal">{data.content}</p>
            </div>
          ))}
        </div>

        {/* GENERES */}
        <div>
          <h3 className="font-semibold mb-1">Genres</h3>
          <div className="flex gap-2">
            {genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-white text-[#000] text-xs font-semibold shadow-sm shadow-white px-2 py-[3px] rounded-lg "
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {/* OVERVIEW */}
        <div>
          <h3 className="font-semibold mb-1">Synopsis</h3>
          <p>{overview}</p>
        </div>

        {/* Casts */}
        <div>
          <h3 className="font-semibold mb-2">Casts</h3>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {castsError && <Error error={castsError} />}
            {casts.length === 0 && <p>No cast found</p>}
            {castsIsLoading && <Loader />}
            {casts.map((cast, i) => (
              <p
                key={i}
                className="border px-2 py-[3px] text-xs rounded-lg shadow-inner shadow-white"
              >
                {cast.name}
              </p>
            ))}
          </div>
        </div>

        {/* Buttons section */}
        <div className="flex gap-4 mt-4">
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              className="px-4 py-1 rounded-lg bg-tertiary flex gap-2 items-center font-semibold hover:scale-105"
            >
              Website <FaLink />
            </a>
          )}

          {imdbId && (
            <a
              href={`${IMDB_BASE_URL}/${imdbId}`}
              target="_blank"
              className="px-4 py-1 rounded-lg bg-tertiary flex gap-2 items-center font-semibold hover:scale-105"
            >
              IMDB <FaImdb />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default MediaDetails;
