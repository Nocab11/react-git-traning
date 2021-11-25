// Полученная информация с api гитхаба о репозитории

// Пример с count action
// const SET_COUNT = "SET_COUNT";
const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";

// Начальное состояние. Обрабатываем момент подгрузки данных
const defaultState = {
    items: [], // полученный с апи гитхаба репозиторий
    isFetching: true, // Когда получили данные с api гитхаба
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    isFetchError: false
    // count: 0
}

// Создадим функцию, которая отвечает за репозиторий. Принимает состояние и экшен
export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        // case SET_COUNT:
        //     return {
        //         ...state,
        //         count: action.payload
        //     }
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload
            }
        default: return state
    }
}

// Создадим функцию actionCreator
// export const setCount = (count) => ({type:SET_COUNT, payload: count})
export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})
export const setFetchError = (bool) => ({type: SET_FETCH_ERROR, payload: bool})