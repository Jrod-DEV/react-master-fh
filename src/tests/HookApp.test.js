import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Tests on <HookApp /> component', () => {
  test('should show correctly', () => {

    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
    
  });
});
