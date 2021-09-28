import React from "react";
const GenerateColor = require("../JSsrc/ColorGenerator").ColorGenerator;


function App(): React.ReactElement {
  const args = {
    dimensions: {
      width: 1920,
      height: 933,
    },
  };
  const test=new GenerateColor(args).constructColor();
  
  return (
    <div>
    </div>
  );
}

export default App;
