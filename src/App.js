import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  /**
   * Router 컴포넌트 - 리액트 라우터 돔을 사용해서 렌더링을 한다
   * Switch 컴포넌트 - 하나의 라우트만 렌더링 하게 한다
   * Route 컴포넌트 - 경로가 일치하는 라우트를 렌더링 한다
   *                  위에서 부터 실행하기 때문에 root 에 가까울 수록 아래에 위치시킨다
   * Link 컴포넌트 - 링크는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다
   */
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
