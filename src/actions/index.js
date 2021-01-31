import axios from 'axios';
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, LOAD_ITEMS, SORT_BY_PRICE, SORT_BY_AGE, FILTER_BY_TYPE, LOAD_NEW_PAGE, LOAD_EXACT_PAGE, LOAD_BRANDS } from './action-types/index-actions'

export const receiveItems = (payload) => {
    return {
        type: LOAD_ITEMS,
        items: payload
    }
}

export const receiveBrands = (payload) => {
    return {
        type: LOAD_BRANDS,
        brands: payload
    }
}

export const loadNewPage = (payload) => {
    return {
        type: LOAD_NEW_PAGE,
        items: payload
    }
}

export const loadExactPage = (payload) => {
    return {
        type: LOAD_EXACT_PAGE,
        items: payload
    }
}

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}
export const removeItem = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload
    }
}
export const subtractQuantity = (payload) => {
    return {
        type: SUB_QUANTITY,
        payload
    }
}
export const addQuantity = (payload) => {
    return {
        type: ADD_QUANTITY,
        payload
    }
}
export const sortByPrice = (payload) => {
    return {
        type: SORT_BY_PRICE,
        payload
    }
}
export const filterByPrice = (payload) => {
    return {
        type: SORT_BY_AGE,
        payload
    }
}
export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export const getItems = () => {
    return (dispatch) => {
        axios.get("http://localhost:3004/items")
            .then((res) => {
                dispatch(receiveItems(res.data
                ))
            })
            .catch((error) => {
                console.log("items Axios Error", error)
            })
    }
}

export const getBrands = () => {
    return (dispatch) => {
        axios.get("http://localhost:3004/companies")
            .then((res) => {
                dispatch(receiveBrands(res.data
                ))
            })
            .catch((error) => {
                console.log("companies Axios Error", error)
            })
    }
}