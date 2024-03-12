import React, { useState } from 'react';
import { Modal } from './AddBookModal';
import { FaCirclePlus } from "react-icons/fa6";
import closeIcon from "../../../assets/Icons/closeButton.svg"
import { UploadBookPicture } from "../../Partials/Forms/UploadBook"

export const AddABook = () => {
  //Modal to add book
  const [modalIsOpen, setModalIsOpen] = useState(false); //sets modal to false so it is closed from the start.

  const openModal = () => {
    //sets modal to true so it opens. 
    setModalIsOpen(true); 
  };

  const closeModal = () => {
    // sets modal to false so it closes. 
    setModalIsOpen(false); 
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
            onClick={openModal} 
            className="w-10/12 h-[48px] bg-primary rounded-lg text-light font-bold text-[22px] pr-[20px]">
            Add a book 
        </button>
        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          >
            {/* Modal content */}    
          <header className=' h-12 bg-primary rounded-lg'>
            <img 
              src={closeIcon} 
              alt="" 
              onClick={closeModal} 
              className="relative top-1/2 -translate-y-1/2 left-[90%] text-light text-2xl"/>
          </header>
          <main className="bg-light rounded-b-lg -mt-1">
            <UploadBookPicture></UploadBookPicture>
          </main>  
          
        </Modal>
      </div>
      <FaCirclePlus className="relative -top-[35px] left-[250px] text-light text-[22px]" />
    </div>
  )
}
