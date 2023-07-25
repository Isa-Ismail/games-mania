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

interface User {
  _id: string;
  username: string;
  email: string;
  country: string;
  city: string;
  phone: string;
  password: string;
  isAdmin: boolean;
  designation: string;
  isFaculty: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface State {
    authenticated?: boolean;
    user: User | null;
    token: string | null;
    bought: boolean;
    leaderboard?: any;
    cart: {
        cartItems: CartItem[];
    };
    totalItems: number;
    score: number;
    topic: string
}

const initialState: State = {
    authenticated: false,
    user: null,
    token: null,
    bought: false,
    leaderboard: null,
    cart: {
        cartItems: [],
    },
    totalItems: 0,
    score: 0,
    topic: 'game'
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
        case "SCORE":
            return {
            ...state,
                score: action.payload
        }
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
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
        case "LEADERBOARD":
            return {
                ...state,
                leaderboard: action.payload,
            };
        case "AUTHENTICATED":
            return {
                ...state,
                authenticated: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                authenticated: false,
                user: null,
                token: null,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload,
                authenticated: true
            }
        default:
            return state;
    }
}

export function StoreProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}
