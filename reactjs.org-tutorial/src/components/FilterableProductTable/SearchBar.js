import React from "react";

class SearchBar extends React.Component {

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search..."
        />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
