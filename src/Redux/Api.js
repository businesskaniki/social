import { createAsyncThunk } from '@reduxjs/toolkit';

const DATA = 'api/GET_DATA'
const BASE_URL = 'http://127.0.0.1:8000';

const initialstate = {
    loading:false,
    data:[],
    errors:""
}

export const data = createAsyncThunk(
    DATA,
    async () =>{
        const data = await fetch(`${BASE_URL}`);
        const response = await data.json();
        const arry = [];
        response.map((res) =>{
            arry.push(res)
            return arry
        })
        console.log(arry);
    }
)

const myreducer = (state = initialstate,action)=>{
    switch (action.type) {
        case `${DATA}/fulfilled`:
            return {
                ...state,data:action
            }
        case `${DATA}/pending`:
            return {
                ...state,loading:true
            }
        case `${DATA}/rejected`:
            return {
                ...state,errors:action.msg
            }
        default:
            return state
    }
}

export default myreducer;