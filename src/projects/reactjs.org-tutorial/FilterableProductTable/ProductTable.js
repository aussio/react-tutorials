import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.matchesFilter = this.matchesFilter.bind(this);
    this.shouldDisplayProduct = this.shouldDisplayProduct.bind(this);
  }

  matchesFilter(string) {
    const { filterText } = this.props;
    return filterText === "" || string.toLowerCase().includes(filterText.toLowerCase());
  }

  shouldDisplayProduct(product) {
    const { inStockOnly } = this.props;

    if (inStockOnly && !product.stocked) {
      return false;
    }
    return this.matchesFilter(product.name);
  }

  render() {
    const { products } = this.props;

    const productsByCategory = {};
    for (const product of products) {
      const category = productsByCategory[product.category];
      if (category) {
        category.push(product);
      } else {
        productsByCategory[product.category] = [product];
      }
    };

    const tableRows = [];
    for (const [category, productArray] of Object.entries(productsByCategory)) {

      if (this.matchesFilter(category)) {
        tableRows.push(<ProductCategoryRow category={category} />);
      }

      for (const product of productArray) {
        if (this.shouldDisplayProduct(product)) {
          tableRows.push(
            <ProductRow
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          );
        }
      }
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {tableRows}
      </table>
    );
  }
}

export default ProductTable;
