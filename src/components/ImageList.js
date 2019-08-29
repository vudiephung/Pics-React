import React from "react";
import "./imgList.css";
import ImgCard from "./ImgCard";

const ImageList = props => {
  const imgs = props.imgs.map(img => {
    return <ImgCard image={img} key={img.id} />;
  });
  return <div className="imgList">{imgs}</div>;
};

export default ImageList;
