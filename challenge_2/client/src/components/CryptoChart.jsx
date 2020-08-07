import React from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

const StyledWrapper = styled.div`
  width: 800px;
  height: 400px;
`;

const StyledP = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
`;

class CryptoChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvasRef = React.createRef();
    this.makeChart = this.makeChart.bind(this);
  }

  makeChart() {
    const ctx = this.canvasRef.current;
    Chart.defaults.global.elements.point.borderColor = 'black';
    Chart.defaults.global.elements.point.borderWidth = 1;
    Chart.defaults.global.elements.point.pointStyle = 'circle';
    Chart.defaults.global.elements.point.radius = 0;
    Chart.defaults.global.elements.point.hitRadius = 8;
    let labels = Object.keys(this.props.bpi);
    let data = Object.values(this.props.bpi);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Bitcoin Value, USD',
            data: data,
            backgroundColor: ['rgba(255, 99, 132, 0.3)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 2,
            lineTension: 0
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, .2)'
              },
              ticks: {
                beginAtZero: true,
                fontColor: '#222'
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, .2)'
              },
              ticks: {
                fontColor: '#222'
              }
            }
          ]
        }
      }
    });
  }

  componentDidMount() {
    this.makeChart();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.makeChart();
    }
  }

  render() {
    return (
      <StyledWrapper>
        <canvas id="chart" ref={this.canvasRef}></canvas>
        <StyledP>{this.props.dis}</StyledP>
      </StyledWrapper>
    );
  }
}

export default CryptoChart;
