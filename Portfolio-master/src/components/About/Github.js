import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Srinivas-Bhat"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        id="githubCalenderDisplay"
      />
      <div className="statistics_wrapper">
        <div align="center" className="statistics_Imagewrapper">
          <img
          className="github1"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=Srinivas-Bhat&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117&locale=en"
            alt="ashishprusty24"
          />
        </div>
      </div>
    </Row>
  );
}

export default Github;
