import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results';

const ACCESS_KEY = `${process.env.REACT_APP_IMAGE_ACCESS_KEY}`

export default class Search extends Component {
    state = {
        searchQuery: "",
        currentResult: [],
        remainResults: []

    }

    handleChange = (e) => {
        this.setState({
            searchQuery: e.target.value,
            currentResult: [],
            remainResults: []
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const urls = []
        for (let i = 1; i < 6; i++) {
            urls.push(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&page=${i}&orientation=landscape&query=${this.state.searchQuery}`)
        }
        const allResponses = urls.map(async url => await axios.get(url))

        Promise.all(allResponses)
            .then(responses => {
                const processedResponses = []
                responses.map(response => {
                    processedResponses.push(response)
                    return true
                })
                this.setState({
                    currentResult: processedResponses[0].data.results,
                    remainResults: processedResponses
                })
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

                {this.state.currentResult.length !== 0 ?
                    <Results
                        currentResult={this.state.currentResult}
                        remainResults={this.state.remainResults}
                    /> : null}
            </div>
        )
    }
}
