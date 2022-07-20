import React from "react";

const BasicModal = ({ showModal, closeModal, children }) => {
  const outerClassName = showModal ? "visible" : "invisible";
  const innerClassName = showModal ? "scale-100" : "scale-0";

  let mouseDown = false;

  const handleClose = (e) => {
    if (e.type === "mousedown") return (mouseDown = true);
    if (e.type === "mouseup" && mouseDown) closeModal();
  };

  return (
    <div
      className={`${outerClassName} fixed flex justify-center items-center delay-75 bg-black/50 inset-0 z-10`}
      style={{ margin: 0 }}
      onMouseDown={handleClose}
      onMouseUp={handleClose}
    >
      <div
        className={`${innerClassName} transition-transform px-6 py-3 bg-white rounded-xl z-10`}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => (mouseDown = false)}
      >
        {children}
      </div>
    </div>
  );
};

export default BasicModal;
