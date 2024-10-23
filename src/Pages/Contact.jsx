import React, { useRef, useState, useEffect } from 'react';
import Connect from '../Components/Connect';
import emailjs from "@emailjs/browser";
import { FaCircleNodes } from "react-icons/fa6";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  useEffect(() => {
    let timeout;
    if (messageSent) {
      timeout = setTimeout(() => {
        setMessageSent(false);
      }, 3000); // Message disappears after 3 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when sending starts
    setError('');  // Clear any previous error messages

    emailjs
      .sendForm(
        "service_zfnu9rj",
        "template_gkienm2",
        formRef.current,
        "zVUcPAe7d32vL9H0p"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again.');  // Set error message
        }
      )
      .finally(() => {
        setLoading(false);  // Set loading to false once the request is complete
      });
  };

  return (
    <section data-aos="fade-up" data-aos-duration="2000">
      <div className='flex flex-col items-center mx-auto w-full h-full hide-scrollbar'>
        <div data-aos="fade-up" data-aos-duration="2000" className='py-6 mx-auto text-center font-bold lg:text-xl text-2xl hide-scrollbar'>
          <div className='flex items-center justify-center gap-4'>
            <span className='tracking-wider text-gradient hover:text-gradient'>Contact Me</span>
            <FaCircleNodes className='text-2xl max-sm:text-3xl text-[#82cfff] spin' />
          </div>
          <span className='flex text-sm text-gray-400 mt-3'>Appreciate you taking the time to browse my portfolio! If you have any inquiries or opportunities, feel free to reach out. I'm always up for collaboration and embracing new challenges.</span>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='lg:flex lg:gap-x-8 hide-scrollbar w-full'>
          <div data-aos="fade-up" data-aos-duration="2000" className='shadow-inner hover:shadow-inner shadow-[#789fef] hover:shadow-[#789fef] bg-[#17191b] bg-transparent backdrop-blur rounded-xl py-6 lg:mt-0 mt-5'>
            <div className='font-bold md:text-lg text-xl text-gradient hover:text-gradient tracking-wider text-center'>
              <h2>Let's build something together...</h2>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3 my-5 lg:w-[56.2vw] px-5">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="lg:p-2 p-3 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-cyan-200 bg-opacity-5"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="lg:p-2 p-3 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-cyan-200 bg-opacity-5"
                required
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                className="p-2 lg:px-2 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-cyan-200 bg-opacity-5"
                required
              ></textarea>
              <input
                type="submit"
                value={loading ? "Sending..." : "Send"}
                className="text-base custom-border px-4 lg:py-3 py-4 rounded-lg flex-short gap-2 bg-cyan-400 bg-opacity-5 transition-all group shadow-2xl hover:bg-[#708fd3] cursor-pointer"
                disabled={loading}  // Disable the button while sending
              />
            </form>
            {
              messageSent && (
                <p className="text-sm text-center text-gradient brightness-125 tracking-wider mt-2 mx-2">Thank you! The message has been sent successfully.</p>
              )
            }
            {
              error && (
                <p className="text-sm text-center text-red-500 tracking-wider mt-2 mx-2">{error}</p>
              )
            }
          </div>
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default Contact;
