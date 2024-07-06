"use client";
import { useSession } from "next-auth/react";
import { client, createRegistration } from "./createRegistration";

const OrientationForm = () => {
  const { data: user } = useSession({
    required: true,
  });
  const onWheel = (e) => {
    e.target.blur();
  };

  const submitData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValue = {
      name: formData.get("name"),
      email: user?.user.email,
      age: formData.get("age"),
      phone: formData.get("phone"),
      college: formData.get("college"),
      currentYear: formData.get("currentYear"),
      munAttended: formData.get("munAttended"),
    };
    console.log(formValue);
    const resp = await client.request(createRegistration, formValue);
    console.log(resp);
  };

  return (
    <section className=" bg-gray-900 text-sm">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full">
        <div className="w-full  rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={submitData}
              action={submitData}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  disabled={true}
                  placeholder={user?.user.email}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your good name"
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="your age"
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                  onWheel={onWheel}
                  autoComplete="off"
                  min="16"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="contact number"
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                  minLength="10"
                  min="1"
                  onWheel={onWheel}
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="college"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  College Name
                </label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  placeholder="your college name"
                  className="bordersm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="currentYear"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Current Year of study in College
                </label>
                <input
                  type="number"
                  name="currentYear"
                  id="currentYear"
                  placeholder="year of study in College"
                  className="bordersm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                  min="1"
                  autoComplete="off"
                  onWheel={onWheel}
                />
              </div>
              <div>
                <label
                  htmlFor="munAttended"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  How many MUN's have you attended?
                </label>
                <input
                  type="number"
                  name="munAttended"
                  id="munAttended"
                  placeholder="your answer"
                  className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                  min="0"
                  onWheel={onWheel}
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="preference"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Preference
                </label>
                <select
                  name="preference"
                  id="preference"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-white focus:border-white"
                  required
                >
                  <option>Preference 1</option>
                  <option>Preference 2</option>
                  <option>Preference 3</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrientationForm;
