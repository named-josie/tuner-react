import { Link } from "react-router-dom";
import "./styles/navbar.css"

export default function NavBar() {
  return (
    <nav>
      <h1 className="header">
        <Link to="/songs">Music List</Link>
      </h1>
      <Link to="/"> <div> <img src="https://www.e-thaksalawa.moe.gov.lk/moodle/pluginfile.php/171262/mod_hvp/content/928/images/coverImage-600fbfcc4ff6e.gif" alt="musix" ></img> </div></Link>
      <button className="new-button">
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}