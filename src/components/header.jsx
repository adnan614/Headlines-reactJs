import React, { Component } from 'react'

import {newsCategory} from '../components/news/index'

class header extends Component {
    state = {
        searchTerm: ''
    }
    
    handleChange = e => {
        this.setState({ searchTerm: e.target.value });
    }
    
    handleKeyPress = e => {
        
    }


    render() {
        const {category,changeCategory } = this.props
        return (
            <div className="my-4">
                <h1 className="mb-4" style={{fontWeight: 300}}>
                       Block Buster Headlines
                </h1>
                <input
                    type="search"
                    className="form-control"
                    value={this.state.searchTerm}
                    placeholder="Type Anything & Press Enter To Search"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-4">
                    { category && Object.keys(newsCategory).map((item) => {
                        if (category === newsCategory[item]) {
                            return (
                                <button onClick={() =>changeCategory( newsCategory[item]) } className="btn btn-sm btn-warning mr-2 mb-2">{`#${newsCategory[item]}` }</button>
                              )
                        }
                         return (
                             <button onClick={() => changeCategory(newsCategory[item])} className="btn btn-sm btn-light mr-2 mb-2">{`#${newsCategory[item]}` }</button>
                              )
                     })}
                </div>
            </div>
        )
    }
}

export default header;
