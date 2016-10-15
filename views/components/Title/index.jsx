import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';

export default class Title extends Component {
	constructor (properties) {
		super(...arguments);

		this.state = {
			credentials: false
		}

		this.showCredentials =
			this.showCredentials.bind(this);
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	showCredentials (event) {
		let { actions, type } = this.props;

		let types = [
			ActionTypes.SHOW_TABS,
			ActionTypes.DISABLE_TABS
		];

		let active = types.includes(type);

		if (active) {
			actions.Layout.showCredentials();
		}
		else {
			actions.Tabs.showTabs();
		}

		this.setState({ credentials: active });

		event.preventDefault();
	}

	getTitle (type, store) {
		let title = [];

		switch (type) {
			case ActionTypes.SHOW_CREDENTIALS:
			case ActionTypes.SHOW_ERRORS:
			case ActionTypes.SHOW_DIALOG:
			case ActionTypes.ITEMS_LOCKED:
			case ActionTypes.SEARCH_TABS:
				title = [type, store.searchResults.length];
				break;

			default:
				title = [ActionTypes.SHOW_TABS, store.tabs.length];
		}

		let [ key, value ] = title;

		return chrome.i18n.getMessage(key.toLowerCase(), [ value ]);
	}

	render () {
		let { store, type } = this.props;

		return <div className="tg-title">
					{ this.getTitle(type, store) }

					<div className="tg-icon tg-controls__more"
					     onClick={ this.showCredentials }> </div>
				</div>;
	}
}

Title.propTypes = {
	store: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

export default Title;
