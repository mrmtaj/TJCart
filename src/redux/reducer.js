

const  counterReducer = (state, action)=> {

    if (action.type === "increment")
    {  console.log("increment called");
        return  state + 1
    }
    else if (action.type === "decrement"){
        console.log("decrement called");
        return state -1 ;
    }
    return state;
};  

export default counterReducer;