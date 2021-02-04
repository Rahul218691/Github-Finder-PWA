import axios from 'axios';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS
} from '../constants/GithubConstants';

const USER_DETAILS_URL = 'https://api.github.com/users';

export const getUserDetails = (username) =>async(dispatch) =>{
    try{
      dispatch({
          type:FETCH_USER_REQUEST
      });  
      const config = {
        headers: {
            "Content-Type": 'application/json',
        },
      } 
      const {data} = await axios.get(`${USER_DETAILS_URL}/${username}`,config);
    //   console.log(data);
      dispatch({
          type:FETCH_USER_SUCCESS,
          payload:data
      })
      if(data){
        const {login} = data;
        dispatch({
          type:FETCH_REPOS_REQUEST
        });
        const response = await axios.get(`${USER_DETAILS_URL}/${login}/repos`,config);
        // console.log(response.data)
        dispatch({
          type:FETCH_REPOS_SUCCESS,
          payload:response.data
        })
      }
    } catch (error) {
        dispatch({
            type:FETCH_USER_FAIL
        })
    }
  }