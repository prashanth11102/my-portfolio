import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

// Constants for EmailJS (replace with your own)
const EMAIL_JS_SERVICE_ID = 'service_lxq22xh';
const EMAIL_JS_TEMPLATE_ID = 'template_744q25g'; // Use default template ID
const EMAIL_JS_USER_ID = 'Wv0WpXI1NqtIcL7GT'; // Replace with your EmailJS user ID

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Cleaning the form data
    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      toast.error('Please fill all the fields.', {
        position: 'bottom-right',
      });
      return;
    }

    // Sending email using EmailJS
    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: 'Prashanth', // Replace with recipient's name
          reply_to: user_email,
          to_email: 'prasanthreddymaddirala@gmail.com', // Replace with recipient's email
          message: user_message,
        },
        EMAIL_JS_USER_ID
      )
      .then(
        (response) => {
          setLoading(false);
          toast.success('Message sent successfully!', {
            position: 'bottom-right',
          });
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error('Error sending message:', error);
          toast.error('Uh, oh! Something went wrong. Please try again later.', {
            position: 'bottom-right',
          });
        }
      );
  };

  return (
    <div className="relative z-0 w-full min-h-screen bg-black">
      <div className="text-white contact overflow-hidden pt-12 mt-8 w-full h-full flex items-center justify-center" id="contact">
        <div className="z-10 w-full sm:w-[650px] p-8 rounded-2xl bg-black">
          <p className="font-light">REACH OUT TO ME</p>
          <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Contact.
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                className="py-4 px-6 rounded-lg font-medium bg-gray-900 text-white"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Do you have anything to say?"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white"
                required
              />
            </label>

            <button
              type="submit"
              className="py-2 px-4 rounded-xl outline-none w-fit font-bold shadow-md bg-gradient-to-r from-gray-500 to-pink-500 text-white"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
