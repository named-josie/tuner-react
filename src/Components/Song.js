import { Link } from 'react-router-dom';

export default function Song({ song }) {
  return (
    <tr>
      <td>{song.name}</td>
      <td className='Song'>
        <Link to={`/songs/${song.id}`}>{song.album}</Link>
      </td>
      <td>{song.is_favorite ? '⭐' : '❌'}</td>
    </tr>
  );
}
