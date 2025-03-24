import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Ratings({ rating }) {
  const starRating = []; // Array to hold the star icons

  for (let i = 0; i < 5; i++) {
    // Check the number of stars to render (5 stars total)

    // full star
    if (rating >= 1) {
      starRating.push(<FaStar className="text-primary" key={i} />);
      rating--;
      continue;
    }

    // Half star
    if (rating > 0) {
      starRating.push(<FaStarHalfAlt className="text-primary" key={i} />);
      rating = 0;
      continue;
    }

    // Empty star
    if (rating === 0) {
      starRating.push(<FaRegStar className="text-primary" key={i} />);
    }
  }

  return <div className="flex text-base items-center gap-1">{starRating}</div>;
}

export default Ratings;
