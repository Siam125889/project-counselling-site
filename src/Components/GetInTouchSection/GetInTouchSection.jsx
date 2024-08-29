import { useRef, useState } from "react";
import "./GetInTouchSection.css";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef(); // Reference to the form element

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8n7f96o", // Service ID
        "template_ir12206", // Template ID
        form.current, // Form reference
        "H4WLQnTkTkrgjdo48" // User ID (public key)
      )
      .then(() => {
        toast.success("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Optionally, you can also clear the form using form.current.reset()
        form.current.reset();
      })
      .catch(() => {
        toast.error("🦄 hoga mara sara!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="get-in-touch-container">
      <h2 className="get-in-touch-title">Get in Touch</h2>
      <p className="get-in-touch-subtitle">
        Have a question or need more information? We're here to help.
      </p>
      <form ref={form} className="get-in-touch-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="get-in-touch-input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="get-in-touch-input"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="get-in-touch-textarea"
          required
        />
        <button type="submit" className="get-in-touch-button btn">
          Send Message
        </button>
      </form>
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
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default GetInTouchSection;
