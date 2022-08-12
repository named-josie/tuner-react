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
        <h1>Songs List</h1>
        <hr />
        <table>
          <thead>
            <tr>
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
      <button>
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
}

