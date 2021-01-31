import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { addToCart, getItems, filterByType } from '../actions';
import Brands from './Brands';

class Home extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    handleClick = (slug) => {
        console.log(slug);
        this.props.addToCart(slug);
    }

    selectType = (itemType) => {
        console.log(itemType);
        this.props.filterByType(itemType);
    }

    render() {

        let itemList = this.props.items.map(item => {
            return (
                <div className="card crd-sml" key={item.slug}>
                    <div className="card-image">
                        <img src="https://via.placeholder.com/100" />
                    </div>

                    <div className="card-content">
                        <p><b>₺ {item.price}</b></p>
                        <p>{item.name}</p>
                        <br></br>
                        <div className="center-align">
                            <a className="waves-effect waves-light btn" onClick={() => { this.handleClick(item.slug) }}>Add</a>
                        </div>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <p>Sorting</p>
                        <div className="card">
                            <div className="card-content">
                                <p>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Price low to high</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Price high to low</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>New to old</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="group1" type="radio" />
                                        <span>Old to new</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <p>Brands</p>
                        <div className="card">
                            <div className="card-content">
                                <Brands/>
                            </div>
                        </div>
                        <p>Tags</p>
                        <div className="card">
                            <div className="card-content">
                                <form>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="input_text" type="text" data-length="10"></input>
                                            <label htmlFor="input_text">Search tag</label>
                                        </div>
                                    </div>
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Red</span>
                                        </label>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s8">
                        <p className="pageTitle">Products</p>
                        <div className="row">
                            <div className="col s2">
                                <a className="waves-effect waves-light btn" onClick={() => { this.selectType('mug') }}>mug</a>
                            </div>
                            <div className="col s2">
                                <a className="waves-effect waves-light btn" onClick={() => { this.selectType('shirt') }}>shirt</a>
                            </div>
                        </div>
                        <div className="box">
                            {itemList}
                        </div>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItems()),
        addToCart: (slug) => { dispatch(addToCart(slug)) },
        filterByType: (itemType) => { dispatch(filterByType(itemType)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)