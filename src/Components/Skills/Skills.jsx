import React from 'react'
import './Skills.css'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import ProgressProvider from 'progress-provider'
// import './Skillsright.css'


const Skills = () => {
    const percentage = 66;
  return (
    <div className="Skills">
        <div className="s-left">
            <div className="T-skills">
                <div className="s-box">
                    <span className="s-title">HTML</span>
                    <div className="s-bar">
                        <span className="skill-per html">
                            <span className="s-per">70%</span>
                        </span>
                    </div>
                </div>
                <div className="s-box">
                    <span className="s-title">CSS</span>
                    <div className="s-bar">
                        <span className="skill-per css">
                            <span className="s-per">60%</span>
                        </span>
                    </div>
                </div>
                <div className="s-box">
                    <span className="s-title">JS</span>
                    <div className="s-bar">
                        <span className="skill-per js">
                            <span className="s-per">30%</span>
                        </span>
                    </div>
                </div>
                <div className="s-box">
                    <span className="s-title">React</span>
                    <div className="s-bar">
                        <span className="skill-per react">
                            <span className="s-per">20%</span>
                        </span>
                    </div>
                </div>
                <div className="s-box">
                    <span className="s-title">Python</span>
                    <div className="s-bar">
                        <span className="skill-per python">
                            <span className="s-per">50%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="s-right">
            <div style={{ width: 200, height: 200 }}>
            {/* <CircularProgressbar value={66} />
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <ProgressProvider valueStart={0} valueEnd={66}>
  {(value) => <CircularProgressbar value={value} />}
</ProgressProvider> */}
        </div>
        {/* <div class="container">
        <span className="p-title1">Team Work</span>



        <div class="progress">
        <span class="title-timer" data-from="0" data-to="30" data-speed="1800">70%</span>
        <div class="overlay"></div>
        <div class="left"></div>
        <div class="right"></div>
        </div>
        <span className="p-title2">Communication</span>
        <div class="progress">
        <span class="title-timer" data-from="0" data-to="50" data-speed="1500">50%</span>
        <div class="overlay"></div>
        <div class="left"></div>
        <div class="right"></div>
        </div>
        <div class="progress">
        <span class="title-timer" data-from="0" data-to="100" data-speed="1500">100%</span>
        <div class="overlay"></div>
        <div class="left"></div>
        <div class="right"></div>
        </div>
        <div class="progress">
        <span class="title-timer" data-from="0" data-to="85" data-speed="1800">85%</span>
        <div class="overlay"></div>
        <div class="left"></div>
        <div class="right"></div>
        </div>

        </div>  
        <span className="p-title3">Team Management</span>
        <span className="p-title4">Creativity</span> */}

        </div>
    </div>
  )
}

export default Skills



