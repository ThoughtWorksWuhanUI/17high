import React from 'react';
import { render } from 'react-dom';
import ActivityCard from './components/ActivityCard';

const activity = {
  id: 1,
  title: 'activity',
};

const App = () => <ActivityCard activity={activity} />;

render(<App />, document.getElementById('app'));
