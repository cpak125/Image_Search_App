import React, { Component } from 'react'

export default class Results extends Component {
  state = {
    currentPage: 1
  }

  pages = [1, 2, 3, 4, 5]

  changePage = (index) => {
    this.setState({ currentPage: index })
  }

  render() {

    const pages = this.pages.map((page, index) => (
      <button key={index} onClick={() => this.changePage(index + 1)}> {page}</button>
    ))

    let images
    switch (this.state.currentPage) {
      case 1:
        images = this.props.currentResult.map((img, i) => {
          return (
            <img key={i} src={img.urls.small} alt="search result" />
          )
        })
        break;
      case 2:
        images = this.props.allResults[1].data.results.map((img, i) => {
          return (
            <img key={i} src={img.urls.small} alt="search result" />
          )
        })
        break;
      case 3:
      images = this.props.allResults[2].data.results.map((img, i) => {
        return (
          <img key={i} src={img.urls.small} alt="search result" />
        )
      })
      break;
      case 4:
      images = this.props.allResults[3].data.results.map((img, i) => {
        return (
          <img key={i} src={img.urls.small} alt="search result" />
        )
      })
      break;
      case 5:
      images = this.props.allResults[4].data.results.map((img, i) => {
        return (
          <img key={i} src={img.urls.small} alt="search result" />
        )
      })
      break;
      default:
        return null
    }

    return (
      <div>

        <div>
          Page
            {pages}
        </div>
        {images}
      </div>
    )
  }
}
