"use client"
import { useRef } from "react";
import { IMAGES } from "../constant/theme";
import { useEmailService } from "@/constant/useEmailService";

function MapForm() { 
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
            <div className="row">
                <div className="col-xl-7 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <div className="virtual-consultation-wrapper" style={{
                        background: 'linear-gradient(135deg, #00d4aa 0%, #00a8cc 100%)',
                        borderRadius: '20px',
                        padding: '25px',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div className="section-head style-1 m-b20">
                            <h3 className="title text-white mb-2" style={{ fontSize: '1.3rem' }}>Virtual Healthcare Services</h3>
                            <p className="text-white-50 mb-3" style={{ fontSize: '0.85rem' }}>Experience convenient, professional healthcare from the comfort of your home</p>
                        </div>
                        
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="virtual-feature" style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <div className="icon-bx mb-2" style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px'
                                    }}>
                                        <i className="fa fa-video-camera"></i>
                                    </div>
                                    <h6 className="text-white mb-1" style={{ fontSize: '0.9rem' }}>Video Consultations</h6>
                                    <p className="text-white-50 mb-0" style={{ fontSize: '0.75rem' }}>Secure video calls with our experienced doctors</p>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="virtual-feature" style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <div className="icon-bx mb-2" style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px'
                                    }}>
                                        <i className="fa fa-clock"></i>
                                    </div>
                                    <h6 className="text-white mb-1" style={{ fontSize: '0.9rem' }}>Flexible Scheduling</h6>
                                    <p className="text-white-50 mb-0" style={{ fontSize: '0.75rem' }}>Book appointments that fit your schedule</p>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="virtual-feature" style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <div className="icon-bx mb-2" style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px'
                                    }}>
                                        <i className="fa fa-shield-alt"></i>
                                    </div>
                                    <h6 className="text-white mb-1" style={{ fontSize: '0.9rem' }}>Secure & Private</h6>
                                    <p className="text-white-50 mb-0" style={{ fontSize: '0.75rem' }}>HIPAA-compliant consultations for your privacy</p>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="virtual-feature" style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <div className="icon-bx mb-2" style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '16px'
                                    }}>
                                        <i className="fa fa-home"></i>
                                    </div>
                                    <h6 className="text-white mb-1" style={{ fontSize: '0.9rem' }}>From Your Home</h6>
                                    <p className="text-white-50 mb-0" style={{ fontSize: '0.75rem' }}>No travel required - healthcare at your doorstep</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="consultation-hours mt-3" style={{
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h6 className="text-white mb-1" style={{ fontSize: '0.85rem' }}>Available Hours</h6>
                            <p className="text-white-50 mb-0" style={{ fontSize: '0.75rem' }}>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    <div className="form-wrapper style-1 m-l40">
                        <div className="form-body bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom right', }}>
                            <div className="section-head style-1 m-b30">
                                <h2 className="title text-white">Get in Touch <br /> With us</h2>
                            </div>
                            <form  ref={form} onSubmit={handleSubmit} className="dzForm row">
                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />                                
                                <div className="dzFormMsg"></div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzFirstName" type="text" className="form-control" id="inputYourName2" placeholder="First Name" />
                                        <label htmlFor="inputYourName2">First Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzLastName" type="text" className="form-control" id="inputLastName2" placeholder="Last Name" />
                                        <label htmlFor="inputLastName2">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber2" placeholder="Phone Number" />
                                        <label htmlFor="inputPhoneNumber2">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail2" placeholder="Your Email" />
                                        <label htmlFor="inputYourEmail2">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <textarea name="dzMessage" className="form-control" id="inputMessage" rows={6} placeholder="Select Service"></textarea>
                                        <label htmlFor="inputMessage">Message</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white btn-shadow">
                                        Appointment <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MapForm;