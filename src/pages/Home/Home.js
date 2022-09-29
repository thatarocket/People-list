import React, { useState } from "react";
import People from '../../components/People/People';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './Home.css';

function Home() {
    const[people,setPeople] = useState([]);
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);
    
    function addPerson() {
        const newPerson = {
            name,
            age,
        };
        setPeople(prevState => [...prevState, newPerson]);
    }
    
    return (
        <div className="home">            
            <div>
                <h1 className='titleList'>Lista de pessoas</h1>
                <TextField
                    id="outlined-basic"
                    className='initialInputs'
                    label="Nome"
                    type="text"
                    onChange={event => setName(event.target.value)}
                />
                <TextField
                    id="outlined-number"
                    className='initialInputs'
                    label="Idade"
                    type="number"
                    onChange={event => setAge(event.target.value)}
                />
                <Button className="btnAddPeople" variant="outlined" onClick={addPerson}>Adicionar</Button>  
            </div>
            <div className='people'> 
                <Table className='peopleTable'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Idade</TableCell>
                            <TableCell>Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            people.map((person, index) => (
                                    <People 
                                        key={index}
                                        name={person.name}
                                        age={person.age}
                                    />
                                ))
                        }
                    </TableBody>
                    
                </Table>                     
            </div>
        </div>
    );

}
            
export default Home;
            