import './App.css';
import About from './components/About'; 
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('light'); // whether dark mode enable or not.
   const [alert, setAlert]= useState(null);
  
  const showAlert =(message,type)=>{
     setAlert({
       msg:message,
       type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","success");
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled","success");
}
  }
  return (
<>  
{/* <Navbar title="Textutils" aboutText="About TextUtils" /> */}
{/* <Navbar /> */}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>


<Alert alert={alert}/> 
{/* <TextForm  showAlert={showAlert}heading="Enter the text to analyze below" mode={mode} /> */}
<div className="container my-3">
<About/>  
</div>
</>
  );
}

export default App;   
