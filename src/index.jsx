import React from 'react';
import { render } from 'react-dom';
import DemoComponent from './components/DemoComponent';


const App = () => <DemoComponent />;

render(<App />, document.getElementById('app'));
