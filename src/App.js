import Header from './pages/Header'
import Home from './pages/Home'
import Create from './pages/Create'
import Error from './pages/404'
import Success from './pages/Success'


import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='content'>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/success" element={<Success/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
