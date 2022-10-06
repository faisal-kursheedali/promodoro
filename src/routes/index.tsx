import React from 'react'
import {Routes,Route} from "react-router-dom"
import { CompletedPg, DeletedPg, HomePg, Timer } from '../pages'
import TagPg from '../pages/tag/tag'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/'    element={<HomePg/>}/>
      <Route path='/deleted'  element={<DeletedPg/>}/>
      <Route path='/completed'  element={<CompletedPg/>}/>
      <Route path='/tag:tagName'  element={<TagPg/>}/>
      <Route path='/timer'  element={<Timer/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes