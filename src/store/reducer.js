import State from './state'
export default  (preState = State,action)=>{
    let newData =JSON.parse(JSON.stringify(preState))
    let {type,params} = action
    console.log(params)
    switch (type) {
        case "CHANGE_MODELSTATE":
            newData.modelState=!newData.modelState
            break;
    
        default:
            break;
    }

    return newData
}