import Navbar from "../../components/navbar/Navbar";

const LinksCrud = ({ initialLinkCards, onUpdateDatabase }) => {
  const handleSortGrid = () => {
    const sortedGrid = initialLinkCards.sort((a, b) => {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    });

    localStorage.setItem("link-cards", JSON.stringify(sortedGrid));
    onUpdateDatabase();
  };

  return (
    <div>
      <Navbar
        handleCreate={() => console.log("link card")}
        handleDelete={() => console.log("link card")}
        onSortGrid={handleSortGrid}
      />
    </div>
  );
};

export default LinksCrud;
