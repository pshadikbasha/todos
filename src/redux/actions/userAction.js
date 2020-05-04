import {GET_USERS,ADD_USER,DELETE_USER,SET_LOADING,USERS_ERROR} from './types';

export const getUsers=()=>async dispatch=>{
    try{
        setLoading();
        const res=await fetch('/users');
        const data=await res.json();
        dispatch({
            type:GET_USERS,
            payload:data,
        })

    }
    catch(error){
        dispatch({
            type:USERS_ERROR,
            payload:error.response.statusText
        })
    }
}
export const addUsers=(user)=>async dispatch=>{
    try{
        setLoading();
        const res=await fetch('/users',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-type':'application/json'
            }
        });
        const data=await res.json();
        dispatch({
            type:ADD_USER,
            payload:data,
        })

    }
    catch(error){
        dispatch({
            type:USERS_ERROR,
            payload:error.response.statusText
        })
    }
}

export const delUsers=(id)=>async dispatch=>{
    try{
        setLoading();
        await fetch(`/users/${id}`,{
            method:'DELETE'
        });
        dispatch({
            type:DELETE_USER,
            payload:id,
        })

    }
    catch(error){
        dispatch({
            type:USERS_ERROR,
            payload:error.response.statusText
        })
    }
}
export const setLoading=()=>{
    return{
        type:SET_LOADING
    }
}