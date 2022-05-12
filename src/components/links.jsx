import Link from "./link";
import "./links.css";
import React, { Component } from "react";

class Links extends Component {
  state = {
    linkCards: [
      {
        title: "Github Account",
        url: "https://github.com/kesler20",
        description: "url to the github account",
      },
      {
        title: "Blackboard",
        url: "https://vle.shef.ac.uk/ultra",
        description: "link to the blackboard activity stream",
      },
      {
        title: "AWS Account",
        url: "https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#",
        description: "account to the AWS",
      },
      {
        title: "Dev Documentations",
        url: "https://docs.google.com/document/d/1HTCSVKLfmpiqOEz1DP-I0H-k6P1qF5wHumsH-39zQgU/edit",
        description: "Google Docs with links to documentations",
      },
      {
        title: "Onedrive Documents",
        url: "https://onedrive.live.com/?id=D6E96D5E52A0D29C%21104&cid=D6E96D5E52A0D29C",
        description: "Link to the onedrive documents",
      },
      {
        title: "To do List file",
        url: "https://docs.google.com/document/d/1lKFhkwju1F5U8LuJYR0_oiIpeLQ8wPCnQoJZKmATgEE/edit",
        description: "this is the link to the google docs to do list",
      },
      {
        title: "Amazon",
        url: "https://www.amazon.co.uk/",
        description: "link to the amazon account",
      },
      {
        title: "Amazon Prime Video",
        url: "https://www.amazon.co.uk/gp/browse.html?node=3010085031&ref_=nav_em__aiv_0_2_2_2",
        description: "link to Amazon prime",
      },
      {
        title: "gmail",
        url: "https://mail.google.com/mail/u/1/#inbox",
        description: "this is the link to the gmail inbox",
      },
      {
        title: "Google drive Group 7",
        url: "https://drive.google.com/drive/u/1/folders/0AF2F0Qdd4zDvUk9PVA",
        description: "link to group 7 drive",
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
