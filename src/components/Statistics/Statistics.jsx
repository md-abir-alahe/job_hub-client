import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 60 },
  { name: "Assignment 3", value: 58 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 6", value: 57 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 60 },
];

const Statistics = () => {
  return (
    <div>
      <div className="py-32 my-9 bg-indigo-100 rounded-md">
        <h2 className="text-5xl font-extrabold text-center text-indigo-900">
          Statistics
        </h2>
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-6 items-center justify-center ">
        <div>
            <PieChart width={500} height={500}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
        </div>
        <div className="border-4 border-l-indigo-400 p-14">
            <h3 className="font-bold">Assignment Marks Analysis</h3>
            <p>Assignment Running : <span className="font-semibold">9</span></p>
            <p>Assignment completed : <span className="font-semibold">8</span></p>
            <p>Average marks : <span className="font-semibold">59.38</span></p>
            <p>Obtained 50% marks : <span className="font-semibold">8</span></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
