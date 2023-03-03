import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PagesContainer from '../src/components/PagesContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PagesContainer></PagesContainer>
    </div>
  )
}

export default App
