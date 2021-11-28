import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'App.css';
import Home from 'Pages/Home';
import { About } from 'Pages/About';
import Navbar from 'Components/Navbar';
import { Alert } from 'Components/Alert';
import { AlertState } from 'context/alert/AlertState';

const App = () => {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className='container pt-4'>
          <Alert />
          <Routes>
            <Route path={'/'} exact element={<Home />} />
            <Route path={'/about'} exact element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
};
export default App;
