import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'
import styled from 'styled-components'

const ACCESS_KEY = `${process.env.REACT_APP_IMAGE_ACCESS_KEY}`

const StyledInput = styled.input`
line-height: 32px;
border-radius: 2px;
width: 50%;
`

const StyledButton = styled.button`
font-size: 18px;
border-radius: 4px;
margin-left: 10px;
`

const StyledForm = styled.form`
text-align: center;
margin-top: 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
position: relative;
`
export default class Search extends Component {
    state = {
        searchQuery: "",
        currentResult: [],
        allResults: []

    }

    handleChange = (e) => {
        this.setState({
            searchQuery: e.target.value,
            currentResult: [],
            allResults: []
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const urls = []
        for (let i = 1; i < 6; i++) {
            urls.push(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&per_page=20&page=${i}&orientation=landscape&query=${this.state.searchQuery}`)
        }
        const allResponses = urls.map(async url => await axios.get(url))

        // wait for all the promises to resolve
       Promise.all(allResponses)    
        .then(responses => {
            const processedResponses = []
            responses.map(response => {
                processedResponses.push(response)
                return true
            })
            this.setState({
                currentResult: processedResponses[0].data.results,
                allResults: processedResponses
            })
        })
    }

    render() {
        return (
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledInput type="text" value={this.state.searchQuery}
                        placeholder="Search for Images..." onChange={this.handleChange} >
                    </StyledInput>
                    <StyledButton type-="submit">Search</StyledButton>
                </StyledForm>

                {this.state.currentResult.length !== 0 ?
                    <Results
                        currentResult={this.state.currentResult}
                        allResults={this.state.allResults}
                    /> : null}
            </div>
        )
    }
}
