import React, { Component } from "react";

class Tags extends Component {

    render() {
        return (
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="input_text" type="text" data-length="10"></input>
                        <label htmlFor="input_text">Search tags</label>
                    </div>
                </div>
                <div style={{ overflowY: 'scroll', height: '244px' }}>
                <p>
                    <label>
                        <input type="checkbox" checked="checked" />
                        <span>All</span>
                    </label>
                </p>
                </div>
            </form>
        )
    }
}

export default Tags;