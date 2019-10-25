import React from "react";

class ProductRow extends React.Component {

  render() {
    let { name } = this.props;
    const { stocked } = this.props;
    const { price } = this.props;

    if (!stocked) {
      name = <span style={{ color: "red" }}>{name}</span>;
    }

    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
