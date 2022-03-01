import React from 'react';
import ReacDom from 'react-dom';
import CreateFlashcard from './CreateFlashcard';
import '../styles.css';


const App = () => {
  return (
    <div id='app'>
      <CreateFlashcard />
    </div>
  ) 
}

ReacDom.render(<App />, document.getElementById("root"));