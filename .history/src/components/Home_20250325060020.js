import React, { useEffect, useRef } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  const headingsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray([".wdwd-01-num", ".wdwd-02-num", ".wdwd-03-num"]).forEach((num) => {
      gsap.to(num, {
        color: "#33d90b", // Hover color
        duration: 0.5, // Smooth transition
        scrollTrigger: {
          trigger: num,
          start: "top 100%", // Adjust trigger position
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  

  useEffect(() => {
    headingsRef.current.forEach((heading) => {
      if (heading) {
        let letters = Array.from(heading.childNodes);
        heading.innerHTML = '';

        letters.forEach((node) => {
          if (node.nodeType === 3) { // Text node
            node.textContent.split('').forEach((char) => {
              let span = document.createElement('span');
              if (char === ' ') {
                span.innerHTML = '&nbsp;';
              } else {
                span.textContent = char;
              }
              span.style.display = 'inline-block';
              heading.appendChild(span);
            });
          } else {
            heading.appendChild(node.cloneNode(true)); // Preserve existing elements like spans
          }
        });

        gsap.fromTo(
          heading.children,
          { opacity: 0, y: -50, rotationX: 90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.05,
            scrollTrigger: {
              trigger: heading,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    // Size variation animation for logos
    const leftLogos = document.querySelectorAll('.track-left .logo-slide');
    const rightLogos = document.querySelectorAll('.track-right .logo-slide');
    
    // Create animation for logos entering viewport
    leftLogos.forEach((logo, index) => {
      gsap.fromTo(logo, 
        { scale: 0.8, opacity: 0.7 },
        { 
          scale: 1, 
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: '.resorces-logos',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.05
        }
      );
    });
    
    rightLogos.forEach((logo, index) => {
      gsap.fromTo(logo, 
        { scale: 0.8, opacity: 0.7 },
        { 
          scale: 1, 
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: '.resorces-logos',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.05
        }
      );
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 ref={(el) => (headingsRef.current[4] = el)} className="head">We Are Team <span className="highlighted">Scope</span>.</h1>
          <p className="caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
        </div>
        <div className="inner-container">
          <div className="grid-image-left"></div>
          <div className="circle-light"></div>
          <div className="grid-image-right"></div>
          <div className="circles">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
      </div>
      
      <div className="inside-scope">
        <div className="is-circle-light"></div>
        <div className="is-top-layer">
          <div className="is-contents">
            <h2 ref={(el) => (headingsRef.current[0] = el)} className='is-head'>Inside <span className="highlighted">Scope.</span></h2>
            <p className='is-caption'>SCOPE Club, the technical club of MLRIT, fosters a strong coding culture through collaboration and events in AI, Open Source, Game Development, Web & App Development, and more. It connects students with experienced mentors, providing an official platform for guidance, networking, and growth beyond campus boundaries.</p>
          </div>
          <div className="is-image">
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.68/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/gfHtOWImHKL9KP6O/scene.splinecode"></spline-viewer>          </div>
        </div>
      </div>

      <div className="wdwd">
        <h2 ref={(el) => (headingsRef.current[1] = el)} className="wdwd-head">What do <span className="highlighted">we DO</span>?</h2>
        <div className="wdwd-main-container">
        <div className="wdwe-01-container">
          <p className="wdwd-01-num">01.</p>
          <div className="wdwd-01">
            <h3 className="wdwd-01-head">Hackathons</h3>
            <p className="wdwd-01-content">At SCOPE Club, we believe that hackathons are more than just coding competitions—they're a launchpad for innovation, collaboration, and real-world problem-solving. We regularly organize hackathons that bring together passionate developers, designers, and problem-solvers to build, innovate, and compete.</p>
          </div>
        </div>
        <div className="wdwe-02-container">
          <div className="wdwd-02">
            <h3 className="wdwd-02-head">Coding Contests</h3>
            <p className="wdwd-02-content">At SCOPE Club, we foster a strong competitive coding culture by organizing exciting coding contests that challenge participants to think logically, optimize solutions, and push their limits. Whether you're a beginner or an experienced coder, our contests provide the perfect platform to sharpen your problem-solving skills, learn new algorithms, and compete with the best minds.</p>
          </div>
          <p className="wdwd-02-num">02.</p>
        </div>
        <div className="wdwe-03-container">
          <p className="wdwd-03-num">03.</p>
          <div className="wdwd-03">
            <h3 className="wdwd-03-head">Projects</h3>
            <p className="wdwd-03-content">At SCOPE Club, we believe that coding is more than just solving problems—it's about building real-world solutions. Through our project-based learning approach, we encourage students to collaborate, innovate, and develop projects that have a tangible impact.</p>
          </div>
        </div>
        </div>
      </div>
      
      <div className="brand-events">
        <div className="brand-events-top-container">
        <h2 ref={(el) => (headingsRef.current[2] = el)} className="brand-events-head">Our <span className="highlighted">events</span> define our <span className="highlighted">brand</span>.</h2>
        <p className="brand-events-caption">SCOPE Club events drive innovation through hackathons, coding contests, and tech workshops. We foster hands-on learning, mentorship, and collaboration. From problem-solving to real-world impact, our events shape a thriving tech community.</p>
        </div>
        <div className="brand-events-bottom-container">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/images/zenith.png`} alt="Zenith" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/images/webmania.png`} alt="Webmania" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/images/modifest.png`} alt="Modifest" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/images/careerzen.png`} alt="Careerzen" className="logo"  />
          <img src={`${process.env.PUBLIC_URL}/images/cbug.png`} alt="CBUG" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/images/gamehub.png`} alt="Gamehub" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/images/splash.png`} alt="Splash" className="logo" />
          <img src={`${process.env.PUBLIC_URL}/images/appfiesta.png`} alt="Appfiesta" className="logo" />
        </div>
      </div>

      
      </div>
      <div className="explore-resources">
        <h2 ref={(el) => (headingsRef.current[3] = el)} className="explore-resources-head">Explore our <span className="highlighted">resources</span>.</h2>
        <p className="explore-resources-caption">At SCOPE Club, we believe in empowering students with the tools and knowledge they need to succeed. Our resources are designed to help you learn, grow, and excel in your coding journey.</p>
        <div className="resorces-logos">
          <div className="logo-carousel">
            <div className="logo-track track-left">
              {/* First row - naturally white/monochrome logos */}
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/react/white" alt="React" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/javascript/white" alt="JavaScript" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/python/white" alt="Python" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/nodedotjs/white" alt="Node.js" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/angular/white" alt="Angular" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/vuedotjs/white" alt="Vue" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/typescript/white" alt="TypeScript" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/html5/white" alt="HTML5" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/react/white" alt="React" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/javascript/white" alt="JavaScript" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/python/white" alt="Python" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/nodedotjs/white" alt="Node.js" />
              </div>
            </div>
            
            <div className="logo-track track-right">
              {/* Second row - naturally white/monochrome logos */}
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/mongodb/white" alt="MongoDB" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/docker/white" alt="Docker" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/firebase/white" alt="Firebase" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/figma/white" alt="Figma" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/css3/white" alt="CSS3" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/tensorflow/white" alt="TensorFlow" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/java.svg" alt="Java" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/mongodb/white" alt="MongoDB" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/docker/white" alt="Docker" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/firebase/white" alt="Firebase" />
              </div>
              <div className="logo-slide">
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
              </div>
            </div>
          </div>
        </div>
        <button 
          className="explore-resources-btn" 
          onClick={() => {
            navigate('/resources');
            window.scrollTo(0, 0); // Scroll to top after navigation
          }}
        >
          Explore
        </button>
      </div>
      
    </div>
  )
}

export default Home
