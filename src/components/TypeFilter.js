// TypeFilter.js
import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';

const TypeFilter = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/type');
                setTypes(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon types:', error);
            }
        };

        fetchTypes();
    }, []);

    const handleTypeChange = (event, value) => {
        // Implement type filter logic
    };

    return (
        <Autocomplete
            options={types}
            getOptionLabel={(option) => option.name}
            onChange={handleTypeChange}
            renderInput={(params) => <TextField {...params} label="Filter by Type" variant="outlined" />}
        />
    );
};

export default TypeFilter;
