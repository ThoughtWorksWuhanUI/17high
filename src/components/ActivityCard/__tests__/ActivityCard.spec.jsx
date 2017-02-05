import React from 'react';
import { shallow } from 'enzyme';
import ActivityCard from '../index';

jest.dontMock('../index');

describe('Activity Card', () => {
  const activity = {
    id: 1,
    title: '看电影',
    location: '武汉办公室',
    startDate: '2017-12-31 13:59:59',
    endDate: '2017-12-31 13:59:59',
    sponsor: 'ThoughtWorks',
    customers: [1, 2],
    onClickJoin: jest.fn(),
  };

  let activityCard;

  beforeEach(function () {
    activityCard = shallow(<ActivityCard {... activity} />);
  });

  it('should render date range', () => {
    expect(activityCard.contains(<div className="date">时间: 2017-12-31(星期日) 下午 1:59:59 ~ 2017-12-31(星期日) 下午 1:59:59</div>)).toBe(true);
  });

  it('should render relative date', () => {
    const oldDateActivity = Object.assign(activity, {
      startDate: '2015-12-31 13:59:59',
      endDate: '2015-12-31 13:59:59',
    });
    activityCard = shallow(<ActivityCard {... oldDateActivity} />);
    expect(activityCard.contains(<div className="date">时间: 1 年前</div>)).toBe(true);
  });

  it('should call onClickJoin', () => {
    activityCard.find('.button.is-danger').simulate('click');
    expect(activity.onClickJoin.mock.calls.length).toBe(1);
  });
});
