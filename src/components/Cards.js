import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faProjectDiagram,faCircle,faStar} from '@fortawesome/free-solid-svg-icons';
import gitcolors from '../gitcolors.json';

const Cards = ({repos}) => {

    var lang = repos.language;
	function getcolor(lang, gitcolors){
	  for(var [key,value] of Object.entries(gitcolors)){
	  if(lang === key){
	    return value
	    }
	  }
	}
	const Langcolor = getcolor(lang, gitcolors);

    return (
                <div className="col-md-6">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faProjectDiagram}/> {repos.name}
                        </div>
                        <div className="card-body">
                            <h6 className="card-title"><a href={repos.html_url} target="_blank" rel="noreferrer">{repos.html_url}</a></h6>
                            <p className="card-text">
                                <FontAwesomeIcon icon={faCircle} className="icon-block" style={{color:Langcolor}}/> {repos.language}
                                <span className="float-right"><FontAwesomeIcon icon={faStar}/> {repos.stargazers_count}</span>
                            </p>
                        </div>
                        </div>
                </div>
    )
}

export default Cards
