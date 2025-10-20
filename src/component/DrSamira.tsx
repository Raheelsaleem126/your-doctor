"use client"
import Link from 'next/link'
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";
import Image from 'next/image';

function DrSamira() {
    return (
        <>
            <div className="row content-wrapper style-9 align-items-end">
                <div className="col-xl-6 col-lg-6 m-b30">
                    <div className="section-head style-2 m-b30">
                        <div className="sub-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">General Practitioner</div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">About Dr Samira Masoud</h2>
                        <p className="fw-normal wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s"><strong className="text-secondary fw-semibold">Dr Samira Masoud</strong> is a highly skilled and compassionate General Practitioner with over 10 years of experience in the NHS. Her clinical background is complemented by advanced qualifications in women's health, reproductive medicine, and dermatology, making her a versatile and trusted doctor for a wide range of health concerns.</p>
                    </div>
                    <h3 className="text-primary title-dashed-separator wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">About Skills</h3>
                    <ul className="list-check text-secondary fw-medium grid-2 m-b35 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <li>Women's Health </li>
                        <li>Hormonal Care</li>
                        <li>Mental Health Support</li>
                        <li>Chronic|Disease|Management</li>
                        <li>Dermatologist</li>
                        <li>Skin Care</li>
                        <li>Weight Loss Management</li>
                        <li>Menopause Management</li>
                    </ul>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                            <Link href="/dr-samira#book-appointment" className="btn btn-lg btn-primary btn-hover1" style={{
                                padding: '15px 30px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                borderRadius: '8px',
                                textTransform: 'none',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(0, 212, 170, 0.3)',
                                transition: 'all 0.3s ease'
                            }}>
                                Book Appointment with Dr. Samira Masoud
                                <span className="ms-2">
                                    <i className="fa fa-calendar-plus" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-b30">
                    <div className="content-media">
                        <div className="dz-media" data-bottom-top="transform: translateY(30px)" data-top-bottom="transform: translateY(-30px)">
                            <Image src={IMAGES.drsamira} alt="" />
                        </div>
                        <div className="item1" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                            <div className="info-widget style-10 move-3">
                                <span className="content-text text-primary"><span className="counter"><CountUp end={20} duration={5} /></span>+</span>
                                <h3 className="title m-b0">Years <br /> Experienced</h3>
                            </div>
                        </div>
                        {/* <div className="item2" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                            <div className="dz-img-box style-1 move-4">
                                <div className="dz-media">
                                    <Image src={IMAGES.logo1} alt="logo1" />
                                </div>
                                <div className="dz-content">
                                    <h3 className="title">ClinicMaster 2025</h3>
                                    <p>Quality and Accreditation Institute</p>
                                    <Link href={"#"} scroll={false} className="btn-link">Best Dermatologists</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default DrSamira;