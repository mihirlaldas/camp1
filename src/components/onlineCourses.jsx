import React from "react";
import logo from "./img/logo/camp-k-12-logo.png";
import leaderboard from "./img/leaderboard_2020-04-21/leaderboard.png";

export default function onlineCourses() {
  return (
    <div>
      <header>
        <nav className="container d-flex text-white pt-3">
          <img src={logo} alt="" className="CampK12-Logo" />
          <button className="px-2 btn btn-outline-success active">
            ONLINE COURSES
          </button>
          <p className="px-2">OFFLINE CAMPS</p>
          <p className="px-2 mr-auto">REFER & EARN</p>
          <img src={leaderboard} alt="" className="px-2" />
          <button className="btn btn-primary mx-2">FREE TRIAL</button>
          <button className="btn btn-primary mx-2">LOG IN</button>
        </nav>
      </header>
    </div>
  );
}
