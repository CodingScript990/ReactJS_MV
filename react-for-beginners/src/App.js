import Home from "./routes/Home";
import Detail from "./routes/Detail";
import styles from "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// rendering(home,detail)
function App() {
  return (
    <Router className={styles.body}>
      <Switch>
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
