import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import $ from "jquery";

class Search extends Component {
  state = {
    images: [],
  };

//The NASA API is called and then the results go to the state
  fetchImages = (query = "") => {
    $.ajax({
      url: `https://images-api.nasa.gov/search?q=${query}`,
    }).then((json) => {
      this.setState({ isLoaded: true, images: json.collection.items });
    });
  };

  render() {
    return (
      <div>
        <SearchForm fetchImages={this.fetchImages} />

        <SearchResults getResults={this.state.images} />
      </div>
    );
  }
}

export default Search;
