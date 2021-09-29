import React, { ReactElement } from "react";

interface Props {
  red: number;
  green: number;
  blue: number;
  width: number;
  height: number;
  index: number;
}

function ColorBox({ red, green, blue, width, height, index }: Props): ReactElement {
  const angle=((2*Math.PI)/32768)*index;
  const radius=50*Math.cos(index);
  const x=radius*Math.cos(angle);
  const y=radius*Math.sin(angle);
  return (
    <span
      className="container_colorBox"
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        transform: `translate(${x*50}%,${y*50}%)`,
        width: `${width*2}%`,
        height: `${height*2}%`,
      }}
    />
  );
}

export default ColorBox;
