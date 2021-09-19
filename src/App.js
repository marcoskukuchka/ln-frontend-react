import dataArticle from './services/dummy.json';
import React from 'react';
import Article from './components/Article';
import './app.scss';


function App() {
//console.log(dataArticle.data);
//const data = dataArticle;
  return (
    <div className="App">
      {
        dataArticle.data.map(singleArticle => <Article  key={singleArticle.id} article = {singleArticle} />)
      }
    </div>
  );
}

export default App;
