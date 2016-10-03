import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Components from '../components/Index';
import * as Actions from '../actions';

window.localStorage.debug = 'tg:*';

class Application extends Component {
	constructor (properties) {
		super(...arguments);

		let { store, actions } = this.props;

		actions.Tabs.showTabs(store.tabs);
	}

	render () {
		let { store, actions, view } = this.props;

		return <Components store={ store } view={ view } actions={ actions } />;
	}
}

Application.propTypes = {
	store  : PropTypes.object,
	view   : PropTypes.string,
	actions: PropTypes.object
};

let mapStateToProps = (state, properties) => {
	let {
		loadData: tabs,
		searchData: search,
		view
	} = state;

	return { store: { tabs, search }, view };
};

let mapDispatchToProps = dispatch => {
	let actions = {};

	for (let name of Object.keys(Actions)) {
		actions[name] = bindActionCreators(Actions[name], dispatch);
	}

	return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
