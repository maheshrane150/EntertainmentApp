import { Link } from "react-router-dom";

function Logo({ handleClick = () => {} }) {
  return (
    <Link className="w-8" to="/" onClick={handleClick}>
      <img src="/logo-removebg.png" alt="logo" className="w-full" />
    </Link>
  );
}

export default Logo;
