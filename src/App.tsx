import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
