import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
    emailjs
      .sendForm("default_service", "template_aghq8m4", e.target, "qXnzSlx-lfaSc7lTn")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const navigate = useNavigate();
  const routeChange = () => { 
    let path = `/thank-you`; 
    if(name != '' && email != ''){
      setTimeout(() => {
        navigate(path);
      }, 3000);
    } else {
      console.log('Need to fill out required fields');
    }
  }

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row overflow-hidden">
              <div className="section-title drop-in">
                <h2>Get In Touch</h2>
                <p className="drop-in-2">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="column">
                  <div className="col-3 drop-in-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="effect"
                        placeholder="Name*"
                        required
                        onChange={handleChange}
                      />
                      <span class="focus-border"></span>
                  </div>
                  <div className="col-3 drop-in-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="effect"
                        placeholder="Email*"
                        required
                        onChange={handleChange}
                      />
                      <span class="focus-border"></span>
                  </div>
                  <div className="col-3 drop-in-3">
                      <input
                        type="phone"
                        id="phone"
                        name="phone"
                        class="effect"
                        placeholder="Phone Number (Optional)"
                        required
                        onChange={handleChange}
                      />
                      <span class="focus-border"></span>
                  </div>
                </div>
                <div className="message-container drop-in-3">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  />
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg drop-in-4" onClick={routeChange}>
                  Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
