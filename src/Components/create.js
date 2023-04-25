import { useDispatch } from "react-redux";
import {actionCreators} from "./state";
import {useState} from "react";
// import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { addItem } from '../store/actions';

const Create = () => {

    const dispatch = useDispatch();
    
    
    const[id,setId] = useState('');
    const[name,setName] = useState('');
    const[mobile,setMobile] = useState('');

    const history = useHistory();

    function Submit(e){
        e.preventDefault();
        const newIntern = {
            id:id,
            name:name,
            mobile:mobile
        };

        dispatch(actionCreators.addItem(newIntern));
        console.log(newIntern);
        // history.push('/Home');
    }

    return(
        <div>
        <h1>ADD NEW INTERN</h1>
        <form className="formcontainer">
            <input type="text" name="id" placeholder="Enter the id" onChange={e=>setId(e.target.value)}/>
            <input type="text" name="name" placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>
            <input type="numeric" name="mobile" placeholder="Enter mobile number" onChange={e=>setMobile(e.target.value)}/>
            <button onClick={Submit}>Add</button>
            {/* <button><Link to="/Home">Back</Link></button> */}
        </form>
        </div>
    );
}

export default Create;