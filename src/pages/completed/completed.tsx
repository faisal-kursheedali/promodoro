import React,{useState,useEffect} from 'react'
import {  TaskCardList } from '../../component'
import { useActuon } from '../../context/action-context'
import { SingleTaskType } from '../../context/action-type'
import "./completed.css"

const CompletedPg = () => {
  const {actionState}=useActuon();
  const [data, setData] = useState<SingleTaskType[]>([])
  useEffect(() => {
    setData(prev=>prev =  actionState.task.filter (i => i.isCompleted && i));
  }, [actionState])
  console.log(data);
  
  return (
    <div className="completed-container">
     <TaskCardList data={data} listHead={"Completed"}/>:
        
      
    </div>
  )
}

export default CompletedPg