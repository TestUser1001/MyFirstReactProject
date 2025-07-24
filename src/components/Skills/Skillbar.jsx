import React, { useRef } from "react";
import HorizontalBar from "./HorizontalBar";
import "./Skillbar.scss";
import { useAppContext } from "../../App";

const Skillbar = ({ skillLevels, chartRef }) => {
  const { isDark } = useAppContext();
  const bg = isDark ? "#cd98e7" : "#6174c1";
  const categoryColor = isDark ? "#ecf1ff" : "#404040";

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        display: true,
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          display: false,
          drawBorder: false,
          borderColor: "transparent",
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
        title: { display: false /* text: "Y Axis Title" */ },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
          color: categoryColor,
          padding: 2,
          beginAtZero: true,

          font: {
            size: 14,
            family: "Roboto",
            weight: "bold",
          },
        },
        grid: {
          display: false,
          drawBorder: false,
          borderColor: "transparent",
          borderWidth: 0,
        },

        border: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
        display: false,
      },

      datalabels: {
        anchor: "end",
        align: "right",
        formatter: (value) => `${value}%`,
        color: categoryColor,
        font: {
          weight: "bold",
          size: 12,
        },
        padding: {
          right: 6,
        },
      },
    },

    animation: {
      x: {
        duration: 1500,
        easing: "easeInOutCubic",
        from: 0,
        delay: 0,
      },
      y: {
        duration: 1500,
        easing: "easeInOutCubic",
        from: 0,
        delay: 0,
      },
    },
  };

  const labels = skillLevels.map((level) => level.title);

  const data = {
    labels,
    datasets: [
      {
        label: "1",
        data: skillLevels.map((level) => level.level),
        backgroundColor: bg,
        borderRadius: 8,
        barThickness: 16,
        categoryPercentage: 0.9,
      },
    ],
  };

  return (
    <div className="skillbar">
      <HorizontalBar data={data} options={options} chartRef={chartRef} />
    </div>
  );
};
export default Skillbar;
