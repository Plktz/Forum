
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Register } from './modules/home/pages/Register';
import { Login } from './modules/home/pages/Login';
import { Home } from './modules/home/pages/Home';
import { Discussion } from './modules/discussion/pages/Discussion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/discussion/:discussionid' element ={<Discussion/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
