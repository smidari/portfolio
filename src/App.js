import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import MyProject from "./projects/MyProjects";
import Contacts from "./contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <MyProject />
      <Contacts />
    </div>
  );
}

export default App;
