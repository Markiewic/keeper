import { PRODUCTS } from './types';

const mock = [
    {
        id: 1,
        name: "Toasts",
        description: "Toast is a form of bread that has been browned by exposure to radiant heat.",
        cost: 1
    },
    {
        id: 2,
        name: "Milk",
        description: "Milk is a nutrient-rich, white liquid food produced by the mammary glands of mammals.",
        cost: 2
    },
    {
        id: 3,
        name: "Cheese",
        description: "Cheese is a dairy product derived from milk that is produced in a wide range of flavors, textures, and forms by coagulation of the milk protein casein.",
        cost: 4
    }
];

export const fetchProducts = () => dispatch => {
    dispatch({
        type: PRODUCTS.CONTAIN,
        payload: mock
    });
}

export const addProduct = (item) => dispatch => {
    dispatch({
        type: PRODUCTS.ADD,
        payload: item
    });
}

export const removeProduct = (id) => dispatch => {
    console.log("action", id)
    dispatch({
        type: PRODUCTS.REMOVE,
        payload: id
    });
}