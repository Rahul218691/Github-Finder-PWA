import React from 'react'
import Cards from './Cards';
// import {useSelector} from 'react-redux';

const UserRepos = ({repos}) => {

    // const {repos} = useSelector(state=>state.userRepo);
    // console.log(repos.length)
    return (
        <div>
            {/* {repos.length !==0 && <h3 className="text-muted text-center mb-2">Repositories</h3>} */}
            <div className="repos">
                <div className="row">
                   {
                       repos && repos.map((repo) =>(
                        <Cards repos={repo} key={repo.id}/>
                       ))
                   }
                </div>
            </div>
        </div>
    )
}

export default UserRepos
