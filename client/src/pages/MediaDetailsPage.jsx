import { useParams } from "react-router-dom";
import Applayout from "../components/general/Applayout";
import MediaDetails from "../components/mediaDetails/MediaDetails";

function MediaDetailsPage({ type }) {
  const { id } = useParams();

  return (
    <div className="overflow-x-hidden">
      <Applayout>
        <MediaDetails id={id} type={type} />
      </Applayout>
    </div>
  );
}

export default MediaDetailsPage;
