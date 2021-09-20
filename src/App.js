import React from 'react';
import Section from './components/Section';

import './App.scss';
import dataArticle from './services/dummy.json';


function App() {
  
//console.log(dataArticle.data[0]);
//const data = dataArticle;
  return (
    <div className="App">
      <Section title = "Opinión" link = {true} url = "#" articles = {dataArticle} />
    </div>
  );
}

export default App;
