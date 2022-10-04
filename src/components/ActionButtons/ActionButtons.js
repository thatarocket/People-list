import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ActionButtons = (props) => {
   
    return (
        <>
            <Button 
                variant="outlined" 
                startIcon={<DeleteIcon />}
                onClick={()=>props.handleDelete(props.row)}
            >
                Delete
            </Button>
            <Button 
                variant="outlined" 
                startIcon={<EditIcon/>}
                onClick={()=>props.handleEdit(props.row)}
            >
                Editar
            </Button>
        </>
   );
}

export default ActionButtons;