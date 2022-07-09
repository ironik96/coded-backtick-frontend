import React from "react";

const BasicModal = ({ showModal, closeModal, children }) => {
  const outerClassName = showModal ? "visible" : "invisible";
  const innerClassName = showModal ? "scale-100" : "scale-0";
  return (
    <div
      className={`${outerClassName} absolute flex justify-center items-center delay-75 bg-black/50 inset-0 `}
      onClick={closeModal}
    >
      <div
        className={`${innerClassName} transition-transform px-6 py-3 bg-white rounded-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default BasicModal;
