import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import HomeComponent from './views/Home';
import WordComponent from './views/Word';
import WordColorComponent from './views/Word_Color';

function App() {
  return (
    <div className="App">
      <Router>
            <HomeComponent path="/"/>
            <WordComponent path="/:word"/>
            <WordColorComponent path="/:word/:color/:bg_color"/>
      </Router>
    </div>
  );
}

export default App;
