import React, { Component } from "react";
import { connect } from 'react-redux';
import { getBrands } from '../actions';

class Brands extends Component {
    componentDidMount() {
        this.props.getBrands();
    }

    render() {
        let brandList = this.props.brands.map(brand => {
            return (
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>{brand.name}</span>
                    </label>
                </p>

            )
        })
        return (
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="input_text" type="text" data-length="10"></input>
                        <label htmlFor="input_text">Search brand</label>
                    </div>
                </div>
                <div style={{ overflowY: 'scroll', height: '244px' }}>
                <p>
                    <label>
                        <input type="checkbox" checked="checked" />
                        <span>All</span>
                    </label>
                </p>
                    {brandList}
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        brands: state.brands
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBrands: () => dispatch(getBrands())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Brands)