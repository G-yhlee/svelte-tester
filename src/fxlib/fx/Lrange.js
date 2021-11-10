export const L = {
    range: function *(l){
        let i = -1;
        while(i++ < l){
            yield i;
        }
    }
}