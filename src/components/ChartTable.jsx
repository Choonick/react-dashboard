import React, { Component } from 'react';
import { Table, Icon, Checkbox } from 'semantic-ui-react';
// import axios from 'axios';
class ChartTable extends Component {
  state = {
    charts: []
  };

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //   const persons = res.data;
    //   this.setState({ persons });
    // });

    const mockdata = [
      {
        id: 1,
        chartName: '테스트',
        xAxis: '판매량',
        yAxis: '사람수',
        type: 'chart area',
        tag: ''
      },
      {
        id: 2,
        chartName: '테스트2',
        xAxis: '판매량',
        yAxis: '사람수',
        type: 'chart bar',
        tag: ''
      },
      {
        id: 3,
        chartName: '테스트3',
        xAxis: '판매량',
        yAxis: '사람수',
        type: 'chart line',
        tag: ''
      },
      {
        id: 4,
        chartName: '테스트4',
        xAxis: '판매량',
        yAxis: '사람수',
        type: 'chart pie',
        tag: ''
      }
    ];
    this.setState({ charts: mockdata });
  }

  render() {
    const { charts } = this.state;
    const chartList = charts.map(chart => (
      <Table.Row>
        <Table.Cell>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{chart.id}</Table.Cell>
        <Table.Cell>{chart.chartName}</Table.Cell>
        <Table.Cell>{chart.xAxis}</Table.Cell>
        <Table.Cell>{chart.yAxis}</Table.Cell>
        <Table.Cell>
          <Icon name={chart.type} size="large" />
        </Table.Cell>
        <Table.Cell>{chart.tag}</Table.Cell>
      </Table.Row>
    ));
    console.log(charts);
    return (
      <Table basic="very" size="large" textAlign="center" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>chart name</Table.HeaderCell>
            <Table.HeaderCell>X axis</Table.HeaderCell>
            <Table.HeaderCell>Y axis</Table.HeaderCell>
            <Table.HeaderCell>type</Table.HeaderCell>
            <Table.HeaderCell>tag</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{chartList}</Table.Body>
      </Table>
    );
  }
}

export default ChartTable;
