import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/signup' Component={Signup}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
          <Route path='/dashboard/translate' Component={Dashboard}></Route>
          <Route path='/*' Component={ErrorPage}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
