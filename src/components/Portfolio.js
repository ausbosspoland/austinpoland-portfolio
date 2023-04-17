import React from "react";

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={pizzasocialmeda} alt="pizza social media website" />
                </div>
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={javascriptquiz} alt="quiz for javascript fundamentals" />
                </div>
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={notetaker} alt="save and retrieve notes" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Portfolio;