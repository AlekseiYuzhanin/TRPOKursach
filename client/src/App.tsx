import React from 'react';
import './styles/App.scss';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import DefaultButton from './components/UI/DefaultButton';


const App: React.FC = () => {
  return(
    <div className='App'>
      <LoginPage></LoginPage>
      <DefaultButton onClick={() => console.log("huesos")}>GAGAGAGA</DefaultButton>
    </div>
  )
}

export default App;
