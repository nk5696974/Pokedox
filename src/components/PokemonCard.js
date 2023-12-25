// PokemonCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './PokemonCard.css'; // Import the CSS file for styles

// const PokemonCard = ({ pokemon }) => {
//     const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

//     return (
//         <Card>
//             <CardMedia component="img" height="140" image={imageUrl} alt={pokemon.name} />
//             <CardContent>
//                 <Typography variant="h6">{pokemon.name}</Typography>
//                 {/* Add more details like type, id, etc. */}
//             </CardContent>
//         </Card>
//     );
// };

// export default PokemonCard;


// PokemonCard.js

const PokemonCard = ({ pokemon }) => {
    const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

    return (
        <Card className="pokemon-card">
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={pokemon.name}
                className="pokemon-image"
            />
            <CardContent className="pokemon-content">
                <Typography variant="h6" className="pokemon-title">
                    {pokemon.name}
                </Typography>
                {/* Add more details like type, id, etc. */}
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
