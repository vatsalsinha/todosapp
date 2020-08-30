import React, {useState, useEffect} from "react";
import axios from 'axios';


export default function TodoView(){
    const [data, setNewData] = useState([]);
    const [det, setDet] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8000/api/todos/', {
            headers: {
                'accept': 'application/json' 
            }
        }).then(resp => {
            console.log(resp)
            setNewData(resp.data)
            console.log(resp.data[0])
        })
    }, [])
    const getData = () =>{
        axios.get('http://localhost:8000/api/todos/', {
            headers: {
                'accept': 'application/json' 
            }
        }).then(resp => {
            console.log(resp)
            setNewData(resp.data)
            console.log(resp.data[0])
        })
    }
    const onFormSubmit = () => {
        var item = {'detail': det}
        axios.post('http://localhost:8000/api/todos/', item).then(res => getData())
        setDet(" ")
    }
    function renderData(){
        return(<div>
        {data.map(d => {
            return (
                <div className = 'd-flex'> 
                <ul className = 'list-group'>
                <li className= 'list-group-item' key = {d.id}>
                    {d.detail}
                </li>
                </ul>
                </div>
            )
        })}
        </div>) 
    }
    
    return  <div className = 'container'>
            <h1 className = 'd-flex'>Todos</h1>   
                <br />
                <div className = 'form-group'>
                <input className= 'form-control' value = {det} onChange={e =>setDet(e.target.value)} placeholder = "type your todos here"/>
                </div>
                <button className = 'btn btn-primary' onClick = {onFormSubmit}>Submit</button>
                <hr/>
                <h5>Available todos:</h5>
                {renderData()}
            </div>
}