import { DataGrid } from '@mui/x-data-grid';
import './People.css';

function People(props) {
    
    props.passRow()
    return (
        <DataGrid
            rows={props.row}
            columns={props.column}
            pageSize={4}
            rowsPerPageOptions={[10]}
        />        
    );
}    
export default People;
    