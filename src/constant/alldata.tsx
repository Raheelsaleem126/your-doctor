import CountUp from "react-countup"
import { IMAGES, SVGICONS } from "./theme"
import { StaticImageData } from "next/image";



interface MenuItemContent {
  title: string;
  to: string;
  image?: string | StaticImageData; 
}

interface MenuItem {
  title: string;
  to? : string | undefined;
  classChange?: string;
  content?: MenuItemContent[];
}

// header menu data 
export const menudata : MenuItem[] =[
    {
        title: "Home",
        to: "/",
    },
     {
        title: "About",
        to: "/about-us",
        
      
    },
    // {
    //     title: "Pages",
    //     classChange: "sub-menu-down",
        
    //     content: [
    //         { title: "About Us", to: "/about-us" },
    //         { title: "Appointment", to: "/appointment" },
    //         { title: "Pricing Table", to: "/pricing-table" },
    //         { title: "Faq's", to: "/faqs" },
    //     ],
    // },
    {
        title: "Our Doctors",
        classChange: "sub-menu-down",
        
        content: [
            { title: "Dr Huma Sheikh", to: "/dr-huma" },
            { title: "Dr Samira Masoud", to: "/dr-samira" },
        ],
    },
    // {
    //     title: "Services",
    //     classChange: "sub-menu-down",
        
    //     content: [
    //         // { title: "All Services", to: "/services" },
    //         { title: "Comprehensive Services", to: "/services-2" },
    //     ],
    // },
    {
        title: "Services",
        to: "/services",
    },

    { 
        title: "Contact Us", 
        to: "/contact-us" 
    },
    {
        title: "FAQs",
        to: "/faqs",
    },
]

// clientswiper  
export const clientswiperdata = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// compareswiper 
export const compareswiperdata = [
    { image: IMAGES.comparemiddle1, delay: '0.1s', },
    { image: IMAGES.comparemiddle2, delay: '0.2s', },
    { image: IMAGES.comparemiddle3, delay: '0.3s', },
    { image: IMAGES.comparemiddle4, delay: '0.4s', },
    { image: IMAGES.comparemiddle5, delay: '0.5s', },
    { image: IMAGES.comparemiddle1, delay: '0.6s', },
    { image: IMAGES.comparemiddle2, delay: '0.7s', },
    { image: IMAGES.comparemiddle3, delay: '0.8s', },
]
// contactmap 
export const mapdata = [
    { delay: '0.6s', title: 'United Kingdom', flag: IMAGES.unitedstate, },
    // { delay: '0.8s', title: 'Canada', flag: IMAGES.cananda, },
]
// highlyteam 
export const swiperteamdata = [
    { id: 1, image: IMAGES.teamsmall1, image2: IMAGES.teamlarge1, name:"Nashid Martines"},
    { id: 2, image: IMAGES.teamsmall2, image2: IMAGES.teamlarge2, name:"Nadir Martino"},
    { id: 3, image: IMAGES.teamsmall3, image2: IMAGES.teamlarge3, name:"Kareem Martines"},
    { id: 4, image: IMAGES.teamsmall4, image2: IMAGES.teamlarge4, name:"Nasir Martínez"},
    { id: 5, image: IMAGES.teamsmall5, image2: IMAGES.teamlarge5, name:"Samir Martines"},
    { id: 6, image: IMAGES.teamsmall1, image2: IMAGES.teamlarge1, name:"Nasim Cortés"},
    { id: 7, image: IMAGES.teamsmall2, image2: IMAGES.teamlarge2, name:"Hamid Serrano"},
    { id: 8, image: IMAGES.teamsmall3, image2: IMAGES.teamlarge3, name:"Tariq Mendez"},
]
// newsupdat 
export const newsdata = [
    { image: IMAGES.bloggrid1, delay: '0.6s', },
    { image: IMAGES.bloggrid2, delay: '0.8s', },
    { image: IMAGES.bloggrid3, delay: '1.0s', },
]
// question  
export const accordiondata2 = [
    { key: "0", title: 'How do I book a virtual appointment?' },
    { key: "1", title: 'What services are available through virtual consultations?' },
    { key: "2", title: 'How much does a virtual consultation cost?' },
    { key: "3", title: 'Can I get prescriptions through virtual appointments?' },
    { key: "4", title: 'What technology do I need for a virtual consultation?' },
    { key: "5", title: 'How long does a virtual appointment take?' },
    { key: "6", title: 'Can I book same-day appointments?' },
    { key: "7", title: 'What if I need to see a doctor in person?' },
    { key: "8", title: 'How do I cancel or reschedule my appointment?' },
    { key: "9", title: 'Is my medical information secure during virtual consultations?' },
]
export const accordionnavdata = [
    { i: 1, id: 'pills-tab1', target: '#pills-target-tabs1', title: 'Virtual Appointments', },
    { i: 2, id: 'pills-tab2', target: '#pills-target-tabs2', title: 'GP Services', },
    { i: 3, id: 'pills-tab3', target: '#pills-target-tabs3', title: 'Booking & Scheduling', },
    { i: 4, id: 'pills-tab4', target: '#pills-target-tabs4', title: 'Prescriptions & Treatment', },
    { i: 5, id: 'pills-tab5', target: '#pills-target-tabs5', title: 'Technical Support', },
]
// servicedata 
export const servicedata = [
    { id: 1, title: 'Dental Implants', svg: SVGICONS.teeth1, image: IMAGES.service1, delay: '0.2s', },
    { id: 2, title: 'Orthodontics', svg: SVGICONS.teeth2, image: IMAGES.service2, delay: '0.4s', },
    { id: 3, title: 'Pediatric Dentistry', svg: SVGICONS.teeth3, image: IMAGES.service3, delay: '0.6s', },
    { id: 4, title: 'Root Canals', svg: SVGICONS.teeth4, image: IMAGES.service4, delay: '0.8s', },
]
// sidebar 
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
export const sidebarpostdata = [
    { image: IMAGES.blogsmall1, content:"The New Face of Care Blending Empathy with Expertise"},
    { image: IMAGES.blogsmall2, content:"The Art of Managing Business and Patient Care"},
    { image: IMAGES.blogsmall3, content:"Here Care Expertise Elevating the Patient Experience"},
]
// testimonialswiper 
export const testiswiperdata = [
    { avatar:IMAGES.smallavatar1,image: IMAGES.testimonial1, delay: '0.6', name:"Kenneth Fong"},
    { avatar:IMAGES.smallavatar2,image: IMAGES.testimonial2, delay: '0.8', name:"Rashid Martel"},
    { avatar:IMAGES.smallavatar3,image: IMAGES.testimonial1, delay: '1.0', name:"Faisal Darwish"},
]
// wecare 
export const counterdata = [
    { title: "satisfied Patients", count: <CountUp end={500} duration={5} />, span: '+', columnstand1: 'bg-color1', columnstand2: 'text-orange', delay: '0.6s', },
    { title: "Qualified General Practioner", count: <CountUp end={2} duration={5} />, span: '+', columnstand1: 'bg-color2', columnstand2: 'text-green', delay: '0.8s', },
    { title: "Years Combined Experience", count: <CountUp end={20} duration={5} />, span: '+', columnstand1: 'bg-color3', columnstand2: 'text-primary', delay: '1.0s', },
]
// wecare2 
export const wecaredata2 = [
    { id: 1, title: 'Medical Service', p:"Your Doctor offers comprehensive GP services, from routine check-ups to chronic disease management, ensuring you and your family receive the best possible care.", delay: '0.2s', icon: <i className="flaticon-medical-symbol" />, },
    { id: 2, title: 'Accessible Care', p:"We make healthcare simple and accessible with same-day appointments, easy online booking, and personalized treatment plans tailored to your needs", delay: '0.4s', icon: <i className="flaticon-drugs" />, },
    { id: 3, title: 'Best Doctor', p:"Our team of qualified and compassionate doctors provides patient-centered care, giving you confidence that your health is in safe hands.", delay: '0.6s', icon: <i className="flaticon-doctor" />, },
]
// whychoose 
export const accordiondata = [
    { key: "0", image: IMAGES.blogsmall1, delay: '0.4s', title: 'Comprehensive Care',p:"We go beyond just treating symptoms our GP services include preventive check-ups, vaccinations, chronic disease management, and family medicine. Whether it’s a minor illness or long-term care, we ensure every patient receives the right attention for lasting health", },
    { key: "1", image: IMAGES.blogsmall2, delay: '0.6s', title: 'Experienced Doctors',p:"Our team of highly qualified and compassionate GPs bring years of medical expertise and patient care experience. At Your Doctor, you are not just another appointment we listen carefully, provide clear guidance, and make your health our top priority", },
    { key: "2", image: IMAGES.blogsmall3, delay: '0.8s', title: 'Accessible & Convenient',p:"We believe healthcare should be simple and stress-free. With same-day appointments, online booking options, and modern facilities, Your Doctor makes quality medical care available when and where you need it most", },
]
// faqdata 
export const pricingplandata = [
    {
        vertical: 'PROFESSIONAL', image: IMAGES.pricetable1, title: 'Maintenance Package', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Dental cleaning</li>
            <li>Polishing</li>
            <li>Filling</li>
            <li>Gum care</li>
            <li>Flossing</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.pricetable2, title: 'Cosmetic Surgeriess', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Root canal treatment</li>
            <li>Braces</li>
            <li>Implants</li>
            <li>Bridges</li>
            <li>Crown</li>
        </ul>,
    },
    {
        vertical: 'PROFESSIONAL', image: IMAGES.pricetable3, title: 'Restorative Procedures', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Missing teeth</li>
            <li>Bridges</li>
            <li>Tooth bonding</li>
            <li>Porcelain veneers</li>
            <li>Invisalign</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.pricetable4, title: 'Offered Services', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Dental cleanings</li>
            <li>Dental examinations</li>
            <li>X-rays</li>
            <li>Fluoride treatments</li>
            <li>Dental sealants</li>
        </ul>,
    },
]

export const custompricingplandata = [
    {
        vertical: 'PROFESSIONAL', image: IMAGES.drhuma, title: 'Skin Concerns', month: '$49', year: '$550',
        feature: <ul className="pricingtable-features">
            <li>Acne and adult acne treatment</li>
            <li>Rashes, eczema, dermatitis care</li>
            <li>Mole and lesion checks</li>
            <li>Prescription-strength treatments</li>
            <li>Psoriasis support</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.drhuma, title: 'MSK Issues', month: '$99', year: '$999',
        feature: <ul className="pricingtable-features">
            <li>Back, neck & joint pain</li>
            <li>Sports injuries & sprains</li>
            <li>Arthritis and inflammation</li>
            <li>Imaging & physio referrals</li>
            <li>Joint injections (where available)</li>
            <li>Available depending on clinic equipment.</li>
        </ul>,
    },
    {
        vertical: 'PROFESSIONAL', image: IMAGES.drhuma, title: 'Diabetes Care', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Type 2 diabetes screening</li>
            <li>Blood sugar & HbA1c testing</li>
            <li>Lifestyle & medication advice</li>
            <li>Nutrition advice</li>
            <li>Regular checkups</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.drhuma, title: 'Weight Management', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Medical assessment of weight-related concerns</li>
            <li>Hormonal/metabolic screening</li>
            <li>Lifestyle and nutrition coaching</li>
            <li>Prescription weight-loss options (if appropriate)</li>
            <li>Ongoing progress support</li>
        </ul>,
    },
    {
        vertical: 'PROFESSIONAL', image: IMAGES.drhuma, title: 'Birth Control & Sexual Health', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Contraception advice & prescriptions</li>
            <li>Coil/implant procedures</li>
            <li>Emergency contraception</li>
            <li>Sexual health screening</li>
            <li>Fertility planning support</li>
            <li>Some procedures may require in-person clinic availability.</li>
        </ul>,
    },
]
// pages 
// aboutus2 
export const aboutus2data = [
    { id: 1, delay: '0.2s', title: 'Mission', },
    { id: 2, delay: '0.4s', title: 'Vision', },
]


// testimoniol 
export const testidata = [
    { image: IMAGES.testimonial1, classChange: 'testimonial-media', name:"Nashid Martines"},
    { image: IMAGES.smallavatar3, classChange: 'testimonial-detail', name:"Kareem Martines"},
    { image: IMAGES.testimonial2, classChange: 'testimonial-media',name:"Samir Martines" },
    { image: IMAGES.smallavatar2, classChange: 'testimonial-detail', name:"Hamid Serrano"},
    { image: IMAGES.testimonial2, classChange: 'testimonial-media', name:"Tariq Mendez"},
    { image: IMAGES.smallavatar1, classChange: 'testimonial-detail', name:"Nasir Qadiri"},
]
// bloggrid 


export interface BlogItem {
  image: string;
  dealy: string;
  title: string;
}
export const blogdata = [
    { image: IMAGES.bloggrid1, dealy: '0.2s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.bloggrid2, dealy: '0.4s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.bloggrid3, dealy: '0.6s', title: 'Brilliant skin blog your dermatology care resource', },
    { image: IMAGES.bloggrid4, dealy: '0.8s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.bloggrid5, dealy: '1.0s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.bloggrid6, dealy: '1.2s', title: 'Brilliant skin blog your dermatology care resource', },
]
// serivece details 2 
export const accordiondata3 = [
    { key: "0", title: 'Improved Stability and Comfort:', },
    { key: "1", title: 'Enhanced Chewing and Speaking Ability', },
    { key: "2", title: 'Better aesthetics and higher self-confidence', },
    { key: "3", title: 'Long-Term Durability', },
]
// service 2
export const service2data = [
    { image: IMAGES.service1, number: '01', title: 'Dental Implants', },
    { image: IMAGES.service2, number: '02', title: 'Orthodontics', columnstand: 'right', },
    { image: IMAGES.service3, number: '03', title: 'Pediatric Dentistry', },
    { image: IMAGES.service4, number: '04', title: 'Root Canals', columnstand: 'right', },
]
// footer 
export const footerdata = [
    {
        title: 'Our Services', 
        span1: 'Musculoskeletal (MSK) Issues', 
        span2: 'Skin Concerns', 
        span3: 'Birth Control & Sexual Health', 
        span4: 'Diabetes Care', 
        span5: 'Weight Management',
        link1: '/services#', 
        link2: '/services', 
        link3: '/services', 
        link4: '/services', 
        link5: '/services',
    },
    {
        title: 'Our Doctors', 
        span1: 'Dr Huma Sheikh', 
        span2: 'Dr Samira Masoud', 
        span3: '', 
        span4: '', 
        span5: '',
        link1: '/dr-huma', 
        link2: '/dr-samira', 
        link3: '', 
        link4: '', 
        link5: '',
    },
    {
        title: 'Pages', 
        span1: 'About Us', 
        span2: 'Appointments', 
        span3: 'Contact Us', 
        span4: 'FAQs', 
        span5: 'Pricing',
        link1: '/about-us', 
        link2: '/appointment', 
        link3: '/contact-us', 
        link4: '/faqs', 
        link5: '/',
    },
    {
        title: 'Legal & Support', 
        span1: 'Privacy Policy', 
        span2: 'Terms & Conditions', 
        span3: 'Patient Rights', 
        span4: 'Insurance Info', 
        span5: 'Testimonials',
        link1: '#', 
        link2: '#', 
        link3: '#', 
        link4: '#', 
        link5: '/testimonial',
    },
]
