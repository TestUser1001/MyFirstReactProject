import React from "react";
import HorizontalBar from "./HorizontalBar";
import "./Skillbar.scss";
import { color } from "chart.js/helpers";
const Skillbar = ({ skillLevels, heading }) => {
  /*  console.log(skillLevels); */

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    /* layout: {
      padding: { top: 10, bottom: 10, left: 5, right: 5 },
    }, */

    scales: {
      /* display: false, */
      x: {
        display: false,
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
      },
      y: {
        type: "category",
        beginAtZero: true,

        /*  drawBorder: false, */
        grid: {
          display: false,
          drawBorder: false,
          borderColor: "transparent",
          borderWidth: 0,

          /*  border: false, */
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: heading,
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
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: "1",
        data: skillLevels.map((level) => level.level), // Example data
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="skillbar" /* style={{ height: "200px" }} */>
      <HorizontalBar data={data} options={options} />
    </div>
    /*  <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="skills__slider-container"
      >
        {skillLevels.map(({ title, level }) => {
          return (
            <SwiperSlide key={title}>
              <div className="skills__slide">
                <div className="skills__languages">
                  <Skill percentage={level} title={title} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div> */
  );
};
export default Skillbar;
