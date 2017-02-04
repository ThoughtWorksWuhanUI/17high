import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { smartMoment } from '../../utils/moment';
import styles, { container, image, description, enrollment } from './ActivityCard.scss';

const ActivityCard = ({ id, title, imageUrl, location, date, sponsor, customers }) => (
  <li key={id} className="box">
    <Link to={`/activity/${id}`}>
      <div className={image}>
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <div className={description}>
        <h3>{ title }</h3>
        <div className={styles.date}>{`时间: ${smartMoment(date, 'YYYY-MM-DD HH:mm:ss')}`}</div>
        <div className={styles.location}>{`地点: ${location}`}</div>
        <div className={styles.sponsor}>{`发起: ${sponsor}`}</div>
        <div className={enrollment}>{`参加人数: ${customers.length}`}</div>
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
