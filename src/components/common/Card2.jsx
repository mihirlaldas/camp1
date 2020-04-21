import React from "react";
import happy from "../img/boxes/happy.png";
import day from "../img/boxes/day.png";
import batch from "../img/boxes/batch.png";
import offers from "../img/boxes/offers.png";
import { Link } from "react-router-dom";
export default function Card2(props) {
  return (
    <div>
      <div className="card my-2">
        <div className="card-header bg-dark" style={{ height: "200px" }}></div>
        <div className="card-body">
          <h5 className="display-5">{props.title}</h5>
          <div className="row">
            <div className="col-3">
              <div className="text-muted">LEVEL </div>
              <span>1</span>
            </div>
            <div className="col-9">
              <div className="text-muted">GRADES </div>
              <span>5-8</span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-3">
              <img src={happy} alt="" />
            </div>
            <div className="col-9">
              <p>
                <strong>5.6k</strong> Happy Students
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={day} alt="" />
            </div>
            <div className="col-9">
              <p>
                <strong>12 Hours</strong> over 6 Sessions
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={batch} alt="" />
            </div>
            <div className="col-9">
              <p>Weeend and Weekday Batches</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                <strong>₹9999</strong>
                <small>
                  <del>12000</del>
                </small>
              </p>
            </div>
            <div className="col-6 text-right">
              <p>
                <img src={offers} alt="" srcset="" /> 16% off
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <Link to="#">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
