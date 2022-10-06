import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useActuon } from '../../context/action-context';
import { useApp } from '../../context/app-context'
import "./nav.css"

const Nav = () => {
  const navigate=useNavigate();
  const {appState,appDispatch}=useApp();
  const {actionDispatch}=useActuon();
  return (
    <div className="nav-container">
      <div className="nav-box">
      <div className="nav-menu" onClick={()=>appDispatch({type:"SIDE_NAV",payload:!appState.sideNav})} >
         <AiOutlineMenu/>
      </div>
      <div className="nav-logo" onClick={()=>{
        appDispatch({type:"SELECT_TIME",payload:0})
        navigate("/")
      }}>
           promodoro
      </div>
      <div className="nav-delete-all" onClick={()=>{
        actionDispatch({
          type:"DELETE_ALL_TASK"
        })
      }}>
        delete all
      </div>
      </div>
    </div>
  )
}

export default Nav