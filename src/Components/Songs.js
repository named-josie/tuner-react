import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Song from "./Song";

import axios from "axios";
const API= process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/songs`).then((res) => {
      setSongs(res.data);
    });
  }, []);

  return (
    <div className="Songs">
      <section>
       
      
        <br></br>
        <table>
       
          <thead>
         
            <tr className="glow">
              <th>Name</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Favorite</th>
            </tr>
           
          </thead>
       
          <tbody>

            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
      <br />
      <button className="button">
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
}

