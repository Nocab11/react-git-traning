import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.css';
const Card = (props) => {

    const {username, reponame} = useParams();

    const [repo, setRepo] = useState({
        owner: {}
    });
    const [contributors, setContributors] = useState([]);
    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])
    console.log('username, reponame', username, reponame)
    console.log('card, repo', repo)
    return (
        <div>
            <Link to="/">На главную</Link>
            <div className="card">
                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
                <div key={index}>{index + 1}. {c.login}</div>
            )}
        </div>
    )
}

export default Card;