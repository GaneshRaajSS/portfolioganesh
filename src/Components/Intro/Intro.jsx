import React from 'react';
import './Intro.css';
// import pic from '../../images/pic.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="i-l-text">
                <span>Hello!</span>
                <span>We have</span>
                <span>Design</span>
                <span>Experience</span>
                <span>---&nbsp;&nbsp;&nbsp;Hi I am a Web Designer-Aspiring to create more Design in Future</span>
            </div>
            <div className="btn-intro">
                <button className='button-i-btntalk'>Lets Connect!</button>
            
                <button className='button-i-btnproject'>Project</button>
            </div>
            
        </div>
        <div className="intro-right">
            <div className="pic1">
                
  <svg
    width="800"
    height="700"
    viewBox="0 200 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="shape">
        <path fill="currentColor" d="M751,694Q724,888,567.5,771.5Q411,655,247.5,577.5Q84,500,236.5,404Q389,308,521.5,271Q654,234,716,367Q778,500,751,694Z"></path>
      </clipPath>
    </defs>
  
    

    <g  clip-path="url(#shape)">
      <path fill="#8773ee" d="M751,694Q724,888,567.5,771.5Q411,655,247.5,577.5Q84,500,236.5,404Q389,308,521.5,271Q654,234,716,367Q778,500,751,694Z" />
    </g>
  </svg>
  
            </div>
            <div className="pic2">
                </div>
            {/* <div className="photo">
                <img src={pic} className= "ganesh"alt="pic" />
            </div> */}
            
            <div className="i-r-text">
                <span>“It's through mistakes that you actually can grow. You have to get bad in order to get good.”</span>
                <span>-PAULA SCHER</span>
            </div>
        </div>
    </div>
  )
}

export default Intro