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
  const radius=300*Math.sin(index);
  const x=radius*Math.cos(angle);
  const y=radius*Math.sin(angle);
  return (
    <div
      className="container_colorBox"
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        transform: `translate(${-50+x*50}%,${-50+y*50}%)`,
        width: `${width/5}%`,
        height: `${height/5}%`,
      }}
    />
  );
}

export default ColorBox;
