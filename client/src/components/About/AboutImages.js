import React from "react";
import classes from "./About.module.css";

function AboutImages() {
  return (
    <div className={classes.flex}>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/1.jpg")} alt={"1"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/2.jpg")} alt={"2"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/3.jpg")} alt={"3"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/4.jpg")} alt={"4"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/5.jpg")} alt={"5"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/6.jpg")} alt={"6"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/7.jpg")} alt={"7"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/8.jpg")} alt={"8"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/9.jpg")} alt={"9"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/10.jpg")} alt={"10"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/11.jpg")} alt={"11"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/12.jpg")} alt={"12"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/13.jpg")} alt={"13"}></img>
      </div>
      <div className={classes.flex_item}>
        <img src={require("../../images/About/14.jpg")} alt={"14"}></img>
      </div>
    </div>
  );
}

export default AboutImages;
