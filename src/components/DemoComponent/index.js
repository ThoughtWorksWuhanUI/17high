import React from 'react';
import { render } from 'react-dom';
import classNames from 'classNames';
import css from './DemoComponent.scss';


class DemoComponent extends React.Component {
	render () {
		return <p className={classNames('transition')}></p>;
	}
}

export default DemoComponent;