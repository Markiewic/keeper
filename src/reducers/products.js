import { PRODUCTS } from '../actions/types';

const initialState = {
    source: "none",
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS.CONTAIN:
            return {
                ...state,
                items: action.payload
            };
        case PRODUCTS.ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case PRODUCTS.REMOVE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}