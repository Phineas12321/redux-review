const initialState = {
    title: '',
    poster: '',
    westenscale: null,
    movies: []
}

const SET_MOVIE_INFO = 'SET_MOVIE_INFO'

export function setMovieInfo(title, poster, westenscale){
    return {
        type: SET_MOVIE_INFO,
        payload: {title, poster, westenscale}
    }
}

function moviesReducer(state = initialState, action){
    switch(action.type){
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default moviesReducer