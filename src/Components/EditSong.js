import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditSong() {
  const navigate = useNavigate();
  let { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/songs/${id}`, song)
      .then(() => {
        navigate(`/songs/${id}`);
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
        <input id="submit" type="submit" value="Edit Song" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

