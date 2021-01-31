import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Market</Link>
                    <ul className="right">
                        <li><Link to="/cart"><i className="medium material-icons">shopping_cart</i></Link></li>
                        <li><Link to="/cart">Total: ₺{this.props.total}</Link></li>
                    </ul>
                </div>
            </nav>)
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        total: state.total
    }
}

export default connect(mapStateToProps)(Navbar);