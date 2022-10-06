import React from 'react'
import { Empty, TaskCardList } from '../../component'
import { useActuon } from '../../context/action-context'
import { useApp } from '../../context/app-context'
import "./tag.css"

const TagPg = () => {
    const {appState}=useApp();
  const {actionState}=useActuon();
  const data=actionState.task.filter(i=>i.tag===appState.selectedTag&&i)
  return (
    <div className="Tag-container">
      <TaskCardList data={data} listHead={appState.selectedTag}/>:
        
    </div>
  )
}

export default TagPg