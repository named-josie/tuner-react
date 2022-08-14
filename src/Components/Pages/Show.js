import SongDetails from "../SongDetails";
import "../styles/show.css"

export default function Show() {
  return (
    <div className="Show">
      <h1 className="song-details">Song's Details</h1>
      <SongDetails />
    </div>
  );
}