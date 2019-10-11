import React, { Fragment } from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Fragment>
    <Backdrop show={props.show} />
    {props.show ? <div className={classes.Modal}>{props.children}</div> : null}
  </Fragment>
);

export default modal;
