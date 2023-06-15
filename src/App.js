import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./Auth/Auth"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Auth/>} />
          <Route exact path="/register" />
          <Route exact path="/" />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
