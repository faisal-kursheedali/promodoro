import { SingleTaskType } from "../context/action-type"
import { AppInitialStateType } from "../context/app-context.type"

type TaskHandler={
    type:"SELECT_TASK"
    payload:SingleTaskType
}
type TimeHandler={
    type:"SELECT_TIME"
    payload:5|15|25|0
}
type CloseHandler={
    type:"CLOSE_TASK"
}
type SideNavHandler={
    type:"SIDE_NAV",
    payload:boolean
}
type TagHandler={
    type:"SELECTED_TAG",
    payload:string
}

type WeatherHandler={
    type:"SET_WEATHER",
    payload: any
}


export type AppActionType= TaskHandler|TimeHandler|CloseHandler|SideNavHandler|TagHandler|WeatherHandler



const appReducer=(state:AppInitialStateType,action:AppActionType):AppInitialStateType=>{
    switch(action.type){
        case "SELECT_TASK":{
            return {
                ...state,
                selectedTask:action.payload,
                selectedTime:0,
                isTaskSelected:true,
                sideNav:state.sideNav
            }
        }
        case "SELECT_TIME":{
            let boolVAlue=true;
            if (action.payload===0) {
                boolVAlue=false;
            }
            return{
                ...state,
                selectedTask:state.selectedTask,
                selectedTime:action.payload,
                isTaskSelected:state.isTaskSelected,
                sideNav:state.sideNav,
                isTimeSelected:boolVAlue
            }
        }
        case "CLOSE_TASK":{
            return{
                ...state,
                selectedTask:{
                    id:"",
                    tag:"",
                    title:"",
                    desc:'',
                    isCompleted:false,
                    isDeleted:false
                },
                selectedTime:0,
                isTaskSelected:false,
                sideNav:state.sideNav
            }
        }
        case"SIDE_NAV":{
            return{
                ...state,
                sideNav:action.payload
            }
        }   
        case"SELECTED_TAG":{
            return {
                ...state,
                selectedTag:action.payload
            }
        } 
        case "SET_WEATHER":{
            return {...state,currentWeather:action.payload}
    }
}
}

export default appReducer;