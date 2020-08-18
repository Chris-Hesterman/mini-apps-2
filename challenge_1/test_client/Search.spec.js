import React from 'react';
import PropTypes from 'prop-types';
import { checkProps } from '../testUtils/utils.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../client/src/components/Search/Search.jsx';
import { findByTestAttr } from '../testUtils/utils.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Search component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        send: () => 'send query'
      };
      const propsError = checkProps(Search, expectedProps);

      expect(propsError).toBe(undefined);
    });
  });
  describe('snapshot testing', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Search />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
