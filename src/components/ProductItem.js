import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var { item, index } = this.props;

    return (
      <tr>
        <td className="col_order text-center">{index + 1}</td>
        <td className="col_name">
          {item.name} (id={item.slug})
        </td>
      </tr>
    );
  }
}

export default ProductItem;