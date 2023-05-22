import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "FJrSw1Jf3lmFgviUy";

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the form and describe your interests or concerns and I will contact you as soon as possible.</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name Input */}
                        <input
                        id="name"
                        type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                        />
                        <div className="line"></div>
                        {/* Phone Input */}
                        <input
                        id="phone"
                        type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                        />
                        <div className="line"></div>
                        {/* Email Input */}
                        <input
                        id="email"
                        type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                        />
                        <div className="line"></div>
                        {/* Subject Input */}
                        <input
                        id="subject"
                        type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                        />
                        <div className="line"></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description */}
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        ></textarea>
                        <div className="line"></div>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;