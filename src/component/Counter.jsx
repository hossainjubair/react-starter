import { useState } from "react";

function Counter() {

const [count, setCount] = useState(5);


const increase=()=>{
  setCount(count+1);
}

const decrease=()=>{
  setCount(count-1);
}
const reset =()=>{
  setCount(0);
}
  return (
    <div>
   <p>number:{count}</p>
   <p>{name}</p>
   <button onClick={decrease}>Decrease</button>
   <button onClick={reset}>Reset</button>
   <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter
