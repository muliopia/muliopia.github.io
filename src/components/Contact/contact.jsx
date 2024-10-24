import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    
    <div className="font-barlow bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8">
     <div> <h1 className={`text-white ${isDesktopOrLaptop ? 'text-4xl' : 'text-3xl'} text-center pb-6`}>
        Contact <span className="text-lime-600">Me</span>
      </h1>
      <div className="mt-8 text-center">
        <h2 className="text-gray-200 text-xl">Contact with me</h2>
        <div className="flex justify-center space-x-6 m-4 mb-8">
          <a href="mailto:mulugetasahil31@gmail.com" className="text-lime-300 hover:text-lime-400">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/+251946277434" className="text-lime-300 hover:text-lime-400">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://t.me/Muliopia1" className="text-lime-300 hover:text-lime-400">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muliopia" className="text-lime-300 hover:text-lime-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/muliopia" className="text-lime-300 hover:text-lime-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    
      <div className="max-w-lg mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md mb-16 p-6">
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="block text-white">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-white">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="example@mail.com"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-white">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        placeholder="Your message here"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 bg-lime-600 text-white rounded hover:bg-lime-700 transition duration-200"
    >
      Send Message
    </button>
  </form>
</div>
</div>
     </div>
  );
}

export default Contact;