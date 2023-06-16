const initialState = {
  count: 0,
};

export function countingReducer(state = initialState, action: any) {
  switch (action.type) {
    case "push": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
}
