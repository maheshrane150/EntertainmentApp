import Applayout from "../components/general/Applayout";
import Bookmarks from "../components/Bookmarks";

function BookmarksPage() {
  return (
    <div className="overflow-x-hidden">
      <Applayout>
        <div className="">
          <Bookmarks />
        </div>
      </Applayout>
    </div>
  );
}

export default BookmarksPage;
