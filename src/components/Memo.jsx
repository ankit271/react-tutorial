//import { useMemo, useState } from 'react'
import { useState, useCallback } from "react";
import About from './About'

function Memo() {

  const [count, setCount] = useState(0)
  
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

//   const expensiveComputation = () => {
//     console.log("Computing...")
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) { 
//         result += i;
//     }
//     return result;
//   }
  
  
  //const computedValue = useMemo(() => expensiveComputation(), []);

  return (
    <div>
      <h1>Count : {count}</h1>
      {/* <h2>Computed Value: {computedValue}</h2> */}
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      <About onClick={handleClick} />
    </div>
  );
}

export default Memo