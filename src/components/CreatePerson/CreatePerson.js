import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreatePerson(props) {
    
    return (
        <>
            <br></br>
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
                    {!props.editing && (
                        <Button 
                            size="large" 
                            className="btnAddPeople" 
                            variant="outlined" 
                            onClick={props.addPerson}>
                            Adicionar
                        </Button>   
                    )}   
                    {props.editing && (
                        <>
                            <Button 
                                size="large" 
                                variant="outlined" 
                                onClick={props.cancelEdit}>
                                Cancelar
                            </Button>   
                            <Button 
                                size="large" 
                                variant="outlined" 
                                onClick={props.editPerson}>
                                Salvar
                            </Button> 
                        </>
                        
                    )}             
                </Grid>
            </Grid>
        </>
        
    );
}    
export default CreatePerson;
    