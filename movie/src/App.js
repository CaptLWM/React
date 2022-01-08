import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";
import Carousel from "./Routes/Carousel";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/Carousel">
          <Carousel />
        </Route>
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
