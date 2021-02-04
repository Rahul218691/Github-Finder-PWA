import React from 'react'
import {Navbar} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const NavbarComp = ({dark,onUpdate}) => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faGithub} className="d-inline-block align-top" style={{fontSize:'30px'}}/>{' '}
           Github Users
            </Navbar.Brand>
            <div className="custom-control custom-switch ml-auto">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" value={dark} onChange={onUpdate}/>
                <label className="custom-control-label" htmlFor="customSwitch1"></label>
            </div>
        </Navbar>
        </>
    )
}

export default NavbarComp
