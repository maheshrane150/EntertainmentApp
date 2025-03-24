import Error from "../components/general/Error";

function PageNotFound() {
  return <Error error={{ message: "Page not found" }} />;
}

export default PageNotFound;
