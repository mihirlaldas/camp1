import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/camp-k-12-logo.png";
import logo2x from "../img/logo/camp-k-12-logo@2x.png";
import logo3x from "../img/logo/camp-k-12-logo@3x.png";

import leaderboard from "../img/leaderboard_2020-04-21/leaderboard.png";
import leaderboard2x from "../img/leaderboard_2020-04-21/leaderboard@2x.png";
import leaderboard3x from "../img/leaderboard_2020-04-21/leaderboard@3x.png";

import group from "../img/group-36_2020-04-21/group-36.png";
import group2x from "../img/group-36_2020-04-21/group-36@2x.png";
import group3x from "../img/group-36_2020-04-21/group-36@3x.png";

import skill from "../img/skill-icon_2020-04-21/skill-icon.png";
import skill2x from "../img/skill-icon_2020-04-21/skill-icon@2x.png";
import skill3x from "../img/skill-icon_2020-04-21/skill-icon@3x.png";

import profile from "../img/profile pic.jpg";

export default function Navbar(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent text-white">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            srcset={`${logo2x} 2x,
             ${logo3x} 3x`}
            className="CampK12-Logo"
            alt="camp-k12-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/courses">
                <button className="btn btn-outline-success text-white">
                  Online Courses
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="text-white">
                <button className="btn  text-white">{props.link2}</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <button className="btn text-white">{props.link3}</button>
              </Link>
            </li>
          </ul>

          {props.isLandingPage ? (
            <form className="form-inline my-2 my-lg-0">
              <img
                src={leaderboard}
                srcset={`${leaderboard2x} 2x,
             ${leaderboard3x} 3x`}
                alt="leaderboard"
                className="mr-3"
              />
              <div className="notification">
                <img
                  src={group}
                  srcset={`${group2x} 2x,
             ${group3x} 3x`}
                  alt="group notification"
                  className="mr-3"
                />
                <span className="notify-badge">2</span>
              </div>
              <div className="skill-wrapper  d-flex align-items-center justify-content-between rounded py-0">
                <img
                  src={skill}
                  srcset={`${skill2x} 2x,
             ${skill3x} 3x`}
                  alt="skill"
                  className="p-2 img-fluid "
                />
                <p className="pt-3 text-white">100</p>
                <img
                  src={profile}
                  alt="profile"
                  width="33.5px"
                  className="img-fluid rounded"
                />
              </div>
              <p className="px-2 font-weight-bold">&#8964;</p>
            </form>
          ) : (
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-primary mx-2">FREE TRIAL</button>
              <button className="btn btn-primary mx-2">LOG IN</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
}
