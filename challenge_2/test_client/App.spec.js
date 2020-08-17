import React from 'react';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'axios';
import Chart from 'chart.js';
import canvas from 'canvas';
import App from '../client/src/components/App.jsx';
import CryptoChart from '../client/src/components/CryptoChart.jsx';
import RangeInput from '../client/src/components/RangeInput.jsx';

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

describe('App', () => {
  const wrapper = shallow(<App />);

  it('Should render correctly', () => {
    expect(wrapper.find('.app').length).toBe(1);
  });

  it('Should render one RangeInput component', () => {
    expect(wrapper.find('.input').length).toBe(1);
  });

  it('Fetches data from server, using default range when none provided', () => {
    const wrapper = mount(<App />);

    mockAxios.get.mockImplementationOnce(() => {
      Promise.resolve(response);
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://127.0.0.1:3000/crypto?start=2020-03-01&end=2020-04-22'
    );
  });

  it('renders one and only one CryptoChart component only when data is received', () => {
    expect(wrapper.find('.chart').length).toBe(0);

    wrapper.setState({ data: response.data });

    expect(wrapper.find('.chart').length).toBe(1);
    expect(wrapper.find('.chart').length).toBeLessThan(2);
  });
});
