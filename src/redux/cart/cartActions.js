import * as cartTypes from './cartTypes';

export const toggleShowCart = () => ({
	type: cartTypes.TOGGLE_SHOW_CART,
});

export const addItemAction = (item) => ({
	type: cartTypes.ADD_ITEM,
	payload: item,
});
