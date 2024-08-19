import {useEffect, useState } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";

const AGENT_DEFAULT = {
    firstName : '',
    middleName : '',
    lastName : '',
    dob: '',
    heightInInches: 0
}

function AgentForm() {
    //State function
    const [agent, setAgent] = useState(AGENT_DEFAULT);
    const [errors, setErrors] = useState([]);
    const url = "http://localhost:8080/api/agent";
    const navigate = useNavigate();
    //
    const { id } = useParams();

        // useEffect
        useEffect(() =>{
            if(id){
                fetch(`${url}/${id}`)
                .then(response =>{
                    if(response.status === 200){
                        return response.json();
                    }else{
                        return Promise.reject(`Unexpected Status Code ${response.status}`);
                    }
                })
                .then(data =>{
                    setAgent(data)
                })
                .catch(console.log);
            }else{
                setAgent(AGENT_DEFAULT);
            }
        },[id]) // calls useEffect everytime the ID changes.

        //handle submit of Form
        const handleSubmit = (event) => {
            //prevents form from refreshing
            event.preventDefault();
            if(id) {
                updateAgent();
            } else {
                addAgent();
            }
        }

        const handleChange = (event) => {
            //create new Agent by copying agent
            const newAgent = {...agent};
            //sets value based on name of event target
            newAgent[event.target.name] = event.target.value;
            //sets state agent to newAgent
            setAgent(newAgent);
        }



        const addAgent = () => {
            //initialize post function
            const init ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                    //take current state agent and stringify it
                    body: JSON.stringify(agent)
                };
            fetch(url,init)
            .then(response => {
                if(response.status === 201 || response.status === 400){
                    return response.json()
                } else {
                    return Promise.reject(`Unexpected Status Code: ${response.status}`)
                }
            })
            .then(data => {
                if(data.id){ 
                //navigates back to home page being the Agent List
                    navigate('/');
                } else { // unhappy path
                        setErrors(data);
                }
            })
            .catch(console.log)
        }

        const updateAgent = () => {
            //set Agent Id from the URL parameter
            agent.id = id;

            const init = {
                method : 'PUT',
                headers : {
                    'Content-Type': 'application/json'},
                    body: JSON.stringify(agent)
                };
            fetch(`${url}/${id}`, init)
            .then(response => {
                if (response.status === 204) {
                    return null;
                } else if (response.status === 400) {
                    return response.json();
                } else {
                    return Promise.reject(`Unexpected Status Code: ${response.status}`);
                }
            })
            .then(data => {
                //if there is no data yay!
                if(!data) {//happy
                    navigate('/');
                } else {
                    //unhappy
                    setErrors(data);
                }
            })
            .catch(console.log);
        }

return (<>
<section className="container">
    <h2>{id > 0 ? 'Update an Agent' : 'Add an Agent'}</h2>
    {errors.length > 0 && (
        <div className="alert alert-danger">
            <p>The following errors were found</p>
            <ul>{errors.map( error => (
                <li key={error}>{error}</li>
            ))}</ul>
        </div>
    )}
    <form onSubmit={handleSubmit}>
    <fieldset className="form-group">
        <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-control"
                value={agent.firstName}
                onChange={handleChange}/>
    </fieldset>
    <fieldset className="form-group">
        <label htmlFor="middleName">Middle Name</label>
            <input
                id="middleName"
                name="middleName"
                type="text"
                className="form-control"
                value={agent.middleName}
                onChange={handleChange}/>
    </fieldset>
    <fieldset className="form-group">
        <label htmlFor="lastName">Last Name </label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                className="form-control"
                value={agent.lastName}
                onChange={handleChange}/>
    </fieldset>
    <fieldset className="form-group">
        <label htmlFor="dob">Date of Birth </label>
            <input 
            id="dob"
            name="dob"
            type="date"
            className="form-control"
            value={agent.dob}
            onChange={handleChange}/>
    </fieldset>
    <fieldset className="form-group">
        <label htmlFor="heightInInches">Height (in Inches): </label>
        <input
            id="heightInInches"
            name="heightInInches"
            type="number"
            className="form-control"
            value={agent.heightInInches}
            onChange={handleChange} />
    </fieldset>
        <div className="mt-4">
        <button type="submit" className="btn btn-outline-success">{id > 0 ? 'Update an Agent' : 'Add an Agent'}</button>
        <Link className="btn btn-outline-danger ml-4"to={'/'}>Cancel</Link>
        </div>
    </form>
</section>
</>);
        
}

export default AgentForm;