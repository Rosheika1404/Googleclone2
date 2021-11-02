//where the data is going to live inside the initalstate
export const initialState = {
  term: null,
};

//when you want to change the data layer you need to dispatch an action 
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//state - the state of the data layer 
//action - whatever we're dispatching into the data layer
//reducer's job is to listen for any dspatched actions 
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
