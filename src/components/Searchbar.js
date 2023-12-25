// SearchBar.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement search logic
    };

    return (
        <TextField
            label="Search Pokemon"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            fullWidth
            margin="normal"
        />
    );
};

export default SearchBar;
