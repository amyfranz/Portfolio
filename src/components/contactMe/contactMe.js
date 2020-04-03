import React from "react";

export default function contactMe() {
  return (
    <div className="contactMe">
      <div className="contactMeTitle">
        <h1>contactMe</h1>
      </div>
      <div className="contactMeForm">
        <form>
          <input type="text" placeholder="Name:" name="name" required />
          <input type="email" placeholder="Email:" name="email" required />
          <input type="text" placeholder="Subject:" name="subject" required />
          <textarea placeholder="Message:" name="message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
