export type Data = {
  Alcohol: number;
  Ash: number;
  Magnesium: number;
  Flavanoids: number;
  Proanthocyanins: String;
  Hue: number;
  Unknown: number;
  'Malic Acid': number;
  'Alcalinity of ash': number;
  'Total phenols': number;
  'Nonflavanoid phenols': number;
  'Color intensity': number;
  'OD280/OD315 of diluted wines': number;
};

export type ChartProps = {
  data: Data[];
};

export type Option = { xAxis: {}; yAxis: {}; series: any[]; tooltip: {} };

export type Value = { count: number; sum: number; avg: number };
