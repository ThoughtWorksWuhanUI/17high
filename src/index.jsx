import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoComponent from './components/DemoComponent/';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <DemoComponent />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('app'));
