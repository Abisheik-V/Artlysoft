import { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { LuBrain } from "react-icons/lu";
import heroimg from '../assets/images/girl.png';
import logo1 from '../assets/images/Infosys.png';
import logo2 from '../assets/images/tcs logo.png';
import logo3 from '../assets/images/wipro logo.png';
import logo4 from '../assets/images/accenture.png';
import logo5 from '../assets/images/cognizant.png';
import logo6 from '../assets/images/hcltech.png';
import logo7 from '../assets/images/tech mahindra.png';
import logo8 from '../assets/images/LTIMindtree.png';
import logo9 from '../assets/images/Capgemini.png';
import logo10 from '../assets/images/IBM.png';
import '../assets/style/style.css';
import logo from '../Assets/images/logo.png';

import {
  FaUsers,
  FaBookOpen,
  FaClipboardCheck,
  FaFileAlt,
  FaAward,
  FaBullseye,
  FaBriefcase,
  FaBuilding,
  FaUserGraduate,
  FaChartLine,
  FaGraduationCap,
  FaHandshake,
  FaClipboardList,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import {
  FaLayerGroup,
  FaUserCheck,
  FaArrowTrendUp,
} from "react-icons/fa6";

import aos from "aos";
import 'aos/dist/aos.css';



/* ── Navbar ── */

function Nav () {

    // ── Dark / Light mode toggle ──
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('artlysoft-theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('artlysoft-theme', theme);
    }, [isDark]);

    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    // Close the mobile navbar when any link is clicked
    const closeNav = () => {
        const navEl = document.getElementById('navbarNav');
        if (navEl && navEl.classList.contains('show')) {
            navEl.classList.remove('show');
            // Also reset the toggler button aria state
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) toggler.setAttribute('aria-expanded', 'false');
        }
    };

    return (

        <>

        <section className='nav-sec sticky-top'>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" onClick={closeNav}>
      <img src={logo} alt="Logo" style={{ height: 32, width: 32 }} />
      <span className='a-font1'>A</span>rtlysoft TalentOS
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        
        <li className="nav-item">
          <NavHashLink className="nav-link" to="#feature" onClick={closeNav}>Features</NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="#pricing" onClick={closeNav}>Pricing</NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="#cont" onClick={closeNav}>Contact</NavHashLink>
        </li>
      </ul>

      <Link className='nav-link nav-log' to="#" onClick={closeNav}>Login</Link>

      <button className='btn-demo'>
        <NavHashLink className="demo-btn" to="#cont" onClick={closeNav}>Request Demo</NavHashLink>
      </button>

      {/* ── Theme Toggle Button ── */}
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        <span className="theme-toggle-track">
          <span className="theme-toggle-thumb">
            {isDark
              ? <i className="bi bi-moon-stars-fill"></i>
              : <i className="bi bi-sun-fill"></i>
            }
          </span>
        </span>
      </button>

    </div>
  </div>
</nav>
        </section>

        </>
        
    )
}


/* ── Footer ── */

function Footer () {
    return (

        <> 
        
        <footer className='foot-sec py-5'>
           <div className='container'>
              <div className='row'>
 
              <div className='col-12 col-md-3'>
                  <div className='foot-col'>
                     <h4 className='foot-title'><img src={logo} alt="Logo" style={{ height: 32, width: 32, marginRight: 8 }} /><span className='a-font'>A</span>rtlysoft TalentOs</h4>
                     <p className='foot-para'>AI-powered talent management and campus placement platform for modern institutes.</p>
                  </div>
                  <div className='social-icons'>
                      <a className='s-icons' href="https://www.instagram.com/artly_soft/"><i className="bi bi-instagram"></i></a>
                      <a className='s-icons' href="https://www.youtube.com/channel/UCorjattH3LwN6AGqlYaiPPg/playlists"><i className="bi bi-youtube"></i></a>
                      <a className='s-icons' href="https://www.linkedin.com/company/artlysoft-private-limited/"><i className="bi bi-linkedin"></i></a>
                  </div>
              </div>

              <div className='col-12 col-md-3'>
                  <h4 className="foot-head">QUICK LINKS</h4>
                  <ul className='foot-links'>
                        <li><NavHashLink className='foot-link' to="#feature">Features</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="#pricing">Pricing</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="#cont">Contact</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="#cont">Demo Request</NavHashLink></li>
                        </ul>
              </div>

               <div className='col-12 col-md-3'>
                  <h4 className="foot-head">PORTALS</h4>
                  <ul className='foot-links'>
                        <li><NavHashLink className='foot-link' to="/">Institute Login</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="/">Trainer Login</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="/">Student Login</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="/">Recruiter Access</NavHashLink></li>
                        </ul>
              </div>

              <div className='col-12 col-md-3'>
                  <h4 className="foot-head">LEGAL</h4>
                  <ul className='foot-links'>
                        <li><NavHashLink className='foot-link' to="/">Terms Of Service</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="/">Privacy Policy</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="/">Data Security</NavHashLink></li>
                        <li><NavHashLink className='foot-link' to="/">Cookies</NavHashLink></li>
                        </ul>
              </div>

              </div>

          <div className="footer-bottom">
                 <p>&copy; {new Date().getFullYear()} Artlysoft TalentOs. All Rights Reserved.</p>
              </div>

           </div>
        </footer>
        
        </>

    )
}


/* ── FAQ accordion sub-component ── */
const faqs = [
    {
        id: 1,
        question: "How long does onboarding take?",
        answer: "Most institutes are fully onboarded within 5–7 business days. Our implementation team handles data migration, configuration, and staff training end-to-end. We provide dedicated onboarding support at no extra cost."
    },
    {
        id: 2,
        question: "Can TalentOS integrate with our existing ERP or LMS?",
        answer: "Yes. TalentOS offers REST APIs and pre-built connectors for SAP, Oracle, Moodle, Canvas, and major Indian university management systems. Custom integrations are available on Professional and Enterprise plans."
    },
    {
        id: 3,
        question: "How does the AI matching work?",
        answer: "Our AI analyzes student profiles — academics, skills, projects, assessments, and behavioral signals — against recruiter requirements using a proprietary compatibility model trained on 2M+ placement outcomes. Match scores are explainable and transparent."
    },
    {
        id: 4,
        question: "Is student data secure and DPDP-compliant?",
        answer: "Absolutely. TalentOS is ISO 27001 certified, DPDP Act compliant, and SOC 2 Type II audited. All data is encrypted at rest and in transit. Students control their own consent and data visibility settings."
    },
    {
        id: 5,
        question: "Do recruiters pay to access the platform?",
        answer: "Recruiter access is free for verified companies. Institutes bring their own recruiter relationships, or opt-in to our recruiter network of 12,000+ companies that actively hire from TalentOS-connected campuses."
    },
    {
        id: 6,
        question: "What kind of analytics does the platform provide?",
        answer: "The analytics suite covers placement funnels, offer-to-join ratios, skill gap heatmaps, recruiter engagement, time-to-placement, batch-wise performance, and 50+ exportable reports. Custom report builder available on Enterprise."
    },
];

function FaqSection() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

    return (
        <section className="faq-sec">
            <div className="faq-head">
                <p className="hiw-label">FAQ</p>
                <h2 className="faq-main-title">Frequently asked questions</h2>
            </div>

            <div className="container">
                <div className="faq-list">
                    {faqs.map((item) => (
                        <div
                            key={item.id}
                            className={`faq-item${openId === item.id ? ' faq-item-open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggle(item.id)}
                                aria-expanded={openId === item.id}
                            >
                                <span>{item.question}</span>
                                <span className="faq-chevron">
                                    {openId === item.id
                                        ? <FaChevronUp />
                                        : <FaChevronDown />}
                                </span>
                            </button>

                            {openId === item.id && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


/* ── Splash Screen ── */

function SplashScreen({ onDone }) {
    return (
        <div className="splash-overlay" onClick={onDone}>

            {/* Ambient orbs */}
            <div className="splash-orb splash-orb-1"></div>
            <div className="splash-orb splash-orb-2"></div>
            <div className="splash-orb splash-orb-3"></div>

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
                <div key={i} className={`splash-particle splash-particle-${i + 1}`}></div>
            ))}

            <div className="splash-content">

                {/* Logo ring system */}
                <div className="splash-logo-wrap">
                    <div className="splash-ring splash-ring-1"></div>
                    <div className="splash-ring splash-ring-2"></div>
                    <div className="splash-ring splash-ring-3"></div>
                    <div className="splash-logo-glow"></div>
                    <div className="splash-logo-box">
                        <img src={logo} alt="Artlysoft" className="splash-logo-img" />
                    </div>
                </div>

                {/* Brand name */}
                <div className="splash-brand">
                    <span className="splash-brand-a">A</span>
                    <span className="splash-brand-rest">rtlysoft</span>
                </div>

                {/* Tagline */}
                <p className="splash-tagline">TalentOS &mdash; AI-Powered Campus Placement</p>

                {/* Coming Soon */}
                <div className="splash-coming-soon">
                    <span className="splash-cs-text">Coming Soon</span>
                    <span className="splash-cs-dots">
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </div>

                {/* Progress bar */}
                <div className="splash-progress-wrap">
                    <div className="splash-progress-bar"></div>
                </div>

                <p className="splash-skip">Click anywhere to skip</p>
            </div>
        </div>
    );
}


/* ── ProductPage (LandingPage content) ── */

function ProductPage () {

    // Splash screen state
    const [showSplash, setShowSplash] = useState(true);
    const [splashFading, setSplashFading] = useState(false);

    useEffect(() => {
        // Start fade-out at 5 s, fully remove at 5.5 s
        const fadeTimer  = setTimeout(() => setSplashFading(true),  5000);
        const doneTimer  = setTimeout(() => setShowSplash(false),   5500);
        return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
    }, []);

    const dismissSplash = useCallback(() => {
        setSplashFading(true);
        setTimeout(() => setShowSplash(false), 500);
    }, []);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        role: ''
    });

    const products = [
        {id:1, icon:FaUsers, title:"Student Management", subtitle:"Unified profiles with academic history, skills, certifications, and progress tracking in one intelligent dashboard."},
        {id:2, icon:FaBookOpen, title:"Course & Batch Management", subtitle:"Organize training programs, manage cohorts, schedule sessions, and track curriculum delivery with precision."},
        {id:3, icon:FaClipboardCheck, title:"Attendance & Tracking", subtitle:"Biometric-ready attendance with real-time analytics, automated alerts, and compliance reporting."},
        {id:4, icon:FaFileAlt, title:"Assessments & Tests", subtitle:"AI-proctored online exams, adaptive quizzes, skill evaluations, and instant performance insights."},
        {id:5, icon:FaAward, title:"Resume Builder", subtitle:"AI-powered resume generator that highlights student strengths, optimizes for ATS systems, and auto-updates."},
        {id:6, icon:FaBullseye, title:"Placement Tracking", subtitle:"End-to-end job application pipeline — from applications and interviews to offer management and onboarding."},
        {id:7, icon:FaBriefcase, title:"Recruiter Portal", subtitle:"Dedicated portal for companies to post jobs, browse vetted talent, schedule drives, and manage hiring."},
        {id:8, icon:FaBuilding, title:"HR Dashboard", subtitle:"Corporate HR teams get streamlined access to campus talent pools, analytics, and collaboration tools."},
        {id:9, icon:FaUserGraduate, title:"Analytics & Reports", subtitle:"Real-time dashboards with placement trends, skill gaps, recruiter engagement, and ROI metrics."},
        {id:10, icon:FaChartLine, title:"AI Insights Engine", subtitle:"Predictive analytics that match students to opportunities, forecast placement success, and surface hidden talent."},
    ]



   
    return(
        <div className="product-wrapper">

        {/* Splash Screen */}
        {showSplash && (
            <div className={splashFading ? 'splash-fade-out' : ''}>
                <SplashScreen onDone={dismissSplash} />
            </div>
        )}

        <Nav />

        {/* {Hero-section} */}
        
        <section className="hero-sec py-5">
            <div className="container">
               <div className="row">

                   <div className="col-12 col-md-7">
                       <p className="hero-para"><i className="bi bi-lightning-charge"></i>AI-Powered Campus Placement Platform</p>
                       <h2 className="hero-head">Transform Student Training into Successful Placements</h2>
                       <p className="hero-text">TalentOS unifies student lifecycle management, AI-powered assessments, recruiter engagement, and real-time analytics — giving institutes the edge to achieve 95%+ placement rates.</p>
                       <div className="hero-btns">
                          <button className='btn-demo'><NavHashLink className="demo-btn" to="#cont"><i className="bi bi-play"></i>Request Demo</NavHashLink></button>
                          <button className='btn-start'><NavHashLink className="start-hero" to="#cont">Get Started<i className="bi bi-arrow-right"></i></NavHashLink></button>
                       </div>
                   </div>

                <div className='col-12 col-md-5'>
                    <div className='hero-img' data-aos="fade-up">
                       <img src={heroimg} alt="Student" className='img-girl' />
                    </div>
                </div>

               </div>
            </div>
        </section>

        {/* {Featuresection} */}

        <section className='feat-sec py-5' id='feature'>
            <div className='feat-head'>
                <p className='section-para'>Platform Features</p>
                <h2 className='section-title'>Everything you need to run a world-class placement cell</h2>
                <p className='feat-para'>Ten purpose-built modules that work as a unified system — from first-year enrollment to final offer acceptance.</p>
            </div>

            <div className='feat-content mb-3'>
               <div className='container'>
                  <div className='row g-4'>
                       
              {products.map((item, index) => {
                
                  const IconComponent = item.icon;

                  return (
                    
                        <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                      <div className='card feat-card h-100' 
                      data-aos="fade-up"
                  data-aos-delay={index * 100}>
                          <div className='feat-icon-box'>
                             <IconComponent />
                          </div>
                          <div className='feat-text'>
                               <h5 className='feat-title'>{item.title}</h5>
                               <p className='feat-subtitle'>{item.subtitle}</p>
                          </div>
                      </div>
                    </div>
                    );
               })}

                  </div>
               </div>
            </div>

        </section>

        {/* How It Works Section */}
        <section className="hiw-sec">
            <div className="hiw-head">
                <p className="hiw-label" data-aos="fade-down">HOW IT WORKS</p>
                <h2 className="hiw-main-title" data-aos="fade-up">From enrollment to employment<br />in four steps</h2>
            </div>

            <div className="container">
                <div className="hiw-steps">

                    <div className="hiw-step" data-aos="fade-right">
                        <div className="hiw-icon-wrap">
                            <div className="hiw-icon-box"><FaClipboardList /></div>
                            <div className="hiw-line hiw-line-right"></div>
                        </div>
                        <span className="hiw-number">01</span>
                        <h5 className="hiw-title">Onboard Your Institute</h5>
                        <p className="hiw-desc">Import existing student data, configure departments, and set up your placement calendar in under a week.</p>
                    </div>

                    <div className="hiw-step" data-aos="fade-right">
                        <div className="hiw-icon-wrap">
                            <div className="hiw-line hiw-line-left"></div>
                            <div className="hiw-icon-box"><FaLayerGroup /></div>
                            <div className="hiw-line hiw-line-right"></div>
                        </div>
                        <span className="hiw-number">02</span>
                        <h5 className="hiw-title">Train &amp; Assess Students</h5>
                        <p className="hiw-desc">Run AI-proctored tests, track skill development, and build placement-ready profiles automatically.</p>
                    </div>

                    <div className="hiw-step" data-aos="fade-left">
                        <div className="hiw-icon-wrap">
                            <div className="hiw-line hiw-line-left"></div>
                            <div className="hiw-icon-box"><FaUserCheck /></div>
                            <div className="hiw-line hiw-line-right"></div>
                        </div>
                        <span className="hiw-number">03</span>
                        <h5 className="hiw-title">Connect with Recruiters</h5>
                        <p className="hiw-desc">Post opportunities, automate campus drives, and let AI match the right candidates to the right roles.</p>
                    </div>

                    <div className="hiw-step" data-aos="fade-left">
                        <div className="hiw-icon-wrap">
                            <div className="hiw-line hiw-line-left"></div>
                            <div className="hiw-icon-box"><FaArrowTrendUp /></div>
                        </div>
                        <span className="hiw-number">04</span>
                        <h5 className="hiw-title">Track &amp; Optimize</h5>
                        <p className="hiw-desc">Monitor placement funnels in real-time and use AI insights to continuously improve outcomes.</p>
                    </div>

                </div>
            </div>
        </section>

        {/* ===== Trusted Recruiters Marquee ===== */}
        <section className="trust-sec">
            <p className="trust-label">TRUSTED BY TOP RECRUITERS ACROSS INDIA</p>

            <div className="trust-track-wrapper">
                {/* Fade masks */}
                <div className="trust-fade trust-fade-left"></div>
                <div className="trust-fade trust-fade-right"></div>

                {/* Scrolling track — list duplicated for seamless loop */}
                <div className="trust-track">
                    {/* Original set */}
                    <div className="trust-item">
                        <img src={logo1} alt="Infosys" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item">
                        <img src={logo2} alt="TCS" className="trust-logo" />
                        
                    </div>
                    <div className="trust-item">
                        <img src={logo3} alt="Wipro" className="trust-logo" />
                      
                    </div>
                    <div className="trust-item">
                        <img src={logo4} alt="Accenture" className="trust-logo" />
                      
                    </div>
                    <div className="trust-item">
                        <img src={logo5} alt="Cognizant" className="trust-logo" />
                        
                    </div>
                    <div className="trust-item">
                        <img src={logo6} alt="HCLTech" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item">
                        <img src={logo7} alt="Tech Mahindra" className="trust-logo" />
                        
                    </div>
                    <div className="trust-item">
                        <img src={logo8} alt="L&T Infotech" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item">
                        <img src={logo9} alt="Capgemini" className="trust-logo" />
                      
                    </div>
                    <div className="trust-item">
                        <img src={logo10} alt="IBM India" className="trust-logo" />
                       
                    </div>

                    {/* Duplicate set — keeps the scroll seamless */}
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo1} alt="" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo2} alt="" className="trust-logo" />
                     
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo3} alt="" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo4} alt="" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo5} alt="" className="trust-logo" />
                      
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo6} alt="" className="trust-logo" />
                  
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo7} alt="" className="trust-logo" />
                       
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo8} alt="" className="trust-logo" />
                        
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo9} alt="" className="trust-logo" />
                     
                    </div>
                    <div className="trust-item" aria-hidden="true">
                        <img src={logo10} alt="" className="trust-logo" />
                        
                    </div>
                </div>
            </div>
        </section>

        {/* ===== Pricing Section ===== */}
        <section className="pricing-sec" id='pricing'>
            <div className="pricing-head">
                <p className="hiw-label">PRICING</p>
                <h2 className="pricing-main-title">Simple, transparent pricing for<br />every institute</h2>
                <p className="pricing-sub">All plans include a 30-day free trial. No credit card required.</p>
            </div>

            <div className="container">
                <div className="pricing-cards">

                    {/* Starter */}
                    <div className="pricing-card" data-aos="fade-left">
                        <p className="plan-name">Starter</p>
                        <div className="plan-price">
                            <span className="plan-amount">₹ X,XXX</span>
                            <span className="plan-period">&nbsp;/ year</span>
                        </div>
                        <p className="plan-desc">For small institutes up to 500 students</p>
                        <ul className="plan-features">
                            <li>Up to 500 student profiles</li>
                            <li>Course &amp; batch management</li>
                            <li>Attendance tracking</li>
                            <li>Basic placement tracker</li>
                            <li>Resume builder</li>
                            <li>Email support</li>
                        </ul>
                        <button className="plan-btn plan-btn-outline"><NavHashLink className="btn-price" to="#cont">Get Started</NavHashLink></button>
                    </div>

                    {/* Professional — Featured */}
                    <div className="pricing-card pricing-card-featured" data-aos="fade-up">
                        <div className="plan-badge">Most Popular</div>
                        <p className="plan-name plan-name-white">Professional</p>
                        <div className="plan-price">
                            <span className="plan-amount plan-amount-white">₹ XX,XXX</span>
                            <span className="plan-period plan-period-white">&nbsp;/ year</span>
                        </div>
                        <p className="plan-desc plan-desc-white">For mid-size institutes up to 5,000 students</p>
                        <ul className="plan-features plan-features-white">
                            <li>Up to 5,000 student profiles</li>
                            <li>AI-powered assessments</li>
                            <li>Recruiter portal access</li>
                            <li>Advanced analytics dashboard</li>
                            <li>AI Insights engine</li>
                            <li>HR Dashboard for companies</li>
                            <li>Priority support &amp; SLA</li>
                            <li>API integrations</li>
                        </ul>
                        <button className="plan-btn plan-btn-white"><NavHashLink className="btn-price" to="#cont">Get Started</NavHashLink></button>
                    </div>

                    {/* Enterprise */}
                    <div className="pricing-card" data-aos="fade-right">
                        <p className="plan-name">Enterprise</p>
                        <div className="plan-price">
                            <span className="plan-amount plan-amount-dark">Custom</span>
                        </div>
                        <p className="plan-desc">For universities and large consortiums</p>
                        <ul className="plan-features">
                            <li>Unlimited student profiles</li>
                            <li>Multi-campus management</li>
                            <li>White-label branding</li>
                            <li>Custom AI model training</li>
                            <li>Dedicated account manager</li>
                            <li>On-premise deployment option</li>
                            <li>SSO &amp; LDAP integration</li>
                            <li>24/7 premium support</li>
                        </ul>
                        <button className="plan-btn plan-btn-outline"><NavHashLink className="btn-price" to="#cont">Contact Sales</NavHashLink></button>
                    </div>

                </div>
            </div>
        </section>

        {/* {contactsection} */}

 <section className="contact-section py-5" id="cont">
  <div className="contact-form-container" data-aos="zoom-out">

    <h5 className="contact-title">See TalentOS in Action</h5>

    <p className="contact-description">
      Fill out the form below and our team will be in touch to schedule
      your personalized demo.
    </p>

    <form onSubmit={(e) => {
      e.preventDefault();
      
      // Your target WhatsApp Phone Number (include country code, without '+' or spaces)
      const whatsappNumber = "919901718700"; 
      
      // Construct a clean, readable text message string
      const message = `Hello TalentOS Team,%0A%0A` +
                      `I would like to schedule a personalized demo.%0A%0A` +
                      `*Full Name:* ${encodeURIComponent(formData.fullName)}%0A` +
                      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
                      `*Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
                      `*Institute/Company:* ${encodeURIComponent(formData.company || 'Not Provided')}%0A` +
                      `*Role:* ${encodeURIComponent(formData.role || 'Not Selected')}`;
      
      // Redirects user seamlessly to WhatsApp web or mobile app
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
    }}>

      <div className="contact-grid" >

        <div className="contact-field">
          <label>Full Name *</label>
          <input 
            type="text" 
            placeholder="Enter Your Name" 
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            required 
          />
        </div>

        <div className="contact-field">
          <label>Email *</label>
          <input 
            type="email" 
            placeholder="Enter Mail-Id" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
        </div>

        <div className="contact-field">
          <label>Phone Number *</label>
          <input 
            type="tel" 
            placeholder="Enter Phone Number" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required 
          />
        </div>

        <div className="contact-field">
          <label>Institute / Company Name</label>
          <input 
            type="text" 
            placeholder="Enter Company Name" 
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>

      </div>

      <div className="contact-field contact-full-width">
        <label>Your Role</label>
        <select 
          value={formData.role} 
          onChange={(e) => setFormData({...formData, role: e.target.value})}
        >
          <option value="">Select your role</option>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Administrator">Administrator</option>
          <option value="HR">HR</option>
        </select>
      </div>

      {/* CHANGED: Removed the nested <a> link to allow standard form 'submit' interception */}
      <button type="submit" className="contact-btn">
        Schedule My Demo
      </button>

    </form>

  </div>
</section>

        {/* ===== FAQ Section ===== */}
        <FaqSection />

        {/* ===== CTA Banner Section ===== */}
        <section className="cta-sec">
            <div className="cta-inner">
                <h2 className="cta-title">Ready to build India's most successful<br />placement program?</h2>
                <p className="cta-sub">Join 500+ institutes already using TalentOS to power smarter, faster, and more successful campus placements.</p>
                <div className="cta-btns">
                    <div className="cta-btns">
    
    <NavHashLink className="cta-btn-outline ban-btn" to="#cont">
        <i className="bi bi-play-fill"></i> Request a Demo
    </NavHashLink>
    
    <NavHashLink className="cta-btn-solid ban-btn" to="#pricing">
        Start Free Trial <i className="bi bi-arrow-right"></i>
    </NavHashLink>
</div>
                </div>
            </div>
        </section>

        <Footer />

        {/* ===== Sticky Back to Artlysoft Button ===== */}
        <Link to="/" className="back-to-artlysoft-btn">
            <i className="bi bi-arrow-left-circle-fill"></i>
            Back to Artlysoft
        </Link>

        </div>



    )
}

export default ProductPage;
