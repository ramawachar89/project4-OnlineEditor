import React from "react";
import { Dialog } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";

export default function UserMsg({handExit,open}){
    return(
        <>
        {open ? (<Dialog open={open}
        PaperProps={{
          style: {
            borderRadius: "10px",
            background: "linear-gradient(to bottom, #ffffcc 10%, #ffffff 100%)",
          },
          sx: { width: "50%", height: "75vh" }
        }}>
        < AiFillCloseCircle

          style={{
            position: 'absolute',
            top: '1px',
            right: '0px',
            fontSize: "30px",
            cursor: "pointer"
          }}
          onClick={handExit}
        />
        <div className="alertmsg">
        <h2 className="alert">Please note that you need to register and login before you can access the editor page. To do so, please follow the steps below:</h2>
        <div className="alert2"><p>1)Click on the "Register" button and fill out the registration form with your details.</p>
        <p>2)Now, you can login to your account using your registered email and password.</p>
        <p>3)Once you have logged in, you will be able to access the editor page and start creating content.</p>
        </div>
        </div>
      </Dialog>) : ("")}
        </>
    )
}