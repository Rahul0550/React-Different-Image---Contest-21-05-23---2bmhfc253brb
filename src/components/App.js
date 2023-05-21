import React from 'react'
import '../styles/App.css';
import programming from "../assets/programming.gif"

const GIF = () => {
  return (
    <img className='import-image' height={200} src={programming} alt="programming-gif"/>
  )
}
const imageUrl = 'https://picsum.photos/id/400/200';

const App = () => {

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF/>
      <img className='url-image' src={imageUrl} alt="A random image" />
    </div>
  )
}


export default App;
