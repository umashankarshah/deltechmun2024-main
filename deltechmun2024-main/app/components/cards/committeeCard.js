"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const committeeCard = ({
  shortName,
  name,
  img,
  description,
  guide,
  person1,
  person1_designation,
  person1_img,
  person2,
  person2_designation,
  person2_img,
}) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div
        className="card border border-[#C5C5C5] shadow-md 
       hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
      >
        <div className="imgBox">
          <Image src={img} alt="committee" width="225" height="225"></Image>
        </div>
        <div className="content flex items-center justify-between flex-col">
          <h2>{shortName}</h2>
          <h5>{name}</h5>
          <p className="text-ellipsis line-clamp-2">{description}</p>
          <button
            className="py-3 px-4 tracking-wide w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
            hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
            onClick={openModal}
          >
            Know More
          </button>
        </div>
      </div>

      {/* Model */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-3xl pt-4 px-6 pb-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="div" // Change 'as' to 'div'
                  className="flex justify-between items-center text-2xl py-2 font-bold leading-6 text-gray-900"
                >
                  <div className="flex items-center font-merriweather">
                    {name}
                  </div>
                  <button
                    type="button"
                    className="inline-flex justify-center py-3 px-4 w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
                    hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2" // Change 'stroke-width' to 'strokeWidth'
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-base text-center font-normal font-serif text-zinc-800 border-t pt-5 pb-8">
                    {description}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    {person1 && (
                      <div className="group relative cursor-pointer flex flex-col items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                        <div className="h-96 w-72">
                          <Image
                            src={person1_img}
                            alt="img"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            fill
                            priority={true}
                          ></Image>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 text-center transition-all duration-500 group-hover:translate-y-0">
                          <h1 className=" text-3xl py-5 font-bold font-serif text-neutral-300">
                            {person1_designation}
                          </h1>
                          <p className="mb-10 text-xl font-semibold font-merriweather italic text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {person1}
                          </p>
                        </div>
                      </div>
                    )}
                    {person2 && (
                      <div className="group relative cursor-pointer flex flex-col items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                        <div className="h-96 w-72">
                          <Image
                            src={person2_img}
                            alt="img"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            fill
                            priority={true}
                          ></Image>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 text-center transition-all duration-500 group-hover:translate-y-0">
                          <h1 className=" text-3xl py-5 font-bold font-serif text-neutral-300">
                            {person2_designation}
                          </h1>
                          <p className="mb-10 text-xl font-semibold font-merriweather italic text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {person2}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  href="https://app.deltechmun.in"
                  className="mt-6 flex justify-center"
                >
                  <button
                    type="button"
                    className="font-merriweather tracking-wider text-md w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold mb-2 transition-all duration-500 bg-gradient-to-tl from-[#1341EC] via-[#5CA0F2] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0"
                  >
                    Register Now
                  </button>
                </Link>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default committeeCard;
