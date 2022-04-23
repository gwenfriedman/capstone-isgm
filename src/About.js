import React from 'react'
import { useNavigate } from "react-router-dom";
import frame1 from './images/about/frame-1.png';
import frame2 from './images/about/frame-2.png';
import frame3 from './images/about/frame-3.png';
import frame4 from './images/about/frame-4.png';
import frame5 from './images/about/frame-5.png';
import frame6 from './images/about/frame-6.png';
import gwen from './images/about/gwen.png';
import cayla from './images/about/cayla.png';
import liam from './images/about/liam.png';

import carrot from './images/about/carrot.png';

import './App.css';
import './generalStyling.css';

function About() {

  let navigate = useNavigate();

  return (
    <div className={"about-page"} style={{ width: '100%' }}>

      {/* View 1 */}
      <img className={"about-frame-1"} src={frame1} width="650px" />

      <p className="about-text-1">
        The works have an updated value of $500 million and The Museum is offering a $10 million
        dollar reward for information leading directly to the safe return of the stolen works.
      </p>

      <p className="about-text-2">
        contact Director of Security Anthony Amore at 617 278 5114 or reward@gardnermuseum.org
      </p>

      <img className={"about-carrot"} src={carrot} />


      {/* view 2 */}

      <p className='about-text-3'> HUGE THANK YOU TO </p>

      <div className='frames'>

        <div className='about-frame-2'>
          <img className={""} src={frame2} />
          <p> Netflix <br /> “This is a Robbery”</p>
        </div>

        <div className='about-frame-3'>
          <img className={""} src={frame3} />
          <p> Isabella Stewart <br />
            Gardner Museum, Boston <br /> 
            www.gardnermuseum.org</p>
        </div>

        <div className='about-frame-4'>
          <img className={""} src={frame4} />
          <p> Liam Scott <br />
            Illustrator
            extraordinaire</p>
        </div>

        <div className='about-frame-5'>
          <img className={""} src={frame5} />
          <p> Steven Geofrey <br />

            Mark Sivak <br />

            For all of your guidance</p>
        </div>
      </div>

      {/* view 3 */}

      <div className='about-frame-6'>
        <img className={""} src={frame6} />
        <div className={"actors"}>
        <p> Voice Actors </p>
        <p>
          Robin Taylor <br />
          Liam Scott <br />
          Victoria Napolitano <br />
          Sofia Cianca <br />
          Nina Poprocki <br />
          Maggie Minnock <br />
          Jack Czenszack <br />
          Theodore Hamm <br />
          Noah Taylor  <br />
          Johannes Testorf <br />
          Toby Bartles <br />
          Cayla Chow <br />
          Gwen Friedman
        </p>
        </div>
      </div>

      {/* view 4 */}

      <p className='about-text-3'> WHO WE ARE </p>

      <div className='frames'>

        <div className='bio'>
          <img className={""} src={gwen} />
          <p> Gwen Friedman <br/> Developer</p>
          <p> Senior, Northeastern University <br/> Computer Science + Design </p>
        </div>

        <div className='bio'>
          <img className={""} src={cayla} />
          <p> Cayla Chow <br/> Designer</p>
          <p> Senior, Northeastern University <br/> Experience Design </p>
        </div>

        <div className='bio liam'>
          <img className={""} src={liam} />
          <p> Liam Scott <br/> Illustrator</p>
          <p> Freshman, Northeastern University <br/> Architecture + Design </p>
        </div>
      </div>


      {/* view 5 */}

      <p className='about-text-3'> WHAT THIS IS </p>
      

      <div className='about-page-end'>

        <p className={"about-paragraph"}>
        This project began as a desire to create an experience. In hopes of diving into an interdisciplinary 
        project that would combine our specialties, we began searching for a story that could be interactive, 
        decisive and immersive. Right down the street from our apartment, the Isabella Stewart Gardner Museum 
        has been an icon to the city of Boston for many years. In our last year at Northeastern University, an 
        homage to our home for the past five years, this online experience is meant to engage the user deeper 
        into the Isabella Stewart Gardner Museum heist in hopes of adding to the conversation to help bring 
        the works home. 
        </p>

        <button className='styledButton' onClick={() => {
          localStorage.clear()
          navigate("/")
        }}>
          Start over
        </button>
      </div>
    </div>

  )
}

export default About;