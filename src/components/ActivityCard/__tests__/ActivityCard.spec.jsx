import React from 'react';
import { shallow } from 'enzyme';
import ActivityCard from '../index';

jest.dontMock('../index');

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    const activity = {
      id: 1,
      title: '看电影',
      imageUrl: 'https://img3.doubanio.com/view/event_poster/plarge/public/a75d83b5dd5eb65.jpg',
      location: '武汉办公室',
      date: '2017-12-31 13:59:59',
      sponsor: 'ThoughtWorks',
      customers: [1, 2],
    };

    expect(shallow(<ActivityCard {... activity}/>).contains(<p className="transition">Hi</p>)).toBe(true);
  });
});
