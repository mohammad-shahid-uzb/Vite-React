import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_od0rubi",
        "template_6cvpatk",
        form.current,
        "72ofXnNEBBUBs7NOF"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          alert("message not sent successfully...");
          console.log(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <form className="cf" ref={form} onSubmit={sendEmail}>
      <h1 className="h1">Contact Us</h1>
      <h2 className="h2">Schedule a college admissions consultation </h2>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <button
        className="btn btn-primary"
        type="submit"
        value="Send"
        style={{ margin: "10px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
