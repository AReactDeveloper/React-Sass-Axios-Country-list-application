import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SingleCountry from './components/singleCountry/SingleCountry.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter  basename={"./"}>
      <Routes>
          <Route path='/' element={<App />} />
        <Route path='/country/:postId' element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
