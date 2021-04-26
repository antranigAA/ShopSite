import {createContext, useReducer} from "react";
import Reducer from "./components/Reducer";

export const ShopContext = createContext();

const ContextState = ({children}) => {

    const initialState = {
        goods:[],
        loading:true,
        order:[],
        isBasketShow: false
    };

    const  [value, dispatch] = useReducer(Reducer, initialState);

    value.removeFromBasket = (itemId) => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            payload:{id: itemId}
        });
    }

    value.addToBasket = (item) => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload:item
        });
    }

    value.incQuantity = (itemId) => {
        dispatch({
            type:"INC_QUANTITY",
            payload: {id: itemId}
        });
    }

    value.decQuantity = (itemId) => {
        dispatch({
            type:"DEC_QUANTITY",
            payload: {id: itemId}
        });
    }

    value.handleBasketShow = () => {
        dispatch({
            type: "TOGGLE_BASKET",
        });
    }

    value.setGoods = (data) => {
        dispatch({
            type:"SET_GOODS",
            payload:data
        });
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}


export default ContextState;



