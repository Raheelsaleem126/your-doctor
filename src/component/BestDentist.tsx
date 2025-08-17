"use client"
import Link from 'next/link'
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";
import Image from 'next/image';

function BestDentist() {
    return (
        <>
            <div className="row content-wrapper style-9 align-items-end">
                <div className="col-xl-6 col-lg-6 m-b30">
                    <div className="section-head style-2 m-b30">
                        <div className="sub-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">General Practitioner</div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">About Dr Huma Sheikh</h2>
                        <p className="fw-normal wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s"><strong className="text-secondary fw-semibold">Dr Huma Sheikh</strong> is a highly skilled and compassionate General Practitioner with over 10 years of experience in the NHS. Her clinical background is complemented by advanced qualifications in women's health, reproductive medicine, and dermatology, making her a versatile and trusted doctor for a wide range of health concerns.</p>
                    </div>
                    <h3 className="text-primary title-dashed-separator wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">About Skills</h3>
                    <ul className="list-check text-secondary fw-medium grid-2 m-b35 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <li>Women's Health </li>
                        <li>Hormonal Care</li>
                        <li>Mental Health Support</li>
                        <li>Chronic Disease Management</li>
                        <li>Dermatologist</li>
                        <li>Skin Care</li>
                    </ul>
                    <div className="row align-items-center g-4">
                        <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                            <div className="text-center">
                                <Image src={IMAGES.sign} alt="" />
                                <span className="font-14 d-block">Dr Huma Sheikh</span>
                            </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                            <Link href="/appointment" className="btn btn-lg btn-icon btn-primary"> Appointment
                                <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-b30">
                    <div className="content-media">
                        <div className="dz-media" data-bottom-top="transform: translateY(30px)" data-top-bottom="transform: translateY(-30px)">
                            <Image src={IMAGES.about2} alt="" />
                        </div>
                        <div className="item1" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                            <div className="info-widget style-10 move-3">
                                <span className="content-text text-primary"><span className="counter"><CountUp end={10} duration={5} /></span>+</span>
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
export default BestDentist;