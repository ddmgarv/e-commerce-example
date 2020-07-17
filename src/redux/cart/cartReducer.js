import { TOGGLE_SHOW_CART } from './cartTypes';

const initialState = {
	hidden: true,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_SHOW_CART:
			return { ...state, hidden: !state.hidden };

		default:
			return state;
	}
};
