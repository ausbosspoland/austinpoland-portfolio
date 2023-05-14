import React from "react";
import javascriptquiz from "../images/Javascript-quiz-img.jpg";
import taskmaster from "../images/Taskmaster-pro-img.jpg";
import runbuddy from "../images/Runbuddy-app-img.jpg";
// Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // Javascriptquiz
    const openPopupboxJavascriptquiz = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={javascriptquiz} alt="Quiz for JavaScript fundamentals" />
                <p>JavaScript Quiz Project</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://ausbosspoland.github.io/Java-Quiz/", "_blank")}>https://ausbosspoland.github.io/Java-Quiz/</a>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ausbosspoland/Java-Quiz")}>https://github.com/ausbosspoland/Java-Quiz</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigJavascriptquiz = {
        titlebar: {
            enable: true,
            text: "Javascript Quiz Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxJavascriptquiz}>
                        <img className="portfolio-image" src={javascriptquiz} alt="quiz for javascript fundamentals" />
                        <div className="overflow"></div>
                    </div>
                    {/* - */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={taskmaster} alt="efficient way to keep track of tasks" />
                        <div className="overflow"></div>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={runbuddy} alt="mock website to sign up for personal training" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigJavascriptquiz} />
        </div>
    )
}

export default Portfolio;