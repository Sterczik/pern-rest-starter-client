import React from 'react';
import { shallow } from 'enzyme';
import { TodosPage } from './index';

test('should render TodosPage correctly', () => {
  const wrapper = shallow(<TodosPage />);
  expect(wrapper).toMatchSnapshot();
});
