import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
          <Header />

          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Contacts />
          </div>
         </>
      )}
     
    </div>
  );
};

export default App;
