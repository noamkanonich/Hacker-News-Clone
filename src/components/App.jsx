import React, { useState, useEffect } from 'react';
import Header from './Header'
import Article from './Article'
import axios from 'axios'

function App() {
  const [articlesId, setArticlesId] = useState([]);

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => {
        console.log(res)
        setArticlesId(res.data) 
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Header />
      <table className="container">
        <tbody>
          {
            articlesId.slice(0, 30).map((id, index) => {
              return (
                <Article key={index} id={index + 1} article={id} />
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
