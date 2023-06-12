import React, {useEffect, useState} from "react";
import './App.css'

const App = () => {

  const [count, setCount] = useState (0);
useEffect (() => {
  console.log("use effect ran", Math.random())
})
useEffect(() => {
  console.log("use effect ran but only once");
}, []); // dependancy array works similar to component did mount. Only runs once

//similar to domponent did update. another dependncy array. but with things you want it to trigger
useEffect(()=> {
  console.log("use effect runs, but only when the count changes")
}, [count]);

  return <p onClick={() => setCount(count + 1)}>hello</p>
};

export default App



// const App = () => {
//   // const [count, setCount] = useState(100); //use state is aclosure, it lives outside of the component. It can't die
//   // const [name, setName] = useState("Marylka's counter");
// const [state, setState] = useState ({ count:0, name: "Marylkas counter"})

//   return (
//     <>
// <Counter state={state} setState={setState}/> 
//  {/* can pass state and ability to change state */}
   
//     </>
//   );
// };