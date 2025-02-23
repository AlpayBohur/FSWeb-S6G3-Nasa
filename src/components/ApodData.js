import React, { useState } from "react";
import Image from "./Image";
import Video from "./Video";
import Details from "./Details";
import styled from "styled-components";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const ApodData = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = props.apodData;
  const ApodDiv = styled.div`
    background-color: black;
    width: 75%;
    border-radius: 30px;
    color: white;
    text-align: center;
    margin: auto;
    padding: 3%;
    border: 2px solid black;
    &:hover {
      border: 2px solid red;
    }
  `;
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.url}
          >
            <ApodDiv>
              {item.media_type == "image" ? (
                <Image url={item.url} />
              ) : (
                <Video url={item.url} />
              )}
              <Details apodData={item} />
            </ApodDiv>
          </CarouselItem>
        );
      })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default ApodData;
