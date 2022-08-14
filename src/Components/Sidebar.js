import React from 'react';
import { FaPlay } from '@react-icons/all-files/fa/FaPlay';
import { FaPause } from '@react-icons/all-files/fa/FaPause';
import { FaForward } from '@react-icons/all-files/fa/FaForward';
import './styles/SideBar.css';
import { FaBackward } from '@react-icons/all-files/fa/FaBackward';
import './styles/SideBar.css';
import { Link } from 'react-router-dom';

export default class Question extends React.Component {
  render() {
    return (
      <div className='sidenav'>
        <h3> Sidebar </h3>
        <Link to='*'>
          <FaPlay className='color' />
        </Link>
        <br></br>
        <Link to='*'>
          <FaBackward className='color' />
        </Link>
        <br></br>
        <Link to='*'>
          <FaPause className='color' />
        </Link>
        <br></br>
        <Link to='*'>
          <FaForward className='color' />
        </Link>
      </div>
    );
  }
}
