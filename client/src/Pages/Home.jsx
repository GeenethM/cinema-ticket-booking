import React from 'react';
import "../Styles/HomeStyles.css"
import log from '../Assets/log.jpg'
import nun from '../Assets/nun.jpg'
import jailer from '../Assets/Jailer.jpg'
import opp from '../Assets/opp.jpg'
import creat from '../Assets/creat.jpg'
import exe from '../Assets/exe.jpg'
import saw from '../Assets/saw.jpg'

const Home = () => {
    return (
        <>
            <section class="header">
            <nav class="navBar">
                <div class="navLinks"><img class="logo" src={log} alt="logo"/>
                    <h2>SCOPE CINEMAS</h2>
                    <ul class="list">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>

            <div class="textBox">
                <h1>Sri Lanka's Largest Cinema Complex</h1>
                <p>
                    Scope Cinemas Multiplex at Colombo City Centre is Sri Lanka's premier entertainment 
                    destination for global blockbusters.
                    Boasting with 6 screens with one powered by the latest Dolby Atmos sound system and 
                    4K projection screen, the multiplex is designed to provide an experience on par with 
                    some the of the world's best cinemas right here in the heart of Colombo.
                </p>
            </div>
        </section>
        
        <section class="movies">
            <h1>Now Showing</h1>

            <div class="row">
                <div class="film-col">
                    <a href="nunTic.html"><img src={nun} alt=""/></a>
                    <div class="layer">
                        <h3>The Nun II</h3>
                        <h4>Click to Buy Tickets</h4>
                    </div>
                </div>

                <div class="film-col">
                    <a href="jaiTic.html"><img src={jailer} alt=""/></a>
                    <div class="layer">
                        <h3>Jailer</h3>
                        <h4>Click to Buy Tickets</h4>
                    </div>
                </div>

                <div class="film-col">
                    <a href="oppTic.html"><img src={opp} alt=""/></a>
                    <div class="layer">
                        <h3>Oppenheimer</h3>
                        <h4>Click to Buy Tickets</h4>
                    </div>
                </div>
            </div>
        </section>

        <section class="movies">
            <h1>Coming Soon!!</h1>

            <div class="row">
                <div class="film-col">
                    <img src={creat} alt=""/>
                    <div class="layer">
                        <h3>The Creator</h3>
                    </div>
                </div>

                <div class="film-col">
                    <img src={exe} alt=""/>
                    <div class="layer">
                        <h3>The Exorcist: Believer</h3>
                    </div>
                </div>

                <div class="film-col">
                    <img src={saw} alt=""/>
                    <div class="layer">
                        <h3>Saw X</h3>
                    </div>
                </div>
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
        </>
    );
}

export default Home;
