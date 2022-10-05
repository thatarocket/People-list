import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ActionButtons from '../ActionButtons/ActionButtons';

function TablePerson(props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Nome', width: 150
        },
        { field: 'age', headerName: 'Idade',
          type: 'number', width: 110
        },
        { field: 'action', headerName: 'Ação', width: 250,
            renderCell: ({row}) => {
                return (() => ActionButtons(
                    {
                        row,
                        handleEdit:props.handleEdit,
                        handleDelete:props.handleDelete,
                        handleOpen:props.handleOpen,
                        handleClose:props.handleClose,                        
                        open:props.open
                    }
                ))();
            }
        },
    ];    

    return(
        <>  
            <br></br>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.rows}
                    columns={columns}
                />
            </Box>            
        </>
        
    );

}

export default TablePerson;