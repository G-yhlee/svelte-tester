import { curry } from "./curry";


export const filter = curry((f,iter) => {
    let res = [];
    for(const a of iter) {
        if(f(a)) res.push(a);
    }
    return res;
})