import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./ChartBox.scss";
import React, { useState, useEffect } from "react";

const PieChartBox = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([
    { name: "High", value: 0, color: "#EB5757" },
    { name: "Medium", value: 0, color: "#F2C94C" },
    { name: "Low", value: 0, color: "#2F80ED" },
  ]);

  useEffect(() => {
    fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        const highCount = responseData.filter(
          (item) => item.priority === "HIGH"
        ).length;
        const mediumCount = responseData.filter(
          (item) => item.priority === "MEDIUM"
        ).length;
        const lowCount = responseData.filter(
          (item) => item.priority === "LOW"
        ).length;
        setChartData([
          { name: "High", value: highCount, color: "#EB5757" },
          { name: "Medium", value: mediumCount, color: "#F2C94C" },
          { name: "Low", value: lowCount, color: "#2F80ED" },
        ]);
      });
  }, []);

  return (
    <div className="chartBox">
      <div className="title">
        <p>Tasks Priorities</p>
      </div>

      <div className="pieChartBox">
        <div className="chart">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={chartData}
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="options">
          {chartData.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartBox;
