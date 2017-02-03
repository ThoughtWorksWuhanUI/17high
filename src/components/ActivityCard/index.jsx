import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { smartMoment } from '../../utils/moment';
import styles, { container, image, information, enrollment } from './ActivityCard.scss';

const ActivityCard = ({ id, title, imageUrl, location, date, sponsor, customers }) => (
  <li className={classNames(container)}>
    <Link to={`/activity/${id}`}>
      <div className={classNames(image)}>
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <div className={classNames(information)}>
        <h3>{ title }</h3>
        <div className={classNames(styles.date)}>
          {smartMoment(date, 'YYYY-MM-DD HH:mm:ss')}
        </div>
        <div className={classNames(styles.location)}>
          {location}
        </div>
        <div className={classNames(styles.sponsor)}>
          {sponsor}
        </div>
        <div className={classNames(enrollment)}>
          {customers.length}
        </div>
      </div>
    </Link>
  </li>
);

ActivityCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  sponsor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  customers: PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

export default ActivityCard;
