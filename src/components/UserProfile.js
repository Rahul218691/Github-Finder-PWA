import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers,faMapMarkerAlt,faFolder} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

const UserProfile = () => {

    const {userInfo} = useSelector(state=>state.userDetails);

    return (
        <>
            <div className="user-avatar">
                <img 
                src={userInfo && userInfo.avatar_url}
                alt="" className="img-fluid rounded-circle img_class"/>
            </div>
            <div className="text-muted text-center mt-2">
                <strong className="">{userInfo && userInfo.login}</strong><br/>
                {userInfo && <div className="git-stats">
                <FontAwesomeIcon icon={faUsers}/> {userInfo ? userInfo.followers : 0} followers / {userInfo ? userInfo.following : 0} following
                <p>
                    <FontAwesomeIcon icon={faFolder}/> {userInfo ? userInfo.public_repos : 0} Public Repos
                </p>
                </div>}
                <div className="workingstats">
                    <p>{userInfo && userInfo.company}</p>
                    {userInfo && <> <FontAwesomeIcon icon={faMapMarkerAlt}/> <span>{userInfo && userInfo.location}</span> </>}
                </div>
            </div>
        </>
    )
}

export default UserProfile;
