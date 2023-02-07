import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Nav3 from './components/Nav3';
import Sign_up from './components/Sign_up';
import Login_as from './components/Login_as';
import Login from './components/Login';
import Student from './components/Student';
import { Route, Routes, Router } from 'react-router-dom';
import UX from './components/UX';
import Tst from './components/Tst';
import UX2 from './components/UX2';
import Entrepreneur from './components/Entrepreneur';
import Post_problem from './components/Post_problem';
import My_ideas from './components/My_ideas';
import Business from './components/Business';
import Problems from './components/Problems';
import My_problems from './components/My_problems';
import Business_ideas from './components/Business_ideas';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Sign_up/>} />
      <Route path='Login' element={<Login/>}/>
      <Route path='Login_as' element={<Login_as/>} />
      <Route path='Student' element={<><Nav1/><Student/></>} />
      <Route path='My_ideas' element={<><Nav2/><My_ideas/></>} />
      <Route path='Business' element={<><Nav3/><Business/></>} />
      <Route path='Problems' element={<><Nav2/><Problems/></>} />
      <Route path='UX' element={<><Nav3/><UX/></>} />
      <Route path='Entrepreneur' element={<><Nav1/><Entrepreneur/></>} />
      <Route path='Post_problem' element={<><Nav3/><Post_problem/></>} />
      <Route path='My_problems' element={<><Nav2/><My_problems/></>} />
      <Route path='Business_ideas' element={<><Nav3/><Business_ideas/></>} />
    </Routes>
  );
}

export default App;
