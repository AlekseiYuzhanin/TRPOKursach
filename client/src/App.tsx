import React from 'react';
import './styles/App.scss';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { LayoutContext } from 'antd/es/layout/layout';
import { Layout } from 'antd';

const App: React.FC = () => {
  return(
    <div className='App'>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
    </div>
  )
}

export default App;
