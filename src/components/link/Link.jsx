import "./Link.css";
import React from "react";
import { FcFolder } from "react-icons/fc";

const Link = ({ link }) => {
  return (
    <a href={link.url} className="link__card">
      <div className="link__card__content">
        <FcFolder className="link__card__content__folder-icon" />
        <div className="link__card__content__header">
          <h3>{link.title}</h3>
        </div>
      </div>
    </a>
  );
};

export default Link;
