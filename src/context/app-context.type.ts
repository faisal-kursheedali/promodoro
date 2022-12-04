import { SingleTaskType } from "./action-type"

export type AppInitialStateType={
    selectedTask:SingleTaskType
    selectedTime:5|15|25|0
    isTaskSelected:any,
    sideNav:any,
    selectedTag:any,
    isTimeSelected:any
    currentWeather:any
}