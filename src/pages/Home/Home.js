import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import CreatePerson from "../../components/CreatePerson/CreatePerson";
import TablePerson from "../../components/TablePerson/TablePerson";
import SaveButton from "../../components/SaveButton/SaveButton";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';

import './Home.css';

const Home = () => {
    const[people,setPeople] = useState([]);
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);

    useEffect(() => {
        console.log('people -> ', people);
    }, [people]);

    const handleEdit = (row) => {
        console.log("handleEdit",JSON.stringify(row));
        <SaveButton
            configName={setName}
            configAge={setAge}
            handleChanges = {handleChanges}
            row = {row}
        />       
    }

    const handleChanges = (row) => {
        console.log("handleChanges",JSON.stringify(row));
        setName(row.name);
        setAge(row.age);
    }

    const handleDelete = (row) => {
        console.log("handleDelete",JSON.stringify(row.id));
        let rowString = JSON.stringify(row.id);
        let newPeople = people;
        newPeople = newPeople.slice(rowString,rowString+1);
        setPeople(newPeople);
        console.log("slice",people.slice(rowString,rowString+1));
    }

    function addPerson() {        
        const newPerson = {
            id:people.length,
            name,
            age,
        };
        console.log("chamando",newPerson);
        setPeople(prevState => [...prevState, newPerson]);
    }
    
    return (
        <>
            <Header/>
            <CreatePerson
                namePerson={name}
                agePerson={age}
                configName={setName}
                configAge={setAge}
                addPerson = {addPerson}
            />
            <TablePerson
                rows = {people}  
                handleEdit = {handleEdit} 
                handleDelete = {handleDelete}              
            />  
        </>
    );
        
}
    
export default Home;
    