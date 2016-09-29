import * as ActionTypes from '../constants/ActionTypes';

export default {
	/**
	 * The data
	 *
	 * @param {Array} state
	 * @param {Object} action
	 * @returns {*}
	 */
	items (state = [], action) {
		let { type, items, error } = action;

		switch (type) {
			case ActionTypes.ITEMS_LOCKED:
				return state;

			case ActionTypes.SHOW_TABS:
				return items;

			default:
				return state;
		}
	}
};
