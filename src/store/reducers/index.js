import { SET_DATA, SET_MANGA } from '../actions';
const initialState = {
  mangaList: [],    
  mangaDetails: ''
};

export const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
            return {
                ...state,
                mangaList: action.mangaData
            };
    case SET_MANGA:
            return {
                ...state,
                mangaDetails: action.mangaDetails
            };
    default:
        return(state);
}
}