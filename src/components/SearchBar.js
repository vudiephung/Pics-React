import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    console.log(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term); // Choose any name, not only 'onSubmit'
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search for Images ..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
