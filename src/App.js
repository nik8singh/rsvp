import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./home";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rsvp_form" element={<rsvpo/>} />
        </Routes>
      </Router>
  );
}

export default App;
