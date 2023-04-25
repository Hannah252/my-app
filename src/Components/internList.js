import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
// import { addItem } from '../store/actions';


const InternList = () => {
    const dispatch= useDispatch();
    function addRecord(history){
        history.push('/Create');
    }
    const {deleteItem, editItem} = bindActionCreators(actionCreators,dispatch)
    const data = useSelector(state => state.item)
    return (
        
        <div>
            <h1>INTERNS</h1>
            <button onClick={addRecord}>Add New Intern</button>
            <table>
                <thead>
                    <td>id</td>
                    <td>Name</td>
                    <td>Mobile</td>
                </thead>
                <tbody>
                {data.map(item =>{  return( <tr> 
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td><button onClick={() => {
                        
                        deleteItem(item.id);

                    }}>Delete</button></td>
                    <button onClick={() => {
                      editItem(item.id, item.name) }}>Edit</button>
                    </tr>
                );
                }
                )}
                    </tbody>
            </table>
        </div>
        
     );
}
 
export default InternList;