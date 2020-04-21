import React from "react";
import Card2 from "./common/Card2";
import logo from "./img/logo/camp-k-12-logo.png";
import leaderboard from "./img/leaderboard_2020-04-21/leaderboard.png";

import Box2 from "./common/Box2";

import learnInteractive from "./img/boxes/learn-interactive.png";
import homePic from "./img/boxes/home.png";
import pioneers from "./img/boxes/pioneers.png";
import learnByDoing from "./img/boxes/learn-by-doing.png";
import Navbar from "./common/Navbar";
export default function onlineCourses() {
  return (
    <div>
      <header>
        <Navbar link2="OFFLINE CAMPS" link3="REFER & EARN" />
        {/* showcases */}
        <div className="container text-white">
          <h4 className="display-5 my-5">ONLINE COURSES</h4>
          <div className="card-deck justify-content-center">
            <Box2
              img={learnInteractive}
              title="Learn interactively "
              text="LIVE online sessions with our expert mentors. See a demo."
            />
            <Box2
              img={homePic}
              title="Learn from anywhere "
              text="Convenience and safety for you 
              and your child."
            />
            <Box2
              img={pioneers}
              title="Learn from the pioneers "
              text="We’ve been teaching kids to code since 2010.  Read more."
            />
            <Box2
              img={learnByDoing}
              title="Learn by doing "
              text="100% project-based curriculum. 
              Solve real-world problems. 
              "
            />
          </div>
          <button className="btn btn-success mt-5">Book a free Trial</button>
        </div>
        <div className="container options">
          <div className="d-flex justify-content-center px-5 py-1">
            <button className="btn btn-light sel-grade shadow">
              Grade 1-4
            </button>
            <button className="btn btn-light active sel-grade shadow">
              Grade 5-8
            </button>
            <button className="btn btn-light sel-grade shadow">
              Grade 9-12
            </button>
          </div>
        </div>
      </header>
      <div className="rectangle">
        <section className="container sec-online shadow" id="grade-courses">
          <div className="row">
            <p className="col-4">
              Showing <strong>All</strong> courses for{" "}
              <strong>Grades 5-8</strong>
            </p>
            <div className="col-4"></div>
            <select name="sel-courses" id="" className="custom-select col-4">
              <option value="All" selected>
                All
              </option>
              <option value="AI">AI & ML</option>
            </select>
          </div>
          <div className="card-deck justify-content-center">
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
          </div>
        </section>
      </div>
    </div>
  );
}
