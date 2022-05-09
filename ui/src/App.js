import { Routes ,Route,BrowserRouter } from 'react-router-dom';

import './App.css';
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/dashboard";
import Sessionlist1 from "./Components/sessionlist1";
import Sessionlist2 from "./Components/sessionlist2";
import Sessionlist3 from "./Components/sessionlist3";
import Sessionlist4 from "./Components/sessionlist4";
import Sessionlist5 from "./Components/sessionlist5";
import Info from "./Components/Info";
import DoctorDashboard from "./Components/doctorDashboard";
import PatientTrack from "./Components/patientTrack";
import Analytics from "./Components/analytics";
import Quizmcq from "./Components/quiz/quizmcq";
import Mainchat from "./Components/Chats/mainchat";
import PreRegister from "./Components/pre_register_quiz";
import Session from "./Components/session";
import Bar from "./Components/bar"
import ForgotPassword from "./Components/forgotPassword";
import Landingpage from "./Components/LandingPage/landingpage"
// import Welcome1 from "./Components/Welcome";
import Sessionintro from "./Components/sessionintro";
import Quizfillup from "./Components/quiz/quizfillup";
import Response from "./Components/response";
import Timetrack from "./Components/timeTrack";
import {Navbar,Container,Nav} from "react-bootstrap";
import FunVideo from "./Components/FunVideo";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/subsessionlist1' element={<Sessionlist1 />} />
            <Route path='/subsessionlist2' element={<Sessionlist2 />} />
            <Route path='/subsessionlist3' element={<Sessionlist3 />} />
            <Route path='/subsessionlist4' element={<Sessionlist4 />} />
            <Route path='/subsessionlist5' element={<Sessionlist5 />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/editProfile' element={<Info/>} />
            <Route path='/doctorDashboard' element={<DoctorDashboard/>} />
            <Route path='/patientTracker' element={<PatientTrack/>} />
            <Route path='/analytics' element={<Analytics/>} />
            <Route path='/quizmcq' element={<Quizmcq/>} />
            <Route path='/mainchat' element={<Mainchat/>} />
            <Route path='/preRegister' element={<PreRegister/>} />
            <Route path='/forgotPassword' element={<ForgotPassword/>} />
             {/*<Route path='*' element={<Welcome1 />} />*/}
            <Route path='/session' element={<Session />} />
            <Route path='/bar' element={<Bar/>} />
            <Route path='/quizfillup' element={<Quizfillup/>} />
            <Route path='/landingpage' element={<Landingpage />} />
            <Route path='/sessionintro' element={<Sessionintro />} />
            <Route path='/response' element={<Response />} />
            <Route path='/funvideo' element={<FunVideo />} />
            <Route path='/TimeTrack' element={<Timetrack />} />


        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
