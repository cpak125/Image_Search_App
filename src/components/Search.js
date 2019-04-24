import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results';

const ACCESS_KEY = `${process.env.REACT_APP_IMAGE_ACCESS_KEY}`

export default class Search extends Component {
    state = {
        searchQuery: "",
        searchResults: []
    }

    handleChange = (e) => {
        this.setState({searchQuery: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${this.state.searchQuery}}`)
        // console.log(response)
        this.setState({searchResults: response.data.results})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchQuery}
                        placeholder="Search for Images..." onChange={this.handleChange} >
                    </input>
                    <button type-="submit">Search</button>
                </form>

                <Results results={this.state.searchResults} />
            </div>
        )
    }
}
