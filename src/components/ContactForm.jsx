import React, { useRef, useState } from "react";
import FooterComponent from "./FooterComponent";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const serverId = process.env.REACT_APP_SERVER_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        `${serverId}`, //serverId
        `${templateId}`, //templateId
        form.current,
        `${publicKey}` //publicKey
      )
      .then(
        (result) => {
          toast.success("Message sent", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsLoading(false);
          console.log(result.text);
        },
        (error) => {
          toast.error("Message could not be sent", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative  min-w-screen bg-gray-800" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="text-white text-5xl font-bold mb-20 justify-center underline section-header max-sm:text-3xl">
          Contact
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              for="subject"
              className=" block mb-2  font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full  bg-gray-700 rounded-lg border border-gray-300 text-white focus:outline-none"
              placeholder="Jhon Doe"
              name="user_name"
              required
            />
          </div>
          <div>
            <label for="email" className="block mb-2  font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="block p-3 w-full  bg-gray-700 rounded-lg border border-gray-300 text-white focus:outline-none"
              placeholder="name@email.com"
              name="user_email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2  font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className=" block p-2.5 w-full  text-white  bg-gray-700 rounded-lg border border-gray-300 focus:outline-none"
              name="message"
              placeholder="Leave a message..."
            ></textarea>
          </div>

          {isLoading ? (
            <div role="status" className="flex justify-center">
              <svg
                aria-hidden="true"
                className="w-10 h-10  text-gray-200 animate-spin fill-emerald-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              className="z-[1] bg-transparent text-white hover:text-gray-800 py-2 px-4 border
       border-white mt-10 text-xl hover:bg-emerald-500 transition-colors duration-300 hover:border-emerald-500 my-word-btn"
            >
              <span>Send message</span>
            </button>
          )}
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactForm;
