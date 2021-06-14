import Home from "./Home";
import Navbar from "./Navbar";
import BlogList from "./BlogList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
