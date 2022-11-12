import ReactECharts from 'echarts-for-react';
import { ChartProps, Option } from '../types/type';

export const ScatterPlot = ({ data }: ChartProps): JSX.Element => {
  const mergedData: number[][] = data.map((ele): number[] => [
    ele['Hue'],
    ele['Color intensity'],
  ]);

  const option: Option = {
    xAxis: {
      type: 'value',
      name: 'Color Intensity',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      type: 'value',
      name: 'Hue',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        symbolSize: 10,
        data: mergedData,
        type: 'scatter',
        itemStyle: {
          color: '#164e63',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
  };
  return (
    <div className="wrapper">
      <h2 className="title">Scatter Plot</h2>
      <p className="desc">
        Scatter plot drawn between “Color Intensity” on the horizontal axis and
        “Hue” on the vertical axis.
      </p>
      <ReactECharts option={option} />
    </div>
  );
};
