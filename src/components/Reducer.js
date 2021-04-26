const Reducer = (state, {type, payload}) => {
    switch (type) {
        case "SET_GOODS":
            return {...state, goods: payload || [], loading: false};
        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex(el => el.id === payload.id);
            let orders = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                orders = [...state.order, newItem];
            } else {
                orders = state.order.map((el, index) => {
                    if (index === itemIndex) {
                        return {
                            ...el,
                            quantity: el.quantity + 1
                        }
                    } else {
                        return el;
                    }
                });
            }
            return {
                ...state,
                order: orders
            };
        }
        case "REMOVE_FROM_BASKET":
            return {...state, order: state.order.filter(el => el.id !== payload.id)};
        case "INC_QUANTITY":
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1
                        }
                    } else {
                        return el;
                    }
                })
            };
        case "DEC_QUANTITY":
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        return {
                            ...el,
                            quantity: (el.quantity - 1) >= 0 ? (el.quantity - 1) : 0
                        }
                    } else {
                        return el;
                    }
                })
            };
        case "TOGGLE_BASKET":
            return {...state, isBasketShow: !state.isBasketShow};
        default:
            return state;
    }
};

export default Reducer;