import fetchWeather from "../services/fetchWeather.ts";
import axios from "axios";
jest.mock("axios");

describe("SERVICES", () => {
    beforeAll(()=>{
        console.log("******* SERVICES_TEST initiated *******");
    })
    afterAll(()=>{
        console.log("******* SERVICES_TEST completed *******")
    })
    beforeEach(()=>{
        const tn=expect.getState().currentTestName
        console.log(`$$ test ${tn}`);
    });
    afterEach(()=>{
        const tn=expect.getState().currentTestName
        console.log(`$$ completed ${tn}`);
    });
    test("FETCH_WEATHER",async()=>{
        axios.get.mockResolvedValue({data:{
            name:"abc",
            main:{
                temp:300
            }
            
        }})
        const data=await fetchWeather({lat:100,lon:200});
        expect(data).toEqual({
            place:"abc",
            temp:300
        });
    })
    test("FETCH_WEATHER_ERROR",async()=>{
        axios.get.mockRejectedValue({
            message:"error",
            status:404
        })
        const data=await fetchWeather({lat:100,lon:200});
        expect(data).toEqual({
            message:"error",
            status:404
        })
    })
})