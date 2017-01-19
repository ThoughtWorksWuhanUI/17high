import React from 'react';
import { render } from 'react-dom';
import DemoComponent from './components/DemoComponent';

class App extends React.Component {
	render () {
		return <DemoComponent/>;
	}
}

render(<App/>, document.getElementById('app'));