import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ActivityList from '../index';
import ActivityCard from '../../ActivityCard/index';

jest.dontMock('../index');

describe('Activity List', () => {
  const activities = [{
    id: 1,
    title: '看电影',
    location: '武汉办公室',
    startDate: '2017-12-31 13:59:59',
    endDate: '2017-12-31 13:59:59',
    sponsor: 'ThoughtWorks',
    customers: [1, 2],
    onClickJoin: (id) => {
      console.log(id);
    },
  }, {
    id: 2,
    title: '看电影',
    location: '武汉办公室',
    startDate: '2017-12-31 13:59:59',
    endDate: '2017-12-31 13:59:59',
    sponsor: 'ThoughtWorks',
    customers: [1, 2],
    onClickJoin: (id) => {
      console.log(id);
    },
  }];

  let onClickJoinActivity;
  let activityList;

  beforeEach(() => {
    onClickJoinActivity = jest.fn();
    activityList = mount(<ActivityList activities={activities} onClickJoinActivity={onClickJoinActivity} />);
  });

  it('should render two activity card ', () => {
    expect(activityList.find(ActivityCard)).to.have.length(2);
  });

  it('should trigger onClickJoinActivity when click on join button ', () => {
    activityList.find(ActivityCard).at(0).find('.button.is-danger').simulate('click');
    expect(onClickJoinActivity.mock.calls.length).to.equal(1);
  });
});
