import React, { Component } from 'react'

export default class Results extends Component {
    
  render() {
      const images = this.props.results.map((img,i) => {
          return (
              <img key={i} src={img.urls.small} alt="search result" />
          )
      })
    return (
      <div>
        {images}
      </div>
    )
  }
}
