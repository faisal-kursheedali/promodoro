
import React,{useEffect} from 'react';
import './App.css';
import {Footer, Nav} from './component';
import { useActuon } from './context/action-context';
import { useApp } from './context/app-context';
import Main from './main';

const App:React.FC=()=> {
  const {actionState,actionDispatch}=useActuon();
  const {appState}=useApp();
  useEffect(()=>{
    actionDispatch({
      type:"GET_ALL_TASK"
    })
  },[])
  useEffect(()=>{
    if (actionState.task.length>0) {
      localStorage.setItem("userTask",JSON.stringify(actionState.task))
      
    }
  },[actionState.task])
  useEffect(()=>{
    if (!appState.isTimeSelected) {
      document.title="Pradoro"
    }
  },[appState.isTimeSelected])
  return (
    <div className="app-container">
      <div className="app">
        <div className="app-nav">
          <Nav/>
        </div>
        <div className="app-main">
          <Main/>
        </div>
        <div className="app-footer">
          <Footer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
