import "./Links.css";
import Link from "../../components/link/Link";
import React, { Component } from "react";

const initialLinkCards = [
  {
    title: "Sofia Commands",
    url: "https://github.com/kesler20/Sofia/blob/master/Context/speaker.py",
  },
  {
    title: "Sofia",
    url: "https://github.com/kesler20/Sofia",
  },
  {
    title: "Sofia Logs",
    url: "https://github.com/kesler20/Sofia/blob/master/logs_src/main_logs.log",
  },
  {
    title: "Blackboard",
    url: "https://vle.shef.ac.uk/ultra",
  },
  {
    title: "flask app template",
    url: "https://github.com/kesler20/Config_settings/blob/master/Python/flask%20app%20database.txt",
  },
  {
    title: "static page template",
    url: "https://github.com/kesler20/static_page_template",
  },
  {
    title: "python programme template",
    url: "https://github.com/kesler20/test_setup",
  },
  {
    title: "Linux command",
    url: "https://github.com/kesler20/Config_settings/blob/master/Linux/Linux.md",
  },
  {
    title: "Github commands",
    url: "https://github.com/kesler20/instructions/blob/master/map.md",
  },
  {
    title: "Conda commands",
    url: "https://github.com/kesler20/instructions/blob/master/map.md",
  },
  {
    title: "react app template",
    url: "https://github.com/kesler20/react_template",
  },
  {
    title: "Journal",
    url: "https://github.com/uos-datavisdashboard",
  },
  {
    title: "AWS Account",
    url: "https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#",
  },
  {
    title: "Dev Documentations",
    url: "https://docs.google.com/document/d/1HTCSVKLfmpiqOEz1DP-I0H-k6P1qF5wHumsH-39zQgU/edit",
  },
  {
    title: "Onedrive Documents",
    url: "https://onedrive.live.com/?id=D6E96D5E52A0D29C%21104&cid=D6E96D5E52A0D29C",
  },
  {
    title: "Solved Issues",
    url: "https://docs.google.com/document/d/1lKFhkwju1F5U8LuJYR0_oiIpeLQ8wPCnQoJZKmATgEE/edit",
  },

  {
    title: "Task List",
    url: "https://mail.google.com/mail/u/0/#inbox",
  },

  {
    title: "Amazon",
    url: "https://www.amazon.co.uk/",
  },
  {
    title: "Amazon Prime Video",
    url: "https://www.amazon.co.uk/gp/browse.html?node=3010085031&ref_=nav_em__aiv_0_2_2_2",
  },
  {
    title: "gmail",
    url: "https://mail.google.com/mail/u/1/#inbox",
  },
  {
    title: "Sofia Diet",
    url: "https://sofia-diet2.herokuapp.com/food",
  },
  {
    title: "Configuration settings",
    url: "https://github.com/kesler20/Config_settings",
  },
  {
    title: "Taskade Routine",
    url: "https://www.taskade.com/spaces/sSKMNin2nRKmAb9V/subspaces/WEcFGfREnjKT24BZ",
  },
  {
    title: "Calendar",
    url: "https://calendar.google.com/calendar/u/0/r",
  },
  {
    title: "System Architecture",
    url: "https://onedrive.live.com/?cid=D6E96D5E52A0D29C&id=D6E96D5E52A0D29C%21640393&parId=D6E96D5E52A0D29C%21104&o=OneUp",
  },
  {
    title: "Todays Workout",
    url: "https://onedrive.live.com/?id=D6E96D5E52A0D29C%21104&cid=D6E96D5E52A0D29C",
  },
  {
    title: "Weight & Body fat Data",
    url: "https://onedrive.live.com/edit.aspx?resid=D6E96D5E52A0D29C!619270&ithint=file%2cxlsx",
  },
  {
    title: "Instructions",
    url: "https://onedrive.live.com/edit.aspx?resid=D6E96D5E52A0D29C!471416",
  },
];

class Links extends Component {
  state = {
    linkCards: initialLinkCards,
  };

  componentDidMount() {
    let cardsFromLocalStorage = JSON.parse(localStorage.getItem("link-cards"));
    if (this.state.linkCards.length !== cardsFromLocalStorage.length) {
      this.setState({ linkCards: cardsFromLocalStorage });
    } else {
      localStorage.setItem("link-cards", JSON.stringify(initialLinkCards));
    }
  }

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
