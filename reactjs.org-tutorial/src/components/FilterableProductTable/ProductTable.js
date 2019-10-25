import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {

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
      tableRows.push(<ProductCategoryRow category={category} />);

      for (const product of productArray) {
        tableRows.push(
          <ProductRow
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          />
        );
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
