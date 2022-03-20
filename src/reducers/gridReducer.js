export default function gridReducer(state = 0, action) {
    switch (action.count) {
        case 0:
            return state + 1;
        case 1:
            return state - 1;
        default:
            return state;
    }
}