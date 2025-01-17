import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function EditSong() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

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
    updateSong(song, id);
  };

  const onChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div className='edit'>
      <form onSubmit={handleSubmit}>
        <label className='new-label' htmlFor='name'>
          Name
        </label>
        <input
          className='text'
          id='name'
          type='text'
          required
          value={song.name}
          onChange={handleTextChange}
        />
        <label className='new-label' htmlFor='artist'>
          Artist
        </label>
        <input
          className='text'
          id='artist'
          value={song.artist}
          type='text'
          onChange={handleTextChange}
          placeholder='name'
          required
        />
        <label className='new-label' htmlFor='album'>
          Album
        </label>
        <input
          className='text'
          id='album'
          type='text'
          name='album'
          value={song.album}
          placeholder='album'
          onChange={handleTextChange}
        />
        <label className='new-label' htmlFor='time'>
          Time
        </label>
        <input
          className='text'
          id='time'
          type='text'
          name='time'
          value={song.time}
          onChange={handleTextChange}
          placeholder='0:00'
        />
        <label htmlFor='favorite'>Favorite</label>
        <input
          className='checkbox'
          id='is_favorite'
          type='checkbox'
          value={song.is_favorite}
          onChange={onChange}
        />
        <br />
        <input className='button' type='submit' />
        <br />
        <Link to={`/songs/${id}`}>
          <button className='button'>Back</button>
        </Link>
      </form>
    </div>
  );
}
