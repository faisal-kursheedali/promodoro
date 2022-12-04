import React,{useEffect,useState} from 'react'
import { TaskCardList, TaskInput, Time } from '../../component';
import { useActuon } from '../../context/action-context'
import "./home.css"

const HomePg = () => {
  const {actionState}=useActuon();
  const [data,setData]=useState(actionState.task)
  useEffect(()=>{
    setData(prev=>prev=actionState.task)
  },[actionState.task])
  
  // console.log(actionState);
  return (
    <>
      <div className="home-pg">
        <div className="home-time">
          <Time/>
        </div>
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