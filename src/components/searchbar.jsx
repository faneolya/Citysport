import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar({setSearchTerm, handleSearchTerm}) {
  const handleChange = () => {
    let value = document.getElementById('search').value;
    setSearchTerm(value)
  }

  return (
    <div className='searchbox'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '77vw' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="search" label="Entrer votre recherche" onChange={handleChange}  variant="outlined" />
        </Box>
        <Stack direction="row" spacing={1}>
          <Button 
        style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
        }} 
        variant="contained" endIcon={<SearchIcon />} onClick = {handleSearchTerm} >
            Rechercher
          </Button>
        </Stack>
    </div>
  );
}
