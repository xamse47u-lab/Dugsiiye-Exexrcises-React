import React from "react";
import useForm from "./useForm";

const ContactForm = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Date", values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          name:
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <label>
            email:
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            phone:
            <input
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            message:
            <textarea
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default ContactForm;
