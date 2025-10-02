"use client"
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { IMAGES, SVGICONS } from "../constant/theme";
import Link from "next/link";
import { mapdata } from "../constant/alldata";
import Image from "next/image";

function ContactMap() {
    const [show, setShow] = useState(true);
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="row content-wrapper">
                        <div className="col-xl-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="map-wrapper style-3 me-xl-4">
                                <iframe src="https://www.google.com/maps/place/Old+Rd,+Clacton-on-Sea+CO15+3AU,+UK/@51.7954502,1.1455917,17z/data=!3m1!4b1!4m6!3m5!1s0x47d9132d0dba279f:0xc0d81103a2a53cb1!8m2!3d51.7954664!4d1.148421!16s%2Fg%2F1tf574f7?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D" width="600" height="450" style={{ border: '0' }} allowFullScreen
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="item1 position-absolute">
                                    {show && (
                                        <Alert className="content-bx style-5 alert alert-dismissible fade show" role="alert">
                                            <div className="content-logo">
                                                <Image src={IMAGES.logo} alt="" />
                                            </div>
                                            <div className="content-text m-b20">
                                                <h6 className="m-b5">Office Address: </h6>
                                                <p>The Old Coach House, 149A Old Road, Clacton-on-Sea, <br />Essex, United Kingdom, CO15 3AU</p>
                                            </div>
                                            <div className="content-text">
                                                <h6 className="m-b5">Working Hours: </h6>
                                                <p className="m-b0">Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>
                                            </div>
                                            <button onClick={() => setShow(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                                <span dangerouslySetInnerHTML={{__html : SVGICONS.crossicon}} />
                                            </button>
                                        </Alert>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <h2 className="title m-b5">All Locations</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="row">
                                {mapdata.map((data, i) => (
                                    <div className="col-xl-12 col-lg-6 m-b15 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="dz-img-box style-2">
                                            <div className="dz-content">
                                                <div className="inner-content clearfix">
                                                    <h3 className="title m-b10"><Image src={data.flag} alt="flag" /> {data.title}</h3>
                                                    <p className="m-b10">The Old Coach House, 149A Old Road, Clacton-on-Sea, Essex, United Kingdom, CO15 3AU</p>
                                                    <Link href="tel:+0123-456-7890" className="text-body">+447956487764</Link>
                                                </div>
                                                <div className="dz-footer">
                                                    <Link href="https://www.google.com/maps/" target="_blank" className="icon-link-hover-end">Get Directions 
                                                        <i className="feather icon-arrow-up-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="dz-media">
                                                <Image src={IMAGES.map} alt="map" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactMap;