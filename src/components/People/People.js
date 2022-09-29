import './People.css';

function People(props) {
    
    return (
        <tr className="people">
            <td>
                {props.name}
            </td>   
            <td>
                {props.age}
            </td>         
        </tr>
    );
}    
export default People;
    