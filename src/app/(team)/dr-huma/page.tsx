"use client";
import Link from "next/link";
import Pagebanner from "@/component/Pagebanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import AppointmentData from "@/component/AppointmentData";
import CountUp from "react-countup";
import Image from "next/image";

function TeamDetail2() {
  return (
    <>
      <Header columnstand="header-transparent" />
      <main className="page-content">
        <Pagebanner title="Dr Huma Sheikh" />
        <section className="content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-b30">
                <aside className="side-bar sticky-top">
                  <div
                    className="widget wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.8s"
                  >
                    <div className="dz-team style-6">
                      <div className="dz-media">
                        <Image src={IMAGES.drhuma} alt="Dr Huma Sheikh" />
                      </div>
                      <ul className="dz-social">
                        <li>
                          <Link href="https://www.linkedin.com" target="_blank">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com"
                            target="_blank"
                          >
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com" target="_blank">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://wa.me/447956487764?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                            target="_blank"
                          >
                            <i className="fa-brands fa-whatsapp" />
                          </Link>
                        </li>
                        {/* <li><Link href="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li> */}
                        {/* <li><Link href="https://www.linkedin.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li> */}
                      </ul>
                      <div className="item1">
                        <div className="info-widget style-10 move-3">
                          <span className="content-text text-primary">
                            <span className="counter">
                              <CountUp end={10} duration={5} />
                            </span>
                            +
                          </span>
                          <h3 className="title m-b0">
                            Years <br /> Experienced
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-lg-6">
                <div className="section-head style-1 mb-30">
                  <h2
                    className="titlev fw-semibold m-b0 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.8s"
                  >
                    Dr Huma Sheikh
                  </h2>
                  <p
                    className="text-primary m-b20 fw-normal small wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.8s"
                  >
                    MBBS | MRCGP | DFSRH | DRCOG | Diploma in Dermatology
                  </p>
                  <p
                    className="text-primary m-b20 fw-normal small wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.8s"
                  >
                    Private General Practitioner | Over 10 Years of NHS
                    Experience
                  </p>
                  <p
                    className="fw-normal small wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="0.8s"
                  >
                    Dr Huma Sheikh is a highly skilled and compassionate General
                    Practitioner with over 10 years of experience in the NHS.
                    Her clinical background is complemented by advanced
                    qualifications in women's health, reproductive medicine, and
                    dermatology, making her a versatile and trusted doctor for a
                    wide range of health concerns.
                  </p>
                  <p
                    className="fw-normal small wow fadeInUp"
                    data-wow-delay="0.8s"
                    data-wow-duration="0.8s"
                  >
                    Known for her warm and approachable manner, Dr Sheikh builds
                    lasting relationships with her patients through careful
                    listening, clear communication, and evidence-based care. She
                    believes in empowering individuals to take control of their
                    health, tailoring every consultation to the unique needs and
                    goals of the patient.
                  </p>
                </div>
                <table
                  className="table table-border-bottom m-b40 wow fadeInUp"
                  data-wow-delay="1.0s"
                  data-wow-duration="0.8s"
                >
                  <tbody>
                    <tr>
                      <th>Specialty</th>
                      <td>Private General Practitioner</td>
                    </tr>
                    <tr>
                      <th>Degrees</th>
                      <td>
                        <Link href={"#"} scroll={false}>
                          MBBS | MRCGP | DFSRH | DRCOG | Diploma in Dermatology
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>Experience</th>
                      <td>Over 10 Years of NHS Experience</td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td>
                        {" "}
                        Monday - Friday 09:00 - 18:00
                        <br />
                        Saturday 09:00 - 16:00
                        <br />
                        Sunday Closed
                      </td>
                    </tr>
                    <tr>
                      <th>Awards</th>
                      <td>2022 - 2023 : Excellence in Women's Health Award</td>
                    </tr>
                  </tbody>
                </table>
                <h3
                  className="font-20 m-b25 wow fadeInUp"
                  data-wow-delay="1.2s"
                  data-wow-duration="0.8s"
                >
                  Professional Skills
                </h3>
                {/* Expertise Section Start */}
                <div
                  className="expertise-list m-b35 wow fadeInUp"
                  data-wow-delay="2.0s"
                  data-wow-duration="0.8s"
                >
                  <ul className="list-unstyled">
                    <li className="m-b15">
                      <strong>Women's Health & Hormonal Care:</strong> Dr Sheikh
                      offers expert guidance in all aspects of women's health,
                      from menstrual issues and contraception to fertility and
                      gynaecological concerns. She has a strong focus on
                      menopause and hormonal balance, providing personalised
                      treatment plans, including HRT and lifestyle management,
                      to support women through perimenopause and beyond.
                    </li>
                    <li className="m-b15">
                      <strong>Mental Health Support:</strong> With a thoughtful
                      and non-judgemental approach, Dr Sheikh helps patients
                      navigate issues such as anxiety, depression, stress, and
                      emotional wellbeing. She recognises the importance of
                      early intervention and continuity of care in supporting
                      mental health.
                    </li>
                    <li className="m-b15">
                      <strong>Chronic Disease Management:</strong> Dr Sheikh is
                      experienced in managing long-term conditions such as
                      diabetes, hypertension, and obesity. Her approach is
                      holistic, blending medical treatment with lifestyle
                      coaching to help patients make sustainable improvements in
                      their overall wellbeing.
                    </li>
                    <li className="m-b15">
                      <strong>Dermatology and Skin Conditions:</strong> Holding
                      a postgraduate diploma in dermatology, Dr Sheikh has a
                      keen eye for diagnosing and managing common and complex
                      skin issues—including acne, eczema, psoriasis, rosacea,
                      and rashes—as well as offering aesthetic advice and mole
                      assessments.
                    </li>
                  </ul>
                </div>
                {/* Expertise Section End */}
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-2 bg-light" id="book-appointment">
          <div className="container pb-5">
            <div
              className="section-head style-1 text-center m-b40 wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="0.8s"
            >
              <h2 className="title fw-semibold text-dark m-b10">
                Book a GP Appointment
              </h2>
              <h3 className="small text-body mb-0">Using the calendar below</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div
                  className="shadow-lg bg-white wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid rgba(12, 72, 145, 0.08)",
                  }}
                >
                  <div className="row g-0">
                    <div
                      className="col-lg-5 p-4 p-lg-5 d-flex flex-column justify-content-center"
                      style={{
                        background: "rgba(12, 72, 145, 0.05)",
                        borderRight: "1px solid rgba(12, 72, 145, 0.08)",
                      }}
                    >
                      <span
                        className="text-uppercase fw-semibold small mb-2 text-primary"
                        style={{ letterSpacing: "0.08em" }}
                      >
                        Book Online
                      </span>
                      <h3 className="fw-semibold mb-3 text-dark">
                        Schedule with Dr Huma
                      </h3>
                      <p className="mb-4 text-body">
                        Reserve your consultation in minutes via our secure
                        Semble booking portal.
                      </p>
                      <ul className="list-unstyled m-0">
                        <li className="d-flex align-items-start mb-2">
                          <i
                            className="feather icon-check"
                            style={{
                              marginRight: "10px",
                              marginTop: "4px",
                              color: "var(--bs-primary)",
                            }}
                          />
                          <span>
                            Live availability across clinics and virtual
                            appointments
                          </span>
                        </li>
                        <li className="d-flex align-items-start mb-2">
                          <i
                            className="feather icon-check"
                            style={{
                              marginRight: "10px",
                              marginTop: "4px",
                              color: "var(--bs-primary)",
                            }}
                          />
                          <span>
                            Instant confirmation delivered to your inbox
                          </span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i
                            className="feather icon-check"
                            style={{
                              marginRight: "10px",
                              marginTop: "4px",
                              color: "var(--bs-primary)",
                            }}
                          />
                          <span>
                            Secure payment handled directly within Semble
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <Link
                          href="https://online-booking.semble.io/?token=404a09acbda8f38b99cfe49df525e1565708208a"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-hover1 fw-semibold"
                        >
                          Open Full Booking Page
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7 bg-white p-3 p-lg-4">
                      <div
                        style={{
                          position: "relative",
                          height: "80vh",
                          minHeight: "560px",
                          overflow: "hidden",
                          borderRadius: "18px",
                          boxShadow: "0 20px 45px rgba(12, 72, 145, 0.12)",
                        }}
                      >
                        <iframe
                          src="https://online-booking.semble.io/?token=404a09acbda8f38b99cfe49df525e1565708208a"
                          title="Book an appointment with Dr Huma Sheikh"
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                          }}
                          allow="clipboard-write; encrypted-media"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-sm-6 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="0.8s"
              >
                <div className="icon-bx-wraper style-10">
                  <div className="icon-bx bg-secondary">
                    <span className="icon-cell">
                      <i className="feather icon-map-pin" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-title fw-semibold">Virtual Clinic</h5>
                    <p>Serving patients online across the UK</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 m-b30 wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
              >
                <div className="icon-bx-wraper style-10">
                  <div className="icon-bx bg-secondary">
                    <span className="icon-cell">
                      <i className="feather icon-phone" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-title fw-semibold">Call Us</h5>
                    <p>
                      <Link href="tel:+447956487764" className="text-body">
                        +44 7956 487764
                      </Link>
                      <br />
                      <Link href="tel:+447540634228" className="text-body">
                        +44 7540 634228
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 m-b30 wow fadeInUp"
                data-wow-delay="0.6s"
                data-wow-duration="0.8s"
              >
                <div className="icon-bx-wraper style-10">
                  <div className="icon-bx bg-secondary">
                    <span className="icon-cell">
                      <i className="feather icon-mail" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-title fw-semibold">Send us a Mail</h5>
                    <p>
                      <Link
                        href="mailto:yourdoctors.gp@gmail.com"
                        className="text-body"
                      >
                        yourdoctors.gp@gmail.com
                      </Link>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 m-b30 wow fadeInUp"
                data-wow-delay="0.8s"
                data-wow-duration="0.8s"
              >
                <div className="icon-bx-wraper style-10">
                  <div className="icon-bx bg-secondary">
                    <span className="icon-cell">
                      <i className="feather icon-clock" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h5 className="dz-title fw-semibold">Opening Time</h5>
                    <p>
                      Monday - Friday: 09:00 - 18:00
                      <br />
                      Saturday: 09:00 - 16:00
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-wrapper style-12 bg-secondary background-blend-burn"
          style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}
        >
          <div className="container">
            <AppointmentData />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default TeamDetail2;
