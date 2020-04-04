import React from "react";

export default function contactMe(props) {
  return (
    <div className="contactMe">
      <div className="contactMeTitle">
        <h1>contactMe</h1>
      </div>
      <div className="contactMeForm">
        <form name="contact" onSubmit={props.handleEmailFormSubmission}>
          <input
            type="text"
            placeholder="Name:"
            name="name"
            required
            onChange={props.handleEmailFormChange}
          />
          <input
            type="email"
            placeholder="Email:"
            name="email"
            required
            onChange={props.handleEmailFormChange}
          />
          <input
            type="text"
            placeholder="Subject:"
            name="subject"
            required
            onChange={props.handleEmailFormChange}
          />
          <textarea
            placeholder="Message:"
            name="message"
            required
            onChange={props.handleEmailFormChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
