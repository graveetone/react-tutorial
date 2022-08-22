import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet.js' // name may be another
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import React from 'react';
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
// without {} there is error - https://bobbyhadz.com/blog/javascript-does-not-contain-default-export
// if use named export - use named (with {}) import
function App() {
  return (
    <div className="App">
       {/* <Greet name='Sviat'></Greet> */}
       {/* <Greet name='Diana'></Greet> */}
       {/* <Greet name='Paul'></Greet> */}
       {/* <Greet name='DummyName'></Greet> */}
       {/* <Greet name="Stop using this component"></Greet> */}
       {/* <Message></Message> */}
       {/* <Counter></Counter> */}
       {/* <FunctionClick></FunctionClick> */}
       {/* <ClassClick></ClassClick> */}
       {/* <EventBind></EventBind> */}
       {/* <ParentComponent></ParentComponent> */}
       {/* <UserGreeting></UserGreeting> */}
       <List></List>
     </div>
  );
}

export default App;
