import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const onClickHandler = () => setCounter((prev) => prev + 1);
    console.log("I run all the time");
    useEffect(() => {
        console.log("I run only once.");
    }, []);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClickHandler}>Click me !!!</button>
        </div>
    );
}

export default App;
