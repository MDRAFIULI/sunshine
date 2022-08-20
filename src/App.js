import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Purchase from './Components/Purchase/Purchase';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/service/:id' element={<RequireAuth>
        <Purchase></Purchase>
      </RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
