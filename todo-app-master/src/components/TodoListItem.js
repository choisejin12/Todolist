import React, { useState } from "react";
import "./TodoListItem.css";
import { MdEdit } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdLens } from "react-icons/md";
import { MdPanoramaFishEye } from "react-icons/md";
import cn from "classnames";
import Modal from "./Modal";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckCircle /> : <MdPanoramaFishEye />}
        <div className="text">{text}</div>
      </div>

      <div className="option">
        <div className="change" onClick={openModal}>
          <MdEdit />
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdDelete />
        </div>
      </div>
      <div className="situation">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          <MdLens />  
          {checked ? <span>완료!</span> : <span>진행 중</span>}
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal} header="스케줄 수정"></Modal>
    </div>
  );
};

export default TodoListItem;
