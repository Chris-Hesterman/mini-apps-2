import React from 'react';
import PropTypes from 'prop-types';
import { checkProps } from '../testUtils/utils.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from '../client/src/components/ListItem/ListItem.jsx';
import { findByTestAttr } from '../testUtils/utils.js';

Enzyme.configure({ adapter: new Adapter() });

describe('ListItem component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        eventData: [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }],
        currentQuery: 'Test Query',
        event: { date: 23, description: 'test historical event' }
      };
      const propsError = checkProps(ListItem, expectedProps);

      expect(propsError).toBe(undefined);
    });
  });

  describe('Snapshot test', () => {
    const event = {
      date: '-297',
      description:
        'Demetrius Poliorcetes returns to Greece with the aim of becoming master of Macedonia. While Demetrius is in Greece, Lysimachus seizes his possessions in Asia Minor.',
      lang: 'en',
      category1: 'By place',
      category2: 'Greece',
      granularity: 'year'
    };

    it('should render correctly', () => {
      const tree = renderer.create(<ListItem event={event} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
