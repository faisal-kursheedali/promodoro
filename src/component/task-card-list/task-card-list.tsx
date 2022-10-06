import React from 'react'
import { SingleTaskType } from '../../context/action-type'
import Empty from '../empty/empty'
import TaskCard from '../task-card/task-card'
import "./task-card-list.css"
type Props={
  data:SingleTaskType[]
  listHead:string
}

const TaskCardList = ({data,listHead}:Props) => {
  const listArr=data.filter(i=>!i.isDeleted)
  return (
   <div className="task-card-list-container">
    <div className="task-card-list-head">
      {listHead}
    </div>
    {
      listArr.length>0?<>
    <ul className="task-card-list">
      {
        listArr.map(i=>{
          // console.log(i)
          
          return(
            <>
            <li className="task-card-list-item" key={i.id}>
              
              <TaskCard data={i}/>
            </li>
            </>
          )
        })
      }
    </ul>
    </>:<><Empty/></>
    }
    
   </div>
  )
}

export default TaskCardList