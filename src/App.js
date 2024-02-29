import React from 'react';
import { useState } from 'react';
import "./App.css"
import Users from './Components/Users';
import Userdetail from './Components/Userdetail';
function App() {
 const [loginId, setLoginId] = useState()
  return (
    <div className="App">
       <div className="container">
       <Users setLoginId={setLoginId}></Users>
       <Userdetail loginId={loginId}></Userdetail>
     </div>
    </div>
  );
}

export default App;
