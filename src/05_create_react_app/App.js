import styles from "./App.module.css";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const onClickHandler = () => setCounter((prev) => prev + 1);
    console.log("api call ...");
    return (
        <div>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClickHandler}>Click me !!!</button>
        </div>
    );
}

export default App;
