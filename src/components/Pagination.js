import React, { Component } from "react";
import { loadNewPage, loadExactPage } from '../actions';
import PropTypes from "prop-types";

class Pagination extends Component {


  render() {
    return (
      <ul className="pagination">
        <li className="waves-effect"><a onClick={() => { this.previousPage() }}><i className="material-icons">chevron_left</i></a></li>
        {
          [...Array(this.props.filteredPages)].map((value, index) => (
            <li className={`waves-effect ${this.props.currentPage === index + 1 ? "active" : ""}`} key={index + 1}>
              <a onClick={() => this.goToPage(index + 1)}> {index + 1}</a>
            </li>
          ))
        }
        <li className="waves-effect"><a onClick={() => { this.nextPage() }}><i className="material-icons">chevron_right</i></a></li>
      </ul>
    );
  }
}

export default Pagination;