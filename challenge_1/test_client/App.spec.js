import React from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App/App.jsx';
import List from '../client/src/components/List/List.jsx';
import Edit from '../client/src/components/Edit/Edit.jsx';
import Search from '../client/src/components/Search/Search.jsx';
import { findByTestAttr } from '../testUtils/utils.js';

Enzyme.configure({ adapter: new Adapter() });

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

  it('should render correctly', () => {
    const tree = renderer.create('<App />').toJSON();

    expect(tree).toMatchSnapshot();
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

  it('should render one Edit component when state.edit = true', () => {
    const wrapper = mount(<App />);

    wrapper.setState({ edit: true });
    expect(wrapper.find('.edit').length).toBe(1);
    wrapper.unmount(<App />);
  });

  it('should not render a List component when state.edit = true', () => {
    const wrapper = mount(<App />);

    wrapper.setState({ edit: true });
    expect(wrapper.find('.list').length).toBe(0);
    wrapper.unmount(<App />);
  });

  it('should only render pagination if events list length > 2', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.select').length).toBe(0);

    wrapper.setState({
      events: [
        {
          _id: 17,
          event: {
            date: '-297',
            description:
              'Fabius Maximus Rullianus becomes consul for the fourth time. He defeats the Samnites in a battle near Tifernum.',
            lang: 'en',
            category1: 'By place',
            category2: 'Roman Republic',
            granularity: 'year'
          },
          __v: 0
        },
        {
          _id: 18,
          event: {
            date: '-297',
            description:
              "Following Cassander's death from illness, Philip IV, Cassander's eldest son, succeeds his father as King of Macedon, but soon after coming to the throne suffers from a wasting disease and dies. Antipater, the next son, rules jointly with his brother Alexander V.",
            lang: 'en',
            category1: 'By place',
            category2: 'Greece',
            granularity: 'year'
          },
          __v: 0
        },
        {
          _id: 19,
          event: {
            date: '-297',
            description:
              'Demetrius Poliorcetes returns to Greece with the aim of becoming master of Macedonia. While Demetrius is in Greece, Lysimachus seizes his possessions in Asia Minor.',
            lang: 'en',
            category1: 'By place',
            category2: 'Greece',
            granularity: 'year'
          },
          __v: 0
        }
      ]
    });

    expect(wrapper.find('.selected').length).toBe(1);
    wrapper.unmount(<App />);
  });
});
