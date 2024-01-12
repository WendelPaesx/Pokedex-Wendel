import React from "react";
import NavBar from "../Navbar";

import { Container, Grid } from '@mui/material';
import PokemonCard from "../PokemonCard";

export const Home =() =>
{
    
    return(
        <div>
            <NavBar/>
            <Container maxWidth="false">
        <Grid container>
          <Grid item xs={3}>
          <PokemonCard/>
          </Grid>
           <Grid item xs = {3}>
          <div><PokemonCard/></div>
          </Grid>
          <Grid item xs = {3}>
          <PokemonCard/>
          </Grid>
          <Grid item xs ={3}>
          <PokemonCard/>
          </Grid>
          
      
        </Grid>
      

      </Container>
        </div>
    )
        
    
   

    
}
export default Home;