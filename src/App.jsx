import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home"
import Gallery from "./components/pages/Gallery"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/gallery" element={<Gallery />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
