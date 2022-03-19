const initialState = {
    type: "unclicked",
    count: 0,
    bgColor: "white"
}

export default function gridReducer(state = initialState, action) {
    let currentCount = state.count;
    switch(action.type) {
        case "clicked":
            return {
                type: "unclicked",
                count: currentCount + 1,
                bgColor: "black"
            }
        case "unclicked":
            return {
                type: "clicked",
                count: currentCount - 1,
                bgColor: "white"
            }
        default:
            return state;
    }
}