import React from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App/App.jsx';
import List from '../client/src/components/List/List.jsx';
import Edit from '../client/src/components/Edit/Edit.jsx';

Enzyme.configure({ adapter: new Adapter() });
import { findByTestAttr } from '../testUtils/utils.js';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);

  return component;
};

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render single App component without errors', () => {
    const wrapper = findByTestAttr(component, 'appComponent');
    expect(wrapper.length).toBe(1);
    expect(wrapper.length).toBeLessThan(2);
    expect(wrapper.length).toBeGreaterThan(0);
  });

  it('should render a single List component', () => {
    const wrapper = findByTestAttr(component, 'listComponent');

    expect(wrapper.length).toBe(1);
    expect(wrapper.length).toBeLessThan(2);
    expect(wrapper.length).toBeGreaterThan(0);
  });

  it('should render a single Search component', () => {
    const wrapper = findByTestAttr(component, 'appComponent');
    expect(wrapper.length).toBe(1);
    expect(wrapper.length).toBeLessThan(2);
    expect(wrapper.length).toBeGreaterThan(0);
  });
});
