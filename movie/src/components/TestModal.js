import React, { useState, useEffect } from "react";
//import { Modal, Button } from "react-bootstrap";
import Modal from "react-modal";
import Detail from "../Routes/Detail";

function TestModal({ id, title, summary, genres }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>{title}</button>
      {/* <button onClick={() => setModalIsOpen(true)}>Modal Open</button> */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {/* <TestModal /> */}
        <Detail title={title} id={id} summary={summary} genres={genres} />
        <br></br>
        {/*닫기 버든 만들면 될듯*/}
      </Modal>
    </div>
  );
}

export default TestModal;
