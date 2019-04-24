import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results';

const ACCESS_KEY = `${process.env.REACT_APP_IMAGE_ACCESS_KEY}`

export default class Search extends Component {
    state = {
        searchQuery: "",
        currentResult: [],
        allResults: []

    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const urls = []
        for (let i = 1; i < 6; i++) {
            urls.push(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&page=${i}&orientation=landscape&query=${this.state.searchQuery}`)
        }
        const allRequests = await urls.map((url) => axios.get(url))
        // console.log(allRequests)

        Promise.all(allRequests)
            .then(responses => {
                const processedResponses = []
                responses.map((response) => {
                    processedResponses.push(response)
                    this.setState({ 
                        currentResult: processedResponses[0].data.results,
                        allResults: processedResponses
                     })
    
                })
                console.log(processedResponses)
            })
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

                <Results results={this.state.currentResult} />
            </div>
        )
    }
}
