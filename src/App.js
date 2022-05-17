import "./gamestore.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Restock from "./components/Restock";
import GameOrder from "./components/OrderForms/GameOrder";
import ConsoleOrder from "./components/OrderForms/ConsoleOrder";
import ShirtOrder from "./components/OrderForms/ShirtOrder";
import Inventory from "./components/Inventory";
import CreateConsole from "./components/CreateForms/CreateConsole";
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
        <Route exact path="/inventory" element={<Inventory />}/>
        <Route exact path='/createConsole' element={<CreateConsole />}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
