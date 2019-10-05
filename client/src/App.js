import React from 'react';
import './App.css';
import MailForm from './subcomponents/MailForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Contact Us</h1>
       <MailForm/>
      </header>
    </div>
  );
}

export default App;
