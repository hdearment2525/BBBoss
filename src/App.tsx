import React, { useState, useContext } from 'react'
import './App.css'
import Title from './Components/TitleGroup/Title';
import BodyNav from './Components/BodyNavGroup/BodyNav';



function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="Main">
        <Title index={index} setIndex={setIndex}>Bodies-By-Boss</Title>
        <BodyNav index={index}/>
      </div>
    </>
  )
}

export default App
