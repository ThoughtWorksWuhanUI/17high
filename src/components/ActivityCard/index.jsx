import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { localMoment, smartMoment } from '../../utils/moment';
import { container, image, information, date } from './ActivityCard.scss';

const ActivityCard = activity => (
  <li className={classNames(container)}>
    <Link to={`/activity/${activity.id}`}>
      <div className={classNames(image)}>
        <img src={activity.imageUrl} alt={`${activity.title}`}/>
      </div>
      <div className={classNames(information)}>
        <h3>{ activity.title }</h3>
        <div className={classNames(date)}>
          {localMoment('20170202', 'YYYYMMDD').fromNow()}
          {smartMoment('20170202', 'YYYYMMDD')}
        </div>
      </div>
    </Link>
  </li>
);

export default ActivityCard;
