import "./Links.css";
import Link from "../../components/link/Link";
import React from "react";

const Links = ({ initialLinkCards }) => {
  return (
    <div className="links">
      {initialLinkCards.map((link) => (
        <Link key={link.url} link={link} />
      ))}
    </div>
  );
};

export default Links;
