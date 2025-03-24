import { IMAGE_BASE_URL } from "../../config/config";
import Bookmark from "../mediaList/Bookmark";
import PlayButton from "../mediaList/PlayButton";
import HoverOverLay from "../general/HoverOverlay";
import GradientOverlay from "../general/GradientOverlay";

// MediaBackdropImgSection component
function MediaBackdropImgSection({
  backdropPath,
  isBookmarked,
  id,
  mediaType,
  cardType,
}) {
  // Image source - backdropPath or placeholder image
  let imgSrc;
  if (backdropPath) {
    imgSrc = `${IMAGE_BASE_URL}/${backdropPath}`;
  } else {
    imgSrc = "/placeholder.jpg";
  }

  return (
    <div className="group relative">
      {/* Backdrop image */}
      <img src={imgSrc} className="rounded-lg" />

      {/* Hover Overlay */}
      <HoverOverLay />

      {/* Gradient Overlay */}
      {cardType === "trending" && <GradientOverlay />}

      {/* Bookmark button */}
      <div className="absolute right-5 top-3">
        <Bookmark isBookmarked={isBookmarked} id={id} mediaType={mediaType} />
      </div>

      {/* Play button */}
      <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <PlayButton id={id} type={mediaType} />
      </div>
    </div>
  );
}

export default MediaBackdropImgSection;
