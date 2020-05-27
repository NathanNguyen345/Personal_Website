import React from "react";
import classes from "./About.module.css";

function AboutImages() {
  return (
    <div className={`${classes.content} col-lg-12`}>
      <div className={classes.one}>
        <img src={require("../../images/About/1.jpg")} alt={"1"}></img>
      </div>
      <div className={classes.two}>
        <img src={require("../../images/About/2.jpg")} alt={"2"}></img>
      </div>
      <div className={classes.three}>
        <img src={require("../../images/About/3.jpg")} alt={"3"}></img>
      </div>
      <div className={classes.four}>
        <img src={require("../../images/About/4.jpg")} alt={"4"}></img>
      </div>
      <div className={classes.five}>
        <img src={require("../../images/About/5.jpg")} alt={"5"}></img>
      </div>
      <div className={classes.six}>
        <img src={require("../../images/About/6.jpg")} alt={"6"}></img>
      </div>
      <div className={classes.seven}>
        <img src={require("../../images/About/7.jpg")} alt={"7"}></img>
      </div>
      <div className={classes.eight}>
        <img src={require("../../images/About/8.jpg")} alt={"8"}></img>
      </div>
      <div className={classes.nine}>
        <img src={require("../../images/About/9.jpg")} alt={"9"}></img>
      </div>
      <div className={classes.ten}>
        <img src={require("../../images/About/10.jpg")} alt={"10"}></img>
      </div>
      <div className={classes.eleven}>
        <img src={require("../../images/About/11.jpg")} alt={"11"}></img>
      </div>
      <div className={classes.twelve}>
        <img src={require("../../images/About/12.jpg")} alt={"12"}></img>
      </div>
      <div className={classes.thirteen}>
        <img src={require("../../images/About/13.jpg")} alt={"13"}></img>
      </div>
      <div className={classes.fourteen}>
        <img src={require("../../images/About/14.jpg")} alt={"14"}></img>
      </div>
    </div>
  );
}

export default AboutImages;
