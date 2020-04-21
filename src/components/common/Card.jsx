import React from "react";
import fill from "../img/fill-1_2020-04-21/fill-1.png";
import prereq from "../img/fill-1_2020-04-21/prereq.png";

import coins from "../img/camp-k-12-coins-copy-2_2020-04-21/coins.png";
import shield from "../img/shield-3_2020-04-21/shield-3.png";

import calendar from "../img/boxes/calendar.png";
import day from "../img/boxes/day.png";
import time from "../img/boxes/time.png";

export default function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "300px" }}>
        <img
          src={props.img}
          alt={props.alt}
          className="card-img-top"
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: "2rem" }}>
            {props.title}
          </h5>
          <br />
          <hr />
          <br />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <p className="text-info">
                  {" "}
                  <img src={fill} alt="" className="img-fluid" /> GRADES
                </p>
              </div>
              <div className="col-6 ">
                <p className="text-info">
                  <img src={prereq} alt="" className="img-fluid" /> PRE-REQ
                </p>
              </div>
            </div>
            <div className="row justify-cotent-center">
              <div className="col-6">
                <p>{props.grades}</p>
              </div>
              <div className="col-6">
                <p>{props.prereq}</p>
              </div>
            </div>
            <hr />
            <div className="row ">
              <div className="col-3">
                <img src={shield} className="img-fluid" />
              </div>
              <div className="col-3">
                <span className="badge badge-light p-2">{props.tag1}</span>
              </div>
              <div className="col-3">
                <span className="badge badge-light p-2">{props.tag2}</span>
              </div>
              <div className="col-3">
                <span className="badge badge-light p-2">{props.tag3}</span>
              </div>
            </div>
            <br />
            <div className="row ">
              <div className="col-3">
                <img src={coins} alt="" />
              </div>
              <div className="col-3">
                <span className="badge badge-warning p-2 text-success">
                  +1000
                </span>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="row">
              <div className="col-3">
                <img src={calendar} alt="" />
              </div>
              <div className="col-9">
                <p>17th Feb (in 4 days)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={day} alt="" />
              </div>
              <div className="col-9">
                <p>Mon, Tue & Wed</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={time} alt="" />
              </div>
              <div className="col-9">
                <p>6:00PM to 7:00PM</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <p className="text-dark">Rs.6000</p>
              </div>
              <div className="col-2"></div>
              <div className="col-4">
                <p className="text-primary text-right">Enroll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
