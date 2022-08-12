import "./Navbar.css";
import React, { useState } from "react";
import CRUDBtn from "./crud_btn/CRUDBtn";
import { FaBars } from "react-icons/fa";
import CreateLinkModal from "./create_link_modal/CreateLinkModal";
import DeleteLinkModal from "./delete_link_modal/DeleteLinkModal";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Navbar = ({ handleCreate, handleDelete, onSortGrid }) => {
  const [viewCreateModal, setViewCreateModal] = useState(false);
  const [viewDeleteModal, setViewDeleteModal] = useState(false);

  const createLinkHook = () => {
    handleCreate();
    setViewCreateModal(!viewCreateModal);
  };

  const deleteLinkHook = () => {
    handleDelete();
    setViewDeleteModal(!viewDeleteModal);
  };
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__btn">
        <FaBars
          className="navigation-bar__btn__icon"
          onClick={deleteLinkHook}
        />
        <BiDotsVerticalRounded
          className="navigation-bar__btn__icon"
          onClick={onSortGrid}
        />
      </div>
      <CRUDBtn onCreate={createLinkHook} />
      {viewCreateModal === true ? <CreateLinkModal /> : React.Fragment}
      {viewDeleteModal === true ? <DeleteLinkModal /> : React.Fragment}
    </div>
  );
};

export default Navbar;
