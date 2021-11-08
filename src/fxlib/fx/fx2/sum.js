import {fx} from '../fx'

let {curry,go,map,reduce} = fx

const sum = curry( (f,iter) => go(
    iter,
    map(f),
    reduce((a,b)=>a+b)
    )
)

sum.total_quantity = sum(p=>p.quantity)
sum.total_price = sum(p=>p.price * p.quantity)

export default sum

