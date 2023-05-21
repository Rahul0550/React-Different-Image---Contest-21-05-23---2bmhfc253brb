import React from 'react'
import '../styles/App.css';
import programming from "../assets/programing"

const GIF = () => {
  return (
    <img className='import-image' height={200}/>
  )
}

const App = () => {

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF src={programming} alt="programing-gif"/>
      <img className='url-image' src='https://picsum.photos/id/400/200' alt="A random image" />
    </div>
  )
}


export default App;
