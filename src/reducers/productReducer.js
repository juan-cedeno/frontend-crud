import { types } from "../types/types"


const initalState = {
    product:[],
    productActive : null,
}

export const productReducer = (state = initalState , action) => {
    
    switch (action.type) {
        
        case types.productCreate:
            return{
                ...state,
                product : [
                    ...state.product,
                    action.payload
                ],
            }
        case types.productLoaded:
            return{
                ...state,
                product : action.payload,
            } 
        case types.productDelete:
            return {
                ...state,
                product : [
                    ...state.product.filter(p => (
                        p._id !== action.payload._id
                    ))
                ]
            }
        case types.productActive:
            return{
                ...state,
                productActive : action.payload,
            }
        case types.productEdit:
            return{
                ...state,
                product : [
                    state.product.map( p => (
                        p._id === state.productActive._id ?  action.payload : p
                    ))
                ]
            }        
    
        default:
          return state
    }

}
