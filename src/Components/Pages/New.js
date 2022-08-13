import NewSong from "../NewSong";
import "../styles/newSong.css"
export default function New() {
  return (
    <div className="New">
      <h1 className="new-song">Add a New Song</h1>
      <NewSong />
    </div>
  );
}