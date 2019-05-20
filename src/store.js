import {createStore} from 'redux'

const initialState = {
    username: '',
    favoriteNumber: null
}

export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const UPDATE_FAVORITE_NUMBER = 'UPDATE_FAVORITE_NUMBER'

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return {
                ...state, username: action.username
            }
        case UPDATE_FAVORITE_NUMBER:
            return {
                ...state, favoriteNumber: action.favoriteNumber
            }
        default:
        return state
    }
}

export default createStore(reducer)