import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from "./Components/login";
import Signup from "./Components/signup";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
        </BrowserRouter>
       


    </div>
  );
}

export default App;
