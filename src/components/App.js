import React from 'react'
import '../styles/App.css';
import programing from "../assets/programing"

const GIF = () => {
  return (
    <img className='import-image' height={200}/>
  )
}

const App = () => {
  const imageUrl = 'https://picsum.photos/id/400/200';

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF src={programing} alt="programing-gif"/>
      <img className='url-image' src={imageUrl} alt="A random image" />
    </div>
  )
}


export default App;
