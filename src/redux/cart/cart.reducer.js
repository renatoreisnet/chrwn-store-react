import CardActionsTypes from './card.types';
import { addItemToCart } from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CardActionsTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }
        case CardActionsTypes.ADD_ITEM :
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;