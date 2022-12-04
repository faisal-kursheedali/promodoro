import React,{useContext,createContext,useReducer} from 'react'
import appReducer, { AppActionType } from '../reducer/app-reducer';
import { AppInitialStateType } from './app-context.type';
type Prop={
  children : React.ReactNode
}
type ContextType={
    appState:AppInitialStateType,
    appDispatch:React.Dispatch<AppActionType>
}
export const AppContext=createContext<ContextType>({} as ContextType);

const AppContextProvider = ({children}:Prop) => {
    const initialState:AppInitialStateType={
            selectedTask:{
                tag:"",
                title:"",
                desc:"",
                isCompleted:false,
                isDeleted:false,
                id:"",
            },
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false,
            currentWeather:{},
    }
    const [appState,appDispatch]=useReducer(appReducer,initialState);
  return (
    <AppContext.Provider value={{appState,appDispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp=() =>useContext(AppContext);
export default AppContextProvider