import { FaRegPlayCircle } from "react-icons/fa";
import { openVideoModal } from "../../features/videoModalSlice";
import { useDispatch } from "react-redux";

function PlayButton({ id, type }) {
  const dispatch = useDispatch();

  // Function to handle the play button click
  function handlePlayClick() {
    dispatch(openVideoModal({ id, type }));
  }

  return (
    <button
      onClick={handlePlayClick}
      className="text-[2px] group-hover:text-base transition-all duration-200 flex gap-3 items-center bg-black  bg-opacity-70 py-1 px-4 rounded-full hover:scale-110 hover:font-normal "
    >
      <FaRegPlayCircle />
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
