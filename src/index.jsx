import React from 'react';
import { render } from 'react-dom';
import ActivityList from './components/ActivityList';

const activities = [{
  id: 1,
  title: '看电影',
  location: '武汉办公室',
  startDate: '2017-12-31 13:59:59',
  endDate: '2017-12-31 13:59:59',
  sponsor: 'ThoughtWorks',
  customers: [1, 2],
  onClickJoin: (id) => { console.log(id); },
}, {
  id: 2,
  title: '看电影',
  location: '武汉办公室',
  startDate: '2017-12-31 13:59:59',
  endDate: '2017-12-31 13:59:59',
  sponsor: 'ThoughtWorks',
  customers: [1, 2],
  onClickJoin: (id) => { console.log(id); },
}];

const App = () => (
  <div className="container">
    <div className="columns">
      <div className="column is-7">
        <ActivityList activities={activities} onClickJoinActivity={(id) => { console.log(id); }} />
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
