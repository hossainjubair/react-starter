
import { useState } from 'react'
import './App.css'
import Counter from './component/Counter'
import NameShow from './component/NameShow';


function App() {

const [name, setName] = useState("jubair");

  return (
    <div>
      <Counter/>
        <NameShow name={ name } setName={setName} />
    </div>
  )
}

export default App
