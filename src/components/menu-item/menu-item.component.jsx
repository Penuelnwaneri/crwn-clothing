import React from "react";
import './menu-item.style.scss';


const MenuItem =  ({title,imageUrl,size}) => {
    return(
        <div className= {`${size}  menu-item`}>
            <div className="background-image"
        style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
            <span className="sub-title">SHOP NOW</span>
            </div>
            </div>
        )
}

export default MenuItem;