import React from 'react'
import '../styles/App.css';
import programming from "./assets/programming"

const GIF = () => {
  return (
    <img className='import-image' height={200}/>
  )
}

const App = () => {
  const gifSource = programming;
  const imageUrl = 'https://picsum.photos/460/260';

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF className="import-image" src={gifSource} alt="programing-gif"/>
      <img className='url-image' src={imageUrl} alt="A random image" />
    </div>
  )
}


export default App;
