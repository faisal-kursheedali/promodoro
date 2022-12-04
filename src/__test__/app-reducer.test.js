import appReducer from "../reducer/app-reducer"

describe("APP_TEST",()=>{

    const initializeState=()=>{
        return initialState={
            selectedTask:{},
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false,
            currentWeather:{},
    };
    }
    let initialState;
    beforeAll(()=>{
        console.log("******* APP_TEST initiated *******");
    })
    afterAll(()=>{
        console.log("******* APP_TEST completed *******")
    })
    beforeEach(()=>{
        const tn=expect.getState().currentTestName
        console.log(`$$ test ${tn}`)
         return initializeState();
    });
    afterEach(()=>{
        const tn=expect.getState().currentTestName
        console.log(`$$ completed ${tn}`)
    });
    
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
            isTimeSelected:false,currentWeather:{},
        
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
            isTimeSelected:true,currentWeather:{},
            
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
            isTimeSelected:false,currentWeather:{},
            
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
            isTimeSelected:false,
            currentWeather:{},
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
            isTimeSelected:false,currentWeather:{},
        
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
            isTimeSelected:false,currentWeather:{},
        
        })
    })
    test("SET_WEATHER",()=>{
        const action={
            type:"SET_WEATHER",
            payload:{
                place:"abc",
                temp:200
            },
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{},
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false,
            currentWeather:{
                     "place": "abc",
                     "temp": 200,
                   }
        
        })
    })
    test("SET_WEATHER_ERROR",()=>{
        const action={
            type:"SET_WEATHER",
            payload:"Error",
        }
        const result=appReducer(initialState,action);
        expect(result).toEqual({
            selectedTask:{},
            selectedTime:0,
            isTaskSelected:false,
            sideNav:false,
            selectedTag:"",
            isTimeSelected:false,
            currentWeather:"Error"
        
        })
    })
})