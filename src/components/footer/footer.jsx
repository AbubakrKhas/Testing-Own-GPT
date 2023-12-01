import React from "react";
import "./footer.css";


import fb from 'C:/ReactAI/front-end/test-ai/src/assets/facebook-770688_640.png';
import twitter from 'C:/ReactAI/front-end/test-ai/src/assets/logo-3491390_640.png';
import linkedin from 'C:/ReactAI/front-end/test-ai/src/assets/linkedin-2170421_640.png';
import insta from 'C:/ReactAI/front-end/test-ai/src/assets/instagram-1675670_640.png';
import qr from 'C:/ReactAI/front-end/test-ai/src/assets/qr-code-148732_640.png';


const Footer = ()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For Business</h4>
                        <a href="/"><p>Employer</p></a>
                        <a href="/"><p>AI Plan</p></a>
                        <a href="/"><p>Individual</p></a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Recources</h4>
                        <a href="/"><p>Resorces center</p></a>
                        <a href="/"><p>Testiomonials</p></a>
                        <a href="/"><p>STV</p></a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Scan QR-code</h4>
                        <p className="qr-img"><img src={qr} alt="" /></p>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/"><p>About</p></a>
                        <a href="/"><p>Press</p> </a>
                        <a href="/"> <p>Career</p></a>
                        <a href="/"> <p>Contact</p></a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Coming soon</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/"><div><p>Terms & Conditions</p></div></a>
                        <a href="/"><div><p>Privacy</p></div></a>
                        <a href="/"><div><p>Security</p></div></a>
                        <a href="/"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;