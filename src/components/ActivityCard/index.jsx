import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { smartMoment } from '../../utils/moment';
import styles, { container, image, description, enrollment } from './ActivityCard.scss';

const imagePlaceHolder = 'http://placehold.it/150x200';

const ActivityCard = ({
  id, title, imageUrl = imagePlaceHolder, location, date, sponsor, customers,
}) => (
  <div className="box">
    <article className={classNames('media', container)}>
      <div className={classNames('media-left', image)}>
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <div className={classNames('media-right', description)}>
        <h3>{ title }</h3>
        <div className={styles.date}>{`时间: ${smartMoment(date, 'YYYY-MM-DD HH:mm:ss')}`}</div>
        <div className={styles.location}>{`地点: ${location}`}</div>
        <div className={styles.sponsor}>{`发起: ${sponsor}`}</div>
        <div className={enrollment}>{`参加人数: ${customers.length}`}</div>
        <div>
          <Link to={`/activity/${id}`} className="button is-primary">详情</Link>
        </div>
      </div>
    </article>
  </div>
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
