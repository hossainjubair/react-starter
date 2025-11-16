import React, { useState } from 'react'

const NameShow = () => {
const [name, setName] =useState("");
    const handleInput =(e)=>{
setName(e.target.value);
    }

  return (
    <div>
      <input onChange={handleInput} type="text" /> 
     <p>{name}</p>
      
    </div>
  )
}

export default NameShow
