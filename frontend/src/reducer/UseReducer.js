






export const reducer = (state , action) =>{

    if(action.type ==="LOGGEDIN")
    {
        return action.payload;
    }
    return state;

}


