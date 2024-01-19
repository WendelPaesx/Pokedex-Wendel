import React from "react";
import Navbar from "../Navbar"
import { Container } from "@mui/material";



export default function Page({children}){
    return(
        <><Navbar /><Container>
            {children}
        </Container></>
        
        
    )
}