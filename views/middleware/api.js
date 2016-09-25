import { items } from '../stabs';
import * as ActionTypes from '../actions';

export default store => next => action => {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	let { type, index } = action;

	switch (type) {
		case ActionTypes.SWITCH_TAB:
			console.log('index', index)
			if (process.env.NODE_ENV === 'production') {
				if (index) {
					chrome.tabs.highlight({ tabs: index }, items => {
						let error = chrome.runtime.lastError;

						if (error) {
							next({ type: ActionTypes.TAB_ID_EXCEPTION });
						}
						else {
							// action = actionWith({ items });
							next(action);
						}

			console.log('error', error)
			console.log('items', items)
					});
				}
				else {
					next({ type: ActionTypes.TAB_ID_NOT_FOUND });
				}
			}
			else {
				next(action);
			}

			break;

		default:
			if (process.env.NODE_ENV === 'production') {
				chrome.tabs.query({}, items => {
					action = actionWith({
						type: ActionTypes.ITEMS_LOADED,
						items
					});

					next(action);
				});
			}
			else {
				action = actionWith({
					type: ActionTypes.ITEMS_LOADED,
					items,
				});

				next(action);
			}
	}
};
