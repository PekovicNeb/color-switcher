import React, { useState } from 'react'
import ColorChangeButton from './ColorChangeButton'
import './App.css';

function App() {
  const [color, setColor] = useState('')
  console.log(color, setColor)
  return (
    <div className='react-root'>
      <div className ={'centered ' + color }>
        <h1>Coler Picker</h1>
        <ColorChangeButton color="red" setColor={setColor}/>
        <ColorChangeButton color="blue" setColor={setColor} />
        <ColorChangeButton color="yellow" setColor={setColor} />

      </div>
    </div>
  );
}

export default App;
