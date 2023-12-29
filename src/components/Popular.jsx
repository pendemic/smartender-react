import React, {useState} from 'react'

function Popular() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
  return (
    <div style={{backgroundColor: "#013927", width: width, height: height}}>Popular</div>
  )
}

export default Popular