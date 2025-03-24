import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { usePostLogoutUserMutation } from "../../features/mediaApi";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { resetUserData } from "../../features/userSlice";
import { resetBookmarkState } from "../../features/bookmarkSlice";

function UserAccount() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Links for authentication
  const authenticationLinks = [
    { name: "SignUp", path: "/signup", icon: <MdAccountCircle /> },
    { name: "Login", path: "/login", icon: <IoMdLogIn /> },
  ];

  // Mutation to logout the user
  const [postLogoutUser, { error: logoutError }] = usePostLogoutUserMutation();

  // Function to handle the logout
  function handleLogout() {
    postLogoutUser();
    dispatch(resetUserData());
    dispatch(resetBookmarkState());

    navigate("/");
    toast.success("Logged out successfully", { autoClose: 1000 });
  }

  // Show error message if logout fails
  useEffect(() => {
    if (logoutError) {
      toast.error(logoutError.message || "Error logging out");
    }
  }, [logoutError]);

  return (
    <div className="w-96 bg-secondary h-[580px] text-lg rounded-xl p-10">
      {/* If user is authenticated then show user details with logout button */}
      {isAuthenticated && (
        <>
          <div className="flex flex-col items-center justify-center gap-4 p-4 mb-10 text-primary font-semibold  border-primary border-2 rounded-lg ">
            <MdAccountCircle className="text-5xl" />
            <span>{user.email}</span>
          </div>
          <button
            className="flex items-center w-full text-start gap-2 p-2 mb-5 text-white border-b-2  hover:text-primary hover:border-primary hover:font-bold transition-all duration-200"
            onClick={handleLogout}
          >
            <RiLogoutCircleLine />
            <span>Logout</span>
          </button>
        </>
      )}

      {/* If user is not authenticated then show authentication links */}
      {!isAuthenticated && (
        <div className="">
          {authenticationLinks.map((link) => (
            <Link
              to={link.path}
              className="flex items-center gap-2 p-2 mb-5 text-white border-b-2  hover:text-primary hover:border-primary hover:font-bold transition-all duration-200"
              key={link.name}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserAccount;
