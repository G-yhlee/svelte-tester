import {fx} from '../fx'

let {curry,go,map,reduce} = fx

const sum = curry( (f,iter) => go(
    iter,
    map(f),
    reduce((a,b)=>a+b)
    )
)

export  const  custom_sum  = {
    sum,
    _total_quantity: sum(p=>p.quantity),
    _total_price : sum(p=>p.price * p.quantity)
}

