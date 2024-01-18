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
              <p>{props.data ? props.data.paragraph4 : "loading..."}</p>
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
