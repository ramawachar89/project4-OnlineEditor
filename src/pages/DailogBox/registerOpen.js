import React from "react";
import { Dialog } from "@mui/material";
import Register from '../../pages/register/register'
import { AiFillCloseCircle } from "react-icons/ai";
export default function  RegisterOpen({open,setOpen,handExit}){
    return (
        <>
        <div>
        {open ? (<Dialog open={open}
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
        <Register />

      </Dialog>) : ("")}
      </div>
        </>
    )
}