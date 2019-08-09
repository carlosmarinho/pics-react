import React, { Component } from 'react';

class SearchBar extends Component {
    /* onInputChange(event) {
        //event.target.value
    } */

    state = { term: '' };

    /* If we do this, it will automatically bind the 'this */
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    
    /* if we do this we have to bind the this on constructor or on the creting function
     * <form onSubmit={event => this.onFormSubmit(event)}
    onFormSubmit(event) {
        event.preventDefault();
    }
    */

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} /*onSubmit={event => this.onFormSubmit(event)}*/ className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" /*onChange={this.onInputChange} */ /*onChange={(e) => {e.target.value}}*/ 
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;