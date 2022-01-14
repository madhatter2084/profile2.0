import "./resume.css";

function Resume() {
  return (
    <>
      <h1 className="resume__title" id="resume">
        Resume
      </h1>
      <div className="resume">
        <div className="resume__content">
          <h1 className="resume__category">Work History</h1>
          <h2 className="resume__job">Web Developer (self-employed)</h2>
          <p className="resume__jobDescription">
            Full stack dev focused on creating simple yet modern layouts for
            private businesses to have an online home.
          </p>
          <ul className="resume__bullets">
            <li>React.js</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Firebase</li>
          </ul>
          <br />
          <br />
          <h2 className="resume__job">Store Leader Mentor (GameStop)</h2>
          <p className="resume__jobDescription">
            Leading sales teams to accomplish sales growth goals, while
            staffing/training/mentoring all associates in-store, and leaders
            from all around my district (18 stores)
          </p>
          <ul className="resume__bullets">
            <li>$2.5m sales volume annually</li>
            <li>Supervise and develop staff of 25</li>
            <li>Mentor store leaders</li>
            <li>Scheduling and coaching</li>
            <li>Customer service</li>
          </ul>
          <br />
          <br />
          <h2 className="resume__job">
            Corporal | Aviation Radio Technician (United States Marin Corps)
          </h2>
          <p className="resume__jobDescription">
            USMC leader and mentor responsible for mainting radio networks for
            air traffic control towers
          </p>
          <ul className="resume__bullets">
            <li>Train and develop junior Marines</li>
            <li>Unit maintenance technician</li>
            <li>Certificate of Commendation</li>
            <li>Iraq campaign medal with campaign star</li>
            <li>Afghanistan campaign medal</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
