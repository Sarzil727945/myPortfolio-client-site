import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import useTitle from '../../hooks/useTitle';
import Support from './Support/Support';
import img from '../../../public/sm.png'
import Contact from '../Contact/Contact';
import { BiCloudDownload } from 'react-icons/bi';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
     return (
          <div>
               <Header></Header>
               <div>
                    <div className=' section-1 pt-5 mt-3'>
                         <div className='container' id='home'>
                              <div className='row d-flex align-items-center mt-lg-5 pt-2'>
                                   <div className='py-5 col-lg-6 px-3'>
                                        <div className='textSmCenter'>
                                             <h3 className=' org-color fw-bold ling-height'>Hi, I'm </h3>
                                             <h1 className='fw-bold Text-color name'>Sarzil Muntaha</h1>
                                        </div>
                                        <h4 className=' Text-color fw-bold py-2'>
                                             <span>
                                                  <span>I'm A</span>{' '}
                                                  <TypeAnimation
                                                       sequence={[
                                                            'MERN Stack Web Developer',
                                                            1000,
                                                            'Student of CSE Department',
                                                            1000,
                                                       ]}
                                                       repeat={Infinity}
                                                  />
                                             </span></h4>
                                        <p className=' text-muted fw-semibold pe-lg-5'>
                                             I am a MERN stack web developer. And I am a student of Computer Science an Engineer (CSE) department of
                                             Green University Of Bangladesh. I was a batch seven MERN stack web developer student of Programming
                                             Hero. Well-versed HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React, Express.JS, MongoDB.
                                        </p>
                                        <div className='mt-5'>
                                             <button className='borderNone'>
                                                  <a className='aBtn button2' href="https://drive.google.com/file/d/1Q9sz0uzkLK6M4xOn2zZEkQntoR-tj5RG/view?usp=sharing" target='_blank'>
                                                       <span><span className='iconSize'><BiCloudDownload /></span> Resume</span>
                                                  </a>
                                             </button>
                                             <Link to="contact" spy={true} smooth={true} offset={100} duration={500}>
                                                  <button className='button1 ms-2'>Contact</button>
                                             </Link>
                                        </div>
                                   </div>
                                   <div className=' col-lg-6'>
                                        <img className='img-fluid myPic' src={img} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className=' mt-lg-5 pt-lg-3'>
                    <Services></Services>
               </div>

               <div data-aos="fade-up">
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default Home;