
import React from "react";

import CreateWebDevPreviewBox from "./WebDevPreviewBox";

function WebDevPreviews(){

  return(<div>
<div className="GP_Main">
<div className="gallery">
<CreateWebDevPreviewBox
imgURL = "/Images/coldBG.png"
/>

<CreateWebDevPreviewBox
imgURL = "./Styles/Images/ink.jpg"
/>

<CreateWebDevPreviewBox
imgURL = "../Components/Styles/Images/neutralBG.png"
/>

<CreateWebDevPreviewBox
imgURL = "./Styles/Images/hotBG.png"
/>

<CreateWebDevPreviewBox
imgURL = "./Styles/Images/ink.jpg"
/>
<CreateWebDevPreviewBox
imgURL = "./logo.png"
/>
<CreateWebDevPreviewBox
imgURL = "ink.jpg"
/>
</div>
    </div>
    </div>
  );
}

export default WebDevPreviews;
