import * as cartTypes from './cartTypes';
import { addItemToCart } from './cartUtils';

const initialState = {
	hidden: true,
	cartItems: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case cartTypes.TOGGLE_SHOW_CART:
			return { ...state, hidden: !state.hidden };
		case cartTypes.ADD_ITEM:
			return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
		default:
			return state;
	}
};
