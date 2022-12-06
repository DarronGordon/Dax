import React from "react";
import content from "./content";

  function WebDevIntro(props){
 let webDevIntroClassName;
 let webDevIntroContent;
    if(props.one === "one")
    {
      webDevIntroContent = content[2].content;
    }
    else if(props.one === "two")
    {
      webDevIntroContent = content[2].profile;
    }
//     const[introState, SetIntroState]=React.useState(false);
// let webDevIntroClassName;
// let webDevIntroContent;
//     if(introState==false)
//     {
//       webDevIntroClassName="webDevProfile" ;
//       webDevIntroContent = content[2].content;
//     }
//     else if (introState ==true)
//     {
// webDevIntroClassName="webDevProfileNxt" ;
// webDevIntroContent = content[2].profile;
//     }

    return(
          // <div className="webDevProfile" onMouseEnter={() =>  SetIntroState(true)}  onMouseLeave={() => SetIntroState(false)}>
          //     <h4>{ webDevIntroContent} </h4>
          // </div>
          <div>
          <div className="webDevProfile" >
            <h4>{ webDevIntroContent} </h4>
            
          </div>
          <div className="webDevIntroLeft" >
            <h4>{ content[2].profile} </h4>
            
          </div>

          </div>

    );
  }

  export default WebDevIntro;
