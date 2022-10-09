
import React,{useContext,createContext,useReducer} from 'react'
import actionReducer, { Action } from '../reducer/action-reducer'
import {   StateType } from './action-type'

export const initialState:StateType={
  task:[],
  msg:{
    content:"",
    type:""
  },
  totalTags:[]
}

type ContextType={
  actionState:StateType
  actionDispatch:React.Dispatch<Action>
}
type Props={
  children:React.ReactNode
}
export const StateContext=createContext({}as ContextType)


const ActionProvider = ({children}:Props) => {
  const [actionState,actionDispatch]=useReducer(actionReducer,initialState)
  return (
    <>
    <StateContext.Provider value={{actionState,actionDispatch}}>
      {children}
    </StateContext.Provider>
    </>
  )
}
export const useActuon=()=>useContext(StateContext);
export default ActionProvider