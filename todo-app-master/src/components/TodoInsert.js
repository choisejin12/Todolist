import React, { useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./TodoInsert.css";
import Modal from "./Modal";

const TodoInsert = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <form className="TodoInsert">
      <div onClick={openModal} className="Plus">
        <div><AiOutlinePlus /></div>
      </div>
      <Modal open={modalOpen} close={closeModal} header="스케줄 추가"></Modal>
    </form>
  );
};

export default TodoInsert;
