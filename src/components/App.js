import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSubmit = async term => {
    const numPageRandom = Math.floor(Math.random() * 10);
    const imgsPerPage = 50;
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: imgsPerPage, page: numPageRandom }
    });
    //console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <p>Found: {this.state.images.length} images</p>
        <ImageList imgs={this.state.images} />
      </div>
    );
  }
}

export default App;
