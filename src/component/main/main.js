import React, { useEffect, useState } from "react";
import './main.css'

import { ImCodepen } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import Team from "../team/team";
import Footer from "../footer/footer";
import { users } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterOpen from "../../pages/DailogBox/registerOpen";
import LoginOpen from "../../pages/DailogBox/loginOpen";
import UserMsg from "../../pages/DailogBox/userMsg";
import Homemobile from "../../pages/homesNav/homemobile";
export default function Main() {


  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      starting()
    }, 2000)
  }, [])

  const [loggedIn] = useRecoilState(users)
  console.log(loggedIn.isUsers)
  const navigate = useNavigate()
  let path = '/editor'

  function opened() {
    setOpen(true)
  }

  function starting() {
    setOpen3(true)
  }

  function handExit() {
    setOpen(false)
    setOpen2(false)
    setOpen3(false)
  }

  function loginForm() {
    setOpen2(true)
  }

  function gopage() {
    if (loggedIn.isUsers) {
      navigate(path)
    } else {
      toast.info("please Registered and Login first", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  return (
    <div className="main">
      <div className="left">
      
        <h2 className="name1">CODEPEN</h2>
        <p className="name2">TRY OUR ONLINE EDITOR</p>
        <h2 onClick={gopage} className="name3" >Start Coding</h2>
        <h3 className="name">Search Pen</h3>
        <h3 className="name">Challenges</h3>
        <h3 className="name">Spark</h3>
        <h3 className="name">CodePen <button style={{ backgroundColor: "yellow", marginLeft: "4.7rem", marginBottom: "0.2rem" }}>Pro</button></h3>
        <img style={{ height: "24%", width: '100%' }} src="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg" alt="img" />

      </div>
     
      <div className="Right">
        <div className="top">
          {/* <BsSearch
            style={{
                position: 'absolute',
                top: '20px',
                left: '13.5rem',
                color:"red",
                marginTop:"0.4rem",
                size:"1rem"
              }}/> */}
           <div className="rrr">
              <Homemobile />
            </div>
          <input className="inputed" placeholder="Search Code Pen" />


          <button onClick={loginForm} className="btn2">Login</button>
          <button onClick={opened} className="btn1">sign</button>
        </div>
        <div className="maindiv">
          <div className="text">
            <div className="pen"><ImCodepen style={{ fontSize: "3.5rem" }} /></div>
            <div className="texth1">  <h1 style={{ marginTop: "1rem" }}>The best place to build, test, and discover front-end code.</h1>
              <p >CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
              <button onClick={opened} className="btn">SignIn</button>
            </div>

          </div>

          <div className="righttext">
            <div className="backdiv">
              <div className="divBlock1"><h2><FiSettings />HTML</h2><p >hyper text markup Link</p></div>
              <div className="divBlock2"><h2><FiSettings />CSS</h2><p > Cascading Style Sheets</p></div>
              <div className="divBlock3"><h2><FiSettings />JS</h2><p >JavaScript</p></div>
            </div>


          </div>
        </div>
        <div className="mainCard">
          <div className="card"><h1 style={{ marginLeft: "2rem" }} >Build & Test</h1>
            <p >Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private. <button className="btnn1">Try The Editor</button></p>

          </div>
          <div className="card"><h1 style={{ marginLeft: "2rem" }} >Learn & Discover</h1><p>Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!</p>
            <button className="btnn2">join this week's </button>
          </div>
          <div className="card"><h1 style={{ marginLeft: "2rem" }} >Share Your Work</h1><p>Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.</p> <button className="btnn3">Explore Trending </button></div>

        </div>
        <div className="imgg">
          <img style={{ zIndex: "0" }} src="https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg" alt="img" />
          <div className="cardimg"><img src="https://cpwebassets.codepen.io/assets/packs/tailwind-df31d14b8c3a2386ca726ca2a4bc12db.svg" alt="img" /></div>
          <div className="cardimg2"><img width="100%" height="100vh" src="https://cpwebassets.codepen.io/assets/packs/sass-8e766e9562509cb3fa14264580c5c0f9.svg" alt="img" /></div>
          <div className="cardimg3"><img width="100%" height="150vh" src="https://cpwebassets.codepen.io/assets/packs/greensock-logo-9db91ff4c4a50faa1690d4f3d7ffca6e.png" alt="img" /></div>
          <div className="cardimg4"><img width="100%" height="100vh" src="https://cpwebassets.codepen.io/assets/packs/react-logo-1a11776af9f9ee862af2acb87703a99f.svg" alt="img" /></div>
          <div className="cardimg5"><img width="100%" height="100vh" src="https://cpwebassets.codepen.io/assets/packs/vue-logo-7acfd91310ad2aa8593915dd904cf269.svg" alt="img" /></div>
          <div className="cardimg6"><h1 style={{ display: "flex" }}>Get Started Quicker</h1></div>
        </div >
        <div className="teams"><Team /></div>
        <div className="foot"> <Footer /></div>
        <ToastContainer />
      </div>
      <RegisterOpen open={open} setOpen={setOpen} handExit={handExit} />
      <LoginOpen handExit={handExit} open2={open2} />
      <UserMsg handExit={handExit} open={open3} />

    </div>

  )
}

