import appReducer from "../reducer/app-reducer"

describe("APP_TEST",()=>{
    const initialState={
        selectedTask:{},
        selectedTime:0,
        isTaskSelected:false,
        sideNav:false,
        selectedTag:"",
        isTimeSelected:false
    
    }
    test("SELECT_TASK",()=>{
        const action={
            type:"SELECT_TASK",
            payload:{
                id:"test01",
                title:"testing",
                desc:"this is app testing",
                isCompleted:false,
                isDeleted:false,
                tag:"task"
            }
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{
                id:"test01",
                title:"testing",
                desc:"this is app testing",
                isCompleted:false,
                isDeleted:false,
                tag:"task"
            },
            selectedTime:0,
            isTaskSelected:true,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false
        
        })
    })
    test("SELECT_TIME",()=>{
        const action={
            type:"SELECT_TIME",
            payload:5
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{},
            selectedTime:5,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:true
            
        })
    })
    test("SELECT_0_TIME",()=>{
        const action={
            type:"SELECT_TIME",
            payload:0
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{},
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false
            
        })
    })
    test("CLOSE_TASK",()=>{
        const action={
            type:"CLOSE_TASK",
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{
                id:"",
                title:"",
                desc:"",
                isCompleted:false,
                isDeleted:false,
                tag:""
            },
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false
        
        })
    })
    test("SIDE_NAV",()=>{
        const action={
            type:"SIDE_NAV",
            payload:true,
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{},
            selectedTime:0,
            isTaskSelected:false,
            sideNav:true,
            selectedTag:"",
            isTimeSelected:false
        
        })
    })
    test("SELECTED_TAG",()=>{
        const action={
            type:"SELECTED_TAG",
            payload:"task",
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{},
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"task",
            isTimeSelected:false
        
        })
    })
})