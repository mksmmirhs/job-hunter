import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import './Statistics.css';

const Statistics = () => {
  const assignmentMarks = [
    {
      name: 'assignment 1',
      marks: 60,
    },
    {
      name: 'assignment 2',
      marks: 30,
    },
    {
      name: 'assignment 3',
      marks: 60,
    },
    {
      name: 'assignment 4',
      marks: 60,
    },
    {
      name: 'assignment 5',
      marks: 60,
    },
    {
      name: 'assignment 6',
      marks: 60,
    },
    {
      name: 'assignment 7',
      marks: 60,
    },
    {
      name: 'assignment 8',
      marks: 60,
    },
  ];

  return (
    <div>
      <PageHeader header={'Statistics'}></PageHeader>
      <div className="body">
        <div className="chart">
          <AreaChart
            width={500}
            height={400}
            data={assignmentMarks}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
          <h3>Area Chart</h3>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
