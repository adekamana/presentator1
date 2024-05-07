import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = ({load}) => {
  return (
    <ProgressBar
      percent={load}
      filledBackground="linear-gradient(to right, #2d13ac, #823bb6, #b93ca6, #e6ba5b)"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="50"
            src="../images/hash.png"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="50"
            src="../images/roll.png"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="50"
            src="../images/rocket.png"
          />
        )}
      </Step>
    </ProgressBar>
  );
}

export default StepProgressBar;