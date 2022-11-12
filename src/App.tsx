import React, { useEffect, useState } from 'react';
import './App.css';
import { BarChart } from './components/BarChart';
import { ScatterPlot } from './components/ScatterPlot';
import { Data } from './types/type';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Data[]>([]);

  const getData = (): void => {
    fetch('dataset.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <BarChart data={data} />
      <ScatterPlot data={data} />
    </div>
  );
};

export default App;
