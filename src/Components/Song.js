import { Link } from 'react-router-dom';


export default function Song({ song }) {
  return (
   
    <tr className='allsongs'>
    
      <td>{song.name}</td>
      <td className='Song'>
        <Link to={`/songs/${song.id}`}>{song.artist}</Link>
      </td>
      <td>{song.album}</td> 
      <td>{song.is_favorite ? '⭐' : '❌'}</td>
      
    </tr>
 
  );
}
