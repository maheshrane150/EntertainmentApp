import { MdLocalMovies } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import { Link } from "react-router-dom";

function MediaContentSection({ id, mediaType, title, releaseDate, cardType }) {
  return (
    <div
      className={`${cardType === "trending" ? "absolute bottom-0 px-5 inset-x-0" : "mt-3"} `}
    >
      <Link
        to={`/mediadetails/${mediaType === "movie" ? "movies" : "tvshows"}/${id}`}
        className=" w-full hover:text-primary hover:font-normal transition-all duration-200"
      >
        <div className="text-sm flex gap-3">
          <p>{releaseDate?.slice(0, 4) || "N/A"}</p>

          {/* Icon */}
          <p>
            {mediaType === "movie" ? (
              <span className="flex items-center gap-1">
                <MdLocalMovies />
                <span> Movie</span>
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <GiTv />
                <span> TV show</span>
              </span>
            )}
          </p>

          <p>PG</p>
        </div>
        <h3 className="font-semibold">{title}</h3>
      </Link>
    </div>
  );
}

export default MediaContentSection;
