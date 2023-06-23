import React from "react";
import javascriptquiz from "../images/Javascript-quiz-img.jpg";
import taskmaster from "../images/Taskmaster-pro-img.jpg";
import runbuddy from "../images/Runbuddy-app-img.jpg";

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box">
                    <a href="https://ausbosspoland.github.io/Java-Quiz/" target="_blank" rel="noreferrer"><img className="portfolio-image" src={javascriptquiz} alt="pizza social media website"></img>
                    </a>
                </div>
                <div className="portfolio-image-box">
                    <a href="https://ausbosspoland.github.io/taskmaster-pro/" target="_blank" rel="noreferrer"><img className="portfolio-image" src={taskmaster} alt="quiz for javascript fundamentals"></img>
                    </a>
                </div>
                <div className="portfolio-image-box">
                    <a href="https://ausbosspoland.github.io/run-buddy/" target="_blank" rel="noreferrer"><img className="portfolio-image" src={runbuddy} alt="save and retrieve notes"></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Portfolio;