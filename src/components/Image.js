import React from "react";

const Image = (props) => {
  const { url } = props;
  return <img src={url} />;
};

export default Image;
