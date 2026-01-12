export const doIncrement = (count) => {

    return {
        type: 'increment',
        payload: count

    }
}

export const testReducer = (state=0, action) =>{
 return state;
}

const  counterReducer = (state=1, action)=> {

    if (action.type === "increment")
    {  console.log("increment called");
        return  state + action.payload
    }
    else if (action.type === "decrement"){
        console.log("decrement called");
        return state -action.payload ;
    }
    return state;
};  

export default counterReducer;