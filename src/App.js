import React from "react";
import Mansion from "./images/mansion.jpeg";
import Logo from "./images/logo192.png";
import TNMOC from "./images/logoTNMOC.jpg";
import MKCF from "./images/logoMKCommunityFoundation.png";
import IPCortex from "./images/logoipcortex.jpeg";
import Django from "./images/logodjangogirls.png";
import Nodeschool from "./images/nodeschool.png";
import Workshop from "./images/girlscodemkmeetup.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="https://girlscodemk.herokuapp.com/">
        <img src={Logo} alt="Girls Code MK Logo" />
      </a>
      <div id="Menu">
        <ul>
          <li>
            <a href="https://girlscodemk.herokuapp.com/">Home</a>
          </li>
          <li>
            <a href="https://girlscodemk.herokuapp.com/about">About</a>
          </li>
          <li>
            <a href="https://girlscodemk.herokuapp.com/blog">Blog</a>
          </li>
          <li>
            <a href="https://girlscodemk.herokuapp.com/codeofconduct">
              Code of Conduct
            </a>
          </li>
          <li>
            <a href="https://girlscodemk.herokuapp.com/contactus">Contact Us</a>
          </li>
        </ul>
      </div>
      <header className="App-header">
        <img src={Mansion} alt="Bletchley Park Mansion" />
        <p>Girls Code MK</p>
        <p>
          We support girls and women in their coding journey by offering free
          workshops and meetups for members of all ages and skills.
        </p>
        <p>
          <a href="https://www.meetup.com/Girls-Code-Learn-to-Code-with-Other-Girls-and-Women">
            BECOME A STUDENT OR COACH
          </a>
        </p>
      </header>
      <p>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/283072310"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </p>
      <p>
        GirlsCode MK is a volunteer organisation whose aim is to get more girls
        and women into programming and STEM careers. We’re based in Milton
        Keynes, UK, and work together with The National Museum of Computing,
        Open University and MK Gallery.
      </p>
      <p>
        We organise regular workshops and meetups for women and provide a
        friendly and supportive learning environment. Get in touch with us if
        you’d like to attend as a student, supports students as a coach or
        provide sponsorship. If you want to start your coding journey right now,
        read this short introduction about how to become a web developer.
      </p>
      <p>
        We currently organize three workshops: GirlsCode MK – a bi-weekly meetup
        for all levels; Django Girls MK – a one-day workshop on Python and
        basics of computer science; and NodeSchool MK, a self-paced workshop on
        Javascript and Node.JS.
      </p>
      <p>
        We are passionate about diversity and cybersecurity. If you would like
        to learn more about staying safe online, attend CryptoParty MK – a fun
        and welcoming event featuring workshops and talks from cybersecurity
        experts, suitable for everyone.
      </p>
      <p>
        Events - coming soon
        <ul>
          <li>
            Django Girls <img src={Django} alt="Django Girls Logo"></img>
          </li>
          <p></p>
          <li>
            Node School <img src={Nodeschool} alt="Node School"></img>
          </li>
          <li>
            All Day Workshop <img src={Workshop} alt="Workshop"></img>
          </li>
        </ul>
        Back end development for beginners
      </p>

      <p>OUR SPONSORS</p>
      <img src={TNMOC} alt="The National Museum of Computing" />
      <img src={MKCF} alt="Milton Keynes Community Foundation" />
      <img src={IPCortex} alt="IP Cortex" />
    </div>
  );
}

export default App;
