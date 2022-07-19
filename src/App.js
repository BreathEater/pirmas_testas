import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Home></Home>
        </Router>
      </header>
    </div>
  );
}

export default App;
