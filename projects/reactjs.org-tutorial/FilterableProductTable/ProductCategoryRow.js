import React from "react";

class ProductCategoryRow extends React.Component {

  render() {
    const { category } = this.props;

    return (
      <tr>
        <td colSpan="2">
          <b>{category}</b>
        </td>
      </tr>
    );
  }
}

export default ProductCategoryRow;
