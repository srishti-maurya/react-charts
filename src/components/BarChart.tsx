import ReactECharts from 'echarts-for-react';
import { ChartProps, Option } from '../types/type';

export const BarChart = ({ data }: ChartProps): JSX.Element => {
  const allAlcoholData: number[] = data.map((ele): number => ele['Alcohol']);
  // all unique val of alcohols
  const alcoholData: number[] = [...new Set<number>(allAlcoholData)];
  // data filtered as per alcohol's class
  const classWiseMalicAcid = alcoholData.map((val) =>
    data.filter((ele) => ele['Alcohol'] === val).map((ele) => ele['Malic Acid'])
  );

  const calculateAverage = (arr: number[]): number => {
    const avg: string = (
      arr.reduce((acc, curr) => acc + curr, 0) / arr.length
    ).toFixed(2);
    return parseFloat(avg);
  };

  const averageMalicAcid: number[] = classWiseMalicAcid.map((val): number =>
    calculateAverage(val)
  );

  const option: Option = {
    xAxis: {
      type: 'category',
      data: alcoholData,
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
