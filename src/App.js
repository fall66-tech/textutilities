
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'




function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 850);
  };

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor='black';
      showAlert(" dark mode has been enabled","success");
      document.title = 'textutils ~ light ';
    }  
    else {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert(" light mode has been enabled","success");
      document.title = 'textutils ~ Dark ';
    }
    

  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {alert && <Alert alert={alert} />}
    <div className="container my-3" >
      <TextForm  showAlert={showAlert} heading = "enter your suggested text" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
