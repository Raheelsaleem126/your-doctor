"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footerdata } from "../constant/alldata";    
import { useRef } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

function Footer() {
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
            <footer className="site-footer style-1 footer-dark" style={{ backgroundImage: `url(${IMAGES.bg5.src})` }}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-2">
                                    <div className="footer-logo logo-white">
                                        <Link href="/"><Image src={IMAGES.logowhite} alt="logo" /></Link>
                                    </div>
                                    <p><span className="text-white">Your Doctor</span> provides comprehensive healthcare services with a focus on skin concerns, musculoskeletal issues, diabetes care, weight management, and sexual health. Our experienced team is dedicated to your well-being.</p>
                                    <div className="widget-rating2">
                                        <Image src={IMAGES.google} alt="google" />
                                        <div className="clearfix">
                                            <div className="d-flex">
                                                <ul className="star-list">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                                <span className="rating ms-1">(4.8)</span>
                                            </div>
                                            <span className="text">12k+ ratings on google</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {footerdata.map((data, i) => (
                                <div className="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" key={i}>
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">{data.title} </h2>
                                        <ul className="list-hover1">
                                            <li><Link href={data.link1}><span>{data.span1}</span></Link></li>
                                            <li><Link href={data.link2}><span>{data.span2}</span></Link></li>
                                            <li><Link href={data.link3}><span>{data.span3}</span></Link></li>
                                            <li><Link href={data.link4}><span>{data.span4}</span></Link></li>
                                            <li><Link href={data.link5}><span>{data.span5}</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="container">
                        <div className="fm-inner">
                            <div className="row align-items-center g-lg-5 g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title">Stay Updated with Health Tips</h2>
                                    <p>Get the latest health advice, appointment reminders, and wellness tips delivered to your inbox</p>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <form className="dzSubscribe style-1"  ref={form} onSubmit={handleSubmit}>
                                        <div className="dzSubscribeMsg"></div>
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required type="email" className="form-control" placeholder="Your Email Address" />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-secondary btn-hover1">
                                                        <span className="btn-text">Subscribe Now</span>
                                                        <span className="btn-icon">
                                                            <i className="fa-solid fa-paper-plane" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-start">
                                    <p className="copyright-text">© <span className="current-year">2025</span> Your Doctor. All Rights Reserved.</p>
                                </div>
                                <div className="col-lg-6 col-md-12 text-end">
                                    <ul className="nav-inline">
                                        <li> <Link href="#" target="_blank"><i className="fa-brands fa-linkedin" /> </Link> </li>
                                        <li> <Link href="#" target="_blank"><i className="fa-brands fa-instagram" /> </Link> </li>
                                        <li> <Link href="#" target="_blank"><i className="fa-brands fa-facebook-f" /> </Link> </li>
                                        <li> <Link href="#" target="_blank"><i className="fa-brands fa-x-twitter" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;