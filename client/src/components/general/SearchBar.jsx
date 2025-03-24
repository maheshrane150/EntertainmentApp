import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setInputText } from "../../features/searchTextSlice";
import { useCallback, useEffect } from "react";
import debounce from "../../utils/debounce";

function SearchBar({ placeholder = "Search for movies or TV shows" }) {
  const { inputText } = useSelector((state) => state.searchText);
  const dispatch = useDispatch();

  // Debounce the search text to avoid making too many requests
  const debouncedSetSearchText = useCallback(
    debounce(function (text) {
      dispatch(setSearchText(text));
    }, 800),
    [],
  );

  // Update the search text when the input text changes
  useEffect(() => {
    debouncedSetSearchText(inputText);
  }, [inputText, debouncedSetSearchText]);

  // Update the input text when the user types
  function handleChange(e) {
    dispatch(setInputText(e.target.value));
  }

  return (
    <div className="flex gap-5 items-center text-lg caret-primary  sectionBottomMargin">
      <label>
        <FaSearch />
      </label>

      {/* Controlled input component.   */}
      <input
        id="search"
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full outline-none bg-black border-b-2  border-tertiary p-2 placeholder-zinc-500 placeholder:text-base"
      />
    </div>
  );
}

export default SearchBar;
