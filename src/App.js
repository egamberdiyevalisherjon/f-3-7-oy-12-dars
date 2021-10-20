import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Char from "./Pages/Char";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/charector/:id" component={Char} />
    </>
  );
}

export default App;
