import "./link.css";
import React, { Component } from "react";

class Link extends Component {
  render() {
    const { link } = this.props;

    return (
      <a href={link.url} className="link-card">
        <div className="link">
          <img
            src="https://picsum.photos/200"
            alt="Icon for exercise called Hello World"
          />
          <div className="link-text">
            <h3>{link.title}</h3>
            <p className="url">{link.url}</p>
            <p>{link.description}</p>
          </div>
          <div className="c-icon">
            <img
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/chevron-right-4edf20ec1116acf2e371e8ff03809451274a7b32.svg"
              alt=""
              role="presentation"
              className="action-icon"
            />
          </div>
        </div>
      </a>
    );
  }
}

export default Link;
