import Link from "next/link";
import Pagebanner from "@/component/Pagebanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import WantApponiment from "@/component/WantApponiment";
import CompareSwiper from "@/component/CompareSwiper";
import Faqdata from "@/component/Faqdata";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import CustomPricing from "@/component/CustomPricing";

const services = [
  {
    title: "Skin Concerns",
    description:
      "From rashes and acne to mole checks and eczema, we offer fast access to expert assessment and treatment.",
    listTitle: "What we help with:",
    items: [
      "Acne and adult acne",
      "Rashes, dermatitis, eczema",
      "Psoriasis management",
      "Mole and skin lesion checks",
      "Prescription-strength treatments",
    ],
    cta: { label: "Book a Skin Consultation", href: "/appointment" },
    image: IMAGES.skinconcern,
    right: false,
  },
  {
    title: "Musculoskeletal (MSK) Issues",
    description:
      "Helping you move better, with less pain. Whether it’s back pain, joint issues, or sports injuries, we’ll support your recovery.",
    listTitle: "What we help with:",
    items: [
      "Back, neck & joint pain",
      "Sports injuries & sprains",
      "Arthritis and inflammation",
      "Referrals to physiotherapy or imaging",
      "Minor procedures (e.g., joint injections)",
      "Available depending on clinic equipment.",
    ],
    // note: "*Available depending on clinic equipment.",
    cta: { label: "Book MSK Appointment", href: "/appointment" },
    image: IMAGES.musculoskeletal,
    right: true,
  },
  {
    title: "Diabetes Care",
    description:
      "Ongoing support to manage or prevent diabetes, with a focus on personalised, preventative care.",
    listTitle: "What we offer:",
    items: [
      "Type 2 diabetes screening",
      "Blood sugar and HbA1c testing",
      "Lifestyle and medication advice",
      "Weight and nutrition guidance",
      "Regular follow-up appointments",
    ],
    cta: { label: "Book a Diabetes Review", href: "/appointment" },
    image: IMAGES.diabetescare,
    right: false,
  },
  {
    title: "Obesity & Weight Management",
    description:
      "Evidence-based weight management plans, tailored to you. No shame — just support and science.",
    listTitle: "Your care includes:",
    items: [
      "Medical assessment of weight-related concerns",
      "Hormonal/metabolic screening",
      "Lifestyle and nutrition coaching",
      "Prescription weight-loss options (if appropriate)",
      "Ongoing monitoring and motivation",
    ],
    cta: { label: "Start Your Weight Health Plan", href: "/appointment" },
    image: IMAGES.obesity,
    right: true,
  },
  {
    title: "Birth Control & Sexual Health",
    description:
      "Discreet and informed care for contraception and reproductive health.",
    listTitle: "Services include:",
    items: [
      "Contraceptive pill & patch prescriptions",
      "Coil (IUD/IUS) and implant fittings/removals*",
      "Emergency contraception",
      "Sexual health screening",
      "Fertility planning support",
      "Some procedures may require in-person clinic availability.",
    ],
    // note: "*Some procedures may require in-person clinic availability.",
    cta: { label: "Book a Contraception Appointment", href: "/appointment" },
    image: IMAGES.birthcontrol,
    right: false,
  },
];

function Services2() {
  return (
    <>
      <Header columnstand="header-transparent" />
      <main className="page-content">
        <Pagebanner title="Our Services" />
        <section className="content-inner p-b20">
          <div className="container">
            <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              <h2 className="title">Our Services</h2>
              <p>Explore the comprehensive care we offer. Every service is designed to be accessible, compassionate, and tailored to your health needs.</p>
            </div>
            {services.map((service, i) => (
              <div
                className={`dz-img-box style-3${service.right ? " right" : ""} align-items-center m-b40`}
                key={i}
              >
                <div className="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                  <Image src={service.image} alt={service.title} />
                </div>
                <div className="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                  <h2 className="title">{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="fw-bold mt-3 mb-2">{service.listTitle}</div>
                  <ul className="list-unstyled mb-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="mb-1">• {item}</li>
                    ))}
                  </ul>
                  {service.title && <div className="small text-muted mb-2">{service.title}</div>}
                  <Link href={service.cta.href} className="btn btn-primary icon-link-hover-end radius-sm mt-3">
                    {service.cta.label} <i className="feather icon-arrow-right-circle" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <CompareSwiper /> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              <h2 className="title">Flexible Pricing Plans</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <CustomPricing />
          </div>
        </section>
        <WantApponiment />
      </main>
      <Footer />
    </>
  );
}
export default Services2;