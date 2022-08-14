import { Link } from 'react-router-dom';
import './styles/navbar.css';

export default function NavBar() {
  return (
    <nav>
      <h1 className='header'>
        <Link to='/songs'>Music List</Link>
      </h1>
      <Link to='/'>
        <div> 
          <img
            className='nav-img'
            src='https://thumbs.gfycat.com/CautiousPleasedHeifer-size_restricted.gif'
            alt='musix'
          ></img>
        </div>
      </Link>
      <button className='new-button'>
        <Link to='/songs/new'>New Song</Link>
      </button>
    </nav>
  );
}
