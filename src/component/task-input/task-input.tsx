import React, { useState, useRef, useEffect } from 'react'
import { useActuon } from '../../context/action-context';
// import { v4 as uuid } from 'uuid';
import {AiOutlinePlus} from "react-icons/ai"

import "./task-input.css"

const TaskInput = () => {
  const {actionState, actionDispatch } = useActuon();
  const inputRef = useRef<HTMLInputElement>(null!)
  const [showDesc, setShowDesc] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("default");
  const [addTag, setAddTag] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, [])
  return (
    <div className="input-container">
      <input type="text" className="input-task-title" ref={inputRef} placeholder='create new task' value={title} onChange={(e) => setTitle(prev => prev = e.target.value)} />
      <select name="tag" id="" className="input-task-select-tag" onChange={(e)=>setTag(prev=>prev=e.target.value)}>
      <option value="default"  className="input-task-option-tag">select tag</option>
        {
          actionState.totalTags.map(i=>{
            return <option value={i}  className="input-task-option-tag">{i}</option>
          })
        }
        
      </select>
      <div className="input-task-add-tag" onClick={()=>setShowAddTag(prev=>prev=!prev)}>
         <AiOutlinePlus/>
      </div>
{
  showAddTag?<>
  <div className="input-task-add-tag-container">
  <input className="input-task-add-tag-input" type="text" value={addTag} onChange={(e)=>setAddTag(prev=>prev=e.target.value)} />
  <button className="input-task-add-tag-btn" onClick={()=>{
    if (addTag) {
      actionDispatch({type:"ADD_TAG",payload:addTag});
      setAddTag(prev=>prev="");
      
      setShowAddTag(false);
    }
    setShowAddTag(false);
  }}>add</button>
  </div>
  </>:""
}
      <div className="input-task-add-tag-container">

      </div>
      <div className="desc-box">
        <div className="desc-ctrl">

          {
            showDesc ? <span className="hide-desc" onClick={() => setShowDesc(prev=>prev=false)}>hide desctiption</span> : <span className="show-desc" color='green' onClick={() => setShowDesc(prev=>prev=true)}>add description</span>
          }
        </div>
        {
          showDesc ? <textarea name="" id="" cols={30} rows={10} placeholder="Enter the description" className="input-task-desc"
            value={desc} onChange={(e) => setDesc(prev => prev = e.target.value)}
          ></textarea> : ""
        }
      </div>
      <div className="input-btn-box">

        <button className="input-btn" onClick={() => {
          if (title) {

            actionDispatch({
              type:'ADD_TASK',
              payload:{
                id:String(Date.now()),
                isCompleted:false,
                isDeleted:false,
                title:title,
                desc:desc,
                tag:tag
              }
            })

            setTitle("");
            setDesc("");
            setShowDesc(false);
          }


        }}>create</button>
      </div>
    </div>
  )
}

export default TaskInput