import React, { Component } from 'react'
import styled from 'styled-components'

const ImagesContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

const StyledImage = styled.img`
width: 350px;
`
const PagesContainer = styled.div`
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
font-size: 16px;
`
const StyledButton = styled.button`
font-size: 16px;
border-radius: 4px;
background-color: #f1f1f1;
margin-left: 2px;
margin-right: 2px;
border: none;
outline: none;

&:focus {
  background-color: #667;
}
`

const StyledResult = styled.div`
text-align: center;
`
export default class Results extends Component {
  state = {
    currentPage: 1
  }

  totalPages = [1, 2, 3, 4, 5]

  changePage = (index) => {
    this.setState({
      currentPage: index
    })
  }

  render() {

    const pages = this.totalPages.map((page, index) => (
      <StyledButton key={index} onClick={() => this.changePage(index + 1)}
      > {page}</StyledButton>
    ))

    let images
    switch (this.state.currentPage) {
      case 1:
        images = this.props.currentResult.map((img, i) => {
          return (
            <StyledResult key={i} >
              <a href={img.user.links.html} alt="link to unsplash" target="_blank" rel="noopener noreferrer">
                <StyledImage src={img.urls.small} alt="search result" />
              </a>
              <p>Photo by: {img.user.username}</p>
            </StyledResult>
          )
        })
        break;
      case 2:
        images = this.props.allResults[1].data.results.map((img, i) => {
          return (
            <div key={i} >
              <a href={img.user.links.html} alt="link to unsplash" target="_blank" rel="noopener noreferrer">
                <StyledImage src={img.urls.small} alt="search result" />
              </a>
              <p>Photo by: {img.user.username}</p>
            </div>
          )
        })
        break;
      case 3:
        images = this.props.allResults[2].data.results.map((img, i) => {
          return (
            <div key={i} >
              <a href={img.user.links.html} alt="link to unsplash" target="_blank" rel="noopener noreferrer">
                <StyledImage src={img.urls.small} alt="search result" />
              </a>
              <p>Photo by: {img.user.username}</p>
            </div>
          )
        })
        break;
      case 4:
        images = this.props.allResults[3].data.results.map((img, i) => {
          return (
            <div key={i} >
              <a href={img.user.links.html} alt="link to unsplash" target="_blank" rel="noopener noreferrer">
                <StyledImage src={img.urls.small} alt="search result" />
              </a>
              <p>Photo by: {img.user.username}</p>
            </div>
          )
        })
        break;
      case 5:
        images = this.props.allResults[4].data.results.map((img, i) => {
          return (
            <div key={i} >
              <a href={img.user.links.html} alt="link to unsplash" target="_blank" rel="noopener noreferrer">
                <StyledImage src={img.urls.small} alt="search result" />
              </a>
              <p>Photo by: {img.user.username}</p>
            </div>
          )
        })
        break;
      default:
        return null
    }

    return (
      <div>
        <PagesContainer>
          Pages {pages}
        </PagesContainer>
        <ImagesContainer>
          {images}
        </ImagesContainer>
      </div>
    )
  }
}
