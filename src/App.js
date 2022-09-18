import './App.css';
import Topbar from './components/topbar';
import Searchbar from './components/searchbar';
import Marques from './components/marques';
import Chaussures from './components/chaussures';
import React, { useState, useEffect} from "react";
import axios from 'axios';

 

function App() {

  const [SearchTerm, setSearchTerm] = useState("");
  const [allShoes, setallShoes] = useState([]);
  const [chaussures, setChaussures] = useState([]);
  const [filteredDataSearch, setfilteredDataSearch] = useState([]);

  useEffect(() => {
    getChaussures();
  }, []);

  const getChaussures = async () => {
    var response = await axios.get("http://localhost:5000/api/chaussures");
    setallShoes(response.data);
    setChaussures(response.data);

  };




  const handleSearchTerm = () => {
    
    if(SearchTerm.length > 0){
    console.log(SearchTerm)
    var filteredShoes = allShoes.filter(chaussure => chaussure.nom_chaussure.toLowerCase().includes(SearchTerm.toLowerCase()));
    console.log(filteredShoes)
    setfilteredDataSearch(filteredShoes)
    setChaussures(filteredShoes)
  }
    else{
      getChaussures()
    }
  };

  return (
    <div className="App">
      <Topbar/>
      <Searchbar handleSearchTerm = {handleSearchTerm} setSearchTerm ={setSearchTerm}/>
      <Marques/>
      <Chaussures SearchTerm = {SearchTerm} filteredDataSearch = {filteredDataSearch} chaussures = {chaussures} setChaussures = {setChaussures} />
    </div>
  );
}

export default App;
