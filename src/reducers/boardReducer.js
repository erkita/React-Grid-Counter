const initialState = [
    [0, 0],
    [0, 0]
];

export default function boardReducer(state = initialState, action) {
    switch(action.type) {
        case "click":
            let count = action.count;
            if (count === 0) {
                state[action.x][action.y] = 1;
            } else {
                state[action.x][action.y] = 0;
            }
            return [...state];
        default:
            return state;
    }
}