import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function ShowMoreButton({ onClick, isLoading }) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-white hover:text-secondary rounded-md py-1 mt-4 font-semibold bg-tertiary text-white transition-all duration-200 hover:translate-y-1 active:translate-y-2 px-5"
      disabled={isLoading}
    >
      <div className="flex items-center gap-3">
        Show More
        <MdKeyboardDoubleArrowDown />
      </div>
    </button>
  );
}

export default ShowMoreButton;
