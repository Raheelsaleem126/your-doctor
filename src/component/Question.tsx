"use client"
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import { accordiondata2, accordionnavdata } from '../constant/alldata';

function Question() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabIndex : number) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <section className="content-inner-1">
                <div className="container">
                    <div className="section-head style-1 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title">Have any questions?</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="search_widget">
                                <form className="dzSearch">
                                    <div className="form-group">
                                        <div className="input-group mb-0 search-space">
                                            {/* <input name="dzSearch" type="search" className="form-control text-writing" placeholder="Type your question here" />
                                            <div className="input-group-addon">
                                                <button name="dzSearch" value="search" className="btn">
                                                    <i className="icon feather icon-search" />
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-10">
                            <ul className="nav nav-pills nav-pills-outline m-b50 justify-content-center wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s" id="pills-tab" role="tablist">
                                {accordionnavdata.map((data, ii) => (
                                    <li className="nav-item" role="presentation" key={ii}>
                                        <button id={data.id} data-bs-toggle="pill" data-bs-target={data.target} type="button" role="tab" aria-controls={data.id}
                                            className={`nav-link ${activeTab === data.i ? 'active' : ''}`}
                                            aria-selected={activeTab === data.i ? 'true' : 'false'}
                                            onClick={() => handleTabClick(data.i)}
                                        > {data.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s" id="pills-tabContent">
                                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="pills-target-tabs1" role="tabpanel" aria-labelledby="pills-tab1" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How do I book a virtual appointment?</Accordion.Header>
                                            <Accordion.Body>
                                                You can book a virtual appointment easily through our online booking system. Simply visit our website, select "Book Appointment," choose your preferred date and time, and select "Virtual Consultation." You'll receive a confirmation email with your appointment details and video call link.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What technology do I need for a virtual consultation?</Accordion.Header>
                                            <Accordion.Body>
                                                You'll need a device with a camera and microphone (smartphone, tablet, or computer), a stable internet connection, and a quiet, private space. We use secure, encrypted video calling platforms that work on most modern devices. No special software installation is required.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How long does a virtual appointment take?</Accordion.Header>
                                            <Accordion.Body>
                                                Most virtual consultations last between 15-30 minutes, depending on your needs. Initial consultations may take longer (up to 45 minutes) to allow time for a thorough assessment. Follow-up appointments are typically shorter.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="pills-target-tabs2" role="tabpanel" aria-labelledby="pills-tab2" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What services are available through virtual consultations?</Accordion.Header>
                                            <Accordion.Body>
                                                Our virtual consultations cover a wide range of GP services including general health assessments, skin concerns, diabetes care, weight management, birth control consultations, mental health support, prescription renewals, and follow-up appointments. We can also provide referrals to specialists when needed.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What if I need to see a doctor in person?</Accordion.Header>
                                            <Accordion.Body>
                                                If your condition requires an in-person examination, we'll arrange for you to visit our clinic or refer you to an appropriate local healthcare provider. We can also coordinate with local services for tests, scans, or procedures that can't be done virtually.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How much does a virtual consultation cost?</Accordion.Header>
                                            <Accordion.Body>
                                                Virtual consultations are priced competitively and often more affordable than traditional in-person visits. Standard consultations start from £45, with follow-up appointments available at reduced rates. We accept most major insurance plans and offer flexible payment options.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="pills-target-tabs3" role="tabpanel" aria-labelledby="pills-tab3" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Can I book same-day appointments?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes! We offer same-day virtual appointments subject to availability. You can check our online booking system for real-time availability, or call us directly for urgent consultations. We also provide emergency contact options for urgent medical concerns.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How do I cancel or reschedule my appointment?</Accordion.Header>
                                            <Accordion.Body>
                                                You can cancel or reschedule your appointment up to 24 hours before your scheduled time through our online portal, by calling us directly, or by replying to your appointment confirmation email. We understand that plans change, and we're flexible with rescheduling.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>What happens if I miss my virtual appointment?</Accordion.Header>
                                            <Accordion.Body>
                                                If you miss your appointment, please contact us as soon as possible. We'll work with you to reschedule at no additional cost. For repeated no-shows, we may require a deposit for future bookings to ensure appointment availability for all patients.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`} id="pills-target-tabs4" role="tabpanel" aria-labelledby="pills-tab4" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Can I get prescriptions through virtual appointments?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, our doctors can prescribe medications during virtual consultations when clinically appropriate. Prescriptions are sent electronically to your chosen pharmacy. We can prescribe most medications, though some controlled substances may require in-person consultation or additional verification.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How do I receive my prescription?</Accordion.Header>
                                            <Accordion.Body>
                                                After your consultation, your prescription is sent electronically to your chosen pharmacy. You can collect it in person or arrange for home delivery if the pharmacy offers this service. We'll provide you with a prescription reference number and details of where to collect your medication.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Can you provide sick notes or medical certificates?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, we can provide sick notes and medical certificates for work or school when clinically appropriate. These are issued digitally and can be sent directly to your employer or educational institution. We follow all relevant guidelines for medical certification.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 5 ? 'show active' : ''}`} id="pills-target-tabs5" role="tabpanel" aria-labelledby="pills-tab5" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Is my medical information secure during virtual consultations?</Accordion.Header>
                                            <Accordion.Body>
                                                Absolutely. We use end-to-end encrypted video calling platforms that meet the highest healthcare security standards. All consultations are conducted in compliance with GDPR and medical confidentiality requirements. Your medical records are stored securely and only accessible to authorized healthcare professionals.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What if I have technical difficulties during my appointment?</Accordion.Header>
                                            <Accordion.Body>
                                                If you experience technical issues, our support team is available to help. We can troubleshoot connection problems, switch to phone consultation if needed, or reschedule your appointment. We recommend testing your connection before your appointment and having a backup device ready.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Do you offer phone consultations as an alternative?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes, we offer phone consultations as an alternative to video calls. This can be helpful if you have limited internet access or prefer audio-only consultations. Phone consultations are equally effective for many types of medical consultations and follow the same security protocols.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-inner-1 p-t0">
                <div className="container">
                    <div className="content-bx style-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <div className="clearfix">
                            <h2 className="dz-title">Still have questions?</h2>
                            <p className="m-b0">Can’t find the answer you’re looking for. Please chat to our friendly team.</p>
                        </div>
                        <div className="flex-btn">
                            <Link href="/contact-us" className="btn btn-primary btn-hover1">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Question;