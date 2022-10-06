import React from 'react'
import TaskPromodoro from './component/task-promodoro/task-promo';
// import { useActuon } from './context/action-context'
import { useApp } from './context/app-context';
import AllRoutes from './routes'
import "./main.css"
// import { Promodoro } from './component';
import { Sidenav } from './component';

const Main = () => {
  // const { actionDispatch } = useActuon();
  const { appState,appDispatch } = useApp();
  return (
    <div className="main-container">
      {
        appState.sideNav ? <div className="main-sidenav-container">
          <Sidenav />
        </div> : ""
      }

      <div className="main-content" onClick={()=>appDispatch({type:"SIDE_NAV",payload:false})} >
        <AllRoutes />
        {/* <button className="main-delete-all-task" onClick={() => {
          actionDispatch({
            type: "DELETE_ALL_TASK"
          })
        }}>
          delete all task
        </button> */}
        {
          appState.isTaskSelected ?
            <div className="main-promodoro-cmp">
              <TaskPromodoro />
            </div>
            : ""
        }
      </div>
    </div>
  )
}

export default Main 