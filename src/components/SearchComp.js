import React,{useRef} from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import {getUserDetails} from '../actions/GitActions';
import { useDispatch,useSelector } from "react-redux";
import Message from './Message';
import {FETCH_USER_RESET,FETCH_REPOS_RESET} from '../constants/GithubConstants';

const SearchComp = () => {

    const dispatch = useDispatch();

    const userName = useRef();

    const handleSubmit = (e) =>{
        dispatch(getUserDetails(userName.current.value))
        localStorage.setItem('GitUser',userName.current.value);
        userName.current.value = "";
    }

    const {error} = useSelector(state=>state.userDetails);

	if(error){
        setTimeout(()=>dispatch({
            type:FETCH_USER_RESET
        }),2000);
        setTimeout(()=>dispatch({
            type:FETCH_REPOS_RESET
        }),2000);	
        localStorage.removeItem('GitUser');
    }   


    return (
        <div className="mt-2">
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Github username"
                aria-label="Github username"
                aria-describedby="basic-addon2"
                ref={userName}
                />
                <InputGroup.Append>
                <Button variant="btn btn-dark" onClick={handleSubmit}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            {error && <Message type="danger">Github User not Found</Message>}
        </div>
    )
}

export default SearchComp
