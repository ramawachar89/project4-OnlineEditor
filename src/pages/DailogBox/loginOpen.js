import React from "react";
import Login from "../login/login";
import { AiFillCloseCircle } from "react-icons/ai";
import { Dialog } from "@mui/material";
export default function LoginOpen({open2,handExit}){
    return(
        <>
         {open2? (<Dialog open={open2}
        PaperProps={{
          style: {
            borderRadius: "10px",
            background: "linear-gradient(to bottom, #ff9999 0%, #ffffff 100%",
          },
          sx: { width: "50%", height: "100vh" }
        }}>
        < AiFillCloseCircle

          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: "50px",
            cursor: "pointer"
          }}
          onClick={handExit}
        />
       <Login/>

      </Dialog>) : ("")}

        </>
    )
}
