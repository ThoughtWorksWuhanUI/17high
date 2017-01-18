import React from 'react';
import { render } from 'react-dom';
import css from './index.scss';


class App extends React.Component {
	render () {
		return <p className='red'> Hello React!</p>;
	}
}

render(<App/>, document.getElementById('app'));