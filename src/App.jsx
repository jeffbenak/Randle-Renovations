import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Bathrooms from "./components/pages/Bathrooms";
import Builtins from "./components/pages/Built-Ins";
import Floorstairs from "./components/pages/Floors-stairs";
import Kitchens from "./components/pages/Kitchens";
import Trimdoors from "./components/pages/Trim-doors";
import Otherprojects from "./components/pages/Other-projects";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/bathrooms" element={<Bathrooms />}/>
          <Route exact path="/builtins" element={<Builtins />}/>
          <Route exact path="/floorstairs" element={<Floorstairs />}/>
          <Route exact path="/kitchens" element={<Kitchens />}/>
          <Route exact path="/trimdoors" element={<Trimdoors />}/>
          <Route exact path="/otherprojects" element={<Otherprojects />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
