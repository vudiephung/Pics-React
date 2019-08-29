import React from "react";

class ImgCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpans);
    //console.log(this.imgRef.cur rent);
  }

  setSpans = () => {
    const imgHeight = this.imgRef.current.clientHeight;
    const spans = Math.ceil(imgHeight / 48);
    //console.log(spans);
    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImgCard;
