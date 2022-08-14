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
    <div className='show'>
      <h2 className='show_p'>
        <span>Name:</span> {song.name}
      </h2>
      <h2 className='show_p'>
        <span>Artist:</span> {song.artist}
      </h2>
      <h2 className='show_p'>
        <span>Album:</span> {song.album}
      </h2>
      <h2 className='show_p'>
        <span>Time:</span> {song.time}
      </h2>
      <h2 className='show_p'>
        <span>Favorite:</span> {song.is_favorite ? '⭐' : '❌'}
      </h2>

      <div className='showNavigation'>
        <div>
          <Link to={`/songs`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button className='show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='show_button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
