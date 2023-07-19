'use client'

import { createContext, useReducer } from "react";

export const Store = createContext<any>({});

interface Action {
    type: string;
    payload: any;
}

interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    amount: number;
}

interface State {
    bought: boolean;
    cart: {
        cartItems: CartItem[];
    };
    totalItems: number;
}

const initialState: State = {
    bought: false,
    cart: {
        cartItems: [],
    },
    totalItems: 0,
};

const reducer = (state: State, action: Action) => { 
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const existItem = state.cart.cartItems.find(
                (x: CartItem) => x.id === item.id
            );
            const cartItems = existItem
                ? state.cart.cartItems.map((x: CartItem) =>
                      x.id === existItem.id ? item : x
                  )
                : [...state.cart.cartItems, item];
            const totalItems = cartItems.reduce(
                (acc: number, curr: CartItem) => acc + curr.amount,
                0
            );
            return { ...state, cart: { cartItems }, totalItems };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: {
                    cartItems: state.cart.cartItems.filter(
                        (x: CartItem) => x.id !== action.payload
                    ),
                },
            };
        case "EMPTY_CART":
            return {
                ...state,
                cart: {
                    cartItems: [],
                },
            };
        case "BOUGHT":
            return {
                ...state,
                bought: action.payload,
            };
        default:
            return state;
    }
}

export function StoreProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}
