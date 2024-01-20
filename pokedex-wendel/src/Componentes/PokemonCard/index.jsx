import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function PokemonCard({name, pokemonId}) {
  const formattedPokemonId = String(pokemonId).padStart(3, '0');
  
  const imagemPokemon =`img/png/${formattedPokemonId}.png`;
  
  return (
    
    <Card sx={{ maxWidth: 380 }}>
      <CardMedia
       
        component="img"
        alt={` ${formattedPokemonId}`}
        height="240"
        image = {imagemPokemon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{name}</h2>
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}