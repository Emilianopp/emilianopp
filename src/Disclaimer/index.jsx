import React from 'react'
import { OverlayTrigger,Popover } from 'react-bootstrap'
import "./icon.scss"

const renderTooltip = (description, ) => (
    <Popover id="popover-basic">
     
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );

export default function Disclaimer_proj() {
    return (
        <>
             <OverlayTrigger
          placement="top"
          delay={{ show: 100, hide: 100 }}
          overlay={renderTooltip('Please excuse some of my markdown formatting, I had to use images for a lot of the text due to React not properly rendering Latex')}
        >
            {/* <img className = 'dis_icon' src = 'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-info-thin.png' /> */}
            <img className = 'dis_icon' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bS41IDE3aC0xdi05aDF2OXptLS41LTEyYy40NjYgMCAuODQ1LjM3OC44NDUuODQ1IDAgLjQ2Ni0uMzc5Ljg0NC0uODQ1Ljg0NC0uNDY2IDAtLjg0NS0uMzc4LS44NDUtLjg0NCAwLS40NjcuMzc5LS44NDUuODQ1LS44NDV6Ii8+PC9zdmc+"></img>
            </OverlayTrigger>
        </>
    )
}
