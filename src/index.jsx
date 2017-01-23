import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './components/DemoComponent';

// const App = () => <DemoComponent />;
const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <App />
  </AppContainer>
  , rootEl);

// activates Webpack's HotModuleReload
if (module.hot) {
  module.hot.accept('./components/DemoComponent', () => {
    const NextApp = require('./components/DemoComponent').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
