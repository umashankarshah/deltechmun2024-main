"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { BsPencil } from "react-icons/bs";
import service from "../lib/hygraphServices";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useToast } from "@/app/components/ui/use-toast";

const EditProfile = ({ author }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const { toast } = useToast();

  const [isLoading, setLoading] = useState(false);

  const submitData = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const formValue = {
      dp: formData.get("dp"),
      name: formData.get("name"),
      bio: formData.get("bio"),
    };
    if (
      formValue.dp.name == "" &&
      formValue.name == "" &&
      formValue.bio == ""
    ) {
      toast({
        title: "All inputs are blank!",
        description: "Atleast fill one input.",
      });
    } else {
      const resp = await service.updateProfile(author.email, formValue);
      setLoading(false);
      closeModal();
      toast({
        title: "Successfully Updated!",
        description: "Profile has been Updated.",
      });
    }
  };
  return (
    <>
      <button
        onClick={openModal}
        className="flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"
      >
        <BsPencil className="mt-0.5 mr-1" size="18" />
        <span>Edit profile</span>
      </button>
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
                    Edit Profile
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

                <form onSubmit={submitData} className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input name="name" id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="dp" className="text-right">
                      Display Picture
                    </Label>
                    <Input
                      type="file"
                      name="dp"
                      id="dp"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bio" className="text-right">
                      Discription
                    </Label>
                    <Input name="bio" id="bio" className="col-span-3" />
                  </div>
                  <div className="mt-6 flex justify-center">
                    {isLoading ? (
                      <Button disabled>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </Button>
                    ) : (
                      <Button type="submit">Update</Button>
                    )}
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditProfile;
