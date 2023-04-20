import React from "react";
import myself from "../myself_aboutme.jpg";

const About = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrapped">
                    <img className="profile-img" src={myself} alt="myself..."/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="heading-aboutmyself">About Me</h1>
                <p>
                    Hello, my name is Austin. I am a Full Stack Web Developer also proficient in QA Testing.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About