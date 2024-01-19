import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import PokemonCard from "../../Componentes/PokemonCard";
import Page from "../../Componentes/Page";
import axios from "axios";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    PegarPokemon();
  });

  const PegarPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <Page>
      
        <Grid container>
          {pokemons.map((pokemon) => (
            <Grid item xs={4}>
              <PokemonCard />
            </Grid>
          ))}
        </Grid>
      
    </Page>
  );
}
