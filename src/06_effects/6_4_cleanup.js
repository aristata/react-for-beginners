import {useEffect, useState} from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  
  function byFn() {
    console.log("Bye !");
  }
  
  function hiFn() {
    console.log("Hi~");
    return byFn;
  }
  
  useEffect(hiFn, []);
  
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default App;
