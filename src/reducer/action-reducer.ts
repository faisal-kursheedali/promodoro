import { SingleTaskType, StateType } from "../context/action-type"

type HandleAllTask = {
    type: "GET_ALL_TASK" | "DELETE_ALL_TASK"|"GET_ALL_TAG"
}
type TagHandler={
    type:"ADD_TAG",
    payload:string
}
type HandleSingleTask = {
    type: "ADD_TASK" | "DELETE_TASK" | "EDIT_TASK" | "COMPLETED_TASK"|"INCOMPLETED_TASK"
    payload: SingleTaskType
}
export type Action = HandleAllTask | HandleSingleTask|TagHandler
const actionReducer = (state: StateType, action: Action): StateType => {
    switch (action.type) {
        case "GET_ALL_TASK": {
            const fromStorage = localStorage.getItem("userTask");
            let data;
            if (fromStorage) {
                data=JSON.parse(fromStorage);
            }else{
                data=[]
            }
            return {
                task: data,
                msg: {
                    content: "fetched all task",
                    type: "scucess"
                },
                totalTags:[...state.totalTags]
            }
        }
        case "DELETE_ALL_TASK": {
            localStorage.removeItem("userTask");
            localStorage.removeItem("userTag");
            return {
                task: [],
                msg: {
                    content: "all task deleted",
                    type: "error"
                },
                totalTags:[]
            };
        }
        case "DELETE_TASK": {
            const givenId = action.payload.id;
            const newTask = state.task.map(i => i.id === givenId?{
                ...i,
                isDeleted:true
            }:i);
            
            return {...state,
                task:newTask,
                msg: {
                    content: "deleted the task",
                    type: "scucess"
                },
            }
        }
        case "EDIT_TASK": {
            const givenId = action.payload.id;
            let newArr:SingleTaskType[]=[];
            state.task.forEach(i => {
                if (i.id===action.payload.id) {
                   newArr=[...newArr,action.payload] 
                }else{
                    newArr=[...newArr,i]
                }
            });
            return {
                task: newArr,
                msg: {
                    content: "edited the task",
                    type: "scucess"
                },
                totalTags:[...state.totalTags]
            }
            
        }
        case "ADD_TASK": {
            const newData = action.payload;
            return {
                task: [...state.task, newData],
                msg: {
                    content: "added the task",
                    type: "scucess"
                },
                totalTags:[...state.totalTags]
            }
        };
        case "COMPLETED_TASK": {
            const givenId = action.payload.id;
            
            const completedTask=action.payload;
            completedTask.isCompleted=true;
            const newData=state.task.map(i=>i.id===givenId?completedTask:i);
            return {
                task:newData,
                msg:{
                    type:"scucess",
                    content:"Task is completed"
                },
                totalTags:[...state.totalTags]
            }
        };
        case "INCOMPLETED_TASK": {
            const givenId = action.payload.id;
            const completedTask=action.payload;
            completedTask.isCompleted=false;
            const newData=state.task.map(i=>i.id===givenId?completedTask:i);
            return {
                task:newData,
                msg:{
                    type:"scucess",
                    content:"Task is not completd"
                },
                totalTags:[...state.totalTags]
            }
        };
        case "ADD_TAG":{
            const tagExist=state.totalTags.find(i=>i===action.payload)
            if (!tagExist) {
               return {
                task:state.task,
                msg:{
                    content:"added the tag",
                    type:"scucess"
                },
                totalTags:[...state.totalTags,action.payload]
               } 
            }
            else return {
                task:state.task,
                msg:{
                    content:"already exist",
                    type:"scucess"
                },
                totalTags:[...state.totalTags]
               } 
        }
        case"GET_ALL_TAG":{
            const data=localStorage.getItem("userTag");
            let tags; 
            if(data){
                tags=JSON.parse(data);
            }
            else{
                tags=[];
            }
            return {
                task:state.task,
                msg:{
                    content:"fetched all tags",
                    type:"scucess"
                },
                totalTags:tags
            }
    }
        default: {
            return state
        }
        
        
    }
}


export default actionReducer;