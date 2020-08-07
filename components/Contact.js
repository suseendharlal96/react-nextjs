import React from "react";

import Title from "./Title";

const Contact = () => {
  return (
    <section className="contact py-5">
      <div className="container">
        <Title title="contact us" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/lssuseendharlal@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name.."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  placeholder="your description here....."
                />
              </div>
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
