import React, { useState } from 'react'
// import { SingleTaskType } from '../../context/action-type'
import { useApp } from '../../context/app-context'
import { AiOutlineCloseCircle,AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { IoReloadCircleOutline } from "react-icons/io5"
import { MdDoneOutline } from "react-icons/md"
import "./task-promo.css"
import { useActuon } from '../../context/action-context'
import Promodoro from '../promodoro/promodoro'
import Empty from '../empty/empty'


const TaskPromodoro = () => {
    const { appState,appDispatch } = useApp();
    const data = appState.selectedTask;
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [desc, setDesc] = useState(data.desc);
    const [tag, setTag] = useState(data.tag);
    const {actionState,actionDispatch}=useActuon();
    // const time=appState.selectedTime;
    return (
        <>
            <div className="task-promodoro-container">
                <div className="task-promodoro-close" onClick={()=>{
                    appDispatch({
                        type:"CLOSE_TASK"
                    });
                    appDispatch({
                        type:"SELECT_TIME",
                        payload:0
                    })
                }}>
                    <AiOutlineCloseCircle/>
                </div>
                <div className="task-promodoro-box">
                    <div className="promodoro-time">
                        <Promodoro/>
                    </div>
                    {/* <div className="promodoro-time-selector">
                        <label htmlFor="5min">
                            <input type="radio" id='5min' name='promodoro-time-selector' className="promodoro-time-selector-radio" />
                            5 min
                        </label>
                        <label htmlFor="15min">
                            <input type="radio" id='15min' name='promodoro-time-selector' className="promodoro-time-selector-radio" />
                            15 min
                        </label>
                        <label htmlFor="25min">
                            <input type="radio" id='25min' name='promodoro-time-selector' className="promodoro-time-selector-radio" />
                            25 min
                        </label>
                    </div> */}
                </div>
                <div className="task-promodoro-detaile">
                    {
                        edit ? <>
                            <div className="task-promodoro-detaile-edit-container">
                                <input type="text" className='task-promodoro-detaile-title-edit' value={title} onChange={(e)=>setTitle(prev=>prev=e.target.value)} />
                                <select name="tag" id="" className="task-promodoro-detaile-tag-edit-select" onChange={(e)=>setTag(prev=>prev=e.target.value)}>
                                    <option value="default">select the option</option>
                                    {
                                        actionState.totalTags.map((i,index)=>{
                                            return <option value={i} key={index}>{i}</option>
                                        })
                                    }
                                </select>
                                <textarea className='task-promodoro-detaile-desc-edit' value={desc} onChange={(e)=>setDesc(prev=>prev=e.target.value)} ></textarea>
                                <button className="task-promodoro-detaile-edit-btn" onClick={()=>{
                                    if (title&&tag) {
                                        actionDispatch({
                                            type:"EDIT_TASK",
                                            payload:{
                                                tag:tag,
                                                title:title,
                                                desc:desc,
                                                isCompleted:data.isCompleted,
                                                isDeleted:data.isDeleted,
                                                id:data.id
                                            }
                                        })
                                        appDispatch({
                                            type:"SELECT_TASK",
                                            payload:{
                                                tag:tag,
                                                title:title,
                                                desc:desc,
                                                isCompleted:data.isCompleted,
                                                isDeleted:data.isDeleted,
                                                id:data.id
                                            }
                                        })
                                    }
                                    setEdit(false)
                                }}>done</button>
                            </div>
                        </> :
                            <div className="task-promodoro-detaile-container">
                                <div className="task-promodoro-detaile-title">{data.title}</div>
                                {
                                    data.tag==="default"?"":<div className="task-promodoro-detaile-tag">{data.tag}</div>
                                }
                                
                                {
                                    data.desc?<div className="task-promodoro-detaile-desc">{data.desc}</div>:<>
                                    <div className="task-empty-box">
                                    <Empty msg='No description avilable'/>
                                    </div>
                                    </>
                                }
                                
                            </div>
                    }

                    {!edit?<div className="task-promodoro-detaile-btn-container">
                        <div className="task-promodoro-detaile-btn task-promodoro-detaile-edit" onClick={()=>setEdit(prev=>prev=!prev)}><AiOutlineEdit /></div>
                        {
                            data.isCompleted ? <div className="task-promodoro-detaile-btn task-promodoro-detaile-retry" onClick={()=>{
                                actionDispatch({
                                    type:"INCOMPLETED_TASK",
                                    payload:data
                                })
                            }}><IoReloadCircleOutline /></div> :
                                <div className="task-promodoro-detaile-btn task-promodoro-detaile-done" onClick={()=>{
                                    actionDispatch({
                                        type:"COMPLETED_TASK",
                                        payload:data
                                    })
                                }}><MdDoneOutline /></div>
                        }
                        <div className="task-promodoro-detaile-btn task-promodoro-detaile-delete" onClick={()=>{
                            actionDispatch({
                                type:"DELETE_TASK",
                                payload:data
                            });
                            appDispatch({
                                type:"CLOSE_TASK"
                            })
                            appDispatch({
                                type:"SELECT_TIME",
                                payload:0
                            })
                        }}><BsTrash /></div>

                    </div>:""}
                </div>
            </div>

        </>
    )
}

export default TaskPromodoro