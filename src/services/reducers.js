const initialState = {
  infoComics: []
};
function rootReducer(store = initialState, action) {
  console.log(store, action)
  switch(action.type){
    case 'ADD':
      const infoComics = [...store.infoComics]
      const found = infoComics.find(info => {
        return info.comicId === action.payload.comicId
      })
      if(found === undefined) {
        infoComics.push(action.payload)
      }else {
        found.rate = action.payload.rate
      }
      return {infoComics};
    default:
      return store;
  }
};
export default rootReducer;
