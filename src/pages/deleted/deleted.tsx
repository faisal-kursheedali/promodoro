import React from 'react'
import {  TaskCardList } from '../../component'
import { useActuon } from '../../context/action-context'
import "./deleted.css"

const DeletedPg = () => {
  const {actionState}=useActuon();
  const data=actionState.task.filter(i=>i.isDeleted&&i)
  return (
    <div className="deleted-container">
      <TaskCardList data={data} listHead={"Deleted"}/>:
        
    </div>
    // <div className="deleted-container">
    //   {
    //     data.length>0?<TaskCardList data={data} listHead={"Deleted"}/>:
    //     <>
    //     <Empty/>
    //     </>
    //   }
      
    // </div>
  )
}

export default DeletedPg