import React from 'react';
import ReacDom from 'react-dom';
import '../styles.css';


const App = () => {
  return (
    <div id='app'>
      Hi
    </div>
  ) 
}

ReacDom.render(<App />, document.getElementById("root"));