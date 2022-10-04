import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import CreatePerson from "../../components/CreatePerson/CreatePerson";
import TablePerson from "../../components/TablePerson/TablePerson";
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';

import './Home.css';

const Home = () => {
    const[people,setPeople] = useState([]);
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);
    const[id,setId] = useState(0);
    const[editing,setEditing] = useState(false);

    useEffect(() => {
        console.log('people -> ', people);
    }, [people]);

    const handleDelete = (row) => {
        console.log("handleDelete",JSON.stringify(row.id));
        let newPeople = people.filter((person) => person.id !== row.id);
        console.log("newPeople",newPeople);     
        setPeople(newPeople);
    }

    const handleEdit = (row) => {
        console.log("handleEdit",JSON.stringify(row));
        setId(row.id);
        setName(row.name);
        setAge(row.age);    
        setEditing(true);
    }  

    const cancelEdit = () => {
        setEditing(false);
        setName("");
        setAge(0);
        setName("");
        setId(0);        
    }

    function addPerson() {        
        const newPerson = {
            id:people.length,
            name,
            age,
        };
        const newPeople = people.map((person,index) => {return {...person,id:index}});
        setPeople([...newPeople, newPerson]);

        setName("");
        setAge(0);
        setId(0);  
        
    }

    function editPerson() {
        const newPeople = people.map((person) => {
            if(person.id === id) {
                return {
                    ...person,
                    name,
                    age
                }
            }
            else {         
                return person;
            }
        });
        setPeople(newPeople);
        setName("");
        setAge(0);
        setId(0);
        setEditing(false);  
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
                editPerson={editPerson}
                editing={editing}
                cancelEdit={cancelEdit}
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
    