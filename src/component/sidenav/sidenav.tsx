import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useActuon } from '../../context/action-context'
import { useApp } from '../../context/app-context';
import "./sidenav.css"

const Sidenav = () => {
  const { actionState } = useActuon();
  const {appDispatch}=useApp();
  const navigate=useNavigate();
  return (
    <div className="sidenav-container">
      <ul className="sidenav-list">
        <li className="sidenav-list-item sidenav-list-logo" onClick={()=>{
         appDispatch({type:"SELECT_TIME",payload:0})
         navigate("/")
          appDispatch({type:"SIDE_NAV",payload:false})}}>
          Promodoro
        </li>
        <li className="sidenav-list-item" onClick={()=>{
         appDispatch({type:"SELECT_TIME",payload:0})
         navigate("/completed")
          appDispatch({type:"SIDE_NAV",payload:false})}}>
          Completed
        </li>
        <li className="sidenav-list-item" onClick={()=>{
         appDispatch({type:"SELECT_TIME",payload:0})
         navigate("/timer")
          appDispatch({type:"SIDE_NAV",payload:false})}}>
          Timer
        </li>
        {/* <li className="sidenav-list-item" onClick={()=>{
         appDispatch({type:"SELECT_TIME",payload:0})
         navigate("/deleted")
          appDispatch({type:"SIDE_NAV",payload:false})}}>
          deleted
        </li> */}
        {
          actionState.totalTags.map((i, index) => {
            return (
              <li className="sidenav-list-item sidenav-tag" key={index} onClick={()=>{
                appDispatch({type:"SELECTED_TAG",payload:i})
               appDispatch({type:"SELECT_TIME",payload:0})
                navigate(`/tag:${i}`)
                appDispatch({type:"SIDE_NAV",payload:false})}}> 
                {i}
              </li>

            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidenav