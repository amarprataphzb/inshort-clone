
//import './App.css';
import { useEffect, useState } from 'react';
import NavInShort from './components/Navbarfolder/NavInShort';

import Newscontent from './components/news-content/Newscontent';
import axios from 'axios';
function App() {
  const[category,setCategory]=useState("general")
 const [newsArray,setNewsArray]=useState([ ]);
 const[newresult,setNewResult]=useState(null)
  
  useEffect(()=>{

    axios
    .get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2d16b05ff86b4befb52acaa104be94bb`)
    .then(data => {
      setNewsArray(data.data.articles);
      setNewResult(data.data.totalResults)
    })
    .catch(error => console.log(error));
  },[newresult,category])

 
   console.log(newresult)
   console.log(newsArray)
   console.log(category)
  return (
    <div className="App">
      <NavInShort setCategory={setCategory} />
      <Newscontent newArray={newsArray} newresult={newresult} category={category}/>
 
    </div>
  );
}

export default App;
