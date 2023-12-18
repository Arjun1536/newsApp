import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let { title, description, imgset, newUrl, author, publishedAt, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success"style={{left:'92%'}}>
              {source}
            </span>
          <img src={imgset ? imgset : "https://media.npr.org/assets/img/2023/10/10/gettyimages-165997986_wide-f57b65cef4f78f7b59a3bd709c2594f0a242c298-s1400-c100.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newUrl} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems
