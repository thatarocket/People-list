import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const SaveButton = (props) => {
   
    return (
        <>  
            {console.log("entrou no savebutton")}
            <Grid container>
                <Grid item xs={4}>
                    <TextField
                        id="outlined-basic"
                        className='initialInputs'
                        label="Nome"
                        type="text"
                        value={props.namePerson}
                        onChange={event => props.configName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="outlined-number"
                        className='initialInputs'
                        label="Idade"
                        type="number"
                        value={props.agePerson}
                        onChange={event => props.configAge(event.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button 
                        size="large" 
                        startIcon={<SaveIcon />}
                        onClick={()=>props.handleChanges(props.row)}>
                        Salvar
                    </Button>                
                </Grid>
            </Grid>
        </>
   );
}

export default SaveButton;