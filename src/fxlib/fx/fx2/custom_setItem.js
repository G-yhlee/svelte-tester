const { curry }  = require ("../curry");

module.exports.custom_setItem = curry(({user_id,channelId,date},iter)=>{
    if ( iter.findIndex(i=>i.user_id==user_id) > -1 ) return iter
    iter.push({user_id,channelId, date})
    return iter;
  })