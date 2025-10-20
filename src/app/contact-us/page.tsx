"use client"
import Link from "next/link";
import { useRef } from "react";
import ContactMap from "@/component/ContactMap";
import WantApponiment from "@/component/WantApponiment";
import { IMAGES, SVGICONS } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";
import ContactForm from "@/component/ContactForm";


function Contactus() {
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <div className="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-content">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="dz-bnr-inr-flex">
                                <div className="bnr-info">
                                    <h1 className="fw-semibold wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Information</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Thank you for visiting our website. We are here to assist you with any inquiries you may have.</p>
                                    <div className="info-widget style-16 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                        <div className="row g-xl-5 g-4">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-1 align-items-center">
                                                    <div className="icon-bx bg-primary">
                                                        <span className="icon-cell">
                                                            <i className="feather icon-clock" />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dz-title fw-semibold">Working Hours:</h5>
                                                        <p>Mon-Thu: 8:00am-5:00pm<br /> Fri: 8:00am-1:00pm</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-1 align-items-center">
                                                    <div className="icon-bx bg-secondary">
                                                        <span className="icon-cell">
                                                            <i className="feather icon-mail" />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dz-title fw-semibold">Office Address:</h5>
                                                        <p>Virtual Clinic <br /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="tel:+4479564877644567890" className="btn btn-xl btn-icon btn-primary btn-rounded btn-shadow mb-3 mb-sm-0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                        <span className="left-icon"> <i className="feather icon-phone-call" /> </span> +44 795 648 7764
                                    </Link>
                                </div>
                             <ContactForm/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="item1"><Image className="move-1" src={IMAGES.herobanner2} alt="" /></div> */}
                    {/* <div className="item2"><Image className="move-2" src={IMAGES.herobanner4} alt="" /></div> */}
                    {/* <div className="item3"><Image className="move-3" src={IMAGES.herobanner3} alt="" /></div> */}
                    <svg className="banner-shape" viewBox="0 0 1920 180" fill="none" xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{__html : SVGICONS.bannershape}}
                    />                        
                    
                    <div className="banner-shape4"></div>
                    <div className="banner-shape5"></div>
                </div>
                {/* <ContactMap /> */}
                <WantApponiment />
            </main>
            <Footer />            
        </>
    )
}
export default Contactus;