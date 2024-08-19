import {useEffect, useState } from "react";
import {Link} from "react-router-dom";

function AgentList() {
    const url = "http://localhost:8080/api/agent";
    const [agents, setAgents] = useState([]);


// useEffect
useEffect(() => {
    fetch(url)
    .then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            return Promise.reject(`Unexpected Status Code: ${response.status}`);
        }
    })
    .then(data => setAgents(data))
    .catch(console.log);
}, []); // render once component loads

//handle Delete
const handleDeleteAgent = (delagentId) => {
    const agenthand = agents.find(agent => agent.agentId === delagentId);
    if(window.confirm(`Delete Agent: ${agenthand.firstName} ${agenthand.middleName} ${agenthand.lastName}?`)) {
        const init = {
            method: 'DELETE'
        };
        fetch(`${url}/${delagentId}`, init)
        .then(response => {
            if(response.status === 204) {
                const newAgents = agents.filter(a => a.id !== delagentId)
                setAgents(newAgents);
            } else {
                return Promise.reject(`Unexpected Status Code: ${response.status}`);
            }
        })
        .catch(console.log);
    }
}

const convertHeight = (height) => {
    var feet = Math.trunc(height/12);
    var inches = height%12;
    return `Height: ${feet}" ${inches}'`

}

const converttoAge = (birthday) => {
    if (birthday === null) {
        return 'Age: ???  '
    }
    var now = new Date(Date.now());
    var birth = new Date(Date.parse(birthday));
    var diff = (now.getTime() - birth.getTime()) / 1000;
    diff = diff/(60 * 60 * 24); 
    return `Age: ${Math.abs(Math.round(diff/365.25))}  `;

}

return(<>
         <section className="container">
         <h2 className="mb-4">Agents</h2> 
         <Link className="btn btn-outline-secondary mb-4" to={'/agents/add'}>Add An Agent</Link>
         <section className="row">
         {agents.map(ag =>
            <div className="col-sm-4">
            <div className="card" id={ag.id}>
                <div className="card-body">
                    <span>Full Name: {ag.firstName} {ag.middleName} {ag.lastName}</span><br/>
                    <span>Date of Birth: {ag.dob}</span><br/>
                    {converttoAge(ag.dob)}
                    {convertHeight(ag.heightInInches)}
                    <br/>
                    <span>
                        <Link className="btn btn-warning" to={`/agents/edit/${ag.agentId}`}>Edit</Link>
                        <button className="btn btn-danger" onClick={() => handleDeleteAgent(ag.agentId)}>Delete</button>
                    </span>
                </div>
            </div>
            </div>
         )}
        </section>

            </section>
</>);
}

export default AgentList;
