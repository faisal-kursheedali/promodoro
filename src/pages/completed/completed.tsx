import React from 'react'
import {  TaskCardList } from '../../component'
import { useActuon } from '../../context/action-context'
import "./completed.css"

const CompletedPg = () => {
  const {actionState}=useActuon();
  const data=actionState.task.filter(i=>i.isCompleted&&i)
  return (
    <div className="completed-container">
     <TaskCardList data={data} listHead={"Completed"}/>:
        
      
    </div>
  )
}

export default CompletedPg