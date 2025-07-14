"use client"
import Link from "next/link";
import Pagebanner from "@/component/Pagebanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import AppointmentData from "@/component/AppointmentData";
import CountUp from "react-countup";
import Image from "next/image";

function TeamDetail() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Team Details' />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-b30">
                                <aside className="side-bar sticky-top">
                                    <div className="widget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <div className="dz-team style-6">
                                            <div className="dz-media">
                                                <Image src={IMAGES.drsamira} alt="/" />
                                            </div>
                                            <ul className="dz-social">
                                                <li><Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                                <li><Link href="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                <li><Link href="https://www.linkedin.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                            <div className="item1">
                                                <div className="info-widget style-10 move-3">
                                                    <span className="content-text text-primary"><span className="counter"><CountUp end={15} duration={5} /></span>+</span>
                                                    <h3 className="title m-b0">Years <br /> Experienced</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-head style-1 mb-30">
                                    <h2 className="titlev fw-semibold m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Dr Samira Masoud</h2>
                                    <p className="text-primary m-b20 fw-normal small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Private GP | MBBS | MRCGP | Over 15 Years of NHS Experience</p>
                                    <p className="fw-normal small wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">Dr Samira Masoud is a highly experienced and compassionate General Practitioner with over 15 years of clinical experience in the NHS. She now offers private GP services with a strong focus on personalised, patient-centred care.</p>
                                    {/* <p className="fw-normal small wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> */}
                                </div>
                                <table className="table table-border-bottom m-b40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <tbody>
                                        <tr>
                                            <th>Specialty</th>
                                            <td>Private GP</td>
                                        </tr>
                                        <tr>
                                            <th>Degrees</th>
                                            <td><Link href={"#"} scroll={false}>MBBS University of California</Link></td>
                                        </tr>
                                        <tr>
                                            <th>Experience</th>
                                            <td>Over 15 Years of NHS Experience</td>
                                        </tr>
                                        <tr>
                                            <th>Time</th>
                                            <td> Monday - Friday 08:00 - 20:00<br />
                                                Saturday 09:00 - 18:00<br />
                                                Sunday 09:00 - 18:00
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Awards</th>
                                            <td>2018 - 2019 : William Allan Award</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 className="font-20 m-b25 wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">Professional Skills</h3>
                                {/* <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Radiant Skin Dermatology</span>
                                        <span className="progress-value">90%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.6s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Flawless Dermatology</span>
                                        <span className="progress-value">78%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.8s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Luminous Dermatology</span>
                                        <span className="progress-value">95%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '95%' }}></div>
                                    </div>
                                </div> */}
                                {/* Expertise Section Start */}
                                <div className="expertise-list m-b35 wow fadeInUp" data-wow-delay="2.0s" data-wow-duration="0.8s">
                                    {/* <h4 className="font-18 m-b15">Expertise</h4> */}
                                    <ul className="list-unstyled">
                                        <li className="m-b15">
                                            <strong>Women’s Health:</strong> Supporting women through all stages of life, from reproductive health to postmenopausal care, with a holistic and empathetic approach.
                                        </li>
                                        <li className="m-b15">
                                            <strong>Menopause Management:</strong> Extensive experience in diagnosing and treating menopause-related symptoms, offering evidence-based HRT options and lifestyle support.
                                        </li>
                                        <li className="m-b15">
                                            <strong>Mental Health:</strong> Skilled in managing anxiety, depression, stress, and other mental health conditions, with a focus on early intervention and continuity of care.
                                        </li>
                                        <li className="m-b15">
                                            <strong>Palliative Care:</strong> Dedicated to providing compassionate support and symptom control for patients with life-limiting conditions, ensuring dignity and comfort.
                                        </li>
                                        <li className="m-b15">
                                            <strong>Joint Injections:</strong> Proficient in performing steroid joint injections for conditions such as arthritis and bursitis to relieve pain and improve mobility.
                                        </li>
                                        <li className="m-b15">
                                            <strong>Minor Surgery:</strong> Experienced in carrying out minor surgical procedures, including removal of skin lesions, cysts, and other minor interventions.
                                        </li>
                                    </ul>
                                </div>
                                {/* Expertise Section End */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-map-pin" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Address</h5>
                                        <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-phone" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Call Us</h5>
                                        <p>
                                            <Link href="tel:+01234567890" className="text-body">+0 123-456-7890</Link><br />
                                            <Link href="tel:+09876543210" className="text-body">+0 987-654-3210</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-mail" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Send us a Mail</h5>
                                        <p>
                                            <Link href="mailto:info@example.com" className="text-body">info@example.com</Link><br />
                                            <Link href="mailto:clinicmaster@example.com" className="text-body">clinicmaster@example.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-clock" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Opening Time</h5>
                                        <p>Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
            </main>
            <Footer />            
        </>
    )
}
export default TeamDetail;