import "./gamestore.css";
import Navbar from "./components/Navbar";
import Restock from "./components/Restock";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Routes>

        <Route exact path='/employee' component={Restock}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
