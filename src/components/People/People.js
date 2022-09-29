import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import './People.css';

function People(props) {
    
    return (
        <TableRow>
            <TableCell>
                {props.name}
            </TableCell>
            <TableCell>
                {props.age}
            </TableCell>
        </TableRow>
        
    );
}    
export default People;
    