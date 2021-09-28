import React, { ReactElement } from 'react'

interface Props {
    red: number;
    green: number;
    blue: number;
}

function ColorBox({red, green, blue}: Props): ReactElement {
    return (
        <div style={{backgroundColor: `rgba(${red},${green},${blue})`}} />
    )
}

export default ColorBox
