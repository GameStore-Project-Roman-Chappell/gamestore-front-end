import Navbar from "./components/Navbar";
import Restock from "./components/Restock";
import {BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        
        <Route exact path='/employee' component={Restock}/>
      </Router>
      
    </div>
  );
}

export default App;
