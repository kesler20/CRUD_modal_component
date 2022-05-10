import Link from "./link";
import "./links.css";
import React, { Component } from "react";

class Links extends Component {
  state = {
    linkCards: [
      {
        title: "Hello World",
        url: "https://github.com/kesler20",
        description: "url to the github account",
      },
      {
        title: "Hello World",
        url: "https://github.com/kesler20",
        description: "url to the github account",
      },
      {
        title: "Hello World",
        url: "https://github.com/kesler20",
        description: "url to the github account",
      },
      {
        title: "Hello World",
        url: "https://github.com/kesler20",
        description: "url to the github account",
      },
    ],
  };

  render() {
    return (
      <div className="links">
        {this.state.linkCards.map((link) => (
          <Link key={link.url} link={link} />
        ))}
      </div>
    );
  }
}

export default Links;
