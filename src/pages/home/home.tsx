import React from 'react'
import { TaskCardList, TaskInput } from '../../component';
import { useActuon } from '../../context/action-context'
import "./home.css"

const HomePg = () => {
  const {actionState}=useActuon();
  
  console.log(actionState);
  const data=actionState.task.filter(i=>!i.isDeleted&&i)
  return (
    <>
      <div className="home-pg">
        <div className="home-task-input">
              <TaskInput/>
        </div>
        <div className="home-task-list">
            <TaskCardList data={data} listHead={"Tasks"}/>
        </div>
      </div>
    </>
  )
}

export default HomePg