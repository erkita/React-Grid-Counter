export const click = (count, x, y) => {
    return {
        type: "click",
        count: count,
        x: x,
        y: y
    };
};