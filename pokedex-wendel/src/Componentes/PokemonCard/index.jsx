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
  const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
  
  return (
    
    <Card sx={{ maxWidth: 380, border:'2px solid #ccc', borderRadius: '8px',  backgroundColor: '#E6E6FA' }}>
      <CardMedia
       
        component="img"
        alt={` ${formattedPokemonId}`}
        height="240"
        image = {imagemPokemon}
        
      />
      <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{capitalizedFirstName}</h2>
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}