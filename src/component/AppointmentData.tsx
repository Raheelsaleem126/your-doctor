"use client"
import { IMAGES } from "../constant/theme";
import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOppointEmail } from "@/constant/useOppointEmail";

function AppointmentData() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [selectCat, setSelectCat] = useState("Select Service");
  const [selectCatt, setSelectCatt] = useState("Select Doctor");
  const [statusMessage, setStatusMessage] = useState<string | null>(null); // ✅ success/error text
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ loader state

  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useOppointEmail();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await sendEmail(form.current);
    setIsSubmitting(false);

    if (result.success) {
      setStatusMessage("✅ Your appointment request has been sent successfully!");
      form.current.reset();
    } else {
      setStatusMessage("❌ Failed to send appointment request. Please try again later.");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="content-info">
            <div className="section-head style-3 m-b40">
              <h2 className="title text-white m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                Make An <span className="text-yellow">Appointment</span>
              </h2>
            </div>

            <div className="form-wrapper">
              <div className="form-body">
                <form ref={form} onSubmit={handleSubmit} className="dzForm" method="POST">
                  {/* Hidden inputs for EmailJS template */}
                  <input type="hidden" name="appointment_date" value={startDate.toLocaleString()} />
                  <input type="hidden" name="service" value={selectCat} />
                  <input type="hidden" name="doctor" value={selectCatt} />

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-xl-4 col-sm-6 m-b10">
                      <div className="form-floating floating-outline input-light">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="inputYourName"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="inputYourName">Your Name</label>
                        <span className="input-group-text"><i className="feather icon-user" /></span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-xl-4 col-sm-6 m-b10">
                      <div className="form-floating floating-outline input-light">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="inputYourEmail"
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="inputYourEmail">Your Email</label>
                        <span className="input-group-text"><i className="feather icon-mail" /></span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="col-xl-4 col-sm-6 m-b10">
                      <div className="form-floating floating-outline input-light base-calender">
                        <DatePicker
                          className="form-control"
                          selected={startDate}
                          onChange={(date: Date | null) => date && setStartDate(date)}
                          placeholderText="Select Date & Time"
                          dateFormat="Pp"
                        />
                        <span className="input-group-text"><i className="feather icon-calendar" /></span>
                      </div>
                    </div>

                    {/* Service */}
                    <div className="col-xl-4 col-sm-6 m-b10">
                      <div className="form-floating floating-outline input-light">
                        <Dropdown className="bs-select form-control">
                          <Dropdown.Toggle as="div" className="p-1">
                            {selectCat}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSelectCat("Skin Concerns")}>Skin Concerns</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectCat("Musculoskeletal (MSK) Issues")}>Musculoskeletal (MSK) Issues</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectCat("Diabetes Care")}>Diabetes Care</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectCat("Obesity & Weight Management")}>Obesity & Weight Management</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectCat("Birth Control & Sexual Health")}>Birth Control & Sexual Health</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    {/* Doctor */}
                    <div className="col-xl-4 col-sm-6 m-b10">
                      <div className="form-floating floating-outline input-light">
                        <Dropdown className="form-control bs-select">
                          <Dropdown.Toggle as="div" className="p-1">
                            {selectCatt}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSelectCatt("Dr Huma Shaikh")}>Dr Huma Shaikh</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectCatt("Dr Samira Masoud")}>Dr Samira Masoud</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-xl-8 col-sm-12 m-b10">
                      <div className="form-floating floating-outline input-light">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Additional Message"
                          rows={3}
                        ></textarea>
                        <label>Additional Message</label>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-xl-4 col-sm-6 m-b10">
                      <button
                        type="submit"
                        name="submit"
                        value="submit"
                        className="btn btn-lg btn-icon btn-white shadow-sm w-100"
                        disabled={isSubmitting}
                      >
                        <span className="w-100">
                          {isSubmitting ? "Sending..." : "Book Appointment"}
                        </span>
                        <span className="right-icon bg-primary">
                          <i className="feather icon-arrow-right" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* ✅ Success/Error Message Display */}
                {statusMessage && (
                  <div
                    className={`mt-3 text-center ${
                      statusMessage.startsWith("✅") ? "text-success" : "text-danger"
                    }`}
                    style={{ fontWeight: "500" }}
                  >
                    {statusMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-4 align-self-end">
          <div className="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
            <Image src={IMAGES.drsamira} alt="about1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentData;
