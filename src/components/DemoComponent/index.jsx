import React from 'react';
import classNames from 'classnames';
import styles from './DemoComponent.scss';

const DemoComponent = () =>
  <p className={classNames(styles.transition)}>Hi</p>;

export default DemoComponent;
