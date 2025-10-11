"use client";
import React, { useRef, useState } from "react";
import { useEmailService } from "@/constant/useEmailService";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();

  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("loading");
    const result = await sendEmail(form.current);

    if (result.success) {
      setStatus("success");
      form.current.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div
      className="form-wrapper style-1 m-l40 wow fadeInUp"
      data-wow-delay="1.0s"
      data-wow-duration="0.8s"
    >
      <div className="form-body bg-white">
        <div className="section-head style-1 m-b30">
          <h2 className="title">Ask a Question</h2>
          <p>
            If you have any questions, you can contact us. Please, fill out the
            form below.
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="dzForm row">
          <div className="col-sm-6 m-b30">
            <div className="form-floating floating-underline">
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="inputYourName2"
                placeholder="First Name"
                required
              />
              <label htmlFor="inputYourName2">First Name</label>
            </div>
          </div>

          <div className="col-sm-6 m-b30">
            <div className="form-floating floating-underline">
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="inputLastName2"
                placeholder="Last Name"
                required
              />
              <label htmlFor="inputLastName2">Last Name</label>
            </div>
          </div>

          <div className="col-sm-6 m-b30">
            <div className="form-floating floating-underline">
              <input
                name="phone"
                type="number"
                className="form-control dz-number"
                id="inputPhoneNumber2"
                placeholder="Phone Number"
                required
              />
              <label htmlFor="inputPhoneNumber2">Phone Number</label>
            </div>
          </div>

          <div className="col-sm-6 m-b30">
            <div className="form-floating floating-underline">
              <input
                name="email"
                type="email"
                className="form-control"
                id="inputYourEmail2"
                placeholder="Your Email"
                required
              />
              <label htmlFor="inputYourEmail2">Your Email</label>
            </div>
          </div>

          <div className="col-sm-12 m-b30">
            <div className="form-floating floating-underline">
              <textarea
                name="message"
                className="form-control"
                id="inputMessage"
                rows={6}
                placeholder="Message"
                required
              ></textarea>
              <label htmlFor="inputMessage">Message</label>
            </div>
          </div>

          <div className="col-sm-12">
            <button
              type="submit"
              name="submit"
              value="submit"
              className="btn btn-lg btn-icon btn-primary btn-shadow"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit Now"}{" "}
              <span className="right-icon">
                <i className="feather icon-arrow-right" />
              </span>
            </button>
          </div>

          {status === "success" && (
            <p className="text-success mt-3">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-danger mt-3">
              ❌ Failed to send message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
