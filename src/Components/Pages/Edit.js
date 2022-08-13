import EditSong from "../EditSong"
import '../styles/edit.css'

export default function Edit() {
  return ( 
   <div className="Edit">
    <h1 className="edit-song">Edit Entry</h1>
    <EditSong />
  </div>
);
}
