import { CART } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CART.CONTAIN:
            return {
                ...state,
                items: action.payload
            };
        case CART.ADD:
            let items = [];
            if (state.items.find(item => item.id === action.payload)) {
                items = state.items.map(item => {
                    if (item.id !== action.payload)
                        return item;
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                });
            } else {
                items = [...state.items, { id: action.payload, quantity: 1 }];
            }
            return {
                ...state,
                items
            }
        case CART.REMOVE:
            items = [];
            if (state.items.find(item => item.id === action.payload)) {
                items = state.items.map(item => {
                    if (item.id !== action.payload)
                        return item;
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                });
            } else {
                items = [...state.items];
            }
            items = items.filter(item => item.quantity);
            return {
                ...state,
                items
            }
        case CART.CLEAR:
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
}