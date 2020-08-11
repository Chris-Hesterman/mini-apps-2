import React from 'react';
import PropTypes from 'prop-types';
import { checkProps } from '../testUtils/utils.js';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Edit from '../client/src/components/Edit/Edit.jsx';

Enzyme.configure({ adapter: new Adapter() });
import { findByTestAttr } from '../testUtils/utils.js';

// const setUp = (props = {}) => {
//   const component = shallow(<Edit {...props} />);

//   return component;
// };

describe('Edit component', () => {
  // let component;
  // beforeEach(() => {
  //   const props = (component = setUp());
  // });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        done: () => 2 + 2,
        eventData: [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }],
        save: () => 4 / 2
      };

      const propsError = checkProps(Edit, expectedProps);
      expect(propsError).toBe(undefined);
    });
  });
});
