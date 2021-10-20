import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Body } from "./Components/Body";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Receitas from "./Pages/Receitas"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/receitas">
              <Receitas />
            </Route>
          </Switch>
        </Body>
      </div>
    </BrowserRouter>
  );
}

export default App;
