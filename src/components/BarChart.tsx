import ReactECharts from 'echarts-for-react';
import { ChartProps, Option, Value } from '../types/type';

export const BarChart = ({ data }: ChartProps): JSX.Element => {
  const calculateValues = (): {} => {
    let myalcohol: any = {};
    for (const val of data) {
      if (myalcohol[val['Alcohol']]) {
        myalcohol[val['Alcohol']] = {
          count: myalcohol[val['Alcohol']]['count'] + 1,
          sum: myalcohol[val['Alcohol']]['sum'] + val['Malic Acid'],
          avg: parseFloat(
            (
              (myalcohol[val['Alcohol']]['sum'] + val['Malic Acid']) /
              (myalcohol[val['Alcohol']]['count'] + 1)
            ).toFixed(2)
          ),
        };
      } else {
        myalcohol[val['Alcohol']] = {
          count: 1,
          sum: val['Malic Acid'],
          avg: 0,
        };
      }
    }
    return myalcohol;
  };
  const modifiedData = calculateValues();
  const alcohols = Object.keys(modifiedData);
  const values: Value[] = Object.values(modifiedData);
  const averageMalicAcid = values.map((ele) => ele.avg);

  const option: Option = {
    xAxis: {
      type: 'category',
      data: alcohols,
      name: 'Alcohol',
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
      name: 'Avg. Malic Acid',
    },
    series: [
      {
        data: averageMalicAcid,
        type: 'bar',
        barWidth: '40%',
        smooth: true,
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
        itemStyle: {
          color: '#164e63',
        },
        label: {
          show: true,
          position: 'inside',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
  };
  return (
    <div className="wrapper">
      <h2 className="title">Bar chart</h2>
      <p className="desc">
        Bar chart drawn showing the “Alcohol” category on the horizontal axis
        and the average of “Malic Acid” for each class on the vertical axis.
      </p>
      <ReactECharts option={option} />
    </div>
  );
};
