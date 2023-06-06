import React from 'react';
import './styles/App.scss';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
  return(
    <div className='App'>
      <AppRouter/>
    </div>
  )
}

export default App;
