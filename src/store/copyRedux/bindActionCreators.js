/**
 * bindActionCreators
 * 把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象。
 * 同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们
 */


function bindActionCreator(creator, dispatch) {
  return (...arg) => dispatch(creator(...arg))
}

function bindActionCreators(creators, dispatch) {
  let obj = {}
  Object.keys(creators).forEach(key => {
    obj[key] = bindActionCreator(creators[key], dispatch)
  })
  return obj
}

export default bindActionCreators;