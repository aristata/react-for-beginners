import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClickHandler = () => setCounter((prev) => prev + 1);
    const onChangeHandler = (event) => setKeyword(event.target.value);
    console.log("state 가 변경 될 때마다 실행된다");
    useEffect(() => {
        console.log("딱 한번만 실행 된다");
    }, []);
    useEffect(() => {
        console.log("키워드가 변경될 때만 실행된다");
        if (keyword !== "" && keyword.length > 5) {
            console.log("키워드가 5자 초과 일 때만 실행된다 ", keyword);
        }
    }, [keyword]);
    useEffect(() => {
        console.log("카운터가 변경될 때만 실행된다");
    }, [counter]);
    useEffect(() => {
        console.log("키워드와 카운터가 변경될 때만 실행된다");
    }, [keyword, counter]);
    return (
        <div>
            <input value={keyword} onChange={onChangeHandler} type={"text"} placeholder={"Search here..."}/>
            <h1>{counter}</h1>
            <button onClick={onClickHandler}>Click me !!!</button>
        </div>
    );
}

export default App;
