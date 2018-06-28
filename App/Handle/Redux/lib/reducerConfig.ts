const store = require('react-native-simple-store');

export const createReducer = (initialState: any, handlers: any) => {
  return function reducer (state: any = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}

export const checkLocalStoreToRedux = async (storeRedux: any, keyStoreNew: string, action: any, initData: any) => {
  let data = store.get(keyStoreNew);
  let typeOfData = typeof(initData);
  console.log(data);
  if (typeOfData === 'string' || typeOfData === 'number') {
    data && data !== initData && storeRedux.dispatch(action(data));
  } else if (typeOfData === 'boolean') {
    data === true && storeRedux.dispatch(action(data));
  } else if (typeOfData === 'object') {
    if (Array.isArray(data)) {
      data === null 
        ? storeRedux.dispatch(action(initData))
        : data.length > 0 && storeRedux.dispatch(action(data))
    } else {
      typeof (data) === 'object' && storeRedux.dispatch(action(data));
    }
  }
}
