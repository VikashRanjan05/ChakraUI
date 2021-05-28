import React from "react";
import PropTypes from "prop-types";

const IcVasitumLogotype = (props) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewbox}
    >
      <g fill={props.pathcolor}>
        <polygon
          className="st0"
          points="68.17,13.11 43.74,81.5 19.42,13.27 0.53,13.33 34.99,109.39 52.53,109.34 86.92,13.06"
        />
      </g>

      <g fill={props.pathcolor}>
        <path
          className="st0"
          d="M141.64,37.93l0.03,7.77c-6.45-6.41-13.83-9.6-22.4-9.57C100.79,36.18,85.83,51.5,85.9,73.74 c0.07,21.83,15.92,37.32,34,37.26c8.97-0.03,15.66-3.26,21.94-9.45l0.02,7.5l17.81-0.06l-0.22-71.12L141.64,37.93z M123.07,94.65 c-11.12,0.03-19.18-8.91-19.22-21.1c-0.04-11.65,7.3-21.05,19.09-21.09c11.25-0.03,19.58,8.38,19.62,20.83 C142.6,86.28,134.05,94.61,123.07,94.65z"
        />
      </g>

      <g fill={props.pathcolor}>
        <path
          className="st0"
          d="M204.27,65.73l-6.57-3.33c-3.89-2-6.44-3.2-6.45-5.87c-0.01-2.81,2.8-4.3,6.42-4.31 c4.29-0.01,8.31,2.52,12.34,6.52l10.95-11.15c-5.78-7.62-14.23-11.74-23.48-11.71c-13.66,0.04-23.01,9.45-22.97,20.57 c0.03,8.97,5.81,15.92,17.21,21.65l6.04,3.06c4.96,2.53,7.92,4.8,7.93,7.88c0.01,3.21-3.47,5.77-7.88,5.78 c-4.69,0.01-10.73-3.45-14.89-8.26l-10.95,12.09c6.19,8.02,14.64,12.14,24.95,12.11c15.54-0.05,25.55-9.59,25.51-22.32 C222.4,77.86,216.08,71.72,204.27,65.73z"
        />
      </g>

      <g fill={props.pathcolor}>
        <rect
          x="234.7"
          y="37.61"
          transform="rotate(-.18 243.59 73.17)"
          className="st0"
          width="17.81"
          height="71.12"
        />
      </g>

      <g fill={props.pathcolor}>
        <path
          className="st0"
          d="M243.33,8.28c-6.16,0.02-11.37,4.72-11.35,10.89c0.02,6.56,4.86,12.31,11.42,12.29 c6.3-0.02,11.37-5.13,11.35-11.42C254.74,13.6,249.76,8.26,243.33,8.28z"
        />
      </g>
      <g fill={props.pathcolor}>
        <polygon
          className="st0"
          points="299.01,37.44 288.43,37.47 288.35,11.22 270.53,11.27 270.61,37.53 261.5,37.56 261.55,52.82 270.66,52.8 270.84,108.65 288.65,108.59 288.48,52.74 299.06,52.71"
        />
      </g>

      <g fill={props.pathcolor}>
        <path
          className="st0"
          d="M353.38,37.27l0.12,37.91c0.04,12.06-3.83,18.63-13.34,18.66c-9.38,0.03-13.42-6.65-13.45-19.38l-0.12-37.1 l-17.81,0.06l0.1,32.55c0.02,5.89-0.24,9.24,0.72,15c2.87,16.6,13.47,25.27,30.62,25.22c9.91-0.03,17.27-2.73,22.88-9.05 c7.48-8.33,8.25-17.97,8.21-31.1l-0.1-32.82L353.38,37.27z"
        />
      </g>

      <g fill={props.pathcolor}>
        <path
          className="st0"
          d="M492.7,43.26c-4.04-5.08-11.14-8.27-19.05-8.24c-10.71,0.03-17.27,4.47-23.8,12.8 c-4.45-8.56-11.96-12.69-20.8-12.66c-8.44,0.03-16.2,3.53-22.2,10.12l-0.03-8.17l-17.81,0.06l0.22,71.12l17.81-0.06l-0.11-34.83 c-0.05-14.6,6.36-21.85,15.2-21.88c9.91-0.03,12.62,8.4,12.66,22.19l0.11,34.42l17.81-0.06l-0.11-35.09 c-0.04-14.6,6.36-21.58,15.33-21.61c8.04-0.03,12.21,5.72,12.24,17.37l0.12,39.25l17.81-0.06l-0.13-41.66 C497.96,56.91,497.4,49.14,492.7,43.26z"
        />
      </g>
    </svg>
  );
};

IcVasitumLogotype.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewbox: PropTypes.string,
  pathcolor: PropTypes.string,
};

IcVasitumLogotype.defaultProps = {
  width: "22px",
  height: "18px",
  viewbox: "0 0 500 118",
};

export default IcVasitumLogotype;
