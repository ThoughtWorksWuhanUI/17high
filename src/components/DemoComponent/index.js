import React from 'react';
import { render } from 'react-dom';
import classNames from 'classNames';
import styles from './DemoComponent.scss';


class DemoComponent extends React.Component {
	render () {
		return <p className={classNames(styles.transition)}></p>;
	}
}

export default DemoComponent;