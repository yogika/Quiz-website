import React from 'react';
import "./css/contect.css"
import { useAuth0 } from "@auth0/auth0-react";

function Contact() {
   const { loginWithRedirect } = useAuth0();
  return (
    <div>
        <div className='wrapperDiv'>
       
         <div id="logo-nav-div" class="clearfix">
            <div id="logo-div">
                <img src="img/quiz.png" alt=""/>

            </div>
            <div className="logo-name">
                <h2>Quizz</h2>
            </div>
            <div id="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="Contact">Contact </a></li>
                    
                    <li><button class="loginbut" onClick={() => loginWithRedirect()}>Log In</button> </li>
                 
                </ul>
            </div>
        </div>
        




<div id="boxes3" className="clearfix">
    <div className="box3">
     <div class="contact-form">
        <span className="heading">Contact Us</span>
        <form action="https://formspree.io/f/xayzapgd" method='POST'>
            <label for="name">Name:</label>
            <input type="text" autoComplete='off' required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" autoComplete='off' required/>
            <label for="message">Message:</label>
            <textarea id="message" name="message"  autoComplete='off' required/>
            <button type="submit" >Submit</button>
        </form>   
</div>
  </div>

    <div className="box3">

         <div >
        <img src="img/hi.png" alt=""/>
    </div>
     

</div>
</div>
   

    <div id="footer">
        <div class="bottom-container">
            <a class="footer-link" href="http://www.linkedin.com/in/yogika-thakur-05007b205"><img class="last_image"
                    src="img/linkedin.png" alt="linkedin"/></a>
            <a class="footer-link" href="https://twitter.com/UrafYogika"><img class="last_image" src="img/twitter.png"
                    alt="Twitter"/></a>
            <a class="footer-link" href="file:///E:/study%20stuff/bca%20mawt/third%20sem/web%20technology/web/wed.html"><img
                    class="last_image" src="img/facebook.png" alt="Website"/></a>
            <p class="copyright">© 2022 yogika uraf simran.</p>
        </div>
    </div> 
    
  </div>
</div>
  )
}

export default Contact;