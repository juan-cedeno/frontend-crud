import { types } from "../types/types"

const initialState = {
    loading : false,
}

export const uiReducer = (state = initialState , action) => {
    
    switch (action.type) {
        
        case types.uiLoadingSetLoading:
            return{
                ...state,
                loading : true
            }
        case types.uiLoadingRemoveSetLoading:
            return{
                ...state,
                 loading : false
            }       
    
        default:
            return state
    }

}
