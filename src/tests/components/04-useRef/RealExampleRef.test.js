import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Test on <ReaExampleRef />', () => {
  const wrapper = shallow(<RealExampleRef />);

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('should show <MultipleCustomHooks /> component', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
