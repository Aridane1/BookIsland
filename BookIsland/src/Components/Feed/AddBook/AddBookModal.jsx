import ReactModal from 'react-modal';

export function Modal ({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className="w-11/12 mt-[178px] m-auto shadow-dark shadow-lg"
      style={{overlay: {backgroundColor:'#666C73df'}}}
    >
      {children}
    </ReactModal>
  );
};