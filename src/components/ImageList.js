import React from "react";

class ImageList extends React.Component {
  getImgLinks = () => {
    const data = this.props.imgs;
    const imgs = data.map(el => <img src={el.urls.regular} />);
    return <div>{imgs}</div>;
  };

  render() {
    return <div>{this.getImgLinks()}</div>;
  }
}

export default ImageList;
