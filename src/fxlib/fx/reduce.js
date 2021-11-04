import { curry } from "./curry";


export const reduce = curry((f,acc,iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value
    }
    for(const a of iter){
        acc = f(acc,a);
    }
    return acc;
})