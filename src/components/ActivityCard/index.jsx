import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import moment from 'moment';
import { smartMoment } from '../../utils/moment';
import styles, { container, image, description, enrollment, join } from './ActivityCard.scss';


const renderDate = (startDate, endDate) => {
  if (moment(endDate, 'YYYY-MM-DD HH:mm:ss').isBefore(moment())) {
    return smartMoment(startDate, 'YYYY-MM-DD HH:mm:ss');
  }
  return `${smartMoment(startDate, 'YYYY-MM-DD HH:mm:ss')} ~ ${smartMoment(endDate, 'YYYY-MM-DD HH:mm:ss')}`;
};

const ActivityCard = ({ id, title, imageUrl, location, startDate, endDate, sponsor, customers, onClickJoin }) => (
  <div className={classNames('box', container)}>
    <article className="media">
      <div className={classNames('media-left', image)}>
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <div className={classNames('media-right', description)}>
        <h3 className={styles.title}>{ title }</h3>
        <div className={styles.date}>{`时间: ${renderDate(startDate, endDate)}`}</div>
        <div className={styles.location}>{`地点: ${location}`}</div>
        <div className={styles.sponsor}>{`发起: ${sponsor}`}</div>
        <div className={enrollment}>{`${customers.length}人参与`}</div>
        <div className={join}>
          <Link to={`/activity/${id}`} className="button is-primary" activeStyle={{ color: 'red' }}>详情</Link>
          <button className="button is-danger is-pulled-right" onClick={() => onClickJoin(id)}>
            立即加入
          </button>
        </div>
      </div>
    </article>
  </div>
);

ActivityCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  location: PropTypes.string.isRequired,
  sponsor: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  customers: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  onClickJoin: PropTypes.func.isRequired,
};

ActivityCard.defaultProps = {
  imageUrl: 'http://placehold.it/150x200',
};

export default ActivityCard;
