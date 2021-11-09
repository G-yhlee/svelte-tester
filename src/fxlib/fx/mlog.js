const { curry }  = require ("./curry");

module.exports.mlog = curry((msg,data)=>{
    console.log(msg,data)
    return data
})