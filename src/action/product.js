
import { notificationMessage } from "../helpers/notification"
import { fechApi } from "../service/fech"
import { types } from "../types/types"
import { startSetLoading, startSetRemoveLoading } from "./ui"

export const startCreateProduct = (name , price) => {

    return async (dispatch) => {
        dispatch(startSetLoading())

        try {
            const body = await fechApi('product' , {name , price} , 'POST') 
            const resp = await body.json()

            if(resp.ok) {
                dispatch(createProduct({
                    id : resp.id,
                    name : resp.name
                }))

                notificationMessage('Succes' , 'product created successfully' , 'success')
                dispatch(startSetRemoveLoading())

            }else{

                notificationMessage('Error' , resp.message , 'danger')
                dispatch(startSetRemoveLoading())
            }

        } catch (error) {

            dispatch(startSetRemoveLoading())
        }
    }
}

export const startLoadeProduct = () => {
    return async (dispatch) => {

       dispatch(startSetLoading())

        try {
            const body = await fechApi('product')
            const resp = await body.json()

            if(resp.ok) {
                dispatch(loadedProduct(resp.product))
                dispatch(startSetRemoveLoading())
            }else {
                notificationMessage('Error' , resp.message , 'danger')
                dispatch(startSetRemoveLoading())
            }

        } catch (error) {
            console.log(error);
            dispatch(startSetRemoveLoading())
        }

    }
}

export const startDeleteProduct = (product , id) => {
    
    return async (dispatch) => {

        dispatch(startSetLoading())
       
        try {
            const body = await fechApi(`product/${id}` , product , 'DELETE')
            const resp = await body.json()
    
            if(resp.ok) {
                dispatch(deleteProduct(product))
            }else {
                notificationMessage('Error' , resp.message , 'danger')
            }

            dispatch(startSetRemoveLoading())

        } catch (error) {
            dispatch(startSetRemoveLoading())
            console.log(error);
        }

    }
}

export const startEditProduct = (product) => {

    return async (dispatch , getState) => {

        dispatch(startSetLoading())

        const {_id} = getState().product.productActive

        try {
            const body = await fechApi(`product/${_id}` , product , 'PUT')
            const resp = await body.json()

            if (resp.ok) {
                dispatch(editProduct(product))
                dispatch(startSetRemoveLoading())
            }


            else {
                notificationMessage('Error' , resp.message , 'danger')
                dispatch(startSetRemoveLoading())
            }

        } catch (error) {
            console.log(error);
            dispatch(startSetRemoveLoading())
        }
    }

}

export const setProductActive = (product) => ({
    type : types.productActive,
    payload : product
})

const loadedProduct = (product) => ({
    type : types.productLoaded,
    payload :  product
})

const createProduct = (product) => ({
    type : types.productCreate,
    payload :  product
})
const deleteProduct = (product) => ({
    type:types.productDelete,
    payload : product
})
const editProduct = (product) => ({
    type : types.productEdit,
    payload : product,
})