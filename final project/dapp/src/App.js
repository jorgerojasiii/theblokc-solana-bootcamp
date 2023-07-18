import logo from './logo.svg';
import './App.css';
import LoginWallet from './components/login';
import Rant from './components/rant';
// import LoginWallet from 
function App() {
  return (
    <div>
      <h1>
      Rant Wall
      </h1>
      <Rant/>
      <LoginWallet/>
    </div>
  );
}

export default App;
