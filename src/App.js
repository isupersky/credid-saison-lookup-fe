import React, { useState } from 'react';
import './App.css';
import DenseAppBar from './Components/Nav_Bar/DenseAppBar'
import VerifyPage from './Components/Verify_Page/VerifyPage'
import StatsPage from './Components/Stats_Page/StatsPage'


function App() {
  const [verify, setVerify] = useState(true);
  return (
    <div className="App">
      <DenseAppBar setCurrPage={setVerify}/>
      {verify?
        <VerifyPage/>:
        <StatsPage/>
      }
    </div>
  );
}

export default App;
