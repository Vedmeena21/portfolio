/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  SiGithub,
  SiLinkedin,
  SuInstagram,
  SiGmail,
} from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dymbwbn",      // ⚠️ your service ID
        "template_r752neo",     // ⚠️ your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "nohPlsYDBfHot5_Ih"     // ⚠️ your public key
      )
      .then(() => {
        alert("Message sent successfully! I'll get back to you soon 🚀");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Try again!");
      });
  };

  return (
    <section
      id="contact"
      className="p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center mb-2">
        Contact Me
      </h1>
      <p className="text-center text-blue-600 dark:text-cyan-400 font-medium mb-10">
        Let's Connect !
      </p>

      {/* Main Wrapper */}
      <div className="flex justify-between gap-10 max-md:flex-col bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040f] dark:to-[#0B274C] rounded-3xl shadow-xl p-10">
        
        {/* LEFT SIDE — Info Section */}
        <div className="flex flex-col justify-center w-1/2 max-md:w-full text-[#00040f] dark:text-slate-300 gap-5">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mb-3">
            <a
              href="https://www.linkedin.com/in/ved-prakash-meena/"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/Vedmeena21"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.instagram.com/ved.meenaa/"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <SiInstagram />
            </a>
            <a
              href="mailto:connect.ved21@gmail.com"
              className="hover:text-red-500 dark:hover:text-red-400 transition"
            >
              <SiGmail />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <span>+91 8529608145</span>
          </div>
          <div className="flex items-center gap-3">
            <SiGmail />
            <span>connect.ved21@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt />
            <span>
              House Number 1, Govindham Vihar, Ganpati Nagar, Pushkar Road, Ajmer, Rajasthan 305004
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="w-1/2 max-md:w-full bg-white/90 dark:bg-slate-800/50 p-8 rounded-2xl shadow-inner border border-slate-300 dark:border-slate-700 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-2 py-3 px-5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-white dark:text-[#00040f] font-semibold text-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="text-[#00040f] dark:text-slate-300 text-center mt-10 tracking-wider capitalize text-sm">
        Made with 💙 by Ved Prakash Meena & the Open Source Community
      </p>
    </section>
  );
};

export default Contact;
