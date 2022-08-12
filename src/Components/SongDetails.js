import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const [song, setSongs] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSongs(res.data);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/song/${id}`)
      .then(() => {
        navigate('/songs');
      })
      .catch(() => {
        console.warn('error');
      });
  };

  return (
    <div className='show_details'>
      <h2>Name: {song.name}</h2>
      <h2>Artist: {song.artist}</h2>
      <h2>Album: {song.album}</h2>
      <h2>Time: {song.time}</h2>
      <h2>Favorite: {song.is_favorite ? '⭐' : '❌'}</h2>

      <div className='showNavigation'>
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
