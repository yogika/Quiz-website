import React  from 'react';
import "./css/ContentAll.css";
import { useAuth0 } from "@auth0/auth0-react";


function content() {
       // eslint-disable-next-line react-hooks/rules-of-hooks
       const { logout } = useAuth0();
  return (
    <div>


    <div id="wrapper-div">
        <div id="logo-nav-div1" class="clearfix">
            <div id="logo-div1">
                   <img src="img/quiz.png"  alt=""/>
                 
            </div>
<div class="logo-name">
    <h2>Quizz</h2>
</div>

<div class="search-bar1">
    <form class="search">
        <input class="textplace" type="text" placeholder="Search.." name="search"/>
   
    </form>
</div>
       <div id="nav1">
                
           
    
    <ul>
        <li><a href="/">Home</a></li>
      
        <li><a href="Contact">Contact </a></li>
      
        <li ><button class="loginbut" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> </li>
    
    </ul>
 </div>
     </div>




        <div id="boxes1" class="clearfix">
            <div class="box1">
               <div class="imgBx">
                <img src="img/html.png" alt=""/>
               </div>
               <div class="content">
                <div class="details">
                    <h2>HTML QUIZZ </h2>
                    <hr/>
                        <h2> <br/><span> HTML is the standard markup language for Web pages  <a  href="https://www.w3schools.com/html/">Read More...</a>
                    </span></h2>
                     <div class="data">
                        
                   
                    <div class="wrapper1">
                        <div class="likes-counter">
                            <div><a class="likes1" href="#" > <img src="img/like.png" height="40px" width="40px" alt=""/></a>
                            </div>
                            <div id="l-counter">0</div>
                        </div>
                        <div class="dislikes-counter">
                            <div id="d-counter">0</div>
                            <div><a class="dislikes1" href="#" ><img src="img/dislike.png" height="40px" width="40px"
                                        alt=""/></a></div>
                    
                        </div>
                    </div>
                    </div>
                    <div class="container2">
                        <a href="Htmlpage"> <span>Let's Quizz...</span></a>
                    </div>
                </div>
               </div>
            </div>

           <div class="box1">
            <div class="imgBx">
                <img src="img/css-file.png" alt=""/>
            </div>
            <div class="content">
                <div class="details">
                    <h2>CSS QUIZZ </h2>
                    <hr/>
                    <h2> <br/><span> CSS is the language we use to style an HTML document <a  href="https://www.w3schools.com/css/">Read More...</a>
                        </span></h2>
                    <div class="data">
            
            
                        <div class="wrapper">
                            <div class="likes-counter">
                                <div><a class="likes1" href="#" > <img src="img/like.png" height="40px" width="40px"
                                            alt=""/></a></div>
                                <div id="l-counter">0</div>
                            </div>
                            <div class="dislikes-counter">
                                <div id="d-counter">0</div>
                                <div><a class="dislikes1" href="#" ><img src="img/dislike.png" height="40px" width="40px"
                                            alt=""/></a></div>
            
                            </div>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#"> <span>Let's Quizz...</span></a>
                    </div>
                </div>
            </div>
            </div>

            
            <div class="box1">
            <div class="imgBx">
                <img src="img/js-file.png" alt=""/>
            </div>
            <div class="content">
                <div class="details">
                    <h2>JS QUIZZ </h2>
                    <hr/>
                    <h2> <br/><span>JavaScript is the programming language of the Web <a  href="https://www.w3schools.com/js/">Read More...</a>
                        </span></h2>
                    <div class="data">
            
            
                        <div class="wrapper1">
                            <div class="likes-counter">
                                <div><a class="likes1" href="#" > <img src="img/like.png" height="40px" width="40px"
                                            alt=""/></a></div>
                                <div id="l-counter1">0</div>
                            </div>
                            <div class="dislikes-counter">
                                <div id="d-counter1">0</div>
                                <div><a class="dislikes1" href="#"><img src="img/dislike.png" height="40px" width="40px"
                                            alt=""/></a></div>
            
                            </div>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#"> <span>Let's Quizz...</span></a>
                    </div>
                </div>
            </div>
            </div>
        </div>


        <div id="boxes1" class="clearfix">
            <div class="box1">
            <div class="imgBx">
                <img src="img/java.png" alt=""/>
            </div>
            <div class="content">
                <div class="details">
                    <h2>Java QUIZZ </h2>
                    <hr/>
                    <h2> <br/><span>  Java is a popular programming language. It is used to develop apps <a  href="https://www.w3schools.com/java/">Read More...</a>
                        </span></h2>
                    <div class="data">
            
            
                        <div class="wrapper1">
                            <div class="likes-counter">
                                <div><a class="likes1" href="#" > <img src="img/like.png" height="40px" width="40px"
                                            alt=""/></a></div>
                                <div id="l-counter1">0</div>
                            </div>
                            <div class="dislikes-counter">
                                <div id="d-counter1">0</div>
                                <div><a class="dislikes1" href="#" ><img src="img/dislike.png" height="40px" width="40px"
                                            alt=""/></a></div>
            
                            </div>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#"> <span>Let's Quizz...</span></a>
                    </div>
                </div>
            </div>
            </div>
            <div class="box1">
            <div class="imgBx">
                <img src="img/jq.png" alt=""/>
            </div>
            <div class="content">
                <div class="details">
                    <h2>JQuery QUIZZ </h2>
                    <hr/>
                    <h2> <br/><span> jQuery UI is a curated set of user interface interactions, effects <a  href="https://www.w3schools.com/jquery/">Read More...</a>
                        </span></h2>
                    <div class="data">
            
            
                        <div class="wrapper1">
                            <div class="likes-counter">
                                <div><a class="likes1" href="#" > <img src="img/like.png" height="40px" width="40px"
                                            alt=""/></a></div>
                                <div id="l-counter1">0</div>
                            </div>
                            <div class="dislikes-counter">
                                <div id="d-counter1">0</div>
                                <div><a class="dislikes1" href="#"><img src="img/dislike.png" height="40px" width="40px"
                                            alt=""/></a></div>
            
                            </div>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#"> <span>Let's Quizz...</span></a>
                    </div>
                </div>
            </div>
            </div>
            <div class="box1">
            <div class="imgBx">
                <img src="img/node-js.png" alt=""/>
            </div>
            <div class="content">
                <div class="details">
                    <h2>NODE.JS QUIZZ </h2>
                    <hr/>
                    <h2> <br/><span>Node.js is a cross-platform, open-source server environment that <a  href="https://www.w3schools.com/nodejs/">Read More...</a>
                        </span></h2>
                    <div class="data">
            
            
                        <div class="wrapper">
                            <div class="likes-counter">
                                <div><a class="likes1" href="#" > <img src="img/like.png" height="40px" width="40px"
                                            alt=""/></a></div>
                                <div id="l-counter1">0</div>
                            </div>
                            <div class="dislikes-counter">
                                <div id="d-counter1">0</div>
                                <div><a class="dislikes1" href="#"><img src="img/dislike.png" height="40px" width="40px"
                                            alt=""/></a></div>
            
                            </div>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#"> <span>Let's Quizz...</span></a>
                    </div>
                </div>
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













    <script src="" charset="utf-8"></script>



    </div>
  )
}

export default content