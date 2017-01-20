import React from 'react';
import { shallow, mount, render } from 'enzyme';
import DemoComponent from '../index';

jest.dontMock('../index');

describe("A suite", function () {
	it("contains spec with an expectation", function () {
		expect(shallow(<DemoComponent />).contains(<p className="transition"></p>)).toBe(true);
	});
});