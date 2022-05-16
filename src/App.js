import "./gamestore.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Restock from "./components/Restock";
import GameOrder from "./components/GameOrder";
import ConsoleOrder from "./components/ConsoleOrder";
import ShirtOrder from "./components/ShirtOrder";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Routes>
        <Route exact path='/' element={<Shop />}/>
        <Route exact path='/employee' element={<Restock />}/>
        <Route exact path='/gameOrder' element={<GameOrder />}/>
        <Route exact path='/consoleOrder' element={<ConsoleOrder />}/>
        <Route exact path='/shirtOrder' element={<ShirtOrder />}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
