import React from "react";
import SectionTitle from "../../../../common/sectionTitle";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import data from "../../../../assets/data/roadMap/roadMapV5";
import RoadMapStyleWrapper from "./RoadMap.style";

const RoadMap = () => {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <FiChevronRight />
      </button>
    );
  };
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <FiChevronLeft />
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    autoplay: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <RoadMapStyleWrapper id="roadmap">
      <div className="container">
        <SectionTitle
          // title="Download Roadmap & Whitepaper"
          subtitle="Learn About Our Roadmap & Project Whitepaper"
          className="section_title"
        />
      </div>
{/* 
      { <div className="road_map_slider">
        <div className="container">
          <Slider {...sliderSettings}>
            {data?.map((item, i) => (
              <SliderItem key={i}>
                <div className="road_map_slide_content">
                  <h3 className="road_map_title">{item.title}</h3>
                  <ul>
                    {item.features?.map((feature, idx) => (
                      <li key={idx}>
                        <img src={feature.icon} alt="icon" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </SliderItem>
            ))}
          </Slider>
        </div>
      </div> } */}
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px' }}>
        <a href="src/assets/pdf/Birdy Solana Roadmap.pdf" download>
          <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}>
            Download Roadmap PDF
          </button>
        </a>
        <a href="src/assets/pdf/Birdy Solana Whitepaper.pdf" download>
          <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#cb7a3b", color: "#fff", border: "none", cursor: "pointer" }}>
            Download Whitepaper PDF
          </button>
        </a>
      </div>


    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
