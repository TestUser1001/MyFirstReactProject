import React from "react";
import HorizontalBar from "./HorizontalBar";
import "./Skillbar.scss";
import { color } from "chart.js/helpers";

import { useAppContext } from "../../App";

const Skillbar = ({ skillLevels /* heading */ }) => {
  const { isDark } = useAppContext();
  const rootStyles = getComputedStyle(document.documentElement);
  const barColor = rootStyles.getPropertyValue("--text-primary-color").trim();
  const hoverColor = rootStyles.getPropertyValue("--bar-hover-color").trim();

  const bg = isDark ? "#cd98e7" : "#6174c1";
  const categoryColor = isDark ? "#ecf1ff" : "#404040";
  const borderColor = isDark ? "#ffddfa" : "#000000";
  console.log(rootStyles);

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    /* layout: {
      padding: { top: 10, bottom: 10, left: 5, right: 5 },
    }, */

    /*  toolTip: {
      display: false,
    }, */

    scales: {
      /* display: false, */
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
          /*  beginAtZero: true, */
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

        /*  drawBorder: false, */
        grid: {
          display: false,
          drawBorder: false,
          borderColor: "transparent",
          borderWidth: 0,

          /*  border: false, */
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
        /*  text: heading,
        font:{

        } */
      },
      tooltip: {
        enabled: false,
        display: false,
      },
    },

    animation: {
      x: {
        duration: 1000,
        easing: "easeInOutBack",
      },
      y: {
        duration: 1500,
        easing: "easeInOutElastic",
      },
    },
  };

  const labels = skillLevels.map((level) => level.title);
  /*  const labels = []; */

  const data = {
    labels,
    datasets: [
      {
        label: "1",
        data: skillLevels.map((level) => level.level), // Example data
        backgroundColor: bg,
        borderRadius: 8,
        barThickness: 16,
        categoryPercentage: 0.9,
        /*    borderColor: borderColor,
        borderWidth: 2, */
      },
    ],
  };
  /*   console.log(data); */
  return (
    <div className="skillbar" /* style={{ height: "200px" }} */>
      <HorizontalBar data={data} options={options} />
    </div>
  );
};
export default Skillbar;
