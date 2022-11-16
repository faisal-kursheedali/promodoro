export type SingleTaskType={
    id:string
    title:string
    desc?:string
    isCompleted:any
    isDeleted:any
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