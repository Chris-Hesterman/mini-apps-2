import React from 'react';
import PropTypes from 'prop-types';
import { checkProps } from '../testUtils/utils.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from '../client/src/components/List/List.jsx';
import { findByTestAttr } from '../testUtils/utils.js';

Enzyme.configure({ adapter: new Adapter() });

describe('List component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        eventData: [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }],
        currentQuery: 'Test Query',
        edit: () => 5 + 5
      };
      const propsError = checkProps(List, expectedProps);

      expect(propsError).toBe(undefined);
    });
  });
});
