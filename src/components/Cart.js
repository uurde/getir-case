import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, addQuantity, subtractQuantity } from '../actions';
import Recipe from './Recipe';
class Cart extends Component {

    //to remove the item completely
    handleRemove = (slug) => {
        this.props.removeItem(slug);
    }
    //to add the quantity
    handleAddQuantity = (slug) => {
        this.props.addQuantity(slug);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (slug) => {
        this.props.subtractQuantity(slug);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.slug}>
                            <div className="item-img">
                                <img src="https://via.placeholder.com/100" className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.name}</span>
                                <p>{item.description}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.slug) }}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.slug) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.slug) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (slug) => { dispatch(removeItem(slug)) },
        addQuantity: (slug) => { dispatch(addQuantity(slug)) },
        subtractQuantity: (slug) => { dispatch(subtractQuantity(slug)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)