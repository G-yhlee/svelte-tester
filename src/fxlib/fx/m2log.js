const { curry }  = require ("./curry");

module.exports.m2log = curry(({m1,m2},data)=>{
    console.log(m1,m2,data)
    return data
})