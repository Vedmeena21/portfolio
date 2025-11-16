/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
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

    emailjs.send(
      "service_dymbwbn",
      "template_r752neo",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "nohPlsYDBfHot5_Ih"
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
    <section id="contact" className="p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5">
      {/* YOUR COMPONENT UI STAYS THE SAME */}
      ...
    </section>
  );
};

export default Contact;
