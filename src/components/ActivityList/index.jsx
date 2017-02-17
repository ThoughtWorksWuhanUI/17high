import React, { PropTypes } from 'react';
import ActivityCard from '../ActivityCard';
import { item } from './ActivityList.scss';

const ActivityList = ({ activities, onClickJoinActivity }) => (
  <ul>
    {activities.map(activity =>
      <li key={activity.id} className={item}>
        <ActivityCard
          {...activity}
          onClickJoin={() => onClickJoinActivity(activity.id)}
        />
      </li>,
    )}
  </ul>
);

ActivityList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onClickJoinActivity: PropTypes.func.isRequired,
};

export default ActivityList;
