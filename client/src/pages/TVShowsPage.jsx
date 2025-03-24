import Applayout from "../components/general/Applayout";
import SearchBar from "../components/general/SearchBar";
import TvShows from "../components/TVShows";
import { useSelector } from "react-redux";
import SearchResults from "../components/general/SearchResults";

function TVShowsPage() {
  const { searchText } = useSelector((state) => state.searchText);

  return (
    <div className="overflow-x-hidden">
      <Applayout>
        <div className="">
          <SearchBar placeholder="Search for TV shows" />
          {searchText && <SearchResults type={"tvshows"} />}
          {!searchText && <TvShows />}
        </div>
      </Applayout>
    </div>
  );
}

export default TVShowsPage;
