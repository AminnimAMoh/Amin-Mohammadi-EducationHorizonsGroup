import React, { ReactElement } from "react";

interface Props {
  red: number;
  green: number;
  blue: number;
  width: number;
  height: number;
}

function ColorBox({ red, green, blue, width, height }: Props): ReactElement {
  // console.log(width, height);
  return (
    <span
      className="container_colorBox"
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    />
  );
}

export default ColorBox;
