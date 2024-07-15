import './App.css';
import Home from './Pages/Home';
import InputForm from './Pages/InputForm';
import SeatInput from './Pages/SeatInput';
import Summary from './Pages/Summary';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/InputForm' element={<InputForm/>}/>
        <Route path='/SeatInput' element={<SeatInput/>}/>
        <Route path='/Summary' element={<Summary/>}/>
      </Routes>
    </div>
  );
}

export default App;
