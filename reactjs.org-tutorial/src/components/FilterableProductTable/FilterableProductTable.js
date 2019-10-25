import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import "./FilterableProductTable.css";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", inStockOnly: false };
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
