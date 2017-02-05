import React from 'react';
import { render } from 'react-dom';
import ActivityCard from './components/ActivityCard';

const activity = {
  id: 1,
  title: '看电影',
  imageUrl: 'https://img3.doubanio.com/view/event_poster/plarge/public/a75d83b5dd5eb65.jpg',
  location: '武汉办公室',
  date: '2017-12-31 13:59:59',
  sponsor: 'ThoughtWorks',
  customers: [1, 2],
};

const App = () => (
  <div className="container">
    <div className="columns">
      <ActivityCard {... activity} />
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
