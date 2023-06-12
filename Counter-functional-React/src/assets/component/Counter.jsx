const Counter = (props) => {

  return (
    <>
    <h1>{name}</h1>
     <p>{count}</p>
     <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count -1)}>Decrememnt</button>
    </>
  );
};
// a stateless componenet
 
export default Counter;