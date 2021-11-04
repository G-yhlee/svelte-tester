export function * genLimit(l,iter){
    for(const a of iter) {
        yield a;
        if(a==l) return
    }
}