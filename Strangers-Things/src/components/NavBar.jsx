import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div>
        <h1>Stranger's Things!</h1>
        <div className="nav">
          <Link to="/" className="butt" >
            Home
          </Link>
          <Link to="/Login" className="butt">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
