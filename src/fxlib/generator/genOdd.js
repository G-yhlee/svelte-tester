import { genInfinity } from "./genInfinity"
import { genLimit } from "./genLimit"




export function * genOdd(l){
    for (const a of genLimit(l,genInfinity(1))  ){
        if(a % 2 ) yield a;
    }
}