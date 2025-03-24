import MediaBackdropImgSection from "./MediaBackdropImgSection";
import MediaContentSection from "./MediaContentSection";

// MediaCard component
function MediaCard({ mediaData, isBookmarked, cardType = "general" }) {
  // Destructuring mediaData
  const { id, type: mediaType, title, releaseDate, backdropPath } = mediaData;

  return (
    <div
      className={`${cardType === "trending" ? "w-80 mb-3 flex-none" : ""}  relative`}
    >
      <MediaBackdropImgSection
        backdropPath={backdropPath}
        isBookmarked={isBookmarked}
        id={id}
        mediaType={mediaType}
        cardType={cardType}
      />
      <MediaContentSection
        title={title}
        releaseDate={releaseDate}
        id={id}
        mediaType={mediaType}
        cardType={cardType}
      />
    </div>
  );
}

export default MediaCard;
