import React from 'react';
import { TopicsContainer } from './containers/Topics';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1>GitHub Topics Explorer</h1>
      </div>
      <TopicsContainer />
    </div>
  );
}

export default App;
