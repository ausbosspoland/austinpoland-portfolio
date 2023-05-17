import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Please fill out the form and describe your interests or concerns and I will contact you as soon as possible.</p>
            </div>
            <div className="container">
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
                        {/* Phone Input */}
                        <input
                        id="phone"
                        type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            phone="phone"
                        />
                        {/* Email Input */}
                        <input
                        id="email"
                        type="email"
                            className="form-control"
                            placeholder="Email"
                            email="email"
                        />
                        {/* Subject Input */}
                        <input
                        id="subject"
                        type="text"
                            className="form-control"
                            placeholder="Subject"
                            subject="subject"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description */}
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        email="email"
                        ></textarea>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;