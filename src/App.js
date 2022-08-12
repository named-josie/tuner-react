import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import Index from './Components/Pages/Index';
import New from './Components/Pages/New';
import Show from './Components/Pages/Show';
import Edit from './Components/Pages/Edit';
import FourOFour from './Components/Pages/FourOFour';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/songs' element={<Index />} />
            <Route path='/songs/new' element={<New />} />
            <Route path='/songs/:id' element={<Show />} />
            <Route path='/songs/:id/edit' element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
