import React from "react";

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnly = this.handleInStockOnly.bind(this);
  }

  handleFilterTextChange(event) {
    const { onFilterTextChange } = this.props;
    onFilterTextChange(event.target.value);
  }

  handleInStockOnly(event) {
    const { onInStockChange } = this.props;
    onInStockChange(event.target.checked);
  }

  render() {
    const { filterText } = this.props;
    const { inStockOnly } = this.props;

    return (
      <form>
        <input
          type="search"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockOnly}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
