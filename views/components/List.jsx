import React, { Component, PropTypes } from 'react';
import './List.css';

class List extends Component {
	constructor (properties) {
		super(properties);

		this.state = {
			active: false
		}

		this.onTab = this.onTab.bind(this);
	}

	onTab (event) {
		let { index } = event.target.dataset;
debugger
		this.props.onTab(index);
		event.preventDefault();
	}

	items (name) {
		let { items } = this.props;

		return items.map(({ index, title, incognito, favIconUrl }, key) => {
			return (
				<li className={ name } key={ key }>
					<a className={ `${name}-link ${ name }-incognito_${ incognito }` }
					   onClick={ this.onTab }
					   data-index={ index }
					   href="#"
					>

						<img className={ `${name}-icon` } src={ favIconUrl } alt="" />
						<span className={ `${name}-text` }> { title } </span>
					</a>
				</li>
			);
		});
	}

	render () {
		return <div className="tg-list">
			{ this.items('tg-list__item') }
		</div>;
	}
}

List.propTypes = {
	onTab: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired
}

export default List;
