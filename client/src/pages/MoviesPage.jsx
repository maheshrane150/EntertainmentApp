import Applayout from "../components/general/Applayout";
import SearchBar from "../components/general/SearchBar";
import Movies from "../components/Movies";
import { useSelector } from "react-redux";
import SearchResults from "../components/general/SearchResults";

function MoviesPage() {
  const { searchText } = useSelector((state) => state.searchText);

  return (
    <div className="overflow-x-hidden">
      <Applayout>
        <div>
          <SearchBar placeholder="Search for movies " />
          {searchText && <SearchResults type={"movies"} />}
          {!searchText && <Movies />}
        </div>
      </Applayout>
    </div>
  );
}

export default MoviesPage;
