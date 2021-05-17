import './App.css';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Layout from "./sections/Layout"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          name="Home"
          render={(props) => <Layout {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
