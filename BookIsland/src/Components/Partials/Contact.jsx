import React from 'react'
import { FaFacebookSquare  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const Contact = () => {
  return (
    <>
        <div className="px-[18px] pb-20">
            <p className="text-dark font-bold text-[32px] w-fit pt-2 ">
                Contact
            </p>
            <hr className="relative -top-[30px] w-[84px] h-1 my-8 bg-dark border-0 rounded "></hr>
            <div className='-mt-[30px]'>
                <h3 className="text-dark font-bold text-[16px] mb-4">Office</h3>
                <p className="text-dark text-[16px]">Avenida José Sánchez Peñate s/n, Las Palmas de Gran Canaria, Spain</p>
                <h3 className="text-dark font-bold text-[16px] my-4">Social</h3>
                    <div className="grid grid-cols-3  px-[16px]">
                            <FaFacebookSquare className='w-full h-16 text-primary' />
                            <FaXTwitter  className='w-full h-16 text-primary'/>
                            <AiFillInstagram  className='w-full h-16 text-primary'/>
                    </div>
            </div>
        </div>
    </>
  )
}
