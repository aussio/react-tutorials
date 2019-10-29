import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./FilterableProductTable.css";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", inStockOnly: false };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      'filterText': filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      'inStockOnly': inStockOnly
    });
  }

  render() {
    const { filterText } = this.state;
    const { inStockOnly } = this.state;
    const { products } = this.props;

    return (
      <div className="FilterableProductTable">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onInStockChange={this.handleInStockChange}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
