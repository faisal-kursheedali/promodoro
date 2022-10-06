export type SingleTaskType={
    id:string
    title:string
    desc?:string
    isCompleted:boolean
    isDeleted:boolean
    tag:string
}

export type StateType={
    task:SingleTaskType[],
    msg:{
        content:string
        type:"error"|"scucess"|"alert"|""
    },
    totalTags:string[]
}