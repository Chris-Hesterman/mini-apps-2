import React from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
import { checkProps } from '../testUtils.js';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chart from 'chart.js';
import canvas from 'canvas';
import App from '../client/src/components/App.jsx';
import CryptoChart from '../client/src/components/CryptoChart.jsx';

Enzyme.configure({ adapter: new Adapter() });

const response = {
  data: {
    bpi: {
      '2018-02-22': 9830.4263,
      '2018-02-23': 10149.4625,
      '2018-02-24': 9682.3825
    },
    dis:
      'This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.'
  }
};

describe('CryptoChart component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        bpi: { testValue: 7777 },
        dis: 'test disclaimer string'
      };
      const unExpectedProps = {
        bpi: 'badprop',
        dis: ['test disclaimer string']
      };

      const propsError = checkProps(CryptoChart, expectedProps);
      const badPropsError = checkProps(CryptoChart, unExpectedProps);

      expect(propsError).toBe(undefined);
      expect(badPropsError).not.toBe(undefined);
    });
  });
});
