import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>

        <Route path='/' element={<h2>-New Project-</h2>} />

        <Route path='/frontend' element={<h4>This is FRONTEND</h4>} />

      </Routes>

    </Router>
  );
}

export default App;
