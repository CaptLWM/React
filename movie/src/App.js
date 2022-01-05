import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";
//import Detail from "./Routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        {/* <Route path="/movie/:id">
          <Detail />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
//router는 URL을 보고있는 component
//Switch Route를 찾아주는 함수
//react router는 다이나믹(동적)url 지원 => 경로 뒤에 파라미터 값 받을 수 있음
