import React from "react";
import Modal from "react-modal";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import anime from "./anime.json";
import "./success-modal.css";
const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: anime,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#111",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully!</label>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
        
        <Link to="/">
          <div className="take-home-button">
          <i class="fa-solid fa-house-user"></i>
            <span>Home</span>
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
