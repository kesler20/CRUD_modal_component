import { useEffect, useState } from "react";
import Links from "./containers/links/Links";
import Navbar from "./components/navbar/Navbar";
import { initialLinkCards } from "./initialLinks";

const App = () => {
  const [initialLinks, setInitialLinks] = useState([]);

  useEffect(() => {
    let cardsFromLocalStorage = JSON.parse(localStorage.getItem("link-cards"));
    if (cardsFromLocalStorage === null) {
      getInitialLinks();
    } else {
      setInitialLinks(JSON.parse(localStorage.getItem("link-cards")));
    }
  }, []);

  const uploadInitialLinks = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/router/CREATE",
      {
        method: "POST",
        body: JSON.stringify(initialLinkCards),
      }
    );
    response.json().then((res) => {
      console.log(res.response);

      setInitialLinks(initialLinkCards);
      localStorage.setItem("link-cards", JSON.stringify(initialLinkCards));
    });
  };

  const getInitialLinks = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/router/READ"
    );
    response.json().then((res) => {
      if (res.response.length === 0) {
        uploadInitialLinks();
      }
      console.log(res.response);
      setInitialLinks(res.response);
      localStorage.setItem("link-cards", JSON.stringify(res.response));
    });
  };

  const createLink = async (link) => {
    const response = await fetch(
      "http://127.0.0.1:8000/router/UPLOAD",
      {
        method: "POST",
        body: JSON.stringify({ title: link.title, url: link.url }),
      }
    );
    response.json().then((res) => {
      console.log(res.response);
      getInitialLinks();
    });
  };

  const deleteLink = async (name) => {
    console.log(name);
    const response = await fetch(
      "http://127.0.0.1:8000/router/DELETE",
      {
        method: "POST",
        body: JSON.stringify(name),
      }
    );
    response.json().then((res) => {
      console.log(res.response);
      getInitialLinks();
    });
  };

  return (
    <div>
      <Links initialLinkCards={initialLinks} />
      <Navbar
        handleCreate={(link) => createLink(link)}
        handleDelete={(name) => deleteLink(name)}
      />
    </div>
  );
};

export default App;

//TODO: remove the links crud stuff by placing the navbar on the app.js file
