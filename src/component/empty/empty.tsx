import React from 'react'
import "./empty.css"

import  empty from "../../img/empty.svg"
type Prop={
    msg?:string
}

const Empty = ({msg}:Prop) => {
    return (
        <div className="empty-container">
        <div className="empty-list">
            <img src={empty} alt="" className="empty-img" />
            <div className="empty-msg">{msg}</div>
        </div>
        </div>
    )
}

export default Empty