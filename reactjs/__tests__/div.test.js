import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Test', () => {
  it('Component Rendered', () => {
    const wrapper = shallow(<div />);
    expect(wrapper).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
