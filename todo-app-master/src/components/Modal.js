import React, { useState, useCallback } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, save } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="modal_main">
          <button className="close" onClick={close}>
            <AiOutlineClose size="31" color="white"/>
          </button>
          <header className="modal_header">{header}</header>
          <main className="modal_input_main">
            <textarea className="modal_input" placeholder="할 일을 입력하세요"></textarea>
          </main>
          <footer >
            <button className="save" onClick={save}>
              save
            </button>
          </footer>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
