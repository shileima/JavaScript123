function bindActionCreator(actionCreator,dispatch){
  return function(){
    return dispatch(actionCreator.apply(this,arguments))
  }
}
export default function bindActionCreators(actionCreators,dispatch){
  if(typeof actionCreators == 'function'){
    return bindActionCreator(actionCreators,dispatch)
  }
  const bindActionCreators = {};
  for(const key in actionCreators){
    /* bindActionCreators[key] = function(){
      return dispatch(actionCreators[key]())
    } */
    bindActionCreators[key] = bindActionCreator(actionCreators[key],dispatch)
  }
  return bindActionCreators;
}