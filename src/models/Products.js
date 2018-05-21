export default {
  namespace: 'products',
  state:[],
  reducers:{
    delete(state,{payload:id}){
      console.log('models'+id)
      return state.filter(item => item.id !== id)
    }
  }
}