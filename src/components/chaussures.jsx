import Box from '@mui/material/Box';
import "../App.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function Chaussures({chaussures, setChaussures}) {
  
    const [allShoes, setallShoes] = useState([]);
    


    useEffect(() => {
      getChaussures();
    });
  
    const getChaussures = async () => {
      var response = await axios.get("http://localhost:5000/api/chaussures");
      setallShoes(response.data);
    };

  const [Pointures, setPointures] = React.useState(0);

  const [Sizes, setSizes] = React.useState([]);
  useEffect(() => {
    getSizes();
  }, []);

  const getSizes = async () => {
    var response = await axios.get("http://localhost:5000/api/pointure/chaussures");
    setSizes(response.data);
  };
  
  const [Brands, setBrands] = React.useState([]);
  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    var response = await axios.get("http://localhost:5000/api/marques");
    setBrands(response.data);
  };

  const handleChangePointures = (event) => {
    setPointures(event.target.value);
  };

  const [Marques, setMarques] = React.useState(0);

  const handleChangeMarques = (event) => {
    setMarques(event.target.value);
  };

  const filteredBrand = () => {
    
    if(Marques !== 0){
      if(Pointures === 0){
        var filteredData = allShoes.filter(chaussure => chaussure.id_marque === Marques);
      setChaussures(filteredData);
      }
      else{
        var filtereddata = allShoes.filter(chaussure => chaussure.id_marque === Marques);
        var filteredShoes = filtereddata.filter(chaussure => chaussure.pointure === Pointures);
        setChaussures(filteredShoes)
      }  
    }
    else{
      if(Pointures !== 0){
        var filteredshoes = allShoes.filter(chaussure => chaussure.pointure === Pointures);
        setChaussures(filteredshoes)
      }
      else{
        setChaussures(allShoes)
      }
    }
  }

  
  return (
    <div className='chaussuresBox' id='shoes'>
      
        <div className='Selects'>
          <Box sx={{ minWidth: 120, marginRight: 3, width: 200 }}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pointures (Toutes)</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Pointures}
              label="Age"
              onChange={handleChangePointures}
              >
              <MenuItem value={0}>Toutes</MenuItem>
              {Sizes.map((item) => {
                return(
                  <MenuItem key={item.pointure} value={item.pointure}>{item.pointure}</MenuItem>
              )})}
              </Select>
          </FormControl>
          </Box>

          <Box sx={{ minWidth: 120, marginRight: 3, width: 200  }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Marques (Toutes)</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Marques}
              label="Age"
              onChange={handleChangeMarques}
          >
              <MenuItem value={0}>Toutes</MenuItem>
              {Brands.map((item) => {
                return(
                  <MenuItem key={item.marque} value={item.id_marque}>{item.marque}</MenuItem>
              )})}
              
          </Select>
          
          </FormControl>

          </Box>
          <Button style={{ color: "#21b6ae" }} size="small" onClick={filteredBrand}>Filtrer</Button>

        </div>
        
        <div className='Chaussures'>
        
        {chaussures.map((chaussure) => {
          return(

          <Card sx={{ width: 300, marginBottom: 5 }}  key={chaussure.nom_chaussure} className='card'>
        <CardMedia
          component="img"
          height="180"
          image={chaussure.images}
          alt="Chaussure"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {chaussure.nom_chaussure}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Couleur:{chaussure.couleur} 
            Pointure:{chaussure.pointure}
          </Typography> 
          <Typography variant="h6" className='h6'>
          {chaussure.prix}FCFA
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: "#21b6ae" }} size="small" > Acheter</Button>
          <Button style={{ color: "#21b6ae" }} size="small" ><AddShoppingCartIcon sx={{fontSize: 35}}/></Button>
        </CardActions>
          </Card>)})}
        </div>
        
    </div>

  );
}
