import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetLoggedInUserQuery } from "../features/mediaApi";
import { setUserdata } from "../features/userSlice";

// Custom hook to load the logged-in user's data
export function useLoadLoggedInUserData() {
  const dispatch = useDispatch();

  // Get the logged-in user's data
  const { data: userData, isLoading: isUserDataLoading } =
    useGetLoggedInUserQuery();

  // Set the user data in the store
  useEffect(() => {
    if (userData) {
      dispatch(setUserdata(userData));
    }
  }, [userData, dispatch]);

  return { isUserDataLoading };
}
