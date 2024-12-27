// import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const data = useLoaderData()
  console.log(data)
    return (
        <>
        <Helmet>
        <title>GadgetHeaven || Statistics</title>
      </Helmet>
        <div className="text-center rounded-xl mx-auto bg-purple-700 py-14 px-8 my-4 space-y-4 mt-20">
                    <h2 className="text-2xl font-semibold text-white">Statistics</h2>
                    <p className="text-white font-thin">A chart is a visual representation of data, used to convey information clearly and efficiently. It organizes complex data into an easily digestible format, often through graphs, bars, or lines. Charts help to identify trends, patterns, and comparisons, making data interpretation quicker and more accessible for decision-making processes.</p>
                </div>
        <div className='h-[500px]'>
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" label={{ value: 'price', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis label={{ value: 'rating', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
      </>
    );
};

export default Statistics;