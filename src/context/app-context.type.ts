import { SingleTaskType } from "./action-type"

export type AppInitialStateType={
    selectedTask:SingleTaskType
    selectedTime:5|15|25|0
    isTaskSelected:boolean,
    sideNav:boolean,
    selectedTag:string,
    isTimeSelected:boolean

}