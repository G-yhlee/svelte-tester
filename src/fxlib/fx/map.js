import { curry } from "./curry";
export const map = curry((f,iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a))
    }
    return res;
})

// map(p => ({…p, user_id: 1}))