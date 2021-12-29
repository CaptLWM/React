//App.js 는 render router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Link : 새로고침 없이 페이지 연결시켜줌
import Home from "./routes/Home"; //연결시켜줄 페이지 import 필수
import Detail from "./routes/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h2>Hello</h2>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
