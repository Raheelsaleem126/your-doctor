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
                        <div className="col-xl-12 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="virtual-healthcare-wrapper" style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%,rgb(65, 94, 175) 100%)',
                                borderRadius: '20px',
                                padding: '40px',
                                color: 'white',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div className="virtual-content text-center">
                                    <div className="virtual-icon mb-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        margin: '0 auto'
                                    }}>
                                        <i className="fa fa-video-camera"></i>
                                    </div>
                                    <h2 className="text-white mb-3" style={{ fontSize: '2rem', fontWeight: '700' }}>Virtual Healthcare</h2>
                                    <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        Experience professional healthcare from the comfort of your home. 
                                        No travel required - we bring quality medical care to you.
                                    </p>
                                    <div className="virtual-features">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="feature-item" style={{
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    padding: '15px',
                                                    borderRadius: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fa fa-shield-alt mb-2" style={{ fontSize: '20px' }}></i>
                                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Secure & Private</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="feature-item" style={{
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    padding: '15px',
                                                    borderRadius: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fa fa-clock mb-2" style={{ fontSize: '20px' }}></i>
                                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Flexible Hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="virtual-healthcare-wrapper" style={{
                                background: 'linear-gradient(135deg, #00d4aa 0%, #00a8cc 100%)',
                                borderRadius: '20px',
                                padding: '40px',
                                color: 'white',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div className="virtual-content text-center">
                                    <div className="virtual-icon mb-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        margin: '0 auto'
                                    }}>
                                        <i className="fa fa-video-camera"></i>
                                    </div>
                                    <h2 className="text-white mb-3" style={{ fontSize: '2rem', fontWeight: '700' }}>Video Consultations</h2>
                                    <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        Secure video calls with our experienced doctors from the comfort of your home. 
                                        Professional medical care delivered virtually.
                                    </p>
                                    <div className="virtual-features">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="feature-item" style={{
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    padding: '15px',
                                                    borderRadius: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fa fa-shield-alt mb-2" style={{ fontSize: '20px' }}></i>
                                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Secure & Private</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="feature-item" style={{
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    padding: '15px',
                                                    borderRadius: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fa fa-clock mb-2" style={{ fontSize: '20px' }}></i>
                                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Flexible Hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                            <div className="virtual-healthcare-wrapper" style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '20px',
                                padding: '40px',
                                color: 'white',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div className="virtual-content text-center">
                                    <div className="virtual-icon mb-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        margin: '0 auto'
                                    }}>
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <h2 className="text-white mb-3" style={{ fontSize: '2rem', fontWeight: '700' }}>Phone Consultations</h2>
                                    <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        Speak directly with our doctors via phone for immediate medical advice. 
                                        Quick and convenient healthcare access.
                                    </p>
                                    <div className="virtual-features">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="feature-item" style={{
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    padding: '15px',
                                                    borderRadius: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fa fa-phone-alt mb-2" style={{ fontSize: '20px' }}></i>
                                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Direct Access</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="feature-item" style={{
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    padding: '15px',
                                                    borderRadius: '10px',
                                                    textAlign: 'center'
                                                }}>
                                                    <i className="fa fa-bolt mb-2" style={{ fontSize: '20px' }}></i>
                                                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Immediate</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactMap;