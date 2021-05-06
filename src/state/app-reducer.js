const SET_CHARACTERS_LIST = "app/SET_CHARACTERS_LIST";
const CLEAR_CHARACTER_LIST = "app/CLEAR_CHARACTER_LIST";
const SET_PORTION = "app/SET_PORTION";
const SET_NEXT_PAGE = "app/SET_NEXT_PAGE";
const SET_FETCH_MORE_VISIBILITY = "app/SET_FETCH_MORE_VISIBILITY";
const SET_SEARCH_ERROR = "app/SET_SEARCH_ERROR";

const initialState = {
    characters: [],
    portion: [],
    nextPage: '',
    isFetchMoreEnabled: true,
    searchError: ''
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS_LIST:
            return {...state, characters: [...state.characters, ...action.characters]};
        case CLEAR_CHARACTER_LIST:
            return {...state, characters: []};
        case SET_PORTION:
            return {...state, portion: action.portion};
        case SET_NEXT_PAGE:
            return {...state, nextPage: action.page};
        case SET_FETCH_MORE_VISIBILITY:
            return {...state, isFetchMoreEnabled: action.visibility};
        case SET_SEARCH_ERROR:
            return {...state, searchError: action.error}
        default:
            return state;
    }
}

//actions
export const setCharactersListAC = (characters) => ({type: SET_CHARACTERS_LIST, characters});
export const clearCharacterListAC = () => ({type: CLEAR_CHARACTER_LIST});
export const setPortionAC = (portion) => ({type: SET_PORTION, portion});
export const setNextPageAC = (page) => ({type: SET_NEXT_PAGE, page});
export const setFetchMoreVisibilityAC = (visibility) => ({type: SET_FETCH_MORE_VISIBILITY, visibility});
export const setSearchErrorAC = (error) => ({type: SET_SEARCH_ERROR, error});
