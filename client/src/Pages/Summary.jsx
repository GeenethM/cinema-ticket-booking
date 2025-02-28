import React from 'react';
import '../Styles/SummaryStyles.css'
import log from '../Assets/log.jpg'

const Summary = () => {
    return (
        <div>
            <section class="header">
            <nav class="navBar">
                <div class="navLinks"><img class="logo" src={log}/>
                    <h2>SCOPE CINEMAS</h2>
                    <ul class="list">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </section>

        <section class="sumDetails">
            <h1>Summary</h1>
            <div class="sumOne">


                <h2>Movie & Tickets</h2>
                <label for="">Movie Name:</label>
                <input type="text" id="mov-name" value="<?php echo $mov; ?>" readonly/><br/><br/>
                <label for="">Show Date:</label>
                <input type="text" id="datee"  value="<?php echo $dato; ?>" readonly/><br/><br/>
                <label for="">Show Time:</label>
                <input type="text" id="time"  value="<?php echo $tima; ?>" readonly/><br/><br/>
                <label for="">Number Of Tickets:</label>
                <input type="text" id="no_of_seates"  value="<?php echo $numberOseats; ?>" readonly/><br/><br/>
                <label for="">Seat Positions:</label>
                <input type="text" id="seat_pos"  value="<?php echo $setonomber; ?>" readonly/><br/><br/>
                <label for="">Total:</label>
                <input type="text" id="tot"  value="<?php echo $totolu; ?>" readonly/><br/><br/>
            </div>
            <div class="sumTwo">
                <h2>Your Details</h2>
                <label for="">Name:</label>
                <input type="text" id="name" value="<?php echo $namu; ?>" readonly/><br/><br/>
                <label for="">Phone Number:</label>
                <input type="text" id="phone" value="<?php echo $telephono; ?>" readonly/><br/><br/>
                <label for="">Email:</label>
                <input type="text" id="email" value="<?php echo $emailu; ?>" readonly/>
                
            </div>
            <div id="bs">
            <a href="index.html"><button id="spec">Finish</button></a>
            </div>
        </section>

        <section class="footer">
            <div>
                <h1>Scope Cinemas</h1>
                <h3>We're doing our part to help keep you safe.</h3>
                <h5>
                    With cinemas now open, your safety and comfort is our priority. 
                    We're committed to keeping our cinemas, employees and patrons in 
                    line with prevailing healthy and safety guidelines issued by local 
                    authorities, as well as our own expert-backed suggestions. We humbly request 
                    you familiarize yourself with our guidelines and check back often for updates, 
                    in order to have an uninterrupted cinematic experience at Scope Cinemas.
                </h5>
                <a href="https://www.facebook.com/scopecinemas/"><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
                <a href="https://www.instagram.com/explore/locations/1499326136835992/scope-cinemas-multiplex-at-colombo-city-centre/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a href="https://twitter.com/ScopeCinema_"><i class="fa-brands fa-twitter fa-2xl"></i></a>
                <a href="https://www.linkedin.com/company/scope-cinemas"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
        </section>
        </div>
    );
}

export default Summary;
