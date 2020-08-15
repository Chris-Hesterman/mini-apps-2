import React from 'react';
import PropTypes from 'prop-types';
import { checkProps } from '../testUtils/utils.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
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
});
