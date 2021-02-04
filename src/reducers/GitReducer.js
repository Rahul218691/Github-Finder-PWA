import {
    FETCH_USER_REQUEST,
    FETCH_USER_RESET,
    FETCH_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAIL,
    FETCH_REPOS_RESET
} from '../constants/GithubConstants';


export const userDetailsReducer = (state={},action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {loading:true};
        case FETCH_USER_SUCCESS:
            return {loading:false,userInfo:action.payload};
        case FETCH_USER_FAIL:
            return {loading:false,error:true}
        case FETCH_USER_RESET:
            return {}            
        default:
            return state;    
    }
}

export const userReposReducer = (repos=[],action) =>{
    switch(action.type){
        case FETCH_REPOS_REQUEST:
            return {loading:true};
        case FETCH_REPOS_SUCCESS:
            return {loading:false,repos:action.payload};
        case FETCH_REPOS_FAIL:
            return {loading:false,error:true}   
        case FETCH_REPOS_RESET:
            return repos=[];         
        default:
            return repos;    
    }
}