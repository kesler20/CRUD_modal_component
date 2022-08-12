import "./Links.css";
import Link from "../../components/link/Link";
import React, { Component } from "react";

class Links extends Component {
  state = {
    linkCards: this.props.initialLinkCards,
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
