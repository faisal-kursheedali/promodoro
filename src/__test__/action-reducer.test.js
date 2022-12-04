
import actionReducer from "../reducer/action-reducer"

describe("ACTION_TEST", () => {
    beforeAll(()=>{
        console.log("******* ACTION_TEST initiated *******");
    })
    afterAll(()=>{
        console.log("******* ACTION_TEST completed *******")
    })
    beforeEach(()=>{
        const tn=expect.getState().currentTestName
        console.log(`$$ test ${tn}`);
    });
    afterEach(()=>{
        const tn=expect.getState().currentTestName
        console.log(`$$ completed ${tn}`);
    });
    test("ADD_TASK", () => {
        const initialState={
            task:[],
            msg:{
              content:"",
              type:""
            },
            totalTags:[]
          }
        const action = {
            type: "ADD_TASK",
            payload: {
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual({
            task: [{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg: {
                content: "added the task",
                type: "scucess"
            },
            totalTags:[]
        });
    });
    test("DELETE_TASK",()=>{
        const action = {
            type: "DELETE_TASK",
            payload: {
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }
        }
        const initialState={
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg:{
                content:"",
                type:""
            },
            totalTags:[]
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual(
            {
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: true,
                tag: "test",
            }],
            msg: {
                content: "deleted the task",
                type: "scucess"
            },
            totalTags:[]
        })
    })
    test("EDIT_TASK",()=>{
        const initialState={
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg:{
                content:"",
                type:""
            },
            totalTags:[]
        }
        const action = {
            type: "EDIT_TASK",
            payload: {
                id: "test01",
                title: "abcd_test test edit",
                desc: "This is test the edit task part",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual({
            task: [{
                id: "test01",
                title: "abcd_test test edit",
                desc: "This is test the edit task part",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg: {
                content: "edited the task",
                type: "scucess"
            },
            totalTags:[]
        })
    })
    test("COMPLETED_TASK",()=>{
        const initialState={
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg:{
                content:"",
                type:""
            },
            totalTags:[]
        }
        const action = {
            type: "COMPLETED_TASK",
            payload: {
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual({
            task: [{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: true ,
                isDeleted: false,
                tag: "test", 
            }],
            msg:{
                type:"scucess",
                content:"Task is completed"
            },
            totalTags:[]
        })
    })
    test("INCOMPLETED_TASK",()=>{
        const initialState={
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: true,
                isDeleted: false,
                tag: "test",
            }],
            msg:{
                content:"",
                type:""
            },
            totalTags:[]
        }
        const action = {
            type: "INCOMPLETED_TASK",
            payload: {
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: true,
                isDeleted: false,
                tag: "test",
            }
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual({
            task: [{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false ,
                isDeleted: false,
                tag: "test", 
            }],
            msg:{
                type:"scucess",
                content:"Task is not completd"
            },
            totalTags:[]
        })
    })
    test("ADD_TAG",()=>{
        const initialState={
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg:{
                content:"",
                type:""
            },
            totalTags:["test"]
        }
        const action={
            type:"ADD_TAG",
            payload:"test1",
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual( {
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag:"test",
            }],
            msg:{
                content:"added the tag" ,
                type:"scucess"
            },
            totalTags:["test","test1"]
           });
    })
    test("ADD_TAG",()=>{
        const initialState={
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag: "test",
            }],
            msg:{
                content:"",
                type:""
            },
            totalTags:["test"]
        }
        const action={
            type:"ADD_TAG",
            payload:"test",
        }
        const result = actionReducer(initialState, action);
        expect(result).toEqual( {
            task:[{
                id: "test01",
                title: "abcd_test",
                desc: "This is test",
                isCompleted: false,
                isDeleted: false,
                tag:"test",
            }],
            msg:{
                content:"already exist" ,
                type:"scucess"
            },
            totalTags:["test"]
           });
    })
})