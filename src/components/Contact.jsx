import React, { useContext } from 'react';
import ToastContext from '../contexts/ToastContext';

import SectionTitle from './SectionTitle';
import axios from 'axios';

function Contact() {
  const { showToast } = useContext(ToastContext);
  

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.target;
    console.log(form);
    const formData = new FormData(form);

    try {
      const response = await axios.post(form.action, formData, {
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.status === 200) {
        showToast('Message sent successfully!', 'success');
        // Reset the form if needed
        form.reset();
      } else {
        showToast('Error submitting Message. Please try again.', 'error');
      }
    } catch (error) {
      showToast('Error submitting Message. Please try again.','error');
    }
  }

  return (
    <div className="min-h-[calc(100vh-60px-78px)] grid place-items-center py-10">
      <div className="w-full md:max-w-2xl mx-auto">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="text-justify pb-3">
          If you want to contanct me 📮, you can use the form below or send me
          an email 📧 to{' '}
          <a
            className="underline text-blue-600 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-500 "
            href="mailto:valdesgutierrez@gmail.com"
          >
            valdesgutierrez@gmail.com
          </a>
          . More than happy to reply you as soon as I can 😃!
        </p>
        <form
          action="https://getform.io/f/d2010f57-f8bf-4041-8dd5-57375469d392"
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-4 bg-white dark:bg-gray-800 p-8 rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 bg-transparent border-2 rounded-lg focus:outline-none focus:border-yellow-500 hover:border-yellow-500 transition-all"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="p-3 bg-transparent border-2 rounded-lg focus:outline-none focus:border-yellow-500 hover:border-yellow-500 transition-all"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            required
            className="p-3 bg-transparent border-2 rounded-lg focus:outline-none focus:border-yellow-500 hover:border-yellow-500 transition-all"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-lg text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
