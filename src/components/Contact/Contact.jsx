import { useRef } from "react";
import './Contact.css'; // Import the vanilla CSS file
import emailjs from "@emailjs/browser";
import Reveal from "../Reveal/Reveal";

const Contact = () => {
  const form = useRef();

  // Function to handle form submission and send email
  const sendEmail = (e) => {
    e.preventDefault();
    let flag = 0;

    // Check if any input field is empty
    const list = document.querySelectorAll(".inputField");
    list.forEach((item) => {
      if (item.value === "") flag = 0;
      else flag = 1;
    });

    // If all fields are filled, send the form
    if (flag === 1) {
      emailjs
        .sendForm(
          "service_3ze6mii",
          "template_7nzpuuj",
          form.current,
          "e6nJ1Y2T1E0i10m9O"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset(); // Reset the form after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Reveal>
      <div id="contact" className="contact">
        {/* Contact Header */}
        <div className="textContContact flex flex-col items-center justify-center text-center pt-15 pb-16">
          <h1 className="text-[3.8rem]">Contact Me</h1>
          <p className="lg:w-[50%] text-[1.1rem] mx-auto px-10">
            Please fill out the form below to discuss any work opportunities
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          className="contactForm lg:w-[50vw] w-full mx-auto flex flex-col items-center pb-16 px-8"
          onSubmit={sendEmail} // Call sendEmail function on form submission
        >
          {/* Name Input */}
          <input
            type="text"
            name="from_name"
            className="inputField"
            placeholder="Your Name"
          />
          
          {/* Email Input */}
          <input
            type="email"
            name="from_email"
            className="inputField"
            placeholder="Your Email"
          />
          
          {/* Message Input */}
          <textarea
            cols="30"
            rows="10"
            className="inputField"
            placeholder="Your message"
            name="message"
          ></textarea>
          
          {/* Submit Button */}
          <button
            className="submitBtn bg-white text-black py-4 px-16 rounded-xl cursor-pointer font-semibold hover:bg-contactHover "
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </Reveal>
  );
};

export default Contact;
