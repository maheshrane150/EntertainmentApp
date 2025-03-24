import { NavLink } from "react-router-dom";
import { MdWindow, MdLocalMovies } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetSearchAndInputText } from "../../features/searchTextSlice";
import Logo from "./Logo";

function Navbar() {
  // Array of objects containing the path and icon for each navigation link
  const navLinks = [
    {
      to: "/",
      icon: <MdWindow />,
    },
    {
      to: "/movies",
      icon: <MdLocalMovies />,
    },
    {
      to: "/tvshows",
      icon: <GiTv />,
    },
    {
      to: "/bookmarks",
      icon: <FaBookmark />,
    },
  ];

  const dispatch = useDispatch();

  // Reset the search input text and search results when the logo / Navlink is clicked
  function handleClick() {
    dispatch(resetSearchAndInputText());
  }

  return (
    <nav className="bg-secondary md:w-14 p-3 flex flex-row md:flex-col  items-center h-14 md:h-[650px] justify-between md:justify-start rounded-lg z-50">
      {/* Logo */}
      <Logo handleClick={handleClick} />

      {/* Navlinks */}
      <div className="md:mt-20 text-xl  flex md:flex-col flex-row gap-5">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            onClick={handleClick}
            className={({ isActive }) =>
              `hover:opacity-100 ${isActive ? "opacity-100" : "opacity-50"}`
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </div>

      {/* UserAccount link */}
      <div className="mt-auto mb-2">
        <NavLink
          to="/useraccount"
          className={({ isActive }) =>
            `hover:opacity-100 ${isActive ? "opacity-100" : "opacity-50"}`
          }
        >
          <FaUserCircle className="text-3xl" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
