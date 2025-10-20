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
                                    <p className="text-white"><span className="text-white ">Your Doctor</span> provides comprehensive healthcare services with a focus on skin concerns, musculoskeletal issues, diabetes care, weight management, and sexual health. Our experienced team is dedicated to your well-being.</p>
                                </div>
                            </div>
                            {footerdata.map((data, i) => (
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" key={i}>
                                    <div className="widget widget_services">
                                        <h2 className="footer-title text-white mb-3" style={{ fontSize: '1.1rem', fontWeight: '600', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                                            {data.title}
                                        </h2>
                                        <ul className="list-hover1">
                                            {data.span1 && data.link1 && <li className="mb-2"><Link href={data.link1} className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem', transition: 'color 0.3s ease' }}><span>{data.span1}</span></Link></li>}
                                            {data.span2 && data.link2 && <li className="mb-2"><Link href={data.link2} className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem', transition: 'color 0.3s ease' }}><span>{data.span2}</span></Link></li>}
                                            {data.span3 && data.link3 && <li className="mb-2"><Link href={data.link3} className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem', transition: 'color 0.3s ease' }}><span>{data.span3}</span></Link></li>}
                                            {data.span4 && data.link4 && <li className="mb-2"><Link href={data.link4} className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem', transition: 'color 0.3s ease' }}><span>{data.span4}</span></Link></li>}
                                            {data.span5 && data.link5 && <li className="mb-2"><Link href={data.link5} className="text-white-50 text-decoration-none" style={{ fontSize: '0.9rem', transition: 'color 0.3s ease' }}><span>{data.span5}</span></Link></li>}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-middle" style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '40px 0' }}>
                    <div className="container">
                        <div className="fm-inner">
                            <div className="row align-items-center g-lg-5 g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title text-white mb-3" style={{ fontSize: '1.4rem', fontWeight: '600' }}>Stay Updated with Health Tips</h2>
                                    <p className="text-white-50" style={{ fontSize: '1rem', lineHeight: '1.5' }}>Get the latest health advice, appointment reminders, and wellness tips delivered to your inbox</p>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <form className="dzSubscribe style-1" ref={form} onSubmit={handleSubmit}>
                                        <div className="dzSubscribeMsg"></div>
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input 
                                                    name="dzEmail" 
                                                    required 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Your Email Address"
                                                    style={{ 
                                                        padding: '12px 16px', 
                                                        fontSize: '0.95rem',
                                                        border: '1px solid rgba(255,255,255,0.2)',
                                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                                        color: 'white'
                                                    }}
                                                />
                                                <div className="input-group-addon">
                                                    <button 
                                                        name="submit" 
                                                        value="Submit" 
                                                        type="submit" 
                                                        className="btn btn-secondary btn-hover1"
                                                        style={{ 
                                                            padding: '12px 20px',
                                                            fontSize: '0.95rem',
                                                            fontWeight: '500'
                                                        }}
                                                    >
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
                <div className="footer-bottom" style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-start">
                                    <p className="copyright-text text-white-50 mb-0" style={{ fontSize: '0.9rem' }}>
                                        © <span className="current-year">2025</span> Your Doctor. All Rights Reserved.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-12 text-end">
                                    <ul className="nav-inline d-flex justify-content-end align-items-center mb-0">
                                        <li className="me-3"> 
                                            <Link href="#" target="_blank" className="text-white-50" style={{ fontSize: '1.2rem', transition: 'color 0.3s ease' }}>
                                                <i className="fa-brands fa-linkedin" /> 
                                            </Link> 
                                        </li>
                                        <li className="me-3"> 
                                            <Link href="#" target="_blank" className="text-white-50" style={{ fontSize: '1.2rem', transition: 'color 0.3s ease' }}>
                                                <i className="fa-brands fa-instagram" /> 
                                            </Link> 
                                        </li>
                                        <li className="me-3"> 
                                            <Link href="#" target="_blank" className="text-white-50" style={{ fontSize: '1.2rem', transition: 'color 0.3s ease' }}>
                                                <i className="fa-brands fa-facebook-f" /> 
                                            </Link> 
                                        </li>
                                        <li> 
                                            <Link href="#" target="_blank" className="text-white-50" style={{ fontSize: '1.2rem', transition: 'color 0.3s ease' }}>
                                                <i className="fa-brands fa-x-twitter" /> 
                                            </Link> 
                                        </li>
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