import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSong() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/songs/new`, song)
      .then((res) => {
        navigate("/songs");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const onChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={song.name}
          onChange={handleTextChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="album"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          onChange={handleTextChange}
          placeholder="time"
        />
        <label htmlFor="favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          name="favorite"
          value={song.is_favorite}
          onChange={onChange}
        />

        <input id="submit" type="submit" value="New Song" />
      </form>
    </div>
  );
}
