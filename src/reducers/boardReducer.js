const initialState = {
    type: "increment",
    totalCount: 0
}

export default function boardReducer(state = initialState, action) {
    let currentCount = state.totalCount;
    switch(action.type) {
        case "increment":
            return {
                type: "increment",
                totalCount: currentCount + 1,
            }
        case "decrement":
            return {
                type: "decrement",
                totalCount: currentCount - 1,
            }
        default:
            return state;
    }
}