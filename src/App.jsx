import { Routes, Route } from 'react-router-dom'; 
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;
