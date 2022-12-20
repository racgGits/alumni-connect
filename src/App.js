import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact path='/'  element={<Login/>} />
      {/* <Route path='/home'>
      <Home />
      <Header />
      </Route>  */}
      <Route path="/home" element={<div><Header/><Home/></div>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
