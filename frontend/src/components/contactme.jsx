import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://my-portfolio-8nuv.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-28 mt-10">
      <motion.p
        className="text-sm font-mono text-[#c9b495]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        CONTACT INFO
      </motion.p>
      <motion.p
        className="text-2xl sm:text-5xl text-gray-50 font-serif font-semibold mb-6 p-2 w-full sm:w-96 text-center sm:text-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}>
        Get in Touch
      </motion.p>
      <motion.span
        className="inline-block border-l-4 rounded-md border-[#f4cc95] h-12 ml-4 mb-10"
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "3rem" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}></motion.span>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
        <div>
          <motion.img
            src="contactadmission.jpeg"
            className="rounded-3xl h-[300px] sm:h-[550px] w-[300px] sm:w-[550px]"
            alt="Contact"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="w-full sm:w-[500px] text-center sm:text-left">
          <motion.p
            className="text-[#dac5a7] text-xl sm:text-xl sm:font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            Message
          </motion.p>
          <motion.p
            className="text-white font-bold sm:font-[700] leading-6 sm:leading-9 text-xl sm:text-[28px] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}>
            Write Me Something
          </motion.p>
          <motion.p
            className="text-[#7f7466] font-[400] leading-6 sm:leading-9 text-sm sm:text-[18px] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}>
            Call Me : <span className="text-[#dac5a7]">+251930364646</span>
          </motion.p>
          <motion.p
            className="text-[#7f7466] font-[400] leading-6 sm:leading-9 text-sm sm:text-[18px] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}>
            E-Mail : <span className="text-[#dac5a7]">estifanosk3@gmail.com</span>
          </motion.p>
          {isSubmitted ? (
            <motion.p
              className=" border border-[#f6dcb7] p-16 text-[#928471] font-medium sm:font-[500] leading-6 sm:leading-9 text-lg sm:text-[15px] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              Thank you for your message. It has been sent.
            </motion.p>
          ) : (
            <>
              <motion.form
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Name"
                    value={input.name}
                    onChange={handleInput}
                    className="p-4 px-8 w-full rounded-md bg-[#333] text-white placeholder-[#7f7466] border border-black mb-4 outline-none"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="E-mail"
                    value={input.email}
                    onChange={handleInput}
                    className="p-4 px-8 w-full rounded-md bg-[#333] text-white placeholder-[#7f7466] border border-black mb-4 outline-none"
                  />
                </div>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  value={input.subject}
                  onChange={handleInput}
                  className="p-4 px-8 w-full rounded-md bg-[#333] text-white placeholder-[#7f7466] border border-black mb-4 outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  value={input.message}
                  onChange={handleInput}
                  className="p-4 px-8 w-full rounded-md bg-[#333] text-white h-32 placeholder-[#7f7466] border border-black mb-4 outline-none"></textarea>
                <motion.button
                  type="submit"
                  className="p-4 px-8 rounded-md bg-[#f4cc95] text-black font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
