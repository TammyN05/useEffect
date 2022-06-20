import Header from "./components/Header";
import LogIn from "./components/LogIn";
import {useState} from 'react';

function App() {
 const [isLogged, setIsLogged] = useState(false);

 const userLogInInfo = localStorage.getItem("LoggedIn")

 function handleLogIn(){
  //aca iria una validacion xd
  localStorage.setItem("LoggedIn", "true");
  setIsLogged(true);
 }

 function handleLogOut(){
  setIsLogged(false)
 }

  return (
    <div className="App">
      <Header isLogged = {isLogged} onLogOut = {handleLogOut}/>
      <main className="container">
        {!isLogged && <LogIn onLogIn={handleLogIn}/>}
      </main>
    </div>
  );
}

export default App;
