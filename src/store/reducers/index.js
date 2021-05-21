import { SET_DATA } from '../actions';
const initialState = {
  mangaList: []    
};

export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
            return {
                ...state,
                mangaList: action.mangaData
            };
    default:
        return(state);
}
}