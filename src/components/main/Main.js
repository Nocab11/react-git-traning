import React, {useEffect, useState} from "react";
import './main.css';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";
import {Navigate, useParams, Link} from "react-router-dom";

const Main = () => {

    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const [searchValue, setSearchValue] = useState();
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)
    console.log('pages', pages)

    const objNanigation = useParams();
    console.log('objNanigation', objNanigation)


    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))

    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    if (isFetchError) {
        return <Navigate to="/error" />
    }

    return (
        <div>
            <div className="search">
                <input type="text" className="search-input" placeholder="input repo name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button onClick={searchHandler} className="search-btn">Search</button>
            </div>
            {
                isFetching === false
                ?
                repos.map(repo => <Repo key={repo.id} repo={repo} />)
                    :
                <div className="fetching">

                </div>
            }
            <div className="pages">
                {pages.map((page,index) => {
                    return (
                        // <span
                        //     key={index}
                        //     className={currentPage === page ? "current-page" : "page"}
                        //     onClick={() => dispatch(setCurrentPage(page))}
                        // >
                        //     {page}
                        // </span>
                        <Link to={`/post/${page}`} className={page} onClick={() => dispatch(setCurrentPage(page))}>{page}</Link>
                    )
                })}
            </div>


        </div>
    );
}

export default Main;