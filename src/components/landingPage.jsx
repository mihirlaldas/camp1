import React from "react";
import logo from "./img/logo/camp-k-12-logo.png";
import logo2x from "./img/logo/camp-k-12-logo@2x.png";
import logo3x from "./img/logo/camp-k-12-logo@3x.png";

import leaderboard from "./img/leaderboard_2020-04-21/leaderboard.png";
import leaderboard2x from "./img/leaderboard_2020-04-21/leaderboard@2x.png";
import leaderboard3x from "./img/leaderboard_2020-04-21/leaderboard@3x.png";

import group from "./img/group-36_2020-04-21/group-36.png";
import group2x from "./img/group-36_2020-04-21/group-36@2x.png";
import group3x from "./img/group-36_2020-04-21/group-36@3x.png";

import skill from "./img/skill-icon_2020-04-21/skill-icon.png";
import skill2x from "./img/skill-icon_2020-04-21/skill-icon@2x.png";
import skill3x from "./img/skill-icon_2020-04-21/skill-icon@3x.png";

import profile from "./img/profile pic.jpg";

import headerPhoto from "./img/header-photo_2020-04-21/header-photo.png";
import headerPhoto2x from "./img/header-photo_2020-04-21/header-photo@2x.png";
import headerPhoto3x from "./img/header-photo_2020-04-21/header-photo@3x.png";

import Box from "./common/Box";

import webImg from "./img/boxes/group-14.png";
import mobileImg from "./img/boxes/mobile-dev.png";
import vr from "./img/boxes/vr.png";
import ai from "./img/boxes/ai.png";

import shield from "./img/shield-3_2020-04-21/shield-3.png";
import coins from "./img/camp-k-12-coins-copy-2_2020-04-21/coins.png";

import Card from "./common/Card";

export default function landingPage() {
  return (
    <div>
      <header>
        <nav className="container d-flex pt-3 ">
          <img
            src={logo}
            srcset={`${logo2x} 2x,
             ${logo3x} 3x`}
            className="CampK12-Logo mr-auto"
            alt="camp-k12-logo"
          />
          <img
            src={leaderboard}
            srcset={`${leaderboard2x} 2x,
             ${leaderboard3x} 3x`}
            alt="leaderboard"
            className="mr-1"
          />
          <img
            src={group}
            srcset={`${group2x} 2x,
             ${group3x} 3x`}
            alt="group notification"
            className="mr-1"
          />
          <div className="skill-wrapper  d-flex align-items-center justify-content-between rounded">
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
        </nav>
        {/* showcase headline with pic */}
        <div className="container d-flex text-white mt-5">
          <div className="row mt-5">
            <div className="col-md-8 col-12">
              <h1 className="display-4">
                Welcome to the school of the future.
              </h1>
              <p className="">
                Cutting-edge technology courses for Ages 8 - 18.
                <br /> Unlock 21st century skills, earn , and build <br />
                acollege-ready portfolio as you learn.
              </p>
            </div>
            <div className="col-md-4 col-12 p-0 m-0">
              <img
                src={headerPhoto}
                srcset={`${headerPhoto2x} 2x,
             ${headerPhoto3x} 3x`}
                alt="headerPhoto"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="container options">
          <h2 className="display-5 text-center p-4 text-white">
            What do you want to learn?
          </h2>

          <div className="row">
            <div className="col-md-3 col-12">
              <Box img={webImg} alt="code editor" text="Web Development" />
            </div>
            <div className="col-md-3 col-12">
              <Box
                img={mobileImg}
                alt="mobile dev"
                text="Mobile App Development"
              />
            </div>
            <div className="col-md-3 col-12">
              <Box img={vr} alt="vr/ar" text="Mixed Reality (AR/VR)" />
            </div>
            <div className="col-md-3 col-12">
              <Box img={ai} alt="ai" text="Machine Learning (AI)" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="container sec-online text-center">
          <div className="d-flex justify-content-center">
            <h4 className="display-5 text-primary">Upcoming online courses</h4>
            <h4 className="badge badge-info ml-3 p-2">&#11044; &nbsp; LIVE</h4>
          </div>
          <p className="opac">
            Learn from live teachers, not pre-recorded videos, in our
            intelligent virtual classrooms.
          </p>
          <p className="opac">
            <img src={shield} alt="shield" /> = 21st century skills you’ll
            unlock &nbsp; &nbsp; &nbsp;
            <img src={coins} alt="coins" /> = coins you’ll earn for completion
          </p>
        </section>
        <section className="container">
          <div className="card-deck justify-content-center">
            <Card
              img="https://www.nicepng.com/png/detail/351-3517329_application-development-icon-mobile-application-development-icon.png"
              title="Android App Development Level1"
              grades="4-8"
              prereq="Yes"
              tag1="Android"
              tag2="UI/UX"
              tag3="+4"
            />
            <Card
              img="https://www.netclipart.com/pp/m/340-3406113_web-design-web-development-icon.png"
              title="Web Development Level1"
              grades="4-12"
              prereq="Yes"
              tag1="Android"
              tag2="UI/UX"
              tag3="+4"
            />
            <Card
              img="https://s.clipartkey.com/mpngs/s/300-3001409_graphic-ar-vr-game-development-ar-vr-technology.png"
              title="Virtual Reality Level1"
              grades="5-12"
              prereq="No"
              tag1="Android"
              tag2="UI/UX"
              tag3="+4"
            />
          </div>
        </section>
        <footer>
          <p className="text-white text-center p-5 mt-2">
            Questions? Contact us at <strong>info@campk12.com</strong>
          </p>
        </footer>
      </main>
    </div>
  );
}
