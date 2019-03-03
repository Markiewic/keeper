import { CART } from './types';

export const addToCart = (id) => dispatch => {
    dispatch({
        type: CART.ADD,
        payload: id
    });
}

export const removeFromCart = (id) => dispatch => {
    dispatch({
        type: CART.REMOVE,
        payload: id
    });
}