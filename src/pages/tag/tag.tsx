import React, { useEffect, useState } from 'react'
import { TaskCardList } from '../../component'
import { useActuon } from '../../context/action-context'
import { useApp } from '../../context/app-context'
import "./tag.css"

const TagPg = () => {
  const { appState } = useApp();
  const { actionState } = useActuon();
  const [data, setData] = useState(actionState.task)
  useEffect(() => {
    setData(prev => prev = actionState.task)
    setData(prev=>prev=prev.filter(i => i.tag === appState.selectedTag && i));
  }, [actionState])
  // const tag = actionState.task.filter(i => i.tag === appState.selectedTag && i)
  return (
    <div className="Tag-container">
      <TaskCardList data={data} listHead={appState.selectedTag} />:

    </div>
  )
}

export default TagPg