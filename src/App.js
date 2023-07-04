import './App.css';
import Bookmarked from './component/Bookmarked/Bookmarked';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route  path='' element={<Home style={{marginTop:100}}/>}/>
            <Route path="/bookmarked" element={<Bookmarked/>} />
        </Routes>
    </div>
  );
}

export default App;
