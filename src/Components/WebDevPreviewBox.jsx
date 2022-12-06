import React from "react";

function CreateWebDevPreviewBox(props)
{
  let cssName = props.cssName+" GP_Img  WDlink";
  let imgName = props.imgURL;
  let previewToggle = false;
  let overlay="";

  const PreviewSite = (e) =>{
    previewToggle = !previewToggle;
       if(previewToggle === true)
       {
        
          
        
       }
       else{
        overlay = "dontShowOverlayPreview";
       }
       
  }

  // return(
  //   <div className="WebDevGp_box">
  //   <div className={cssName}>
  //   <h4><a href={props.link}>{props.name}</a></h4>
  //   </div>
  //   </div>
  return(  
      <img className={overlay} src={imgName} style={{background:"powderblue"}} alt="..." />

  );
}

export default CreateWebDevPreviewBox;
