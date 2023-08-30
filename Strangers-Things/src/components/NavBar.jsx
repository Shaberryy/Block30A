import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div>
        <h1>Stranger's Things!</h1>
        <div className="nav">
          <Link to="/Home" className="butt" >
            Home
          </Link>
          <Link to="/" className="butt">
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}
