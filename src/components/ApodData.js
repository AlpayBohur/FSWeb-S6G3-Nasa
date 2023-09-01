import React from "react";
import Image from "./Image";
import Video from "./Video";
import Details from "./Details";

const ApodData = (props) => {
  const { apodData } = props;
  return (
    <div className="apod-data">
      {apodData.media_type == "image" ? (
        <Image url={apodData.url} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </div>
  );
};

export default ApodData;
