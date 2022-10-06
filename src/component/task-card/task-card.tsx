import React, { useState,useEffect } from 'react'
import { useActuon } from '../../context/action-context'
import { SingleTaskType } from '../../context/action-type'
// import actionReducer from '../../reducer/action-reducer'
import {AiOutlineCloseCircle,AiOutlineEdit} from "react-icons/ai"
import {MdDoneOutline} from "react-icons/md"
import {FcAlarmClock} from "react-icons/fc"
import {BsTrash} from "react-icons/bs"

import "./task-card.css"
import { useApp } from '../../context/app-context'
type Prop = {
  data: SingleTaskType
}

const TaskCard = ({ data }: Prop) => {
  useEffect(()=>{
    setTitle(data.title)
    setDesc(data.desc)
  },[data.title,data.desc])
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [tag, setTag] = useState(data.tag);
  const [desc, setDesc] = useState(data.desc);
  const { actionState, actionDispatch } = useActuon();
  // console.log(data.tag === "default");
  const {appDispatch}=useApp();
  
  return (
    <div className="task-card-container" style={data.isCompleted?{backgroundColor:"lightgreen"}:edit?{backgroundColor:"lightblue"}:{}} >
      
      {/* {
          <div className="task-promodoro-detaile-tag">{data.tag}</div>
      } */}
      
      {!edit ? (<><div className="task-card-head">
        {data.title}
      </div>
      {
        data.tag==="default"?"":<div className="task-card-tag">{data.tag}</div>
      }
        
        <div className="task-card-desc">
          {data.desc}
        </div>
        </>) : (<>
        <div className="task-card-edit-container">
            <input className="task-card-head-edit" value={title} onChange={(e)=>setTitle(pre=>pre=e.target.value)} placeholder="ente the task title"/>
            <select name="tag" id="" className="task-card-select-tag" onChange={(e)=>{
              setTag(prev=>prev= e.target.value)
              
            }}>
              <option value="default">select the tag</option>
              {
                actionState.totalTags.map((i,index)=>{
                  return<option value={i} key={index}>{i}</option>
                })
              }
            </select>
            <textarea className="task-card-desc-edit" value={desc} onChange={(e)=>setDesc(pre=>pre=e.target.value)} placeholder="enter the description of the task "></textarea>
            <div className="task-card-edit-btn-container">
            <button className="task-card-edit-btn" onClick={()=>{
              if (tag&&title) {
                
                actionDispatch({
                  type:"EDIT_TASK",
                  payload:{
                   tag:tag,
                   title:title,
                   desc:desc,
                   id:data.id,
                   isCompleted:data.isCompleted,
                   isDeleted:data.isDeleted,
                 }
                })
              }
               setEdit(prev=>prev=false)
            }}>done</button>
            </div>
            </div>
        </>)
      }
      <div className="task-card-btn-container">
      <div className="task-card-delete task-card-btn" onClick={() => {
              appDispatch({type:'SELECT_TASK',payload:data})
            }}><FcAlarmClock/></div>
        <div className="task-card-edit task-card-btn" onClick={()=>setEdit(pre=>pre=!pre)}><AiOutlineEdit/></div>
        {
          data.isCompleted ? <div className="task-card-not-done task-card-btn" onClick={() => {

            actionDispatch({ type: "INCOMPLETED_TASK", payload: data })
          }}>
            <AiOutlineCloseCircle/>
            </div>
            : <div className="task-card-done task-card-btn" onClick={() => {
              actionDispatch({ type: "COMPLETED_TASK", payload: data })
            }}>
              
              <MdDoneOutline/></div>
        }
        <div className="task-card-delete task-card-btn" onClick={() => {
              actionDispatch({ type: "DELETE_TASK", payload: data })
            }}><BsTrash/></div>

      </div>
    </div>
  )
}

export default TaskCard