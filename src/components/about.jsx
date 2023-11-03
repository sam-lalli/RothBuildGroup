import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row slide-in">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Hunter Roth, <br></br> Founder of High West Estate Management</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
            </div>
          </div>
        </div>
        <div className="row row2 slide-in-2">
        <div className="col-xs-12 col-md-6">
          {" "}
            <div className="about-text-2">
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
                            <h3>Why Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
      </div>
      </div>{" "}
          <div className="col-xs-12 col-md-6">
            <img src="img/about2.jpg" className="img-responsive bottom-img" alt="" />
          </div>
      </div>
    </div>
    </div>
  );
};
