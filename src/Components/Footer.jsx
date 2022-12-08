import React from 'react';
import "./Styles/Footer.css";
function footer(){

  let d = new Date();
  const dyear=d.getFullYear();
const path = window.location.pathname;
const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(pathname);
    return  < footer>
    <div class="footer-content"  className={pathname}>
                <div class="container">

                    <div className="footerLogo">

                    </div>

                    <div class="down-below">

                        <div class="contact">
                            <a href="mailto:darronmgordon@gmail.com" subject="subject text" title="Email me" rel="me" target="_blank">darronmgordon@gmail.com</a>
                        </div>

                        <div class="info">
                            <p>© {dyear}  Darron Michael Gordon🍄🍄🍄</p>
                        </div>
                    </div>
                </div>
            </div>
    </footer>

}

export default footer;
