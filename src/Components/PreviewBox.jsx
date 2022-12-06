import React from"react"

import "./Styles/webDev.css";
function CreatePreviewBox(props)
{
  let cssName = props.cssName+" GP_Img  linkz";
  let imgName = props.imgURL;

  return(
    <div className="Gp_box">
    <div className={cssName}>
    <h4><a href={props.link}>{props.name}</a></h4>
    </div>
    </div>

  );
}

export default CreatePreviewBox;
