import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Register from './Component/Register';
import { Route, Routes } from 'react-router-dom'
import Edit from './Component/Edit';
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
