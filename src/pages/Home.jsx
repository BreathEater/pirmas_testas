import React from "react";
import NavBar from '../components/NavBar';
import Image from '/Users/karol/Desktop/Coding/React_lessons/pirmas_testas/src/The_Persistence_of_Memory.jpg';

function Home() {
    return(
        <section>
        <NavBar></NavBar>
        <div>
            <img src={Image} alt="" />
        </div>
        </section>
    );
}

export default Home