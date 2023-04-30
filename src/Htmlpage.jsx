import React from 'react';
import "./css/Htmlpage.css";
import { useAuth0 } from "@auth0/auth0-react";
function Htmlpage() {
     const { logout } = useAuth0();
  return (
    <>
    <div id="wrapper-div">
        <div id="logo-nav-div" class="clearfix">
            <div id="logo-div">
                <img src="img/quiz.png" alt=""/>

            </div>
            <div class="logo-name">
                <h2>Quizz</h2>
            </div>

          
            <div id="nav">



                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="ContentAll">Menu</a></li>
                    <li><a href="Contact">Contact </a></li>
                  
           
       
                    <li><button class="loginbut" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
                    </button></li>
                    
                </ul>
            </div>
        </div>
    
   
<div id="name" class="clearfix">
    <h2>THEORITICAL QUIZZ </h2>
    <hr/>
</div>

        <div id="boxes" class="clearfix">
           
            
            <div class="box">
                <div class="imgBx">
                    <img src="img/number-1.png" alt=""/>
                </div>
                <div class="content">
                    <div class="details">
                        
                        <div class="data">


                            <div class="wrapper">
                                <div class="likes-counter">
                                    <div><a class="likes1" href="#" > <img src="img/like.png"
                                                height="40px" width="40px" alt=""/></a>
                                    </div>
                                    <div id="l-counter">0</div>
                                </div>
                                <div class="dislikes-counter">
                                    <div id="d-counter">0</div>
                                    <div><a class="dislikes1" href="#" ><img src="img/dislike.png"
                                                height="40px" width="40px" alt=""/></a></div>

                                </div>
                            </div>
                        </div>
                        <div class="container2">
                            <a href="Quiz"> <span>Let's Go</span></a>
                        </div>
                    </div>
                </div>
            </div>

             <div class="box">
                <div class="imgBx">
                    <img src="img/number-2.png"alt=""/>
                </div>
                <div class="content">
                    <div class="details">
                     
                    
                        <div class="data">


                            <div class="wrapper">
                                <div class="likes-counter">
                                    <div><a class="likes1" href="#" > <img src="img/like.png"
                                                height="40px" width="40px" alt=""/></a></div>
                                    <div id="l-counter">0</div>
                                </div>
                                <div class="dislikes-counter">
                                    <div id="d-counter">0</div>
                                    <div><a class="dislikes1" href="#" ><img src="img/dislike.png"
                                                height="40px" width="40px" alt=""/></a></div>

                                </div>
                            </div>
                        </div>
                        <div class="container2">
                            <a href="Quiz1"> <span>Let's Go</span></a>
                        </div>
                    </div>
                </div>
            </div>


           
            
        </div>

        
                       
        
        
<div id="name" >
    <h2>CODE BASED QUIZZ </h2>
    <hr/>
</div>




        <div id="boxes" class="clearfix">
            <div class="box">
                <div class="imgBx">
                    <img src="img/number-1.png" alt=""/>
                </div>
                <div class="content">
                    <div class="details">
                       
                       
                        <div class="data">


                            <div class="wrapper">
                                <div class="likes-counter">
                                    <div><a class="likes1" href="#" > <img src="img/like.png"
                                                height="40px" width="40px" alt=""/></a></div>
                                    <div id="l-counter">0</div>
                                </div>
                                <div class="dislikes-counter">
                                    <div id="d-counter">0</div>
                                    <div><a class="dislikes1" href="#" ><img src="img/dislike.png"
                                                height="40px" width="40px" alt=""/></a></div>

                                </div>
                            </div>
                        </div>
                        <div class="container2">
                            <a href="#"> <span>Let's Go</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                    <img src="img/number-2.png" alt=""/>
                </div>
                <div class="content">
                    <div class="details">
                        
                      
                        <div class="data">


                            <div class="wrapper">
                                <div class="likes-counter">
                                    <div><a class="likes1" href="#"> <img src="img/like.png"
                                                height="40px" width="40px" alt=""/></a></div>
                                    <div id="l-counter">0</div>
                                </div>
                                <div class="dislikes-counter">
                                    <div id="d-counter">0</div>
                                    <div><a class="dislikes1" href="#"><img src="img/dislike.png"
                                                height="40px" width="40px" alt=""/></a></div>

                                </div>
                            </div>
                        </div>
                        <div class="container2">
                            <a href="#"> <span>Let's Go</span></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

       
        
  </div>
      
    
        <div id="footer">
            <div class="bottom-container">
                <a class="footer-link" href="http://www.linkedin.com/in/yogika-thakur-05007b205"><img class="last_image"
                        src="img/linkedin.png" alt="linkedin"/></a>
                <a class="footer-link" href="https://twitter.com/UrafYogika"><img class="last_image"
                        src="img/twitter.png" alt="Twitter"/></a>
                <a class="footer-link"
                    href="file:///E:/study%20stuff/bca%20mawt/third%20sem/web%20technology/web/wed.html"><img
                        class="last_image" src="img/facebook.png" alt="Website"/></a>
                <p class="copyright">© 2022 yogika uraf simran.</p>
            </div>
        </div>
   













    <script src="content_for_all_pages.js" charset="utf-8"></script>



</>


    
  )
}

export default Htmlpage